import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import { c as cargarDatos, $ as $$Principal } from '../../chunks/Principal_5hvrW5JK.mjs';
import { $ as $$HeroNosotros } from '../../chunks/HeroNosotros_BMMHtmV6.mjs';
import { $ as $$EncabezadoSeccion } from '../../chunks/EncabezadoSeccion_CCtEdkH0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Prensa = createComponent(async ($$result, $$props, $$slots) => {
  const idioma = "es";
  const datos = await cargarDatos(idioma, "prensa");
  const seo = await cargarDatos(idioma, "seo");
  return renderTemplate`${renderComponent($$result, "Principal", $$Principal, { "idioma": idioma, "seo": {
    titulo: seo.paginas.prensa.titulo,
    descripcion: seo.paginas.prensa.descripcion
  } }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroNosotros", $$HeroNosotros, { "etiqueta": datos.hero.etiqueta, "titulo": datos.hero.titulo, "subtitulo": datos.hero.subtitulo, "imagen": "/imagenes/hero/empresa-2.jpg" })} ${maybeRenderHead()}<section id="comunicados" class="bg-[var(--color-carbon)] py-[var(--spacing-seccion)]"> <div class="contenedor"> ${renderComponent($$result2, "EncabezadoSeccion", $$EncabezadoSeccion, { "etiqueta": datos.comunicados.etiqueta, "titulo": datos.comunicados.titulo })} ${datos.comunicados.items.length === 0 ? renderTemplate`<div class="mt-12 tarjeta p-10 text-center max-w-2xl"> <p class="text-base text-white/75">${datos.comunicados.vacioMensaje}</p> </div>` : renderTemplate`<div class="mt-12 grid lg:grid-cols-2 gap-6"> ${datos.comunicados.items.map((c) => renderTemplate`<article class="tarjeta p-6"> <p class="font-mono text-xs text-[var(--color-acero-claro)] mb-2">${c.fecha}</p> <h3 class="text-xl font-semibold mb-3">${c.titulo}</h3> <p class="text-sm text-white/75 leading-relaxed">${c.resumen}</p> </article>`)} </div>`} </div> </section> <section class="bg-[var(--color-carbon-claro)] py-16 border-t border-white/5"> <div class="contenedor max-w-3xl text-center"> <h2 class="text-2xl md:text-3xl font-semibold mb-3">${datos.contactoPrensa.titulo}</h2> <p class="text-base text-white/80 mb-6">${datos.contactoPrensa.descripcion}</p> <a${addAttribute(datos.contactoPrensa.ctaRuta, "href")} class="boton boton-primario">${datos.contactoPrensa.ctaEtiqueta}</a> </div> </section> ` })}`;
}, "C:/AiRoboticsAstro/src/pages/es/prensa.astro", void 0);

const $$file = "C:/AiRoboticsAstro/src/pages/es/prensa.astro";
const $$url = "/es/prensa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Prensa,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
