import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, k as renderComponent, r as renderTemplate, l as Fragment, u as unescapeHTML, ak as renderSlot, al as renderHead } from './astro/server_BQmCE8EJ.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const IDIOMAS_DISPONIBLES = ["es", "en"];
const IDIOMA_POR_DEFECTO = "es";
const LOCALES_HTML = {
  es: "es-PE",
  en: "en-US"
};
const MAPA_RUTAS = {
  "": "",
  nosotros: "about",
  productos: "products",
  "productos/sistema-vigilancia-ia": "products/ai-surveillance-system",
  "productos/dron-defensa": "products/defense-drone",
  "productos/torreta-defensa": "products/defense-turret",
  equipo: "team",
  carreras: "careers",
  prensa: "press",
  contacto: "contact",
  privacidad: "privacy",
  terminos: "terms",
  "libro-reclamaciones": "claims-book",
  "casos/municipalidades": "cases/municipalities",
  "casos/empresas-privadas": "cases/private-companies",
  "casos/centros-comerciales": "cases/retail"
};
const MAPA_INVERSO = Object.fromEntries(
  Object.entries(MAPA_RUTAS).map(([es, en]) => [en, es])
);
function obtenerRutaEquivalente(pathname, destino) {
  const limpio = pathname.replace(/\/$/, "");
  const partes = limpio.split("/").filter(Boolean);
  const origen = partes[0] === "es" || partes[0] === "en" ? partes[0] : IDIOMA_POR_DEFECTO;
  if (origen === destino) return pathname;
  const slugSinIdioma = partes.slice(1).join("/");
  if (origen === "es" && destino === "en") {
    const en = MAPA_RUTAS[slugSinIdioma];
    if (en !== void 0) return `/en/${en}`.replace(/\/$/, "") || "/en";
  }
  if (origen === "en" && destino === "es") {
    const es = MAPA_INVERSO[slugSinIdioma];
    if (es !== void 0) return `/es/${es}`.replace(/\/$/, "") || "/es";
  }
  return `/${destino}/${slugSinIdioma}`.replace(/\/$/, "") || `/${destino}`;
}
async function cargarDatos(idioma, archivo) {
  const modulos = /* #__PURE__ */ Object.assign({"../datos/en/casos.json": () => import('./casos_B-i6yAGW.mjs'),"../datos/en/contacto.json": () => import('./contacto_NUy6BDDr.mjs'),"../datos/en/empresa.json": () => import('./empresa_DzsmX3tP.mjs'),"../datos/en/equipo.json": () => import('./equipo_9bZp3TW7.mjs'),"../datos/en/footer.json": () => import('./footer_C4GRzeuN.mjs'),"../datos/en/inicio.json": () => import('./inicio_DHS8I9KD.mjs'),"../datos/en/legal.json": () => import('./legal_wDljVGla.mjs'),"../datos/en/navegacion.json": () => import('./navegacion_bxTJ460h.mjs'),"../datos/en/nosotros.json": () => import('./nosotros_KfjiwElw.mjs'),"../datos/en/prensa.json": () => import('./prensa_CokJw5JU.mjs'),"../datos/en/productos.json": () => import('./productos_BIa_t1X3.mjs'),"../datos/en/seo.json": () => import('./seo_Bbp0vXer.mjs'),"../datos/es/casos.json": () => import('./casos_BTLIKLSP.mjs'),"../datos/es/contacto.json": () => import('./contacto_9h1KK-RN.mjs'),"../datos/es/empresa.json": () => import('./empresa_2K2wiNAe.mjs'),"../datos/es/equipo.json": () => import('./equipo_CZaqiTsE.mjs'),"../datos/es/footer.json": () => import('./footer_CW3RAfLg.mjs'),"../datos/es/inicio.json": () => import('./inicio_Bbszo7xV.mjs'),"../datos/es/legal.json": () => import('./legal_CCzcTfi3.mjs'),"../datos/es/navegacion.json": () => import('./navegacion_AQQNodu2.mjs'),"../datos/es/nosotros.json": () => import('./nosotros_DsqQoQks.mjs'),"../datos/es/prensa.json": () => import('./prensa_DVNcjPeA.mjs'),"../datos/es/productos.json": () => import('./productos_CcjXVITW.mjs'),"../datos/es/seo.json": () => import('./seo_Cl6E185h.mjs')});
  const ruta = `../datos/${idioma}/${archivo}.json`;
  const cargador = modulos[ruta];
  if (!cargador) {
    throw new Error(`No existe el archivo de datos: ${ruta}`);
  }
  const modulo = await cargador();
  return modulo.default;
}
async function cargarTextosUi(idioma) {
  const modulos = /* #__PURE__ */ Object.assign({"../idiomas/en.json": () => import('./en_Ca39sysY.mjs'),"../idiomas/es.json": () => import('./es_eqg-oTaK.mjs')});
  const ruta = `../idiomas/${idioma}.json`;
  const cargador = modulos[ruta];
  if (!cargador) throw new Error(`No existe textos UI: ${ruta}`);
  const modulo = await cargador();
  return modulo.default;
}

