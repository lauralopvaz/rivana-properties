import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSchedulingModal } from "@/contexts/SchedulingModalContext";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { LA_AMADA_HERO_IMAGE } from "@/data/immediate-delivery";
import { laAmadaGalleries } from "@/data/la-amada-galleries";
import { UnitGalleryCarousel } from "@/components/UnitGalleryCarousel";
import { waCta } from "@/lib/whatsapp-cta";

type UnitId = "305l" | "205m" | "311l" | "a4203" | "ph07m";

interface Unit {
  id: UnitId;
  code: string;
  name: { es: string; en: string };
  tagline: { es: string; en: string };
  area: string;
  interior: string;
  outdoor: { es: string; en: string };
  bedrooms: { es: string; en: string };
  bathrooms: string;
  parking: string;
  view: { es: string; en: string };
  priceMXN: number;
  priceLabel?: { es: string; en: string };
  status: { es: string; en: string };
  furnished: boolean;
  bestFor: { es: string; en: string };
  highlights: { es: string[]; en: string[] };
  description: { es: string; en: string };
  secondaryCta: { es: string; en: string };
}

const units: Unit[] = [
  {
    id: "305l",
    code: "305L",
    name: { es: "Departamento 305L", en: "Residence 305L" },
    tagline: { es: "1 Recámara · Terraza Privada", en: "1 Bedroom · Private Terrace" },
    area: "169 m²",
    interior: "123 m²",
    outdoor: { es: "46 m² terraza privada", en: "46 m² private terrace" },
    bedrooms: { es: "1 Master Suite", en: "1 Master Suite" },
    bathrooms: "1",
    parking: "2",
    view: { es: "Selva ", en: "Jungle / Lagoon" },
    priceMXN: 9550000,
    status: { es: "Sin amueblar — tu visión", en: "Unfurnished — your vision" },
    furnished: false,
    bestFor: { es: "Refugio personal", en: "Personal retreat" },
    highlights: {
      es: [
        "Vistas panorámicas a la selva tropical",
        "Terraza privada de 46 m² con mobiliario de mimbre",
        "Suite principal con acceso directo a terraza",
        "Pisos de mármol travertino pulido",
        "Cocina gourmet con horno Bosch y parrilla de inducción",
        "Cerradura digital, videoportero y seguridad 24/7",
        "2 cajones de estacionamiento dedicados",
      ],
      en: [
        "Panoramic tropical jungle views",
        "46 m² private terrace with wicker lounge",
        "Master suite with direct terrace access",
        "Polished travertine marble flooring",
        "Gourmet kitchen with Bosch oven & induction cooktop",
        "Digital lock, video intercom & 24/7 security",
        "2 dedicated parking spaces",
      ],
    },
    description: {
      es: "Una residencia distinguida de 169 m² en el enclave más privilegiado de La Amada. La suite principal se abre directamente a una terraza privada de 46 m², creando un diálogo continuo entre el interior y el vibrante paisaje caribeño. Sin amueblar, espera tu visión personal de elegancia.",
      en: "A distinguished 169 m² residence in La Amada's most privileged enclave. The master suite opens onto a sprawling 46 m² private terrace, creating a seamless dialogue between interior comfort and the vibrant Caribbean landscape. Unfurnished — ready for your own vision of elegance.",
    },
    secondaryCta: { es: "Descubre tu Santuario en la Selva", en: "Discover Your Jungle Sanctuary" },
  },
  {
    id: "205m",
    code: "205M",
    name: { es: "Departamento 205M", en: "Residence 205M" },
    tagline: { es: "1 Recámara · Vista al Caribe", en: "1 Bedroom · Caribbean View" },
    area: "105 m²",
    interior: "105 m²",
    outdoor: { es: "Balcón privado", en: "Private balcony" },
    bedrooms: { es: "1 Master Suite", en: "1 Master Suite" },
    bathrooms: "1.5",
    parking: "2",
    view: { es: "Mar Caribe & jardines", en: "Caribbean Sea & gardens" },
    priceMXN: 12000000,
    status: { es: "Amueblada — lista para habitar", en: "Furnished — move-in ready" },
    furnished: true,
    bestFor: { es: "Inversionista / rental", en: "Investor / rental" },
    highlights: {
      es: [
        "Vestidor en la recámara principal",
        "Balcón con vista al Mar Caribe",
        "Pisos de mármol pulido",
        "Cocina gourmet con acero inoxidable",
        "Totalmente amueblada con piezas de diseñador",
        "Programa opcional de renta vacacional ($48k MXN/año)",
        "2 cajones de estacionamiento dedicados",
      ],
      en: [
        "Walk-in closet in master bedroom",
        "Balcony with Caribbean Sea views",
        "Polished marble flooring",
        "Gourmet kitchen with stainless steel appliances",
        "Fully furnished with designer pieces",
        "Optional vacation rental program ($48k MXN/year)",
        "2 dedicated parking spaces",
      ],
    },
    description: {
      es: "Un santuario privilegiado junto al Mar Caribe. 105 m² donde las aguas turquesas y el paisaje tropical definen la vida cotidiana. Totalmente amueblada con piezas de diseñador y equipada con todos los electrodomésticos: muévete o renta de inmediato sin inversión adicional.",
      en: "A privileged sanctuary by the Caribbean Sea. 105 m² where turquoise waters and lush tropical landscapes define everyday life. Fully furnished with designer pieces and equipped with every appliance — move in or rent immediately with zero additional investment.",
    },
    secondaryCta: { es: "Activa el Potencial de Renta", en: "Unlock Rental Income Potential" },
  },
  {
    id: "311l",
    code: "311L",
    name: { es: "Departamento 311L", en: "Residence 311L" },
    tagline: { es: "2 Recámaras · 220 m² · Lock-Off", en: "2 Bedrooms · 220 m² · Lock-Off" },
    area: "220 m²",
    interior: "180 m²",
    outdoor: { es: "40 m² terraza privada", en: "40 m² private terrace" },
    bedrooms: { es: "2 (Master + Lock-Off)", en: "2 (Master + Lock-Off)" },
    bathrooms: "2",
    parking: "1",
    view: { es: "Parcial al Caribe & jardines", en: "Partial Caribbean & gardens" },
    priceMXN: 10500000,
    priceLabel: { es: "Antes $12.8M MXN", en: "Was $12.8M MXN" },
    status: { es: "Amueblada — reducción de $2.3M", en: "Furnished — $2.3M reduction" },
    furnished: true,
    bestFor: { es: "Familias / ingreso por renta", en: "Family / rental income" },
    highlights: {
      es: [
        "Configuración lock-off — ideal para renta o privacidad",
        "Dos recámaras independientes con acceso separado",
        "Terraza privada de 40 m² con vistas a jardines",
        "Pisos premium tipo mármol",
        "Cocina integral de alta gama con paquete completo",
        "Área de lavandería privada y bodega",
        "1 cajón de estacionamiento",
        "Reducción excepcional: de $12.8M a $10.5M MXN",
      ],
      en: [
        "Lock-off configuration — ideal for rental or guest privacy",
        "Two independent bedrooms with separate access",
        "40 m² private terrace with garden views",
        "Premium marble-look flooring",
        "Fully fitted integrated kitchen with full appliance package",
        "Private laundry area and storage room",
        "1 parking space",
        "Exceptional price reduction: from $12.8M to $10.5M MXN",
      ],
    },
    description: {
      es: "Una inversión excepcional junto al Caribe. 180 m² de residencia más 40 m² de terraza privada en una de las comunidades más exclusivas de la costa. Configuración lock-off ideal para generar ingresos por renta o privacidad de huéspedes, totalmente amueblada y significativamente reducida de precio.",
      en: "An exceptional investment by the Caribbean. 180 m² of residence plus a 40 m² private terrace in one of the most exclusive beachfront communities on the coast. Lock-off layout ideal for rental income or guest privacy, fully furnished and significantly reduced in price.",
    },
    secondaryCta: { es: "Tu Refugio Familiar Caribeño", en: "Own Your Caribbean Family Haven" },
  },
  {
    id: "a4203",
    code: "A4-203",
    name: { es: "Departamento A4-203", en: "Residence A4-203" },
    tagline: { es: "3 Recámaras · Vista al Mar · 301 m²", en: "3 Bedrooms · Ocean View · 301 m²" },
    area: "301 m²",
    interior: "248 m²",
    outdoor: { es: "53 m² terraza", en: "53 m² terrace" },
    bedrooms: { es: "3 + cuarto de servicio con baño", en: "3 + service room with bathroom" },
    bathrooms: "3.5",
    parking: "2",
    view: { es: "Al Mar", en: "Ocean view" },
    priceMXN: 30000000,
    status: { es: "Amueblada — lista para habitar", en: "Furnished — move-in ready" },
    furnished: true,
    bestFor: { es: "Familias / ingreso por renta / inversión", en: "Families / rental income / investment" },
    highlights: {
      es: [
        "301 m² totales: 248 m² interiores + 53 m² de terraza",
        "3 recámaras más cuarto de servicio con baño propio",
        "3 baños y medio, adicionales al baño de servicio",
        "Vista directa al Mar Caribe",
        "Entregada totalmente amueblada",
        "2 cajones de estacionamiento",
        "Acceso completo al club de playa y marina",
      ],
      en: [
        "301 m² total: 248 m² interior + 53 m² terrace",
        "3 bedrooms plus service room with private bathroom",
        "3.5 bathrooms, in addition to the service bathroom",
        "Direct Caribbean Sea views",
        "Delivered fully furnished",
        "2 parking spaces",
        "Full access to the private beach club and marina",
      ],
    },
    description: {
      es: "La residencia más amplia de nuestra selección en La Amada: 301 m² totales con 248 m² de interiores y una terraza de 53 m² con vista al mar. Tres recámaras más cuarto de servicio con baño la convierten en una opción ideal para familias, ingreso por renta o inversión patrimonial. Se entrega totalmente amueblada.",
      en: "The largest residence in our La Amada selection: 301 m² total with 248 m² of interiors and a 53 m² ocean-view terrace. Three bedrooms plus a service room with its own bathroom make it ideal for families, rental income or long-term investment. Delivered fully furnished.",
    },
    secondaryCta: { es: "Descubre la Residencia A4-203", en: "Discover Residence A4-203" },
  },
  {
    id: "ph07m",
    code: "PH 07M",
    name: { es: "Penthouse 07M", en: "Penthouse 07M" },
    tagline: { es: "Master Suite · Rooftop Privado", en: "Master Suite · Private Rooftop" },
    area: "202 m²",
    interior: "172 m²",
    outdoor: { es: "Rooftop privado", en: "Private rooftop terrace" },
    bedrooms: { es: "1 Master Suite", en: "1 Master Suite" },
    bathrooms: "1",
    parking: "2",
    view: { es: "Marina & Mar Caribe", en: "Marina & Caribbean Sea" },
    priceMXN: 11900000,
    status: { es: "Amueblado de diseñador — llave en mano", en: "Designer furnished — turnkey" },
    furnished: true,
    bestFor: { es: "Lujo / turnkey", en: "Luxury / turnkey" },
    highlights: {
      es: [
        "Terraza rooftop exclusiva con vistas panorámicas",
        "Vistas inobstruidas a marina y Mar Caribe",
        "Vestidor amplio en la recámara principal",
        "Baño premium con doble lavabo",
        "Cocina gourmet con electrodomésticos de diseñador",
        "Totalmente amueblado con piezas curadas",
        "2 cajones de estacionamiento independientes",
      ],
      en: [
        "Exclusive rooftop terrace with panoramic views",
        "Unobstructed marina and Caribbean Sea views",
        "Spacious walk-in closet in master suite",
        "Premium double-sink master bathroom",
        "Gourmet kitchen with designer appliances",
        "Fully furnished with curated designer pieces",
        "2 independent parking spaces",
      ],
    },
    description: {
      es: "Un penthouse distinguido sobre el Caribe. 202 m² totales con 172 m² de interior refinado y una expansiva terraza rooftop privada con vistas panorámicas a marina y mar. Entregado totalmente amueblado con piezas de diseñador: la experiencia penthouse definitiva.",
      en: "A distinguished penthouse above the Caribbean. 202 m² total with 172 m² of refined interior and a sprawling private rooftop terrace with panoramic marina and sea views. Delivered fully furnished with designer pieces — the ultimate penthouse experience.",
    },
    secondaryCta: { es: "Vive el Lujo Penthouse", en: "Experience Penthouse Luxury" },
  },
];

