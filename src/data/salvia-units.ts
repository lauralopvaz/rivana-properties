import buildingAsset from '@/assets/salvia/salvia-building.jpg.asset.json'
import unit3bAsset from '@/assets/salvia/salvia-3b.jpg.asset.json'
import unit2aAsset from '@/assets/salvia/salvia-2a.jpg.asset.json'
import unit604abAsset from '@/assets/salvia/salvia-604ab.jpg.asset.json'

export interface SalviaPerfYear {
  year: number
  grossRevenueUSD: number
  nights: number
  occupancyPct: number
}

export interface SalviaUnit {
  id: string
  slug: string
  code: string
  name: { es: string; en: string }
  subtitle: { es: string; en: string }
  askingPriceUSD: number
  floorAreaSqFt: number
  floorAreaM2: number
  layout: { es: string; en: string }
  maxGuests: number
  bedrooms: number
  bedsDescription: { es: string; en: string }
  bathrooms: number
  balcony: { es: string; en: string }
  views: { es: string; en: string }
  hurricaneShutters: boolean
  airbnbRating: number
  reviews: number
  trackRecordYears: number
  guestFavorite?: boolean
  highestRoi?: boolean
  avgAnnualRevenueUSD: number
  net2025USD: number
  expenses2025USD: number
  avgNightlyRateUSD: number
  avgOccupancyPct: number
  peakOccupancyPct?: number
  monthlyMaintenanceUSD: number
  annualBeachTaxUSD: number
  annualPropertyTaxUSD: number
  grossRoiPct: number
  netRoiPct: number
  performance: SalviaPerfYear[]
  features: { es: string[]; en: string[] }
  image: string
  /** ISO date YYYY-MM-DD for JSON-LD datePosted */
  datePosted: string
  seo: {
    title: { es: string; en: string }
    description: { es: string; en: string }
  }
  whatsappMsg: { es: string; en: string }
}

export const SALVIA_BUILDING_IMAGE = buildingAsset.url

