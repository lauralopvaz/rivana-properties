import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { X, Check, MessageCircle, Loader2 } from "lucide-react";
import { formatNumber } from "@/lib/formatPrice";
import { tr } from "@/lib/propertyI18n";
import type { PresalePrice, Locale } from "@/types/property";

interface ReservePriceModalProps {
  isOpen: boolean;
  onClose: () => void;
  presalePrice: PresalePrice;
  propertyName: string;
  locale: Locale;
}

const FORM_ID = "xpwdzjyo";

export function ReservePriceModal({ isOpen, onClose, presalePrice, propertyName, locale }: ReservePriceModalProps) {
  const [state, handleSubmit] = useForm(FORM_ID);
  const [modalState, setModalState] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (state.succeeded && modalState === 'form') {
      setModalState('success');
    }
  }, [state.succeeded, modalState]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setModalState('form');
        setName('');
        setEmail('');
        setPhone('');
        setErrors({});
      }, 300);
    }
  }, [isOpen]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!name.trim()) newErrors.name = true;
    if (!email.trim()) newErrors.email = true;
    if (!phone.trim()) newErrors.phone = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTimeout(() => setErrors({}), 1200);
      return;
    }

    handleSubmit(e);
  };

  if (!isOpen) return null;

  const inputStyle = (field: string): React.CSSProperties => ({
    backgroundColor: "#F8F6F2",
    border: errors[field] ? "1px solid #b03a2e" : "1px solid rgba(0,0,0,0.07)",
    color: "#1C1C1C",
    transition: "border-color 0.3s",
  });

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center"
      style={{ backgroundColor: "rgba(28,28,28,0.55)", backdropFilter: "blur(3px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-[390px]"
        style={{
          backgroundColor: "#FFFFFF",
          animation: "slideUp 0.3s cubic-bezier(0.22,1,0.36,1) forwards",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes slideUp {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>

        {/* Handle */}
        <div className="flex justify-center pt-3">
          <div className="w-9 h-[3px]" style={{ backgroundColor: "rgba(0,0,0,0.12)" }} />
        </div>

        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 p-2">
          <X size={18} style={{ color: "#4B4B4B" }} />
        </button>

        <div className="p-5">
          {modalState === 'form' && (
            <>
              {/* Badge */}
              <span className="font-body font-light uppercase prop-label block mb-1" style={{ letterSpacing: "3px", color: "#CFAE60" }}>
                {tr(locale, 'presaleSpecialPrice')}
              </span>

              {/* Title */}
              <h3 className="font-display prop-title-md mb-3" style={{ color: "#1C1C1C" }}>
                {tr(locale, 'reserveYourPrice')}{' '}
                <em style={{ color: "#CFAE60" }}>{tr(locale, 'priceWord')}</em>
              </h3>

              {/* Price bar */}
              <div
                className="flex items-center justify-between p-3 mb-4"
                style={{ backgroundColor: "#F8F6F2", border: "1px solid rgba(207,174,96,0.22)" }}
              >
                <div>
                  <span className="font-body font-light prop-text-xs block" style={{ color: "#4B4B4B" }}>
                    {tr(locale, 'listPrice')}
                  </span>
                  <span className="font-display prop-text-sm line-through" style={{ color: "rgba(75,75,75,0.5)" }}>
                    ${formatNumber(presalePrice.originalMXN)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-body font-light prop-text-xs block" style={{ color: "#4B4B4B" }}>
                    {tr(locale, 'presalePriceLabel')}
                  </span>
                  <span className="font-display prop-unit-price" style={{ color: "#CFAE60" }}>
                    ${formatNumber(presalePrice.discountMXN)}
                  </span>
                  <span className="font-body font-light prop-text-xs ml-1" style={{ color: "#4B4B4B" }}>MXN</span>
                </div>
              </div>

              {/* Description */}
              <p className="font-body font-light prop-text-sm mb-4" style={{ color: "#4B4B4B" }}>
                {tr(locale, 'modalDesc')}
              </p>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
                <input type="hidden" name="_subject" value={`Reserva de precio — ${propertyName}`} />
                <input type="hidden" name="origen" value={typeof window !== "undefined" ? window.location.href : ""} />
                <input type="hidden" name="tipo" value="reserva-precio" />

                <input
                  name="nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={tr(locale, 'fullName')}
                  className="w-full px-3 py-3 font-body font-light prop-text-sm focus:outline-none"
                  style={inputStyle('name')}
                />

                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-3 py-3 font-body font-light prop-text-sm focus:outline-none"
                  style={inputStyle('email')}
                />

                <input
                  name="telefono"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={tr(locale, 'phone')}
                  className="w-full px-3 py-3 font-body font-light prop-text-sm focus:outline-none"
                  style={inputStyle('phone')}
                />

                <p className="font-body font-light italic prop-text-xs" style={{ color: "#4B4B4B" }}>
                  {tr(locale, 'confidentialNote')}
                </p>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3.5 font-body font-light uppercase prop-text-xs flex items-center justify-center gap-2"
                  style={{
                    letterSpacing: "3px",
                    backgroundColor: "#CFAE60",
                    color: "#FFFFFF",
                    opacity: state.submitting ? 0.7 : 1,
                  }}
                >
                  {state.submitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      {tr(locale, 'sendingLabel')}
                    </>
                  ) : (
                    tr(locale, 'confirmReservation')
                  )}
                </button>

                <ValidationError errors={state.errors} />
              </form>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/529981234567?text=${encodeURIComponent(`Reserva de precio — ${propertyName}`)}`,
                    "_blank"
                  )
                }
                className="w-full mt-2 py-3 font-body font-light uppercase prop-text-xs flex items-center justify-center gap-2"
                style={{
                  letterSpacing: "2px",
                  border: "1px solid rgba(37,211,102,0.28)",
                  color: "#25d366",
                  backgroundColor: "transparent",
                }}
              >
                <MessageCircle size={14} />
                {tr(locale, 'reserveViaWhatsApp')}
              </button>
            </>
          )}

          {modalState === 'success' && (
            <div className="flex flex-col items-center py-8 gap-3">
              <div
                className="w-12 h-12 flex items-center justify-center"
                style={{ backgroundColor: "rgba(207,174,96,0.08)", border: "1px solid rgba(207,174,96,0.22)" }}
              >
                <Check size={20} style={{ color: "#CFAE60" }} />
              </div>
              <h3 className="font-display prop-title-md text-center" style={{ color: "#1C1C1C" }}>
                {tr(locale, 'reservationReceived')}{' '}
                <em style={{ color: "#CFAE60" }}>{tr(locale, 'receivedWord')}</em>
              </h3>
              <p className="font-body font-light text-center prop-text-sm" style={{ color: "#4B4B4B" }}>
                {tr(locale, 'reservationSuccessDesc')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
