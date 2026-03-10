import { useEffect } from 'react';

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
 * Manages document <head> tags for SEO.
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
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    setMeta('description', description);

    // OG tags
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    if (ogImage) setMeta('og:image', ogImage, 'property');

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    // Canonical
    const canonicalUrl = canonical || (path ? `${BASE_URL}${path}` : undefined);
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalUrl) {
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.rel = 'canonical';
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.href = canonicalUrl;
    }

    // hreflang - ES pages are canonical, EN mirrors under /en/
    document.querySelectorAll('link[hreflang]').forEach((el) => el.remove());
    if (path) {
      // Strip /en/ prefix if present to get the base path
      const basePath = path.startsWith('/en') ? path.replace(/^\/en/, '') || '/' : path;
      const enPath = basePath === '/' ? '/en' : `/en${basePath}`;

      addHreflang('es', `${BASE_URL}${basePath}`);
      addHreflang('en', `${BASE_URL}${enPath}`);
      addHreflang('x-default', `${BASE_URL}${basePath}`);
    }

    // noindex
    if (noIndex) {
      setMeta('robots', 'noindex,nofollow');
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) robotsMeta.remove();
    }

    // Schema markup (JSON-LD)
    const existingSchema = document.querySelector('script[data-seo-schema]');
    if (existingSchema) existingSchema.remove();
    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoSchema = 'true';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      document.querySelectorAll('link[hreflang]').forEach((el) => el.remove());
      const schemaEl = document.querySelector('script[data-seo-schema]');
      if (schemaEl) schemaEl.remove();
    };
  }, [title, description, canonical, path, noIndex, schema, ogImage]);

  return null;
};

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function addHreflang(lang: string, href: string) {
  const link = document.createElement('link');
  link.rel = 'alternate';
  link.hreflang = lang;
  link.href = href;
  document.head.appendChild(link);
}
