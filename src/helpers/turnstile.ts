/**
 * Verificación server-side del token de Cloudflare Turnstile.
 * https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */

const ENDPOINT = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export interface ResultadoTurnstile {
  exito: boolean;
  errores?: string[];
  hostname?: string;
  challengeTimestamp?: string;
}

export async function verificarTurnstile(
  token: string | null | undefined,
  ipRemota?: string | null,
): Promise<ResultadoTurnstile> {
  const secret = import.meta.env.TURNSTILE_SECRET_KEY;
  const habilitado = String(import.meta.env.TURNSTILE_ENABLED ?? 'true').toLowerCase() !== 'false';

  if (!habilitado) {
    return { exito: true };
  }

  if (!secret) {
    return { exito: false, errores: ['TURNSTILE_SECRET_KEY no configurada'] };
  }

  if (!token) {
    return { exito: false, errores: ['Falta el token del CAPTCHA'] };
  }

  const cuerpo = new URLSearchParams({ secret, response: token });
  if (ipRemota) cuerpo.set('remoteip', ipRemota);

  try {
    const respuesta = await fetch(ENDPOINT, {
      method: 'POST',
      body: cuerpo,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    });
    if (!respuesta.ok) {
      return { exito: false, errores: [`HTTP ${respuesta.status}`] };
    }
    const json = (await respuesta.json()) as {
      success: boolean;
      'error-codes'?: string[];
      hostname?: string;
      challenge_ts?: string;
    };

    return {
      exito: json.success === true,
      errores: json['error-codes'],
      hostname: json.hostname,
      challengeTimestamp: json.challenge_ts,
    };
  } catch (error) {
    return { exito: false, errores: [error instanceof Error ? error.message : 'Error de red'] };
  }
}
