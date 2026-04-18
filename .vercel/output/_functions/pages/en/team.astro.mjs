import { f as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import { c as cargarDatos, $ as $$Principal } from '../../chunks/Principal_5hvrW5JK.mjs';
import { $ as $$HeroNosotros } from '../../chunks/HeroNosotros_BMMHtmV6.mjs';
import { $ as $$Equipo, a as $$Valores } from '../../chunks/Valores_CSU7bNxW.mjs';
import { $ as $$CtaCierre } from '../../chunks/CtaCierre_C8eSicAI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const idioma = "en";
  const datos = await cargarDatos(idioma, "equipo");
  const seo = await cargarDatos(idioma, "seo");
  return renderTemplate`${renderComponent($$result, "Principal", $$Principal, { "idioma": idioma, "seo": {
    titulo: seo.paginas.equipo.titulo,
    descripcion: seo.paginas.equipo.descripcion
  } }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroNosotros", $$HeroNosotros, { "etiqueta": datos.hero.etiqueta, "titulo": datos.hero.titulo, "subtitulo": datos.hero.subtitulo, "imagen": "/imagenes/hero/hero-team.jpg" })} ${renderComponent($$result2, "Equipo", $$Equipo, { "miembros": datos.miembros, "notaPlaceholder": datos.notaPlaceholder })} ${renderComponent($$result2, "Valores", $$Valores, { "etiqueta": datos.cultura.etiqueta, "titulo": datos.cultura.titulo, "items": datos.cultura.principios.map((p) => ({
    icono: "/iconos/sistema-ia.svg",
    titulo: p.titulo,
    descripcion: p.descripcion
  })) })} ${renderComponent($$result2, "CtaCierre", $$CtaCierre, { "etiqueta": "LET'S TALK", "titulo": "Want to work with us?", "descripcion": "Write to us and let's talk about your background and how you could join the team.", "ctaPrimario": { etiqueta: "Contact us", ruta: "/en/contact?subject=general" } })} ` })}`;
}, "C:/AiRoboticsAstro/src/pages/en/team.astro", void 0);

const $$file = "C:/AiRoboticsAstro/src/pages/en/team.astro";
const $$url = "/en/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Team,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
