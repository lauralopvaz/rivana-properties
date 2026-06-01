import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEOHead } from '@/components/SEOHead'
import { useLanguage } from '@/contexts/LanguageContext'
import { useSchedulingModal } from '@/contexts/SchedulingModalContext'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ImmediateDeliveryCard } from '@/components/ImmediateDeliveryCard'
import { SalviaUnitCard } from '@/components/SalviaUnitCard'
import { salviaUnits } from '@/data/salvia-units'
import {
  immediateDeliveryUnits,
  formatMXN,
  whatsappUrl,
  LA_AMADA_HERO_IMAGE,
} from '@/data/immediate-delivery'
import { Check } from 'lucide-react'

const WHATSAPP_GENERIC = {
  es: 'Hola Rivana, me interesan las propiedades de entrega inmediata.',
  en: "Hi Rivana, I'm interested in your immediate-delivery properties.",
}

const benefits = [
  {
    icon: '⏱',
    title: { es: 'Sin Esperas', en: 'No Delays' },
    desc: {
      es: 'Muévete este mismo mes. Sin años de construcción ni cambios de fecha.',
      en: 'Move in this month. No multi-year construction, no shifting timelines.',
    },
  },
  {
    icon: '$',
    title: { es: 'Ingreso Inmediato', en: 'Immediate Income' },
    desc: {
      es: 'Empieza a generar renta desde el primer día con programa concierge opcional.',
      en: 'Start generating rental income from day one with an optional concierge program.',
    },
  },
  {
    icon: '✓',
    title: { es: 'Todo Incluido', en: 'All Included' },
    desc: {
      es: 'Amueblada, equipada y lista. Mobiliario de diseñador y electrodomésticos premium.',
      en: 'Furnished, equipped and ready. Designer furniture and premium appliances included.',
    },
  },
  {
    icon: '◆',
    title: { es: 'Cero Estrés', en: 'Zero Stress' },
    desc: {
      es: 'Cierre transparente en 30–45 días. Asesoría legal y notarial de principio a fin.',
      en: 'Transparent 30–45 day close. Legal and notary advisory from start to finish.',
    },
  },
]

const comparison = {
  headers: {
    es: ['Aspecto', 'Entrega Inmediata', 'Preventa'],
    en: ['Aspect', 'Immediate Delivery', 'Pre-sale'],
  },
  rows: [
    {
      es: ['Tiempo de mudanza', '30–45 días', '2–4 años'],
      en: ['Move-in timeline', '30–45 days', '2–4 years'],
    },
    {
      es: ['Amueblado', 'Incluido (paquete de diseñador)', 'No incluido'],
      en: ['Furnishing', 'Included (designer package)', 'Not included'],
    },
    {
      es: ['Ingreso por renta', 'Desde el primer mes', 'Tras la entrega'],
      en: ['Rental income', 'From month one', 'After delivery'],
    },
    {
      es: ['Personalización', 'Limitada', 'Total durante construcción'],
      en: ['Customization', 'Limited', 'Full during construction'],
    },
    {
      es: ['Disponibilidad de unidades', 'Inventario final', 'Mejor selección'],
      en: ['Unit availability', 'Final inventory', 'Best selection'],
    },
    {
      es: ['Precio', 'Precio de mercado actual', 'Descuento de preventa'],
      en: ['Pricing', 'Current market price', 'Pre-sale discount'],
    },
  ],
}

const investmentBenefits = [
  {
    title: { es: 'Ingreso por Renta Inmediato', en: 'Immediate Rental Income' },
    desc: {
      es: 'Unidades amuebladas pueden integrarse al programa de renta vacacional desde el primer día.',
      en: 'Furnished units can join the vacation rental program from day one.',
    },
  },
  {
    title: { es: 'Propiedad con Ventajas Fiscales', en: 'Tax-Advantaged Ownership' },
    desc: {
      es: 'Estructura fideicomiso bancario para extranjeros con deducciones por operación de renta.',
      en: 'Bank trust structure for foreign owners with deductions tied to rental operation.',
    },
  },
  {
    title: { es: 'Flexibilidad — Vive o Invierte', en: 'Flexibility — Live or Invest' },
    desc: {
      es: 'Úsala como residencia, segunda casa o activo de renta. Cambia el uso cuando quieras.',
      en: 'Use it as a primary home, second home or rental asset. Switch the use anytime.',
    },
  },
]

