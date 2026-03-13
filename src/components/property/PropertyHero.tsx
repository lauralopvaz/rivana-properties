import { Link } from "react-router-dom";
import { ArrowLeft, Bed, Maximize, CalendarClock } from "lucide-react";
import { formatUSD } from "@/lib/formatPrice";
import { tr } from "@/lib/propertyI18n";
import type { PropertyDetail, Locale } from "@/types/property";

interface PropertyHeroProps {
  property: PropertyDetail;
  locale: Locale;
  onViewPrices?: () => void;
}

export function PropertyHero({ property, locale, onViewPrices }: PropertyHeroProps) {
  const heroImage = property.images[0] || "/placeholder.svg";

  return (
    <section className="relative w-full h-[420px] overflow-hidden">
      <img
        src={heroImage}
        alt={property.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.65) 35%, rgba(10,10,10,0.15) 65%, transparent 100%)",
        }}
      />

      {/* Breadcrumb back link */}
      <Link
        to={locale === "en" ? "/en/properties" : "/propiedades"}
        className="absolute top-4 left-4 z-20 flex items-center gap-1.5 font-body font-light prop-text-sm"
        style={{ color: "rgba(255,255,255,0.7)" }}
      >
        <ArrowLeft size={14} />
        {tr(locale, 'backToProperties')}
      </Link>

      {/* Badges — mobile-enhanced */}
      <div className="absolute top-12 left-4 flex gap-2 z-10 prop-hero-badges">
        {property.status === "preventa" && (
          <span className="font-body font-light uppercase prop-hero-badge prop-hero-badge--presale">
            {tr(locale, 'presale')}
          </span>
        )}
        <span className="font-body font-light uppercase prop-hero-badge prop-hero-badge--roi">
          ROI {property.roiEstimate}%
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <p
          className="font-body uppercase mb-1 prop-label"
          style={{ letterSpacing: "3px", color: "#CFAE60", textShadow: "0 1px 8px rgba(0,0,0,0.6)", fontWeight: 400 }}
        >
          {locale === 'en' && property.zoneEn ? property.zoneEn : property.zone}
        </p>
        <h1
          className="font-display prop-title-lg leading-tight mb-3"
          style={{ color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
        >
          {property.name}
        </h1>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-4">
          {[
            { icon: Bed, text: `${locale === 'en' && property.bedroomsEn ? property.bedroomsEn : property.bedrooms} ${tr(locale, 'beds')}` },
            { icon: Maximize, text: property.sqmRange },
            { icon: CalendarClock, text: property.delivery },
          ].map((spec, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <spec.icon size={12} style={{ color: "#CFAE60" }} />
              <span
                className="font-body font-light prop-text-sm"
                style={{ color: "rgba(255,255,255,0.90)", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
              >
                {spec.text}
              </span>
            </div>
          ))}
        </div>

        {/* Price bar */}
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <span
              className="font-body font-light uppercase block prop-hero-desde"
              style={{ letterSpacing: "3px", color: "rgba(255,255,255,0.70)" }}
            >
              {tr(locale, 'from')}
            </span>
            <span
              className="font-display prop-num-price"
              style={{ color: "#CFAE60", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
            >
              {formatUSD(property.priceFromUSD)}
            </span>
          </div>
          <button
            onClick={onViewPrices}
            className="px-5 py-3 font-body font-light uppercase prop-btn"
            style={{
              letterSpacing: "2px",
              backgroundColor: "#CFAE60",
              color: "#FFFFFF",
            }}
          >
            {tr(locale, 'viewPrices')}
          </button>
        </div>
      </div>
    </section>
  );
}
