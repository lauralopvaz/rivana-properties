import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_LINK = 'https://wa.me/529988457224';

const DiagramImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="my-8">
    <img
      src={src}
      alt={alt}
      className="w-full rounded-sm border border-[#D9CAB3]"
      loading="lazy"
      width={1200}
      height={800}
    />
    <p className="text-xs text-muted-foreground font-body text-center mt-2 italic">{alt}</p>
  </div>
);

const StepItem = ({ num, label, children }: { num: number; label: string; children: React.ReactNode }) => (
  <div className="flex gap-4 items-start">
    <span className="font-display text-2xl text-[hsl(var(--gold))] shrink-0 w-8 text-right">{num}</span>
    <p className="font-body text-[17px] leading-[1.8] text-muted-foreground">
      <strong className="text-foreground">{label}</strong> {children}
    </p>
  </div>
);

const FaqItem = ({ q, a }: { q: string; a: string }) => (
  <details className="group border-b border-border py-4">
    <summary className="cursor-pointer font-display text-lg text-foreground list-none flex items-center justify-between">
      {q}
      <span className="text-[hsl(var(--gold))] transition-transform group-open:rotate-45 text-xl ml-4">+</span>
    </summary>
    <p className="font-body text-[17px] leading-[1.8] text-muted-foreground mt-3">{a}</p>
  </details>
);

