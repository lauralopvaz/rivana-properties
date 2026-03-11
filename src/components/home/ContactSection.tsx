import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

const destinationOptions = [
  'Zona Hotelera, Cancún',
  'Puerto Cancún',
  'Costa Mujeres',
  'Mayakoba / Playa del Carmen',
  'Puerto Morelos',
  'Tulum',
  'Mérida',
];

const benefits = [
  'Asesoría Inmobiliaria personalizada',
  'Acceso a proyectos exclusivos en preventa',
  'Acompañamiento legal y financiero',
  'Equipo bilingüe · ES · EN',
];

const inputStyle: React.CSSProperties = {
  background: '#F8F6F2',
  border: '1px solid rgba(0,0,0,0.09)',
  borderRadius: 0,
  padding: '14px 16px',
  fontFamily: "'Jost', sans-serif",
  fontSize: '12px',
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

const PinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFadeOut(true);
    setTimeout(() => setSubmitted(true), 300);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = '#CFAE60';
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.09)';
  };

  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left column */}
        <div className="py-16 lg:py-20 px-6 lg:px-10" style={{ background: '#F8F6F2' }}>
          <div className="max-w-[480px] ml-auto mr-0 lg:mr-16">
            <ScrollReveal>
              {/* Label */}
              <span
                className="uppercase block mb-4"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '9px',
                  letterSpacing: '5px',
                  color: '#CFAE60',
                  fontWeight: 300,
                }}
              >
                Asesoría Personalizada
              </span>

              {/* Title */}
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: 'clamp(36px, 4vw, 56px)',
                  lineHeight: 1.05,
                }}
              >
                <span style={{ color: '#1C1C1C' }}>Agenda una </span>
                <em className="not-italic" style={{ color: '#CFAE60', fontStyle: 'italic' }}>Asesoría</em>
              </h2>

              {/* Description */}
              <p
                className="mb-8"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '13px',
                  color: '#4B4B4B',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  maxWidth: '360px',
                }}
              >
                Reúnete con uno de nuestros asesores para descubrir las propiedades que mejor se alinean con tus objetivos. Te acompañamos en cada paso, desde la primera visita hasta la firma.
              </p>

              {/* Benefits */}
              <ul className="mb-8 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span
                      className="shrink-0"
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#CFAE60',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: '12px',
                        color: '#4B4B4B',
                        fontWeight: 300,
                      }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Location */}
              <div className="flex items-center gap-2">
                <PinIcon className="w-[13px] h-[13px] text-[#1C1C1C]" />
                <span
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '11px',
                    color: '#4B4B4B',
                    fontWeight: 300,
                  }}
                >
                  Cancún, Q.R., México
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right column - Form */}
        <div className="py-16 lg:py-20 px-6 lg:px-10 bg-white">
          <div className="max-w-[480px] mr-auto ml-0 lg:ml-16">
            <ScrollReveal delay={200}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center animate-fade-in">
                  <div
                    className="flex items-center justify-center mb-6"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      border: '1px solid #CFAE60',
                    }}
                  >
                    <CheckIcon className="w-[22px] h-[22px] text-[#CFAE60]" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '28px',
                      fontWeight: 300,
                      color: '#1C1C1C',
                      marginBottom: '12px',
                    }}
                  >
                    ¡Listo, te contactamos pronto!
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: '12px',
                      color: '#4B4B4B',
                      fontWeight: 300,
                    }}
                  >
                    Un asesor de Rivana se comunicará contigo en las próximas 2 horas.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="transition-opacity duration-300"
                  style={{ opacity: fadeOut ? 0 : 1 }}
                >
                  <div className="flex flex-col" style={{ gap: '2px' }}>
                    {/* Row 1: Name */}
                    <div className="grid grid-cols-2" style={{ gap: '2px' }}>
                      <input
                        placeholder="Nombre"
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                      <input
                        placeholder="Apellido"
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>

                    {/* Row 2: Email */}
                    <input
                      type="email"
                      placeholder="Correo electrónico"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />

                    {/* Row 3: Phone */}
                    <input
                      type="tel"
                      placeholder="Teléfono / WhatsApp"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />

                    {/* Row 4: Destination dropdown */}
                    <div className="relative">
                      <select
                        defaultValue=""
                        style={{
                          ...inputStyle,
                          appearance: 'none',
                          paddingRight: '40px',
                          color: undefined,
                        }}
                        className="placeholder-select"
                        onFocus={handleFocus as any}
                        onBlur={handleBlur as any}
                        onChange={(e) => {
                          e.currentTarget.style.color = e.currentTarget.value ? '#1C1C1C' : 'rgba(75,75,75,0.42)';
                        }}
                      >
                        <option value="" disabled style={{ color: 'rgba(75,75,75,0.42)' }}>
                          Seleccionar Destino de Interés
                        </option>
                        {destinationOptions.map((d) => (
                          <option key={d} value={d} style={{ color: '#1C1C1C' }}>
                            {d}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1C1C1C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>

                    {/* Row 5: Message */}
                    <textarea
                      placeholder="Mensaje (opcional)"
                      style={{
                        ...inputStyle,
                        height: '90px',
                        resize: 'none',
                      }}
                      onFocus={handleFocus as any}
                      onBlur={handleBlur as any}
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col" style={{ gap: '2px', marginTop: '2px' }}>
                    <button
                      type="submit"
                      className="w-full uppercase transition-colors duration-300"
                      style={{
                        background: '#CFAE60',
                        color: 'white',
                        padding: '16px',
                        fontFamily: "'Jost', sans-serif",
                        fontSize: '10px',
                        letterSpacing: '3px',
                        fontWeight: 400,
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#b89a4a'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#CFAE60'; }}
                    >
                      Agendar Mi Asesoría
                    </button>

                    <a
                      href="https://wa.me/529988457224?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20asesor%C3%ADa%20con%20un%20asesor%20de%20Rivana%20Properties."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full transition-colors duration-300"
                      style={{
                        gap: '9px',
                        padding: '14px',
                        background: 'rgba(37,211,102,0.07)',
                        border: '1px solid rgba(37,211,102,0.28)',
                        color: '#1a9e52',
                        fontFamily: "'Jost', sans-serif",
                        fontSize: '10px',
                        fontWeight: 300,
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,0.13)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,0.07)'; }}
                    >
                      <WhatsAppIcon className="w-[14px] h-[14px]" />
                      Contactar por WhatsApp
                    </a>
                  </div>

                  {/* Privacy note */}
                  <p
                    className="text-center"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: '9px',
                      color: 'rgba(75,75,75,0.45)',
                      fontWeight: 300,
                      marginTop: '14px',
                    }}
                  >
                    Tu información es confidencial y nunca será compartida con terceros.
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
