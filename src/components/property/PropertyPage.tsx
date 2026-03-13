import { useState } from "react";
import type { PropertyDetail, UnitType, Locale } from "@/types/property";
import { PropertyHero } from "./PropertyHero";
import { PropertyGalleryStrip } from "./PropertyGalleryStrip";
import { PropertyTabs } from "./PropertyTabs";
import { PropertyPresalePrice } from "./PropertyPresalePrice";
import { PropertyDifferentiators } from "./PropertyDifferentiators";
import { PropertyContactForm } from "./PropertyContactForm";
import { PropertyStickyBar } from "./PropertyStickyBar";
import { ReservePriceModal } from "./ReservePriceModal";

interface PropertyPageProps {
  property: PropertyDetail;
  locale: Locale;
}

export function PropertyPage({ property, locale }: PropertyPageProps) {
  const [reserveModalOpen, setReserveModalOpen] = useState(false);

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
          onReserve={() => setReserveModalOpen(true)}
          onWhatsApp={openWhatsApp}
        />
      )}

      {(property.differentiators?.length ?? 0) > 0 && (
        <PropertyDifferentiators
          differentiators={property.differentiators!}
          locale={locale}
        />
      )}

      <div id="contact-form">
        <PropertyContactForm propertyName={property.name} locale={locale} />
      </div>

      <PropertyStickyBar
        onReserve={() => setReserveModalOpen(true)}
        onWhatsApp={openWhatsApp}
        onBrochure={() => scrollToContact()}
        locale={locale}
      />

      {property.presalePrice && (
        <ReservePriceModal
          isOpen={reserveModalOpen}
          onClose={() => setReserveModalOpen(false)}
          presalePrice={property.presalePrice}
          propertyName={property.name}
          locale={locale}
        />
      )}
    </>
  );
}