const amenities = {
  es: [
    "Club de playa privado",
    "Albercas en rooftop",
    "Playa privada",
    "Canchas de tenis y pádel",
    "Estudio de yoga",
    "Centro fitness",
    "Acceso a marina",
    "Kids club & ludoteca",
    "Campo de golf",
    "Restaurante",
    "Business center",
    "Seguridad 24/7",
  ],
  en: [
    "Private beach club",
    "Rooftop pools",
    "Private beach",
    "Tennis & paddle courts",
    "Yoga studio",
    "Fitness center",
    "Marina access",
    "Kids club",
    "Golf course",
    "Restaurant",
    "Business center",
    "24/7 security",
  ],
};

const formatMXN = (n: number) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);

const WHATSAPP = "https://wa.me/529988457224";

export default function LaAmada() {
  const { language, isEnglish } = useLanguage();
  const { openModal } = useSchedulingModal();
  const [selected, setSelected] = useState<UnitId[]>([]);

  const t = (es: string, en: string) => (language === "en" ? en : es);

  const toggleCompare = (id: UnitId) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 4 ? [...prev, id] : prev
    );
  };

  const compareUnits = selected.length > 0 ? units.filter((u) => selected.includes(u.id)) : units;

  const path = isEnglish ? "/en/costa-mujeres/la-amada" : "/costa-mujeres/la-amada";

  const unitWaUrl = (u: Unit) =>
    `${WHATSAPP}?text=${encodeURIComponent(
      isEnglish
        ? `Hi Rivana, I'd like to schedule an appointment for La Amada — Unit ${u.code} (${u.name.en}, ${formatMXN(u.priceMXN)}), Costa Mujeres.`
        : `Hola Rivana, quiero agendar una cita para La Amada — Unidad ${u.code} (${u.name.es}, ${formatMXN(u.priceMXN)}), Costa Mujeres.`
    )}&utm_source=web&utm_medium=whatsapp&utm_campaign=lead&utm_content=${`la-amada-unit-${u.id}`}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "La Amada Residences",
    address: { "@type": "PostalAddress", addressLocality: "Costa Mujeres", addressRegion: "Quintana Roo", addressCountry: "MX" },
    numberOfAccommodationUnits: 4,
    amenityFeature: amenities.en.map((a) => ({ "@type": "LocationFeatureSpecification", name: a })),
  };

  return (
    <main className="bg-background text-foreground">
      <SEOHead
        title={t(
          "La Amada Residences · Costa Mujeres | Rivana Properties",
          "La Amada Residences · Costa Mujeres | Rivana Properties"
        )}
        description={t(
          "5 residencias exclusivas en La Amada, Costa Mujeres. Selección Premium por Rivana. Penthouse, lock-off y suites frente al Caribe. Desde $9.55M MXN.",
          "5 exclusive residences at La Amada, Costa Mujeres. Premium Selection by Rivana. Penthouse, lock-off and seaside suites on the Caribbean. From $9.55M MXN."
        )}
        path={path}
        hreflangEs="/costa-mujeres/la-amada"
        hreflangEn="/en/costa-mujeres/la-amada"
        schema={schema}
      />

      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `linear-gradient(160deg, rgba(28,28,28,0.55) 0%, rgba(28,28,28,0.15) 55%, rgba(28,28,28,0.75) 100%), url('${LA_AMADA_HERO_IMAGE}')`,
          }}
          aria-hidden
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 text-white w-full">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-6" style={{ color: "#CFAE60" }}>
            {t("Costa Mujeres · Cancún", "Costa Mujeres · Cancún")}
          </p>
          <h1 className="font-display font-light leading-[0.95] mb-6" style={{ fontSize: "clamp(44px, 7vw, 92px)" }}>
            La Amada Residences
          </h1>
          <p className="font-body font-light max-w-2xl mb-10" style={{ fontSize: "22px", lineHeight: 1.6 }}>
            {t(
              "Cinco residencias distinguidas dentro del complejo más exclusivo del Caribe Mexicano. Selección Premium por Rivana.",
              "Five distinguished residences within the Mexican Caribbean's most exclusive complex. Premium Selection by Rivana."
            )}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => openModal()}
              className="rounded-none"
            >
              {t("Agenda Asesoría Premium", "Schedule Premium Advisory")}
            </Button>
            <a
              href="#units"
              className="inline-flex items-center justify-center px-10 h-14 border border-white/40 text-white font-body text-sm tracking-wide hover:bg-white/10 transition"
            >
              {t("Explorar Unidades", "Explore Units")}
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 lg:py-32 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-6" style={{ color: "#CFAE60" }}>
            {t("Selección Premium", "Premium Selection")}
          </p>
          <h2 className="font-display font-light mb-8" style={{ fontSize: "clamp(40px, 4.5vw,52px)", lineHeight: 1.15 }}>
            {t(
              "Cinco residencias. Una visión intemporal del Caribe.",
              "Five residences. One timeless Caribbean vision."
            )}
          </h2>
          <p className="font-body font-light text-muted-foreground" style={{ fontSize: "21px", lineHeight: 1.75 }}>
            {t(
              "De un refugio sobre la selva a un penthouse frente al mar, cada residencia en La Amada ofrece una expresión distinta del lujo caribeño — todas con acceso al club de playa privado, marina y amenidades de cinco estrellas.",
              "From a jungle-top retreat to a beachfront penthouse, each La Amada residence offers a distinct expression of Caribbean luxury — all with access to the private beach club, marina and five-star amenities."
            )}
          </p>
        </div>
      </section>

      {/* UNITS */}
      <section id="units" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {units.map((u) => (
              <article key={u.id} className="bg-background flex flex-col">
                {laAmadaGalleries[u.id]?.length > 0 && (
                  <UnitGalleryCarousel images={laAmadaGalleries[u.id]} language={language} />
                )}
                <div className="p-8 lg:p-12 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-display font-light" style={{ fontSize: "34px", lineHeight: 1.1, color: "#CFAE60" }}>
                      {u.name[language]}
                    </h3>
                    <p className="font-body font-light text-muted-foreground mt-2" style={{ fontSize: "17px" }}>
                      {u.tagline[language]}
                    </p>
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={selected.includes(u.id)}
                      onChange={() => toggleCompare(u.id)}
                      className="accent-primary w-4 h-4"
                      aria-label={t("Comparar", "Compare")}
                    />
                    <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                      {t("Comparar", "Compare")}
                    </span>
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-4 py-6 border-y border-border mb-6">
                  <Stat label={t("Área total", "Total area")} value={u.area} />
                  <Stat label={t("Recámaras", "Bedrooms")} value={u.bedrooms[language]} />
                  <Stat label={t("Baños", "Bathrooms")} value={u.bathrooms} />
                  <Stat label={t("Estacionamiento", "Parking")} value={u.parking} />
                  <Stat label={t("Exterior", "Outdoor")} value={u.outdoor[language]} />
                  <Stat label={t("Vista", "View")} value={u.view[language]} />
                </div>

                <p className="font-body font-light text-muted-foreground mb-6" style={{ fontSize: "18px", lineHeight: 1.7 }}>
                  {u.description[language]}
                </p>

                <ul className="space-y-2 mb-8">
                  {u.highlights[language].slice(0, 5).map((h) => (
                    <li key={h} className="flex gap-3 font-body" style={{ fontSize: "17px", lineHeight: 1.6 }}>
                      <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: "#CFAE60" }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-border">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <span className="font-body uppercase tracking-wider text-muted-foreground" style={{ fontSize: "14px", fontWeight: 700 }}>
                      {t("Desde", "From")}
                    </span>
                    <span className="font-body uppercase tracking-wider" style={{ color: "#CFAE60", fontSize: "14px", fontWeight: 700 }}>
                      {u.status[language]}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="font-display font-bold" style={{ fontSize: "34px" }}>
                      {formatMXN(u.priceMXN)}
                    </span>
                    {u.priceLabel && (
                      <span className="font-body text-muted-foreground line-through" style={{ fontSize: "16px" }}>
                        {u.priceLabel[language]}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={unitWaUrl(u)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t(
                        `Escribir por WhatsApp sobre la unidad ${u.code} en La Amada`,
                        `Message on WhatsApp about Unit ${u.code} at La Amada`
                      )}
                      className="flex-1 inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#25D366] text-[#1C1C1C] font-body text-sm tracking-wide hover:brightness-95 transition"
                    >
                      <svg viewBox="0 0 256 256" className="w-4 h-4 shrink-0" aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M128.5 54c-40.9 0-74.1 33.2-74.1 74.1 0 13.1 3.4 25.9 9.9 37.2L54 202l37.6-9.8a74 74 0 0 0 36.9 9.4h.1c40.8 0 74.1-33.2 74.1-74.1 0-19.8-7.7-38.4-21.7-52.4A73.7 73.7 0 0 0 128.5 54zm33.8 89.8c-1.8-.9-10.9-5.4-12.6-6-1.7-.6-2.9-.9-4.1.9s-4.7 6-5.8 7.2c-1.1 1.2-2.1 1.4-3.9.5-1.8-.9-7.8-2.9-14.9-9.2-5.5-4.9-9.2-10.9-10.3-12.7-1.1-1.8-.1-2.8.8-3.7.8-.8 1.8-2.1 2.7-3.2.9-1.1 1.2-1.8 1.8-3 .6-1.2.3-2.3-.2-3.2-.5-.9-4.1-9.9-5.7-13.5-1.5-3.6-3-3.1-4.1-3.1l-3.5-.1c-1.2 0-3.2.5-4.9 2.3-1.7 1.8-6.4 6.3-6.4 15.3 0 9 6.6 17.7 7.5 19 .9 1.2 13 19.8 31.5 27.8 4.4 1.9 7.8 3 10.5 3.9 4.4 1.4 8.4 1.2 11.6.7 3.5-.5 10.9-4.5 12.5-8.8 1.5-4.3 1.5-8 1.1-8.8-.5-.8-1.6-1.2-3.4-2.1z"
                        />
                      </svg>
                      {waCta(language, "info")}
                    </a>
                    <button
                      onClick={() => openModal()}
                      className="inline-flex items-center justify-center h-12 px-6 border border-foreground/30 font-body text-sm tracking-wide hover:border-primary hover:text-primary transition"
                    >
                      {t("Agendar visita", "Schedule visit")}
                    </button>
                  </div>
                </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24 lg:py-32 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12 max-w-3xl">
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#CFAE60" }}>
              {t("Comparativo", "Comparison")}
            </p>
            <h2 className="font-display font-light mb-4" style={{ fontSize: "clamp(40px, 4vw,46px)", lineHeight: 1.15 }}>
              {t("Lado a lado", "Side by side")}
            </h2>
            <p className="font-body font-light text-muted-foreground" style={{ fontSize: "19px", lineHeight: 1.7 }}>
              {selected.length > 0
                ? t(
                    `Mostrando ${selected.length} unidades seleccionadas. Desmarca para ver todas.`,
                    `Showing ${selected.length} selected units. Uncheck to view all.`
                  )
                : t("Selecciona unidades arriba para comparar, o revisa las cinco.", "Select units above to compare, or review all five.")}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-foreground/20">
                  <th className="text-left py-5 pr-6 font-body text-xs uppercase tracking-wider text-muted-foreground">
                    {t("Característica", "Feature")}
                  </th>
                  {compareUnits.map((u) => (
                    <th key={u.id} className="text-left py-5 px-4 font-display font-light" style={{ fontSize: "20px" }}>
                      <div className="text-xs uppercase tracking-[0.2em] mb-1" style={{ color: "#CFAE60" }}>
                        {u.code}
                      </div>
                      {u.name[language]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-body" style={{ fontSize: "17px" }}>
                <Row label={t("Área total", "Total area")} values={compareUnits.map((u) => u.area)} />
                <Row label={t("Interior", "Interior")} values={compareUnits.map((u) => u.interior)} />
                <Row label={t("Exterior", "Outdoor")} values={compareUnits.map((u) => u.outdoor[language])} />
                <Row label={t("Recámaras", "Bedrooms")} values={compareUnits.map((u) => u.bedrooms[language])} />
                <Row label={t("Baños", "Bathrooms")} values={compareUnits.map((u) => u.bathrooms)} />
                <Row label={t("Estacionamiento", "Parking")} values={compareUnits.map((u) => u.parking)} />
                <Row label={t("Vista", "View")} values={compareUnits.map((u) => u.view[language])} />
                <Row label={t("Lock-Off", "Lock-Off")} values={compareUnits.map((u) => (u.id === "311l" ? t("Sí", "Yes") : "—"))} />
                <Row
                  label={t("Amueblado", "Furnished")}
                  values={compareUnits.map((u) => (u.furnished ? t("Sí", "Yes") : t("No", "No")))}
                />
                <Row label={t("Ideal para", "Best for")} values={compareUnits.map((u) => u.bestFor[language])} />
                <tr className="border-t border-foreground/20">
                  <td className="py-5 pr-6 font-body uppercase tracking-wider text-muted-foreground" style={{ fontSize: "14px", fontWeight: 600 }}>
                    {t("Precio", "Price")}
                  </td>
                  {compareUnits.map((u) => (
                    <td key={u.id} className="py-5 px-4 font-display font-light" style={{ fontSize: "22px", color: "#CFAE60", fontWeight: 600 }}>
                      {formatMXN(u.priceMXN)}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-border">
                  <td className="py-5 pr-6 font-body text-xs uppercase tracking-wider text-muted-foreground">
                    {t("Contacto", "Contact")}
                  </td>
                  {compareUnits.map((u) => (
                    <td key={u.id} className="py-5 px-4">
                      <a
                        href={unitWaUrl(u)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t(
                          `Escribir por WhatsApp sobre la unidad ${u.code} en La Amada`,
                          `Message on WhatsApp about Unit ${u.code} at La Amada`
                        )}
                        className="inline-flex items-center justify-center h-10 px-4 bg-[#25D366] text-[#1C1C1C] font-body text-xs tracking-wide hover:brightness-95 transition"
                      >
                        {waCta(language, "info")}
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#CFAE60" }}>
                {t("Estilo de Vida", "Lifestyle")}
              </p>
              <h2 className="font-display font-light mb-6" style={{ fontSize: "clamp(40px, 4vw,46px)", lineHeight: 1.15 }}>
                {t("Amenidades La Amada", "La Amada amenities")}
              </h2>
              <p className="font-body font-light text-muted-foreground" style={{ fontSize: "20px", lineHeight: 1.75 }}>
                {t(
                  "Acceso completo al club de playa privado, marina y experiencias resort de cinco estrellas — todo dentro de una de las comunidades más reservadas del Caribe Mexicano.",
                  "Full access to the private beach club, marina and five-star resort experiences — all within one of the most reserved communities on the Mexican Caribbean."
                )}
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
              {amenities[language].map((a) => (
                <li key={a} className="flex gap-3 font-body" style={{ fontSize: "17px" }}>
                  <span className="w-1 h-1 mt-3 rounded-full shrink-0" style={{ background: "#CFAE60" }} />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#1C1C1C] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-6" style={{ color: "#CFAE60" }}>
            {t("Tu inversión, tu legado", "Your investment, your legacy")}
          </p>
          <h2 className="font-display font-light mb-8" style={{ fontSize: "clamp(40px, 5vw,56px)", lineHeight: 1.1 }}>
            {t("Reserva tu residencia en La Amada", "Reserve your La Amada residence")}
          </h2>
          <p className="font-body font-light text-white/70 mb-12 max-w-2xl mx-auto" style={{ fontSize: "20px", lineHeight: 1.7 }}>
            {t(
              "Cada consulta es atendida personalmente por un asesor Rivana — no un chatbot, no un call center.",
              "Every inquiry is handled personally by a Rivana advisor — not a chatbot, not a call center."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent(
                isEnglish
                  ? "Hi Rivana, I'd like to learn more about La Amada Residences."
                  : "Hola Rivana, me gustaría conocer más sobre La Amada Residences."
              )}&utm_source=web&utm_medium=whatsapp&utm_campaign=lead&utm_content=la-amada-cta`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-10 font-body text-sm tracking-wide hover:brightness-110 transition bg-slate-100 text-slate-800"
            >
              {waCta(language, "recibir")}
            </a>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center h-14 px-10 border font-body text-sm tracking-wide transition"
              style={{ borderColor: "#CFAE60", color: "#CFAE60" }}
            >
              {t("Agendar Asesoría Premium", "Schedule Premium Advisory")}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="font-body uppercase tracking-[0.16em] text-muted-foreground mb-1" style={{ fontSize: "13px", fontWeight: 600 }}>
      {label}
    </p>
    <p className="font-body font-bold" style={{ fontSize: "13px", lineHeight: 1.3 }}>
      {value}
    </p>
  </div>
);


const Row = ({ label, values }: { label: string; values: string[] }) => (
  <tr className="border-b border-border">
    <td className="py-4 pr-6 font-body uppercase tracking-wider text-muted-foreground align-top" style={{ fontSize: "14px", fontWeight: 600 }}>{label}</td>
    {values.map((v, i) => (
      <td key={i} className="py-4 px-4 align-top">
        {v}
      </td>
    ))}
  </tr>
);