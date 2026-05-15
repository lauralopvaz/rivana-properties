import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { formatUSD } from "@/lib/formatPrice";
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

// ── SEO helpers ──

const seoTitleEsBySlug: Record<string, string> = {
  'mondrian-residences-grand-island-cancun': 'The Residences at Grand Island — Preventa desde $514K USD | Zona Hotelera Cancún | Rivana',
  'dhamar-costa-mujeres': 'Dhamar — Depto en Preventa desde $248K USD | Costa Mujeres Cancún | Rivana',
  'sls-ocean-beach-puerto-cancun': 'SLS Ocean Beach — Residencia desde $1.6M USD | Puerto Cancún | Rivana',
  'the-reserve-at-mayakoba': 'The Reserve at Mayakoba — Preventa desde $1.1M USD | Mayakoba Riviera Maya | Rivana',
  'bay-view-grand-grand-island': 'Bay View Grand at Grand Island — Preventa desde $586K USD | Zona Hotelera Cancún | Rivana',
  'kabeek-marina-condos': 'Kabeek Marina & Condos — Preventa | Zona Hotelera Cancún | Rivana',
  'vellmari-grand-living': 'Vellmari Grand Living — Residencia desde $846K USD | Puerto Cancún | Rivana',
  'village-blu-beach-apartments': 'Village Blu Beach — Depto Frente al Mar desde $273K USD | Puerto Morelos | Rivana',
  'village-blu-beach': 'Village Blu Beach — Depto Frente al Mar desde $273K USD | Puerto Morelos | Rivana',
  'arbolada-towers': 'Arbolada Towers — Entrega Inmediata desde $263K USD | Cancún Centro | Rivana',
  'thompson-residences-puerto-cancun': 'Thompson Residences — Penthouse desde $730K USD | Puerto Cancún | Rivana',
  'sole-blu-ocean-living': 'Sole Blu Ocean Living — Depto Frente al Mar desde $392K USD | Puerto Morelos | Rivana',
  'cuore-cumbres-cancun': 'Cuore Cumbres — Preventa Residencial | Cancún Centro | Rivana',
};

const seoDescEsBySlug: Record<string, string> = {
  'mondrian-residences-grand-island-cancun': 'The Residences at Grand Island en Zona Hotelera Cancún. Operado por Accor, llave en mano, ROI 33%. Desde $514K USD. Asesórate con Rivana.',
  'dhamar-costa-mujeres': 'Dhamar en Costa Mujeres, Cancún. Preventa frente al mar, alberca infinity, vista al manglar. Desde $248K USD. Asesórate con Rivana.',
  'the-reserve-at-mayakoba': 'The Reserve at Mayakoba, Riviera Maya. Golf, wellness y selva. Campo de golf Banyan Tree. Desde $1.1M USD. Asesórate con Rivana Properties.',
  'bay-view-grand-grand-island': 'Bay View Grand en Zona Hotelera Cancún. 40+ amenidades, marina privada, interiores Filipão Nunes. Desde $586K USD. Asesórate con Rivana.',
  'kabeek-marina-condos': 'Kabeek Marina & Condos en Zona Hotelera Cancún. Vista al mar y marina privada, wellness y spa. Preventa exclusiva. Asesórate con Rivana.',
  'vellmari-grand-living': 'Vellmari Grand Living en Puerto Cancún. Residencia de 714 m², vista a la marina, golf y spa. Desde $846K USD. Asesórate con Rivana.',
  'village-blu-beach-apartments': 'Village Blu en Puerto Morelos. Departamentos frente al arrecife, rendimiento estimado 8.8%. Desde $273K USD. Asesórate con Rivana.',
  'village-blu-beach': 'Village Blu en Puerto Morelos. Departamentos frente al arrecife, rendimiento estimado 8.8%. Desde $273K USD. Asesórate con Rivana.',
  'arbolada-towers': 'Arbolada Towers en Cancún Centro. Entrega inmediata, alberca infinity, comunidad cerrada. Desde $263K USD. Asesórate con Rivana Properties.',
  'thompson-residences-puerto-cancun': 'Thompson Residences en Puerto Cancún. Penthouses 5 rec., 803 m², frente al mar y campo de golf. Desde $730K USD. Asesórate con Rivana.',
  'sole-blu-ocean-living': 'Sole Blu Ocean Living en Puerto Morelos. Frente al mar, rendimiento ~10%, beach club privado. Desde $392K USD. Asesórate con Rivana.',
  'cuore-cumbres-cancun': 'Cuore Cumbres en Cancún Centro. Preventa residencial, alberca infinity, pet friendly, comunidad cerrada. Consulta precio con Rivana.',
};

