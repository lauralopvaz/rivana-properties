import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { BuyerDots } from '@/components/BuyerDots';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { BedIcon, RulerIcon, ArrowRightIcon, TrendingUpIcon, ChatIcon } from '@/components/icons';

const allProperties = [
  { id: 1, name: 'Oceana Residences', zone: 'Costa Mujeres', type: 'condo', beds: 2, area: 95, price: 195000, status: 'pre-sale', yield: '10%', profiles: ['maria', 'investor'] },
  { id: 2, name: 'Marina Towers Unit 12B', zone: 'Puerto Cancún', type: 'condo', beds: 3, area: 140, price: 510000, status: 'ready', profiles: ['pedro', 'carlos'] },
  { id: 3, name: 'Jade Penthouse', zone: 'Zona Hotelera', type: 'penthouse', beds: 4, area: 320, price: 1200000, status: 'ready', profiles: ['carlos', 'investor'] },
  { id: 4, name: 'Selva Lofts Studio', zone: 'Tulum', type: 'condo', beds: 1, area: 78, price: 195000, status: 'pre-sale', yield: '12%', profiles: ['investor'] },
  { id: 5, name: 'Azure Beachfront', zone: 'Costa Mujeres', type: 'condo', beds: 3, area: 185, price: 425000, status: 'pre-sale', yield: '9%', profiles: ['maria', 'pedro'] },
  { id: 6, name: 'Mayakoba Villa', zone: 'Mayakoba', type: 'villa', beds: 5, area: 450, price: 2800000, status: 'ready', profiles: ['carlos', 'investor'] },
  { id: 7, name: 'Puerto Morelos Reef', zone: 'Puerto Morelos', type: 'condo', beds: 2, area: 110, price: 340000, status: 'pre-sale', yield: '8%', profiles: ['carlos'] },
  { id: 8, name: 'Downtown Cancún Loft', zone: 'Cancún Centro', type: 'condo', beds: 2, area: 95, price: 180000, status: 'ready', profiles: ['pedro', 'investor'] },
];

const zones = ['All', 'Costa Mujeres', 'Zona Hotelera', 'Puerto Cancún', 'Mayakoba', 'Puerto Morelos', 'Tulum', 'Cancún Centro'];
const types = ['All', 'Condo', 'Penthouse', 'Villa'];
const statuses = ['All', 'Pre-Sale', 'Ready'];

const Listings = () => {
  const { language, t, localePath } = useLanguage();
  const [zone, setZone] = useState('All');
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('All');
  const [sort, setSort] = useState('price-asc');

  const filtered = allProperties
    .filter((p) => zone === 'All' || p.zone === zone)
    .filter((p) => type === 'All' || p.type === type.toLowerCase())
    .filter((p) => status === 'All' || p.status === status.toLowerCase().replace('-', '-'))
    .sort((a, b) => sort === 'price-asc' ? a.price - b.price : b.price - a.price);

  const formatPrice = (n: number) => n >= 1000000 ? `$${(n / 1000000).toFixed(1)}M` : `$${(n / 1000).toFixed(0)}K`;

  const seoTitle = language === 'es'
    ? 'Propiedades en Venta — Cancún y Riviera Maya | Rivana'
    : 'Properties for Sale — Cancún & Riviera Maya | Rivana';
  const seoDesc = language === 'es'
    ? 'Explora propiedades de lujo en venta en Cancún y la Riviera Maya. Condos, penthouses y villas con asesoría personalizada.'
    : 'Explore luxury properties for sale in Cancún and the Riviera Maya. Condos, penthouses and villas with personalized advisory.';

  return (
    <div>
      <SEOHead title={seoTitle} description={seoDesc} path={language === 'en' ? '/en/listings' : '/listings'} />

      <section className="pt-28 pb-12 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <p className="eyebrow mb-4">{t('listings.browse')}</p>
        <h1 className="mb-4">{t('listings.title')}</h1>
        <p className="text-muted-foreground font-body max-w-xl">{t('listings.subtitle')}</p>
      </section>

      <section className="sticky top-20 z-50 bg-background/95 backdrop-blur border-y border-border py-4 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center gap-3">
          <select value={zone} onChange={(e) => setZone(e.target.value)} className="bg-muted border border-border rounded-sm px-3 py-2 text-sm font-body text-foreground focus:outline-none focus:border-primary">
            {zones.map((z) => <option key={z} value={z}>{z === 'All' ? (language === 'es' ? 'Todas las Zonas' : 'All Zones') : z}</option>)}
          </select>
          <select value={type} onChange={(e) => setType(e.target.value)} className="bg-muted border border-border rounded-sm px-3 py-2 text-sm font-body text-foreground focus:outline-none focus:border-primary">
            {types.map((t) => <option key={t} value={t}>{t === 'All' ? (language === 'es' ? 'Todos los Tipos' : 'All Types') : t}</option>)}
          </select>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="bg-muted border border-border rounded-sm px-3 py-2 text-sm font-body text-foreground focus:outline-none focus:border-primary">
            {statuses.map((s) => <option key={s} value={s}>{s === 'All' ? (language === 'es' ? 'Todo Status' : 'All Status') : s}</option>)}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-muted border border-border rounded-sm px-3 py-2 text-sm font-body text-foreground focus:outline-none focus:border-primary ml-auto">
            <option value="price-asc">{language === 'es' ? 'Precio: Menor a Mayor' : 'Price: Low to High'}</option>
            <option value="price-desc">{language === 'es' ? 'Precio: Mayor a Menor' : 'Price: High to Low'}</option>
          </select>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <p className="text-sm text-muted-foreground font-body mb-6">{filtered.length} {language === 'es' ? 'propiedades encontradas' : 'properties found'}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 60}>
              <Link to={localePath('/property/oceana-residences')} className="group block bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-colors">
                <div className="aspect-[16/10] gradient-placeholder relative group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-xs font-body tracking-wider uppercase bg-secondary/80 backdrop-blur text-secondary-foreground px-2.5 py-1 rounded-sm">
                      {p.status === 'pre-sale' ? (language === 'es' ? 'Preventa' : 'Pre-Sale') : (language === 'es' ? 'Listo' : 'Ready')}
                    </span>
                    {p.yield && (
                      <span className="text-xs font-body tracking-wider bg-primary/20 text-primary px-2.5 py-1 rounded-sm flex items-center gap-1">
                        <TrendingUpIcon className="w-3 h-3" /> {p.yield}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <span className="eyebrow text-xs">{p.zone}</span>
                  <h3 className="text-lg mt-1 mb-3">{p.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground font-body mb-3">
                    <span className="flex items-center gap-1"><BedIcon className="w-3.5 h-3.5" /> {p.beds} {language === 'es' ? 'Rec.' : 'Beds'}</span>
                    <span className="flex items-center gap-1"><RulerIcon className="w-3.5 h-3.5" /> {p.area} m²</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl text-primary">{formatPrice(p.price)}</span>
                    <BuyerDots profiles={p.profiles} />
                  </div>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-primary font-body opacity-0 group-hover:opacity-100 transition-opacity">
                    {t('card.viewProperty')} <ArrowRightIcon className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Listings;
