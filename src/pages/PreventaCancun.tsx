import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { waCta } from '@/lib/whatsapp-cta';
import { BedIcon, RulerIcon, TrendingUpIcon } from '@/components/icons';
import { properties } from '@/lib/properties';

const WA_ES =
  'https://wa.me/529988457224?text=PREVENTA%20CANC%C3%9AN%20%E2%80%94%20Quiero%20informaci%C3%B3n%20de%20proyectos%20en%20preventa&utm_source=web&utm_medium=whatsapp&utm_campaign=lead&utm_content=preventa-cancun-landing';
const WA_EN =
  'https://wa.me/529988457224?text=PRE-CONSTRUCTION%20CANCUN%20%E2%80%94%20I%20want%20information%20about%20pre-construction%20projects&utm_source=web&utm_medium=whatsapp&utm_campaign=lead&utm_content=preconstruction-cancun-landing';

/** Cancún-area zones included in this pillar landing */
const CANCUN_ZONES = ['Zona Hotelera', 'Puerto Cancún', 'Costa Mujeres', 'Cancún Centro'];

const formatPrice = (usd: number, lang: string) => {
  if (!usd) return lang === 'es' ? 'Consultar' : 'Contact Us';
  if (usd >= 1_000_000) return `$${(usd / 1_000_000).toFixed(1)}M USD`;
  return `$${Math.round(usd / 1000)}K USD`;
};

