import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { destinations } from '@/data/destinations';
import { journalArticles } from '@/data/journal-articles';
import { ArrowRightIcon, BedIcon, RulerIcon, DollarIcon, LocationIcon, WavesIcon, GolfIcon, SparklesIcon, AnchorIcon, SunIcon, SwimIcon } from '@/components/icons';
import homeHero from '@/assets/home-hero.jpg';

// Destination images
import destZonaHotelera from '@/assets/dest-zona-hotelera.jpg';
import destPuertoCancun from '@/assets/dest-puerto-cancun.jpg';
import destCostaMujeres from '@/assets/dest-costa-mujeres.jpg';
import destMayakoba from '@/assets/dest-mayakoba.jpg';
import destPuertoMorelos from '@/assets/dest-puerto-morelos.jpg';
import destCancunCentro from '@/assets/dest-cancun-centro.jpg';
import destTulum from '@/assets/dest-tulum.jpg';

// Property images
import propOceana from '@/assets/prop-oceana.jpg';
import propMarina from '@/assets/prop-marina.jpg';
import propJade from '@/assets/prop-jade.jpg';
import propSelva from '@/assets/prop-selva.jpg';

// Journal images
import journalRoi from '@/assets/journal-roi.jpg';
import journalBuyer from '@/assets/journal-buyer.jpg';
import journalWorldcup from '@/assets/journal-worldcup.jpg';

const destinationImages: Record<string, string> = {
  'zona-hotelera': destZonaHotelera,
  'puerto-cancun': destPuertoCancun,
  'costa-mujeres': destCostaMujeres,
  'mayakoba': destMayakoba,
  'puerto-morelos': destPuertoMorelos,
  'cancun-centro': destCancunCentro,
  'tulum': destTulum,
};

const journalImages: Record<string, string> = {
  'cancun-roi-rental-yield': journalRoi,
  'foreign-buyer-guide-mexico': journalBuyer,
  'world-cup-2026-cancun-real-estate': journalWorldcup,
};

