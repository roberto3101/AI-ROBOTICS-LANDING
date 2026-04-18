import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, s as spreadAttributes, n as renderScript } from './astro/server_BQmCE8EJ.mjs';
import 'piccolore';
import 'clsx';

const $$Astro$1 = createAstro("https://airobotics.com.pe");
const $$InfoContacto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InfoContacto;
  const { items } = Astro2.props;
  const ICONOS = {
    mail: "M2 4h20v16H2zM2 4l10 8 10-8",
    phone: "M3 5l4-2 3 5-2 2a14 14 0 006 6l2-2 5 3-2 4a4 4 0 01-4 2C9 23 1 15 1 7a4 4 0 012-2z",
    whatsapp: "M5 19l-1.5 5L9 22.5A10 10 0 1019 5 10 10 0 005 19z M9 9c1 4 2 5 6 6",
    pin: "M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z M12 7a2 2 0 100 4 2 2 0 000-4z",
    clock: "M12 2a10 10 0 100 20 10 10 0 000-20z M12 6v6l4 2"
  };
  return renderTemplate`${maybeRenderHead()}<ul class="flex flex-col gap-6"> ${items.map((dato) => {
    const path = ICONOS[dato.icono] ?? ICONOS.mail;
    return renderTemplate`<li class="flex items-start gap-5 py-4 border-b border-b-[#363636]"> <span class="flex-shrink-0 w-11 h-11 border border-primary grid place-items-center"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-primary" aria-hidden="true"> <path${addAttribute(path, "d")}></path> </svg> </span> <div> <p class="sub-title text-steel mb-1">[${dato.etiqueta.toUpperCase()}]</p> ${dato.enlace ? renderTemplate`<a${addAttribute(dato.enlace, "href")} class="text-base lg:text-lg text-white hover:text-primary transition"${addAttribute(dato.enlace.startsWith("http") ? "_blank" : void 0, "target")}${addAttribute(dato.enlace.startsWith("http") ? "noopener noreferrer" : void 0, "rel")}> ${dato.valor} </a>` : renderTemplate`<p class="text-base lg:text-lg text-white">${dato.valor}</p>`} </div> </li>`;
  })} </ul>`;
}, "C:/AiRoboticsAstro/src/componentes/contacto/InfoContacto.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://airobotics.com.pe");
const $$Formulario = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Formulario;
  const {
    formulario,
    tiposConsulta,
    textosUi,
    asuntoInicial,
    endpoint = "/api/contacto"
  } = Astro2.props;
  const turnstileSiteKey = "1x00000000000000000000AA";
  const turnstileHabilitado = String("true").toLowerCase() !== "false";
  const timestampRender = Date.now();
  const atrPorCampo = {
    nombre: { minlength: 2, maxlength: 120, pattern: "[\\p{L}\\p{M}' .\\-]+", title: "Solo letras, espacios, guiones y apóstrofes." },
    email: { maxlength: 254, autocomplete: "email" },
    telefono: { maxlength: 32, pattern: "[+\\d\\s\\-().]{6,}", title: "Entre 6 y 20 dígitos.", inputmode: "tel" },
    empresa: { maxlength: 160 },
    mensaje: { minlength: 10, maxlength: 4e3 }
  };
  return renderTemplate`${maybeRenderHead()}<div class="bg-carbon border border-[#363636] p-6 lg:p-10 max-w-2xl contact-form"> <div class="mb-8"> <h2 class="text-white text-2xl lg:text-3xl tracking-tighter leading-[1.1] mb-3">${formulario.titulo}</h2> <p class="text-[15px] opacity-80">${formulario.descripcion}</p> </div> <form class="flex flex-col gap-5" method="POST"${addAttribute(endpoint, "action")} data-formulario-contacto${addAttribute(textosUi.formulario.enviando, "data-mensaje-enviando")}${addAttribute(textosUi.formulario.exito, "data-mensaje-exito")}${addAttribute(textosUi.formulario.error, "data-mensaje-error")}${addAttribute(textosUi.formulario.errorCaptcha, "data-mensaje-error-captcha")} novalidate> ${formulario.campos.map((campo) => {
    const id = `campo-${campo.id}`;
    const obligatorio = campo.obligatorio === true;
    const atr = atrPorCampo[campo.id] ?? {};
    if (campo.tipo === "select") {
      const opciones = campo.opcionesRef === "tiposConsulta" ? tiposConsulta : [];
      return renderTemplate`<div class="flex flex-col gap-2"${addAttribute(campo.id, "data-campo-wrap")}> <label${addAttribute(id, "for")} class="text-sm font-medium"> ${campo.etiqueta} ${obligatorio && renderTemplate`<span class="text-[var(--color-primario)] ml-1">${textosUi.comun.obligatorio}</span>`} </label> <select${addAttribute(id, "id")}${addAttribute(campo.id, "name")}${addAttribute(obligatorio, "required")} class="campo-input"> <option value="">—</option> ${opciones.map((op) => renderTemplate`<option${addAttribute(op.valor, "value")}${addAttribute(asuntoInicial === op.valor, "selected")}>${op.etiqueta}</option>`)} </select> <p class="campo-error hidden text-xs text-[var(--color-rojo)]"${addAttribute(campo.id, "data-campo-error")}></p> </div>`;
    }
    if (campo.tipo === "textarea") {
      return renderTemplate`<div class="flex flex-col gap-2"${addAttribute(campo.id, "data-campo-wrap")}> <label${addAttribute(id, "for")} class="text-sm font-medium"> ${campo.etiqueta} ${obligatorio && renderTemplate`<span class="text-[var(--color-primario)] ml-1">${textosUi.comun.obligatorio}</span>`} </label> <textarea${addAttribute(id, "id")}${addAttribute(campo.id, "name")} rows="5"${addAttribute(campo.placeholder, "placeholder")}${addAttribute(obligatorio, "required")} class="campo-input resize-y"${spreadAttributes(atr)}></textarea> <p class="campo-error hidden text-xs text-[var(--color-rojo)]"${addAttribute(campo.id, "data-campo-error")}></p> </div>`;
    }
    if (campo.tipo === "checkbox") {
      return renderTemplate`<div class="flex flex-col gap-2"${addAttribute(campo.id, "data-campo-wrap")}> <label${addAttribute(id, "for")} class="flex items-start gap-3 text-sm text-white/85 cursor-pointer"> <input${addAttribute(id, "id")}${addAttribute(campo.id, "name")} type="checkbox"${addAttribute(obligatorio, "required")} class="mt-1 w-4 h-4 accent-[var(--color-primario)]"> <span>${campo.etiqueta}</span> </label> <p class="campo-error hidden text-xs text-[var(--color-rojo)] pl-7"${addAttribute(campo.id, "data-campo-error")}></p> </div>`;
    }
    return renderTemplate`<div class="flex flex-col gap-2"${addAttribute(campo.id, "data-campo-wrap")}> <label${addAttribute(id, "for")} class="text-sm font-medium"> ${campo.etiqueta} ${obligatorio && renderTemplate`<span class="text-[var(--color-primario)] ml-1">${textosUi.comun.obligatorio}</span>`} </label> <input${addAttribute(id, "id")}${addAttribute(campo.id, "name")}${addAttribute(campo.tipo, "type")}${addAttribute(campo.placeholder, "placeholder")}${addAttribute(obligatorio, "required")} class="campo-input"${spreadAttributes(atr)}> <p class="campo-error hidden text-xs text-[var(--color-rojo)]"${addAttribute(campo.id, "data-campo-error")}></p> </div>`;
  })}  <div class="honeypot" aria-hidden="true"> <label for="campo-website">Website</label> <input id="campo-website" type="text" name="website" tabindex="-1" autocomplete="off"> </div>  <input type="hidden" name="_ts"${addAttribute(String(timestampRender), "value")}> ${turnstileHabilitado && renderTemplate`<div class="flex flex-col gap-2"> <div class="cf-turnstile"${addAttribute(turnstileSiteKey, "data-sitekey")} data-theme="dark" data-callback="onTurnstileSuccess"></div> <input type="hidden" name="cf-turnstile-response" data-turnstile-response> </div>`} <button type="submit" class="button button--red w-full justify-center mt-2" data-boton-enviar> ${formulario.boton.toUpperCase()} </button> <p class="text-sm leading-relaxed mt-2 hidden" role="status" data-feedback></p> </form> </div> ${turnstileHabilitado && renderTemplate(_a || (_a = __template(['<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>'])))} ${renderScript($$result, "C:/AiRoboticsAstro/src/componentes/contacto/Formulario.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/AiRoboticsAstro/src/componentes/contacto/Formulario.astro", void 0);

export { $$InfoContacto as $, $$Formulario as a };
