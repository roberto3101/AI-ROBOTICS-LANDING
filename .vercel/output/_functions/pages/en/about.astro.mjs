import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import { c as cargarDatos, $ as $$Principal } from '../../chunks/Principal_5hvrW5JK.mjs';
export { renderers } from '../../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const idioma = "en";
  const datos = await cargarDatos(idioma, "nosotros");
  const seo = await cargarDatos(idioma, "seo");
  return renderTemplate`${renderComponent($$result, "Principal", $$Principal, { "idioma": idioma, "seo": {
    titulo: seo.paginas.nosotros.titulo,
    descripcion: seo.paginas.nosotros.descripcion,
    imagen: datos.hero.imagen
  }, "claseBody": "page-template page-about" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="h-screen !flex flex-wrap justify-between items-end pb-16 lg:pb-20 relative bg-carbon overflow-hidden"> <img${addAttribute(datos.hero.imagen, "src")} alt="" class="w-full h-screen object-cover absolute top-0 left-0 opacity-60"> <div class="container w-full mx-auto text-center relative z-[1]"> <p class="sub-title">[${datos.hero.etiqueta}]</p> <h1 class="w-full text-[48px] lg:text-[100px] mt-4">${datos.hero.titulo}</h1> <p class="w-full mt-6 text-xl lg:text-2xl max-w-[900px] mx-auto">${datos.hero.subtitulo}</p> </div> </section> <div class="py-20 lg:py-40 bg-[#050506] relative z-[1]"> <div class="container js-scroll-activate"> <div class="lg:flex justify-between gap-28 items-center"> <div class="w-full lg:w-[47%] pt-10 lg:pt-0"> <p class="sub-title">[${datos.mision.etiqueta}]</p> <h3 class="section-title section-title--mobile mt-6">${datos.mision.titulo}</h3> <p class="mt-5 lg:mt-10 text-balance">${datos.mision.descripcion}</p> </div> <img src="/theme/uploads/ai-robotics/centro-datos.jpg" alt="" class="w-full lg:w-[53%] aspect-square object-cover mt-10 lg:mt-0"> </div> </div> </div> <div class="py-20 lg:py-40 bg-[#050506] relative z-[1]"> <div class="container js-scroll-activate"> <div class="lg:flex justify-between gap-28 items-center flex-row-reverse"> <div class="w-full lg:w-[47%] pt-10 lg:pt-0"> <p class="sub-title">[${datos.vision.etiqueta}]</p> <h3 class="section-title section-title--mobile mt-6">${datos.vision.titulo}</h3> <p class="mt-5 lg:mt-10 text-balance">${datos.vision.descripcion}</p> </div> <img src="/theme/uploads/ai-robotics/ciudad-noche.jpg" alt="" class="w-full lg:w-[53%] aspect-square object-cover mt-10 lg:mt-0"> </div> </div> </div> <section class="bg-cloud relative z-[3] text-black py-20 lg:py-32"> <div class="container js-scroll-activate"> <p class="sub-title sub-title--black">[VALUES]</p> <h3 class="section-title mt-6 lg:mt-10 max-w-[900px]">What defines us.</h3> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14"> ${datos.valores.map((v) => renderTemplate`<li class="bg-carbon text-white p-8 lg:p-10 min-h-[280px] flex flex-col justify-between"> <img${addAttribute(v.icono, "src")} alt="" class="w-12 h-12 object-contain"> <div class="mt-8"> <h4 class="text-white">${v.titulo}</h4> <p class="mt-3 text-[15px] opacity-80">${v.descripcion}</p> </div> </li>`)} </ul> </div> </section> <div class="bg-[#050506] py-20 lg:py-40 relative z-[1]"> <div class="container js-scroll-activate"> <p class="sub-title">[${datos.historia.etiqueta}]</p> <h3 class="section-title section-title--mobile mt-6 lg:mt-10 max-w-[900px]">${datos.historia.titulo}</h3> <ul class="mt-14 lg:mt-20 border-t border-t-[#363636]"> ${datos.historia.hitos.map((h) => renderTemplate`<li class="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 py-8 lg:py-12 border-b border-b-[#363636]"> <p class="sub-title text-primary">${h.anio}</p> <div> <h4 class="text-white">${h.titulo}</h4> <p class="mt-3 text-[15px] opacity-80">${h.descripcion}</p> </div> </li>`)} </ul> </div> </div> <div class="eyecatch eyecatch--dark bg-carbon"> <div class="pt-28 lg:pt-36 pb-24 lg:py-16 js-scroll-activate"> <div class="container flex flex-wrap justify-between"> <div class="w-full lg:w-1/2"> <p class="sub-title">[${datos.respaldo.etiqueta}]</p> <h2 class="section-title section-title--mobile text-balance mt-6">${datos.respaldo.titulo}</h2> <p class="mt-5 lg:mt-8 text-balance max-w-[600px]">${datos.respaldo.descripcion}</p> </div> </div> <div class="container"> <img${addAttribute(datos.respaldo.imagen, "src")} alt="" class="hidden lg:block mt-12 w-full aspect-[1.6/1] object-cover"> <img${addAttribute(datos.respaldo.imagen, "src")} alt="" class="lg:hidden w-full object-cover aspect-[.96/1] mt-5"> </div> </div> </div> <div class="bg-cloud py-20 lg:py-32 text-black relative z-[3]"> <div class="container flex flex-wrap justify-between items-start js-scroll-activate"> <div class="lg:w-1/2"> <p class="sub-title sub-title--black">[NEXT STEP]</p> <h3 class="section-title mt-6 lg:mt-10 text-balance">${datos.ctaCierre.titulo}</h3> <p class="mt-5 max-w-[600px]">${datos.ctaCierre.descripcion}</p> </div> <div class="flex flex-wrap gap-4 mt-8 lg:mt-0"> <a${addAttribute(datos.ctaCierre.ctaPrimario.ruta, "href")} class="button button--white"> ${datos.ctaCierre.ctaPrimario.etiqueta.toUpperCase()} </a> <a${addAttribute(datos.ctaCierre.ctaSecundario.ruta, "href")} class="button button--white"> ${datos.ctaCierre.ctaSecundario.etiqueta.toUpperCase()} </a> </div> </div> </div> ` })}`;
}, "C:/AiRoboticsAstro/src/pages/en/about.astro", void 0);

const $$file = "C:/AiRoboticsAstro/src/pages/en/about.astro";
const $$url = "/en/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
