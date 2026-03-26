export interface DestinationSubPage {
  segment: string;
  seo: {
    title: { es: string; en: string };
    h1: { es: string; en: string };
    description: { es: string; en: string };
  };
}

export interface DestinationConfig {
  key: string;
  basePath: string;
  name: { es: string; en: string };
  tagline: { es: string; en: string };
  priority: 1 | 2 | 3;
  seo: {
    title: { es: string; en: string };
    description: { es: string; en: string };
    h1: { es: string; en: string };
    keywords: { es: string[]; en: string[] };
  };
  stats: { val: string; label: { es: string; en: string } }[];
  chips: { es: string[]; en: string[] };
  intro: { es: string[]; en: string[] };
  subZones?: { name: string; price: string; vibe: { es: string; en: string }; chips: string[] }[];
  subPages: DestinationSubPage[];
  relatedDestinations: string[];
  formTitle: { es: string; en: string };
  breadcrumb: { es: string[]; en: string[] };
}

const BASE_URL = 'https://rivanaproperties.com';

export const getCanonicalUrl = (path: string) => `${BASE_URL}${path}`;

export const getHreflang = (path: string) => [
  { lang: 'es', href: `${BASE_URL}${path}` },
  { lang: 'en', href: `${BASE_URL}/en${path}` },
  { lang: 'x-default', href: `${BASE_URL}${path}` },
];

