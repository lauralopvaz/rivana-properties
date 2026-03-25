import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { journalArticles, journalArticlesEs } from '@/data/journal-articles';
import { ArrowRightIcon, ClockIcon, MailIcon } from '@/components/icons';
import { useNewsletterSubscribe } from '@/hooks/useNewsletterSubscribe';

const categories = {
  es: ['Todos', 'Inversión', 'Mercado', 'Guías', 'Destinos', 'Lifestyle', 'Legal'],
  en: ['All', 'Investment', 'Market', 'Guides', 'Destinations', 'Lifestyle', 'Legal'],
};

const Journal = () => {
  const { language, t, localePath } = useLanguage();
  const [activeCat, setActiveCat] = useState(language === 'es' ? 'Todos' : 'All');
  const nl = useNewsletterSubscribe();

  // Combine articles based on language
  const allArticles = language === 'es'
    ? [...journalArticles, ...journalArticlesEs]
    : journalArticles;

  const featured = allArticles.find((a) => a.featured) || allArticles[0];
  const filtered = allArticles.filter((a) => {
    const allLabel = language === 'es' ? 'Todos' : 'All';
    return activeCat === allLabel || a.category[language] === activeCat;
  });

  const seoTitle = language === 'es'
    ? 'The Rivana Journal — Insights Inmobiliarios Cancún | Rivana'
    : 'The Rivana Journal — Real Estate Insights Cancún | Rivana';
  const seoDesc = language === 'es'
    ? 'Artículos sobre inversión inmobiliaria en Cancún y la Riviera Maya. Guías, análisis de mercado y tendencias.'
    : 'Articles about real estate investment in Cancún and the Riviera Maya. Guides, market analysis, and trends.';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The Rivana Journal',
    url: 'https://rivanaproperties.com/journal',
    description: seoDesc,
    publisher: {
      '@type': 'Organization',
      name: 'Rivana Properties',
    },
  };

  return (
    <div>
      <SEOHead title={seoTitle} description={seoDesc} path={language === 'en' ? '/en/journal' : '/journal'} schema={schema} ogImage="/images/mondrian/mondrian-hero.png" />

      {/* Masthead */}
      <section className="pt-28 pb-16 px-6 lg:px-10 max-w-[1400px] mx-auto text-center">
        <p className="eyebrow mb-4">Insights & Intelligence</p>
        <h1 className="mb-4">{t('journal.title')}</h1>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground font-body mt-6">
          <span>{allArticles.length} {language === 'es' ? 'Artículos' : 'Articles'}</span>
          <span>·</span>
          <span>{categories[language].length - 1} {language === 'es' ? 'Categorías' : 'Categories'}</span>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="px-6 lg:px-10 max-w-[1400px] mx-auto mb-16">
          <Link to={localePath(`/journal/${featured.slug}`)} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card border border-border rounded-sm overflow-hidden">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={featured.image} alt={featured.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="eager" width={1280} height={800} />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="eyebrow text-xs mb-3">{featured.category[language]}</span>
              <h2 className="mb-4 group-hover:text-primary transition-colors">{featured.title[language]}</h2>
              <p className="text-muted-foreground font-body mb-6">{featured.excerpt[language]}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
                <span>{featured.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><ClockIcon className="w-3 h-3" /> {featured.readTime} {language === 'es' ? 'de lectura' : 'read'}</span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Category Filter */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto mb-12">
        <div className="flex flex-wrap gap-2">
          {categories[language].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`text-xs font-body tracking-wider uppercase px-4 py-2 rounded-sm border transition-colors ${
                activeCat === cat
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 80}>
                <Link to={localePath(`/journal/${article.slug}`)} className="group block">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm mb-4">
                    <img src={article.image} alt={article.title[language]} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" width={1280} height={800} />
                  </div>
                  <span className="eyebrow text-xs">{article.category[language]}</span>
                  <h4 className="mt-2 mb-2 group-hover:text-primary transition-colors">{article.title[language]}</h4>
                  <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-3">{article.excerpt[language]}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><ClockIcon className="w-3 h-3" /> {article.readTime}</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter */}
            <div className="bg-card border border-border rounded-sm p-6">
              <MailIcon className="w-6 h-6 text-primary mb-3" />
              <h4 className="text-lg mb-2">Newsletter</h4>
              {nl.success ? (
                <p className="text-primary font-body text-sm">{language === 'es' ? '¡Suscrito! 🎉' : 'Subscribed! 🎉'}</p>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground font-body mb-4">
                    {language === 'es'
                      ? 'Recibe insights de mercado y listados exclusivos semanalmente.'
                      : 'Get market insights and exclusive listings delivered weekly.'}
                  </p>
                  <form className="space-y-3" onSubmit={nl.handleSubmit}>
                    <input type="email" required value={nl.email} onChange={(e) => nl.setEmail(e.target.value)} placeholder={language === 'es' ? 'Tu correo' : 'Your email'} className="w-full bg-muted border border-border rounded-sm px-3 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                    <Button variant="gold" className="w-full" type="submit" disabled={nl.loading}>{nl.loading ? '...' : language === 'es' ? 'Suscribirse' : 'Subscribe'}</Button>
                  </form>
                </>
              )}
            </div>

            {/* Most Read */}
            <div className="bg-card border border-border rounded-sm p-6">
              <h4 className="text-lg mb-4">{language === 'es' ? 'Más Leídos' : 'Most Read'}</h4>
              <div className="space-y-4">
                {journalArticles.slice(0, 4).map((a, i) => (
                  <Link key={a.slug} to={localePath(`/journal/${a.slug}`)} className="flex items-start gap-3 group">
                    <span className="font-display text-2xl text-primary/40">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="text-sm font-body group-hover:text-primary transition-colors line-clamp-2">{a.title[language]}</p>
                      <span className="text-xs text-muted-foreground font-body">{a.readTime} {language === 'es' ? 'de lectura' : 'read'}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
