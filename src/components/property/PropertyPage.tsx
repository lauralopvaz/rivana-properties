import { useState, useRef, useEffect } from "react";
import type { PropertyDetail, UnitType, Locale } from "@/types/property";
import { PropertyHero } from "./PropertyHero";
import { PropertyGalleryStrip } from "./PropertyGalleryStrip";
import { PropertyTabs } from "./PropertyTabs";
import { PropertyPresalePrice } from "./PropertyPresalePrice";
import { PropertyDifferentiators } from "./PropertyDifferentiators";
import { PropertyContactForm } from "./PropertyContactForm";
import { PropertyStickyBar } from "./PropertyStickyBar";
import { ReservePriceModal } from "./ReservePriceModal";
import { UnitDetailModal } from "./UnitDetailModal";

interface PropertyPageProps {
  property: PropertyDetail;
  locale: Locale;
}

export function PropertyPage({ property, locale }: PropertyPageProps) {
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<UnitType | null>(null);
  const [stickyVisible, setStickyVisible] = useState(true);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!formRef.current) return;
      const rect = formRef.current.getBoundingClientRect();
      setStickyVisible(rect.top > window.innerHeight || rect.bottom < 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/529988457224?text=${encodeURIComponent(`Hola, me interesa ${property.name}`)}`,
      "_blank"
    );
  };

  const handleUnitClick = (unit: UnitType) => {
    setSelectedUnit(unit);
  };

  const handleStickyMainClick = () => {
    if (property.presalePrice) {
      setReserveModalOpen(true);
    } else {
      scrollToContact();
    }
  };

  return (
    <div className="prop-page-wrapper">
      {/* Full-width sections */}
      <PropertyHero
        property={property}
        locale={locale}
        onViewPrices={scrollToContact}
      />

      <PropertyGalleryStrip images={property.images} locale={locale} />

      {/* Constrained content */}
      <div className="prop-page-content">
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

        <div id="contact-form" ref={formRef}>
          <PropertyContactForm
            propertyName={property.name}
            locale={locale}
            brochureUrl={property.brochureUrl}
          />
        </div>
      </div>

      {/* Sticky bar — full width background, centered content */}
      <PropertyStickyBar
        onReserve={handleStickyMainClick}
        onWhatsApp={openWhatsApp}
        onBrochure={() => scrollToContact()}
        locale={locale}
        visible={stickyVisible}
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

      <UnitDetailModal
        unit={selectedUnit}
        locale={locale}
        onClose={() => setSelectedUnit(null)}
        onRequestInfo={() => {
          setSelectedUnit(null);
          setTimeout(() => {
            document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
      />
    </div>
  );
}