const furnishedChecklist = {
  es: [
    'Mobiliario de diseñador',
    'Electrodomésticos completos',
    'Ropa de cama y blancos',
    'Décor y accesorios curados',
    'Cerraduras digitales',
    'Lista para mudarse',
  ],
  en: [
    'Designer furniture',
    'Full appliance package',
    'Bedding & linens',
    'Curated décor & accessories',
    'Smart locks',
    'Move-in ready',
  ],
}

const unfurnishedChecklist = {
  es: [
    'Acabados completos',
    'Sistemas operativos al 100%',
    'Lista para personalizar',
    'Opciones de financiamiento',
    'Paquetes de mobiliario opcionales',
    'Asesoría de diseño disponible',
  ],
  en: [
    'Complete shell',
    'All systems operational',
    'Ready for customization',
    'Financing options available',
    'Optional furniture packages',
    'Design advisory available',
  ],
}

const processSteps = [
  {
    n: '01',
    title: { es: 'Asesoría Inicial', en: 'Schedule Consultation' },
    desc: {
      es: 'Conversación de 30 minutos para entender tu perfil y prioridades.',
      en: '30-minute conversation to understand your profile and priorities.',
    },
  },
  {
    n: '02',
    title: { es: 'Recorrido de Propiedad', en: 'Property Tour' },
    desc: {
      es: 'Visita en persona o tour virtual con tu asesor Rivana.',
      en: 'In-person visit or virtual tour with your Rivana advisor.',
    },
  },
  {
    n: '03',
    title: { es: 'Presenta tu Oferta', en: 'Submit Offer' },
    desc: {
      es: 'Negociación y firma de contrato preliminar.',
      en: 'Negotiation and preliminary contract signing.',
    },
  },
  {
    n: '04',
    title: { es: 'Cierre y Mudanza', en: 'Close & Move In' },
    desc: {
      es: '30–45 días: escrituración, entrega de llaves y mudanza.',
      en: '30–45 days: deed, key handover and move-in.',
    },
  },
]

const faqs = [
  {
    q: { es: '¿Puedo usarla como renta vacacional de inmediato?', en: 'Can I use it as a vacation rental immediately?' },
    a: {
      es: 'Sí. Las unidades amuebladas pueden integrarse al programa concierge opcional desde la entrega de llaves.',
      en: 'Yes. Furnished units can join the optional concierge program from key handover.',
    },
  },
  {
    q: { es: '¿Hay financiamiento disponible?', en: 'Is financing available?' },
    a: {
      es: 'Sí, hasta 70% LTV con bancos aliados, sujeto a aprobación crediticia.',
      en: 'Yes, up to 70% LTV with partner lenders, subject to credit approval.',
    },
  },
  {
    q: { es: '¿Puedo rentarla cuando no la uso?', en: 'Can I rent it out while not using it?' },
    a: {
      es: 'Sí, a través del programa de renta de La Amada o operadores externos.',
      en: 'Yes, through the La Amada rental program or third-party operators.',
    },
  },
  {
    q: { es: '¿Qué pasa con impuestos y mantenimiento?', en: 'What about taxes and maintenance?' },
    a: {
      es: 'Varía por unidad. Consulta la ficha de cada propiedad o solicítanos un desglose detallado.',
      en: 'Varies by unit. Review each property sheet or request a detailed breakdown.',
    },
  },
  {
    q: { es: '¿Puedo personalizar el mobiliario?', en: 'Can I customize the furnishings?' },
    a: {
      es: 'Sí, contamos con paquetes a medida. Contáctanos para opciones personalizadas.',
      en: 'Yes, custom packages are available. Contact us for tailored options.',
    },
  },
]

