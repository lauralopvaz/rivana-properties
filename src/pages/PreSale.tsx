import { useState, useEffect, useCallback, useRef } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { ChatIcon, XIcon } from '@/components/icons';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
const mondrianHero = '/images/mondrian/mondrian-hero.jpg';
const mondrianFrontDesk = '/images/mondrian/mondrian-front-desk.jpg';
const mondrianCoffeeBar = '/images/mondrian/mondrian-coffee-bar.jpg';
const mondrianRestaurant = '/images/mondrian/mondrian-restaurant.jpg';
const mondrianRooftop = '/images/mondrian/mondrian-rooftop.jpg';
const mondrianBeachClub = '/images/mondrian/mondrian-beach-club.jpg';
const mondrianGym = '/images/mondrian/mondrian-gym.jpg';
const mondrianPool = '/images/mondrian/mondrian-pool.jpg';

/* ─── Project Data (would come from CMS) ─── */
const PROJECT = {
  name: 'Mondrian',
  fullName: 'Mondrian Residences at Grand Island Cancún',
  location: 'Zona Hotelera, Cancún, Q.R.',
  totalUnits: 100,
  delivery: 'Q2 2027',
  priceFrom: '$514,000 USD',
  yieldPct: '33%',
  description: {
    es: 'Mondrian Residences at Grand Island es una residencia de marca dentro del desarrollo maestro más exclusivo de la Zona Hotelera de Cancún — diseñada por Filipao Nunes Arquitectos y operada por Accor bajo la marca Mondrian. Cada unidad se entrega llave en mano, totalmente amueblada y equipada, lista para operar desde el primer día.',
    en: 'Mondrian Residences at Grand Island is a branded residence within the most exclusive master development in Cancún\'s Hotel Zone — designed by Filipao Nunes Arquitectos and operated by Accor under the Mondrian brand. Every unit is delivered turnkey, fully furnished and equipped, ready to operate from day one.',
  },
  brochureUrl: '/brochures/mondrian-residences.pdf',
  presaleDeadline: new Date('2026-06-01T23:59:59'),
  priceIncreaseAfter: 33,
  phases: [
    { name: { es: 'Fase 1 — Lanzamiento', en: 'Phase 1 — Launch' }, pct: 60, status: { es: '60% Vendido', en: '60% Sold' } },
    { name: { es: 'Fase 2 — Preventa', en: 'Phase 2 — Pre-Sale' }, pct: 15, status: { es: 'Disponible', en: 'Available' } },
  ],
  units: [
    { name: { es: 'Estudio Curva — 1 Hab', en: 'Studio Curve — 1BR' }, m2: '76.96 m²', price: '$514,000 USD', avail: 10, desc: { es: 'Estudio con curva panorámica, 1 habitación, 1 baño. Entrega llave en mano con gestión Accor.', en: 'Panoramic curve studio, 1 bedroom, 1 bath. Turnkey delivery with Accor management.' } },
    { name: { es: 'Departamento A — 1 Hab', en: 'Unit A — 1BR' }, m2: '81.46 m²', price: '$514,000 USD', avail: 10, desc: { es: 'Una habitación, 2 baños. Diseño de Filipao Nunes con acabados premium y vista al Caribe.', en: '1 bedroom, 2 baths. Filipao Nunes design with premium finishes and Caribbean views.' } },
    { name: { es: "Departamento A' — 1 Hab", en: "Unit A' — 1BR" }, m2: '115.84 m²', price: '$642,000 USD', avail: 10, desc: { es: 'Versión ampliada del Depto A con terraza extendida y vista dual mar-laguna.', en: 'Expanded Unit A with extended terrace and dual sea-lagoon views.' } },
    { name: { es: 'Loft A — 1 Hab (dúplex)', en: 'Loft A — 1BR (duplex)' }, m2: '91.20 m²', price: '$758,000 USD', avail: 10, desc: { es: 'Dúplex con doble altura, 1 habitación, 2 baños. Diseño escultórico único en el edificio.', en: 'Double-height duplex, 1 bedroom, 2 baths. Sculptural design unique to the building.' } },
    { name: { es: 'Departamento B — 2 Hab', en: 'Unit B — 2BR' }, m2: '135.44 m²', price: '$684,000 USD', avail: 5, desc: { es: 'Dos habitaciones, 2.5 baños. Espacios amplios con vista frontal al Mar Caribe.', en: '2 bedrooms, 2.5 baths. Spacious with frontal Caribbean Sea views.' } },
    { name: { es: 'Depto B Esquina — 2 Hab', en: 'Corner Unit B — 2BR' }, m2: '164.75 m²', price: '$1,163,000 USD', avail: 5, desc: { es: 'Esquina con vista panorámica 180°. Dos habitaciones, 2.5 baños. La unidad más exclusiva de 2 recámaras.', en: '180° panoramic corner view. 2 bedrooms, 2.5 baths. The most exclusive 2-bedroom unit.' } },
    { name: { es: 'Depto C Esquina — 3 Hab', en: 'Corner Unit C — 3BR' }, m2: '158.93 m²', price: '$1,247,000 USD', avail: 5, desc: { es: 'Tres habitaciones, 3.5 baños. Esquina con vista triple: mar, laguna y campo de golf.', en: '3 bedrooms, 3.5 baths. Corner with triple view: sea, lagoon, and golf course.' } },
  ],
  amenities: {
    es: ['Infinity Pool', 'Beach Club', 'Concierge 24/7', 'Spa & Wellness', 'Gimnasio', 'Campo de Golf', 'Marina Privada', 'Vista al Mar', 'Club Privado', 'Restaurante Rooftop', 'Coffee Shop', 'Bar', 'Sauna', 'Tinas de Hidromasaje', 'Gradas Lounge Exterior', 'Entrega Llave en Mano'],
    en: ['Infinity Pool', 'Beach Club', 'Concierge 24/7', 'Spa & Wellness', 'Gym', 'Golf Course', 'Private Marina', 'Ocean View', 'Private Club', 'Rooftop Restaurant', 'Coffee Shop', 'Bar', 'Sauna', 'Hot Tubs', 'Outdoor Lounge Terrace', 'Turnkey Delivery'],
  },
  availability: {
    es: [{ type: 'Estudios / 1 Hab', qty: 60 }, { type: '2 Recámaras', qty: 20 }, { type: '3 Recámaras', qty: 5 }, { type: 'Lofts (dúplex)', qty: 10 }],
    en: [{ type: 'Studios / 1BR', qty: 60 }, { type: '2 Bedrooms', qty: 20 }, { type: '3 Bedrooms', qty: 5 }, { type: 'Lofts (duplex)', qty: 10 }],
  },
  gallery: [mondrianHero, mondrianFrontDesk, mondrianCoffeeBar, mondrianRestaurant, mondrianRooftop, mondrianBeachClub, mondrianGym, mondrianPool],
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
function availBadge(n: number, lang: 'es' | 'en' = 'es') {
  const avail = lang === 'es' ? 'disponibles' : 'available';
  const availS = lang === 'es' ? `disponible${n > 1 ? 's' : ''}` : 'available';
  if (n > 20) return { bg: 'rgba(207,174,96,0.12)', text: '#CFAE60', label: `${n} ${avail}` };
  if (n >= 5) return { bg: 'rgba(207,174,96,0.22)', text: '#b8952e', label: `${n} ${avail}` };
  return { bg: 'rgba(176,58,46,0.12)', text: '#b03a2e', label: `⚠ ${n} ${availS}` };
}

/* ─── Sidebar availability color ─── */
function sideAvailColor(qty: number) {
  if (qty > 20) return '#4B4B4B';
  if (qty >= 5) return '#CFAE60';
  return '#b03a2e';
}

/* ═══════════════════════════════════════════ */

const PreSale = () => {
  const { language: L } = useLanguage();
  const countdown = useCountdown(PROJECT.presaleDeadline);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [presaleFormLoading, setPresaleFormLoading] = useState(false);
  const [presaleFormSuccess, setPresaleFormSuccess] = useState(false);

  const handlePresaleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setPresaleFormLoading(true);
    const { error } = await supabase.from('leads').insert({
      first_name: fd.get('name') as string,
      email: fd.get('email') as string,
      phone: (fd.get('phone') as string) || null,
      property_name: 'Mondrian Residences',
      interest: 'presale',
      source_page: window.location.pathname,
    });
    setPresaleFormLoading(false);
    if (error) {
      console.error('PreSale form error:', error);
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setPresaleFormSuccess(true);
    }
  };
  
  const [brochureModal, setBrochureModal] = useState(false);

  /* Brochure form */
  const [brForm, setBrForm] = useState({ name: '', phone: '', email: '' });
  const [brErrors, setBrErrors] = useState<Record<string, string>>({});


  const handleBrochureSubmit = () => {
    const errs: Record<string, string> = {};
    if (!brForm.name.trim()) errs.name = L === 'es' ? 'Campo requerido' : 'Required';
    if (!brForm.phone.trim()) errs.phone = L === 'es' ? 'Campo requerido' : 'Required';
    if (!brForm.email.trim()) errs.email = L === 'es' ? 'Campo requerido' : 'Required';
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
      <SEOHead
        title={L === 'es' ? 'Preventas Exclusivas Cancún & Riviera Maya | Rivana' : 'Exclusive Pre-Sales Cancún Riviera Maya | Rivana'}
        description={L === 'es' ? 'Preventas exclusivas en Cancún y Riviera Maya. Mondrian, SLS, The Reserve, Dhamar y más. Plusvalía 15–33%, gestión incluida.' : 'Exclusive pre-sales in Cancún and Riviera Maya. Mondrian, SLS, The Reserve, Dhamar and more. 15–33% appreciation, managed returns.'}
        ogImage="/images/mondrian/mondrian-hero.jpg"
        path={L === 'en' ? '/en/presale' : '/presale'}
        schema={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Mondrian Residences at Grand Island Cancún",
          description: "Preventa exclusiva de Mondrian Residences at Grand Island Cancún. Condos de lujo desde $514K USD en la Zona Hotelera.",
          offers: {
            "@type": "Offer",
            price: 514000,
            priceCurrency: "USD",
            availability: "https://schema.org/PreOrder",
          },
        }}
      />

      {/* ═══ HERO ═══ */}
      <section className="relative h-[60vh] md:h-[88vh]">
        <img src={mondrianHero} alt="Mondrian Residences at Grand Island Cancún" className="absolute inset-0 w-full h-full object-cover" />
        {/* Horizontal overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,20,30,0.72) 0%, rgba(10,20,30,0.30) 55%, rgba(10,20,30,0.05) 100%)' }} />
        {/* Vertical overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,20,30,0.60) 0%, transparent 48%)' }} />
        {/* Content bottom-left */}
        <div className="absolute bottom-0 left-0 p-6 md:p-14 z-10">
          <div className="flex items-center gap-2 mb-3 md:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#CFAE60] blink-dot" />
            <span className="font-body text-[8px] md:text-[9px] tracking-[3px] md:tracking-[5px] uppercase font-[400] text-[#CFAE60]" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>{L === 'es' ? 'Preventa Exclusiva · Precios hasta el 25 de abril' : 'Exclusive Pre-Sale · Pricing until April 25'}</span>
          </div>
          <h1 className="text-white font-display font-[300] leading-[1.05] mb-3 text-[clamp(36px,8vw,76px)]" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            {L === 'es' ? 'Residencial' : 'Residences'} <em className="text-[#CFAE60] italic">{PROJECT.name}</em>
          </h1>
          <p className="font-body text-[11px] md:text-[12px] text-white/[0.52] tracking-[1px] uppercase" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>{PROJECT.location}</p>
        </div>
      </section>

      {/* ═══ GALLERY STRIP ═══ */}
      <section className="bg-white">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-[3px] h-[70px] md:h-[108px]">
          {PROJECT.gallery.slice(0, 4).map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`relative overflow-hidden group cursor-pointer border-none bg-transparent p-0 ${i >= 2 ? 'hidden md:block' : ''}`}
            >
              <img src={src} alt={`Mondrian Residences — ${['Front Desk', 'Coffee Bar', 'Restaurant', 'Rooftop'][i] || `Vista ${i + 1}`}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#CFAE60]/0 group-hover:bg-[#CFAE60]/20 transition-colors duration-300" />
            </button>
          ))}
          <button
            onClick={() => setLightbox(0)}
            className="bg-[#1C1C1C] flex flex-col items-center justify-center gap-1 cursor-pointer border-none"
          >
            <svg className="w-4 h-4 text-[#CFAE60]" viewBox="0 0 16 16" fill="currentColor"><rect x="0" y="0" width="4" height="4" /><rect x="6" y="0" width="4" height="4" /><rect x="12" y="0" width="4" height="4" /><rect x="0" y="6" width="4" height="4" /><rect x="6" y="6" width="4" height="4" /><rect x="12" y="6" width="4" height="4" /><rect x="0" y="12" width="4" height="4" /><rect x="6" y="12" width="4" height="4" /><rect x="12" y="12" width="4" height="4" /></svg>
            <span className="font-body text-[9px] tracking-[2px] uppercase text-[#CFAE60]">{L === 'es' ? 'Ver todas' : 'View all'}</span>
          </button>
        </div>
      </section>

      {/* ═══ MAIN 2-COL LAYOUT ═══ */}
      <section className="grid items-start grid-cols-1 lg:grid-cols-[62%_38%]">

        {/* ── LEFT COLUMN ── */}
        <div className="px-5 py-10 md:px-10 md:py-14 lg:pl-[60px] lg:pr-[44px] lg:pt-[56px] lg:pb-[80px]">

          {/* MODULE A — Project Description */}
          <div className="mb-10">
            <p className={sectionLabel} style={{ color: '#CFAE60' }}>{L === 'es' ? 'El Proyecto' : 'The Project'}</p>
            <h2 className="font-display font-[300] mt-3 mb-5 text-[#1C1C1C]">
              {L === 'es' ? 'Diseñado para' : 'Designed to'} <em className="italic text-[#CFAE60]">{L === 'es' ? 'trascender' : 'transcend'}</em>
            </h2>
            <p className="font-body text-[13px] font-[300] leading-[1.82] text-[#4B4B4B] mb-8">{PROJECT.description[L]}</p>

            {/* 3 stat boxes */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
              {[
                { val: L === 'es' ? '1–3 Rec & PH' : '1–3 BR & PH', label: L === 'es' ? 'Recámaras' : 'Bedrooms' },
                { val: PROJECT.delivery, label: L === 'es' ? 'Entrega' : 'Delivery' },
                { val: '$514K USD', label: L === 'es' ? 'Precio Desde' : 'Price From' },
              ].map((s) => (
                <div key={s.label} className="bg-[#F8F6F2] border border-[rgba(207,174,96,0.22)] p-4 text-center">
                  <span className="font-display text-[24px] md:text-[28px] font-[300] text-[#CFAE60] block">{s.val}</span>
                  <span className="font-body text-[8px] tracking-[3px] uppercase text-[#4B4B4B] font-[400]">{s.label}</span>
                </div>
              ))}
            </div>

            <button onClick={() => setBrochureModal(true)} className={goldBtn}>{L === 'es' ? 'Solicitar Brochure' : 'Request Brochure'}</button>

            {/* Divider */}
            <div className="mt-10 border-t border-[rgba(207,174,96,0.18)]" />
          </div>



          {/* MODULE D — Amenities */}
          <div>
            <p className={sectionLabel} style={{ color: '#CFAE60' }}>{L === 'es' ? 'Amenidades' : 'Amenities'}</p>
            <h2 className="sr-only">{L === 'es' ? 'Amenidades del proyecto' : 'Project Amenities'}</h2>
            <div className="mt-4 flex flex-wrap gap-[6px]">
              {PROJECT.amenities[L].map((a) => (
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
            <p className="font-body text-[8px] tracking-[3px] uppercase text-[#4B4B4B] font-[400] mb-1">{L === 'es' ? 'Desde' : 'From'}</p>
            <span className="font-display text-[36px] font-[300] text-[#CFAE60] block">{PROJECT.priceFrom}</span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-[#2d7a4a] text-[12px]">↗</span>
              <span className="font-body text-[12px] font-[300] text-[#2d7a4a]">{PROJECT.yieldPct} {L === 'es' ? 'rendimiento estimado' : 'estimated return'}</span>
            </div>

            <div className="my-5 border-t border-[rgba(207,174,96,0.18)]" />


            {/* Countdown */}
            <p className="font-body text-[8px] tracking-[3px] uppercase text-[#4B4B4B] font-[400] mb-3">{L === 'es' ? 'Precio de Preventa Hasta' : 'Pre-Sale Price Until'}</p>
            <div className="grid grid-cols-4 gap-2 mb-2">
              {[
                { val: countdown.days, label: L === 'es' ? 'Días' : 'Days' },
                { val: countdown.hours, label: 'Hrs' },
                { val: countdown.minutes, label: 'Min' },
                { val: countdown.seconds, label: L === 'es' ? 'Seg' : 'Sec' },
              ].map((t) => (
                <div key={t.label} className="bg-[#1C1C1C] py-2.5 flex flex-col items-center">
                  <span className="font-display text-[24px] font-[300] text-[#CFAE60]">{String(t.val).padStart(2, '0')}</span>
                  <span className="font-body text-[7px] uppercase tracking-[1px] text-white/[0.38]">{t.label}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-[9px] italic text-[#4B4B4B] text-center mb-0">{L === 'es' ? `Después de esta fecha el precio aumenta ${PROJECT.priceIncreaseAfter}%` : `After this date, prices increase by ${PROJECT.priceIncreaseAfter}%`}</p>

            <div className="my-5 border-t border-[rgba(207,174,96,0.18)]" />

            {/* Contact Form */}
            {presaleFormSuccess ? (
              <div className="text-center py-4">
                <p className="font-display text-[18px] text-[#CFAE60]">✓ {L === 'es' ? '¡Solicitud enviada!' : 'Request sent!'}</p>
                <p className="font-body text-[10px] text-[#4B4B4B] mt-1">{L === 'es' ? 'Te contactaremos pronto.' : 'We\'ll contact you soon.'}</p>
              </div>
            ) : (
              <form className="space-y-2.5" onSubmit={handlePresaleFormSubmit}>
                <input name="name" placeholder={L === 'es' ? 'Nombre' : 'Name'} required className={inputClass} />
                <input name="email" type="email" placeholder={L === 'es' ? 'Correo electrónico' : 'Email'} required className={inputClass} />
                <input name="phone" type="tel" placeholder={L === 'es' ? 'Teléfono' : 'Phone'} className={inputClass} />
                <button type="submit" disabled={presaleFormLoading} className={goldBtn}>{presaleFormLoading ? '...' : (L === 'es' ? 'Solicitar Precios y Planos' : 'Request Pricing & Plans')}</button>
                <a
                  href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#e8f5e9] border border-[#66bb6a] py-2.5 font-body text-[10px] tracking-[2px] uppercase text-[#2e7d32] font-[400] hover:bg-[#c8e6c9] transition-colors cursor-pointer rounded-none no-underline"
                >
                  <ChatIcon className="w-3.5 h-3.5" /> {L === 'es' ? 'Escribir por WhatsApp' : 'Message on WhatsApp'}
                </a>
              </form>
            )}
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
              alt={`Mondrian Residences, Zona Hotelera Cancún — ${L === 'es' ? 'imagen' : 'image'} ${lightbox + 1}`}
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
                <img src={src} alt={`Mondrian Residences — ${L === 'es' ? 'miniatura' : 'thumbnail'} ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}


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
            <p className={sectionLabel} style={{ color: '#CFAE60' }}>{L === 'es' ? 'Material Exclusivo' : 'Exclusive Material'}</p>
            <h2 className="font-display text-[28px] font-[300] text-[#1C1C1C] mt-2 mb-2">
              {L === 'es' ? 'Descarga el' : 'Download the'} <em className="italic text-[#CFAE60]">Brochure</em>
            </h2>
            <p className="font-body text-[12px] font-[300] text-[#4B4B4B] mb-6 leading-[1.7]">
              {L === 'es' ? 'Accede a precios detallados, planos de planta, acabados y condiciones de preventa.' : 'Access detailed pricing, floor plans, finishes, and pre-sale conditions.'}
            </p>
            <div className="space-y-2.5">
              <div>
                <input
                  placeholder={L === 'es' ? 'Nombre completo' : 'Full name'}
                  value={brForm.name}
                  onChange={(e) => { setBrForm({ ...brForm, name: e.target.value }); setBrErrors({ ...brErrors, name: '' }); }}
                  className={inputClass}
                />
                {brErrors.name && <p className="font-body text-[10px] text-[#b03a2e] mt-0.5">{brErrors.name}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder={L === 'es' ? 'Teléfono' : 'Phone'}
                  value={brForm.phone}
                  onChange={(e) => { setBrForm({ ...brForm, phone: e.target.value }); setBrErrors({ ...brErrors, phone: '' }); }}
                  className={inputClass}
                />
                {brErrors.phone && <p className="font-body text-[10px] text-[#b03a2e] mt-0.5">{brErrors.phone}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder={L === 'es' ? 'Correo electrónico' : 'Email'}
                  value={brForm.email}
                  onChange={(e) => { setBrForm({ ...brForm, email: e.target.value }); setBrErrors({ ...brErrors, email: '' }); }}
                  className={inputClass}
                />
                {brErrors.email && <p className="font-body text-[10px] text-[#b03a2e] mt-0.5">{brErrors.email}</p>}
              </div>
              <button onClick={handleBrochureSubmit} className={goldBtn}>{L === 'es' ? 'Descargar Brochure' : 'Download Brochure'}</button>
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
