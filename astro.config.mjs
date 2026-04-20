// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://airobotics.com.pe',
  output: 'server',
  adapter: vercel(),

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-PE', en: 'en-US' },
      },
    }),
  ],

  vite: {
      server: {
      host: '0.0.0.0',
      allowedHosts: ['.tunnelmole.net']
    },
    plugins: [tailwindcss()],
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});