export default function ImmediateDelivery() {
  const { language, isEnglish } = useLanguage()
  const { openModal } = useSchedulingModal()
  const [openFaq, setOpenFaq] = useState<string | undefined>()

  const path = isEnglish ? '/en/immediate-delivery' : '/entregas-inmediatas'

  const title = isEnglish
    ? 'Move-In Ready Properties · Immediate Delivery | Rivana'
    : 'Propiedades Listas para Habitar · Entregas Inmediatas | Rivana'
  const description = isEnglish
    ? 'Fully furnished, turnkey residences ready for immediate occupancy or rental income. Caribbean luxury, no waiting.'
    : 'Residencias amuebladas y llave en mano listas para habitar o generar renta. Lujo caribeño, sin esperas.'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: isEnglish ? 'Immediate Delivery Properties' : 'Propiedades de Entrega Inmediata',
    itemListElement: immediateDeliveryUnits.map((u, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Apartment',
        name: `${u.development.en} — Unit ${u.code}`,
        description: u.subtitle.en,
        floorSize: { '@type': 'QuantitativeValue', value: u.area, unitCode: 'MTK' },
        numberOfRooms: u.bedrooms,
      },
    })),
  }

  return (
    <main className="bg-background text-foreground">
      <SEOHead
        title={title}
        description={description}
        path={path}
        hreflangEs="/entregas-inmediatas"
        hreflangEn="/en/immediate-delivery"
        schema={schema}
      />

      {/* HERO */}
      <section className="relative min-h-[78vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(160deg, rgba(28,28,28,0.55) 0%, rgba(28,28,28,0.15) 55%, rgba(28,28,28,0.78) 100%), url(${LA_AMADA_HERO_IMAGE})`,
          }}
          aria-hidden
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 text-white w-full">
          <p
            className="font-body text-xs tracking-[0.4em] uppercase mb-6"
            style={{ color: '#CFAE60' }}
          >
            {isEnglish ? 'Move-In Ready · Costa Mujeres' : 'Listas para Habitar · Costa Mujeres'}
          </p>
          <h1
            className="font-display font-light leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(40px, 7vw, 88px)' }}
          >
            {isEnglish ? (
              <>Ready Now. <em className="not-italic text-[#CFAE60]">Move In Today.</em></>
            ) : (
              <>Llave en mano. <em className="not-italic text-[#CFAE60]">Habítalo Hoy.</em></>
            )}
          </h1>
          <p
            className="font-body font-light max-w-2xl mb-10"
            style={{ fontSize: '19px', lineHeight: 1.6 }}
          >
            {isEnglish
              ? 'Fully furnished, turnkey residences ready for immediate occupancy or vacation rental income.'
              : 'Residencias totalmente amuebladas, llave en mano, listas para ocupar o generar renta vacacional.'}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#units"
              className="inline-flex items-center justify-center px-10 h-14 font-body text-sm tracking-wide text-white"
              style={{ background: '#CFAE60' }}
            >
              {isEnglish ? 'Explore Properties' : 'Explorar Propiedades'}
            </a>
            <Button
              variant="outline"
              size="lg"
              onClick={() => openModal()}
              className="rounded-none border-white/40 text-white hover:bg-white/10"
            >
              {isEnglish ? 'Schedule Private Showing' : 'Agenda Visita Privada'}
            </Button>
          </div>
        </div>
      </section>

      {/* WHY READY NOW */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p
              className="font-body text-xs tracking-[0.4em] uppercase mb-4"
                style={{ color: '#CFAE60' }}
              >
                {isEnglish ? 'Why Ready Now' : 'Por qué elegir Llave en mano'}
              </p>
            <h2
              className="font-display font-light"
              style={{ fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1.2 }}
            >
              {isEnglish
                ? 'Four reasons to move in this month'
                : 'Cuatro razones para mudarte este mes'}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title.en} className="p-8 border border-border bg-white">
                <div
                  className="font-display text-4xl mb-4"
                  style={{ color: '#CFAE60' }}
                >
                  {b.icon}
                </div>
                <h3 className="font-display text-[22px] font-light mb-3">
                  {b.title[language]}
                </h3>
                <p className="font-body font-light text-muted-foreground text-[15px] leading-relaxed">
                  {b.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNITS GRID */}
      <section id="units" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p
                className="font-body text-xs tracking-[0.4em] uppercase mb-4"
                style={{ color: '#CFAE60' }}
              >
                {isEnglish ? 'Available Now' : 'Disponibles Ahora'}
              </p>
              <h2
                className="font-display font-light"
                style={{ fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1.15 }}
              >
                {isEnglish
                  ? 'Four residences at La Amada'
                  : 'Cuatro residencias en La Amada'}
              </h2>
            </div>
            <p className="font-body font-light text-muted-foreground max-w-md">
              {isEnglish
                ? 'Curated by Rivana inside Costa Mujeres\' most exclusive beachfront community.'
                : 'Curadas por Rivana dentro de la comunidad frente al mar más exclusiva de Costa Mujeres.'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {immediateDeliveryUnits.map((u, i) => (
              <ImmediateDeliveryCard key={u.id} unit={u} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* SALVIA UNITS GRID */}
      <section className="py-20 lg:py-28" style={{ background: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <p
                className="font-body text-xs tracking-[0.4em] uppercase mb-4"
                style={{ color: '#CFAE60' }}
              >
                {isEnglish ? 'Available Now' : 'Disponibles Ahora'}
              </p>
              <h2
                className="font-display font-light"
                style={{ fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1.15 }}
              >
                {isEnglish
                  ? 'Three turn-key residences at Salvia Building'
                  : 'Tres residencias llave en mano en Edificio Salvia'}
              </h2>
            </div>
            <p className="font-body font-light text-muted-foreground max-w-md">
              {isEnglish
                ? 'Operating short-term rental units in Cancún Hotel Zone with proven Airbnb track record.'
                : 'Unidades operando en renta vacacional en la Zona Hotelera de Cancún con historial comprobado en Airbnb.'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {salviaUnits.map((u, i) => (
              <SalviaUnitCard key={u.slug} unit={u} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 lg:py-28 border-y border-border" style={{ background: '#F8F6F2' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p
              className="font-body text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: '#CFAE60' }}
            >
              {isEnglish ? 'Comparison' : 'Comparativa'}
            </p>
            <h2
              className="font-display font-light"
              style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}
            >
              {isEnglish ? 'Ready Now vs Pre-Sale' : 'Llave en mano vs Preventa'}
            </h2>
          </div>
          <div className="overflow-x-auto bg-white border border-border">
            <table className="w-full text-left">
              <thead>
                <tr style={{ background: '#1C1C1C', color: '#fff' }}>
                  {comparison.headers[language].map((h, idx) => (
                    <th
                      key={h}
                      className="px-5 py-4 font-body text-[12px] tracking-[2px] uppercase font-light"
                      style={{ color: idx === 1 ? '#CFAE60' : '#fff' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, i) => (
                  <tr key={i} className="border-t border-border">
                    {row[language].map((cell, j) => (
                      <td
                        key={j}
                        className="px-5 py-4 font-body text-[14px] font-light align-top"
                        style={{
                          color: j === 0 ? '#4B4B4B' : '#1C1C1C',
                          fontWeight: j === 1 ? 400 : 300,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INVESTMENT BENEFITS */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p
              className="font-body text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: '#CFAE60' }}
            >
              {isEnglish ? 'Investment Benefits' : 'Beneficios de Inversión'}
            </p>
            <h2
              className="font-display font-light"
              style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}
            >
              {isEnglish ? 'Why investors choose ready-now' : 'Por qué los inversionistas eligen llave en mano'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investmentBenefits.map((b) => (
              <div key={b.title.en} className="p-8 border border-border bg-white">
                <h3
                  className="font-display text-[24px] font-light mb-3"
                  style={{ color: '#CFAE60' }}
                >
                  {b.title[language]}
                </h3>
                <p className="font-body font-light text-muted-foreground text-[15px] leading-relaxed">
                  {b.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 lg:py-28 border-y border-border" style={{ background: '#F8F6F2' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p
              className="font-body text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: '#CFAE60' }}
            >
              {isEnglish ? "What's Included" : 'Qué Incluye'}
            </p>
            <h2
              className="font-display font-light"
              style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}
            >
              {isEnglish ? 'Two formats, same five-star standard' : 'Dos formatos, mismo estándar cinco estrellas'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white border border-border">
              <p
                className="text-[11px] tracking-[3px] uppercase font-body mb-2"
                style={{ color: '#CFAE60' }}
              >
                {isEnglish ? 'Furnished Units' : 'Unidades Amuebladas'}
              </p>
              <h3 className="font-display text-[26px] font-light mb-5">
                {isEnglish ? 'Move-in ready' : 'Listas para habitar'}
              </h3>
              <ul className="space-y-3">
                {furnishedChecklist[language].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body font-light text-[15px]">
                    <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: '#CFAE60' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-white border border-border">
              <p
                className="text-[11px] tracking-[3px] uppercase font-body mb-2"
                style={{ color: '#CFAE60' }}
              >
                {isEnglish ? 'Unfurnished Units' : 'Unidades Sin Amueblar'}
              </p>
              <h3 className="font-display text-[26px] font-light mb-5">
                {isEnglish ? 'Ready to customize' : 'Listas para personalizar'}
              </h3>
              <ul className="space-y-3">
                {unfurnishedChecklist[language].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body font-light text-[15px]">
                    <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: '#CFAE60' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p
              className="font-body text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: '#CFAE60' }}
            >
              {isEnglish ? 'Process' : 'Proceso'}
            </p>
            <h2
              className="font-display font-light"
              style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}
            >
              {isEnglish ? 'From inquiry to keys in 30–45 days' : 'De la consulta a las llaves en 30–45 días'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.n} className="p-8 border border-border bg-white">
                <span
                  className="font-display text-[42px] font-light leading-none"
                  style={{ color: '#CFAE60' }}
                >
                  {s.n}
                </span>
                <h3 className="font-display text-[22px] font-light mt-4 mb-2">
                  {s.title[language]}
                </h3>
                <p className="font-body font-light text-muted-foreground text-[14px] leading-relaxed">
                  {s.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 border-y border-border" style={{ background: '#F8F6F2' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p
              className="font-body text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: '#CFAE60' }}
            >
              FAQ
            </p>
            <h2
              className="font-display font-light"
              style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}
            >
              {isEnglish ? 'Common questions' : 'Preguntas frecuentes'}
            </h2>
          </div>
          <Accordion
            type="single"
            collapsible
            value={openFaq}
            onValueChange={setOpenFaq}
            className="bg-white border border-border"
          >
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="px-6">
                <AccordionTrigger className="font-display text-[18px] font-light text-left hover:no-underline">
                  {f.q[language]}
                </AccordionTrigger>
                <AccordionContent className="font-body font-light text-[15px] text-muted-foreground leading-relaxed">
                  {f.a[language]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-32" style={{ background: '#1C1C1C', color: '#fff' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p
            className="font-body text-xs tracking-[0.4em] uppercase mb-6"
            style={{ color: '#CFAE60' }}
          >
            {isEnglish ? 'Next Step' : 'Siguiente Paso'}
          </p>
          <h2
            className="font-display font-light mb-6"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: 1.1 }}
          >
            {isEnglish
              ? 'Schedule your private showing'
              : 'Agenda tu visita privada'}
          </h2>
          <p
            className="font-body font-light text-white/70 mb-10 max-w-2xl mx-auto"
            style={{ fontSize: '17px', lineHeight: 1.7 }}
          >
            {isEnglish
              ? 'Personal advisory from a Rivana specialist — not a chatbot, not a call center.'
              : 'Asesoría personal de un especialista Rivana — no un chatbot, no un call center.'}
          </p>
          <div className="flex flex-wrap justify-center gap-[16px]">
            <Button
              variant="gold"
              size="lg"
              onClick={() => openModal()}
              className="rounded-none"
            >
              {isEnglish ? 'Schedule Private Showing' : 'Agenda Visita Privada'}
            </Button>
            <a
              href={whatsappUrl(WHATSAPP_GENERIC[language])}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 h-14 border border-white/40 text-white font-body text-sm tracking-wide hover:bg-white/10 transition"
            >
              Mas información de Salvia
            </a>
          </div>
          <p className="mt-6 font-body text-[13px] text-white/50">
            {isEnglish
              ? 'Starting from '
              : 'Desde '}
            <span style={{ color: '#CFAE60' }}>{formatMXN(9550000)}</span>
          </p>
        </div>
      </section>
    </main>
  )
}