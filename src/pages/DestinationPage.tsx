import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import laAmadaAsset from '@/assets/la-amada.jpg.asset.json';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSchedulingModal, ContactType } from '@/contexts/SchedulingModalContext';
import { getDestination } from '@/data/destinations';
import { ArrowRightIcon, TrendingUpIcon, BedIcon, RulerIcon, PhoneIcon, VideoIcon, CalendarIcon, BriefcaseIcon, ChatIcon } from '@/components/icons';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const advisorPhoto = '/images/team/advisor-celia.jpg';

// Real property images
const propMondrian = '/images/mondrian/mondrian-hero.jpg';
import dhamarPrincipal from '@/assets/dhamar-principal.jpg';
import slsVistaPrincipal from '@/assets/sls-vista-principal.jpg';
import reserveHero from '@/assets/reserve-mayakoba-fachada-alberca-jardin.jpg';
import vellmariHero from '@/assets/vellmari-hero.jpg';
import villageBluHero from '@/assets/village-blu-hero.jpg';
import kabeekHero from '@/assets/kabeek-fachada-atardecer.jpg';
import bayViewGrandHero from '@/assets/bvg-rooftop-pool-laguna.jpg';
import arboladaHero from '@/assets/arbolada-hero.jpg';
import thompsonHero from '@/assets/thompson-sky-beach.webp';
import soleBluHero from '@/assets/sole-blu-fachada-principal-atardecer.jpg';
import cuoreCumbresHero from '@/assets/cuore-cumbres-hero.jpg';

import destZonaHotelera from '@/assets/dest-zona-hotelera.jpg';
import salviaBeachAsset from '@/assets/salvia/salvia-beach.jpg.asset.json';
import destPuertoCancun from '@/assets/dest-puerto-cancun.jpg';
import destCostaMujeres from '@/assets/dest-costa-mujeres.jpg';
import destMayakoba from '@/assets/dest-mayakoba.jpg';
import destPuertoMorelos from '@/assets/dest-puerto-morelos.jpg';
import destCancunCentro from '@/assets/dest-cancun-centro.jpg';
import destTulum from '@/assets/dest-tulum.jpg';

const destImages: Record<string, string> = {
  'zona-hotelera': bayViewGrandHero,
  'puerto-cancun': thompsonHero,
  'costa-mujeres': dhamarPrincipal,
  'mayakoba': reserveHero,
  'puerto-morelos': soleBluHero,
  'cancun-centro': cuoreCumbresHero,
  'tulum': villageBluHero,
  'playa-del-carmen': vellmariHero,
};

interface DestinationPageProps {
  destinationKey: string;
  subPage?: string;
}

/* ── Badge icons (same as Listings) ── */
const WavesIcon2 = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
  </svg>
);
const PoolIcon2 = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20c2-1 4-1 6 0s4 1 6 0 4-1 6 0" /><path d="M2 16c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
    <path d="M8 14V6a2 2 0 114 0" /><path d="M16 6a2 2 0 00-4 0" />
  </svg>
);
const UmbrellaIcon2 = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 18a3 3 0 01-6 0" /><path d="M12 2v1" /><path d="M12 3a9 9 0 019 9H3a9 9 0 019-9z" />
  </svg>
);

type BadgeKey = 'vista-mar' | 'alberca-infinity' | 'beach-club' | 'pet-friendly' | 'club-privado' | 'wellness' | 'comunidad-cerrada' | 'vista-marina' | 'golf' | 'frente-mar';

const badgeConfig: Record<string, { label: { es: string; en: string }; icon: React.FC<{ className?: string }> }> = {
  'vista-mar': { label: { es: 'Vista al Mar', en: 'Ocean View' }, icon: WavesIcon2 },
  'alberca-infinity': { label: { es: 'Alberca Infinity', en: 'Infinity Pool' }, icon: PoolIcon2 },
  'beach-club': { label: { es: 'Beach Club', en: 'Beach Club' }, icon: UmbrellaIcon2 },
  'pet-friendly': { label: { es: 'Pet Friendly', en: 'Pet Friendly' }, icon: WavesIcon2 },
  'club-privado': { label: { es: 'Club Privado', en: 'Private Club' }, icon: WavesIcon2 },
  'wellness': { label: { es: 'Wellness & Spa', en: 'Wellness & Spa' }, icon: WavesIcon2 },
  'comunidad-cerrada': { label: { es: 'Comunidad Cerrada', en: 'Gated Community' }, icon: WavesIcon2 },
  'vista-marina': { label: { es: 'Vista a la Marina', en: 'Marina View' }, icon: WavesIcon2 },
  'golf': { label: { es: 'Campo de Golf', en: 'Golf Course' }, icon: WavesIcon2 },
  'frente-mar': { label: { es: 'Frente al Mar', en: 'Beachfront' }, icon: WavesIcon2 },
};

interface DestProject {
  name: string;
  zone: string;
  status: 'preventa' | 'entrega-inmediata';
  yield?: string;
  beds: number;
  area: number;
  price: number;
  badges: BadgeKey[];
  image: string;
  slug: string;
  href?: string;
}

const projectsByDestination: Record<string, DestProject[]> = {
  'zona-hotelera': [
    { name: 'The Residences at Grand Island Cancun', zone: 'Zona Hotelera', status: 'preventa', yield: '33%', beds: 3, area: 165, price: 514000, badges: ['vista-mar', 'club-privado', 'beach-club', 'wellness'], image: propMondrian, slug: 'mondrian-residences-grand-island-cancun' },
    { name: 'Kabeek Marina & Condos', zone: 'Zona Hotelera', status: 'preventa', beds: 4, area: 670, price: 0, badges: ['vista-mar', 'vista-marina', 'wellness', 'club-privado'], image: kabeekHero, slug: 'kabeek-marina-condos' },
    { name: 'Bay View Grand at Grand Island', zone: 'Zona Hotelera', status: 'preventa', beds: 3, area: 451, price: 586146, badges: ['vista-mar', 'vista-marina', 'golf', 'wellness', 'beach-club', 'pet-friendly'], image: bayViewGrandHero, slug: 'bay-view-grand-grand-island' },
    { name: 'Edificio Salvia', zone: 'Zona Hotelera', status: 'entrega-inmediata', yield: '11.4%', beds: 3, area: 93, price: 360000, badges: ['frente-mar', 'vista-mar', 'beach-club'], image: salviaBeachAsset.url, slug: 'edificio-salvia', href: '/zona-hotelera/edificio-salvia' },
  ],
  'puerto-cancun': [
    { name: 'Thompson Residences', zone: 'Puerto Cancún', status: 'preventa', beds: 5, area: 803, price: 730000, badges: ['vista-mar', 'club-privado', 'golf', 'wellness', 'comunidad-cerrada'], image: thompsonHero, slug: 'thompson-residences-puerto-cancun' },
    { name: 'SLS Ocean Beach', zone: 'Puerto Cancún', status: 'preventa', beds: 3, area: 356, price: 1600000, badges: ['frente-mar', 'club-privado', 'golf', 'wellness', 'beach-club'], image: slsVistaPrincipal, slug: 'sls-ocean-beach-puerto-cancun' },
    { name: 'Vellmari Grand Living', zone: 'Puerto Cancún', status: 'preventa', beds: 5, area: 714, price: 845714, badges: ['vista-marina', 'golf', 'wellness', 'pet-friendly'], image: vellmariHero, slug: 'vellmari-grand-living' },
  ],
  'costa-mujeres': [
    { name: 'Dhamar', zone: 'Costa Mujeres', status: 'preventa', beds: 3, area: 178, price: 248000, badges: ['vista-mar', 'beach-club', 'alberca-infinity', 'wellness'], image: dhamarPrincipal, slug: 'dhamar-costa-mujeres' },
    { name: 'La Amada Residences', zone: 'Costa Mujeres', status: 'entrega-inmediata', beds: 3, area: 305, price: 0, badges: ['frente-mar', 'beach-club', 'alberca-infinity', 'wellness'], image: laAmadaAsset.url, slug: 'la-amada-residences', href: '/costa-mujeres/la-amada' },
  ],
  'mayakoba': [
    { name: 'The Reserve at Mayakoba', zone: 'Mayakoba', status: 'preventa', beds: 4, area: 660, price: 1141000, badges: ['golf', 'wellness', 'comunidad-cerrada'], image: reserveHero, slug: 'the-reserve-at-mayakoba' },
  ],
  'playa-del-carmen': [
    { name: 'The Reserve at Mayakoba', zone: 'Mayakoba', status: 'preventa', beds: 4, area: 660, price: 1141000, badges: ['golf', 'wellness', 'comunidad-cerrada'], image: reserveHero, slug: 'the-reserve-at-mayakoba' },
  ],
  'puerto-morelos': [
    { name: 'Village Blu Beach Apartments', zone: 'Puerto Morelos', status: 'preventa', yield: '8.8%', beds: 1, area: 73, price: 273000, badges: ['frente-mar', 'alberca-infinity', 'beach-club'], image: villageBluHero, slug: 'village-blu-beach-apartments' },
    { name: 'Sole Blu Ocean Living', zone: 'Puerto Morelos', status: 'preventa', yield: '~10%', beds: 2, area: 136, price: 392000, badges: ['frente-mar', 'beach-club', 'alberca-infinity', 'pet-friendly'], image: soleBluHero, slug: 'sole-blu-ocean-living' },
  ],
  'cancun-centro': [
    { name: 'Arbolada Towers', zone: 'Residencial Cancún', status: 'entrega-inmediata', beds: 2, area: 94, price: 263000, badges: ['alberca-infinity', 'comunidad-cerrada'], image: arboladaHero, slug: 'arbolada-towers' },
    { name: 'Cuore Cumbres', zone: 'Cancún Centro', status: 'preventa', beds: 3, area: 346, price: 0, badges: ['alberca-infinity', 'pet-friendly', 'comunidad-cerrada'], image: cuoreCumbresHero, slug: 'cuore-cumbres-cancun' },
  ],
  'tulum': [],
};

