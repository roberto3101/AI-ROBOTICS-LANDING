import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as Fragment, u as unescapeHTML } from '../../../chunks/astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import { $ as $$Principal } from '../../../chunks/Principal_5hvrW5JK.mjs';
import { o as obtenerPostPorSlug } from '../../../chunks/cms_CbxmTCFK.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://airobotics.com.pe");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const idioma = "es";
  const { slug } = Astro2.params;
  if (!slug) return Astro2.redirect("/es/blog", 302);
  const post = await obtenerPostPorSlug();
  if (!post) return Astro2.redirect("/es/blog", 302);
  const formatoFecha = new Intl.DateTimeFormat("es-PE", { day: "2-digit", month: "long", year: "numeric" });
  return renderTemplate`${renderComponent($$result, "Principal", $$Principal, { "idioma": idioma, "seo": {
    titulo: post.seo?.titulo ?? `${post.titulo} \u2014 Blog AI Robotics`,
    descripcion: post.seo?.descripcion ?? post.resumen,
    imagen: post.seo?.imagen ?? post.portada,
    tipo: "article"
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="bg-[var(--color-carbon)] pt-32 pb-[var(--spacing-seccion)]"> <div class="contenedor max-w-3xl"> <p class="font-mono text-xs uppercase tracking-[0.2em] text-[var(--ai-teal)] mb-6">
[${post.categoria}]
</p> <h1 class="titulo-hero mb-6">${post.titulo}</h1> <div class="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-acero-claro)] mb-10"> <time${addAttribute(post.fecha, "datetime")}>${formatoFecha.format(new Date(post.fecha))}</time> <span>·</span> <span>${post.lectura}</span> ${post.autor && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <span>·</span> <span>${post.autor.nombre}</span> ` })}`} </div> ${post.portada && renderTemplate`<img${addAttribute(post.portada, "src")} alt="" class="w-full aspect-[16/9] object-cover mb-10" loading="eager">`} <div class="prose-airobotics">${unescapeHTML(post.contenido)}</div> <div class="mt-16 pt-8 border-t border-white/10"> <a href="/es/blog" class="font-mono text-xs uppercase tracking-[0.18em] text-[var(--ai-teal)]">
← Volver al blog
</a> </div> </div> </article> ` })} `;
}, "C:/AiRoboticsAstro/src/pages/es/blog/[slug].astro", void 0);

const $$file = "C:/AiRoboticsAstro/src/pages/es/blog/[slug].astro";
const $$url = "/es/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
