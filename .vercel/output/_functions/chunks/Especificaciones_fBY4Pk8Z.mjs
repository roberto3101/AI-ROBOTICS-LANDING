import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import 'clsx';

const $$Astro$2 = createAstro("https://airobotics.com.pe");
const $$HeroProducto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeroProducto;
  const {
    etiqueta,
    titulo,
    tagline,
    descripcion,
    estado,
    publicoObjetivo,
    video,
    imagen,
    textosUi,
    rutaContacto,
    rutaDemo
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="h-screen !flex flex-wrap justify-between items-end pb-16 lg:pb-20 relative bg-carbon overflow-hidden"> ${video ? renderTemplate`<video${addAttribute(video, "src")} autoplay muted playsinline loop preload="metadata"${addAttribute(imagen, "poster")} class="w-full h-screen object-cover absolute top-0 left-0 opacity-70" aria-hidden="true"></video>` : renderTemplate`<img${addAttribute(imagen, "src")} alt="" class="w-full h-screen object-cover absolute top-0 left-0 opacity-60" loading="eager">`} <div class="container w-full mx-auto text-center relative z-[1]"> <p class="sub-title">[${etiqueta}]</p> <h1 class="w-full text-[48px] lg:text-[100px] mt-4">${titulo}</h1> <p class="w-full mt-3 text-xl lg:text-2xl">${tagline}</p> <p class="w-full mt-5 text-base lg:text-lg opacity-80 max-w-[800px] mx-auto">${descripcion}</p> <div class="flex justify-center flex-wrap gap-3 lg:gap-6 mt-6 lg:mt-8 mx-auto"> <a${addAttribute(rutaDemo, "href")} class="button button--red">${textosUi.comun.solicitarDemo.toUpperCase()}</a> </div> <div class="flex justify-center flex-wrap gap-3 mt-8"> <span class="sub-title text-primary">[${estado.toUpperCase()}]</span> ${publicoObjetivo.map((p) => renderTemplate`<span class="sub-title opacity-70">· ${p}</span>`)} </div> </div> </section>`;
}, "C:/AiRoboticsAstro/src/componentes/productos/HeroProducto.astro", void 0);

const $$Astro$1 = createAstro("https://airobotics.com.pe");
const $$SeccionProducto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SeccionProducto;
  const { seccion, variante = "oscuro" } = Astro2.props;
  const esOscuro = variante === "oscuro";
  const fondo = esOscuro ? "bg-[#050506] text-white" : "bg-cloud text-black relative z-[3]";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${fondo} py-20 lg:py-32`, "class")}> <div class="container js-scroll-activate"> <h3 class="section-title section-title--mobile">${seccion.titulo}</h3> ${seccion.tipo === "pasos" && seccion.items && renderTemplate`<ul class="mt-14 lg:mt-20 border-t border-t-[#363636]"> ${seccion.items.map((p) => renderTemplate`<li class="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 py-8 lg:py-12 border-b border-b-[#363636]"> <p${addAttribute(`sub-title ${esOscuro ? "text-primary" : ""}`, "class")}>${p.numero}</p> <div> <h4${addAttribute(esOscuro ? "text-white" : "", "class")}>${p.titulo}</h4> <p${addAttribute(`mt-3 text-[15px] ${esOscuro ? "opacity-80" : ""}`, "class")}>${p.descripcion}</p> </div> </li>`)} </ul>`} ${seccion.tipo === "grid" && seccion.items && renderTemplate`<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-14"> ${seccion.items.map((it) => renderTemplate`<li${addAttribute(`${esOscuro ? "bg-carbon" : "bg-carbon text-white"} p-8 lg:p-10 min-h-[260px] flex flex-col justify-between`, "class")}> <img${addAttribute(it.icono, "src")} alt="" class="w-12 h-12 object-contain" loading="lazy"> <div class="mt-8"> <h4 class="text-white">${it.titulo}</h4> <p class="mt-3 text-[15px] opacity-80">${it.descripcion}</p> </div> </li>`)} </ul>`} ${seccion.tipo === "lista" && seccion.items && renderTemplate`<ul class="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl"> ${seccion.items.map((it) => renderTemplate`<li${addAttribute(`flex items-start gap-3 text-base ${esOscuro ? "text-white/90" : "text-[var(--ai-navy-profundo)]"}`, "class")}> <span class="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"${addAttribute(`background-color:${esOscuro ? "var(--ai-teal)" : "var(--ai-teal-sombra)"}`, "style")} aria-hidden="true"></span> <span>${it}</span> </li>`)} </ul>`} ${seccion.tipo === "texto" && seccion.contenido && renderTemplate`<p${addAttribute(`mt-8 text-base lg:text-lg leading-relaxed max-w-3xl ${esOscuro ? "text-white/85" : "text-[var(--ai-navy-profundo)]"}`, "class")}>${seccion.contenido}</p>`} </div> </section>`;
}, "C:/AiRoboticsAstro/src/componentes/productos/SeccionProducto.astro", void 0);

const $$Astro = createAstro("https://airobotics.com.pe");
const $$Especificaciones = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Especificaciones;
  const { titulo = "Especificaciones", items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#050506] py-20 lg:py-32 relative z-[1]"> <div class="container js-scroll-activate"> <h3 class="section-title section-title--mobile">${titulo}</h3> <dl class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#363636] border border-[#363636] mt-12"> ${items.map((it) => renderTemplate`<div class="bg-carbon p-6 lg:p-8 flex flex-col gap-3"> <dt class="sub-title text-steel">[${it.etiqueta}]</dt> <dd class="text-base lg:text-lg text-white">${it.valor}</dd> </div>`)} </dl> </div> </div>`;
}, "C:/AiRoboticsAstro/src/componentes/productos/Especificaciones.astro", void 0);

export { $$HeroProducto as $, $$SeccionProducto as a, $$Especificaciones as b };
