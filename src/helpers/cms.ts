import type { Idioma } from './idiomas';

export interface PostResumen {
  slug: string;
  titulo: string;
  resumen: string;
  categoria: string;
  fecha: string;
  lectura: string;
  portada?: string;
  autor?: { nombre: string; avatar?: string };
  destacado?: boolean;
}

export interface PostCompleto extends PostResumen {
  contenido: string;
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

interface PostCrudoCms {
  id: string;
  slug: string;
  titulo: string;
  resumen: string;
  contenido: string;
  formato_contenido: 'MARKDOWN' | 'HTML';
  idioma: string;
  estado: string;
  publicado_en: string | null;
  creado_en: string;
  categorias?: { nombre: string }[] | string[];
  etiquetas?: { nombre: string }[] | string[];
  seo_titulo?: string;
  seo_descripcion?: string;
}

interface SobreCrudo<T> {
  exito: boolean;
  datos: T | null;
  error?: { codigo: string; mensaje: string } | null;
}

const URL_BASE = (import.meta.env.CODEPLEX_API_URL ?? 'http://localhost:8080/api').replace(/\/$/, '');
const CODIGO_SITIO = import.meta.env.CODEPLEX_SITIO_CODIGO ?? 'AIROBOTICS';

const escaparHtml = (texto: string): string =>
  texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const aplicarInline = (linea: string): string =>
  escaparHtml(linea)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

const renderizarMarkdownLigero = (markdown: string): string => {
  const lineas = markdown.split('\n');
  const bloques: string[] = [];
  let parrafoBuffer: string[] = [];
  let listaBuffer: string[] = [];

  const cerrarParrafo = () => {
    if (parrafoBuffer.length) { bloques.push(`<p>${parrafoBuffer.map(aplicarInline).join(' ')}</p>`); parrafoBuffer = []; }
  };
  const cerrarLista = () => {
    if (listaBuffer.length) { bloques.push(`<ul>${listaBuffer.map(i => `<li>${aplicarInline(i)}</li>`).join('')}</ul>`); listaBuffer = []; }
  };

  for (const linea of lineas) {
    if (/^### (.+)/.test(linea)) { cerrarParrafo(); cerrarLista(); bloques.push(`<h3>${aplicarInline(linea.replace(/^### /, ''))}</h3>`); }
    else if (/^## (.+)/.test(linea)) { cerrarParrafo(); cerrarLista(); bloques.push(`<h2>${aplicarInline(linea.replace(/^## /, ''))}</h2>`); }
    else if (/^# (.+)/.test(linea)) { cerrarParrafo(); cerrarLista(); bloques.push(`<h1>${aplicarInline(linea.replace(/^# /, ''))}</h1>`); }
    else if (/^[-*] (.+)/.test(linea)) { cerrarParrafo(); listaBuffer.push(linea.replace(/^[-*] /, '')); }
    else if (linea.trim() === '') { cerrarParrafo(); cerrarLista(); }
    else { cerrarLista(); parrafoBuffer.push(linea); }
  }
  cerrarParrafo();
  cerrarLista();
  return bloques.join('\n');
};

const estimarLectura = (texto: string): string => {
  const palabras = texto.split(/\s+/).length;
  const minutos = Math.max(1, Math.round(palabras / 220));
  return `${minutos} min`;
};

const extraerNombre = (item: unknown): string =>
  typeof item === 'string' ? item : (item as { nombre?: string })?.nombre ?? '';

const aResumen = (crudo: PostCrudoCms): PostResumen => {
  const categorias = (crudo.categorias ?? []).map(extraerNombre).filter(Boolean);
  return {
    slug: crudo.slug,
    titulo: crudo.titulo,
    resumen: crudo.resumen,
    categoria: categorias[0] ?? 'General',
    fecha: (crudo.publicado_en ?? crudo.creado_en).slice(0, 10),
    lectura: estimarLectura(crudo.contenido),
  };
};

const aCompleto = (crudo: PostCrudoCms): PostCompleto => ({
  ...aResumen(crudo),
  contenido: crudo.formato_contenido === 'MARKDOWN' ? renderizarMarkdownLigero(crudo.contenido) : crudo.contenido,
  etiquetas: (crudo.etiquetas ?? []).map(extraerNombre).filter(Boolean),
  seo: {
    titulo: crudo.seo_titulo || undefined,
    descripcion: crudo.seo_descripcion || undefined,
  },
});

const consultar = async <T>(ruta: string): Promise<T | null> => {
  try {
    const respuesta = await fetch(`${URL_BASE}${ruta}`, { headers: { Accept: 'application/json' } });
    if (!respuesta.ok) return null;
    const sobre = (await respuesta.json()) as SobreCrudo<T>;
    if (!sobre.exito) return null;
    return sobre.datos;
  } catch {
    return null;
  }
};

export async function obtenerPosts(idioma: Idioma, opciones: OpcionesListado = {}): Promise<PostResumen[]> {
  const limite = opciones.limite ?? 20;
  const datos = await consultar<{ elementos: PostCrudoCms[] } | PostCrudoCms[]>(
    `/publico/sitios/${CODIGO_SITIO}/posts?pagina=1&tamano_pagina=${limite}`,
  );
  if (!datos) return [];
  const elementos = Array.isArray(datos) ? datos : datos.elementos ?? [];
  return elementos
    .filter((p) => p.idioma === idioma && p.estado === 'PUBLICADO')
    .filter((p) => !opciones.categoria || (p.categorias ?? []).map(extraerNombre).includes(opciones.categoria))
    .slice(opciones.offset ?? 0, (opciones.offset ?? 0) + limite)
    .map(aResumen);
}

export async function obtenerPostPorSlug(idioma: Idioma, slug: string): Promise<PostCompleto | null> {
  const crudo = await consultar<PostCrudoCms>(`/publico/sitios/${CODIGO_SITIO}/posts/${slug}`);
  if (!crudo) return null;
  if (crudo.idioma !== idioma) return null;
  return aCompleto(crudo);
}

export async function obtenerCategorias(_idioma: Idioma): Promise<string[]> {
  const datos = await consultar<{ nombre: string }[] | { elementos: { nombre: string }[] }>(
    `/publico/sitios/${CODIGO_SITIO}/categorias`,
  );
  if (!datos) return [];
  const elementos = Array.isArray(datos) ? datos : datos.elementos ?? [];
  return elementos.map((c) => c.nombre);
}
