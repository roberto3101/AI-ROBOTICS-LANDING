/**
 * Utilidades para manejar la internacionalización (i18n).
 * - Carga datos JSON por idioma.
 * - Calcula rutas equivalentes entre /es/* y /en/*.
 */

export type Idioma = 'es' | 'en';

export const IDIOMAS_DISPONIBLES: Idioma[] = ['es', 'en'];
export const IDIOMA_POR_DEFECTO: Idioma = 'es';

export const ETIQUETAS_IDIOMA: Record<Idioma, string> = {
  es: 'Español',
  en: 'English',
};

export const LOCALES_HTML: Record<Idioma, string> = {
  es: 'es-PE',
  en: 'en-US',
};

/**
 * Detecta el idioma a partir de la ruta. Si la ruta no tiene prefijo /es o /en,
 * devuelve el idioma por defecto.
 */
export function obtenerIdiomaDesdeRuta(pathname: string): Idioma {
  const partes = pathname.split('/').filter(Boolean);
  const primero = partes[0];
  if (primero === 'es' || primero === 'en') return primero;
  return IDIOMA_POR_DEFECTO;
}

/**
 * Mapeo de slugs equivalentes entre idiomas para construir hreflang correctos.
 * Clave = slug en español, valor = slug en inglés (sin prefijo de idioma).
 */
const MAPA_RUTAS: Record<string, string> = {
  '': '',
  nosotros: 'about',
  productos: 'products',
  'productos/sistema-vigilancia-ia': 'products/ai-surveillance-system',
  'productos/dron-defensa': 'products/defense-drone',
  'productos/torreta-defensa': 'products/defense-turret',
  equipo: 'team',
  carreras: 'careers',
  prensa: 'press',
  contacto: 'contact',
  privacidad: 'privacy',
  terminos: 'terms',
  'libro-reclamaciones': 'claims-book',
};

const MAPA_INVERSO: Record<string, string> = Object.fromEntries(
  Object.entries(MAPA_RUTAS).map(([es, en]) => [en, es]),
);

/**
 * Dada una ruta `/es/...` o `/en/...`, devuelve su equivalente en el otro idioma.
 */
export function obtenerRutaEquivalente(pathname: string, destino: Idioma): string {
  const limpio = pathname.replace(/\/$/, '');
  const partes = limpio.split('/').filter(Boolean);
  const origen = (partes[0] === 'es' || partes[0] === 'en') ? partes[0] : IDIOMA_POR_DEFECTO;
  if (origen === destino) return pathname;

  const slugSinIdioma = partes.slice(1).join('/');
  if (origen === 'es' && destino === 'en') {
    const en = MAPA_RUTAS[slugSinIdioma];
    if (en !== undefined) return `/en/${en}`.replace(/\/$/, '') || '/en';
  }
  if (origen === 'en' && destino === 'es') {
    const es = MAPA_INVERSO[slugSinIdioma];
    if (es !== undefined) return `/es/${es}`.replace(/\/$/, '') || '/es';
  }
  // fallback: solo cambia el prefijo
  return `/${destino}/${slugSinIdioma}`.replace(/\/$/, '') || `/${destino}`;
}

/**
 * Carga datos JSON por idioma. Usa import dinámico (los datos quedan dentro
 * del bundle generado por Vite).
 */
export async function cargarDatos<T = unknown>(
  idioma: Idioma,
  archivo: string,
): Promise<T> {
  // Vite admite glob para resolver imports estáticamente
  const modulos = import.meta.glob<{ default: unknown }>('../datos/**/*.json');
  const ruta = `../datos/${idioma}/${archivo}.json`;
  const cargador = modulos[ruta];
  if (!cargador) {
    throw new Error(`No existe el archivo de datos: ${ruta}`);
  }
  const modulo = await cargador();
  return modulo.default as T;
}

/**
 * Carga el archivo de textos genéricos (UI compartida) por idioma.
 */
export async function cargarTextosUi<T = unknown>(idioma: Idioma): Promise<T> {
  const modulos = import.meta.glob<{ default: unknown }>('../idiomas/*.json');
  const ruta = `../idiomas/${idioma}.json`;
  const cargador = modulos[ruta];
  if (!cargador) throw new Error(`No existe textos UI: ${ruta}`);
  const modulo = await cargador();
  return modulo.default as T;
}

/**
 * Helper formateador para reemplazar placeholders {clave} en un texto plantilla.
 */
export function formatear(plantilla: string, valores: Record<string, string | number>): string {
  return plantilla.replace(/\{(\w+)\}/g, (_, clave) => String(valores[clave] ?? `{${clave}}`));
}
