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
    <section
      className="prop-hero-wrapper w-full"
      style={{ position: 'relative', display: 'block' }}
    >
      {/* Image container — overflow:hidden only here */}
      <div
        className="prop-hero-img-wrap relative overflow-hidden"
        style={{ height: 'clamp(380px, 52vw, 580px)' }}
      >
        <img
          src={heroImage}
          alt={property.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.45) 40%, transparent 70%)",
          }}
        />

        {/* Breadcrumb back link */}
        <Link
          to={locale === "en" ? "/en/properties" : "/propiedades"}
          className="absolute top-4 left-5 z-20 flex items-center gap-1.5 font-body font-light"
          style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}
        >
          <ArrowLeft size={14} />
          {tr(locale, 'backToProperties')}
        </Link>

        {/* Content — bottom of image */}
        <div className="prop-hero-content absolute bottom-0 left-0 right-0 z-10">
          <p
            className="font-body uppercase mb-1 prop-hero-zone"
            style={{ color: "hsl(var(--gold))", textShadow: "0 1px 6px rgba(0,0,0,0.5)", fontWeight: 400 }}
          >
            {locale === 'en' && property.zoneEn ? property.zoneEn : property.zone}
          </p>
          <h1
            className="font-display prop-hero-title leading-none mb-3"
            style={{ color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
          >
            {property.name}
          </h1>

          {/* Specs */}
          <div className="prop-hero-specs flex items-center mb-4">
            {[
              { icon: Bed, text: `${locale === 'en' && property.bedroomsEn ? property.bedroomsEn : property.bedrooms} ${tr(locale, 'beds')}` },
              { icon: Maximize, text: property.sqmRange },
              { icon: CalendarClock, text: property.delivery },
            ].map((spec, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <spec.icon size={13} style={{ color: "hsl(var(--gold))" }} />
                <span
                  className="font-body font-light prop-hero-spec-text"
                  style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
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
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {tr(locale, 'from')}
              </span>
              <span
                className="font-display prop-hero-price"
                style={{ color: "hsl(var(--gold))", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
              >
                {formatUSD(property.priceFromUSD)}
              </span>
            </div>
            <button
              onClick={onViewPrices}
              className="font-body font-light uppercase prop-hero-btn"
              style={{
                backgroundColor: "hsl(var(--gold))",
                color: "#FFFFFF",
              }}
            >
              {tr(locale, 'viewPrices')}
            </button>
          </div>
        </div>
      </div>

      {/* Badges — OUTSIDE overflow:hidden container */}
      <div
        className="prop-hero-badges flex gap-2 flex-nowrap"
        style={{
          position: 'absolute',
          top: '92px',
          left: '20px',
          zIndex: 30,
        }}
      >
        {property.status === "preventa" && (
          <span className="prop-hero-badge prop-hero-badge--presale font-body uppercase inline-flex items-center whitespace-nowrap">
            {tr(locale, 'presale')}
          </span>
        )}
        <span className="prop-hero-badge prop-hero-badge--roi font-body uppercase inline-flex items-center whitespace-nowrap">
          ROI {property.roiEstimate}%
        </span>
      </div>
    </section>
  );
}