export const ForeignBuyerGuideBodyEN = () => {
  const { localePath } = useLanguage();

  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>
        Yes — Americans, Canadians, and Europeans can legally own property in Mexico, including beachfront condos and oceanfront penthouses in Cancun and the Riviera Maya. The process is more straightforward than most people expect, and with over $2 billion in planned infrastructure investment and the FIFA World Cup 2026 already boosting demand, there has never been a stronger case for buying now. This guide walks you through every step: from understanding the bank trust (fideicomiso) that makes foreign ownership legal, to selecting the right pre-sale development, to closing costs, tax reporting, and building a rental income portfolio from abroad.
      </p>

      {/* Section 1 */}
      <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">Can Foreigners Buy Property in Mexico? (The Short Answer)</h2>
      <p>
        As of 2026, foreigners are fully allowed to purchase residential property in Mexico. The key distinction is geographic: outside the restricted zone, you can hold direct title in your name, while inside the restricted zone — which covers land within 50 kilometers of the coast or 100 kilometers of an international border — you need to use a bank trust called a fideicomiso to hold residential property. Since virtually every desirable destination in the Mexican Caribbean — Cancun, Playa del Carmen, Tulum, Puerto Morelos, Costa Mujeres — falls within the coastal restricted zone, the fideicomiso is the standard path for foreign buyers. It is not a workaround or a loophole. It is a structure built into Mexican law specifically to encourage international investment.
      </p>

      {/* Section 2 */}
      <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">What Is a Fideicomiso? (And Why You Shouldn't Worry About It)</h2>
      <p>
        A fideicomiso is a Mexican bank trust. It allows a foreign buyer — the beneficiary — to hold full ownership rights while a Mexican bank — the trustee — holds the legal title on their behalf. The buyer retains full control: you can sell or transfer the property, rent or lease it, designate heirs, and make any modifications you wish. The fideicomiso is valid for 50 years and is renewable indefinitely. You pay an annual maintenance fee to the bank — usually $550–$1,000 USD — to keep it active. In practical terms, owning through a fideicomiso feels identical to holding a title in your own name.
      </p>
      <p>Typical costs:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Setup fee: ~$500–$1,000 USD</li>
        <li>Annual maintenance: ~$550–$1,000 USD</li>
        <li>SRE permit (one-time): ~$1,600 USD</li>
      </ul>

      <DiagramImage
        src="/images/journal/diagram-en-steps.png"
        alt="The 9-step process for foreign buyers in Mexico's Caribbean coast"
      />

      {/* Section 3 — Steps */}
      <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">Step-by-Step — How to Buy Property in Cancun as a Foreigner</h2>
      <div className="space-y-5 mt-4">
        <StepItem num={1} label="Choose a bilingual, licensed advisor.">
          This is the single most important decision. Your agent should know local developers, pre-sale timelines, STR permit requirements by zone, and have experience guiding international buyers through the fideicomiso process.
        </StepItem>
        <StepItem num={2} label="Select your property.">
          Pre-sale (preventa) and resale are the two main options. Pre-sale delivers the strongest entry prices and highest appreciation potential — typically 15–25% between purchase and delivery. Rivana's current portfolio includes The Reserve at Mayakoba (thereserveatmayakoba.com), Mondrian Residences at Grand Island Cancun, and Edificio Salvia in the Hotel Zone, one of the few buildings in Cancun with an active STR permit.
        </StepItem>
        <StepItem num={3} label="Prepare your documents.">
          Valid passport, proof of address in your home country, proof of funds, and RFC (Mexican tax ID, obtained during the transaction with your notary).
        </StepItem>
        <StepItem num={4} label="Set up the fideicomiso.">
          Your agent coordinates with a Mexican bank. Simultaneously, apply for SRE permission for the foreign purchase — this typically takes 2–3 weeks.
        </StepItem>
        <StepItem num={5} label="Sign with a Notario Publico.">
          The notario is a government-appointed legal authority who oversees all real estate transactions in Mexico. Always verify that the property has a clean, non-ejido title before signing.
        </StepItem>
        <StepItem num={6} label="Pay closing costs.">
          Closing fees are typically 4–7% of the purchase price, paid once at closing. These include acquisition tax, notary fees, and fideicomiso setup.
        </StepItem>
        <StepItem num={7} label="Activate your rental income.">
          Cancun and the Riviera Maya deliver rental yields of 8–12% annually. STR platforms like Airbnb generate strong returns, especially in buildings with an official permit — a key factor Rivana screens for in every recommendation.
        </StepItem>
        <StepItem num={8} label="US/Canada tax reporting.">
          Buying in Mexico as a US citizen can create tax duties in both countries. FATCA reporting (Form 8938) and reporting rental income on US returns may apply. Consult a cross-border tax specialist before closing.
        </StepItem>
        <StepItem num={9} label="Build equity.">
          The market has seen consistent 18–22% year-over-year appreciation since 2022.
        </StepItem>
      </div>

      {/* Section 4 */}
      <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">Why Buy in Cancun and the Riviera Maya in 2026?</h2>
      <p>
        The market has seen consistent year-over-year appreciation of 18–22% since 2022. Pre-sale properties are delivering returns of 15–25% between purchase and delivery, making this one of the highest-performing markets in Latin America. Three macro forces are converging this year: the FIFA World Cup 2026 co-hosted by Mexico, bringing record tourism demand; over $2B in planned infrastructure investment including airport expansion and the Nichupte corridor bridge; and dollar-advantaged pricing — a luxury beachfront condo here costs 50–70% less than a comparable property in Miami or Los Angeles, while generating similar or stronger rental income. The pre-sale window is closing as neighborhoods mature — buyers who enter now lock in entry pricing before delivery-phase appreciation.
      </p>

      {/* Section 5 — Why Rivana */}
      <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">Why Rivana Is Your Ally as a Foreign Buyer</h2>

      <DiagramImage
        src="/images/journal/diagram-why-rivana.png"
        alt="What sets Rivana apart for international investors"
      />

      <p>
        Buying property in another country requires more than market knowledge — it requires someone genuinely aligned with your interests, not a commission. Here is what distinguishes Rivana:
      </p>
      <p>
        <strong className="text-foreground">Exclusive focus on the Mexican Caribbean.</strong> We operate only in Cancun, Riviera Maya, and the surrounding coast. That specialization means we know which developments have delivery track records, which buildings carry legitimate STR permits, and which zones are appreciating fastest heading into 2026.
      </p>
      <p>
        <strong className="text-foreground">Fully bilingual, without exception.</strong> Every contract clause, every negotiation, every closing is explained in your language. No moments where you sign something without fully understanding it.
      </p>
      <p>
        <strong className="text-foreground">We verify STR permits before any recommendation.</strong> Not every building in Cancun allows Airbnb. At Rivana, rental permit eligibility is one of the first filters we apply — especially relevant for Edificio Salvia and The Residences at Grand Island, two of the few Hotel Zone properties with active permits.
      </p>
      <p>
        <strong className="text-foreground">We confirm clean, non-ejido title on every property.</strong> Ejido land is the single most common legal trap for foreign buyers in Mexico. We verify title status before recommending anything.
      </p>
      <p>
        <strong className="text-foreground">Direct developer relationships mean real pre-sale access.</strong> Our team has direct relationships with developers behind The Reserve at Mayakoba, Mondrian Residences, and our broader portfolio — giving you access to pre-sale pricing and payment plans not available through generic agents.
      </p>
      <p>
        <strong className="text-foreground">No-pressure advisory, always.</strong> Rivana's voice is that of a trusted advisor who speaks as a friend protecting your patrimony — not a closer chasing a transaction. You move at your pace, with full information.
      </p>
      <blockquote className="border-l-2 border-[hsl(var(--gold))] pl-6 py-4 my-8">
        <p className="font-display text-2xl italic text-foreground leading-relaxed">
          "Tu inversion, tu legado." — That is not a tagline. It is the standard we hold every recommendation to.
        </p>
      </blockquote>

      {/* Section 6 — Featured Properties */}
      <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">Featured Properties for Foreign Buyers</h2>
      <p>
        <strong className="text-foreground">The Reserve at Mayakoba</strong> — Playa del Carmen's most exclusive gated community. Golf, beach club, and direct access to the Fairmont, Rosewood, and Banyan Tree resorts. Ideal for lifestyle value and long-term capital appreciation. <a href="https://thereserveatmayakoba.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--gold))] hover:underline">thereserveatmayakoba.com</a>
      </p>
      <p>
        <strong className="text-foreground">Mondrian Residences at Grand Island Cancun</strong> — Branded luxury residences in the Hotel Zone with hotel-managed rental program. Strong STR yields and brand-backed exit liquidity. Pre-sale pricing available.
      </p>
      <p>
        <strong className="text-foreground">Edificio Salvia — Hotel Zone</strong> — One of the few Cancun buildings with an active Short-Term Rental permit. Purpose-built for investors. Strong occupancy projections for the 2026 World Cup season.
      </p>
      <p>
        <Link to={localePath('/listings')} className="text-[hsl(var(--gold))] hover:underline font-display">
          View full portfolio →
        </Link>
      </p>

      {/* Section 7 — FAQ */}
      <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">Frequently Asked Questions</h2>
      <div className="mt-4">
        <FaqItem
          q="Do I need to be a Mexican resident to buy?"
          a="No. You don't need residency, a visa, or even to set foot in Mexico to buy legally."
        />
        <FaqItem
          q="Can I get a mortgage in Mexico as a foreigner?"
          a="Cross-border financing options exist through US lenders with Mexican real estate programs. Most pre-sale purchases use developer payment plans — typically 30–50% upfront, balance in installments to delivery."
        />
        <FaqItem
          q="Is ejido land safe to buy?"
          a="No. Always verify the property is not ejido land before any deposit. Your Rivana advisor confirms title status as part of every recommendation."
        />
        <FaqItem
          q="How long does the process take?"
          a="Resale: 45–90 days from signed offer to closing. Pre-sale: the fideicomiso is set up at delivery-phase closing."
        />
      </div>

      {/* CTA */}
      <div className="bg-card border border-[hsl(var(--gold)_/_0.3)] rounded-sm p-8 text-center my-12">
        <p className="font-display text-xl text-foreground mb-4">
          Ready to explore your options? Speak directly with a Rivana advisor — bilingual and 100% specialized in the Mexican Caribbean.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[hsl(var(--gold))] text-background font-display text-sm tracking-wider uppercase px-8 py-3 rounded-sm hover:opacity-90 transition-opacity"
        >
          Foreign Buyer Advisory
        </a>
      </div>
    </div>
  );
};

