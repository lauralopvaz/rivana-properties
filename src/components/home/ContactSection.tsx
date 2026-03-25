import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const destinationOptions = [
  'Zona Hotelera, Cancún',
  'Puerto Cancún',
  'Costa Mujeres',
  'Mayakoba / Playa del Carmen',
  'Puerto Morelos',
  'Tulum',
  'Mérida',
];

const budgetOptions = [
  { value: '200-500', label: '$200K — $500K USD' },
  { value: '500-1000', label: '$500K — $1M USD' },
  { value: '1000-2000', label: '$1M — $2M USD' },
  { value: '2000+', label: '$2M+ USD' },
];

const inputStyle: React.CSSProperties = {
  background: '#F8F6F2',
  border: '1px solid rgba(0,0,0,0.09)',
  borderRadius: 0,
  padding: '14px 16px',
  fontFamily: "'Jost', sans-serif",
  fontSize: '14px',
  fontWeight: 300,
  color: '#1C1C1C',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const ContactSection = () => {
  const { language } = useLanguage();
  const L = language;
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('leads').insert({
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      destination,
      budget,
      message,
      source_page: window.location.pathname,
    });
    setLoading(false);
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
      return;
    }
    setFadeOut(true);
    setTimeout(() => setSubmitted(true), 300);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = '#CFAE60';
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.09)';
  };

  const stats = [
    { val: '6', label: L === 'es' ? 'Proyectos activos en preventa' : 'Active pre-sale projects' },
    { val: '8–12%', label: L === 'es' ? 'Rendimiento anual estimado' : 'Estimated annual yield' },
    { val: '15–33%', label: L === 'es' ? 'Plusvalía al entrega' : 'Capital gains at delivery' },
  ];

  const benefits = L === 'es'
    ? ['Asesoría inmobiliaria personalizada', 'Acceso a proyectos exclusivos en preventa', 'Acompañamiento legal y financiero', 'Equipo bilingüe · ES · EN']
    : ['Personalized real estate advisory', 'Access to exclusive pre-sale projects', 'Legal and financial guidance', 'Bilingual team · ES · EN'];

  return (
    <section id="contact-form" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left column — Copy */}
        <div className="py-16 lg:py-20 px-6 lg:px-10 bg-[hsl(var(--paper))]">
          <div className="max-w-[480px] ml-auto mr-0 lg:mr-16">
            <ScrollReveal>
              <p className="eyebrow mb-4">
                {L === 'es' ? 'Asesoría Personalizada' : 'Personal Advisory'}
              </p>
              <h2 className="mb-6 text-secondary">
                {L === 'es' ? 'Agenda una ' : 'Schedule an '}
                <em className="not-italic text-primary italic">
                  {L === 'es' ? 'Asesoría' : 'Advisory'}
                </em>
              </h2>
              <p className="font-body text-base text-muted-foreground leading-[1.85] mb-8 max-w-[400px]">
                {L === 'es'
                  ? 'El Caribe Mexicano es uno de los mercados inmobiliarios con mayor plusvalía en Latinoamérica. Cuéntanos sobre tu próxima inversión y diseñaremos una estrategia a tu medida.'
                  : 'The Mexican Caribbean is one of the real estate markets with the highest capital gains in Latin America. Tell us about your next investment and we\'ll design a tailored strategy.'}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {stats.map((s) => (
                  <div key={s.val} className="text-center lg:text-left">
                    <span className="font-display text-2xl lg:text-3xl text-primary">{s.val}</span>
                    <p className="font-body text-xs text-muted-foreground mt-1 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>

              <ul className="mb-8 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="shrink-0 w-[6px] h-[6px] bg-primary" />
                    <span className="font-body text-sm text-muted-foreground font-light">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2">
                <span className="w-[6px] h-[6px] bg-primary" />
                <span className="font-body text-xs text-muted-foreground tracking-wide">
                  {L === 'es' ? 'Respuesta garantizada en menos de 2 horas' : 'Guaranteed response in under 2 hours'}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right column — Form */}
        <div className="py-16 lg:py-20 px-6 lg:px-10 bg-card">
          <div className="max-w-[480px] mr-auto ml-0 lg:ml-16">
            <ScrollReveal delay={200}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center animate-fade-in">
                  <div className="flex items-center justify-center mb-6" style={{ width: '60px', height: '60px', border: '1px solid hsl(var(--primary))' }}>
                    <CheckIcon className="w-[22px] h-[22px] text-primary" />
                  </div>
                  <h3 className="font-display text-[28px] font-light text-secondary mb-3">
                    {L === 'es' ? '¡Listo, te contactamos pronto!' : 'Done, we\'ll contact you soon!'}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {L === 'es' ? 'Un asesor de Rivana se comunicará contigo en las próximas 2 horas.' : 'A Rivana advisor will reach out to you within the next 2 hours.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="transition-opacity duration-300" style={{ opacity: fadeOut ? 0 : 1 }}>
                  <h3 className="font-display text-2xl text-secondary font-light mb-6">
                    {L === 'es' ? 'Hablemos de tu próxima inversión' : 'Let\'s talk about your next investment'}
                  </h3>
                  <div className="flex flex-col" style={{ gap: '2px' }}>
                    <div className="grid grid-cols-2" style={{ gap: '2px' }}>
                      <input placeholder={L === 'es' ? 'Nombre' : 'First Name'} value={firstName} onChange={e => setFirstName(e.target.value)} style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                      <input placeholder={L === 'es' ? 'Apellido' : 'Last Name'} value={lastName} onChange={e => setLastName(e.target.value)} style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                    </div>
                    <input type="email" placeholder={L === 'es' ? 'Correo electrónico' : 'Email'} value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                    <input type="tel" placeholder={L === 'es' ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp'} value={phone} onChange={e => setPhone(e.target.value)} style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                    {/* Destination dropdown */}
                    <div className="relative">
                      <select
                        aria-label={L === 'es' ? 'Destino de interés' : 'Destination of interest'}
                        value={destination}
                        onChange={(e) => { setDestination(e.target.value); e.currentTarget.style.color = e.currentTarget.value ? '#1C1C1C' : 'rgba(75,75,75,0.42)'; }}
                        style={{ ...inputStyle, appearance: 'none', paddingRight: '40px', color: destination ? '#1C1C1C' : 'rgba(75,75,75,0.42)' }}
                        onFocus={handleFocus as any}
                        onBlur={handleBlur as any}
                      >
                        <option value="" disabled style={{ color: 'rgba(75,75,75,0.42)' }}>
                          {L === 'es' ? 'Destino de interés' : 'Destination of interest'}
                        </option>
                        {destinationOptions.map((d) => (
                          <option key={d} value={d} style={{ color: '#1C1C1C' }}>{d}</option>
                        ))}
                      </select>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    {/* Budget dropdown */}
                    <div className="relative">
                      <select
                        aria-label={L === 'es' ? 'Presupuesto estimado' : 'Estimated budget'}
                        value={budget}
                        onChange={(e) => { setBudget(e.target.value); e.currentTarget.style.color = e.currentTarget.value ? '#1C1C1C' : 'rgba(75,75,75,0.42)'; }}
                        style={{ ...inputStyle, appearance: 'none', paddingRight: '40px', color: budget ? '#1C1C1C' : 'rgba(75,75,75,0.42)' }}
                        onFocus={handleFocus as any}
                        onBlur={handleBlur as any}
                      >
                        <option value="" disabled style={{ color: 'rgba(75,75,75,0.42)' }}>
                          {L === 'es' ? 'Presupuesto estimado' : 'Estimated budget'}
                        </option>
                        {budgetOptions.map((o) => (
                          <option key={o.value} value={o.value} style={{ color: '#1C1C1C' }}>{o.label}</option>
                        ))}
                      </select>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    <textarea
                      placeholder={L === 'es' ? 'Mensaje (opcional)' : 'Message (optional)'}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      style={{ ...inputStyle, height: '80px', resize: 'none' }}
                      onFocus={handleFocus as any}
                      onBlur={handleBlur as any}
                    />
                  </div>
                  <div className="flex flex-col" style={{ gap: '2px', marginTop: '2px' }}>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full uppercase transition-colors duration-300"
                      style={{ background: 'hsl(var(--primary))', color: 'white', padding: '16px', fontFamily: "'Jost', sans-serif", fontSize: '13px', letterSpacing: '3px', fontWeight: 400, border: 'none', cursor: 'pointer', opacity: loading ? 0.6 : 1 }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#b89a4a'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'hsl(var(--primary))'; }}
                    >
                      {loading ? (L === 'es' ? 'Enviando...' : 'Sending...') : (L === 'es' ? 'Agendar Mi Asesoría' : 'Schedule My Advisory')}
                    </button>
                    <a
                      href="https://wa.me/529988457224?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20asesor%C3%ADa%20con%20un%20asesor%20de%20Rivana%20Properties."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full transition-colors duration-300"
                      style={{ gap: '9px', padding: '14px', background: 'rgba(37,211,102,0.07)', border: '1px solid rgba(37,211,102,0.28)', color: '#1a9e52', fontFamily: "'Jost', sans-serif", fontSize: '13px', fontWeight: 300 }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,0.13)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,0.07)'; }}
                    >
                      <WhatsAppIcon className="w-[14px] h-[14px]" />
                      {L === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
                    </a>
                  </div>
                  <p className="text-center font-body text-xs text-muted-foreground/45 mt-4 leading-[1.7]">
                    {L === 'es' ? 'Tu información es confidencial y nunca será compartida con terceros.' : 'Your information is confidential and will never be shared with third parties.'}
                  </p>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
