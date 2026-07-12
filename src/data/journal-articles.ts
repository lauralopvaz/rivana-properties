import imgCancunRoi from '@/assets/journal/cancun-roi.jpg';
import imgForeignBuyer from '@/assets/journal/foreign-buyer-guide.jpg';
import imgWorldCup from '@/assets/journal/world-cup-2026.jpg';
import imgLuxuryCondos from '@/assets/journal/luxury-condos-zona-hotelera.jpg';
import imgCostaMujeres from '@/assets/journal/costa-mujeres-luxury.jpg';
import imgMayakoba from '@/assets/journal/mayakoba-vs-puerto-cancun.jpg';
import imgGuiaPreventa from '@/assets/journal/guia-preventa.jpg';
import imgPuenteNichupte from '@/assets/journal/puente-nichupte.jpg';

import imgUruguayMayakoba from '@/assets/reserve-mayakoba-fachada-alberca-jardin.jpg';
import imgPreSaleGuide from '@/assets/journal/guia-preventa.jpg';
import imgCanadianBuyer from '@/assets/journal/foreign-buyer-guide.jpg';
import imgRetireCancun from '@/assets/journal/retire-cancun-riviera-maya.jpg';
const imgMondrianHero = '/images/mondrian/mondrian-hero.jpg';
const imgDemo = '/images/mondrian/mondrian-hero.jpg'; // placeholder for template demo
const imgDeptosPreventa = imgGuiaPreventa;
const imgInvertirBienesRaices = imgCancunRoi;

export interface JournalArticle {
  slug: string;
  /** Optional different slug for English route */
  slugEn?: string;
  title: { es: string; en: string };
  /** Optional SEO title override (max 60 chars) */
  seoTitle?: { es: string; en: string };
  category: { es: string; en: string };
  excerpt: { es: string; en: string };
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
  image: string;
  /** Related destination keys for internal linking */
  relatedDestinations: string[];
  /** ISO date YYYY-MM-DD for "Actualizado {mes año}" and JSON-LD dateModified */
  updatedDate?: string;
  /** WhatsApp CTA keyword (e.g. "PREVENTA"), used in template CTAs */
  whatsappKeyword?: string;
  /** Prefilled WhatsApp message per language */
  whatsappMessage?: { es: string; en: string };
  /** Manual related-article slugs (3). Overrides destination-based auto-related. */
  relatedSlugs?: string[];
  /** FAQ entries — used to auto-render FAQPage JSON-LD */
  faqs?: { es: { q: string; a: string }[]; en: { q: string; a: string }[] };
  /** External sources rendered at the foot of the article */
  sources?: { title: string; url: string; publisher?: string }[];
}

