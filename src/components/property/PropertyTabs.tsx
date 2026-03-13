import { useState, useRef } from "react";
import { icons } from "lucide-react";
import type { UnitType, Distance } from "@/types/property";
import { formatMXN } from "@/lib/formatPrice";

interface PropertyTabsProps {
  description: string;
  units: UnitType[];
  features: string[];
  distances: Distance[];
  onUnitClick: (unit: UnitType) => void;
}

const TABS = ["General", "Unidades", "Características", "Ubicación"] as const;

function UnitAvailabilityBadge({ available }: { available: number }) {
  if (available < 5) {
    return (
      <span
        className="px-2 py-0.5 text-[8px] font-body font-light uppercase tracking-[1px]"
        style={{
          color: "#b03a2e",
          border: "1px solid rgba(176,58,46,0.3)",
          backgroundColor: "rgba(176,58,46,0.06)",
        }}
      >
        Últ. {available}
      </span>
    );
  }
  if (available <= 20) {
    return (
      <span
        className="px-2 py-0.5 text-[8px] font-body font-light uppercase tracking-[1px]"
        style={{
          color: "#CFAE60",
          border: "1px solid rgba(207,174,96,0.4)",
          backgroundColor: "rgba(207,174,96,0.08)",
        }}
      >
        {available} disp.
      </span>
    );
  }
  return (
    <span
      className="px-2 py-0.5 text-[8px] font-body font-light uppercase tracking-[1px]"
      style={{
        color: "rgba(207,174,96,0.6)",
        border: "1px solid rgba(207,174,96,0.18)",
      }}
    >
      {available} disp.
    </span>
  );
}

export function PropertyTabs({
  description,
  units,
  features,
  distances,
  onUnitClick,
}: PropertyTabsProps) {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* Tab bar */}
      <div
        ref={tabsRef}
        className="flex overflow-x-auto scrollbar-hide"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
      >
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className="flex-shrink-0 px-4 py-3 font-body font-light uppercase tracking-[2px] transition-colors relative"
            style={{
              fontSize: "9px",
              color: active === i ? "#CFAE60" : "#4B4B4B",
            }}
          >
            {tab}
            {active === i && (
              <span
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: "#CFAE60" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* General */}
        {active === 0 && (
          <p
            className="font-body font-light leading-[1.8]"
            style={{ fontSize: "13px", color: "#4B4B4B" }}
          >
            {description}
          </p>
        )}

        {/* Unidades */}
        {active === 1 && (
          <div className="flex flex-col">
            {units.map((unit, i) => (
              <button
                key={i}
                onClick={() => onUnitClick(unit)}
                className="flex items-center justify-between py-4 text-left transition-colors hover:bg-[rgba(207,174,96,0.04)]"
                style={{
                  borderBottom:
                    i < units.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                }}
              >
                <div>
                  <span className="font-display text-[18px]" style={{ color: "#1C1C1C" }}>
                    {unit.name}
                  </span>
                  <span
                    className="block font-body font-light mt-0.5"
                    style={{ fontSize: "9px", color: "#4B4B4B" }}
                  >
                    {unit.sqm} m²
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="font-display text-[16px]" style={{ color: "#CFAE60" }}>
                      Desde {formatMXN(unit.priceMXN)}
                    </span>
                    <span className="block mt-1">
                      <UnitAvailabilityBadge available={unit.available} />
                    </span>
                  </div>
                  <span style={{ color: "#CFAE60", fontSize: "18px" }}>›</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Características */}
        {active === 2 && (
          <div className="grid grid-cols-2 gap-x-4">
            {features.map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 py-3"
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <span
                  className="w-1 h-1 flex-shrink-0"
                  style={{ backgroundColor: "#CFAE60" }}
                />
                <span
                  className="font-body font-light"
                  style={{ fontSize: "11px", color: "#1C1C1C" }}
                >
                  {feat}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Ubicación */}
        {active === 3 && (
          <div>
            <div
              className="w-full h-[180px] mb-4 flex items-center justify-center"
              style={{ backgroundColor: "#ddd8d2" }}
            >
              <span
                className="font-body font-light uppercase tracking-[2px]"
                style={{ fontSize: "9px", color: "#4B4B4B" }}
              >
                Mapa próximamente
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {distances.map((d, i) => {
                const IconComponent =
                  icons[d.icon as keyof typeof icons] || icons["MapPin"];
                return (
                  <div key={i} className="flex items-center gap-2">
                    <IconComponent size={14} style={{ color: "#1C1C1C" }} />
                    <span
                      className="font-body font-light"
                      style={{ fontSize: "11px", color: "#1C1C1C" }}
                    >
                      {d.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
