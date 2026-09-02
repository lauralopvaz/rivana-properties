import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const IMG_HERO = '/images/mondrian/mondrian-hero.jpg';
const IMG_POOL = '/images/mondrian/mondrian-pool.jpg';
const IMG_ROOFTOP = '/images/mondrian/mondrian-rooftop.jpg';
const IMG_BEACH = '/images/mondrian/mondrian-beach-club.jpg';
const IMG_REST = '/images/mondrian/mondrian-restaurant.jpg';
const IMG_GYM = '/images/mondrian/mondrian-gym.jpg';
const IMG_FRONT = '/images/mondrian/mondrian-front-desk.jpg';
const IMG_COFFEE = '/images/mondrian/mondrian-coffee-bar.jpg';

const WA = '529988457224';
const waUrl = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

/* ─── Brand tokens (light Rivana) ─── */
const IVORY = '#F8F6F2';
const CARD = '#FFFFFF';
const INK = '#1C1C1C';
const GOLD = '#CFAE60';
const MUTED = '#4B4B4B';
const BORDER = 'rgba(28,28,28,0.08)';

type L = 'es' | 'en';

const t = {
  es: {
    heroEyebrow: 'Departamentos frente al mar · Zona Hotelera Cancún',
    heroTitle: ['Accede a una vida ', 'extraordinaria', ' en Mondrian Residences.'],
    heroSub: 'Departamentos de lujo en preventa con amenidades de resort cinco estrellas, marina privada y vida frente al mar.',
    heroCta: 'Haz tuya esta vista única',
    heroFrom: 'Desde $514K USD',
    heroDelivery: 'Entrega Q2 2027',
    introEye: 'La inversión',
    introTitle: 'Un departamento frente al mar. Una vida de resort. Una plusvalía sin techo.',
    introBody:
      'Mondrian Residences es la oportunidad de poseer su propio pedacito del Caribe Mexicano: departamentos de lujo en la Zona Hotelera de Cancún, dentro de Grand Island — 23 hectáreas con marina privada, golf de 18 hoyos y club de playa. Vivir aquí es despertar frente al Caribe; tenerlo es asegurar uno de los activos inmobiliarios más codiciados del país.',
    stats: [
      { k: 'Recámaras', v: '1–3' },
      { k: 'M² interior', v: '77–165' },
      { k: 'Marina', v: 'Privada' },
      { k: 'Entrega', v: 'Q2 2027' },
    ],
    viewsEye: 'Vista 360°',
    viewsTitle: 'Tres paisajes. Una sola residencia.',
    viewsBody:
      'El único desarrollo en la Zona Hotelera con vistas simultáneas a la Laguna Nichupté, el Mar Caribe y el campo de golf. Una perspectiva que no existe en ningún otro proyecto.',
    views: [
      { n: '01', tt: 'Laguna Nichupté', d: 'Amaneceres sobre el manglar y aguas espejo.' },
      { n: '02', tt: 'Mar Caribe', d: 'El turquesa más codiciado del mundo, frente a su terraza.' },
      { n: '03', tt: 'Campo de golf', d: '18 hoyos firmados, integrados al paisaje.' },
    ],
    unitsEye: 'Departamentos',
    unitsTitle: 'Cinco tipologías frente al Caribe. Una sola firma de lujo.',
    unitsBody:
      'Cada departamento se entrega llave en mano, amueblado y listo para rentar — su pedacito de Cancún operando desde el primer día.',
    units: [
      { name: 'Loft A', desc: 'Espacio de doble altura con diseño open-concept, ideal para quienes buscan estilo y funcionalidad.' },
      { name: 'Estudio', desc: 'Diseño compacto y elegante, ideal para inversión o estancias cortas con gran rentabilidad.' },
      { name: 'Depto. A', desc: 'Departamento funcional con excelente distribución, ideal para quienes buscan confort y practicidad.' },
      { name: 'Depto. B', desc: 'Espacios amplios con iluminación natural y acabados modernos para una experiencia residencial superior.' },
      { name: 'Depto. C', desc: 'Unidad familiar con mayor amplitud, ideal para quienes buscan comodidad y privacidad en cada espacio.' },
    ],
    unitBadge: '1 Rec · 2 Baños',
    unitInt: 'Interior',
    unitMez: 'Mezzanine',
    unitTot: 'Total',
    unitCta: 'Solicitar plano y precio →',
    ctaMid1: {
      eye: 'Su pedacito de Cancún',
      title: '¿Listo para invertir en un departamento frente al mar?',
      body: 'Un asesor le envía planos, vistas, precios y ROI proyectado de cada unidad disponible — en minutos.',
      primary: 'Quiero invertir frente al mar →',
      secondary: 'Ver precios y plantas',
    },
    amenEye: 'Amenidades',
    amenTitle: 'Un resort de cinco estrellas, en su edificio.',
    amenBody: 'Diseñadas por Filipao Nunes Arquitectos para competir con los mejores resorts del mundo.',
    amenGroups: [
      { title: 'Residencia', items: ['Interiores con acabados de lujo', 'Terrazas amplias con vistas panorámicas', 'Diseño arquitectónico contemporáneo', 'Penthouses con rooftop y swim-out', 'Villas en planta baja'] },
      { title: 'Amenidades', items: ['Infinity pool con vista a la laguna', 'Restaurante rooftop', 'Club lounge rooftop', '2 albercas adicionales en planta baja', 'Ennea Beach Club', 'Sunset Bar', 'Spa & Wellness Center', 'Gimnasio de peso libre', 'Co-Working Center', 'Gaming Lounge', 'Pet Garden', 'Padel court / Pickleball', 'Beach Volleyball court', 'Coffee & Juice Station', 'Marina privada con acceso directo a la laguna'] },
      { title: 'Servicios', items: ['Concierge', 'Room service', 'Valet parking', 'Seguridad 24/7', 'Limpieza residencial', 'Acceso al campo de golf de 18 hoyos', 'Servicio de bicicletas y ski acuático', 'Fondo de mantenimiento y servicios a la carta'] },
      { title: 'Vistas', items: ['Laguna Nichupté y manglares', 'Vistas al mar Caribe', 'Zona Hotelera de Cancún'] },
    ],
    ctaMid2: {
      eye: 'Recorrido privado',
      title: 'Conozca el showroom frente al Caribe.',
      body: 'Visita guiada con asesor, planos a escala y la vista real desde su futuro balcón.',
      primary: 'Agendar mi recorrido',
      secondary: 'Hablar por WhatsApp',
    },
    invEye: 'Inversión',
    invTitle: 'Su pedacito de Cancún, generando plusvalía desde la firma.',
    invBody:
      'Departamento frente al mar, amueblado, operado bajo marca hotelera élite internacional. Renta vacacional desde el día uno, plusvalía proyectada entre 18% y 25% antes de recibir las llaves.',
    invRows: [
      { k: 'Preventa desde', v: '$514K USD' },
      { k: 'Plan de pago', v: '30 / 20 / 50' },
      { k: 'Entrega', v: 'Q2 2027' },
    ],
    planTitle: 'Plan de pago flexible',
    plan: [
      { a: '30% enganche', b: 'a la firma' },
      { a: '20% diferido', b: 'en 12 meses' },
      { a: '50% restante', b: 'a la entrega' },
    ],
    quote: '"Vivir frente al Caribe no es una vista. Es un activo."',
    quoteBy: '— Mondrian Residences',
    formEye: 'Acceso privado a inversionistas',
    formTitle: 'Reciba brochure, plantas y lista de precios frente al mar.',
    formBody: 'Departamentos limitados en preventa. Asesoría personalizada para inversionistas que buscan su pedacito de Cancún frente al Caribe.',
    fName: 'Nombre completo',
    fEmail: 'Email',
    fPhone: 'Teléfono / WhatsApp',
    fUnit: 'Tipo de unidad',
    fSelect: 'Seleccione',
    fUnits: ['1 recámara', '2 recámaras', '3 recámaras', 'Loft / Penthouse'],
    fBudget: 'Presupuesto (USD)',
    fBudgets: ['$500K – $750K', '$750K – $1M', '$1M – $2M', '$2M+'],
    fSubmit: 'Hablar con un asesor por WhatsApp',
    fPrivacy: 'Sus datos son confidenciales. No compartimos información con terceros.',
    fThanks: 'Gracias.',
    fThanksBody: 'Un asesor certificado le contactará por WhatsApp en las próximas 24 horas con brochure, plantas y condiciones de financiamiento.',
    fContinue: 'Continuar por WhatsApp →',
    faqEye: 'Preguntas',
    faqTitle: 'Lo que debe saber antes de invertir.',
    faqs: [
      { q: '¿Dónde se ubica Mondrian Residences at Grand Island Cancún?', a: 'En Boulevard Kukulcán km 16.5, dentro del desarrollo maestro Grand Island, en el corazón de la Zona Hotelera de Cancún. Es el único proyecto de la Zona Hotelera con vistas simultáneas a la Laguna Nichupté, al Mar Caribe y al campo de golf de 18 hoyos.' },
      { q: '¿Cuánto cuesta un departamento en preventa en Grand Island Cancún?', a: 'La preventa inicia en $514,000 USD (aproximadamente $9,050,000 MXN) para las tipologías más accesibles. Los precios se ajustan hacia arriba conforme avanza la comercialización y se alcanzan hitos de obra, por lo que el momento de entrada define directamente la plusvalía capturada.' },
      { q: '¿Cuándo entregan las unidades y qué incluye la entrega llave en mano?', a: 'La entrega está proyectada para el segundo trimestre de 2027 (Q2 2027). Cada residencia se entrega llave en mano: totalmente amueblada, equipada con acabados firma de Filipao Nunes Arquitectos y lista para habitarse o incorporarse al programa de renta desde el primer día.' },
      { q: '¿Cómo funciona el plan de pagos 30 / 20 / 50?', a: 'Es un esquema flexible pensado para preventa: 30% de enganche a la firma para congelar precio, 20% diferido en 12 meses sin intereses durante la construcción, y 50% restante a la entrega — pagadero con recursos propios o crédito hipotecario mexicano o internacional.' },
      { q: '¿Puede un extranjero comprar un departamento frente al mar en Cancún?', a: 'Sí. Los extranjeros pueden adquirir propiedad en la zona restringida (dentro de 50 km de la costa) a través de un fideicomiso bancario, figura regulada por la Ley de Inversión Extranjera. Es el instrumento estándar utilizado por inversionistas de EE.UU., Canadá y Europa; Rivana coordina notaría, fiduciario y traducciones.' },
      { q: '¿Qué tipologías y metrajes hay disponibles?', a: 'Residencias de 1, 2 y 3 recámaras, además de lofts y penthouses, con superficies interiores de 76.96 a 164.75 m². Todas las unidades incluyen terraza privada y vistas panorámicas al Caribe, la laguna o el golf.' },
      { q: '¿Qué amenidades incluye el desarrollo?', a: 'Rooftop infinity pool, club lounge y restaurante en azotea, spa & wellness center, gimnasio firma, marina privada con acceso directo a la Laguna Nichupté, acceso al campo de golf de 18 hoyos, Ennea Beach Club, concierge 24/7, coworking, kids club, pet garden y canchas de pádel y voleibol de playa.' },
      { q: '¿Cuánto puede rentar como inversión vacacional?', a: 'Las proyecciones para residencias de marca en la Zona Hotelera de Cancún estiman rendimientos de renta de 8–12% anual, sostenidos por ocupaciones superiores al 80% y tarifas premium bajo operación hotelera internacional. Los rendimientos son estimados y no garantizados; el pipeline turístico de Cancún y el nuevo Puente Nichupté sustentan la demanda a mediano plazo.' },
      { q: '¿Quién diseña y opera Mondrian Residences?', a: 'Diseño arquitectónico e interiorismo de Filipao Nunes Arquitectos, con hospitalidad bajo una marca élite hotelera internacional. Esta combinación garantiza estándares constructivos superiores y visibilidad global para el programa de renta vacacional.' },
      { q: '¿Cómo asegurar mi unidad y precio antes del próximo ajuste?', a: 'Al firmar el contrato de preventa y liquidar el 30% de enganche, tu precio queda congelado contractualmente. Cualquier incremento posterior no te afecta: compraste a precio de lanzamiento y toda la plusvalía a la entrega es tuya. Rivana te acompaña con asesoría legal y financiera sin costo.' },
    ],
    ctaEnd: {
      eye: 'Su inversión frente al mar',
      title: 'Pocos departamentos. Una sola oportunidad de hacerlos suyos.',
      body: 'Asegure hoy su pedacito de Cancún con plan flexible 30 / 20 / 50.',
      primary: 'Quiero invertir ahora',
      secondary: 'Ver precios y ROI',
    },
  },
  en: {
    heroEyebrow: 'Beachfront residences · Cancún Hotel Zone',
    heroTitle: ['Step into an ', 'extraordinary', ' life at Mondrian Residences.'],
    heroSub: 'Pre-sale luxury condos with five-star resort amenities, a private marina, and life at the edge of the Caribbean.',
    heroCta: 'Claim this one-of-a-kind view',
    heroFrom: 'From $514K USD',
    heroDelivery: 'Delivery Q2 2027',
    introEye: 'The investment',
    introTitle: 'A beachfront residence. A resort lifestyle. Uncapped appreciation.',
    introBody:
      'Mondrian Residences is your chance to own a slice of the Mexican Caribbean: luxury condos inside Grand Island, Cancún Hotel Zone — 57 acres of private marina, an 18-hole golf course, and a signature beach club. Waking up here means facing turquoise water; owning here means holding one of Mexico\'s most coveted real-estate assets.',
    stats: [
      { k: 'Bedrooms', v: '1–3' },
      { k: 'Interior sqm', v: '77–165' },
      { k: 'Marina', v: 'Private' },
      { k: 'Delivery', v: 'Q2 2027' },
    ],
    viewsEye: '360° view',
    viewsTitle: 'Three landscapes. A single residence.',
    viewsBody:
      'The only development in the Hotel Zone with simultaneous views over Nichupté Lagoon, the Caribbean Sea, and the golf course. A perspective no other project can offer.',
    views: [
      { n: '01', tt: 'Nichupté Lagoon', d: 'Sunrises over mangroves and mirror-still water.' },
      { n: '02', tt: 'Caribbean Sea', d: 'The most coveted turquoise in the world, right off your terrace.' },
      { n: '03', tt: 'Golf course', d: '18 signature holes woven into the landscape.' },
    ],
    unitsEye: 'Residences',
    unitsTitle: 'Five layouts on the Caribbean. One signature of luxury.',
    unitsBody:
      'Every residence is delivered turnkey, fully furnished, and ready to rent — your Cancún asset producing from day one.',
    units: [
      { name: 'Loft A', desc: 'Double-height open-concept layout, ideal for those who value both style and functionality.' },
      { name: 'Studio', desc: 'Compact, refined footprint — perfect for investors and short stays with strong yields.' },
      { name: 'Unit A', desc: 'Efficient floor plan with an excellent flow, ideal for comfort and everyday practicality.' },
      { name: 'Unit B', desc: 'Generous spaces bathed in natural light with modern finishes for a superior residential experience.' },
      { name: 'Unit C', desc: 'Family layout with greater breathing room, designed around comfort and privacy in every space.' },
    ],
    unitBadge: '1 Bed · 2 Baths',
    unitInt: 'Interior',
    unitMez: 'Mezzanine',
    unitTot: 'Total',
    unitCta: 'Request floor plan & price →',
    ctaMid1: {
      eye: 'Your piece of Cancún',
      title: 'Ready to invest in a beachfront residence?',
      body: 'An advisor will send you floor plans, views, prices, and projected ROI for every available unit — in minutes.',
      primary: 'I want to invest beachfront →',
      secondary: 'See prices & floor plans',
    },
    amenEye: 'Amenities',
    amenTitle: 'A five-star resort, inside your building.',
    amenBody: 'Designed by Filipao Nunes Arquitectos to stand alongside the finest resorts in the world.',
    amenGroups: [
      { title: 'Residence', items: ['Luxury interior finishes', 'Wide terraces with panoramic views', 'Contemporary architectural design', 'Penthouses with rooftop and swim-out', 'Ground-floor villas'] },
      { title: 'Amenities', items: ['Infinity pool overlooking the lagoon', 'Rooftop restaurant', 'Rooftop club lounge', '2 additional ground-floor pools', 'Ennea Beach Club', 'Sunset Bar', 'Spa & Wellness Center', 'Free-weight gym', 'Co-Working Center', 'Gaming Lounge', 'Pet Garden', 'Padel / Pickleball court', 'Beach volleyball court', 'Coffee & Juice Station', 'Private marina with direct lagoon access'] },
      { title: 'Services', items: ['Concierge', 'Room service', 'Valet parking', '24/7 security', 'Residential housekeeping', 'Access to the 18-hole golf course', 'Bike and water-ski service', 'Maintenance fund and à-la-carte services'] },
      { title: 'Views', items: ['Nichupté Lagoon and mangroves', 'Caribbean Sea views', 'Cancún Hotel Zone skyline'] },
    ],
    ctaMid2: {
      eye: 'Private tour',
      title: 'Walk the showroom on the Caribbean.',
      body: 'Guided visit with an advisor, scaled floor plans, and the real view from your future balcony.',
      primary: 'Book my tour',
      secondary: 'Chat on WhatsApp',
    },
    invEye: 'Investment',
    invTitle: 'Your Cancún asset, generating appreciation from signing day.',
    invBody:
      'A furnished beachfront residence, operated under an elite international hotel brand. Vacation rental from day one, with projected appreciation of 18–25% before you receive the keys.',
    invRows: [
      { k: 'Pre-sale from', v: '$514K USD' },
      { k: 'Payment plan', v: '30 / 20 / 50' },
      { k: 'Delivery', v: 'Q2 2027' },
    ],
    planTitle: 'Flexible payment plan',
    plan: [
      { a: '30% down', b: 'at signing' },
      { a: '20% deferred', b: 'over 12 months' },
      { a: '50% balance', b: 'at delivery' },
    ],
    quote: '"Living on the Caribbean isn\'t a view. It\'s an asset."',
    quoteBy: '— Mondrian Residences',
    formEye: 'Private investor access',
    formTitle: 'Receive the brochure, floor plans, and beachfront price list.',
    formBody: 'Limited pre-sale inventory. Personalized advisory for investors seeking their own piece of Cancún on the Caribbean.',
    fName: 'Full name',
    fEmail: 'Email',
    fPhone: 'Phone / WhatsApp',
    fUnit: 'Unit type',
    fSelect: 'Select',
    fUnits: ['1 bedroom', '2 bedrooms', '3 bedrooms', 'Loft / Penthouse'],
    fBudget: 'Budget (USD)',
    fBudgets: ['$500K – $750K', '$750K – $1M', '$1M – $2M', '$2M+'],
    fSubmit: 'Speak with an advisor on WhatsApp',
    fPrivacy: 'Your information is confidential. We do not share it with third parties.',
    fThanks: 'Thank you.',
    fThanksBody: 'A certified advisor will reach out on WhatsApp within the next 24 hours with the brochure, floor plans, and financing terms.',
    fContinue: 'Continue on WhatsApp →',
    faqEye: 'Questions',
    faqTitle: 'What you should know before investing.',
    faqs: [
      { q: 'Where is Mondrian Residences at Grand Island Cancún located?', a: 'On Boulevard Kukulcán km 16.5, inside the Grand Island master-planned community in the heart of Cancún\'s Hotel Zone. It is the only project in the Hotel Zone with simultaneous views over Nichupté Lagoon, the Caribbean Sea, and the 18-hole golf course.' },
      { q: 'How much does a pre-sale condo at Grand Island Cancún cost?', a: 'Pre-sale starts at $514,000 USD (about $9,050,000 MXN) for the entry tiers. Prices step up as marketing advances and construction milestones are reached, so entry timing directly defines the appreciation you capture.' },
      { q: 'When are units delivered and what does "turnkey delivery" include?', a: 'Delivery is scheduled for Q2 2027. Every residence is delivered fully turnkey: furnished, equipped, and finished with the signature Filipao Nunes Arquitectos palette — ready to occupy or plug into the rental program from day one.' },
      { q: 'How does the 30 / 20 / 50 payment plan work?', a: 'It is a flexible pre-sale schedule: 30% down at signing to lock your price, 20% deferred over 12 months with zero interest during construction, and the remaining 50% at delivery — payable with own funds, a Mexican mortgage, or international financing.' },
      { q: 'Can foreigners buy beachfront property in Cancún?', a: 'Yes. Foreign buyers can own property inside Mexico\'s restricted coastal zone through a bank trust (fideicomiso), regulated by the Foreign Investment Law. It is the standard vehicle used by US, Canadian, and European investors; Rivana coordinates the notary, the trustee bank, and certified translations.' },
      { q: 'What unit types and floor plans are available?', a: '1, 2, and 3-bedroom residences plus lofts and penthouses, with interior areas from 76.96 to 164.75 sqm. Every unit includes a private terrace and panoramic views over the Caribbean, the lagoon, or the golf course.' },
      { q: 'Which amenities are included in the development?', a: 'Rooftop infinity pool, rooftop club lounge and restaurant, spa & wellness center, signature gym, private marina with direct access to Nichupté Lagoon, access to the 18-hole golf course, Ennea Beach Club, 24/7 concierge, coworking, kids club, pet garden, plus padel and beach volleyball courts.' },
      { q: 'What rental yield can I expect as an investor?', a: 'Projections for branded residences in Cancún\'s Hotel Zone estimate 8–12% annual rental yield, backed by 80%+ occupancy and premium ADRs under international hotel operation. Yields are estimated, not guaranteed; Cancún\'s tourism pipeline and the new Nichupté Bridge underpin mid-term demand.' },
      { q: 'Who designs and operates Mondrian Residences?', a: 'Architecture and interiors by Filipao Nunes Arquitectos, with hospitality under an elite international hotel brand. The combination secures higher construction standards and global visibility for the vacation-rental program.' },
      { q: 'How do I lock my unit and price before the next increase?', a: 'Signing the pre-sale contract and paying the 30% down payment contractually locks your price. Any subsequent increase does not affect you: you bought at launch pricing and keep every point of appreciation at delivery. Rivana includes legal and financial advisory at no extra cost.' },
    ],
    ctaEnd: {
      eye: 'Your beachfront investment',
      title: 'Few residences. One chance to make them yours.',
      body: 'Secure your piece of Cancún today with the flexible 30 / 20 / 50 plan.',
      primary: 'I want to invest now',
      secondary: 'See prices & ROI',
    },
  },
} as const;

