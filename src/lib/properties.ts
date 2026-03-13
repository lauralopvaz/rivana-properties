import type { PropertyDetail } from '@/types/property';

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
];

export function getPropertyBySlug(slug: string): PropertyDetail | undefined {
  return properties.find(p => p.slug === slug);
}
