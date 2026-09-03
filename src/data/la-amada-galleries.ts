import terrazaRooftop from "@/assets/la-amada/penthouse-la-amada-ph-07m-terraza-rooftop-comedor-exterior-costa-mujeres-cancun-01.webp.asset.json";
import comedorInterior from "@/assets/la-amada/penthouse-la-amada-ph-07m-comedor-interior-diseno-costa-mujeres-cancun-03.webp.asset.json";
import banoMaster from "@/assets/la-amada/penthouse-la-amada-ph-07m-bano-master-doble-lavabo-costa-mujeres-cancun-05.webp.asset.json";
import cocinaGourmet from "@/assets/la-amada/penthouse-la-amada-ph-07m-cocina-gourmet-costa-mujeres-cancun-07.webp.asset.json";
import vistaAerea from "@/assets/la-amada/penthouse-la-amada-ph-07m-vista-aerea-playa-marina-costa-mujeres-cancun-08.webp.asset.json";
import playaPrivada from "@/assets/la-amada/penthouse-la-amada-ph-07m-playa-privada-palapas-costa-mujeres-cancun-09.webp.asset.json";
import albercaVista from "@/assets/la-amada/penthouse-la-amada-ph-07m-alberca-vista-superior-costa-mujeres-cancun-10.webp.asset.json";
import marinaAtardecer from "@/assets/la-amada/penthouse-la-amada-ph-07m-marina-atardecer-costa-mujeres-cancun-11.webp.asset.json";
import palapaLounge from "@/assets/la-amada/penthouse-la-amada-ph-07m-palapa-lounge-areas-comunes-costa-mujeres-cancun-12.webp.asset.json";

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
      src: comedorInterior,
      alt: {
        es: "Comedor interior de diseño del Penthouse 07M en La Amada, Costa Mujeres, Cancún",
        en: "Designer indoor dining room at Penthouse 07M, La Amada, Costa Mujeres, Cancún",
      },
    } as unknown as GalleryImage,
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
};
