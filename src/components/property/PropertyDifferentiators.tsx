import { Info, TrendingUp, Globe, Star, Tag, Package, Shield } from "lucide-react";
import { tr } from "@/lib/propertyI18n";
import type { Differentiator, Locale } from "@/types/property";

interface PropertyDifferentiatorsProps {
  differentiators: Differentiator[];
  locale: Locale;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  roi: TrendingUp,
  vista: Globe,
  amenidad: Star,
  precio: Tag,
  entrega: Package,
  exclusivo: Shield,
};

function getLocalized(es: string, en: string | undefined, locale: Locale): string {
  return locale === 'en' && en ? en : es;
}

export function PropertyDifferentiators({ differentiators, locale }: PropertyDifferentiatorsProps) {
  if (!differentiators || differentiators.length === 0) return null;

  const featured = differentiators.filter((d) => d.layout === "featured");
  const grid = differentiators.filter((d) => d.layout === "grid");
  const wide = differentiators.filter((d) => d.layout === "wide");

  return (
    <section className="prop-section-diff" style={{ backgroundColor: "hsl(var(--paper))", height: "auto", overflow: "visible" }}>
      <p className="font-body font-light uppercase prop-label mb-1" style={{ letterSpacing: "4px", color: "hsl(var(--gold))" }}>
        {tr(locale, 'whyInvestHere')}
      </p>
      <h2 className="font-display prop-title-md mb-1" style={{ color: "#1C1C1C" }}>
        {tr(locale, 'whatMakesItUnique')}{' '}
        <em style={{ color: "hsl(var(--gold))" }}>{tr(locale, 'uniqueWord')}</em>
        {tr(locale, 'uniqueSubtitle') ? ` ${tr(locale, 'uniqueSubtitle')}` : ''}
      </h2>
      <p className="font-body font-light prop-text-sm mb-6" style={{ color: "#4B4B4B" }}>
        {locale === "es"
          ? "Ventajas exclusivas que no encontrarás en otros desarrollos."
          : "Exclusive advantages you won't find in other developments."}
      </p>

      {featured.map((d, idx) => {
        const Icon = iconMap[d.type] || Star;
        const title = getLocalized(d.title, d.titleEn, locale);
        const desc = getLocalized(d.description, d.descriptionEn, locale);
        const pills = locale === 'en' && d.pillsEn ? d.pillsEn : d.pills;
        return (
          <div
            key={`f-${idx}`}
            className="prop-diff-featured flex gap-4 mb-4"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(207,174,96,0.22)" }}
          >
            <div className="flex-shrink-0 prop-diff-stat">
              {d.stat ? (
                <>
                  <span className="font-display prop-num-feat block" style={{ color: "hsl(var(--gold))" }}>{d.stat}</span>
                  {d.statLabel && (
                    <span className="font-body font-light prop-label block uppercase" style={{ color: "rgba(207,174,96,0.6)" }}>{d.statLabel}</span>
                  )}
                </>
              ) : (
                <Icon size={32} style={{ color: "hsl(var(--gold))" }} />
              )}
            </div>
            <div className="flex-1">
              <span className="font-body font-light uppercase prop-label block mb-1" style={{ letterSpacing: "2px", color: "hsl(var(--gold))" }}>{d.type}</span>
              <span className="font-display prop-diff-card-title block mb-1" style={{ color: "#1C1C1C" }}>{title}</span>
              <p className="font-body font-light prop-diff-card-desc mb-2" style={{ color: "#4B4B4B" }}>{desc}</p>
              {pills && pills.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {pills.map((pill, pi) => (
                    <span key={pi} className="flex items-center gap-1 px-2 py-1 font-body font-light prop-badge" style={{ border: "1px solid rgba(207,174,96,0.22)", backgroundColor: "hsl(var(--paper))" }}>
                      <span className="w-[3px] h-[3px]" style={{ backgroundColor: "hsl(var(--gold))" }} />
                      {pill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}

      {grid.length > 0 && (
        <div className="prop-diff-grid grid grid-cols-2 gap-[3px] mb-4">
          {grid.map((d, idx) => {
            const Icon = iconMap[d.type] || Star;
            const title = getLocalized(d.title, d.titleEn, locale);
            const desc = getLocalized(d.description, d.descriptionEn, locale);
            return (
              <div key={`g-${idx}`} className="prop-diff-grid-card group relative" style={{ backgroundColor: "#FFFFFF", height: "auto", overflow: "visible" }}>
                <div className="w-7 h-7 flex items-center justify-center mb-3" style={{ backgroundColor: "rgba(207,174,96,0.08)", border: "1px solid rgba(207,174,96,0.22)" }}>
                  <Icon size={14} style={{ color: "hsl(var(--gold))" }} />
                </div>
                <p className="font-body font-normal prop-diff-card-title mb-1" style={{ color: "#1C1C1C" }}>{title}</p>
                <p className="font-body font-light prop-diff-card-desc" style={{ color: "#4B4B4B" }}>{desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" style={{ backgroundColor: "hsl(var(--gold))" }} />
              </div>
            );
          })}
        </div>
      )}

      {wide.length > 0 && (
        <div className="flex flex-col gap-[3px] mb-4">
          {wide.map((d, idx) => {
            const Icon = iconMap[d.type] || Star;
            const title = getLocalized(d.title, d.titleEn, locale);
            const desc = getLocalized(d.description, d.descriptionEn, locale);
            return (
              <div key={`w-${idx}`} className="prop-diff-wide flex" style={{ backgroundColor: "#FFFFFF", borderLeft: "3px solid hsl(var(--gold))" }}>
                <div className="w-7 h-7 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(207,174,96,0.08)", border: "1px solid rgba(207,174,96,0.22)" }}>
                  <Icon size={14} style={{ color: "hsl(var(--gold))" }} />
                </div>
                <div>
                  <p className="font-body font-normal prop-diff-card-title mb-1" style={{ color: "#1C1C1C" }}>{title}</p>
                  <p className="font-body font-light prop-diff-card-desc" style={{ color: "#4B4B4B" }}>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex items-start gap-2 mt-4">
        <Info size={14} style={{ color: "hsl(var(--gold))", flexShrink: 0, marginTop: 2 }} />
        <p className="font-body font-light prop-text-xs" style={{ color: "#4B4B4B" }}>
          {tr(locale, 'verifiedNote')}
        </p>
      </div>
    </section>
  );
}
