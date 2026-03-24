import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { BedIcon, RulerIcon, TrendingUpIcon, ChevronDownIcon, WavesIcon, GolfIcon, AnchorIcon, StarIcon } from '@/components/icons';

import propMondrian from '@/assets/mondrian-hero.png';
import slsVistaPrincipal from '@/assets/sls-vista-principal.jpg';
import dhamarPrincipal from '@/assets/dhamar-principal.jpg';
import reserveHero from '@/assets/reserve-mayakoba-hero.jpg';
import vellmariHero from '@/assets/vellmari-hero.jpg';

/* ── Badge icon components ── */
const LockIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" /><path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);
const UmbrellaIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 18a3 3 0 01-6 0" /><path d="M12 2v1" /><path d="M12 3a9 9 0 019 9H3a9 9 0 019-9z" />
  </svg>
);
const LeafIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66L7 18l4-2 2 4 3-4c1.5-2 2.5-3.5 1-7z" /><path d="M20 2c-2 2-6 2-9 3s-5 4-5 9" />
  </svg>
);
const PawIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="4" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="4" cy="8" r="2" />
    <path d="M15.5 13.5c0 2.5-1.6 4.5-3.5 4.5s-3.5-2-3.5-4.5S10.1 10 12 10s3.5 1 3.5 3.5z" />
  </svg>
);
const PoolIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
    <path d="M2 16c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
    <path d="M8 14V6a2 2 0 114 0" /><path d="M16 6a2 2 0 00-4 0" />
  </svg>
);

const CrownIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20L19 8l-5 6-2-8-2 8-5-6z" />
  </svg>
);

type BadgeKey = 'vista-mar' | 'golf' | 'vista-marina' | 'club-privado' | 'alberca-infinity' | 'beach-club' | 'wellness' | 'pet-friendly' | 'comunidad-cerrada' | 'frente-mar';

const badgeConfig: Record<BadgeKey, { label: { es: string; en: string }; icon: React.FC<{ className?: string }> }> = {
  'vista-mar': { label: { es: 'Vista al Mar', en: 'Ocean View' }, icon: WavesIcon },
  'golf': { label: { es: 'Campo de Golf', en: 'Golf Course' }, icon: GolfIcon },
  'vista-marina': { label: { es: 'Vista a la Marina', en: 'Marina View' }, icon: AnchorIcon },
  'club-privado': { label: { es: 'Club Privado', en: 'Private Club' }, icon: CrownIcon },
  'alberca-infinity': { label: { es: 'Alberca Infinity', en: 'Infinity Pool' }, icon: PoolIcon },
  'beach-club': { label: { es: 'Beach Club', en: 'Beach Club' }, icon: UmbrellaIcon },
  'wellness': { label: { es: 'Wellness & Spa', en: 'Wellness & Spa' }, icon: LeafIcon },
  'pet-friendly': { label: { es: 'Pet Friendly', en: 'Pet Friendly' }, icon: PawIcon },
  'comunidad-cerrada': { label: { es: 'Comunidad Cerrada', en: 'Gated Community' }, icon: LockIcon },
  'frente-mar': { label: { es: 'Frente al Mar', en: 'Beachfront' }, icon: WavesIcon },
};

const amenityOptions: BadgeKey[] = ['vista-mar', 'golf', 'vista-marina', 'club-privado', 'alberca-infinity', 'beach-club', 'wellness', 'pet-friendly', 'comunidad-cerrada', 'frente-mar'];

interface Property {
  id: number;
  name: string;
  zone: string;
  type: string;
  beds: number;
  area: number;
  price: number;
  priceM2: number;
  status: 'preventa' | 'entrega-inmediata';
  yield?: string;
  badges: BadgeKey[];
  image: string;
  slug: string;
}

