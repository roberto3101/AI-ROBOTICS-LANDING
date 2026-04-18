import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://airobotics.com.pe");
const $$CtaCierre = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CtaCierre;
  const { etiqueta, titulo, descripcion, ctaPrimario, ctaSecundario } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-cloud py-12 lg:pt-40 lg:pb-32 text-black relative z-[3]"> <div class="container flex flex-wrap justify-between items-start js-scroll-activate"> <div class="lg:w-1/2"> <p class="sub-title sub-title--black">[${etiqueta}]</p> <h3 class="section-title mt-6 lg:mt-10 text-balance">${titulo}</h3> <p class="mt-5 max-w-[600px]">${descripcion}</p> </div> <div class="flex flex-wrap gap-4 mt-8 lg:mt-0"> <a${addAttribute(ctaPrimario.ruta, "href")} class="button button--white">${ctaPrimario.etiqueta.toUpperCase()}</a> ${ctaSecundario && renderTemplate`<a${addAttribute(ctaSecundario.ruta, "href")} class="button button--white">${ctaSecundario.etiqueta.toUpperCase()}</a>`} </div> </div> </div>`;
}, "C:/AiRoboticsAstro/src/componentes/inicio/CtaCierre.astro", void 0);

export { $$CtaCierre as $ };
