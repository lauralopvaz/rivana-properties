import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { BuyerDots } from '@/components/BuyerDots';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { getDestination, destinations } from '@/data/destinations';
import { ArrowRightIcon, TrendingUpIcon, BedIcon, RulerIcon, PhoneIcon, VideoIcon, CalendarIcon, BriefcaseIcon, ChatIcon } from '@/components/icons';

interface DestinationPageProps {
  destinationKey: string;
  subPage?: string;
}

const projects = [
  { name: 'Oceana Residences', zone: 'Playa Mujeres', badge: { es: 'Pre-Venta', en: 'Pre-Sale' }, units: 120, price: '$195K', beds: '1-3', area: '65-185', profiles: ['maria', 'investor'], featured: true },
  { name: 'Azure Tower', zone: 'Costa Mujeres Centro', badge: { es: 'Nuevo Lanzamiento', en: 'New Launch' }, units: 80, price: '$245K', beds: '2-4', area: '95-220', profiles: ['pedro', 'investor'] },
  { name: 'Mar Sereno', zone: 'Punta Sam', badge: { es: 'Pre-Venta', en: 'Pre-Sale' }, units: 45, price: '$320K', beds: '2-3', area: '110-175', profiles: ['carlos', 'maria'] },
];

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

const buyerProfiles = {
  es: [
    { name: 'María', color: 'border-l-profile-maria', desc: '~45 años, profesional buscando privacidad y retorno. Compradora independiente con gusto refinado.', fit: 'Studios y condos 1BR frente al mar' },
    { name: 'Pedro & Lucía', color: 'border-l-profile-pedro', desc: '~38-42, familia joven priorizando seguridad, escuelas y construcción de patrimonio.', fit: 'Familiares 3BR con amenidades' },
    { name: 'Carlos', color: 'border-l-profile-carlos', desc: '~65, ejecutivo retirado buscando estilo de vida, comunidad y elegancia tropical.', fit: 'Penthouses y unidades de marina' },
    { name: 'Inversionista Extranjero', color: 'border-l-profile-investor', desc: '35-60, pasaporte US/EU/CA. Enfoque puro en ROI, diversificación de portafolio.', fit: 'Pre-venta 1-2BR para renta' },
  ],
  en: [
    { name: 'María', color: 'border-l-profile-maria', desc: '~45, professional seeking privacy and returns. Solo buyer with refined taste.', fit: 'Oceanfront studios & 1BR condos' },
    { name: 'Pedro & Lucía', color: 'border-l-profile-pedro', desc: '~38-42, young family prioritizing security, schools, and legacy building.', fit: 'Family 3BR with amenities' },
    { name: 'Carlos', color: 'border-l-profile-carlos', desc: '~65, retired executive seeking lifestyle, community, and tropical elegance.', fit: 'Penthouses & marina units' },
    { name: 'Foreign Investor', color: 'border-l-profile-investor', desc: '35-60, US/EU/CA passport. Pure ROI focus, portfolio diversification.', fit: 'Pre-sale 1-2BR for rental' },
  ],
};

