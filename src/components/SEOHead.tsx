import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://rivanaproperties.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/mondrian/mondrian-hero.jpg`;

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  path?: string;
  noIndex?: boolean;
  schema?: object;
  ogImage?: string;
}

/**
 * Manages document <head> tags for SEO via react-helmet-async.
 * Automatically adds hreflang tags for ES/EN based on path.
 * ES is default (no prefix), EN is under /en/.
 * Canonical always points to the ES (default) version.
 * Handles /en/property/ ↔ /propiedad/ route mapping for hreflang.
 */
export const SEOHead = ({
  title,
  description,
  canonical,
  path,
  noIndex,
  schema,
  ogImage,
}: SEOHeadProps) => {
  const resolvedOgImage = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`)
    : DEFAULT_OG_IMAGE;

  // Compute the ES (default) base path from the current path
  let esPath = path || '/';
  let enPath = '/en';

  if (path) {
    // Strip /en prefix to get base path
    const stripped = path.startsWith('/en') ? path.replace(/^\/en/, '') || '/' : path;

    // Handle /en/property/[slug] → /propiedad/[slug] mapping
    if (path.startsWith('/en/property/')) {
      const slug = path.replace('/en/property/', '');
      esPath = `/propiedad/${slug}`;
      enPath = `/en/property/${slug}`;
    } else if (path.startsWith('/propiedad/')) {
      esPath = path;
      enPath = `/en/property/${path.replace('/propiedad/', '')}`;
    } else {
      esPath = stripped;
      enPath = esPath === '/' ? '/en' : `/en${esPath}`;
    }
  }

  // Canonical ALWAYS points to ES (default) version
  const canonicalUrl = canonical || `${BASE_URL}${esPath}`;

  const hreflangLinks = [
    { lang: 'es', href: `${BASE_URL}${esPath}` },
    { lang: 'en', href: `${BASE_URL}${enPath}` },
    { lang: 'x-default', href: `${BASE_URL}${esPath}` },
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OG */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:site_name" content="Rivana Properties" />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedOgImage} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang */}
      {hreflangLinks.map((h) => (
        <link key={h.lang} rel="alternate" hrefLang={h.lang} href={h.href} />
      ))}

      {/* noindex */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};
