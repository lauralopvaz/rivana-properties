import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const WA_BASE = 'https://wa.me/529988457224';
const UTM = '?utm_source=journal&utm_medium=blog&utm_campaign=retiro-canadiense-2026';

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">{children}</h2>
);
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-foreground mt-8">{children}</h3>
);

const Callout = ({ children }: { children: React.ReactNode }) => (
  <aside className="border-l-2 border-[hsl(var(--gold))] bg-card/60 px-6 py-5 my-6 space-y-3">
    {children}
  </aside>
);

const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-2 border-primary pl-6 py-4 my-8">
    <p className="font-display text-2xl italic text-foreground leading-relaxed">{children}</p>
  </blockquote>
);

const FaqItem = ({ q, a }: { q: string; a: React.ReactNode }) => (
  <details className="group border-b border-border py-4">
    <summary className="cursor-pointer font-display text-lg text-foreground list-none flex items-center justify-between">
      {q}
      <span className="text-[hsl(var(--gold))] transition-transform group-open:rotate-45 text-xl ml-4">+</span>
    </summary>
    <p className="font-body text-[17px] leading-[1.8] text-muted-foreground mt-3">{a}</p>
  </details>
);

const CTA = ({ title, body, button, message }: { title: string; body: string; button: string; message: string }) => (
  <div className="border border-[hsl(var(--gold)_/_0.5)] bg-card px-6 py-8 my-10 text-center space-y-3">
    <h3 className="text-foreground font-display text-2xl">{title}</h3>
    <p className="font-body text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">{body}</p>
    <a
      href={`${WA_BASE}${UTM}&text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener"
      className="inline-block mt-2 bg-[hsl(var(--gold))] text-black font-body tracking-wider uppercase text-sm px-8 py-3 hover:opacity-90 transition-opacity"
    >
      {button}
    </a>
  </div>
);

export const RetiringCanadianBody = () => {
  const { language, localePath } = useLanguage();

  if (language === 'en') {
    return (
      <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
        <p>Something shifted in the winter of 2026–2026. Snowbird Advisor's annual survey of more than 4,000 Canadian travellers found that the share of snowbirds choosing destinations outside the United States nearly doubled — from 12% to 23% in a single year — while those planning to winter in the US dropped from 82% to 70%. CBC News and The Globe and Mail have documented the trend: couples from Ontario, after decades in Florida, are buying property in Mexico, citing lower costs, safety and quality of life.</p>
        <p>If you are Canadian and weighing this move, this guide gathers what you need to know in 2026 — including recent regulatory changes that many outdated articles do not reflect — with data from official and verifiable sources.</p>

        <Callout>
          <ul className="list-disc pl-6 space-y-1">
            <li>~400,000 Canadian snowbirds travel south each winter (Canadian Snowbird Association / Envision Financial)</li>
            <li>12% → 23%: snowbirds choosing non-US destinations between 2024 and 2026 (Snowbird Advisor)</li>
            <li>180 days: visa-free visitor stay for Canadians in Mexico (INM)</li>
            <li>+14.3%: home-price appreciation in Quintana Roo in 2026 — the highest in Mexico (SHF / Global Property Guide)</li>
          </ul>
        </Callout>

        <H2>A bit of history: why Cancún is no accident</H2>
        <p>Cancún is probably the most successful planned city in Latin America. In the late 1960s the Mexican government — through what is now FONATUR — set out to diversify the economy and, backed by technical studies, selected an almost uninhabited sandbar in the Caribbean as the site for an integrated tourism hub. Development began in 1970, and in a little over 50 years the city grew from a handful of fishermen to a metropolitan area of more than 900,000, home to Mexico's second-busiest airport, with seasonal direct flights from Toronto, Montreal, Vancouver and Calgary.</p>
        <p>That planning matters for a retiree: it means medical, aviation and services infrastructure designed to international standards — something few beach destinations in the world can offer.</p>
        <p>Key timeline: 1970 FONATUR project begins · 1974 Quintana Roo becomes a state · 1990s–2000s Riviera Maya expansion · 2023–2024 Maya Train and new urban works · 2026 consolidated luxury corridors.</p>

        <H2>What changed in 2026: Mexico's new residency rules (read this first)</H2>
        <Callout>
          <p className="text-foreground font-semibold">This is what most guides online still don't tell you.</p>
          <p>Since July 2026, Mexico recalculated residency financial requirements based on the UMA, and on January 1, 2026, processing fees essentially doubled. In practical 2026 terms:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Visitor (no visa):</strong> Canadians can stay up to 180 days — enough for a full snowbird winter.</li>
            <li><strong className="text-foreground">Temporary Residency (1 to 4 years):</strong> requires demonstrating roughly USD $4,400 in monthly income (last 6 months) or approximately USD $74,000 in savings/investments (12-month average). Exact figures vary ±5–10% by consulate and exchange rate.</li>
            <li><strong className="text-foreground">Permanent Residency:</strong> roughly USD $7,300–7,400 monthly or ~USD $294,000–300,000 in savings; since July 2026, the direct route from abroad is reserved for retirees and pensioners.</li>
            <li><strong className="text-foreground">Property owners:</strong> owning Mexican real estate valued above ~USD $624,000 is an alternative qualifying path at some consulates.</li>
            <li><strong className="text-foreground">Couples:</strong> may apply as a family unit using one spouse's income, with a 50% discount on government fees.</li>
          </ul>
          <p>The window to apply under the more accessible criteria has closed; requirements rise each January with the UMA. Anyone planning the move for 2027–2028 benefits from structuring their finances today. Always verify current amounts with the Mexican consulate in your city (Toronto, Montreal, Vancouver, Calgary or Ottawa) before applying.</p>
        </Callout>

        <H2>Cost of living: how far your Canadian pension goes</H2>
        <p>With the maximum CPP, OAS and personal savings, a typical Canadian couple has between CAD $5,000 and $8,000 per month. In Canada, that figure evaporates quickly between heating, high property taxes and winter costs. In the Riviera Maya, independent analyses such as Mexico Relocation Guide estimate a comfortable retirement costs USD $2,000–$2,500 per person per month, and that cost of living can be 50–70% lower than in North America depending on lifestyle.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="bg-card">
                <th className="text-left p-3 border-b border-border text-foreground">Item (monthly)</th>
                <th className="text-left p-3 border-b border-border text-foreground">Riviera Maya (USD approx.)</th>
                <th className="text-left p-3 border-b border-border text-foreground">Canadian reference</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border-b border-border">1–2 bedroom apartment, well located</td><td className="p-3 border-b border-border">$800 – $1,800</td><td className="p-3 border-b border-border">CAD $2,000 – $2,800 (Toronto/Vancouver)</td></tr>
              <tr><td className="p-3 border-b border-border">Utilities + internet</td><td className="p-3 border-b border-border">$100 – $200</td><td className="p-3 border-b border-border">CAD $300 – $450 (with heating)</td></tr>
              <tr><td className="p-3 border-b border-border">Food & groceries (couple)</td><td className="p-3 border-b border-border">$500 – $700</td><td className="p-3 border-b border-border">CAD $800 – $1,100</td></tr>
              <tr><td className="p-3 border-b border-border">Household help</td><td className="p-3 border-b border-border">$150 – $300</td><td className="p-3 border-b border-border">Generally unaffordable</td></tr>
              <tr><td className="p-3">Private health insurance (65+)</td><td className="p-3">$150 – $400</td><td className="p-3">Provincial + travel insurance</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm italic">Illustrative ranges based on Numbeo, Mexico Relocation Guide and Rivana's local market observation (2026–2026).</p>

        <Callout>
          <p><strong className="text-foreground">Important note on healthcare:</strong> Canadian provincial plans (OHIP, RAMQ, etc.) do not cover care in Mexico, and keeping coverage requires meeting minimum-presence rules in your province. Every snowbird needs travel insurance or private international health insurance. The good news: Cancún has private hospitals meeting international standards (Galenia, Amerimed, Hospiten, among others) and is one of Mexico's top medical-tourism hubs.</p>
        </Callout>

        <H2>The real estate market in official data, not promises</H2>
        <p>Official data from the Federal Mortgage Society (SHF) show that Quintana Roo led national appreciation in 2026 at +14.3% year-on-year, well above the national average of ~8.2%. The municipality of Benito Juárez (Cancún) posted +12.8% in the first quarter of 2026, among the most dynamic in the country.</p>
        <p>The drivers are structural, not speculative: the Maya Train and airport modernization improved regional connectivity; urban works such as the Nichupté Bridge and the widening of Boulevard Colosio are reshaping mobility in Cancún; and demand combines domestic buyers (70–75% of transactions in Quintana Roo) with growing foreign interest — including the new Canadian flow documented by CBC and The Globe and Mail.</p>
        <Callout>
          <p><strong className="text-foreground">2026–2026 reference pricing:</strong> the residential average in Cancún hovers around USD $2,400/m², with the Hotel Zone and beachfront between USD $3,000–4,500/m², and emerging corridors from ~USD $1,800–2,500/m². Gross rental yields in Mexico average ~6% annually (Global Property Guide, Dec 2026), with meaningful variation by zone and operating model. Well-managed vacation rentals can outperform, but results depend on occupancy, seasonality and tax compliance — which is why serious analysis is done property by property, not with generic percentages.</p>
        </Callout>

        <H2>Can a Canadian buy coastal property? Yes — here's how</H2>
        <p>The Mexican Constitution restricts direct foreign ownership within the "restricted zone" (50 km from the coast), but for decades an established, secure solution has existed: the bank trust, or fideicomiso. A Mexican bank acts as trustee of title while you, as beneficiary, keep every right: to use, rent, remodel, inherit and sell. As of early 2026 there are no new changes or restrictions being discussed for foreign buyers; the framework is stable and proven.</p>
        <p>Alternatively, those buying for investment purposes can structure through a Mexican company. Costs to budget: closing and notary expenses, the annual fideicomiso fee, and property tax that is surprisingly low by Canadian standards (typically 0.1–0.2% of cadastral value).</p>

        <CTA
          title="Free checklist: 'My Riviera Maya Retirement in 12 Steps'"
          body="2026 visa timeline · documents your consulate will request · budget template for a retired couple · key questions before signing a fideicomiso · common tax mistakes snowbirds make."
          button="I want my free checklist"
          message="Hi Rivana, I'm Canadian and I'd like the free Riviera Maya retirement checklist"
        />

        <H2>Cancún, Puerto Morelos or Costa Mujeres: three personalities, one decision</H2>
        <p><strong className="text-foreground">Cancún</strong> is the urban option: major hospitals, airport minutes away, active social life and the widest real estate inventory — from apartments in growth corridors like Huayacán and Colosio to beachfront residences. Areas like{' '}
          <Link to={localePath('/cancun/puerto-cancun')} className="text-[hsl(var(--gold))] hover:underline">Puerto Cancún</Link>{' '}combine marina, golf and luxury towers, with premium properties from ~USD $800,000.</p>
        <p><strong className="text-foreground">Puerto Morelos</strong>, about 30 km south, is the counterpoint: a fishing village that has kept its human scale, facing the Puerto Morelos Reef National Park — part of the Mesoamerican Reef System, the second largest in the world. Its lighthouse, tilted by Hurricane Beulah (1967), is a local symbol. Life here is walkable, the expat community is small and integrated, and entry prices are lower than in Cancún's luxury corridors.</p>
        <p><strong className="text-foreground"><Link to={localePath('/costa-mujeres/la-amada')} className="text-[hsl(var(--gold))] hover:underline">Costa Mujeres</Link></strong>, north of Cancún, is the newest development in the region: a master-planned beach corridor with grand-luxury hotels, gated residences and golf. It offers the highest potential appreciation precisely because it is still consolidating. For the retiree-investor who wants a brand-new home, privacy and exposure to the growing luxury segment, this is the corridor to study in 2026.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="bg-card">
                <th className="text-left p-3 border-b border-border text-foreground">Aspect</th>
                <th className="text-left p-3 border-b border-border text-foreground">Cancún</th>
                <th className="text-left p-3 border-b border-border text-foreground">Puerto Morelos</th>
                <th className="text-left p-3 border-b border-border text-foreground">Costa Mujeres</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border-b border-border">Character</td><td className="p-3 border-b border-border">Urban, complete, dynamic</td><td className="p-3 border-b border-border">Coastal town, quiet, authentic</td><td className="p-3 border-b border-border">Planned luxury corridor, consolidating</td></tr>
              <tr><td className="p-3 border-b border-border">From the airport</td><td className="p-3 border-b border-border">15–25 min</td><td className="p-3 border-b border-border">25–35 min</td><td className="p-3 border-b border-border">25–35 min</td></tr>
              <tr><td className="p-3 border-b border-border">Healthcare</td><td className="p-3 border-b border-border">Major private hospitals</td><td className="p-3 border-b border-border">Local clinics + Cancún nearby</td><td className="p-3 border-b border-border">Developing + Cancún nearby</td></tr>
              <tr><td className="p-3 border-b border-border">Typical entry ticket</td><td className="p-3 border-b border-border">Wide: from ~$200K USD to beachfront luxury</td><td className="p-3 border-b border-border">Lower than Cancún luxury corridors</td><td className="p-3 border-b border-border">Mid-to-high; brand-new premium product</td></tr>
              <tr><td className="p-3">Ideal profile</td><td className="p-3">Active, social retiree</td><td className="p-3">Contemplative retiree, community-oriented</td><td className="p-3">Retiree-investor focused on appreciation and privacy</td></tr>
            </tbody>
          </table>
        </div>

        <CTA
          title="Compare the three corridors with an advisor"
          body="30 minutes with a Rivana advisor to review the three zones, price ranges and delivery timelines that match your profile — no obligation."
          button="Book a WhatsApp call"
          message="Hi Rivana, I'd like to compare Cancún, Puerto Morelos and Costa Mujeres for my retirement"
        />

        <H2>Taxes: the conversation to have before you move</H2>
        <p>Canada and Mexico have a tax treaty to avoid double taxation, which gives certainty to those receiving CPP, OAS or RRSP/RRIF withdrawals while living in Mexico. But the details matter: spending 183 days or more per year in Mexico can trigger Mexican tax residency; ceasing to be a Canadian tax resident has implications (including a possible "departure tax"); and the withholding on Canadian pensions paid to non-residents has its own rules under the treaty.</p>
        <p>Our position as advisors is clear: no decision of this size should be made without a cross-border accountant. What we do at Rivana is connect you with specialists who work Canada–Mexico cases every day, and structure the real-estate purchase coherently with your tax plan — not the other way around.</p>

        <H2>Questions our Canadian clients ask most</H2>
        <FaqItem
          q="Can I spend the winter in Mexico without a visa?"
          a="Yes. Canadians may enter as visitors for up to 180 days — enough for the November–April season. Temporary residency becomes relevant when you want to stay longer, open local accounts more easily, or build a path to permanent residency."
        />
        <FaqItem
          q="Is it safe to buy property as a foreigner?"
          a="The bank trust (fideicomiso) has been operating for decades and is the standard vehicle for thousands of foreign owners along the coast. The real safety keys lie elsewhere: verifying the land is not unregularized ejido, working with a licensed notary public, and buying from developers with a verifiable track record — exactly the filter we apply before presenting you any property."
        />
        <FaqItem
          q="What about my provincial medical coverage?"
          a="It does not cover you in Mexico and requires a minimum annual presence in your province to stay active. Snowbirds use travel insurance; full-time residents contract private international or Mexican health insurance. Cancún has accredited private hospitals and medical costs significantly lower than the US."
        />
        <FaqItem
          q="Is it better to buy now or wait?"
          a="No serious advisor will guarantee the future. What the data says: Quintana Roo led national appreciation in 2026 (+14.3%, SHF), there are ~22,000 new units in the state pipeline for 2026–2026 that will bring more options, and Banxico lowered its rate to 7% in December 2026. The right decision depends on your horizon, your liquidity and the zone — and that is analyzed case by case."
        />

        <H2>Why Canadians work with Rivana</H2>
        <p>Rivana Properties is a boutique luxury real-estate firm based in Cancún and the Riviera Maya. We don't operate by volume — we operate by judgment. That means we analyze the right zone for your profile with you, filter developers by track record, coordinate the legal fideicomiso structure with trusted notaries, and stay with you after the purchase — from delivery to rental management if you decide your property should work while you're back in Canada.</p>
        <p>We speak your language in both directions: fluent English and deep knowledge of the local ground. And we understand the Canadian buyer because we advise them every day: their timing, their risk aversion, their tax questions, their need for clear documentation.</p>

        <Quote>Your winter doesn't have to be grey.</Quote>

        <CTA
          title="Your winter doesn't have to be grey"
          body="Book a complimentary, no-obligation discovery video call. In 30 minutes we assess your profile, answer your visa and fideicomiso questions, and show you real options in the zone that best fits you. Your investment, your legacy."
          button="Book via WhatsApp"
          message="Hi Rivana, I'm Canadian and I'd like to book a discovery call about retiring in Cancún"
        />
        <p className="text-center">
          <a href="mailto:info@rivanaproperties.com" className="text-[hsl(var(--gold))] hover:underline">Email us</a>
          {' · '}
          <Link to={localePath('/about')} className="text-[hsl(var(--gold))] hover:underline">Meet the team</Link>
        </p>

        <H3>Sources and references</H3>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>Snowbird Advisor survey of 4,000 snowbirds (Oct 2026), cited by The Globe and Mail and TravelPulse Canada — 12% → 23% shift to non-US destinations.</li>
          <li><a href="https://www.cbc.ca/news/canada/toronto/ontario-snowbirds-choose-mexico-9.7063503" rel="nofollow noopener" target="_blank" className="underline">CBC News (Jan 2026). "Meet the Ontario snowbirds ditching the U.S. and wintering in Mexico".</a></li>
          <li>Sociedad Hipotecaria Federal (SHF) — price index: Quintana Roo +12.2% (Q1 2026) and +14.3% annual 2026; Benito Juárez +12.8%. Via <a href="https://www.globalpropertyguide.com/latin-america/mexico/price-history" rel="nofollow noopener" target="_blank" className="underline">Global Property Guide</a>.</li>
          <li>Global Property Guide (Dec 2026) — gross rental yields ~6% national average.</li>
          <li><a href="https://www.mexperience.com/financial-criteria-for-residency-in-mexico/" rel="nofollow noopener" target="_blank" className="underline">Mexperience — "Financial Criteria for Legal Residency in Mexico 2026" (UMA 2026: $117.31 MXN).</a></li>
          <li>Mexican consulates — 2026 visa guidance, including the property route (~USD $624,000+).</li>
          <li>ExpatDen / Mexico Relocation Guide — 2026 changes: doubled fees, thresholds ~USD $4,400/month or ~$74,000 in savings.</li>
          <li><a href="https://thelatinvestor.com/blogs/news/cancun-good-time" rel="nofollow noopener" target="_blank" className="underline">TheLatinvestor (2026) — stable fideicomiso, Banxico rate 7%, pipeline ~22,000 units.</a></li>
          <li>Envision Financial — ~400,000 Canadian snowbirds annually.</li>
        </ul>
        <p className="text-xs italic">Disclaimer: This article is for informational purposes and does not constitute legal, tax or financial advice. Immigration requirements and market data change; verify current amounts with the corresponding Mexican consulate and consult certified professionals before making decisions.</p>
      </div>
    );
  }

  // Spanish
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>Algo cambió en el invierno 2026-2026. Según la encuesta anual de Snowbird Advisor a más de 4,000 viajeros canadienses, la proporción de snowbirds que eligieron destinos fuera de Estados Unidos casi se duplicó: del 12% al 23% en un solo año, mientras que quienes planeaban invernar en EE.UU. cayeron del 82% al 70%. Medios como CBC News y The Globe and Mail han documentado la tendencia: parejas de Ontario que después de décadas en Florida están comprando propiedad en México, citando menores costos, seguridad y calidad de vida.</p>
      <p>Si eres canadiense y estás evaluando este movimiento, esta guía reúne lo que necesitas saber en 2026 —incluyendo cambios regulatorios recientes que muchos artículos desactualizados no reflejan— con datos de fuentes oficiales y verificables.</p>

      <Callout>
        <ul className="list-disc pl-6 space-y-1">
          <li>~400,000 snowbirds canadienses viajan al sur cada invierno (Canadian Snowbird Association / Envision Financial)</li>
          <li>12% → 23%: snowbirds eligiendo destinos no-EE.UU. de 2024 a 2026 (Snowbird Advisor)</li>
          <li>180 días: estancia como visitante sin visa para canadienses en México (INM)</li>
          <li>+14.3%: apreciación de vivienda en Quintana Roo en 2026, la más alta de México (SHF / Global Property Guide)</li>
        </ul>
      </Callout>

      <H2>Un poco de historia: por qué Cancún no es un accidente</H2>
      <p>Cancún es probablemente la ciudad planificada más exitosa de América Latina. A finales de los años 60, el gobierno mexicano —a través de lo que hoy es FONATUR— buscaba diversificar la economía y seleccionó, con estudios técnicos, una barra de arena casi deshabitada en el Caribe como sede de un polo turístico integral. El desarrollo arrancó en 1970, y en poco más de 50 años la ciudad pasó de unos cuantos pescadores a un área metropolitana de más de 900,000 habitantes con el segundo aeropuerto más transitado de México, conectado por vuelos directos con Toronto, Montreal, Vancouver y Calgary en temporada.</p>
      <p>Esa planificación importa para un jubilado: significa infraestructura médica, aérea y de servicios diseñada para estándares internacionales, algo que pocos destinos de playa en el mundo pueden ofrecer.</p>
      <p>Cronología clave: 1970 inicio del proyecto FONATUR · 1974 Quintana Roo se convierte en estado · 1990s-2000s expansión de la Riviera Maya · 2023-2024 Tren Maya y nuevas obras urbanas · 2026 corredores de lujo consolidados.</p>

      <H2>Lo que cambió en 2026: las nuevas reglas de residencia (léelo antes que nada)</H2>
      <Callout>
        <p className="text-foreground font-semibold">Esto es lo que la mayoría de las guías en internet todavía no te dice.</p>
        <p>Desde julio de 2026, México recalculó los requisitos financieros de residencia con base en la UMA, y el 1 de enero de 2026 las tarifas de trámite prácticamente se duplicaron. En términos prácticos para 2026:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-foreground">Visitante (sin visa):</strong> los canadienses pueden permanecer hasta 180 días — suficiente para un invierno completo de snowbird.</li>
          <li><strong className="text-foreground">Residencia Temporal (1 a 4 años):</strong> requiere demostrar aproximadamente USD $4,400 mensuales de ingreso (últimos 6 meses) o alrededor de USD $74,000 en ahorros/inversiones (promedio de 12 meses). Los montos exactos varían ±5-10% según el consulado y el tipo de cambio.</li>
          <li><strong className="text-foreground">Residencia Permanente:</strong> alrededor de USD $7,300-7,400 mensuales o ~USD $294,000-300,000 en ahorros; desde julio 2026, la vía directa desde el extranjero quedó reservada para jubilados y pensionados.</li>
          <li><strong className="text-foreground">Propietarios:</strong> ser dueño de un inmueble en México con valor superior a ~USD $624,000 es una vía alternativa de calificación ante algunos consulados.</li>
          <li><strong className="text-foreground">Parejas:</strong> pueden aplicar como unidad familiar con el ingreso de uno de los cónyuges, con 50% de descuento en tarifas gubernamentales.</li>
        </ul>
        <p>La ventana de aplicar con criterios más accesibles ya cerró; los requisitos suben cada enero con la UMA. Quien planea el movimiento para 2027-2028 se beneficia de estructurar sus finanzas hoy. Verifica siempre los montos vigentes con el consulado mexicano de tu ciudad (Toronto, Montreal, Vancouver, Calgary u Ottawa) antes de aplicar.</p>
      </Callout>

      <H2>Costo de vida: qué tan lejos llega tu pensión canadiense</H2>
      <p>Con el CPP máximo, OAS y ahorros personales, una pareja canadiense típica dispone de entre CAD $5,000 y $8,000 mensuales. En Canadá, esa cifra se consume rápido entre calefacción, impuestos prediales elevados y costos de invierno. En la Riviera Maya, análisis independientes como Mexico Relocation Guide estiman que una vida cómoda de jubilado cuesta entre USD $2,000 y $2,500 mensuales por persona, y que el costo de vida puede ser 50-70% menor que en Norteamérica según el estilo de vida.</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="bg-card">
              <th className="text-left p-3 border-b border-border text-foreground">Concepto (mensual)</th>
              <th className="text-left p-3 border-b border-border text-foreground">Riviera Maya (USD aprox.)</th>
              <th className="text-left p-3 border-b border-border text-foreground">Referencia canadiense</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-border">Renta depto. 1-2 rec. bien ubicado</td><td className="p-3 border-b border-border">$800 – $1,800</td><td className="p-3 border-b border-border">CAD $2,000 – $2,800 (Toronto/Vancouver)</td></tr>
            <tr><td className="p-3 border-b border-border">Servicios + internet</td><td className="p-3 border-b border-border">$100 – $200</td><td className="p-3 border-b border-border">CAD $300 – $450 (con calefacción)</td></tr>
            <tr><td className="p-3 border-b border-border">Comida y supermercado (pareja)</td><td className="p-3 border-b border-border">$500 – $700</td><td className="p-3 border-b border-border">CAD $800 – $1,100</td></tr>
            <tr><td className="p-3 border-b border-border">Apoyo doméstico</td><td className="p-3 border-b border-border">$150 – $300</td><td className="p-3 border-b border-border">Generalmente inaccesible</td></tr>
            <tr><td className="p-3">Seguro médico privado (65+)</td><td className="p-3">$150 – $400</td><td className="p-3">Provincial + seguro de viaje</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm italic">Rangos ilustrativos con base en Numbeo, Mexico Relocation Guide y observación de mercado local de Rivana (2026-2026).</p>

      <Callout>
        <p><strong className="text-foreground">Nota importante sobre salud:</strong> los planes provinciales canadienses (OHIP, RAMQ, etc.) no cubren atención en México, y mantener la cobertura exige respetar reglas de presencia mínima en tu provincia. Todo snowbird necesita seguro de viaje o seguro médico privado internacional. La buena noticia: Cancún cuenta con hospitales privados de estándar internacional (Galenia, Amerimed, Hospiten, entre otros) y es uno de los polos de turismo médico más importantes de México.</p>
      </Callout>

      <H2>El mercado inmobiliario en datos oficiales, no en promesas</H2>
      <p>Los datos oficiales de la Sociedad Hipotecaria Federal (SHF) muestran que Quintana Roo lideró la apreciación nacional en 2026 con +14.3% anual, muy por encima del promedio nacional de ~8.2%. El municipio de Benito Juárez (Cancún) registró +12.8% en el primer trimestre de 2026, entre los más dinámicos del país.</p>
      <p>Los motores son estructurales, no especulativos: el Tren Maya y la modernización de aeropuertos mejoraron la conectividad regional; obras urbanas como el Puente Nichupté y la ampliación del Bulevar Colosio están redefiniendo la movilidad de Cancún; y la demanda combina compradores nacionales (70-75% de las transacciones en Quintana Roo) con creciente interés extranjero —incluido el nuevo flujo canadiense que documentan CBC y The Globe and Mail.</p>
      <Callout>
        <p><strong className="text-foreground">Precios de referencia 2026-2026:</strong> el promedio residencial en Cancún ronda los USD $2,400/m², con la Zona Hotelera y frentes de playa entre USD $3,000-4,500/m², y corredores emergentes desde ~USD $1,800-2,500/m². Los rendimientos brutos de renta en México promedian ~6% anual (Global Property Guide, dic. 2026), con variaciones importantes por zona y modelo operativo. En renta vacacional bien gestionada los resultados pueden ser mayores, pero dependen de ocupación, temporada y cumplimiento fiscal — por eso el análisis serio se hace propiedad por propiedad, no con porcentajes genéricos.</p>
      </Callout>

      <H2>¿Puede un canadiense comprar propiedad en la costa? Sí — así funciona</H2>
      <p>La Constitución mexicana restringe la propiedad extranjera directa dentro de la "zona restringida" (50 km de costa), pero desde hace décadas existe una solución establecida y segura: el fideicomiso bancario. Un banco mexicano actúa como fiduciario del título mientras tú, como beneficiario, conservas todos los derechos: usar, rentar, remodelar, heredar y vender. A inicios de 2026 no hay cambios ni restricciones nuevas en discusión para compradores extranjeros; el marco es estable y probado.</p>
      <p>Alternativamente, quienes compran con fines de inversión pueden estructurar mediante una sociedad mexicana. Costos a presupuestar: gastos de cierre y notario, la cuota anual del fideicomiso, y un predial sorprendentemente bajo para estándares canadienses (típicamente 0.1-0.2% del valor catastral).</p>

      <CTA
        title="Checklist gratuito: 'Mi retiro en la Riviera Maya en 12 pasos'"
        body="Cronograma de visa 2026 · documentos que pedirá tu consulado · presupuesto tipo de pareja jubilada · preguntas clave antes de firmar un fideicomiso · errores fiscales comunes de snowbirds."
        button="Quiero mi checklist gratuito"
        message="Hola Rivana, soy canadiense y quiero recibir el checklist gratuito de retiro en la Riviera Maya"
      />

      <H2>Cancún, Puerto Morelos o Costa Mujeres: tres personalidades, una decisión</H2>
      <p><strong className="text-foreground">Cancún</strong> es la opción urbana: hospitales mayores, aeropuerto a minutos, vida social intensa y la mayor oferta inmobiliaria — desde departamentos en corredores en crecimiento como Huayacán y Colosio hasta residencias frente al mar. Zonas como{' '}
        <Link to={localePath('/cancun/puerto-cancun')} className="text-[hsl(var(--gold))] hover:underline">Puerto Cancún</Link>{' '}combinan marina, golf y torres de lujo, con propiedades premium desde ~USD $800,000.</p>
      <p><strong className="text-foreground">Puerto Morelos</strong>, a unos 30 km al sur, es el contrapunto: un pueblo pesquero que conserva su escala humana, frente al Parque Nacional Arrecife de Puerto Morelos — parte del Sistema Arrecifal Mesoamericano, el segundo más grande del mundo. Su faro inclinado por el huracán Beulah (1967) es símbolo local. Aquí la vida es caminable, la comunidad expat es pequeña e integrada, y los precios de entrada son menores que en los corredores de lujo de Cancún.</p>
      <p><strong className="text-foreground"><Link to={localePath('/costa-mujeres/la-amada')} className="text-[hsl(var(--gold))] hover:underline">Costa Mujeres</Link></strong>, al norte de Cancún, es el desarrollo más reciente de la zona: un corredor de playa master-planned con hoteles de gran lujo, residenciales cerrados y golf. Es la apuesta de mayor plusvalía potencial precisamente porque está en fase de consolidación. Para el jubilado-inversionista que quiere estrenar, privacidad y exposición al segmento de lujo en crecimiento, es el corredor a estudiar en 2026.</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="bg-card">
              <th className="text-left p-3 border-b border-border text-foreground">Aspecto</th>
              <th className="text-left p-3 border-b border-border text-foreground">Cancún</th>
              <th className="text-left p-3 border-b border-border text-foreground">Puerto Morelos</th>
              <th className="text-left p-3 border-b border-border text-foreground">Costa Mujeres</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-border">Carácter</td><td className="p-3 border-b border-border">Urbano, completo, dinámico</td><td className="p-3 border-b border-border">Pueblo costero, tranquilo, auténtico</td><td className="p-3 border-b border-border">Corredor de lujo planificado, en consolidación</td></tr>
            <tr><td className="p-3 border-b border-border">Del aeropuerto</td><td className="p-3 border-b border-border">15-25 min</td><td className="p-3 border-b border-border">25-35 min</td><td className="p-3 border-b border-border">25-35 min</td></tr>
            <tr><td className="p-3 border-b border-border">Servicios médicos</td><td className="p-3 border-b border-border">Hospitales privados mayores</td><td className="p-3 border-b border-border">Clínicas locales + Cancún cerca</td><td className="p-3 border-b border-border">En desarrollo + Cancún cerca</td></tr>
            <tr><td className="p-3 border-b border-border">Ticket de entrada típico</td><td className="p-3 border-b border-border">Amplio: desde ~$200K USD hasta lujo frente al mar</td><td className="p-3 border-b border-border">Menor que corredores de lujo de Cancún</td><td className="p-3 border-b border-border">Medio-alto; producto nuevo y premium</td></tr>
            <tr><td className="p-3">Perfil ideal</td><td className="p-3">Jubilado activo y social</td><td className="p-3">Jubilado contemplativo, amante del mar y la comunidad</td><td className="p-3">Jubilado-inversionista orientado a plusvalía y privacidad</td></tr>
          </tbody>
        </table>
      </div>

      <CTA
        title="Compara los tres corredores con un asesor"
        body="30 minutos con un asesor Rivana para revisar las tres zonas, rangos de precio y tiempos de entrega que encajen con tu perfil — sin compromiso."
        button="Agendar por WhatsApp"
        message="Hola Rivana, quiero comparar Cancún, Puerto Morelos y Costa Mujeres para mi retiro"
      />

      <H2>Impuestos: la conversación que debes tener antes de mudarte</H2>
      <p>Canadá y México tienen un convenio para evitar la doble tributación, lo que da certeza a quienes reciben CPP, OAS o retiros de RRSP/RRIF viviendo en México. Pero los detalles importan: pasar 183 días o más al año en México puede activar residencia fiscal mexicana; dejar de ser residente fiscal canadiense tiene implicaciones (incluyendo el posible "departure tax"); y la retención sobre pensiones canadienses pagadas a no residentes tiene reglas propias bajo el tratado.</p>
      <p>Nuestra postura como asesores es clara: ninguna decisión de este tamaño debe tomarse sin un contador transfronterizo. Lo que sí hacemos en Rivana es conectarte con especialistas que trabajan casos Canadá-México todos los días, y estructurar la compra inmobiliaria de forma coherente con tu plan fiscal — no al revés.</p>

      <H2>Preguntas frecuentes de nuestros clientes canadienses</H2>
      <FaqItem
        q="¿Puedo pasar el invierno en México sin tramitar visa?"
        a="Sí. Los canadienses pueden ingresar como visitantes hasta por 180 días, suficiente para la temporada noviembre-abril. La residencia temporal se vuelve relevante cuando quieres quedarte más tiempo, abrir cuentas locales con mayor facilidad o construir el camino a la residencia permanente."
      />
      <FaqItem
        q="¿Es seguro comprar propiedad como extranjero?"
        a="El fideicomiso bancario lleva décadas operando y es la vía estándar para miles de propietarios extranjeros en la zona costera. Las claves de seguridad reales son otras: verificar que el terreno no sea ejidal sin regularizar, trabajar con notario público, y comprar con desarrolladores con historial verificable — exactamente el filtro que aplicamos antes de presentarte cualquier propiedad."
      />
      <FaqItem
        q="¿Qué pasa con mi cobertura médica provincial?"
        a="No te cubre en México y exige presencia mínima anual en tu provincia para mantenerse activa. Los snowbirds usan seguro de viaje; los residentes de tiempo completo contratan seguro médico privado internacional o mexicano. Cancún tiene hospitales privados acreditados y costos médicos significativamente menores que los de EE.UU."
      />
      <FaqItem
        q="¿Conviene comprar ahora o esperar?"
        a="Nadie serio te garantiza el futuro. Lo que dicen los datos: Quintana Roo lideró la apreciación nacional en 2026 (+14.3%, SHF), hay ~22,000 unidades nuevas en el pipeline estatal 2026-2026 que darán más opciones de compra, y Banxico bajó su tasa a 7% en diciembre de 2026. La decisión correcta depende de tu horizonte, tu liquidez y la zona — y eso se analiza caso por caso."
      />

      <H2>Por qué los canadienses trabajan con Rivana</H2>
      <p>Rivana Properties es una firma boutique de bienes raíces de lujo con base en Cancún y la Riviera Maya. No operamos con volumen: operamos con criterio. Eso significa que analizamos contigo la zona correcta para tu perfil, filtramos desarrolladores por historial, coordinamos la estructura legal del fideicomiso con notarios de confianza, y te acompañamos después de la compra — desde la entrega hasta la administración de rentas si decides que tu propiedad trabaje mientras estás en Canadá.</p>
      <p>Hablamos tu idioma en ambos sentidos: inglés fluido y conocimiento profundo del terreno local. Y entendemos al comprador canadiense porque lo asesoramos todos los días: sus tiempos, su aversión al riesgo, sus preguntas fiscales, su necesidad de documentación clara.</p>

      <Quote>Tu inversión, tu legado.</Quote>

      <CTA
        title="Tu invierno no tiene que ser gris"
        body="Agenda una videollamada de descubrimiento sin costo y sin compromiso. En 30 minutos evaluamos tu perfil, resolvemos tus dudas sobre visa y fideicomiso, y te mostramos opciones reales en la zona que mejor encaje contigo."
        button="Agendar por WhatsApp"
        message="Hola Rivana, soy canadiense y quiero agendar una videollamada de descubrimiento sobre retirarme en Cancún"
      />
      <p className="text-center">
        <a href="mailto:info@rivanaproperties.com" className="text-[hsl(var(--gold))] hover:underline">Escribir por email</a>
        {' · '}
        <Link to={localePath('/about')} className="text-[hsl(var(--gold))] hover:underline">Conoce al equipo</Link>
      </p>

      <H3>Fuentes y referencias</H3>
      <ul className="list-disc pl-6 space-y-2 text-sm">
        <li>Snowbird Advisor (encuesta a 4,000 snowbirds, oct. 2026), citada por The Globe and Mail y TravelPulse Canada — cambio del 12% al 23% en destinos no-EE.UU.</li>
        <li><a href="https://www.cbc.ca/news/canada/toronto/ontario-snowbirds-choose-mexico-9.7063503" rel="nofollow noopener" target="_blank" className="underline">CBC News (ene. 2026). "Meet the Ontario snowbirds ditching the U.S. and wintering in Mexico".</a></li>
        <li>Sociedad Hipotecaria Federal (SHF) — índice de precios: Quintana Roo +12.2% (T1 2026) y +14.3% anual 2026; Benito Juárez +12.8%. Vía <a href="https://www.globalpropertyguide.com/latin-america/mexico/price-history" rel="nofollow noopener" target="_blank" className="underline">Global Property Guide</a>.</li>
        <li>Global Property Guide (dic. 2026) — rendimientos brutos de renta ~6% promedio nacional.</li>
        <li><a href="https://www.mexperience.com/financial-criteria-for-residency-in-mexico/" rel="nofollow noopener" target="_blank" className="underline">Mexperience — "Financial Criteria for Legal Residency in Mexico 2026" (UMA 2026: $117.31 MXN).</a></li>
        <li>Consulados de México — guías de visa 2026, incluida la vía de propiedad (~USD $624,000+).</li>
        <li>ExpatDen / Mexico Relocation Guide — cambios 2026: duplicación de tarifas, umbrales ~USD $4,400/mes o ~$74,000 en ahorros.</li>
        <li><a href="https://thelatinvestor.com/blogs/news/cancun-good-time" rel="nofollow noopener" target="_blank" className="underline">TheLatinvestor (2026) — fideicomiso estable, tasa Banxico 7%, pipeline ~22,000 unidades.</a></li>
        <li>Envision Financial — ~400,000 snowbirds canadienses anuales.</li>
      </ul>
      <p className="text-xs italic">Disclaimer: Este artículo tiene fines informativos y no constituye asesoría legal, fiscal ni financiera. Los requisitos migratorios y datos de mercado cambian; verifica los montos vigentes con el consulado mexicano correspondiente y consulta a profesionales certificados antes de tomar decisiones.</p>
    </div>
  );
};