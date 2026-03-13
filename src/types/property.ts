export type Locale = 'en' | 'es'
export type PropertyStatus = 'preventa' | 'entrega-inmediata'
export type DifferentiatorType = 'roi' | 'vista' | 'amenidad' | 'precio' | 'entrega' | 'exclusivo'
export type DifferentiatorLayout = 'featured' | 'grid' | 'wide'

export interface UnitType {
  name: string
  sqm: number
  priceMXN: number
  available: number
  floorPlanUrl?: string
}

export interface Distance {
  label: string
  icon: string
}

export interface PresalePrice {
  originalMXN: number
  discountMXN: number
  deadlineDate: string
  priceIncreasePercent: number
}

export interface Differentiator {
  type: DifferentiatorType
  title: string
  description: string
  stat?: string
  statLabel?: string
  pills?: string[]
  layout: DifferentiatorLayout
}

export interface PropertyDetail {
  id: string
  slug: string
  name: string
  zone: string
  status: PropertyStatus
  priceFromUSD: number
  priceFromMXN: number
  bedrooms: string
  sqmRange: string
  delivery: string
  roiEstimate: number
  plusvaliaEstimate: number
  images: string[]
  description: string
  features: string[]
  units: UnitType[]
  distances: Distance[]
  presalePrice?: PresalePrice
  differentiators?: Differentiator[]
}