const GALLERY = [
  { src: IMG_POOL, es: 'Piscina principal · arquitectura firma', en: 'Signature architecture · main pool' },
  { src: IMG_ROOFTOP, es: 'Rooftop infinity · vista 360°', en: 'Infinity rooftop · 360° view' },
  { src: IMG_BEACH, es: 'Ennea Beach Club · atardecer', en: 'Ennea Beach Club · sunset' },
  { src: IMG_REST, es: 'Restaurante firma · interiorismo Filipao Nunes', en: 'Signature restaurant · Filipao Nunes interiors' },
  { src: IMG_GYM, es: 'Gimnasio firma · wellness center', en: 'Signature gym · wellness center' },
  { src: IMG_FRONT, es: 'Lobby doble altura · concierge 24/7', en: 'Double-height lobby · 24/7 concierge' },
  { src: IMG_COFFEE, es: 'Coffee & juice station · club lounge', en: 'Coffee & juice station · club lounge' },
];

/* ─── Reusable styles ─── */
const eyebrowStyle: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontSize: '11px',
  fontWeight: 500,
  letterSpacing: '0.32em',
  textTransform: 'uppercase',
  color: GOLD,
};
const displayStyle = (size: string): React.CSSProperties => ({
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 300,
  fontSize: size,
  lineHeight: 1.08,
  color: INK,
  letterSpacing: '-0.01em',
});
const bodyStyle: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontSize: '15px',
  fontWeight: 300,
  lineHeight: 1.85,
  color: MUTED,
};
const btnGold: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  background: GOLD,
  color: '#fff',
  fontFamily: "'Jost', sans-serif",
  fontSize: '12px',
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  padding: '18px 28px',
  textDecoration: 'none',
  cursor: 'pointer',
  border: 'none',
  transition: 'transform .2s, background .2s',
  lineHeight: 1,
};
const btnGhostDark: React.CSSProperties = {
  border: `1px solid ${INK}`,
  color: INK,
  background: 'transparent',
  fontFamily: "'Jost', sans-serif",
  fontSize: '11px',
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  padding: '16px 24px',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .2s',
};

