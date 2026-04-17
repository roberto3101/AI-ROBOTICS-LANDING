/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly TURNSTILE_SECRET_KEY: string;
  readonly TURNSTILE_ENABLED: string;
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_CONTACTO_EMAIL: string;
  readonly PUBLIC_CONTACTO_TELEFONO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