const allProperties: Property[] = [
  { id: 3, name: 'Mondrian Residences', zone: 'Zona Hotelera', type: 'condominio', beds: 3, area: 165, price: 514000, priceM2: 3115, status: 'preventa', yield: '33%', badges: ['vista-mar', 'club-privado', 'beach-club', 'wellness'], image: propMondrian, slug: 'mondrian-residences-grand-island-cancun' },
  { id: 9, name: 'Dhamar', zone: 'Costa Mujeres', type: 'condominio', beds: 3, area: 178, price: 248000, priceM2: 1396, status: 'preventa', badges: ['vista-mar', 'beach-club', 'alberca-infinity', 'wellness'], image: dhamarPrincipal, slug: 'dhamar-costa-mujeres' },
  { id: 10, name: 'SLS Ocean Beach', zone: 'Puerto Cancún', type: 'condominio', beds: 3, area: 356, price: 1600000, priceM2: 4494, status: 'preventa', badges: ['frente-mar', 'club-privado', 'golf', 'wellness', 'beach-club'], image: slsVistaPrincipal, slug: 'sls-ocean-beach-puerto-cancun' },
  { id: 11, name: 'The Reserve at Mayakoba', zone: 'Mayakoba', type: 'condominio', beds: 4, area: 660, price: 1141000, priceM2: 1729, status: 'preventa', badges: ['golf', 'wellness', 'comunidad-cerrada'], image: reserveHero, slug: 'the-reserve-at-mayakoba' },
]; // properties

const zones = ['Todas las Zonas', 'Zona Hotelera', 'Puerto Cancún', 'Costa Mujeres', 'Playa del Carmen', 'Mayakoba', 'Puerto Morelos', 'Tulum', 'Cancún Centro'];
const statuses = ['Todo el Estatus', 'Preventa', 'Entrega Inmediata'];
const types = ['Todos los Tipos', 'Departamento', 'Condominio', 'Penthouse', 'Villa'];

/* ── Filter dropdown wrapper ── */
const FilterDropdown = ({ label, activeLabel, isOpen, onToggle, children }: {
  label: string;
  activeLabel?: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (isOpen && ref.current && !ref.current.contains(e.target as Node)) onToggle();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, onToggle]);

  const hasActive = activeLabel && activeLabel !== label;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 bg-white px-4 py-[11px] text-[14px] font-body font-[300] rounded-none transition-colors"
        style={{ border: `1px solid ${isOpen || hasActive ? '#CFAE60' : 'rgba(0,0,0,0.10)'}`, color: hasActive ? '#CFAE60' : '#1C1C1C' }}
      >
        <span>{activeLabel || label}</span>
        <ChevronDownIcon className="w-3 h-3" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border z-50 min-w-[200px]" style={{ borderColor: 'rgba(0,0,0,0.10)' }}>
          {children}
        </div>
      )}
    </div>
  );
};

const MXN_RATE = 17.5;

