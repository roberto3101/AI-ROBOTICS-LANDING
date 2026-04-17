# AI Robotics — Sitio institucional

Sitio web institucional de **AI Robotics S.A.C.**, la división de innovación tecnológica de [Codeplex](https://codeplex.com.pe). Construido con [Astro](https://astro.build) + Tailwind CSS v4 — multilenguaje (ES/EN), SSR con Node.js, contenido centralizado en JSON, validación con Cloudflare Turnstile y SEO completo.

> Construimos la próxima generación de sistemas de defensa autónoma — hecho en Perú.

![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A520-339933?logo=nodedotjs&logoColor=white)
![License](https://img.shields.io/badge/licencia-privada-red)

---

## Requisitos

- Node.js ≥ 20
- npm (o pnpm / yarn equivalentes)

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores:

```env
TURNSTILE_SECRET_KEY=          # secret key de tu propiedad en Cloudflare Turnstile
TURNSTILE_ENABLED=true         # false para deshabilitar la verificación en desarrollo
PUBLIC_TURNSTILE_SITE_KEY=     # site key pública del widget Turnstile
PUBLIC_SITE_URL=https://airobotics.com.pe
PUBLIC_CONTACTO_EMAIL=contacto@airobotics.com.pe
PUBLIC_CONTACTO_TELEFONO=+51 999 999 999
```

> En desarrollo puedes usar la clave de pruebas `1x00000000000000000000AA` como `PUBLIC_TURNSTILE_SITE_KEY` y setear `TURNSTILE_ENABLED=false` para saltarte la verificación.

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor local en http://localhost:4321
npm run build      # build de producción (modo Node SSR)
npm run preview    # previsualizar el build
```

## Estructura

```
.
├── astro.config.mjs
├── package.json
├── public/
│   ├── banderas/                 # banderas SVG ES/EN para selector de idioma
│   ├── fuentes/                  # fuentes locales (DM Sans, IBM Plex Mono, Inter)
│   ├── iconos/                   # iconos SVG reutilizables
│   ├── imagenes/                 # imágenes (logos, equipo, productos, hero, navegación)
│   ├── videos/                   # videos de hero y de productos (.mp4)
│   ├── favicon.svg / .png
│   └── robots.txt
└── src/
    ├── componentes/
    │   ├── carreras/             # Beneficios, Principios, GaleriaVida
    │   ├── contacto/             # Formulario (con Turnstile), InfoContacto
    │   ├── inicio/               # HeroPrincipal, Manifiesto, ProductosDestacados, ComoFunciona, CasosDeUso, CtaCierre
    │   ├── navegacion/           # BarraNavegacion, PieDePagina, Logo, SelectorIdioma
    │   ├── nosotros/             # HeroNosotros, MisionVision, Valores, Historia, Equipo
    │   ├── prensa/               # ProyectoEnCurso
    │   ├── productos/            # HeroProducto, SeccionProducto, Especificaciones
    │   ├── seo/                  # EtiquetasPagina (meta + hreflang + JSON-LD)
    │   └── ui/                   # Boton, Eyecatch, EncabezadoSeccion, Estadisticas, Marquee, Pasos, Seccion, TarjetaProducto
    ├── datos/
    │   ├── es/                   # contenido en español (un JSON por dominio)
    │   │   ├── empresa.json
    │   │   ├── navegacion.json
    │   │   ├── footer.json
    │   │   ├── inicio.json
    │   │   ├── productos.json
    │   │   ├── nosotros.json
    │   │   ├── equipo.json
    │   │   ├── carreras.json
    │   │   ├── prensa.json
    │   │   ├── contacto.json
    │   │   ├── legal.json
    │   │   └── seo.json
    │   └── en/                   # contenido en inglés (mismas llaves que en es/)
    ├── estilos/
    │   └── global.css            # Tailwind v4 + tokens de color/tipografía
    ├── helpers/
    │   ├── idiomas.ts            # i18n: cargar JSON, traducir rutas, hreflang
    │   ├── seo.ts                # construcción de meta + JSON-LD
    │   └── turnstile.ts          # verificación server-side de Cloudflare Turnstile
    ├── idiomas/
    │   ├── es.json               # textos compartidos de UI (labels, placeholders)
    │   └── en.json
    ├── layout/
    │   └── Principal.astro       # layout principal (head + nav + footer)
    └── pages/
        ├── index.astro           # redirige a /es/ o /en/ según Accept-Language
        ├── 404.astro
        ├── api/
        │   └── contacto.ts       # endpoint POST con verificación Turnstile
        ├── es/
        │   ├── index.astro
        │   ├── nosotros.astro
        │   ├── equipo.astro
        │   ├── carreras.astro
        │   ├── prensa.astro
        │   ├── contacto.astro
        │   ├── privacidad.astro
        │   ├── terminos.astro
        │   ├── libro-reclamaciones.astro
        │   └── productos/
        │       ├── index.astro
        │       └── [slug].astro
        └── en/
            ├── index.astro
            ├── about.astro
            ├── team.astro
            ├── careers.astro
            ├── press.astro
            ├── contact.astro
            ├── privacy.astro
            ├── terms.astro
            ├── claims-book.astro
            └── products/
                ├── index.astro
                └── [slug].astro
```

## Internacionalización

- Idioma por defecto: **español** (`es`).
- Idioma alternativo: **inglés** (`en`).
- La selección persiste en la URL: `/es/...` o `/en/...`. La raíz `/` redirige según el header `Accept-Language` del navegador.
- Los textos están centralizados en `src/datos/<idioma>/` (un JSON por dominio) y `src/idiomas/<idioma>.json` (UI compartida).
- El selector de idioma cambia entre rutas equivalentes usando un mapa definido en `src/helpers/idiomas.ts` (por ejemplo, `/es/nosotros` ↔ `/en/about`).
- Cada `<head>` incluye automáticamente etiquetas `hreflang` correctas (incluyendo `x-default`).

## Datos

Toda la copia de la web se carga desde JSON. Para cambiar contenido:

1. Edita el archivo en `src/datos/es/<archivo>.json` (y su par en `en/`).
2. Guarda el archivo. En desarrollo, Astro recarga automáticamente.
3. Las llaves entre `es/` y `en/` son simétricas — mantenlas alineadas.

## SEO

- `<EtiquetasPagina />` genera `title`, `description`, canonical, `hreflang`, OpenGraph y Twitter Cards desde un único objeto.
- JSON-LD `Organization` se inyecta automáticamente en cada página vía el layout principal.
- Las páginas de productos generan adicionalmente JSON-LD `Product`.
- Sitemap multi-idioma generado por `@astrojs/sitemap`.
- `robots.txt` y `.well-known/security.txt` ya están en `public/`.

## Formulario de contacto + Turnstile

- El widget se renderiza con `PUBLIC_TURNSTILE_SITE_KEY`.
- Al enviar el formulario, el endpoint `POST /api/contacto` (`src/pages/api/contacto.ts`) valida campos, verifica el token contra `https://challenges.cloudflare.com/turnstile/v0/siteverify` y registra la solicitud por consola.
- **No envía email aún** — punto de extensión claramente marcado para integrar Resend, SMTP o el proveedor que se elija. Buscar `// TODO: integrar proveedor de email` en `src/pages/api/contacto.ts`.

## Despliegue

El proyecto está configurado con el adaptador `@astrojs/node` en modo `standalone`. El comando `npm run build` produce un servidor Node listo para correr con `node ./dist/server/entry.mjs`.

Para alojarlo en Vercel/Netlify/Cloudflare se debe cambiar el adaptador en `astro.config.mjs` (consultar la documentación de Astro).

## Créditos de imágenes

Las fotografías del sitio provienen de [Pexels](https://pexels.com) (licencia libre de regalías) y [Wikimedia Commons](https://commons.wikimedia.org) (dominio público). Los videos de producto son propios de AI Robotics.
