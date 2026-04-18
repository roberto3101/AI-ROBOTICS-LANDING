import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import { c as cargarDatos, a as cargarTextosUi, $ as $$Principal } from '../../chunks/Principal_5hvrW5JK.mjs';
import { $ as $$HeroNosotros } from '../../chunks/HeroNosotros_BMMHtmV6.mjs';
import { $ as $$InfoContacto, a as $$Formulario } from '../../chunks/Formulario_Cuf6YpGZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://airobotics.com.pe");
const prerender = false;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const idioma = "en";
  const datos = await cargarDatos(idioma, "contacto");
  const seo = await cargarDatos(idioma, "seo");
  const textosUi = await cargarTextosUi(idioma);
  const asunto = Astro2.url.searchParams.get("subject") ?? "";
  return renderTemplate`${renderComponent($$result, "Principal", $$Principal, { "idioma": idioma, "seo": {
    titulo: seo.paginas.contacto.titulo,
    descripcion: seo.paginas.contacto.descripcion
  } }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroNosotros", $$HeroNosotros, { "etiqueta": datos.hero.etiqueta, "titulo": datos.hero.titulo, "subtitulo": datos.hero.subtitulo, "imagen": "/imagenes/hero/empresa-3.jpg" })} ${maybeRenderHead()}<section class="bg-[#050506] py-20 lg:py-32"> <div class="container grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start"> <div> <p class="sub-title">[CONTACT DETAILS]</p> <h2 class="section-title section-title--mobile mt-6 mb-8">Let's talk.</h2> ${renderComponent($$result2, "InfoContacto", $$InfoContacto, { "items": datos.datosContacto })} </div> ${renderComponent($$result2, "Formulario", $$Formulario, { "formulario": datos.formulario, "tiposConsulta": datos.tiposConsulta, "textosUi": textosUi, "asuntoInicial": asunto })} </div> </section> ` })}`;
}, "C:/AiRoboticsAstro/src/pages/en/contact.astro", void 0);

const $$file = "C:/AiRoboticsAstro/src/pages/en/contact.astro";
const $$url = "/en/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
