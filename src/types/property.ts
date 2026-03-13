export interface UnitType {
  name: string;
  sqm: number;
  priceMXN: number;
  available: number;
  floorPlanUrl?: string;
}

export interface Distance {
  label: string;
  icon: string;
}

export interface PresalePrice {
  originalMXN: number;
  discountMXN: number;
  deadlineDate: string;
  priceIncreasePercent: number;
}

export interface Differentiator {
  type: 'roi' | 'vista' | 'amenidad' | 'precio' | 'entrega' | 'exclusivo';
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
  pills?: string[];
  layout: 'featured' | 'grid' | 'wide';
}

export interface PropertyDetail {
  id: string;
  name: string;
  zone: string;
  status: 'preventa' | 'entrega-inmediata';
  priceFromUSD: number;
  priceFromMXN: number;
  bedrooms: string;
  sqmRange: string;
  delivery: string;
  roiEstimate: number;
  plusvaliaEstimate: number;
  images: string[];
  description: string;
  amenities: string[];
  features: string[];
  units: UnitType[];
  distances: Distance[];
  presalePrice?: PresalePrice;
  differentiators?: Differentiator[];
}
