import type { APIRoute } from 'astro';
import { verificarTurnstile } from '@helpers/turnstile';

export const prerender = false;

interface CuerpoContacto {
  nombre?: string;
  email?: string;
  telefono?: string;
  empresa?: string;
  tipoConsulta?: string;
  mensaje?: string;
  aceptoPrivacidad?: string;
  website?: string;        // honeypot
  _ts?: string;            // timestamp inicio render
  'cf-turnstile-response'?: string;
}

function obtenerIp(request: Request): string {
  const headers = request.headers;
  return (
    headers.get('cf-connecting-ip') ??
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headers.get('x-real-ip') ??
    'sin-ip'
  );
}

// ---------- Rate limit en memoria (bucket por IP) ----------
// Límite: 5 envíos / 10 min por IP; 20 / hora.
interface Bucket { corta: number; cortaReset: number; larga: number; largaReset: number; }
const buckets = new Map<string, Bucket>();
const LIMITE_CORTO = 5;
const VENTANA_CORTA = 10 * 60 * 1000;
const LIMITE_LARGO = 20;
const VENTANA_LARGA = 60 * 60 * 1000;

function verificarRateLimit(ip: string): { ok: boolean; retryAfter?: number } {
  const ahora = Date.now();
  let b = buckets.get(ip);
  if (!b) {
    b = { corta: 0, cortaReset: ahora + VENTANA_CORTA, larga: 0, largaReset: ahora + VENTANA_LARGA };
    buckets.set(ip, b);
  }
  if (ahora > b.cortaReset) { b.corta = 0; b.cortaReset = ahora + VENTANA_CORTA; }
  if (ahora > b.largaReset) { b.larga = 0; b.largaReset = ahora + VENTANA_LARGA; }
  b.corta += 1;
  b.larga += 1;
  if (b.corta > LIMITE_CORTO) return { ok: false, retryAfter: Math.ceil((b.cortaReset - ahora) / 1000) };
  if (b.larga > LIMITE_LARGO) return { ok: false, retryAfter: Math.ceil((b.largaReset - ahora) / 1000) };
  return { ok: true };
}

// Limpieza periódica para no crecer sin tope
setInterval(() => {
  const ahora = Date.now();
  for (const [ip, b] of buckets.entries()) {
    if (ahora > b.cortaReset && ahora > b.largaReset) buckets.delete(ip);
  }
}, 15 * 60 * 1000);

function mismoOrigen(request: Request): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  const host = request.headers.get('host');
  if (!host) return false;
  const permitidos = new Set<string>([host]);
  // Permite también el site URL público si está configurado
  const siteUrl = import.meta.env.PUBLIC_SITE_URL as string | undefined;
  if (siteUrl) {
    try { permitidos.add(new URL(siteUrl).host); } catch { /* ignore */ }
  }
  const candidatos = [origin, referer].filter(Boolean) as string[];
  if (candidatos.length === 0) return false;
  return candidatos.every((u) => {
    try { return permitidos.has(new URL(u).host); } catch { return false; }
  });
}

