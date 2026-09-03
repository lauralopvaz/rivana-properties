import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { BedIcon, RulerIcon } from '@/components/icons'
import {
  ImmediateUnit,
  formatMXN,
  unitDetailPath,
  whatsappUrl,
} from '@/data/immediate-delivery'

interface Props {
  unit: ImmediateUnit
  priority?: boolean
}

export const ImmediateDeliveryCard = ({ unit, priority = false }: Props) => {
  const { language, isEnglish } = useLanguage()

  return (
    <article className="group bg-white border border-border flex flex-col h-full">
      <div className="relative overflow-hidden" style={{ paddingTop: '70%' }}>
        <img
          src={unit.image}
          alt={`${unit.development[language]} — ${unit.subtitle[language]}`}
          loading={priority ? 'eager' : 'lazy'}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="px-5 pt-5 pb-5 flex-1 flex flex-col">
        <p
          className="text-[11px] tracking-[3px] uppercase font-body font-bold mb-1"
          style={{ color: '#CFAE60' }}
        >
          {unit.subtitle[language]}
        </p>
        <h3
          className="font-display text-[22px] font-bold leading-tight mb-1"
          style={{ color: '#1C1C1C' }}
        >
          {unit.location[language]}
        </h3>
        <p className="font-body text-[13px] text-muted-foreground mb-3">
          {unit.development[language]}
        </p>

        <div className="flex items-center gap-4 mb-4 text-[13px] font-body text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BedIcon className="w-3.5 h-3.5" /> {unit.bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <RulerIcon className="w-3.5 h-3.5" /> {unit.area} m²
          </span>
          <span className="text-[12px]">{unit.view[language]}</span>
        </div>

        <div className="pt-3 mb-4 border-t border-border">
          <span
            className="block text-[10px] uppercase tracking-[2px] font-body font-light"
            style={{ color: '#4B4B4B' }}
          >
            {language === 'es' ? 'Precio' : 'Price'}
          </span>
          <span className="font-display text-[22px] font-bold" style={{ color: '#CFAE60' }}>
            {formatMXN(unit.priceMXN)}
          </span>
          {unit.priceNote && (
            <span className="ml-2 text-[12px] font-body text-muted-foreground line-through">
              {unit.priceNote[language]}
            </span>
          )}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2">
          <Link
            to={unitDetailPath(isEnglish)}
            className="text-center py-2.5 text-[11px] tracking-[2px] uppercase font-body border transition-colors"
            style={{ borderColor: '#1C1C1C', color: '#1C1C1C' }}
          >
            {language === 'es' ? 'Ver Detalles' : 'View Details'}
          </Link>
          <a
            href={whatsappUrl(unit.whatsappMsg[language])}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center py-2.5 text-[11px] tracking-[2px] uppercase font-body text-white"
            style={{ background: '#CFAE60' }}
          >
            {language === 'es' ? 'Agendar Tour' : 'Schedule Tour'}
          </a>
        </div>
      </div>
    </article>
  )
}

export default ImmediateDeliveryCard