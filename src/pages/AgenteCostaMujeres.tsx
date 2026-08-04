import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { BedIcon, RulerIcon, TrendingUpIcon } from '@/components/icons';
import { properties } from '@/lib/properties';

const WA =
  'https://wa.me/529988457224?text=COSTA%20MUJERES%20%E2%80%94%20Quiero%20asesor%C3%ADa%20de%20un%20agente%20en%20Costa%20Mujeres&utm_source=web&utm_medium=whatsapp&utm_campaign=lead&utm_content=agente-costa-mujeres';

const WA_EN =
  'https://wa.me/529988457224?text=COSTA%20MUJERES%20%E2%80%94%20I%20want%20to%20speak%20with%20a%20real%20estate%20agent%20in%20Costa%20Mujeres&utm_source=web&utm_medium=whatsapp&utm_campaign=lead&utm_content=real-estate-agent-costa-mujeres-en';

const ES_PATH = '/agente-inmobiliario-costa-mujeres';
const EN_PATH = '/en/real-estate-agent-costa-mujeres';

const CM_REGEX = /Costa Mujeres|Playa Mujeres|Amada/i;

const formatPrice = (usd: number) => {
  if (!usd) return 'Consultar';
  if (usd >= 1_000_000) return `$${(usd / 1_000_000).toFixed(1)}M USD`;
  return `$${Math.round(usd / 1000)}K USD`;
};