export const salviaBuilding = {
  name: 'Edificio Salvia',
  tag: { es: 'Edificio Salvia · Zona Hotelera', en: 'Salvia Building · Hotel Zone' },
  location: { es: 'Chac Mool / Forum Beach, Zona Hotelera Cancún', en: 'Chac Mool / Forum Beach, Hotel Zone Cancún' },
  tagline: {
    es: 'Tres penthouses frente al mar con renta vacacional autorizada y retornos verificados de hasta 11.45%.',
    en: 'Three oceanfront penthouses with authorized short-term rentals and verified returns up to 11.45%.',
  },
  description: {
    es: 'El Edificio Salvia es uno de los pocos condominios en la Zona Hotelera de Cancún con permiso autorizado para renta vacacional de corto plazo. Esto lo convierte en un activo inmobiliario escaso, con demanda sostenida durante todo el año. Comprar una unidad en Salvia no es simplemente adquirir un condominio: es adquirir un negocio en operación con historial financiero verificable, huéspedes recurrentes y toda la infraestructura lista para transferirse al nuevo propietario con cero curva de aprendizaje.',
    en: 'Salvia Building is one of the only condominiums in the Cancún Hotel Zone with an authorized permit for short-term vacation rentals. That makes it a scarce real estate asset with year-round demand. Buying at Salvia is not just acquiring a condo — it means acquiring an operating business with a verifiable financial track record, recurring guests, and infrastructure ready to transfer to the new owner with zero learning curve.',
  },
  valueProps: [
    {
      title: { es: 'Permiso Único en la Zona', en: 'Unique Permit in the Zone' },
      desc: {
        es: 'Uno de los muy pocos edificios legalmente autorizados para renta de corto plazo en la Zona Hotelera.',
        en: 'One of the very few buildings legally authorized for short-term rentals in the Hotel Zone.',
      },
    },
    {
      title: { es: 'Negocio Llave en Mano', en: 'Turn-Key Business' },
      desc: {
        es: 'Listing activo en Airbnb, reseñas, sitio de reservas directas y estrategia de tarifas estacionales incluidos.',
        en: 'Active Airbnb listing, guest reviews, direct booking site and seasonal pricing strategy included.',
      },
    },
    {
      title: { es: 'ROI Comprobado hasta 11.45%', en: 'Proven ROI up to 11.45%' },
      desc: {
        es: 'Historial verificable de ingresos en Airbnb de 3 a 5 años.',
        en: 'Verifiable Airbnb income history spanning 3 to 5 years.',
      },
    },
    {
      title: { es: 'Ubicación 5 Estrellas', en: '5-Star Location' },
      desc: {
        es: 'A 1 minuto a pie de más de 30 restaurantes, bares y vida nocturna.',
        en: 'One-minute walk to 30+ restaurants, bars and nightlife.',
      },
    },
    {
      title: { es: 'Servicios de Hotel Incluidos', en: 'Hotel Services Included' },
      desc: {
        es: 'Recepción 24 hrs, seguridad, housekeeping, alberca, restaurante, gimnasio y acceso directo a la playa.',
        en: '24-hr front desk, security, housekeeping, pool, restaurant, gym and direct beach access.',
      },
    },
  ],
  stats: [
    { value: '$60K+', label: { es: 'Ingreso anual promedio', en: 'Average annual income' } },
    { value: '54%', label: { es: 'Ocupación promedio', en: 'Average occupancy' } },
    { value: '4.80★', label: { es: 'Calificación Airbnb', en: 'Average Airbnb rating' } },
    { value: '30+', label: { es: 'Restaurantes a 1 min', en: 'Restaurants 1 min away' } },
    { value: '24 hrs', label: { es: 'Seguridad y recepción', en: 'Security & front desk' } },
    { value: '11.45%', label: { es: 'ROI bruto más alto', en: 'Highest gross ROI' } },
  ],
  staff: {
    es: ['Recepción 24 hrs', 'Seguridad 24 hrs', 'Mantenimiento 24 hrs', 'Check-in / Check-out', 'Atención a huéspedes'],
    en: ['24-hr Front Desk', '24-hr Security', '24-hr Maintenance', 'Guest Check-in / Check-out', 'Guest Services'],
  },
  services: {
    es: ['Wi-Fi gratis', 'Housekeeping cada 2 días', 'Estacionamiento gratis', 'Toallas y sillas de playa', 'Guarda equipaje'],
    en: ['Free Wi-Fi', 'Housekeeping every 2 days', 'Free Parking', 'Beach Towels & Chairs', 'Luggage Storage'],
  },
  facilities: {
    es: ['Alberca con camastros', 'Restaurante y bar', 'Acceso directo a la playa', 'Gimnasio', 'Renta de auto en sitio'],
    en: ['Pool with Loungers', 'Onsite Restaurant & Bar', 'Direct Beach Access', 'Small Gym', 'Onsite Car Rental'],
  },
  oneMinWalk: {
    es: ['+30 restaurantes y bares', 'Coco Bongo', 'Forum Shopping Mall', 'Clubs Mandala y O\u2019Dady\u2019s', 'Playa Chac Mool (directo)'],
    en: ['30+ restaurants & bars', 'Coco Bongo Club', 'Forum Shopping Mall', 'Mandala & O\u2019Dady\u2019s Clubs', 'Chac Mool Beach (direct)'],
  },
  fiveMinWalk: {
    es: ['Tacos auténticos y mariscos', 'Cocina internacional', 'Supermercado', 'Agencias de tours', 'Cenotes y zonas arqueológicas'],
    en: ['Authentic tacos & seafood', 'International cuisine', 'Supermarket', 'Tour agencies', 'Cenotes & archaeological sites'],
  },
  distances: {
    airport: { es: '30 min al aeropuerto', en: '30 minutes to airport' },
    downtown: { es: '15 min al centro', en: '15 minutes to downtown' },
  },
  image: buildingAsset.url,
}

