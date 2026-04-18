import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://airobotics.com.pe");
const $$EncabezadoSeccion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EncabezadoSeccion;
  const { etiqueta, titulo, descripcion, alineacion = "izquierda", invertido = false } = Astro2.props;
  const claseAlineacion = alineacion === "centro" ? "text-center mx-auto" : "text-left";
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`flex flex-col gap-4 max-w-[900px] ${claseAlineacion}`, "class")}> ${etiqueta && renderTemplate`<p${addAttribute(`sub-title ${invertido ? "sub-title--black" : ""}`, "class")}>[${etiqueta}]</p>`} <h2 class="section-title section-title--mobile mt-4">${titulo}</h2> ${descripcion && renderTemplate`<p${addAttribute(`text-base lg:text-lg leading-relaxed ${invertido ? "" : "opacity-80"} mt-4`, "class")}>${descripcion}</p>`} </header>`;
}, "C:/AiRoboticsAstro/src/componentes/ui/EncabezadoSeccion.astro", void 0);

export { $$EncabezadoSeccion as $ };
