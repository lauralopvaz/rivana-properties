import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';
import { BedIcon, RulerIcon, TrendingUpIcon, ArrowRightIcon } from '@/components/icons';

const propMondrian = '/images/mondrian/mondrian-hero.jpg';
import slsVistaPrincipal from '@/assets/sls-vista-principal.jpg';
import dhamarPrincipal from '@/assets/dhamar-principal.jpg';
import vellmariHero from '@/assets/vellmari-hero.jpg';
import kabeekHero from '@/assets/kabeek-fachada-atardecer.jpg';
import bayViewGrandHero from '@/assets/bvg-rooftop-pool-laguna.jpg';
import arboladaHero from '@/assets/arbolada-hero.jpg';
import thompsonHero from '@/assets/thompson-hero.jpg';
import cuoreCumbresHero from '@/assets/cuore-cumbres-hero.jpg';

interface Property {
  name: string;
  zone: string;
  zoneKey: string;
  beds: number;
  area: number;
  price: number;
  status: 'preventa' | 'entrega-inmediata';
  yield?: string;
  image: string;
  slug: string;
}

const cancunProperties: Property[] = [
  { name: 'Mondrian Residences', zone: 'Zona Hotelera', zoneKey: 'zona-hotelera', beds: 3, area: 165, price: 514000, status: 'preventa', yield: '33%', image: propMondrian, slug: 'mondrian-residences-grand-island-cancun' },
  { name: 'Kabeek Marina & Condos', zone: 'Zona Hotelera', zoneKey: 'zona-hotelera', beds: 4, area: 670, price: 0, status: 'preventa', image: kabeekHero, slug: 'kabeek-marina-condos' },
  { name: 'Bay View Grand at Grand Island', zone: 'Zona Hotelera', zoneKey: 'zona-hotelera', beds: 3, area: 451, price: 586146, status: 'preventa', image: bayViewGrandHero, slug: 'bay-view-grand-grand-island' },
  { name: 'Thompson Residences', zone: 'Puerto Cancún', zoneKey: 'puerto-cancun', beds: 5, area: 803, price: 730000, status: 'preventa', image: thompsonHero, slug: 'thompson-residences-puerto-cancun' },
  { name: 'SLS Ocean Beach', zone: 'Puerto Cancún', zoneKey: 'puerto-cancun', beds: 3, area: 356, price: 1600000, status: 'preventa', image: slsVistaPrincipal, slug: 'sls-ocean-beach-puerto-cancun' },
  { name: 'Vellmari Grand Living', zone: 'Puerto Cancún', zoneKey: 'puerto-cancun', beds: 5, area: 714, price: 845714, status: 'preventa', image: vellmariHero, slug: 'vellmari-grand-living' },
  { name: 'Dhamar', zone: 'Costa Mujeres', zoneKey: 'costa-mujeres', beds: 3, area: 178, price: 248000, status: 'preventa', image: dhamarPrincipal, slug: 'dhamar-costa-mujeres' },
  { name: 'Arbolada Towers', zone: 'Cancún Centro', zoneKey: 'cancun-centro', beds: 2, area: 94, price: 263000, status: 'entrega-inmediata', image: arboladaHero, slug: 'arbolada-towers' },
  { name: 'Cuore Cumbres', zone: 'Cancún Centro', zoneKey: 'cancun-centro', beds: 3, area: 346, price: 0, status: 'preventa', image: cuoreCumbresHero, slug: 'cuore-cumbres-cancun' },
];

const zones = [
  { key: 'zona-hotelera', es: 'Zona Hotelera', en: 'Hotel Zone' },
  { key: 'puerto-cancun', es: 'Puerto Cancún', en: 'Puerto Cancún' },
  { key: 'costa-mujeres', es: 'Costa Mujeres', en: 'Costa Mujeres' },
  { key: 'cancun-centro', es: 'Cancún Centro', en: 'Downtown Cancún' },
];

const formatPrice = (usd: number, lang: string) => {
  if (usd === 0) return lang === 'es' ? 'Consultar' : 'Contact Us';
  if (usd >= 1000000) return `$${(usd / 1000000).toFixed(1)}M USD`;
  return `$${(usd / 1000).toFixed(0)}K USD`;
};