const PreventaCancun = () => {
  const { language: L, localePath } = useLanguage();
  const es = L === 'es';

  // Catálogo seleccionado: solo propiedades en estado "preventa" en la zona de Cancún
  const presaleProperties = properties.filter(
    (p) => p.status === 'preventa' && CANCUN_ZONES.some((z) => p.zone.includes(z)),
  );
  const beachfront = presaleProperties.filter((p) =>
    /Zona Hotelera|Costa Mujeres|Puerto Cancún/.test(p.zone),
  );

  const h1 = es ? 'Propiedades en Preventa en Cancún' : 'Pre-Construction Properties in Cancún';
  const seoTitle = es
    ? 'Propiedades en Preventa en Cancún | Rivana Properties'
    : 'Pre-Construction Condos in Cancún | Rivana Properties';
  const seoDesc = es
    ? 'Propiedades en preventa en Cancún con precios de lanzamiento, plusvalía proyectada del 15–33% a la entrega y ROI de renta del 8–12% anual. Asesoría privada.'
    : 'Pre-construction properties in Cancún with launch pricing, 15–33% projected appreciation at delivery and 8–12% annual rental ROI. Private advisory.';

  const path = es ? '/preventa-cancun' : '/en/pre-construction-cancun';

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: h1,
      description: seoDesc,
      url: `https://rivanaproperties.com${path}`,
      inLanguage: es ? 'es-MX' : 'en-US',
      isPartOf: { '@type': 'WebSite', name: 'Rivana Properties', url: 'https://rivanaproperties.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: h1,
      numberOfItems: presaleProperties.length,
      itemListElement: presaleProperties.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: p.name,
          url: `https://rivanaproperties.com${localePath(`/propiedad/${p.slug}`)}`,
          offers: {
            '@type': 'Offer',
            price: p.priceFromUSD || undefined,
            priceCurrency: 'USD',
            availability: 'https://schema.org/PreOrder',
          },
        },
      })),
    },
  ];

  const waHref = es ? WA_ES : WA_EN;

  const CtaWhatsApp = ({ label }: { label?: string }) => (
    <a
      href={waHref}
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
      {label || waCta(es ? 'es' : 'en', 'info')}
    </a>
  );

  return (
    <div style={{ background: '#F8F6F2' }}>
      <SEOHead
        title={seoTitle}
        description={seoDesc}
        path={path}
        schema={schema}
        hreflangEs="/preventa-cancun"
        hreflangEn="/en/pre-construction-cancun"
      />

      {/* ── Hero ── */}
      <section className="pt-28 pb-12 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <p className="text-[12px] tracking-[4px] uppercase font-body font-normal mb-4" style={{ color: '#CFAE60' }}>
          {es ? 'Cancún · Preventa 2026' : 'Cancún · Pre-Construction 2026'}
        </p>
        <h1 className="font-display text-[clamp(40px,5vw,48px)] font-normal mb-4" style={{ color: '#1C1C1C' }}>
          {h1}
        </h1>
        <p className="font-body font-normal text-[16px] max-w-2xl leading-[1.8] mb-8" style={{ color: '#4B4B4B' }}>
          {es
            ? 'Selección seleccionada de proyectos en preventa en Zona Hotelera, Puerto Cancún, Costa Mujeres y Cancún Centro: precios de lanzamiento, esquemas de pago diferido y plusvalía capturada antes de la entrega.'
            : 'A curated selection of pre-construction projects in the Hotel Zone, Puerto Cancún, Costa Mujeres and Downtown Cancún: launch pricing, deferred payment plans and appreciation captured before delivery.'}
        </p>
        <CtaWhatsApp label={es ? 'Quiero información de preventa' : 'I want pre-construction info'} />
      </section>

      {/* ── Listado seleccionado de preventa ── */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto mb-20">
        <ScrollReveal>
          <h2 className="font-body text-[clamp(22px,3.5vw,32px)] font-semibold mb-6" style={{ color: '#1C1C1C' }}>
            {es ? 'Proyectos en Preventa Disponibles en Cancún' : 'Available Pre-Construction Projects in Cancún'}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2px]" style={{ background: '#F8F6F2' }}>
          {presaleProperties.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 60}>
              <Link
                to={localePath(`/propiedad/${p.slug}`)}
                className="group block bg-white h-full transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:-translate-y-[2px]"
              >
                <div className="relative overflow-hidden" style={{ paddingTop: '75%' }}>
                  <img
                    src={p.images[0]}
                    alt={`${p.name} — ${es ? 'preventa en' : 'pre-construction in'} ${p.zone}, Cancún`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span
                      className="text-[12px] tracking-[2px] uppercase font-body text-white px-[10px] py-[5px]"
                      style={{ background: '#26547D' }}
                    >
                      {es ? 'Preventa' : 'Pre-Sale'}
                    </span>
                    {p.roiEstimate > 0 && (
                      <span
                        className="text-[12px] px-[10px] py-[5px] font-body flex items-center gap-1 text-white"
                        style={{ background: '#CFAE60' }}
                      >
                        <TrendingUpIcon className="w-3 h-3" /> {p.roiEstimate}%
                      </span>
                    )}
                  </div>
                </div>
                <div className="px-5 pt-5 pb-4">
                  <p className="text-[12px] tracking-[3px] uppercase font-body font-normal mb-1.5" style={{ color: '#CFAE60' }}>
                    {es ? p.zone : p.zoneEn || p.zone}
                  </p>
                  <h3 className="font-display text-[22px] font-normal mb-2.5" style={{ color: '#1C1C1C' }}>{p.name}</h3>
                  <div className="flex items-center gap-[14px] mb-3">
                    <span className="flex items-center gap-1 text-[14px] font-body" style={{ color: '#4B4B4B' }}>
                      <BedIcon className="w-3 h-3" /> {es ? p.bedrooms : p.bedroomsEn || p.bedrooms} {es ? 'Rec.' : 'Beds'}
                    </span>
                    <span className="flex items-center gap-1 text-[14px] font-body" style={{ color: '#4B4B4B' }}>
                      <RulerIcon className="w-3 h-3" /> {p.sqmRange}
                    </span>
                  </div>
                  <div className="flex items-end justify-between pt-3 mt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <div>
                      <span className="block text-[11px] font-body font-normal uppercase tracking-[2px]" style={{ color: '#4B4B4B' }}>
                        {es ? 'Desde' : 'From'}
                      </span>
                      <span className="font-display text-[22px]" style={{ color: '#CFAE60' }}>{formatPrice(p.priceFromUSD, L)}</span>
                    </div>
                    <span className="text-[13px] font-body font-normal flex items-center gap-1 transition-colors group-hover:text-[#CFAE60]" style={{ color: '#4B4B4B' }}>
                      {es ? 'Ver' : 'View'} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Cuerpo editorial ── */}
      {/* PENDIENTE: copy final del cliente — reemplazar el texto guía manteniendo los H2 */}
      <section className="px-6 lg:px-10 max-w-[900px] mx-auto pb-4">
        <article className="space-y-12">
          <ScrollReveal>
            <h2 className="font-body text-[clamp(22px,3.5vw,32px)] font-semibold mb-4" style={{ color: '#1C1C1C' }}>
              {es ? 'Por qué invertir en preventa en Cancún' : 'Why invest in pre-construction in Cancún'}
            </h2>
            <div className="font-body font-normal text-[16px] space-y-4" style={{ color: '#4B4B4B', lineHeight: 1.9 }}>
              <p>
                {es
                  ? 'Comprar en preventa en Cancún significa entrar al proyecto en su etapa de lanzamiento, cuando el desarrollador necesita colocar las primeras unidades y ofrece el precio más bajo de todo el ciclo comercial. Ese diferencial —normalmente entre 15% y 33% respecto al precio de entrega— es la ganancia patrimonial más previsible del mercado inmobiliario del Caribe mexicano: no depende de una revalorización especulativa, sino de la propia estructura de precios del desarrollo, que sube por etapas conforme avanza la obra.'
                  : 'Buying pre-construction in Cancún means entering a project during its launch phase, when the developer needs to place the first units and offers the lowest price of the entire commercial cycle. That gap — usually between 15% and 33% versus the delivery price — is the most predictable equity gain in the Mexican Caribbean market: it does not depend on speculative revaluation, but on the development’s own pricing structure, which rises in stages as construction advances.'}
              </p>
              <p>
                {es
                  ? 'A esa mecánica se suma la demanda estructural de Cancún. El aeropuerto internacional mueve más de 30 millones de pasajeros al año, la ocupación hotelera se mantiene arriba del 80% en temporada alta y el inventario de suelo frente al mar es finito. Cuando la oferta no puede crecer al ritmo de la demanda, el precio por metro cuadrado sube: entre 2019 y 2026 la Zona Hotelera y Puerto Cancún han registrado incrementos sostenidos de dos dígitos anuales en producto de lujo.'
                  : 'On top of that mechanism sits Cancún’s structural demand. Its international airport moves more than 30 million passengers a year, hotel occupancy stays above 80% in high season, and beachfront land inventory is finite. When supply cannot grow at the pace of demand, price per square metre rises: between 2019 and 2026 the Hotel Zone and Puerto Cancún have posted sustained double-digit annual increases in luxury product.'}
              </p>
              <p>
                {es
                  ? 'La preventa también permite elegir. En etapa de lanzamiento están disponibles los mejores niveles, las mejores orientaciones y los penthouses, que son precisamente las unidades que sostienen mejor su valor y se rentan más rápido. Quien compra a la entrega ya solo elige de lo que sobró.'
                  : 'Pre-construction also lets you choose. At launch, the best floors, orientations and penthouses are still available — precisely the units that hold value best and rent fastest. Buyers who wait until delivery only choose from what is left.'}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[clamp(22px,3.5vw,32px)] font-semibold mb-4" style={{ color: '#1C1C1C' }}>
              {es ? 'ROI y rendimiento anual esperado' : 'ROI and expected annual yield'}
            </h2>
            <div className="font-body font-normal text-[16px] space-y-4" style={{ color: '#4B4B4B', lineHeight: 1.9 }}>
              <p>
                {es
                  ? 'El rendimiento de una propiedad en preventa en Cancún se compone de dos fuentes independientes. La primera es la plusvalía: la diferencia entre el precio de lanzamiento que pagas hoy y el valor comercial de la unidad al momento de la entrega. La segunda es el flujo de renta: una vez entregada y amueblada, una unidad bien ubicada en Zona Hotelera o Puerto Cancún opera entre 8% y 12% de rendimiento bruto anual con esquemas de renta vacacional, y entre 5% y 7% con renta residencial de largo plazo.'
                  : 'The return of a pre-construction property in Cancún comes from two independent sources. The first is appreciation: the gap between the launch price you pay today and the unit’s market value at delivery. The second is rental cash flow: once delivered and furnished, a well-located unit in the Hotel Zone or Puerto Cancún runs between 8% and 12% gross annual yield under vacation-rental schemes, and between 5% and 7% with long-term residential leases.'}
              </p>
              <p>
                {es
                  ? 'Para modelar el rendimiento real conviene trabajar con tres variables: tarifa promedio por noche, ocupación anual y costos de operación (administración, mantenimiento, energía, comisiones de plataforma y predial). En Zona Hotelera las tarifas de unidades de lujo con vista al mar se sostienen por encima del promedio de la ciudad y la ocupación anual difícilmente baja del 65%, lo que hace que el ingreso sea más estable que en zonas dependientes de una sola temporada.'
                  : 'To model real returns, work with three variables: average nightly rate, annual occupancy and operating costs (management, maintenance, energy, platform fees and property tax). In the Hotel Zone, luxury sea-view rates hold above the city average and annual occupancy rarely drops below 65%, which makes income more stable than in areas that depend on a single season.'}
              </p>
              <p>
                {es
                  ? 'El factor que más mueve el ROI final es el momento de entrada. Comprar en la primera etapa, cuando aún se puede negociar precio y unidad, cambia el resultado del proyecto completo. Por eso el trabajo de asesoría empieza antes de que el desarrollo salga al mercado abierto.'
                  : 'The factor that moves final ROI the most is entry timing. Buying in the first phase, while price and unit are still negotiable, changes the outcome of the whole investment. That is why advisory work starts before a development reaches the open market.'}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[clamp(22px,3.5vw,32px)] font-semibold mb-4" style={{ color: '#1C1C1C' }}>
              {es ? 'Esquemas de financiamiento y facilidades de pago' : 'Financing schemes and payment plans'}
            </h2>
            <div className="font-body font-normal text-[16px] space-y-4" style={{ color: '#4B4B4B', lineHeight: 1.9 }}>
              <p>
                {es
                  ? 'La preventa se paga por etapas, no de golpe. El esquema más común en Cancún es 30/20/50: 30% de enganche a la firma, 20% en pagos mensuales sin intereses durante la construcción y 50% contra entrega. Hay desarrollos que abren con enganches desde el 10% y otros que ofrecen descuento adicional por pago de contado. Todo el financiamiento durante obra lo otorga el desarrollador, sin trámite bancario ni historial de crédito mexicano.'
                  : 'Pre-construction is paid in stages, not all at once. The most common scheme in Cancún is 30/20/50: 30% down payment at signing, 20% in interest-free monthly instalments during construction and 50% at delivery. Some developments open with down payments from 10%, and others offer an additional discount for cash purchase. All construction-stage financing comes from the developer, with no bank process or Mexican credit history required.'}
              </p>
              <p>
                {es
                  ? 'Para el 50% de la entrega existen tres rutas: liquidar de contado, contratar un crédito hipotecario en México (disponible para extranjeros con comprobación de ingresos) o refinanciar desde el país de origen. Los compradores extranjeros que adquieren en la franja costera lo hacen mediante fideicomiso bancario, una figura legal establecida que otorga control total sobre la propiedad y se renueva cada 50 años.'
                  : 'For the 50% due at delivery there are three routes: pay cash, take a Mexican mortgage (available to foreigners with proof of income) or refinance from your home country. Foreign buyers acquiring within the coastal zone do so through a bank trust (fideicomiso), an established legal structure that grants full control over the property and renews every 50 years.'}
              </p>
              <p>
                {es
                  ? 'Además del precio de lista conviene presupuestar los costos de cierre: escrituración, ISABI, avalúo, constitución de fideicomiso y honorarios notariales suman típicamente entre 5% y 7% del valor de la operación.'
                  : 'Beyond list price, budget closing costs: deed, acquisition tax, appraisal, trust setup and notary fees typically add between 5% and 7% of the transaction value.'}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[clamp(22px,3.5vw,32px)] font-semibold mb-4" style={{ color: '#1C1C1C' }}>
              {es ? 'Zonas clave y su potencial' : 'Key zones and their potential'}
            </h2>
            <div className="font-body font-normal text-[16px] space-y-4" style={{ color: '#4B4B4B', lineHeight: 1.9 }}>
              <p>
                {es
                  ? 'La Zona Hotelera es el corredor con mayor demanda de renta vacacional del país: playa de arena blanca, vista al Caribe y una base hotelera que garantiza flujo turístico durante todo el año. El suelo disponible es prácticamente nulo, así que cada nuevo proyecto entra a un mercado con oferta cerrada.'
                  : 'The Hotel Zone is the country’s highest-demand vacation-rental corridor: white-sand beach, Caribbean views and a hotel base that guarantees year-round tourist flow. Available land is practically nil, so every new project enters a market with closed supply.'}
              </p>
              <p>
                {es
                  ? 'Puerto Cancún combina marina, campo de golf y seguridad privada dentro de un master plan consolidado; es la zona preferida por el comprador que busca residencia principal de lujo y plusvalía estable. Costa Mujeres es la frontera de crecimiento: playas más amplias, hotelería de marca nueva y precios de entrada todavía por debajo de la Zona Hotelera, con el mayor margen de apreciación a mediano plazo. Cancún Centro ofrece el ticket más accesible y la mejor renta residencial de largo plazo, impulsada por la demanda local y corporativa.'
                  : 'Puerto Cancún combines marina, golf course and private security inside a consolidated master plan; it is the preferred zone for buyers seeking a luxury primary residence with stable appreciation. Costa Mujeres is the growth frontier: wider beaches, new branded hospitality and entry prices still below the Hotel Zone, with the widest mid-term appreciation margin. Downtown Cancún offers the most accessible ticket and the best long-term residential rent, driven by local and corporate demand.'}
              </p>
            </div>
          </ScrollReveal>
        </article>
      </section>

      {/* ── Bloques long-tail con enlace interno ── */}
      <section className="px-6 lg:px-10 max-w-[900px] mx-auto pb-16 space-y-12">
        <ScrollReveal>
          <h2 className="font-body text-[clamp(22px,3.5vw,32px)] font-semibold mb-3" style={{ color: '#1C1C1C' }}>
            {es ? 'Preventa en Puerto Cancún' : 'Pre-Construction in Puerto Cancún'}
          </h2>
          <p className="font-body font-normal text-[16px] mb-4" style={{ color: '#4B4B4B', lineHeight: 1.9 }}>
            {es
              ? 'Marina privada, campo de golf de 18 hoyos y acceso controlado en un master plan ya consolidado. Los lanzamientos en Puerto Cancún se colocan rápido porque el inventario de suelo dentro del desarrollo es limitado.'
              : 'Private marina, 18-hole golf course and controlled access inside an already consolidated master plan. Launches in Puerto Cancún sell quickly because land inventory inside the development is limited.'}
          </p>
          <Link
            to={localePath('/cancun/puerto-cancun')}
            className="font-body text-[14px] tracking-[2px] uppercase"
            style={{ color: '#CFAE60' }}
          >
            {es ? 'Ver propiedades en Puerto Cancún →' : 'View Puerto Cancún properties →'}
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-body text-[clamp(22px,3.5vw,32px)] font-semibold mb-3" style={{ color: '#1C1C1C' }}>
            {es ? 'Departamentos en Preventa en Zona Hotelera' : 'Pre-Construction Condos in the Hotel Zone'}
          </h2>
          <p className="font-body font-normal text-[16px] mb-4" style={{ color: '#4B4B4B', lineHeight: 1.9 }}>
            {es
              ? 'El corredor con la mayor plusvalía histórica de Cancún y la renta vacacional más alta. Vista directa al Mar Caribe, acceso a playa y demanda turística todo el año.'
              : 'Cancún’s highest historical appreciation corridor and its strongest vacation rental market. Direct Caribbean Sea views, beach access and year-round tourist demand.'}
          </p>
          <Link
            to={localePath('/cancun/zona-hotelera/preventa')}
            className="font-body text-[14px] tracking-[2px] uppercase"
            style={{ color: '#CFAE60' }}
          >
            {es ? 'Ver preventa en Zona Hotelera →' : 'View Hotel Zone pre-construction →'}
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-body text-[clamp(22px,3.5vw,32px)] font-semibold mb-3" style={{ color: '#1C1C1C' }}>
            {es ? 'Condos Frente al Mar en Preventa en Cancún' : 'Beachfront Pre-Construction Condos in Cancún'}
          </h2>
          <p className="font-body font-normal text-[16px] mb-5" style={{ color: '#4B4B4B', lineHeight: 1.9 }}>
            {es
              ? 'Unidades con frente de playa o vista abierta al Caribe — el producto más escaso del mercado y el que mejor sostiene su valor.'
              : 'Units with beachfront or open Caribbean views — the scarcest product in the market and the one that holds value best.'}
          </p>
          <ul className="space-y-2">
            {beachfront.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link
                  to={localePath(`/propiedad/${p.slug}`)}
                  className="font-body font-normal text-[15px] hover:text-[#CFAE60] transition-colors"
                  style={{ color: '#1C1C1C' }}
                >
                  {p.name} — {es ? p.zone : p.zoneEn || p.zone}
                </Link>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </section>

      {/* ── CTA final ── */}
      <section className="px-6 lg:px-10 max-w-[900px] mx-auto pb-24 text-center">
        <ScrollReveal>
          <h2 className="font-body text-[clamp(22px,3.5vw,32px)] font-semibold mb-4" style={{ color: '#1C1C1C' }}>
            {es ? 'Recibe la lista completa de preventas' : 'Get the full pre-construction list'}
          </h2>
          <p className="font-body font-normal text-[16px] mb-7 max-w-xl mx-auto" style={{ color: '#4B4B4B', lineHeight: 1.9 }}>
            {es
              ? 'Precios de lanzamiento, planes de pago y unidades disponibles por proyecto, directo con tu asesora.'
              : 'Launch prices, payment plans and available units per project, straight from your advisor.'}
          </p>
          <CtaWhatsApp />
        </ScrollReveal>
      </section>
    </div>
  );
};

export default PreventaCancun;