const featuredProperties = [
  { name: 'Oceana Residences', zone: 'Costa Mujeres', beds: 3, area: 185, price: '$425K', amenities: ['ocean', 'pool', 'spa'], destKey: 'costa-mujeres', image: propOceana },
  { name: 'Marina Towers', zone: 'Puerto Cancún', beds: 2, area: 140, price: '$510K', amenities: ['marina', 'pool', 'golf'], destKey: 'puerto-cancun', image: propMarina },
  { name: 'Jade Penthouse', zone: { es: 'Zona Hotelera', en: 'Hotel Zone' }, beds: 4, area: 320, price: '$1.2M', amenities: ['ocean', 'pool', 'sunset'], destKey: 'zona-hotelera', image: propJade },
  { name: 'Selva Lofts', zone: 'Tulum', beds: 1, area: 78, price: '$195K', amenities: ['jungle', 'pool', 'spa'], destKey: 'tulum', image: propSelva },
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

  const services = [
    { num: '01', text: t('services.01') },
    { num: '02', text: t('services.02') },
    { num: '03', text: t('services.03') },
    { num: '04', text: t('services.04') },
  ];

  const sortedDestinations = [...destinations].sort((a, b) => a.priority - b.priority);

  const seoTitle = language === 'es'
    ? 'Rivana Properties — Inmobiliaria de Lujo en Cancún y Riviera Maya'
    : 'Rivana Properties — Luxury Real Estate in Cancún & Riviera Maya';
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
      telephone: '+52-998-123-4567',
      contactType: 'sales',
      availableLanguage: ['Spanish', 'English'],
    },
  };

  const recentArticles = journalArticles.slice(0, 3);

  useEffect(() => {
    document.documentElement.classList.add('light-page');
    return () => { document.documentElement.classList.remove('light-page'); };
  }, []);

  return (
    <div>
      <SEOHead title={seoTitle} description={seoDesc} path={language === 'en' ? '/en' : '/'} schema={schema} />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={homeHero} alt={language === 'es' ? 'Propiedad de lujo frente al mar en Cancún' : 'Luxury beachfront property in Cancún'} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(0_0%_0%/0.35)]" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center text-[hsl(var(--pearl))]">
          <p className="eyebrow mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {language === 'es' ? 'Asesoría Inmobiliaria de Lujo' : 'Luxury Real Estate Advisory'}
          </p>
          <h1 className="mb-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {t('hero.tagline').split(',')[0]},{' '}
            <em className="text-primary not-italic font-display italic">{t('hero.tagline').split(',')[1]}</em>
          </h1>
          <p className="font-body text-lg text-[hsl(var(--pearl))]/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.8s' }}>
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

      {/* ── SERVICES ── */}
      <section className="py-16 border-y border-border bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 100}>
                <div className="text-center lg:text-left">
                  <span className="font-display text-3xl lg:text-4xl text-primary">{s.num}</span>
                  <p className="text-sm text-foreground mt-3 font-body uppercase tracking-widest leading-relaxed">{s.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS GRID ── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">{t('section.destinations')}</p>
            <h2 className="mb-16 text-secondary">{t('section.collections')}</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sortedDestinations.map((d, i) => (
              <ScrollReveal key={d.key} delay={i * 80} className={i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}>
                <Link
                  to={localePath(d.basePath)}
                  className="group block relative overflow-hidden aspect-[16/10] rounded-sm"
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
                    <div className="flex items-center gap-4 text-sm text-[hsl(var(--pearl))]/80 font-body font-light">
                      <span>{language === 'es' ? 'Desde' : 'From'} {d.stats[1]?.val}</span>
                      <span>·</span>
                      <span>{d.stats[0]?.val} {language === 'es' ? 'propiedades' : 'properties'}</span>
                    </div>
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
                  <Link to={localePath('/property/oceana-residences')} className="group block bg-card rounded-sm overflow-hidden shadow-[0_2px_16px_hsl(var(--deep-black)/0.06)] border border-border">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
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

      {/* ── SCHEDULE A VISIT ── */}
      <section className="py-16 lg:py-20 bg-background relative">
        {/* Decorative top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-4 -translate-y-1/2">
          <span className="w-16 h-px bg-primary/40" />
          <span className="w-2 h-2 rounded-full bg-primary/60" />
          <span className="w-16 h-px bg-primary/40" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="eyebrow mb-4">{t('section.schedule')}</p>
              <h2 className="mb-6 text-secondary">{t('section.scheduleTitle')}</h2>
              <p className="text-muted-foreground mb-6 max-w-md">
                {t('section.scheduleDesc')}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <LocationIcon className="w-4 h-4 text-primary" />
                  <span>Cancún, Q.R., México</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <form className="bg-card border border-border rounded-sm p-8 space-y-5 shadow-sm" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input placeholder={t('form.firstName')} className="bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <input placeholder={t('form.lastName')} className="bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
                <input type="email" placeholder={t('form.email')} className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <input type="tel" placeholder={t('form.phone')} className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <select className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-muted-foreground focus:outline-none focus:border-primary transition-colors">
                  <option value="">{t('form.selectDestination')}</option>
                  {destinations.map((d) => (
                    <option key={d.key} value={d.key}>{d.name[language]}</option>
                  ))}
                </select>
                <textarea placeholder={t('form.message')} rows={3} className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
                <Button variant="gold" className="w-full" type="submit">{t('form.scheduleVisit')}</Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="py-16 lg:py-20 bg-background border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="eyebrow mb-4">{t('section.blog')}</p>
                <h2 className="text-secondary">{t('section.blogTitle')}</h2>
              </div>
              <Link to={localePath('/journal')} className="text-sm text-primary font-body flex items-center gap-1 gold-underline">
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
                      src={journalImages[post.slug] || journalRoi}
                      alt={post.title[language]}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <span className="eyebrow text-xs">{post.category[language]}</span>
                  <h4 className="mt-2 mb-3 text-secondary group-hover:text-primary transition-colors">{post.title[language]}</h4>
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
