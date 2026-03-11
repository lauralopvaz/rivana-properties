import { useState, useEffect } from 'react';
import { useSchedulingModal, ContactType } from '@/contexts/SchedulingModalContext';
import { VideoIcon, PhoneIcon, HouseIcon, BriefcaseIcon, CheckIcon, XIcon, ChatIcon } from '@/components/icons';

const contactOptions: { key: ContactType; title: string; desc: string; Icon: React.FC<{ className?: string }> }[] = [
  { key: 'videollamada', title: 'Videollamada', desc: 'Conecta cara a cara desde cualquier lugar', Icon: VideoIcon },
  { key: 'llamada', title: 'Llamada Telefónica', desc: 'Hablemos directamente por teléfono', Icon: PhoneIcon },
  { key: 'recorrido', title: 'Recorrido Físico', desc: 'Visita la propiedad en persona', Icon: HouseIcon },
  { key: 'asesoria', title: 'Asesoría Online', desc: 'Consulta personalizada con un experto', Icon: BriefcaseIcon },
];

const destinations = [
  'Zona Hotelera', 'Puerto Cancún', 'Costa Mujeres', 'Mayakoba',
  'Puerto Morelos', 'Tulum', 'Mérida', 'Sin preferencia',
];

const timeSlots: string[] = [];
for (let h = 9; h <= 17; h++) {
  timeSlots.push(`${h}:00`);
  if (h < 18) timeSlots.push(`${h}:30`);
}

const typeLabels: Record<ContactType, string> = {
  videollamada: 'videollamada',
  llamada: 'llamada telefónica',
  recorrido: 'recorrido físico',
  asesoria: 'asesoría online',
};

const inputStyle: React.CSSProperties = {
  background: '#F8F6F2',
  border: '1px solid rgba(0,0,0,0.09)',
  borderRadius: 0,
  padding: '13px 16px',
  fontFamily: "'Jost', sans-serif",
  fontSize: '12px',
  fontWeight: 300,
  color: '#1C1C1C',
  width: '100%',
  outline: 'none',
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: 'none' as const,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234B4B4B' stroke-width='1.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 16px center',
  paddingRight: '40px',
};

export const SchedulingModal = () => {
  const { isOpen, selectedType, closeModal, setSelectedType } = useSchedulingModal();
  const [submitted, setSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setFadeOut(false);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFadeOut(true);
    setTimeout(() => setSubmitted(true), 300);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = '#CFAE60';
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.09)';
  };

  const showDateTime = selectedType !== 'asesoria';

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center px-4"
      style={{ background: 'rgba(8,12,18,0.86)' }}
      onClick={closeModal}
    >
      {/* Modal */}
      <div
        className="relative w-full overflow-y-auto"
        style={{
          maxWidth: '560px',
          maxHeight: '90vh',
          background: 'white',
          borderRadius: 0,
          padding: '44px 48px',
          animation: 'modalIn 0.25s ease forwards',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 flex items-center justify-center transition-colors"
          style={{
            width: '30px',
            height: '30px',
            border: '1px solid rgba(0,0,0,0.10)',
            borderRadius: 0,
            background: 'transparent',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#CFAE60'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.10)'; }}
        >
          <XIcon className="w-3.5 h-3.5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center py-8 animate-fade-in">
            <div
              className="flex items-center justify-center mb-6"
              style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid #CFAE60' }}
            >
              <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="#CFAE60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '26px',
                fontWeight: 300,
                color: '#1C1C1C',
                marginBottom: '12px',
              }}
            >
              ¡Tu solicitud fue recibida!
            </h3>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '12px',
                color: '#4B4B4B',
                fontWeight: 300,
                textAlign: 'center',
              }}
            >
              Nos comunicamos contigo a la brevedad para confirmar tu {typeLabels[selectedType]}.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="transition-opacity duration-300"
            style={{ opacity: fadeOut ? 0 : 1 }}
          >
            {/* STEP 1: Contact type selector */}
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '9px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#CFAE60',
                fontWeight: 400,
                marginBottom: '16px',
              }}
            >
              ¿Cómo prefieres conectar?
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              {contactOptions.map(({ key, title, desc, Icon }) => {
                const isActive = selectedType === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedType(key)}
                    style={{
                      background: isActive ? 'rgba(207,174,96,0.06)' : '#F8F6F2',
                      border: isActive ? '1px solid #CFAE60' : '1px solid rgba(0,0,0,0.09)',
                      borderRadius: 0,
                      padding: '18px 16px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.borderColor = 'rgba(207,174,96,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.borderColor = 'rgba(0,0,0,0.09)';
                    }}
                  >
                    <span style={{ color: isActive ? '#CFAE60' : '#1C1C1C' }}>
                      <Icon className="w-[22px] h-[22px]" />
                    </span>
                    {/* Use inline SVG to ensure color works */}
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: '11px',
                        fontWeight: 400,
                        color: '#1C1C1C',
                      }}
                    >
                      {title}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: '9px',
                        fontWeight: 300,
                        color: '#4B4B4B',
                        textAlign: 'center',
                      }}
                    >
                      {desc}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(0,0,0,0.07)', margin: '20px 0' }} />

            {/* STEP 2: Form fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                <input placeholder="Nombre" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} required />
                <input placeholder="Apellido" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} required />
              </div>
              <input type="email" placeholder="Correo electrónico" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} required />
              <input type="tel" placeholder="Teléfono / WhatsApp" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} required />
              <select style={selectStyle} onFocus={handleFocus as any} onBlur={handleBlur as any} required>
                <option value="">Destino de interés</option>
                {destinations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>

              {showDateTime && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                  <input
                    type="date"
                    placeholder="Fecha preferida"
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <select style={selectStyle} onFocus={handleFocus as any} onBlur={handleBlur as any}>
                    <option value="">Hora preferida</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '2px' }}>
              <button
                type="submit"
                className="w-full uppercase transition-colors duration-300"
                style={{
                  background: '#CFAE60',
                  color: 'white',
                  padding: '15px',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '3px',
                  fontWeight: 400,
                  border: 'none',
                  borderRadius: 0,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#b89a4a'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#CFAE60'; }}
              >
                Confirmar Solicitud
              </button>
              <a
                href="https://wa.me/529988457224?text=Quiero%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 uppercase transition-colors duration-300"
                style={{
                  background: 'rgba(37,211,102,0.10)',
                  border: '1px solid rgba(37,211,102,0.30)',
                  color: '#25d366',
                  padding: '15px',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '3px',
                  fontWeight: 400,
                  borderRadius: 0,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,0.20)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,0.10)'; }}
              >
                <ChatIcon className="w-4 h-4" /> Contactar por WhatsApp
              </a>
            </div>

            {/* Note */}
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '9px',
                color: '#4B4B4B',
                fontWeight: 300,
                fontStyle: 'italic',
                textAlign: 'center',
                marginTop: '12px',
              }}
            >
              Un asesor te contactará para confirmar en menos de 2 horas.
            </p>
          </form>
        )}
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
