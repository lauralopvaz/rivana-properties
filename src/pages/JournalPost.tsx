import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { journalArticles, journalArticlesEs, getArticleSlug } from '@/data/journal-articles';
import { getDestination } from '@/data/destinations';
import { ClockIcon, ArrowRightIcon, MailIcon } from '@/components/icons';
import { useNewsletterSubscribe } from '@/hooks/useNewsletterSubscribe';
import { ForeignBuyerGuideBodyEN, ForeignBuyerGuideBodyES } from '@/components/journal/ForeignBuyerGuideBody';
import { UruguayMayakobaBodyES, UruguayMayakobaBodyEN } from '@/components/journal/UruguayMayakobaBody';
import { LuxuryCondosZHBodyES, LuxuryCondosZHBodyEN } from '@/components/journal/LuxuryCondosZHBody';
import { CostaMujeresBodyES, CostaMujeresBodyEN } from '@/components/journal/CostaMujeresBody';
import { CancunROIBodyES, CancunROIBodyEN } from '@/components/journal/CancunROIBody';
import { PreSaleGuideBodyES, PreSaleGuideBodyEN } from '@/components/journal/PreSaleGuideBody';
import { MayakobaVsPuertoBodyES, MayakobaVsPuertoBodyEN } from '@/components/journal/MayakobaVsPuertoBody';
import { WorldCupBodyES, WorldCupBodyEN } from '@/components/journal/WorldCupBody';
import { MondrianPresaleBodyES, MondrianPresaleBodyEN } from '@/components/journal/MondrianPresaleBody';

const JournalPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, localePath } = useLanguage();
  const [progress, setProgress] = useState(0);
  const nl = useNewsletterSubscribe();

  const allArticles = [...journalArticles, ...journalArticlesEs];
  const article = allArticles.find((a) => a.slug === slug || a.slugEn === slug);

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

  const articleSlug = article.slug;
  const enSlug = article.slugEn || article.slug;
  const currentPath = language === 'en' ? `/en/journal/${enSlug}` : `/journal/${articleSlug}`;
  const articleTitle = article.title[language];
  const seoTitle = article.seoTitle?.[language]
    || (articleTitle.length > 45 ? `${articleTitle.slice(0, 45)}… | Rivana` : `${articleTitle} | Rivana Journal`);

  const isMondrianPresale = articleSlug === 'mondrian-residences-grand-island-cancun-preventa' || slug === 'mondrian-residences-grand-island-cancun-presale';

  const schema = isMondrianPresale
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            '@id': language === 'en'
              ? 'https://rivanaproperties.com/en/journal/mondrian-residences-grand-island-cancun-presale#article'
              : 'https://rivanaproperties.com/journal/mondrian-residences-grand-island-cancun-preventa#article',
            headline: article.title[language],
            description: article.excerpt[language],
            image: 'https://rivanaproperties.com/images/mondrian/mondrian-hero.png',
            datePublished: '2026-03-25T00:00:00-05:00',
            dateModified: '2026-03-25T00:00:00-05:00',
            ...(language === 'en' ? { inLanguage: 'en' } : {}),
            author: { '@type': 'Organization', name: 'Rivana Properties', url: 'https://rivanaproperties.com' },
            publisher: { '@type': 'Organization', name: 'Rivana Properties', url: 'https://rivanaproperties.com', logo: { '@type': 'ImageObject', url: 'https://rivanaproperties.com/logo.png' } },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `https://rivanaproperties.com${currentPath}` },
            about: {
              '@type': 'Residence',
              name: 'Mondrian Residences at Grand Island Cancún',
              description: language === 'en'
                ? 'Branded residences operated by Accor under the Mondrian brand, within the Grand Island master development in Cancun\'s Hotel Zone.'
                : 'Residencias de marca operadas por Accor bajo la marca Mondrian, dentro del desarrollo maestro Grand Island en la Zona Hotelera de Cancún.',
              address: { '@type': 'PostalAddress', streetAddress: 'Km 16.5, Blvd. Kukulcán', addressLocality: 'Cancún', addressRegion: 'Quintana Roo', addressCountry: 'MX' },
              offers: { '@type': 'Offer', priceCurrency: language === 'en' ? 'USD' : 'MXN', price: language === 'en' ? '475000' : '9050000', availability: 'https://schema.org/InStock', validThrough: '2026-06-01' },
            },
            keywords: language === 'en'
              ? 'Mondrian Residences Cancun, Mondrian Residences Grand Island Cancun presale, luxury condos Cancun Hotel Zone, branded residences Cancun, Grupo Murano, Accor Cancun, Cancun real estate investment 2026'
              : 'Mondrian Residences Cancún, Mondrian Residences Grand Island Cancún, preventa Mondrian Cancún, residencias de lujo Zona Hotelera Cancún, Grupo Murano, Accor Cancún, inversión inmobiliaria Cancún 2026',
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: language === 'en' ? 'Home' : 'Inicio', item: language === 'en' ? 'https://rivanaproperties.com/en' : 'https://rivanaproperties.com' },
              { '@type': 'ListItem', position: 2, name: 'Journal', item: language === 'en' ? 'https://rivanaproperties.com/en/journal' : 'https://rivanaproperties.com/journal' },
              { '@type': 'ListItem', position: 3, name: article.seoTitle?.[language] || article.title[language], item: `https://rivanaproperties.com${currentPath}` },
            ],
          },
          {
            '@type': 'FAQPage',
            mainEntity: language === 'en'
              ? [
                  { '@type': 'Question', name: 'How much does the Mondrian Residences Grand Island Cancun presale cost?', acceptedAnswer: { '@type': 'Answer', text: 'Mondrian Residences Grand Island Cancun presale starts from approximately $475,000 USD (9,050,000 MXN) for 1-bedroom units. The projected post-presale list price is approximately $630,000 USD, representing a 33% appreciation before the Q2 2027 delivery.' } },
                  { '@type': 'Question', name: 'What is The Residences at Grand Island Cancun?', acceptedAnswer: { '@type': 'Answer', text: 'The Residences at Grand Island is the former name of the development now relaunched as Mondrian Residences at Grand Island Cancun. The rebranding was formalized following the agreement between Grupo Murano and Ennismore/Accor to operate the residential component under the Mondrian brand.' } },
                  { '@type': 'Question', name: 'When will Mondrian Residences Cancun be delivered?', acceptedAnswer: { '@type': 'Answer', text: 'Mondrian Residences at Grand Island Cancun is scheduled for delivery in Q2 2027 (second quarter of 2027).' } },
                  { '@type': 'Question', name: 'Who operates Mondrian Residences Grand Island Cancun?', acceptedAnswer: { '@type': 'Answer', text: 'Mondrian Residences at Grand Island Cancun is operated by Accor under the Mondrian brand, part of the Ennismore lifestyle hospitality platform. The developer is Grupo Murano (Nasdaq: MRNO).' } },
                  { '@type': 'Question', name: 'What is the payment plan for Mondrian Residences Cancun?', acceptedAnswer: { '@type': 'Answer', text: 'The payment plan is: 30% down payment at contract signing, 20% deferred over 12 monthly installments during construction, and 50% at delivery in Q2 2027.' } },
                  { '@type': 'Question', name: 'Can foreigners buy at Mondrian Residences Grand Island Cancun?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, foreign buyers can purchase through a bank trust (fideicomiso), the standard legal mechanism for foreigners acquiring real estate in Mexico\'s restricted zones. Rivana Properties provides fideicomiso advisory as part of the purchase process.' } },
                ]
              : [
                  { '@type': 'Question', name: '¿Cuánto cuesta la preventa de Mondrian Residences Grand Island Cancún?', acceptedAnswer: { '@type': 'Answer', text: 'La preventa parte desde $9,050,000 MXN (aproximadamente $475,000 USD) para unidades de 1 recámara. El precio de lista post-preventa proyectado es de $12,000,000 MXN, una plusvalía del 33% antes de la entrega en Q2 2027.' } },
                  { '@type': 'Question', name: '¿Qué es The Residences at Grand Island Cancún?', acceptedAnswer: { '@type': 'Answer', text: 'The Residences at Grand Island es el nombre anterior del proyecto que hoy se relanzó como Mondrian Residences at Grand Island Cancún tras el acuerdo entre Grupo Murano y Ennismore/Accor.' } },
                  { '@type': 'Question', name: '¿Cuándo es la entrega de Mondrian Residences Cancún?', acceptedAnswer: { '@type': 'Answer', text: 'La entrega está programada para Q2 2027 (segundo trimestre de 2027).' } },
                  { '@type': 'Question', name: '¿Quién opera Mondrian Residences Grand Island Cancún?', acceptedAnswer: { '@type': 'Answer', text: 'Son operadas por Accor bajo la marca Mondrian, parte de Ennismore. El desarrollador es Grupo Murano (Nasdaq: MRNO).' } },
                  { '@type': 'Question', name: '¿Cuál es el plan de pagos de Mondrian Residences Cancún?', acceptedAnswer: { '@type': 'Answer', text: '30% de enganche al firma de contrato, 20% diferido en 12 mensualidades durante la construcción, y 50% a la entrega en Q2 2027.' } },
                ],
          },
        ],
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title[language],
        description: article.excerpt[language],
        author: { '@type': 'Person', name: article.author },
        publisher: { '@type': 'Organization', name: 'Rivana Properties' },
        datePublished: article.date,
        url: `https://rivanaproperties.com/journal/${slug}`,
      };

  const toc = slug === 'foreign-buyer-guide-mexico'
    ? (language === 'es'
      ? ['¿Pueden comprar extranjeros?', 'El Fideicomiso', 'Guía Paso a Paso', '¿Por qué 2026?', 'Por qué Rivana', 'Propiedades Destacadas', 'Preguntas Frecuentes']
      : ['Can Foreigners Buy?', 'The Fideicomiso', 'Step-by-Step Guide', 'Why 2026?', 'Why Rivana', 'Featured Properties', 'FAQ'])
    : slug === 'uruguay-mayakoba-mundial-2026'
    ? (language === 'es'
      ? ['La Celeste en tu vecindario', 'Por qué Mayakoba', 'The Reserve at Mayakoba', 'Tu inversión y el Mundial', 'Vivir con la élite', 'Preguntas frecuentes']
      : ['La Celeste in your neighborhood', 'Why Mayakoba', 'The Reserve at Mayakoba', 'World Cup & your investment', 'Living with the elite', 'Group H', 'FAQ'])
    : slug === 'luxury-condos-zona-hotelera-cancun-2026-guide'
    ? (language === 'es'
      ? ['Zona Hotelera para inversión', 'Precios por zona', 'Permiso STR', 'Propiedades por perfil', 'Cómo elegir', 'Lista de verificación']
      : ['Hotel Zone for investment', 'Prices by zone', 'STR permit', 'Portfolio by profile', 'How to choose', 'Pre-sale checklist'])
    : slug === 'costa-mujeres-ultra-luxury-destination'
    ? (language === 'es'
      ? ['¿Qué es Costa Mujeres?', 'Precios por sub-zona', 'Los números', 'Por qué en 2026', 'Dhamar', 'Verificación Rivana', 'Perfil del comprador']
      : ['What is Costa Mujeres?', 'Prices by sub-zone', 'The numbers', 'Why in 2026', 'Dhamar', 'Rivana verification', 'Buyer profile'])
    : slug === 'cancun-roi-rental-yield'
    ? (language === 'es'
      ? ['Contexto macro', 'Zona Hotelera', 'Puerto Cancún', 'Cancún Centro', 'Comparativa por zona', 'Factor STR', 'Efecto Mundial', 'Preguntas frecuentes']
      : ['Macro context', 'Hotel Zone', 'Puerto Cancún', 'Downtown Cancún', 'Zone comparison', 'STR factor', 'World Cup effect', 'FAQ'])
    : slug === 'mayakoba-vs-puerto-cancun'
    ? (language === 'es'
      ? ['Mayakoba', 'Puerto Cancún', 'Comparativa directa', 'Perfil de comprador', 'Factor Mundial', 'Rivana en ambas zonas', 'Preguntas frecuentes']
      : ['Mayakoba', 'Puerto Cancún', 'Direct comparison', 'Buyer profile', 'World Cup factor', 'Rivana across both', 'FAQ'])
    : (articleSlug === 'invertir-en-preventa-cancun-riviera-maya-2026' || slug === 'why-invest-presale-cancun-riviera-maya-2026')
    ? (language === 'es'
      ? ['¿Qué es la preventa?', 'Por qué el Caribe', 'Fases de preventa', 'Propiedades Rivana', 'Qué verificar', 'Riesgos', 'Ventana 2026', 'Preventa vs Reventa', 'FAQ']
      : ['What is pre-sale?', 'Why the Caribbean', 'Pre-sale phases', 'Rivana properties', 'What to verify', 'Risks', '2026 window', 'Pre-sale vs Resale', 'FAQ'])
    : slug === 'world-cup-2026-cancun-real-estate'
    ? (language === 'es'
      ? ['Inversión estructural', 'Números 2026', 'Impacto Mundial', 'Zona a zona', 'Renta vs Plusvalía', 'Qué verificar', 'Preguntas frecuentes']
      : ['Structural case', '2026 data', 'World Cup impact', 'Zone by zone', 'Rental vs appreciation', 'What to verify', 'FAQ'])
    : (articleSlug === 'mondrian-residences-grand-island-cancun-preventa' || slug === 'mondrian-residences-grand-island-cancun-presale')
    ? (language === 'es'
      ? ['Qué es Mondrian Residences', 'De The Residences a Mondrian', 'La marca Mondrian', 'Ubicación', 'Preventa: precio y ROI', 'Contexto macro', '¿Para quién es?', 'Proceso de compra']
      : ['What is Mondrian Residences', 'From The Residences to Mondrian', 'The Mondrian brand', 'Location', 'Presale: price & ROI', 'Macro context', 'Who is it for?', 'How to buy'])
    : [
      language === 'es' ? 'Introducción' : 'Introduction',
      language === 'es' ? 'Panorama del Mercado' : 'Market Overview',
      language === 'es' ? 'Factores Clave' : 'Key Investment Drivers',
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
      <SEOHead title={seoTitle} description={article.excerpt[language]} path={currentPath} schema={schema} ogImage={article.image} />

      {/* Reading Progress */}
      <div className="fixed top-0 left-0 right-0 z-[200]">
        <div className="reading-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      </div>

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0">
          <img src={article.image} alt={article.title[language]} className="w-full h-full object-cover opacity-25" loading="eager" width={1280} height={800} />
        </div>
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
                    {slug === 'uruguay-mayakoba-mundial-2026' && (
                      <Link
                        to={localePath('/propiedad/the-reserve-at-mayakoba')}
                        className="block text-sm font-body text-primary hover:text-primary/80 transition-colors"
                      >
                        → The Reserve at Mayakoba
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Article */}
          <article className="lg:col-span-3 space-y-8">
            {slug === 'foreign-buyer-guide-mexico' ? (
              language === 'en' ? <ForeignBuyerGuideBodyEN /> : <ForeignBuyerGuideBodyES />
            ) : slug === 'uruguay-mayakoba-mundial-2026' ? (
              language === 'en' ? <UruguayMayakobaBodyEN /> : <UruguayMayakobaBodyES />
            ) : slug === 'luxury-condos-zona-hotelera-cancun-2026-guide' ? (
              language === 'en' ? <LuxuryCondosZHBodyEN /> : <LuxuryCondosZHBodyES />
            ) : slug === 'costa-mujeres-ultra-luxury-destination' ? (
              language === 'en' ? <CostaMujeresBodyEN /> : <CostaMujeresBodyES />
            ) : slug === 'cancun-roi-rental-yield' ? (
              language === 'en' ? <CancunROIBodyEN /> : <CancunROIBodyES />
            ) : (articleSlug === 'invertir-en-preventa-cancun-riviera-maya-2026' || slug === 'why-invest-presale-cancun-riviera-maya-2026') ? (
              language === 'en' ? <PreSaleGuideBodyEN /> : <PreSaleGuideBodyES />
            ) : slug === 'mayakoba-vs-puerto-cancun' ? (
              language === 'en' ? <MayakobaVsPuertoBodyEN /> : <MayakobaVsPuertoBodyES />
            ) : slug === 'world-cup-2026-cancun-real-estate' ? (
              language === 'en' ? <WorldCupBodyEN /> : <WorldCupBodyES />
            ) : (articleSlug === 'mondrian-residences-grand-island-cancun-preventa' || slug === 'mondrian-residences-grand-island-cancun-presale') ? (
              language === 'en' ? <MondrianPresaleBodyEN /> : <MondrianPresaleBodyES />
            ) : (
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
            )}

            {/* Newsletter CTA */}
            <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
              <MailIcon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-xl mb-2">{language === 'es' ? 'Mantente Informado' : 'Stay Informed'}</h3>
              {nl.success ? (
                <p className="text-primary font-body">{language === 'es' ? '¡Suscrito! 🎉' : 'Subscribed! 🎉'}</p>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground font-body mb-4">
                    {language === 'es' ? 'Recibe insights exclusivos del mercado en tu correo.' : 'Get exclusive market insights delivered to your inbox.'}
                  </p>
                  <form className="flex gap-2 max-w-sm mx-auto" onSubmit={nl.handleSubmit}>
                    <input type="email" required value={nl.email} onChange={(e) => nl.setEmail(e.target.value)} placeholder={language === 'es' ? 'Tu correo' : 'Your email'} className="flex-1 bg-muted border border-border rounded-sm px-3 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                    <Button variant="gold" type="submit" disabled={nl.loading}>{nl.loading ? '...' : language === 'es' ? 'Suscribirse' : 'Subscribe'}</Button>
                  </form>
                </>
              )}
            </div>

            {/* Related Articles */}
            {related.length > 0 && (
              <div>
                <h3 className="mb-6">{language === 'es' ? 'Artículos Relacionados' : 'Related Articles'}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {related.map((a) => (
                    <Link key={a.slug} to={localePath(`/journal/${getArticleSlug(a, language)}`)} className="group">
                      <div className="aspect-[16/10] overflow-hidden rounded-sm mb-3">
                        <img src={a.image} alt={a.title[language]} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" width={1280} height={800} />
                      </div>
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
