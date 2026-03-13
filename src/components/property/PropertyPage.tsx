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
    <>
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

      <div ref={contactRef} id="contact-form">
        <PropertyContactForm propertyName={property.name} locale={locale} />
      </div>

      <PropertyStickyBar
        onReserve={scrollToContact}
        onWhatsApp={openWhatsApp}
        onBrochure={() => scrollToContact()}
        locale={locale}
      />
    </>
  );
}