const $$Astro$3 = createAstro("https://airobotics.com.pe");
const $$BarraNavegacion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BarraNavegacion;
  const { navegacion, idioma, pathActual, textosUi } = Astro2.props;
  const otroIdioma = idioma === "es" ? "en" : "es";
  const rutaOtro = obtenerRutaEquivalente(pathActual, otroIdioma);
  const banderaActual = `/banderas/${idioma}.svg`;
  const banderaOtro = `/banderas/${otroIdioma}.svg`;
  const textoCambio = idioma === "es" ? "Cambiar a ingl\xE9s" : "Switch to Spanish";
  const anuncioEtiqueta = navegacion.anuncio?.etiqueta ?? (idioma === "es" ? "[NOTICIAS]" : "[NEWS]");
  const anuncioTexto = navegacion.anuncio?.texto ?? (idioma === "es" ? "Nuevo sistema aut\xF3nomo de vigilancia con IA disponible para municipalidades." : "New AI-powered autonomous surveillance system available for municipalities.");
  const anuncioRuta = navegacion.anuncio?.ruta ?? `/${idioma}/prensa`;
  return renderTemplate`${maybeRenderHead()}<header class="header fixed w-full z-20" id="js-header"> <div class="header__banner w-full pl-5 lg:pr-5 py-3 bg-[#050506] border-b border-b-[#363636] border-opacity-100" id="js-top-banner"> <div class="lg:grid lg:grid-cols-3 items-center"> <p class="sub-title text-[13px] lg:text-sm text-steel mb-0 pl-4 opacity-100 relative">${anuncioEtiqueta}</p> <div class="header__banner-marquee relative mt-5 lg:mt-0 overflow-hidden lg:overflow-visible lg:text-center"> <a${addAttribute(anuncioRuta, "href")} class="header__banner-link lg:text-center text-[15px] lg:text-[16px] relative block w-max lg:-ml-8 lg:w-auto pr-5 lg:pr-0 text-white text-pretty"> <span class="header__banner-text">${anuncioTexto}</span> <div class="button__top button__top--banner"></div> </a> </div> <a href="#" class="schedule-demo__close schedule-demo__close--banner absolute lg:relative top-2.5 lg:top-0 right-4 lg:right-0 ml-auto" id="js-hide-banner"> <i></i> <div class="button__top"></div> <div class="button__bottom"></div> </a> </div> </div> <div class="container flex items-center justify-between pt-6 lg:pt-10 pb-6 lg:pb-6"> <a${addAttribute(`/${idioma}/`, "href")} class="w-[180px] lg:w-[240px] block"> <img${addAttribute(navegacion.logo.src, "src")}${addAttribute(navegacion.logo.alt, "alt")} class="w-full h-auto"> </a> <nav class="header__main"> <ul class="relative gap-x-7 hidden lg:flex"> ${navegacion.menu.map((item) => renderTemplate`<li> ${item.submenu && item.submenu.length > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="#" class="relative js-toggle-nav"> ${item.etiqueta} <div class="button__top"></div> <div class="button__bottom"></div> </a> <div class="header__nav header__nav--alt container hidden js-nav-item"> <div class="js-nav-overlay"></div> <div class="flex flex-wrap bg-carbon relative z-[1]"> <ul class="rhs"> ${item.submenu.map((sub) => renderTemplate`<li${addAttribute(`group !w-1/${Math.max(2, Math.min(4, item.submenu.length))}`, "class")}> <a${addAttribute(sub.ruta, "href")} class="group-hover:!bg-white"> ${sub.descripcion && renderTemplate`<span class="sub-title transition-colors relative z-[1]">[${sub.descripcion.slice(0, 40).toUpperCase()}]</span>`} <div class="w-full relative z-[1]"> <h4 class="transition-colors">${sub.etiqueta}</h4> ${sub.descripcion && renderTemplate`<p class="mt-3 transition-colors">${sub.descripcion}</p>`} </div> </a> </li>`)} </ul> </div> </div> ` })}` : renderTemplate`<a${addAttribute(item.ruta, "href")} class="relative"> ${item.etiqueta} <div class="button__top"></div> <div class="button__bottom"></div> </a>`} </li>`)} </ul> </nav> <div class="header__right flex items-center gap-3"> <a${addAttribute(rutaOtro, "href")} class="selector-idioma"${addAttribute(textoCambio, "aria-label")}${addAttribute(otroIdioma, "hreflang")}${addAttribute(textoCambio, "title")}> <img class="selector-idioma__desde"${addAttribute(banderaActual, "src")} alt="" aria-hidden="true"> <span class="selector-idioma__label">${idioma.toUpperCase()}</span> <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true"><path d="M1 5h10M7 1l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg> <img${addAttribute(banderaOtro, "src")} alt="" aria-hidden="true"> </a> <a${addAttribute(navegacion.ctaPrincipal.ruta, "href")} class="button button--red px-6 py-[1.05rem] text-[12px] hidden lg:block"> ${navegacion.ctaPrincipal.etiqueta} </a> </div> <div class="header__hamburger js-toggle-nav"></div> </div> </header> <div class="menu" id="js-menu"> <div class="container flex flex-wrap content-between pb-5"> <ul class="menu__nav"> ${navegacion.menu.map((item) => renderTemplate`<li class="py-7 border-b border-b-carbon border-opacity-100"> ${item.submenu && item.submenu.length > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="#" class="sub-title text-[15px] tracking-[.11em] opacity-100 js-toggle-sub">${item.etiqueta}</a> <ul class="menu__sub js-menu-sub"> ${item.submenu.map((sub) => renderTemplate`<li><a${addAttribute(sub.ruta, "href")}>${sub.etiqueta}</a></li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute(item.ruta, "href")} class="sub-title text-[15px] tracking-[.11em] opacity-100">${item.etiqueta}</a>`} </li>`)} <li class="py-7 border-b border-b-carbon border-opacity-100"> <a${addAttribute(rutaOtro, "href")} class="sub-title text-[15px] tracking-[.11em] opacity-100 inline-flex items-center gap-3"${addAttribute(otroIdioma, "hreflang")}> <img${addAttribute(banderaOtro, "src")} alt="" width="22" height="16" class="h-4 w-[22px] object-cover" aria-hidden="true"> ${otroIdioma === "en" ? "English" : "Espa\xF1ol"} </a> </li> </ul> <a${addAttribute(navegacion.ctaPrincipal.ruta, "href")} class="button button--red w-full mt-10 px-6 py-[1.05rem] text-[13px]"> ${navegacion.ctaPrincipal.etiqueta} </a> </div> </div>`;
}, "C:/AiRoboticsAstro/src/componentes/navegacion/BarraNavegacion.astro", void 0);

