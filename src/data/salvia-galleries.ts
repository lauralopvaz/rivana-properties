import type { GalleryImage } from "@/data/la-amada-galleries";
import balcon from "@/assets/salvia/departamento-salvia-604ab-balcon-vista-mar-caribe-zona-hotelera-cancun-01.webp.asset.json";
import recamaraVistaMar from "@/assets/salvia/departamento-salvia-604ab-recamara-vista-mar-zona-hotelera-cancun-02.webp.asset.json";
import recamaraComedor from "@/assets/salvia/departamento-salvia-604ab-recamara-dos-camas-comedor-zona-hotelera-cancun-03.webp.asset.json";
import recamaraPrincipal from "@/assets/salvia/departamento-salvia-604ab-recamara-principal-dos-camas-queen-zona-hotelera-cancun-04.webp.asset.json";
import recamaraSecundaria from "@/assets/salvia/departamento-salvia-604ab-recamara-secundaria-bano-zona-hotelera-cancun-05.webp.asset.json";
import salaComedor from "@/assets/salvia/departamento-salvia-604ab-sala-comedor-cocina-integrada-zona-hotelera-cancun-06.webp.asset.json";
import cocina from "@/assets/salvia/departamento-salvia-604ab-cocina-equipada-barra-zona-hotelera-cancun-07.webp.asset.json";
import vistaAlberca from "@/assets/salvia/departamento-salvia-604ab-vista-alberca-playa-desde-balcon-zona-hotelera-cancun-08.webp.asset.json";
import ph2aRecamara from "@/assets/salvia/penthouse-salvia-ph-2a-recamara-planta-baja-vista-mar-zona-hotelera-cancun-01.webp.asset.json";
import ph2aBalcon from "@/assets/salvia/penthouse-salvia-ph-2a-balcon-vista-frontal-mar-zona-hotelera-cancun-02.webp.asset.json";
import ph2aPlantaBaja from "@/assets/salvia/penthouse-salvia-ph-2a-planta-baja-vista-superior-zona-hotelera-cancun-03.webp.asset.json";
import ph2aSala from "@/assets/salvia/penthouse-salvia-ph-2a-sala-estar-tv-vista-mar-zona-hotelera-cancun-04.webp.asset.json";
import ph2aCocina from "@/assets/salvia/penthouse-salvia-ph-2a-cocina-equipada-zona-hotelera-cancun-05.webp.asset.json";
import salviaPlaya from "@/assets/salvia/condominio-salvia-salvia-playa-arena-blanca-zona-hotelera-cancun-05.webp.asset.json";
import salviaMar from "@/assets/salvia/condominio-salvia-salvia-mar-caribe-vista-aerea-zona-hotelera-cancun-06.webp.asset.json";
import ph3bSalaComedor from "@/assets/salvia/penthouse-salvia-ph-3b-sala-comedor-vista-mar-zona-hotelera-cancun-01.webp.asset.json";
import ph3bSalaMurphy from "@/assets/salvia/penthouse-salvia-ph-3b-sala-estar-murphy-vista-mar-zona-hotelera-cancun-02.webp.asset.json";
import ph3bDobleAltura from "@/assets/salvia/penthouse-salvia-ph-3b-doble-altura-escalera-cristal-zona-hotelera-cancun-03.webp.asset.json";
import ph3bCocina from "@/assets/salvia/penthouse-salvia-ph-3b-cocina-nueva-granito-zona-hotelera-cancun-04.webp.asset.json";
import ph3bRecamaraDos from "@/assets/salvia/penthouse-salvia-ph-3b-recamara-superior-dos-camas-zona-hotelera-cancun-05.webp.asset.json";
import ph3bRecamaraPuertas from "@/assets/salvia/penthouse-salvia-ph-3b-recamara-superior-puertas-privacidad-zona-hotelera-cancun-06.webp.asset.json";
import salviaPlayaCamastros from "@/assets/salvia/condominio-salvia-salvia-playa-camastros-vista-aerea-zona-hotelera-cancun-04.webp.asset.json";
import salviaPlayaChacMool from "@/assets/salvia/condominio-salvia-salvia-playa-chac-mool-vista-aerea-zona-hotelera-cancun-03.webp.asset.json";

