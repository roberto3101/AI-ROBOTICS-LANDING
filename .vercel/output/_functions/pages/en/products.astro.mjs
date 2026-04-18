import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import { c as cargarDatos, $ as $$Principal } from '../../chunks/Principal_5hvrW5JK.mjs';
import { $ as $$EncabezadoSeccion } from '../../chunks/EncabezadoSeccion_CCtEdkH0.mjs';
import { $ as $$TarjetaProducto } from '../../chunks/TarjetaProducto_BOwPSuLr.mjs';
import { $ as $$CtaCierre } from '../../chunks/CtaCierre_C8eSicAI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const idioma = "en";
  const datos = await cargarDatos(idioma, "productos");
  const seo = await cargarDatos(idioma, "seo");
  const inicio = await cargarDatos(idioma, "inicio");
  return renderTemplate`${renderComponent($$result, "Principal", $$Principal, { "idioma": idioma, "seo": {
    titulo: seo.paginas.productos.titulo,
    descripcion: seo.paginas.productos.descripcion
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-[var(--color-carbon)] pt-36 pb-16 lg:pt-44 lg:pb-24"> <div class="contenedor"> ${renderComponent($$result2, "EncabezadoSeccion", $$EncabezadoSeccion, { "etiqueta": datos.indice.etiqueta, "titulo": datos.indice.titulo, "descripcion": datos.indice.subtitulo })} </div> </section> <section class="bg-[var(--color-carbon)] pb-[var(--spacing-seccion)]"> <div class="contenedor grid lg:grid-cols-3 gap-6"> ${datos.lista.map((p) => renderTemplate`${renderComponent($$result2, "TarjetaProducto", $$TarjetaProducto, { "etiqueta": p.etiquetaCorta, "titulo": p.titulo, "descripcion": p.descripcionCorta, "imagen": p.imagenHero, "imagenAlt": p.titulo, "ctaEtiqueta": "View details", "ctaRuta": `/en/products/${p.slugEn}` })}`)} </div> </section> ${renderComponent($$result2, "CtaCierre", $$CtaCierre, { "etiqueta": inicio.ctaCierre.etiqueta, "titulo": inicio.ctaCierre.titulo, "descripcion": inicio.ctaCierre.descripcion, "ctaPrimario": inicio.ctaCierre.ctaPrimario, "ctaSecundario": inicio.ctaCierre.ctaSecundario, "imagen": inicio.ctaCierre.imagen })} ` })}`;
}, "C:/AiRoboticsAstro/src/pages/en/products/index.astro", void 0);

const $$file = "C:/AiRoboticsAstro/src/pages/en/products/index.astro";
const $$url = "/en/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
