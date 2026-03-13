import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Check, MessageCircle, Loader2, FileDown } from "lucide-react";
import { tr } from "@/lib/propertyI18n";
import type { Locale } from "@/types/property";

interface PropertyContactFormProps {
  propertyName: string;
  locale: Locale;
  brochureUrl?: string;
}

const FORM_ID = "xpwdzjyo";

export function PropertyContactForm({ propertyName, locale, brochureUrl }: PropertyContactFormProps) {
  const [state, handleSubmit] = useForm(FORM_ID);
  const [brochureMsg, setBrochureMsg] = useState(false);

  useEffect(() => {
    if (brochureMsg) {
      const timer = setTimeout(() => setBrochureMsg(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [brochureMsg]);

  const handleBrochureClick = () => {
    if (brochureUrl) {
      window.open(brochureUrl, "_blank");
    } else {
      setBrochureMsg(true);
    }
  };

  if (state.succeeded) {
    return (
      <section className="prop-section-contact" style={{ backgroundColor: "#FFFFFF", height: "auto", overflow: "visible" }}>
        <div className="flex flex-col items-center py-10 gap-3">
          <div
            className="w-12 h-12 flex items-center justify-center"
            style={{ backgroundColor: "rgba(207,174,96,0.08)", border: "1px solid rgba(207,174,96,0.22)" }}
          >
            <Check size={20} style={{ color: "hsl(var(--gold))" }} />
          </div>
          <p className="font-body font-light text-center prop-text-sm" style={{ color: "hsl(var(--gold))" }}>
            {tr(locale, 'messageSent')}
          </p>
        </div>
      </section>
    );
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: "hsl(var(--paper))",
    border: "1px solid rgba(0,0,0,0.07)",
    color: "#1C1C1C",
  };

  return (
    <section className="prop-section-contact" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid hsl(var(--border))", height: "auto", overflow: "visible" }}>
      <div className="prop-contact-inner">
        <p className="font-body font-light uppercase prop-label mb-1" style={{ letterSpacing: "4px", color: "hsl(var(--gold))" }}>
          {tr(locale, 'requestInfo')}
        </p>
        <h2 className="font-display prop-title-md mb-1" style={{ color: "#1C1C1C" }}>
          {tr(locale, 'speakWithAdvisor')}{' '}
          <em style={{ color: "hsl(var(--gold))" }}>{tr(locale, 'advisorWord')}</em>
        </h2>
        <p className="font-body font-light prop-text-sm mb-5" style={{ color: "#4B4B4B" }}>
          {tr(locale, 'formDesc')}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="hidden" name="_subject" value={`Nueva solicitud — ${propertyName}`} />
          <input type="hidden" name="origen" value={typeof window !== "undefined" ? window.location.href : ""} />

          <input
            name="nombre"
            placeholder={tr(locale, 'name')}
            required
            className="w-full px-3 py-3 font-body font-light prop-text-sm focus:outline-none"
            style={{ ...inputStyle }}
          />
          <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full px-3 py-3 font-body font-light prop-text-sm focus:outline-none"
            style={{ ...inputStyle }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input
            name="telefono"
            type="tel"
            placeholder={tr(locale, 'phone')}
            className="w-full px-3 py-3 font-body font-light prop-text-sm focus:outline-none"
            style={{ ...inputStyle }}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3.5 font-body font-light uppercase prop-btn flex items-center justify-center gap-2"
            style={{
              letterSpacing: "3px",
              backgroundColor: "hsl(var(--gold))",
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
              tr(locale, 'requestInfo')
            )}
          </button>

          {state.errors && (
            <p className="font-body font-light text-center prop-text-xs" style={{ color: "#b03a2e" }}>
              {tr(locale, 'formError')}
            </p>
          )}
        </form>

        <button
          onClick={() =>
            window.open(
              `https://wa.me/529988457224?text=${encodeURIComponent(`Hola, me interesa ${propertyName}`)}`,
              "_blank"
            )
          }
          className="w-full mt-3 py-3 font-body font-light uppercase prop-btn flex items-center justify-center gap-2"
          style={{
            letterSpacing: "2px",
            border: "1px solid rgba(37,211,102,0.28)",
            color: "#25d366",
            backgroundColor: "transparent",
          }}
        >
          <MessageCircle size={14} />
          {locale === 'es' ? 'Escribir por WhatsApp' : 'Write on WhatsApp'}
        </button>

        {/* Brochure CTA */}
        <button
          onClick={handleBrochureClick}
          className="w-full mt-[2px] py-[14px] font-body font-light uppercase prop-btn flex items-center justify-center gap-2"
          style={{
            letterSpacing: "3px",
            border: "1px solid rgba(0,0,0,0.07)",
            color: "hsl(var(--gold))",
            backgroundColor: "transparent",
          }}
        >
          <FileDown size={14} style={{ color: "hsl(var(--gold))" }} />
          {tr(locale, 'downloadBrochure')}
        </button>
        {brochureMsg && (
          <p className="font-body font-light italic text-center mt-2 prop-text-xs" style={{ color: "#4B4B4B" }}>
            {tr(locale, 'brochureUnavailable')}
          </p>
        )}
      </div>
    </section>
  );
}
