import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { journalArticles, journalArticlesEs } from '@/data/journal-articles';
import { getDestination } from '@/data/destinations';
import { ClockIcon, ArrowRightIcon, MailIcon } from '@/components/icons';

const JournalPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, localePath } = useLanguage();
  const [progress, setProgress] = useState(0);

  const allArticles = [...journalArticles, ...journalArticlesEs];
  const article = allArticles.find((a) => a.slug === slug);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="pt-32 text-center">
        <h1>{language === 'es' ? 'Artículo no encontrado' : 'Article not found'}</h1>
      </div>
    );
  }

  const currentPath = language === 'en' ? `/en/journal/${slug}` : `/journal/${slug}`;
  const seoTitle = `${article.title[language]} | Rivana Journal`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title[language],
    description: article.excerpt[language],
    author: { '@type': 'Person', name: article.author },
    publisher: { '@type': 'Organization', name: 'Rivana Properties' },
    datePublished: article.date,
    url: `https://rivanaproperties.com/journal/${slug}`,
  };

  const toc = [
    language === 'es' ? 'Introducción' : 'Introduction',
    language === 'es' ? 'Panorama del Mercado' : 'Market Overview',
    language === 'es' ? 'Factores Clave' : 'Key Investment Drivers',
    language === 'es' ? 'Análisis de Rendimiento' : 'Rental Yield Analysis',
    language === 'es' ? 'Efecto Mundial' : 'World Cup Effect',
    language === 'es' ? 'Conclusión' : 'Conclusion',
  ];

  // Related articles based on shared destinations
  const related = journalArticles
    .filter((a) => a.slug !== slug && a.relatedDestinations.some((d) => article.relatedDestinations.includes(d)))
    .slice(0, 3);

  // Internal links to related destinations
  const relatedDests = article.relatedDestinations
    .map((key) => getDestination(key))
    .filter(Boolean);

  return (
    <div>
      <SEOHead title={seoTitle} description={article.excerpt[language]} path={currentPath} schema={schema} />

      {/* Reading Progress */}
      <div className="fixed top-0 left-0 right-0 z-[200]">
        <div className="reading-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      </div>

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 gradient-placeholder opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="eyebrow mb-4 inline-block">{article.category[language]}</span>
          <h1 className="mb-6">{article.title[language]}</h1>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground font-body">
            <span>{language === 'es' ? 'Por' : 'By'} {article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><ClockIcon className="w-3 h-3" /> {article.readTime} {language === 'es' ? 'de lectura' : 'read'}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 px-6 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* TOC Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <p className="eyebrow text-xs mb-4">{language === 'es' ? 'Contenido' : 'Contents'}</p>
              <nav className="space-y-2">
                {toc.map((item, i) => (
                  <a key={i} href="#" className="block text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                ))}
              </nav>

              {/* Internal links to related destinations */}
              {relatedDests.length > 0 && (
                <div className="mt-8">
                  <p className="eyebrow text-xs mb-3">{language === 'es' ? 'Destinos Relacionados' : 'Related Destinations'}</p>
                  <div className="space-y-2">
                    {relatedDests.map((d) => (
                      <Link
                        key={d!.key}
                        to={localePath(d!.basePath)}
                        className="block text-sm font-body text-primary hover:text-primary/80 transition-colors"
                      >
                        → {d!.name[language]}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Article */}
          <article className="lg:col-span-3 space-y-8">
            <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
              <p>{article.excerpt[language]}</p>

              <p>{language === 'es'
                ? 'Con más de $2 mil millones en inversión en infraestructura planificada y el acercamiento del Mundial FIFA 2026, la zona está experimentando una tormenta perfecta de factores que la hacen irresistible tanto para inversionistas experimentados como para compradores primerizos.'
                : 'With over $2 billion in planned infrastructure investment and the approaching FIFA World Cup 2026, the zone is experiencing a perfect storm of factors that make it irresistible to both seasoned investors and first-time buyers.'
              }</p>

              <blockquote className="border-l-2 border-primary pl-6 py-4 my-8">
                <p className="font-display text-2xl italic text-foreground leading-relaxed">
                  {language === 'es'
                    ? '"No es solo el próximo punto caliente de inversión — es el futuro del lujo residencial en el Caribe."'
                    : '"This is not just the next investment hotspot — it\'s the future of Caribbean luxury living."'
                  }
                </p>
              </blockquote>

              <h2 className="text-foreground">{language === 'es' ? 'Panorama del Mercado' : 'Market Overview'}</h2>
              <p>{language === 'es'
                ? 'El mercado inmobiliario ha visto una apreciación consistente año tras año del 18-22% desde 2022. Las propiedades en preventa están entregando retornos del 15-25% entre compra y entrega, convirtiéndolo en uno de los mercados de mejor desempeño en Latinoamérica.'
                : 'The real estate market has seen consistent year-over-year appreciation of 18-22% since 2022. Pre-sale properties are delivering returns of 15-25% between purchase and delivery, making it one of the highest-performing markets in Latin America.'
              }</p>

              <div className="bg-card border border-border rounded-sm p-6 my-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="font-display text-3xl text-primary">22%</span>
                    <p className="text-xs text-muted-foreground font-body mt-1">{language === 'es' ? 'Plusvalía Anual' : 'YoY Appreciation'}</p>
                  </div>
                  <div>
                    <span className="font-display text-3xl text-primary">10%</span>
                    <p className="text-xs text-muted-foreground font-body mt-1">{language === 'es' ? 'Rendimiento Renta' : 'Avg. Rental Yield'}</p>
                  </div>
                  <div>
                    <span className="font-display text-3xl text-primary">$1,800</span>
                    <p className="text-xs text-muted-foreground font-body mt-1">{language === 'es' ? 'Precio Prom./m²' : 'Avg. Price/m²'}</p>
                  </div>
                </div>
              </div>

              <h2 className="text-foreground">{language === 'es' ? 'Factores Clave de Inversión' : 'Key Investment Drivers'}</h2>
              <p>{language === 'es'
                ? 'Varios factores convergentes posicionan a esta zona de manera única para un crecimiento continuo. La zona se beneficia de la infraestructura existente de Cancún — incluyendo el aeropuerto internacional que sirve a más de 30 millones de pasajeros anualmente — mientras ofrece precios de entrada significativamente más bajos que los vecindarios establecidos.'
                : 'Several converging factors make this zone uniquely positioned for continued growth. The zone benefits from Cancún\'s existing infrastructure — including the international airport serving 30+ million passengers annually — while offering significantly lower entry prices than established neighborhoods.'
              }</p>

              <h2 className="text-foreground">{language === 'es' ? 'Análisis de Rendimiento de Renta' : 'Rental Yield Analysis'}</h2>
              <p>{language === 'es'
                ? 'Las propiedades están alcanzando rendimientos de renta del 8-12% anual, superando significativamente a los mercados tradicionales. Las plataformas de alquiler a corto plazo como Airbnb han transformado la economía del mercado inmobiliario caribeño.'
                : 'Properties are achieving rental yields of 8-12% annually, significantly outperforming traditional markets. Short-term rental platforms like Airbnb have transformed the economics of Caribbean real estate.'
              }</p>

              <h2 className="text-foreground">{language === 'es' ? 'El Efecto del Mundial' : 'The World Cup Effect'}</h2>
              <p>{language === 'es'
                ? 'Con México siendo co-anfitrión del Mundial FIFA 2026, Cancún y la Riviera Maya esperan cifras de turismo sin precedentes. Las propiedades compradas ahora a precios de preventa están posicionadas para beneficiarse tanto de la apreciación de la fase de construcción como del boom turístico post-Mundial.'
                : 'With México co-hosting the 2026 FIFA World Cup, Cancún and the Riviera Maya are expected to see unprecedented tourism numbers. Properties purchased now at pre-sale prices are positioned to benefit from both the construction-phase appreciation and the post-World Cup tourism boom.'
              }</p>

              <h2 className="text-foreground">{language === 'es' ? 'Conclusión' : 'Conclusion'}</h2>
              <p>{language === 'es'
                ? 'Para inversionistas que buscan una combinación de valor de estilo de vida y retornos financieros, esta zona representa una oportunidad única. La ventana para precios de preventa se está cerrando a medida que la zona madura, haciendo de 2026 un año pivotal.'
                : 'For investors seeking a combination of lifestyle value and financial returns, this zone represents a rare opportunity. The window for pre-sale pricing is narrowing as the zone matures, making 2026 a pivotal year.'
              }</p>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
              <MailIcon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-xl mb-2">{language === 'es' ? 'Mantente Informado' : 'Stay Informed'}</h3>
              <p className="text-sm text-muted-foreground font-body mb-4">
                {language === 'es' ? 'Recibe insights exclusivos del mercado en tu correo.' : 'Get exclusive market insights delivered to your inbox.'}
              </p>
              <form className="flex gap-2 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder={language === 'es' ? 'Tu correo' : 'Your email'} className="flex-1 bg-muted border border-border rounded-sm px-3 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <Button variant="gold" type="submit">{language === 'es' ? 'Suscribirse' : 'Subscribe'}</Button>
              </form>
            </div>

            {/* Related Articles */}
            {related.length > 0 && (
              <div>
                <h3 className="mb-6">{language === 'es' ? 'Artículos Relacionados' : 'Related Articles'}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {related.map((a) => (
                    <Link key={a.slug} to={localePath(`/journal/${a.slug}`)} className="group">
                      <div className="aspect-[16/10] gradient-placeholder-alt rounded-sm mb-3 group-hover:scale-[1.02] transition-transform duration-500" />
                      <span className="eyebrow text-xs">{a.category[language]}</span>
                      <p className="text-sm font-body mt-1 group-hover:text-primary transition-colors line-clamp-2">{a.title[language]}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </section>
    </div>
  );
};

export default JournalPost;
