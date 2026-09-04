import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronRight, MapPin } from "lucide-react";
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
        style={{ letterSpacing: "1px", color: "hsl(var(--gold))", border: "1px solid rgba(207,174,96,0.4)" }}
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

type SectionKey = "general" | "units" | "features" | "location";

export function PropertyTabs({ property, locale, onUnitClick }: PropertyTabsProps) {
  const [active, setActive] = useState<SectionKey>("general");
  const navScrollRef = useRef<HTMLDivElement>(null);

  const sections: { key: SectionKey; label: string }[] = [
    { key: "general", label: tr(locale, 'tabGeneral') },
    { key: "units", label: tr(locale, 'tabUnits') },
    { key: "features", label: tr(locale, 'tabFeatures') },
    { key: "location", label: tr(locale, 'tabLocation') },
  ];

  const description = locale === 'en' && property.descriptionEn ? property.descriptionEn : property.description;
  const features = locale === 'en' && property.featuresEn ? property.featuresEn : property.features;
  const priceNote = locale === 'en' && property.priceNoteEn ? property.priceNoteEn : property.priceNote;

  /* Scroll-spy: highlight the section closest to the top of the viewport. */
  useEffect(() => {
    const ids = sections.map((s) => `prop-section-${s.key}`);
    const onScroll = () => {
      let current: SectionKey = "general";
      for (const s of sections) {
        const el = document.getElementById(`prop-section-${s.key}`);
        if (!el) continue;
        if (el.getBoundingClientRect().top - 160 <= 0) current = s.key;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const goTo = (key: SectionKey) => {
    const el = document.getElementById(`prop-section-${key}`);
    if (!el) return;
    const offset = window.innerWidth >= 768 ? 132 : 116;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  };

  const sectionTitle = (label: string) => (
    <h2 className="font-display prop-title-md prop-stack-heading" style={{ color: "#1C1C1C" }}>
      {label}
    </h2>
  );

  return (
    <div className="prop-tabs-wrapper" style={{ backgroundColor: "#FFFFFF", height: "auto", overflow: "visible" }}>
      {/* Sticky anchor nav */}
      <nav
        aria-label={tr(locale, 'tabGeneral')}
        className="prop-anchor-nav"
        style={{
          backgroundColor: "rgba(255,255,255,0.94)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          position: 'sticky',
          zIndex: 40,
        }}
      >
        <div className="prop-anchor-nav-inner">
          <div ref={navScrollRef} className="prop-anchor-list">
            {sections.map((s) => (
              <button
                key={s.key}
                onClick={() => goTo(s.key)}
                aria-current={active === s.key ? 'true' : undefined}
                className="font-body uppercase whitespace-nowrap flex-shrink-0 prop-anchor-btn"
                style={{
                  letterSpacing: "2.5px",
                  fontWeight: 500,
                  color: active === s.key ? "hsl(var(--gold))" : "#4B4B4B",
                  borderBottom: active === s.key ? "2px solid hsl(var(--gold))" : "2px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Stacked sections ── */}
      <section id="prop-section-general" className="prop-stack-section">
        {sectionTitle(tr(locale, 'tabGeneral'))}
        <div className="prop-tab-text-wrap">
          {description.split(/\n\n+/).map((para, i) => (
            <p
              key={i}
              className="font-body prop-text-base"
              style={{ color: "#4B4B4B", marginBottom: i < description.split(/\n\n+/).length - 1 ? '1rem' : 0 }}
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      <section id="prop-section-units" className="prop-stack-section">
        {sectionTitle(tr(locale, 'tabUnits'))}
        <div className="prop-stack-units">
          {property.units.map((unit, idx) => (
            <button
              key={idx}
              onClick={() => onUnitClick(unit)}
              className="flex items-center justify-between py-4 text-left cursor-pointer w-full"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div>
                <span className="font-display prop-unit-name block" style={{ color: "#1C1C1C" }}>
                  {locale === 'en' && unit.nameEn ? unit.nameEn : unit.name}
                </span>
                <span className="font-body prop-text-xs" style={{ color: "#4B4B4B" }}>
                  {unit.sqm} m²
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <span className="font-body prop-badge uppercase block" style={{ letterSpacing: "1px", color: "#4B4B4B", fontWeight: 500 }}>
                    {tr(locale, 'from')}
                  </span>
                  <span className="font-display prop-unit-price block" style={{ color: "hsl(var(--gold))" }}>
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
        {priceNote && (
          <p className="font-body italic prop-text-xs mt-4" style={{ color: "#4B4B4B" }}>
            {priceNote}
          </p>
        )}
      </section>

      <section id="prop-section-features" className="prop-stack-section">
        {sectionTitle(tr(locale, 'tabFeatures'))}
        <div className="prop-stack-features">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 py-3"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}
            >
              <span className="w-1 h-1 flex-shrink-0" style={{ backgroundColor: "hsl(var(--gold))" }} />
              <span className="font-body prop-text-sm" style={{ color: "#1C1C1C" }}>
                {feat}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="prop-section-location" className="prop-stack-section">
        {sectionTitle(tr(locale, 'tabLocation'))}
        {property.address && (
          <div
            className="flex items-start gap-[10px] mb-4 p-[14px_16px]"
            style={{ backgroundColor: "hsl(var(--paper))", border: "1px solid rgba(0,0,0,0.07)" }}
          >
            <MapPin size={16} style={{ color: "hsl(var(--gold))", flexShrink: 0, marginTop: 2 }} />
            <div>
              <span
                className="font-body uppercase block prop-badge"
                style={{ letterSpacing: "3px", color: "hsl(var(--gold))", fontWeight: 500 }}
              >
                {tr(locale, 'exactLocation')}
              </span>
              <span className="font-display block mt-1 prop-unit-name" style={{ color: "#1C1C1C", fontWeight: 500 }}>
                {property.address}
              </span>
              {(property.addressNote || property.addressNoteEn) && (
                <span className="font-body block mt-1 prop-text-xs" style={{ color: "#4B4B4B" }}>
                  {locale === 'en' && property.addressNoteEn ? property.addressNoteEn : property.addressNote}
                </span>
              )}
            </div>
          </div>
        )}
        <div className="prop-stack-distances">
          {property.distances.map((d, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <DynamicIcon name={d.icon} size={16} className="text-[#1C1C1C]" />
              <span className="font-body prop-text-sm" style={{ color: "#4B4B4B" }}>
                {locale === 'en' && d.labelEn ? d.labelEn : d.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
