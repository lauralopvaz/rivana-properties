import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  BedIcon, RulerIcon, TrendingUpIcon, CalendarIcon, XIcon,
  AnchorIcon, WavesIcon, GolfIcon, StarIcon, AirplaneIcon,
} from '@/components/icons';
import { Grid, ChevronLeft, ChevronRight, Download, Flag, Anchor, Waves, Crown, Umbrella, Lock, Ship, Star, Leaf, PawPrint, Recycle, Bed, Bath, Ruler, Layers, Calendar, TrendingUp, Plane, ShoppingBag, MapPin } from 'lucide-react';

import heroImg from '@/assets/prop-oceana.jpg';
import img2 from '@/assets/prop-jade.jpg';
import img3 from '@/assets/prop-marina.jpg';
import advisorImg from '@/assets/advisor-jess.png';

/* ─────────────── TYPES ─────────────── */

interface UnitType {
  name: string;
  m2: string;
  priceFrom: string;
  available: number;
  description: string;
}

interface LuxuryBadge {
  key: string;
  label: string;
  icon: React.ReactNode;
}

interface DistanceItem {
  icon: React.ReactNode;
  label: string;
}

interface PropertyData {
  name: string;
  nameItalic: string;
  destination: string;
  zone: string;
  destinationPath: string;
  priceFrom: string;
  pricePerM2: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  floors: string;
  delivery: string;
  description: string[];
  amenities: string[];
  luxuryBadges: LuxuryBadge[];
  unitTypes: UnitType[];
  distances: DistanceItem[];
  photos: string[];
  yieldEstimate: string;
  appreciation: string;
  advisorName: string;
  advisorInitial: string;
  advisorRole: string;
  brochureUrl: string;
}

/* ─────────────── BADGE ICON MAP ─────────────── */

const badgeIconMap: Record<string, React.ReactNode> = {
  golf: <Flag className="w-4 h-4 text-[#1C1C1C]" />,
  'vista-mar': <Waves className="w-4 h-4 text-[#1C1C1C]" />,
  'vista-marina': <Anchor className="w-4 h-4 text-[#1C1C1C]" />,
  'club-privado': <Crown className="w-4 h-4 text-[#1C1C1C]" />,
  'frente-mar': <Waves className="w-4 h-4 text-[#1C1C1C]" />,
  playa: <Umbrella className="w-4 h-4 text-[#1C1C1C]" />,
  cerrada: <Lock className="w-4 h-4 text-[#1C1C1C]" />,
  marina: <Ship className="w-4 h-4 text-[#1C1C1C]" />,
  '5-estrellas': <Star className="w-4 h-4 text-[#1C1C1C]" />,
  wellness: <Leaf className="w-4 h-4 text-[#1C1C1C]" />,
  'pet-friendly': <PawPrint className="w-4 h-4 text-[#1C1C1C]" />,
  eco: <Recycle className="w-4 h-4 text-[#1C1C1C]" />,
};

/* ─────────────── SAMPLE DATA ─────────────── */