const $$Astro$2 = createAstro("https://airobotics.com.pe");
const $$PieDePagina = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PieDePagina;
  const { footer, idioma } = Astro2.props;
  const anio = (/* @__PURE__ */ new Date()).getFullYear();
  const copyright = footer.copyright.replace("{anio}", String(anio));
  const logoPrimarioSrc = footer.logoPrimario?.src ?? "/imagenes/logos/airobotics-oscuro.svg";
  return renderTemplate`${maybeRenderHead()}<footer class="footer relative pt-20 lg:pt-48 bg-cloud text-[#292E3A] z-[3]"> <div class="container block lg:flex justify-between"> <div class="lhs flex lg:block flex-wrap lg:justify-center lg:w-96"> <a${addAttribute(`/${idioma}/`, "href")}> <img${addAttribute(logoPrimarioSrc, "src")}${addAttribute(footer.logoMarca.alt, "alt")}> </a> <p class="mt-10">${footer.lemaFinal}</p> <div class="flex flex-wrap gap-6 mt-8"> <a${addAttribute(`/${idioma}/contacto`, "href")} class="button button--white"> ${idioma === "es" ? "Cont\xE1ctanos" : "Contact Us"} </a> <a${addAttribute(`/${idioma}/${idioma === "es" ? "contacto?asunto=general" : "contact?subject=general"}`, "href")} class="button button--white"> ${idioma === "es" ? "\xBFQuieres trabajar con nosotros?" : "Want to work with us?"} </a> </div> <small class="sub-title text-xs !mt-10 mb-0 absolute lg:static">${copyright}</small> </div> <div class="middle flex flex-wrap lg:flex-nowrap gap-y-10 lg:gap-y-0 lg:w-96 xl:w-1/3 justify-between items-start sub-title text-xs mb-0 opacity-100 mt-10 lg:mt-0"> <div class="flex flex-wrap gap-y-10 lg:gap-y-14 w-full lg:w-auto"> ${footer.columnas.slice(0, Math.ceil(footer.columnas.length / 2)).map((columna) => renderTemplate`<ul class="flex flex-wrap gap-y-3 lg:gap-y-4 md:w-1/2 lg:w-auto"> <li><p>${columna.titulo}</p></li> ${columna.enlaces.map((e) => renderTemplate`<li><a${addAttribute(e.ruta, "href")} class="opacity-50">${e.etiqueta}</a></li>`)} </ul>`)} </div> <div class="flex flex-wrap gap-y-10 lg:gap-y-14 w-full lg:w-auto"> ${footer.columnas.slice(Math.ceil(footer.columnas.length / 2)).map((columna) => renderTemplate`<ul class="flex flex-wrap gap-y-3 lg:gap-y-4 w-full md:w-1/2 lg:w-auto"> <li><p>${columna.titulo}</p></li> ${columna.enlaces.map((e) => renderTemplate`<li><a${addAttribute(e.ruta, "href")} class="opacity-50">${e.etiqueta}</a></li>`)} </ul>`)} </div> </div> <div class="lg:w-40 flex flex-wrap sub-title text-xs mb-0 opacity-100 gap-y-10 lg:gap-y-14 mt-10 lg:mt-0 content-start"> <ul class="flex flex-wrap content-start w-full md:w-1/2 lg:w-full gap-y-3 lg:gap-y-4"> <li><p>${idioma === "es" ? "Redes" : "Social"}</p></li> ${footer.redes.map((r) => renderTemplate`<li><a${addAttribute(r.url, "href")} class="opacity-50" rel="noopener noreferrer" target="_blank">${r.nombre}</a></li>`)} </ul> </div> </div> <img${addAttribute(footer.logoMarca.src, "src")}${addAttribute(footer.logoMarca.alt, "alt")} class="w-full object-contain pt-28 lg:pt-40"> </footer>`;
}, "C:/AiRoboticsAstro/src/componentes/navegacion/PieDePagina.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1, _b;
const $$Astro$1 = createAstro("https://airobotics.com.pe");
const $$EtiquetasPagina = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EtiquetasPagina;
  const { seo, siteName, twitter } = Astro2.props;
  return renderTemplate`<title>${seo.tituloFinal}</title><meta name="description"${addAttribute(seo.descripcion, "content")}>${seo.canonical ? renderTemplate`<link rel="canonical"${addAttribute(seo.canonical, "href")}>` : renderTemplate`<link rel="canonical"${addAttribute(seo.url, "href")}>`}${seo.noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}<!-- Hreflang -->${seo.hreflangs.map((h) => renderTemplate`<link rel="alternate"${addAttribute(h.lang, "hreflang")}${addAttribute(h.href, "href")}>`)}<!-- Open Graph --><meta property="og:type"${addAttribute(seo.tipo ?? "website", "content")}><meta property="og:title"${addAttribute(seo.tituloFinal, "content")}><meta property="og:description"${addAttribute(seo.descripcion, "content")}><meta property="og:url"${addAttribute(seo.url, "content")}><meta property="og:image"${addAttribute(seo.imagenAbsoluta, "content")}><meta property="og:site_name"${addAttribute(siteName, "content")}><meta property="og:locale"${addAttribute(seo.locale, "content")}><meta property="og:locale:alternate"${addAttribute(seo.alternateLocale, "content")}><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(seo.tituloFinal, "content")}><meta name="twitter:description"${addAttribute(seo.descripcion, "content")}><meta name="twitter:image"${addAttribute(seo.imagenAbsoluta, "content")}>${twitter && renderTemplate`<meta name="twitter:site"${addAttribute(twitter, "content")}>`}${seo.jsonLd && (Array.isArray(seo.jsonLd) ? seo.jsonLd.map((j) => renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(j)))) : renderTemplate(_b || (_b = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(seo.jsonLd))))}`;
}, "C:/AiRoboticsAstro/src/componentes/seo/EtiquetasPagina.astro", void 0);

