// Responsive picture data (AVIF + WebP + JPG at 480/800/1200/1600 widths).
// Generated at build time by vite-imagetools. Keyed by the plain-image URL
// used in journal-articles.ts so components can look up the responsive
// variants without changing the existing `article.image` string contract
// (which is still used for JSON-LD schema, og:image, and background CSS).

import imgCancunRoi from "@/assets/journal/cancun-roi.jpg?responsive";
import imgForeignBuyer from "@/assets/journal/foreign-buyer-guide.jpg?responsive";
import imgWorldCup from "@/assets/journal/world-cup-2026.jpg?responsive";
import imgLuxuryCondos from "@/assets/journal/luxury-condos-zona-hotelera.jpg?responsive";
import imgCostaMujeres from "@/assets/journal/costa-mujeres-luxury.jpg?responsive";
import imgMayakoba from "@/assets/journal/mayakoba-vs-puerto-cancun.jpg?responsive";
import imgGuiaPreventa from "@/assets/journal/guia-preventa.jpg?responsive";
import imgPuenteNichupte from "@/assets/journal/puente-nichupte.jpg?responsive";
import imgRetireCancun from "@/assets/journal/retire-cancun-riviera-maya.jpg?responsive";
import imgBrokerLujo from "@/assets/journal/broker-inmobiliario-lujo-cancun.jpg?responsive";

// Plain URL imports — used as the map key (matches article.image values).
import urlCancunRoi from "@/assets/journal/cancun-roi.jpg";
import urlForeignBuyer from "@/assets/journal/foreign-buyer-guide.jpg";
import urlWorldCup from "@/assets/journal/world-cup-2026.jpg";
import urlLuxuryCondos from "@/assets/journal/luxury-condos-zona-hotelera.jpg";
import urlCostaMujeres from "@/assets/journal/costa-mujeres-luxury.jpg";
import urlMayakoba from "@/assets/journal/mayakoba-vs-puerto-cancun.jpg";
import urlGuiaPreventa from "@/assets/journal/guia-preventa.jpg";
import urlPuenteNichupte from "@/assets/journal/puente-nichupte.jpg";
import urlRetireCancun from "@/assets/journal/retire-cancun-riviera-maya.jpg";
import urlBrokerLujo from "@/assets/journal/broker-inmobiliario-lujo-cancun.jpg";

const map: Record<string, ResponsivePicture> = {
  [urlCancunRoi]: imgCancunRoi,
  [urlForeignBuyer]: imgForeignBuyer,
  [urlWorldCup]: imgWorldCup,
  [urlLuxuryCondos]: imgLuxuryCondos,
  [urlCostaMujeres]: imgCostaMujeres,
  [urlMayakoba]: imgMayakoba,
  [urlGuiaPreventa]: imgGuiaPreventa,
  [urlPuenteNichupte]: imgPuenteNichupte,
  [urlRetireCancun]: imgRetireCancun,
  [urlBrokerLujo]: imgBrokerLujo,
};

export function getResponsiveImage(url: string): ResponsivePicture | undefined {
  return map[url];
}