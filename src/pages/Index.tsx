import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { waCta } from '@/lib/whatsapp-cta';
import { destinations } from '@/data/destinations';
import { journalArticles } from '@/data/journal-articles';
import { ArrowRightIcon } from '@/components/icons';
import { ContactSection } from '@/components/home/ContactSection';
import { AllySection } from '@/components/home/AllySection';
import { MondrianSpotlight } from '@/components/home/MondrianSpotlight';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { PersonalSearchSection } from '@/components/home/PersonalSearchSection';
import { ImmediateDeliveryCard } from '@/components/ImmediateDeliveryCard';
import { immediateDeliveryUnits } from '@/data/immediate-delivery';

import homeHero from '@/assets/home-hero-sls.jpg';
import presaleHero from '@/assets/presale-hero.jpg';

// Destination images — real property photography
import destZonaHotelera from '@/assets/bvg-aerea-complejo-laguna.jpg';
import destPuertoCancun from '@/assets/sls-marina.jpg';
import destCostaMujeres from '@/assets/dhamar-beachclub1.jpg';
import destMayakoba from '@/assets/reserve-mayakoba-casa-club-laguna.jpg';
import destPuertoMorelos from '@/assets/sole-blu-fachada-exterior-dia.jpg';
import destCancunCentro from '@/assets/cuore-cumbres-hero.jpg';
import destTulum from '@/assets/dest-tulum.jpg';
import destPlayaDelCarmen from '@/assets/village-blu-hero.jpg';

const destinationImages: Record<string, string> = {
  'zona-hotelera': destZonaHotelera,
  'puerto-cancun': destPuertoCancun,
  'costa-mujeres': destCostaMujeres,
  'mayakoba': destMayakoba,
  'puerto-morelos': destPuertoMorelos,
  'cancun-centro': destCancunCentro,
  'tulum': destTulum,
  'playa-del-carmen': destPlayaDelCarmen,
};

