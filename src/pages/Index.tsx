import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { destinations } from '@/data/destinations';
import { journalArticles } from '@/data/journal-articles';
import { ArrowRightIcon, BedIcon, RulerIcon, DollarIcon, WavesIcon, GolfIcon, SparklesIcon, AnchorIcon, SunIcon, SwimIcon } from '@/components/icons';
import { PreSaleSection } from '@/components/home/PreSaleSection';
import { ContactSection } from '@/components/home/ContactSection';
import { AllySection } from '@/components/home/AllySection';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';

import homeHero from '@/assets/home-hero-main.jpg';
import presaleHero from '@/assets/presale-hero.jpg';

// Destination images
import destZonaHotelera from '@/assets/dest-zona-hotelera.jpg';
import destPuertoCancun from '@/assets/dest-puerto-cancun.jpg';
import destCostaMujeres from '@/assets/dest-costa-mujeres.jpg';
import destMayakoba from '@/assets/dest-mayakoba.jpg';
import destPuertoMorelos from '@/assets/dest-puerto-morelos.jpg';
import destCancunCentro from '@/assets/dest-cancun-centro.jpg';
import destTulum from '@/assets/dest-tulum.jpg';
import destPlayaDelCarmen from '@/assets/dest-playa-del-carmen.jpg';

// Property images
const propMondrian = '/images/mondrian/mondrian-hero.jpg';
import dhamarPrincipal from '@/assets/dhamar-principal.jpg';
import slsVistaPrincipal from '@/assets/sls-vista-principal.jpg';
import reserveHero from '@/assets/reserve-mayakoba-fachada-alberca-jardin.jpg';
import vellmariHero from '@/assets/vellmari-hero.jpg';
import villageBluHero from '@/assets/village-blu-hero.jpg';
import kabeekHero from '@/assets/kabeek-fachada-atardecer.jpg';
import bayViewGrandHero from '@/assets/bvg-rooftop-pool-laguna.jpg';
import arboladaHero from '@/assets/arbolada-hero.jpg';
import thompsonHero from '@/assets/thompson-hero.jpg';
import soleBluHero from '@/assets/sole-blu-hero.jpg';
import cuoreCumbresHero from '@/assets/cuore-cumbres-hero.jpg';


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



const featuredProperties = [
  { name: 'Mondrian Residences', zone: { es: 'Zona Hotelera, Cancún', en: 'Hotel Zone, Cancún' }, beds: 3, area: 165, price: '$514K', amenities: ['ocean', 'pool', 'spa'], image: propMondrian, slug: 'mondrian-residences-grand-island-cancun' },
  { name: 'Dhamar', zone: { es: 'Costa Mujeres, Cancún', en: 'Costa Mujeres, Cancún' }, beds: 3, area: 178, price: '$248K', amenities: ['ocean', 'pool', 'spa'], image: dhamarPrincipal, slug: 'dhamar-costa-mujeres' },
  { name: 'SLS Ocean Beach', zone: { es: 'Puerto Cancún, Cancún', en: 'Puerto Cancún, Cancún' }, beds: 3, area: 356, price: '$1.6M', amenities: ['ocean', 'marina', 'golf'], image: slsVistaPrincipal, slug: 'sls-ocean-beach-puerto-cancun' },
  { name: 'The Reserve at Mayakoba', zone: { es: 'Mayakoba, Riviera Maya', en: 'Mayakoba, Riviera Maya' }, beds: 4, area: 660, price: '$1.1M', amenities: ['golf', 'spa', 'jungle'], image: reserveHero, slug: 'the-reserve-at-mayakoba' },
  { name: 'Bay View Grand at Grand Island', zone: { es: 'Zona Hotelera, Cancún', en: 'Hotel Zone, Cancún' }, beds: 3, area: 451, price: '$586K', amenities: ['ocean', 'marina', 'golf'], image: bayViewGrandHero, slug: 'bay-view-grand-grand-island' },
  { name: 'Kabeek Marina & Condos', zone: { es: 'Zona Hotelera, Cancún', en: 'Hotel Zone, Cancún' }, beds: 4, area: 670, price: 'Consultar', amenities: ['ocean', 'marina', 'spa'], image: kabeekHero, slug: 'kabeek-marina-condos' },
  { name: 'Vellmari Grand Living', zone: { es: 'Puerto Cancún, Cancún', en: 'Puerto Cancún, Cancún' }, beds: 5, area: 714, price: '$14.8M MXN', amenities: ['marina', 'pool', 'spa'], image: vellmariHero, slug: 'vellmari-grand-living' },
  { name: 'Village Blu Beach Apartments', zone: { es: 'Puerto Morelos, Riviera Maya', en: 'Puerto Morelos, Riviera Maya' }, beds: 1, area: 73, price: '$273K', amenities: ['ocean', 'pool', 'sunset'], image: villageBluHero, slug: 'village-blu-beach-apartments' },
  { name: 'Arbolada Towers', zone: { es: 'Residencial Cancún', en: 'Cancún Residential' }, beds: 2, area: 94, price: '$5.2M MXN', amenities: ['pool', 'spa'], image: arboladaHero, slug: 'arbolada-towers' },
  { name: 'Thompson Residences', zone: { es: 'Puerto Cancún, Cancún', en: 'Puerto Cancún, Cancún' }, beds: 5, area: 803, price: '$730K', amenities: ['ocean', 'marina', 'golf'], image: thompsonHero, slug: 'thompson-residences-puerto-cancun' },
  { name: 'Sole Blu Ocean Living', zone: { es: 'Puerto Morelos, Riviera Maya', en: 'Puerto Morelos, Riviera Maya' }, beds: 2, area: 136, price: '$392K', amenities: ['ocean', 'pool', 'sunset'], image: soleBluHero, slug: 'sole-blu-ocean-living' },
  { name: 'Cuore Cumbres', zone: { es: 'Cancún Centro', en: 'Downtown Cancún' }, beds: 3, area: 346, price: 'Consultar', amenities: ['pool', 'spa'], image: cuoreCumbresHero, slug: 'cuore-cumbres-cancun' },
];

