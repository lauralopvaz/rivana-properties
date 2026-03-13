import { MessageCircle, FileText } from "lucide-react";

interface PropertyStickyBarProps {
  onReserve: () => void;
  onWhatsApp: () => void;
  onBrochure: () => void;
}

export function PropertyStickyBar({
  onReserve,
  onWhatsApp,
  onBrochure,
}: PropertyStickyBarProps) {
  return (
    <div
      className="sticky bottom-0 z-50 flex gap-[2px] p-2"
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.06)",
      }}
    >
      <button
        onClick={onReserve}
        className="flex-[2] py-3 font-body font-light uppercase tracking-[2px]"
        style={{ fontSize: "8px", backgroundColor: "#CFAE60", color: "#FFFFFF" }}
      >
        Solicitar Info
      </button>
      <button
        onClick={onWhatsApp}
        className="w-[46px] flex items-center justify-center flex-shrink-0"
        style={{ border: "1px solid rgba(37,211,102,0.3)" }}
      >
        <MessageCircle size={16} style={{ color: "#25d366" }} />
      </button>
      <button
        onClick={onBrochure}
        className="flex-1 py-3 font-body font-light uppercase tracking-[2px] flex items-center justify-center gap-1.5"
        style={{
          fontSize: "8px",
          border: "1px solid rgba(207,174,96,0.24)",
          color: "#CFAE60",
          backgroundColor: "transparent",
        }}
      >
        <FileText size={12} />
        Brochure
      </button>
    </div>
  );
}
