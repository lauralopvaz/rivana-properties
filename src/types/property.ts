export type Locale = 'en' | 'es'
export type PropertyStatus = 'preventa' | 'entrega-inmediata'
export type DifferentiatorLayout = 'featured' | 'grid' | 'wide'

export interface UnitType {
  name: string
  nameEn?: string
  sqm: number
  priceMXN: number
  priceUSD?: number
  available: number
  floorPlanUrl?: string
}

export interface Distance {
  label: string
  labelEn?: string
  icon: string
}

export interface PresalePrice {
  originalMXN: number
  discountMXN: number
  deadlineDate: string
  priceIncreasePercent: number
}

export interface Differentiator {
  type: 'roi' | 'vista' | 'amenidad' | 'precio' | 'entrega' | 'exclusivo'
  layout: DifferentiatorLayout
  title: string
  titleEn?: string
  description: string
  descriptionEn?: string
  stat?: string
  statLabel?: string
  pills?: string[]
  pillsEn?: string[]
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
  descriptionEn?: string
  features: string[]
  featuresEn?: string[]
  units: UnitType[]
  distances: Distance[]
  presalePrice?: PresalePrice
  differentiators?: Differentiator[]
}