export const destinations: DestinationConfig[] = [
  // ─── PRIORITY 1: CANCÚN ───
  {
    key: 'zona-hotelera',
    basePath: '/cancun/zona-hotelera',
    name: { es: 'Zona Hotelera', en: 'Hotel Zone' },
    tagline: { es: 'El corazón de la Riviera Maya', en: 'The heart of the Riviera Maya' },
    priority: 1,
    seo: {
      title: {
        es: 'Departamentos y Penthouses — Zona Hotelera Cancún | Rivana',
        en: 'Luxury Condos & Penthouses — Cancun Hotel Zone | Rivana',
      },
      description: {
        es: 'Departamentos de lujo y penthouses en venta en la Zona Hotelera de Cancún. Preventa, frente al mar, con asesoría personalizada. Rivana Properties.',
        en: 'Luxury condos and penthouses for sale in Cancun Hotel Zone. Beachfront pre-sale opportunities with personalized advisory. Rivana Properties.',
      },
      h1: {
        es: 'Departamentos y Penthouses — Zona Hotelera Cancún',
        en: 'Luxury Condos & Penthouses — Cancun Hotel Zone',
      },
      keywords: {
        es: ['departamentos lujo Zona Hotelera Cancún', 'penthouse frente al mar Cancún venta', 'preventa departamentos Zona Hotelera'],
        en: ['luxury condos Cancun Hotel Zone for sale', 'beachfront penthouses Cancun for sale', 'pre-sale condos Cancun Hotel Zone'],
      },
    },
    stats: [
      { val: '3', label: { es: 'Proyectos', en: 'Projects' } },
      { val: '$514K', label: { es: 'Desde USD', en: 'From USD' } },
      { val: '33%', label: { es: 'Plusvalía Preventa', en: 'Pre-Sale Appreciation' } },
      { val: 'Mondrian', label: { es: 'Desarrollo Destacado', en: 'Featured Development' } },
    ],
    chips: {
      es: ['Ubicación Prime', 'Frente al Mar', '⚽ Mundial 2026'],
      en: ['Prime Location', 'Beachfront', '⚽ World Cup 2026'],
    },
    intro: {
      es: [
        'La Zona Hotelera de Cancún es el corredor inmobiliario más icónico del Caribe Mexicano. Con 23 kilómetros de playas de arena blanca, esta franja concentra los hoteles, restaurantes y centros comerciales más exclusivos de la región.',
        'Invertir aquí significa acceder a un mercado con demanda constante, rendimientos de alquiler probados y una plusvalía sostenida que la convierte en una de las ubicaciones más seguras de Latinoamérica.',
        'Desde departamentos frente al mar hasta penthouses con vistas panorámicas, la Zona Hotelera ofrece opciones para todo perfil de inversión.',
      ],
      en: [
        'Cancún\'s Hotel Zone is the most iconic real estate corridor in the Mexican Caribbean. With 23 kilometers of white-sand beaches, this strip concentrates the most exclusive hotels, restaurants, and shopping centers in the region.',
        'Investing here means accessing a market with constant demand, proven rental yields, and sustained appreciation that makes it one of the safest locations in Latin America.',
        'From beachfront condos to panoramic-view penthouses, the Hotel Zone offers options for every investment profile.',
      ],
    },
    subZones: [
      { name: 'Punta Cancún', price: '$3,200/m²', vibe: { es: 'Centro Turístico', en: 'Tourist Center' }, chips: ['Nightlife', 'Shopping'] },
      { name: 'Km 10-16', price: '$2,800/m²', vibe: { es: 'Playa Premium', en: 'Premium Beach' }, chips: ['Best Beaches', 'Hotels'] },
      { name: 'Punta Nizuc', price: '$2,500/m²', vibe: { es: 'Residencial Exclusivo', en: 'Exclusive Residential' }, chips: ['Privacy', 'Reef'] },
    ],
    subPages: [
      {
        segment: 'condos',
        seo: {
          title: { es: 'Condominios en Venta — Zona Hotelera Cancún | Rivana', en: 'Condos for Sale — Cancun Hotel Zone | Rivana' },
          h1: { es: 'Condominios en Venta — Zona Hotelera Cancún', en: 'Condos for Sale — Cancun Hotel Zone' },
          description: { es: 'Condominios de lujo en venta en la Zona Hotelera de Cancún. Frente al mar con rendimientos probados.', en: 'Luxury condos for sale in Cancun Hotel Zone. Beachfront with proven rental yields.' },
        },
      },
      {
        segment: 'penthouses',
        seo: {
          title: { es: 'Penthouses en Venta — Zona Hotelera Cancún | Rivana', en: 'Penthouses for Sale — Cancun Hotel Zone | Rivana' },
          h1: { es: 'Penthouses en Venta — Zona Hotelera Cancún', en: 'Penthouses for Sale — Cancun Hotel Zone' },
          description: { es: 'Penthouses frente al mar en la Zona Hotelera de Cancún. Lujo, vistas panorámicas y alta plusvalía.', en: 'Beachfront penthouses in Cancun Hotel Zone. Luxury, panoramic views and high appreciation.' },
        },
      },
      {
        segment: 'preventa',
        seo: {
          title: { es: 'Preventa Departamentos — Zona Hotelera Cancún | Rivana', en: 'Pre-Sale Condos — Cancun Hotel Zone | Rivana' },
          h1: { es: 'Preventa de Departamentos — Zona Hotelera Cancún', en: 'Pre-Sale Condos — Cancun Hotel Zone' },
          description: { es: 'Preventa de departamentos en la Zona Hotelera de Cancún. Precios exclusivos y condiciones preferentes.', en: 'Pre-sale condos in Cancun Hotel Zone. Exclusive pricing and preferred conditions.' },
        },
      },
    ],
    relatedDestinations: ['puerto-cancun', 'costa-mujeres', 'mayakoba'],
    formTitle: { es: 'Recibe Precios de Zona Hotelera', en: 'Get Hotel Zone Pricing' },
    breadcrumb: { es: ['Rivana', 'Cancún', 'Zona Hotelera'], en: ['Rivana', 'Cancún', 'Hotel Zone'] },
  },
  {
    key: 'puerto-cancun',
    basePath: '/cancun/puerto-cancun',
    name: { es: 'Puerto Cancún', en: 'Puerto Cancún' },
    tagline: { es: 'Exclusividad marina en el corazón de Cancún', en: 'Marina exclusivity in the heart of Cancún' },
    priority: 1,
    seo: {
      title: {
        es: 'Departamentos de Lujo — Puerto Cancún Marina | Rivana',
        en: 'Luxury Real Estate — Puerto Cancun Marina | Rivana',
      },
      description: {
        es: 'Departamentos y residencias de lujo en Puerto Cancún. Marina, golf, seguridad y alta plusvalía. Asesoría personalizada con Rivana Properties.',
        en: 'Luxury condos and residences in Puerto Cancun. Marina, golf, security and high appreciation. Personalized advisory with Rivana Properties.',
      },
      h1: {
        es: 'Departamentos de Lujo — Puerto Cancún Marina',
        en: 'Luxury Real Estate — Puerto Cancun Marina',
      },
      keywords: {
        es: ['departamentos en venta Puerto Cancún', 'preventa Puerto Cancún 2026', 'condominios Puerto Cancún marina lujo'],
        en: ['Puerto Cancun real estate for sale', 'luxury condos Puerto Cancun marina', 'pre-sale Puerto Cancun 2026'],
      },
    },
    stats: [
      { val: '3', label: { es: 'Proyectos', en: 'Projects' } },
      { val: '$730K', label: { es: 'Desde USD', en: 'From USD' } },
      { val: '15%', label: { es: 'Plusvalía Anual', en: 'YoY Growth' } },
      { val: '150+', label: { es: 'Unidades Disponibles', en: 'Units Available' } },
    ],
    chips: {
      es: ['Marina', 'Golf', 'Seguridad 24/7'],
      en: ['Marina', 'Golf', '24/7 Security'],
    },
    intro: {
      es: [
        'Puerto Cancún es una comunidad residencial cerrada con marina privada, campo de golf y acceso directo al mar. Es el desarrollo más exclusivo de Cancún y uno de los más prestigiosos de México.',
        'Con seguridad las 24 horas, centros comerciales de lujo y escuelas internacionales, Puerto Cancún es ideal para familias que buscan calidad de vida sin renunciar al retorno de inversión.',
        'Los precios han mostrado un crecimiento sostenido del 15% anual, con proyecciones de aceleración por el Mundial 2026.',
      ],
      en: [
        'Puerto Cancún is a gated residential community with a private marina, golf course, and direct ocean access. It is the most exclusive development in Cancún and one of the most prestigious in México.',
        'With 24-hour security, luxury shopping centers, and international schools, Puerto Cancún is ideal for families seeking quality of life without sacrificing investment returns.',
        'Prices have shown sustained growth of 15% annually, with projections of acceleration due to the 2026 World Cup.',
      ],
    },
    subZones: [
      { name: 'Marina', price: '$3,800/m²', vibe: { es: 'Lujo Náutico', en: 'Nautical Luxury' }, chips: ['Yacht Club', 'Waterfront'] },
      { name: 'Residencial', price: '$3,200/m²', vibe: { es: 'Familiar', en: 'Family Living' }, chips: ['Gated', 'Schools'] },
      { name: 'Comercial', price: '$2,800/m²', vibe: { es: 'Mixed Use', en: 'Mixed Use' }, chips: ['Retail', 'Dining'] },
    ],
    subPages: [
      {
        segment: 'marina',
        seo: {
          title: { es: 'Propiedades Marina — Puerto Cancún | Rivana', en: 'Marina Properties — Puerto Cancun | Rivana' },
          h1: { es: 'Propiedades Frente a la Marina — Puerto Cancún', en: 'Marina Front Properties — Puerto Cancun' },
          description: { es: 'Departamentos y residencias frente a la marina de Puerto Cancún. Lujo náutico con alta plusvalía.', en: 'Condos and residences on Puerto Cancun marina. Nautical luxury with high appreciation.' },
        },
      },
      {
        segment: 'preventa',
        seo: {
          title: { es: 'Preventa — Puerto Cancún | Rivana', en: 'Pre-Sale — Puerto Cancun | Rivana' },
          h1: { es: 'Preventa de Propiedades — Puerto Cancún', en: 'Pre-Sale Properties — Puerto Cancun' },
          description: { es: 'Preventa de departamentos en Puerto Cancún. Acceso exclusivo a precios de preventa con Rivana Properties.', en: 'Pre-sale condos in Puerto Cancun. Exclusive pre-sale pricing with Rivana Properties.' },
        },
      },
      {
        segment: 'condos',
        seo: {
          title: { es: 'Condominios — Puerto Cancún | Rivana', en: 'Condos — Puerto Cancun | Rivana' },
          h1: { es: 'Condominios en Venta — Puerto Cancún', en: 'Condos for Sale — Puerto Cancun' },
          description: { es: 'Condominios de lujo en Puerto Cancún. Marina, seguridad y estilo de vida exclusivo.', en: 'Luxury condos in Puerto Cancun. Marina, security and exclusive lifestyle.' },
        },
      },
    ],
    relatedDestinations: ['zona-hotelera', 'costa-mujeres', 'cancun-centro'],
    formTitle: { es: 'Recibe Precios de Puerto Cancún', en: 'Get Puerto Cancún Pricing' },
    breadcrumb: { es: ['Rivana', 'Cancún', 'Puerto Cancún'], en: ['Rivana', 'Cancún', 'Puerto Cancún'] },
  },
  {
    key: 'costa-mujeres',
    basePath: '/cancun/costa-mujeres',
    name: { es: 'Costa Mujeres', en: 'Costa Mujeres' },
    tagline: { es: 'La última frontera del lujo caribeño', en: 'The last frontier of Caribbean luxury' },
    priority: 1,
    seo: {
      title: {
        es: 'Propiedades en Costa Mujeres, Cancún | Rivana',
        en: 'Costa Mujeres Properties, Cancun | Rivana',
      },
      description: {
        es: 'Propiedades de lujo en Costa Mujeres, Cancún Norte. Preventa con alto potencial de retorno. Penthouses e inversión. Rivana Properties.',
        en: 'Luxury properties in Costa Mujeres, Cancun Norte. Pre-sale with high return potential. Penthouses and investment. Rivana Properties.',
      },
      h1: {
        es: 'Propiedades Costa Mujeres — Preventa Lujo Cancún Norte',
        en: 'Costa Mujeres Real Estate — Ultra-Luxury Cancun Norte',
      },
      keywords: {
        es: ['preventa Costa Mujeres', 'departamentos lujo Costa Mujeres Cancún', 'penthouses Costa Mujeres inversión'],
        en: ['Costa Mujeres real estate for sale', 'luxury pre-sale Costa Mujeres Cancun', 'Costa Mujeres penthouses investment'],
      },
    },
    stats: [
      { val: '1', label: { es: 'Proyecto', en: 'Project' } },
      { val: '$248K', label: { es: 'Desde USD', en: 'From USD' } },
      { val: '22%', label: { es: 'Plusvalía Anual', en: 'YoY Growth' } },
      { val: 'Dhamar', label: { es: 'Desarrollo Destacado', en: 'Featured Development' } },
    ],
    chips: {
      es: ['Preventa Abierta', '8-12% Rendimiento', '⚽ Mundial 2026'],
      en: ['Pre-Sale Open', '8-12% Yield', '⚽ World Cup 2026'],
    },
    intro: {
      es: [
        'Costa Mujeres representa el último capítulo del desarrollo costero del Caribe de Cancún. Con más de 26 kilómetros de playas prístinas de arena blanca, esta zona planificada atrae a los desarrolladores e inversionistas más exigentes del mundo.',
        'A diferencia de sus vecinos más establecidos, Costa Mujeres ofrece precios de preconstrucción con una apreciación proyectada del 18-25% para 2026, impulsada por el Mundial FIFA y una inversión en infraestructura sin precedentes.',
        'Desde condominios boutique frente al mar hasta grandes desarrollos de lujo, la zona atiende a todo perfil de inversión — ya sea ingreso pasivo por renta, una propiedad familiar o un refugio de retiro en el Caribe.',
      ],
      en: [
        'Costa Mujeres represents the final chapter of Cancún\'s Caribbean coastline development. With over 26 kilometers of pristine white-sand beaches, this master-planned zone is attracting the world\'s most discerning developers and investors.',
        'Unlike its more established neighbors, Costa Mujeres offers pre-construction pricing with projected appreciation of 18-25% by 2026, driven by the FIFA World Cup and unprecedented infrastructure investment.',
        'From boutique oceanfront condos to sprawling luxury developments, the zone caters to every investment profile — whether you\'re seeking passive rental income, a family legacy property, or a retirement haven in the Caribbean.',
      ],
    },
    subZones: [
      { name: 'Playa Mujeres', price: '$2,200/m²', vibe: { es: 'Resort & Golf', en: 'Resort & Golf' }, chips: ['Golf Course', 'Beach Club'] },
      { name: 'Costa Mujeres Centro', price: '$1,800/m²', vibe: { es: 'Playa Urbana', en: 'Urban Beach' }, chips: ['Commercial Zone', 'Marina'] },
      { name: 'Punta Sam', price: '$1,400/m²', vibe: { es: 'Emergente', en: 'Emerging' }, chips: ['Pre-Sale Hub', 'Highest ROI'] },
    ],
    subPages: [
      {
        segment: 'preventa',
        seo: {
          title: { es: 'Preventa Costa Mujeres — Cancún Norte | Rivana', en: 'Pre-Sale Costa Mujeres — Cancun Norte | Rivana' },
          h1: { es: 'Preventa de Propiedades — Costa Mujeres', en: 'Pre-Sale Properties — Costa Mujeres' },
          description: { es: 'Preventa de departamentos en Costa Mujeres. Los mejores precios y condiciones exclusivas.', en: 'Pre-sale condos in Costa Mujeres. Best pricing and exclusive conditions.' },
        },
      },
      {
        segment: 'penthouses',
        seo: {
          title: { es: 'Penthouses Costa Mujeres — Inversión Cancún | Rivana', en: 'Penthouses Costa Mujeres — Cancun Investment | Rivana' },
          h1: { es: 'Penthouses en Venta — Costa Mujeres', en: 'Penthouses for Sale — Costa Mujeres' },
          description: { es: 'Penthouses de lujo en Costa Mujeres. Vista al mar, alta plusvalía y rendimientos excepcionales.', en: 'Luxury penthouses in Costa Mujeres. Ocean views, high appreciation and exceptional yields.' },
        },
      },
    ],
    relatedDestinations: ['puerto-cancun', 'zona-hotelera', 'puerto-morelos'],
    formTitle: { es: 'Recibe Precios de Costa Mujeres', en: 'Get Costa Mujeres Pricing' },
    breadcrumb: { es: ['Rivana', 'Cancún', 'Costa Mujeres'], en: ['Rivana', 'Cancún', 'Costa Mujeres'] },
  },

  // ─── PRIORITY 2: MAYAKOBA + PUERTO MORELOS ───
  {
    key: 'mayakoba',
    basePath: '/mayakoba',
    name: { es: 'Mayakoba', en: 'Mayakoba' },
    tagline: { es: 'El corredor ultra-lujo de la Riviera Maya', en: 'The ultra-luxury corridor of the Riviera Maya' },
    priority: 2,
    seo: {
      title: {
        es: 'Mayakoba — The Reserve en Venta | Rivana',
        en: 'Mayakoba Luxury Properties | Rivana Properties',
      },
      description: {
        es: 'Residencias y villas de lujo en Mayakoba. The Reserve, campo de golf, inversión mundialista 2026. Rivana Properties.',
        en: 'Luxury residences and villas in Mayakoba. The Reserve, golf course, World Cup 2026 investment. Rivana Properties.',
      },
      h1: {
        es: 'Residencias Mayakoba en Venta — The Reserve',
        en: 'Mayakoba Residences for Sale — The Reserve at Mayakoba',
      },
      keywords: {
        es: ['residencias Mayakoba venta', 'propiedades lujo Mayakoba', 'villas privadas Playa del Carmen'],
        en: ['Mayakoba real estate for sale', 'The Reserve at Mayakoba', 'World Cup 2026 Cancun luxury property'],
      },
    },
    stats: [
      { val: '1', label: { es: 'Proyecto', en: 'Project' } },
      { val: '$1.1M', label: { es: 'Desde USD', en: 'From USD' } },
      { val: '16%', label: { es: 'Plusvalía Anual', en: 'YoY Growth' } },
      { val: '144', label: { es: 'Unidades Totales', en: 'Total Units' } },
    ],
    chips: {
      es: ['⚽ Mundial 2026', 'Golf PGA', 'Ultra-Lujo'],
      en: ['⚽ World Cup 2026', 'PGA Golf', 'Ultra-Luxury'],
    },
    intro: {
      es: [
        'Mayakoba es el corredor de lujo más prestigioso de la Riviera Maya, hogar de resorts como Rosewood, Fairmont y Banyan Tree. The Reserve at Mayakoba ofrece residencias exclusivas en un entorno natural protegido.',
        'Con el Mundial 2026 como catalizador, las propiedades en Mayakoba están posicionadas para una apreciación significativa. El campo de golf de clase mundial y la infraestructura five-star atraen a compradores de todo el mundo.',
        'Invertir en Mayakoba es invertir en el estándar más alto de lujo residencial en México.',
      ],
      en: [
        'Mayakoba is the most prestigious luxury corridor in the Riviera Maya, home to resorts like Rosewood, Fairmont, and Banyan Tree. The Reserve at Mayakoba offers exclusive residences in a protected natural setting.',
        'With the 2026 World Cup as a catalyst, Mayakoba properties are positioned for significant appreciation. The world-class golf course and five-star infrastructure attract buyers from around the globe.',
        'Investing in Mayakoba is investing in the highest standard of residential luxury in México.',
      ],
    },
    subPages: [],
    relatedDestinations: ['zona-hotelera', 'puerto-morelos', 'tulum'],
    formTitle: { es: 'Recibe Precios de Mayakoba', en: 'Get Mayakoba Pricing' },
    breadcrumb: { es: ['Rivana', 'Mayakoba'], en: ['Rivana', 'Mayakoba'] },
  },
  {
    key: 'puerto-morelos',
    basePath: '/puerto-morelos',
    name: { es: 'Puerto Morelos', en: 'Puerto Morelos' },
    tagline: { es: 'Lujo frente al arrecife', en: 'Luxury by the reef' },
    priority: 2,
    seo: {
      title: {
        es: 'Propiedades en Puerto Morelos | Rivana Properties',
        en: 'Puerto Morelos Properties | Rivana Properties',
      },
      description: {
        es: 'Propiedades y condominios en Puerto Morelos frente al arrecife. Casas de playa y lujo costero con Rivana Properties.',
        en: 'Properties and condos in Puerto Morelos by the reef. Beach homes and coastal luxury with Rivana Properties.',
      },
      h1: {
        es: 'Propiedades Puerto Morelos — Lujo Frente al Arrecife',
        en: 'Puerto Morelos Real Estate — Luxury by the Reef',
      },
      keywords: {
        es: ['propiedades Puerto Morelos', 'condominios en venta Puerto Morelos', 'casas frente al mar Puerto Morelos'],
        en: ['Puerto Morelos condos for sale', 'luxury real estate Puerto Morelos', 'beachfront homes Puerto Morelos Mexico'],
      },
    },
    stats: [
      { val: '2', label: { es: 'Proyectos', en: 'Projects' } },
      { val: '$273K', label: { es: 'Desde USD', en: 'From USD' } },
      { val: '20%', label: { es: 'Plusvalía Anual', en: 'YoY Growth' } },
      { val: '40+', label: { es: 'Unidades Disponibles', en: 'Units Available' } },
    ],
    chips: {
      es: ['Arrecife Natural', 'Pueblo con Encanto', 'Cerca del Aeropuerto'],
      en: ['Natural Reef', 'Charming Town', 'Near Airport'],
    },
    intro: {
      es: [
        'Puerto Morelos es un pueblo pesquero convertido en joya costera. Ubicado entre Cancún y Playa del Carmen, ofrece acceso al segundo arrecife más grande del mundo y una calidad de vida incomparable.',
        'Su crecimiento controlado y ambiente tranquilo lo convierten en el destino perfecto para quienes buscan lujo sin multitudes. Las propiedades aquí combinan vida de playa auténtica con retorno de inversión sólido.',
        'A solo 20 minutos del aeropuerto internacional de Cancún, Puerto Morelos es accesible sin sacrificar la tranquilidad.',
      ],
      en: [
        'Puerto Morelos is a fishing village turned coastal gem. Located between Cancún and Playa del Carmen, it offers access to the world\'s second-largest reef and an unmatched quality of life.',
        'Its controlled growth and tranquil atmosphere make it the perfect destination for those seeking luxury without crowds. Properties here combine authentic beach living with solid investment returns.',
        'Just 20 minutes from Cancún International Airport, Puerto Morelos is accessible without sacrificing tranquility.',
      ],
    },
    subPages: [],
    relatedDestinations: ['costa-mujeres', 'mayakoba', 'zona-hotelera'],
    formTitle: { es: 'Recibe Precios de Puerto Morelos', en: 'Get Puerto Morelos Pricing' },
    breadcrumb: { es: ['Rivana', 'Puerto Morelos'], en: ['Rivana', 'Puerto Morelos'] },
  },

  // ─── PRIORITY 3: CANCÚN CENTRO + TULUM ───
  {
    key: 'cancun-centro',
    basePath: '/cancun/centro',
    name: { es: 'Cancún Centro', en: 'Downtown Cancún' },
    tagline: { es: 'Vida urbana de lujo', en: 'Urban luxury living' },
    priority: 3,
    seo: {
      title: {
        es: 'Cancún Centro — Vida Urbana | Rivana',
        en: 'Downtown Cancún — Urban Living | Rivana',
      },
      description: {
        es: 'Departamentos y propiedades urbanas en Cancún Centro. Vida de ciudad con acceso a playas. Rivana Properties.',
        en: 'Condos and urban properties in downtown Cancun. City living with beach access. Rivana Properties.',
      },
      h1: {
        es: 'Propiedades Cancún Centro — Vida Urbana de Lujo',
        en: 'Cancun Downtown Real Estate — Urban Luxury Living',
      },
      keywords: {
        es: ['departamentos Cancún centro', 'propiedades urbanas Cancún', 'condominios en venta Cancún centro'],
        en: ['Cancun downtown condos for sale', 'urban luxury Cancun', 'real estate Cancun city center'],
      },
    },
    stats: [
      { val: '2', label: { es: 'Proyectos', en: 'Projects' } },
      { val: '$5.2M MXN', label: { es: 'Desde MXN', en: 'From MXN' } },
      { val: '12%', label: { es: 'Plusvalía Anual', en: 'YoY Growth' } },
      { val: 'Arbolada', label: { es: 'Desarrollo Destacado', en: 'Featured Development' } },
    ],
    chips: {
      es: ['Urbano', 'Accesible', 'Alta Demanda'],
      en: ['Urban', 'Accessible', 'High Demand'],
    },
    intro: {
      es: [
        'Cancún Centro es el corazón urbano de la ciudad, donde la vida moderna se combina con la accesibilidad a las mejores playas del Caribe.',
        'Con precios de entrada más accesibles y una demanda de alquiler constante, el centro de Cancún ofrece oportunidades de inversión atractivas para quienes buscan diversificar su portafolio.',
        'La zona está experimentando una renovación urbana con nuevos desarrollos verticales que elevan el estándar de vida en la ciudad.',
      ],
      en: [
        'Downtown Cancún is the urban heart of the city, where modern living combines with accessibility to the Caribbean\'s best beaches.',
        'With more accessible entry prices and constant rental demand, downtown Cancún offers attractive investment opportunities for portfolio diversification.',
        'The area is experiencing urban renewal with new vertical developments that raise the standard of living in the city.',
      ],
    },
    subPages: [
      {
        segment: 'condos',
        seo: {
          title: { es: 'Condominios en Venta — Cancún Centro | Rivana', en: 'Condos for Sale — Downtown Cancun | Rivana' },
          h1: { es: 'Condominios en Venta — Cancún Centro', en: 'Condos for Sale — Downtown Cancun' },
          description: { es: 'Condominios urbanos en venta en Cancún Centro. Precios accesibles con alta rentabilidad.', en: 'Urban condos for sale in downtown Cancun. Accessible prices with high rentability.' },
        },
      },
    ],
    relatedDestinations: ['zona-hotelera', 'puerto-cancun', 'costa-mujeres'],
    formTitle: { es: 'Recibe Precios de Cancún Centro', en: 'Get Downtown Cancún Pricing' },
    breadcrumb: { es: ['Rivana', 'Cancún', 'Centro'], en: ['Rivana', 'Cancún', 'Downtown'] },
  },
  {
    key: 'tulum',
    basePath: '/tulum',
    name: { es: 'Tulum', en: 'Tulum' },
    tagline: { es: 'Inversión eco-lujo en la selva', en: 'Eco-luxury investment' },
    priority: 3,
    seo: {
      title: {
        es: 'Propiedades Tulum — Inversión Eco-Lujo | Rivana',
        en: 'Tulum Real Estate — Eco-Luxury Investment | Rivana',
      },
      description: {
        es: 'Propiedades y departamentos en Tulum. Inversión eco-lujo con fuerte demanda de Airbnb. Rivana Properties.',
        en: 'Properties and condos in Tulum. Eco-luxury investment with strong Airbnb demand. Rivana Properties.',
      },
      h1: {
        es: 'Propiedades Tulum — Inversión Eco-Lujo',
        en: 'Tulum Real Estate — Eco-Luxury Investment',
      },
      keywords: {
        es: ['propiedades Tulum venta', 'inversión inmobiliaria Tulum'],
        en: ['Tulum real estate investment', 'luxury homes Tulum'],
      },
    },
    stats: [
      { val: '35', label: { es: 'Propiedades', en: 'Properties' } },
      { val: '$195K', label: { es: 'Desde', en: 'Starting From' } },
      { val: '15%', label: { es: 'Plusvalía Anual', en: 'YoY Growth' } },
      { val: '45+', label: { es: 'Unidades Disponibles', en: 'Units Available' } },
    ],
    chips: {
      es: ['Eco-Lujo', 'Airbnb Fuerte', 'Tren Maya'],
      en: ['Eco-Luxury', 'Strong Airbnb', 'Mayan Train'],
    },
    intro: {
      es: [
        'Tulum es sinónimo de lujo bohemio y conexión con la naturaleza. Su mercado inmobiliario ha crecido exponencialmente, impulsado por el turismo internacional y la llegada del Tren Maya.',
        'Las propiedades en Tulum ofrecen diseño arquitectónico único, entornos selváticos y fuertes rendimientos en plataformas de alquiler vacacional como Airbnb.',
        'Para inversionistas que buscan diversificación y un activo con identidad, Tulum es una opción compelling.',
      ],
      en: [
        'Tulum is synonymous with bohemian luxury and connection with nature. Its real estate market has grown exponentially, driven by international tourism and the arrival of the Mayan Train.',
        'Properties in Tulum offer unique architectural design, jungle settings, and strong yields on vacation rental platforms like Airbnb.',
        'For investors seeking diversification and an asset with identity, Tulum is a compelling option.',
      ],
    },
    subPages: [],
    relatedDestinations: ['mayakoba', 'puerto-morelos', 'costa-mujeres'],
    formTitle: { es: 'Recibe Precios de Tulum', en: 'Get Tulum Pricing' },
    breadcrumb: { es: ['Rivana', 'Tulum'], en: ['Rivana', 'Tulum'] },
  },

  // ─── PRIORITY 2: PLAYA DEL CARMEN ───
  {
    key: 'playa-del-carmen',
    basePath: '/playa-del-carmen',
    name: { es: 'Playa del Carmen', en: 'Playa del Carmen' },
    tagline: { es: 'Cosmopolita y vibrante', en: 'Cosmopolitan and vibrant' },
    priority: 2,
    seo: {
      title: {
        es: 'Propiedades en Playa del Carmen | Rivana',
        en: 'Playa del Carmen Properties | Rivana',
      },
      description: {
        es: 'Propiedades de lujo en Playa del Carmen. Condos, penthouses y departamentos con alto retorno de inversión. Rivana Properties.',
        en: 'Luxury properties in Playa del Carmen. Condos, penthouses and apartments with high ROI. Rivana Properties.',
      },
      h1: {
        es: 'Propiedades Playa del Carmen — Inversión Cosmopolita',
        en: 'Playa del Carmen Real Estate — Cosmopolitan Investment',
      },
      keywords: {
        es: ['propiedades Playa del Carmen', 'departamentos en venta Playa del Carmen', 'inversión inmobiliaria Playa del Carmen'],
        en: ['Playa del Carmen real estate', 'condos for sale Playa del Carmen', 'Playa del Carmen investment property'],
      },
    },
    stats: [
      { val: '1', label: { es: 'Proyecto', en: 'Project' } },
      { val: '$1.1M', label: { es: 'Desde USD', en: 'From USD' } },
      { val: '16%', label: { es: 'Plusvalía Anual', en: 'YoY Growth' } },
      { val: 'The Reserve', label: { es: 'Desarrollo Destacado', en: 'Featured Development' } },
    ],
    chips: {
      es: ['Cosmopolita', 'Quinta Avenida', 'Alta Demanda Turística'],
      en: ['Cosmopolitan', 'Fifth Avenue', 'High Tourist Demand'],
    },
    intro: {
      es: [
        'Playa del Carmen es el destino más cosmopolita de la Riviera Maya, donde la vibrante Quinta Avenida se combina con playas de arena blanca y una comunidad internacional diversa.',
        'Su mercado inmobiliario ofrece una de las mejores relaciones precio-rendimiento de la región, con fuerte demanda de alquiler vacacional durante todo el año.',
        'Para inversionistas que buscan un activo con liquidez y plusvalía constante, Playa del Carmen es una apuesta segura en el Caribe Mexicano.',
      ],
      en: [
        'Playa del Carmen is the most cosmopolitan destination in the Riviera Maya, where the vibrant Fifth Avenue combines with white sand beaches and a diverse international community.',
        'Its real estate market offers one of the best price-performance ratios in the region, with strong vacation rental demand year-round.',
        'For investors seeking a liquid asset with consistent appreciation, Playa del Carmen is a safe bet in the Mexican Caribbean.',
      ],
    },
    subPages: [
      {
        segment: 'condos',
        seo: {
          title: { es: 'Condominios en Venta — Playa del Carmen | Rivana', en: 'Condos for Sale — Playa del Carmen | Rivana' },
          h1: { es: 'Condominios en Venta — Playa del Carmen', en: 'Condos for Sale — Playa del Carmen' },
          description: { es: 'Condominios de lujo en venta en Playa del Carmen. Cerca de la Quinta Avenida y la playa.', en: 'Luxury condos for sale in Playa del Carmen. Near Fifth Avenue and the beach.' },
        },
      },
      {
        segment: 'preventa',
        seo: {
          title: { es: 'Preventa de Propiedades — Playa del Carmen | Rivana', en: 'Pre-Sale Properties — Playa del Carmen | Rivana' },
          h1: { es: 'Preventa de Propiedades — Playa del Carmen', en: 'Pre-Sale Properties — Playa del Carmen' },
          description: { es: 'Propiedades en preventa en Playa del Carmen con precios de lanzamiento exclusivos.', en: 'Pre-sale properties in Playa del Carmen with exclusive launch prices.' },
        },
      },
    ],
    relatedDestinations: ['tulum', 'mayakoba', 'puerto-morelos'],
    formTitle: { es: 'Recibe Precios de Playa del Carmen', en: 'Get Playa del Carmen Pricing' },
    breadcrumb: { es: ['Rivana', 'Playa del Carmen'], en: ['Rivana', 'Playa del Carmen'] },
  },
];

export const getDestination = (key: string): DestinationConfig | undefined =>
  destinations.find((d) => d.key === key);

export const getDestinationByPath = (path: string): DestinationConfig | undefined =>
  destinations.find((d) => d.basePath === path);

/** Get destinations sorted by priority, with P1 destinations first */
export const getPriorityDestinations = () =>
  [...destinations].sort((a, b) => a.priority - b.priority);
