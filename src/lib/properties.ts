import type { PropertyDetail } from '@/types/property';

import reserveFachadaJardin from '@/assets/reserve-mayakoba-fachada-alberca-jardin.jpg';
import reservePh4Comedor from '@/assets/reserve-mayakoba-ph4-comedor-vista-selva.jpg';
import reservePh4RecamaraPrincipal from '@/assets/reserve-mayakoba-ph4-recamara-principal.jpg';
import reservePh4Recamara1Doble from '@/assets/reserve-mayakoba-ph4-recamara1-doble.jpg';
import reservePh4Recamara2Doble from '@/assets/reserve-mayakoba-ph4-recamara2-doble.jpg';
import reservePh4TerrazaAlberca from '@/assets/reserve-mayakoba-ph4-terraza-alberca-privada.jpg';
import reserveTerrazaGolf from '@/assets/reserve-mayakoba-terraza-vista-golf-selva.jpg';
import reserveTipodCocina from '@/assets/reserve-mayakoba-tipod-cocina-isla.jpg';
import reserveTipodRecamara2 from '@/assets/reserve-mayakoba-tipod-recamara2.jpg';
import reserveWalkingCloset from '@/assets/reserve-mayakoba-walking-closet-bano.jpg';
import reserveAlbercaRestaurante from '@/assets/reserve-mayakoba-alberca-restaurante.jpg';
import reserveCasaClubFachada from '@/assets/reserve-mayakoba-casa-club-fachada.jpg';
import reserveCasaClubLaguna from '@/assets/reserve-mayakoba-casa-club-laguna.jpg';
import reserveGimnasio from '@/assets/reserve-mayakoba-gimnasio-vista-selva.jpg';
import reserveKidsClub from '@/assets/reserve-mayakoba-kids-club.jpg';
import reserveRestauranteMadera from '@/assets/reserve-mayakoba-restaurante-madera.jpg';
import reserveSpaMasaje from '@/assets/reserve-mayakoba-spa-sala-masaje.jpg';
import reserveWhiskeyBar from '@/assets/reserve-mayakoba-whiskey-bar-lounge.jpg';
import reserveZonaEventos from '@/assets/reserve-mayakoba-zona-eventos-terraza.jpg';
const mondrianHero = '/images/mondrian/mondrian-hero.jpg';
const mondrianFrontDesk = '/images/mondrian/mondrian-front-desk.jpg';
const mondrianCoffeeBar = '/images/mondrian/mondrian-coffee-bar.jpg';
const mondrianRestaurant = '/images/mondrian/mondrian-restaurant.jpg';
const mondrianRooftop = '/images/mondrian/mondrian-rooftop.jpg';
const mondrianBeachClub = '/images/mondrian/mondrian-beach-club.jpg';
const mondrianGym = '/images/mondrian/mondrian-gym.jpg';
const mondrianPool = '/images/mondrian/mondrian-pool.jpg';
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
import vellmariHero from '@/assets/vellmari-alberca-fachada-torres.jpg';
import vellmariAerea from '@/assets/vellmari-aerea-albercas-canchas.jpg';
import vellmariChampagne from '@/assets/vellmari-alberca-camastros-champagne.jpg';
import vellmariCancha from '@/assets/vellmari-cancha-futbol-jardin.jpg';
import vellmariDeck from '@/assets/vellmari-deck-camastros-atardecer.jpg';
import vellmariFachadaTorres from '@/assets/vellmari-fachada-dos-torres-atardecer.jpg';
import vellmariEntrada from '@/assets/vellmari-fachada-entrada-acceso.jpg';
import vellmariFirePit from '@/assets/vellmari-fire-pit-muelle-atardecer.jpg';
import vellmariRecamara from '@/assets/vellmari-recamara-principal-balcon.jpg';
import vellmariTerraza from '@/assets/vellmari-terraza-alberca-camastros.jpg';
import villageBluHero from '@/assets/village-blu-hero.jpg';
import kabeekFachadaAtardecer from '@/assets/kabeek-fachada-atardecer.jpg';
import kabeekAlbercaCorredor from '@/assets/kabeek-alberca-corredor.jpg';
import kabeekAlbercaMarina from '@/assets/kabeek-alberca-marina.jpg';
import kabeekBanoVestidor from '@/assets/kabeek-bano-vestidor.jpg';
import kabeekClubBiblioteca from '@/assets/kabeek-club-biblioteca.jpg';
import kabeekFachadaEntrada from '@/assets/kabeek-fachada-entrada.jpg';
import kabeekFachadaLaguna from '@/assets/kabeek-fachada-laguna.jpg';
import kabeekLobbyDobleAltura from '@/assets/kabeek-lobby-doble-altura.jpg';
import kabeekLobbyJardin from '@/assets/kabeek-lobby-jardin.jpg';
import kabeekMasterplanAerea from '@/assets/kabeek-masterplan-aerea.jpg';
import kabeekRecamaraPrincipal from '@/assets/kabeek-recamara-principal.jpg';
import kabeekRestaurantePalapa from '@/assets/kabeek-restaurante-palapa.jpg';
import kabeekSalaVistaLaguna from '@/assets/kabeek-sala-vista-laguna.jpg';
import kabeekSpaHidromasaje from '@/assets/kabeek-spa-hidromasaje.jpg';
import kabeekTerrazasJacuzzi from '@/assets/kabeek-terrazas-jacuzzi.jpg';
import bvgRooftopPoolLaguna from '@/assets/bvg-rooftop-pool-laguna.jpg';
import bvgFachadaAlbercaExterior from '@/assets/bvg-fachada-alberca-exterior.jpg';
import bvgFachadaTorreLaguna from '@/assets/bvg-fachada-torre-laguna.jpg';
import bvgSalaInteriorAtardecer from '@/assets/bvg-sala-interior-atardecer.jpg';
import bvgSalaVistaGolf from '@/assets/bvg-sala-vista-golf.jpg';
import bvgCocinaComedor from '@/assets/bvg-cocina-comedor.jpg';
import bvgTerrazaAlbercaAtardecer from '@/assets/bvg-terraza-alberca-atardecer.jpg';
import bvgAmenityWineCellar from '@/assets/bvg-amenity-wine-cellar.jpg';
import bvgAmenitySpaTratamiento from '@/assets/bvg-amenity-spa-tratamiento.jpg';
import bvgAmenitySalonJuegos from '@/assets/bvg-amenity-salon-juegos.jpg';
import bvgAereaComplejoLaguna from '@/assets/bvg-aerea-complejo-laguna.jpg';
import bvgAlbercaInfinitaVistaPanoramica from '@/assets/bvg-alberca-infinita-vista-panoramica.jpg';
import bvgAmenityCoworking from '@/assets/bvg-amenity-coworking.jpg';
import bvgAmenityGimnasioYoga from '@/assets/bvg-amenity-gimnasio-yoga.jpg';
import bvgAmenityKidsClub from '@/assets/bvg-amenity-kids-club.jpg';
import bvgAmenityRestauranteLounge from '@/assets/bvg-amenity-restaurante-lounge.jpg';
import arboladaHero from '@/assets/arbolada-hero.jpg';
import thompsonHero from '@/assets/thompson-hero.jpg';
import soleBluHero from '@/assets/sole-blu-fachada-principal-atardecer.jpg';
import soleBluAlberca from '@/assets/sole-blu-alberca-amenidades.jpg';
import soleBluCocina from '@/assets/sole-blu-cocina-comedor-vista-mar.jpg';
import soleBluFachadaDia from '@/assets/sole-blu-fachada-exterior-dia.jpg';
import soleBluGimnasio from '@/assets/sole-blu-gimnasio.jpg';
import soleBluLobby from '@/assets/sole-blu-lobby.jpg';
import soleBluRooftopLounge from '@/assets/sole-blu-rooftop-lounge-vista-oceano.jpg';
import soleBluPlungePool from '@/assets/sole-blu-rooftop-plunge-pool-mar.jpg';
import soleBluPoolCamastros from '@/assets/sole-blu-rooftop-pool-camastros.jpg';
import soleBluTerraza from '@/assets/sole-blu-terraza-balcon-vista-mar.jpg';
import cuoreCumbresHero from '@/assets/cuore-cumbres-hero.jpg';

