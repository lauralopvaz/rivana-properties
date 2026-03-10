export interface JournalArticle {
  slug: string;
  title: { es: string; en: string };
  category: { es: string; en: string };
  excerpt: { es: string; en: string };
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
  /** Related destination keys for internal linking */
  relatedDestinations: string[];
}

export const journalArticles: JournalArticle[] = [
  {
    slug: 'cancun-roi-rental-yield',
    title: {
      es: 'Rendimiento de Inversión y Renta en Cancún 2026',
      en: 'Cancun ROI & Rental Yield Guide 2026',
    },
    category: { es: 'Inversión', en: 'Investment' },
    excerpt: {
      es: 'Análisis completo de rendimientos de alquiler y plusvalía en las principales zonas de Cancún para inversionistas.',
      en: 'Complete analysis of rental yields and appreciation across Cancún\'s top zones for investors.',
    },
    date: 'Mar 8, 2026',
    readTime: '10 min',
    author: 'Carlos Mendoza',
    relatedDestinations: ['zona-hotelera', 'costa-mujeres', 'puerto-cancun'],
  },
  {
    slug: 'foreign-buyer-guide-mexico',
    title: {
      es: 'Guía Completa para Compradores Extranjeros en México',
      en: 'How to Buy as a Foreign Investor in Mexico',
    },
    category: { es: 'Guías', en: 'Guides' },
    excerpt: {
      es: 'Todo lo que necesitas saber sobre comprar propiedad en México como inversionista extranjero.',
      en: 'Everything you need to know about buying property in México as a foreign investor.',
    },
    date: 'Feb 28, 2026',
    readTime: '12 min',
    author: 'Sofía Laurent',
    relatedDestinations: ['zona-hotelera', 'puerto-cancun'],
  },
  {
    slug: 'world-cup-2026-cancun-real-estate',
    title: {
      es: 'Mundial 2026: Impacto en el Mercado Inmobiliario de Cancún',
      en: 'World Cup 2026: Impact on Cancun Real Estate',
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
    relatedDestinations: ['mayakoba', 'zona-hotelera', 'costa-mujeres'],
  },
  {
    slug: 'luxury-condos-zona-hotelera-cancun-2026-guide',
    title: {
      es: 'Condos de Lujo en Zona Hotelera — Guía 2026',
      en: 'Luxury Condos in Cancun Hotel Zone — 2026 Guide',
    },
    category: { es: 'Destinos', en: 'Destinations' },
    excerpt: {
      es: 'Guía definitiva para invertir en condominios de lujo en la Zona Hotelera de Cancún.',
      en: 'The definitive guide to investing in luxury condos in Cancun\'s Hotel Zone.',
    },
    date: 'Feb 5, 2026',
    readTime: '8 min',
    author: 'Sofía Laurent',
    relatedDestinations: ['zona-hotelera'],
  },
  {
    slug: 'costa-mujeres-ultra-luxury-destination',
    title: {
      es: '¿Por Qué Costa Mujeres es el Nuevo Epicentro de Inversión?',
      en: 'Costa Mujeres: The Ultra-Luxury Destination of 2026',
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
    relatedDestinations: ['costa-mujeres'],
  },
  {
    slug: 'mayakoba-vs-puerto-cancun',
    title: {
      es: 'Mayakoba vs Puerto Cancún: Comparativa de Lujo',
      en: 'Mayakoba vs Puerto Cancun: A Luxury Comparison',
    },
    category: { es: 'Destinos', en: 'Destinations' },
    excerpt: {
      es: 'Dos de las direcciones más exclusivas de México comparadas en métricas de inversión y estilo de vida.',
      en: 'Two of México\'s most exclusive addresses compared across investment metrics and lifestyle.',
    },
    date: 'Jan 10, 2026',
    readTime: '7 min',
    author: 'Carlos Mendoza',
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
    relatedDestinations: ['zona-hotelera', 'costa-mujeres', 'puerto-cancun'],
  },
  {
    slug: 'conviene-comprar-costa-mujeres-antes-mundial',
    title: { es: '¿Conviene Comprar en Costa Mujeres Antes del Mundial?', en: 'Should You Buy in Costa Mujeres Before the World Cup?' },
    category: { es: 'Inversión', en: 'Investment' },
    excerpt: {
      es: 'Análisis de por qué comprar antes del Mundial 2026 en Costa Mujeres puede maximizar tu retorno.',
      en: 'Analysis of why buying before the 2026 World Cup in Costa Mujeres could maximize your return.',
    },
    date: 'Feb 15, 2026',
    readTime: '6 min',
    author: 'Carlos Mendoza',
    relatedDestinations: ['costa-mujeres'],
  },
];

export const getAllArticles = () => [...journalArticles, ...journalArticlesEs];
