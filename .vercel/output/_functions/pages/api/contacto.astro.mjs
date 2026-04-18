export { renderers } from '../../renderers.mjs';

const ENDPOINT = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
async function verificarTurnstile(token, ipRemota) {
  const secret = "0x4AAAAAAClCAm1pSANGjrXVrpI2nsm02uE";
  const habilitado = String("true").toLowerCase() !== "false";
  if (!habilitado) {
    return { exito: true };
  }
  if (!token) {
    return { exito: false, errores: ["Falta el token del CAPTCHA"] };
  }
  const cuerpo = new URLSearchParams({ secret, response: token });
  if (ipRemota) cuerpo.set("remoteip", ipRemota);
  try {
    const respuesta = await fetch(ENDPOINT, {
      method: "POST",
      body: cuerpo,
      headers: { "content-type": "application/x-www-form-urlencoded" }
    });
    if (!respuesta.ok) {
      return { exito: false, errores: [`HTTP ${respuesta.status}`] };
    }
    const json = await respuesta.json();
    return {
      exito: json.success === true,
      errores: json["error-codes"],
      hostname: json.hostname,
      challengeTimestamp: json.challenge_ts
    };
  } catch (error) {
    return { exito: false, errores: [error instanceof Error ? error.message : "Error de red"] };
  }
}

