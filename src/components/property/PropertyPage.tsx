import { useRef } from "react";
import type { PropertyDetail, UnitType, Locale } from "@/types/property";
import { PropertyHero } from "./PropertyHero";
import { PropertyGalleryStrip } from "./PropertyGalleryStrip";
import { PropertyTabs } from "./PropertyTabs";
import { PropertyPresalePrice } from "./PropertyPresalePrice";
import { PropertyDifferentiators } from "./PropertyDifferentiators";
import { PropertyContactForm } from "./PropertyContactForm";
import { PropertyStickyBar } from "./PropertyStickyBar";

interface PropertyPageProps {
  property: PropertyDetail;
  locale: Locale;
}

export function PropertyPage({ property, locale }: PropertyPageProps) {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/529981234567?text=${encodeURIComponent(`Hola, me interesa ${property.name}`)}`,
      "_blank"
    );
  };

  const handleUnitClick = (_unit: UnitType) => {
    scrollToContact();
  };

  return (
    <div style={{ backgroundColor: "#F8F6F2" }}>
      <div>
        <PropertyHero
          property={property}
          locale={locale}
          onViewPrices={scrollToContact}
        />

        <PropertyGalleryStrip images={property.images} locale={locale} />

        <PropertyTabs
          property={property}
          locale={locale}
          onUnitClick={handleUnitClick}
        />

        {/* DEBUG: this red block should appear after tabs */}
        <div style={{ height: 200, backgroundColor: "red", color: "white", padding: 20, fontSize: 24 }}>
          DEBUG: Presale exists: {String(!!property.presalePrice)} | Differentiators: {property.differentiators?.length ?? 0}
        </div>

        {property.presalePrice && (
          <PropertyPresalePrice
            presalePrice={property.presalePrice}
            locale={locale}
            onReserve={scrollToContact}
            onWhatsApp={openWhatsApp}
          />
        )}

        {property.differentiators && property.differentiators.length > 0 && (
          <PropertyDifferentiators
            differentiators={property.differentiators}
            roiEstimate={property.roiEstimate}
            plusvaliaEstimate={property.plusvaliaEstimate}
            locale={locale}
          />
        )}

        <div ref={contactRef}>
          <PropertyContactForm propertyName={property.name} locale={locale} />
        </div>
      </div>

      <PropertyStickyBar
        onReserve={scrollToContact}
        onWhatsApp={openWhatsApp}
        onBrochure={() => scrollToContact()}
        locale={locale}
      />
    </div>
  );
}
