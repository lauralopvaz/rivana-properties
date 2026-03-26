import imgCancunRoi from '@/assets/journal/cancun-roi.jpg';
import imgForeignBuyer from '@/assets/journal/foreign-buyer-guide.jpg';
import imgWorldCup from '@/assets/journal/world-cup-2026.jpg';
import imgLuxuryCondos from '@/assets/journal/luxury-condos-zona-hotelera.jpg';
import imgCostaMujeres from '@/assets/journal/costa-mujeres-luxury.jpg';
import imgMayakoba from '@/assets/journal/mayakoba-vs-puerto-cancun.jpg';
import imgGuiaPreventa from '@/assets/journal/guia-preventa.jpg';
import imgCostaMundial from '@/assets/journal/costa-mujeres-mundial.jpg';
import imgUruguayMayakoba from '@/assets/reserve-mayakoba-hero.jpg';
import imgPreSaleGuide from '@/assets/journal/guia-preventa.jpg';

export interface JournalArticle {
  slug: string;
  title: { es: string; en: string };
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
      es: 'Mundial 2026: Impacto Inmobiliario Cancún',
      en: 'World Cup 2026: Cancun Real Estate Impact',
    },
    category: { es: 'Mercado', en: 'Market' },
    excerpt: {
      es: 'Cómo el Mundial FIFA está generando una demanda sin precedentes en Cancún y la Riviera Maya.',
      en: 'How the FIFA World Cup is driving unprecedented demand in Cancún and the Riviera Maya.',
    },
    date: 'Feb 18, 2026',
    readTime: '6 min',
    author: 'Alejandra Reyes',
    featured: true,
    image: imgWorldCup,
    relatedDestinations: ['mayakoba', 'zona-hotelera', 'costa-mujeres'],
  },
  {
    slug: 'luxury-condos-zona-hotelera-cancun-2026-guide',
    title: {
      es: 'Condominios de Lujo en la Zona Hotelera de Cancún: Guía Definitiva 2026',
      en: 'Luxury Condos in Cancún\'s Hotel Zone: The Definitive 2026 Guide',
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
      es: 'Mayakoba vs Puerto Cancún: Lujo',
      en: 'Mayakoba vs Puerto Cancun: Luxury',
    },
    category: { es: 'Destinos', en: 'Destinations' },
    excerpt: {
      es: 'Dos de las direcciones más exclusivas de México comparadas en métricas de inversión y estilo de vida.',
      en: 'Two of México\'s most exclusive addresses compared across investment metrics and lifestyle.',
    },
    date: 'Jan 10, 2026',
    readTime: '7 min',
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
];

// Spanish-only journal articles
export const journalArticlesEs: JournalArticle[] = [
  {
    slug: 'guia-preventa-cancun-2026',
    title: { es: 'Guía de Preventa en Cancún 2026', en: 'Pre-Sale Guide Cancun 2026' },
    category: { es: 'Guías', en: 'Guides' },
    excerpt: {
      es: 'Todo lo que necesitas saber sobre comprar en preventa en Cancún este 2026.',
      en: 'Everything you need to know about buying pre-sale in Cancún in 2026.',
    },
    date: 'Mar 1, 2026',
    readTime: '10 min',
    author: 'Alejandra Reyes',
    image: imgGuiaPreventa,
    relatedDestinations: ['zona-hotelera', 'costa-mujeres', 'puerto-cancun'],
  },
  {
    slug: 'conviene-comprar-costa-mujeres-antes-mundial',
    title: { es: '¿Comprar en Costa Mujeres Antes del Mundial?', en: 'Buy in Costa Mujeres Before World Cup?' },
    category: { es: 'Inversión', en: 'Investment' },
    excerpt: {
      es: 'Análisis de por qué comprar antes del Mundial 2026 en Costa Mujeres puede maximizar tu retorno.',
      en: 'Analysis of why buying before the 2026 World Cup in Costa Mujeres could maximize your return.',
    },
    date: 'Feb 15, 2026',
    readTime: '6 min',
    author: 'Carlos Mendoza',
    image: imgCostaMundial,
    relatedDestinations: ['costa-mujeres'],
  },
];

export const getAllArticles = () => [...journalArticles, ...journalArticlesEs];
