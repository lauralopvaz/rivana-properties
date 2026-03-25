import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import reserveHero from '@/assets/reserve-mayakoba-hero.jpg';
import vellmariHero from '@/assets/vellmari-hero.jpg';
import villageBluHero from '@/assets/village-blu-hero.jpg';

import destZonaHotelera from '@/assets/dest-zona-hotelera.jpg';
import destPuertoCancun from '@/assets/dest-puerto-cancun.jpg';
import destCostaMujeres from '@/assets/dest-costa-mujeres.jpg';
import destMayakoba from '@/assets/dest-mayakoba.jpg';
import destPuertoMorelos from '@/assets/dest-puerto-morelos.jpg';
import destCancunCentro from '@/assets/dest-cancun-centro.jpg';
import destTulum from '@/assets/dest-tulum.jpg';

const destImages: Record<string, string> = {
  'zona-hotelera': destZonaHotelera,
  'puerto-cancun': destPuertoCancun,
  'costa-mujeres': destCostaMujeres,
  'mayakoba': destMayakoba,
  'puerto-morelos': destPuertoMorelos,
  'cancun-centro': destCancunCentro,
  'tulum': destTulum,
  'playa-del-carmen': destMayakoba,
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
}

const projectsByDestination: Record<string, DestProject[]> = {
  'zona-hotelera': [
    { name: 'Mondrian Residences', zone: 'Zona Hotelera', status: 'preventa', yield: '33%', beds: 3, area: 165, price: 514000, badges: ['vista-mar', 'club-privado', 'beach-club', 'wellness'], image: propMondrian, slug: 'mondrian-residences-grand-island-cancun' },
  ],
  'puerto-cancun': [
    { name: 'SLS Ocean Beach', zone: 'Puerto Cancún', status: 'preventa', beds: 3, area: 356, price: 1600000, badges: ['frente-mar', 'club-privado', 'golf', 'wellness', 'beach-club'], image: slsVistaPrincipal, slug: 'sls-ocean-beach-puerto-cancun' },
    { name: 'Vellmari Grand Living', zone: 'Puerto Cancún', status: 'preventa', beds: 5, area: 714, price: 845714, badges: ['vista-marina', 'golf', 'wellness', 'pet-friendly'], image: vellmariHero, slug: 'vellmari-grand-living' },
  ],
  'costa-mujeres': [
    { name: 'Dhamar', zone: 'Costa Mujeres', status: 'preventa', beds: 3, area: 178, price: 248000, badges: ['vista-mar', 'beach-club', 'alberca-infinity', 'wellness'], image: dhamarPrincipal, slug: 'dhamar-costa-mujeres' },
  ],
  'mayakoba': [
    { name: 'The Reserve at Mayakoba', zone: 'Mayakoba', status: 'preventa', beds: 4, area: 660, price: 1141000, badges: ['golf', 'wellness', 'comunidad-cerrada'], image: reserveHero, slug: 'the-reserve-at-mayakoba' },
  ],
  'playa-del-carmen': [
    { name: 'The Reserve at Mayakoba', zone: 'Mayakoba', status: 'preventa', beds: 4, area: 660, price: 1141000, badges: ['golf', 'wellness', 'comunidad-cerrada'], image: reserveHero, slug: 'the-reserve-at-mayakoba' },
  ],
  'puerto-morelos': [
    { name: 'Village Blu Beach Apartments', zone: 'Puerto Morelos', status: 'preventa', yield: '8.8%', beds: 1, area: 73, price: 273000, badges: ['frente-mar', 'alberca-infinity', 'beach-club'], image: villageBluHero, slug: 'village-blu-beach-apartments' },
  ],
  'cancun-centro': [],
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
  const seoTitle = subPageConfig ? subPageConfig.seo.title[language] : config.seo.title[language];
  const seoDescription = subPageConfig ? subPageConfig.seo.description[language] : config.seo.description[language];
  const h1Text = subPageConfig ? subPageConfig.seo.h1[language] : config.seo.h1[language];
  const currentPath = subPage ? `${config.basePath}/${subPage}` : config.basePath;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: h1Text,
    description: seoDescription,
    url: `https://rivanaproperties.com${currentPath}`,
    areaServed: { '@type': 'Place', name: config.name[language] },
    broker: { '@type': 'RealEstateAgent', name: 'Rivana Properties', url: 'https://rivanaproperties.com' },
  };

  const relatedDests = config.relatedDestinations.map((key) => getDestination(key)).filter(Boolean);
  const currentFaqs = faqs[language] || faqs.es;

  return (
    <div>
      <SEOHead title={seoTitle} description={seoDescription} path={currentPath} schema={schema} ogImage={destImages[destinationKey]} />
      

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
              <h2>{language === 'es' ? `¿Por qué ${config.name[language]}?` : `Why ${config.name[language]}?`}</h2>
              <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
                {config.intro[language].map((p, i) => (<p key={i}>{p}</p>))}
              </div>
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

      {/* Featured Projects — Redesigned cards matching Listings */}
      {(projectsByDestination[destinationKey]?.length ?? 0) > 0 && (
        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <p className="eyebrow mb-4">{t('dest.featuredProjects')}</p>
              <h2 className="mb-12">{t('dest.newDevelopments')}</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3" style={{ gap: '2px', background: '#F8F6F2' }}>
              {(projectsByDestination[destinationKey] || []).map((p, i) => (
                <ScrollReveal key={p.name} delay={i * 100}>
                  <Link
                    to={localePath(`/propiedad/${p.slug}`)}
                    className="group block bg-white transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:-translate-y-[2px]"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ paddingTop: '75%' }}>
                      <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                      <div className="absolute inset-0 bg-transparent group-hover:bg-[rgba(207,174,96,0.12)] transition-colors duration-300" />
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        <span className="text-[12px] tracking-[2px] uppercase font-body text-white px-[10px] py-[5px]" style={{ background: '#26547D' }}>
                          {language === 'es' ? 'Preventa' : 'Pre-Sale'}
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
                           <span className="font-display text-[22px]" style={{ color: '#CFAE60' }}>{formatPrice(p.price)} USD</span>
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
            <h2 className="mb-12">{t('dest.faq')}</h2>
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
                  {openFaq === i && (<div className="px-6 pb-4 text-sm text-muted-foreground font-body animate-fade-in">{faq.a}</div>)}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