const faqs: Record<string, { q: string; a: string }[]> = {
  es: [
    { q: '¿Cuál es el proceso de compra para inversionistas extranjeros?', a: 'Los compradores extranjeros pueden adquirir a través de un fideicomiso bancario con plenos derechos de propiedad. El proceso toma 4-6 semanas y nuestro equipo legal te guía en cada paso.' },
    { q: '¿Cuáles son los rendimientos esperados de renta?', a: 'Las propiedades promedian un rendimiento anual del 8-12%, con unidades frente al mar en el rango superior. Las compras en preventa pueden ver una apreciación adicional del 15-22% a la entrega.' },
    { q: '¿Es seguro invertir aquí?', a: 'Absolutamente. Es una zona planificada con infraestructura de primer nivel, respaldada por desarrolladores establecidos y un marco legal sólido para inversores extranjeros.' },
    { q: '¿Cuál es la plusvalía esperada para 2026?', a: 'Con el Mundial 2026, se proyecta una apreciación del 18-25% en propiedades frente al mar. Las preventas actuales ofrecen precios significativamente por debajo del valor futuro.' },
  ],
  en: [
    { q: 'What is the buying process for foreign investors?', a: 'Foreign buyers can purchase through a fideicomiso (bank trust) with full ownership rights. The process typically takes 4-6 weeks and our legal team guides you through every step.' },
    { q: 'What are the expected rental yields?', a: 'Properties average 8-12% annual rental yield, with beachfront units performing at the higher end. Pre-sale purchases can see additional 15-22% capital appreciation by delivery.' },
    { q: 'Is it safe to invest here?', a: 'Absolutely. This is a master-planned zone with first-class infrastructure, backed by established developers and a solid legal framework for foreign investors.' },
    { q: 'What is the expected appreciation for 2026?', a: 'With the 2026 World Cup, a 18-25% appreciation is projected for beachfront properties. Current pre-sales offer prices significantly below future value.' },
  ],
};

/* ── Format price ── */
const formatPrice = (usd: number) => {
  if (usd >= 1000000) return `$${(usd / 1000000).toFixed(1)}M`;
  return `$${(usd / 1000).toFixed(0)}K`;
};

