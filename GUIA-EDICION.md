# Guía de edición de contenido — AI Robotics

Esta guía está escrita para que **cualquier persona del equipo** (no solo desarrolladores) pueda cambiar textos, imágenes o agregar contenido al sitio, sin consola ni instalaciones.

---

## Cómo funciona en 10 segundos

El sitio es una **carpeta en GitHub**. Cada vez que alguien modifica un archivo y lo guarda, Vercel publica el cambio en producción automáticamente. No hay base de datos, no hay panel de administrador: todo vive en archivos de texto (JSON).

```
Editas un archivo en GitHub → guardas → Vercel publica en 1-2 minutos → el sitio se actualiza solo
```

---

## Qué archivos tocar para cada tarea

Todo el contenido del sitio vive en `src/datos/`. Hay dos carpetas: `es/` (español) y `en/` (inglés). **Siempre edita ambas** si quieres mantener el sitio bilingüe.

| Si quieres cambiar… | Abre este archivo |
|---|---|
| El texto del home | `src/datos/es/inicio.json` |
| El texto de "Nosotros" (misión, visión, valores, historia) | `src/datos/es/nosotros.json` |
| Los miembros del equipo | `src/datos/es/equipo.json` |
| La info de un producto (dron, torreta, sistema IA) | `src/datos/es/productos.json` |
| Los textos de un caso de uso (municipalidades, etc.) | `src/datos/es/casos.json` |
| Comunicados y notas de prensa | `src/datos/es/prensa.json` |
| Datos de contacto (email, teléfono) | `src/datos/es/contacto.json` |
| Links del menú y footer | `src/datos/es/navegacion.json` / `footer.json` |
| Aviso legal, privacidad, términos | `src/datos/es/legal.json` |
| Títulos SEO de cada página | `src/datos/es/seo.json` |

---

## Flujo de edición sin consola (desde GitHub web)

1. Entra al repo: [github.com/roberto3101/AI-ROBOTICS-LANDING](https://github.com/roberto3101/AI-ROBOTICS-LANDING)
2. Navega al archivo que quieres editar (por ejemplo, `src/datos/es/inicio.json`).
3. Arriba a la derecha hay un lápiz ✏️ → **Edit this file**.
4. Haz tus cambios respetando las comillas `"` y las comas `,`.
5. Abajo, en el cuadro "Commit changes", escribe qué cambiaste (ej: *"Actualizar teléfono de contacto"*) y pulsa **Commit changes**.
6. Espera 1-2 minutos → el sitio ya tiene tus cambios en [airobotics.com.pe](https://airobotics.com.pe).

> Si te pide elegir entre *"Commit directly to main"* y *"Create a new branch"*, elige **Commit directly to main**.

---

## Reglas de oro al editar un JSON

Los JSON son sensibles a los detalles. Sigue estas 3 reglas:

1. **No borres las comillas dobles** `"`. Todo lo que es texto va entre comillas.
2. **No borres las comas** `,` que separan elementos. La única excepción: el último elemento antes de un `]` o `}` NO lleva coma.
3. **Si GitHub te marca el archivo en rojo** al guardar, significa que se rompió la sintaxis. Pulsa "Cancel" y vuelve a intentarlo.

Ejemplo correcto:

```json
{
  "titulo": "Hola mundo",
  "descripcion": "Bienvenido al sitio"
}
```

Ejemplo roto (falta una coma):

```json
{
  "titulo": "Hola mundo"
  "descripcion": "Bienvenido al sitio"
}
```

---

## Cómo cambiar una imagen

Las imágenes viven en `public/imagenes/`. Hay subcarpetas por tipo:

```
public/imagenes/
├── hero/         ← imágenes grandes de portada
├── equipo/       ← fotos del equipo
├── productos/    ← fotos de productos
└── logos/        ← logos
```

**Para reemplazar una imagen existente:**

1. En GitHub, entra a la carpeta correspondiente.
2. Haz clic sobre la imagen que quieres reemplazar.
3. Pulsa el lápiz ✏️ (o "Delete this file" y luego sube la nueva con el mismo nombre).
4. Confirma los cambios.

**Importante:** la imagen nueva debe tener **exactamente el mismo nombre** que la que reemplaza, o no aparecerá.

**Formatos recomendados:** JPG para fotos, PNG o SVG para logos y elementos gráficos. Tamaño máximo sugerido: 1920px de ancho.

---

## Cómo agregar un comunicado de prensa

Abre `src/datos/es/prensa.json` y busca la sección `"comunicados"`. Verás esto:

```json
"comunicados": {
  "etiqueta": "COMUNICADOS",
  "titulo": "Notas oficiales y apariciones en medios.",
  "vacioMensaje": "Aún no publicamos comunicados oficiales...",
  "items": []
}
```

Agrega el nuevo comunicado dentro de `"items": [ ... ]`:

```json
"items": [
  {
    "fecha": "2026-05-15",
    "titulo": "AI Robotics presenta su primera torreta autónoma",
    "resumen": "Demostración pública del prototipo ante la Municipalidad de Miraflores."
  }
]
```

Si quieres agregar un segundo comunicado, **agrega una coma** después del `}` y pega otro bloque igual.

---

## Cómo agregar un miembro al equipo

Abre `src/datos/es/equipo.json`, busca `"miembros": [ ... ]` y agrega un bloque nuevo:

```json
{
  "nombre": "Nombre Apellido",
  "cargo": "Puesto que ocupa",
  "bio": "Una o dos frases sobre la persona.",
  "foto": "/imagenes/equipo/nombre-apellido.jpg",
  "categoria": "ingenieria"
}
```

**Antes** sube la foto a `public/imagenes/equipo/` con ese nombre exacto.

---

## Cómo agregar un nuevo caso de uso

1. Abre `src/datos/es/casos.json` y copia uno de los bloques existentes (por ejemplo `"municipalidades"`). Cambia el texto y las imágenes.
2. Abre `src/datos/es/inicio.json` y busca `"casosDeUso"`. Agrega una entrada nueva con su `"ruta"` apuntando a `/es/casos/TU-NUEVO-CASO`.
3. Espera el deploy y visita `airobotics.com.pe/es/casos/TU-NUEVO-CASO`.

---

## Cambios que sí necesitan a un desarrollador

Estas tareas tocan código, no datos, y requieren a alguien técnico:

- Cambiar el diseño visual (colores, tipografía, estructura de secciones).
- Agregar una página completamente nueva (fuera del patrón existente).
- Conectar el formulario de contacto con email o CRM.
- Cambiar integración de Cloudflare Turnstile.
- Actualizar dependencias o versiones de Astro / Tailwind.

Para eso, avisa al desarrollador asignado y comparte lo que quieres lograr.

---

## Si algo se rompió

1. Entra al commit donde todo funcionaba: [Commits history](https://github.com/roberto3101/AI-ROBOTICS-LANDING/commits/main).
2. Pulsa el botón **"Revert"** en el commit problemático, o avisa al desarrollador.
3. El sitio vuelve a la versión anterior en ~1 minuto.

**Nunca tienes que tocar la consola para revertir un cambio.**

---

## Resumen

- El contenido vive en `src/datos/es/*.json` (y `en/*.json` para inglés).
- Las imágenes viven en `public/imagenes/`.
- Editas en GitHub web, guardas, y Vercel publica solo.
- Siempre respeta comillas `"` y comas `,`.
- Si algo falla, existe el botón "Revert" del commit.
