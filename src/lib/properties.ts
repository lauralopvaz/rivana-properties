import type { PropertyDetail } from '@/types/property';
import reserveHero from '@/assets/reserve-mayakoba-hero.jpg';
import mondrianHero from '@/assets/mondrian-hero.png';
import mondrianFrontDesk from '@/assets/mondrian-front-desk.png';
import mondrianCoffeeBar from '@/assets/mondrian-coffee-bar.jpg';
import mondrianRestaurant from '@/assets/mondrian-restaurant.png';
import mondrianRooftop from '@/assets/mondrian-rooftop.png';
import mondrianBeachClub from '@/assets/mondrian-beach-club.png';
import mondrianGym from '@/assets/mondrian-gym.png';
import mondrianPool from '@/assets/mondrian-pool.png';
import fpEstudioCurva from '@/assets/mondrian/fp-estudio-curva.png';
import fpDepA from '@/assets/mondrian/fp-dep-a.png';
import fpDepAPrime from '@/assets/mondrian/fp-dep-a-prime.png';
import fpDepA1 from '@/assets/mondrian/fp-dep-a1.png';
import fpLoftA from '@/assets/mondrian/fp-loft-a.png';
import fpCurvaA from '@/assets/mondrian/fp-curva-a.png';
import slsVistaPrincipal from '@/assets/sls-vista-principal.jpg';
import slsVistaPanoramica from '@/assets/sls-vista-panoramica.jpg';
import slsMarina from '@/assets/sls-marina.jpg';
import slsVistaAlberca from '@/assets/sls-vista-alberca.jpg';
import slsRecepcion from '@/assets/sls-recepcion.jpg';
import slsGimnasio from '@/assets/sls-gimnasio.jpg';
import slsYoga from '@/assets/sls-yoga.jpg';
import slsKidsClub from '@/assets/sls-kids-club.jpg';
import slsPlayroom from '@/assets/sls-playroom.jpg';
import slsSalaJuegos from '@/assets/sls-sala-juegos.jpg';
import slsAlbercaDia from '@/assets/sls-alberca-dia.jpg';
import slsAlberca from '@/assets/sls-alberca.jpg';
import slsBar from '@/assets/sls-bar.jpg';
import slsBeachclub from '@/assets/sls-beachclub.jpg';
import slsEdificio from '@/assets/sls-edificio.jpg';
import slsEntrada from '@/assets/sls-entrada.jpg';
import fpCurvaA2 from '@/assets/mondrian/fp-curva-a2.png';
import dhamarPrincipal from '@/assets/dhamar-principal.jpg';
import dhamarAlberca from '@/assets/dhamar-alberca.jpg';
import dhamarRooftop from '@/assets/dhamar-rooftop.jpg';
import dhamarYogaPilates from '@/assets/dhamar-yoga-pilates.jpg';
import dhamarBeachclub1 from '@/assets/dhamar-beachclub1.jpg';
import dhamarBeachclub2 from '@/assets/dhamar-beachclub2.jpg';
import fpDepB from '@/assets/mondrian/fp-dep-b.png';
import fpDepBPrime from '@/assets/mondrian/fp-dep-b-prime.png';
import fpCurvaB from '@/assets/mondrian/fp-curva-b.png';
import fpDepBEsquina from '@/assets/mondrian/fp-dep-b-esquina.png';
import fpDepCEsquina from '@/assets/mondrian/fp-dep-c-esquina.png';
import vellmariHero from '@/assets/vellmari-hero.jpg';