const Home = () => {
  const { language, t, localePath } = useLanguage();


  const sortedDestinations = [...destinations].sort((a, b) => a.priority - b.priority);

  const seoTitle = language === 'es'
    ? 'Propiedades de Lujo Cancún & Riviera Maya | Rivana'
    : 'Luxury Real Estate Cancún & Riviera Maya | Rivana';
  const seoDesc = language === 'es'
    ? 'Tu inversión, tu legado. Asesoría inmobiliaria de lujo en Cancún y la Riviera Maya. Propiedades exclusivas para inversionistas visionarios.'
    : 'Your investment, your legacy. Luxury real estate advisory in Cancún and the Riviera Maya. Exclusive properties for visionary investors.';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Rivana Properties',
    url: 'https://rivanaproperties.com',
    logo: 'https://rivanaproperties.com/images/rivana-logo.png',
    image: 'https://rivanaproperties.com/images/mondrian/mondrian-hero.jpg',
    description: 'Asesoría inmobiliaria de lujo en Cancún y la Riviera Maya. Propiedades exclusivas para inversionistas visionarios.',
    telephone: '+52-998-845-7224',
    email: 'rivanapropertiesmx@gmail.com',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cancún',
      addressRegion: 'Quintana Roo',
      postalCode: '77500',
      addressCountry: 'MX',
    },
    areaServed: ['Cancún', 'Riviera Maya', 'Costa Mujeres', 'Mayakoba', 'Puerto Morelos'],
    sameAs: [
      'https://www.facebook.com/rivanaproperties',
      'https://www.instagram.com/rivana.properties',
      'https://mx.pinterest.com/rivanapropertiesmx/',
    ],
  };

  const recentArticles = journalArticles
    .filter((a) => (language === 'es' ? !a.enOnly : !a.esOnly))
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SEOHead title={seoTitle} description={seoDesc} path={language === 'en' ? '/en' : '/'} schema={schema} ogImage="/images/mondrian/mondrian-hero.jpg" />

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center overflow-hidden home-hero-section" style={{ height: '100vh', minHeight: '700px' }}>
        <img src={homeHero} alt={language === 'es' ? 'Propiedad de lujo frente al mar en Cancún' : 'Luxury beachfront property in Cancún'} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 30%' }} />
        <div className="absolute inset-0 home-hero-overlay" style={{ background: 'linear-gradient(160deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.36) 100%)' }} />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center text-[hsl(var(--pearl))] home-hero-content flex flex-col justify-center items-center" style={{ paddingTop: '80px' }}>
          <p className="eyebrow animate-fade-in home-hero-eyebrow" style={{ animationDelay: '0.2s', fontSize: '19px', letterSpacing: '4px', fontWeight: 500, marginBottom: '16px', color: '#CFAE60' }}>
            {language === 'es' ? 'ASESORÍA INMOBILIARIA DE LUJO' : 'LUXURY REAL ESTATE ADVISORY'}
          </p>
          <h1 className="animate-fade-up home-hero-h1 text-[hsl(var(--pearl))]" style={{ animationDelay: '0.4s', fontWeight: 600, textShadow: '0 2px 24px rgba(0,0,0,0.5)', fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '12px' }}>
            {language === 'es' ? 'Tu broker en la Riviera Maya' : 'Your broker in the Riviera Maya'}
          </h1>
          <p className="font-body text-[hsl(var(--pearl))]/90 max-w-3xl mx-auto animate-fade-up home-hero-subtitle" style={{ animationDelay: '0.6s', fontSize: 'clamp(22px, 2.4vw, 32px)', fontWeight: 400, lineHeight: 1.45, textShadow: '0 1px 10px rgba(0,0,0,0.5)', marginBottom: '0' }}>
            {language === 'es'
              ? 'Te acompañamos en la selección de propiedades, certeza jurídica en cada etapa y acceso privilegiado a las mejores oportunidades'
              : 'We accompany you in selecting properties, legal certainty at every stage, and privileged access to the best opportunities'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up home-hero-buttons" style={{ animationDelay: '0.8s', marginTop: '36px' }}>
            <Button variant="gold" size="lg" className="rounded-none text-[hsl(var(--deep-black))] h-16 px-12" style={{ fontSize: '19px' }} asChild>
              <a
                href={language === 'es'
                  ? 'https://wa.me/529988457224?text=HOME%20HERO%20%E2%80%94%20Quiero%20iniciar%20mi%20asesor%C3%ADa%20inmobiliaria&utm_source=web&utm_medium=whatsapp&utm_campaign=lead&utm_content=home-hero-es'
                  : 'https://wa.me/529988457224?text=HOME%20HERO%20EN%20-%20I%20want%20to%20start%20my%20real%20estate%20advisory&utm_source=web&utm_medium=whatsapp&utm_campaign=lead&utm_content=home-hero-en'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {waCta(language, 'conocer')}
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-none border-[hsl(var(--pearl))] text-[hsl(var(--pearl))] hover:bg-[hsl(var(--pearl))]/10 h-16 px-12" style={{ fontSize: '19px' }} asChild>
              <Link to={localePath('/listings')}>{language === 'es' ? 'Explorar propiedades' : 'Explore properties'}</Link>
            </Button>
          </div>
          <p
            className="font-body animate-fade-up text-[hsl(var(--pearl))]/80"
            style={{ animationDelay: '1s', fontSize: '16px', letterSpacing: '0.5px', marginTop: '20px', textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
          >
            {language === 'es'
              ? 'Propiedades desde $450K USD en Cancún · Puerto Cancún · Costa Mujeres'
              : 'Properties from $450K USD in Cancún · Puerto Cancún · Costa Mujeres'}
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-hint">
          <span className="w-px h-8 bg-primary/50" />
          <span className="text-xs font-body uppercase tracking-widest text-[hsl(var(--pearl))]/60">Scroll</span>
        </div>
      </section>

      {/* ── WHY RIVANA — ALLY ── */}
      <AllySection />

      {/* ── MONDRIAN SPOTLIGHT ── */}
      <MondrianSpotlight />

      {/* ── PILLAR LINK: PREVENTA CANCÚN ── */}
      <section className="py-12 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="border-t border-b border-border py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <p className="eyebrow mb-3">{language === 'es' ? 'Preventa 2026' : 'Pre-Construction 2026'}</p>
                <h2 className="text-secondary text-2xl md:text-3xl mb-3">
                  {language === 'es'
                    ? 'Precios de lanzamiento antes de la entrega'
                    : 'Launch prices before delivery'}
                </h2>
                <p className="font-body text-muted-foreground max-w-xl">
                  {language === 'es' ? (
                    <>
                      Consulta nuestra selección curada de{' '}
                      <Link to="/preventa-cancun" className="text-primary underline underline-offset-4">
                        propiedades en preventa Cancún
                      </Link>{' '}
                      con planes de pago diferido y plusvalía proyectada del 15–33%.
                    </>
                  ) : (
                    <>
                      Browse our curated selection of{' '}
                      <Link to="/en/pre-construction-cancun" className="text-primary underline underline-offset-4">
                        pre-construction properties in Cancún
                      </Link>{' '}
                      with deferred payment plans and 15–33% projected appreciation.
                    </>
                  )}
                </p>
              </div>
              <Link
                to={language === 'es' ? '/preventa-cancun' : '/en/pre-construction-cancun'}
                className="shrink-0 inline-flex items-center gap-2 text-sm font-body uppercase tracking-[3px] text-primary"
              >
                {language === 'es' ? 'propiedades en preventa Cancún' : 'pre-construction properties Cancún'}
                <ArrowRightIcon className="w-3 h-3" />
              </Link>
            </div>
            <p className="font-body text-muted-foreground text-sm mt-6">
              {language === 'es' ? (
                <>
                  ¿Buscas en el norte de Cancún? Habla con un{' '}
                  <Link to="/agente-inmobiliario-costa-mujeres" className="text-primary underline underline-offset-4">
                    agente inmobiliario en Costa Mujeres
                  </Link>
                  .
                </>
              ) : (
                <>
                  Looking at the north shore? Talk to a{' '}
                  <Link to="/en/real-estate-agent-costa-mujeres" className="text-primary underline underline-offset-4">
                    real estate agent in Costa Mujeres
                  </Link>
                  . Canadian or U.S. buyer? Work with a{' '}
                  <Link to="/en/free-buyer-agent-cancun" className="text-primary underline underline-offset-4">
                    free buyer&apos;s agent in Cancún
                  </Link>
                  .
                </>
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <ProcessTimeline />

      {/* ── PERSONAL PROPERTY SEARCH (EN only) ── */}
      {language === 'en' && <PersonalSearchSection />}

      {/* ── READY NOW / LISTO AHORA ── */}
      <section className="py-16 lg:py-20 bg-background border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="eyebrow mb-4">
                  {language === 'es' ? 'Entrega Inmediata' : 'Immediate Delivery'}
                </p>
                <h2 className="text-secondary mb-3">
                  {language === 'es' ? 'Llave en mano' : 'Ready Now'}
                </h2>
                <p className="font-body font-light text-muted-foreground max-w-xl" style={{ fontSize: '19px', lineHeight: 1.7 }}>
                  {language === 'es'
                    ? 'Residencias amuebladas listas para ocupación inmediata o renta vacacional.'
                    : 'Fully furnished residences ready for immediate occupancy or vacation rental income.'}
                </p>
              </div>
              <Link
                to={language === 'es' ? '/entregas-inmediatas' : '/en/immediate-delivery'}
                className="text-sm text-primary font-body flex items-center gap-1 gold-underline whitespace-nowrap"
              >
                {language === 'es' ? 'Ver todas las propiedades listas' : 'Explore all ready properties'}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {immediateDeliveryUnits.map((u, i) => (
              <ScrollReveal key={u.id} delay={i * 80}>
                <ImmediateDeliveryCard unit={u} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS GRID ── */}
      <section className="py-12 md:py-24 lg:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex items-end justify-between gap-4 mb-8 md:mb-16">
              <div>
                <p className="eyebrow mb-4">{t('section.destinations')}</p>
                <h2 className="text-secondary mb-0">{t('section.collections')}</h2>
              </div>
              {/* Mobile swipe hint */}
              <span className="md:hidden flex items-center gap-1.5 text-[11px] font-body uppercase tracking-[2px] text-primary whitespace-nowrap pb-1">
                <span>{language === 'es' ? 'Desliza' : 'Swipe'}</span>
                <ArrowRightIcon className="w-3.5 h-3.5 swipe-hint" />
              </span>
            </div>
          </ScrollReveal>

          <div
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-6 px-6 md:mx-0 md:px-0 pb-4 md:pb-0"
            style={{ scrollbarWidth: 'none' }}
          >
            {sortedDestinations.map((d, i) => (
              <ScrollReveal key={d.key} delay={i * 80} className={`shrink-0 w-[85%] snap-start md:w-auto md:shrink ${i === 0 ? 'md:col-span-2 lg:col-span-2' : ''} ${i === 1 ? 'md:h-full' : ''}`}>
                <Link
                  to={localePath(d.basePath)}
                  className={`group block relative overflow-hidden rounded-sm ${i === 1 ? 'aspect-[16/10] md:aspect-auto md:h-full md:min-h-[280px]' : 'aspect-[16/10]'}`}
                >
                  <img
                    src={destinationImages[d.key]}
                    alt={d.name[language]}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_0%/0.85)] via-[hsl(0_0%_0%/0.35)] to-[hsl(0_0%_0%/0.05)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {d.chips[language][0] && (
                      <span className="inline-block text-xs font-body font-medium tracking-wider uppercase bg-primary/30 text-primary px-3 py-1 rounded-sm mb-3 backdrop-blur-sm border border-primary/20">
                        {d.chips[language][0]}
                      </span>
                    )}
                    <h3 className="text-2xl mb-2 text-[hsl(var(--pearl))] drop-shadow-[0_1px_3px_hsl(0_0%_0%/0.5)]">{d.name[language]}</h3>
                    {d.key !== 'tulum' && (
                      <div className="flex items-center gap-4 text-sm text-[hsl(var(--pearl))]/80 font-body font-light">
                        <span>{language === 'es' ? 'Desde' : 'From'} {d.stats[1]?.val}</span>
                        <span>·</span>
                        <span>{d.stats[0]?.val} {d.stats[0]?.label[language]}</span>
                      </div>
                    )}
                    {d.key === 'tulum' && (
                      <p className="text-sm text-[hsl(var(--pearl))]/60 font-body font-light italic">
                        {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 mt-3 text-sm text-primary font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t('card.explore')} <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT & INVESTMENT FORM ── */}
      <ContactSection />

      {/* ── BLOG PREVIEW ── */}
      <section className="py-16 lg:py-20 bg-background border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
              <div>
                <p className="eyebrow mb-4">{t('section.blog')}</p>
                <h2 className="text-secondary">{t('section.blogTitle')}</h2>
              </div>
              <Link to={localePath('/journal')} className="text-sm text-primary font-body flex items-center gap-1 gold-underline whitespace-nowrap">
                {t('blog.viewAll')} <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArticles.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 100}>
                <Link to={localePath(`/journal/${post.slug}`)} className="group block">
                  <div className="aspect-[16/10] rounded-sm mb-4 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title[language]}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <span className="eyebrow text-xs">{post.category[language]}</span>
                  <h3 className="mt-2 mb-3 text-secondary group-hover:text-primary transition-colors">{post.title[language]}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime} {language === 'es' ? 'de lectura' : 'read'}</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
