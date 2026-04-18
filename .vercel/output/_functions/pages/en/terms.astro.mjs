import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import { c as cargarDatos, $ as $$Principal } from '../../chunks/Principal_5hvrW5JK.mjs';
export { renderers } from '../../renderers.mjs';

const $$Terms = createComponent(async ($$result, $$props, $$slots) => {
  const idioma = "en";
  const legal = await cargarDatos(idioma, "legal");
  const seo = await cargarDatos(idioma, "seo");
  const datos = legal.terminos;
  return renderTemplate`${renderComponent($$result, "Principal", $$Principal, { "idioma": idioma, "seo": {
    titulo: seo.paginas.terminos.titulo,
    descripcion: seo.paginas.terminos.descripcion
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="bg-[var(--color-carbon)] pt-32 lg:pt-40 pb-[var(--spacing-seccion)]"> <div class="contenedor max-w-3xl"> <p class="font-mono text-xs text-[var(--color-acero-claro)] uppercase tracking-widest mb-4">Last updated: ${datos.ultimaActualizacion}</p> <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">${datos.titulo}</h1> <p class="text-base lg:text-lg text-white/85 leading-relaxed mb-12">${datos.introduccion}</p> <div class="flex flex-col gap-10"> ${datos.secciones.map((s) => renderTemplate`<section> <h2 class="text-xl lg:text-2xl font-semibold mb-3">${s.titulo}</h2> <p class="text-base text-white/80 leading-relaxed">${s.contenido}</p> </section>`)} </div> </div> </article> ` })}`;
}, "C:/AiRoboticsAstro/src/pages/en/terms.astro", void 0);

const $$file = "C:/AiRoboticsAstro/src/pages/en/terms.astro";
const $$url = "/en/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
