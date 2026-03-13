import { useParams } from "react-router-dom";
import { PropertyPage } from "@/components/property/PropertyPage";
import type { PropertyDetail } from "@/types/property";

import heroImg from "@/assets/prop-oceana.jpg";
import img2 from "@/assets/prop-marina.jpg";
import img3 from "@/assets/prop-jade.jpg";
import img4 from "@/assets/prop-selva.jpg";

const exampleProperty: PropertyDetail = {
  id: "oceana-residences",
  name: "Oceana Residences",
  zone: "Costa Mujeres · Playa Mujeres",
  status: "preventa",
  priceFromUSD: 195000,
  priceFromMXN: 3412500,
  bedrooms: "1–3",
  sqmRange: "65–245 m²",
  delivery: "Q4 2027",
  roiEstimate: 10,
  plusvaliaEstimate: 18,
  images: [heroImg, img2, img3, img4],
  description:
    "Oceana Residences es un desarrollo de lujo frente al mar en Playa Mujeres. Torre de 12 pisos con 120 unidades, beach club privado, campo de golf y las mejores vistas al Caribe en Costa Mujeres. Ubicación estratégica a 25 minutos del aeropuerto y con acceso directo a la playa más exclusiva de la Riviera Maya.",
  amenities: [
    "Alberca Infinity",
    "Beach Club",
    "Concierge 24/7",
    "Gimnasio",
    "Smart Home",
    "Co-Working",
    "Carga EV",
    "Pet Friendly",
    "Área Infantil",
    "Spa & Wellness",
  ],
  features: [
    "Alberca Infinity",
    "Beach Club",
    "Concierge 24/7",
    "Gimnasio",
    "Smart Home",
    "Co-Working",
    "Carga EV",
    "Pet Friendly",
    "Área Infantil",
    "Spa & Wellness",
  ],
  units: [
    { name: "Studio", sqm: 55, priceMXN: 4200000, available: 34 },
    { name: "1 Recámara", sqm: 85, priceMXN: 6800000, available: 41 },
    { name: "2 Recámaras", sqm: 140, priceMXN: 9500000, available: 18 },
    { name: "Penthouse", sqm: 245, priceMXN: 12500000, available: 3 },
  ],
  distances: [
    { label: "Aeropuerto 25 min", icon: "Plane" },
    { label: "Playa Directa", icon: "Waves" },
    { label: "Golf 5 min", icon: "Flag" },
    { label: "Plaza 10 min", icon: "ShoppingBag" },
    { label: "Marina 8 min", icon: "Anchor" },
    { label: "Centro 35 min", icon: "MapPin" },
  ],
  presalePrice: {
    originalMXN: 2450000,
    discountMXN: 2150000,
    deadlineDate: "2026-06-30",
    priceIncreasePercent: 12,
  },
  differentiators: [
    {
      type: "roi",
      layout: "featured",
      title: "Renta vacacional de alto retorno",
      description:
        "Zona con 85% de ocupación promedio. Plusvalía adicional estimada del 18% a entrega en Q4 2027.",
      stat: "10%",
      statLabel: "anual",
      pills: ["Airbnb Ready", "Adm. incluida", "Alta ocupación"],
    },
    {
      type: "vista",
      layout: "grid",
      title: "Vista 360° al Mar Caribe",
      description: "Piso 10. Vistas al mar en 3 orientaciones. Única en el edificio.",
    },
    {
      type: "entrega",
      layout: "grid",
      title: "Se Entrega Amueblada",
      description: "Muebles de diseño incluidos. Lista para habitar o rentar desde el día 1.",
    },
    {
      type: "amenidad",
      layout: "grid",
      title: "Alberca Privada en el Piso",
      description: "Acceso exclusivo a la alberca del nivel 8. No es la alberca general.",
    },
    {
      type: "exclusivo",
      layout: "grid",
      title: "Sin Mantenimiento 24 Meses",
      description: "El desarrollador cubre las cuotas. Ahorro aprox. $48,000 MXN.",
    },
    {
      type: "exclusivo",
      layout: "wide",
      title: "Doble Altura en Sala · 5.2 m",
      description:
        "Ventanales de piso a techo. Sensación única de amplitud y luz natural todo el día.",
    },
    {
      type: "amenidad",
      layout: "wide",
      title: "Frente al Campo de Golf",
      description:
        "Vista directa al campo de golf de Playa Mujeres. Paisaje verde permanente sin construcciones.",
    },
    {
      type: "amenidad",
      layout: "wide",
      title: "Spa & Wellness Incluido",
      description:
        "Acceso sin costo al spa del hotel adyacente durante el primer año. Valor estimado $24,000 MXN.",
    },
  ],
};

// Map of slugs to properties — expand as needed
const PROPERTIES: Record<string, PropertyDetail> = {
  "oceana-residences": exampleProperty,
};

export default function PropertyDetailNew() {
  const { slug } = useParams<{ slug: string }>();
  const property = slug ? PROPERTIES[slug] : undefined;

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F8F6F2" }}>
        <p className="font-body font-light" style={{ color: "#4B4B4B" }}>
          Propiedad no encontrada
        </p>
      </div>
    );
  }

  return <PropertyPage property={property} />;
}
