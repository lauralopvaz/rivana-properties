import { useRef } from "react";
import type { PropertyDetail, UnitType } from "@/types/property";
import { PropertyHero } from "./PropertyHero";
import { PropertyGalleryStrip } from "./PropertyGalleryStrip";
import { PropertyTabs } from "./PropertyTabs";
import { PropertyPresalePrice } from "./PropertyPresalePrice";
import { PropertyDifferentiators } from "./PropertyDifferentiators";
import { PropertyContactForm } from "./PropertyContactForm";
import { PropertyStickyBar } from "./PropertyStickyBar";

interface PropertyPageProps {
  property: PropertyDetail;
}

export function PropertyPage({ property }: PropertyPageProps) {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/529981234567?text=${encodeURIComponent(`Hola, me interesa ${property.name}`)}`,
      "_blank"
    );
  };

  const handleUnitClick = (unit: UnitType) => {
    scrollToContact();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <PropertyHero
          name={property.name}
          zone={property.zone}
          status={property.status}
          priceFromUSD={property.priceFromUSD}
          bedrooms={property.bedrooms}
          sqmRange={property.sqmRange}
          delivery={property.delivery}
          roiEstimate={property.roiEstimate}
          images={property.images}
          onViewPrices={scrollToContact}
        />

        <PropertyGalleryStrip images={property.images} />

        <PropertyTabs
          description={property.description}
          units={property.units}
          features={property.features}
          distances={property.distances}
          onUnitClick={handleUnitClick}
        />

        {property.presalePrice && (
          <PropertyPresalePrice
            presalePrice={property.presalePrice}
            onReserve={scrollToContact}
            onWhatsApp={openWhatsApp}
          />
        )}

        {property.differentiators && property.differentiators.length > 0 && (
          <PropertyDifferentiators
            differentiators={property.differentiators}
            roiEstimate={property.roiEstimate}
            plusvaliaEstimate={property.plusvaliaEstimate}
          />
        )}

        <div ref={contactRef}>
          <PropertyContactForm propertyName={property.name} />
        </div>
      </div>

      <PropertyStickyBar
        onReserve={scrollToContact}
        onWhatsApp={openWhatsApp}
        onBrochure={() => {
          // TODO: implement brochure download
          scrollToContact();
        }}
      />
    </div>
  );
}
