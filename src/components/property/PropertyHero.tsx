import { Bed, Maximize, CalendarClock } from "lucide-react";
import { formatUSD } from "@/lib/formatPrice";

interface PropertyHeroProps {
  name: string;
  zone: string;
  status: "preventa" | "entrega-inmediata";
  priceFromUSD: number;
  bedrooms: string;
  sqmRange: string;
  delivery: string;
  roiEstimate: number;
  images: string[];
  onViewPrices?: () => void;
}

export function PropertyHero({
  name,
  zone,
  status,
  priceFromUSD,
  bedrooms,
  sqmRange,
  delivery,
  roiEstimate,
  images,
  onViewPrices,
}: PropertyHeroProps) {
  const heroImage = images[0] || "/placeholder.svg";

  return (
    <section className="relative w-full h-[420px] overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.95)]" />

      {/* Badges */}
      <div className="absolute top-4 left-4 flex gap-2 z-10">
        {status === "preventa" && (
          <span
            className="px-3 py-1 text-[8px] font-body font-light uppercase tracking-[3px]"
            style={{
              backgroundColor: "#26547D",
              color: "#FFFFFF",
            }}
          >
            Preventa
          </span>
        )}
        <span
          className="px-3 py-1 text-[8px] font-body font-light uppercase tracking-[3px]"
          style={{
            backgroundColor: "rgba(207,174,96,0.12)",
            border: "1px solid rgba(207,174,96,0.24)",
            color: "#CFAE60",
          }}
        >
          ROI {roiEstimate}%
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <p
          className="font-body font-light uppercase tracking-[3px] mb-1"
          style={{ fontSize: "8px", color: "#CFAE60" }}
        >
          {zone}
        </p>
        <h1
          className="font-display text-[30px] leading-tight mb-3"
          style={{ color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
        >
          {name}
        </h1>

        {/* Specs row */}
        <div className="flex items-center gap-4 mb-4">
          {[
            { icon: Bed, text: `${bedrooms} Rec` },
            { icon: Maximize, text: sqmRange },
            { icon: CalendarClock, text: delivery },
          ].map((spec, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <spec.icon size={12} style={{ color: "#CFAE60" }} />
              <span
                className="font-body font-light"
                style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)" }}
              >
                {spec.text}
              </span>
            </div>
          ))}
        </div>

        {/* Price bar */}
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <span className="font-display text-[24px]" style={{ color: "#CFAE60" }}>
              Desde {formatUSD(priceFromUSD)}
            </span>
          </div>
          <button
            onClick={onViewPrices}
            className="px-5 py-3 font-body font-light uppercase tracking-[2px]"
            style={{
              fontSize: "9px",
              backgroundColor: "#CFAE60",
              color: "#FFFFFF",
            }}
          >
            Ver Precios
          </button>
        </div>
      </div>
    </section>
  );
}