export const journalArticles: JournalArticle[] = [
  {
    slug: 'retirarse-en-cancun-2026-guia-canadiense',
    slugEn: 'retiring-in-cancun-2026-canadian-guide',
    title: {
      es: 'Retirarse en Cancún 2026 – Guía Canadiense',
      en: 'Retiring in Cancún 2026 – The Canadian Guide',
    },
    seoTitle: {
      es: 'Retirarse en Cancún 2026: Guía para Canadienses | Rivana',
      en: 'Retiring in Cancún 2026: The Canadian Guide | Rivana',
    },
    category: { es: 'Estilo de vida', en: 'Lifestyle' },
    excerpt: {
      es: 'Nuevas reglas de visa 2026, costo de vida real y dónde comprar: Cancún, Puerto Morelos o Costa Mujeres. La guía para jubilados canadienses.',
      en: 'New 2026 visa rules, real cost of living, and where to buy: Cancún, Puerto Morelos or Costa Mujeres. The guide for Canadian retirees.',
    },
    date: 'Jul 12, 2026',
    readTime: '12 min',
    author: 'Rivana Properties Advisory Team',
    image: imgRetireCancun,
    relatedDestinations: ['costa-mujeres', 'puerto-morelos', 'puerto-cancun', 'zona-hotelera'],
  },
  {
    slug: 'retire-cancun-riviera-maya-american-canadian-2026',
    slugEn: 'retire-cancun-riviera-maya-american-canadian-2026',
    title: {
      es: 'Retirarse en Cancún y la Riviera Maya: Guía 2026 para Estadounidenses y Canadienses',
      en: 'Retiring in Cancún and the Riviera Maya: The 2026 Guide for Americans and Canadians',
    },
    seoTitle: {
      es: 'Retirarse en Cancún y Riviera Maya: Guía 2026',
      en: 'Retiring in Cancún & Riviera Maya: 2026 Guide',
    },
    category: { es: 'Estilo de vida', en: 'Lifestyle' },
    excerpt: {
      es: 'Todo lo que estadounidenses y canadienses necesitan saber para retirarse en Cancún y la Riviera Maya en 2026 — costo de vida, visas, salud, propiedad y las mejores zonas para comprar.',
      en: 'Everything Americans and Canadians need to know about retiring in Cancún and the Riviera Maya in 2026 — cost of living, visas, healthcare, property ownership, and the best zones to buy.',
    },
    date: 'May 19, 2026',
    readTime: '13 min',
    author: 'Rivana Properties Advisory Team',
    image: imgRetireCancun,
    relatedDestinations: ['zona-hotelera', 'puerto-cancun', 'mayakoba', 'puerto-morelos', 'playa-del-carmen'],
  },
  {
    slug: 'buying-property-mexico-canadian-2026-guide',
    slugEn: 'buying-property-mexico-canadian-2026-guide',
    title: {
      es: 'Comprar Propiedad en México Siendo Canadiense: Guía Completa 2026',
      en: 'Buying Property in Mexico as a Canadian: The 2026 Complete Guide',
    },
    seoTitle: {
      es: 'Comprar en México Siendo Canadiense: Guía 2026',
      en: 'Buying Property in Mexico as a Canadian: 2026 Guide',
    },
    category: { es: 'Guías', en: 'Guides' },
    excerpt: {
      es: 'Todo lo que los canadienses deben saber antes de comprar en Cancún y la Riviera Maya: fideicomiso, T1135, costos de cierre, estrategia snowbird y las mejores zonas en 2026.',
      en: 'Everything Canadians need to know before buying property in Cancún and the Riviera Maya: fideicomiso, T1135 disclosure, closing costs, snowbird strategy, and the best zones for 2026.',
    },
    date: 'May 15, 2026',
    readTime: '14 min',
    author: 'Rivana Properties Advisory Team',
    image: imgCanadianBuyer,
    relatedDestinations: ['zona-hotelera', 'puerto-cancun', 'costa-mujeres', 'mayakoba', 'puerto-morelos'],
  },
  {
    slug: 'portugal-mundial-2026-riviera-maya-inversion-inmobiliaria',
    title: {
      es: 'Portugal Eligió la Riviera Maya para el Mundial 2026 — El Mapa Inmobiliario del Caribe Mexicano Cambia Para Siempre',
      en: 'Portugal Chose the Riviera Maya for the 2026 World Cup — The Mexican Caribbean Real Estate Map Changes Forever',
    },
    seoTitle: {
      es: 'Portugal Mundial 2026 Riviera Maya — Inversión',
      en: 'Portugal World Cup 2026 Riviera Maya — Investment',
    },
    category: { es: 'Mercado', en: 'Market' },
    excerpt: {
      es: 'Cristiano Ronaldo y Portugal tendrán base en Fairmont Mayakoba durante el Mundial FIFA 2026. Analizamos el impacto en demanda de renta vacacional y plusvalía en Mayakoba y la Riviera Maya.',
      en: 'Cristiano Ronaldo and Portugal will be based at Fairmont Mayakoba during FIFA World Cup 2026. We analyze the impact on vacation rental demand and appreciation across Mayakoba and the Riviera Maya.',
    },
    date: 'May 5, 2026',
    readTime: '13 min',
    author: 'Rivana Properties',
    featured: true,
    image: imgUruguayMayakoba,
    relatedDestinations: ['mayakoba', 'playa-del-carmen'],
  },
  {
    slug: 'puente-nichupte-zona-hotelera-cancun-plusvalia',
    title: {
      es: 'El Puente Nichupté Acaba de Abrir — y la Zona Hotelera de Cancún Ya No Es la Misma',
      en: 'The Nichupté Bridge Just Opened — and Cancún\'s Hotel Zone Will Never Be the Same',
    },
    seoTitle: {
      es: 'Puente Nichupté: Plusvalía en la Zona Hotelera Cancún',
      en: 'Nichupté Bridge: Hotel Zone Cancún Appreciation 2026',
    },
    category: { es: 'Mercado', en: 'Market' },
    excerpt: {
      es: 'El Puente Nichupté abrió el 2 de mayo de 2026. 11.2 km que conectan Cancún con la Zona Hotelera en 10 minutos. Analizamos el impacto real en plusvalía e inversión en proyectos como Mondrian Residences at Grand Island y Bay View Grand.',
      en: 'The Nichupté Bridge opened on May 2, 2026. 11.2 km connecting Cancún with the Hotel Zone in 10 minutes. We analyze the real impact on appreciation and investment for projects like Mondrian Residences at Grand Island and Bay View Grand.',
    },
    date: 'May 5, 2026',
    readTime: '9 min',
    author: 'Rivana Properties',
    featured: true,
    image: imgPuenteNichupte,
    relatedDestinations: ['zona-hotelera'],
  },
  {
    slug: 'uruguay-mayakoba-mundial-2026',
    title: {
      es: 'Uruguay Eligió Mayakoba para el Mundial 2026 — Y Tú Puedes Ser Propietario Ahí Mismo',
      en: 'Uruguay Chose Mayakoba for the 2026 World Cup — And You Can Own Property There',
    },
    category: { es: 'Mercado', en: 'Market' },
    excerpt: {
      es: 'La selección de Uruguay, con Valverde, Darwin Núñez y Araujo, se concentrará en el Fairmont Mayakoba durante el Mundial FIFA 2026. Descubre por qué invertir en The Reserve at Mayakoba.',
      en: 'Uruguay\'s national team will be based at Fairmont Mayakoba during FIFA World Cup 2026. Discover why now is the moment to invest in The Reserve at Mayakoba.',
    },
    date: 'Mar 25, 2026',
    readTime: '9 min',
    author: 'Alejandra Reyes',
    featured: true,
    image: imgUruguayMayakoba,
    relatedDestinations: ['mayakoba', 'playa-del-carmen'],
  },
  {
    slug: 'cancun-roi-rental-yield',
    title: {
      es: 'Rendimiento de Inversión y Renta en Cancún 2026: Análisis por Zona',
      en: 'Cancún Investment Returns & Rental Yield 2026: A Zone-by-Zone Analysis',
    },
    seoTitle: {
      es: 'ROI y Rendimiento de Renta en Cancún 2026',
      en: 'Cancún ROI & Rental Yield 2026 | Rivana',
    },
    category: { es: 'Inversión', en: 'Investment' },
    excerpt: {
      es: 'Análisis completo de plusvalía, rendimientos de renta y ROI inmobiliario en Zona Hotelera, Puerto Cancún y Cancún Centro para 2026.',
      en: 'Complete analysis of appreciation, rental yields and real estate ROI across Cancún\'s Hotel Zone, Puerto Cancún and Downtown Cancún for 2026.',
    },
    date: 'Mar 25, 2026',
    readTime: '12 min',
    author: 'Carlos Mendoza',
    image: imgCancunRoi,
    relatedDestinations: ['zona-hotelera', 'costa-mujeres', 'puerto-cancun'],
  },
  {
    slug: 'foreign-buyer-guide-mexico',
    title: {
      es: 'Guía Completa para Compradores Extranjeros en México: Paso a Paso 2026',
      en: 'How to Buy Property in Mexico as a Foreigner: Complete 2026 Guide',
    },
    seoTitle: {
      es: 'Comprar en México Siendo Extranjero: Guía 2026',
      en: 'Buy Property in Mexico as a Foreigner 2026',
    },
    category: { es: 'Guías', en: 'Guides' },
    excerpt: {
      es: 'Cómo comprar propiedad en México siendo extranjero: fideicomiso, costos de cierre, preventas y opciones de inversión en Cancún y la Riviera Maya. Guía actualizada 2026 para inversionistas de EE.UU., Canadá y Europa.',
      en: 'Step-by-step guide for Americans and Canadians buying property in Cancún and the Riviera Maya. Learn how the fideicomiso works, what closing costs to expect, and which pre-sale properties offer the best returns in 2026.',
    },
    date: 'Feb 28, 2026',
    readTime: '12 min',
    author: 'Sofía Laurent',
    image: imgForeignBuyer,
    relatedDestinations: ['zona-hotelera', 'puerto-cancun'],
  },
  {
    slug: 'world-cup-2026-cancun-real-estate',
    title: {
      es: 'Cancún y el Mercado Inmobiliario en 2026: Todo lo que un Inversionista Necesita Saber',
      en: 'Cancún Real Estate in 2026: Everything an Investor Needs to Know',
    },
    seoTitle: {
      es: 'Cancún Real Estate 2026: Guía del Inversionista',
      en: 'Cancún Real Estate 2026: Investor Guide',
    },
    category: { es: 'Mercado', en: 'Market' },
    excerpt: {
      es: 'Análisis completo del mercado inmobiliario de Cancún en 2026: plusvalía por zona, datos AMPI, impacto del Mundial FIFA, rendimientos reales y las mejores propiedades del portafolio Rivana.',
      en: 'Everything an investor needs to know about Cancún\'s real estate market in 2026. AMPI data, zone-by-zone appreciation, World Cup impact, true rental yields and the best Rivana properties.',
    },
    date: 'Mar 25, 2026',
    readTime: '14 min',
    author: 'Alejandra Reyes',
    featured: true,
    image: imgWorldCup,
    relatedDestinations: ['mayakoba', 'zona-hotelera', 'costa-mujeres', 'puerto-cancun'],
  },
  {
    slug: 'luxury-condos-zona-hotelera-cancun-2026-guide',
    title: {
      es: 'Condominios de Lujo en la Zona Hotelera de Cancún: Guía Definitiva 2026',
      en: 'Luxury Condos in Cancún\'s Hotel Zone: The Definitive 2026 Guide',
    },
    seoTitle: {
      es: 'Condos de Lujo Zona Hotelera Cancún 2026',
      en: 'Hotel Zone Cancún Luxury Condos Guide 2026',
    },
    category: { es: 'Destinos', en: 'Destinations' },
    excerpt: {
      es: 'Guía completa para comprar condominios de lujo en la Zona Hotelera de Cancún en 2026. Precios por zona, comparativa de desarrollos y propiedades del portafolio Rivana.',
      en: 'Complete guide to buying luxury condominiums in Cancún\'s Hotel Zone in 2026. Zone-by-zone pricing, development comparison and the best Rivana properties.',
    },
    date: 'Mar 25, 2026',
    readTime: '12 min',
    author: 'Sofía Laurent',
    image: imgLuxuryCondos,
    relatedDestinations: ['zona-hotelera', 'puerto-cancun'],
  },
  {
    slug: 'costa-mujeres-ultra-luxury-destination',
    title: {
      es: 'Costa Mujeres: El Nuevo Epicentro de Inversión en el Caribe Mexicano',
      en: 'Costa Mujeres: The New Investment Epicenter of the Mexican Caribbean',
    },
    seoTitle: {
      es: 'Costa Mujeres: Zona de Inversión Top 2026',
      en: 'Costa Mujeres Luxury Investment Guide 2026',
    },
    category: { es: 'Inversión', en: 'Investment' },
    excerpt: {
      es: 'Por qué Costa Mujeres es la zona de mayor plusvalía en el corredor norte de Cancún en 2026. Análisis de precios, rendimientos, sub-zonas y propiedades Rivana.',
      en: 'Why Costa Mujeres is the highest-appreciation zone in Cancún\'s northern corridor in 2026. Price analysis, yields, sub-zones and Rivana portfolio properties.',
    },
    date: 'Mar 25, 2026',
    readTime: '10 min',
    author: 'Alejandra Reyes',
    featured: true,
    image: imgCostaMujeres,
    relatedDestinations: ['costa-mujeres'],
  },
  {
    slug: 'mayakoba-vs-puerto-cancun',
    title: {
      es: 'Mayakoba vs Puerto Cancún: Comparativa Definitiva para el Inversionista de Lujo 2026',
      en: 'Mayakoba vs Puerto Cancún: The Definitive Luxury Investment Comparison for 2026',
    },
    seoTitle: {
      es: 'Mayakoba vs Puerto Cancún: ¿Cuál Elegir?',
      en: 'Mayakoba vs Puerto Cancún: 2026 Comparison',
    },
    category: { es: 'Destinos', en: 'Destinations' },
    excerpt: {
      es: 'Comparativa definitiva entre Mayakoba y Puerto Cancún para inversionistas de lujo en 2026. Precios por m², plusvalía, rendimiento de renta y perfil de comprador.',
      en: 'The definitive comparison between Mayakoba and Puerto Cancún for luxury investors in 2026. Price per m², appreciation, rental yield and buyer profile.',
    },
    date: 'Mar 25, 2026',
    readTime: '13 min',
    author: 'Carlos Mendoza',
    image: imgMayakoba,
    relatedDestinations: ['mayakoba', 'puerto-cancun'],
  },
  {
    slug: 'invertir-en-preventa-cancun-riviera-maya-2026',
    title: {
      es: 'Por Qué Invertir en Preventa en Cancún y la Riviera Maya es la Mejor Decisión de 2026',
      en: 'Why Investing in Pre-Sale Property in Cancún and the Riviera Maya Is the Best Decision of 2026',
    },
    category: { es: 'Guías', en: 'Guides' },
    excerpt: {
      es: 'Por qué comprar una propiedad en preventa en Cancún o la Riviera Maya es la mejor decisión de inversión en 2026. Plusvalía, esquemas de pago, riesgos y las mejores propiedades del portafolio Rivana.',
      en: 'Why buying pre-sale property in Cancún or the Riviera Maya is the smartest real estate investment in 2026. Appreciation, payment plans, risks and the best pre-sale properties from Rivana\'s verified portfolio.',
    },
    date: 'Mar 25, 2026',
    readTime: '14 min',
    author: 'Alejandra Reyes',
    featured: true,
    image: imgPreSaleGuide,
    relatedDestinations: ['zona-hotelera', 'puerto-cancun', 'costa-mujeres', 'mayakoba'],
    /** EN uses a different slug */
    slugEn: 'why-invest-presale-cancun-riviera-maya-2026',
  },
  {
    slug: 'guia-preventa-cancun-2026',
    slugEn: 'pre-sale-guide-cancun-2026',
    title: {
      es: 'Guía de Preventa en Cancún 2026: Todo lo que Necesitas Saber',
      en: 'Pre-Sale Guide Cancún 2026: Everything You Need to Know',
    },
    seoTitle: {
      es: 'Guía de Preventa en Cancún 2026 | Rivana',
      en: 'Pre-Sale Guide Cancún 2026 | Rivana',
    },
    category: { es: 'Guías', en: 'Guides' },
    excerpt: {
      es: 'Todo lo que necesitas saber sobre comprar en preventa en Cancún este 2026. Ventajas, riesgos, esquemas de pago y las mejores oportunidades del portafolio Rivana.',
      en: 'Everything you need to know about buying pre-sale property in Cancún in 2026. Advantages, risks, payment plans and the best opportunities from the Rivana portfolio.',
    },
    date: 'Mar 1, 2026',
    readTime: '10 min',
    author: 'Alejandra Reyes',
    image: imgGuiaPreventa,
    relatedDestinations: ['zona-hotelera', 'costa-mujeres', 'puerto-cancun'],
  },
  {
    slug: 'mondrian-residences-grand-island-cancun-guide',
    title: {
      es: 'Mondrian Residences at Grand Island Cancun: la guía que necesitas antes de decidir',
      en: 'Mondrian Residences at Grand Island Cancun: The Guide You Need Before You Decide',
    },
    seoTitle: {
      es: 'Mondrian Residences at Grand Island Cancun — Lo Que Debes Saber',
      en: 'Mondrian Residences at Grand Island Cancun — Everything You Need to Know',
    },
    category: { es: 'Inversión', en: 'Investment' },
    excerpt: {
      es: 'Guía completa de Mondrian Residences at Grand Island Cancun: precio, plan de pagos, amenidades con campo de golf, respaldo Marca Elite internacional y vistas al mar y laguna que jamás serán obstruidas.',
      en: 'Complete guide to Mondrian Residences at Grand Island Cancun: Marca Elite internacional backing, golf course, unobstructed Caribbean and lagoon views, pre-sale pricing and 30/20/50 payment plan.',
    },
    date: 'Apr 10, 2026',
    readTime: '11 min',
    author: 'Rivana Properties',
    image: imgMondrianHero,
    relatedDestinations: ['zona-hotelera'],
  },
  {
    slug: 'mondrian-residences-grand-island-cancun-preventa',
    slugEn: 'mondrian-residences-grand-island-cancun-presale',
    title: {
      es: 'Mondrian Residences at Grand Island Cancun: El Relanzamiento que Redefine la Zona Hotelera',
      en: 'Mondrian Residences at Grand Island Cancun: The Complete Presale Guide for 2026',
    },
    seoTitle: {
      es: 'Mondrian Residences at Grand Island Cancun: Guía Completa de Preventa 2026',
      en: 'Mondrian Residences at Grand Island Cancun: 2026 Presale Guide',
    },
    category: { es: 'Inversión', en: 'Investment' },
    excerpt: {
      es: 'El relanzamiento más esperado de la Zona Hotelera. Precios desde $9M MXN, ROI 33%, entrega Q2 2027 y operación Marca Elite internacional desde el día uno.',
      en: 'The most anticipated branded residences launch in Cancun\'s Hotel Zone. Prices from $514K USD, 33% ROI, Q2 2027 delivery, and Marca Elite internacional operation from day one.',
    },
    date: 'Mar 25, 2026',
    readTime: '9 min',
    author: 'Rivana Properties',
    image: imgMondrianHero,
    relatedDestinations: ['zona-hotelera'],
  },
  {
    slug: 'journal-template-demo',
    slugEn: 'journal-template-demo',
    title: {
      es: 'Template Tier-1 del Journal — Demo de infraestructura',
      en: 'Journal Tier-1 template — Infrastructure demo',
    },
    seoTitle: {
      es: 'Template Tier-1 del Journal | Rivana',
      en: 'Journal Tier-1 Template | Rivana',
    },
    category: { es: 'Interno', en: 'Internal' },
    excerpt: {
      es: 'Demostración de todos los componentes reutilizables del template Tier-1 del Journal: breadcrumb, tabla, callout, FAQ, CTA WhatsApp y fuentes.',
      en: 'Demonstration of every reusable Tier-1 Journal primitive: breadcrumb, table, callout, FAQ, WhatsApp CTA and sources block.',
    },
    date: 'Jul 12, 2026',
    updatedDate: '2026-07-12',
    readTime: '4 min',
    author: 'Rivana Properties Advisory Team',
    image: imgDemo,
    relatedDestinations: ['zona-hotelera', 'puerto-cancun', 'mayakoba'],
    whatsappKeyword: 'PREVENTA',
    whatsappMessage: {
      es: 'Quiero información sobre preventa en Cancún y Riviera Maya',
      en: 'I would like info about pre-sale in Cancún and Riviera Maya',
    },
    relatedSlugs: [
      'mondrian-residences-grand-island-cancun-preventa',
      'cancun-roi-rental-yield',
      'guia-preventa-cancun-2026',
    ],
    faqs: {
      es: [
        { q: '¿Qué es el template Tier-1?', a: 'Un layout reutilizable del Journal con breadcrumb, tabla, callout, FAQ, CTA de WhatsApp y bloque de fuentes ya integrados. Cada nuevo artículo del cluster lo hereda.' },
        { q: '¿Cómo se agrega un nuevo artículo?', a: 'Se declara la entrada en src/data/journal-articles.ts (con faqs, relatedSlugs, whatsappKeyword y updatedDate), se crea un componente body basado en Tier1DemoBody y se enlaza en JournalPost.tsx.' },
        { q: '¿El sitemap se actualiza solo?', a: 'Sí. El script scripts/generate-sitemaps.ts corre en predev y prebuild e incluye el artículo con lastmod = updatedDate o date de publicación.' },
        { q: '¿Se generan solos los JSON-LD?', a: 'Sí. El template emite BlogPosting, FAQPage (a partir de faqs) y BreadcrumbList automáticamente para cada artículo.' },
      ],
      en: [
        { q: 'What is the Tier-1 template?', a: 'A reusable Journal layout with breadcrumb, table, callout, FAQ, WhatsApp CTA and sources block already wired. Every new cluster article inherits it.' },
        { q: 'How do I add a new article?', a: 'Declare the entry in src/data/journal-articles.ts (with faqs, relatedSlugs, whatsappKeyword and updatedDate), create a body component based on Tier1DemoBody, and wire it in JournalPost.tsx.' },
        { q: 'Does the sitemap update automatically?', a: 'Yes. The scripts/generate-sitemaps.ts script runs on predev and prebuild and includes the article with lastmod = updatedDate or the published date.' },
        { q: 'Is JSON-LD auto-generated?', a: 'Yes. The template emits BlogPosting, FAQPage (from faqs) and BreadcrumbList automatically for each article.' },
      ],
    },
    sources: [
      { title: 'Rich Results Test — Google Search Central', url: 'https://search.google.com/test/rich-results', publisher: 'Google' },
      { title: 'Schema.org — BlogPosting', url: 'https://schema.org/BlogPosting', publisher: 'Schema.org' },
      { title: 'Schema.org — FAQPage', url: 'https://schema.org/FAQPage', publisher: 'Schema.org' },
    ],
  },
];
journalArticles.unshift({
  slug: 'departamentos-en-venta-zona-hotelera-cancun',
  title: {
    es: 'Departamentos en Venta en la Zona Hotelera de Cancún: Lo Que Debes Saber en 2026',
    en: 'Condos for Sale in Cancún’s Hotel Zone: What You Need to Know in 2026',
  },
  seoTitle: {
    es: 'Departamentos en Venta en la Zona Hotelera de Cancún | Rivana',
    en: 'Condos for Sale in Cancún’s Hotel Zone | Rivana',
  },
  category: { es: 'Guías', en: 'Guides' },
  excerpt: {
    es: 'Departamentos en venta en la Zona Hotelera de Cancún: precios 2026, penthouses con permiso de renta vacacional y preventas de lujo. Asesoría Rivana.',
    en: 'Condos for sale in Cancún’s Hotel Zone: 2026 pricing, penthouses with vacation-rental permits and luxury pre-sales. Rivana advisory.',
  },
  date: 'Jul 12, 2026',
  updatedDate: '2026-07-12',
  readTime: '9 min',
  author: 'Rivana Properties Advisory Team',
  featured: true,
  image: imgLuxuryCondos,
  relatedDestinations: ['zona-hotelera'],
  whatsappKeyword: 'ZONA HOTELERA',
  whatsappMessage: {
    es: 'Quiero la Selección Premium de departamentos en venta en la Zona Hotelera de Cancún',
    en: 'I would like Rivana’s Premium Selection of condos for sale in Cancún’s Hotel Zone',
  },
  relatedSlugs: [
    'luxury-condos-zona-hotelera-cancun-2026-guide',
    'departamentos-en-preventa-cancun',
    'mondrian-residences-grand-island-cancun-guide',
  ],
  faqs: {
    es: [
      { q: '¿Es buen momento para comprar en la Zona Hotelera?', a: 'Los datos de 2025 muestran la mayor apreciación del país en el estado, tasas de Banxico a la baja (7% desde diciembre 2025) y obras de conectividad en curso. Nadie garantiza el futuro, pero los fundamentos del corredor —escasez de suelo, demanda turística, infraestructura— son los más sólidos de México.' },
      { q: '¿Puedo comprar sin estar en México?', a: 'Sí. Coordinamos visitas virtuales en video, documentación digital y cierre mediante poder notarial. Una parte relevante de nuestros clientes extranjeros compra de forma remota.' },
      { q: '¿Qué me conviene: producto terminado o preventa?', a: 'Depende de tu tesis: flujo inmediato (Salvia, con permisos de renta) o captura de plusvalía durante construcción (Mondrian). En una llamada de 30 minutos definimos cuál corresponde a tu perfil.' },
    ],
    en: [
      { q: 'Is it a good time to buy in the Hotel Zone?', a: '2025 data shows the state led national appreciation, Banxico rates fell to 7% in December 2025, and connectivity projects are underway. No one guarantees the future, but the corridor’s fundamentals —limited land, tourism demand, infrastructure— are the strongest in Mexico.' },
      { q: 'Can I buy without being in Mexico?', a: 'Yes. We coordinate live video walkthroughs, digital documentation and closing via power of attorney. A meaningful share of our international clients close remotely.' },
      { q: 'Turnkey or pre-sale?', a: 'It depends on your thesis: immediate cash flow (Salvia, with rental permits) or capturing appreciation during construction (Mondrian). A 30-minute call is enough to define which fits your profile.' },
    ],
  },
  sources: [
    { title: 'Global Property Guide — Mexico Housing Market', url: 'https://www.globalpropertyguide.com/latin-america/mexico', publisher: 'Global Property Guide' },
    { title: 'Análisis del mercado inmobiliario Cancún 2026', url: 'https://www.thelatinvestor.com/', publisher: 'TheLatinvestor' },
    { title: 'Normativa estatal de hospedaje', url: 'https://qroo.gob.mx/', publisher: 'Gobierno de Quintana Roo' },
  ],
});

