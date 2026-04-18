const logoMarca = {"src":"/imagenes/logos/footer-marca.svg","alt":"AI Robotics — autonomy and AI defense","ancho":480,"alto":60};
const lemaFinal = "Artificial intelligence at the service of security and operational autonomy.";
const respaldo = "A Codeplex group company";
const ctaFinal = {"titulo":"Ready to take your security to the next level?","descripcion":"Let's talk about how our autonomous systems can protect your organization.","etiquetaBoton":"Schedule a demo","ruta":"/en/contact?subject=demo"};
const columnas = [{"titulo":"Products","enlaces":[{"etiqueta":"AI Surveillance System","ruta":"/en/products/ai-surveillance-system"},{"etiqueta":"Defense Drone","ruta":"/en/products/defense-drone"},{"etiqueta":"Autonomous Turret","ruta":"/en/products/defense-turret"}]},{"titulo":"Company","enlaces":[{"etiqueta":"About","ruta":"/en/about"},{"etiqueta":"Team","ruta":"/en/team"},{"etiqueta":"News","ruta":"/en/press"},{"etiqueta":"Blog","ruta":"/en/blog"}]},{"titulo":"Support","enlaces":[{"etiqueta":"Contact","ruta":"/en/contact"},{"etiqueta":"Complaints book","ruta":"https://www.consumidor.gob.pe/libro-de-reclamaciones"},{"etiqueta":"Privacy policy","ruta":"/en/privacy"},{"etiqueta":"Terms of use","ruta":"/en/terms"}]}];
const redes = [{"nombre":"LinkedIn","url":"https://www.linkedin.com/company/airobotics"},{"nombre":"YouTube","url":"https://www.youtube.com/@airobotics"},{"nombre":"Instagram","url":"https://www.instagram.com/airobotics"},{"nombre":"X / Twitter","url":"https://x.com/airobotics"}];
const copyright = "© {anio} AI Robotics S.A.C. All rights reserved.";
const credito = "Built with Astro · A Codeplex company";
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