const SITE_URL = "https://airobotics.com.pe".replace(/\/$/, "");
function calcularSeo(idioma, pathname, datos, globalSeo) {
  const rutaLimpia = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  const url = `${SITE_URL}${rutaLimpia}`;
  const tituloFinal = datos.titulo ? globalSeo.tituloFormato.replace("%s", datos.titulo) : globalSeo.tituloPorDefecto;
  const imagen = datos.imagen ?? globalSeo.imagenOg;
  const imagenAbsoluta = imagen.startsWith("http") ? imagen : `${SITE_URL}${imagen}`;
  const hreflangs = IDIOMAS_DISPONIBLES.map((codigo) => ({
    lang: LOCALES_HTML[codigo],
    href: `${SITE_URL}${obtenerRutaEquivalente(rutaLimpia, codigo)}`
  }));
  hreflangs.push({ lang: "x-default", href: `${SITE_URL}${obtenerRutaEquivalente(rutaLimpia, "es")}` });
  return {
    ...datos,
    tituloFinal,
    url,
    imagenAbsoluta,
    hreflangs,
    locale: LOCALES_HTML[idioma],
    alternateLocale: LOCALES_HTML[idioma === "es" ? "en" : "es"]
  };
}
function organizacionJsonLd(empresa) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: empresa.nombre,
    legalName: empresa.nombreLegal,
    url: SITE_URL,
    logo: `${SITE_URL}/imagenes/logos/airobotics.svg`,
    description: empresa.descripcionCorta,
    address: {
      "@type": "PostalAddress",
      streetAddress: empresa.ubicacion.direccion,
      addressLocality: empresa.ubicacion.ciudad,
      addressCountry: empresa.ubicacion.pais,
      postalCode: empresa.ubicacion.codigoPostal
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: empresa.contacto.emailGeneral,
        telephone: empresa.contacto.telefono
      }
    ],
    sameAs: empresa.redesSociales.map((r) => r.url)
  };
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://airobotics.com.pe");
const $$Principal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Principal;
  const { idioma, seo, pathActual, jsonLdAdicional, claseBody = "" } = Astro2.props;
  const path = pathActual ?? Astro2.url.pathname;
  const [navegacion, footerData, empresa, seoData, textosUi] = await Promise.all([
    cargarDatos(idioma, "navegacion"),
    cargarDatos(idioma, "footer"),
    cargarDatos(idioma, "empresa"),
    cargarDatos(idioma, "seo"),
    cargarTextosUi(idioma)
  ]);
  const seoComputado = calcularSeo(idioma, path, seo, seoData.global);
  const jsonLdLista = [organizacionJsonLd(empresa)];
  if (jsonLdAdicional) {
    if (Array.isArray(jsonLdAdicional)) jsonLdLista.push(...jsonLdAdicional);
    else jsonLdLista.push(jsonLdAdicional);
  }
  if (seo.jsonLd) {
    if (Array.isArray(seo.jsonLd)) jsonLdLista.push(...seo.jsonLd);
    else jsonLdLista.push(seo.jsonLd);
  }
  seoComputado.jsonLd = jsonLdLista;
  const rutaInicio = `/${idioma}/`;
  return renderTemplate(_a || (_a = __template(["<html", ' class="no-js"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', '><meta name="theme-color" content="#050506"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="alternate icon" href="/favicon.png"><link rel="preconnect" href="https://challenges.cloudflare.com"><link rel="stylesheet" href="/theme/theme.css"><link rel="stylesheet" href="/theme/airobotics-override.css">', "", "", "</head> <body", "> ", " <main> ", " </main> ", ' <div class="cursor u-flex u-flex--center" id="js-cursor"> <div class="cursor__circle flex justify-center items-center"> <span class="cursor__text block text-center"></span> </div> </div> <div class="arrow-cursor"> <div class="cursor__circle flex items-center justify-center"> <svg class="arrow-cursor__icon" width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <g style="mix-blend-mode:screen"> <path class="arrow-cursor__path" d="M11.5 7.99969L19.5 15.9997L11.5 23.9997" stroke="#000"></path> </g> </svg> </div> </div> <script>\n      /* Shim: app.js del tema shield.ai referencia `Lenis`. Le damos un no-op\n         para que no reviente y dejamos el scroll nativo. */\n      window.Lenis = window.Lenis || function(){\n        return {\n          on(){}, off(){}, raf(){}, scrollTo(){}, start(){}, stop(){},\n          destroy(){}, notify(){}, resize(){}, emit(){}, get targetScroll(){return 0;}, get scroll(){return 0;}\n        };\n      };\n    <\/script> <script src="/theme/app.js"><\/script> </body> </html>'], ["<html", ' class="no-js"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', '><meta name="theme-color" content="#050506"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="alternate icon" href="/favicon.png"><link rel="preconnect" href="https://challenges.cloudflare.com"><link rel="stylesheet" href="/theme/theme.css"><link rel="stylesheet" href="/theme/airobotics-override.css">', "", "", "</head> <body", "> ", " <main> ", " </main> ", ' <div class="cursor u-flex u-flex--center" id="js-cursor"> <div class="cursor__circle flex justify-center items-center"> <span class="cursor__text block text-center"></span> </div> </div> <div class="arrow-cursor"> <div class="cursor__circle flex items-center justify-center"> <svg class="arrow-cursor__icon" width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <g style="mix-blend-mode:screen"> <path class="arrow-cursor__path" d="M11.5 7.99969L19.5 15.9997L11.5 23.9997" stroke="#000"></path> </g> </svg> </div> </div> <script>\n      /* Shim: app.js del tema shield.ai referencia \\`Lenis\\`. Le damos un no-op\n         para que no reviente y dejamos el scroll nativo. */\n      window.Lenis = window.Lenis || function(){\n        return {\n          on(){}, off(){}, raf(){}, scrollTo(){}, start(){}, stop(){},\n          destroy(){}, notify(){}, resize(){}, emit(){}, get targetScroll(){return 0;}, get scroll(){return 0;}\n        };\n      };\n    <\/script> <script src="/theme/app.js"><\/script> </body> </html>'])), addAttribute(LOCALES_HTML[idioma], "lang"), addAttribute(Astro2.generator, "content"), renderComponent($$result, "EtiquetasPagina", $$EtiquetasPagina, { "seo": seoComputado, "siteName": seoData.global.siteName, "twitter": seoData.global.twitter }), renderSlot($$result, $$slots["head"]), renderHead(), addAttribute(`home ${claseBody}`, "class"), renderComponent($$result, "BarraNavegacion", $$BarraNavegacion, { "navegacion": navegacion, "idioma": idioma, "pathActual": path, "rutaInicio": rutaInicio, "textosUi": textosUi }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "PieDePagina", $$PieDePagina, { "footer": footerData, "idioma": idioma }));
}, "C:/AiRoboticsAstro/src/layout/Principal.astro", void 0);

export { $$Principal as $, cargarTextosUi as a, cargarDatos as c };
