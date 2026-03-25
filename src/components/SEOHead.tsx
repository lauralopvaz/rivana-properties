import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://rivanaproperties.com';

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
  const canonicalUrl = canonical || (path ? `${BASE_URL}${path}` : undefined);

  // hreflang computation
  let hreflangLinks: { lang: string; href: string }[] = [];
  if (path) {
    const basePath = path.startsWith('/en') ? path.replace(/^\/en/, '') || '/' : path;
    const enPath = basePath === '/' ? '/en' : `/en${basePath}`;
    hreflangLinks = [
      { lang: 'es', href: `${BASE_URL}${basePath}` },
      { lang: 'en', href: `${BASE_URL}${enPath}` },
      { lang: 'x-default', href: `${BASE_URL}${basePath}` },
    ];
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OG */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

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
