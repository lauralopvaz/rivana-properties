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
      className="sticky bottom-0 z-50 flex gap-[2px]"
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
        padding: "10px 18px",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <button
        onClick={onReserve}
        className="flex-[2] py-3 font-body font-light uppercase prop-btn flex items-center justify-center"
        style={{ letterSpacing: "2px", backgroundColor: "#CFAE60", color: "#FFFFFF" }}
      >
        {tr(locale, 'requestInfoShort')}
      </button>
      <button
        onClick={onWhatsApp}
        className="w-[46px] flex items-center justify-center flex-shrink-0"
        style={{ border: "1px solid rgba(37,211,102,0.28)" }}
      >
        <MessageCircle size={18} style={{ color: "#25d366" }} />
      </button>
      <button
        onClick={onBrochure}
        className="flex-1 py-3 font-body font-light uppercase prop-btn flex items-center justify-center gap-1"
        style={{ letterSpacing: "2px", border: "1px solid rgba(207,174,96,0.22)", color: "#CFAE60" }}
      >
        <FileText size={12} style={{ color: "#CFAE60" }} />
        {tr(locale, 'brochure')}
      </button>
    </div>
  );
}
