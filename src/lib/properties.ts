import type { PropertyDetail } from '@/types/property';
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
import fpCurvaA2 from '@/assets/mondrian/fp-curva-a2.png';
import fpDepB from '@/assets/mondrian/fp-dep-b.png';
import fpDepBPrime from '@/assets/mondrian/fp-dep-b-prime.png';
import fpCurvaB from '@/assets/mondrian/fp-curva-b.png';

export const properties: PropertyDetail[] = [
  {
    id: 'oceana-residences',
    slug: 'oceana-residences',
    name: 'Oceana Residences',
    zone: 'Costa Mujeres · Playa Mujeres',
    status: 'preventa',
    priceFromUSD: 195000,
    priceFromMXN: 3412500,
    bedrooms: '1–3',
    sqmRange: '65–245 m²',
    delivery: 'Q4 2027',
    roiEstimate: 10,
    plusvaliaEstimate: 18,
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Oceana Residences es un desarrollo de lujo frente al mar en Playa Mujeres. Torre de 12 pisos con 120 unidades, beach club privado, campo de golf y las mejores vistas al Caribe en Costa Mujeres.',
    descriptionEn: 'Oceana Residences is a luxury waterfront development in Playa Mujeres. A 12-story tower with 120 units, private beach club, golf course access, and unobstructed Caribbean views.',
    features: ['Alberca Infinity', 'Beach Club', 'Concierge 24/7', 'Gimnasio', 'Smart Home', 'Co-Working', 'Carga EV', 'Pet Friendly', 'Área Infantil', 'Spa & Wellness'],
    featuresEn: ['Infinity Pool', 'Beach Club', 'Concierge 24/7', 'Fitness Center', 'Smart Home', 'Co-Working', 'EV Charging', 'Pet Friendly', 'Kids Area', 'Spa & Wellness'],
    units: [
      { name: 'Studio', sqm: 55, priceMXN: 4200000, priceUSD: 240000, available: 34 },
      { name: '1 Recámara', sqm: 85, priceMXN: 6800000, priceUSD: 388571, available: 41 },
      { name: '2 Recámaras', sqm: 140, priceMXN: 9500000, priceUSD: 542857, available: 18 },
      { name: 'Penthouse', sqm: 245, priceMXN: 12500000, priceUSD: 714285, available: 12 },
    ],
    distances: [
      { label: 'Aeropuerto 25 min', labelEn: 'Airport 25 min', icon: 'Plane' },
      { label: 'Playa Directa', labelEn: 'Direct Beach', icon: 'Waves' },
      { label: 'Golf 5 min', labelEn: 'Golf 5 min', icon: 'Flag' },
      { label: 'Plaza 10 min', labelEn: 'Mall 10 min', icon: 'ShoppingBag' },
      { label: 'Marina 8 min', labelEn: 'Marina 8 min', icon: 'Anchor' },
      { label: 'Centro 35 min', labelEn: 'Downtown 35 min', icon: 'MapPin' },
    ],
    presalePrice: {
      originalMXN: 2450000,
      discountMXN: 2150000,
      deadlineDate: '2026-06-30',
      priceIncreasePercent: 12,
    },
    differentiators: [
      {
        type: 'roi', layout: 'featured',
        title: 'Renta vacacional de alto retorno',
        titleEn: 'High-yield vacation rental',
        description: 'Zona con 85% de ocupación promedio. Plusvalía adicional estimada del 18% a entrega en Q4 2027.',
        descriptionEn: 'Area with 85% average occupancy. Additional estimated appreciation of 18% at delivery in Q4 2027.',
        stat: '10%', statLabel: 'anual',
        pills: ['Airbnb Ready', 'Adm. incluida', 'Alta ocupación'],
        pillsEn: ['Airbnb Ready', 'Mgmt. included', 'High occupancy'],
      },
      { type: 'vista', layout: 'grid', title: 'Vista 360° al Mar Caribe', titleEn: '360° Caribbean Sea View', description: 'Piso 10. Vistas al mar en 3 orientaciones. Única en el edificio.', descriptionEn: 'Floor 10. Sea views in 3 directions. Unique in the building.' },
      { type: 'entrega', layout: 'grid', title: 'Se Entrega Amueblada', titleEn: 'Fully Furnished Delivery', description: 'Muebles de diseño incluidos. Lista para rentar desde el día 1.', descriptionEn: 'Designer furniture included. Ready to rent from day 1.' },
      { type: 'amenidad', layout: 'grid', title: 'Alberca Privada en el Piso', titleEn: 'Private Pool on Your Floor', description: 'Acceso exclusivo al nivel 8. No es la alberca general.', descriptionEn: 'Exclusive access on level 8. Not the general pool.' },
      { type: 'exclusivo', layout: 'grid', title: 'Sin Mantenimiento 24 Meses', titleEn: 'No Maintenance Fees 24 Mo.', description: 'El desarrollador cubre las cuotas. Ahorro aprox. $48,000 MXN.', descriptionEn: 'Developer covers all fees. Save approx. $48,000 MXN.' },
      { type: 'exclusivo', layout: 'wide', title: 'Doble Altura en Sala · 5.2 m', titleEn: 'Double-Height Living Room · 5.2 m', description: 'Ventanales de piso a techo. Luz natural todo el día.', descriptionEn: 'Floor-to-ceiling windows. Natural light all day.' },
      { type: 'amenidad', layout: 'wide', title: 'Frente al Campo de Golf', titleEn: 'Golf Course Front View', description: 'Vista directa al campo de Playa Mujeres. Sin construcciones frente.', descriptionEn: 'Direct view of Playa Mujeres course. No obstructions ahead.' },
      { type: 'amenidad', layout: 'wide', title: 'Spa & Wellness Incluido', titleEn: 'Spa & Wellness Included', description: 'Acceso sin costo al spa del hotel adyacente el primer año.', descriptionEn: 'Free spa access at adjacent hotel for the first year.' },
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
      { name: 'Estudio Curva — 1 Hab / 1 Baño', nameEn: 'Studio Curve — 1BR/1BA', sqm: 76.96, priceMXN: 9050000, priceUSD: 514000, available: 10 },
      { name: 'Departamento A — 1 Hab / 2 Baños', nameEn: 'Unit A — 1BR/2BA', sqm: 81.46, priceMXN: 9050000, priceUSD: 514000, available: 10 },
      { name: "Departamento A' — 1 Hab / 2 Baños", nameEn: "Unit A' — 1BR/2BA", sqm: 115.84, priceMXN: 11294550, priceUSD: 642000, available: 10 },
      { name: 'Departamento A1 — 1 Hab / 2 Baños', nameEn: 'Unit A1 — 1BR/2BA', sqm: 108.20, priceMXN: 10750625, priceUSD: 611000, available: 10 },
      { name: 'Loft A — 1 Hab / 2 Baños (dúplex)', nameEn: 'Loft A — 1BR/2BA (duplex)', sqm: 91.20, priceMXN: 13343700, priceUSD: 758000, available: 10 },
      { name: 'Depto Curva A — 1 Hab / 1.5 Baños', nameEn: 'Curve Unit A — 1BR/1.5BA', sqm: 106.25, priceMXN: 10750625, priceUSD: 611000, available: 10 },
      { name: 'Depto Curva A — 1 Hab / 2 Baños', nameEn: 'Curve Unit A — 1BR/2BA', sqm: 112.31, priceMXN: 11294550, priceUSD: 642000, available: 10 },
      { name: 'Departamento B — 2 Hab / 2.5 Baños', nameEn: 'Unit B — 2BR/2.5BA', sqm: 135.44, priceMXN: 12040772, priceUSD: 684000, available: 5 },
      { name: 'Departamento B Esquina — 2 Hab / 2.5 Baños', nameEn: 'Unit B Corner — 2BR/2.5BA', sqm: 164.75, priceMXN: 20462981, priceUSD: 1163000, available: 5 },
      { name: "Departamento B' — 2 Hab / 2.5 Baños", nameEn: "Unit B' — 2BR/2.5BA", sqm: 145.74, priceMXN: 12040772, priceUSD: 684000, available: 5 },
      { name: 'Depto Curva B — 2 Hab / 2.5 Baños', nameEn: 'Curve Unit B — 2BR/2.5BA', sqm: 152.29, priceMXN: 15820111, priceUSD: 899000, available: 5 },
      { name: 'Departamento C Esquina — 3 Hab / 3.5 Baños', nameEn: 'Corner Unit C — 3BR/3.5BA', sqm: 158.93, priceMXN: 21942074, priceUSD: 1247000, available: 5 },
    ],
    priceNote: 'Precio varía según nivel, vista y orientación. Consulta disponibilidad con tu asesor Rivana.',
    priceNoteEn: 'Price varies by floor, view, and orientation. Contact your Rivana advisor for current availability.',
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
];

export function getPropertyBySlug(slug: string): PropertyDetail | undefined {
  return properties.find(p => p.slug === slug);
}
