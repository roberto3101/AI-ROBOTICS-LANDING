import { s as sequence, d as defineMiddleware } from './chunks/index_Bg2o4o9i.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_381crxOg.mjs';
import 'piccolore';
import './chunks/astro/server_BQmCE8EJ.mjs';
import 'clsx';

const cabecerasSeguridad = defineMiddleware(async (context, next) => {
  const respuesta = await next();
  const tipo = respuesta.headers.get("content-type") ?? "";
  const esHtml = tipo.includes("text/html");
  respuesta.headers.set("X-Content-Type-Options", "nosniff");
  respuesta.headers.set("X-Frame-Options", "DENY");
  respuesta.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  respuesta.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()"
  );
  respuesta.headers.set("X-DNS-Prefetch-Control", "on");
  respuesta.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  {
    respuesta.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  }
  if (esHtml) {
    const csp = [
      "default-src 'self'",
      // Permitimos scripts inline por los snippets de Astro + Turnstile.
      // En entorno dev Vite necesita 'unsafe-eval'.
      `script-src 'self' 'unsafe-inline' ${""} https://challenges.cloudflare.com`,
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
      "upgrade-insecure-requests"
    ].join("; ");
    respuesta.headers.set("Content-Security-Policy", csp);
  }
  return respuesta;
});
const onRequest$1 = sequence(cabecerasSeguridad);

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
