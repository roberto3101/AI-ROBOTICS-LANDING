const logo = {"src":"/imagenes/logos/airobotics.svg","alt":"AI Robotics — Autonomía para el mundo real","ancho":160,"alto":32};
const menu = [{"etiqueta":"Productos","ruta":"/es/productos","destacado":true,"submenu":[{"etiqueta":"Sistema de Vigilancia con IA","ruta":"/es/productos/sistema-vigilancia-ia","descripcion":"Detección autónoma de amenazas y respuesta con drones para municipalidades y empresas privadas.","icono":"/iconos/sistema-ia.svg"},{"etiqueta":"Dron de Defensa","ruta":"/es/productos/dron-defensa","descripcion":"Dron autónomo con respuesta programable, integrado al sistema de videovigilancia inteligente.","icono":"/iconos/comando.svg"},{"etiqueta":"Torreta Autónoma","ruta":"/es/productos/torreta-defensa","descripcion":"Defensa perimetral inteligente para comercios, almacenes y zonas de alto valor.","icono":"/iconos/desarrollo.svg"}]},{"etiqueta":"Empresa","ruta":"/es/nosotros","submenu":[{"etiqueta":"Quiénes somos","ruta":"/es/nosotros","descripcion":"Nuestra misión, visión y valores."},{"etiqueta":"Equipo","ruta":"/es/equipo","descripcion":"Conoce a los ingenieros e investigadores detrás de AI Robotics."}]},{"etiqueta":"Novedades","ruta":"/es/prensa","submenu":[{"etiqueta":"Proyectos en curso","ruta":"/es/prensa","descripcion":"En qué estamos trabajando ahora mismo: prototipos, hitos y avances técnicos."},{"etiqueta":"Blog","ruta":"/es/blog","descripcion":"Artículos técnicos, casos de uso y aprendizajes del equipo."},{"etiqueta":"Notas y comunicados","ruta":"/es/prensa#comunicados","descripcion":"Comunicados oficiales y apariciones en medios."}]},{"etiqueta":"Contacto","ruta":"/es/contacto"}];
const ctaPrincipal = {"etiqueta":"Solicitar demo","ruta":"/es/contacto?asunto=demo"};
const selectorIdioma = {"etiqueta":"Idioma","opciones":[{"codigo":"es","etiqueta":"Español","bandera":"/banderas/es.svg","ruta":"/es/"},{"codigo":"en","etiqueta":"English","bandera":"/banderas/en.svg","ruta":"/en/"}]};
const navegacion = {
  logo,
  menu,
  ctaPrincipal,
  selectorIdioma,
};

export { ctaPrincipal, navegacion as default, logo, menu, selectorIdioma };