const PreSale = () => {
  const { language } = useLanguage();
  const L: L = language as L;
  const c = t[L];
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const phone = String(fd.get('phone') || '').trim();
    const unit = String(fd.get('unit') || '');
    const budget = String(fd.get('budget') || '');
    if (!name || !email.includes('@') || !phone) {
      toast({ title: 'Error', description: L === 'es' ? 'Por favor completa todos los campos.' : 'Please fill in all fields.', variant: 'destructive' });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from('leads').insert({
      first_name: name,
      email,
      phone,
      budget: budget || null,
      property_name: 'Mondrian Residences at Grand Island Cancun',
      interest: 'presale-brochure',
      source_page: L === 'en' ? '/en/presale' : '/presale',
      message: unit ? `Unit type: ${unit}` : null,
    });
    setSubmitting(false);
    if (error) {
      toast({
        title: L === 'es' ? 'No se pudo enviar' : 'Could not send',
        description: L === 'es'
          ? 'Ocurrió un error al enviar tu solicitud. Por favor intenta de nuevo o escríbenos por WhatsApp.'
          : 'There was an error submitting your request. Please try again or reach us on WhatsApp.',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: L === 'es' ? '¡Recibido!' : 'Received!',
      description: L === 'es'
        ? 'Un asesor te contactará en las próximas 24 horas.'
        : 'An advisor will reach out within the next 24 hours.',
    });
    try {
      const w = window as unknown as {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: Array<Record<string, unknown>>;
      };
      const payload = {
        event_category: 'lead',
        event_label: 'presale',
        source_page: L === 'en' ? '/en/presale' : '/presale',
        language: L,
        property_name: 'Mondrian Residences at Grand Island Cancun',
        destination: 'zona-hotelera',
        unit: unit || 'unspecified',
        budget: budget || 'unspecified',
      };
      w.gtag?.('event', 'generate_lead', payload);
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: 'generate_lead', ...payload });
    } catch {
      /* analytics failures must not break UX */
    }
    setSent(true);
  };

  return (
    <>
      <SEOHead
        title={L === 'es'
          ? 'Mondrian Residences Grand Island Cancún · Preventa desde $514K | Rivana'
          : 'Mondrian Residences Grand Island Cancún · Pre-Sale from $514K | Rivana'}
        description={L === 'es'
          ? 'Preventa Mondrian Residences en Grand Island, Zona Hotelera Cancún. Vistas 360° al Mar Caribe, Laguna Nichupté y golf. Desde $514K USD, entrega Q2 2027, plan 30/20/50.'
          : 'Mondrian Residences pre-sale inside Grand Island, Cancún Hotel Zone. 360° views over the Caribbean Sea, Nichupté Lagoon and golf course. From $514K USD, delivery Q2 2027, 30/20/50 plan.'}
        ogImage={IMG_HERO}
        path={L === 'en' ? '/en/presale' : '/presale'}
        hreflangEs="/presale"
        hreflangEn="/en/presale"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'Residence',
            name: 'Mondrian Residences at Grand Island Cancún',
            description: L === 'es'
              ? 'Residencias de marca en Grand Island, Zona Hotelera de Cancún, con vistas 360° a la Laguna Nichupté, Mar Caribe y campo de golf. Preventa desde $514,000 USD, entrega llave en mano Q2 2027.'
              : 'Branded residences at Grand Island, Cancún Hotel Zone, with 360° views over Nichupté Lagoon, the Caribbean Sea, and the golf course. Pre-sale from $514,000 USD, turnkey delivery Q2 2027.',
            url: `https://rivanaproperties.com${L === 'en' ? '/en/presale' : '/presale'}`,
            image: `https://rivanaproperties.com${IMG_HERO}`,
            inLanguage: L === 'en' ? 'en' : 'es',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Boulevard Kukulcán km 16.5, Zona Hotelera',
              addressLocality: 'Cancún',
              addressRegion: 'Quintana Roo',
              addressCountry: 'MX',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Offer',
            name: L === 'es' ? 'Preventa Mondrian Residences Grand Island' : 'Mondrian Residences Grand Island pre-sale',
            url: `https://rivanaproperties.com${L === 'en' ? '/en/presale' : '/presale'}`,
            price: '514000',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'RealEstateAgent', name: 'Rivana Properties' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: L === 'es' ? 'Inicio' : 'Home', item: `https://rivanaproperties.com${L === 'en' ? '/en' : '/'}` },
              { '@type': 'ListItem', position: 2, name: L === 'es' ? 'Preventa' : 'Pre-Sale', item: `https://rivanaproperties.com${L === 'en' ? '/en/presale' : '/presale'}` },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: L === 'en' ? 'en' : 'es',
            mainEntity: c.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />

      <div style={{ background: IVORY, color: INK, minHeight: '100vh' }}>
        {/* HERO */}
        <section style={{ position: 'relative', minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <img src={IMG_HERO} alt="Mondrian Residences at Grand Island Cancún" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} fetchPriority="high" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(28,28,28,0) 0%, rgba(28,28,28,.35) 55%, rgba(28,28,28,.85) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: '128px 24px 72px', maxWidth: 720, margin: '0 auto', width: '100%' }}>
            <p style={{ ...eyebrowStyle, color: GOLD, marginBottom: 20 }}>{c.heroEyebrow}</p>
            <h1 style={{ ...displayStyle('clamp(2.5rem,7vw,4.6rem)'), color: '#F8F6F2', marginBottom: 24 }}>
              {c.heroTitle[0]}<em style={{ fontStyle: 'italic', color: GOLD }}>{c.heroTitle[1]}</em>{c.heroTitle[2]}
            </h1>
            <p style={{ ...bodyStyle, color: 'rgba(248,246,242,0.82)', maxWidth: 480, marginBottom: 36 }}>{c.heroSub}</p>
            <a href={waUrl(L === 'es' ? 'Hola, quiero hacer mía esta vista única en Mondrian Residences. ¿Me comparten disponibilidad y precios?' : 'Hi, I want to make this unique view mine at Mondrian Residences. Please share availability and prices.')} target="_blank" rel="noopener noreferrer" style={{ ...btnGold, width: '100%', maxWidth: 420 }}>
              {c.heroCta} <span aria-hidden>→</span>
            </a>
            <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 12, ...eyebrowStyle, color: 'rgba(248,246,242,0.7)', fontSize: '10px' }}>
              <span style={{ display: 'block', width: 28, height: 1, background: GOLD, opacity: 0.7 }} />
              <span>{c.heroFrom}</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>{c.heroDelivery}</span>
            </div>
          </div>
        </section>

        {/* INTRO + STATS */}
        <section style={{ padding: '96px 24px', maxWidth: 720, margin: '0 auto' }}>
          <p style={eyebrowStyle}>{c.introEye}</p>
          <h2 style={{ ...displayStyle('clamp(2rem,5.4vw,3.2rem)'), marginTop: 18 }}>{c.introTitle}</h2>
          <p style={{ ...bodyStyle, marginTop: 26 }}>{c.introBody}</p>
          <dl style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', columnGap: 24, rowGap: 32, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
            {c.stats.map((s) => (
              <div key={s.k}>
                <dt style={{ ...eyebrowStyle, color: 'rgba(28,28,28,0.5)', fontSize: '10px' }}>{s.k}</dt>
                <dd style={{ ...displayStyle('2rem'), color: GOLD, marginTop: 8 }}>{s.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* VIEWS */}
        <section style={{ padding: '0 24px 64px', maxWidth: 720, margin: '0 auto' }}>
          <p style={eyebrowStyle}>{c.viewsEye}</p>
          <h2 style={{ ...displayStyle('clamp(2rem,5vw,2.8rem)'), marginTop: 18 }}>{c.viewsTitle}</h2>
          <p style={{ ...bodyStyle, marginTop: 16 }}>{c.viewsBody}</p>
          <ul style={{ marginTop: 40, listStyle: 'none', padding: 0, margin: 0 }}>
            {c.views.map((v) => (
              <li key={v.n} style={{ display: 'flex', gap: 20, borderTop: `1px solid ${BORDER}`, paddingTop: 24, paddingBottom: 24 }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, color: GOLD, letterSpacing: '0.2em', paddingTop: 6 }}>{v.n}</span>
                <div>
                  <h3 style={{ ...displayStyle('1.6rem') }}>{v.tt}</h3>
                  <p style={{ ...bodyStyle, marginTop: 6, fontSize: 17 }}>{v.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* GALLERY */}
        <section style={{ padding: '48px 0' }}>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '0 24px', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
            {GALLERY.map((it, i) => (
              <figure key={i} style={{ position: 'relative', flex: '0 0 78%', maxWidth: 620, margin: 0, scrollSnapAlign: 'start' }}>
                <img src={it.src} alt={L === 'es' ? it.es : it.en} loading="lazy" style={{ width: '100%', height: '60vh', maxHeight: 620, objectFit: 'cover', display: 'block' }} />
                <figcaption style={{ position: 'absolute', left: 12, right: 12, bottom: 12, ...eyebrowStyle, color: '#fff', fontSize: 9, background: 'rgba(28,28,28,0.6)', backdropFilter: 'blur(6px)', padding: '8px 10px' }}>
                  {L === 'es' ? it.es : it.en}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* UNITS */}
        <section style={{ padding: '96px 24px', maxWidth: 720, margin: '0 auto' }}>
          <p style={eyebrowStyle}>{c.unitsEye}</p>
          <h2 style={{ ...displayStyle('clamp(2rem,5vw,2.8rem)'), marginTop: 18 }}>{c.unitsTitle}</h2>
          <p style={{ ...bodyStyle, marginTop: 16, fontSize: 17 }}>{c.unitsBody}</p>
          <ul style={{ marginTop: 40, listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {c.units.map((u) => (
              <li key={u.name} style={{ background: CARD, border: `1px solid ${BORDER}`, padding: '28px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16 }}>
                  <h3 style={{ ...displayStyle('1.6rem') }}>{u.name}</h3>
                  <span style={{ ...eyebrowStyle, fontSize: 10 }}>{c.unitBadge}</span>
                </div>
                <p style={{ ...bodyStyle, marginTop: 12, fontSize: 17 }}>{u.desc}</p>
                <dl style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
                  {[
                    { k: c.unitInt, v: '50.72 m²' },
                    { k: c.unitMez, v: '40.48 m²' },
                    { k: c.unitTot, v: '91.20 m²' },
                  ].map((d) => (
                    <div key={d.k}>
                      <dt style={{ ...eyebrowStyle, fontSize: 9, color: 'rgba(28,28,28,0.45)' }}>{d.k}</dt>
                      <dd style={{ ...displayStyle('1.15rem'), color: GOLD, marginTop: 6 }}>{d.v}</dd>
                    </div>
                  ))}
                </dl>
                <a href={waUrl(L === 'es' ? `Hola, quiero información de la unidad ${u.name} en Mondrian Residences Grand Island.` : `Hi, I want information about ${u.name} at Mondrian Residences Grand Island.`)} target="_blank" rel="noopener noreferrer" style={{ marginTop: 20, display: 'inline-block', ...eyebrowStyle, fontSize: 10, borderBottom: `1px solid ${GOLD}80`, paddingBottom: 2, textDecoration: 'none' }}>
                  {c.unitCta}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <CTABand data={c.ctaMid1} L={L} />

        {/* AMENITIES */}
        <section style={{ position: 'relative', padding: '96px 24px' }}>
          <img src={IMG_ROOFTOP} alt="" aria-hidden style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(248,246,242,0.86)' }} />
          <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
            <p style={eyebrowStyle}>{c.amenEye}</p>
            <h2 style={{ ...displayStyle('clamp(2rem,5vw,2.8rem)'), marginTop: 18 }}>{c.amenTitle}</h2>
            <p style={{ ...bodyStyle, marginTop: 16, fontSize: 17 }}>{c.amenBody}</p>
            <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 40 }}>
              {c.amenGroups.map((g) => (
                <div key={g.title}>
                  <p style={{ ...eyebrowStyle, fontSize: 13, borderBottom: `1px solid ${GOLD}40`, paddingBottom: 8 }}>{g.title}</p>
                  <ul style={{ marginTop: 18, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {g.items.map((a) => (
                      <li key={a} style={{ display: 'flex', gap: 12, ...bodyStyle, color: INK, fontSize: 15 }}>
                        <span aria-hidden style={{ color: GOLD, fontWeight: 400 }}>∙</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABand data={c.ctaMid2} L={L} />

        {/* INVESTMENT */}
        <section style={{ padding: '96px 24px', maxWidth: 720, margin: '0 auto' }}>
          <p style={eyebrowStyle}>{c.invEye}</p>
          <h2 style={{ ...displayStyle('clamp(2rem,5vw,2.8rem)'), marginTop: 18 }}>{c.invTitle}</h2>
          <p style={{ ...bodyStyle, marginTop: 16, fontSize: 17 }}>{c.invBody}</p>
          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {c.invRows.map((r) => (
              <div key={r.k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, borderBottom: `1px solid ${BORDER}`, paddingBottom: 16 }}>
                <span style={{ ...bodyStyle, fontSize: 14 }}>{r.k}</span>
                <span style={{ ...displayStyle('1.5rem'), color: GOLD, whiteSpace: 'nowrap' }}>{r.v}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, background: CARD, border: `1px solid ${BORDER}`, padding: 28 }}>
            <p style={eyebrowStyle}>{c.planTitle}</p>
            <ul style={{ marginTop: 18, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {c.plan.map((p) => (
                <li key={p.a} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, ...bodyStyle, color: INK, fontSize: 15 }}>
                  <span>{p.a}</span>
                  <span style={{ color: 'rgba(28,28,28,0.55)' }}>{p.b}</span>
                </li>
              ))}
            </ul>
          </div>
          <blockquote style={{ marginTop: 48, borderLeft: `2px solid ${GOLD}`, paddingLeft: 20, fontStyle: 'italic', ...displayStyle('1.4rem'), lineHeight: 1.35 }}>
            {c.quote}
            <footer style={{ marginTop: 12, ...eyebrowStyle, fontStyle: 'normal', fontSize: 10, color: 'rgba(28,28,28,0.5)' }}>{c.quoteBy}</footer>
          </blockquote>
        </section>

        {/* LEAD FORM */}
        <section id="contacto" style={{ padding: '96px 24px', background: '#F0EAE0', borderTop: `1px solid ${BORDER}` }}>
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <p style={eyebrowStyle}>{c.formEye}</p>
            <h2 style={{ ...displayStyle('clamp(2rem,5vw,2.6rem)'), marginTop: 18 }}>{c.formTitle}</h2>
            <p style={{ ...bodyStyle, marginTop: 16, fontSize: 17 }}>{c.formBody}</p>
            {sent ? (
              <div style={{ marginTop: 40, border: `1px solid ${GOLD}80`, background: 'rgba(207,174,96,0.08)', padding: 32, textAlign: 'center' }}>
                <p style={{ ...displayStyle('2rem'), color: GOLD }}>{c.fThanks}</p>
                <p style={{ ...bodyStyle, marginTop: 12, fontSize: 17 }}>{c.fThanksBody}</p>
                <a href={waUrl(L === 'es' ? 'Hola, acabo de registrarme para recibir información de Mondrian Residences.' : 'Hi, I just registered to receive information about Mondrian Residences.')} target="_blank" rel="noopener noreferrer" style={{ ...btnGold, background: '#25D366', color: '#fff', marginTop: 24 }}>{c.fContinue}</a>
              </div>
            ) : (
              <form onSubmit={submit} style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <Field label={c.fName} name="name" type="text" />
                <Field label={c.fEmail} name="email" type="email" />
                <Field label={c.fPhone} name="phone" type="tel" />
                <div>
                  <label htmlFor="ps-unit" style={{ ...eyebrowStyle, fontSize: 10, color: 'rgba(28,28,28,0.6)' }}>{c.fUnit}</label>
                  <select id="ps-unit" name="unit" required style={selectStyle}>
                    <option value="">{c.fSelect}</option>
                    {c.fUnits.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="ps-budget" style={{ ...eyebrowStyle, fontSize: 10, color: 'rgba(28,28,28,0.6)' }}>{c.fBudget}</label>
                  <select id="ps-budget" name="budget" required style={selectStyle}>
                    <option value="">{c.fSelect}</option>
                    {c.fBudgets.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <button type="submit" disabled={submitting} style={{ ...btnGold, width: '100%', marginTop: 12, padding: '20px 24px', opacity: submitting ? 0.6 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
                  {submitting ? (L === 'es' ? 'Enviando…' : 'Sending…') : c.fSubmit}
                </button>
                <p style={{ ...eyebrowStyle, textTransform: 'none', letterSpacing: 0, fontSize: 14, color: 'rgba(28,28,28,0.45)', textAlign: 'center', lineHeight: 1.6, fontWeight: 300 }}>{c.fPrivacy}</p>
              </form>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '96px 24px', maxWidth: 720, margin: '0 auto' }}>
          <p style={eyebrowStyle}>{c.faqEye}</p>
          <h2 style={{ ...displayStyle('clamp(2rem,5vw,2.8rem)'), marginTop: 18 }}>{c.faqTitle}</h2>
          <div style={{ marginTop: 40, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
            {c.faqs.map((f, i) => (
              <details key={i} style={{ padding: '22px 0', borderBottom: i === c.faqs.length - 1 ? 'none' : `1px solid ${BORDER}` }}>
                <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24, cursor: 'pointer', listStyle: 'none' }}>
                  <span style={{ ...displayStyle('1.15rem'), lineHeight: 1.35 }}>{f.q}</span>
                  <span aria-hidden style={{ color: GOLD, fontSize: 22, flexShrink: 0, fontFamily: "'Cormorant Garamond', serif" }}>+</span>
                </summary>
                <p style={{ ...bodyStyle, marginTop: 14, fontSize: 17 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <CTABand data={c.ctaEnd} L={L} dark />
      </div>
    </>
  );
};

const selectStyle: React.CSSProperties = {
  marginTop: 8,
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: `1px solid ${INK}30`,
  padding: '12px 0',
  color: INK,
  fontFamily: "'Jost', sans-serif",
  fontSize: 15,
  fontWeight: 300,
  outline: 'none',
  borderRadius: 0,
};

function Field({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <div>
      <label htmlFor={`ps-${name}`} style={{ ...eyebrowStyle, fontSize: 10, color: 'rgba(28,28,28,0.6)' }}>{label}</label>
      <input
        id={`ps-${name}`}
        name={name}
        type={type}
        required
        style={{
          marginTop: 8,
          width: '100%',
          background: 'transparent',
          border: 'none',
          borderBottom: `1px solid ${INK}30`,
          padding: '12px 0',
          color: INK,
          fontFamily: "'Jost', sans-serif",
          fontSize: 15,
          fontWeight: 300,
          outline: 'none',
          borderRadius: 0,
        }}
      />
    </div>
  );
}

function CTABand({ data, L, dark = false }: { data: { eye: string; title: string; body: string; primary: string; secondary: string }; L: L; dark?: boolean }) {
  const bg = dark ? INK : CARD;
  const fg = dark ? '#F8F6F2' : INK;
  const sub = dark ? 'rgba(248,246,242,0.7)' : MUTED;
  return (
    <section style={{ padding: '80px 24px', background: bg, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
        <p style={eyebrowStyle}>{data.eye}</p>
        <h2 style={{ ...displayStyle('clamp(1.8rem,4.6vw,2.4rem)'), color: fg, marginTop: 16 }}>{data.title}</h2>
        <p style={{ ...bodyStyle, color: sub, marginTop: 16, fontSize: 17, maxWidth: 380, marginLeft: 'auto', marginRight: 'auto' }}>{data.body}</p>
        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
          <a
            href={waUrl(L === 'es' ? `Hola, ${data.primary.toLowerCase()} en Mondrian Residences Grand Island.` : `Hi, ${data.primary.toLowerCase()} at Mondrian Residences Grand Island.`)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...btnGold, width: '100%', maxWidth: 380 }}
          >
            <span style={{ whiteSpace: 'pre-wrap' }}>{data.primary}</span>
          </a>
          <a
            href={waUrl(L === 'es' ? `Hola, ${data.secondary.toLowerCase()} de Mondrian Residences.` : `Hi, ${data.secondary.toLowerCase()} at Mondrian Residences.`)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...eyebrowStyle, fontSize: 10, color: dark ? 'rgba(248,246,242,0.75)' : INK, borderBottom: `1px solid ${GOLD}60`, paddingBottom: 2, textDecoration: 'none' }}
          >
            {data.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}

export default PreSale;