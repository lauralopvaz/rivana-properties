import terrazaRooftop from "@/assets/la-amada/penthouse-la-amada-ph-07m-terraza-rooftop-comedor-exterior-costa-mujeres-cancun-01.webp.asset.json";
import comedorInterior from "@/assets/la-amada/penthouse-la-amada-ph-07m-comedor-interior-diseno-costa-mujeres-cancun-03.webp.asset.json";
import banoMaster from "@/assets/la-amada/penthouse-la-amada-ph-07m-bano-master-doble-lavabo-costa-mujeres-cancun-05.webp.asset.json";
import cocinaGourmet from "@/assets/la-amada/penthouse-la-amada-ph-07m-cocina-gourmet-costa-mujeres-cancun-07.webp.asset.json";
import vistaAerea from "@/assets/la-amada/penthouse-la-amada-ph-07m-vista-aerea-playa-marina-costa-mujeres-cancun-08.webp.asset.json";
import playaPrivada from "@/assets/la-amada/penthouse-la-amada-ph-07m-playa-privada-palapas-costa-mujeres-cancun-09.webp.asset.json";
import albercaVista from "@/assets/la-amada/penthouse-la-amada-ph-07m-alberca-vista-superior-costa-mujeres-cancun-10.webp.asset.json";
import marinaAtardecer from "@/assets/la-amada/penthouse-la-amada-ph-07m-marina-atardecer-costa-mujeres-cancun-11.webp.asset.json";
import palapaLounge from "@/assets/la-amada/penthouse-la-amada-ph-07m-palapa-lounge-areas-comunes-costa-mujeres-cancun-12.webp.asset.json";
import u311Sala from "@/assets/la-amada/departamento-la-amada-311l-sala-comedor-planta-abierta-costa-mujeres-cancun-01.webp.asset.json";
import u311Terraza from "@/assets/la-amada/departamento-la-amada-311l-terraza-privada-comedor-exterior-costa-mujeres-cancun-02.webp.asset.json";
import u311Cocina from "@/assets/la-amada/departamento-la-amada-311l-cocina-integral-premium-costa-mujeres-cancun-03.webp.asset.json";
import u311Recamara from "@/assets/la-amada/departamento-la-amada-311l-recamara-principal-tina-costa-mujeres-cancun-04.webp.asset.json";
import u311LockOff from "@/assets/la-amada/departamento-la-amada-311l-recamara-lock-off-costa-mujeres-cancun-05.webp.asset.json";
import u311Alberca from "@/assets/la-amada/departamento-la-amada-311l-alberca-infinity-rooftop-costa-mujeres-cancun-06.webp.asset.json";
import u311AereaPlaya from "@/assets/la-amada/departamento-la-amada-311l-vista-aerea-residencial-playa-costa-mujeres-cancun-08.webp.asset.json";
import u311AereaJardines from "@/assets/la-amada/departamento-la-amada-311l-vista-aerea-jardines-costa-mujeres-cancun-09.webp.asset.json";
import u305Terraza1 from "@/assets/la-amada/departamento-la-amada-305l-terraza-privada-vista-selva-costa-mujeres-cancun-01.webp.asset.json";
import u305Terraza2 from "@/assets/la-amada/departamento-la-amada-305l-terraza-lounge-panoramica-costa-mujeres-cancun-02.webp.asset.json";
import u305Terraza3 from "@/assets/la-amada/departamento-la-amada-305l-terraza-vista-laguna-costa-mujeres-cancun-03.webp.asset.json";
import u305Sala from "@/assets/la-amada/departamento-la-amada-305l-sala-estar-amplia-costa-mujeres-cancun-04.webp.asset.json";
import u305Comedor from "@/assets/la-amada/departamento-la-amada-305l-comedor-ventanales-costa-mujeres-cancun-05.webp.asset.json";
import u305SalaTerraza from "@/assets/la-amada/departamento-la-amada-305l-sala-comedor-acceso-terraza-costa-mujeres-cancun-06.webp.asset.json";
import u305Cocina from "@/assets/la-amada/departamento-la-amada-305l-cocina-barra-desayunador-costa-mujeres-cancun-07.webp.asset.json";
import u305SalaTv from "@/assets/la-amada/departamento-la-amada-305l-sala-tv-recamara-costa-mujeres-cancun-09.webp.asset.json";
import u305Plano from "@/assets/la-amada/departamento-la-amada-305l-plano-arquitectonico-costa-mujeres-cancun-10.webp.asset.json";

export interface GalleryImage {
  src: string;
  alt: { es: string; en: string };
}

