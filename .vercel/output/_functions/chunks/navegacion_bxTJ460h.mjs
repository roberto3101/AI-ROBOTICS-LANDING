const logo = {"src":"/imagenes/logos/airobotics.svg","alt":"AI Robotics — Autonomy for the real world","ancho":160,"alto":32};
const menu = [{"etiqueta":"Products","ruta":"/en/products","destacado":true,"submenu":[{"etiqueta":"AI Surveillance System","ruta":"/en/products/ai-surveillance-system","descripcion":"Autonomous threat detection and drone response for municipalities and private companies.","icono":"/iconos/sistema-ia.svg"},{"etiqueta":"Defense Drone","ruta":"/en/products/defense-drone","descripcion":"Autonomous drone with programmable response, integrated with the AI surveillance system.","icono":"/iconos/comando.svg"},{"etiqueta":"Autonomous Turret","ruta":"/en/products/defense-turret","descripcion":"Smart perimeter defense for stores, warehouses and high-value zones.","icono":"/iconos/desarrollo.svg"}]},{"etiqueta":"Company","ruta":"/en/about","submenu":[{"etiqueta":"About us","ruta":"/en/about","descripcion":"Our mission, vision and values."},{"etiqueta":"Team","ruta":"/en/team","descripcion":"Meet the engineers and researchers behind AI Robotics."}]},{"etiqueta":"News","ruta":"/en/press","submenu":[{"etiqueta":"Project progress","ruta":"/en/press","descripcion":"What we're building right now: prototypes, milestones and technical progress."},{"etiqueta":"Blog","ruta":"/en/blog","descripcion":"Technical articles, case studies and team learnings."},{"etiqueta":"Releases","ruta":"/en/press#releases","descripcion":"Official releases and media appearances."}]},{"etiqueta":"Contact","ruta":"/en/contact"}];
const ctaPrincipal = {"etiqueta":"Request a demo","ruta":"/en/contact?subject=demo"};
const selectorIdioma = {"etiqueta":"Language","opciones":[{"codigo":"es","etiqueta":"Español","bandera":"/banderas/es.svg","ruta":"/es/"},{"codigo":"en","etiqueta":"English","bandera":"/banderas/en.svg","ruta":"/en/"}]};
const navegacion = {
  logo,
  menu,
  ctaPrincipal,
  selectorIdioma,
};

export { ctaPrincipal, navegacion as default, logo, menu, selectorIdioma };
