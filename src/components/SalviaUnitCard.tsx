import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  SalviaUnit,
  formatUSD,
  salviaUnitPath,
  salviaWhatsAppUrl,
} from '@/data/salvia-units'
import { getSalviaGallery } from '@/data/salvia-galleries'
import { UnitGalleryCarousel } from '@/components/UnitGalleryCarousel'

interface Props {
  unit: SalviaUnit
  priority?: boolean
}

export const SalviaUnitCard = ({ unit, priority = false }: Props) => {
  const { language, isEnglish } = useLanguage()
  const gallery = getSalviaGallery(unit.slug)

  return (
    <article className="group bg-white border border-border flex flex-col h-full">
      <div className="relative">
        {gallery.length > 0 ? (
          <UnitGalleryCarousel images={gallery} language={language} />
        ) : (
          <div className="relative overflow-hidden" style={{ paddingTop: '70%' }}>
            <img
              src={unit.image}
              alt={`${unit.name[language]} — ${unit.subtitle[language]}, Edificio Salvia Cancún`}
              loading={priority ? 'eager' : 'lazy'}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        )}
      </div>

      <div className="px-5 pt-5 pb-5 flex-1 flex flex-col">
        <p
          className="text-[11px] tracking-[3px] uppercase font-body font-bold mb-1"
          style={{ color: '#CFAE60' }}
        >
          {language === 'es' ? 'Edificio Salvia · Primera línea de playa' : 'Salvia Building · Beachfront'}
        </p>
        <h3
          className="font-display text-[22px] font-bold leading-tight mb-1"
          style={{ color: '#1C1C1C' }}
        >
          {unit.name[language]}
        </h3>
        <p className="font-body text-[13px] text-muted-foreground mb-3">
          {unit.subtitle[language]}
        </p>

        <div className="flex items-center gap-4 mb-4 text-[13px] font-body text-muted-foreground flex-wrap">
          <span>{unit.bedrooms} {language === 'es' ? 'rec.' : 'beds'}</span>
          <span>{unit.bathrooms} {language === 'es' ? 'baños' : 'baths'}</span>
          <span>{unit.floorAreaSqFt} sq ft</span>
        </div>

        <div className="pt-3 mb-4 border-t border-border">
          <span
            className="block text-[10px] uppercase tracking-[2px] font-body font-light"
            style={{ color: '#4B4B4B' }}
          >
            {language === 'es' ? 'Precio' : 'Price'}
          </span>
          <span className="font-display text-[22px] font-bold" style={{ color: '#CFAE60' }}>
            {formatUSD(unit.askingPriceUSD)} USD
          </span>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2">
          <Link
            to={salviaUnitPath(unit.slug, isEnglish)}
            className="text-center py-2.5 text-[11px] tracking-[2px] uppercase font-body border transition-colors"
            style={{ borderColor: '#1C1C1C', color: '#1C1C1C' }}
          >
            {language === 'es' ? 'Ver Detalles' : 'View Details'}
          </Link>
          <a
            href={salviaWhatsAppUrl(unit.whatsappMsg[language])}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center py-2.5 text-[11px] tracking-[2px] uppercase font-body text-white"
            style={{ background: '#CFAE60' }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}

export default SalviaUnitCard