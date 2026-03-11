import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { BedIcon, RulerIcon, TrendingUpIcon, ChevronDownIcon, WavesIcon, GolfIcon, AnchorIcon, StarIcon } from '@/components/icons';

import propOceana from '@/assets/prop-oceana.jpg';
import propMarina from '@/assets/prop-marina.jpg';
import propJade from '@/assets/prop-jade.jpg';
import propSelva from '@/assets/prop-selva.jpg';

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

const badgeConfig: Record<BadgeKey, { label: string; icon: React.FC<{ className?: string }> }> = {
  'vista-mar': { label: 'Vista al Mar', icon: WavesIcon },
  'golf': { label: 'Campo de Golf', icon: GolfIcon },
  'vista-marina': { label: 'Vista a la Marina', icon: AnchorIcon },
  'club-privado': { label: 'Club Privado', icon: CrownIcon },
  'alberca-infinity': { label: 'Alberca Infinity', icon: PoolIcon },
  'beach-club': { label: 'Beach Club', icon: UmbrellaIcon },
  'wellness': { label: 'Wellness & Spa', icon: LeafIcon },
  'pet-friendly': { label: 'Pet Friendly', icon: PawIcon },
  'comunidad-cerrada': { label: 'Comunidad Cerrada', icon: LockIcon },
  'frente-mar': { label: 'Frente al Mar', icon: WavesIcon },
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
  { id: 1, name: 'Oceana Residences', zone: 'Costa Mujeres', type: 'condominio', beds: 2, area: 95, price: 195000, priceM2: 2053, status: 'preventa', yield: '10%', badges: ['vista-mar', 'alberca-infinity', 'beach-club', 'pet-friendly'], image: propOceana, slug: 'oceana-residences' },
  { id: 2, name: 'Marina Towers', zone: 'Puerto Cancún', type: 'condominio', beds: 3, area: 140, price: 510000, priceM2: 3643, status: 'entrega-inmediata', badges: ['vista-marina', 'club-privado', 'alberca-infinity'], image: propMarina, slug: 'marina-towers' },
  { id: 3, name: 'Jade Penthouse', zone: 'Zona Hotelera', type: 'penthouse', beds: 4, area: 320, price: 1200000, priceM2: 3750, status: 'entrega-inmediata', badges: ['vista-mar', 'club-privado', 'beach-club', 'wellness'], image: propJade, slug: 'jade-penthouse' },
  { id: 4, name: 'Selva Lofts', zone: 'Tulum', type: 'condominio', beds: 1, area: 78, price: 195000, priceM2: 2500, status: 'preventa', yield: '12%', badges: ['wellness', 'comunidad-cerrada', 'pet-friendly'], image: propSelva, slug: 'selva-lofts' },
  { id: 5, name: 'Azure Beachfront', zone: 'Costa Mujeres', type: 'condominio', beds: 3, area: 185, price: 425000, priceM2: 2297, status: 'preventa', yield: '9%', badges: ['frente-mar', 'alberca-infinity', 'beach-club', 'comunidad-cerrada'], image: propOceana, slug: 'azure-beachfront' },
  { id: 6, name: 'Mayakoba Villa', zone: 'Mayakoba', type: 'villa', beds: 5, area: 450, price: 2800000, priceM2: 6222, status: 'entrega-inmediata', badges: ['golf', 'club-privado', 'wellness', 'comunidad-cerrada', 'alberca-infinity'], image: propJade, slug: 'mayakoba-villa' },
  { id: 7, name: 'Puerto Morelos Reef', zone: 'Puerto Morelos', type: 'condominio', beds: 2, area: 110, price: 340000, priceM2: 3091, status: 'preventa', yield: '8%', badges: ['vista-mar', 'beach-club'], image: propMarina, slug: 'puerto-morelos-reef' },
  { id: 8, name: 'Downtown Cancún Loft', zone: 'Cancún Centro', type: 'departamento', beds: 2, area: 95, price: 180000, priceM2: 1895, status: 'entrega-inmediata', badges: ['alberca-infinity', 'pet-friendly'], image: propSelva, slug: 'downtown-cancun-loft' },
];

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
        className="flex items-center gap-2 bg-white px-4 py-[11px] text-[11px] font-body font-[300] rounded-none transition-colors"
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
  const { localePath } = useLanguage();
  const [zone, setZone] = useState('Todas las Zonas');
  const [status, setStatus] = useState('Todo el Estatus');
  const [type, setType] = useState('Todos los Tipos');
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
    .filter(p => zone === 'Todas las Zonas' || p.zone === zone)
    .filter(p => {
      if (status === 'Todo el Estatus') return true;
      if (status === 'Preventa') return p.status === 'preventa';
      return p.status === 'entrega-inmediata';
    })
    .filter(p => {
      if (type === 'Todos los Tipos') return true;
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

  const formatFilterLabel = () => {
    const isDefault = appliedPrice[0] === 0 && appliedPrice[1] === (appliedCurrency === 'USD' ? maxUsd : maxMxn);
    if (isDefault) return appliedCurrency !== 'USD' ? `Precio (${appliedCurrency})` : 'Precio';
    const lo = appliedPrice[0] >= 1000000 ? `$${(appliedPrice[0] / 1000000).toFixed(1)}M` : `$${(appliedPrice[0] / 1000).toFixed(0)}K`;
    const hi = appliedPrice[1] >= 1000000 ? `$${(appliedPrice[1] / 1000000).toFixed(1)}M` : `$${(appliedPrice[1] / 1000).toFixed(0)}K`;
    return `Precio · ${lo}–${hi} ${appliedCurrency}`;
  };

  const clearFilters = () => {
    setZone('Todas las Zonas');
    setStatus('Todo el Estatus');
    setType('Todos los Tipos');
    setSelectedAmenities([]);
    setAppliedAmenities([]);
    setCurrency('USD');
    setAppliedCurrency('USD');
    setPriceRange([0, maxUsd]);
    setAppliedPrice([0, maxUsd]);
  };

  return (
    <div style={{ background: '#F8F6F2' }}>
      <SEOHead title="Propiedades en Venta — Cancún y Riviera Maya | Rivana" description="Explora propiedades de lujo en venta en Cancún y la Riviera Maya. Condos, penthouses y villas con asesoría personalizada." path="/listings" />

      {/* Header */}
      <section className="pt-28 pb-8 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <p className="text-[9px] tracking-[4px] uppercase font-body font-[300] mb-4" style={{ color: '#CFAE60' }}>Explorar</p>
        <h1 className="font-display text-[clamp(32px,5vw,52px)] font-[300] mb-3" style={{ color: '#1C1C1C' }}>Propiedades en Venta</h1>
        <p className="font-body font-[300] text-[13px] max-w-xl" style={{ color: '#4B4B4B' }}>Explora nuestra colección curada de propiedades de lujo en Cancún y la Riviera Maya.</p>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-50 py-4 px-6 lg:px-10 border-b" style={{ background: '#F8F6F2', borderColor: 'rgba(0,0,0,0.06)' }}>
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-start gap-2">
          {/* Zone */}
          <FilterDropdown label="Todas las Zonas" activeLabel={zone} isOpen={openFilter === 'zone'} onToggle={() => toggle('zone')}>
            {zones.map(z => (
              <button key={z} onClick={() => { setZone(z); setOpenFilter(null); }} className="block w-full text-left px-4 py-2.5 text-[11px] font-body font-[300] hover:bg-[rgba(207,174,96,0.06)] transition-colors" style={{ color: z === zone ? '#CFAE60' : '#1C1C1C' }}>
                {z}
              </button>
            ))}
          </FilterDropdown>

          {/* Status */}
          <FilterDropdown label="Todo el Estatus" activeLabel={status} isOpen={openFilter === 'status'} onToggle={() => toggle('status')}>
            {statuses.map(s => (
              <button key={s} onClick={() => { setStatus(s); setOpenFilter(null); }} className="block w-full text-left px-4 py-2.5 text-[11px] font-body font-[300] hover:bg-[rgba(207,174,96,0.06)] transition-colors" style={{ color: s === status ? '#CFAE60' : '#1C1C1C' }}>
                {s}
              </button>
            ))}
          </FilterDropdown>

          {/* Type */}
          <FilterDropdown label="Todos los Tipos" activeLabel={type} isOpen={openFilter === 'type'} onToggle={() => toggle('type')}>
            {types.map(t => (
              <button key={t} onClick={() => { setType(t); setOpenFilter(null); }} className="block w-full text-left px-4 py-2.5 text-[11px] font-body font-[300] hover:bg-[rgba(207,174,96,0.06)] transition-colors" style={{ color: t === type ? '#CFAE60' : '#1C1C1C' }}>
                {t}
              </button>
            ))}
          </FilterDropdown>

          {/* Amenidades */}
          <FilterDropdown
            label="Amenidades"
            activeLabel={appliedAmenities.length > 0 ? `Amenidades (${appliedAmenities.length})` : 'Amenidades'}
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
                    <span className="text-[11px] font-body font-[300]" style={{ color: '#1C1C1C' }}>{badgeConfig[key].label}</span>
                  </label>
                );
              })}
            </div>
            <div className="border-t px-3 py-2" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
              <button onClick={() => { setAppliedAmenities([...selectedAmenities]); setOpenFilter(null); }} className="w-full py-2 text-[9px] tracking-[3px] uppercase font-body text-white" style={{ background: '#CFAE60' }}>
                Aplicar
              </button>
            </div>
          </FilterDropdown>

          {/* Precio */}
          <FilterDropdown
            label="Precio"
            activeLabel={formatFilterLabel()}
            isOpen={openFilter === 'price'}
            onToggle={() => { toggle('price'); if (openFilter !== 'price') { setPriceRange([...appliedPrice]); setCurrency(appliedCurrency); } }}
          >
            <div className="p-4 w-[320px]">
              {/* Currency toggle */}
              <p className="text-[8px] tracking-[3px] uppercase font-body font-[300] mb-2" style={{ color: '#4B4B4B' }}>Moneda</p>
              <div className="flex mb-4">
                {(['USD', 'MXN'] as const).map(c => (
                  <button
                    key={c}
                    onClick={() => handleCurrencyChange(c)}
                    className="flex-1 py-2 text-[10px] font-body transition-colors"
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

              <p className="text-[8px] tracking-[3px] uppercase font-body font-[300] mb-2" style={{ color: '#4B4B4B' }}>Rango de Precio ({currency})</p>
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="text"
                  placeholder={`$ Mínimo ${currency}`}
                  value={`$${priceRange[0].toLocaleString()}`}
                  onChange={e => {
                    const v = parseInt(e.target.value.replace(/[^0-9]/g, '')) || 0;
                    setPriceRange([Math.min(v, priceRange[1]), priceRange[1]]);
                  }}
                  className="flex-1 py-[9px] px-3 text-[11px] font-body font-[300] rounded-none"
                  style={{ background: '#F8F6F2', border: '1px solid rgba(0,0,0,0.09)' }}
                />
                <span className="text-[11px] font-body" style={{ color: '#4B4B4B' }}>—</span>
                <input
                  type="text"
                  placeholder={`$ Máximo ${currency}`}
                  value={`$${priceRange[1].toLocaleString()}`}
                  onChange={e => {
                    const v = parseInt(e.target.value.replace(/[^0-9]/g, '')) || 0;
                    setPriceRange([priceRange[0], Math.max(v, priceRange[0])]);
                  }}
                  className="flex-1 py-[9px] px-3 text-[11px] font-body font-[300] rounded-none"
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
              <button onClick={() => { setAppliedPrice([...priceRange]); setAppliedCurrency(currency); setOpenFilter(null); }} className="w-full py-2 text-[9px] tracking-[3px] uppercase font-body text-white" style={{ background: '#CFAE60' }}>
                Aplicar
              </button>
            </div>
          </FilterDropdown>
        </div>
        <p className="max-w-[1400px] mx-auto mt-3 text-[12px] font-body font-[300]" style={{ color: '#4B4B4B' }}>
          {filtered.length} propiedades encontradas
        </p>
      </section>

      {/* Grid */}
      <section className="px-6 lg:px-10 py-8 max-w-[1400px] mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-[24px] font-[300] mb-4" style={{ color: '#4B4B4B' }}>No encontramos propiedades con esos filtros.</p>
            <button onClick={clearFilters} className="px-6 py-3 text-[9px] tracking-[3px] uppercase font-body" style={{ border: '1px solid #CFAE60', color: '#CFAE60', background: 'transparent' }}>
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3" style={{ gap: '2px', background: '#F8F6F2' }}>
            {filtered.map(p => (
              <Link
                key={p.id}
                to={localePath(`/property/${p.slug}`)}
                className="group block bg-white transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:-translate-y-[2px]"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ paddingTop: '75%' }}>
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-[rgba(207,174,96,0.12)] transition-colors duration-300" />
                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span
                      className="text-[9px] tracking-[2px] uppercase font-body text-white px-[10px] py-[5px]"
                      style={{ background: p.status === 'preventa' ? '#26547D' : '#1C1C1C' }}
                    >
                      {p.status === 'preventa' ? 'Preventa' : 'Entrega Inmediata'}
                    </span>
                    {p.yield && (
                      <span className="text-[9px] px-[10px] py-[5px] font-body flex items-center gap-1 text-white" style={{ background: '#CFAE60' }}>
                        <TrendingUpIcon className="w-3 h-3" /> {p.yield}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 pt-5 pb-4">
                  <p className="text-[9px] tracking-[3px] uppercase font-body font-[300] mb-1.5" style={{ color: '#CFAE60' }}>{p.zone}</p>
                  <h3 className="font-display text-[22px] font-[300] mb-2.5" style={{ color: '#1C1C1C' }}>{p.name}</h3>

                  {/* Specs row */}
                  <div className="flex items-center gap-[14px] mb-3">
                    <span className="flex items-center gap-1 text-[11px] font-body" style={{ color: '#4B4B4B' }}>
                      <BedIcon className="w-3 h-3" /> {p.beds} Rec.
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-body" style={{ color: '#4B4B4B' }}>
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
                          <span key={b} className="flex items-center gap-1 px-[10px] py-[4px] text-[9px] font-body font-[300]" style={{ background: 'rgba(207,174,96,0.08)', border: '1px solid rgba(207,174,96,0.22)', color: '#1C1C1C' }}>
                            <Icon className="w-[10px] h-[10px]" /> {cfg.label}
                          </span>
                        );
                      })}
                      {p.badges.length > 3 && (
                        <span className="px-[10px] py-[4px] text-[9px] font-body font-[300]" style={{ color: '#4B4B4B', background: 'rgba(207,174,96,0.08)', border: '1px solid rgba(207,174,96,0.22)' }}>
                          +{p.badges.length - 3} más
                        </span>
                      )}
                    </div>
                  )}

                  {/* Bottom row */}
                  <div className="flex items-end justify-between pt-3 mt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <div>
                      <span className="block text-[8px] font-body font-[300] uppercase tracking-[2px]" style={{ color: '#4B4B4B' }}>Desde</span>
                      <span className="font-display text-[20px]" style={{ color: '#CFAE60' }}>{formatPriceInCurrency(p.price, appliedCurrency)} {appliedCurrency}</span>
                    </div>
                    <span className="text-[10px] font-body font-[300] flex items-center gap-1 transition-colors group-hover:text-[#CFAE60]" style={{ color: '#4B4B4B' }}>
                      Ver <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
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
