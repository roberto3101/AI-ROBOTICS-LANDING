/**
 * Helper para construir el objeto SEO de cada página.
 * Centraliza la composición de título, descripción, OG y JSON-LD.
 */
import type { Idioma } from './idiomas';
import { LOCALES_HTML, obtenerRutaEquivalente, IDIOMAS_DISPONIBLES } from './idiomas';

export interface DatosSeo {
  titulo: string;
  descripcion: string;
  imagen?: string;
  tipo?: 'website' | 'article' | 'product';
  noindex?: boolean;
  canonical?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export interface SeoComputado extends DatosSeo {
  tituloFinal: string;
  url: string;
  imagenAbsoluta: string;
  hreflangs: { lang: string; href: string }[];
  locale: string;
  alternateLocale: string;
}

const SITE_URL = (import.meta.env.PUBLIC_SITE_URL ?? 'https://airobotics.com.pe').replace(/\/$/, '');

export function calcularSeo(
  idioma: Idioma,
  pathname: string,
  datos: DatosSeo,
  globalSeo: { siteName: string; tituloPorDefecto: string; tituloFormato: string; descripcionPorDefecto: string; imagenOg: string },
): SeoComputado {
  const rutaLimpia = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  const url = `${SITE_URL}${rutaLimpia}`;

  const tituloFinal = datos.titulo
    ? globalSeo.tituloFormato.replace('%s', datos.titulo)
    : globalSeo.tituloPorDefecto;

  const imagen = datos.imagen ?? globalSeo.imagenOg;
  const imagenAbsoluta = imagen.startsWith('http') ? imagen : `${SITE_URL}${imagen}`;

  const hreflangs = IDIOMAS_DISPONIBLES.map((codigo) => ({
    lang: LOCALES_HTML[codigo],
    href: `${SITE_URL}${obtenerRutaEquivalente(rutaLimpia, codigo)}`,
  }));
  hreflangs.push({ lang: 'x-default', href: `${SITE_URL}${obtenerRutaEquivalente(rutaLimpia, 'es')}` });

  return {
    ...datos,
    tituloFinal,
    url,
    imagenAbsoluta,
    hreflangs,
    locale: LOCALES_HTML[idioma],
    alternateLocale: LOCALES_HTML[idioma === 'es' ? 'en' : 'es'],
  };
}

/**
 * Construye un Organization JSON-LD reutilizable.
 */
export function organizacionJsonLd(empresa: {
  nombre: string;
  nombreLegal: string;
  descripcionCorta: string;
  ubicacion: { ciudad: string; pais: string; direccion: string; codigoPostal: string };
  contacto: { emailGeneral: string; telefono: string };
  redesSociales: { url: string }[];
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: empresa.nombre,
    legalName: empresa.nombreLegal,
    url: SITE_URL,
    logo: `${SITE_URL}/imagenes/logos/airobotics.svg`,
    description: empresa.descripcionCorta,
    address: {
      '@type': 'PostalAddress',
      streetAddress: empresa.ubicacion.direccion,
      addressLocality: empresa.ubicacion.ciudad,
      addressCountry: empresa.ubicacion.pais,
      postalCode: empresa.ubicacion.codigoPostal,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: empresa.contacto.emailGeneral,
        telephone: empresa.contacto.telefono,
      },
    ],
    sameAs: empresa.redesSociales.map((r) => r.url),
  };
}

/**
 * Construye un BreadcrumbList JSON-LD.
 */
export function migasJsonLd(items: { nombre: string; ruta: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.nombre,
      item: `${SITE_URL}${item.ruta}`,
    })),
  };
}
