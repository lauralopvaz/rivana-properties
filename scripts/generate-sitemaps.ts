// Regenerates public/sitemap.xml (ES), public/sitemap-en.xml (EN), and
// public/sitemap-index.xml. Runs before `vite dev` and `vite build`.
//
// Each bilingual entry emits xhtml:link alternates for es, en and x-default
// so search engines can pair the language variants.

import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://rivanaproperties.com";

type Freq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

interface Entry {
  es?: string; // path with leading slash, or undefined if EN-only
  en?: string; // path with leading slash, or undefined if ES-only
  priority?: string;
  changefreq?: Freq;
  lastmod?: string; // ISO YYYY-MM-DD
}

/** Bilingual + single-language public routes. Noindex pages (privacy) are omitted. */
const entries: Entry[] = [
  // Home
  { es: "/", en: "/en", priority: "1.0", changefreq: "weekly" },

  // Core sections
  { es: "/listings", en: "/en/listings", priority: "0.9", changefreq: "weekly" },
  { es: "/presale", en: "/en/presale", priority: "0.9", changefreq: "weekly" },
  { es: "/about", en: "/en/about", priority: "0.7", changefreq: "monthly" },
  { es: "/journal", en: "/en/journal", priority: "0.8", changefreq: "weekly" },
  { es: "/entregas-inmediatas", en: "/en/immediate-delivery", priority: "0.8", changefreq: "weekly" },

  // Destinations — Cancún Zona Hotelera
  { es: "/cancun/zona-hotelera", en: "/en/cancun/zona-hotelera", priority: "0.8", changefreq: "weekly" },
  { es: "/cancun/zona-hotelera/condos", en: "/en/cancun/zona-hotelera/condos", priority: "0.7", changefreq: "weekly" },
  { es: "/cancun/zona-hotelera/penthouses", en: "/en/cancun/zona-hotelera/penthouses", priority: "0.7", changefreq: "weekly" },
  { es: "/cancun/zona-hotelera/preventa", en: "/en/cancun/zona-hotelera/preventa", priority: "0.7", changefreq: "weekly" },

  // Destinations — Puerto Cancún
  { es: "/cancun/puerto-cancun", en: "/en/cancun/puerto-cancun", priority: "0.8", changefreq: "weekly" },
  { es: "/cancun/puerto-cancun/condos", en: "/en/cancun/puerto-cancun/condos", priority: "0.7", changefreq: "weekly" },
  { es: "/cancun/puerto-cancun/marina", en: "/en/cancun/puerto-cancun/marina", priority: "0.7", changefreq: "weekly" },
  { es: "/cancun/puerto-cancun/preventa", en: "/en/cancun/puerto-cancun/preventa", priority: "0.7", changefreq: "weekly" },

  // Destinations — Costa Mujeres
  { es: "/cancun/costa-mujeres", en: "/en/cancun/costa-mujeres", priority: "0.8", changefreq: "weekly" },
  { es: "/cancun/costa-mujeres/preventa", en: "/en/cancun/costa-mujeres/preventa", priority: "0.7", changefreq: "weekly" },
  { es: "/cancun/costa-mujeres/penthouses" }, // EN version redirects
  { es: "/costa-mujeres/la-amada", en: "/en/costa-mujeres/la-amada", priority: "0.7", changefreq: "monthly" },

  // Destinations — Centro
  { es: "/cancun/centro", en: "/en/cancun/centro", priority: "0.7", changefreq: "monthly" },
  { es: "/cancun/centro/condos", en: "/en/cancun/centro/condos", priority: "0.6", changefreq: "monthly" },

  // Destinations — Riviera Maya
  { es: "/mayakoba", en: "/en/mayakoba", priority: "0.8", changefreq: "weekly" },
  { es: "/puerto-morelos", en: "/en/puerto-morelos", priority: "0.7", changefreq: "monthly" },
  { es: "/playa-del-carmen", en: "/en/playa-del-carmen", priority: "0.7", changefreq: "monthly" },
  { es: "/playa-del-carmen/condos", en: "/en/playa-del-carmen/condos", priority: "0.6", changefreq: "monthly" },
  { es: "/playa-del-carmen/preventa", en: "/en/playa-del-carmen/preventa", priority: "0.6", changefreq: "monthly" },
  { es: "/tulum", en: "/en/tulum", priority: "0.7", changefreq: "monthly" },

  // Cancún landing pages (SEO paid intent, one language per URL)
  { es: "/cancun/departamentos-en-venta", en: "/en/cancun/condos-for-sale", priority: "0.7", changefreq: "weekly" },
  { en: "/en/cancun/beachfront-condos-for-sale", priority: "0.7", changefreq: "weekly" },
  { en: "/en/advisory", priority: "0.6", changefreq: "monthly" },

  // Salvia building (Zona Hotelera)
  { es: "/zona-hotelera/edificio-salvia", en: "/en/hotel-zone/salvia-building", priority: "0.6", changefreq: "monthly" },

  // Properties (bilingual: /propiedad/:slug ↔ /en/property/:slug)
  ...[
    "arbolada-towers",
    "bay-view-grand-grand-island",
    "cuore-cumbres-cancun",
    "dhamar-costa-mujeres",
    "kabeek-marina-condos",
    "mondrian-residences-grand-island-cancun",
    "sls-ocean-beach-puerto-cancun",
    "sole-blu-ocean-living",
    "the-reserve-at-mayakoba",
    "thompson-residences-puerto-cancun",
    "vellmari-grand-living",
    "village-blu-beach-apartments",
  ].map<Entry>((slug) => ({
    es: `/propiedad/${slug}`,
    en: `/en/property/${slug}`,
    priority: "0.8",
    changefreq: "weekly",
  })),

  // Journal posts (bilingual — same slug across languages)
  ...[
    "cancun-roi-rental-yield",
    "costa-mujeres-ultra-luxury-destination",
    "foreign-buyer-guide-mexico",
    "guia-preventa-cancun-2026",
    "invertir-en-preventa-cancun-riviera-maya-2026",
    "luxury-condos-zona-hotelera-cancun-2026-guide",
    "mayakoba-vs-puerto-cancun",
    "mondrian-residences-grand-island-cancun-guide",
    "mondrian-residences-grand-island-cancun-preventa",
    "uruguay-mayakoba-mundial-2026",
    "world-cup-2026-cancun-real-estate",
  ].map<Entry>((slug) => ({
    es: `/journal/${slug}`,
    en: `/en/journal/${slug}`,
    priority: "0.7",
    changefreq: "monthly",
  })),

  // ES-only journal post (Canadian buyers)
  { es: "/journal/comprar-propiedad-mexico-canadienses-2026", priority: "0.7", changefreq: "monthly" },

  // ES-only Tier-1 cluster — transactional
  { es: "/journal/departamentos-en-preventa-cancun", priority: "0.8", changefreq: "monthly", lastmod: "2026-07-12" },
  { es: "/journal/departamentos-en-venta-zona-hotelera-cancun", priority: "0.8", changefreq: "monthly", lastmod: "2026-07-12" },
  { es: "/journal/invertir-en-bienes-raices-cancun", priority: "0.8", changefreq: "monthly", lastmod: "2026-07-12" },
  { es: "/journal/preventa-puerto-cancun", priority: "0.8", changefreq: "monthly", lastmod: "2026-07-12" },
  { es: "/journal/departamentos-en-venta-costa-mujeres", priority: "0.8", changefreq: "monthly", lastmod: "2026-07-12" },
  { es: "/journal/departamentos-con-permiso-airbnb-cancun", priority: "0.8", changefreq: "monthly", lastmod: "2026-07-12" },
  { es: "/journal/plusvalia-en-cancun-2026", priority: "0.8", changefreq: "monthly", lastmod: "2026-07-12" },

  // EN-only Tier-1 cluster (foreign-buyer intent)
  { en: "/en/journal/fideicomiso-mexico-bank-trust-explained", priority: "0.8", changefreq: "monthly", lastmod: "2026-07-12" },
  { en: "/en/journal/buying-property-in-cancun-as-a-foreigner", priority: "0.8", changefreq: "monthly", lastmod: "2026-07-12" },

  // Retiring in Cancún — Canadian guide (bilingual, different slug per language)
  { es: "/journal/retirarse-en-cancun-2026-guia-canadiense", en: "/en/journal/retiring-in-cancun-2026-canadian-guide", priority: "0.7", changefreq: "monthly" },

  // Journal Tier-1 template demo (internal reference)
  { es: "/journal/journal-template-demo", en: "/en/journal/journal-template-demo", priority: "0.3", changefreq: "yearly", lastmod: "2026-07-12" },
];

