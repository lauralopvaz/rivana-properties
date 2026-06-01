import { useParams, Link, Navigate } from 'react-router-dom'
import { SEOHead } from '@/components/SEOHead'
import { useLanguage } from '@/contexts/LanguageContext'
import { useSchedulingModal } from '@/contexts/SchedulingModalContext'
import { Button } from '@/components/ui/button'
import {
  getSalviaUnitBySlug,
  salviaBuilding,
  salviaLandingPath,
  salviaUnitPath,
  salviaWhatsAppUrl,
  formatUSD,
  salviaUnits,
} from '@/data/salvia-units'

export default function SalviaUnit() {
  const { slug } = useParams<{ slug: string }>()
  const { language, isEnglish } = useLanguage()
  const { openModal } = useSchedulingModal()
  const unit = getSalviaUnitBySlug(slug)

  if (!unit) {
    return <Navigate to={salviaLandingPath(isEnglish)} replace />
  }

  const path = salviaUnitPath(unit.slug, isEnglish)
  const esPath = `/zona-hotelera/edificio-salvia/${unit.slug}`
  const enPath = `/en/hotel-zone/salvia-building/${unit.slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: `${unit.name.en} — Salvia Building`,
    description: unit.seo.description.en,
    url: `https://rivanaproperties.com${enPath}`,
    datePosted: unit.datePosted,
    image: unit.image,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cancún',
      addressRegion: 'Quintana Roo',
      addressCountry: 'MX',
      streetAddress: 'Chac Mool / Forum Beach, Hotel Zone',
    },
    numberOfBedrooms: unit.bedrooms,
    numberOfBathroomsTotal: unit.bathrooms,
    floorSize: { '@type': 'QuantitativeValue', value: unit.floorAreaSqFt, unitCode: 'FTK' },
    offers: {
      '@type': 'Offer',
      price: unit.askingPriceUSD,
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: unit.airbnbRating,
      reviewCount: unit.reviews,
      bestRating: 5,
    },
  }

  const otherUnits = salviaUnits.filter((u) => u.id !== unit.id)

  return (
    <main className="bg-background text-foreground">
      <SEOHead
        title={unit.seo.title[language]}
        description={unit.seo.description[language]}
        path={path}
        hreflangEs={esPath}
        hreflangEn={enPath}
        schema={schema}
        ogImage={unit.image}
      />

      {/* HERO */}
      <section className="relative min-h-[68vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(28,28,28,0.25) 0%, rgba(28,28,28,0.7) 100%), url(${unit.image})`,
          }}
          aria-hidden
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20 text-white w-full">
          <Link
            to={salviaLandingPath(isEnglish)}
            className="font-body text-xs tracking-[0.4em] uppercase mb-5 inline-block"
            style={{ color: '#CFAE60' }}
          >
            ← {salviaBuilding.tag[language]}
          </Link>
          <h1
            className="font-display font-light leading-[0.95] mb-4"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            {unit.name[language]}{' '}
            <em className="not-italic text-[#CFAE60]">· {unit.code}</em>
          </h1>
          <p className="font-body font-light max-w-2xl mb-6" style={{ fontSize: '18px', lineHeight: 1.6 }}>
            {unit.subtitle[language]}
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-[12px] tracking-[2px] uppercase font-body" style={{ background: '#CFAE60', color: '#fff' }}>
              {formatUSD(unit.askingPriceUSD)}
            </span>
            <span className="px-4 py-2 text-[12px] tracking-[2px] uppercase font-body border border-white/40">
              ROI {unit.grossRoiPct.toFixed(2)}%
            </span>
            <span className="px-4 py-2 text-[12px] tracking-[2px] uppercase font-body border border-white/40">
              ★ {unit.airbnbRating.toFixed(2)} ({unit.reviews})
            </span>
            {unit.guestFavorite && (
              <span className="px-4 py-2 text-[12px] tracking-[2px] uppercase font-body" style={{ background: '#1C1C1C', color: '#CFAE60' }}>
                ★ Guest Favorite
              </span>
            )}
          </div>
        </div>
      </section>

      {/* SPECS GRID */}
      <section className="py-16 lg:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { label: isEnglish ? 'Floor Area' : 'Superficie', value: `${unit.floorAreaSqFt} sq ft` },
            { label: isEnglish ? 'Layout' : 'Distribución', value: unit.layout[language] },
            { label: isEnglish ? 'Max Guests' : 'Huéspedes', value: String(unit.maxGuests) },
            { label: isEnglish ? 'Bedrooms' : 'Recámaras', value: unit.bedsDescription[language] },
            { label: isEnglish ? 'Bathrooms' : 'Baños', value: String(unit.bathrooms) },
            { label: isEnglish ? 'Views' : 'Vistas', value: unit.views[language] },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-body text-[11px] tracking-[2px] uppercase mb-2 text-muted-foreground">{s.label}</p>
              <p className="font-display text-[18px] font-light leading-snug">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES + FINANCIAL */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#CFAE60' }}>
              {isEnglish ? 'Features & Upgrades' : 'Características y mejoras'}
            </p>
            <h2 className="font-display font-light mb-6" style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>
              {isEnglish ? 'What\u2019s inside' : 'Qué incluye'}
            </h2>
            <ul className="space-y-3 font-body font-light text-[16px]">
              {unit.features[language].map((f) => (
                <li key={f} className="flex gap-3">
                  <span style={{ color: '#CFAE60' }}>—</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 border border-border" style={{ background: '#F8F6F2' }}>
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#CFAE60' }}>
              {isEnglish ? 'Financial Snapshot' : 'Resumen Financiero'}
            </p>
            <h2 className="font-display font-light mb-6" style={{ fontSize: 'clamp(24px, 2.8vw, 32px)' }}>
              {isEnglish ? 'Verified income & expenses' : 'Ingresos y gastos verificados'}
            </h2>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 font-body text-[15px] font-light">
              {[
                [isEnglish ? 'Avg Annual Revenue' : 'Ingreso anual prom.', formatUSD(unit.avgAnnualRevenueUSD)],
                [isEnglish ? '2025 Net Income' : 'Neto 2025', formatUSD(unit.net2025USD)],
                [isEnglish ? '2025 Expenses' : 'Gastos 2025', formatUSD(unit.expenses2025USD)],
                [isEnglish ? 'Avg Nightly Rate' : 'Tarifa noche prom.', formatUSD(unit.avgNightlyRateUSD)],
                [isEnglish ? 'Avg Occupancy' : 'Ocupación prom.', `${unit.avgOccupancyPct}%`],
                [isEnglish ? 'Gross ROI' : 'ROI bruto', `${unit.grossRoiPct.toFixed(2)}%`],
                [isEnglish ? 'Net ROI' : 'ROI neto', `${unit.netRoiPct.toFixed(1)}%`],
                [isEnglish ? 'Monthly Maintenance' : 'Mantto. mensual', formatUSD(unit.monthlyMaintenanceUSD)],
                [isEnglish ? 'Annual Beach Tax' : 'Impuesto playa anual', `~${formatUSD(unit.annualBeachTaxUSD)}`],
                [isEnglish ? 'Annual Property Tax' : 'Predial anual', `~${formatUSD(unit.annualPropertyTaxUSD)}`],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col">
                  <dt className="text-[11px] tracking-[2px] uppercase text-muted-foreground mb-0.5">{k}</dt>
                  <dd className="font-display text-[20px]" style={{ color: '#1C1C1C' }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* PERFORMANCE HISTORY */}
      <section className="py-20 lg:py-24 border-y border-border" style={{ background: '#F8F6F2' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#CFAE60' }}>
              {isEnglish ? 'Performance History' : 'Historial de Desempeño'}
            </p>
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>
              {unit.trackRecordYears} {isEnglish ? 'years of verified Airbnb income' : 'años de ingresos Airbnb verificados'}
            </h2>
          </div>
          <div className="overflow-x-auto bg-white border border-border">
            <table className="w-full text-left font-body text-[14px] font-light">
              <thead>
                <tr style={{ background: '#1C1C1C', color: '#fff' }}>
                  <th className="px-5 py-3 text-[11px] tracking-[2px] uppercase font-light">{isEnglish ? 'Year' : 'Año'}</th>
                  <th className="px-5 py-3 text-[11px] tracking-[2px] uppercase font-light">{isEnglish ? 'Gross Revenue' : 'Ingreso bruto'}</th>
                  <th className="px-5 py-3 text-[11px] tracking-[2px] uppercase font-light">{isEnglish ? 'Nights' : 'Noches'}</th>
                  <th className="px-5 py-3 text-[11px] tracking-[2px] uppercase font-light">{isEnglish ? 'Occupancy' : 'Ocupación'}</th>
                </tr>
              </thead>
              <tbody>
                {unit.performance.map((p) => (
                  <tr key={p.year} className="border-t border-border">
                    <td className="px-5 py-3">{p.year}</td>
                    <td className="px-5 py-3">{formatUSD(p.grossRevenueUSD)}</td>
                    <td className="px-5 py-3">{p.nights}</td>
                    <td className="px-5 py-3">{p.occupancyPct.toFixed(1)}%</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-[#CFAE60]" style={{ background: '#F8F6F2' }}>
                  <td className="px-5 py-3 font-display" style={{ color: '#CFAE60' }}>{isEnglish ? 'Average' : 'Promedio'}</td>
                  <td className="px-5 py-3 font-display" style={{ color: '#CFAE60' }}>{formatUSD(unit.avgAnnualRevenueUSD)}</td>
                  <td className="px-5 py-3 font-display" style={{ color: '#CFAE60' }}>
                    {Math.round(unit.performance.reduce((s, p) => s + p.nights, 0) / unit.performance.length)}
                  </td>
                  <td className="px-5 py-3 font-display" style={{ color: '#CFAE60' }}>{unit.avgOccupancyPct}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OTHER UNITS */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#CFAE60' }}>
              {isEnglish ? 'Also in Salvia Building' : 'También en Edificio Salvia'}
            </p>
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>
              {isEnglish ? 'Compare with the other penthouses' : 'Compara con los otros penthouses'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherUnits.map((u) => (
              <Link
                key={u.id}
                to={salviaUnitPath(u.slug, isEnglish)}
                className="group flex bg-white border border-border overflow-hidden"
              >
                <div className="w-1/3 overflow-hidden">
                  <img
                    src={u.image}
                    alt={u.name[language]}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-2/3 p-5 flex flex-col justify-center">
                  <p className="font-body text-[11px] tracking-[3px] uppercase mb-1" style={{ color: '#CFAE60' }}>
                    {u.code} · {u.airbnbRating.toFixed(2)} ★
                  </p>
                  <h3 className="font-display text-[20px] font-light mb-1">{u.name[language]}</h3>
                  <p className="font-body text-[13px] text-muted-foreground mb-3">{u.subtitle[language]}</p>
                  <p className="font-display text-[18px]" style={{ color: '#1C1C1C' }}>
                    {formatUSD(u.askingPriceUSD)} · ROI {u.grossRoiPct.toFixed(2)}%
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 text-center border-t border-border" style={{ background: '#1C1C1C', color: '#fff' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <h2 className="font-display font-light mb-6" style={{ fontSize: 'clamp(28px, 3.8vw, 44px)' }}>
            {isEnglish ? `Acquire ${unit.name.en}` : `Adquiere el ${unit.name.es}`}
          </h2>
          <p className="font-body font-light text-white/75 mb-10" style={{ fontSize: '17px' }}>
            {isEnglish
              ? 'Talk to a Rivana advisor to review the full data room, financial statements and Airbnb history.'
              : 'Habla con un asesor Rivana para revisar el data room completo, los estados financieros y el historial Airbnb.'}
          </p>
          <div className="flex flex-wrap justify-center gap-[16px]">
            <Button
              size="lg"
              onClick={() => openModal()}
              className="rounded-none"
              style={{ background: '#CFAE60', color: '#fff' }}
            >
              {isEnglish ? 'Schedule Private Showing' : 'Agendar Visita Privada'}
            </Button>
            <a
              href={salviaWhatsAppUrl(unit.whatsappMsg[language])}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-6 font-body text-sm tracking-wide border border-white/40 text-white hover:bg-white/10"
            >
              Mas información de Salvia
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}