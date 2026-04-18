import { e as createAstro, f as createComponent } from '../chunks/astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://airobotics.com.pe");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const cabeceraIdioma = Astro2.request.headers.get("accept-language") ?? "";
  const prefiereIngles = /\ben(?![A-Za-z])/.test(cabeceraIdioma) && !/\bes(?![A-Za-z])/.test(cabeceraIdioma);
  const destino = prefiereIngles ? "/en/" : "/es/";
  return Astro2.redirect(destino, 308);
}, "C:/AiRoboticsAstro/src/pages/index.astro", void 0);

const $$file = "C:/AiRoboticsAstro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
