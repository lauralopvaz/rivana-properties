import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_LINK = 'https://wa.me/529988457224?utm_source=web&utm_medium=whatsapp&utm_campaign=lead&utm_content=journal-canadian-buyer-guide';

const FaqItem = ({ q, a }: { q: string; a: string }) => (
  <details className="group border-b border-border py-4">
    <summary className="cursor-pointer font-display text-lg text-foreground list-none flex items-center justify-between">
      {q}
      <span className="text-[hsl(var(--gold))] transition-transform group-open:rotate-45 text-xl ml-4">+</span>
    </summary>
    <p className="font-body text-[17px] leading-[1.8] text-muted-foreground mt-3">{a}</p>
  </details>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2">{children}</h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-foreground mt-8">{children}</h3>
);

const ZoneLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const { localePath } = useLanguage();
  return (
    <Link to={localePath(to)} className="text-[hsl(var(--gold))] hover:underline">
      {children}
    </Link>
  );
};

export const CanadianBuyerGuideBodyEN = () => {
  const { localePath } = useLanguage();

  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>
        Canada sends more foreign buyers to the Cancún and Riviera Maya real estate market than any other country except the United States. Every winter, tens of thousands of Canadians trade snow for Caribbean sun — and every year, more of them stop renting and start buying.
      </p>
      <p>
        The reasons are hard to argue with. Direct flights from Vancouver, Calgary, Toronto, and Montreal reach Cancún in four to five hours. Prices remain a fraction of what comparable ocean-view property costs in British Columbia or Ontario. And unlike Florida, where Canadian buyers have faced rising costs and political uncertainty, Mexico's property market has continued to appreciate steadily.
      </p>
      <p>
        This guide covers everything a Canadian needs to know before signing anything: legal ownership, the fideicomiso trust system, closing costs, the T1135 tax disclosure requirement, rental income potential, and the zones where Rivana's portfolio delivers the strongest returns.
      </p>

      <H2>Can Canadians legally own property in Mexico?</H2>
      <p>Yes, fully and without restriction.</p>
      <p>
        Mexico welcomes foreign investment in real estate and has built a clear, government-backed legal framework for it. As a Canadian, you can buy condominiums, houses, penthouses, or residential lots anywhere in Mexico. In most of the destinations Canadians love most — Cancún, Playa del Carmen, Puerto Morelos, Tulum, Puerto Vallarta — the property will fall within what Mexican law calls the Restricted Zone.
      </p>
      <p>
        The Restricted Zone covers all land within 50 kilometres of any Mexican coastline and 100 kilometres of any international border. This rule, embedded in Article 27 of the Mexican Constitution, means that foreigners cannot hold direct title to residential property in these areas in their personal name. Instead, you hold title through a legal mechanism called a fideicomiso — a bank trust — that has been the standard instrument for foreign property buyers for over 50 years.
      </p>
      <p>
        The fideicomiso is not a workaround or a grey area. It is a formal, government-regulated ownership structure that grants you exactly the same rights as direct ownership: you can live in the property, rent it, renovate it, sell it, and pass it to your heirs. The only practical difference is that a Mexican bank holds the legal title on your behalf as trustee, while you are named the beneficiary with full control.
      </p>

      <H2>The fideicomiso: what every Canadian buyer needs to understand</H2>
      <H3>How it works</H3>
      <p>A fideicomiso is a tripartite trust agreement between three parties:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">The settlor:</strong> the seller, who transfers the property into the trust.</li>
        <li><strong className="text-foreground">The trustee:</strong> a Mexican bank (options include Scotiabank, BBVA México, Banorte, Santander, or HSBC) that holds legal title on your behalf.</li>
        <li><strong className="text-foreground">The beneficiary:</strong> you, the Canadian buyer, who holds all practical ownership rights.</li>
      </ul>
      <p>
        The bank cannot do anything with the property without your written instructions. It cannot sell it, rent it, or modify it. The only role of the bank is to hold the formal title in compliance with Mexican constitutional law. Your control over the property is complete.
      </p>

      <H3>Duration and renewal</H3>
      <p>
        A fideicomiso is established for an initial term of 50 years and is renewable indefinitely. Renewals are straightforward and handled by your trustee bank. There is no scenario in which a properly established fideicomiso expires and you lose ownership.
      </p>

      <H3>What you can do as beneficiary</H3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Live in the property full-time or part of the year</li>
        <li>Rent the property short-term (Airbnb, Vrbo) or long-term, subject to local zoning</li>
        <li>Renovate, expand, or modify the property</li>
        <li>Sell the property to any buyer (foreign or Mexican)</li>
        <li>Mortgage the property with a willing lender</li>
        <li>Name beneficiaries to whom the trust transfers upon your death</li>
      </ul>

      <H3>Fideicomiso costs</H3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Setup fee (one-time): USD $1,000 – $2,500</li>
        <li>Annual maintenance fee: USD $550 – $1,000 per year</li>
        <li>SRE permit (Ministry of Foreign Affairs): USD $1,500 – $2,000 (one-time)</li>
      </ul>
      <p>
        These fees represent a modest carrying cost relative to any meaningful property purchase. On a USD $400,000 property, the first decade of trust costs represents roughly 2–3% of the purchase price.
      </p>

      <H2>Closing costs: what to budget</H2>
      <p>
        This is where many Canadian buyers are surprised, because the total is higher than what most are used to from purchasing in Canada.
      </p>
      <p>
        Closing costs on a Mexican property purchase typically run between 5% and 8% of the purchase price for a foreign buyer. The main components:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Property Acquisition Tax (ISAI): 3–4% of assessed value</li>
        <li>Notario Público fees: 0.5–1% of transaction value</li>
        <li>Fideicomiso setup: USD $1,000–$2,500</li>
        <li>SRE permit: USD $1,500–$2,000</li>
        <li>Public Registry registration: 0.5–1% of transaction value</li>
        <li>Appraisal: USD $300–$700</li>
        <li>Independent legal review: USD $500–$1,500</li>
      </ul>
      <p>
        On a USD $400,000 purchase, budget approximately USD $24,000–$32,000 in closing costs. These are paid at closing through the Notario Público, who oversees all real estate transactions in Mexico as a government-appointed legal authority.
      </p>
      <p>
        One important nuance for pre-sale purchases: in many developments, developers absorb some or all of the closing costs as an incentive. This is worth negotiating, and Rivana's advisory team handles these conversations as part of its standard process.
      </p>

      <H2>The buying process, step by step</H2>
      <H3>Step 1: Define your objectives</H3>
      <p>
        Before visiting properties, clarify your goals. Are you buying a snowbird winter retreat? A full-time investment rental? A combination? The answer affects which zones, which property types, and which developments make sense for your profile.
      </p>
      <H3>Step 2: Engage a buyer's advisor</H3>
      <p>
        In Mexico, real estate agents traditionally represent the seller. Working with a bilingual advisory firm like Rivana — which is specifically oriented toward foreign buyers and represents your interests throughout the process — protects you at every stage, from due diligence to closing.
      </p>
      <H3>Step 3: Property selection and due diligence</H3>
      <p>
        Once you identify a property, your team verifies the title history, checks for liens or encumbrances at the Public Registry, confirms zoning and rental permissions, and reviews any homeowners association rules. Never skip independent due diligence, regardless of the developer's reputation.
      </p>
      <H3>Step 4: Offer and purchase agreement</H3>
      <p>
        You submit a written offer (Oferta de Compra). If accepted, both parties sign a Promesa de Compraventa — the formal purchase agreement — which establishes price, payment schedule, and any conditions. A deposit of 5–15% of the purchase price is typical at this stage, held in escrow.
      </p>
      <H3>Step 5: Fideicomiso application</H3>
      <p>
        Your advisor and trustee bank initiate the fideicomiso permit application with Mexico's Secretaría de Relaciones Exteriores. This process takes two to four weeks under normal conditions.
      </p>
      <H3>Step 6: Closing</H3>
      <p>
        The Notario Público oversees the closing. You sign the final deed (Escritura Pública), the fideicomiso trust is formally established, funds are transferred, and the property is registered in your name as beneficiary. You do not need to be physically present — many Canadian buyers complete the closing remotely using a power of attorney.
      </p>
      <p>
        Total timeline from signed agreement to keys: 45–90 days for resale properties. Pre-sale purchases have longer timelines tied to construction delivery.
      </p>

      <H2>Canadian tax obligations: the T1135 disclosure</H2>
      <p>
        This is the section most Canadian buyers wish they had read before buying. Missing the T1135 requirement is the single most common compliance error Canadian property owners abroad make — and the penalties are meaningful.
      </p>
      <H3>What is the T1135?</H3>
      <p>
        Form T1135, the Foreign Income Verification Statement, is a Canada Revenue Agency filing requirement. If you are a Canadian tax resident and the total cost of your "specified foreign property" exceeded CAD $100,000 at any point during the tax year, you must file Form T1135 with your annual tax return.
      </p>
      <p>
        Mexican real estate held through a fideicomiso counts as specified foreign property for T1135 purposes. The threshold is based on the original cost of the property, not its current market value, converted to Canadian dollars.
      </p>
      <p>
        Penalties for non-disclosure or late filing are CAD $25 per day, up to CAD $2,500 per taxpayer per year. If the CRA determines the failure was knowing or intentional, penalties can be significantly higher.
      </p>
      <H3>Reporting thresholds</H3>
      <ul className="list-disc pl-6 space-y-1">
        <li>CAD $100,000 – $250,000: Simplified reporting (tick-box by category)</li>
        <li>Above CAD $250,000: Detailed reporting (FMV at year-end, income, gains/losses)</li>
      </ul>
      <H3>What to report</H3>
      <p>
        In the detailed method, you must disclose: the maximum fair market value during the year, the fair market value at year-end, any income generated (rental income), and any capital gains or losses from disposition.
      </p>
      <H3>Personal-use exemption</H3>
      <p>
        If the property is used exclusively for personal use and generates no rental income, it may qualify for the personal-use exemption from T1135 reporting. However, the moment you rent the property — even occasionally on Airbnb — the exemption no longer applies. Given that most buyers of investment property in Cancún and the Riviera Maya intend to generate rental income, assume T1135 applies.
      </p>
      <H3>The Canadian solution: work with a cross-border accountant</H3>
      <p>
        Engage a Canadian accountant who has experience with foreign property ownership before your purchase closes, not after. They can advise on optimal ownership structure, rental income reporting, and the interaction between Mexican withholding taxes and your Canadian tax obligations. This is not complex, but it requires someone who knows both systems.
      </p>

      <H2>Rental income potential: the snowbird equation</H2>
      <p>
        The financial logic for Canadian buyers is compelling, and it only requires honest arithmetic.
      </p>
      <p>
        A typical Canadian snowbird spending four winter months in the Riviera Maya — December through March — pays between CAD $8,000 and CAD $15,000 in accommodation costs over that period, depending on location and property quality. Over five years, that is CAD $40,000–$75,000 with no asset to show for it.
      </p>
      <p>
        A furnished two-bedroom condo purchase in Cancún's Hotel Zone at USD $350,000 carries approximately USD $5,000–$7,000 per year in ownership costs (annual property tax, HOA fees, fideicomiso maintenance, utility minimums). When you are back in Canada from April through November, that same unit can generate USD $15,000–$30,000 in annual rental income on platforms like Airbnb, depending on location, finishes, and occupancy rates.
      </p>
      <p>
        The math changes significantly in favour of buying. You use the property during the winter months you value most, you generate income the rest of the year, and you hold an appreciating asset in one of Latin America's most consistently growing real estate markets.
      </p>

      <H2>Where to buy: Rivana's zones by Canadian buyer profile</H2>

      <H3>
        <ZoneLink to="/cancun/zona-hotelera">Cancún Hotel Zone</ZoneLink>
        {' '}— for the snowbird who wants everything in one place
      </H3>
      <p>
        The Hotel Zone is a 20-kilometre barrier island with the Caribbean on one side and Laguna Nichupté on the other. The May 2026 opening of the Nichupté Bridge has fundamentally changed access to the zone — travel from downtown Cancún to the southern Hotel Zone now takes under 10 minutes by car.
      </p>
      <p>
        For Canadians who want direct beach access, resort amenities, walkability to restaurants and services, and strong short-term rental demand, the Hotel Zone is the natural starting point. Mondrian Residences at Grand Island Cancun — Rivana's flagship listing in this zone — offers branded residences from USD $514,000 with ocean views and a 30/20/50 payment plan that works well for pre-sale buyers.
      </p>

      <H3>
        <ZoneLink to="/cancun/puerto-cancun">Puerto Cancún</ZoneLink>
        {' '}— for the buyer who wants marina lifestyle and privacy
      </H3>
      <p>
        Puerto Cancún sits just north of the Hotel Zone and is the most refined address in the city. A purpose-built residential district with a private marina, golf course, and strict architectural standards, it attracts buyers who want the amenities of a resort without the tourist traffic.
      </p>
      <p>
        SLS Ocean Beach and Thompson Residences are Rivana's listings here. The SLS brand and developer (Related Group) bring institutional-grade management that supports strong short-term rental rates, which is relevant for Canadian buyers who will rent the unit during the months they are in Canada.
      </p>

      <H3>
        <ZoneLink to="/cancun/costa-mujeres">Costa Mujeres</ZoneLink>
        {' '}— for the pre-sale investor targeting maximum appreciation
      </H3>
      <p>
        Located north of Cancún's city limits, Costa Mujeres is one of the fastest-appreciating corridors in the Mexican Caribbean. Infrastructure investment by the Quintana Roo state government and the arrival of ultra-luxury hotel brands have driven sustained price appreciation since 2022. Pre-sale pricing is still accessible relative to what Costa Mujeres will be in five years.
      </p>
      <p>
        Dhamar is Rivana's listing here, with three-bedroom units starting at USD $248,000 — an entry point that works for buyers at the lower end of the luxury segment who want meaningful appreciation potential.
      </p>

      <H3>
        <ZoneLink to="/mayakoba">Mayakoba</ZoneLink>
        {' '}— for the buyer who wants a world-class resort address
      </H3>
      <p>
        Mayakoba is a 240-hectare eco-luxury resort complex south of Playa del Carmen that houses Four Seasons, Banyan Tree, Rosewood, and Fairmont properties within a single gated estate crossed by lagoon canals. The 2026 FIFA World Cup brought global attention when Portugal and Uruguay chose Fairmont Mayakoba as their official base camps for the tournament.
      </p>
      <p>
        The Reserve at Mayakoba offers four-bedroom villas at USD $1.1M within the resort complex, giving buyers access to all hotel amenities alongside long-term capital gains in a market that has no land left to develop.
      </p>

      <H3>
        <ZoneLink to="/puerto-morelos">Puerto Morelos</ZoneLink>
        {' '}— for the Canadian who wants a quieter alternative
      </H3>
      <p>
        Puerto Morelos sits between Cancún and Playa del Carmen, protected by the second-largest barrier reef in the world, which limits water sports development and keeps the town calm. It attracts buyers who find Cancún too commercial and Tulum too remote.
      </p>
      <p>
        Sole Blu Ocean Living and Village Blu are Rivana's listings here, starting at USD $273,000. Puerto Morelos has a large, established Canadian expat community and reliable healthcare access via Cancún, which is 25 minutes north.
      </p>

      <H2>Financing options for Canadian buyers</H2>
      <p>
        Most property purchases in Cancún and the Riviera Maya are completed in cash, particularly in the pre-sale segment where developers offer payment plan structures that spread the purchase across the construction period.
      </p>
      <H3>Developer financing (pre-sale)</H3>
      <p>
        The most common structure for Canadian buyers: a deposit at signing (typically 10–30% of the purchase price), followed by staged payments during construction, and a final balloon payment at delivery. No bank is involved, no credit check is required, and interest is either zero or below-market during the construction period. This is the most accessible financing option for most buyers.
      </p>
      <H3>Canadian home equity (HELOC)</H3>
      <p>
        Many Canadian buyers use the equity in their Canadian home to fund a Mexican purchase. A Home Equity Line of Credit against your Canadian property gives you CAD-denominated financing that you convert to USD at closing. This avoids the complexity of cross-border mortgage lending entirely.
      </p>
      <H3>Cross-border mortgage lenders</H3>
      <p>
        A small number of specialized lenders in the US and Canada will provide financing for Mexican coastal properties held in a fideicomiso. Terms are less favourable than Canadian domestic mortgages, and down payment requirements are typically 30–40% of purchase price. For most buyers, developer financing or a HELOC will be the more practical path.
      </p>

      <H2>Practical considerations for Canadian buyers</H2>
      <H3>Currency and exchange rate</H3>
      <p>
        Most Mexican real estate transactions are denominated in US dollars. Your actual exposure is USD, not MXN. Budget for USD/CAD exchange rate fluctuation between the time you sign your purchase agreement and closing. Many buyers lock a portion of their funds in USD shortly after signing to reduce currency risk.
      </p>
      <H3>Healthcare</H3>
      <p>
        Healthcare is one of the most common questions from Canadian snowbird buyers. Private hospitals in Cancún operate at a high standard with English-speaking specialists across cardiology, orthopaedics, and most other specialties, at costs significantly below Canadian private care. IMSS — Mexico's public health system — is available to legal foreign residents for roughly USD $500–$700 per year. For buyers on a tourist visa (valid for 180 days from entry), comprehensive travel health insurance remains essential. Budget CAD $2,500–$4,500 per year for a couple over 60.
      </p>
      <H3>Flights from Canada</H3>
      <p>
        More than 17 Canadian cities operate direct scheduled or charter service to Cancún International Airport, including Vancouver, Calgary, Edmonton, Winnipeg, Toronto, Ottawa, Montréal, and Halifax. WestJet and Air Canada both operate year-round service; Sunwing and Flair expand capacity significantly from November through April. For most Canadians, Cancún is genuinely more accessible than many US snowbird destinations.
      </p>
      <H3>Time zone</H3>
      <p>
        Cancún operates on Eastern Standard Time year-round (EST, UTC-5), with no daylight saving time adjustment. This makes it convenient for remote workers and retirees managing Canadian business or financial affairs — Eastern Canada is in the same time zone, and British Columbia is only three hours behind.
      </p>

      <H2>Frequently asked questions</H2>
      <div className="mt-4">
        <FaqItem
          q="Do I need to be a Mexican resident to buy property?"
          a="No. You do not need residency, a visa, or even a prior visit to Mexico to purchase property through a fideicomiso. Many buyers complete the entire process remotely after an initial visit."
        />
        <FaqItem
          q="Can I rent out my property on Airbnb?"
          a="Yes, subject to your development's HOA rules and local zoning. Most developments in Cancún and the Riviera Maya explicitly allow short-term vacation rentals, and rental demand is strong year-round. If you generate rental income, this must be reported on your Canadian T1135 and triggers Mexican income tax obligations at a flat withholding rate of 25% on gross rental income, or a lower rate on net income if you elect to file a Mexican tax return. Coordinate with both a Mexican accountant and a Canadian cross-border tax specialist."
        />
        <FaqItem
          q="What happens to my property if I pass away?"
          a="You name beneficiaries in your fideicomiso trust document at closing. Upon your death, the trust transfers to your named beneficiaries without passing through probate in either Mexico or Canada. This is one of the estate-planning advantages of the fideicomiso structure."
        />
        <FaqItem
          q="Is Mexico safe to own property in 2026?"
          a="The tourist and expat areas of Cancún, the Hotel Zone, Puerto Cancún, and the Riviera Maya corridor consistently report low crime rates. The rule applies to any market: research the specific neighbourhood, understand the developer, verify title, and work with an advisor who has on-the-ground knowledge. Thousands of Canadians own and use property in this region without incident."
        />
        <FaqItem
          q="Can I use my RRSP or TFSA to buy Mexican real estate?"
          a="No. RRSP and TFSA accounts cannot hold direct foreign real estate investments. However, these accounts do not count as specified foreign property for T1135 purposes, so assets held inside registered accounts do not factor into your T1135 threshold calculation."
        />
      </div>

      <H2>The Rivana advisory process for Canadian buyers</H2>
      <p>
        Rivana Properties is a bilingual boutique advisory firm working exclusively in Cancún and the Riviera Maya. Our process is designed for buyers who are serious about making an informed decision with the right legal, financial, and market context in place.
      </p>
      <p>
        Every client engagement begins with a discovery session where we understand your investment horizon, risk tolerance, budget in USD, intended use, and tax situation. We then present properties from our verified portfolio with comparative ROI projections, current market data, and honest context on each development's risks and advantages.
      </p>
      <p>
        Our team accompanies you through due diligence, closing, and beyond — connecting you with trusted Notarios, independent attorneys, and cross-border tax advisors who work with Canadian buyers regularly.
      </p>
      <p>Advisory is complimentary. Our fees are paid by the developer on completed transactions.</p>

      <div className="bg-card border border-[hsl(var(--gold)_/_0.3)] rounded-sm p-8 text-center my-12">
        <p className="font-display text-xl text-foreground mb-4">
          Ready to take the next step? Schedule a complimentary advisory call with Rivana. We will walk through your profile, answer the T1135 questions, and show you where the real opportunities are in 2026.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[hsl(var(--gold))] text-background font-display text-sm tracking-wider uppercase px-8 py-3 rounded-sm hover:opacity-90 transition-opacity"
          >
            Schedule My Advisory →
          </a>
          <Link
            to={localePath('/listings')}
            className="inline-block border border-[hsl(var(--gold))] text-[hsl(var(--gold))] font-display text-sm tracking-wider uppercase px-8 py-3 rounded-sm hover:bg-[hsl(var(--gold)_/_0.1)] transition-colors"
          >
            Browse All Listings →
          </Link>
          <Link
            to={localePath('/preventa')}
            className="inline-block border border-[hsl(var(--gold))] text-[hsl(var(--gold))] font-display text-sm tracking-wider uppercase px-8 py-3 rounded-sm hover:bg-[hsl(var(--gold)_/_0.1)] transition-colors"
          >
            Explore Pre-Sale Properties →
          </Link>
        </div>
      </div>

      <p className="text-xs italic">
        The information in this article is for educational purposes and does not constitute tax or legal advice. Canadian buyers should consult a qualified cross-border accountant and independent Mexican legal counsel before completing any property purchase. Tax rules and property regulations are subject to change.
      </p>
    </div>
  );
};

export default CanadianBuyerGuideBodyEN;