journalArticles.unshift({
  slug: 'departamentos-en-preventa-cancun',
  title: {
    es: 'Departamentos en Preventa en Cancún: Guía 2026 para Comprar Bien',
    en: 'Pre-Sale Condos in Cancún: 2026 Buyer’s Guide',
  },
  seoTitle: {
    es: 'Departamentos en Preventa en Cancún 2026 | Rivana Properties',
    en: 'Pre-Sale Condos in Cancún 2026 | Rivana Properties',
  },
  category: { es: 'Guías', en: 'Guides' },
  excerpt: {
    es: 'Departamentos en preventa en Cancún con precios de lanzamiento, planes de pago y plusvalía documentada. Selección Premium de Rivana con asesoría experta.',
    en: 'Pre-sale condos in Cancún: launch pricing, payment plans and documented appreciation. Rivana’s Premium Selection with expert advisory.',
  },
  date: 'Jul 12, 2026',
  updatedDate: '2026-07-12',
  readTime: '8 min',
  author: 'Rivana Properties Advisory Team',
  featured: true,
  image: imgDeptosPreventa,
  relatedDestinations: ['zona-hotelera', 'puerto-cancun', 'costa-mujeres'],
  whatsappKeyword: 'PREVENTA',
  whatsappMessage: {
    es: 'Quiero la lista de unidades y precios vigentes de la Selección Premium de preventas en Cancún',
    en: 'I would like the list of available units and current pricing for Rivana’s pre-sale selection in Cancún',
  },
  relatedSlugs: [
    'cancun-roi-rental-yield',
    'invertir-en-preventa-cancun-riviera-maya-2026',
    'mondrian-residences-grand-island-cancun-guide',
  ],
  faqs: {
    es: [
      { q: '¿Cuánto enganche necesito?', a: 'El estándar del mercado es 20-30% a la firma, con mensualidades durante obra y liquidación contra entrega. Cada desarrollo tiene su esquema; en la Selección Premium de Rivana hay opciones con distintos niveles de entrada.' },
      { q: '¿Puedo revender antes de la entrega?', a: 'En muchos desarrollos sí, mediante cesión de derechos. Las condiciones (momento permitido, comisión del desarrollador) varían por contrato y son parte de lo que revisamos antes de que firmes.' },
      { q: '¿La plusvalía está garantizada?', a: 'No, y desconfía de quien te la garantice. Lo que existe son datos históricos (SHF: +14.3% estatal en 2025) y motores estructurales verificables. Nuestro trabajo es ubicarte en los corredores donde esos motores concentran valor.' },
      { q: '¿Qué pasa si el desarrollador se retrasa?', a: 'Los contratos serios estipulan penalizaciones por retraso y fechas límite. Es uno de los cinco puntos de nuestro filtro y una de las razones por las que trabajamos con desarrolladores de historial verificable.' },
    ],
    en: [
      { q: 'How much down payment do I need?', a: 'The market standard is 20-30% at signing, with monthly installments during construction and the balance at delivery. Each development has its own schedule; Rivana’s Premium Selection includes options with different entry levels.' },
      { q: 'Can I resell before delivery?', a: 'In many developments yes, through an assignment of rights. Timing and developer fees vary by contract and are part of what we review before you sign.' },
      { q: 'Is appreciation guaranteed?', a: 'No — and be wary of anyone who guarantees it. What exists is historical data (SHF: +14.3% statewide in 2025) and verifiable structural drivers. Our job is to place you in the corridors where those drivers concentrate value.' },
      { q: 'What happens if the developer is delayed?', a: 'Serious contracts include delay penalties and hard deadlines. It is one of the five points in our filter and one of the reasons we only work with developers who have a verifiable track record.' },
    ],
  },
  sources: [
    { title: 'Índice SHF de Precios de la Vivienda 2025', url: 'https://www.gob.mx/shf', publisher: 'Sociedad Hipotecaria Federal' },
    { title: 'Análisis del mercado inmobiliario Cancún 2026', url: 'https://www.thelatinvestor.com/', publisher: 'TheLatinvestor' },
    { title: 'Absorción del mercado inmobiliario en Quintana Roo', url: 'https://adiqroo.mx/', publisher: 'Asociación de Desarrolladores Inmobiliarios de Quintana Roo' },
  ],
});

