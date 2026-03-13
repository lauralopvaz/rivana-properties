import { useForm, ValidationError } from "@formspree/react";
import { Check, MessageCircle, Loader2 } from "lucide-react";
import { t } from "@/lib/propertyI18n";
import type { Locale } from "@/types/property";

interface PropertyContactFormProps {
  propertyName: string;
  locale: Locale;
}

const FORM_ID = "xpwdzjyo";

export function PropertyContactForm({ propertyName, locale }: PropertyContactFormProps) {
  const i = t(locale);
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <section id="contact-form" className="p-[22px]" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="flex flex-col items-center py-10 gap-3">
          <div
            className="w-12 h-12 flex items-center justify-center"
            style={{ backgroundColor: "rgba(207,174,96,0.09)", border: "1px solid rgba(207,174,96,0.24)" }}
          >
            <Check size={20} style={{ color: "#CFAE60" }} />
          </div>
          <p className="font-display prop-title-sm italic text-center" style={{ color: "#CFAE60" }}>
            {i.formSuccess}
          </p>
          <p className="font-body font-light text-center prop-text-sm" style={{ color: "#4B4B4B" }}>
            {i.formSuccessDesc}
          </p>
        </div>
      </section>
    );
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#F8F6F2",
    border: "1px solid rgba(0,0,0,0.08)",
    color: "#1C1C1C",
  };

  return (
    <section id="contact-form" className="p-[22px]" style={{ backgroundColor: "#FFFFFF" }}>
      <p className="font-body font-light uppercase prop-label mb-1" style={{ letterSpacing: "3px", color: "#CFAE60" }}>
        {i.formLabel}
      </p>
      <h2 className="font-display prop-title-md italic mb-1" style={{ color: "#CFAE60" }}>
        {i.formTitle}
      </h2>
      <p className="font-body font-light prop-text-sm mb-5" style={{ color: "#4B4B4B" }}>
        {i.formDesc}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="hidden" name="_subject" value={`Nueva solicitud — ${propertyName}`} />
        <input type="hidden" name="origen" value={typeof window !== "undefined" ? window.location.href : ""} />

        <input
          name="nombre"
          placeholder={i.formName}
          required
          className="w-full px-3 py-3 font-body font-light prop-text-sm focus:outline-none"
          style={{ ...inputStyle }}
        />
        <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />

        <input
          name="email"
          type="email"
          placeholder={i.formEmail}
          required
          className="w-full px-3 py-3 font-body font-light prop-text-sm focus:outline-none"
          style={{ ...inputStyle }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <input
          name="telefono"
          type="tel"
          placeholder={i.formPhone}
          className="w-full px-3 py-3 font-body font-light prop-text-sm focus:outline-none"
          style={{ ...inputStyle }}
        />

        <select
          name="destino"
          className="w-full px-3 py-3 font-body font-light prop-text-sm focus:outline-none appearance-none"
          style={{ ...inputStyle, color: "#4B4B4B" }}
          defaultValue=""
        >
          <option value="" disabled>{i.formDestination}</option>
          {i.destOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

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
              {i.formSending}
            </>
          ) : (
            i.formSubmit
          )}
        </button>

        {state.errors && (
          <p className="font-body font-light text-center prop-text-xs" style={{ color: "#b03a2e" }}>
            {i.formError}
          </p>
        )}
      </form>

      <button
        onClick={() =>
          window.open(
            `https://wa.me/529981234567?text=${encodeURIComponent(`Hola, me interesa ${propertyName}`)}`,
            "_blank"
          )
        }
        className="w-full mt-3 py-3 font-body font-light uppercase prop-text-xs flex items-center justify-center gap-2"
        style={{
          letterSpacing: "2px",
          border: "1px solid rgba(37,211,102,0.3)",
          color: "#25d366",
          backgroundColor: "transparent",
        }}
      >
        <MessageCircle size={14} />
        {i.formWhatsApp}
      </button>
    </section>
  );
}
