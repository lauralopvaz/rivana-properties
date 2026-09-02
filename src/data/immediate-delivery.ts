export interface ImmediateUnit {
  id: string
  /** Slug used in listings; routes to /costa-mujeres/la-amada (no per-unit page yet) */
  slug: string
  code: string
  development: { es: string; en: string }
  location: { es: string; en: string }
  subtitle: { es: string; en: string }
  area: number
  interior?: number
  bedrooms: number
  bathrooms: number
  parking: number
  view: { es: string; en: string }
  priceMXN: number
  priceNote?: { es: string; en: string }
  furnished: boolean
  moveInReady: boolean
  status: { es: string; en: string }
  features: { es: string[]; en: string[] }
  image: string
  /** WhatsApp prefilled message */
  whatsappMsg: { es: string; en: string }
}

import laAmadaAsset from '@/assets/la-amada.jpg.asset.json'

const LA_AMADA_HERO = laAmadaAsset.url
const LA_AMADA_INTERIOR =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
const LA_AMADA_BEACHFRONT =
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80'
const LA_AMADA_PENTHOUSE =
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80'
const LA_AMADA_JUNGLE =
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80'

export const LA_AMADA_HERO_IMAGE = LA_AMADA_HERO

export const immediateDeliveryUnits: ImmediateUnit[] = [
  {
    id: 'la-amada-205m',
    slug: 'la-amada-unit-205m',
    code: '205M',
    development: { es: 'La Amada Residences', en: 'La Amada Residences' },
    location: { es: 'Costa Mujeres, Cancún', en: 'Costa Mujeres, Cancún' },
    subtitle: { es: 'Santuario Frente al Mar', en: 'Seaside Sanctuary' },
    area: 105,
    bedrooms: 1,
    bathrooms: 1.5,
    parking: 2,
    view: { es: 'Mar Caribe', en: 'Caribbean Sea' },
    priceMXN: 12000000,
    furnished: true,
    moveInReady: true,
    status: { es: 'Amueblada — lista para habitar', en: 'Furnished — move-in ready' },
    features: {
      es: ['Mobiliario de diseñador', 'Programa opcional de renta', 'Vista al Caribe'],
      en: ['Designer furniture', 'Optional rental program', 'Caribbean view'],
    },
    image: LA_AMADA_BEACHFRONT,
    whatsappMsg: {
      es: 'Hola Rivana, me interesa la unidad 205M (Entrega Inmediata) en La Amada, Costa Mujeres.',
      en: "Hi Rivana, I'm interested in Unit 205M (Immediate Delivery) at La Amada, Costa Mujeres.",
    },
  },
  {
    id: 'la-amada-2br',
    slug: 'la-amada-unit-2br',
    code: '2BR',
    development: { es: 'La Amada Residences', en: 'La Amada Residences' },
    location: { es: 'Costa Mujeres, Cancún', en: 'Costa Mujeres, Cancún' },
    subtitle: { es: 'Residencia Lock-Off', en: 'Lock-Off Residence' },
    area: 220,
    interior: 180,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    view: { es: 'Jardines & Caribe', en: 'Gardens & Caribbean' },
    priceMXN: 10500000,
    priceNote: { es: 'Antes $12.8M MXN', en: 'Was $12.8M MXN' },
    furnished: true,
    moveInReady: true,
    status: { es: 'Amueblada — reducción de $2.3M', en: 'Furnished — $2.3M reduction' },
    features: {
      es: ['Configuración lock-off', 'Cocina integral', 'Terraza privada 40 m²'],
      en: ['Lock-off layout', 'Fully fitted kitchen', '40 m² private terrace'],
    },
    image: LA_AMADA_INTERIOR,
    whatsappMsg: {
      es: 'Hola Rivana, me interesa la unidad 2BR (Entrega Inmediata) en La Amada, Costa Mujeres.',
      en: "Hi Rivana, I'm interested in the 2BR Unit (Immediate Delivery) at La Amada, Costa Mujeres.",
    },
  },
  {
    id: 'la-amada-ph07m',
    slug: 'la-amada-penthouse-07m',
    code: 'PH 07M',
    development: { es: 'La Amada Residences', en: 'La Amada Residences' },
    location: { es: 'Costa Mujeres, Cancún', en: 'Costa Mujeres, Cancún' },
    subtitle: { es: 'Penthouse de Lujo', en: 'Luxury Penthouse' },
    area: 202,
    interior: 172,
    bedrooms: 1,
    bathrooms: 1,
    parking: 2,
    view: { es: 'Marina & Mar Caribe', en: 'Marina & Caribbean Sea' },
    priceMXN: 11900000,
    furnished: true,
    moveInReady: true,
    status: { es: 'Amueblado de diseñador — llave en mano', en: 'Designer furnished — turnkey' },
    features: {
      es: ['Rooftop privado', 'Vistas inobstruidas', 'Piezas curadas'],
      en: ['Private rooftop', 'Unobstructed views', 'Curated designer pieces'],
    },
    image: LA_AMADA_PENTHOUSE,
    whatsappMsg: {
      es: 'Hola Rivana, me interesa el Penthouse 07M (Entrega Inmediata) en La Amada, Costa Mujeres.',
      en: "Hi Rivana, I'm interested in Penthouse 07M (Immediate Delivery) at La Amada, Costa Mujeres.",
    },
  },
  {
    id: 'la-amada-305l',
    slug: 'la-amada-unit-305l',
    code: '305L',
    development: { es: 'La Amada Residences', en: 'La Amada Residences' },
    location: { es: 'Costa Mujeres, Cancún', en: 'Costa Mujeres, Cancún' },
    subtitle: { es: 'Refugio en la Selva', en: 'Jungle Retreat' },
    area: 169,
    interior: 123,
    bedrooms: 1,
    bathrooms: 1,
    parking: 2,
    view: { es: 'Selva / Laguna', en: 'Jungle / Lagoon' },
    priceMXN: 9550000,
    priceNote: { es: 'Precio negociable', en: 'Negotiable' },
    furnished: false,
    moveInReady: false,
    status: { es: 'Sin amueblar — personalización 2–3 meses', en: 'Unfurnished — 2–3 month custom build' },
    features: {
      es: ['Terraza privada 46 m²', 'Cocina gourmet', 'Vistas a la selva'],
      en: ['46 m² private terrace', 'Gourmet kitchen', 'Jungle views'],
    },
    image: LA_AMADA_JUNGLE,
    whatsappMsg: {
      es: 'Hola Rivana, me interesa la unidad 305L en La Amada, Costa Mujeres.',
      en: "Hi Rivana, I'm interested in Unit 305L at La Amada, Costa Mujeres.",
    },
  },
]

/** Properties currently move-in ready (used by the home section and the filter). */
export const moveInReadyUnits = immediateDeliveryUnits.filter((u) => u.moveInReady)

export const formatMXN = (n: number) =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(n)

/** Always link to the La Amada landing (no per-unit page yet). */
export const unitDetailPath = (isEnglish: boolean) =>
  isEnglish ? '/en/costa-mujeres/la-amada#units' : '/costa-mujeres/la-amada#units'

export const whatsappUrl = (msg: string) =>
  `https://wa.me/529988457224?text=${encodeURIComponent(msg)}&utm_source=web&utm_medium=whatsapp&utm_campaign=lead&utm_content=immediate-delivery-card`