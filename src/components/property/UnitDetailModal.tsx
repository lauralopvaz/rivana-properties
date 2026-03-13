import { X } from "lucide-react";
import { formatMXN, formatUSD } from "@/lib/formatPrice";
import { tr } from "@/lib/propertyI18n";
import type { UnitType, Locale } from "@/types/property";

interface UnitDetailModalProps {
  unit: UnitType | null;
  locale: Locale;
  onClose: () => void;
  onRequestInfo: () => void;
}

function AvailabilityBadge({ count, locale }: { count: number; locale: Locale }) {
  if (count < 5) {
    return (
      <span
        className="px-2 py-0.5 font-body font-light prop-badge uppercase"
        style={{ letterSpacing: "1px", color: "#b03a2e", border: "1px solid rgba(176,58,46,0.22)" }}
      >
        {tr(locale, 'last')} {count}
      </span>
    );
  }
  return (
    <span
      className="px-2 py-0.5 font-body font-light prop-badge uppercase"
      style={{ letterSpacing: "1px", color: "#CFAE60", border: "1px solid rgba(207,174,96,0.4)" }}
    >
      {count} {tr(locale, 'available')}
    </span>
  );
}

export function UnitDetailModal({ unit, locale, onClose, onRequestInfo }: UnitDetailModalProps) {
  if (!unit) return null;

  const unitName = locale === 'en' && unit.nameEn ? unit.nameEn : unit.name;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center"
      style={{ backgroundColor: "rgba(28,28,28,0.55)", backdropFilter: "blur(3px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-[390px] max-h-[85vh] overflow-y-auto"
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
          {/* Unit name */}
          <h3 className="font-display text-[24px] font-light mb-3" style={{ color: "#1C1C1C" }}>
            {unitName}
          </h3>

          {/* Surface */}
          <div className="flex items-center gap-2 mb-3">
            <span className="font-body font-light prop-text-xs" style={{ color: "#4B4B4B" }}>
              {tr(locale, 'surface')}:
            </span>
            <span className="font-body font-light prop-text-sm" style={{ color: "#1C1C1C" }}>
              {unit.sqm} m²
            </span>
          </div>

          {/* Price */}
          <div className="mb-4 p-3" style={{ backgroundColor: "#F8F6F2", border: "1px solid rgba(0,0,0,0.07)" }}>
            <span className="font-body font-light uppercase prop-badge block" style={{ letterSpacing: "1px", color: "#4B4B4B" }}>
              {tr(locale, 'from')}
            </span>
            <span className="font-display prop-unit-price block" style={{ color: "#CFAE60" }}>
              {formatMXN(unit.priceMXN)}
            </span>
            {unit.priceUSD && (
              <span className="font-body font-light prop-text-xs block mt-1" style={{ color: "#4B4B4B" }}>
                ≈ {formatUSD(unit.priceUSD)} USD
              </span>
            )}
          </div>

          {/* Floor plan */}
          {unit.floorPlanUrl ? (
            <div className="mb-4 p-3 flex items-center justify-center" style={{ backgroundColor: "#F8F6F2" }}>
              <img
                src={unit.floorPlanUrl}
                alt={`${unitName} — Floor plan`}
                className="max-h-[320px] w-auto object-contain"
              />
            </div>
          ) : (
            <div
              className="mb-4 p-6 flex items-center justify-center"
              style={{ backgroundColor: "#F8F6F2" }}
            >
              <span className="font-body font-light prop-text-sm text-center" style={{ color: "#4B4B4B" }}>
                {tr(locale, 'floorPlanPlaceholder')}
              </span>
            </div>
          )}

          {/* Availability */}
          <div className="mb-4">
            <AvailabilityBadge count={unit.available} locale={locale} />
          </div>

          {/* CTA buttons */}
          <button
            onClick={onRequestInfo}
            className="w-full py-3.5 font-body font-light uppercase prop-btn mb-[2px]"
            style={{ letterSpacing: "2px", backgroundColor: "#CFAE60", color: "#FFFFFF" }}
          >
            {tr(locale, 'requestUnitInfo')}
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 font-body font-light uppercase prop-btn"
            style={{ letterSpacing: "2px", border: "1px solid rgba(0,0,0,0.07)", color: "#4B4B4B" }}
          >
            {tr(locale, 'close')}
          </button>
        </div>
      </div>
    </div>
  );
}
