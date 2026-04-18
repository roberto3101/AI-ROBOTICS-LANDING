import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import { c as cargarDatos, a as cargarTextosUi, $ as $$Principal } from '../../../chunks/Principal_5hvrW5JK.mjs';
import { $ as $$HeroProducto, a as $$SeccionProducto, b as $$Especificaciones } from '../../../chunks/Especificaciones_fBY4Pk8Z.mjs';
import { $ as $$CtaCierre } from '../../../chunks/CtaCierre_C8eSicAI.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://airobotics.com.pe");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const idioma = "es";
  const { slug } = Astro2.params;
  const datos = await cargarDatos(idioma, "productos");
  const inicio = await cargarDatos(idioma, "inicio");
  const seo = await cargarDatos(idioma, "seo");
  const textosUi = await cargarTextosUi(idioma);
  const producto = datos.lista.find((p) => p.slugEs === slug);
  if (!producto) {
    return Astro2.redirect("/es/productos", 302);
  }
  const claveSeo = producto.id === "sistema-vigilancia-ia" ? "vigilancia" : producto.id === "dron-defensa" ? "dron" : "torreta";
  const seoPagina = seo.paginas[claveSeo];
  const productoJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: producto.titulo,
    description: producto.descripcionCorta,
    image: `${"https://airobotics.com.pe".replace(/\/$/, "")}${producto.imagenHero}`,
    brand: { "@type": "Brand", name: "AI Robotics" },
    category: producto.categoria
  };
  return renderTemplate`${renderComponent($$result, "Principal", $$Principal, { "idioma": idioma, "seo": {
    titulo: seoPagina.titulo,
    descripcion: seoPagina.descripcion,
    imagen: producto.imagenHero,
    tipo: "product",
    jsonLd: productoJsonLd
  } }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroProducto", $$HeroProducto, { "etiqueta": producto.etiquetaCorta, "titulo": producto.titulo, "tagline": producto.tagline, "descripcion": producto.descripcionCorta, "estado": producto.estado, "publicoObjetivo": producto.publicoObjetivo, "video": producto.video, "imagen": producto.imagenHero, "textosUi": textosUi, "rutaContacto": "/es/contacto", "rutaDemo": "/es/contacto?asunto=demo" })} ${producto.secciones.map((s, idx) => renderTemplate`${renderComponent($$result2, "SeccionProducto", $$SeccionProducto, { "seccion": s, "variante": idx % 2 === 0 ? "oscuro-suave" : "oscuro" })}`)}${renderComponent($$result2, "Especificaciones", $$Especificaciones, { "items": producto.especificaciones })} ${renderComponent($$result2, "CtaCierre", $$CtaCierre, { "etiqueta": inicio.ctaCierre.etiqueta, "titulo": inicio.ctaCierre.titulo, "descripcion": inicio.ctaCierre.descripcion, "ctaPrimario": inicio.ctaCierre.ctaPrimario, "ctaSecundario": inicio.ctaCierre.ctaSecundario, "imagen": inicio.ctaCierre.imagen })} ` })}`;
}, "C:/AiRoboticsAstro/src/pages/es/productos/[slug].astro", void 0);
const $$file = "C:/AiRoboticsAstro/src/pages/es/productos/[slug].astro";
const $$url = "/es/productos/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
