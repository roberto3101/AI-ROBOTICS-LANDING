import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import { $ as $$Principal } from '../../chunks/Principal_5hvrW5JK.mjs';
import { $ as $$HeroNosotros } from '../../chunks/HeroNosotros_BMMHtmV6.mjs';
import { $ as $$EncabezadoSeccion } from '../../chunks/EncabezadoSeccion_CCtEdkH0.mjs';
import { a as obtenerPosts } from '../../chunks/cms_CbxmTCFK.mjs';
export { renderers } from '../../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const idioma = "en";
  const posts = await obtenerPosts(idioma, { });
  const formatoFecha = new Intl.DateTimeFormat("en-US", { day: "2-digit", month: "short", year: "numeric" });
  return renderTemplate`${renderComponent($$result, "Principal", $$Principal, { "idioma": idioma, "seo": {
    titulo: "Blog \u2014 AI Robotics",
    descripcion: "Technical articles, case studies and learnings from the AI Robotics team."
  } }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroNosotros", $$HeroNosotros, { "etiqueta": "[BLOG]", "titulo": "Ideas, learnings and technical notes.", "subtitulo": "We share what we learn building autonomous systems: technical decisions, failures, use cases and how we work.", "imagen": "/imagenes/hero/empresa-2.jpg" })} ${maybeRenderHead()}<section class="bg-[var(--color-carbon-claro)] py-[var(--spacing-seccion)] border-y border-white/5"> <div class="contenedor"> ${renderComponent($$result2, "EncabezadoSeccion", $$EncabezadoSeccion, { "etiqueta": "[LATEST POSTS]", "titulo": "What we\u2019re writing about." })} ${posts.length === 0 ? renderTemplate`<div class="mt-12 tarjeta p-10 lg:p-14 text-center max-w-2xl mx-auto"> <p class="font-mono text-xs uppercase tracking-[0.2em] text-[var(--ai-teal)] mb-4">[COMING SOON]</p> <h3 class="text-2xl lg:text-3xl font-semibold mb-3">We\\u2019re preparing the first batch of articles.</h3> <p class="text-base text-white/75">
Once we publish, this space will fill up automatically. Leave us your email and we\\u2019ll let you know.
</p> <a href="/en/contact?subject=general" class="boton boton-primario mt-8 inline-flex">Notify me</a> </div>` : renderTemplate`<ul class="mt-12 grid gap-6 md:grid-cols-2"> ${posts.map((p) => renderTemplate`<li class="tarjeta p-6 lg:p-8 flex flex-col gap-3"> <div class="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-acero-claro)]"> <span class="text-[var(--ai-teal)]">${p.categoria}</span> <span>·</span> <time${addAttribute(p.fecha, "datetime")}>${formatoFecha.format(new Date(p.fecha))}</time> <span>·</span> <span>${p.lectura}</span> </div> <a${addAttribute(`/en/blog/${p.slug}`, "href")} class="block"> <h3 class="text-xl lg:text-2xl font-semibold leading-tight text-white hover:text-[var(--ai-teal)] transition-colors">${p.titulo}</h3> </a> <p class="text-sm text-white/75 leading-relaxed">${p.resumen}</p> <a${addAttribute(`/en/blog/${p.slug}`, "href")} class="font-mono text-xs uppercase tracking-[0.18em] text-[var(--ai-teal)] mt-auto inline-flex items-center gap-2">
Read article →
</a> </li>`)} </ul>`} </div> </section> ` })}`;
}, "C:/AiRoboticsAstro/src/pages/en/blog.astro", void 0);

const $$file = "C:/AiRoboticsAstro/src/pages/en/blog.astro";
const $$url = "/en/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