export const properties: PropertyDetail[] = [
  {
    id: 'the-reserve-at-mayakoba',
    slug: 'the-reserve-at-mayakoba',
    name: 'The Reserve at Mayakoba',
    zone: 'Mayakoba, Riviera Maya',
    zoneEn: 'Mayakoba, Riviera Maya',
    status: 'preventa',
    priceFromUSD: 1141000,
    priceFromMXN: 19967500,
    bedrooms: '2–4',
    bedroomsEn: '2–4',
    sqmRange: '192.86–660.02 m²',
    delivery: '2027–2028',
    roiEstimate: 0,
    plusvaliaEstimate: 0,
    images: [reserveHero],
    description: 'The Reserve at Mayakoba es un desarrollo residencial de ultra-lujo dentro del icónico complejo Mayakoba en la Riviera Maya. 144 departamentos distribuidos en 16 torres de baja altura rodeadas de naturaleza — 65% del terreno es conservación natural. Desarrollado por Sancus Capital Partners e Inmobilia, con arquitectura de L35 Arquitectos y Sepúlveda Arquitectos. Los propietarios tienen acceso a los servicios hoteleros de Banyan Tree Mayakoba: spa, room service y restaurantes de clase mundial.',
    descriptionEn: 'The Reserve at Mayakoba is an ultra-luxury residential development within the iconic Mayakoba complex in the Riviera Maya. 144 apartments across 16 low-rise towers surrounded by nature — 65% of the land is natural conservation. Developed by Sancus Capital Partners and Inmobilia, with architecture by L35 Arquitectos and Sepúlveda Arquitectos. Owners have access to Banyan Tree Mayakoba hotel services: spa, room service, and world-class restaurants.',
    features: [
      'Servicios Banyan Tree', 'Spa de clase mundial', 'Room Service', 'Restaurantes',
      'Campo de Golf PGA', 'Cenotes privados', 'Laguna', 'Conservación Natural',
      'Torres de baja altura', 'Seguridad 24/7', 'Club de Playa', 'Jardines privados',
    ],
    featuresEn: [
      'Banyan Tree Services', 'World-class Spa', 'Room Service', 'Restaurants',
      'PGA Golf Course', 'Private Cenotes', 'Lagoon', 'Natural Conservation',
      'Low-rise Towers', '24/7 Security', 'Beach Club', 'Private Gardens',
    ],
    units: [
      // Vista Laguna
      { name: 'Tipo B Vista Laguna — 2 Rec', nameEn: 'Type B Lagoon View — 2BR', sqm: 235, priceMXN: 30698990, priceUSD: 1624000, available: 2 },
      { name: 'Tipo D Vista Laguna — 3 Rec', nameEn: 'Type D Lagoon View — 3BR', sqm: 399, priceMXN: 41632500, priceUSD: 2028000, available: 3 },
      { name: 'Tipo E Vista Laguna — 3 Rec', nameEn: 'Type E Lagoon View — 3BR', sqm: 340, priceMXN: 40215000, priceUSD: 2096000, available: 3 },
      { name: 'Tipo F Vista Laguna — 4 Rec', nameEn: 'Type F Lagoon View — 4BR', sqm: 377, priceMXN: 53690000, priceUSD: 3068000, available: 2 },
      { name: 'PH4 Vista Laguna — 4 Rec', nameEn: 'PH4 Lagoon View — 4BR', sqm: 556, priceMXN: 38010000, priceUSD: 2172000, available: 1 },
      // Vista Golf
      { name: 'Tipo B Vista Golf — 2 Rec', nameEn: 'Type B Golf View — 2BR', sqm: 198, priceMXN: 19967500, priceUSD: 1141000, available: 6 },
      { name: 'Tipo C Vista Golf — 2 Rec', nameEn: 'Type C Golf View — 2BR', sqm: 224, priceMXN: 21560000, priceUSD: 1232000, available: 3 },
      { name: 'Tipo D Vista Golf — 3 Rec', nameEn: 'Type D Golf View — 3BR', sqm: 245, priceMXN: 29056125, priceUSD: 1660350, available: 1 },
      { name: 'Tipo E Vista Golf — 3 Rec', nameEn: 'Type E Golf View — 3BR', sqm: 256, priceMXN: 27720000, priceUSD: 1584000, available: 1 },
      { name: 'Tipo F Vista Golf — 4 Rec', nameEn: 'Type F Golf View — 4BR', sqm: 377, priceMXN: 43225000, priceUSD: 2470000, available: 5 },
      { name: 'PH2 Vista Golf — 4 Rec', nameEn: 'PH2 Golf View — 4BR', sqm: 660, priceMXN: 67287500, priceUSD: 3845000, available: 1 },
      // Vista Selva
      { name: 'Tipo B Vista Selva — 2 Rec', nameEn: 'Type B Jungle View — 2BR', sqm: 193, priceMXN: 24062500, priceUSD: 1375000, available: 4 },
      { name: 'Tipo D Vista Selva — 3 Rec', nameEn: 'Type D Jungle View — 3BR', sqm: 258, priceMXN: 24325000, priceUSD: 1390000, available: 2 },
      { name: 'Tipo E Vista Selva — 3 Rec', nameEn: 'Type E Jungle View — 3BR', sqm: 262, priceMXN: 29190000, priceUSD: 1668000, available: 6 },
      { name: 'PH3 Vista Selva — 4 Rec', nameEn: 'PH3 Jungle View — 4BR', sqm: 534, priceMXN: 56787500, priceUSD: 3245000, available: 2 },
      { name: 'PH4 Vista Selva — 4 Rec', nameEn: 'PH4 Jungle View — 4BR', sqm: 556, priceMXN: 52325000, priceUSD: 2990000, available: 1 },
    ],
    priceNote: 'Precios en USD. Muchas unidades ya vendidas o reservadas. Consulta disponibilidad con tu asesor Rivana.',
    priceNoteEn: 'Prices in USD. Many units already sold or reserved. Contact your Rivana advisor for current availability.',
    address: 'Carretera Federal Chetumal-Puerto Juárez km. 298, Playa del Carmen, Q. Roo 77710',
    addressNote: 'Dentro de Mayakoba, Riviera Maya. Acceso controlado.',
    addressNoteEn: 'Inside Mayakoba, Riviera Maya. Controlled access.',
    distances: [
      { label: 'Banyan Tree Spa — En complejo', labelEn: 'Banyan Tree Spa — On-site', icon: 'Waves' },
      { label: 'Campo de Golf PGA 5 min', labelEn: 'PGA Golf Course 5 min', icon: 'Flag' },
      { label: 'Playa del Carmen 10 min', labelEn: 'Playa del Carmen 10 min', icon: 'MapPin' },
      { label: 'Aeropuerto Cancún 45 min', labelEn: 'Cancún Airport 45 min', icon: 'Plane' },
      { label: 'Cenotes privados — En complejo', labelEn: 'Private Cenotes — On-site', icon: 'TreePine' },
    ],
    differentiators: [
      {
        type: 'exclusivo', layout: 'featured',
        title: 'Dentro de Mayakoba — el enclave más exclusivo de la Riviera Maya',
        titleEn: 'Inside Mayakoba — the most exclusive enclave in the Riviera Maya',
        description: 'Mayakoba es sede de Banyan Tree, Rosewood, Fairmont y Andaz. The Reserve es la primera oportunidad de ser propietario dentro de este ecosistema de ultra-lujo con acceso a servicios hoteleros de cinco estrellas.',
        descriptionEn: 'Mayakoba hosts Banyan Tree, Rosewood, Fairmont, and Andaz. The Reserve is the first opportunity to own inside this ultra-luxury ecosystem with access to five-star hotel services.',
        stat: '144', statLabel: 'residencias', statLabelEn: 'residences',
        pills: ['Banyan Tree', 'L35 Arquitectos', 'Sancus + Inmobilia'],
        pillsEn: ['Banyan Tree', 'L35 Architects', 'Sancus + Inmobilia'],
      },
      {
        type: 'amenidad', layout: 'grid',
        title: 'Servicios hoteleros Banyan Tree',
        titleEn: 'Banyan Tree hotel services',
        description: 'Acceso directo a spa, room service, restaurantes y concierge del reconocido Banyan Tree Mayakoba — como propietario, no como huésped.',
        descriptionEn: 'Direct access to spa, room service, restaurants, and concierge of the renowned Banyan Tree Mayakoba — as an owner, not a guest.',
      },
      {
        type: 'vista', layout: 'grid',
        title: '65% conservación natural',
        titleEn: '65% natural conservation',
        description: 'Laguna, manglar, cenotes y selva. Las torres de baja altura están diseñadas para integrarse en el paisaje, no para dominarlo.',
        descriptionEn: 'Lagoon, mangroves, cenotes, and jungle. The low-rise towers are designed to blend into the landscape, not dominate it.',
      },
      {
        type: 'exclusivo', layout: 'grid',
        title: 'Arquitectura L35 + Sepúlveda',
        titleEn: 'L35 + Sepúlveda Architecture',
        description: 'Firmas con sede en Barcelona, Madrid y París. Un diseño que integra el interior con el paisaje natural de la Riviera Maya.',
        descriptionEn: 'Firms based in Barcelona, Madrid, and Paris. A design that integrates interiors with the natural landscape of the Riviera Maya.',
      },
      {
        type: 'amenidad', layout: 'wide',
        title: 'Campo de golf PGA, cenotes privados y club de playa',
        titleEn: 'PGA golf course, private cenotes, and beach club',
        description: 'Amenidades que normalmente solo están disponibles para huéspedes de los hoteles de lujo de Mayakoba — ahora accesibles para propietarios de The Reserve.',
        descriptionEn: 'Amenities normally only available to guests of Mayakoba\'s luxury hotels — now accessible to owners of The Reserve.',
      },
    ],
  },
  {
    id: 'mondrian-residences-grand-island-cancun',
    slug: 'mondrian-residences-grand-island-cancun',
    name: 'Mondrian Residences at Grand Island Cancún',
    zone: 'Cancún Zona Hotelera',
    zoneEn: 'Cancún Hotel Zone',
    status: 'preventa',
    priceFromUSD: 514000,
    priceFromMXN: 9050000,
    bedrooms: '1–3 Hab + Loft',
    bedroomsEn: '1–3 BR + Loft',
    sqmRange: '76.96–164.75 m²',
    delivery: 'Q2 2027',
    roiEstimate: 33,
    plusvaliaEstimate: 33,
    images: [
      mondrianHero,
      mondrianFrontDesk,
      mondrianCoffeeBar,
      mondrianRestaurant,
      mondrianRooftop,
      mondrianBeachClub,
      mondrianGym,
      mondrianPool,
    ],
    description: 'Mondrian Residences at Grand Island es una residencia de marca dentro del desarrollo maestro más exclusivo de la Zona Hotelera de Cancún — diseñada por Filipao Nunes Arquitectos y operada por Accor bajo la marca Mondrian. Cada unidad se entrega llave en mano, totalmente amueblada y equipada, lista para operar desde el primer día. Invertir aquí es adquirir un activo que trabaja por ti, respaldado por una de las marcas hoteleras más reconocidas del mundo. Tu legado frente al Caribe.',
    descriptionEn: 'Mondrian Residences at Grand Island is a branded residence within the most exclusive master development in Cancún\'s Hotel Zone — designed by Filipao Nunes Arquitectos and operated by Accor under the Mondrian brand. Every unit is delivered turnkey, fully furnished and equipped, ready to operate from day one. Investing here means acquiring an asset that works for you — backed by one of the most recognized hotel brands in the world. Your legacy on the Caribbean.',
    features: [
      'Alberca Infinity', 'Beach Club', 'Concierge 24/7', 'Spa & Wellness',
      'Gimnasio', 'Campo de Golf', 'Marina Privada', 'Vista al Mar',
      'Club Privado', 'Restaurante Rooftop', 'Coffee Shop', 'Bar',
      'Sauna', 'Tinas de hidromasaje', 'Gradas Lounge exterior', 'Entrega llave en mano',
    ],
    featuresEn: [
      'Infinity Pool', 'Beach Club', 'Concierge 24/7', 'Spa & Wellness',
      'Fitness Center', 'Golf Course', 'Private Marina', 'Ocean View',
      'Private Club', 'Rooftop Restaurant', 'Coffee Shop', 'Bar',
      'Sauna', 'Jacuzzi', 'Outdoor Lounge Terrace', 'Turnkey delivery',
    ],
    units: [
      { name: 'Estudio Curva — 1 Hab / 1 Baño', nameEn: 'Studio Curve — 1BR/1BA', sqm: 76.96, priceMXN: 9050000, priceUSD: 514000, available: 10, floorPlanUrl: fpEstudioCurva },
      { name: 'Departamento A — 1 Hab / 2 Baños', nameEn: 'Unit A — 1BR/2BA', sqm: 81.46, priceMXN: 9050000, priceUSD: 514000, available: 10, floorPlanUrl: fpDepA },
      { name: "Departamento A' — 1 Hab / 2 Baños", nameEn: "Unit A' — 1BR/2BA", sqm: 115.84, priceMXN: 11294550, priceUSD: 642000, available: 10, floorPlanUrl: fpDepAPrime },
      { name: 'Departamento A1 — 1 Hab / 2 Baños', nameEn: 'Unit A1 — 1BR/2BA', sqm: 108.20, priceMXN: 10750625, priceUSD: 611000, available: 10, floorPlanUrl: fpDepA1 },
      { name: 'Loft A — 1 Hab / 2 Baños (dúplex)', nameEn: 'Loft A — 1BR/2BA (duplex)', sqm: 91.20, priceMXN: 13343700, priceUSD: 758000, available: 10, floorPlanUrl: fpLoftA },
      { name: 'Depto Curva A — 1 Hab / 1.5 Baños', nameEn: 'Curve Unit A — 1BR/1.5BA', sqm: 106.25, priceMXN: 10750625, priceUSD: 611000, available: 10, floorPlanUrl: fpCurvaA },
      { name: 'Depto Curva A — 1 Hab / 2 Baños', nameEn: 'Curve Unit A — 1BR/2BA', sqm: 112.31, priceMXN: 11294550, priceUSD: 642000, available: 10, floorPlanUrl: fpCurvaA2 },
      { name: 'Departamento B — 2 Hab / 2.5 Baños', nameEn: 'Unit B — 2BR/2.5BA', sqm: 135.44, priceMXN: 12040772, priceUSD: 684000, available: 5, floorPlanUrl: fpDepB },
      { name: 'Departamento B Esquina — 2 Hab / 2.5 Baños', nameEn: 'Unit B Corner — 2BR/2.5BA', sqm: 164.75, priceMXN: 20462981, priceUSD: 1163000, available: 5, floorPlanUrl: fpDepBEsquina },
      { name: "Departamento B' — 2 Hab / 2.5 Baños", nameEn: "Unit B' — 2BR/2.5BA", sqm: 145.74, priceMXN: 12040772, priceUSD: 684000, available: 5, floorPlanUrl: fpDepBPrime },
      { name: 'Depto Curva B — 2 Hab / 2.5 Baños', nameEn: 'Curve Unit B — 2BR/2.5BA', sqm: 152.29, priceMXN: 15820111, priceUSD: 899000, available: 5, floorPlanUrl: fpCurvaB },
      { name: 'Departamento C Esquina — 3 Hab / 3.5 Baños', nameEn: 'Corner Unit C — 3BR/3.5BA', sqm: 158.93, priceMXN: 21942074, priceUSD: 1247000, available: 5, floorPlanUrl: fpDepCEsquina },
    ],
    priceNote: 'Precio varía según nivel, vista y orientación. Consulta disponibilidad con tu asesor Rivana.',
    priceNoteEn: 'Price varies by floor, view, and orientation. Contact your Rivana advisor for current availability.',
    address: 'Blvd. Kukulcán km 16.5, Zona Hotelera, 77500 Cancún, Q.R., México',
    addressNote: 'Dentro del desarrollo maestro Grand Island Cancún. Acceso controlado 24/7.',
    addressNoteEn: 'Inside the Grand Island Cancún master development. 24/7 controlled access.',
    distances: [
      { label: 'Aeropuerto Internacional 15 min', labelEn: 'International Airport 15 min', icon: 'Plane' },
      { label: 'Plaza La Isla 5 min', labelEn: 'Plaza La Isla 5 min', icon: 'ShoppingBag' },
      { label: 'Nuevo Puente Nichupté 5 min', labelEn: 'New Nichupté Bridge 5 min', icon: 'Car' },
      { label: 'Puerto Morelos 30 min', labelEn: 'Puerto Morelos 30 min', icon: 'Anchor' },
      { label: 'Xcaret 60 min', labelEn: 'Xcaret 60 min', icon: 'TreePine' },
      { label: 'Marina Privada — En desarrollo', labelEn: 'Private Marina — On-site', icon: 'Waves' },
    ],
    presalePrice: {
      originalMXN: 12000000,
      discountMXN: 9050000,
      deadlineDate: '2026-06-01',
      priceIncreasePercent: 33,
    },
    brochureUrl: '/brochures/mondrian-residences.pdf',
    differentiators: [
      {
        type: 'entrega', layout: 'featured',
        title: 'Llave en mano — listo para generar desde el día uno',
        titleEn: 'Turnkey — generating returns from day one',
        description: 'Cada unidad se entrega totalmente amueblada, equipada y lista para operar bajo la gestión de Accor y la marca Mondrian. Sin curva de aprendizaje. Sin gestión directa. Solo rendimientos.',
        descriptionEn: 'Every unit is delivered fully furnished, equipped, and ready to operate under Accor\'s management and the Mondrian brand. No learning curve. No hands-on management. Just returns.',
        stat: '33%', statLabel: 'plusvalía', statLabelEn: 'appreciation',
        pills: ['Listo para operar', 'Gestión Accor'],
        pillsEn: ['Ready to operate', 'Accor Management'],
      },
      {
        type: 'exclusivo', layout: 'grid',
        title: 'Diseño de Filipao Nunes Arquitectos',
        titleEn: 'Designed by Filipao Nunes Arquitectos',
        description: 'Una firma que convierte cada espacio en una declaración de intención — lobbys escultóricos, spas de autor, pasillos curvos con iluminación cinematográfica. El diseño es parte del activo.',
        descriptionEn: 'An architecture firm that turns every space into a statement of intention — sculptural lobbies, signature spas, curved corridors with cinematic lighting. The design is part of the asset.',
      },
      {
        type: 'amenidad', layout: 'grid',
        title: 'Operado por Accor — marca Mondrian',
        titleEn: 'Operated by Accor — Mondrian brand',
        description: 'Accor es uno de los grupos hoteleros más grandes del mundo. La marca Mondrian atrae a un viajero de alto poder adquisitivo — lo que se traduce directamente en ocupación premium y tarifas superiores.',
        descriptionEn: 'Accor is one of the largest hotel groups in the world. The Mondrian brand attracts high-net-worth travelers — which translates directly into premium occupancy and higher nightly rates.',
      },
      {
        type: 'vista', layout: 'grid',
        title: 'Vista única: Mar Caribe y Laguna Nichupté',
        titleEn: 'Unique view: Caribbean Sea & Nichupté Lagoon',
        description: 'El único desarrollo en la Zona Hotelera con vistas simultáneas al Mar Caribe y a la Laguna Nichupté. Una perspectiva que no se repite en ningún otro proyecto.',
        descriptionEn: 'The only development in the Hotel Zone with simultaneous views of the Caribbean Sea and Nichupté Lagoon. A perspective found nowhere else.',
      },
      {
        type: 'precio', layout: 'grid',
        title: 'Preventa desde $9,050,000 MXN',
        titleEn: 'Pre-sale from MXN 9,050,000',
        description: 'El precio post-preventa proyectado es de $12,000,000 MXN — una plusvalía de ~33% antes de recibir las llaves. El momento de entrar es ahora.',
        descriptionEn: 'The projected post-pre-sale price is MXN 12,000,000 — ~33% appreciation before receiving the keys. The time to enter is now.',
        pills: ['$9.05M preventa', '$12M post-preventa'],
        pillsEn: ['$9.05M pre-sale', '$12M post-pre-sale'],
      },
      {
        type: 'amenidad', layout: 'wide',
        title: 'Spa, gimnasio, restaurante rooftop con vistas al Caribe',
        titleEn: 'Spa, gym, rooftop restaurant with Caribbean views',
        description: 'Las amenidades del desarrollo no son complementarias — son el corazón del estilo de vida que vende la marca. Diseñadas por Filipao Nunes para competir con los mejores resorts del mundo.',
        descriptionEn: 'The development\'s amenities are not complementary — they are the heart of the lifestyle the brand sells. Designed by Filipao Nunes to compete with the world\'s finest resorts.',
      },
      {
        type: 'vista', layout: 'wide',
        title: 'En el corazón de Grand Island — marina, golf y club de playa',
        titleEn: 'At the heart of Grand Island — marina, golf & beach club',
        description: 'Desarrollo maestro de 23 hectáreas en el km 16.5 de la Zona Hotelera, con seguridad 24/7, marina privada, acceso a campo de golf de 18 hoyos y vistas a la Laguna Nichupté y el Mar Caribe.',
        descriptionEn: 'A 23-hectare master development at km 16.5 of the Hotel Zone, with 24/7 security, private marina, 18-hole golf course access, and views of Nichupté Lagoon and the Caribbean Sea.',
      },
      {
        type: 'entrega', layout: 'wide',
        title: 'Entrega Q2 2027 — horizonte de inversión definido',
        titleEn: 'Delivery Q2 2027 — a defined investment horizon',
        description: 'Tiempo suficiente para planear tu estrategia patrimonial, corto suficiente para capitalizar la plusvalía de preventa antes de que el mercado ajuste el precio.',
        descriptionEn: 'Enough time to plan your wealth strategy, short enough to capitalize on pre-sale appreciation before the market re-prices.',
        pills: ['Q2 2027'],
        pillsEn: ['Q2 2027'],
      },
    ],
  },
  {
    id: 'dhamar-costa-mujeres',
    slug: 'dhamar-costa-mujeres',
    name: 'Dhamar',
    zone: 'Costa Mujeres, Cancún',
    zoneEn: 'Costa Mujeres, Cancún',
    status: 'preventa',
    priceFromUSD: 248000,
    priceFromMXN: 4338360,
    bedrooms: '1–3',
    bedroomsEn: '1–3',
    sqmRange: '47.34–177.50 m²',
    delivery: '2027',
    roiEstimate: 0,
    plusvaliaEstimate: 0,
images: [dhamarPrincipal, dhamarAlberca, dhamarRooftop, dhamarYogaPilates, dhamarBeachclub1, dhamarBeachclub2],
    description: 'Vivir con calma, sin renunciar a nada. Despertar con vistas abiertas, aire limpio y un entorno natural donde el mar, el manglar y la luz natural forman parte de la rutina. Un lugar pensado para disfrutarse hoy y crecer en valor mañana. Bienestar que se siente. Valor que perdura.',
    descriptionEn: 'Living calmly, without giving anything up. Waking up to open views, clean air, and a natural environment where the sea, mangroves, and natural light become part of the routine. A place designed to be enjoyed today and grow in value tomorrow. Wellness you can feel. Value that endures.',
    features: ['Gym', 'Kids Club', 'Alberca', 'Coworking', 'Beach Club', 'Acceso exclusivo a la playa'],
    featuresEn: ['Gym', 'Kids Club', 'Pool', 'Coworking', 'Beach Club', 'Exclusive beach access'],
    units: [
      { name: 'X01 Esquina (Pisos 8–11) — 3 Hab / 3.5 Baños', nameEn: 'X01 Corner (Floors 8–11) — 3BR/3.5BA', sqm: 177.50, priceMXN: 12623138, priceUSD: 721322, available: 4 },
      { name: 'X02 Lateral (Pisos 8–11) — 3 Hab / 3 Baños', nameEn: 'X02 Lateral (Floors 8–11) — 3BR/3BA', sqm: 145.93, priceMXN: 10070629, priceUSD: 575464, available: 4 },
      { name: 'X03 Lateral (Pisos 8–11) — 1 Hab / 1 Baño', nameEn: 'X03 Lateral (Floors 8–11) — 1BR/1BA', sqm: 47.34, priceMXN: 4043942, priceUSD: 231082, available: 4 },
      { name: 'X04 Reserva (Pisos 8–11) — 1 Hab / 2 Baños', nameEn: 'X04 Reserve (Floors 8–11) — 1BR/2BA', sqm: 67.04, priceMXN: 5554979, priceUSD: 317427, available: 4 },
      { name: 'X05 Interna (Pisos 8–11) — 2 Hab / 2.5 Baños', nameEn: 'X05 Interior (Floors 8–11) — 2BR/2.5BA', sqm: 96.39, priceMXN: 7628142, priceUSD: 435894, available: 4 },
      { name: 'X01 Esquina (Pisos 2–7) — 2 Hab / 2.5 Baños', nameEn: 'X01 Corner (Floors 2–7) — 2BR/2.5BA', sqm: 118.47, priceMXN: 8051075, priceUSD: 460061, available: 6 },
      { name: 'X02 Lateral (Pisos 2–7) — 2 Hab / 2.5 Baños', nameEn: 'X02 Lateral (Floors 2–7) — 2BR/2.5BA', sqm: 96.85, priceMXN: 6384352, priceUSD: 364820, available: 6 },
      { name: 'X03 Lateral (Pisos 2–7) — 2 Hab / 2.5 Baños', nameEn: 'X03 Lateral (Floors 2–7) — 2BR/2.5BA', sqm: 104.96, priceMXN: 6918963, priceUSD: 395369, available: 6 },
      { name: 'X04 Reserva (Pisos 2–7) — 1 Hab / 2 Baños', nameEn: 'X04 Reserve (Floors 2–7) — 1BR/2BA', sqm: 67.04, priceMXN: 4627142, priceUSD: 264408, available: 6 },
      { name: 'X05 Interna (Pisos 2–7) — 2 Hab / 2.5 Baños', nameEn: 'X05 Interior (Floors 2–7) — 2BR/2.5BA', sqm: 96.49, priceMXN: 6678652, priceUSD: 381637, available: 6 },
      { name: '101 Esquina PB — 1 Hab / 1.5 Baños', nameEn: '101 Corner GF — 1BR/1.5BA', sqm: 78.38, priceMXN: 5489035, priceUSD: 313659, available: 1 },
      { name: '102 Lateral PB — 1 Hab / 2 Baños', nameEn: '102 Lateral GF — 1BR/2BA', sqm: 64.44, priceMXN: 4739046, priceUSD: 270803, available: 1 },
      { name: '103 Lateral PB — 1 Hab / 2 Baños', nameEn: '103 Lateral GF — 1BR/2BA', sqm: 64.44, priceMXN: 4513378, priceUSD: 257907, available: 1 },
      { name: '104 Interna PB — 1 Hab / 2 Baños', nameEn: '104 Interior GF — 1BR/2BA', sqm: 64.80, priceMXN: 4338360, priceUSD: 247906, available: 1 },
      { name: '105 Reserva PB — 1 Hab / 1.5 Baños', nameEn: '105 Reserve GF — 1BR/1.5BA', sqm: 67.04, priceMXN: 4712744, priceUSD: 269300, available: 1 },
      { name: '105A Reserva PB — 1 Hab / 1.5 Baños', nameEn: '105A Reserve GF — 1BR/1.5BA', sqm: 75.60, priceMXN: 5061420, priceUSD: 289224, available: 1 },
    ],
    distances: [
      { label: 'Puerto Cancún Mall 0 min', labelEn: 'Puerto Cancún Mall 0 min', icon: 'ShoppingBag' },
      { label: 'Campo de Golf 12 min', labelEn: 'Golf Course 12 min', icon: 'Flag' },
      { label: 'Hospital 25 min', labelEn: 'Hospital 25 min', icon: 'MapPin' },
      { label: 'Aeropuerto 43 min', labelEn: 'Airport 43 min', icon: 'Plane' },
    ],
  },
  {
    id: 'sls-ocean-beach-puerto-cancun',
    slug: 'sls-ocean-beach-puerto-cancun',
    name: 'SLS Ocean Beach',
    zone: 'Novo Cancún, Puerto Cancún',
    zoneEn: 'Novo Cancún, Puerto Cancún',
    status: 'preventa',
    priceFromUSD: 1600000,
    priceFromMXN: 28000000,
    bedrooms: '1–3',
    bedroomsEn: '1–3',
    sqmRange: '191–356 m²',
    delivery: 'Verano 2028',
    roiEstimate: 0,
    plusvaliaEstimate: 0,
    images: [slsVistaPrincipal, slsVistaPanoramica, slsEdificio, slsMarina, slsEntrada, slsVistaAlberca, slsAlbercaDia, slsAlberca, slsBar, slsBeachclub, slsRecepcion, slsGimnasio, slsYoga, slsKidsClub, slsPlayroom, slsSalaJuegos],
    description: 'Oasis frente al mar en la inmaculada costa de Puerto Cancún. Residencias de lujo en el exclusivo remanso privado de Novo Cancún. SLS es sede de experiencias excepcionales inmersas en un ambiente lúdico: maestría culinaria, interiores impactantes, caprichosos detalles visuales e indulgencia sin límite. Desarrollado por Inmobilia, Ucalli y Related. Arquitectura por Arquitectonica. Interiorismo por Bernardi + Peschard. Operado bajo la marca SLS Hotels (Ennismore + Accor).',
    descriptionEn: 'A beachfront oasis on Puerto Cancún\'s pristine coast. Luxury residences in Novo Cancún\'s exclusive private enclave. SLS is home to exceptional experiences immersed in a playful atmosphere: culinary mastery, striking interiors, whimsical visual details, and limitless indulgence. Developed by Inmobilia, Ucalli and Related. Architecture by Arquitectonica. Interior design by Bernardi + Peschard. Operated under the SLS Hotels brand (Ennismore + Accor).',
    features: [
      'Valet Parking', 'Concierge', 'Gimnasio', 'Salón de Yoga', 'Alberca Semi Olímpica',
      'Chapoteadero', 'Terrazas con Camastros', 'Zona de Asador', 'Putting Green',
      'Business Center', 'Salas de Masaje', 'Kids Club', 'Sala de Proyección', 'Salón de Juegos',
      'Club de Playa SLS', 'Ciel Spa', 'Campo de Golf Tom Weiskopf', 'Marina Privada',
      'Canchas de Tennis', 'Canchas de Pádel', 'Pet Park',
    ],
    featuresEn: [
      'Valet Parking', 'Concierge', 'Fitness Center', 'Yoga Studio', 'Semi-Olympic Pool',
      'Kids Pool', 'Lounge Terraces', 'BBQ Area', 'Putting Green',
      'Business Center', 'Massage Rooms', 'Kids Club', 'Screening Room', 'Game Room',
      'SLS Beach Club', 'Ciel Spa', 'Tom Weiskopf Golf Course', 'Private Marina',
      'Tennis Courts', 'Padel Courts', 'Pet Park',
    ],
    units: [
      { name: 'SLS 01 — 3 Rec + 4 Baños + Family + Servicio (dúplex)', nameEn: 'SLS 01 — 3BR/4BA + Family + Service (duplex)', sqm: 318, priceMXN: 28000000, priceUSD: 1600000, available: 20 },
      { name: 'SLS 02 — 3 Rec + 4 Baños + Family + Servicio (dúplex)', nameEn: 'SLS 02 — 3BR/4BA + Family + Service (duplex)', sqm: 330, priceMXN: 35000000, priceUSD: 2000000, available: 20 },
      { name: 'SLS 03 — 3 Rec + 4 Baños + Family + Servicio (dúplex)', nameEn: 'SLS 03 — 3BR/4BA + Family + Service (duplex)', sqm: 356, priceMXN: 52500000, priceUSD: 3000000, available: 20 },
      { name: 'SLS 04 — 1 Rec + 2 Baños + Family (dúplex)', nameEn: 'SLS 04 — 1BR/2BA + Family (duplex)', sqm: 191, priceMXN: 28000000, priceUSD: 1600000, available: 29 },
    ],
    priceNote: 'Plan de financiamiento: 20% a la firma, 30% en mensualidades sin intereses, 50% contra entrega.',
    priceNoteEn: 'Payment plan: 20% at signing, 30% in interest-free installments, 50% at delivery.',
    distances: [
      { label: 'Club de Playa SLS — En desarrollo', labelEn: 'SLS Beach Club — On-site', icon: 'Waves' },
      { label: 'Campo de Golf 5 min', labelEn: 'Golf Course 5 min', icon: 'Flag' },
      { label: 'Marina Privada — En desarrollo', labelEn: 'Private Marina — On-site', icon: 'Anchor' },
      { label: 'Aeropuerto 25 min', labelEn: 'Airport 25 min', icon: 'Plane' },
    ],
  },
  {
    id: 'vellmari-grand-living',
    slug: 'vellmari-grand-living',
    name: 'Vellmari Grand Living',
    zone: 'Puerto Cancún, Cancún',
    zoneEn: 'Puerto Cancún, Cancún',
    status: 'preventa',
    priceFromUSD: 845714,
    priceFromMXN: 14800000,
    bedrooms: '2–5',
    bedroomsEn: '2–5',
    sqmRange: '169–714 m²',
    delivery: 'Dic 2026 / Jul 2027',
    roiEstimate: 0,
    plusvaliaEstimate: 0,
    images: [vellmariHero],
    description: 'Un nuevo nivel de lujo en Puerto Cancún. 95 exclusivas residencias + 3 penthouses en 2 torres de 20 pisos en el corazón de Puerto Cancún. Vistas de 200 grados desde cada piso de ambas torres. Combina el entorno marítimo con diseño moderno de Ancona + Ancona Arquitectos. Acabados de lujo, armonía y confort. Plaza Puerto Cancún a menos de 500 metros con tiendas de lujo, restaurantes, entretenimiento y cine IMAX. Desarrollado por Urban Homes & Cadu Inmobiliaria con 18+ años de experiencia en Quintana Roo.',
    descriptionEn: 'A new level of luxury in Puerto Cancún. 95 exclusive residences + 3 penthouses in two 20-story towers in the heart of Puerto Cancún. 200-degree views from every floor of both towers. Combining the maritime environment with modern design by Ancona + Ancona Arquitectos. Luxury finishes, harmony, and comfort. Plaza Puerto Cancún less than 500 meters away with luxury shops, restaurants, entertainment, and IMAX cinema. Developed by Urban Homes & Cadu Inmobiliaria with 18+ years of experience in Quintana Roo.',
    features: [
      'Marina', 'Alberca Familiar', 'Alberca para Adultos', 'Jacuzzi', 'Pool Bar',
      'Kids Club', 'Área de Asador', 'Fire Pit', 'Pet Park', 'Lounge Bar',
      'Spa', 'Business Center', 'Gimnasio', 'Cancha de Pádel', 'Cancha de Pickleball',
      'Cancha de Fútbol 5', 'Seguridad 24/7', 'Lobby', 'Estacionamiento', 'Muelle',
    ],
    featuresEn: [
      'Marina', 'Family Pool', 'Adults Pool', 'Jacuzzi', 'Pool Bar',
      'Kids Club', 'BBQ Area', 'Fire Pit', 'Pet Park', 'Lounge Bar',
      'Spa', 'Business Center', 'Fitness Center', 'Padel Court', 'Pickleball Court',
      'Five-a-side Football', '24/7 Security', 'Lobby', 'Parking', 'Dock',
    ],
    units: [
      // Torre Norte
      { name: 'PH01 — 5 Rec (Torre Norte, Piso 19)', nameEn: 'PH01 — 5BR (North Tower, Floor 19)', sqm: 445, priceMXN: 51388260, priceUSD: 2936472, available: 1 },
      { name: 'PH02 — 5 Rec (Torre Norte, Piso 19)', nameEn: 'PH02 — 5BR (North Tower, Floor 19)', sqm: 535, priceMXN: 61791345, priceUSD: 3530934, available: 1 },
      { name: '18E — 3 Rec (Torre Norte, Piso 18)', nameEn: '18E — 3BR (North Tower, Floor 18)', sqm: 326, priceMXN: 38182869, priceUSD: 2181878, available: 1 },
      { name: '17E — 3 Rec (Torre Norte, Piso 17)', nameEn: '17E — 3BR (North Tower, Floor 17)', sqm: 324, priceMXN: 37389000, priceUSD: 2136514, available: 1 },
      { name: '17F — 3 Rec (Torre Norte, Piso 17)', nameEn: '17F — 3BR (North Tower, Floor 17)', sqm: 324, priceMXN: 37806411, priceUSD: 2160366, available: 1 },
      { name: '16F — 3 Rec (Torre Norte, Piso 16)', nameEn: '16F — 3BR (North Tower, Floor 16)', sqm: 324, priceMXN: 37428347, priceUSD: 2138762, available: 1 },
      { name: '15F — 3 Rec (Torre Norte, Piso 15)', nameEn: '15F — 3BR (North Tower, Floor 15)', sqm: 324, priceMXN: 37034851, priceUSD: 2116277, available: 1 },
      { name: '14F — 3 Rec (Torre Norte, Piso 14)', nameEn: '14F — 3BR (North Tower, Floor 14)', sqm: 324, priceMXN: 36649072, priceUSD: 2094232, available: 1 },
      { name: '13F — 3 Rec (Torre Norte, Piso 13)', nameEn: '13F — 3BR (North Tower, Floor 13)', sqm: 337, priceMXN: 37739410, priceUSD: 2156537, available: 1 },
      { name: '12F — 3 Rec (Torre Norte, Piso 12)', nameEn: '12F — 3BR (North Tower, Floor 12)', sqm: 336, priceMXN: 34331880, priceUSD: 1961822, available: 1 },
      { name: '11F — 4 Rec (Torre Norte, Piso 11)', nameEn: '11F — 4BR (North Tower, Floor 11)', sqm: 400, priceMXN: 40503276, priceUSD: 2314473, available: 1 },
      { name: '10A — 3 Rec (Torre Norte, Piso 10)', nameEn: '10A — 3BR (North Tower, Floor 10)', sqm: 250, priceMXN: 25019995, priceUSD: 1429714, available: 1 },
      { name: '10H — 3 Rec (Torre Norte, Piso 10)', nameEn: '10H — 3BR (North Tower, Floor 10)', sqm: 250, priceMXN: 26451848, priceUSD: 1511534, available: 1 },
      // Torre Sur
      { name: 'PH03 — 5 Rec (Torre Sur, Piso 18)', nameEn: 'PH03 — 5BR (South Tower, Floor 18)', sqm: 714, priceMXN: 82463535, priceUSD: 4712202, available: 1 },
      { name: '17F — 3 Rec (Torre Sur, Piso 17)', nameEn: '17F — 3BR (South Tower, Floor 17)', sqm: 330, priceMXN: 37586507, priceUSD: 2147800, available: 1 },
      { name: '17D — 3 Rec (Torre Sur, Piso 17)', nameEn: '17D — 3BR (South Tower, Floor 17)', sqm: 303, priceMXN: 32797545, priceUSD: 1874145, available: 1 },
      { name: '16F — 3 Rec (Torre Sur, Piso 16)', nameEn: '16F — 3BR (South Tower, Floor 16)', sqm: 332, priceMXN: 35454276, priceUSD: 2025959, available: 1 },
      { name: '16D — 3 Rec (Torre Sur, Piso 16)', nameEn: '16D — 3BR (South Tower, Floor 16)', sqm: 303, priceMXN: 34581080, priceUSD: 1976062, available: 1 },
      { name: '15F — 3 Rec (Torre Sur, Piso 15)', nameEn: '15F — 3BR (South Tower, Floor 15)', sqm: 330, priceMXN: 34888128, priceUSD: 1993607, available: 1 },
      { name: '15D — 3 Rec (Torre Sur, Piso 15)', nameEn: '15D — 3BR (South Tower, Floor 15)', sqm: 303, priceMXN: 34570277, priceUSD: 1975444, available: 1 },
      { name: '14F — 3 Rec (Torre Sur, Piso 14)', nameEn: '14F — 3BR (South Tower, Floor 14)', sqm: 313, priceMXN: 32662520, priceUSD: 1866430, available: 1 },
      { name: '14D — 3 Rec (Torre Sur, Piso 14)', nameEn: '14D — 3BR (South Tower, Floor 14)', sqm: 303, priceMXN: 34210170, priceUSD: 1954867, available: 1 },
      { name: '13F — 3 Rec (Torre Sur, Piso 13)', nameEn: '13F — 3BR (South Tower, Floor 13)', sqm: 313, priceMXN: 31974888, priceUSD: 1827137, available: 1 },
      { name: '13D — 3 Rec (Torre Sur, Piso 13)', nameEn: '13D — 3BR (South Tower, Floor 13)', sqm: 303, priceMXN: 33489956, priceUSD: 1913712, available: 1 },
      { name: '12D — 3 Rec (Torre Sur, Piso 12)', nameEn: '12D — 3BR (South Tower, Floor 12)', sqm: 303, priceMXN: 30966210, priceUSD: 1769498, available: 1 },
      { name: '11D — 3 Rec (Torre Sur, Piso 11)', nameEn: '11D — 3BR (South Tower, Floor 11)', sqm: 303, priceMXN: 30633240, priceUSD: 1750471, available: 1 },
      { name: '10D — 3 Rec (Torre Sur, Piso 10)', nameEn: '10D — 3BR (South Tower, Floor 10)', sqm: 303, priceMXN: 32120000, priceUSD: 1835429, available: 1 },
      { name: '9D — 3 Rec (Torre Sur, Piso 9)', nameEn: '9D — 3BR (South Tower, Floor 9)', sqm: 303, priceMXN: 31636932, priceUSD: 1807825, available: 1 },
      { name: '8D — 3 Rec (Torre Sur, Piso 8)', nameEn: '8D — 3BR (South Tower, Floor 8)', sqm: 303, priceMXN: 31285410, priceUSD: 1787738, available: 1 },
      { name: '7D — 3 Rec (Torre Sur, Piso 7)', nameEn: '7D — 3BR (South Tower, Floor 7)', sqm: 303, priceMXN: 30933889, priceUSD: 1767651, available: 1 },
      { name: '6D — 3 Rec (Torre Sur, Piso 6)', nameEn: '6D — 3BR (South Tower, Floor 6)', sqm: 303, priceMXN: 30582367, priceUSD: 1747564, available: 1 },
      { name: '5D — 3 Rec (Torre Sur, Piso 5)', nameEn: '5D — 3BR (South Tower, Floor 5)', sqm: 303, priceMXN: 30230846, priceUSD: 1727477, available: 1 },
      { name: '4D — 3 Rec (Torre Sur, Piso 4)', nameEn: '4D — 3BR (South Tower, Floor 4)', sqm: 303, priceMXN: 30493317, priceUSD: 1742475, available: 1 },
      { name: '3D — 3 Rec (Torre Sur, Piso 3)', nameEn: '3D — 3BR (South Tower, Floor 3)', sqm: 309, priceMXN: 29954230, priceUSD: 1711670, available: 1 },
      { name: '2D — 3 Rec (Torre Sur, Piso 2)', nameEn: '2D — 3BR (South Tower, Floor 2)', sqm: 309, priceMXN: 29463744, priceUSD: 1683642, available: 1 },
      { name: '1D — 4 Rec (Torre Sur, Piso 1)', nameEn: '1D — 4BR (South Tower, Floor 1)', sqm: 506, priceMXN: 40166550, priceUSD: 2295231, available: 1 },
    ],
    priceNote: 'Precios en MXN. 31 unidades disponibles (13 Torre Norte + 18 Torre Sur). Consulta disponibilidad con tu asesor Rivana.',
    priceNoteEn: 'Prices in MXN. 31 units available (13 North Tower + 18 South Tower). Contact your Rivana advisor for availability.',
    address: 'Puerto Cancún, Cancún, Q. Roo',
    addressNote: 'En el corazón de Puerto Cancún, a menos de 500 m de Plaza Puerto Cancún.',
    addressNoteEn: 'In the heart of Puerto Cancún, less than 500m from Plaza Puerto Cancún.',
    distances: [
      { label: 'Plaza Puerto Cancún 500 m', labelEn: 'Plaza Puerto Cancún 500m', icon: 'ShoppingBag' },
      { label: 'Campo de Golf 18 hoyos 5 min', labelEn: '18-hole Golf Course 5 min', icon: 'Flag' },
      { label: 'Club de Playa 5 min', labelEn: 'Beach Club 5 min', icon: 'Waves' },
      { label: 'Marina Privada — En desarrollo', labelEn: 'Private Marina — On-site', icon: 'Anchor' },
      { label: 'Aeropuerto 20 min', labelEn: 'Airport 20 min', icon: 'Plane' },
    ],
    differentiators: [
      {
        type: 'vista', layout: 'featured',
        title: 'Vistas de 200° desde cada piso de ambas torres',
        titleEn: '200° views from every floor of both towers',
        description: '2 torres de 20 pisos con orientación estratégica que maximiza las vistas panorámicas al Mar Caribe, la laguna y la marina de Puerto Cancún.',
        descriptionEn: 'Two 20-story towers with strategic orientation maximizing panoramic views of the Caribbean Sea, lagoon, and Puerto Cancún marina.',
        stat: '200°', statLabel: 'de vista', statLabelEn: 'views',
      },
      {
        type: 'amenidad', layout: 'grid',
        title: '20 amenidades premium',
        titleEn: '20 premium amenities',
        description: 'Marina, albercas, pádel, pickleball, spa, gimnasio, pet park, kids club, lounge bar, fire pit y más — todo dentro del desarrollo.',
        descriptionEn: 'Marina, pools, padel, pickleball, spa, gym, pet park, kids club, lounge bar, fire pit, and more — all within the development.',
      },
      {
        type: 'exclusivo', layout: 'grid',
        title: 'Arquitectura Ancona + Ancona',
        titleEn: 'Ancona + Ancona Architecture',
        description: 'Diseño moderno que integra el entorno marítimo con acabados de lujo, armonía y confort en cada espacio.',
        descriptionEn: 'Modern design integrating the maritime environment with luxury finishes, harmony, and comfort in every space.',
      },
      {
        type: 'amenidad', layout: 'wide',
        title: 'En el corazón de Puerto Cancún — golf, marina y club de playa',
        titleEn: 'In the heart of Puerto Cancún — golf, marina & beach club',
        description: 'Acceso al campo de golf de 18 hoyos, marina privada, club de playa y Plaza Puerto Cancún con tiendas de lujo, restaurantes, entretenimiento y cine IMAX.',
        descriptionEn: 'Access to the 18-hole golf course, private marina, beach club, and Plaza Puerto Cancún with luxury shops, restaurants, entertainment, and IMAX cinema.',
      },
    ],
  },
];

export function getPropertyBySlug(slug: string): PropertyDetail | undefined {
  return properties.find(p => p.slug === slug);
}
