import { useState } from "react";
import { ChevronRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { formatMXN } from "@/lib/formatPrice";
import { tr } from "@/lib/propertyI18n";
import type { PropertyDetail, UnitType, Locale } from "@/types/property";

interface PropertyTabsProps {
  property: PropertyDetail;
  locale: Locale;
  onUnitClick: (unit: UnitType) => void;
}

type TabKey = "general" | "units" | "features" | "location";

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
  if (count <= 20) {
    return (
      <span
        className="px-2 py-0.5 font-body font-light prop-badge uppercase"
        style={{ letterSpacing: "1px", color: "#CFAE60", border: "1px solid rgba(207,174,96,0.4)" }}
      >
        {count} {tr(locale, 'available')}
      </span>
    );
  }
  return (
    <span
      className="px-2 py-0.5 font-body font-light prop-badge uppercase"
      style={{ letterSpacing: "1px", color: "rgba(207,174,96,0.6)", border: "1px solid rgba(207,174,96,0.18)" }}
    >
      {count} {tr(locale, 'available')}
    </span>
  );
}

function DynamicIcon({ name, size = 16, className }: { name: string; size?: number; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}

export function PropertyTabs({ property, locale, onUnitClick }: PropertyTabsProps) {
  const [active, setActive] = useState<TabKey>("general");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "general", label: tr(locale, 'tabGeneral') },
    { key: "units", label: tr(locale, 'tabUnits') },
    { key: "features", label: tr(locale, 'tabFeatures') },
    { key: "location", label: tr(locale, 'tabLocation') },
  ];

  const description = locale === 'en' && property.descriptionEn ? property.descriptionEn : property.description;
  const features = locale === 'en' && property.featuresEn ? property.featuresEn : property.features;
  const priceNote = locale === 'en' && property.priceNoteEn ? property.priceNoteEn : property.priceNote;

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* Tab bar — sticky */}
      <div
        className="sticky top-[44px] z-40 flex overflow-x-auto"
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style>{`.prop-tab-scroll::-webkit-scrollbar { display: none; }`}</style>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className="px-4 py-3 font-body font-light uppercase whitespace-nowrap flex-shrink-0 prop-tab-label"
            style={{
              letterSpacing: "2px",
              color: active === tab.key ? "#CFAE60" : "#4B4B4B",
              borderBottom: active === tab.key ? "2px solid #CFAE60" : "2px solid transparent",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-5">
        {active === "general" && (
          <p className="font-body font-light prop-text-base" style={{ color: "#4B4B4B", lineHeight: 1.8 }}>
            {description}
          </p>
        )}

        {active === "units" && (
          <div className="flex flex-col">
            {property.units.map((unit, idx) => (
              <button
                key={idx}
                onClick={() => onUnitClick(unit)}
                className="flex items-center justify-between py-4 text-left cursor-pointer"
                style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div>
                  <span className="font-display prop-unit-name block" style={{ color: "#1C1C1C" }}>
                    {unit.name}
                  </span>
                  <span className="font-body font-light prop-text-xs" style={{ color: "#4B4B4B" }}>
                    {unit.sqm} m²
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <span className="font-body font-light prop-text-xs block" style={{ color: "#4B4B4B" }}>
                      {tr(locale, 'from')}
                    </span>
                    <span className="font-display prop-unit-price block" style={{ color: "#CFAE60" }}>
                      {formatMXN(unit.priceMXN)}
                    </span>
                    <div className="mt-1">
                      <AvailabilityBadge count={unit.available} locale={locale} />
                    </div>
                  </div>
                  <ChevronRight size={16} style={{ color: "rgba(0,0,0,0.25)" }} />
                </div>
              </button>
            ))}
          </div>
        )}

        {active === "features" && (
          <div className="grid grid-cols-2 gap-x-4">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 py-3"
                style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}
              >
                <span className="w-1 h-1 flex-shrink-0" style={{ backgroundColor: "#CFAE60" }} />
                <span className="font-body font-light prop-text-sm" style={{ color: "#1C1C1C" }}>
                  {feat}
                </span>
              </div>
            ))}
          </div>
        )}

        {active === "location" && (
          <>
            <div className="mb-4 h-[180px]" style={{ backgroundColor: "#e4dfd8" }} />
            <div className="grid grid-cols-2 gap-3">
              {property.distances.map((d, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <DynamicIcon name={d.icon} size={16} className="text-[#1C1C1C]" />
                  <span className="font-body font-light prop-text-sm" style={{ color: "#4B4B4B" }}>
                    {locale === 'en' && d.labelEn ? d.labelEn : d.label}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