const CancunCondos = () => {
  const { language: L, localePath } = useLanguage();

  const seoTitle = L === 'es'
    ? 'Departamentos en Venta Cancún Frente al Mar | Rivana'
    : 'Cancún Condos for Sale Beachfront | Rivana';
  const seoDesc = L === 'es'
    ? 'Departamentos en venta en Cancún Zona Hotelera y frente al mar. Preventa y entrega inmediata desde $248,000 USD. Asesores bilingües especializados.'
    : 'Beachfront condos for sale in Cancún Hotel Zone. Pre-sale and ready-to-move from $248,000 USD. Specialized bilingual advisors.';
  const h1 = L === 'es'
    ? 'Departamentos en Venta en Cancún Frente al Mar'
    : 'Beachfront Condos for Sale in Cancún';

  const currentPath = L === 'en' ? '/en/cancun/condos-for-sale' : '/cancun/departamentos-en-venta';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: h1,
    description: seoDesc,
    url: `https://rivanaproperties.com${currentPath}`,
    numberOfItems: cancunProperties.length,
    itemListElement: cancunProperties.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: p.name,
        url: `https://rivanaproperties.com${localePath(`/propiedad/${p.slug}`)}`,
      },
    })),
  };

  const presaleProps = cancunProperties.filter(p => p.status === 'preventa');

  return (
    <div style={{ background: '#F8F6F2' }}>
      <SEOHead
        title={seoTitle}
        description={seoDesc}
        path={currentPath}
        schema={schema}
        hreflangEs="/cancun/departamentos-en-venta"
        hreflangEn="/en/cancun/condos-for-sale"
      />

      {/* Hero */}
      <section className="pt-28 pb-12 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <p className="text-[12px] tracking-[4px] uppercase font-body font-[300] mb-4" style={{ color: '#CFAE60' }}>
          {L === 'es' ? 'Cancún · Inversión Inmobiliaria' : 'Cancún · Real Estate Investment'}
        </p>
        <h1 className="font-display text-[clamp(28px,5vw,48px)] font-[300] mb-4" style={{ color: '#1C1C1C' }}>
          {h1}
        </h1>
        <p className="font-body font-[300] text-[16px] max-w-2xl leading-[1.8]" style={{ color: '#4B4B4B' }}>
          {L === 'es'
            ? 'Explora departamentos de lujo en las zonas más exclusivas de Cancún: Zona Hotelera, Puerto Cancún, Costa Mujeres y Centro. Preventa y entrega inmediata con asesoría personalizada.'
            : 'Explore luxury condos in Cancún\'s most exclusive zones: Hotel Zone, Puerto Cancún, Costa Mujeres and Downtown. Pre-sale and ready-to-move with personalized advisory.'}
        </p>
      </section>

      {/* ── Section: Zona Hotelera ── */}
      {zones.map((zone) => {
        const zoneProps = cancunProperties.filter(p => p.zoneKey === zone.key);
        if (zoneProps.length === 0) return null;

        const isFirst = zone.key === 'zona-hotelera';

        return (
          <section key={zone.key} className="px-6 lg:px-10 max-w-[1400px] mx-auto mb-16">
            <ScrollReveal>
              <h2 className="font-display text-[clamp(22px,3.5vw,32px)] font-[300] mb-2" style={{ color: '#1C1C1C' }}>
                {L === 'es'
                  ? `Departamentos en ${zone.es === 'Cancún Centro' ? 'Cancún Centro' : `la ${zone.es} de Cancún`}`
                  : `Condos in ${zone.en === 'Downtown Cancún' ? 'Downtown Cancún' : `Cancún's ${zone.en}`}`}
              </h2>
              {isFirst && (
                <p className="font-body font-[300] text-[14px] max-w-2xl mb-6" style={{ color: '#4B4B4B', lineHeight: 1.8 }}>
                  {L === 'es'
                    ? 'La Zona Hotelera concentra la mayor plusvalía de Cancún con vista directa al Mar Caribe y acceso a playas de arena blanca. Rendimientos de renta del 8–12% anual.'
                    : 'The Hotel Zone holds the highest appreciation in Cancún with direct Caribbean Sea views and white-sand beach access. Rental yields of 8–12% annually.'}
                </p>
              )}
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2px]" style={{ background: '#F8F6F2' }}>
              {zoneProps.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 60}>
                  <Link
                    to={localePath(`/propiedad/${p.slug}`)}
                    className="group block bg-white transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:-translate-y-[2px]"
                  >
                    <div className="relative overflow-hidden" style={{ paddingTop: '75%' }}>
                      <img
                        src={p.image}
                        alt={`${p.name} — ${p.zone}, Cancún`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-transparent group-hover:bg-[rgba(207,174,96,0.12)] transition-colors duration-300" />
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        <span
                          className="text-[12px] tracking-[2px] uppercase font-body text-white px-[10px] py-[5px]"
                          style={{ background: p.status === 'preventa' ? '#26547D' : '#1C1C1C' }}
                        >
                          {p.status === 'preventa' ? (L === 'es' ? 'Preventa' : 'Pre-Sale') : (L === 'es' ? 'Entrega Inmediata' : 'Ready to Move')}
                        </span>
                        {p.yield && (
                          <span className="text-[12px] px-[10px] py-[5px] font-body flex items-center gap-1 text-white" style={{ background: '#CFAE60' }}>
                            <TrendingUpIcon className="w-3 h-3" /> {p.yield}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="px-5 pt-5 pb-4">
                      <p className="text-[12px] tracking-[3px] uppercase font-body font-[300] mb-1.5" style={{ color: '#CFAE60' }}>{p.zone}</p>
                      <h3 className="font-display text-[22px] font-[300] mb-2.5" style={{ color: '#1C1C1C' }}>{p.name}</h3>
                      <div className="flex items-center gap-[14px] mb-3">
                        <span className="flex items-center gap-1 text-[14px] font-body" style={{ color: '#4B4B4B' }}>
                          <BedIcon className="w-3 h-3" /> {p.beds} {L === 'es' ? 'Rec.' : 'Beds'}
                        </span>
                        <span className="flex items-center gap-1 text-[14px] font-body" style={{ color: '#4B4B4B' }}>
                          <RulerIcon className="w-3 h-3" /> {p.area} m²
                        </span>
                      </div>
                      <div className="flex items-end justify-between pt-3 mt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                        <div>
                          <span className="block text-[11px] font-body font-[300] uppercase tracking-[2px]" style={{ color: '#4B4B4B' }}>{L === 'es' ? 'Desde' : 'From'}</span>
                          <span className="font-display text-[22px]" style={{ color: '#CFAE60' }}>{formatPrice(p.price, L)}</span>
                        </div>
                        <span className="text-[13px] font-body font-[300] flex items-center gap-1 transition-colors group-hover:text-[#CFAE60]" style={{ color: '#4B4B4B' }}>
                          {L === 'es' ? 'Ver' : 'View'} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </section>
        );
      })}

      {/* ── Section: Preventa 2026 ── */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto mb-16">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(22px,3.5vw,32px)] font-[300] mb-3" style={{ color: '#1C1C1C' }}>
            {L === 'es' ? 'Departamentos en Preventa Cancún 2026' : 'Pre-Sale Condos Cancún 2026'}
          </h2>
          <p className="font-body font-[300] text-[14px] max-w-2xl mb-6" style={{ color: '#4B4B4B', lineHeight: 1.8 }}>
            {L === 'es'
              ? 'Comprar en preventa significa asegurar precios de lanzamiento con plusvalía proyectada del 15–33% a la entrega. Esquemas de pago diferido con enganches desde el 10%.'
              : 'Buying pre-sale means securing launch prices with projected 15–33% appreciation by delivery. Deferred payment plans with down payments from 10%.'}
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {presaleProps.slice(0, 6).map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 60}>
              <Link to={localePath(`/propiedad/${p.slug}`)} className="group flex items-center gap-4 bg-white border border-[rgba(0,0,0,0.06)] p-4 hover:border-[#CFAE60] transition-colors">
                <img src={p.image} alt={`${p.name} — preventa Cancún`} className="w-20 h-20 object-cover shrink-0" loading="lazy" />
                <div className="min-w-0">
                  <p className="text-[10px] tracking-[2px] uppercase font-body" style={{ color: '#CFAE60' }}>{p.zone}</p>
                  <p className="font-display text-[16px] font-[300] truncate" style={{ color: '#1C1C1C' }}>{p.name}</p>
                  <p className="font-display text-[16px]" style={{ color: '#CFAE60' }}>{formatPrice(p.price, L)}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Section: Why Buy ── */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto pb-20">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(22px,3.5vw,32px)] font-[300] mb-6" style={{ color: '#1C1C1C' }}>
            {L === 'es' ? '¿Por qué comprar un departamento en Cancún?' : 'Why Buy a Condo in Cancún?'}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: { es: 'Plusvalía comprobada', en: 'Proven Appreciation' },
              desc: { es: 'Las propiedades frente al mar en Cancún han registrado una plusvalía promedio del 12–18% anual en los últimos 5 años.', en: 'Beachfront properties in Cancún have seen 12–18% average annual appreciation over the past 5 years.' },
            },
            {
              title: { es: 'Rentas turísticas', en: 'Tourist Rentals' },
              desc: { es: 'Cancún recibe 30+ millones de visitantes al año. Las rentas a corto plazo generan rendimientos del 8–12% anual.', en: 'Cancún welcomes 30M+ visitors yearly. Short-term rentals generate 8–12% annual yields.' },
            },
            {
              title: { es: 'Marco legal sólido', en: 'Solid Legal Framework' },
              desc: { es: 'Los extranjeros pueden comprar propiedades a través de fideicomiso bancario con plenos derechos de propiedad.', en: 'Foreigners can purchase through bank trust (fideicomiso) with full ownership rights.' },
            },
            {
              title: { es: 'Calidad de vida', en: 'Quality of Life' },
              desc: { es: 'Clima tropical todo el año, infraestructura de primer nivel, aeropuerto internacional y conectividad global.', en: 'Year-round tropical climate, first-class infrastructure, international airport and global connectivity.' },
            },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-white border border-[rgba(0,0,0,0.06)] p-6">
                <span className="font-display text-[28px] font-[300] block mb-2" style={{ color: '#CFAE60' }}>0{i + 1}</span>
                <h3 className="font-display text-[18px] font-[300] mb-2" style={{ color: '#1C1C1C' }}>{item.title[L]}</h3>
                <p className="font-body text-[13px] font-[300] leading-[1.7]" style={{ color: '#4B4B4B' }}>{item.desc[L]}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to={localePath('/listings')}
            className="inline-flex items-center gap-2 px-8 py-3 text-[11px] tracking-[3px] uppercase font-body font-[400] transition-colors hover:bg-[#b8952e]"
            style={{ background: '#CFAE60', color: 'white' }}
          >
            {L === 'es' ? 'Ver Todas las Propiedades' : 'View All Properties'} <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CancunCondos;
