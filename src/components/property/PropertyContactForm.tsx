import { useForm, ValidationError } from "@formspree/react";
import { Check, MessageCircle, Loader2 } from "lucide-react";

interface PropertyContactFormProps {
  propertyName: string;
  onSubmit?: (data: Record<string, string>) => void;
}

const FORM_ID = "xpwdzjyo"; // Replace with actual Formspree ID

export function PropertyContactForm({ propertyName }: PropertyContactFormProps) {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <section className="p-[22px]" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="flex flex-col items-center py-10 gap-3">
          <div
            className="w-12 h-12 flex items-center justify-center"
            style={{ backgroundColor: "rgba(207,174,96,0.09)", border: "1px solid rgba(207,174,96,0.24)" }}
          >
            <Check size={20} style={{ color: "#CFAE60" }} />
          </div>
          <p className="font-display text-[20px] italic text-center" style={{ color: "#CFAE60" }}>
            Mensaje enviado
          </p>
          <p className="font-body font-light text-center" style={{ fontSize: "11px", color: "#4B4B4B" }}>
            Te contactamos en menos de 2 horas.
          </p>
        </div>
      </section>
    );
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#F8F6F2",
    border: "1px solid rgba(0,0,0,0.08)",
    fontSize: "12px",
    color: "#1C1C1C",
  };

  return (
    <section className="p-[22px]" style={{ backgroundColor: "#FFFFFF" }}>
      <p
        className="font-body font-light uppercase tracking-[3px] mb-1"
        style={{ fontSize: "8px", color: "#CFAE60" }}
      >
        Solicitar Información
      </p>
      <h2 className="font-display text-[24px] italic mb-1" style={{ color: "#CFAE60" }}>
        Habla con un Asesor
      </h2>
      <p className="font-body font-light mb-5" style={{ fontSize: "11px", color: "#4B4B4B" }}>
        Recibe precios actualizados, planos y disponibilidad directamente.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="hidden" name="_subject" value={`Nueva solicitud — ${propertyName}`} />
        <input type="hidden" name="origen" value={typeof window !== "undefined" ? window.location.href : ""} />

        <input
          name="nombre"
          placeholder="Nombre completo"
          required
          className="w-full px-3 py-3 font-body font-light focus:outline-none"
          style={{ ...inputStyle }}
        />
        <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />

        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          required
          className="w-full px-3 py-3 font-body font-light focus:outline-none"
          style={{ ...inputStyle }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <input
          name="telefono"
          type="tel"
          placeholder="Teléfono / WhatsApp"
          className="w-full px-3 py-3 font-body font-light focus:outline-none"
          style={{ ...inputStyle }}
        />

        <select
          name="destino"
          className="w-full px-3 py-3 font-body font-light focus:outline-none appearance-none"
          style={{ ...inputStyle, color: "#4B4B4B" }}
          defaultValue=""
        >
          <option value="" disabled>
            Destino de interés
          </option>
          <option value="costa-mujeres">Costa Mujeres</option>
          <option value="zona-hotelera">Zona Hotelera</option>
          <option value="puerto-cancun">Puerto Cancún</option>
          <option value="tulum">Tulum</option>
          <option value="playa-del-carmen">Playa del Carmen</option>
          <option value="mayakoba">Mayakoba</option>
        </select>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3.5 font-body font-light uppercase tracking-[3px] flex items-center justify-center gap-2"
          style={{
            fontSize: "9px",
            backgroundColor: "#CFAE60",
            color: "#FFFFFF",
            opacity: state.submitting ? 0.7 : 1,
          }}
        >
          {state.submitting ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Enviando...
            </>
          ) : (
            "Solicitar Información"
          )}
        </button>

        {state.errors && (
          <p className="font-body font-light text-center" style={{ fontSize: "10px", color: "#b03a2e" }}>
            Hubo un error. Escríbenos por WhatsApp.
          </p>
        )}
      </form>

      {/* WhatsApp secondary */}
      <button
        onClick={() =>
          window.open(
            `https://wa.me/529981234567?text=${encodeURIComponent(`Hola, me interesa ${propertyName}`)}`,
            "_blank"
          )
        }
        className="w-full mt-3 py-3 font-body font-light uppercase tracking-[2px] flex items-center justify-center gap-2"
        style={{
          fontSize: "9px",
          border: "1px solid rgba(37,211,102,0.3)",
          color: "#25d366",
          backgroundColor: "transparent",
        }}
      >
        <MessageCircle size={14} />
        Escribir por WhatsApp
      </button>
    </section>
  );
}
