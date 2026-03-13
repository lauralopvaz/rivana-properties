import { MessageCircle, FileText } from "lucide-react";
import { tr } from "@/lib/propertyI18n";
import type { Locale } from "@/types/property";

interface PropertyStickyBarProps {
  onReserve: () => void;
  onWhatsApp: () => void;
  onBrochure: () => void;
  locale: Locale;
  visible?: boolean;
}

export function PropertyStickyBar({ onReserve, onWhatsApp, onBrochure, locale, visible = true }: PropertyStickyBarProps) {
  return (
    <div
      className="sticky bottom-0 z-50 prop-sticky-outer"
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.3s ease, opacity 0.25s ease",
      }}
    >
      <div className="prop-sticky-inner flex gap-[2px]">
        <button
          onClick={onReserve}
          className="flex-[2] font-body font-light uppercase prop-btn prop-sticky-main flex items-center justify-center"
          style={{ letterSpacing: "2px", backgroundColor: "hsl(var(--gold))", color: "#FFFFFF" }}
        >
          {tr(locale, 'requestInfoShort')}
        </button>
        <button
          onClick={onWhatsApp}
          className="flex items-center justify-center flex-shrink-0 prop-sticky-wa"
          style={{ border: "1px solid rgba(37,211,102,0.28)" }}
        >
          <MessageCircle size={18} style={{ color: "#25d366" }} />
        </button>
        <button
          onClick={onBrochure}
          className="flex-1 font-body font-light uppercase prop-btn prop-sticky-brochure flex items-center justify-center gap-1"
          style={{ letterSpacing: "2px", border: "1px solid rgba(207,174,96,0.22)", color: "hsl(var(--gold))" }}
        >
          <FileText size={12} style={{ color: "hsl(var(--gold))" }} />
          {tr(locale, 'brochure')}
        </button>
      </div>
    </div>
  );
}