function altLinks(e: Entry): string {
  const links: string[] = [];
  if (e.es) links.push(`    <xhtml:link rel="alternate" hreflang="es" href="${BASE_URL}${e.es}"/>`);
  if (e.en) links.push(`    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${e.en}"/>`);
  // x-default → English if available, else Spanish
  const xdef = e.en || e.es;
  if (xdef) links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${xdef}"/>`);
  return links.join("\n");
}

function urlBlock(loc: string, e: Entry): string {
  return [
    `  <url>`,
    `    <loc>${loc}</loc>`,
    altLinks(e),
    e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : "",
    e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : "",
    e.priority ? `    <priority>${e.priority}</priority>` : "",
    `  </url>`,
  ]
    .filter(Boolean)
    .join("\n");
}

function buildSitemap(lang: "es" | "en"): string {
  const urls = entries
    .filter((e) => (lang === "es" ? e.es : e.en))
    .map((e) => urlBlock(`${BASE_URL}${lang === "es" ? e.es : e.en}`, e))
    .join("\n");

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
    `        xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    urls,
    `</urlset>`,
    ``,
  ].join("\n");
}

function buildIndex(): string {
  const today = new Date().toISOString().slice(0, 10);
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    `  <sitemap>`,
    `    <loc>${BASE_URL}/sitemap.xml</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `  </sitemap>`,
    `  <sitemap>`,
    `    <loc>${BASE_URL}/sitemap-en.xml</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `  </sitemap>`,
    `</sitemapindex>`,
    ``,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), buildSitemap("es"));
writeFileSync(resolve("public/sitemap-en.xml"), buildSitemap("en"));
writeFileSync(resolve("public/sitemap-index.xml"), buildIndex());

const esCount = entries.filter((e) => e.es).length;
const enCount = entries.filter((e) => e.en).length;
console.log(`sitemap.xml (${esCount} ES) + sitemap-en.xml (${enCount} EN) + sitemap-index.xml written`);