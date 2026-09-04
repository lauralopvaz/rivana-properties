import { SEOHead } from '@/components/SEOHead'
import { useLanguage } from '@/contexts/LanguageContext'
import { waCta } from '@/lib/whatsapp-cta'
import { useSchedulingModal } from '@/contexts/SchedulingModalContext'
import { Button } from '@/components/ui/button'
import { SalviaUnitCard } from '@/components/SalviaUnitCard'
import {
  salviaUnits,
  salviaBuilding,
  SALVIA_BUILDING_IMAGE,
  salviaWhatsAppUrl,
  formatUSD,
} from '@/data/salvia-units'
import salviaPlayaChacMool from '@/assets/salvia/condominio-salvia-salvia-playa-chac-mool-vista-aerea-zona-hotelera-cancun-03.webp.asset.json'

const SALVIA_HERO_IMAGE = salviaPlayaChacMool.url

const GENERIC_WHATSAPP = {
  es: 'Hola Rivana, me interesa el Edificio Salvia en la Zona Hotelera de Cancún.',
  en: "Hi Rivana, I'm interested in the Salvia Building, Hotel Zone Cancún.",
}

export default function SalviaBuilding() {
  const { language, isEnglish } = useLanguage()
  const { openModal } = useSchedulingModal()

  const path = isEnglish ? '/en/hotel-zone/salvia-building' : '/zona-hotelera/edificio-salvia'
  const title = isEnglish
    ? 'Salvia Building · Turn-Key Penthouses Cancún Hotel Zone'
    : 'Edificio Salvia · Penthouses Llave en Mano Zona Hotelera'
  const description = isEnglish
    ? 'Three oceanfront penthouses in Salvia Building with authorized vacation rentals, verified 5-year ROI up to 11.45% and hotel amenities. Immediate delivery in Cancún.'
    : 'Tres penthouses frente al mar en Edificio Salvia con renta vacacional autorizada, ROI verificado de hasta 11.45% y servicios de hotel. Entrega inmediata en Cancún.'

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: isEnglish ? 'Salvia Building Penthouses' : 'Penthouses Edificio Salvia',
      itemListElement: salviaUnits.map((u, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'RealEstateListing',
          name: `${u.name.en} — Salvia Building`,
          description: u.seo.description.en,
          url: `https://rivanaproperties.com${path}/${u.slug}`,
          datePosted: u.datePosted,
          image: u.image,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Cancún',
            addressRegion: 'Quintana Roo',
            addressCountry: 'MX',
            streetAddress: 'Chac Mool / Forum Beach, Hotel Zone',
          },
          numberOfBedrooms: u.bedrooms,
          numberOfBathroomsTotal: u.bathrooms,
          floorSize: { '@type': 'QuantitativeValue', value: u.floorAreaSqFt, unitCode: 'FTK' },
          offers: {
            '@type': 'Offer',
            price: u.askingPriceUSD,
            priceCurrency: 'USD',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: u.airbnbRating,
            reviewCount: u.reviews,
            bestRating: 5,
          },
        },
      })),
    },
  ]

  return (
    <main className="bg-background text-foreground">
      <SEOHead
        title={title}
        description={description}
        path={path}
        hreflangEs="/zona-hotelera/edificio-salvia"
        hreflangEn="/en/hotel-zone/salvia-building"
        schema={schema}
        ogImage={SALVIA_BUILDING_IMAGE}
      />

      {/* HERO */}
      <section className="relative min-h-[82vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(160deg, rgba(28,28,28,0.55) 0%, rgba(28,28,28,0.15) 55%, rgba(28,28,28,0.8) 100%), url(${SALVIA_HERO_IMAGE})`,
          }}
          aria-hidden
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 text-white w-full">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-6" style={{ color: '#CFAE60' }}>
            {salviaBuilding.tag[language]}
          </p>
          <h1
            className="font-display font-light leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(40px, 7vw, 88px)' }}
          >
            {isEnglish ? (
              <>Turn-key oceanfront <em className="not-italic text-[#CFAE60]">penthouses.</em></>
            ) : (
              <>Penthouses frente al mar, <em className="not-italic text-[#CFAE60]">llave en mano.</em></>
            )}
          </h1>
          <p
            className="font-body font-light max-w-2xl mb-10"
            style={{ fontSize: '19px', lineHeight: 1.6 }}
          >
            {salviaBuilding.tagline[language]}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#units"
              className="inline-flex items-center justify-center px-10 h-14 font-body text-sm tracking-wide text-white"
              style={{ background: '#CFAE60' }}
            >
              {isEnglish ? 'Explore Penthouses' : 'Explorar Penthouses'}
            </a>
            <a
              href={salviaWhatsAppUrl(GENERIC_WHATSAPP[language])}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 h-14 font-body text-sm tracking-wide border border-white/40 text-white hover:bg-white/10"
            >
              {waCta(language, 'info')}
            </a>
          </div>
        </div>
      </section>

      {/* EXPLAINER */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-5" style={{ color: '#CFAE60' }}>
            {isEnglish ? 'Operating Business · Not Just a Condo' : 'Negocio en Operación · No solo un condominio'}
          </p>
          <h2
            className="font-display font-light mb-8"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2 }}
          >
            {isEnglish
              ? 'A scarce, authorized short-term-rental asset.'
              : 'Un activo escaso con permiso autorizado de renta vacacional.'}
          </h2>
          <p
            className="font-body font-light text-muted-foreground"
            style={{ fontSize: '18px', lineHeight: 1.8 }}
          >
            {salviaBuilding.description[language]}
          </p>
        </div>
      </section>

      {/* WHY INVEST */}
      <section className="py-20 lg:py-28 border-b border-border" style={{ background: '#F8F6F2' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#CFAE60' }}>
              {isEnglish ? 'Why Invest in Salvia' : 'Por qué invertir en Salvia'}
            </p>
            <h2
              className="font-display font-light"
              style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}
            >
              {isEnglish ? 'Five reasons that set it apart' : 'Cinco razones que la distinguen'}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {salviaBuilding.valueProps.map((v, i) => (
              <div key={i} className="p-6 border border-border bg-white">
                <div
                  className="font-display text-4xl mb-3 font-light"
                  style={{ color: '#CFAE60' }}
                >
                  0{i + 1}
                </div>
                <h3 className="font-display text-[18px] font-light mb-2 leading-snug">
                  {v.title[language]}
                </h3>
                <p className="font-body font-light text-muted-foreground text-[14px] leading-relaxed">
                  {v.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-12 lg:py-16" style={{ background: '#1C1C1C', color: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {salviaBuilding.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl lg:text-4xl mb-1" style={{ color: '#CFAE60' }}>
                {s.value}
              </div>
              <p className="font-body text-[11px] tracking-[2px] uppercase font-light text-white/70">
                {s.label[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* UNITS GRID */}
      <section id="units" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#CFAE60' }}>
                {isEnglish ? 'The Three Penthouses' : 'Los Tres Penthouses'}
              </p>
              <h2
                className="font-display font-light"
                style={{ fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1.15 }}
              >
                {isEnglish ? 'Choose your turn-key business' : 'Elige tu negocio llave en mano'}
              </h2>
            </div>
            <p className="font-body font-light text-muted-foreground max-w-md">
              {isEnglish
                ? 'Each penthouse comes with an active Airbnb listing, recurring guests and a verifiable income history.'
                : 'Cada penthouse incluye listing activo en Airbnb, huéspedes recurrentes e historial de ingresos verificable.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salviaUnits.map((u, i) => (
              <SalviaUnitCard key={u.id} unit={u} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 lg:py-28 border-y border-border" style={{ background: '#F8F6F2' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#CFAE60' }}>
              {isEnglish ? 'Side-by-Side Comparison' : 'Comparativa Lado a Lado'}
            </p>
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(40px, 3.6vw,42px)' }}>
              {isEnglish ? 'Specs · performance · pricing' : 'Especificaciones · desempeño · precio'}
            </h2>
          </div>
          <div className="overflow-x-auto bg-white border border-border">
            <table className="w-full text-left text-[14px] font-body font-light">
              <thead>
                <tr style={{ background: '#1C1C1C', color: '#fff' }}>
                  <th className="px-4 py-3 text-[11px] tracking-[2px] uppercase font-light"> </th>
                  {salviaUnits.map((u) => (
                    <th key={u.id} className="px-4 py-3 text-[11px] tracking-[2px] uppercase font-light" style={{ color: u.highestRoi ? '#CFAE60' : '#fff' }}>
                      {u.code}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {([
                  [isEnglish ? 'Asking Price' : 'Precio', salviaUnits.map(u => formatUSD(u.askingPriceUSD))],
                  [isEnglish ? 'Floor Area' : 'Superficie', salviaUnits.map(u => `${u.floorAreaSqFt} sq ft`)],
                  [isEnglish ? 'Layout' : 'Distribución', salviaUnits.map(u => u.layout[language])],
                  [isEnglish ? 'Max Guests' : 'Huéspedes máx.', salviaUnits.map(u => String(u.maxGuests))],
                  [isEnglish ? 'Beds' : 'Camas', salviaUnits.map(u => u.bedsDescription[language])],
                  [isEnglish ? 'Bathrooms' : 'Baños', salviaUnits.map(u => String(u.bathrooms))],
                  [isEnglish ? 'Balcony' : 'Balcón', salviaUnits.map(u => u.balcony[language])],
                  [isEnglish ? 'Views' : 'Vistas', salviaUnits.map(u => u.views[language])],
                  [isEnglish ? 'Hurricane Shutters' : 'Persianas anti-huracán', salviaUnits.map(u => u.hurricaneShutters ? (isEnglish ? 'Yes' : 'Sí') : 'No')],
                  [isEnglish ? 'Airbnb Rating' : 'Calificación Airbnb', salviaUnits.map(u => `${u.airbnbRating.toFixed(2)} ★`)],
                  [isEnglish ? 'Reviews' : 'Reseñas', salviaUnits.map(u => String(u.reviews))],
                  [isEnglish ? 'Track Record' : 'Historial', salviaUnits.map(u => `${u.trackRecordYears} ${isEnglish ? 'years' : 'años'}`)],
                  [isEnglish ? 'Avg Annual Revenue' : 'Ingreso anual prom.', salviaUnits.map(u => formatUSD(u.avgAnnualRevenueUSD))],
                  [isEnglish ? '2025 Net Income' : 'Neto 2025', salviaUnits.map(u => formatUSD(u.net2025USD))],
                  [isEnglish ? 'Avg Nightly Rate' : 'Tarifa noche prom.', salviaUnits.map(u => formatUSD(u.avgNightlyRateUSD))],
                  [isEnglish ? 'Avg Occupancy' : 'Ocupación prom.', salviaUnits.map(u => `${u.avgOccupancyPct}%`)],
                  [isEnglish ? 'Gross ROI' : 'ROI bruto', salviaUnits.map(u => `${u.grossRoiPct.toFixed(2)}%`)],
                  [isEnglish ? 'Net ROI' : 'ROI neto', salviaUnits.map(u => `${u.netRoiPct.toFixed(1)}%`)],
                ] as [string, string[]][]).map(([label, vals]) => (
                  <tr key={label} className="border-t border-border align-top">
                    <td className="px-4 py-3 sticky left-0 bg-white" style={{ color: '#4B4B4B' }}>{label}</td>
                    {vals.map((v, j) => (
                      <td key={j} className="px-4 py-3" style={{ color: salviaUnits[j].highestRoi ? '#CFAE60' : '#1C1C1C' }}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* LOCATION & AMENITIES */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#CFAE60' }}>
              {isEnglish ? 'Location & Amenities' : 'Ubicación y Amenidades'}
            </p>
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(40px, 3.6vw,42px)' }}>
              {salviaBuilding.location[language]}
            </h2>
            <p className="font-body font-light text-muted-foreground mt-3">
              {salviaBuilding.distances.airport[language]} · {salviaBuilding.distances.downtown[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Walking distance */}
            <div className="p-8 border border-border bg-white">
              <h3 className="font-display text-[22px] font-light mb-5" style={{ color: '#CFAE60' }}>
                {isEnglish ? 'Walking distance' : 'A pasos del edificio'}
              </h3>
              <div className="mb-6">
                <p className="font-body text-[12px] tracking-[2px] uppercase mb-3 text-muted-foreground">
                  {isEnglish ? '1-minute walk' : '1 minuto a pie'}
                </p>
                <ul className="space-y-1.5 font-body font-light text-[15px]">
                  {salviaBuilding.oneMinWalk[language].map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-body text-[12px] tracking-[2px] uppercase mb-3 text-muted-foreground">
                  {isEnglish ? '5-minutes walk' : '5 minutos a pie'}
                </p>
                <ul className="space-y-1.5 font-body font-light text-[15px]">
                  {salviaBuilding.fiveMinWalk[language].map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Building services */}
            <div className="p-8 border border-border bg-white">
              <h3 className="font-display text-[22px] font-light mb-5" style={{ color: '#CFAE60' }}>
                {isEnglish ? 'Hotel-grade services' : 'Servicios estilo hotel'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: isEnglish ? 'Staff' : 'Personal', items: salviaBuilding.staff[language] },
                  { label: isEnglish ? 'Services' : 'Servicios', items: salviaBuilding.services[language] },
                  { label: isEnglish ? 'Facilities' : 'Instalaciones', items: salviaBuilding.facilities[language] },
                ].map((g) => (
                  <div key={g.label}>
                    <p className="font-body text-[12px] tracking-[2px] uppercase mb-3 text-muted-foreground">
                      {g.label}
                    </p>
                    <ul className="space-y-1.5 font-body font-light text-[14px]">
                      {g.items.map((it) => (
                        <li key={it}>· {it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="py-20 lg:py-24 border-t border-border" style={{ background: '#F8F6F2' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#CFAE60' }}>
            {isEnglish ? 'Financial Transparency' : 'Transparencia Financiera'}
          </p>
          <h2 className="font-body  font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.4vw, 38px)' }}>
            {isEnglish ? 'Every number is verifiable.' : 'Cada cifra es verificable.'}
          </h2>
          <p className="font-body font-light text-muted-foreground" style={{ fontSize: '20px', lineHeight: 1.8 }}>
            {isEnglish
              ? 'Revenue, occupancy and ratings come directly from the active Airbnb listings and operating statements. Request a full data room before your private showing.'
              : 'Los ingresos, la ocupación y las calificaciones provienen directamente de los listings activos en Airbnb y los estados operativos. Solicita el data room completo antes de tu visita privada.'}
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <h2 className="font-display font-light mb-6" style={{ fontSize: 'clamp(40px, 4vw,48px)' }}>
            {isEnglish ? 'Schedule a private showing' : 'Agenda una visita privada'}
          </h2>
          <p className="font-body font-light text-muted-foreground mb-10" style={{ fontSize: '20px' }}>
            {isEnglish
              ? 'Walk the building, meet the team and review the books with a Rivana advisor.'
              : 'Recorre el edificio, conoce al equipo y revisa los números con un asesor Rivana.'}
          </p>
          <div className="flex flex-wrap justify-center gap-[16px]">
            <button
              type="button"
              onClick={() => openModal()}
              className="inline-flex items-center justify-center h-14 px-10 font-body text-base tracking-wide text-white hover:brightness-110 transition-all"
              style={{ background: '#CFAE60' }}
            >
              {isEnglish ? 'Schedule Private Showing' : 'Agendar Visita Privada'}
            </button>
            <a
              href={salviaWhatsAppUrl(GENERIC_WHATSAPP[language])}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-10 font-body text-base tracking-wide bg-[#1C1C1C] text-white hover:bg-[#1C1C1C]/90 transition-colors"
            >
              {waCta(language, 'info')}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}