const propertyData: PropertyData = {
  name: 'Oceana',
  nameItalic: 'Oceana',
  destination: 'Costa Mujeres',
  zone: 'Playa Mujeres',
  destinationPath: '/cancun/costa-mujeres',
  priceFrom: '$195,000 USD',
  pricePerM2: '$2,200/m²',
  bedrooms: '1–3',
  bathrooms: '1–3',
  area: '65–185',
  floors: '12',
  delivery: 'Q4 2027',
  description: [
    'Oceana Residences es un desarrollo premier frente al mar en Playa Mujeres, Costa Mujeres. Diseñado por arquitectos galardonados, esta torre de 12 pisos ofrece 120 unidades de lujo desde estudios hasta penthouses de 3 recámaras, cada uno con terraza privada y vistas al mar.',
    'Con precios de preventa desde $195,000 USD, los compradores pueden esperar rendimientos anuales del 8–12% y una apreciación del 15–22% para la entrega en Q4 2027.',
  ],
  amenities: [
    'Infinity Pool', 'Beach Club', 'Gimnasio', 'Co-Working', 'Concierge',
    'Estacionamiento Subterráneo', 'Carga EV', 'Smart Home', 'Vista al Mar',
    'Pet Friendly', 'Área Infantil', 'Spa & Wellness',
  ],
  luxuryBadges: [
    { key: 'vista-mar', label: 'Vista al Mar', icon: badgeIconMap['vista-mar'] },
    { key: 'playa', label: 'Acceso a Playa', icon: badgeIconMap['playa'] },
    { key: '5-estrellas', label: 'Amenidades 5 Estrellas', icon: badgeIconMap['5-estrellas'] },
    { key: 'wellness', label: 'Wellness & Spa', icon: badgeIconMap['wellness'] },
    { key: 'pet-friendly', label: 'Pet Friendly', icon: badgeIconMap['pet-friendly'] },
    { key: 'eco', label: 'Eco-Certificado', icon: badgeIconMap['eco'] },
  ],
  unitTypes: [
    { name: 'Estudio', m2: '65 m²', priceFrom: '$195,000', available: 28, description: 'Estudio con terraza privada y vista al mar.' },
    { name: '1 Recámara', m2: '85 m²', priceFrom: '$245,000', available: 18, description: 'Departamento de 1 recámara con acabados de lujo.' },
    { name: '2 Recámaras', m2: '120 m²', priceFrom: '$345,000', available: 8, description: 'Amplio departamento de 2 recámaras con vista panorámica.' },
    { name: '3 Recámaras', m2: '155 m²', priceFrom: '$485,000', available: 4, description: 'Residencia de 3 recámaras con terraza amplia.' },
    { name: 'Penthouse', m2: '185 m²', priceFrom: '$680,000', available: 2, description: 'Penthouse de lujo con rooftop privado y jacuzzi.' },
  ],
  distances: [
    { icon: <Plane className="w-[15px] h-[15px] text-[#1C1C1C]" />, label: 'Aeropuerto 25 min' },
    { icon: <Waves className="w-[15px] h-[15px] text-[#1C1C1C]" />, label: 'Playa Directa' },
    { icon: <ShoppingBag className="w-[15px] h-[15px] text-[#1C1C1C]" />, label: 'Plaza Las Américas 30 min' },
    { icon: <Flag className="w-[15px] h-[15px] text-[#1C1C1C]" />, label: 'Campo de Golf 5 min' },
    { icon: <Anchor className="w-[15px] h-[15px] text-[#1C1C1C]" />, label: 'Marina 15 min' },
  ],
  photos: [heroImg, img2, img3, heroImg, img2, img3],
  yieldEstimate: '8–12% anual',
  appreciation: '15–22% a entrega',
  advisorName: 'Jess Candela',
  advisorInitial: 'J',
  advisorRole: 'Especialista en Preventas · EN · ES',
  brochureUrl: '/brochure-oceana.pdf',
};

/* ─────────────── COMPONENT ─────────────── */