/** Galerías por unidad de La Amada Residences (Costa Mujeres, Cancún). */
export const laAmadaGalleries: Record<string, GalleryImage[]> = {
  ph07m: [
    {
      src: terrazaRooftop.url,
      alt: {
        es: "Terraza rooftop con comedor exterior del Penthouse 07M en La Amada, Costa Mujeres, Cancún",
        en: "Rooftop terrace with outdoor dining at Penthouse 07M, La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: comedorInterior.url,
      alt: {
        es: "Comedor interior de diseño del Penthouse 07M en La Amada, Costa Mujeres, Cancún",
        en: "Designer indoor dining room at Penthouse 07M, La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: cocinaGourmet.url,
      alt: {
        es: "Cocina gourmet con electrodomésticos premium del Penthouse 07M en La Amada, Cancún",
        en: "Gourmet kitchen with premium appliances at Penthouse 07M, La Amada, Cancún",
      },
    },
    {
      src: banoMaster.url,
      alt: {
        es: "Baño principal con doble lavabo del Penthouse 07M en La Amada, Costa Mujeres",
        en: "Master bathroom with double vanity at Penthouse 07M, La Amada, Costa Mujeres",
      },
    },
    {
      src: marinaAtardecer.url,
      alt: {
        es: "Vista a la marina al atardecer desde el Penthouse 07M en La Amada, Costa Mujeres",
        en: "Marina sunset view from Penthouse 07M at La Amada, Costa Mujeres",
      },
    },
    {
      src: vistaAerea.url,
      alt: {
        es: "Vista aérea de la playa y marina de La Amada en Costa Mujeres, Cancún",
        en: "Aerial view of La Amada beach and marina in Costa Mujeres, Cancún",
      },
    },
    {
      src: albercaVista.url,
      alt: {
        es: "Alberca de La Amada vista desde arriba en Costa Mujeres, Cancún",
        en: "La Amada swimming pool seen from above in Costa Mujeres, Cancún",
      },
    },
    {
      src: playaPrivada.url,
      alt: {
        es: "Playa privada con palapas en La Amada, Costa Mujeres, Cancún",
        en: "Private beach with palapas at La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: palapaLounge.url,
      alt: {
        es: "Palapa lounge en las áreas comunes de La Amada, Costa Mujeres, Cancún",
        en: "Palapa lounge in the common areas of La Amada, Costa Mujeres, Cancún",
      },
    },
  ],
  "311l": [
    {
      src: u311Sala.url,
      alt: {
        es: "Sala y comedor de planta abierta del Departamento 311L en La Amada, Costa Mujeres, Cancún",
        en: "Open-plan living and dining area of Unit 311L at La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u311Terraza.url,
      alt: {
        es: "Terraza privada con comedor exterior del Departamento 311L en La Amada, Costa Mujeres, Cancún",
        en: "Private terrace with outdoor dining at Unit 311L, La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u311Cocina.url,
      alt: {
        es: "Cocina integral premium del Departamento 311L en La Amada, Costa Mujeres, Cancún",
        en: "Premium fitted kitchen of Unit 311L at La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u311Recamara.url,
      alt: {
        es: "Recámara principal con tina del Departamento 311L en La Amada, Costa Mujeres, Cancún",
        en: "Primary bedroom with soaking tub at Unit 311L, La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u311LockOff.url,
      alt: {
        es: "Recámara lock-off con cocineta del Departamento 311L en La Amada, Costa Mujeres, Cancún",
        en: "Lock-off suite with kitchenette at Unit 311L, La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u311Alberca.url,
      alt: {
        es: "Alberca infinity y camastros en La Amada, Costa Mujeres, Cancún",
        en: "Infinity pool and sun loungers at La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u311AereaPlaya.url,
      alt: {
        es: "Vista aérea del residencial frente a la playa de La Amada, Costa Mujeres, Cancún",
        en: "Aerial view of the beachfront residential complex at La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u311AereaJardines.url,
      alt: {
        es: "Vista aérea de los jardines y acceso de La Amada, Costa Mujeres, Cancún",
        en: "Aerial view of the gardens and entrance at La Amada, Costa Mujeres, Cancún",
      },
    },
  ],
  "305l": [
    {
      src: u305Terraza1.url,
      alt: {
        es: "Terraza privada con vista a la selva del Departamento 305L en La Amada, Costa Mujeres, Cancún",
        en: "Private terrace with jungle view at Apartment 305L, La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u305Terraza2.url,
      alt: {
        es: "Terraza lounge panorámica del Departamento 305L en La Amada, Costa Mujeres, Cancún",
        en: "Panoramic lounge terrace at Apartment 305L, La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u305Terraza3.url,
      alt: {
        es: "Terraza con vista a la laguna del Departamento 305L en La Amada, Costa Mujeres, Cancún",
        en: "Terrace with lagoon view at Apartment 305L, La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u305Sala.url,
      alt: {
        es: "Amplia sala de estar del Departamento 305L en La Amada, Costa Mujeres, Cancún",
        en: "Spacious living room at Apartment 305L, La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u305Comedor.url,
      alt: {
        es: "Comedor con ventanales del Departamento 305L en La Amada, Costa Mujeres, Cancún",
        en: "Dining area with floor-to-ceiling windows at Apartment 305L, La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u305SalaTerraza.url,
      alt: {
        es: "Sala y comedor con acceso a la terraza del Departamento 305L en La Amada, Costa Mujeres, Cancún",
        en: "Living and dining area with terrace access at Apartment 305L, La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u305Cocina.url,
      alt: {
        es: "Cocina integral con barra desayunador del Departamento 305L en La Amada, Costa Mujeres, Cancún",
        en: "Fitted kitchen with breakfast bar at Apartment 305L, La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u305SalaTv.url,
      alt: {
        es: "Sala de TV en recámara del Departamento 305L en La Amada, Costa Mujeres, Cancún",
        en: "TV lounge in the bedroom at Apartment 305L, La Amada, Costa Mujeres, Cancún",
      },
    },
    {
      src: u305Plano.url,
      alt: {
        es: "Plano arquitectónico del Departamento 305L en La Amada, Costa Mujeres, Cancún",
        en: "Architectural floor plan of Apartment 305L, La Amada, Costa Mujeres, Cancún",
      },
    },
  ],
};