const AgenteCostaMujeres = () => {
  const { localePath, isEnglish } = useLanguage();

  const cmProperties = properties.filter(
    (p) => CM_REGEX.test(p.zone) || CM_REGEX.test(p.name),
  );

  const h1 = isEnglish
    ? 'Real Estate Agent in Costa Mujeres'
    : 'Agente Inmobiliario en Costa Mujeres';
  const seoTitle = isEnglish
    ? 'Real Estate Agent in Costa Mujeres | Rivana Properties'
    : 'Agente Inmobiliario en Costa Mujeres | Rivana Properties';
  const seoDesc = isEnglish
    ? 'Buyer-side real estate agent in Costa Mujeres and Playa Mujeres. Private advisory for foreign buyers: bank trust, closing costs and honest rental numbers.'
    : 'Agente inmobiliario en Costa Mujeres: asesoría boutique para comprar departamentos y residencias frente al mar en Playa Mujeres y La Amada. Atención privada.';
  const path = isEnglish ? EN_PATH : ES_PATH;
  const url = `https://rivanaproperties.com${path}`;

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Rivana Properties',
      description: seoDesc,
      url,
      areaServed: { '@type': 'Place', name: 'Costa Mujeres' },
      telephone: '+52 998 845 7224',
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cancún',
        addressRegion: 'Quintana Roo',
        addressCountry: 'MX',
      },
      sameAs: [
        'https://www.instagram.com/rivanaproperties',
        'https://www.facebook.com/rivanaproperties',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Propiedades en Costa Mujeres',
      numberOfItems: cmProperties.length,
      itemListElement: cmProperties.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: p.name,
          url: `https://rivanaproperties.com/propiedad/${p.slug}`,
          offers: {
            '@type': 'Offer',
            price: p.priceFromUSD || undefined,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
      })),
    },
  ];

  const CtaWhatsApp = ({ label }: { label?: string }) => (
    <a
      href={isEnglish ? WA_EN : WA}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block uppercase transition-colors duration-300 hover:bg-[#b89a4a]"
      style={{
        background: '#CFAE60',
        color: '#FFFFFF',
        fontSize: '13px',
        letterSpacing: '3px',
        fontWeight: 400,
        padding: '17px 44px',
        fontFamily: "'Jost', sans-serif",
      }}
    >
      {label || 'Hablar por WhatsApp'}
    </a>
  );

  return (
    <div style={{ background: '#F8F6F2' }}>
      <SEOHead
        title={seoTitle}
        description={seoDesc}
        path={path}
        schema={schema}
        hreflangEs={ES_PATH}
        hreflangEn={EN_PATH}
      />

      {/* ── Hero / Intro ── */}
      <section className="pt-28 pb-12 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <p className="text-[12px] tracking-[4px] uppercase font-body font-[300] mb-4" style={{ color: '#CFAE60' }}>
          Costa Mujeres · Playa Mujeres
        </p>
        <h1 className="font-display text-[clamp(28px,5vw,48px)] font-[300] mb-4" style={{ color: '#1C1C1C' }}>
          {h1}
        </h1>
        <div className="font-body font-[300] text-[16px] max-w-2xl leading-[1.8] mb-8 space-y-4" style={{ color: '#4B4B4B' }}>
          <p>
            Rivana Properties es una asesoría inmobiliaria boutique especializada en Costa Mujeres y Playa
            Mujeres. Trabajamos con un número limitado de clientes a la vez —nacionales y extranjeros— para
            acompañar la compra completa: selección de proyecto, negociación con el desarrollador, revisión
            legal y escrituración.
          </p>
          <p>
            No operamos con inventario masivo ni con guiones de venta. Conocemos cada desarrollo de la zona,
            sus etapas de precio, sus tiempos de entrega y su desempeño real en renta, y esa es la base sobre
            la que recomendamos.
          </p>
        </div>
        <CtaWhatsApp label="Quiero asesoría en Costa Mujeres" />
      </section>

      {/* ── Listado curado ── */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto mb-20">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(22px,3.5vw,32px)] font-[300] mb-6" style={{ color: '#1C1C1C' }}>
            Propiedades en Costa Mujeres y Playa Mujeres
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2px]" style={{ background: '#F8F6F2' }}>
          {cmProperties.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 60}>
              <Link
                to={localePath(`/propiedad/${p.slug}`)}
                className="group block bg-white h-full transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:-translate-y-[2px]"
              >
                <div className="relative overflow-hidden" style={{ paddingTop: '75%' }}>
                  <img
                    src={p.images[0]}
                    alt={`${p.name} — propiedad en venta en ${p.zone}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  {p.roiEstimate > 0 && (
                    <span
                      className="absolute top-3 left-3 text-[12px] px-[10px] py-[5px] font-body flex items-center gap-1 text-white"
                      style={{ background: '#CFAE60' }}
                    >
                      <TrendingUpIcon className="w-3 h-3" /> {p.roiEstimate}%
                    </span>
                  )}
                </div>
                <div className="px-5 pt-5 pb-4">
                  <p className="text-[12px] tracking-[3px] uppercase font-body font-[300] mb-1.5" style={{ color: '#CFAE60' }}>
                    {p.zone}
                  </p>
                  <h3 className="font-display text-[22px] font-[300] mb-2.5" style={{ color: '#1C1C1C' }}>{p.name}</h3>
                  <div className="flex items-center gap-[14px] mb-3">
                    <span className="flex items-center gap-1 text-[14px] font-body" style={{ color: '#4B4B4B' }}>
                      <BedIcon className="w-3 h-3" /> {p.bedrooms} Rec.
                    </span>
                    <span className="flex items-center gap-1 text-[14px] font-body" style={{ color: '#4B4B4B' }}>
                      <RulerIcon className="w-3 h-3" /> {p.sqmRange}
                    </span>
                  </div>
                  <div className="flex items-end justify-between pt-3 mt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <div>
                      <span className="block text-[11px] font-body font-[300] uppercase tracking-[2px]" style={{ color: '#4B4B4B' }}>
                        Desde
                      </span>
                      <span className="font-display text-[22px]" style={{ color: '#CFAE60' }}>{formatPrice(p.priceFromUSD)}</span>
                    </div>
                    <span className="text-[13px] font-body font-[300] flex items-center gap-1 transition-colors group-hover:text-[#CFAE60]" style={{ color: '#4B4B4B' }}>
                      Ver <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link to="/costa-mujeres/la-amada" className="font-body text-[14px] tracking-[2px] uppercase" style={{ color: '#CFAE60' }}>
              Ver La Amada Residences →
            </Link>
            <Link to="/cancun/costa-mujeres" className="font-body text-[14px] tracking-[2px] uppercase" style={{ color: '#CFAE60' }}>
              Ver toda la zona de Costa Mujeres →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Cuerpo editorial ── */}
      <section className="px-6 lg:px-10 max-w-[900px] mx-auto pb-8">
        <article className="space-y-12">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(22px,3.5vw,32px)] font-[300] mb-4" style={{ color: '#1C1C1C' }}>
              Por qué invertir en Costa Mujeres
            </h2>
            <div className="font-body font-[300] text-[16px] space-y-4" style={{ color: '#4B4B4B', lineHeight: 1.9 }}>
              <p>
                Costa Mujeres es el frente de crecimiento del norte de Cancún. Hasta hace una década era una
                franja costera prácticamente sin desarrollar; hoy concentra la mayor apertura de hotelería de
                marca del Caribe mexicano y una oferta residencial nueva que entra al mercado con precios por
                metro cuadrado todavía por debajo de la Zona Hotelera. Esa brecha es la razón principal por la
                que el comprador de inversión mira esta zona: el ticket de entrada es menor y el margen de
                apreciación a mediano plazo es más amplio.
              </p>
              <p>
                La playa es el segundo argumento. Las arenas de Costa Mujeres son más anchas y con menos
                erosión que en el corredor tradicional, y el mar frente a Isla Mujeres es más tranquilo, lo que
                permite operar clubes de playa y marinas todo el año. Para renta vacacional, esa calidad de
                playa se traduce en tarifas por noche sostenidas y en huéspedes que repiten.
              </p>
              <p>
                El tercer factor es la hotelería de lujo. La llegada del St. Regis Kanai y la consolidación de
                complejos como Grand Palladium Costa Mujeres, TRS Coral y Dreams Playa Mujeres colocaron a la
                zona en el mapa del viajero de alto gasto, y con ellos llegaron la infraestructura vial, los
                servicios y la seguridad que antes no existían. Cada apertura de marca sube el valor del suelo
                circundante: el residencial no compite con el hotel, se beneficia de él.
              </p>
              <p>
                Finalmente, la oferta es finita. La franja urbanizable entre Punta Sam y Playa Mujeres tiene
                límites físicos claros y una parte importante está ya asignada. Cuando el suelo se agota y la
                demanda sigue creciendo, el precio de las unidades existentes es lo que se ajusta.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-display text-[clamp(22px,3.5vw,32px)] font-[300] mb-4" style={{ color: '#1C1C1C' }}>
              Zonas dentro de Costa Mujeres
            </h2>
            <div className="font-body font-[300] text-[16px] space-y-4" style={{ color: '#4B4B4B', lineHeight: 1.9 }}>
              <p>
                <strong style={{ color: '#1C1C1C' }}>Playa Mujeres</strong> es el corazón del destino: un
                master plan con campo de golf firmado por Greg Norman, marina, clubes de playa y acceso
                controlado. Es la zona con la mezcla más equilibrada entre uso propio y renta, y donde se
                concentran los desarrollos con mejor administración y amenidades de nivel hotelero. Quien busca
                una segunda residencia que además genere ingreso encuentra aquí el producto más consistente.
              </p>
              <p>
                <strong style={{ color: '#1C1C1C' }}>La Amada</strong> es el enclave más exclusivo y también el
                más consolidado. Con residencias de gran formato frente al mar, marina propia y una comunidad
                pequeña, funciona como el segmento alto de Costa Mujeres: menos unidades, mayor privacidad y
                una reventa históricamente sólida por escasez de inventario. Puedes revisar el detalle en la
                página de <Link to="/costa-mujeres/la-amada" style={{ color: '#CFAE60' }}>La Amada Residences</Link>.
              </p>
              <p>
                Hacia el sur, la franja que conecta con <strong style={{ color: '#1C1C1C' }}>Punta Sam</strong>{' '}
                ofrece los precios de entrada más accesibles de la zona y una lógica distinta: proyectos más
                compactos, orientados a renta y a compradores que priorizan el rendimiento por encima del uso
                propio.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-display text-[clamp(22px,3.5vw,32px)] font-[300] mb-4" style={{ color: '#1C1C1C' }}>
              Cómo trabajamos
            </h2>
            <div className="font-body font-[300] text-[16px] space-y-4" style={{ color: '#4B4B4B', lineHeight: 1.9 }}>
              <p>
                Representamos al comprador, no al desarrollador. Nuestra función es filtrar: revisar qué
                proyectos cumplen con permisos, avance real de obra, historial del desarrollador y precio
                coherente con su etapa, y descartar los que no. Cuando una unidad no nos parece buena
                inversión, lo decimos.
              </p>
              <p>
                Cero presión. No hay listas de espera artificiales ni descuentos que expiran esa misma tarde. El
                comprador decide con la información completa —números de renta, costos de operación, cuotas de
                mantenimiento, tiempos de entrega— y con el tiempo que necesite.
              </p>
              <p>
                Acompañamos el proceso legal completo: revisión de contrato de compraventa, coordinación con
                notaría, cálculo de costos de cierre, constitución de fideicomiso cuando aplica y seguimiento
                hasta la entrega de llaves y la escritura firmada.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-display text-[clamp(22px,3.5vw,32px)] font-[300] mb-4" style={{ color: '#1C1C1C' }}>
              Para compradores extranjeros
            </h2>
            <div className="font-body font-[300] text-[16px] space-y-4" style={{ color: '#4B4B4B', lineHeight: 1.9 }}>
              <p>
                Un extranjero puede comprar en Costa Mujeres sin restricciones. Como la zona está dentro de la
                franja costera, la propiedad se adquiere mediante fideicomiso bancario: un banco mexicano
                aparece como fiduciario y el comprador es el beneficiario, con derecho pleno a habitar, rentar,
                remodelar, heredar y vender. Se constituye por 50 años y es renovable de forma indefinida.
              </p>
              <p>
                No se requiere residencia mexicana ni historial de crédito local para comprar. Los pasos son
                claros: oferta y contrato, permiso de la Secretaría de Relaciones Exteriores, constitución del
                fideicomiso, cierre ante notario y RFC para efectos fiscales. Explicamos cada etapa a detalle
                en nuestra{' '}
                <Link to="/en/journal/fideicomiso-mexico-bank-trust-explained" style={{ color: '#CFAE60' }}>
                  guía del fideicomiso (EN)
                </Link>
                .
              </p>
              {/* PENDIENTE: enlazar a la página de representación del comprador cuando exista */}
            </div>
          </ScrollReveal>
        </article>
      </section>

      {/* ── CTA final ── */}
      <section className="px-6 lg:px-10 max-w-[900px] mx-auto pb-24 text-center">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(22px,3.5vw,32px)] font-[300] mb-4" style={{ color: '#1C1C1C' }}>
            Habla con un agente en Costa Mujeres
          </h2>
          <p className="font-body font-[300] text-[16px] mb-7 max-w-xl mx-auto" style={{ color: '#4B4B4B', lineHeight: 1.9 }}>
            Disponibilidad real, precios por etapa y números de renta por proyecto, directo con tu asesora.
          </p>
          <CtaWhatsApp label="Quiero asesoría en Costa Mujeres" />
        </ScrollReveal>
      </section>
    </div>
  );
};

export default AgenteCostaMujeres;