export const ForeignBuyerGuideBodyES = () => {
  const { localePath } = useLanguage();

  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>
        Si — los extranjeros pueden comprar propiedad en Mexico de forma legal, segura y sin necesidad de ser residentes. Cancun, Playa del Carmen, Puerto Morelos, Costa Mujeres y Tulum reciben cada ano miles de compradores internacionales. Esta guia te explica exactamente como funciona el proceso: desde el fideicomiso bancario que permite la propiedad extranjera, hasta los costos de cierre, el reporte fiscal y las propiedades del portafolio Rivana que mejor se adaptan a tu perfil de inversion.
      </p>

      {/* Section 1 */}
      <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">¿Pueden los extranjeros comprar propiedad en Mexico?</h2>
      <p>
        A partir de 2026, los extranjeros pueden comprar propiedad residencial en Mexico sin restricciones. La distincion clave es geografica: fuera de la zona restringida, puedes tener titulo directo a tu nombre, mientras que dentro de la zona restringida — que cubre terrenos a menos de 50 kilometros de la costa o 100 kilometros de una frontera internacional — necesitas un fideicomiso bancario para poseer propiedad residencial. Dado que practicamente todos los destinos deseables del Caribe Mexicano — Cancun, Playa del Carmen, Tulum, Puerto Morelos, Costa Mujeres — estan dentro de la zona costera restringida, el fideicomiso es la via estandar para compradores extranjeros. No es un atajo ni una laguna legal. Es una estructura incorporada en la ley mexicana especificamente para fomentar la inversion internacional.
      </p>

      {/* Section 2 */}
      <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">¿Que es el Fideicomiso? Explicado sin tecnicismos</h2>
      <p>
        Un fideicomiso es un contrato de fideicomiso bancario mexicano. Permite que un comprador extranjero — el fideicomisario — mantenga todos los derechos de propiedad mientras un banco mexicano — el fiduciario — mantiene el titulo legal en su nombre. El comprador conserva el control total: puedes vender o transferir la propiedad, rentarla, designar herederos y hacer cualquier modificacion que desees. El fideicomiso es valido por 50 anos y es renovable indefinidamente. Pagas una cuota anual de mantenimiento al banco — generalmente $550–$1,000 USD — para mantenerlo activo. En terminos practicos, poseer a traves de un fideicomiso se siente identico a tener un titulo a tu nombre.
      </p>
      <p>Costos tipicos:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Cuota de constitucion: ~$500–$1,000 USD</li>
        <li>Mantenimiento anual: ~$550–$1,000 USD</li>
        <li>Permiso SRE (unico): ~$1,600 USD</li>
      </ul>

      <DiagramImage
        src="/images/journal/diagram-es-steps.png"
        alt="El proceso de 9 pasos para compradores extranjeros en la costa del Caribe Mexicano"
      />

      {/* Section 3 — Steps */}
      <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">Guia Paso a Paso — Como Comprar en Cancun Siendo Extranjero</h2>
      <div className="space-y-5 mt-4">
        <StepItem num={1} label="Elige un asesor bilingue y certificado.">
          Esta es la decision mas importante. Tu agente debe conocer a los desarrolladores locales, los plazos de preventa, los requisitos de permisos STR por zona, y tener experiencia guiando a compradores internacionales a traves del proceso de fideicomiso.
        </StepItem>
        <StepItem num={2} label="Selecciona tu propiedad.">
          Preventa y reventa son las dos opciones principales. La preventa ofrece los mejores precios de entrada y el mayor potencial de plusvalia — tipicamente 15–25% entre la compra y la entrega. El portafolio actual de Rivana incluye The Reserve at Mayakoba (thereserveatmayakoba.com), Mondrian Residences en Grand Island Cancun, y Edificio Salvia en la Zona Hotelera, uno de los pocos edificios en Cancun con permiso STR activo.
        </StepItem>
        <StepItem num={3} label="Prepara tus documentos.">
          Pasaporte vigente, comprobante de domicilio en tu pais de origen, comprobante de fondos y RFC (obtenido durante la transaccion con tu notario).
        </StepItem>
        <StepItem num={4} label="Constituye el fideicomiso.">
          Tu asesor coordina con un banco mexicano. Simultaneamente, se solicita el permiso de la SRE para la compra extranjera — esto tipicamente toma 2–3 semanas.
        </StepItem>
        <StepItem num={5} label="Firma ante Notario Publico.">
          El notario es una autoridad legal nombrada por el gobierno que supervisa todas las transacciones inmobiliarias en Mexico. Siempre verifica que la propiedad tenga titulo limpio, libre de ejido, antes de firmar.
        </StepItem>
        <StepItem num={6} label="Paga costos de cierre.">
          Los costos de cierre son tipicamente 4–7% del precio de compra, pagados una vez al cierre. Incluyen impuesto de adquisicion, honorarios notariales y constitucion del fideicomiso.
        </StepItem>
        <StepItem num={7} label="Activa tu ingreso por renta.">
          Cancun y la Riviera Maya entregan rendimientos de renta del 8–12% anual. Las plataformas STR como Airbnb generan fuertes retornos, especialmente en edificios con permiso oficial — un factor clave que Rivana evalua en cada recomendacion.
        </StepItem>
        <StepItem num={8} label="Declara en tu pais.">
          Comprar en Mexico como ciudadano estadounidense puede generar obligaciones fiscales en ambos paises. El reporte FATCA (Formulario 8938) y la declaracion de ingresos por renta en tus declaraciones de EE.UU. pueden aplicar. Consulta a un especialista fiscal binacional antes de cerrar.
        </StepItem>
        <StepItem num={9} label="Construye patrimonio.">
          El mercado ha visto una plusvalia consistente del 18–22% anual desde 2022.
        </StepItem>
      </div>

      {/* Section 4 */}
      <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">¿Por que comprar en Cancun y la Riviera Maya en 2026?</h2>
      <p>
        El mercado ha visto una plusvalia consistente del 18–22% ano tras ano desde 2022. Las propiedades en preventa estan entregando retornos del 15–25% entre compra y entrega, convirtiendolo en uno de los mercados de mejor desempeno en America Latina. Tres fuerzas macro convergen este ano: el Mundial FIFA 2026 co-organizado por Mexico, trayendo demanda turistica record; mas de $2 mil millones en inversion en infraestructura planificada incluyendo expansion del aeropuerto y el puente del corredor Nichupte; y precios ventajosos en dolares — un condominio de lujo frente al mar aqui cuesta 50–70% menos que una propiedad comparable en Miami o Los Angeles, mientras genera ingresos por renta similares o superiores. La ventana de preventa se esta cerrando a medida que las zonas maduran — los compradores que entren ahora aseguran precios de entrada antes de la plusvalia de fase de entrega.
      </p>

      {/* Section 5 — Why Rivana */}
      <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">Por que Rivana es tu aliado como extranjero</h2>

      <DiagramImage
        src="/images/journal/diagram-why-rivana.png"
        alt="Lo que distingue a Rivana para inversionistas internacionales"
      />

      <p>
        Comprar propiedad en otro pais requiere mas que conocimiento del mercado — requiere a alguien genuinamente alineado con tus intereses y no con una comision. Esto es lo que distingue a Rivana:
      </p>
      <p>
        <strong className="text-foreground">Enfoque exclusivo en el Caribe Mexicano.</strong> Operamos unicamente en Cancun, la Riviera Maya y la costa adyacente. Esa especializacion significa que sabemos que desarrollos tienen historial de entrega, que edificios cuentan con permisos de renta a corto plazo legitimos, y que zonas aprecian mas rapido de cara al 2026.
      </p>
      <p>
        <strong className="text-foreground">Equipo completamente bilingue, sin excepcion.</strong> Cada clausula contractual, cada negociacion, cada cierre se explica en tu idioma. No hay momentos en que firmes algo sin entenderlo completamente.
      </p>
      <p>
        <strong className="text-foreground">Verificamos permisos de renta antes de cualquier recomendacion.</strong> No todos los edificios en Cancun permiten Airbnb. En Rivana, la elegibilidad de permiso STR es uno de los primeros filtros que aplicamos — especialmente relevante para Edificio Salvia y The Residences at Grand Island.
      </p>
      <p>
        <strong className="text-foreground">Confirmamos titulo limpio, libre de ejido, en cada propiedad.</strong> El terreno ejidal es la trampa legal mas comun para compradores extranjeros en Mexico.
      </p>
      <p>
        <strong className="text-foreground">Las relaciones directas con desarrolladores significan acceso real a preventa.</strong> Acceso a precios de preventa, inventario temprano y esquemas de pago que no estan disponibles a traves de agentes genericos.
      </p>
      <p>
        <strong className="text-foreground">Asesoria sin presion, siempre.</strong> La voz de Rivana es la de un asesor de confianza que habla como un amigo que protege tu patrimonio.
      </p>
      <blockquote className="border-l-2 border-[hsl(var(--gold))] pl-6 py-4 my-8">
        <p className="font-display text-2xl italic text-foreground leading-relaxed">
          "Tu inversion, tu legado." — No es un slogan. Es el estandar con el que evaluamos cada recomendacion.
        </p>
      </blockquote>

      {/* Section 6 — Featured Properties */}
      <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">Propiedades Destacadas para Compradores Extranjeros</h2>
      <p>
        <strong className="text-foreground">The Reserve at Mayakoba</strong> — La comunidad cerrada mas exclusiva de Playa del Carmen. Golf, club de playa y acceso directo a los resorts Fairmont, Rosewood y Banyan Tree. Ideal para valor de estilo de vida y plusvalia a largo plazo. <a href="https://thereserveatmayakoba.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--gold))] hover:underline">thereserveatmayakoba.com</a>
      </p>
      <p>
        <strong className="text-foreground">Mondrian Residences en Grand Island Cancun</strong> — Residencias de lujo de marca en la Zona Hotelera con programa de renta administrado por el hotel. Fuertes rendimientos STR y liquidez de salida respaldada por la marca. Precios de preventa disponibles.
      </p>
      <p>
        <strong className="text-foreground">Edificio Salvia — Zona Hotelera</strong> — Uno de los pocos edificios en Cancun con permiso activo de Renta a Corto Plazo. Disenado para inversionistas. Fuertes proyecciones de ocupacion para la temporada del Mundial 2026.
      </p>
      <p>
        <Link to={localePath('/listings')} className="text-[hsl(var(--gold))] hover:underline font-display">
          Ver portafolio completo →
        </Link>
      </p>

      {/* Section 7 — FAQ */}
      <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">Preguntas Frecuentes</h2>
      <div className="mt-4">
        <FaqItem
          q="¿Necesito ser residente mexicano para comprar?"
          a="No. No necesitas residencia, visa, ni siquiera pisar Mexico para comprar legalmente."
        />
        <FaqItem
          q="¿Puedo obtener una hipoteca en Mexico como extranjero?"
          a="Existen opciones de financiamiento transfronterizo a traves de prestamistas estadounidenses con programas de bienes raices mexicanos. La mayoria de las compras en preventa usan planes de pago del desarrollador — tipicamente 30–50% de enganche, el saldo en parcialidades hasta la entrega."
        />
        <FaqItem
          q="¿Es seguro comprar terreno ejidal?"
          a="No. Siempre verifica que la propiedad no sea terreno ejidal antes de cualquier deposito. Tu asesor Rivana confirma el estatus del titulo como parte de cada recomendacion."
        />
        <FaqItem
          q="¿Cuanto tiempo toma el proceso?"
          a="Reventa: 45–90 dias desde la oferta firmada hasta el cierre. Preventa: el fideicomiso se constituye al cierre en fase de entrega."
        />
      </div>

      {/* CTA */}
      <div className="bg-card border border-[hsl(var(--gold)_/_0.3)] rounded-sm p-8 text-center my-12">
        <p className="font-display text-xl text-foreground mb-4">
          ¿Listo para explorar tus opciones? Habla directamente con un asesor Rivana — bilingue y 100% especializado en el Caribe Mexicano.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[hsl(var(--gold))] text-background font-display text-sm tracking-wider uppercase px-8 py-3 rounded-sm hover:opacity-90 transition-opacity"
        >
          Asesoria para extranjeros
        </a>
      </div>
    </div>
  );
};
