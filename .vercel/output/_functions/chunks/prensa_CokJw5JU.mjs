const hero = {"etiqueta":"NEWSROOM","titulo":"We document every prototype's progress in public.","subtitulo":"We publish the real progress of our hardware and software projects, instead of waiting for the final launch."};
const proyectosEnCurso = {"etiqueta":"ACTIVE PROJECTS","titulo":"Two active prototypes. One open roadmap.","items":[{"id":"torreta","titulo":"Autonomous perimeter-defense turret","estadoActual":"Detection + perimeter-fence validation","etapa":"Prototype in controlled testing","descripcion":"We've completed physical assembly and are validating the weapon-detection model and the virtual perimeter-fence logic. Next: tests in a controlled retail environment.","imagen":"/imagenes/productos/torreta-detalle.png","video":"/theme/uploads/ai-robotics/cyber-tech.mp4","siguientesPasos":["Tests in low-light conditions","Software-defined fence calibration","Integration with allowed/restricted time windows"]},{"id":"dron","titulo":"Defense drone with automated response","estadoActual":"Electromechanical design + integration with surveillance system","etapa":"Prototype in build","descripcion":"We're building the first drone capable of autonomously leaving its hangar when the surveillance central detects a threat. Working on the transmission module and the operator hand-off interface.","imagen":"/imagenes/productos/dron-defensa-detalle.png","video":"/theme/uploads/ai-robotics/dron-closeup.mp4","siguientesPasos":["Automated flight to GPS coordinates","Live video transmission to the control station","Operator take-over interface"]}]};
const comunicados = {"etiqueta":"RELEASES","titulo":"Official releases and media appearances.","vacioMensaje":"We haven't published official releases yet. This section will update as we hit press milestones worth sharing.","items":[]};
const contactoPrensa = {"titulo":"Press contact","descripcion":"Are you a journalist or media outlet interested in covering our progress? Reach us directly.","email":"press@airobotics.com.pe","ctaEtiqueta":"Write to press","ctaRuta":"/en/contact?subject=press"};
const prensa = {
  hero,
  proyectosEnCurso,
  comunicados,
  contactoPrensa,
};

export { comunicados, contactoPrensa, prensa as default, hero, proyectosEnCurso };