const amenityIcons: Record<string, { icon: typeof WavesIcon; label: { es: string; en: string } }> = {
  ocean: { icon: WavesIcon, label: { es: 'Vista al Mar', en: 'Ocean View' } },
  pool: { icon: SwimIcon, label: { es: 'Alberca', en: 'Pool' } },
  spa: { icon: SparklesIcon, label: { es: 'Spa', en: 'Spa' } },
  marina: { icon: AnchorIcon, label: { es: 'Marina', en: 'Marina' } },
  golf: { icon: GolfIcon, label: { es: 'Golf', en: 'Golf' } },
  sunset: { icon: SunIcon, label: { es: 'Atardecer', en: 'Sunset' } },
  jungle: { icon: SunIcon, label: { es: 'Selva', en: 'Jungle' } },
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
    description: seoDesc,
    areaServed: [
      { '@type': 'Place', name: 'Cancún' },
      { '@type': 'Place', name: 'Riviera Maya' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+52-998-845-7224',
      contactType: 'sales',
      availableLanguage: ['Spanish', 'English'],
    },
  };

  const recentArticles = journalArticles.slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SEOHead title={seoTitle} description={seoDesc} path={language === 'en' ? '/en' : '/'} schema={schema} ogImage="/images/mondrian/mondrian-hero.jpg" />

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center overflow-hidden home-hero-section" style={{ height: '100vh', minHeight: '700px' }}>
        <img src={homeHero} alt={language === 'es' ? 'Propiedad de lujo frente al mar en Cancún' : 'Luxury beachfront property in Cancún'} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 30%' }} />
        <div className="absolute inset-0 home-hero-overlay" style={{ background: 'linear-gradient(160deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.35) 100%)' }} />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center text-[hsl(var(--pearl))] home-hero-content flex flex-col justify-center items-center" style={{ paddingTop: '80px' }}>
          <p className="eyebrow animate-fade-in home-hero-eyebrow" style={{ animationDelay: '0.2s', fontSize: '16px', letterSpacing: '4px', fontWeight: 500, marginBottom: '16px' }}>
            {language === 'es' ? 'Asesoría Inmobiliaria de Lujo' : 'Luxury Real Estate Advisory'}
          </p>
          <h1 className="animate-fade-up home-hero-h1" style={{ animationDelay: '0.4s', fontWeight: 600, textShadow: '0 2px 24px rgba(0,0,0,0.5)', fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '12px' }}>
            {t('hero.tagline').split(',')[0]},{' '}
            <em className="text-primary not-italic font-display italic">{t('hero.tagline').split(',')[1]}</em>
          </h1>
          <p className="font-body text-[hsl(var(--pearl))]/80 max-w-2xl mx-auto animate-fade-up home-hero-subtitle" style={{ animationDelay: '0.6s', fontSize: '21px', fontWeight: 400, textShadow: '0 1px 10px rgba(0,0,0,0.5)', marginBottom: '0' }}>
            {language === 'es' ? <>Propiedades exclusivas en Cancún{' '}<br className="md:hidden" />y la Riviera Maya</> : <>Exclusive properties in Cancún{' '}<br className="md:hidden" />and the Riviera Maya</>}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up home-hero-buttons" style={{ animationDelay: '0.8s', marginTop: '36px' }}>
            <Button variant="gold" size="lg" asChild>
              <Link to={localePath('/listings')}>{t('hero.explore')}</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-[hsl(var(--pearl))] text-[hsl(var(--pearl))] hover:bg-[hsl(var(--pearl))]/10" asChild>
              <Link to={localePath('/cancun/zona-hotelera')}>{t('hero.destinations')}</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-hint">
          <span className="w-px h-8 bg-primary/50" />
          <span className="text-xs font-body uppercase tracking-widest text-[hsl(var(--pearl))]/60">Scroll</span>
        </div>
      </section>

      {/* ── WHY RIVANA — ALLY ── */}
      <AllySection />

      {/* ── COLLECTIONS GRID ── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">{t('section.destinations')}</p>
            <h2 className="mb-16 text-secondary">{t('section.collections')}</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sortedDestinations.map((d, i) => (
              <ScrollReveal key={d.key} delay={i * 80} className={`${i === 0 ? 'md:col-span-2 lg:col-span-2' : ''} ${i === 1 ? 'h-full' : ''}`}>
                <Link
                  to={localePath(d.basePath)}
                  className={`group block relative overflow-hidden rounded-sm ${i === 1 ? 'h-full min-h-[280px]' : 'aspect-[16/10]'}`}
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

      {/* ── FEATURED PROPERTIES ── */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">{t('section.featured')}</p>
            <h2 className="mb-16 text-secondary">{t('section.featuredTitle')}</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProperties.map((p, i) => {
              const zoneName = typeof p.zone === 'string' ? p.zone : p.zone[language];
              return (
                <ScrollReveal key={p.name} delay={i * 100}>
                  <Link to={localePath(`/propiedad/${p.slug}`)} className="group block bg-card rounded-sm overflow-hidden shadow-[0_2px_16px_hsl(var(--deep-black)/0.06)] border border-border">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={p.image}
                        alt={`${p.name} — ${zoneName}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <span className="eyebrow text-xs">{zoneName}</span>
                      <h3 className="text-xl mt-2 mb-4 text-secondary">{p.name}</h3>
                      <div className="flex items-center gap-5 text-sm text-muted-foreground font-body mb-4">
                        <span className="flex items-center gap-1.5"><BedIcon className="w-4 h-4" /> {p.beds} {language === 'es' ? 'Rec.' : 'Beds'}</span>
                        <span className="flex items-center gap-1.5"><RulerIcon className="w-4 h-4" /> {p.area} m²</span>
                        <span className="flex items-center gap-1.5"><DollarIcon className="w-4 h-4" /> {p.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {p.amenities.map((a) => {
                            const amenity = amenityIcons[a];
                            if (!amenity) return null;
                            const Icon = amenity.icon;
                            return (
                              <span key={a} className="flex items-center gap-1 text-xs text-primary font-body">
                                <Icon className="w-3.5 h-3.5" />
                                {amenity.label[language]}
                              </span>
                            );
                          })}
                        </div>
                        <span className="text-sm text-primary font-body flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {t('card.view')} <ArrowRightIcon className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PRESALE BANNER ── */}
      <PreSaleSection />




      {/* ── OUR PROCESS ── */}
      <ProcessTimeline />

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
