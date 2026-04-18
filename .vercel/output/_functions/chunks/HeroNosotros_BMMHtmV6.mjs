import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://airobotics.com.pe");
const $$HeroNosotros = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroNosotros;
  const { etiqueta, titulo, subtitulo, imagen } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="h-screen !flex flex-wrap justify-between items-end pb-16 lg:pb-20 relative bg-carbon overflow-hidden"> <img${addAttribute(imagen, "src")} alt="" class="w-full h-screen object-cover absolute top-0 left-0 opacity-60" loading="eager"> <div class="container w-full mx-auto text-center relative z-[1]"> <p class="sub-title">[${etiqueta}]</p> <h1 class="w-full text-[48px] lg:text-[100px] mt-4">${titulo}</h1> <p class="w-full mt-6 text-xl lg:text-2xl max-w-[900px] mx-auto">${subtitulo}</p> </div> </section>`;
}, "C:/AiRoboticsAstro/src/componentes/nosotros/HeroNosotros.astro", void 0);

export { $$HeroNosotros as $ };