const PropertyDetail = () => {
  const { localePath } = useLanguage();
  const p = propertyData;

  const [activeTab, setActiveTab] = useState('general');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [unitModalOpen, setUnitModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<UnitType | null>(null);
  const [unitFormOpen, setUnitFormOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [brochureErrors, setBrochureErrors] = useState<Record<string, boolean>>({});
  const [brochureForm, setBrochureForm] = useState({ name: '', phone: '', email: '' });

  const openLightbox = (idx: number) => { setLightboxIdx(idx); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const prevPhoto = () => setLightboxIdx((i) => (i - 1 + p.photos.length) % p.photos.length);
  const nextPhoto = () => setLightboxIdx((i) => (i + 1) % p.photos.length);

  const openUnitModal = (u: UnitType) => { setSelectedUnit(u); setUnitModalOpen(true); setUnitFormOpen(false); };
  const closeUnitModal = () => { setUnitModalOpen(false); setSelectedUnit(null); };

  const handleBrochureSubmit = () => {
    const errors: Record<string, boolean> = {};
    if (!brochureForm.name.trim()) errors.name = true;
    if (!brochureForm.phone.trim()) errors.phone = true;
    if (!brochureForm.email.trim()) errors.email = true;
    setBrochureErrors(errors);
    if (Object.keys(errors).length === 0) {
      setBrochureModalOpen(false);
      setBrochureForm({ name: '', phone: '', email: '' });
      const a = document.createElement('a');
      a.href = p.brochureUrl;
      a.download = '';
      a.click();
    }
  };

  // Close modals on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) closeLightbox();
        else if (unitModalOpen) closeUnitModal();
        else if (brochureModalOpen) setBrochureModalOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen, unitModalOpen, brochureModalOpen]);

  const availBadge = (count: number) => {
    if (count > 20) return { bg: 'bg-[#CFAE60]/10', text: 'text-[#CFAE60]', label: `${count} disponibles` };
    if (count >= 5) return { bg: 'bg-[#CFAE60]/20', text: 'text-[#CFAE60]', label: `${count} disponibles` };
    return { bg: 'bg-[#b03a2e]/10', text: 'text-[#b03a2e]', label: `${count} disponibles` };
  };

  const inputClass = "w-full bg-[#F8F6F2] border border-[rgba(0,0,0,0.09)] rounded-none px-3 py-3 text-[13px] font-body font-[300] text-[#1C1C1C] placeholder:text-[#4B4B4B]/50 focus:outline-none focus:border-[#CFAE60] transition-colors";
  const goldBtnClass = "w-full bg-[#CFAE60] text-white font-body text-[9px] tracking-[3px] uppercase py-3.5 rounded-none border-none cursor-pointer hover:brightness-110 transition-all";
  const sectionLabel = "font-body text-[9px] text-[#CFAE60] tracking-[4px] uppercase font-[400]";

  const tabs = [
    { key: 'general', label: 'General' },
    { key: 'features', label: 'Características' },
    { key: 'units', label: 'Unidades' },
    { key: 'location', label: 'Ubicación' },
  ];

  return (
    <div className="bg-[#F8F6F2]">
      <SEOHead
        title={`${p.name} Residences — ${p.destination} | Rivana Properties`}
        description={`${p.name} Residences: desarrollo de lujo frente al mar en ${p.destination}. Preventa desde ${p.priceFrom}.`}
        path={`/property/oceana-residences`}
      />

      {/* ═══ 1. GALLERY HERO ═══ */}
      <section className="pt-20 px-4 md:px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="grid gap-[3px] grid-cols-1 md:grid-cols-[2fr_1fr]" style={{ height: 'auto' }}>
          {/* Main image */}
          <div
            className="relative overflow-hidden cursor-pointer group aspect-[16/10] md:aspect-auto"
            style={{ gridRow: window.innerWidth >= 768 ? '1/3' : undefined }}
            onClick={() => openLightbox(0)}
          >
            <img src={p.photos[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-[rgba(207,174,96,0.12)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <button
              onClick={(e) => { e.stopPropagation(); openLightbox(0); }}
              className="absolute bottom-4 right-4 flex items-center gap-2 bg-[rgba(255,255,255,0.92)] border border-[rgba(207,174,96,0.24)] px-4 py-2.5 font-body text-[9px] tracking-[3px] uppercase text-[#1C1C1C] rounded-none hover:border-[#CFAE60] transition-colors"
            >
              <Grid className="w-3.5 h-3.5" />
              Ver todas las fotos
            </button>
          </div>
          {/* Secondary images - hidden on mobile */}
          {[1, 2].map((i) => (
            <div key={i} className="relative overflow-hidden cursor-pointer group hidden md:block h-[210px]" onClick={() => openLightbox(i)}>
              <img src={p.photos[i] || p.photos[0]} alt={`${p.name} ${i + 1}`} className="w-full h-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-[rgba(207,174,96,0.12)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* ═══ MAIN 2-COL LAYOUT ═══ */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto pb-32">
        <div className="grid items-start" style={{ gridTemplateColumns: '62% 38%' }}>

          {/* ── LEFT COLUMN ── */}
          <div className="py-14 pr-11 pl-2 lg:pr-14">

            {/* 2. TITLE BLOCK */}
            <nav className={`${sectionLabel} flex items-center gap-1.5 mb-3`}>
              <Link to={localePath(p.destinationPath)} className="hover:text-[#1C1C1C] transition-colors">{p.destination}</Link>
              <span className="text-[#4B4B4B]/40">·</span>
              <span className="text-[#4B4B4B]">{p.zone}</span>
            </nav>
            <h1 className="font-display font-[300] text-[#1C1C1C] mb-3" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
              Residencial <em className="text-[#CFAE60] italic">{p.nameItalic}</em>
            </h1>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-display text-[22px] text-[#CFAE60]">{p.priceFrom}</span>
              <span className="font-body text-[11px] text-[#4B4B4B]">{p.pricePerM2}</span>
            </div>

            {/* 3. SPECS ROW */}
            <div className="flex flex-wrap items-center gap-0 border-t border-b border-[rgba(0,0,0,0.08)] py-4 mb-8">
              {[
                { icon: <Bed className="w-[14px] h-[14px] text-[#CFAE60]" />, val: p.bedrooms, label: 'Recámaras' },
                { icon: <Bath className="w-[14px] h-[14px] text-[#CFAE60]" />, val: p.bathrooms, label: 'Baños' },
                { icon: <Ruler className="w-[14px] h-[14px] text-[#CFAE60]" />, val: p.area, label: 'm²' },
                { icon: <Layers className="w-[14px] h-[14px] text-[#CFAE60]" />, val: p.floors, label: 'Pisos' },
                { icon: <Calendar className="w-[14px] h-[14px] text-[#CFAE60]" />, val: p.delivery, label: 'Entrega' },
              ].map((s, idx) => (
                <div key={s.label} className="flex items-center">
                  {idx > 0 && <div className="w-px h-5 bg-[rgba(0,0,0,0.08)] mx-4" />}
                  <div className="flex items-center gap-1.5">
                    {s.icon}
                    <span className="font-display text-[15px] text-[#1C1C1C]">{s.val}</span>
                    <span className="font-body text-[11px] text-[#4B4B4B]">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. LUXURY BADGES */}
            {p.luxuryBadges.length > 0 && (
              <div className="mb-8">
                <p className={`${sectionLabel} mb-3`}>Características Exclusivas</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.luxuryBadges.map((b) => (
                    <div
                      key={b.key}
                      className="flex items-center gap-2 bg-white border border-[rgba(207,174,96,0.28)] px-3.5 py-2.5 hover:border-[#CFAE60] hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(207,174,96,0.12)] transition-all duration-200 cursor-default"
                    >
                      {b.icon}
                      <span className="font-body text-[10px] text-[#1C1C1C] font-[300]">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. TABS */}
            <div className="flex gap-0 border-b border-[rgba(0,0,0,0.08)] mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-3 font-body text-[12px] tracking-[1px] uppercase transition-colors border-b-2 -mb-px rounded-none ${
                    activeTab === tab.key
                      ? 'border-[#CFAE60] text-[#CFAE60]'
                      : 'border-transparent text-[#4B4B4B] hover:text-[#1C1C1C]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB: GENERAL */}
            {activeTab === 'general' && (
              <div className="space-y-4 max-w-[580px] animate-fade-in">
                {p.description.map((par, i) => (
                  <p key={i} className="font-body text-[13px] text-[#4B4B4B] leading-[1.85] font-[300]">{par}</p>
                ))}
              </div>
            )}

            {/* TAB: FEATURES */}
            {activeTab === 'features' && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                  {p.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 py-1.5 border-b border-[rgba(0,0,0,0.04)]">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#CFAE60] flex-shrink-0" />
                      <span className="font-body text-[12px] text-[#1C1C1C] font-[300]">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: UNITS */}
            {activeTab === 'units' && (
              <div className="animate-fade-in">
                <p className="font-body text-[10px] text-[#4B4B4B] mb-4">
                  Selecciona un tipo de unidad para ver el plano y agendar una cita.
                </p>
                <div className="space-y-0">
                  {p.unitTypes.map((u) => {
                    const badge = availBadge(u.available);
                    return (
                      <button
                        key={u.name}
                        onClick={() => openUnitModal(u)}
                        className="w-full text-left grid items-center gap-3 py-3.5 px-3 border-b border-[rgba(0,0,0,0.06)] hover:bg-[rgba(207,174,96,0.05)] hover:pl-5 transition-all duration-200 rounded-none"
                        style={{ gridTemplateColumns: '1fr 64px 1fr 108px' }}
                      >
                        <span className="font-display text-[20px] text-[#1C1C1C]">{u.name}</span>
                        <span className="font-body text-[10px] text-[#4B4B4B]">{u.m2}</span>
                        <div>
                          <span className="font-body text-[8px] text-[#4B4B4B] uppercase tracking-[1px] block">Desde</span>
                          <span className="font-display text-[17px] text-[#CFAE60]">{u.priceFrom}</span>
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-[9px] font-body font-[400] ${badge.bg} ${badge.text}`}>
                            {u.available < 5 && <span>&#9888;</span>}
                            {badge.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB: LOCATION */}
            {activeTab === 'location' && (
              <div className="animate-fade-in">
                <div className="aspect-[16/9] bg-[#e8e4dd] border border-[rgba(0,0,0,0.08)] flex items-center justify-center mb-6">
                  <span className="font-body text-[12px] text-[#4B4B4B]">Mapa Interactivo</span>
                </div>
                <div className="flex flex-wrap gap-6">
                  {p.distances.map((d, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {d.icon}
                      <span className="font-body text-[10px] text-[#4B4B4B]">{d.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT COLUMN / SIDEBAR ── */}
          <div className="pt-14 pl-0 lg:pl-4">
            <aside className="sticky top-6 bg-white border border-[rgba(207,174,96,0.24)] shadow-[0_6px_48px_rgba(0,0,0,0.07)] p-6">

              {/* A) PRICE + ROI */}
              <p className="font-body text-[8px] text-[#4B4B4B] tracking-[3px] uppercase mb-1">Desde</p>
              <p className="font-display text-[34px] text-[#CFAE60] leading-none mb-3">{p.priceFrom}</p>

              <p className="font-body text-[8px] text-[#4B4B4B] tracking-[3px] uppercase mb-1">Rendimiento Estimado*</p>
              <div className="flex items-center gap-1.5 mb-2">
                <TrendingUp className="w-3.5 h-3.5 text-[#2d7a4a]" />
                <span className="font-body text-[13px] text-[#2d7a4a] font-[400]">{p.yieldEstimate}</span>
              </div>

              <div className="flex items-center gap-1.5 mb-4">
                <TrendingUp className="w-3 h-3 text-[#CFAE60]" />
                <span className="font-body text-[10px] text-[#4B4B4B]">Plusvalía estimada: {p.appreciation}</span>
              </div>

              <div className="border-t border-[rgba(0,0,0,0.06)] pt-3 mb-4">
                <p className="font-body text-[8px] text-[rgba(75,75,75,0.52)] italic leading-[1.65]">
                  * Los rendimientos son estimados con base en el mercado actual de renta vacacional en la zona. No constituyen una garantía de retorno. Los resultados pueden variar según ocupación, administración y condiciones del mercado.
                </p>
              </div>

              {/* DIVIDER */}
              <div className="border-t border-[rgba(207,174,96,0.18)] my-4" />

              {/* C) ADVISOR CARD */}
              <div className="bg-[#F8F6F2] p-3 flex items-center gap-3 mb-4">
                <img src={advisorImg} alt={p.advisorName} className="w-[38px] h-[38px] rounded-full border border-[#CFAE60] object-cover" />
                <div>
                  <p className="font-body text-[12px] text-[#1C1C1C] font-[400]">{p.advisorName}</p>
                  <p className="font-body text-[9px] text-[#4B4B4B] font-[300]">{p.advisorRole}</p>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="border-t border-[rgba(207,174,96,0.18)] my-4" />

              {/* E) CONTACT FORM */}
              <div className="space-y-2.5 mb-3">
                <input placeholder="Nombre" className={inputClass} />
                <input type="email" placeholder="Correo electrónico" className={inputClass} />
                <input type="tel" placeholder="Teléfono" className={inputClass} />
              </div>
              <button className={`${goldBtnClass} mb-2.5`}>Solicitar Información</button>
              <a
                href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] font-body text-[10px] tracking-[2px] uppercase py-3 rounded-none hover:bg-[#25d366]/20 transition-colors mb-2.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.838-6.327-2.234l-.442-.362-3.086 1.034 1.034-3.086-.362-.442A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                Escribir por WhatsApp
              </a>
              <button
                onClick={() => setBrochureModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 bg-transparent border border-[rgba(207,174,96,0.28)] text-[#CFAE60] font-body text-[9px] tracking-[3px] uppercase py-3 rounded-none hover:border-[#CFAE60] hover:bg-[#CFAE60]/5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Descargar Brochure
              </button>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══ LIGHTBOX ═══ */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-[rgba(5,8,12,0.96)] flex flex-col items-center justify-center" onClick={closeLightbox}>
          {/* Close */}
          <button onClick={closeLightbox} className="absolute top-5 right-5 text-white/40 hover:text-[#CFAE60] transition-colors z-10">
            <XIcon className="w-6 h-6" />
          </button>
          {/* Arrows */}
          <button onClick={(e) => { e.stopPropagation(); prevPhoto(); }} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#CFAE60] transition-colors">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextPhoto(); }} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#CFAE60] transition-colors">
            <ChevronRight className="w-8 h-8" />
          </button>
          {/* Main image */}
          <img
            src={p.photos[lightboxIdx]}
            alt={`${p.name} ${lightboxIdx + 1}`}
            className="max-w-[82vw] max-h-[70vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Thumbnails */}
          <div className="flex gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
            {p.photos.map((ph, i) => (
              <button key={i} onClick={() => setLightboxIdx(i)} className={`w-[60px] h-[42px] overflow-hidden border-2 transition-all ${i === lightboxIdx ? 'border-[#CFAE60] opacity-100' : 'border-transparent opacity-45 hover:opacity-70'}`}>
                <img src={ph} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ═══ UNIT MODAL ═══ */}
      {unitModalOpen && selectedUnit && (
        <div className="fixed inset-0 z-50 bg-[rgba(10,14,20,0.82)] flex items-center justify-center" onClick={closeUnitModal}>
          <div
            className="bg-white max-w-[820px] w-[95vw] grid grid-cols-2 rounded-none animate-fade-in"
            style={{ animation: 'fadeSlideUp .25s ease' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Floor plan */}
            <div className="bg-[#F8F6F2] p-8 flex flex-col items-center justify-center">
              <p className={`${sectionLabel} mb-4`}>Plano de Planta</p>
              <div className="w-full aspect-square bg-[#e8e4dd] border border-[rgba(0,0,0,0.06)] flex items-center justify-center mb-3">
                <span className="font-body text-[11px] text-[#4B4B4B]">Floor Plan</span>
              </div>
              <p className="font-body text-[8px] text-[#4B4B4B] italic text-center">Plano referencial · Sujeto a cambios</p>
            </div>
            {/* Right: Details */}
            <div className="p-9 relative">
              <button onClick={closeUnitModal} className="absolute top-4 right-4 text-[#4B4B4B] hover:text-[#CFAE60] transition-colors border border-[rgba(0,0,0,0.08)] hover:border-[#CFAE60] p-1.5 rounded-none">
                <XIcon className="w-4 h-4" />
              </button>
              <h3 className="font-display text-[30px] text-[#1C1C1C] font-[300] mb-1">{selectedUnit.name}</h3>
              <p className={`${sectionLabel} mb-5`}>Residencial {p.name} · {p.destination}</p>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { label: 'Superficie', value: selectedUnit.m2 },
                  { label: 'Desde', value: selectedUnit.priceFrom, gold: true },
                  { label: 'Disponibilidad', value: `${selectedUnit.available} unidades` },
                  { label: 'Entrega estimada', value: p.delivery },
                ].map((s) => (
                  <div key={s.label} className="bg-[#F8F6F2] p-3">
                    <p className="font-body text-[8px] text-[#4B4B4B] tracking-[1px] uppercase mb-0.5">{s.label}</p>
                    <p className={`font-display text-[16px] ${s.gold ? 'text-[#CFAE60]' : 'text-[#1C1C1C]'}`}>{s.value}</p>
                  </div>
                ))}
              </div>
              <p className="font-body text-[11px] text-[#4B4B4B] leading-[1.7] mb-4">
                Unidad con terraza privada y acabados de primera. Ideal para inversión o uso personal con acceso a todas las amenidades del desarrollo.
              </p>
              <div className="border-t border-[rgba(207,174,96,0.18)] pt-4">
                <p className={`${sectionLabel} mb-3`}>¿Te interesa esta unidad?</p>

                {!unitFormOpen ? (
                  <div className="space-y-2.5">
                    <button onClick={() => setUnitFormOpen(true)} className={goldBtnClass}>Agendar una Cita</button>
                    <a
                      href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 border border-[#25d366]/30 text-[#25d366] font-body text-[10px] tracking-[2px] uppercase py-3 rounded-none hover:bg-[#25d366]/5 transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.838-6.327-2.234l-.442-.362-3.086 1.034 1.034-3.086-.362-.442A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                      Contactar por WhatsApp
                    </a>
                  </div>
                ) : (
                  <div className="space-y-2.5 animate-fade-in">
                    <div className="grid grid-cols-2 gap-2">
                      <input placeholder="Nombre" className={inputClass} />
                      <input type="tel" placeholder="Teléfono" className={inputClass} />
                    </div>
                    <input type="email" placeholder="Correo electrónico" className={inputClass} />
                    <input type="date" className={inputClass} />
                    <button className={goldBtnClass}>Confirmar Cita</button>
                    <button onClick={() => setUnitFormOpen(false)} className="w-full font-body text-[9px] tracking-[2px] uppercase text-[#4B4B4B] py-2 hover:text-[#1C1C1C] transition-colors rounded-none">
                      Cancelar
                    </button>
                    <p className="font-body text-[9px] text-[#4B4B4B] italic text-center">Un asesor te contactará en menos de 2 horas</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ BROCHURE MODAL ═══ */}
      {brochureModalOpen && (
        <div className="fixed inset-0 z-50 bg-[rgba(10,14,20,0.82)] flex items-center justify-center" onClick={() => setBrochureModalOpen(false)}>
          <div
            className="bg-white max-w-[460px] w-[92vw] p-10 rounded-none relative"
            style={{ animation: 'fadeSlideUp .25s ease' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setBrochureModalOpen(false)} className="absolute top-4 right-4 text-[#4B4B4B] hover:text-[#CFAE60] transition-colors border border-[rgba(0,0,0,0.08)] hover:border-[#CFAE60] p-1.5 rounded-none">
              <XIcon className="w-4 h-4" />
            </button>
            <p className={`${sectionLabel} mb-2`}>Material Exclusivo</p>
            <h3 className="font-display text-[28px] text-[#1C1C1C] font-[300] mb-2">
              Descarga el <em className="text-[#CFAE60] italic">Brochure</em>
            </h3>
            <p className="font-body text-[12px] text-[#4B4B4B] leading-[1.7] mb-6">
              Accede a precios detallados, planos de planta, acabados y condiciones de preventa.
            </p>
            <div className="space-y-3">
              <div>
                <input
                  placeholder="Nombre completo"
                  value={brochureForm.name}
                  onChange={(e) => { setBrochureForm({ ...brochureForm, name: e.target.value }); setBrochureErrors({ ...brochureErrors, name: false }); }}
                  className={inputClass}
                />
                {brochureErrors.name && <p className="font-body text-[9px] text-[#b03a2e] mt-1">Campo requerido</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={brochureForm.phone}
                  onChange={(e) => { setBrochureForm({ ...brochureForm, phone: e.target.value }); setBrochureErrors({ ...brochureErrors, phone: false }); }}
                  className={inputClass}
                />
                {brochureErrors.phone && <p className="font-body text-[9px] text-[#b03a2e] mt-1">Campo requerido</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={brochureForm.email}
                  onChange={(e) => { setBrochureForm({ ...brochureForm, email: e.target.value }); setBrochureErrors({ ...brochureErrors, email: false }); }}
                  className={inputClass}
                />
                {brochureErrors.email && <p className="font-body text-[9px] text-[#b03a2e] mt-1">Campo requerido</p>}
              </div>
              <button onClick={handleBrochureSubmit} className={goldBtnClass}>Descargar Brochure</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal animation keyframe */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PropertyDetail;
