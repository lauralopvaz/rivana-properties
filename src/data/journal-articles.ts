import imgCancunRoi from '@/assets/journal/cancun-roi.jpg';
import imgForeignBuyer from '@/assets/journal/foreign-buyer-guide.jpg';
import imgWorldCup from '@/assets/journal/world-cup-2026.jpg';
import imgLuxuryCondos from '@/assets/journal/luxury-condos-zona-hotelera.jpg';
import imgCostaMujeres from '@/assets/journal/costa-mujeres-luxury.jpg';
import imgMayakoba from '@/assets/journal/mayakoba-vs-puerto-cancun.jpg';
import imgGuiaPreventa from '@/assets/journal/guia-preventa.jpg';
import imgCostaMundial from '@/assets/journal/costa-mujeres-mundial.jpg';

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
    slug: 'cancun-roi-rental-yield',
    title: {
      es: 'ROI y Rendimiento en Cancún 2026',
      en: 'Cancun ROI & Rental Yield 2026',
    },
    category: { es: 'Inversión', en: 'Investment' },
    excerpt: {
      es: 'Análisis completo de rendimientos de alquiler y plusvalía en las principales zonas de Cancún para inversionistas.',
      en: 'Complete analysis of rental yields and appreciation across Cancún\'s top zones for investors.',
    },
    date: 'Mar 8, 2026',
    readTime: '10 min',
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
      es: 'Condos de Lujo Zona Hotelera 2026',
      en: 'Luxury Condos Cancun Hotel Zone 2026',
    },
    category: { es: 'Destinos', en: 'Destinations' },
    excerpt: {
      es: 'Guía definitiva para invertir en condominios de lujo en la Zona Hotelera de Cancún.',
      en: 'The definitive guide to investing in luxury condos in Cancun\'s Hotel Zone.',
    },
    date: 'Feb 5, 2026',
    readTime: '8 min',
    author: 'Sofía Laurent',
    image: imgLuxuryCondos,
    relatedDestinations: ['zona-hotelera'],
  },
  {
    slug: 'costa-mujeres-ultra-luxury-destination',
    title: {
      es: 'Costa Mujeres: Epicentro de Inversión',
      en: 'Costa Mujeres: Ultra-Luxury 2026',
    },
    category: { es: 'Inversión', en: 'Investment' },
    excerpt: {
      es: 'Un análisis profundo de la zona de mayor crecimiento en el Caribe Mexicano.',
      en: 'An in-depth look at the fastest-growing zone in the Mexican Caribbean.',
    },
    date: 'Jan 22, 2026',
    readTime: '8 min',
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
