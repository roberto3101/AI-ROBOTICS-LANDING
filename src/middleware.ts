import { defineMiddleware, sequence } from 'astro:middleware';

// Headers de seguridad aplicados a todas las respuestas HTML.
// CSP permite: self, imágenes/videos locales, Turnstile (Cloudflare),
// Google Fonts si se usan, y nada inline ejecutable salvo lo estrictamente necesario.
const cabecerasSeguridad = defineMiddleware(async (context, next) => {
  const respuesta = await next();

  // Solo aplicar a respuestas HTML (no a assets estáticos ni a JSON del API)
  const tipo = respuesta.headers.get('content-type') ?? '';
  const esHtml = tipo.includes('text/html');

  respuesta.headers.set('X-Content-Type-Options', 'nosniff');
  respuesta.headers.set('X-Frame-Options', 'DENY');
  respuesta.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  respuesta.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  );
  respuesta.headers.set('X-DNS-Prefetch-Control', 'on');
  respuesta.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  // Solo HSTS en producción/HTTPS
  if (import.meta.env.PROD) {
    respuesta.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }

  if (esHtml) {
    const csp = [
      "default-src 'self'",
      // Permitimos scripts inline por los snippets de Astro + Turnstile.
      // En entorno dev Vite necesita 'unsafe-eval'.
      `script-src 'self' 'unsafe-inline' ${import.meta.env.DEV ? "'unsafe-eval'" : ''} https://challenges.cloudflare.com`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https:",
      "media-src 'self' blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://challenges.cloudflare.com",
      "frame-src https://challenges.cloudflare.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join('; ');
    respuesta.headers.set('Content-Security-Policy', csp);
  }

  return respuesta;
});

export const onRequest = sequence(cabecerasSeguridad);
