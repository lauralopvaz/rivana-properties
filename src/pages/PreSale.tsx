import { useState, useEffect, useCallback } from 'react';
import { ChatIcon, XIcon } from '@/components/icons';
import presaleHero from '@/assets/presale-hero.jpg';

/* ─── Project Data (would come from CMS) ─── */
const PROJECT = {
  name: 'Oceana',
  fullName: 'Residencial Oceana',
  location: 'Costa Mujeres, Quintana Roo',
  totalUnits: 120,
  delivery: 'Q4 2027',
  priceFrom: '$195,000 USD',
  yieldPct: '8–12%',
  description:
    'Un desarrollo residencial frente al mar en Playa Mujeres que redefine el lujo caribeño contemporáneo. Cada residencia ha sido diseñada con líneas limpias, materiales nobles y terrazas generosas que enmarcan el horizonte turquesa del Caribe mexicano.',
  brochureUrl: '/brochures/oceana-brochure.pdf',
  presaleDeadline: new Date('2026-06-30T23:59:59'),
  priceIncreaseAfter: 12,
  phases: [
    { name: 'Fase 1 — Coral', pct: 100, status: 'Agotado' },
    { name: 'Fase 2 — Aqua', pct: 85, status: '85% Vendido' },
    { name: 'Fase 3 — Brisa', pct: 30, status: 'Disponible' },
  ],
  units: [
    { name: 'Estudio Coral', m2: '58 m²', price: '$195,000 USD', avail: 2, desc: 'Estudio con vista parcial al mar, terraza de 12m² y acabados premium. Ideal como inversión con alto rendimiento en renta vacacional.' },
    { name: 'Suite Mar 1BR', m2: '78 m²', price: '$265,000 USD', avail: 14, desc: 'Una recámara con sala-comedor abierta, cocina integral y terraza con vista al Caribe. Incluye un cajón de estacionamiento.' },
    { name: 'Residencia Aqua 2BR', m2: '112 m²', price: '$385,000 USD', avail: 22, desc: 'Dos recámaras con baños completos, área de lavado y terraza extendida. Vista panorámica al mar y a la alberca infinity.' },
    { name: 'Garden Suite 2BR', m2: '135 m²', price: '$420,000 USD', avail: 8, desc: 'Planta baja con jardín privado de 40m², dos recámaras, acceso directo a la alberca y beach club.' },
    { name: 'Penthouse Brisa 3BR', m2: '220 m²', price: '$780,000 USD', avail: 4, desc: 'Tres recámaras, rooftop privado con jacuzzi, doble altura en sala y vistas 270° al mar Caribe.' },
    { name: 'Grand Penthouse', m2: '320 m²', price: '$1,200,000 USD', avail: 1, desc: 'La residencia insignia: terraza de 90m², pool privado, acabados de autor y servicio de concierge dedicado.' },
  ],
  amenities: [
    'Infinity Pool', 'Beach Club', 'Gimnasio', 'Spa & Wellness', 'Co-Working',
    'Kids Club', 'Rooftop Bar', 'Concierge 24/7', 'Estacionamiento Subterráneo',
    'Carga EV', 'Smart Home', 'Pet Friendly', 'Paneles Solares', 'Seguridad 24/7',
    'Jardines Zen', 'Palapa BBQ',
  ],
  availability: [
    { type: 'Estudios', qty: 2 },
    { type: '1 Recámara', qty: 14 },
    { type: '2 Recámaras', qty: 30 },
    { type: 'Penthouses', qty: 5 },
  ],
  gallery: [presaleHero, presaleHero, presaleHero, presaleHero, presaleHero],
};

/* ─── Countdown Hook ─── */
function useCountdown(target: Date) {
  const calc = useCallback(() => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  }, [target]);
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [calc]);
  return time;
}

/* ─── Availability badge color ─── */
function availBadge(n: number) {
  if (n > 20) return { bg: 'rgba(207,174,96,0.12)', text: '#CFAE60', label: `${n} disponibles` };
  if (n >= 5) return { bg: 'rgba(207,174,96,0.22)', text: '#b8952e', label: `${n} disponibles` };
  return { bg: 'rgba(176,58,46,0.12)', text: '#b03a2e', label: `⚠ ${n} disponible${n > 1 ? 's' : ''}` };
}