/** Galerías por unidad del Edificio Salvia (Zona Hotelera, Cancún). Clave = slug de la unidad. */
export const salviaGalleries: Record<string, GalleryImage[]> = {
  "penthouse-604ab": [
    {
      src: balcon.url,
      alt: {
        es: "Balcón con vista al mar Caribe del departamento 604AB en Salvia, Zona Hotelera de Cancún",
        en: "Balcony with Caribbean Sea view at unit 604AB, Salvia, Cancún Hotel Zone",
      },
    },
    {
      src: recamaraVistaMar.url,
      alt: {
        es: "Recámara con vista al mar del departamento 604AB en Salvia, Zona Hotelera de Cancún",
        en: "Ocean-view bedroom at unit 604AB, Salvia, Cancún Hotel Zone",
      },
    },
    {
      src: recamaraComedor.url,
      alt: {
        es: "Recámara con dos camas y comedor frente al mar del departamento 604AB en Salvia, Cancún",
        en: "Bedroom with two beds and oceanfront dining area at unit 604AB, Salvia, Cancún",
      },
    },
    {
      src: recamaraPrincipal.url,
      alt: {
        es: "Recámara principal con dos camas queen del departamento 604AB en Salvia, Zona Hotelera de Cancún",
        en: "Primary bedroom with two queen beds at unit 604AB, Salvia, Cancún Hotel Zone",
      },
    },
    {
      src: recamaraSecundaria.url,
      alt: {
        es: "Recámara secundaria con baño del departamento 604AB en Salvia, Zona Hotelera de Cancún",
        en: "Second bedroom with bathroom at unit 604AB, Salvia, Cancún Hotel Zone",
      },
    },
    {
      src: salaComedor.url,
      alt: {
        es: "Sala, comedor y cocina integrada del departamento 604AB en Salvia, Zona Hotelera de Cancún",
        en: "Living, dining and integrated kitchen at unit 604AB, Salvia, Cancún Hotel Zone",
      },
    },
    {
      src: cocina.url,
      alt: {
        es: "Cocina equipada con barra desayunador del departamento 604AB en Salvia, Cancún",
        en: "Equipped kitchen with breakfast bar at unit 604AB, Salvia, Cancún",
      },
    },
    {
      src: vistaAlberca.url,
      alt: {
        es: "Vista a la alberca y playa desde el balcón del departamento 604AB en Salvia, Cancún",
        en: "Pool and beach view from the balcony of unit 604AB, Salvia, Cancún",
      },
    },
  ],
  "penthouse-2a": [
    {
      src: ph2aRecamara.url,
      alt: {
        es: "Recámara de planta baja con vista al mar del Penthouse 2A en Salvia, Zona Hotelera de Cancún",
        en: "Lower-level ocean-view bedroom at Penthouse 2A, Salvia, Cancún Hotel Zone",
      },
    },
    {
      src: ph2aBalcon.url,
      alt: {
        es: "Balcón con vista frontal al mar Caribe del Penthouse 2A en Salvia, Zona Hotelera de Cancún",
        en: "Balcony with direct Caribbean Sea view at Penthouse 2A, Salvia, Cancún Hotel Zone",
      },
    },
    {
      src: ph2aPlantaBaja.url,
      alt: {
        es: "Vista superior de la planta baja del Penthouse 2A en Salvia, Zona Hotelera de Cancún",
        en: "Upper-level view of the lower floor at Penthouse 2A, Salvia, Cancún Hotel Zone",
      },
    },
    {
      src: ph2aSala.url,
      alt: {
        es: "Sala de estar con TV y vista al mar del Penthouse 2A en Salvia, Zona Hotelera de Cancún",
        en: "Living area with TV and ocean view at Penthouse 2A, Salvia, Cancún Hotel Zone",
      },
    },
    {
      src: ph2aCocina.url,
      alt: {
        es: "Cocina equipada del Penthouse 2A en Salvia, Zona Hotelera de Cancún",
        en: "Equipped kitchen at Penthouse 2A, Salvia, Cancún Hotel Zone",
      },
    },
    {
      src: salviaPlaya.url,
      alt: {
        es: "Playa de arena blanca frente al condominio Salvia en la Zona Hotelera de Cancún",
        en: "White-sand beach in front of the Salvia building, Cancún Hotel Zone",
      },
    },
    {
      src: salviaMar.url,
      alt: {
        es: "Vista aérea del mar Caribe frente al condominio Salvia en la Zona Hotelera de Cancún",
        en: "Aerial view of the Caribbean Sea in front of the Salvia building, Cancún Hotel Zone",
      },
    },
  ],
  "penthouse-3b": [
    {
      src: ph3bSalaComedor.url,
      alt: {
        es: "Sala y comedor con vista al mar Caribe del Penthouse 3B en Salvia, Zona Hotelera de Cancún",
        en: "Living and dining area with Caribbean Sea view at Penthouse 3B, Salvia, Cancún Hotel Zone",
      },
    },
    {
      src: ph3bSalaMurphy.url,
      alt: {
        es: "Sala de estar con cama Murphy y vista al mar del Penthouse 3B en Salvia, Cancún",
        en: "Living area with Murphy bed and ocean view at Penthouse 3B, Salvia, Cancún",
      },
    },
    {
      src: ph3bDobleAltura.url,
      alt: {
        es: "Doble altura con escalera de cristal del Penthouse 3B en Salvia, Zona Hotelera de Cancún",
        en: "Double-height space with glass staircase at Penthouse 3B, Salvia, Cancún Hotel Zone",
      },
    },
    {
      src: ph3bCocina.url,
      alt: {
        es: "Cocina nueva con cubierta de granito del Penthouse 3B en Salvia, Zona Hotelera de Cancún",
        en: "New kitchen with granite countertops at Penthouse 3B, Salvia, Cancún Hotel Zone",
      },
    },
    {
      src: ph3bRecamaraDos.url,
      alt: {
        es: "Recámara superior con dos camas del Penthouse 3B en Salvia, Zona Hotelera de Cancún",
        en: "Upper-level bedroom with two beds at Penthouse 3B, Salvia, Cancún Hotel Zone",
      },
    },
    {
      src: ph3bRecamaraPuertas.url,
      alt: {
        es: "Recámara superior con puertas de privacidad y vista a la laguna del Penthouse 3B en Salvia, Cancún",
        en: "Upper-level bedroom with privacy doors and lagoon view at Penthouse 3B, Salvia, Cancún",
      },
    },
    {
      src: salviaPlayaCamastros.url,
      alt: {
        es: "Vista aérea de la playa con camastros frente al condominio Salvia en la Zona Hotelera de Cancún",
        en: "Aerial view of the beach with sun loungers in front of the Salvia building, Cancún Hotel Zone",
      },
    },
    {
      src: salviaPlayaChacMool.url,
      alt: {
        es: "Vista aérea de Playa Chac Mool junto al condominio Salvia en la Zona Hotelera de Cancún",
        en: "Aerial view of Chac Mool Beach next to the Salvia building, Cancún Hotel Zone",
      },
    },
  ],
};

export const getSalviaGallery = (slug: string): GalleryImage[] => salviaGalleries[slug] ?? [];