export const salviaUnits: SalviaUnit[] = [
  {
    id: 'salvia-604ab',
    slug: 'penthouse-604ab',
    code: '604AB',
    name: { es: 'Penthouse 604AB', en: 'Penthouse 604AB' },
    subtitle: { es: 'La unidad más grande — Esquina con vistas panorámicas', en: 'The largest unit — Corner with panoramic views' },
    askingPriceUSD: 525000,
    floorAreaSqFt: 1000,
    floorAreaM2: 93,
    layout: { es: 'Esquina de un piso (6º nivel)', en: '1-floor corner unit (6th floor)' },
    maxGuests: 8,
    bedrooms: 3,
    bedsDescription: { es: '3 queen + 2 futons', en: '3 queen + 2 futons' },
    bathrooms: 2,
    balcony: { es: 'Wrap-around panorámico', en: 'Wrap-around panoramic' },
    views: { es: 'Mar y laguna desde cada habitación', en: 'Ocean & lagoon from every room' },
    hurricaneShutters: false,
    airbnbRating: 4.82,
    reviews: 165,
    trackRecordYears: 5,
    guestFavorite: true,
    highestRoi: true,
    avgAnnualRevenueUSD: 59914,
    net2025USD: 41705,
    expenses2025USD: 18406,
    avgNightlyRateUSD: 300,
    avgOccupancyPct: 54.5,
    peakOccupancyPct: 76,
    monthlyMaintenanceUSD: 848,
    annualBeachTaxUSD: 519,
    annualPropertyTaxUSD: 638,
    grossRoiPct: 11.45,
    netRoiPct: 8.0,
    performance: [
      { year: 2021, grossRevenueUSD: 58467, nights: 216, occupancyPct: 59.2 },
      { year: 2022, grossRevenueUSD: 61744, nights: 206, occupancyPct: 56.4 },
      { year: 2023, grossRevenueUSD: 56543, nights: 185, occupancyPct: 50.7 },
      { year: 2024, grossRevenueUSD: 62703, nights: 183, occupancyPct: 50.0 },
      { year: 2025, grossRevenueUSD: 60111, nights: 206, occupancyPct: 56.0 },
    ],
    features: {
      es: [
        'Esquina del 6º piso con balcón wrap-around panorámico',
        'Vistas al mar desde cada habitación, incluida cocina y baños',
        'Ventana nueva con vista espectacular a la playa',
        'Badge oficial Airbnb \u201CGuest Favorite\u201D',
        'Mismo precio que el 2A pero 43% más superficie',
        '2 baños completos · ROI más alto del edificio',
      ],
      en: [
        '6th-floor corner unit with wrap-around panoramic balcony',
        'Ocean views from every room including kitchen & bathrooms',
        'New window with spectacular beach view',
        'Official Airbnb \u201CGuest Favorite\u201D badge',
        'Same price as Unit 2A but 43% more floor area',
        '2 full bathrooms · highest ROI in the building',
      ],
    },
    image: unit604abAsset.url,
    datePosted: '2026-06-01',
    seo: {
      title: {
        es: 'Penthouse 604AB · Edificio Salvia · ROI 11.45% | Cancún',
        en: 'Penthouse 604AB · Salvia Building · 11.45% ROI | Cancún',
      },
      description: {
        es: 'Penthouse de esquina, el más grande del Edificio Salvia: 1,000 sq ft, vistas panorámicas y ROI bruto del 11.45%. Guest Favorite con 4.82★ en Airbnb.',
        en: 'Largest corner penthouse with panoramic views. 1,000 sq ft, 8 guests, highest ROI. Official Airbnb Guest Favorite with 4.82★ rating.',
      },
    },
    whatsappMsg: {
      es: 'Hola Rivana, me interesa el Penthouse 604AB del Edificio Salvia en la Zona Hotelera de Cancún.',
      en: "Hi Rivana, I'm interested in Penthouse 604AB at the Salvia Building, Hotel Zone Cancún.",
    },
  },
  {
    id: 'salvia-3b',
    slug: 'penthouse-3b',
    code: '3B',
    name: { es: 'Penthouse 3B', en: 'Penthouse 3B' },
    subtitle: { es: 'Duplex de 2 niveles, renovación total 2019', en: '2-story duplex, full 2019 renovation' },
    askingPriceUSD: 595000,
    floorAreaSqFt: 700,
    floorAreaM2: 65,
    layout: { es: 'Duplex de 2 niveles', en: '2-story duplex' },
    maxGuests: 8,
    bedrooms: 4,
    bedsDescription: { es: '4 queen (2 murphy abajo + 2 arriba)', en: '4 queen (2 murphy downstairs + 2 upstairs)' },
    bathrooms: 2,
    balcony: { es: 'Balcón con vista al mar', en: 'Ocean-view balcony' },
    views: { es: 'Mar Caribe y Laguna Nichupté', en: 'Caribbean & Nichupté Lagoon' },
    hurricaneShutters: false,
    airbnbRating: 4.80,
    reviews: 140,
    trackRecordYears: 5,
    avgAnnualRevenueUSD: 66374,
    net2025USD: 47919,
    expenses2025USD: 14563,
    avgNightlyRateUSD: 337,
    avgOccupancyPct: 54,
    monthlyMaintenanceUSD: 586,
    annualBeachTaxUSD: 384,
    annualPropertyTaxUSD: 215,
    grossRoiPct: 10.5,
    netRoiPct: 8.1,
    performance: [
      { year: 2021, grossRevenueUSD: 64512, nights: 188, occupancyPct: 51.5 },
      { year: 2022, grossRevenueUSD: 77110, nights: 224, occupancyPct: 61.4 },
      { year: 2023, grossRevenueUSD: 64662, nights: 186, occupancyPct: 51.0 },
      { year: 2024, grossRevenueUSD: 61303, nights: 181, occupancyPct: 50.0 },
      { year: 2025, grossRevenueUSD: 64282, nights: 205, occupancyPct: 56.0 },
    ],
    features: {
      es: [
        'Renovación total 2019 (piso a techo)',
        '4 camas queen (2 murphy)',
        '2 Smart TV Roku · caja fuerte',
        'Cortinas blackout · cocina completa',
        'Balcón con vista al mar',
        'Mobiliario, blancos y electrodomésticos incluidos',
      ],
      en: [
        'Full 2019 gut renovation (floor to ceiling)',
        '4 queen beds (2 murphy)',
        '2 Roku Smart TVs · safe box',
        'Blackout curtains · full kitchen',
        'Ocean-view balcony',
        'All furniture, linens and appliances included',
      ],
    },
    image: unit3bAsset.url,
    datePosted: '2026-06-01',
    seo: {
      title: {
        es: 'Penthouse 3B · Edificio Salvia · ROI 10.5% | Cancún',
        en: 'Penthouse 3B · Salvia Building · 10.5% ROI | Cancún',
      },
      description: {
        es: 'Penthouse duplex frente al mar en Zona Hotelera. 700 sq ft, 4 recámaras, 2 baños. Ingreso verificado de $66K+ USD anuales y 4.80★ en Airbnb.',
        en: 'Ocean-view duplex penthouse in Hotel Zone. 700 sq ft, 4 beds, 2 baths. Verified $66K+ annual revenue. Active Airbnb with 4.80★ rating.',
      },
    },
    whatsappMsg: {
      es: 'Hola Rivana, me interesa el Penthouse 3B del Edificio Salvia en la Zona Hotelera de Cancún.',
      en: "Hi Rivana, I'm interested in Penthouse 3B at the Salvia Building, Hotel Zone Cancún.",
    },
  },
  {
    id: 'salvia-2a',
    slug: 'penthouse-2a',
    code: '2A',
    name: { es: 'Penthouse 2A', en: 'Penthouse 2A' },
    subtitle: { es: 'Duplex renovado con persianas anti-huracán', en: 'Renovated duplex with hurricane shutters' },
    askingPriceUSD: 525000,
    floorAreaSqFt: 700,
    floorAreaM2: 65,
    layout: { es: 'Duplex de 2 niveles', en: '2-story duplex' },
    maxGuests: 6,
    bedrooms: 3,
    bedsDescription: { es: '1 king (abajo) + 2 queen (arriba)', en: '1 king (downstairs) + 2 queen (upstairs)' },
    bathrooms: 2,
    balcony: { es: 'Vista al mar y la playa', en: 'Ocean & beach view' },
    views: { es: 'Mar Caribe y Laguna Nichupté', en: 'Caribbean & Nichupté Lagoon' },
    hurricaneShutters: true,
    airbnbRating: 4.76,
    reviews: 67,
    trackRecordYears: 3,
    avgAnnualRevenueUSD: 53448,
    net2025USD: 37865,
    expenses2025USD: 14072,
    avgNightlyRateUSD: 293,
    avgOccupancyPct: 50,
    peakOccupancyPct: 65,
    monthlyMaintenanceUSD: 586,
    annualBeachTaxUSD: 384,
    annualPropertyTaxUSD: 215,
    grossRoiPct: 9.89,
    netRoiPct: 7.2,
    performance: [
      { year: 2023, grossRevenueUSD: 51428, nights: 192, occupancyPct: 52.6 },
      { year: 2024, grossRevenueUSD: 56980, nights: 180, occupancyPct: 49.3 },
      { year: 2025, grossRevenueUSD: 51937, nights: 177, occupancyPct: 48.0 },
    ],
    features: {
      es: [
        'Repintado interior completo',
        '2 aires acondicionados nuevos',
        'Smart TV 65" nueva · refrigerador nuevo',
        'Blancos nuevos · cortinas blackout',
        'Persianas anti-huracán en todas las puertas corredizas',
        'Mobiliario, decoración y electrodomésticos incluidos',
      ],
      en: [
        'Full interior repaint',
        '2 new A/C units',
        'New 65" Smart TV · new refrigerator',
        'New bedding · blackout curtains',
        'Hurricane shutters on all sliding glass doors',
        'All furniture, décor and appliances included',
      ],
    },
    image: unit2aAsset.url,
    datePosted: '2026-06-01',
    seo: {
      title: {
        es: 'Penthouse 2A · Edificio Salvia · ROI 9.89% | Cancún',
        en: 'Penthouse 2A · Salvia Building · 9.89% ROI | Cancún',
      },
      description: {
        es: 'Penthouse renovado con persianas anti-huracán en Zona Hotelera. 700 sq ft, 6 huéspedes, 2 baños. Ingreso promedio $53K+ USD anuales.',
        en: 'Renovated penthouse with hurricane shutters. 700 sq ft, 6 guests, 2 baths. $53K+ average annual income. 4.76★ Airbnb rating.',
      },
    },
    whatsappMsg: {
      es: 'Hola Rivana, me interesa el Penthouse 2A del Edificio Salvia en la Zona Hotelera de Cancún.',
      en: "Hi Rivana, I'm interested in Penthouse 2A at the Salvia Building, Hotel Zone Cancún.",
    },
  },
]

export const formatUSD = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)

export const salviaLandingPath = (isEnglish: boolean) =>
  isEnglish ? '/en/hotel-zone/salvia-building' : '/zona-hotelera/edificio-salvia'

export const salviaUnitPath = (slug: string, isEnglish: boolean) =>
  `${salviaLandingPath(isEnglish)}/${slug}`

export const salviaWhatsAppUrl = (msg: string) =>
  `https://wa.me/529988457224?text=${encodeURIComponent(msg)}&utm_source=web`https://wa.me/529988457224?text=${encodeURIComponent(msg)}`utm_medium=whatsapp`https://wa.me/529988457224?text=${encodeURIComponent(msg)}`utm_campaign=lead&utm_content=salvia-unit-card`

export const getSalviaUnitBySlug = (slug?: string) =>
  salviaUnits.find((u) => u.slug === slug)