/* ─── Sidebar availability color ─── */
function sideAvailColor(qty: number) {
  if (qty > 20) return '#4B4B4B';
  if (qty >= 5) return '#CFAE60';
  return '#b03a2e';
}

/* ═══════════════════════════════════════════ */

const PreSale = () => {
  const countdown = useCountdown(PROJECT.presaleDeadline);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [unitModal, setUnitModal] = useState<number | null>(null);
  const [brochureModal, setBrochureModal] = useState(false);

  /* Brochure form */
  const [brForm, setBrForm] = useState({ name: '', phone: '', email: '' });
  const [brErrors, setBrErrors] = useState<Record<string, string>>({});

  /* Unit modal form */
  const [unitForm, setUnitForm] = useState({ name: '', phone: '', email: '', date: '' });

  const handleBrochureSubmit = () => {
    const errs: Record<string, string> = {};
    if (!brForm.name.trim()) errs.name = 'Campo requerido';
    if (!brForm.phone.trim()) errs.phone = 'Campo requerido';
    if (!brForm.email.trim()) errs.email = 'Campo requerido';
    setBrErrors(errs);
    if (Object.keys(errs).length === 0) {
      setBrochureModal(false);
      setBrForm({ name: '', phone: '', email: '' });
      setBrErrors({});
      // Trigger download
      const a = document.createElement('a');
      a.href = PROJECT.brochureUrl;
      a.download = 'Oceana-Brochure.pdf';
      a.click();
    }
  };

  /* Close modals on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox(null);
        setUnitModal(null);
        setBrochureModal(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const sectionLabel = "font-body text-[9px] tracking-[4px] uppercase font-[400]";
  const inputClass = "w-full bg-[#F8F6F2] border border-[rgba(0,0,0,0.10)] px-3 py-2.5 text-[13px] font-body font-[300] text-[#1C1C1C] placeholder:text-[#4B4B4B]/50 focus:outline-none focus:border-[#CFAE60] transition-colors rounded-none";
  const goldBtn = "w-full bg-[#CFAE60] text-white font-body text-[9px] tracking-[3px] uppercase font-[400] py-3 hover:bg-[#b8952e] transition-colors cursor-pointer border-none rounded-none";

  return (
    <div className="bg-white">

      {/* ═══ HERO ═══ */}
      <section className="relative h-[60vh] md:h-[88vh]">
        <img src={presaleHero} alt="Oceana Residences" className="absolute inset-0 w-full h-full object-cover" />
        {/* Horizontal overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,20,30,0.72) 0%, rgba(10,20,30,0.30) 55%, rgba(10,20,30,0.05) 100%)' }} />
        {/* Vertical overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,20,30,0.60) 0%, transparent 48%)' }} />
        {/* Content bottom-left */}
        <div className="absolute bottom-0 left-0 p-6 md:p-14 z-10">
          <div className="flex items-center gap-2 mb-3 md:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#CFAE60] blink-dot" />
            <span className="font-body text-[8px] md:text-[9px] tracking-[3px] md:tracking-[5px] uppercase font-[400] text-[#CFAE60]" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>Preventa Exclusiva · Ahora Abierta</span>
          </div>
          <h1 className="text-white font-display font-[300] leading-[1.05] mb-3 text-[clamp(36px,8vw,76px)]" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            Residencial <em className="text-[#CFAE60] italic">{PROJECT.name}</em>
          </h1>
          <p className="font-body text-[11px] md:text-[12px] text-white/[0.52] tracking-[1px] uppercase" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>{PROJECT.location}</p>
        </div>
      </section>

      {/* ═══ GALLERY STRIP ═══ */}
      <section className="bg-white">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-[3px]" style={{ height: '80px' }}>
          {PROJECT.gallery.slice(0, window.innerWidth < 768 ? 2 : 4).map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="relative overflow-hidden group cursor-pointer border-none bg-transparent p-0"
            >
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#CFAE60]/0 group-hover:bg-[#CFAE60]/20 transition-colors duration-300" />
            </button>
          ))}
          <button
            onClick={() => setLightbox(0)}
            className="bg-[#1C1C1C] flex flex-col items-center justify-center gap-1 cursor-pointer border-none"
          >
            <svg className="w-4 h-4 text-[#CFAE60]" viewBox="0 0 16 16" fill="currentColor"><rect x="0" y="0" width="4" height="4" /><rect x="6" y="0" width="4" height="4" /><rect x="12" y="0" width="4" height="4" /><rect x="0" y="6" width="4" height="4" /><rect x="6" y="6" width="4" height="4" /><rect x="12" y="6" width="4" height="4" /><rect x="0" y="12" width="4" height="4" /><rect x="6" y="12" width="4" height="4" /><rect x="12" y="12" width="4" height="4" /></svg>
            <span className="font-body text-[9px] tracking-[2px] uppercase text-[#CFAE60]">Ver todas</span>
          </button>
        </div>
      </section>

      {/* ═══ MAIN 2-COL LAYOUT ═══ */}
      <section className="grid items-start grid-cols-1 lg:grid-cols-[62%_38%]">

        {/* ── LEFT COLUMN ── */}
        <div className="px-5 py-10 md:px-10 md:py-14 lg:pl-[60px] lg:pr-[44px] lg:pt-[56px] lg:pb-[80px]">

          {/* MODULE A — Project Description */}
          <div className="mb-10">
            <p className={sectionLabel} style={{ color: '#CFAE60' }}>El Proyecto</p>
            <h2 className="font-display font-[300] mt-3 mb-5 text-[#1C1C1C]">
              Diseñado para <em className="italic text-[#CFAE60]">trascender</em>
            </h2>
            <p className="font-body text-[13px] font-[300] leading-[1.82] text-[#4B4B4B] mb-8">{PROJECT.description}</p>

            {/* 3 stat boxes */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
              {[
                { val: String(PROJECT.totalUnits), label: 'Total Unidades' },
                { val: PROJECT.delivery, label: 'Entrega' },
                { val: '$195K', label: 'Precio Desde' },
              ].map((s) => (
                <div key={s.label} className="bg-[#F8F6F2] border border-[rgba(207,174,96,0.22)] p-4 text-center">
                  <span className="font-display text-[28px] font-[300] text-[#CFAE60] block">{s.val}</span>
                  <span className="font-body text-[8px] tracking-[3px] uppercase text-[#4B4B4B] font-[400]">{s.label}</span>
                </div>
              ))}
            </div>

            <button onClick={() => setBrochureModal(true)} className={goldBtn}>Solicitar Brochure</button>

            {/* Divider */}
            <div className="mt-10 border-t border-[rgba(207,174,96,0.18)]" />
          </div>

          {/* MODULE B — Sales Phases */}
          {PROJECT.phases && PROJECT.phases.length > 0 && (
            <div className="mb-10">
              <p className={sectionLabel} style={{ color: '#CFAE60' }}>Fases de Venta</p>
              <div className="mt-4 space-y-5">
                {PROJECT.phases.map((ph) => {
                  const isSold = ph.pct === 100;
                  return (
                    <div key={ph.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`font-body text-[13px] font-[300] ${isSold ? 'line-through text-[#999]' : 'text-[#1C1C1C]'}`}>{ph.name}</span>
                        <span className={`font-body text-[11px] font-[400] ${isSold ? 'text-[#999]' : ph.pct >= 80 ? 'text-[#CFAE60]' : 'text-[#1C1C1C]'}`}>{ph.status}</span>
                      </div>
                      <div className="w-full h-[3px] bg-[#F0ECE4]">
                        <div className="h-full bg-[#CFAE60] transition-all duration-700" style={{ width: `${ph.pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10 border-t border-[rgba(207,174,96,0.18)]" />
            </div>
          )}

          {/* MODULE C — Unit Types */}
          <div className="mb-10">
            <p className={sectionLabel} style={{ color: '#CFAE60' }}>Tipos de Unidad</p>
            <p className="font-body text-[10px] text-[#4B4B4B] mt-2 mb-4">Haz clic en cualquier unidad para ver el plano y agendar una cita.</p>

            <div className="flex flex-col">
              {PROJECT.units.map((u, idx) => {
                const badge = availBadge(u.avail);
                return (
                  <button
                    key={idx}
                    onClick={() => setUnitModal(idx)}
                    className="flex flex-col sm:grid gap-1 sm:gap-2 py-3.5 px-3 border-b border-[rgba(0,0,0,0.06)] text-left transition-all duration-200 hover:bg-[rgba(207,174,96,0.05)] hover:pl-5 cursor-pointer bg-transparent border-l-0 border-r-0 border-t-0 rounded-none"
                    style={{ gridTemplateColumns: '1fr 56px 1fr 100px' }}
                  >
                    <span className="font-display text-[18px] sm:text-[20px] font-[300] text-[#1C1C1C] self-center">{u.name}</span>
                    <span className="font-body text-[10px] text-[#4B4B4B] self-center">{u.m2}</span>
                    <span className="font-display text-[16px] sm:text-[17px] font-[300] text-[#CFAE60] self-center">{u.price}</span>
                    <span
                      className="font-body text-[9px] font-[400] py-1 px-2 text-center self-center w-fit sm:w-auto"
                      style={{ background: badge.bg, color: badge.text }}
                    >{badge.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-10 border-t border-[rgba(207,174,96,0.18)]" />
          </div>

          {/* MODULE D — Amenities */}
          <div>
            <p className={sectionLabel} style={{ color: '#CFAE60' }}>Amenidades</p>
            <div className="mt-4 flex flex-wrap gap-[6px]">
              {PROJECT.amenities.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-2 bg-[#F8F6F2] border border-[rgba(0,0,0,0.07)] py-2 px-3.5 font-body text-[10px] font-[300] text-[#1C1C1C] transition-colors hover:border-[#CFAE60] hover:bg-white cursor-default"
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-[#CFAE60] flex-shrink-0" />
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN (SIDEBAR) ── */}
        <div className="px-5 py-8 md:px-10 lg:pr-10 lg:pl-0 lg:pt-10 lg:pb-10">
          <div
            className="bg-white border border-[rgba(207,174,96,0.22)] p-6"
            style={{ position: 'sticky', top: '24px', boxShadow: '0 6px 48px rgba(0,0,0,0.08)' }}
          >
            {/* Price */}
            <p className="font-body text-[8px] tracking-[3px] uppercase text-[#4B4B4B] font-[400] mb-1">Desde</p>
            <span className="font-display text-[36px] font-[300] text-[#CFAE60] block">{PROJECT.priceFrom}</span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-[#2d7a4a] text-[12px]">↗</span>
              <span className="font-body text-[12px] font-[300] text-[#2d7a4a]">{PROJECT.yieldPct} rendimiento estimado</span>
            </div>

            <div className="my-5 border-t border-[rgba(207,174,96,0.18)]" />

            {/* Availability */}
            <p className={sectionLabel} style={{ color: '#CFAE60', marginBottom: '10px' }}>Disponibilidad Actual</p>
            <div className="space-y-2">
              {PROJECT.availability.map((a) => (
                <div key={a.type} className="flex items-center justify-between font-body text-[12px] font-[300]">
                  <span className="text-[#4B4B4B]">{a.type}</span>
                  <span style={{ color: sideAvailColor(a.qty) }}>
                    {a.qty <= 5 && '⚠ '}{a.qty} disponible{a.qty > 1 ? 's' : ''}
                  </span>
                </div>
              ))}
            </div>

            <div className="my-5 border-t border-[rgba(207,174,96,0.18)]" />

            {/* Countdown */}
            <p className="font-body text-[8px] tracking-[3px] uppercase text-[#4B4B4B] font-[400] mb-3">Precio de Preventa Hasta</p>
            <div className="grid grid-cols-4 gap-2 mb-2">
              {[
                { val: countdown.days, label: 'Días' },
                { val: countdown.hours, label: 'Hrs' },
                { val: countdown.minutes, label: 'Min' },
                { val: countdown.seconds, label: 'Seg' },
              ].map((t) => (
                <div key={t.label} className="bg-[#1C1C1C] py-2.5 flex flex-col items-center">
                  <span className="font-display text-[24px] font-[300] text-[#CFAE60]">{String(t.val).padStart(2, '0')}</span>
                  <span className="font-body text-[7px] uppercase tracking-[1px] text-white/[0.38]">{t.label}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-[9px] italic text-[#4B4B4B] text-center mb-0">Después de esta fecha el precio aumenta {PROJECT.priceIncreaseAfter}%</p>

            <div className="my-5 border-t border-[rgba(207,174,96,0.18)]" />

            {/* Contact Form */}
            <form className="space-y-2.5" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Nombre" className={inputClass} />
              <input type="email" placeholder="Correo electrónico" className={inputClass} />
              <input type="tel" placeholder="Teléfono" className={inputClass} />
              <button type="submit" className={goldBtn}>Solicitar Precios y Planos</button>
              <a
                href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#e8f5e9] border border-[#66bb6a] py-2.5 font-body text-[10px] tracking-[2px] uppercase text-[#2e7d32] font-[400] hover:bg-[#c8e6c9] transition-colors cursor-pointer rounded-none no-underline"
              >
                <ChatIcon className="w-3.5 h-3.5" /> Escribir por WhatsApp
              </a>
            </form>
          </div>
        </div>
      </section>

      {/* ═══ LIGHTBOX ═══ */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: 'rgba(5,8,12,0.95)' }}
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-[rgba(255,255,255,0.15)] bg-transparent text-white hover:border-[#CFAE60] transition-colors cursor-pointer rounded-none"
          >
            <XIcon className="w-5 h-5" />
          </button>
          {/* Main image */}
          <div className="flex-1 flex items-center justify-center w-full relative" onClick={(e) => e.stopPropagation()}>
            {/* Left arrow */}
            <button
              onClick={() => setLightbox((lightbox - 1 + PROJECT.gallery.length) % PROJECT.gallery.length)}
              className="absolute left-6 w-10 h-10 flex items-center justify-center border border-[rgba(255,255,255,0.15)] bg-transparent text-white hover:border-[#CFAE60] transition-colors cursor-pointer rounded-none text-xl"
            >←</button>
            <img
              src={PROJECT.gallery[lightbox]}
              alt=""
              className="object-contain"
              style={{ maxWidth: '85vw', maxHeight: '72vh' }}
            />
            {/* Right arrow */}
            <button
              onClick={() => setLightbox((lightbox + 1) % PROJECT.gallery.length)}
              className="absolute right-6 w-10 h-10 flex items-center justify-center border border-[rgba(255,255,255,0.15)] bg-transparent text-white hover:border-[#CFAE60] transition-colors cursor-pointer rounded-none text-xl"
            >→</button>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 py-4" onClick={(e) => e.stopPropagation()}>
            {PROJECT.gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={`w-16 h-12 overflow-hidden cursor-pointer rounded-none p-0 bg-transparent border-2 transition-colors ${i === lightbox ? 'border-[#CFAE60]' : 'border-transparent opacity-50 hover:opacity-100'}`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ═══ UNIT MODAL ═══ */}
      {unitModal !== null && (() => {
        const u = PROJECT.units[unitModal];
        const badge = availBadge(u.avail);
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'rgba(10,14,20,0.82)' }}
            onClick={() => setUnitModal(null)}
          >
            <div
              className="bg-white w-full max-w-[900px] mx-4 grid grid-cols-1 md:grid-cols-2 overflow-hidden relative rounded-none"
              style={{ animation: 'modalIn 0.25s ease forwards' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setUnitModal(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center border border-[rgba(0,0,0,0.12)] bg-white text-[#1C1C1C] hover:border-[#CFAE60] transition-colors cursor-pointer rounded-none"
              >
                <XIcon className="w-4 h-4" />
              </button>

              {/* Left — Floor Plan */}
              <div className="bg-[#F8F6F2] p-6 md:p-8 flex flex-col items-center justify-center min-h-[250px] md:min-h-[400px]">
                <p className="font-body text-[9px] tracking-[3px] uppercase text-[#CFAE60] font-[400] mb-4">Plano de Planta</p>
                <div className="w-full aspect-square bg-[#eee8de] border border-[rgba(207,174,96,0.18)] flex items-center justify-center">
                  <span className="font-body text-[11px] text-[#999]">Plano SVG</span>
                </div>
                <p className="font-body text-[9px] text-[#999] italic mt-3">Plano referencial · Sujeto a cambios</p>
              </div>

              {/* Right — Details */}
              <div className="p-5 md:p-10">
                <h3 className="font-display text-[34px] font-[300] text-[#1C1C1C] mb-1">{u.name}</h3>
                <p className="font-body text-[9px] tracking-[3px] uppercase text-[#CFAE60] font-[400] mb-6">Residencial {PROJECT.name} · {PROJECT.location}</p>

                <div className="grid grid-cols-2 gap-2 mb-5">
                  {[
                    { label: 'Superficie', val: u.m2 },
                    { label: 'Precio Desde', val: u.price },
                    { label: 'Disponibilidad', val: badge.label, color: badge.text },
                    { label: 'Entrega', val: PROJECT.delivery },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#F8F6F2] p-3">
                      <p className="font-body text-[8px] tracking-[2px] uppercase text-[#4B4B4B] font-[400] mb-0.5">{s.label}</p>
                      <span className="font-body text-[13px] font-[300]" style={{ color: (s as any).color || '#1C1C1C' }}>{s.val}</span>
                    </div>
                  ))}
                </div>

                <p className="font-body text-[12px] font-[300] leading-[1.7] text-[#4B4B4B] mb-5">{u.desc}</p>

                <div className="border-t border-[rgba(207,174,96,0.18)] pt-5">
                  <p className={sectionLabel} style={{ color: '#CFAE60', marginBottom: '10px' }}>Agendar una Cita</p>
                  <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-2">
                      <input placeholder="Nombre" value={unitForm.name} onChange={(e) => setUnitForm({ ...unitForm, name: e.target.value })} className={inputClass} />
                      <input type="tel" placeholder="Teléfono" value={unitForm.phone} onChange={(e) => setUnitForm({ ...unitForm, phone: e.target.value })} className={inputClass} />
                    </div>
                    <input type="email" placeholder="Correo electrónico" value={unitForm.email} onChange={(e) => setUnitForm({ ...unitForm, email: e.target.value })} className={inputClass} />
                    <input type="date" value={unitForm.date} onChange={(e) => setUnitForm({ ...unitForm, date: e.target.value })} className={inputClass} />
                    <button type="submit" className={goldBtn}>Confirmar Cita con un Asesor</button>
                  </form>
                  <p className="font-body text-[9px] italic text-[#4B4B4B] text-center mt-3">Un asesor te contactará en menos de 2 horas</p>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ═══ BROCHURE MODAL ═══ */}
      {brochureModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(10,14,20,0.82)' }}
          onClick={() => setBrochureModal(false)}
        >
          <div
            className="bg-white w-full max-w-[480px] mx-4 p-10 relative rounded-none"
            style={{ animation: 'modalIn 0.25s ease forwards' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setBrochureModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-[rgba(0,0,0,0.12)] bg-white text-[#1C1C1C] hover:border-[#CFAE60] transition-colors cursor-pointer rounded-none"
            >
              <XIcon className="w-4 h-4" />
            </button>
            <p className={sectionLabel} style={{ color: '#CFAE60' }}>Material Exclusivo</p>
            <h3 className="font-display text-[28px] font-[300] text-[#1C1C1C] mt-2 mb-2">
              Descarga el <em className="italic text-[#CFAE60]">Brochure</em>
            </h3>
            <p className="font-body text-[12px] font-[300] text-[#4B4B4B] mb-6 leading-[1.7]">
              Accede a precios detallados, planos de planta, acabados y condiciones de preventa.
            </p>
            <div className="space-y-2.5">
              <div>
                <input
                  placeholder="Nombre completo"
                  value={brForm.name}
                  onChange={(e) => { setBrForm({ ...brForm, name: e.target.value }); setBrErrors({ ...brErrors, name: '' }); }}
                  className={inputClass}
                />
                {brErrors.name && <p className="font-body text-[10px] text-[#b03a2e] mt-0.5">{brErrors.name}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={brForm.phone}
                  onChange={(e) => { setBrForm({ ...brForm, phone: e.target.value }); setBrErrors({ ...brErrors, phone: '' }); }}
                  className={inputClass}
                />
                {brErrors.phone && <p className="font-body text-[10px] text-[#b03a2e] mt-0.5">{brErrors.phone}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={brForm.email}
                  onChange={(e) => { setBrForm({ ...brForm, email: e.target.value }); setBrErrors({ ...brErrors, email: '' }); }}
                  className={inputClass}
                />
                {brErrors.email && <p className="font-body text-[10px] text-[#b03a2e] mt-0.5">{brErrors.email}</p>}
              </div>
              <button onClick={handleBrochureSubmit} className={goldBtn}>Descargar Brochure</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal animation keyframes */}
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PreSale;