const propertyTypeBySlug: Record<string, { es: string; en: string }> = {
  'mondrian-residences-grand-island-cancun': { es: 'Depto en Preventa', en: 'Pre-Sale Condo' },
  'dhamar-costa-mujeres': { es: 'Depto en Preventa', en: 'Pre-Sale Condo' },
  'sls-ocean-beach-puerto-cancun': { es: 'Penthouse', en: 'Penthouse' },
  'bay-view-grand-grand-island': { es: 'Depto en Preventa', en: 'Pre-Sale Condo' },
  'vellmari-grand-living': { es: 'Residencia', en: 'Residence' },
  'village-blu-beach': { es: 'Depto Frente al Mar', en: 'Beachfront Condo' },
  'arbolada-towers': { es: 'Depto Entrega Inmediata', en: 'Immediate Delivery Condo' },
  'thompson-residences-puerto-cancun': { es: 'Penthouse', en: 'Penthouse' },
  'sole-blu-ocean-living': { es: 'Depto Frente al Mar', en: 'Beachfront Condo' },
  'kabeek-marina-condos': { es: 'Depto en Preventa', en: 'Pre-Sale Condo' },
  'the-reserve-at-mayakoba': { es: 'Residencia', en: 'Residence' },
  'cuore-cumbres-cancun': { es: 'Depto en Preventa', en: 'Pre-Sale Condo' },
};

const differentiatorBySlug: Record<string, { es: string; en: string }> = {
  'mondrian-residences-grand-island-cancun': {
    es: 'Operado por Marca Elite internacional, llave en mano, ROI 33%',
    en: 'Operated by Marca Elite internacional, turnkey, 33% appreciation',
  },
  'dhamar-costa-mujeres': {
    es: 'Preventa frente al mar con alberca infinity',
    en: 'Pre-sale beachfront with infinity pool',
  },
  'sls-ocean-beach-puerto-cancun': {
    es: 'Residencias de lujo SLS Hotels, Arquitectonica + Marca Elite internacional',
    en: 'SLS Hotels luxury residences, Arquitectonica + Marca Elite internacional',
  },
  'bay-view-grand-grand-island': {
    es: '40+ amenidades, interiores Filipão Nunes, ocupación >80%',
    en: '40+ amenities, Filipão Nunes interiors, 80%+ occupancy',
  },
  'vellmari-grand-living': {
    es: 'Vistas 200°, marina privada, 20 amenidades premium',
    en: '200° views, private marina, 20 premium amenities',
  },
  'village-blu-beach': {
    es: 'Frente al mar en Puerto Morelos, gestión OPENKEY',
    en: 'Beachfront Puerto Morelos, OPENKEY management',
  },
  'arbolada-towers': {
    es: 'Comunidad integral ELEVA Capital, 80% vendido',
    en: 'ELEVA Capital integrated community, 80% sold',
  },
  'thompson-residences-puerto-cancun': {
    es: 'By Invitation Only, Thompson Hotels™ / Hyatt™',
    en: 'By Invitation Only, Thompson Hotels™ / Hyatt™',
  },
  'sole-blu-ocean-living': {
    es: 'Frente al mar Puerto Morelos, gestión 100% OPENKEY, ROI ~10%',
    en: 'Beachfront Puerto Morelos, 100% OPENKEY management, ~10% ROI',
  },
  'kabeek-marina-condos': {
    es: 'Solo 23 residencias con muelle privado, Humberto Artigas',
    en: 'Only 23 residences with private dock, Humberto Artigas',
  },
  'the-reserve-at-mayakoba': {
    es: 'Servicios hoteleros Banyan Tree, campo de golf PGA',
    en: 'Banyan Tree hotel services, PGA golf course',
  },
  'cuore-cumbres-cancun': {
    es: 'Uso mixto Live·Work·Enjoy, ELEVA Capital + Métric D',
    en: 'Mixed-use Live·Work·Enjoy, ELEVA Capital + Métric D',
  },
};

function getPropertyType(property: PropertyDetail, locale: Locale): string {
  const mapped = propertyTypeBySlug[property.slug];
  if (mapped) return mapped[locale];
  // Fallback heuristics
  if (property.status === 'entrega-inmediata') return locale === 'en' ? 'Immediate Delivery Condo' : 'Depto Entrega Inmediata';
  const desc = (property.description + ' ' + (property.descriptionEn || '')).toLowerCase();
  if (desc.includes('frente al mar') || desc.includes('beachfront') || desc.includes('oceanfront')) {
    return locale === 'en' ? 'Beachfront Condo' : 'Depto Frente al Mar';
  }
  const hasPenthouse = property.units.some((u) => u.name.includes('Penthouse') || u.name.includes('PH'));
  if (hasPenthouse) return 'Penthouse';
  if (property.name.toLowerCase().includes('residencia') || property.name.toLowerCase().includes('residences')) {
    return locale === 'en' ? 'Residence' : 'Residencia';
  }
  return locale === 'en' ? 'Pre-Sale Condo' : 'Depto en Preventa';
}