// Legacy export kept for compatibility
export const journalArticlesEs: JournalArticle[] = [];

journalArticles.unshift({
  slug: 'invertir-en-bienes-raices-cancun',
  title: {
    es: 'Invertir en Bienes Raíces en Cancún: La Guía Basada en Datos (2026)',
    en: 'Investing in Cancún Real Estate: The Data-Driven Guide (2026)',
  },
  seoTitle: {
    es: 'Invertir en Bienes Raíces en Cancún 2026: Guía con Datos | Rivana',
    en: 'Invest in Cancún Real Estate 2026: Data-Driven Guide | Rivana',
  },
  category: { es: 'Inversión', en: 'Investment' },
  excerpt: {
    es: 'Cómo invertir en bienes raíces en Cancún en 2026: apreciación oficial SHF, estrategias de renta, zonas con mayor plusvalía y cómo empezar con Rivana.',
    en: 'How to invest in Cancún real estate in 2026: official SHF appreciation data, rental strategies, top-appreciation zones and how to start with Rivana.',
  },
  date: 'Jul 12, 2026',
  updatedDate: '2026-07-12',
  readTime: '10 min',
  author: 'Rivana Properties Advisory Team',
  featured: true,
  image: imgInvertirBienesRaices,
  relatedDestinations: ['zona-hotelera', 'puerto-cancun', 'costa-mujeres'],
  whatsappKeyword: 'INVERSIÓN',
  whatsappMessage: {
    es: 'Quiero agendar la llamada de descubrimiento y recibir la Selección Premium de inversión en Cancún',
    en: 'I would like to book a discovery call and receive Rivana’s Premium Selection for Cancún investment',
  },
  relatedSlugs: [
    'departamentos-en-preventa-cancun',
    'departamentos-en-venta-zona-hotelera-cancun',
    'cancun-roi-rental-yield',
  ],
  faqs: {
    es: [
      { q: '¿Cuánto capital necesito para empezar?', a: 'En preventa, el enganche típico es 20-30% del valor. El ticket de entrada al portafolio Rivana varía por corredor; en la llamada inicial te damos el mapa completo de opciones según tu presupuesto.' },
      { q: '¿Puedo invertir sin vivir en México?', a: 'Sí. Una parte importante de nuestros clientes son inversionistas remotos: cierre por poder notarial, administración de rentas y reportes a distancia.' },
      { q: '¿Qué zona tiene mayor potencial en 2026?', a: 'Depende de la estrategia: Zona Hotelera para flujo vacacional, Grand Island para preventa de marca, Costa Mujeres para recorrido de plusvalía en consolidación. El error común es elegir zona antes que tesis.' },
      { q: '¿Cómo sé que el desarrollador es confiable?', a: 'Historial de entregas, estructura legal de los pagos, licencias del proyecto y situación del suelo. Es el filtro de cinco puntos que aplicamos antes de incluir cualquier desarrollo en la Selección Premium.' },
    ],
    en: [
      { q: 'How much capital do I need to start?', a: 'For pre-sale, the typical down payment is 20-30% of the value. The entry ticket to Rivana’s portfolio varies by corridor; the discovery call maps every option to your budget.' },
      { q: 'Can I invest without living in Mexico?', a: 'Yes. A significant share of our clients are remote investors: closing by power of attorney, rental management and reporting from abroad.' },
      { q: 'Which zone has the most potential in 2026?', a: 'It depends on the thesis: Hotel Zone for vacation cash flow, Grand Island for branded pre-sale, Costa Mujeres for appreciation runway in consolidation. Choosing the zone before the thesis is the common mistake.' },
      { q: 'How do I know the developer is reliable?', a: 'Delivery track record, legal structure of the payments, project permits and land status. It is the five-point filter we apply before including any development in the Premium Selection.' },
    ],
  },
  sources: [
    { title: 'Índice SHF de Precios de la Vivienda 2025', url: 'https://www.gob.mx/shf', publisher: 'Sociedad Hipotecaria Federal' },
    { title: 'Análisis del mercado inmobiliario Cancún 2026', url: 'https://www.thelatinvestor.com/', publisher: 'TheLatinvestor' },
    { title: 'Absorción del mercado inmobiliario en Quintana Roo', url: 'https://adiqroo.mx/', publisher: 'Asociación de Desarrolladores Inmobiliarios de Quintana Roo' },
    { title: 'Snowbird trends toward Mexico', url: 'https://www.theglobeandmail.com/', publisher: 'The Globe and Mail' },
  ],
});

export const getAllArticles = () => [...journalArticles, ...journalArticlesEs];

/** Get the correct slug for an article based on language */
export const getArticleSlug = (article: JournalArticle, language: 'es' | 'en') =>
  language === 'en' && article.slugEn ? article.slugEn : article.slug;

/** Retrieve FAQs for an article by slug and language; returns [] if none. */
export const getArticleFaqs = (slug: string, language: 'es' | 'en') => {
  const article = [...journalArticles, ...journalArticlesEs].find(
    (a) => a.slug === slug || a.slugEn === slug,
  );
  return article?.faqs?.[language] ?? [];
};