const prerender = false;
function obtenerIp(request) {
  const headers = request.headers;
  return headers.get("cf-connecting-ip") ?? headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? headers.get("x-real-ip") ?? "sin-ip";
}
const buckets = /* @__PURE__ */ new Map();
const LIMITE_CORTO = 5;
const VENTANA_CORTA = 10 * 60 * 1e3;
const LIMITE_LARGO = 20;
const VENTANA_LARGA = 60 * 60 * 1e3;
function verificarRateLimit(ip) {
  const ahora = Date.now();
  let b = buckets.get(ip);
  if (!b) {
    b = { corta: 0, cortaReset: ahora + VENTANA_CORTA, larga: 0, largaReset: ahora + VENTANA_LARGA };
    buckets.set(ip, b);
  }
  if (ahora > b.cortaReset) {
    b.corta = 0;
    b.cortaReset = ahora + VENTANA_CORTA;
  }
  if (ahora > b.largaReset) {
    b.larga = 0;
    b.largaReset = ahora + VENTANA_LARGA;
  }
  b.corta += 1;
  b.larga += 1;
  if (b.corta > LIMITE_CORTO) return { ok: false, retryAfter: Math.ceil((b.cortaReset - ahora) / 1e3) };
  if (b.larga > LIMITE_LARGO) return { ok: false, retryAfter: Math.ceil((b.largaReset - ahora) / 1e3) };
  return { ok: true };
}
setInterval(() => {
  const ahora = Date.now();
  for (const [ip, b] of buckets.entries()) {
    if (ahora > b.cortaReset && ahora > b.largaReset) buckets.delete(ip);
  }
}, 15 * 60 * 1e3);
function mismoOrigen(request) {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const host = request.headers.get("host");
  if (!host) return false;
  const permitidos = /* @__PURE__ */ new Set([host]);
  const siteUrl = "https://airobotics.com.pe";
  {
    try {
      permitidos.add(new URL(siteUrl).host);
    } catch {
    }
  }
  const candidatos = [origin, referer].filter(Boolean);
  if (candidatos.length === 0) return false;
  return candidatos.every((u) => {
    try {
      return permitidos.has(new URL(u).host);
    } catch {
      return false;
    }
  });
}
const POST = async ({ request }) => {
  const ip = obtenerIp(request);
  if (!mismoOrigen(request)) {
    return new Response(JSON.stringify({ ok: false, mensaje: "Origen no permitido." }), {
      status: 403,
      headers: { "content-type": "application/json" }
    });
  }
  const rl = verificarRateLimit(ip);
  if (!rl.ok) {
    return new Response(
      JSON.stringify({ ok: false, mensaje: "Demasiados intentos. Intenta más tarde." }),
      {
        status: 429,
        headers: {
          "content-type": "application/json",
          "retry-after": String(rl.retryAfter ?? 600)
        }
      }
    );
  }
  const largo = Number(request.headers.get("content-length") ?? 0);
  if (largo && largo > 32 * 1024) {
    return new Response(JSON.stringify({ ok: false, mensaje: "Payload demasiado grande." }), {
      status: 413,
      headers: { "content-type": "application/json" }
    });
  }
  let cuerpo = {};
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      cuerpo = await request.json();
    } else if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      const data = await request.formData();
      data.forEach((valor, clave) => {
        cuerpo[clave] = String(valor);
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, mensaje: "No se pudo leer la solicitud." }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }
  if (cuerpo.website && String(cuerpo.website).trim() !== "") {
    console.warn("[contacto] honeypot disparado ip=", ip);
    return new Response(JSON.stringify({ ok: true, mensaje: "Recibido." }), {
      status: 200,
      headers: { "content-type": "application/json" }
    });
  }
  const ts = Number(cuerpo._ts ?? 0);
  if (ts > 0) {
    const transcurrido = Date.now() - ts;
    if (transcurrido < 2e3) {
      console.warn("[contacto] envío demasiado rápido", transcurrido, "ms ip=", ip);
      return new Response(
        JSON.stringify({ ok: false, mensaje: "Envío demasiado rápido. Intenta nuevamente." }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }
  }
  const errores = {};
  const limpiar = (v, max) => String(v ?? "").replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, max);
  const nombre = limpiar(cuerpo.nombre, 120);
  const email = limpiar(cuerpo.email, 254).toLowerCase();
  const telefono = limpiar(cuerpo.telefono, 32);
  const empresa = limpiar(cuerpo.empresa, 160);
  const tipoConsulta = limpiar(cuerpo.tipoConsulta, 40);
  const mensaje = limpiar(cuerpo.mensaje, 4e3);
  const acepto = limpiar(cuerpo.aceptoPrivacidad, 10);
  if (nombre.length < 2) errores.nombre = "El nombre es obligatorio (mínimo 2 caracteres).";
  else if (nombre.length > 120) errores.nombre = "Nombre demasiado largo.";
  else if (!/^[\p{L}\p{M}' .\-]+$/u.test(nombre)) errores.nombre = "El nombre contiene caracteres no válidos.";
  if (!email) errores.email = "El correo es obligatorio.";
  else if (email.length > 254) errores.email = "Correo demasiado largo.";
  else if (!/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i.test(email)) errores.email = "Correo con formato inválido.";
  if (telefono) {
    const soloDigitos = telefono.replace(/\D/g, "");
    if (soloDigitos.length < 6 || soloDigitos.length > 20) errores.telefono = "El teléfono debe tener entre 6 y 20 dígitos.";
    else if (!/^[+\d\s\-().]+$/.test(telefono)) errores.telefono = "Teléfono con caracteres no válidos.";
  }
  if (empresa.length > 160) errores.empresa = "Nombre de empresa demasiado largo.";
  const tiposPermitidos = ["demo", "ventas", "prensa", "alianza", "trabajo", "soporte", "general", "otro", ""];
  if (tipoConsulta && !tiposPermitidos.includes(tipoConsulta)) errores.tipoConsulta = "Tipo de consulta no permitido.";
  if (mensaje.length < 10) errores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
  else if (mensaje.length > 4e3) errores.mensaje = "Mensaje demasiado largo (máx 4000).";
  if (!["on", "true", "1", "si", "sí"].includes(acepto.toLowerCase())) {
    errores.aceptoPrivacidad = "Debes aceptar la política de privacidad.";
  }
  const urls = mensaje.match(/https?:\/\/|www\./gi) ?? [];
  if (urls.length > 3) errores.mensaje = "Mensaje marcado como posible spam (demasiados enlaces).";
  if (Object.keys(errores).length > 0) {
    return new Response(
      JSON.stringify({ ok: false, mensaje: "Hay errores en el formulario.", errores }),
      { status: 400, headers: { "content-type": "application/json" } }
    );
  }
  cuerpo = { nombre, email, telefono, empresa, tipoConsulta, mensaje, aceptoPrivacidad: acepto, "cf-turnstile-response": cuerpo["cf-turnstile-response"] };
  const resultadoCaptcha = await verificarTurnstile(cuerpo["cf-turnstile-response"], ip);
  if (!resultadoCaptcha.exito) {
    console.warn("Turnstile rechazado:", resultadoCaptcha.errores);
    return new Response(
      JSON.stringify({
        ok: false,
        mensaje: "No se pudo verificar el CAPTCHA. Por favor recarga la página y vuelve a intentar.",
        detalleCaptcha: resultadoCaptcha.errores
      }),
      { status: 403, headers: { "content-type": "application/json" } }
    );
  }
  console.info("[contacto] Mensaje recibido y CAPTCHA validado:", {
    nombre: cuerpo.nombre,
    email: cuerpo.email,
    tipoConsulta: cuerpo.tipoConsulta,
    ip
  });
  return new Response(
    JSON.stringify({
      ok: true,
      mensaje: "Mensaje recibido. Pronto nos contactaremos contigo."
    }),
    { status: 200, headers: { "content-type": "application/json" } }
  );
};
const GET = () => new Response(JSON.stringify({ ok: false, mensaje: "Use POST." }), {
  status: 405,
  headers: { "content-type": "application/json", allow: "POST" }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