const Listings = () => {
  const { language, localePath } = useLanguage();
  const L = language;
  const allZones = L === 'es' ? 'Todas las Zonas' : 'All Zones';
  const allStatus = L === 'es' ? 'Todo el Estatus' : 'All Status';
  const allTypes = L === 'es' ? 'Todos los Tipos' : 'All Types';
  const [zone, setZone] = useState(allZones);
  const [status, setStatus] = useState(allStatus);
  const [type, setType] = useState(allTypes);
  const [selectedAmenities, setSelectedAmenities] = useState<BadgeKey[]>([]);
  const [currency, setCurrency] = useState<'USD' | 'MXN'>('USD');
  const maxUsd = 2000000;
  const maxMxn = 40000000;
  const currentMax = currency === 'USD' ? maxUsd : maxMxn;
  const step = currency === 'USD' ? 10000 : 100000;
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxUsd]);
  const [appliedAmenities, setAppliedAmenities] = useState<BadgeKey[]>([]);
  const [appliedPrice, setAppliedPrice] = useState<[number, number]>([0, maxUsd]);
  const [appliedCurrency, setAppliedCurrency] = useState<'USD' | 'MXN'>('USD');
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const toggle = useCallback((key: string) => setOpenFilter(prev => prev === key ? null : key), []);

  const handleCurrencyChange = (c: 'USD' | 'MXN') => {
    setCurrency(c);
    const newMax = c === 'USD' ? maxUsd : maxMxn;
    setPriceRange([0, newMax]);
  };

  const filtered = allProperties
    .filter(p => zone === allZones || p.zone === zone)
    .filter(p => {
      if (status === allStatus) return true;
      if (status === (L === 'es' ? 'Preventa' : 'Pre-Sale')) return p.status === 'preventa';
      return p.status === 'entrega-inmediata';
    })
    .filter(p => {
      if (type === allTypes) return true;
      return p.type === type.toLowerCase();
    })
    .filter(p => appliedAmenities.length === 0 || appliedAmenities.every(a => p.badges.includes(a)))
    .filter(p => {
      const pPrice = appliedCurrency === 'MXN' ? p.price * MXN_RATE : p.price;
      return pPrice >= appliedPrice[0] && pPrice <= appliedPrice[1];
    });

  const formatPriceInCurrency = (usdPrice: number, cur: 'USD' | 'MXN') => {
    const val = cur === 'MXN' ? usdPrice * MXN_RATE : usdPrice;
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    return `$${(val / 1000).toFixed(0)}K`;
  };

  const priceLabel = L === 'es' ? 'Precio' : 'Price';
  const formatFilterLabel = () => {
    const isDefault = appliedPrice[0] === 0 && appliedPrice[1] === (appliedCurrency === 'USD' ? maxUsd : maxMxn);
    if (isDefault) return appliedCurrency !== 'USD' ? `${priceLabel} (${appliedCurrency})` : priceLabel;
    const lo = appliedPrice[0] >= 1000000 ? `$${(appliedPrice[0] / 1000000).toFixed(1)}M` : `$${(appliedPrice[0] / 1000).toFixed(0)}K`;
    const hi = appliedPrice[1] >= 1000000 ? `$${(appliedPrice[1] / 1000000).toFixed(1)}M` : `$${(appliedPrice[1] / 1000).toFixed(0)}K`;
    return `${priceLabel} · ${lo}–${hi} ${appliedCurrency}`;
  };

  const clearFilters = () => {
    setZone(allZones);
    setStatus(allStatus);
    setType(allTypes);
    setSelectedAmenities([]);
    setAppliedAmenities([]);
    setCurrency('USD');
    setAppliedCurrency('USD');
    setPriceRange([0, maxUsd]);
    setAppliedPrice([0, maxUsd]);
  };

  const zonesL = [allZones, 'Zona Hotelera', 'Puerto Cancún', 'Costa Mujeres', 'Playa del Carmen', 'Mayakoba', 'Puerto Morelos', 'Tulum', 'Cancún Centro'];
  const statusesL = [allStatus, L === 'es' ? 'Preventa' : 'Pre-Sale', L === 'es' ? 'Entrega Inmediata' : 'Ready to Move'];
  const typesL = [allTypes, L === 'es' ? 'Departamento' : 'Apartment', L === 'es' ? 'Condominio' : 'Condo', 'Penthouse', 'Villa'];

  const seoTitle = L === 'es' ? 'Propiedades en Venta — Cancún y Riviera Maya | Rivana' : 'Properties for Sale — Cancún & Riviera Maya | Rivana';
  const seoDesc = L === 'es' ? 'Explora propiedades de lujo en venta en Cancún y la Riviera Maya. Condos, penthouses y villas con asesoría personalizada.' : 'Explore luxury properties for sale in Cancún and the Riviera Maya. Condos, penthouses, and villas with personalized advisory.';

  return (
    <div style={{ background: '#F8F6F2' }}>
      <SEOHead title={seoTitle} description={seoDesc} path={L === 'en' ? '/en/listings' : '/listings'} />

      {/* Header */}
      <section className="pt-28 pb-8 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <p className="text-[12px] tracking-[4px] uppercase font-body font-[300] mb-4" style={{ color: '#CFAE60' }}>{L === 'es' ? 'Explorar' : 'Browse'}</p>
        <h1 className="font-display text-[clamp(32px,5vw,52px)] font-[300] mb-3" style={{ color: '#1C1C1C' }}>{L === 'es' ? 'Propiedades en Venta' : 'Properties for Sale'}</h1>
        <p className="font-body font-[300] text-[16px] max-w-xl" style={{ color: '#4B4B4B', lineHeight: 1.8 }}>{L === 'es' ? 'Explora nuestra colección curada de propiedades de lujo en Cancún y la Riviera Maya.' : 'Explore our curated collection of luxury properties in Cancún and the Riviera Maya.'}</p>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-50 py-4 px-6 lg:px-10 border-b" style={{ background: '#F8F6F2', borderColor: 'rgba(0,0,0,0.06)' }}>
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-start gap-2">
          {/* Zone */}
          <FilterDropdown label={allZones} activeLabel={zone} isOpen={openFilter === 'zone'} onToggle={() => toggle('zone')}>
            {zonesL.map(z => (
              <button key={z} onClick={() => { setZone(z); setOpenFilter(null); }} className="block w-full text-left px-4 py-2.5 text-[14px] font-body font-[300] hover:bg-[rgba(207,174,96,0.06)] transition-colors" style={{ color: z === zone ? '#CFAE60' : '#1C1C1C' }}>
                {z}
              </button>
            ))}
          </FilterDropdown>

          {/* Status */}
          <FilterDropdown label={allStatus} activeLabel={status} isOpen={openFilter === 'status'} onToggle={() => toggle('status')}>
            {statusesL.map(s => (
              <button key={s} onClick={() => { setStatus(s); setOpenFilter(null); }} className="block w-full text-left px-4 py-2.5 text-[14px] font-body font-[300] hover:bg-[rgba(207,174,96,0.06)] transition-colors" style={{ color: s === status ? '#CFAE60' : '#1C1C1C' }}>
                {s}
              </button>
            ))}
          </FilterDropdown>

          {/* Type */}
          <FilterDropdown label={allTypes} activeLabel={type} isOpen={openFilter === 'type'} onToggle={() => toggle('type')}>
            {typesL.map(t => (
              <button key={t} onClick={() => { setType(t); setOpenFilter(null); }} className="block w-full text-left px-4 py-2.5 text-[14px] font-body font-[300] hover:bg-[rgba(207,174,96,0.06)] transition-colors" style={{ color: t === type ? '#CFAE60' : '#1C1C1C' }}>
                {t}
              </button>
            ))}
          </FilterDropdown>

          {/* Amenidades */}
          <FilterDropdown
            label={L === 'es' ? 'Amenidades' : 'Amenities'}
            activeLabel={appliedAmenities.length > 0 ? `${L === 'es' ? 'Amenidades' : 'Amenities'} (${appliedAmenities.length})` : (L === 'es' ? 'Amenidades' : 'Amenities')}
            isOpen={openFilter === 'amenities'}
            onToggle={() => { toggle('amenities'); if (openFilter !== 'amenities') setSelectedAmenities([...appliedAmenities]); }}
          >
            <div className="p-3 max-h-[280px] overflow-y-auto">
              {amenityOptions.map(key => {
                const checked = selectedAmenities.includes(key);
                return (
                  <label key={key} className="flex items-center gap-2.5 py-1.5 cursor-pointer">
                    <span
                      className="w-[14px] h-[14px] flex items-center justify-center shrink-0"
                      style={{ border: `1px solid ${checked ? '#CFAE60' : 'rgba(0,0,0,0.18)'}`, background: checked ? '#CFAE60' : 'transparent' }}
                      onClick={() => setSelectedAmenities(prev => checked ? prev.filter(a => a !== key) : [...prev, key])}
                    >
                      {checked && <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
                    </span>
                    <span className="text-[14px] font-body font-[300]" style={{ color: '#1C1C1C' }}>{badgeConfig[key].label[L]}</span>
                  </label>
                );
              })}
            </div>
            <div className="border-t px-3 py-2" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
              <button onClick={() => { setAppliedAmenities([...selectedAmenities]); setOpenFilter(null); }} className="w-full py-2 text-[12px] tracking-[3px] uppercase font-body text-white" style={{ background: '#CFAE60' }}>
                {L === 'es' ? 'Aplicar' : 'Apply'}
              </button>
            </div>
          </FilterDropdown>

          {/* Precio */}
          <FilterDropdown
            label={priceLabel}
            activeLabel={formatFilterLabel()}
            isOpen={openFilter === 'price'}
            onToggle={() => { toggle('price'); if (openFilter !== 'price') { setPriceRange([...appliedPrice]); setCurrency(appliedCurrency); } }}
          >
            <div className="p-4 w-[280px] sm:w-[320px]">
              {/* Currency toggle */}
              <p className="text-[11px] tracking-[3px] uppercase font-body font-[300] mb-2" style={{ color: '#4B4B4B' }}>{L === 'es' ? 'Moneda' : 'Currency'}</p>
              <div className="flex mb-4">
                {(['USD', 'MXN'] as const).map(c => (
                  <button
                    key={c}
                    onClick={() => handleCurrencyChange(c)}
                    className="flex-1 py-2 text-[13px] font-body transition-colors"
                    style={{
                      background: currency === c ? '#CFAE60' : '#F8F6F2',
                      border: `1px solid ${currency === c ? '#CFAE60' : 'rgba(0,0,0,0.10)'}`,
                      color: currency === c ? 'white' : '#4B4B4B',
                      fontWeight: currency === c ? 400 : 300,
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <p className="text-[11px] tracking-[3px] uppercase font-body font-[300] mb-2" style={{ color: '#4B4B4B' }}>{L === 'es' ? 'Rango de Precio' : 'Price Range'} ({currency})</p>
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="text"
                  placeholder={`$ Mínimo ${currency}`}
                  value={`$${priceRange[0].toLocaleString()}`}
                  onChange={e => {
                    const v = parseInt(e.target.value.replace(/[^0-9]/g, '')) || 0;
                    setPriceRange([Math.min(v, priceRange[1]), priceRange[1]]);
                  }}
                   className="flex-1 py-[9px] px-3 text-[14px] font-body font-[300] rounded-none"
                  style={{ background: '#F8F6F2', border: '1px solid rgba(0,0,0,0.09)' }}
                />
                <span className="text-[14px] font-body" style={{ color: '#4B4B4B' }}>—</span>
                <input
                  type="text"
                  placeholder={`$ Máximo ${currency}`}
                  value={`$${priceRange[1].toLocaleString()}`}
                  onChange={e => {
                    const v = parseInt(e.target.value.replace(/[^0-9]/g, '')) || 0;
                    setPriceRange([priceRange[0], Math.max(v, priceRange[0])]);
                  }}
                  className="flex-1 py-[9px] px-3 text-[14px] font-body font-[300] rounded-none"
                  style={{ background: '#F8F6F2', border: '1px solid rgba(0,0,0,0.09)' }}
                />
              </div>
              {/* Dual range slider */}
              <div className="relative h-[20px] mb-4">
                <div className="absolute top-[9px] left-0 right-0 h-[3px]" style={{ background: 'rgba(207,174,96,0.18)' }} />
                <div
                  className="absolute top-[9px] h-[3px]"
                  style={{ left: `${(priceRange[0] / currentMax) * 100}%`, right: `${100 - (priceRange[1] / currentMax) * 100}%`, background: '#CFAE60' }}
                />
                <input
                  type="range" min={0} max={currentMax} step={step} value={priceRange[0]}
                  onChange={e => setPriceRange([Math.min(+e.target.value, priceRange[1] - step), priceRange[1]])}
                  className="absolute top-0 left-0 w-full h-[20px] appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[1.5px] [&::-webkit-slider-thumb]:border-[#CFAE60] [&::-webkit-slider-thumb]:shadow-[0_1px_6px_rgba(0,0,0,0.12)] [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <input
                  type="range" min={0} max={currentMax} step={step} value={priceRange[1]}
                  onChange={e => setPriceRange([priceRange[0], Math.max(+e.target.value, priceRange[0] + step)])}
                  className="absolute top-0 left-0 w-full h-[20px] appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[1.5px] [&::-webkit-slider-thumb]:border-[#CFAE60] [&::-webkit-slider-thumb]:shadow-[0_1px_6px_rgba(0,0,0,0.12)] [&::-webkit-slider-thumb]:cursor-pointer"
                />
              </div>
              <button onClick={() => { setAppliedPrice([...priceRange]); setAppliedCurrency(currency); setOpenFilter(null); }} className="w-full py-2 text-[12px] tracking-[3px] uppercase font-body text-white" style={{ background: '#CFAE60' }}>
                {L === 'es' ? 'Aplicar' : 'Apply'}
              </button>
            </div>
          </FilterDropdown>
        </div>
        <p className="max-w-[1400px] mx-auto mt-3 text-[14px] font-body font-[300]" style={{ color: '#4B4B4B' }}>
          {filtered.length} {L === 'es' ? 'propiedades encontradas' : 'properties found'}
        </p>
      </section>

      {/* Grid */}
      <section className="px-6 lg:px-10 py-8 max-w-[1400px] mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-[24px] font-[300] mb-4" style={{ color: '#4B4B4B' }}>{L === 'es' ? 'No encontramos propiedades con esos filtros.' : 'No properties found with those filters.'}</p>
            <button onClick={clearFilters} className="px-6 py-3 text-[12px] tracking-[3px] uppercase font-body" style={{ border: '1px solid #CFAE60', color: '#CFAE60', background: 'transparent' }}>
              {L === 'es' ? 'Limpiar filtros' : 'Clear filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3" style={{ gap: '2px', background: '#F8F6F2' }}>
            {filtered.map(p => (
              <Link
                key={p.id}
                to={localePath(`/propiedad/${p.slug}`)}
                className="group block bg-white transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:-translate-y-[2px]"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ paddingTop: '75%' }}>
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-[rgba(207,174,96,0.12)] transition-colors duration-300" />
                  {/* Badges on image */}
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

                {/* Content */}
                <div className="px-5 pt-5 pb-4">
                     <p className="text-[12px] tracking-[3px] uppercase font-body font-[300] mb-1.5" style={{ color: '#CFAE60' }}>{p.zone}</p>
                     <h3 className="font-display text-[24px] font-[300] mb-2.5" style={{ color: '#1C1C1C' }}>{p.name}</h3>

                  {/* Specs row */}
                  <div className="flex items-center gap-[14px] mb-3">
                     <span className="flex items-center gap-1 text-[14px] font-body" style={{ color: '#4B4B4B' }}>
                       <BedIcon className="w-3 h-3" /> {p.beds} {L === 'es' ? 'Rec.' : 'Beds'}
                     </span>
                     <span className="flex items-center gap-1 text-[14px] font-body" style={{ color: '#4B4B4B' }}>
                       <RulerIcon className="w-3 h-3" /> {p.area} m²
                    </span>
                  </div>

                  {/* Attribute badges */}
                  {p.badges.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.badges.slice(0, 3).map(b => {
                        const cfg = badgeConfig[b];
                        const Icon = cfg.icon;
                        return (
                          <span key={b} className="flex items-center gap-1 px-[10px] py-[4px] text-[12px] font-body font-[300]" style={{ background: 'rgba(207,174,96,0.08)', border: '1px solid rgba(207,174,96,0.22)', color: '#1C1C1C' }}>
                            <Icon className="w-[10px] h-[10px]" /> {cfg.label[L]}
                          </span>
                        );
                      })}
                      {p.badges.length > 3 && (
                        <span className="px-[10px] py-[4px] text-[12px] font-body font-[300]" style={{ color: '#4B4B4B', background: 'rgba(207,174,96,0.08)', border: '1px solid rgba(207,174,96,0.22)' }}>
                          +{p.badges.length - 3} {L === 'es' ? 'más' : 'more'}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Bottom row */}
                  <div className="flex items-end justify-between pt-3 mt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <div>
                       <span className="block text-[11px] font-body font-[300] uppercase tracking-[2px]" style={{ color: '#4B4B4B' }}>{L === 'es' ? 'Desde' : 'From'}</span>
                       <span className="font-display text-[22px]" style={{ color: '#CFAE60' }}>{formatPriceInCurrency(p.price, appliedCurrency)} {appliedCurrency}</span>
                     </div>
                     <span className="text-[13px] font-body font-[300] flex items-center gap-1 transition-colors group-hover:text-[#CFAE60]" style={{ color: '#4B4B4B' }}>
                      {L === 'es' ? 'Ver' : 'View'} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Listings;