function getDifferentiator(property: PropertyDetail, locale: Locale): string {
  const mapped = differentiatorBySlug[property.slug];
  if (mapped) return mapped[locale];
  // Fallback: first differentiator title or first sentence of description
  const firstDiff = property.differentiators?.[0];
  if (firstDiff) {
    return locale === 'en' && firstDiff.titleEn ? firstDiff.titleEn : firstDiff.title;
  }
  const desc = locale === 'en' && property.descriptionEn ? property.descriptionEn : property.description;
  return desc.split('.')[0];
}

function getSeoTitle(property: PropertyDetail, locale: Locale): string {
  if (locale === 'es') {
    const override = seoTitleEsBySlug[property.slug];
    if (override) return override;
  }
  const zone = locale === 'en' && property.zoneEn ? property.zoneEn : property.zone;
  const shortZone = zone.split(',')[0].trim();
  const type = getPropertyType(property, locale);
  const price = formatUSD(property.priceFromUSD);
  return `${property.name} — ${type} desde ${price} | ${shortZone} Cancún | Rivana`;
}

function getSeoDescription(property: PropertyDetail, locale: Locale): string {
  if (locale === 'es') {
    const override = seoDescEsBySlug[property.slug];
    if (override) return override;
  }
  const zone = locale === 'en' && property.zoneEn ? property.zoneEn : property.zone;
  const shortZone = zone.split(',')[0].trim();
  const differentiator = getDifferentiator(property, locale);
  const price = formatUSD(property.priceFromUSD);
  if (locale === 'en') {
    const raw = `${property.name} in ${shortZone}. ${differentiator}. From ${price}. Personalized advisory with Rivana Properties.`;
    return raw.length > 155 ? raw.slice(0, 152) + '...' : raw;
  }
  const raw = `${property.name} en ${shortZone}. ${differentiator}. Desde ${price}. Asesoría personalizada con Rivana Properties.`;
  return raw.length > 155 ? raw.slice(0, 152) + '...' : raw;
}

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
    let ticking = false;
    const measure = () => {
      ticking = false;
      if (!formRef.current) return;
      const rect = formRef.current.getBoundingClientRect();
      setStickyVisible(rect.top > window.innerHeight || rect.bottom < 0);
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(measure);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    measure();
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
  const shortZone = zone.split(',')[0].trim();
  const seoTitle = getSeoTitle(property, locale);
  const seoDesc = getSeoDescription(property, locale);
  const seoPath = locale === 'en' ? `/en/property/${property.slug}` : `/propiedad/${property.slug}`;

  const minBedrooms = property.bedrooms.match(/\d+/)?.[0] ?? undefined;
  const minSqmMatch = property.sqmRange.match(/([\d.]+)/);
  const minSqm = minSqmMatch ? parseFloat(minSqmMatch[1]) : undefined;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Apartment',
    name: property.name,
    description: desc,
    url: `https://rivanaproperties.com${seoPath}`,
    image: property.images?.[0]
      ? (property.images[0].startsWith('http') ? property.images[0] : `https://rivanaproperties.com${property.images[0]}`)
      : undefined,
    ...(minBedrooms ? { numberOfRooms: minBedrooms } : {}),
    ...(minSqm
      ? {
          floorSize: {
            '@type': 'QuantitativeValue',
            value: String(minSqm),
            unitCode: 'MTK',
          },
        }
      : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: zone.split(',')[0].trim(),
      addressRegion: 'Quintana Roo',
      addressCountry: 'MX',
    },
    offers: {
      '@type': 'Offer',
      price: String(Math.round(Number(property.priceFromUSD))),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Rivana Properties',
      },
    },
  };

  return (
    <div className="prop-page-wrapper pt-20">
      <SEOHead
        title={seoTitle}
        description={seoDesc}
        path={seoPath}
        ogImage={property.images?.[0]}
        hreflangEs={`/propiedad/${property.slug}`}
        hreflangEn={`/en/property/${property.slug}`}
        schema={schema}
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
                ? 'The Residences at Grand Island Cancun: Complete 2026 Presale Guide →'
                : 'The Residences at Grand Island Cancun: Guía Completa de Preventa 2026 →'}
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
