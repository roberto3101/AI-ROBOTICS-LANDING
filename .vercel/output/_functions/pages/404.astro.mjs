import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import { $ as $$Principal } from '../chunks/Principal_5hvrW5JK.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const idioma = "es";
  return renderTemplate`${renderComponent($$result, "Principal", $$Principal, { "idioma": idioma, "seo": { titulo: "P\xE1gina no encontrada", descripcion: "La p\xE1gina que buscas no existe o fue movida.", noindex: true } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-[60vh] grid place-items-center py-24"> <div class="contenedor text-center max-w-2xl"> <p class="font-mono text-[var(--color-primario)] tracking-widest mb-4">ERROR 404</p> <h1 class="text-5xl md:text-6xl font-semibold leading-tight mb-6">Esta página no existe.</h1> <p class="text-lg text-white/75 mb-10">Es posible que haya sido movida o que el enlace esté roto. Vuelve al inicio o explora nuestros productos.</p> <div class="flex flex-wrap gap-3 justify-center"> <a href="/es/" class="boton boton-primario">Ir al inicio</a> <a href="/es/productos" class="boton boton-secundario">Ver productos</a> </div> </div> </section> ` })}`;
}, "C:/AiRoboticsAstro/src/pages/404.astro", void 0);

const $$file = "C:/AiRoboticsAstro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
