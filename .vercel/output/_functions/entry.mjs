import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_ZyeVfy42.mjs';
import { manifest } from './manifest_BjwrDqx4.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contacto.astro.mjs');
const _page3 = () => import('./pages/en/about.astro.mjs');
const _page4 = () => import('./pages/en/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/en/blog.astro.mjs');
const _page6 = () => import('./pages/en/cases/_slug_.astro.mjs');
const _page7 = () => import('./pages/en/claims-book.astro.mjs');
const _page8 = () => import('./pages/en/contact.astro.mjs');
const _page9 = () => import('./pages/en/press.astro.mjs');
const _page10 = () => import('./pages/en/privacy.astro.mjs');
const _page11 = () => import('./pages/en/products/_slug_.astro.mjs');
const _page12 = () => import('./pages/en/products.astro.mjs');
const _page13 = () => import('./pages/en/team.astro.mjs');
const _page14 = () => import('./pages/en/terms.astro.mjs');
const _page15 = () => import('./pages/en.astro.mjs');
const _page16 = () => import('./pages/es/blog/_slug_.astro.mjs');
const _page17 = () => import('./pages/es/blog.astro.mjs');
const _page18 = () => import('./pages/es/casos/_slug_.astro.mjs');
const _page19 = () => import('./pages/es/contacto.astro.mjs');
const _page20 = () => import('./pages/es/equipo.astro.mjs');
const _page21 = () => import('./pages/es/libro-reclamaciones.astro.mjs');
const _page22 = () => import('./pages/es/nosotros.astro.mjs');
const _page23 = () => import('./pages/es/prensa.astro.mjs');
const _page24 = () => import('./pages/es/privacidad.astro.mjs');
const _page25 = () => import('./pages/es/productos/_slug_.astro.mjs');
const _page26 = () => import('./pages/es/productos.astro.mjs');
const _page27 = () => import('./pages/es/terminos.astro.mjs');
const _page28 = () => import('./pages/es.astro.mjs');
const _page29 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contacto.ts", _page2],
    ["src/pages/en/about.astro", _page3],
    ["src/pages/en/blog/[slug].astro", _page4],
    ["src/pages/en/blog.astro", _page5],
    ["src/pages/en/cases/[slug].astro", _page6],
    ["src/pages/en/claims-book.astro", _page7],
    ["src/pages/en/contact.astro", _page8],
    ["src/pages/en/press.astro", _page9],
    ["src/pages/en/privacy.astro", _page10],
    ["src/pages/en/products/[slug].astro", _page11],
    ["src/pages/en/products/index.astro", _page12],
    ["src/pages/en/team.astro", _page13],
    ["src/pages/en/terms.astro", _page14],
    ["src/pages/en/index.astro", _page15],
    ["src/pages/es/blog/[slug].astro", _page16],
    ["src/pages/es/blog.astro", _page17],
    ["src/pages/es/casos/[slug].astro", _page18],
    ["src/pages/es/contacto.astro", _page19],
    ["src/pages/es/equipo.astro", _page20],
    ["src/pages/es/libro-reclamaciones.astro", _page21],
    ["src/pages/es/nosotros.astro", _page22],
    ["src/pages/es/prensa.astro", _page23],
    ["src/pages/es/privacidad.astro", _page24],
    ["src/pages/es/productos/[slug].astro", _page25],
    ["src/pages/es/productos/index.astro", _page26],
    ["src/pages/es/terminos.astro", _page27],
    ["src/pages/es/index.astro", _page28],
    ["src/pages/index.astro", _page29]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "864a0bb8-ca25-428e-a93a-f9b3ae420ee7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
