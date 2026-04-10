import imgCancunRoi from '@/assets/journal/cancun-roi.jpg';
import imgForeignBuyer from '@/assets/journal/foreign-buyer-guide.jpg';
import imgWorldCup from '@/assets/journal/world-cup-2026.jpg';
import imgLuxuryCondos from '@/assets/journal/luxury-condos-zona-hotelera.jpg';
import imgCostaMujeres from '@/assets/journal/costa-mujeres-luxury.jpg';
import imgMayakoba from '@/assets/journal/mayakoba-vs-puerto-cancun.jpg';
import imgGuiaPreventa from '@/assets/journal/guia-preventa.jpg';

import imgUruguayMayakoba from '@/assets/reserve-mayakoba-fachada-alberca-jardin.jpg';
import imgPreSaleGuide from '@/assets/journal/guia-preventa.jpg';
const imgMondrianHero = '/images/mondrian/mondrian-hero.jpg';

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
}

export const journalArticles: JournalArticle[] = [
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
      es: 'Mondrian Residences en Grand Island Cancún: la guía que necesitas antes de decidir',
      en: 'Mondrian Residences at Grand Island Cancún: The Guide You Need Before You Decide',
    },
    seoTitle: {
      es: 'Mondrian Residences en Grand Island Cancún — Lo Que Debes Saber',
      en: 'Mondrian Residences Grand Island Cancún — Everything You Need to Know',
    },
    category: { es: 'Inversión', en: 'Investment' },
    excerpt: {
      es: 'Guía completa de Mondrian Residences: precio, plan de pagos, amenidades con campo de golf, respaldo Accor y vistas al mar y laguna que jamás serán obstruidas.',
      en: 'Complete guide to Mondrian Residences Cancún: Accor backing, golf course, unobstructed Caribbean and lagoon views, pre-sale pricing and 30/20/50 payment plan.',
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
      es: 'Mondrian Residences Grand Island Cancún: El Relanzamiento que Redefine la Zona Hotelera',
      en: 'Mondrian Residences Grand Island Cancun: The Complete Presale Guide for 2026',
    },
    seoTitle: {
      es: 'Mondrian Residences Grand Island Cancún: Guía Completa de Preventa 2026',
      en: 'Mondrian Residences Grand Island Cancun: 2026 Presale Guide',
    },
    category: { es: 'Inversión', en: 'Investment' },
    excerpt: {
      es: 'El relanzamiento más esperado de la Zona Hotelera. Precios desde $9M MXN, ROI 33%, entrega Q2 2027 y operación Accor desde el día uno.',
      en: 'The most anticipated branded residences launch in Cancun\'s Hotel Zone. Prices from $514K USD, 33% ROI, Q2 2027 delivery, and Accor operation from day one.',
    },
    date: 'Mar 25, 2026',
    readTime: '9 min',
    author: 'Rivana Properties',
    image: imgMondrianHero,
    relatedDestinations: ['zona-hotelera'],
  },
];

// Legacy export kept for compatibility
export const journalArticlesEs: JournalArticle[] = [];

export const getAllArticles = () => [...journalArticles, ...journalArticlesEs];

/** Get the correct slug for an article based on language */
export const getArticleSlug = (article: JournalArticle, language: 'es' | 'en') =>
  language === 'en' && article.slugEn ? article.slugEn : article.slug;
