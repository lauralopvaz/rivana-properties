import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
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

  // Locale-aware SEO
  const zone = locale === 'en' && property.zoneEn ? property.zoneEn : property.zone;
  const desc = locale === 'en' && property.descriptionEn ? property.descriptionEn : property.description;
  // Use seoTitle override if available, otherwise auto-generate
  const seoTitleOverride = locale === 'en' ? property.seoTitleEn : property.seoTitle;
  const shortZone = zone.split(',')[0].trim();
  const seoTitle = seoTitleOverride || `${property.name} — ${shortZone} | Rivana`;
  const seoDesc = desc ? desc.slice(0, 155) : (locale === 'en'
    ? `${property.name} in ${zone}. Luxury real estate advisory with Rivana Properties.`
    : `${property.name} en ${zone}. Asesoría inmobiliaria de lujo con Rivana Properties.`);
  const seoPath = locale === 'en' ? `/en/property/${property.slug}` : `/propiedad/${property.slug}`;

  return (
    <div className="prop-page-wrapper pt-20">
      <SEOHead
        title={seoTitle}
        description={seoDesc}
        path={seoPath}
        ogImage={property.images?.[0]}
        hreflangEs={`/propiedad/${property.slug}`}
        hreflangEn={`/en/property/${property.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          name: property.name,
          description: seoDesc,
          url: `https://rivanaproperties.com${seoPath}`,
          image: property.images?.[0] ? (property.images[0].startsWith('http') ? property.images[0] : `https://rivanaproperties.com${property.images[0]}`) : undefined,
          datePosted: "2025-01-01",
          offers: {
            "@type": "Offer",
            price: String(Math.round(Number(property.priceFromUSD))),
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: zone.split(',')[0].trim(),
            addressRegion: "Quintana Roo",
            addressCountry: "MX",
          },
        }}
      />
      {/* Full-width sections */}
      <PropertyHero
        property={property}
        locale={locale}
        onViewPrices={scrollToContact}
      />

      <PropertyGalleryStrip images={property.images} propertyName={property.name} zone={zone} locale={locale} />

      {/* Constrained content */}
      <div
        className="prop-page-content"
        style={{
          overflow: 'visible',
          height: 'auto',
        }}
      >
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

        {/* Journal link for Mondrian */}
        {property.slug === 'mondrian-residences-grand-island-cancun' && (
          <section className="my-12 bg-card border border-border rounded-sm p-6">
            <h3 className="text-lg text-foreground mb-2">
              {locale === 'en' ? 'Full investment analysis' : 'Análisis completo de inversión'}
            </h3>
            <p className="text-sm text-muted-foreground font-body mb-4">
              {locale === 'en'
                ? 'Read our detailed guide on the rebranding, market context, and presale numbers.'
                : 'Lee nuestra guía detallada sobre el relanzamiento, el contexto de mercado y los números de la preventa.'}
            </p>
            <Link
              to={locale === 'en' ? '/en/journal/mondrian-residences-grand-island-cancun-presale' : '/journal/mondrian-residences-grand-island-cancun-preventa'}
              className="text-primary hover:text-primary/80 font-body text-sm transition-colors"
            >
              {locale === 'en'
                ? 'Mondrian Residences: Complete 2026 Presale Guide →'
                : 'Mondrian Residences: Guía Completa de Preventa 2026 →'}
            </Link>
          </section>
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
