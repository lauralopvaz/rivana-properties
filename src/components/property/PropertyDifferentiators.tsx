import { Info, Eye, Home, DollarSign, Truck, Star, TrendingUp } from "lucide-react";
import type { Differentiator } from "@/types/property";

interface PropertyDifferentiatorsProps {
  differentiators: Differentiator[];
  roiEstimate: number;
  plusvaliaEstimate: number;
}

const TYPE_ICONS: Record<string, React.ElementType> = {
  roi: TrendingUp,
  vista: Eye,
  amenidad: Home,
  precio: DollarSign,
  entrega: Truck,
  exclusivo: Star,
};

function FeaturedCard({ diff }: { diff: Differentiator }) {
  return (
    <div
      className="p-[18px] flex gap-4"
      style={{
        backgroundColor: "#F8F6F2",
        border: "1px solid rgba(207,174,96,0.24)",
      }}
    >
      {diff.stat && (
        <div className="flex-shrink-0 flex flex-col items-center justify-center">
          <span className="font-display text-[48px] leading-none" style={{ color: "#CFAE60" }}>
            {diff.stat}
          </span>
          {diff.statLabel && (
            <span
              className="font-body font-light uppercase tracking-[2px] mt-1"
              style={{ fontSize: "8px", color: "#CFAE60" }}
            >
              {diff.statLabel}
            </span>
          )}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <span
          className="font-body font-light uppercase tracking-[2px] block mb-1"
          style={{ fontSize: "8px", color: "#CFAE60" }}
        >
          {diff.type}
        </span>
        <h4 className="font-display text-[16px] mb-1" style={{ color: "#1C1C1C" }}>
          {diff.title}
        </h4>
        <p
          className="font-body font-light"
          style={{ fontSize: "10px", color: "#4B4B4B" }}
        >
          {diff.description}
        </p>
        {diff.pills && diff.pills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {diff.pills.map((pill, i) => (
              <span
                key={i}
                className="px-2 py-1 font-body font-light"
                style={{
                  fontSize: "8px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(207,174,96,0.24)",
                  color: "#1C1C1C",
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function GridCard({ diff }: { diff: Differentiator }) {
  const Icon = TYPE_ICONS[diff.type] || Star;
  return (
    <div
      className="p-4 group relative overflow-hidden"
      style={{ backgroundColor: "#F8F6F2" }}
    >
      <div
        className="w-7 h-7 flex items-center justify-center mb-3"
        style={{
          backgroundColor: "rgba(207,174,96,0.09)",
          border: "1px solid rgba(207,174,96,0.24)",
        }}
      >
        <Icon size={14} style={{ color: "#CFAE60" }} />
      </div>
      <h4
        className="font-body font-normal mb-1"
        style={{ fontSize: "12px", color: "#1C1C1C" }}
      >
        {diff.title}
      </h4>
      <p className="font-body font-light" style={{ fontSize: "10px", color: "#4B4B4B" }}>
        {diff.description}
      </p>
      {/* Hover bar */}
      <span
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        style={{ backgroundColor: "#CFAE60" }}
      />
    </div>
  );
}

function WideCard({ diff }: { diff: Differentiator }) {
  const Icon = TYPE_ICONS[diff.type] || Star;
  return (
    <div
      className="p-4 flex gap-3"
      style={{
        backgroundColor: "#F8F6F2",
        borderLeft: "2px solid #CFAE60",
      }}
    >
      <div
        className="w-7 h-7 flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: "rgba(207,174,96,0.09)",
          border: "1px solid rgba(207,174,96,0.24)",
        }}
      >
        <Icon size={14} style={{ color: "#CFAE60" }} />
      </div>
      <div>
        <h4
          className="font-body font-normal mb-0.5"
          style={{ fontSize: "12px", color: "#1C1C1C" }}
        >
          {diff.title}
        </h4>
        <p className="font-body font-light" style={{ fontSize: "10px", color: "#4B4B4B" }}>
          {diff.description}
        </p>
      </div>
    </div>
  );
}

export function PropertyDifferentiators({
  differentiators,
}: PropertyDifferentiatorsProps) {
  if (!differentiators || differentiators.length === 0) return null;

  const featured = differentiators.filter((d) => d.layout === "featured");
  const grid = differentiators.filter((d) => d.layout === "grid");
  const wide = differentiators.filter((d) => d.layout === "wide");

  return (
    <section className="p-5" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Header */}
      <p
        className="font-body font-light uppercase tracking-[3px] mb-1"
        style={{ fontSize: "8px", color: "#CFAE60" }}
      >
        Por qué invertir aquí
      </p>
      <h2 className="font-display text-[26px] italic mb-1" style={{ color: "#CFAE60" }}>
        Lo que hace única a esta propiedad
      </h2>
      <p className="font-body font-light mb-6" style={{ fontSize: "11px", color: "#4B4B4B" }}>
        Ventajas clave que no encontrarás en proyectos similares de la zona
      </p>

      {/* Featured */}
      {featured.length > 0 && (
        <div className="flex flex-col gap-[2px] mb-[2px]">
          {featured.map((d, i) => (
            <FeaturedCard key={i} diff={d} />
          ))}
        </div>
      )}

      {/* Grid */}
      {grid.length > 0 && (
        <div className="grid grid-cols-2 gap-[2px] mb-[2px]">
          {grid.map((d, i) => (
            <GridCard key={i} diff={d} />
          ))}
        </div>
      )}

      {/* Wide */}
      {wide.length > 0 && (
        <div className="flex flex-col gap-[2px] mb-4">
          {wide.map((d, i) => (
            <WideCard key={i} diff={d} />
          ))}
        </div>
      )}

      {/* Verification note */}
      <div className="flex items-start gap-2 mt-4">
        <Info size={12} style={{ color: "#CFAE60", flexShrink: 0, marginTop: 2 }} />
        <p className="font-body font-light" style={{ fontSize: "9px", color: "#4B4B4B" }}>
          Diferenciadores verificados por Rivana. Solicita documentación oficial a tu asesor.
        </p>
      </div>
    </section>
  );
}
