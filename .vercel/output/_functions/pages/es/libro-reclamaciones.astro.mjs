import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import { c as cargarDatos, $ as $$Principal } from '../../chunks/Principal_5hvrW5JK.mjs';
export { renderers } from '../../renderers.mjs';

const $$LibroReclamaciones = createComponent(async ($$result, $$props, $$slots) => {
  const idioma = "es";
  const legal = await cargarDatos(idioma, "legal");
  const seo = await cargarDatos(idioma, "seo");
  const datos = legal.libroReclamaciones;
  return renderTemplate`${renderComponent($$result, "Principal", $$Principal, { "idioma": idioma, "seo": {
    titulo: seo.paginas.libroReclamaciones.titulo,
    descripcion: seo.paginas.libroReclamaciones.descripcion
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="bg-[var(--color-carbon)] pt-32 lg:pt-40 pb-[var(--spacing-seccion)]"> <div class="contenedor max-w-3xl"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">${datos.titulo}</h1> <p class="text-base lg:text-lg text-white/85 leading-relaxed mb-8">${datos.introduccion}</p> <div class="tarjeta p-8 mb-8"> <p class="text-base text-white/80 mb-6">${datos.instrucciones}</p> <a${addAttribute(datos.enlaceLibro.url, "href")} class="boton boton-primario" target="_blank" rel="noopener noreferrer"> ${datos.enlaceLibro.etiqueta} </a> </div> <section class="border-t border-white/10 pt-8"> <h2 class="text-2xl font-semibold mb-5">Datos de la empresa</h2> <dl class="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm"> <div> <dt class="etiqueta-mono mb-1">Razón social</dt> <dd class="text-white">${datos.datosEmpresa.razonSocial}</dd> </div> <div> <dt class="etiqueta-mono mb-1">RUC</dt> <dd class="text-white">${datos.datosEmpresa.ruc}</dd> </div> <div> <dt class="etiqueta-mono mb-1">Dirección</dt> <dd class="text-white">${datos.datosEmpresa.direccion}</dd> </div> <div> <dt class="etiqueta-mono mb-1">Teléfono</dt> <dd class="text-white">${datos.datosEmpresa.telefono}</dd> </div> <div> <dt class="etiqueta-mono mb-1">Correo</dt> <dd class="text-white">${datos.datosEmpresa.correo}</dd> </div> </dl> <p class="mt-8 text-sm text-[var(--color-acero-claro)] italic">${datos.notaLegal}</p> </section> </div> </article> ` })}`;
}, "C:/AiRoboticsAstro/src/pages/es/libro-reclamaciones.astro", void 0);

const $$file = "C:/AiRoboticsAstro/src/pages/es/libro-reclamaciones.astro";
const $$url = "/es/libro-reclamaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LibroReclamaciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