const DestinationPage = ({ destinationKey, subPage }: DestinationPageProps) => {
  const [showAdvisor, setShowAdvisor] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [destFormLoading, setDestFormLoading] = useState(false);
  const [destFormSuccess, setDestFormSuccess] = useState(false);
  const [statusFilter, setStatusFilter] = useState<'all' | 'preventa' | 'entrega-inmediata'>('all');
  const { openModal } = useSchedulingModal();
  const { language, localePath, t } = useLanguage();

  const handleDestFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setDestFormLoading(true);
    const { error } = await supabase.from('leads').insert({
      first_name: fd.get('name') as string,
      email: fd.get('email') as string,
      phone: (fd.get('phone') as string) || null,
      destination: getDestination(destinationKey)?.name?.es || destinationKey,
      interest: 'destination_inquiry',
      source_page: window.location.pathname,
    });
    setDestFormLoading(false);
    if (error) {
      console.error('Destination form error:', error);
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setDestFormSuccess(true);
    }
  };

  const config = getDestination(destinationKey);

  useEffect(() => {
    const onScroll = () => setShowAdvisor(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [destinationKey, subPage]);

  if (!config) return <div className="pt-32 text-center"><h1>Destination not found</h1></div>;

  const subPageConfig = subPage ? config.subPages.find((sp) => sp.segment === subPage) : undefined;
  const isZHEn = destinationKey === 'zona-hotelera' && language === 'en' && !subPage;
  const isCMEn = destinationKey === 'costa-mujeres' && language === 'en' && !subPage;
  const isPCEn = destinationKey === 'puerto-cancun' && language === 'en' && !subPage;
  const isMKEn = destinationKey === 'mayakoba' && language === 'en' && !subPage;
  const seoTitle = isZHEn
    ? 'Luxury Condos for Sale in Cancún Hotel Zone — 2026 Guide | Rivana'
    : isCMEn
      ? 'Luxury Condos for Sale in Costa Mujeres — 2026 Investment Guide | Rivana'
      : isPCEn
        ? 'Luxury Condos & Marina Residences for Sale in Puerto Cancún — 2026 Guide | Rivana'
        : isMKEn
          ? 'Mayakoba Real Estate for Sale — The Reserve at Mayakoba 2026 | Rivana'
          : subPageConfig ? subPageConfig.seo.title[language] : config.seo.title[language];
  const seoDescription = isZHEn
    ? "Beachfront condos and penthouses for sale in Cancún's Hotel Zone from $514K USD. Zone-by-zone pricing, 8–12% rental yields, pre-sale opportunities, and bilingual advisory for foreign buyers."
    : isCMEn
      ? 'Pre-sale condos and oceanfront residences in Costa Mujeres from $248K USD. The fastest-appreciating luxury corridor north of Cancún — St. Regis, 22% YoY growth, and Dhamar available now through Rivana.'
      : isPCEn
        ? 'Marina residences, branded condos, and beachfront penthouses in Puerto Cancún from $730K USD. SLS, Thompson Hotels by Hyatt, Grand Hyatt — the most prestigious residential address in Cancún. Rivana advisory.'
        : isMKEn
          ? 'Luxury villas and residences inside Mayakoba — home to Four Seasons, Rosewood, Banyan Tree, and Fairmont. The Reserve at Mayakoba from $1.1M USD. FIFA World Cup 2026 base camp. Rivana advisory.'
          : subPageConfig ? subPageConfig.seo.description[language] : config.seo.description[language];
  const h1Text = subPageConfig ? subPageConfig.seo.h1[language] : config.seo.h1[language];
  const basePathLocale = language === 'en' ? `/en${config.basePath}` : config.basePath;
  const currentPath = subPage ? `${basePathLocale}/${subPage}` : basePathLocale;
  const esPath = subPage ? `${config.basePath}/${subPage}` : config.basePath;
  const enPath = subPage ? `/en${config.basePath}/${subPage}` : `/en${config.basePath}`;

  const homeName = language === 'en' ? 'Home' : 'Inicio';
  const homeUrl = language === 'en' ? 'https://rivanaproperties.com/en' : 'https://rivanaproperties.com';
  const destUrl = `https://rivanaproperties.com${language === 'en' ? `/en${config.basePath}` : config.basePath}`;

  const breadcrumbItems: Record<string, unknown>[] = [
    { '@type': 'ListItem', position: 1, name: homeName, item: homeUrl },
    { '@type': 'ListItem', position: 2, name: config.name[language], item: destUrl },
  ];

  if (subPage && subPageConfig) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: subPageConfig.seo.h1[language],
      item: `https://rivanaproperties.com${currentPath}`,
    });
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateListing',
        name: h1Text,
        description: seoDescription,
        url: `https://rivanaproperties.com${currentPath}`,
        areaServed: { '@type': 'Place', name: config.name[language] },
        broker: { '@type': 'RealEstateAgent', name: 'Rivana Properties', url: 'https://rivanaproperties.com' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems,
      },
    ],
  };

  const relatedDests = config.relatedDestinations.map((key) => getDestination(key)).filter(Boolean);
  const zhEnFaqs = [
    {
      q: "What is the price range for condos in Cancún's Hotel Zone?",
      a: 'Entry-level luxury condominiums in the Hotel Zone start at approximately $514,000 USD for a three-bedroom unit with ocean views. Pricing varies by sub-zone — Punta Cancún runs roughly $3,200 USD per square metre, the central strip around $2,800/m², and the southern Punta Nizuc zone around $2,500/m². Penthouses and larger units in premium buildings exceed $1.5M USD. Pre-sale pricing is typically 15–33% below projected delivery value, making it the most advantageous entry point for investors.',
    },
    {
      q: "Can foreigners buy condos in Cancún's Hotel Zone?",
      a: "Yes, fully and without restriction. Americans, Canadians, Europeans, and buyers of any nationality can purchase property in the Hotel Zone. Since all Hotel Zone property falls within Mexico's coastal Restricted Zone, foreign buyers hold title through a fideicomiso — a government-regulated bank trust that grants full ownership rights including the right to sell, rent, renovate, and pass the property to heirs. The process is straightforward and well-established; Rivana's team manages it from start to close.",
    },
    {
      q: 'What rental yields can I expect from a Hotel Zone condo?',
      a: "Well-managed Hotel Zone condominiums have historically generated annual rental yields of 8% to 12% of purchase price through short-term vacation rentals. Cancún's Hotel Zone receives over 12 million international visitors per year, driving occupancy rates of 65–78% on professionally managed units. Peak season (December–March and summer) commands significantly higher nightly rates. Exact yields depend on location within the strip, property finishes, management quality, and whether the unit belongs to a branded hotel program.",
    },
    {
      q: 'What are the closing costs for buying in the Hotel Zone?',
      a: 'Foreign buyers should budget 5–8% of the purchase price in closing costs. The main components are the Property Acquisition Tax (ISAI, approximately 3% of assessed value), Notario Público fees (0.5–1%), fideicomiso setup ($1,000–$2,500 USD), Ministry of Foreign Affairs permit ($1,500–$2,000 USD), and Public Registry registration (0.5–1%). On many pre-sale developments, the developer absorbs a portion of closing costs as an incentive — Rivana negotiates these terms as part of its standard advisory process.',
    },
    {
      q: 'How does the Nichupté Bridge affect Hotel Zone property values?',
      a: 'Significantly, particularly for the southern zone (Km 12–23). Before the bridge opened in May 2026, the southern Hotel Zone was 30–45 minutes from downtown by road. The bridge cuts that to under 10 minutes, directly closing the infrastructure gap that had kept southern zone prices below their beach and view quality. Properties like The Residences at Grand Island Cancun and Bay View Grand — both in the Punta Nizuc area — are positioned to capture the most direct appreciation benefit as the market reprices to reflect the new connectivity.',
    },
    {
      q: 'What is the process for buying pre-sale property in the Hotel Zone?',
      a: 'Pre-sale purchases typically involve a signing deposit (10–30% of purchase price), followed by staged payments during the construction period, and a final payment at delivery. No mortgage or bank financing is required during construction. The process takes 45–90 days from signed agreement to formal closing. Rivana manages due diligence, notary coordination, fideicomiso setup, and developer negotiation on your behalf. Advisory is complimentary — our fees are paid by the developer on completed transactions.',
    },
  ];
  const cmEnFaqs = [
    {
      q: 'Where exactly is Costa Mujeres and how far is it from Cancún?',
      a: "Costa Mujeres is located immediately north of Cancún's city limits, approximately 20 minutes by car from the Hotel Zone and 25–30 minutes from Cancún International Airport via the current route. The Cancún–Costa Mujeres Tourist Boulevard — a 25-kilometre highway under construction with a 2.7 billion peso government commitment — will reduce airport-to-zone travel time to under 20 minutes upon completion. The zone runs along 26 kilometres of Caribbean coastline facing Isla Mujeres, with a breakwater-protected beach that keeps the water calm and clear year-round.",
    },
    {
      q: 'What price range can I expect for condos in Costa Mujeres?',
      a: "Entry-level pre-sale condominiums in Costa Mujeres currently start at USD $248,000 for a three-bedroom unit through Rivana's Dhamar listing. Broader market pricing in the zone runs from approximately USD $200,000 for boutique one-bedroom units to USD $600,000+ for premium oceanfront residences and penthouses. The St. Regis branded residences occupy the top of the market at significantly higher price points. Pre-sale pricing in the zone is typically 20–35% below projected delivery value, which is the primary driver of investor interest at this stage of development.",
    },
    {
      q: 'What is the rental yield potential in Costa Mujeres?',
      a: 'Well-managed units in Costa Mujeres generate annual rental yields of 8–12% of purchase price through short-term vacation rentals. The zone attracts an upscale traveler profile — guests who specifically want the quieter, more exclusive alternative to the Hotel Zone — which supports competitive nightly rates. Ultra-luxury brand arrivals (St. Regis, Atelier, Excellence Coral) create an aspirational destination context that elevates perceived value across all properties in the corridor, including residential units listed on Airbnb and Vrbo.',
    },
    {
      q: 'Can foreigners buy property in Costa Mujeres?',
      a: "Yes, without restriction. Americans, Canadians, and all foreign nationals can legally purchase property in Costa Mujeres. Since the zone falls within Mexico's coastal Restricted Zone (within 50 kilometres of the coast), foreign buyers hold title through a fideicomiso — a government-regulated bank trust established since 1973 that grants full ownership rights including the right to sell, rent, renovate, and pass the property to heirs. Rivana manages the full closing process including fideicomiso setup, notary coordination, and due diligence.",
    },
    {
      q: "What is Dhamar and why is it Rivana's featured Costa Mujeres listing?",
      a: 'Dhamar is a pre-sale luxury residential development in Costa Mujeres offering three-bedroom oceanfront units starting at USD $248,000 — one of the most accessible entry points in the zone for a project at this quality level. The development features ocean views, a beach club, an infinity pool, and the amenity infrastructure consistent with the corridor\'s ultra-luxury positioning. As a pre-sale project, buyers enter at construction pricing with projected appreciation of 20–35% between signing and delivery. Rivana has full pricing, floor plan, and payment structure information available for qualified buyers — schedule an advisory call or request information directly through the page form.',
    },
    {
      q: "How does Costa Mujeres compare to Cancún's Hotel Zone as an investment?",
      a: 'The two zones serve different investment theses. The Hotel Zone offers the highest established rental demand, deepest property management infrastructure, and proximity to Cancún\'s hospital and commercial services — it is the lower-risk, more liquid option. Costa Mujeres offers higher appreciation potential, lower density, a superior beach environment, and entry pricing that has not yet caught up to the zone\'s actual quality level — it is the higher-upside option for investors with a five-to-seven-year horizon. Many Rivana clients hold properties in both zones. For a direct comparison, see our Mayakoba vs. Puerto Cancún analysis, or request a personalised Costa Mujeres vs. Hotel Zone comparison from our advisory team.',
      aNode: (
        <>
          The two zones serve different investment theses. The Hotel Zone offers the highest established rental demand, deepest property management infrastructure, and proximity to Cancún's hospital and commercial services — it is the lower-risk, more liquid option. Costa Mujeres offers higher appreciation potential, lower density, a superior beach environment, and entry pricing that has not yet caught up to the zone's actual quality level — it is the higher-upside option for investors with a five-to-seven-year horizon. Many Rivana clients hold properties in both zones. For a direct comparison, see our{' '}
          <Link to={localePath('/journal/mayakoba-vs-puerto-cancun')} className="text-primary hover:underline">Mayakoba vs. Puerto Cancún</Link>
          {' '}analysis, or request a personalised Costa Mujeres vs. Hotel Zone comparison from our advisory team.
        </>
      ),
    },
  ];
  const pcEnFaqs = [
    {
      q: 'What is the price range for condos and residences in Puerto Cancún?',
      a: 'Entry-level condominiums in Puerto Cancún start at approximately $400,000 USD for non-view units in standard buildings. Branded residences — SLS Ocean Beach, Thompson Private Residences, and Vellmari Grand Living — start at $730,000 USD for Thompson and $1.6M USD for SLS, reflecting the premium associated with branded hotel management and beachfront or marina positioning. Marina waterfront homes with private dock access reach $15M USD and above. The zone commands the highest sustained price-per-square-metre in the Cancún metropolitan area, with pricing in the marina sub-zone running approximately $3,800 USD per square metre for new branded developments.',
    },
    {
      q: "What makes Puerto Cancún different from Cancún's Hotel Zone?",
      a: 'The Hotel Zone is a beach-first tourist corridor — high rental demand, established infrastructure, but dense and commercial. Puerto Cancún is a master-planned residential district built around a private marina, championship golf course, gated residential neighbourhoods, international schools, and a lifestyle shopping centre with 220+ tenants. It is where full-time residents and long-term property owners choose to live, not where tourists pass through. The two zones serve different buyer profiles and investment theses — Puerto Cancún attracts buyers who prioritise residential quality of life alongside rental yield, while the Hotel Zone optimises for short-term rental income above other considerations. For a detailed comparison, read our Mayakoba vs. Puerto Cancún analysis.',
      aNode: (
        <>
          The Hotel Zone is a beach-first tourist corridor — high rental demand, established infrastructure, but dense and commercial. Puerto Cancún is a master-planned residential district built around a private marina, championship golf course, gated residential neighbourhoods, international schools, and a lifestyle shopping centre with 220+ tenants. It is where full-time residents and long-term property owners choose to live, not where tourists pass through. The two zones serve different buyer profiles and investment theses — Puerto Cancún attracts buyers who prioritise residential quality of life alongside rental yield, while the Hotel Zone optimises for short-term rental income above other considerations. For a detailed comparison, read our{' '}
          <Link to={localePath('/journal/mayakoba-vs-puerto-cancun')} className="text-primary hover:underline">Mayakoba vs. Puerto Cancún</Link>
          {' '}analysis.
        </>
      ),
    },
    {
      q: 'What rental yields do Puerto Cancún properties generate?',
      a: 'Branded residences in Puerto Cancún — particularly SLS Ocean Beach and Thompson Private Residences — generate annual rental yields of 8–12% of purchase price through short-term vacation rentals, consistent with the broader Cancún luxury market. The key advantage of branded developments is the hotel management infrastructure: the SLS and Thompson hotel operations manage rental bookings, housekeeping, and guest services professionally, which sustains higher occupancy and nightly rates than self-managed units. The July 2026 opening of the Grand Hyatt Cancún Beach Resort within the district is expected to elevate nightly rate benchmarks across all Puerto Cancún properties by increasing international visitor awareness of the zone.',
    },
    {
      q: 'Can foreigners buy property in Puerto Cancún?',
      a: "Yes, without restriction. Puerto Cancún falls within Mexico's coastal Restricted Zone, which means all foreign buyers — American, Canadian, European, or any nationality — hold title through a fideicomiso bank trust rather than direct ownership. The fideicomiso is a government-regulated structure in place since 1973 that grants full ownership rights including the right to sell, rent, renovate, and pass property to heirs. All three of Rivana's Puerto Cancún listings — SLS Ocean Beach, Thompson Residences, and Vellmari Grand Living — have established fideicomiso frameworks that our team manages from contract through closing.",
    },
    {
      q: 'What is Thompson Private Residences and why is it significant?',
      a: 'Thompson Private Residences Puerto Cancún is the first independent residential development in the world under the Thompson Hotels brand by Hyatt, recognised with the Paris Design Award for excellence in hospitality and residential design. Developed by AZUL Hospitality & Real Estate Group — a group with over 40 years of experience and more than 25 exclusive projects in Cancún and the Riviera Maya, and Hyatt\'s "Developer of the Year" in 2023 — it represents the translation of Thompson\'s lifestyle hospitality standard into a full-time residential product. At launch, over 50% of units were already placed, reflecting sustained international investor demand. Rivana has full pricing, floor plan, and payment structure details available for qualified buyers.',
    },
    {
      q: 'How does the Grand Hyatt opening affect Puerto Cancún property values?',
      a: 'Significantly and durably. A 500-room Grand Hyatt is a Category 6 flagship property that participates in the global World of Hyatt loyalty programme, bringing millions of high-income members into direct awareness of Puerto Cancún as a destination. Historically, the arrival of a grand-scale internationally branded resort in a residential district generates the following sequence: elevated international visitor volume, higher average daily rates across competing hotels and rental properties, increased demand for short-term residential rentals, and sustained upward pressure on purchase prices for properties within the district. Puerto Cancún is entering that sequence now. Buyers in SLS Ocean Beach, Thompson Residences, and Vellmari Grand Living are positioned to benefit directly.',
    },
  ];
  const mkEnFaqs = [
    {
      q: 'What exactly is Mayakoba and where is it located?',
      a: "Mayakoba is a 240-hectare master-planned eco-luxury resort estate on the Caribbean coast of the Riviera Maya, located approximately 45 minutes south of Cancún International Airport along Federal Highway 307, near Playa del Carmen. The complex houses four five-star hotel brands — Rosewood Mayakoba, Fairmont Mayakoba, Banyan Tree Mayakoba, and Alila Mayakoba — connected by a system of cenote-fed lagoon canals navigable by boat. The El Camaleón Golf Club, a PGA Tour championship course and host of the Mayakoba Golf Classic, runs through the estate. The Fairmont Mayakoba served as the official base camp for Uruguay's national team during the 2026 FIFA World Cup, following FIFA technical certification of the facilities.",
    },
    {
      q: 'What is The Reserve at Mayakoba and how is it different from other Riviera Maya developments?',
      a: 'The Reserve at Mayakoba is the only residential development located inside the Mayakoba estate perimeter — within the same gated complex, security infrastructure, and canal system as the four hotel brands. It is not an adjacent or nearby development; it is inside. Owners have access to Mayakoba\'s shared amenities including golf, beach club, and concierge services. The development comprises 144 four-bedroom villas of 660 square metres — larger floor plans than the compressed condo layouts typical of the Riviera Maya market — designed for buyers seeking a genuine primary or secondary residence at the top of the luxury tier. Supply is fixed and finite: when the 144 units are sold, no additional inventory can be created within the estate.',
    },
    {
      q: 'What is the price range and investment thesis for The Reserve at Mayakoba?',
      a: "The Reserve at Mayakoba is priced from USD $1.1M for a four-bedroom villa of 660 square metres. The investment thesis rests on three factors: fixed supply within an irreplaceable, internationally certified location; rental income potential supported by the Mayakoba brand ecosystem during non-occupancy periods; and 16% year-over-year appreciation that reflects the zone's sustained premium positioning. The World Cup 2026 has accelerated global awareness of Mayakoba as a destination, bringing institutional credibility from FIFA's base camp certification that belongs to the address permanently. Buyers with a five-to-ten-year horizon entering at current pre-sale pricing are positioned ahead of the full valuation that accompanies the estate's completed residential build-out.",
    },
    {
      q: 'Can Americans and Canadians buy property inside Mayakoba?',
      a: "Yes, without restriction. As with all coastal property in Mexico, The Reserve at Mayakoba is purchased through a fideicomiso — a government-regulated bank trust that grants foreign buyers full ownership rights including the right to sell, rent, renovate, and pass the property to heirs. The Mayakoba estate's legal and administrative infrastructure is well-established, with decades of international ownership experience across the hotel brands and their associated residential products. Rivana's advisory team manages the complete acquisition process including fideicomiso setup, notary coordination, and title due diligence.",
    },
    {
      q: 'What does the 2026 FIFA World Cup base camp selection mean for Mayakoba property values?',
      a: "The selection of Fairmont Mayakoba as the official base camp for Uruguay's national team during FIFA World Cup 2026 is a structural credential, not a temporary event. FIFA's base camp certification process evaluates security, privacy, medical services, nutrition infrastructure, and training facilities against the most demanding international standards. A property that passes that evaluation — and which hosted a national team during the most-watched global sporting event in history — carries a permanent marker of operational excellence. For Mayakoba real estate, this translates into sustained international awareness among the highest-income traveller demographic and long-term validation of the destination's premium positioning. The appreciation effect is durable because the credential is permanent.",
    },
    {
      q: 'How does Mayakoba compare to Puerto Cancún or Costa Mujeres as an investment?',
      a: "The three zones serve distinct investment profiles. Puerto Cancún offers the highest liquidity and the strongest rental management infrastructure in Cancún proper — the right choice for buyers who prioritise ease of management and urban access alongside investment returns. Costa Mujeres offers the highest short-term appreciation upside in the corridor, with pre-sale pricing that has not yet caught up to the zone's actual quality level. Mayakoba occupies a separate category entirely: it is the only option that places a buyer inside an internationally recognised, multi-brand resort estate with a finite and irreplaceable supply ceiling. For a direct zone-by-zone comparison, read our Mayakoba vs. Puerto Cancún analysis. For buyers unsure which profile fits, Rivana's advisory process begins with exactly this conversation.",
      aNode: (
        <>
          The three zones serve distinct investment profiles. Puerto Cancún offers the highest liquidity and the strongest rental management infrastructure in Cancún proper — the right choice for buyers who prioritise ease of management and urban access alongside investment returns. Costa Mujeres offers the highest short-term appreciation upside in the corridor, with pre-sale pricing that has not yet caught up to the zone's actual quality level. Mayakoba occupies a separate category entirely: it is the only option that places a buyer inside an internationally recognised, multi-brand resort estate with a finite and irreplaceable supply ceiling. For a direct zone-by-zone comparison, read our{' '}
          <Link to={localePath('/journal/mayakoba-vs-puerto-cancun')} className="text-primary hover:underline">Mayakoba vs. Puerto Cancún</Link>
          {' '}analysis. For buyers unsure which profile fits, Rivana's advisory process begins with exactly this conversation.
        </>
      ),
    },
  ];
  const currentFaqs = isZHEn ? zhEnFaqs : isCMEn ? cmEnFaqs : isPCEn ? pcEnFaqs : isMKEn ? mkEnFaqs : (faqs[language] || faqs.es);

  return (
    <div>
      <SEOHead title={seoTitle} description={seoDescription} path={currentPath} schema={schema} ogImage={destImages[destinationKey]} hreflangEs={esPath} hreflangEn={enPath} />
      

      {/* Breadcrumb */}
      <div className="pt-24 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <nav className="text-sm font-body text-muted-foreground flex items-center gap-2">
          <Link to={localePath('/')} className="hover:text-primary transition-colors">Rivana</Link>
          {config.breadcrumb[language].slice(1, -1).map((crumb, i) => (
            <span key={i} className="flex items-center gap-2"><span>/</span><span>{crumb}</span></span>
          ))}
          <span>/</span>
          <span className="text-foreground">{config.breadcrumb[language][config.breadcrumb[language].length - 1]}</span>
          {subPageConfig && (<><span>/</span><span className="text-foreground capitalize">{subPage}</span></>)}
        </nav>
      </div>

      {/* Hero */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <p className="eyebrow mb-4">{t('dest.destination')}</p>
              <h1 className="mb-4">{h1Text}</h1>
              <p className="font-display text-xl text-muted-foreground italic mb-8">{config.tagline[language]}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {config.stats.map((s) => (
                  <div key={s.label[language]}>
                    <span className="font-display text-3xl text-primary">{s.val}</span>
                    <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mt-1">{s.label[language]}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {config.chips[language].map((chip) => (
                  <span key={chip} className="text-xs font-body tracking-wider bg-primary/10 text-primary border border-primary/20 px-3 py-1.5">{chip}</span>
                ))}
              </div>
              {config.subPages.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  <Link to={localePath(config.basePath)} className={`text-xs font-body tracking-wider uppercase px-4 py-2 border transition-colors ${!subPage ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-primary/30'}`}>
                    {language === 'es' ? 'Todo' : 'All'}
                  </Link>
                  {config.subPages.map((sp) => (
                    <Link key={sp.segment} to={localePath(`${config.basePath}/${sp.segment}`)} className={`text-xs font-body tracking-wider uppercase px-4 py-2 border transition-colors ${subPage === sp.segment ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-primary/30'}`}>
                      {sp.segment === 'preventa' ? (language === 'es' ? 'Preventa' : 'Pre-Sale') : sp.segment.charAt(0).toUpperCase() + sp.segment.slice(1)}
                    </Link>
                  ))}
                  {(projectsByDestination[destinationKey] || []).some((p) => p.status === 'entrega-inmediata') && (
                    <button
                      type="button"
                      onClick={() => {
                        setStatusFilter('entrega-inmediata');
                        setTimeout(() => {
                          document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 50);
                      }}
                      className={`text-xs font-body tracking-wider uppercase px-4 py-2 border transition-colors ${statusFilter === 'entrega-inmediata' ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-primary/30'}`}
                    >
                      {language === 'es' ? 'Entrega Inmediata' : 'Move-In Ready'}
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {destFormSuccess ? (
                <div className="bg-card border border-border p-6 text-center">
                  <p className="text-primary font-body text-lg">✓ {language === 'es' ? '¡Mensaje enviado!' : 'Message sent!'}</p>
                  <p className="text-sm text-muted-foreground font-body mt-2">{language === 'es' ? 'Te contactaremos pronto.' : 'We\'ll contact you soon.'}</p>
                </div>
              ) : (
                <form className="bg-card border border-border p-6 space-y-4" onSubmit={handleDestFormSubmit}>
                  <h2 className="text-lg mb-2">{config.formTitle[language]}</h2>
                  <input name="name" placeholder={t('form.name')} required className="w-full bg-muted border border-border px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <input name="email" type="email" placeholder={t('form.email')} required className="w-full bg-muted border border-border px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <input name="phone" type="tel" placeholder={t('form.phone')} className="w-full bg-muted border border-border px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <Button variant="gold" className="w-full" type="submit" disabled={destFormLoading}>{destFormLoading ? '...' : t('dest.requestInfo')}</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro */}
      <section className="py-20 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <h2>{isZHEn
                ? "Why invest in Cancún's Hotel Zone?"
                : isCMEn
                  ? 'Why Costa Mujeres is the highest-conviction investment on the Caribbean coast'
                  : isPCEn
                    ? "Puerto Cancún: where Cancún's most discerning buyers have always lived — and why 2026 changes everything"
                    : isMKEn
                      ? 'Mayakoba: the address that cannot be replicated anywhere else in Mexico'
                      : subPageConfig
                  ? (language === 'es' ? `${subPageConfig.seo.h1.es}` : `${subPageConfig.seo.h1.en}`)
                  : (language === 'es' ? `¿Por qué ${config.name[language]}?` : `Why ${config.name[language]}?`)
              }</h2>
              {isZHEn ? (
                <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
                  <p>Cancún's Hotel Zone — known locally as the Zona Hotelera — is the most established luxury real estate corridor in the Mexican Caribbean, and one of the most liquid real estate markets in all of Latin America. A narrow 23-kilometre barrier island separating the Caribbean Sea from Laguna Nichupté, it concentrates more international hotel brands, direct-flight connectivity, and sustained rental demand than any comparable coastal market in Mexico.</p>
                  <p>For foreign buyers — American, Canadian, and European — the Hotel Zone has consistently delivered what matters most: proven appreciation, high occupancy rates, and an ownership experience that works entirely in English at every stage of the process.</p>
                  <h3 className="font-display text-2xl text-foreground mt-6">A market permanently changed by infrastructure</h3>
                  <p>In May 2026, the Nichupté Bridge opened after years of construction. The 11.2-kilometre crossing connects downtown Cancún directly to the southern Hotel Zone, reducing travel time from the city centre to under 10 minutes by car. For property owners, this means faster airport access (Cancún International Airport is 15 minutes from the southern zone), easier connectivity for tenants and guests, and structural upward pressure on property values in previously underserved parts of the strip.</p>
                  <p>The bridge is the single most significant infrastructure event in the Hotel Zone in two decades. Properties south of Km 12 — including The Residences at Grand Island Cancun and Bay View Grand at Grand Island — sit directly in the appreciation corridor it has created.</p>
                  <h3 className="font-display text-2xl text-foreground mt-6">What the numbers show</h3>
                  <p>The Hotel Zone draws over 12 million international tourists per year, making it the highest-traffic coastal destination in Mexico. Average short-term rental occupancy across well-managed condominiums runs between 65% and 78% annually, with peak rates climbing significantly from December through March and during events like the 2026 FIFA World Cup. The annual rental yield on a professionally managed Hotel Zone property ranges from 8% to 12% of purchase price, depending on location within the strip, finishes, and management quality.</p>
                  <p>Pre-sale appreciation — the difference between the price paid at contract and the appraised value at delivery — has run at 15% to 33% across Hotel Zone developments delivered in recent years. The Residences at Grand Island Cancun, Rivana's flagship listing in the zone, projects 33% appreciation between pre-sale entry and Q2 2027 delivery.</p>
                  <h3 className="font-display text-2xl text-foreground mt-6">The three sub-zones and what they mean for buyers</h3>
                  <p>The Hotel Zone is not a single homogeneous market. Pricing, rental dynamics, and buyer profiles vary meaningfully across its three sub-zones:</p>
                  <p><strong className="text-foreground">Punta Cancún (Km 1–9)</strong> is the commercial heart — closest to downtown, walkable to La Isla Shopping Village and the Forum by the Sea, and surrounded by the highest concentration of nightlife and restaurants in the region. Prices here run approximately $3,200 USD per square metre. Best for buyers prioritising rental income and proximity to services.</p>
                  <p><strong className="text-foreground">Central Zone (Km 10–16)</strong> is where the Hotel Zone's best beaches sit. The widest white-sand stretches, the major international resort properties, and the strongest short-term rental demand are concentrated here. Prices average $2,800 USD per square metre. Best for buyers who want the classic Hotel Zone experience: beachfront, resort amenities, and consistent occupancy.</p>
                  <p><strong className="text-foreground">Punta Nizuc (Km 17–23)</strong> is the southern residential end — quieter, less commercial, and adjacent to the Nizuc reef. The Nichupté Bridge has made this previously distant zone genuinely accessible. Prices average $2,500 USD per square metre. Best for buyers prioritising privacy and long-term appreciation over immediate rental yield.</p>
                  <h3 className="font-display text-2xl text-foreground mt-6">Foreign ownership: straightforward and legally protected</h3>
                  <p>All coastal property in Mexico's Hotel Zone falls within the Restricted Zone defined by Article 27 of the Mexican Constitution, which means foreign buyers — regardless of nationality — hold title through a fideicomiso bank trust rather than direct ownership. This is the standard legal structure for all international buyers in the area and grants full ownership rights: sell, rent, renovate, inherit. The fideicomiso is established at closing and managed by a Mexican bank of your choosing. Rivana coordinates the entire process.</p>
                </div>
              ) : isCMEn ? (
                <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
                  <p>Twenty minutes north of Cancún's Hotel Zone, where the coastline curves toward Isla Mujeres and the Caribbean opens into an unobstructed horizon, lies the most compelling real estate investment on Mexico's Caribbean coast in 2026. Costa Mujeres is not emerging anymore — it has emerged. What it has not yet done is fully reprice to reflect that reality. That window is closing.</p>
                  <p>The numbers tell the story directly: Costa Mujeres has delivered 22% year-over-year appreciation, the highest of any sub-market in the Cancún metropolitan area. Pre-sale developments in the zone are generating 8–12% annual rental yields once delivered and under professional management. And the factors driving these figures are structural — infrastructure, brand arrivals, and constrained supply — not speculative.</p>
                  <h3 className="font-display text-2xl text-foreground mt-6">The St. Regis effect</h3>
                  <p>In mid-2026, the St. Regis Costa Mujeres Resort opened its doors — the first St. Regis resort property in the Mexican Caribbean. With just 158 rooms and 80 branded residences, it is the antithesis of the mega-resort model that defined the Hotel Zone for decades. Butler service, ultra-low density, and the global prestige of the Marriott luxury portfolio have formally established Costa Mujeres as Mexico's premier ultra-luxury coastal corridor.</p>
                  <p>This matters for property investors in a specific way: branded luxury hotels are the most reliable proxy for sustained real estate appreciation that exists in coastal markets. When a St. Regis, Four Seasons, or Rosewood commits a flagship property to a destination, it sends a signal to institutional investors, developers, and high-net-worth buyers worldwide that the location is investable at the highest level. Costa Mujeres now carries that signal. Dhamar, Rivana's featured pre-sale listing in this zone, is positioned directly within this corridor.</p>
                  <h3 className="font-display text-2xl text-foreground mt-6">Infrastructure that changes the calculus</h3>
                  <p>The Quintana Roo state government has committed 2.7 billion pesos to the Cancún–Costa Mujeres Tourist Boulevard — a 25-kilometre direct highway connection that will reduce travel time from Cancún International Airport to the Costa Mujeres waterfront to under 20 minutes. Construction is underway. When complete, this infrastructure investment will eliminate the primary friction point that has historically kept Costa Mujeres pricing below its quality level: travel time from the airport and city services.</p>
                  <p>Combined with the May 2026 opening of the Nichupté Bridge — which has already decongested Cancún's main arterial and freed traffic flow northward — Costa Mujeres is in the middle of an infrastructure cycle that historically precedes the steepest appreciation in any coastal real estate market.</p>
                  <h3 className="font-display text-2xl text-foreground mt-6">What makes Costa Mujeres structurally different from the Hotel Zone</h3>
                  <p>The Hotel Zone is a 23-kilometre strip with no land left to develop. Every project that delivers there competes for the same finite supply of buildable beach-adjacent parcels. Costa Mujeres has room to grow — but not unlimited room. The zone is a master-planned luxury corridor with strict density controls that have deliberately kept it low-rise and low-density. The developments already committed — St. Regis, Atelier, Excellence Coral, Majestic Mirage, and the residential projects entering the market now — are filling a corridor that will be complete within four to five years.</p>
                  <p>For investors, this is the most important variable: you are buying pre-completion in a zone where the supply ceiling is visible and approaching. Buyers who enter before that ceiling is reached historically capture the most significant appreciation. Pre-sale entry into Dhamar puts buyers at today's pricing with delivery timed precisely to coincide with the zone's full establishment as an ultra-luxury destination.</p>
                  <h3 className="font-display text-2xl text-foreground mt-6">The 26 kilometres that define the investment thesis</h3>
                  <p>Costa Mujeres occupies 26 kilometres of Caribbean coastline with a breakwater-protected beach that keeps the water consistently calm and clear — a physical characteristic that the Hotel Zone, exposed to open-ocean swells, cannot replicate. This is not a marketing claim; it is a geographic fact that drives meaningfully higher satisfaction rates among short-term rental guests and repeat visitors, which in turn supports above-average occupancy and nightly rates for professionally managed units in the zone.</p>
                </div>
              ) : isPCEn ? (
                <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
                  <p>Puerto Cancún is not a resort destination. It is the city's most refined residential district — a master-planned community built around a private full-service marina, an 18-hole championship golf course, and a coastal lifestyle that is deliberately separated from the tourist corridor two kilometres to the south. It is where Cancún's most successful families live, where international executives relocate when they move to the city, and where the highest price-per-square-metre in the metropolitan area has been consistently sustained for over a decade.</p>
                  <p>That positioning is not changing in 2026. What is changing is the scale of institutional validation arriving in a single calendar year.</p>
                  <h3 className="font-display text-2xl text-foreground mt-6">The Grand Hyatt effect</h3>
                  <p>On July 1, 2026, the Grand Hyatt Cancún Beach Resort opens its doors in Puerto Cancún — a 500-room luxury property with 16 dining venues, nine swimming pools, an indoor-outdoor spa, 30,000 square feet of event space, and direct beach access. This is the grand-scale beachfront resort that Puerto Cancún has always had the infrastructure to support but never had. Its arrival fundamentally repositions the district for an international audience.</p>
                  <p>For property investors, what the Grand Hyatt represents is a formal signal from one of the world's largest hospitality corporations — Hyatt Hotels Corporation — that Puerto Cancún is a destination worthy of a flagship property. The Grand Hyatt anchors Puerto Cancún as the marina-and-golf district between the Hotel Zone and downtown, a property that will reshape how visitors think about Puerto Cancún as a base. Institutional hospitality investment of this scale consistently precedes the next leg of residential price appreciation in any coastal market. It brings international visitor awareness, raises the average nightly rate of the surrounding area, and validates the investment thesis for buyers who have been evaluating the zone.</p>
                  <h3 className="font-display text-2xl text-foreground mt-6">Three global brands. One district.</h3>
                  <p>Puerto Cancún now houses three internationally branded residential developments simultaneously: Thompson Private Residences — the first independent residential development in the world under the Thompson Hotels brand by Hyatt, recognised with the Paris Design Award for excellence in hospitality and residential design. SLS Ocean Beach, backed by Related Group — one of the United States' most respected luxury developers — with the SLS brand operating the hotel and residences programme from day one. And Vellmari Grand Living, a large-format marina-front residence with direct lagoon and marina access.</p>
                  <p>This brand concentration in a single district is rare in any market. In Cancún it is unprecedented. What it means for buyers: the rental management infrastructure, the international buyer demand, and the brand recognition that sustains premium nightly rates across all three developments reinforce each other. A buyer in any one of these projects benefits from the halo effect of the others.</p>
                  <h3 className="font-display text-2xl text-foreground mt-6">The physical advantages that cannot be replicated</h3>
                  <p>Puerto Cancún occupies the geographic sweet spot between the Hotel Zone and downtown Cancún — close enough to the tourist corridor for rental demand, far enough from it for residential quality of life. The private marina provides yacht berths, waterfront dining, and a walking promenade that functions as a genuine urban amenity. The community includes a full-service marina, golf course, resorts, condominiums, single-family homes, a state-of-the-art fitness and recreation centre, a protected natural reserve, and a lifestyle shopping mall with over 220 tenants including fine dining, art galleries and children's entertainment.</p>
                  <p>No other district in Cancún combines this range of amenities within a single, gated, master-planned footprint. The Hotel Zone has the beach but lacks the marina lifestyle and residential density controls. Costa Mujeres has the appreciation upside but is 20 minutes from the city. Puerto Cancún sits at the intersection of both — premium lifestyle infrastructure and genuine city access — which is why it has commanded the highest sustained price-per-square-metre in the market for over a decade and will continue to do so.</p>
                </div>
              ) : isMKEn ? (
                <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
                  <p>There are luxury real estate markets in Mexico where you buy a property in a beautiful location. And then there is Mayakoba — where you buy ownership within one of the most internationally recognised eco-luxury resort complexes on earth, surrounded by four five-star hotel brands that have already done the work of establishing the destination's reputation at the highest global level.</p>
                  <p>Mayakoba is a 240-hectare master-planned resort estate on the Caribbean coast of the Riviera Maya, approximately 45 minutes south of Cancún International Airport. Within its boundaries sit four of the most prestigious hotel brands operating in Latin America: Rosewood Mayakoba, Fairmont Mayakoba, Banyan Tree Mayakoba, and Andaz Mayakoba (relaunching in 2026 as Alila Mayakoba). A championship PGA Tour golf course — the El Camaleón Golf Club, host of the Mayakoba Golf Classic — runs through the property. An interconnected system of cenote-fed lagoon canals navigable by boat threads the estate together. White-sand beach stretches along the western boundary.</p>
                  <p>No other address in Mexico places a residential buyer inside a functioning complex of this brand calibre. This is the foundational argument for The Reserve at Mayakoba — Rivana's featured listing and the only residential product that places buyers fully inside the Mayakoba estate.</p>
                  <h3 className="font-display text-2xl text-foreground mt-6">The 2026 FIFA World Cup: Mayakoba on the global stage</h3>
                  <p>When FIFA confirmed the base camp assignments for the 2026 World Cup — the largest sporting event in human history, with 48 nations competing across the United States, Mexico, and Canada — Fairmont Mayakoba was selected as the official base camp for the Uruguayan national team. The Fairmont underwent a complete renovation of its football pitch to FIFA technical standards before the tournament, a process that FIFA's own technical authorities described as meeting the highest international benchmarks for elite training environments.</p>
                  <p>The implications for Mayakoba's real estate market are structural, not temporary. World Cup base camp selection requires FIFA technical certification across security, privacy, medical services, nutrition infrastructure, and training facilities. A property that passes that evaluation carries a permanent credential of operational excellence that no marketing campaign can replicate. Mayakoba is now, formally, a venue certified by FIFA as meeting the standards required by elite international sports delegations. That credential belongs to the address permanently — long after the tournament ends.</p>
                  <h3 className="font-display text-2xl text-foreground mt-6">What the resort brands mean for residential buyers</h3>
                  <p>When Rosewood, Fairmont, Banyan Tree, and Alila operate inside your residential complex, your property benefits from infrastructure that would cost several times the purchase price to replicate independently: 24-hour security with canine units and boat patrols throughout the canal system; housekeeping and concierge services operated at five-star hotel standard; beach club access managed by brands whose reputations depend on delivering it flawlessly; PGA-standard golf course maintenance; and a reservation and guest services ecosystem that extends your property's rental appeal to guests who specifically seek out Rosewood and Fairmont-level experiences.</p>
                  <p>For buyers who intend to generate rental income during periods of non-occupancy — which describes the majority of Rivana's Mayakoba clients — this infrastructure is the difference between a vacation rental that competes on price and one that commands a premium purely by virtue of the address.</p>
                  <h3 className="font-display text-2xl text-foreground mt-6">A fixed supply in an irreplaceable location</h3>
                  <p>Mayakoba was designed with strict density limits that cannot be changed. The resort estate is bounded by the Caribbean on the west, by Mexican federal coastal protection law on the beachfront, and by the existing hotel footprint on all other sides. There is no land within Mayakoba available for new development beyond what is already committed. The Reserve at Mayakoba — 144 villas across four-bedroom floor plans of 660 square metres — represents a fixed, finite supply of residential units inside this complex. When they are sold, the inventory is gone. There will not be a second Reserve at Mayakoba.</p>
                  <p>For investors who understand supply constraint as the primary driver of long-term appreciation, this is the clearest statement Mayakoba makes: the ceiling on new supply is visible, approaching, and structurally permanent.</p>
                </div>
              ) : (
                <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
                  {(subPageConfig?.intro?.[language] || config.intro[language]).map((p, i) => (<p key={i}>{p}</p>))}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sub-zones */}
      {config.subZones && config.subZones.length > 0 && (
        <section className="py-20 bg-card">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <p className="eyebrow mb-4">{t('dest.subZones')}</p>
              <h2 className="mb-12">{t('dest.zoneBreakdown')}</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config.subZones.map((zone, i) => (
                <ScrollReveal key={zone.name} delay={i * 100}>
                  <div className="bg-muted border border-border p-6">
                    <h3 className="text-xl mb-2">{zone.name}</h3>
                    <p className="text-sm text-primary font-body mb-1">{zone.price}</p>
                    <p className="text-sm text-muted-foreground font-body mb-4">{zone.vibe[language]}</p>
                    <div className="flex flex-wrap gap-2">
                      {zone.chips.map((c) => (<span key={c} className="text-xs font-body bg-primary/5 text-muted-foreground px-2 py-1 border border-border">{c}</span>))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2026 revaluation section — EN Costa Mujeres only */}
      {isCMEn && (
        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <h2>2026: the year Costa Mujeres became Mexico's ultra-luxury address</h2>
                <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
                  <p>The convergence of events in 2026 has done more to establish Costa Mujeres's global profile than the previous decade of development combined. In a single calendar year: the St. Regis opened its first Mexican Caribbean property here; the Cancún–Costa Mujeres Tourist Boulevard broke ground with a 2.7 billion peso government commitment; the Nichupté Bridge eliminated Cancún's chronic traffic bottleneck and improved northbound access to the zone; and the FIFA World Cup brought 30 days of sustained international media attention to the Cancún metropolitan area as a world-class destination.</p>
                  <p>Each of these events would independently move a real estate market. Together, they have created a revaluation moment — the kind that, in retrospect, investors identify as the inflection point after which prices never returned to prior levels.</p>
                  <p>
                    The pre-sale window for developments like{' '}
                    <Link to={localePath('/propiedad/dhamar-costa-mujeres')} className="text-primary hover:underline">Dhamar</Link>
                    {' '}exists precisely because construction timelines create a lag between a market's revaluation and its full pricing reflection in new inventory. Buyers who enter during that lag capture the spread. Rivana's advisory team can model this spread specifically for your investment profile and budget — schedule a call to see the numbers.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Nichupté Bridge effect — EN Hotel Zone only */}
      {isZHEn && (
        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <h2>The Nichupté Bridge effect: what it means for your investment</h2>
                <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
                  <p>The May 2026 opening of the Nichupté Bridge is not a minor convenience update — it is a structural change to the Hotel Zone's investment thesis. Before the bridge, the southern Hotel Zone (Km 12–23) was functionally isolated from downtown Cancún. Residents and guests faced 30–45 minute drives around the lagoon to reach the airport, hospitals, and commercial centres. That friction suppressed property values in the southern zone relative to its actual beach and view quality.</p>
                  <p>The bridge eliminates that friction. The Cancún International Airport is now 15 minutes from the Grand Island complex. Downtown healthcare, banking, and commercial infrastructure are under 10 minutes away. The price gap between the southern zone and the central strip has already begun to close, and analysts tracking the Quintana Roo market expect continued convergence over the next 18–24 months.</p>
                  <p>For buyers considering The Residences at Grand Island Cancun or Bay View Grand at Grand Island — both located in the Punta Nizuc zone — the timing is meaningful. Pre-sale pricing reflects the pre-bridge reality. Delivery pricing will reflect the new one.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 2026 Grand Hyatt section — EN Puerto Cancún only */}
      {isPCEn && (
        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <h2>2026: the year Puerto Cancún gained its beachfront anchor</h2>
                <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
                  <p>For years, the single gap in Puerto Cancún's otherwise complete luxury infrastructure was the absence of a grand-scale beachfront resort. Hotels existed in the district, but nothing that matched the scale and brand recognition of the Hotel Zone's flagship properties. The Grand Hyatt Cancún Beach Resort, opening July 2026, closes that gap permanently.</p>
                  <p>The 500-room Grand Hyatt Cancún Beach Resort features 28 rooms with private plunge pools, a spa, fitness centre, several swimming pools, beach club access, and 16 food and beverage options. It participates in the World of Hyatt loyalty programme, which brings the district into the consideration set of the global Hyatt member base — tens of millions of high-income travellers making booking decisions year-round.</p>
                  <p>
                    For residential owners in{' '}
                    <Link to={localePath('/propiedad/sls-ocean-beach-puerto-cancun')} className="text-primary hover:underline">SLS Ocean Beach</Link>
                    {', '}
                    <Link to={localePath('/propiedad/thompson-residences-puerto-cancun')} className="text-primary hover:underline">Thompson Residences</Link>
                    {', and '}
                    <Link to={localePath('/propiedad/vellmari-grand-living')} className="text-primary hover:underline">Vellmari Grand Living</Link>
                    {', this means elevated short-term rental demand, higher average nightly rates, and a more internationally recognised address for listing platforms. The rising tide of the Grand Hyatt lifts all three developments directly.'}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Reserve at Mayakoba editorial section — EN Mayakoba only */}
      {isMKEn && (
        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <h2>The Reserve at Mayakoba: what ownership inside the estate actually means</h2>
                <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
                  <p>
                    <Link to={localePath('/propiedad/the-reserve-at-mayakoba')} className="text-primary hover:underline">The Reserve at Mayakoba</Link>
                    {' is not an adjacent development that markets itself on proximity to the resort complex. It is a residential community built inside the Mayakoba estate — within the same gated perimeter, canal system, and security infrastructure as Rosewood, Fairmont, Banyan Tree, and Alila.'}
                  </p>
                  <p>Owners have access to the amenities and services of the Mayakoba community: the El Camaleón Golf Club, beach club facilities, the canal navigation network, and the resort concierge infrastructure. Four-bedroom villas of 660 square metres are designed for families and buyers who want space — genuinely liveable floor plans, not the compressed layouts typical of condo tower developments elsewhere in the Riviera Maya.</p>
                  <p>The investment profile suits buyers with a five-to-ten-year horizon who are acquiring a primary or secondary residence at the top of the Riviera Maya market, with rental income during non-occupancy periods and a capital appreciation thesis built on fixed supply in an internationally certified destination.</p>
                  <p>Pricing from USD $1.1M. Payment structure and delivery timeline available through Rivana advisory. Celia manages the Mayakoba relationship directly and can arrange a private tour of the estate and the showroom — something we strongly recommend before any decision of this scale. The physical experience of Mayakoba changes the conversation significantly.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Featured Projects — Redesigned cards matching Listings */}
      {(projectsByDestination[destinationKey]?.length ?? 0) > 0 && (
        <section id="featured-projects" className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <p className="eyebrow mb-4">{t('dest.featuredProjects')}</p>
              <h2 className="mb-12">{t('dest.newDevelopments')}</h2>
            </ScrollReveal>
            {(() => {
              const all = projectsByDestination[destinationKey] || [];
              const statuses = new Set(all.map((p) => p.status));
              if (statuses.size < 2) return null;
              const opts: { key: 'all' | 'preventa' | 'entrega-inmediata'; label: { es: string; en: string } }[] = [
                { key: 'all', label: { es: 'Todo', en: 'All' } },
                { key: 'preventa', label: { es: 'Preventa', en: 'Pre-Sale' } },
                { key: 'entrega-inmediata', label: { es: 'Entrega Inmediata', en: 'Immediate Delivery' } },
              ];
              return (
                <div className="flex flex-wrap gap-2 mb-8">
                  {opts.map((o) => (
                    <button
                      key={o.key}
                      type="button"
                      onClick={() => setStatusFilter(o.key)}
                      className={`text-xs font-body tracking-wider uppercase px-4 py-2 border transition-colors ${statusFilter === o.key ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-primary/30'}`}
                    >
                      {o.label[language]}
                    </button>
                  ))}
                </div>
              );
            })()}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3" style={{ gap: '2px', background: '#F8F6F2' }}>
              {(projectsByDestination[destinationKey] || [])
                .filter((p) => statusFilter === 'all' || p.status === statusFilter)
                .map((p, i) => (
                <ScrollReveal key={p.name} delay={i * 100}>
                  <Link
                    to={localePath(p.href ?? `/propiedad/${p.slug}`)}
                    className="group block bg-white transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:-translate-y-[2px]"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ paddingTop: '75%' }}>
                      <img src={p.image} alt={`${p.name} — ${p.zone}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                      <div className="absolute inset-0 bg-transparent group-hover:bg-[rgba(207,174,96,0.12)] transition-colors duration-300" />
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        <span className="text-[12px] tracking-[2px] uppercase font-body text-white px-[10px] py-[5px]" style={{ background: p.status === 'entrega-inmediata' ? '#CFAE60' : '#26547D' }}>
                          {p.status === 'entrega-inmediata'
                            ? (language === 'es' ? 'Entrega Inmediata' : 'Move-In Ready')
                            : (language === 'es' ? 'Preventa' : 'Pre-Sale')}
                        </span>
                        {p.yield && (
                          <span className="text-[12px] px-[10px] py-[5px] font-body flex items-center gap-1 text-white" style={{ background: '#CFAE60' }}>
                            <TrendingUpIcon className="w-3 h-3" /> {p.yield}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-5 pt-5 pb-4">
                       <p className="text-[12px] tracking-[3px] uppercase font-body font-[300] mb-1.5" style={{ color: '#CFAE60' }}>{p.zone}</p>
                       <h3 className="font-display text-[24px] font-[300] mb-2.5" style={{ color: '#1C1C1C' }}>{p.name}</h3>

                      {/* Specs */}
                      <div className="flex items-center gap-[14px] mb-3">
                         <span className="flex items-center gap-1 text-[14px] font-body" style={{ color: '#4B4B4B' }}>
                           <BedIcon className="w-3 h-3" /> {p.beds} {language === 'es' ? 'Rec.' : 'Beds'}
                         </span>
                         <span className="flex items-center gap-1 text-[14px] font-body" style={{ color: '#4B4B4B' }}>
                           <RulerIcon className="w-3 h-3" /> {p.area} m²
                        </span>
                      </div>

                      {/* Badges */}
                      {p.badges.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {p.badges.slice(0, 3).map(b => {
                            const cfg = badgeConfig[b];
                            if (!cfg) return null;
                            const Icon = cfg.icon;
                            return (
                              <span key={b} className="flex items-center gap-1 px-[10px] py-[4px] text-[12px] font-body font-[300]" style={{ background: 'rgba(207,174,96,0.08)', border: '1px solid rgba(207,174,96,0.22)', color: '#1C1C1C' }}>
                                <Icon className="w-[10px] h-[10px]" /> {cfg.label[language]}
                              </span>
                            );
                          })}
                          {p.badges.length > 3 && (
                            <span className="px-[10px] py-[4px] text-[12px] font-body font-[300]" style={{ color: '#4B4B4B', background: 'rgba(207,174,96,0.08)', border: '1px solid rgba(207,174,96,0.22)' }}>
                              +{p.badges.length - 3} {language === 'es' ? 'más' : 'more'}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Bottom */}
                      <div className="flex items-end justify-between pt-3 mt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                        <div>
                           <span className="block text-[11px] font-body font-[300] uppercase tracking-[2px]" style={{ color: '#4B4B4B' }}>{language === 'es' ? 'Desde' : 'From'}</span>
                           <span className="font-display text-[22px]" style={{ color: '#CFAE60' }}>
                             {p.price === 0 ? (language === 'es' ? 'Consultar' : 'Contact Us') : `${formatPrice(p.price)} USD`}
                           </span>
                         </div>
                         <span className="text-[13px] font-body font-[300] flex items-center gap-1 transition-colors group-hover:text-[#CFAE60]" style={{ color: '#4B4B4B' }}>
                           {language === 'es' ? 'Ver' : 'View'} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Market Data */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">{t('dest.marketIntelligence')}</p>
            <h2 className="mb-12">{t('dest.investmentData')}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: config.stats[2]?.val || '18%', label: language === 'es' ? 'Plusvalía Anual' : 'YoY Appreciation' },
              { val: '8-12%', label: language === 'es' ? 'Rendimiento Renta' : 'Rental Yield' },
              { val: '12M+', label: language === 'es' ? 'Turistas/Año' : 'Tourists/Year' },
              { val: '2026', label: language === 'es' ? 'Impulso Mundial' : 'World Cup Boost' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 100}>
                <div className="bg-muted border border-border p-6 text-center">
                  <div className="flex justify-center mb-3"><TrendingUpIcon className="w-6 h-6 text-primary" /></div>
                  <span className="font-display text-3xl text-primary">{s.val}</span>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mt-2">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">{t('dest.commonQuestions')}</p>
            <h2 className="mb-12">{isZHEn ? 'Common questions about buying in the Hotel Zone' : isCMEn ? 'Common questions about investing in Costa Mujeres' : isPCEn ? 'Common questions about buying in Puerto Cancún' : isMKEn ? 'Common questions about buying in Mayakoba' : t('dest.faq')}</h2>
          </ScrollReveal>
          <div className="max-w-3xl space-y-3">
            {currentFaqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="border border-border">
                  <button className="w-full text-left px-6 py-4 flex items-center justify-between" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="font-body text-base font-400 pr-4">{faq.q}</span>
                    <span className={`text-primary transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    </span>
                  </button>
                  {openFaq === i && (<div className="px-6 pb-4 text-sm text-muted-foreground font-body animate-fade-in">{(faq as { aNode?: React.ReactNode }).aNode ?? faq.a}</div>)}
                </div>
              </ScrollReveal>
            ))}
          </div>
          {isZHEn && (
            <div className="max-w-3xl mt-12 text-muted-foreground font-body text-base leading-relaxed">
              <p>The Hotel Zone is Rivana's most active market. Our team has closed transactions in all three sub-zones and across every price point in the current portfolio. If you are evaluating The Residences at Grand Island Cancun, Bay View Grand, or Kabeek Marina — or want a comparative analysis across all three — schedule a call with Celia, our Hotel Zone specialist. She will walk you through current pricing, floor plan availability, payment structures, and honest context on what each development delivers for your specific investment profile.</p>
            </div>
          )}
          {isCMEn && (
            <div className="max-w-3xl mt-12 text-muted-foreground font-body text-base leading-relaxed">
              <p>Costa Mujeres is the zone where Rivana has the strongest conviction heading into the second half of 2026. The infrastructure cycle, the brand arrivals, and the pre-sale pricing window at Dhamar create a combination that does not frequently align in a single market at a single moment. If you are evaluating a first purchase in the Cancún corridor or adding to an existing portfolio, this is the conversation we most want to have. Celia leads our Costa Mujeres advisory and has closed transactions across multiple sub-zones in the corridor. Schedule a call or request pricing directly — floor plans and payment structures are available for immediate qualified review.</p>
            </div>
          )}
          {isPCEn && (
            <div className="max-w-3xl mt-12 text-muted-foreground font-body text-base leading-relaxed">
              <p>Puerto Cancún is Rivana's highest-average-ticket market, and it is the zone we know most thoroughly. SLS Ocean Beach, Thompson Private Residences, and Vellmari Grand Living each occupy a distinct position within the district — different buyer profiles, different investment structures, different rental yield mechanisms. Understanding which one aligns with your objectives requires a detailed conversation, not a brochure. Celia leads our Puerto Cancún advisory and has guided buyers through all three developments. Schedule a call or request pricing directly — floor plans, payment structures, and comparative analysis across the three listings are available immediately for qualified buyers.</p>
            </div>
          )}
          {isMKEn && (
            <div className="max-w-3xl mt-12 text-muted-foreground font-body text-base leading-relaxed">
              <p>Mayakoba is the zone where Rivana has the fewest conversations and the most conviction. The Reserve at Mayakoba is not a development that benefits from high-volume marketing — it is a development where the right buyer, properly briefed on what ownership inside the estate actually delivers, makes the decision themselves. Celia has managed the Mayakoba client relationship since Rivana's founding and knows the property, the developer, and the estate's operations in detail. If you are evaluating The Reserve at Mayakoba seriously, the right next step is a private tour, not a brochure. We will arrange it.</p>
            </div>
          )}
        </div>
      </section>

      {/* Related Article — Mayakoba vs Puerto Cancún */}
      {(destinationKey === 'mayakoba' || destinationKey === 'puerto-cancun') && !subPage && (
        <section className="py-12">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <div className="border border-border p-6 flex items-center justify-between gap-4 bg-card hover:border-primary/30 transition-colors">
                <div>
                  <p className="eyebrow text-xs mb-1">{language === 'es' ? 'Artículo Relacionado' : 'Related Article'}</p>
                  <p className="font-display text-lg">
                    {language === 'es'
                      ? 'Mayakoba vs Puerto Cancún: Comparativa completa'
                      : 'Mayakoba vs Puerto Cancún: Full comparison'}
                  </p>
                </div>
                <Link to={localePath('/journal/mayakoba-vs-puerto-cancun')} className="text-primary font-body text-sm whitespace-nowrap hover:underline">
                  {language === 'es' ? 'Leer →' : 'Read →'}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Related Destinations */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">{t('dest.exploreMore')}</p>
            <h2 className="mb-12">{t('dest.relatedDestinations')}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedDests.slice(0, 3).map((d, i) => (
              <ScrollReveal key={d!.key} delay={i * 100}>
                <Link to={localePath(d!.basePath)} className="group block aspect-[16/10] relative overflow-hidden">
                  <img src={destImages[d!.key] || destZonaHotelera} alt={d!.name[language]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_0%/0.6)] to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl mb-1 text-white">{d!.name[language]}</h3>
                    <span className="text-sm text-white/70 font-body">{language === 'es' ? 'Desde' : 'From'} {d!.stats[1]?.val}</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Advisor Bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-[150] transition-transform duration-500 ${showAdvisor ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-card border-t border-border shadow-2xl">
          <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
            <div className="hidden md:flex items-center gap-4">
              <img src={advisorPhoto} alt="Celia Candela" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-body font-400">Celia Candela</p>
                <p className="text-xs text-muted-foreground font-body">{language === 'es' ? 'Especialista en' : 'Specialist —'} {config.name[language]}</p>
              </div>
              <div className="w-px h-8 bg-border mx-2" />
              <div className="flex items-center gap-2">
                {([
                  { icon: <VideoIcon className="w-4 h-4" />, label: language === 'es' ? 'Videollamada' : 'Virtual Call', type: 'videollamada' as ContactType },
                  { icon: <PhoneIcon className="w-4 h-4" />, label: language === 'es' ? 'Agendar llamada' : 'Schedule Call', type: 'llamada' as ContactType },
                  { icon: <CalendarIcon className="w-4 h-4" />, label: language === 'es' ? 'Visita' : 'Visit', type: 'recorrido' as ContactType },
                  { icon: <BriefcaseIcon className="w-4 h-4" />, label: language === 'es' ? 'Asesoría' : 'Advisory', type: 'asesoria' as ContactType },
                ]).map((a) => (
                  <button
                    key={a.label}
                    onClick={() => openModal(a.type)}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors px-2 py-1"
                  >
                    {a.icon} <span className="hidden lg:inline">{a.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <Button variant="gold" size="sm" onClick={() => openModal('videollamada')}>
                {language === 'es' ? 'Recibir Precios' : 'Get Pricing & Floor Plans'}
              </Button>
              <Button variant="whatsapp" size="sm" asChild>
                <a href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria" target="_blank" rel="noopener noreferrer">
                  <ChatIcon className="w-4 h-4" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
