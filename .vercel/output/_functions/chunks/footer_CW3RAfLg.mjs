const logoMarca = {"src":"/imagenes/logos/footer-marca.svg","alt":"AI Robotics — autonomía y defensa con IA","ancho":480,"alto":60};
const lemaFinal = "Inteligencia artificial al servicio de la seguridad y la autonomía operativa.";
const respaldo = "Una empresa del grupo Codeplex";
const ctaFinal = {"titulo":"¿Listo para llevar tu seguridad al siguiente nivel?","descripcion":"Conversemos sobre cómo nuestros sistemas autónomos pueden proteger tu organización.","etiquetaBoton":"Agendar una demo","ruta":"/es/contacto?asunto=demo"};
const columnas = [{"titulo":"Productos","enlaces":[{"etiqueta":"Sistema de Vigilancia con IA","ruta":"/es/productos/sistema-vigilancia-ia"},{"etiqueta":"Dron de Defensa","ruta":"/es/productos/dron-defensa"},{"etiqueta":"Torreta Autónoma","ruta":"/es/productos/torreta-defensa"}]},{"titulo":"Empresa","enlaces":[{"etiqueta":"Nosotros","ruta":"/es/nosotros"},{"etiqueta":"Equipo","ruta":"/es/equipo"},{"etiqueta":"Novedades","ruta":"/es/prensa"},{"etiqueta":"Blog","ruta":"/es/blog"}]},{"titulo":"Soporte","enlaces":[{"etiqueta":"Contacto","ruta":"/es/contacto"},{"etiqueta":"Libro de reclamaciones","ruta":"https://www.consumidor.gob.pe/libro-de-reclamaciones"},{"etiqueta":"Política de privacidad","ruta":"/es/privacidad"},{"etiqueta":"Términos de uso","ruta":"/es/terminos"}]}];
const redes = [{"nombre":"LinkedIn","url":"https://www.linkedin.com/company/airobotics"},{"nombre":"YouTube","url":"https://www.youtube.com/@airobotics"},{"nombre":"Instagram","url":"https://www.instagram.com/airobotics"},{"nombre":"X / Twitter","url":"https://x.com/airobotics"}];
const copyright = "© {anio} AI Robotics S.A.C. Todos los derechos reservados.";
const credito = "Construido con Astro · Una empresa Codeplex";
const footer = {
  logoMarca,
  lemaFinal,
  respaldo,
  ctaFinal,
  columnas,
  redes,
  copyright,
  credito,
};

export { columnas, copyright, credito, ctaFinal, footer as default, lemaFinal, logoMarca, redes, respaldo };
