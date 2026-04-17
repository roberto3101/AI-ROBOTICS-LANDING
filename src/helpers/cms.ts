/**
 * Capa de acceso al CMS del blog.
 *
 * Esta capa expone funciones puras que las páginas consumen sin conocer
 * el proveedor concreto (Sanity, Contentful, Strapi, Directus, etc.).
 *
 * Cuando exista el backend, se implementa el adaptador correspondiente
 * dentro de `obtenerPosts` / `obtenerPostPorSlug` consumiendo las
 * variables de entorno `CMS_*`. Ninguna página se tocará.
 *
 * Variables de entorno esperadas (a definir en `.env` cuando se integre):
 *   CMS_PROVIDER   = 'sanity' | 'contentful' | 'strapi' | ...
 *   CMS_ENDPOINT   = URL del API
 *   CMS_TOKEN      = token de lectura (nunca exponer al cliente)
 *   CMS_DATASET    = (opcional, Sanity)
 */

import type { Idioma } from './idiomas';

export interface PostResumen {
  slug: string;
  titulo: string;
  resumen: string;
  categoria: string;
  fecha: string;          // ISO 8601
  lectura: string;        // "5 min"
  portada?: string;       // URL de la imagen
  autor?: { nombre: string; avatar?: string };
  destacado?: boolean;
}

export interface PostCompleto extends PostResumen {
  contenido: string;      // HTML o portable-text serializado
  etiquetas?: string[];
  seo?: {
    titulo?: string;
    descripcion?: string;
    imagen?: string;
  };
}

export interface OpcionesListado {
  limite?: number;
  offset?: number;
  categoria?: string;
  soloDestacados?: boolean;
}

/**
 * Devuelve el listado de posts para un idioma.
 *
 * Implementación actual: stub que devuelve una lista vacía, de modo que
 * las páginas muestran su estado vacío ("próximamente"). Al integrar el
 * CMS solo hay que reemplazar el cuerpo de esta función — la firma y la
 * forma de los datos no cambian.
 */
export async function obtenerPosts(
  _idioma: Idioma,
  _opciones: OpcionesListado = {},
): Promise<PostResumen[]> {
  // TODO(backend): reemplazar por la query al CMS.
  //
  // Ejemplo Sanity:
  //   const client = createClient({ projectId, dataset, apiVersion, token });
  //   return client.fetch(`*[_type == "post" && idioma == $idioma]...`, { idioma: _idioma });
  //
  // Mientras tanto, lista vacía → la UI muestra el estado vacío.
  return [];
}

/**
 * Devuelve un post individual por slug, o null si no existe.
 */
export async function obtenerPostPorSlug(
  _idioma: Idioma,
  _slug: string,
): Promise<PostCompleto | null> {
  // TODO(backend): query al CMS para un post específico por slug + idioma.
  return null;
}

/**
 * Devuelve las categorías disponibles en el idioma.
 * Útil para filtros o navegación secundaria del blog.
 */
export async function obtenerCategorias(_idioma: Idioma): Promise<string[]> {
  // TODO(backend): query distinct de categorías en el CMS.
  return [];
}
