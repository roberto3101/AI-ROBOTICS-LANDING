const hero = {"etiqueta":"TEAM","titulo":"A team built to make things that don't yet exist.","subtitulo":"Software, electronics, computer vision and mechatronics engineers working together under one roof."};
const miembros = [{"nombre":"Leadership team","cargo":"Codeplex / AI Robotics direction","bio":"Codeplex's founders lead the strategic direction of AI Robotics and the product roadmap.","foto":"/imagenes/equipo/equipo-1.jpg","categoria":"leadership"},{"nombre":"Engineering team","cargo":"Software, AI and computer vision","bio":"Designs the detection models, the automated dispatch systems, and the integration with third-party IP cameras.","foto":"/imagenes/equipo/equipo-2.jpg","categoria":"engineering"},{"nombre":"Hardware team","cargo":"Mechatronics, electronics and prototyping","bio":"Designs, assembles and tests the turret and drone. Iterates physical prototypes until operational behavior is validated.","foto":"/imagenes/equipo/equipo-3.jpg","categoria":"hardware"}];
const notaPlaceholder = "Individual photos and bios will be published as the team authorizes their release.";
const cultura = {"etiqueta":"HOW WE WORK","titulo":"Small teams. Fast iteration. Real-world testing.","principios":[{"titulo":"Build and test in a week","descripcion":"Every prototype milestone is validated in the real world before moving on."},{"titulo":"The human operator is part of the system","descripcion":"We design with the operator's final decision in mind, not to replace them."},{"titulo":"Document in public","descripcion":"We share project progress in our newsroom and on our channels."},{"titulo":"Software and hardware at the same table","descripcion":"Electronics decisions affect the model, and vice versa. We work together."}]};
const equipo = {
  hero,
  miembros,
  notaPlaceholder,
  cultura,
};

export { cultura, equipo as default, hero, miembros, notaPlaceholder };