export const POST: APIRoute = async ({ request }) => {
  const ip = obtenerIp(request);

  // 1. Origen mismo-sitio (bloquea envíos desde otros dominios)
  if (!mismoOrigen(request)) {
    return new Response(JSON.stringify({ ok: false, mensaje: 'Origen no permitido.' }), {
      status: 403,
      headers: { 'content-type': 'application/json' },
    });
  }

  // 2. Rate limit por IP
  const rl = verificarRateLimit(ip);
  if (!rl.ok) {
    return new Response(
      JSON.stringify({ ok: false, mensaje: 'Demasiados intentos. Intenta más tarde.' }),
      {
        status: 429,
        headers: {
          'content-type': 'application/json',
          'retry-after': String(rl.retryAfter ?? 600),
        },
      },
    );
  }

  // 3. Tamaño razonable de la petición (evita abuso)
  const largo = Number(request.headers.get('content-length') ?? 0);
  if (largo && largo > 32 * 1024) {
    return new Response(JSON.stringify({ ok: false, mensaje: 'Payload demasiado grande.' }), {
      status: 413,
      headers: { 'content-type': 'application/json' },
    });
  }

  let cuerpo: CuerpoContacto = {};

  try {
    const contentType = request.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      cuerpo = (await request.json()) as CuerpoContacto;
    } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      const data = await request.formData();
      data.forEach((valor, clave) => {
        (cuerpo as Record<string, string>)[clave] = String(valor);
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, mensaje: 'No se pudo leer la solicitud.' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  // ============================================================
  // Validaciones estrictas server-side (defensa en profundidad)
  // ============================================================

  // 4. Honeypot: campo invisible que un usuario real nunca rellena
  if (cuerpo.website && String(cuerpo.website).trim() !== '') {
    console.warn('[contacto] honeypot disparado ip=', ip);
    // Respuesta "exitosa" falsa para no informar al bot
    return new Response(JSON.stringify({ ok: true, mensaje: 'Recibido.' }), {
      status: 200, headers: { 'content-type': 'application/json' },
    });
  }

  // 5. Tiempo mínimo: formularios enviados en < 2 s suelen ser bots
  const ts = Number(cuerpo._ts ?? 0);
  if (ts > 0) {
    const transcurrido = Date.now() - ts;
    if (transcurrido < 2000) {
      console.warn('[contacto] envío demasiado rápido', transcurrido, 'ms ip=', ip);
      return new Response(
        JSON.stringify({ ok: false, mensaje: 'Envío demasiado rápido. Intenta nuevamente.' }),
        { status: 400, headers: { 'content-type': 'application/json' } },
      );
    }
  }

  const errores: Record<string, string> = {};

  const limpiar = (v: unknown, max: number): string =>
    String(v ?? '').replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, max);

  const nombre = limpiar(cuerpo.nombre, 120);
  const email = limpiar(cuerpo.email, 254).toLowerCase();
  const telefono = limpiar(cuerpo.telefono, 32);
  const empresa = limpiar(cuerpo.empresa, 160);
  const tipoConsulta = limpiar(cuerpo.tipoConsulta, 40);
  const mensaje = limpiar(cuerpo.mensaje, 4000);
  const acepto = limpiar(cuerpo.aceptoPrivacidad, 10);

  // nombre: letras, espacios, ' - . y acentos; 2-120
  if (nombre.length < 2) errores.nombre = 'El nombre es obligatorio (mínimo 2 caracteres).';
  else if (nombre.length > 120) errores.nombre = 'Nombre demasiado largo.';
  else if (!/^[\p{L}\p{M}' .\-]+$/u.test(nombre)) errores.nombre = 'El nombre contiene caracteres no válidos.';

  // email: RFC-ish + longitud
  if (!email) errores.email = 'El correo es obligatorio.';
  else if (email.length > 254) errores.email = 'Correo demasiado largo.';
  else if (!/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i.test(email)) errores.email = 'Correo con formato inválido.';

  // teléfono opcional: solo dígitos, +, espacios, guiones, paréntesis
  if (telefono) {
    const soloDigitos = telefono.replace(/\D/g, '');
    if (soloDigitos.length < 6 || soloDigitos.length > 20) errores.telefono = 'El teléfono debe tener entre 6 y 20 dígitos.';
    else if (!/^[+\d\s\-().]+$/.test(telefono)) errores.telefono = 'Teléfono con caracteres no válidos.';
  }

  if (empresa.length > 160) errores.empresa = 'Nombre de empresa demasiado largo.';

  const tiposPermitidos = ['demo', 'ventas', 'prensa', 'alianza', 'trabajo', 'soporte', 'general', 'otro', ''];
  if (tipoConsulta && !tiposPermitidos.includes(tipoConsulta)) errores.tipoConsulta = 'Tipo de consulta no permitido.';

  if (mensaje.length < 10) errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
  else if (mensaje.length > 4000) errores.mensaje = 'Mensaje demasiado largo (máx 4000).';

  if (!['on', 'true', '1', 'si', 'sí'].includes(acepto.toLowerCase())) {
    errores.aceptoPrivacidad = 'Debes aceptar la política de privacidad.';
  }

  // Heurística anti-spam: URLs múltiples en mensaje
  const urls = mensaje.match(/https?:\/\/|www\./gi) ?? [];
  if (urls.length > 3) errores.mensaje = 'Mensaje marcado como posible spam (demasiados enlaces).';

  if (Object.keys(errores).length > 0) {
    return new Response(
      JSON.stringify({ ok: false, mensaje: 'Hay errores en el formulario.', errores }),
      { status: 400, headers: { 'content-type': 'application/json' } },
    );
  }

  // Reemplaza el cuerpo con los valores ya saneados
  cuerpo = { nombre, email, telefono, empresa, tipoConsulta, mensaje, aceptoPrivacidad: acepto, 'cf-turnstile-response': cuerpo['cf-turnstile-response'] };

  // Verificación de Turnstile
  const resultadoCaptcha = await verificarTurnstile(cuerpo['cf-turnstile-response'], ip);
  if (!resultadoCaptcha.exito) {
    console.warn('Turnstile rechazado:', resultadoCaptcha.errores);
    return new Response(
      JSON.stringify({
        ok: false,
        mensaje: 'No se pudo verificar el CAPTCHA. Por favor recarga la página y vuelve a intentar.',
        detalleCaptcha: resultadoCaptcha.errores,
      }),
      { status: 403, headers: { 'content-type': 'application/json' } },
    );
  }

  // En este punto el envío sería procesado.
  // El usuario solicitó: "Solo validar Turnstile, sin enviar aún".
  // TODO: integrar proveedor de email (Resend / SMTP / etc.).
  console.info('[contacto] Mensaje recibido y CAPTCHA validado:', {
    nombre: cuerpo.nombre,
    email: cuerpo.email,
    tipoConsulta: cuerpo.tipoConsulta,
    ip,
  });

  return new Response(
    JSON.stringify({
      ok: true,
      mensaje: 'Mensaje recibido. Pronto nos contactaremos contigo.',
    }),
    { status: 200, headers: { 'content-type': 'application/json' } },
  );
};

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ ok: false, mensaje: 'Use POST.' }), {
    status: 405,
    headers: { 'content-type': 'application/json', allow: 'POST' },
  });