export const properties: PropertyDetail[] = [
  {
    id: 'the-reserve-at-mayakoba',
    slug: 'the-reserve-at-mayakoba',
    name: 'The Reserve at Mayakoba',
    seoTitle: 'The Reserve at Mayakoba — Riviera Maya | Rivana',
    seoTitleEn: 'The Reserve at Mayakoba Luxury Residences 2026',
    seoDescription: 'Ultra-lujo dentro del ecosistema Mayakoba. Acceso a servicios Banyan Tree, 144 residencias de 2–4 rec., desde $1.1M USD. Entregas 2027–2028.',
    seoDescriptionEn: 'Ultra-luxury inside the Mayakoba ecosystem. Full Banyan Tree hotel access, 144 residences 2–4 bed, from $1.1M USD. 2027–2028 deliveries.',
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
    images: [reserveFachadaJardin, reservePh4TerrazaAlberca, reserveTerrazaGolf, reserveCasaClubFachada, reserveCasaClubLaguna, reserveAlbercaRestaurante, reservePh4Comedor, reserveTipodCocina, reservePh4RecamaraPrincipal, reservePh4Recamara1Doble, reservePh4Recamara2Doble, reserveTipodRecamara2, reserveWalkingCloset, reserveRestauranteMadera, reserveZonaEventos, reserveWhiskeyBar, reserveGimnasio, reserveKidsClub, reserveSpaMasaje],
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
    name: 'The Residences at Grand Island Cancun at Grand Island Cancún',
    seoTitle: 'The Residences at Grand Island Cancun Grand Island Cancún | Rivana',
    seoTitleEn: 'The Residences at Grand Island Cancun Cancún Hotel Zone | Rivana',
    seoDescription: 'Residencia de marca Accor en la Zona Hotelera de Cancún. Preventa desde $9,050,000 MXN, plusvalía 33%, entrega Q2 2027. Gestión hotelera desde el primer día.',
    seoDescriptionEn: "Accor-branded residence in Cancún's Hotel Zone. Pre-sale from $475K USD, 33% appreciation, Q2 2027 delivery. Hotel management from day one.",
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
    description: 'The Residences at Grand Island Cancun at Grand Island es una residencia de marca dentro del desarrollo maestro más exclusivo de la Zona Hotelera de Cancún — diseñada por Filipao Nunes Arquitectos y operada por Accor bajo la marca Mondrian. Cada unidad se entrega llave en mano, totalmente amueblada y equipada, lista para operar desde el primer día. Invertir aquí es adquirir un activo que trabaja por ti, respaldado por una de las marcas hoteleras más reconocidas del mundo. Tu legado frente al Caribe.',
    descriptionEn: 'The Residences at Grand Island Cancun at Grand Island is a branded residence within the most exclusive master development in Cancún\'s Hotel Zone — designed by Filipao Nunes Arquitectos and operated by Accor under the Mondrian brand. Every unit is delivered turnkey, fully furnished and equipped, ready to operate from day one. Investing here means acquiring an asset that works for you — backed by one of the most recognized hotel brands in the world. Your legacy on the Caribbean.',
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
    brochureUrl: '/brochures/mondrian-residences-grand-island.pdf',
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
    seoTitle: 'Dhamar — Preventa Costa Mujeres Cancún | Rivana',
    seoTitleEn: 'Dhamar Costa Mujeres Pre-Sale Cancún | Rivana',
    seoDescription: 'Preventa frente al mar en Costa Mujeres. Residencias 1–3 rec., 47–177 m², desde $248,000 USD. Plusvalía anual 22%. Entrega 2027.',
    seoDescriptionEn: 'Pre-sale beachfront development in Costa Mujeres. 1–3 bed, 47–177 m², from $248,000 USD. 22% annual appreciation. 2027 delivery.',
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
    seoTitle: 'SLS Ocean Beach — Puerto Cancún | Rivana',
    seoTitleEn: 'SLS Ocean Beach Puerto Cancún Luxury Homes',
    seoDescription: 'Residencias de lujo SLS Hotels en Puerto Cancún. Arquitectonica + Accor. Unidades 191–356 m² desde $1.6M USD. Entrega verano 2028.',
    seoDescriptionEn: 'SLS Hotels luxury residences in Puerto Cancún. Arquitectonica design + Accor management. Units 191–356 m² from $1.6M USD. Summer 2028 delivery.',
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
    seoTitle: 'Vellmari Grand Living — Puerto Cancún | Rivana',
    seoTitleEn: 'Vellmari Grand Living Puerto Cancún | Rivana',
    seoDescription: '95 residencias de lujo en Puerto Cancún. Vistas 200°, marina privada, 20 amenidades premium. Desde $846,000 USD. Entregas diciembre 2026 y julio 2027.',
    seoDescriptionEn: '95 luxury residences in Puerto Cancún. 200° views, private marina, 20 premium amenities. From $846,000 USD. December 2026 and July 2027 deliveries.',
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
    images: [vellmariHero, vellmariFachadaTorres, vellmariChampagne, vellmariAerea, vellmariFirePit, vellmariDeck, vellmariRecamara, vellmariEntrada, vellmariTerraza, vellmariCancha],
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
  {
    id: 'village-blu-beach-apartments',
    slug: 'village-blu-beach-apartments',
    name: 'Village Blu Beach Apartments',
    seoTitle: 'Village Blu Beach Apartments — Puerto Morelos',
    seoTitleEn: 'Village Blu Beach Apartments Puerto Morelos',
    seoDescription: 'Departamentos frente al mar en Puerto Morelos. ROI 8.8% anual, gestión OPENKEY incluida. 72–73 m² desde $273,000 USD. Entrega invierno 2026.',
    seoDescriptionEn: 'Beachfront apartments in Puerto Morelos. 8.8% annual ROI, OPENKEY management included. 72–73 m² from $273,000 USD. Winter 2026 delivery.',
    zone: 'Puerto Morelos',
    zoneEn: 'Puerto Morelos',
    status: 'preventa',
    priceFromUSD: 273000,
    priceFromMXN: 4777500,
    bedrooms: '1 Recámara',
    bedroomsEn: '1 Bedroom',
    sqmRange: '72 – 73 m²',
    delivery: 'Invierno 2026',
    roiEstimate: 8.8,
    plusvaliaEstimate: 20,
    images: [villageBluHero],
    description: 'Departamentos frente al mar en Puerto Morelos. Vida moderna junto al Caribe en un pueblo costero que combina tranquilidad, belleza natural y conexión. Diseñados para vivir, disfrutar o rentar con alto potencial vacacional. Parte de la Blu Residences Collection.',
    descriptionEn: 'Beachfront apartments in Puerto Morelos. Modern Caribbean living in a coastal town that combines tranquility, natural beauty, and connection. Designed to live, enjoy, or rent with high vacation potential. Part of the Blu Residences Collection.',
    features: [
      'Alberca panorámica', 'Rooftop Bar', 'Rooftop Pool', 'Rooftop Terrace',
      'Elevadores', 'Estacionamiento', 'Seguridad 24/7',
      'Gestión de rentas OPENKEY incluida',
    ],
    featuresEn: [
      'Panoramic Pool', 'Rooftop Bar', 'Rooftop Pool', 'Rooftop Terrace',
      'Elevators', 'Parking', '24/7 Security',
      'OPENKEY rental management included',
    ],
    units: [
      { name: 'Tipo A1 — 1 Rec', nameEn: 'Type A1 — 1 Bed', sqm: 72.71, priceMXN: 4777500, priceUSD: 273000, available: 10 },
      { name: 'Tipo A — 1 Rec', nameEn: 'Type A — 1 Bed', sqm: 73, priceMXN: 4777500, priceUSD: 273000, available: 10 },
      { name: 'Tipo B1 — 1 Rec', nameEn: 'Type B1 — 1 Bed', sqm: 73, priceMXN: 5320000, priceUSD: 304000, available: 10 },
      { name: 'Tipo B — 1 Rec', nameEn: 'Type B — 1 Bed', sqm: 73, priceMXN: 5320000, priceUSD: 304000, available: 10 },
    ],
    distances: [
      { label: 'Playa — 5 min', labelEn: 'Beach — 5 min', icon: '🏖️' },
      { label: 'Aeropuerto de Cancún — 25 min', labelEn: 'Cancún Airport — 25 min', icon: '✈️' },
      { label: 'Playa del Carmen — 30 min', labelEn: 'Playa del Carmen — 30 min', icon: '🚗' },
      { label: 'Ruta de los Cenotes — 20 min', labelEn: 'Cenotes Route — 20 min', icon: '💧' },
    ],
    address: 'Puerto Morelos, Quintana Roo',
    differentiators: [
      {
        type: 'roi', layout: 'featured',
        title: 'Endless ROI — Hasta 8.8% anual',
        titleEn: 'Endless ROI — Up to 8.8% annually',
        description: 'Puerto Morelos tiene ocupación hotelera ~75% anual. Retorno constante + plusvalía estimada del 20% anual.',
        descriptionEn: 'Puerto Morelos has ~75% annual hotel occupancy. Constant returns + estimated 20% annual appreciation.',
        stat: '8.8%', statLabel: 'ROI estimado', statLabelEn: 'Estimated ROI',
      },
      {
        type: 'exclusivo', layout: 'grid',
        title: 'Effortless Ownership — OPENKEY',
        titleEn: 'Effortless Ownership — OPENKEY',
        description: 'OPENKEY se encarga de gestión de reservas, mantenimiento y optimización de precios. Cero complicaciones para el propietario.',
        descriptionEn: 'OPENKEY handles booking management, maintenance, and price optimization. Zero hassle for the owner.',
      },
      {
        type: 'amenidad', layout: 'wide',
        title: 'Blu Residences Collection — Puerto Morelos',
        titleEn: 'Blu Residences Collection — Puerto Morelos',
        description: 'Parte de la colección junto a Porto Blu y Sole Blu. Un pueblo costero auténtico a minutos de Cancún y Playa del Carmen, con acceso a la Ruta de los Cenotes.',
        descriptionEn: 'Part of the collection alongside Porto Blu and Sole Blu. An authentic coastal town minutes from Cancún and Playa del Carmen, with access to the Cenotes Route.',
      },
    ],
  },
  // ─── KABEEK MARINA & CONDOS ───
  {
    id: 'kabeek-marina-condos',
    slug: 'kabeek-marina-condos',
    name: 'Kabeek Marina & Condos',
    seoTitle: 'Kabeek Marina & Condos — Zona Hotelera | Rivana',
    seoTitleEn: 'Kabeek Marina Condos Cancún Hotel Zone | Rivana',
    seoDescription: 'Solo 30 residencias con muelle privado en Laguna Nichupté. Doble vista Caribe y laguna. Arquitectura Humberto Artigas. 212–670 m² en preventa exclusiva.',
    seoDescriptionEn: "Only 30 residences with private dock on Nichupté Lagoon. Dual Caribbean and lagoon views. Architecture by Humberto Artigas. 212–670 m², exclusive pre-sale.",
    zone: 'Zona Hotelera, Cancún',
    zoneEn: 'Hotel Zone, Cancún',
    status: 'preventa' as const,
    priceFromUSD: 0,
    priceFromMXN: 0,
    bedrooms: '2–4',
    bedroomsEn: '2–4',
    sqmRange: '212–670 m²',
    delivery: 'Consultar',
    roiEstimate: 0,
    plusvaliaEstimate: 0,
    images: [kabeekFachadaAtardecer, kabeekFachadaEntrada, kabeekFachadaLaguna, kabeekLobbyDobleAltura, kabeekLobbyJardin, kabeekAlbercaCorredor, kabeekAlbercaMarina, kabeekSalaVistaLaguna, kabeekRecamaraPrincipal, kabeekBanoVestidor, kabeekRestaurantePalapa, kabeekClubBiblioteca, kabeekSpaHidromasaje, kabeekTerrazasJacuzzi, kabeekMasterplanAerea],
    description: 'Kabeek Marina & Condos se ubica en la zona más tranquila de la Zona Hotelera de Cancún, sobre la Avenida Kukulkán, con muelle privado a la Laguna Nichupté y vistas al mar Caribe y a la laguna. Solo 23 residencias con diseño del reconocido arquitecto Humberto Artigas (Artigas Arquitectos). Un activo escaso en zona consolidada con demanda turística y residencial permanente.',
    descriptionEn: 'Kabeek Marina & Condos sits on the calmest stretch of Cancún\'s Hotel Zone, directly on Blvd. Kukulkán, with a private dock on Laguna Nichupté and unobstructed views of both the Caribbean Sea and the lagoon. Only 23 residences designed by renowned architect Humberto Artigas (Artigas Arquitectos). A rare hard asset in a consolidated zone with permanent tourist and residential demand.',
    features: [
      'Muelle privado (hasta 80 pies)', 'Alberca semi-olímpica climatizada', 'Spa', 'Gimnasio',
      'Lounge/Bar', 'Área de asadores', 'Kids Club', 'Seguridad 24/7',
      'Oficinas privadas', 'Jardines', 'Acceso náutico exclusivo',
    ],
    featuresEn: [
      'Private dock (up to 80 ft)', 'Heated semi-Olympic pool', 'Spa', 'Gym',
      'Lounge/Bar', 'BBQ area', 'Kids Club', '24/7 Security',
      'Private offices', 'Gardens', 'Exclusive nautical access',
    ],
    units: [
      { name: 'Residencia Tipo 1 — 4 Rec', nameEn: 'Residence Type 1 — 4BR', sqm: 480, priceMXN: 0, priceUSD: 0, available: 10 },
      { name: 'Residencia Tipo 2 — 3 Rec', nameEn: 'Residence Type 2 — 3BR', sqm: 442, priceMXN: 0, priceUSD: 0, available: 10 },
    ],
    priceNote: 'Consultar con asesor Rivana — producto de precio reservado por exclusividad del desarrollo.',
    priceNoteEn: 'Available upon request — reserved for qualified buyers. Contact your Rivana advisor.',
    address: 'Blvd. Kukulkán, Zona Hotelera, Cancún, Quintana Roo',
    addressNote: 'Tramo sereno sobre Laguna Nichupté, Zona Hotelera de Cancún.',
    addressNoteEn: 'Quiet waterfront strip on Laguna Nichupté, Cancún Hotel Zone.',
    distances: [
      { label: 'Laguna Nichupté — Frente', labelEn: 'Laguna Nichupté — Waterfront', icon: 'Waves' },
      { label: 'Mar Caribe — Vista directa', labelEn: 'Caribbean Sea — Direct view', icon: 'Waves' },
      { label: 'Aeropuerto 20 min', labelEn: 'Airport 20 min', icon: 'Plane' },
      { label: 'Plaza La Isla 10 min', labelEn: 'Plaza La Isla 10 min', icon: 'ShoppingBag' },
    ],
    differentiators: [
      {
        type: 'exclusivo', layout: 'featured',
        title: 'Solo 23 residencias con muelle privado',
        titleEn: 'Only 23 residences with private marina',
        description: 'Producto ultra-escaso en la Zona Hotelera con acceso náutico para embarcaciones de hasta 80 pies — no existe comparable en el mercado.',
        descriptionEn: 'Ultra-scarce product in the Hotel Zone with nautical access for vessels up to 80 feet — no comparable product on the market.',
        stat: '23', statLabel: 'residencias', statLabelEn: 'residences',
        pills: ['Muelle privado', 'Humberto Artigas'],
        pillsEn: ['Private dock', 'Humberto Artigas'],
      },
      {
        type: 'vista', layout: 'grid',
        title: 'Doble vista: Caribe + Laguna Nichupté',
        titleEn: 'Dual view: Caribbean + Nichupté Lagoon',
        description: 'Vistas simultáneas al Mar Caribe y la Laguna Nichupté desde residencias de 212 a 670 m².',
        descriptionEn: 'Simultaneous views of the Caribbean Sea and Nichupté Lagoon from residences spanning 212 to 670 sqm.',
      },
      {
        type: 'exclusivo', layout: 'grid',
        title: 'Arquitectura de Humberto Artigas',
        titleEn: 'Architecture by Humberto Artigas',
        description: 'Uno de los arquitectos residenciales de lujo más reconocidos de México. Elegancia tropical y náutica única.',
        descriptionEn: 'One of Mexico\'s most recognized luxury residential architects. Unique tropical and nautical elegance.',
      },
      {
        type: 'amenidad', layout: 'wide',
        title: 'Amenidades de resort: spa, alberca climatizada y acceso náutico',
        titleEn: 'Resort amenities: spa, heated pool & nautical access',
        description: 'Alberca semi-olímpica climatizada, spa europeo, lounge bar, jardines, área de asadores y marina privada con capacidad para embarcaciones de hasta 80 pies.',
        descriptionEn: 'Heated semi-Olympic pool, European spa, lounge bar, gardens, BBQ area, and private marina with dock access for vessels up to 80 feet.',
      },
    ],
  },
  // ─── BAY VIEW GRAND AT GRAND ISLAND ───
  {
    id: 'bay-view-grand-grand-island',
    slug: 'bay-view-grand-grand-island',
    name: 'Bay View Grand at Grand Island',
    seoTitle: 'Bay View Grand Grand Island — Cancún | Rivana',
    seoTitleEn: 'Bay View Grand Grand Island Cancún | Rivana',
    seoDescription: 'Residencias de lujo en la Zona Hotelera de Cancún. Más de 40 amenidades, interiores Filipão Nunes. 5 tipologías desde $586,000 USD. Ocupación >80% anual.',
    seoDescriptionEn: "Luxury residences in Cancún's Hotel Zone. 40+ amenities, Filipão Nunes interiors. 5 typologies from $586,000 USD. 80%+ annual vacation occupancy.",
    zone: 'Zona Hotelera, Cancún',
    zoneEn: 'Hotel Zone, Cancún',
    status: 'preventa' as const,
    priceFromUSD: 586146,
    priceFromMXN: 10257555,
    bedrooms: '1–3 + PH',
    bedroomsEn: '1–3 + PH',
    sqmRange: '93–451 m²',
    delivery: 'Consultar',
    roiEstimate: 0,
    plusvaliaEstimate: 0,
    images: [bvgRooftopPoolLaguna, bvgFachadaAlbercaExterior, bvgFachadaTorreLaguna, bvgAereaComplejoLaguna, bvgAlbercaInfinitaVistaPanoramica, bvgSalaInteriorAtardecer, bvgSalaVistaGolf, bvgCocinaComedor, bvgTerrazaAlbercaAtardecer, bvgAmenityWineCellar, bvgAmenitySpaTratamiento, bvgAmenitySalonJuegos, bvgAmenityCoworking, bvgAmenityGimnasioYoga, bvgAmenityKidsClub, bvgAmenityRestauranteLounge],
    description: 'Un desarrollo exclusivo en la Zona Hotelera de Cancún que redefine el lujo. Condominios con terraza, brisa del mar y amenidades de resort completo. Interiores curados por Filipão Nunes, arquitecto portugués de reconocida presencia internacional cuyo diseño convierte a BVG en un santuario para experiencias sensoriales. 5 tipologías para diferentes perfiles: desde inversionista hasta usuario final de alto patrimonio.',
    descriptionEn: 'An exclusive development in Cancún\'s Hotel Zone that redefines luxury. Condominiums with terraces, sea breeze, and full resort amenities. Interiors curated by Filipão Nunes, a renowned Portuguese architect whose design transforms BVG into a sanctuary for sensory experiences. Five unit types for every buyer profile: from first-time luxury investor to ultra-high-net-worth end user.',
    features: [
      'Marina privada', 'Sunset bar', 'Pet garden', 'Albercas múltiples', 'Rooftop infinity pool',
      'Escalada en roca', 'Club de playa Enea', 'Cancha de pádel/pickleball', 'Cancha de tenis',
      'Restaurantes', 'Piano bar', 'Cava de vinos', 'Coworking', 'Wellness Center',
      'Spa (hidroterapia, sauna, vapor)', 'Salón de juegos (simuladores golf/F1, cinema)',
      'Valet parking', 'Concierge', 'Mayordomo', 'Entrenamiento personal',
    ],
    featuresEn: [
      'Private marina', 'Sunset bar', 'Pet garden', 'Multiple pools', 'Rooftop infinity pool',
      'Rock climbing wall', 'Enea Beach Club', 'Padel/pickleball court', 'Tennis court',
      'Restaurants', 'Piano bar', 'Wine cellar', 'Coworking', 'Wellness Center',
      'Spa (hydrotherapy, sauna, steam)', 'Gaming lounge (golf/F1 simulators, cinema)',
      'Valet parking', 'Concierge', 'Butler service', 'Personal training',
    ],
    units: [
      { name: 'Tipo A — 1–2 Rec', nameEn: 'Type A — 1–2BR', sqm: 93.33, priceMXN: 10257555, priceUSD: 586146, available: 20 },
      { name: 'Tipo B — 2 Rec', nameEn: 'Type B — 2BR', sqm: 140.24, priceMXN: 15033375, priceUSD: 859050, available: 15 },
      { name: 'Tipo C — 3 Rec', nameEn: 'Type C — 3BR', sqm: 219.91, priceMXN: 24682648, priceUSD: 1410437, available: 10 },
      { name: 'Garden House — 3 Rec', nameEn: 'Garden House — 3BR', sqm: 274.48, priceMXN: 28402833, priceUSD: 1623019, available: 5 },
      { name: 'Penthouse — 4 Rec', nameEn: 'Penthouse — 4BR', sqm: 451.52, priceMXN: 54899950, priceUSD: 3137140, available: 3 },
    ],
    priceNote: 'Los precios pueden variar; se recomienda consultar a un asesor Rivana para disponibilidad actual.',
    priceNoteEn: 'Prices subject to change; consult your Rivana advisor for current availability.',
    address: 'Grand Island, Zona Hotelera, Cancún, Quintana Roo',
    addressNote: 'Dentro de Grand Island, Zona Hotelera de Cancún.',
    addressNoteEn: 'Inside Grand Island, Cancún Hotel Zone.',
    distances: [
      { label: 'Club de Playa Enea — En desarrollo', labelEn: 'Enea Beach Club — On-site', icon: 'Waves' },
      { label: 'Marina Privada — En desarrollo', labelEn: 'Private Marina — On-site', icon: 'Anchor' },
      { label: 'Campo de Golf — En desarrollo', labelEn: 'Golf Course — On-site', icon: 'Flag' },
      { label: 'Aeropuerto 20 min', labelEn: 'Airport 20 min', icon: 'Plane' },
    ],
    differentiators: [
      {
        type: 'amenidad', layout: 'featured',
        title: 'Amenidades de resort completo con marina privada',
        titleEn: 'Full resort amenities with private marina',
        description: 'Más de 40 amenidades interiores y exteriores — desde escalada en roca hasta piano bar, simuladores de golf y F1, wellness center con ice bath, y club de playa exclusivo.',
        descriptionEn: 'Over 40 indoor and outdoor amenities — from rock climbing to piano bar, golf and F1 simulators, wellness center with ice bath, and exclusive beach club.',
        stat: '40+', statLabel: 'amenidades', statLabelEn: 'amenities',
        pills: ['Marina privada', 'Filipão Nunes', 'Resort completo'],
        pillsEn: ['Private marina', 'Filipão Nunes', 'Full resort'],
      },
      {
        type: 'precio', layout: 'grid',
        title: '5 puntos de entrada desde $586K USD',
        titleEn: '5 entry points from $586K USD',
        description: 'Desde studios accesibles hasta penthouses de 451 m² — flexible para inversionistas y usuarios finales de alto patrimonio.',
        descriptionEn: 'From accessible studios to 451 sqm penthouses — flexible for investors and ultra-high-net-worth end users.',
      },
      {
        type: 'exclusivo', layout: 'grid',
        title: 'Interiores por Filipão Nunes',
        titleEn: 'Interiors by Filipão Nunes',
        description: 'Arquitecto portugués de reconocimiento internacional. Su diseño añade prestigio duradero y valor de reventa.',
        descriptionEn: 'Internationally renowned Portuguese architect. His design adds lasting prestige and resale value.',
      },
      {
        type: 'roi', layout: 'wide',
        title: 'Zona Hotelera: el mercado de reventa más líquido de Cancún',
        titleEn: 'Hotel Zone: Cancún\'s most liquid resale market',
        description: 'Ocupación vacacional superior al 80% anual. Amenidades de resort hacen la unidad inmediatamente comercializable en Airbnb, Vrbo y plataformas de renta de lujo.',
        descriptionEn: 'Annual vacation occupancy exceeding 80%. Resort amenities make the unit immediately marketable on Airbnb, Vrbo, and luxury rental platforms.',
      },
    ],
  },
  // ─── ARBOLADA TOWERS ───
  {
    id: 'arbolada-towers',
    slug: 'arbolada-towers',
    name: 'Arbolada Towers',
    seoTitle: 'Arbolada Towers — Puerto Morelos | Rivana',
    seoTitleEn: 'Arbolada Towers Puerto Morelos | Rivana',
    seoDescription: 'Torres residenciales en Puerto Morelos del desarrollador ELEVA Capital Group. Track record: 45% plusvalía en 1.5 años. Preventa disponible con Rivana.',
    seoDescriptionEn: 'Residential towers in Puerto Morelos by ELEVA Capital Group. Track record: 45% appreciation in 1.5 years. Pre-sale available through Rivana.',
    zone: 'Residencial Cancún',
    zoneEn: 'Cancún Residential',
    status: 'entrega-inmediata' as const,
    priceFromUSD: 263000,
    priceFromMXN: 5268575,
    bedrooms: '2',
    bedroomsEn: '2',
    sqmRange: '93.75 m²',
    delivery: 'Entrega inmediata',
    roiEstimate: 0,
    plusvaliaEstimate: 0,
    images: [arboladaHero],
    description: 'Situado dentro de Arbolada Residencial, Arbolada Towers ofrece ser parte de una comunidad integral donde las familias se desarrollan con la más alta calidad de vida. Solo 66 departamentos con más del 80% ya vendido. Últimas unidades Tipo C disponibles. Desarrollado por ELEVA Capital Group, misma desarrolladora de Cumbres Towers, Cumbres Suites, Porto Blu y Sole Blu. Entrega inmediata — ideal para comenzar a generar renta desde ya.',
    descriptionEn: 'Located inside Residencial Arbolada, Arbolada Towers offers the chance to be part of a comprehensive community built for the highest quality of life. Only 66 apartments with over 80% already sold. Last Type C units available. Developed by ELEVA Capital Group, also behind Cumbres Towers, Cumbres Suites, Porto Blu, and Sole Blu. Immediate delivery — ideal to start generating rental income from day one.',
    features: [
      'Alberca infinity', 'Gimnasio equipado (100 m²)', 'Coworking', 'Centro de conferencias',
      'Sala de usos múltiples', 'Elevadores', 'Estacionamiento techado con bodega',
      'Parques (7,500 m²)', 'Canchas deportivas', 'Ciclopista', 'Acceso controlado 24/7', 'CCTV',
    ],
    featuresEn: [
      'Infinity pool', 'Equipped gym (100 sqm)', 'Coworking', 'Conference center',
      'Multipurpose lounge', 'Elevators', 'Covered parking with storage',
      'Parks (7,500 sqm)', 'Sports courts', 'Bike path', 'Controlled access 24/7', 'CCTV',
    ],
    units: [
      { name: 'Tipo A — 3 Rec / 2.5 Baños (Agotado)', nameEn: 'Type A — 3BR/2.5BA (Sold Out)', sqm: 142.80, priceMXN: 0, priceUSD: 0, available: 0 },
      { name: 'Tipo B — 3 Rec / 2.5 Baños (Agotado)', nameEn: 'Type B — 3BR/2.5BA (Sold Out)', sqm: 98.23, priceMXN: 0, priceUSD: 0, available: 0 },
      { name: 'Tipo C — 2 Rec / 2 Baños', nameEn: 'Type C — 2BR/2BA', sqm: 93.75, priceMXN: 5268575, priceUSD: 263000, available: 5 },
    ],
    priceNote: 'Últimas unidades Tipo C. Enganche desde 30%, descuento hasta 8% por pago de contado. Mantenimiento: $21 MXN/m²/mes.',
    priceNoteEn: 'Last Type C units. Down payment from 30%, up to 8% discount for full cash payment. HOA: $21 MXN/sqm/month.',
    address: 'Av. Huayacán con Av. 135, Residencial Arbolada, Cancún, Quintana Roo',
    addressNote: 'Zona residencial con accesos por Av. 135 y Av. de los Colegios. Vecinos: Aqua, Astoria, Cumbres, Palmaris.',
    addressNoteEn: 'Residential zone with access from Av. 135 and Av. de los Colegios. Neighbors: Aqua, Astoria, Cumbres, Palmaris.',
    distances: [
      { label: 'Plaza Cumbres 5 min', labelEn: 'Plaza Cumbres 5 min', icon: 'ShoppingBag' },
      { label: 'Hospital 10 min', labelEn: 'Hospital 10 min', icon: 'MapPin' },
      { label: 'Zona Hotelera 25 min', labelEn: 'Hotel Zone 25 min', icon: 'Waves' },
      { label: 'Aeropuerto 30 min', labelEn: 'Airport 30 min', icon: 'Plane' },
    ],
    differentiators: [
      {
        type: 'entrega', layout: 'featured',
        title: 'Entrega inmediata — renta desde el día uno',
        titleEn: 'Immediate delivery — rent from day one',
        description: 'Sin periodo de espera. Lista la unidad para arrendar a largo plazo desde el primer mes. Más del 80% del edificio ya está vendido.',
        descriptionEn: 'No waiting period. Unit ready for long-term lease from month one. Over 80% of the building is already sold.',
        stat: '80%+', statLabel: 'vendido', statLabelEn: 'sold',
        pills: ['Entrega inmediata', 'ELEVA Capital Group'],
        pillsEn: ['Immediate delivery', 'ELEVA Capital Group'],
      },
      {
        type: 'precio', layout: 'grid',
        title: 'Desde $5.2M MXN — entrada accesible',
        titleEn: 'From $5.2M MXN — accessible entry',
        description: 'Barrera de entrada baja en pesos mexicanos con enganche desde 30% y descuento de hasta 8% por pago de contado.',
        descriptionEn: 'Low barrier to entry in Mexican pesos with 30% down payment and up to 8% cash discount.',
      },
      {
        type: 'exclusivo', layout: 'grid',
        title: 'Desarrollador con track record: ELEVA Capital Group',
        titleEn: 'Proven developer: ELEVA Capital Group',
        description: 'Misma desarrolladora de Cumbres Towers, Sole Blu y Porto Blu. Bajo riesgo de ejecución.',
        descriptionEn: 'Also behind Cumbres Towers, Sole Blu, and Porto Blu. Low execution risk.',
      },
      {
        type: 'roi', layout: 'wide',
        title: 'Av. Huayacán — corredor de mayor plusvalía en Cancún',
        titleEn: 'Av. Huayacán — Cancún\'s fastest-appreciating corridor',
        description: 'Zona residencial con alta demanda de arrendamiento de largo plazo, comunidad consolidada y acceso a comercio, escuelas y hospitales.',
        descriptionEn: 'Residential zone with high long-term rental demand, consolidated community, and access to retail, schools, and hospitals.',
      },
    ],
  },
  // ─── THOMPSON RESIDENCES PUERTO CANCÚN ───
  {
    id: 'thompson-residences-puerto-cancun',
    slug: 'thompson-residences-puerto-cancun',
    name: 'Thompson Residences',
    seoTitle: 'Thompson Residences — Puerto Cancún | Rivana',
    seoTitleEn: 'Thompson Residences Puerto Cancún | Rivana',
    seoDescription: 'Residencias de lujo Thompson en Puerto Cancún. Diseño arquitectónico de primer nivel, marina y amenidades exclusivas. Preventa disponible con Rivana.',
    seoDescriptionEn: 'Thompson luxury residences in Puerto Cancún. World-class architectural design, marina access and exclusive amenities. Pre-sale available through Rivana.',
    zone: 'Puerto Cancún, Cancún',
    zoneEn: 'Puerto Cancún, Cancún',
    status: 'preventa' as const,
    priceFromUSD: 730000,
    priceFromMXN: 14600000,
    bedrooms: '2–5',
    bedroomsEn: '2–5',
    sqmRange: '140–803 m²',
    delivery: 'Agosto 2028',
    roiEstimate: 0,
    plusvaliaEstimate: 0,
    images: [thompsonHero],
    description: 'Thompson Private Residences Puerto Cancún redefine el lujo contemporáneo en el Caribe Mexicano: un desarrollo concebido para una comunidad selecta que combina diseño arquitectónico vanguardista, amenidades de clase mundial y un enfoque absoluto en privacidad. Solo 83 residencias exclusivas con un promedio de 273 m² cada una. Acceso limitado por invitación. Proyecto 100% residencial — sin rentas vacacionales, sin uso temporal. Operado por Thompson Hotels™ (Hyatt™). Desarrollado por Azul Hospitality & Real Estate Group, nombrado "Desarrollador del Año 2023" por Hyatt.',
    descriptionEn: 'Thompson Private Residences Puerto Cancún redefines contemporary luxury in the Mexican Caribbean: a development conceived for a select community combining avant-garde architectural design, world-class amenities, and an absolute focus on privacy. Only 83 exclusive residences averaging 273 sqm each. Access limited by invitation only. A 100% residential project — no vacation rentals, no temporary use. Operated by Thompson Hotels™ (Hyatt™). Developed by Azul Hospitality & Real Estate Group, named "Developer of the Year 2023" by Hyatt.',
    features: [
      'Sky Beach (playa artificial en rooftop)', 'Alberca infinity piso 23', 'Restaurante rooftop',
      'Alberca solo adultos', 'Gimnasio equipado', 'Spa', 'Cinema', 'Simulador de golf',
      'Canal de nado', 'Coworking', 'Lounge para residentes', 'Área de asado',
      'Roof garden', 'Concierge', 'Valet parking', 'Choferes privados',
      'Alquiler de yates', 'Limpieza diaria', 'Personal shopper', 'Elevador privado',
    ],
    featuresEn: [
      'Sky Beach (rooftop artificial beach)', '23rd floor infinity pool', 'Rooftop restaurant',
      'Adults-only pool', 'Equipped gym', 'Spa', 'Cinema', 'Golf simulator',
      'Lap pool', 'Coworking', 'Residents\' lounge', 'BBQ area',
      'Roof garden', 'Concierge', 'Valet parking', 'Private chauffeurs',
      'Yacht rentals', 'Daily housekeeping', 'Personal shopper', 'Private elevator',
    ],
    units: [
      { name: 'Residencia 2 Rec — ~160 m²', nameEn: 'Residence 2BR — ~160 sqm', sqm: 159.73, priceMXN: 14600000, priceUSD: 730000, available: 20 },
      { name: 'Residencia 3 Rec — ~219 m²', nameEn: 'Residence 3BR — ~219 sqm', sqm: 218.61, priceMXN: 16241000, priceUSD: 812050, available: 20 },
      { name: 'Residencia 4 Rec', nameEn: 'Residence 4BR', sqm: 350, priceMXN: 40000000, priceUSD: 2000000, available: 10 },
      { name: 'Penthouse 5 Rec — hasta 803 m²', nameEn: 'Penthouse 5BR — up to 803 sqm', sqm: 803, priceMXN: 192000000, priceUSD: 9600000, available: 3 },
    ],
    priceNote: 'Esquema de pago: 20% a la firma, 30% en mensualidades sin intereses hasta julio 2028, 50% contra entrega agosto 2028.',
    priceNoteEn: 'Payment plan: 20% at signing, 30% in interest-free installments through July 2028, 50% upon delivery August 2028.',
    address: 'Puerto Cancún, Cancún, Quintana Roo',
    addressNote: 'Dentro de la comunidad cerrada de Puerto Cancún. Acceso a 250 m de playa privada con reserva ecológica.',
    addressNoteEn: 'Inside the gated community of Puerto Cancún. Access to 250m of private beach with ecological reserve.',
    distances: [
      { label: 'Marina Town Center — A pasos', labelEn: 'Marina Town Center — Steps away', icon: 'ShoppingBag' },
      { label: 'Campo de Golf Tom Weiskopf 5 min', labelEn: 'Tom Weiskopf Golf Course 5 min', icon: 'Flag' },
      { label: 'Zona Hotelera 10 min', labelEn: 'Hotel Zone 10 min', icon: 'Waves' },
      { label: 'Aeropuerto 20 min', labelEn: 'Airport 20 min', icon: 'Plane' },
      { label: 'Centro de Cancún 5 min', labelEn: 'Downtown Cancún 5 min', icon: 'MapPin' },
    ],
    differentiators: [
      {
        type: 'exclusivo', layout: 'featured',
        title: 'By Invitation Only — Solo 83 residencias',
        titleEn: 'By Invitation Only — Only 83 residences',
        description: 'Acceso exclusivamente por invitación o referidos. Proyecto 100% residencial sin rentas vacacionales — máxima privacidad, conservación del valor y calidad de vida.',
        descriptionEn: 'Access exclusively by invitation or referral. A 100% residential project with no vacation rentals — maximum privacy, value preservation, and quality of life.',
        stat: '83', statLabel: 'residencias', statLabelEn: 'residences',
        pills: ['Thompson Hotels™', 'Hyatt™', 'By Invitation'],
        pillsEn: ['Thompson Hotels™', 'Hyatt™', 'By Invitation'],
      },
      {
        type: 'amenidad', layout: 'grid',
        title: 'Sky Beach — playa artificial en el rooftop',
        titleEn: 'Sky Beach — rooftop artificial beach',
        description: 'El último piso presenta una playa artificial en el rooftop y el restaurante más alto de la región, con alberca infinity solo para adultos.',
        descriptionEn: 'The top floor features a world-first rooftop artificial beach and the highest restaurant in the region, with an adults-only infinity pool.',
      },
      {
        type: 'exclusivo', layout: 'grid',
        title: 'Operado por Thompson Hotels™ / Hyatt™',
        titleEn: 'Operated by Thompson Hotels™ / Hyatt™',
        description: 'Respaldo de una de las cadenas hoteleras más grandes del mundo con más de 1,400 propiedades en 79 países. Azul Hospitality: "Desarrollador del Año 2023" por Hyatt.',
        descriptionEn: 'Backed by one of the world\'s largest hotel chains with 1,400+ properties in 79 countries. Azul Hospitality: Hyatt\'s "Developer of the Year 2023."',
      },
      {
        type: 'precio', layout: 'grid',
        title: 'Pago diferido sin intereses',
        titleEn: 'Interest-free deferred payment',
        description: '20% a la firma, 30% en mensualidades sin intereses, 50% contra entrega — flujo de capital optimizado para el inversionista.',
        descriptionEn: '20% at signing, 30% in interest-free installments, 50% upon delivery — capital-efficient entry for investors.',
        pills: ['20% firma', '30% mensualidades', '50% entrega'],
        pillsEn: ['20% signing', '30% installments', '50% delivery'],
      },
      {
        type: 'amenidad', layout: 'wide',
        title: 'Puerto Cancún — golf, marina, playa privada y boutiques de lujo',
        titleEn: 'Puerto Cancún — golf, marina, private beach & luxury boutiques',
        description: 'Campo de golf de 18 hoyos Tom Weiskopf, marina, 250 m de playa privada, Marina Town Center con Cartier, Rolex, Hugo Boss, restaurantes y entretenimiento.',
        descriptionEn: '18-hole Tom Weiskopf golf course, marina, 250m of private beach, Marina Town Center with Cartier, Rolex, Hugo Boss, restaurants, and entertainment.',
      },
      {
        type: 'exclusivo', layout: 'wide',
        title: 'Premiado internacionalmente: Paris Design Award + Americas Property Awards 2025',
        titleEn: 'Internationally awarded: Paris Design Award + Americas Property Awards 2025',
        description: 'Reconocimientos en excelencia residencial, arquitectura y diseño de interiores — prestigio que se traduce en valor de reventa.',
        descriptionEn: 'Awards in residential excellence, architecture, and interior design — prestige that translates into resale value.',
      },
    ],
  },
  // ── SOLE BLU OCEAN LIVING ──
  {
    id: 'sole-blu-ocean-living',
    slug: 'sole-blu-ocean-living',
    name: 'Sole Blu Ocean Living',
    seoTitle: 'Sole Blu Ocean Living — Puerto Morelos | Rivana',
    seoTitleEn: 'Sole Blu Ocean Living Puerto Morelos | Rivana',
    seoDescription: 'Residencias frente al mar en Puerto Morelos. ROI proyectado ~10% anual, gestión 100% delegada OPENKEY. 1–2 rec. desde $392,000 USD. Entrega verano 2026.',
    seoDescriptionEn: 'Oceanfront residences in Puerto Morelos. ~10% projected annual ROI, 100% delegated OPENKEY management. 1–2 bed from $392,000 USD. Summer 2026 delivery.',
    zone: 'Puerto Morelos',
    zoneEn: 'Puerto Morelos',
    status: 'preventa',
    priceFromUSD: 392000,
    priceFromMXN: 6860000,
    bedrooms: '1–2',
    bedroomsEn: '1–2',
    sqmRange: '60–136 m²',
    delivery: 'Verano 2026',
    roiEstimate: 10,
    plusvaliaEstimate: 25,
    images: [soleBluHero, soleBluFachadaDia, soleBluAlberca, soleBluCocina, soleBluRooftopLounge, soleBluPlungePool, soleBluPoolCamastros, soleBluTerraza, soleBluLobby, soleBluGimnasio],
    description: 'Sole BLU integra cada elemento para ofrecer un estilo de vida excepcional, amenidades tipo resort y una ubicación privilegiada frente al mar en Riviera Cancún. Toda la operación, renta y mantenimiento están cubiertos a través de la alianza con OPENKEY Destination Properties — tu única tarea es disfrutar.',
    descriptionEn: 'Sole BLU integrates every element to deliver an exceptional lifestyle, resort-grade amenities, and a privileged oceanfront location in Riviera Cancún — with all operations, rentals, and maintenance fully managed through a strategic alliance with OPENKEY Destination Properties. You own it. Someone else runs it.',
    features: [
      'Arquitectura por Kince Arquitectura',
      'Gestión vacacional OPENKEY Destination Properties',
      'Acceso privado a playa',
      'Pool bar y rooftop con vista al océano',
      'Gimnasio, área de BBQ, sala de juntas',
      'Pet friendly',
      'Estacionamiento para bicicletas',
      'CCTV y seguridad',
    ],
    featuresEn: [
      'Architecture by Kince Arquitectura',
      'OPENKEY Destination Properties vacation management',
      'Private beach access',
      'Pool bar and ocean view rooftop',
      'Gym, BBQ area, meeting room',
      'Pet friendly',
      'Bike parking',
      'CCTV and security',
    ],
    units: [
      { name: 'Studio', nameEn: 'Studio', sqm: 60.06, priceMXN: 6860000, priceUSD: 392000, available: 5 },
      { name: 'Tipo A — 1 rec. (flex 2)', nameEn: 'Type A — 1 bed (flex 2)', sqm: 94.13, priceMXN: 9537500, priceUSD: 545000, available: 5 },
      { name: 'Tipo C — 1 rec.', nameEn: 'Type C — 1 bed', sqm: 90.02, priceMXN: 10045000, priceUSD: 574000, available: 5 },
      { name: 'Tipo D1 — 1 rec.', nameEn: 'Type D1 — 1 bed', sqm: 114.83, priceMXN: 12355000, priceUSD: 706000, available: 5 },
      { name: 'Tipo E — 2 rec.', nameEn: 'Type E — 2 beds', sqm: 136.07, priceMXN: 13055000, priceUSD: 746000, available: 5 },
      { name: 'Tipo B — 2 rec. (flex 3)', nameEn: 'Type B — 2 beds (flex 3)', sqm: 120.34, priceMXN: 13615000, priceUSD: 778000, available: 5 },
    ],
    distances: [
      { label: 'Aeropuerto de Cancún: 20 min', labelEn: 'Cancún Airport: 20 min', icon: '✈️' },
      { label: 'Playa del Carmen: 25 min', labelEn: 'Playa del Carmen: 25 min', icon: '🏖️' },
      { label: 'Tulum: 45 min', labelEn: 'Tulum: 45 min', icon: '🏛️' },
    ],
    differentiators: [
      {
        type: 'roi', layout: 'featured',
        title: 'ROI proyectado ~10% anual',
        titleEn: '~10% projected annual ROI',
        description: 'Puerto Morelos mantiene ocupación hotelera cercana al 75% durante todo el año. Se proyecta un retorno combinando ingresos por renta y apreciación del activo.',
        descriptionEn: 'Puerto Morelos maintains hotel occupancy near 75% year-round. Projected return combines rental income and asset appreciation.',
        stat: '~10%', statLabel: 'ROI anual', statLabelEn: 'annual ROI',
      },
      {
        type: 'exclusivo', layout: 'grid',
        title: 'Effortless Ownership — gestión 100% delegada',
        titleEn: 'Effortless Ownership — fully managed',
        description: 'OPENKEY maneja reservas, atención a huéspedes 24/7, mantenimiento, limpieza y reportes de ingresos. Sin llamadas nocturnas, sin gestión de calendario.',
        descriptionEn: 'OPENKEY handles reservations, 24/7 guest service, maintenance, housekeeping, and income reporting. No midnight calls. No calendar management.',
      },
      {
        type: 'precio', layout: 'grid',
        title: '6 tipologías desde $392K USD',
        titleEn: '6 unit types from $392K USD',
        description: 'Desde Studio hasta Tipo B de 2 recámaras — escalable desde primer inversionista hasta portafolio multi-unidad.',
        descriptionEn: 'From Studio to 2-bedroom Type B — scalable from first-time investor to multi-unit portfolio builder.',
        pills: ['Studio $392K', 'Tipo A $545K', 'Tipo B $778K'],
        pillsEn: ['Studio $392K', 'Type A $545K', 'Type B $778K'],
      },
      {
        type: 'vista', layout: 'wide',
        title: 'Último inventario frente al mar en Puerto Morelos',
        titleEn: 'Last beachfront inventory in Puerto Morelos',
        description: 'El stock de tierra frente al mar en Puerto Morelos se está agotando — escasez estructural que garantiza apreciación sostenida.',
        descriptionEn: 'Beachfront land supply in Puerto Morelos is functionally exhausted — structural scarcity guarantees sustained appreciation.',
      },
      {
        type: 'entrega', layout: 'grid',
        title: 'Track record ELEVA Capital Group',
        titleEn: 'ELEVA Capital Group track record',
        description: 'Cumbres Towers: 20% anual por 5 años. Arbolada Towers: 45% en 1.5 años. Porto BLU: 25% en 1.5 años.',
        descriptionEn: 'Cumbres Towers: 20% annual for 5 years. Arbolada Towers: 45% in 1.5 years. Porto BLU: 25% in 1.5 years.',
      },
    ],
  },
  // ── CUORE CUMBRES CANCÚN ──
  {
    id: 'cuore-cumbres-cancun',
    slug: 'cuore-cumbres-cancun',
    name: 'Cuore Cumbres Cancún',
    seoTitle: 'Cuore Cumbres — Cancún Centro | Rivana',
    seoTitleEn: 'Cuore Cumbres Cancún Downtown | Rivana',
    seoDescription: 'Residencias modernas en Cancún Centro. Alta plusvalía urbana, acceso a servicios y conectividad premium. Inversión desde Cancún con Rivana Properties.',
    seoDescriptionEn: 'Modern residences in Downtown Cancún. Strong urban appreciation, premium connectivity and services. Investment opportunity with Rivana Properties.',
    zone: 'Cancún Centro',
    zoneEn: 'Downtown Cancún',
    status: 'preventa',
    priceFromUSD: 0,
    priceFromMXN: 0,
    bedrooms: '1–3',
    bedroomsEn: '1–3',
    sqmRange: '65–346 m²',
    delivery: '2026',
    roiEstimate: 0,
    plusvaliaEstimate: 0,
    images: [cuoreCumbresHero],
    description: 'Cuore Cumbres se ubica en el corazón residencial de Cancún, rodeado de escuelas, restaurantes, cine, supermercados, bancos, cafeterías, gimnasios y múltiples servicios esenciales. Un desarrollo de uso mixto que integra residencias, oficinas boutique y locales comerciales en un solo concepto: Live · Work · Enjoy.',
    descriptionEn: 'Cuore Cumbres is located at the heart of Cancún\'s residential hub, surrounded by schools, restaurants, cinemas, supermarkets, banks, cafés, gyms, and essential services. A mixed-use development integrating residences, boutique offices, and commercial spaces in one concept: Live · Work · Enjoy.',
    priceNote: 'Preventa 2026 — consultar con asesor Rivana para lista actualizada y disponibilidad.',
    priceNoteEn: 'Pre-sale 2026 pricing available upon request — contact your Rivana advisor for current list and availability.',
    features: [
      'Desarrollo de uso mixto: residencias, oficinas y locales',
      '102 departamentos, 26 oficinas boutique, 3 locales comerciales',
      'Desarrollado por ELEVA Capital Group + Métric D',
      'Alberca, carril de nado, gimnasio',
      'Coworking y sala de juntas',
      'Área de asadores y pet friendly',
      'Chapoteadero y área de juegos',
      'Zona Cumbres — máxima conectividad',
    ],
    featuresEn: [
      'Mixed-use development: residences, offices & retail',
      '102 apartments, 26 boutique offices, 3 commercial spaces',
      'Developed by ELEVA Capital Group + Métric D',
      'Pool, lap lane, gym',
      'Coworking and meeting rooms',
      'BBQ area and pet friendly',
      'Splash pad and kids play area',
      'Cumbres zone — maximum connectivity',
    ],
    units: [
      { name: 'Tipo C — 1 rec.', nameEn: 'Type C — 1 bed', sqm: 65.97, priceMXN: 0, priceUSD: 0, available: 10 },
      { name: 'Tipo B1 — 1 rec.', nameEn: 'Type B1 — 1 bed', sqm: 80.97, priceMXN: 0, priceUSD: 0, available: 10 },
      { name: 'Tipo B2 — 1 rec.', nameEn: 'Type B2 — 1 bed', sqm: 88.20, priceMXN: 0, priceUSD: 0, available: 10 },
      { name: 'Tipo A2 — 2 rec.', nameEn: 'Type A2 — 2 beds', sqm: 124.67, priceMXN: 0, priceUSD: 0, available: 10 },
      { name: 'Tipo A1 — 2 rec. + den', nameEn: 'Type A1 — 2 beds + den', sqm: 133.20, priceMXN: 0, priceUSD: 0, available: 10 },
      { name: 'Penthouse — 3 rec.', nameEn: 'Penthouse — 3 beds', sqm: 283.46, priceMXN: 0, priceUSD: 0, available: 2 },
      { name: 'Garden House — 3 rec.', nameEn: 'Garden House — 3 beds', sqm: 346.43, priceMXN: 0, priceUSD: 0, available: 2 },
    ],
    distances: [
      { label: 'Aeropuerto de Cancún: 3 min', labelEn: 'Cancún Airport: 3 min', icon: '✈️' },
      { label: 'Zona Hotelera: 15 min', labelEn: 'Hotel Zone: 15 min', icon: '🏖️' },
      { label: 'Universidades: 5 min', labelEn: 'Universities: 5 min', icon: '🎓' },
    ],
    differentiators: [
      {
        type: 'exclusivo', layout: 'featured',
        title: '3 clases de activo en una sola dirección',
        titleEn: 'Three asset classes, one address',
        description: 'Compra una residencia, una oficina, un local comercial — o los tres. Diversifica dentro de un mismo desarrollo.',
        descriptionEn: 'Buy a residence, an office, a commercial space, or all three — diversify within a single development.',
        stat: '3', statLabel: 'tipos de activo', statLabelEn: 'asset classes',
      },
      {
        type: 'roi', layout: 'grid',
        title: 'Demanda de renta corporativa y familiar',
        titleEn: 'Corporate and family rental demand',
        description: 'Cumbres atrae ejecutivos, profesores universitarios y familias de ingreso medio-alto — base de inquilinos estable y de calidad.',
        descriptionEn: 'Cumbres attracts corporate tenants, university faculty, and professional families — stable, high-quality tenant base.',
      },
      {
        type: 'precio', layout: 'grid',
        title: '7 configuraciones residenciales',
        titleEn: '7 residential configurations',
        description: 'Desde 65.97 m² con ticket accesible hasta Garden House de 346 m² para comprador de alto patrimonio.',
        descriptionEn: 'From 65.97 sqm at accessible ticket to 346 sqm Garden House for the high-net-worth buyer.',
        pills: ['Tipo C 65m²', 'Penthouse 283m²', 'Garden House 346m²'],
        pillsEn: ['Type C 65sqm', 'Penthouse 283sqm', 'Garden House 346sqm'],
      },
      {
        type: 'entrega', layout: 'wide',
        title: 'Doble respaldo: ELEVA Capital Group + Métric D',
        titleEn: 'Dual developer backing: ELEVA + Métric D',
        description: 'Dos desarrolladoras con track record probado en Cancún — menor riesgo de ejecución.',
        descriptionEn: 'Two firms with proven Cancún delivery records — reduced execution risk.',
      },
    ],
  },
];

export function getPropertyBySlug(slug: string): PropertyDetail | undefined {
  return properties.find(p => p.slug === slug);
}