const DestinationPage = ({ destinationKey, subPage }: DestinationPageProps) => {
  const [showAdvisor, setShowAdvisor] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { language, localePath, t } = useLanguage();

  const config = getDestination(destinationKey);

  useEffect(() => {
    const onScroll = () => setShowAdvisor(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll to top on destination change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [destinationKey, subPage]);

  if (!config) return <div className="pt-32 text-center"><h1>Destination not found</h1></div>;

  // Determine SEO based on subPage or main page
  const subPageConfig = subPage ? config.subPages.find((sp) => sp.segment === subPage) : undefined;
  const seoTitle = subPageConfig ? subPageConfig.seo.title[language] : config.seo.title[language];
  const seoDescription = subPageConfig ? subPageConfig.seo.description[language] : config.seo.description[language];
  const h1Text = subPageConfig ? subPageConfig.seo.h1[language] : config.seo.h1[language];
  const currentPath = subPage ? `${config.basePath}/${subPage}` : config.basePath;

  // Schema markup
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: h1Text,
    description: seoDescription,
    url: `https://rivanaproperties.com${currentPath}`,
    areaServed: {
      '@type': 'Place',
      name: config.name[language],
    },
    broker: {
      '@type': 'RealEstateAgent',
      name: 'Rivana Properties',
      url: 'https://rivanaproperties.com',
    },
  };

  const relatedDests = config.relatedDestinations
    .map((key) => getDestination(key))
    .filter(Boolean);

  const currentFaqs = faqs[language] || faqs.es;
  const currentBuyers = buyerProfiles[language] || buyerProfiles.es;

  return (
    <div>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        path={currentPath}
        schema={schema}
      />

      {/* Breadcrumb */}
      <div className="pt-24 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <nav className="text-sm font-body text-muted-foreground flex items-center gap-2">
          <Link to={localePath('/')} className="hover:text-primary transition-colors">Rivana</Link>
          {config.breadcrumb[language].slice(1, -1).map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <span>/</span>
              <span>{crumb}</span>
            </span>
          ))}
          <span>/</span>
          <span className="text-foreground">{config.breadcrumb[language][config.breadcrumb[language].length - 1]}</span>
          {subPageConfig && (
            <>
              <span>/</span>
              <span className="text-foreground capitalize">{subPage}</span>
            </>
          )}
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

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {config.stats.map((s) => (
                  <div key={s.label[language]}>
                    <span className="font-display text-3xl text-primary">{s.val}</span>
                    <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mt-1">{s.label[language]}</p>
                  </div>
                ))}
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {config.chips[language].map((chip) => (
                  <span key={chip} className="text-xs font-body tracking-wider bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-sm">
                    {chip}
                  </span>
                ))}
              </div>

              {/* Sub-page links */}
              {config.subPages.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  <Link
                    to={localePath(config.basePath)}
                    className={`text-xs font-body tracking-wider uppercase px-4 py-2 rounded-sm border transition-colors ${
                      !subPage ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-primary/30'
                    }`}
                  >
                    {language === 'es' ? 'Todo' : 'All'}
                  </Link>
                  {config.subPages.map((sp) => (
                    <Link
                      key={sp.segment}
                      to={localePath(`${config.basePath}/${sp.segment}`)}
                      className={`text-xs font-body tracking-wider uppercase px-4 py-2 rounded-sm border transition-colors ${
                        subPage === sp.segment ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-primary/30'
                      }`}
                    >
                      {sp.segment === 'preventa' ? (language === 'es' ? 'Preventa' : 'Pre-Sale') : sp.segment.charAt(0).toUpperCase() + sp.segment.slice(1)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <form className="bg-card border border-border rounded-sm p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <h4 className="text-lg mb-2">{config.formTitle[language]}</h4>
                <input placeholder={t('form.name')} className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <input type="email" placeholder={t('form.email')} className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <input type="tel" placeholder={t('form.phone')} className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <Button variant="gold" className="w-full" type="submit">{t('dest.requestInfo')}</Button>
              </form>
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
                {config.intro[language].map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
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
                  <div className="bg-muted border border-border rounded-sm p-6">
                    <h3 className="text-xl mb-2">{zone.name}</h3>
                    <p className="text-sm text-primary font-body mb-1">{zone.price}</p>
                    <p className="text-sm text-muted-foreground font-body mb-4">{zone.vibe[language]}</p>
                    <div className="flex flex-wrap gap-2">
                      {zone.chips.map((c) => (
                        <span key={c} className="text-xs font-body bg-primary/5 text-muted-foreground px-2 py-1 rounded-sm border border-border">{c}</span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">{t('dest.featuredProjects')}</p>
            <h2 className="mb-12">{t('dest.newDevelopments')}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 100} className={p.featured ? 'lg:row-span-2' : ''}>
                <Link to={localePath('/property/oceana-residences')} className="group block bg-card border border-border rounded-sm overflow-hidden h-full">
                  <div className={`gradient-placeholder group-hover:scale-105 transition-transform duration-700 ${p.featured ? 'aspect-[4/5]' : 'aspect-[16/10]'}`}>
                    <div className="p-4">
                      <span className="text-xs font-body tracking-wider uppercase bg-primary/20 text-primary px-3 py-1 rounded-sm">
                        {p.badge[language]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-muted-foreground font-body">{p.zone}</span>
                    <h3 className="text-lg mt-1 mb-3">{p.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-body mb-3">
                      <span className="flex items-center gap-1"><BedIcon className="w-3.5 h-3.5" /> {p.beds}</span>
                      <span className="flex items-center gap-1"><RulerIcon className="w-3.5 h-3.5" /> {p.area} m²</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl text-primary">{language === 'es' ? 'Desde' : 'From'} {p.price}</span>
                      <BuyerDots profiles={p.profiles} />
                    </div>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm text-primary font-body">
                      {t('dest.viewProject')} <ArrowRightIcon className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">{t('dest.marketIntelligence')}</p>
            <h2 className="mb-12">{t('dest.investmentData')}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUpIcon className="w-6 h-6 text-primary" />, val: config.stats[2]?.val || '18%', label: language === 'es' ? 'Plusvalía Anual' : 'YoY Appreciation' },
              { icon: <TrendingUpIcon className="w-6 h-6 text-primary" />, val: '8-12%', label: language === 'es' ? 'Rendimiento Renta' : 'Rental Yield' },
              { icon: <TrendingUpIcon className="w-6 h-6 text-primary" />, val: '12M+', label: language === 'es' ? 'Turistas/Año' : 'Tourists/Year' },
              { icon: <TrendingUpIcon className="w-6 h-6 text-primary" />, val: '2026', label: language === 'es' ? 'Impulso Mundial' : 'World Cup Boost' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 100}>
                <div className="bg-muted border border-border rounded-sm p-6 text-center">
                  <div className="flex justify-center mb-3">{s.icon}</div>
                  <span className="font-display text-3xl text-primary">{s.val}</span>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mt-2">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Profiles */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">{t('dest.whoBuysHere')}</p>
            <h2 className="mb-12">{t('dest.buyerProfiles')}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentBuyers.map((b, i) => (
              <ScrollReveal key={b.name} delay={i * 100}>
                <div className={`bg-card border border-border ${b.color} border-l-4 rounded-sm p-6`}>
                  <h4 className="text-lg mb-2">{b.name}</h4>
                  <p className="text-sm text-muted-foreground font-body mb-4">{b.desc}</p>
                  <p className="text-xs text-primary font-body uppercase tracking-wider">{language === 'es' ? 'Ideal' : 'Best fit'}: {b.fit}</p>
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
                <div className="border border-border rounded-sm">
                  <button
                    className="w-full text-left px-6 py-4 flex items-center justify-between"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-body text-base font-400 pr-4">{faq.q}</span>
                    <span className={`text-primary transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-sm text-muted-foreground font-body animate-fade-in">{faq.a}</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Destinations — Internal linking (P1 destinations get more links) */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">{t('dest.exploreMore')}</p>
            <h2 className="mb-12">{t('dest.relatedDestinations')}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedDests.slice(0, 3).map((d, i) => (
              <ScrollReveal key={d!.key} delay={i * 100}>
                <Link to={localePath(d!.basePath)} className="group block aspect-[16/10] gradient-placeholder-alt rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_0%/0.6)] to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl mb-1">{d!.name[language]}</h3>
                    <span className="text-sm text-muted-foreground font-body">{language === 'es' ? 'Desde' : 'From'} {d!.stats[1]?.val}</span>
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
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display text-primary text-lg">A</div>
              <div>
                <p className="text-sm font-body font-400">Alejandra Reyes</p>
                <p className="text-xs text-muted-foreground font-body">{config.name[language]} Specialist</p>
              </div>
              <div className="w-px h-8 bg-border mx-2" />
              <div className="flex items-center gap-2">
                {[
                  { icon: <VideoIcon className="w-4 h-4" />, label: language === 'es' ? 'Videollamada' : 'Virtual Call' },
                  { icon: <PhoneIcon className="w-4 h-4" />, label: language === 'es' ? 'Agendar' : 'Schedule' },
                  { icon: <CalendarIcon className="w-4 h-4" />, label: language === 'es' ? 'Visita' : 'Visit' },
                  { icon: <BriefcaseIcon className="w-4 h-4" />, label: language === 'es' ? 'Asesoría' : 'Advisory' },
                ].map((a) => (
                  <button key={a.label} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors px-2 py-1">
                    {a.icon} <span className="hidden lg:inline">{a.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <Button variant="gold" size="sm">{language === 'es' ? 'Recibir Precios' : 'Get Pricing & Floor Plans'}</Button>
              <Button variant="whatsapp" size="sm" asChild>
                <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer">
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
