import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://airobotics.com.pe");
const $$TarjetaProducto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TarjetaProducto;
  const {
    etiqueta,
    titulo,
    descripcion,
    imagen,
    imagenAlt = "",
    puntos,
    ctaEtiqueta,
    ctaRuta,
    variante = "oscuro"
  } = Astro2.props;
  const claseTarjeta = variante === "claro" ? "tarjeta-clara" : "tarjeta";
  return renderTemplate`${maybeRenderHead()}<article${addAttribute([claseTarjeta, "flex flex-col h-full group"], "class:list")}> ${imagen && renderTemplate`<div class="aspect-[4/3] overflow-hidden bg-black/20 relative"> <img${addAttribute(imagen, "src")}${addAttribute(imagenAlt, "alt")} loading="lazy" class="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"> </div>`} <div class="p-6 lg:p-8 flex flex-col flex-1 gap-4"> ${etiqueta && renderTemplate`<span class="etiqueta-mono">${etiqueta}</span>`} <h3 class="text-2xl lg:text-3xl font-semibold leading-tight tracking-tight">${titulo}</h3> <p${addAttribute([
    "text-base leading-relaxed",
    variante === "claro" ? "text-[var(--color-acero)]" : "text-white/80"
  ], "class:list")}>${descripcion}</p> ${puntos && puntos.length > 0 && renderTemplate`<ul${addAttribute([
    "flex flex-col gap-2 mt-2",
    variante === "claro" ? "text-[var(--color-acero)]" : "text-white/80"
  ], "class:list")}> ${puntos.map((p) => renderTemplate`<li class="flex items-start gap-3 text-sm"> <span class="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primario)]" aria-hidden="true"></span> <span>${p}</span> </li>`)} </ul>`} ${ctaRuta && ctaEtiqueta && renderTemplate`<a${addAttribute(ctaRuta, "href")}${addAttribute([
    "mt-auto pt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider",
    "text-[var(--color-primario)] hover:translate-x-1 transition"
  ], "class:list")}> ${ctaEtiqueta} <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"> <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a>`} </div> </article>`;
}, "C:/AiRoboticsAstro/src/componentes/ui/TarjetaProducto.astro", void 0);

export { $$TarjetaProducto as $ };
