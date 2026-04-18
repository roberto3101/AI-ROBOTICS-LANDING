import { e as createAstro, f as createComponent, m as maybeRenderHead, k as renderComponent, l as Fragment, r as renderTemplate, h as addAttribute } from './astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import 'clsx';

const $$Astro$1 = createAstro("https://airobotics.com.pe");
const $$Equipo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Equipo;
  const { etiquetaSeccion, tituloSeccion, subtitulo, miembros, notaPlaceholder } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-cloud relative z-[3] text-black py-20 lg:py-32"> <div class="container js-scroll-activate"> ${tituloSeccion && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${etiquetaSeccion && renderTemplate`<p class="sub-title sub-title--black">[${etiquetaSeccion}]</p>`}<h3 class="section-title mt-6 lg:mt-10 max-w-[900px]">${tituloSeccion}</h3> ${subtitulo && renderTemplate`<p class="mt-5 max-w-[700px]">${subtitulo}</p>`}` })}`} <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14"> ${miembros.map((m) => renderTemplate`<li class="bg-carbon text-white flex flex-col h-full"> <div class="aspect-[4/5] overflow-hidden bg-black/10"> <img${addAttribute(m.foto, "src")}${addAttribute(m.nombre, "alt")} class="w-full h-full object-cover" loading="lazy"> </div> <div class="p-6 lg:p-8 flex flex-col gap-2 flex-1"> <p class="sub-title">[${m.cargo}]</p> <h4 class="text-white mt-3">${m.nombre}</h4> <p class="text-[15px] opacity-80 leading-relaxed mt-3">${m.bio}</p> </div> </li>`)} </ul> ${notaPlaceholder && renderTemplate`<p class="mt-8 text-sm opacity-60 italic">${notaPlaceholder}</p>`} </div> </section>`;
}, "C:/AiRoboticsAstro/src/componentes/nosotros/Equipo.astro", void 0);

const $$Astro = createAstro("https://airobotics.com.pe");
const $$Valores = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Valores;
  const { etiqueta, titulo, items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-cloud relative z-[3] text-black py-20 lg:py-32"> <div class="container js-scroll-activate"> <p class="sub-title sub-title--black">[${etiqueta}]</p> <h3 class="section-title mt-6 lg:mt-10 max-w-[900px]">${titulo}</h3> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14"> ${items.map((v) => renderTemplate`<li class="bg-carbon text-white p-8 lg:p-10 min-h-[280px] flex flex-col justify-between"> <img${addAttribute(v.icono, "src")} alt="" class="w-12 h-12 object-contain" loading="lazy"> <div class="mt-8"> <h4 class="text-white">${v.titulo}</h4> <p class="mt-3 text-[15px] opacity-80">${v.descripcion}</p> </div> </li>`)} </ul> </div> </section>`;
}, "C:/AiRoboticsAstro/src/componentes/nosotros/Valores.astro", void 0);

export { $$Equipo as $, $$Valores as a };
