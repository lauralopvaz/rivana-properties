import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_LINK = 'https://wa.me/529988457224';

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

export const RetireCancunBodyEN = () => {
  const { localePath } = useLanguage();

  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>
        More than 1.6 million Americans already live in Mexico — more than in any other country on earth. Canadians are the second-largest group, tens of thousands of them trading winter in Ontario, Alberta, and British Columbia for the Caribbean coast every year, and an increasing number making it permanent.
      </p>
      <p>
        The reasons are straightforward: a couple can live comfortably in Cancún or the Riviera Maya for USD $2,500–$4,000 per month. Private hospital care costs 50–70% less than in the United States. Direct flights connect every major Canadian and American city to Cancún in under five hours. And the real estate market — one of the most consistently appreciating in Latin America — means that buying property here is not just a lifestyle decision but a sound financial one.
      </p>
      <p>
        This guide covers everything Americans and Canadians need to know before retiring in Cancún and the Riviera Maya: cost of living, visa requirements, healthcare, tax obligations, and the zones and properties that make the most sense for retirees in 2026.
      </p>

      <H2>Why Cancún and the Riviera Maya — not just "Mexico"</H2>
      <p>
        Mexico is a large country with dozens of retirement destinations. San Miguel de Allende, Lake Chapala, Mérida, Puerto Vallarta, and Los Cabos all have legitimate claims on the North American retiree. So why choose the Caribbean coast?
      </p>
      <p>
        Four reasons stand out for the buyer profile Rivana works with — high-income professionals and executives retiring at 55–70 with a meaningful asset base:
      </p>
      <p>
        <strong className="text-foreground">Infrastructure at international standard.</strong> Cancún has two JCI-accredited private hospitals — Galenia Hospital and Hospital Amerimed — a level of institutional healthcare accreditation that most Mexican destinations cannot match. The international airport serves more direct routes from North America than any other Mexican gateway. The May 2026 opening of the Nichupté Bridge added a direct 10-minute connection between the city and the Hotel Zone.
      </p>
      <p>
        <strong className="text-foreground">The strongest rental market in Mexico.</strong> If you plan to own property and generate rental income during the months you are not in residence — as most financially savvy retirees do — there is no market in Mexico that competes with Cancún's Hotel Zone and the Riviera Maya corridor for occupancy rates, nightly prices, or professional property management infrastructure.
      </p>
      <p>
        <strong className="text-foreground">English is genuinely functional.</strong> In Cancún's Hotel Zone, Puerto Cancún, and the main Riviera Maya towns, English is the working language of real estate, hospitality, healthcare, and most service businesses. This is not true everywhere in Mexico.
      </p>
      <p>
        <strong className="text-foreground">You can buy an appreciating asset, not just rent.</strong> Retirees who purchase property in Cancún's Hotel Zone, Costa Mujeres, Mayakoba, or Puerto Morelos are not spending their retirement savings — they are redeploying them into a market that has delivered consistent appreciation and rental yields that offset a significant portion of carrying costs. Renting in retirement depletes capital. Owning builds it.
      </p>

      <H2>Cost of living in Cancún: what retirees actually spend</H2>
      <p>
        The numbers below reflect real costs for retirees living in the Hotel Zone or Riviera Maya corridor in 2026, with a lifestyle that includes a quality condo, good restaurants, private healthcare, and occasional travel.
      </p>
      <H3>Monthly budget: comfortable retirement couple</H3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="bg-card">
              <th className="text-left p-3 border-b border-border text-foreground">Category</th>
              <th className="text-left p-3 border-b border-border text-foreground">Monthly cost (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-border">Housing (owned condo — HOA + utilities)</td><td className="p-3 border-b border-border">$600 – $1,200</td></tr>
            <tr><td className="p-3 border-b border-border">Groceries</td><td className="p-3 border-b border-border">$500 – $800</td></tr>
            <tr><td className="p-3 border-b border-border">Dining out (3–4x per week)</td><td className="p-3 border-b border-border">$400 – $700</td></tr>
            <tr><td className="p-3 border-b border-border">Private health insurance (couple, 60s)</td><td className="p-3 border-b border-border">$300 – $500</td></tr>
            <tr><td className="p-3 border-b border-border">Transportation (car or ride-share)</td><td className="p-3 border-b border-border">$200 – $400</td></tr>
            <tr><td className="p-3 border-b border-border">Entertainment, activities, travel</td><td className="p-3 border-b border-border">$300 – $600</td></tr>
            <tr><td className="p-3 border-b border-border">Household help (part-time housekeeper)</td><td className="p-3 border-b border-border">$150 – $300</td></tr>
            <tr><td className="p-3 border-b border-border">Miscellaneous</td><td className="p-3 border-b border-border">$200 – $400</td></tr>
            <tr><td className="p-3 text-foreground font-semibold">Total</td><td className="p-3 text-foreground font-semibold">$2,650 – $4,900</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Housing costs assume property ownership. Retirees who own their condo outright pay only HOA fees, utilities, annual property tax (predial — typically USD $250–$500/year on a luxury condo), and fideicomiso maintenance. This is one of the most significant financial advantages of buying over renting: it removes the largest variable expense from your monthly budget entirely.
      </p>
      <p>
        For context: a comparable lifestyle in Miami, Phoenix, or Vancouver would cost USD $6,000–$10,000+ per month. The Riviera Maya delivers the same climate, beach access, and service standard at roughly 40–50 cents on the dollar.
      </p>

      <H2>Visa options for retirees: what you need in 2026</H2>
      <p>
        Mexico does not have a dedicated "retirement visa" by name. What it has is a well-designed residency framework that works well for retirees, with two main paths.
      </p>
      <H3>Option 1: Temporary Resident Visa (Residente Temporal)</H3>
      <p>
        The starting point for most retirees. Valid for one year, renewable for up to three additional years. After four consecutive years as a temporary resident, you can apply for permanent residency.
      </p>
      <p>2026 financial requirements — you must satisfy one of the following:</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="bg-card">
              <th className="text-left p-3 border-b border-border text-foreground">Route</th>
              <th className="text-left p-3 border-b border-border text-foreground">2026 threshold</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-border">Monthly income</td><td className="p-3 border-b border-border">USD $4,400/month for the past 6 months</td></tr>
            <tr><td className="p-3 border-b border-border">Savings/investments</td><td className="p-3 border-b border-border">USD $74,000 balance over the past 12 months</td></tr>
            <tr><td className="p-3">Mexican property ownership</td><td className="p-3">Property valued at approximately USD $174,000+</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Income sources that qualify include US Social Security, Canadian CPP and OAS, pension income, 401(k)/RRSP distributions, rental income, and investment dividends. The process begins at a Mexican consulate in your home country, not in Mexico itself.
      </p>
      <p>
        <strong className="text-foreground">Important 2026 update:</strong> Government processing fees doubled in 2026 following legislative changes enacted in late 2026. The full "five-year journey" from temporary to permanent residency now costs approximately USD $2,700 per person in government fees — still modest in absolute terms, but worth factoring into your planning.
      </p>
      <H3>Option 2: Permanent Resident Visa (Residente Permanente)</H3>
      <p>
        For retirees who qualify financially and want to skip the four-year temporary period. Issued directly by a Mexican consulate to applicants who can demonstrate retirement status plus:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Monthly income of approximately USD $7,400, or</li>
        <li>Savings/investments of approximately USD $300,000</li>
      </ul>
      <p>
        The permanent resident card does not expire and never needs renewal — a significant practical advantage for retirees who want to establish Mexico as their long-term home without ongoing bureaucratic obligations.
      </p>
      <H3>The 180-day tourist option (no residency required)</H3>
      <p>
        Many North American retirees — particularly snowbirds who spend five to six months in Mexico and the rest of the year in Canada or the US — never apply for formal residency at all. Mexico grants up to 180 days per entry on a tourist permit (FMM), which is sufficient for a standard snowbird pattern. You can own property, generate rental income, and use private healthcare on a tourist permit. What you cannot do is work for income in Mexico.
      </p>

      <H2>Healthcare: the practical reality</H2>
      <p>
        Healthcare is the question that decides Mexico for most North American retirees, and the answer in Cancún is genuinely positive.
      </p>
      <H3>JCI-accredited hospitals in Cancún</H3>
      <p>
        Cancún has two hospitals accredited by Joint Commission International — the same body that accredits top US and Canadian facilities:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">Galenia Hospital</strong> — the largest private hospital in southeast Mexico, with specialists across cardiology, oncology, orthopaedics, neurology, and most other disciplines. English-speaking staff throughout.</li>
        <li><strong className="text-foreground">Hospital Amerimed</strong> — strong emergency and surgical capabilities, well-regarded for cardiac care, located in the Hotel Zone.</li>
      </ul>
      <p>
        Both facilities operate at a standard that surprises most arriving North Americans. Wait times are shorter than equivalent Canadian public facilities, billing is transparent, and the cost differential versus US private care is substantial — typically 50–70% lower for equivalent procedures.
      </p>
      <H3>Private health insurance costs</H3>
      <p>
        Private health insurance in Mexico costs approximately USD $3,500–$5,900 per year for a standard policy for a couple in their 60s, depending on deductible and pre-existing conditions. This is significantly below equivalent US COBRA or marketplace coverage.
      </p>
      <p>
        For Canadian retirees spending more than six months in Mexico, provincial health coverage typically lapses after extended absences. Comprehensive international private health insurance — available from providers including Cigna Global, Aetna International, and Allianz — is the standard solution, covering both Mexico and travel back to Canada.
      </p>
      <H3>What Medicare and provincial coverage do not cover</H3>
      <p>
        <strong className="text-foreground">Americans:</strong> Medicare does not travel with you to Mexico. US retirees living in Mexico are not covered by Medicare for any services received there. International health insurance is not optional — it is the foundation of your healthcare plan.
      </p>
      <p>
        <strong className="text-foreground">Canadians:</strong> Provincial health insurance coverage during extended absences from Canada varies by province. Most provinces allow absences of up to six to seven months without losing coverage, but this varies and the rules change. Confirm your province's current rules before committing to a full-year residency.
      </p>

      <H2>Property ownership for retirees: the financial case</H2>
      <p>
        Renting in retirement is a legitimate choice. Buying is a better one in this market, for reasons specific to the Cancún and Riviera Maya corridor.
      </p>
      <H3>The snowbird ownership model</H3>
      <p>
        A fully furnished two-bedroom condo in Cancún's Hotel Zone purchased at USD $400,000 carries annual ownership costs of approximately USD $5,000–$8,000 (HOA, utilities, annual property tax, fideicomiso maintenance, property management). That same unit generates USD $18,000–$35,000 per year in gross short-term rental income when managed professionally during the months you are back in North America.
      </p>
      <p>
        The net position: you use the property five to six months a year, generate rental income that offsets — or exceeds — your total carrying costs during the remaining months, and hold an asset that has appreciated consistently. This is the financial structure that Rivana's clients in their 50s and 60s use most frequently.
      </p>
      <H3>How foreign ownership works</H3>
      <p>
        All property in Cancún and the Riviera Maya falls within Mexico's coastal Restricted Zone, which means foreign buyers hold title through a fideicomiso — a government-regulated bank trust. The fideicomiso grants you full ownership rights: sell, rent, renovate, inherit. The practical experience is identical to direct ownership. For a full explanation, read our{' '}
        <Link to={localePath('/journal/foreign-buyer-guide-mexico')} className="text-[hsl(var(--gold))] hover:underline">complete guide to buying property in Mexico as a foreigner</Link>.
      </p>
      <p>
        One practical advantage for residency applicants: owning a Mexican property valued at approximately USD $174,000 or more qualifies you independently for Temporary Residency — the property itself serves as the financial solvency demonstration, regardless of your monthly income level.
      </p>

      <H2>The best zones for retirees: honest assessments</H2>
      <p>Different buyer profiles suit different destinations. Here is Rivana's honest zone-by-zone assessment for retirees specifically.</p>

      <H3>
        <ZoneLink to="/cancun/zona-hotelera">Cancún Hotel Zone</ZoneLink>
        {' '}— best for: active retirees who want walkability and rental income
      </H3>
      <p>
        The Hotel Zone is Cancún's 23-kilometre barrier island — beach on one side, lagoon on the other — with the highest concentration of restaurants, services, and resort amenities in the region. The May 2026 Nichupté Bridge has made the southern zone genuinely accessible to downtown services and the airport.
      </p>
      <p>
        For retirees who want to be able to walk to dinner, who value proximity to Galenia and Amerimed hospitals, and who plan to generate rental income during months back in North America, the Hotel Zone is the practical choice. It also has the most developed property management infrastructure in the region.
      </p>
      <p className="text-sm">
        Rivana listings here: Mondrian Residences at Grand Island Cancun from USD $514K · Bay View Grand at Grand Island from USD $586K · Kabeek Marina & Condos
      </p>

      <H3>
        <ZoneLink to="/cancun/puerto-cancun">Puerto Cancún</ZoneLink>
        {' '}— best for: retirees who want luxury and quiet without isolation
      </H3>
      <p>
        Puerto Cancún is a purpose-built residential district immediately north of the Hotel Zone — a private marina, golf course, and residential fabric that feels nothing like the tourist strip. It attracts buyers who want world-class infrastructure but not the noise and foot traffic of the hotel corridor.
      </p>
      <p>
        Healthcare access is identical to the Hotel Zone (same 10-minute drive to Galenia), but the environment is significantly quieter. The marina creates a walking-lifestyle option that appeals to retirees who are boat owners or who simply want a refined, residential setting.
      </p>
      <p className="text-sm">Rivana listings here: SLS Ocean Beach from USD $1.6M · Vellmari Grand Living</p>

      <H3>
        <ZoneLink to="/puerto-morelos">Puerto Morelos</ZoneLink>
        {' '}— best for: retirees who want a small-town Caribbean life
      </H3>
      <p>
        Puerto Morelos sits between Cancún and Playa del Carmen, protected by the Mesoamerican Barrier Reef — the second-largest in the world. The reef limits water sports development, keeps the water calm and clear, and preserves the town's quiet character. It has an established, multigenerational North American expat community and a walkable town centre that functions like a small Caribbean village.
      </p>
      <p>
        For retirees who find Cancún too commercial and want genuinely lower density, Puerto Morelos is the most underrated option on the coast. Cancún's hospitals and airport are 25 minutes north.
      </p>
      <p className="text-sm">Rivana listings here: Sole Blu Ocean Living from USD $295K · Village Blu from USD $273K</p>

      <H3>
        <ZoneLink to="/mayakoba">Mayakoba</ZoneLink>
        {' '}— best for: the executive retiree who wants a world-class resort address
      </H3>
      <p>
        Mayakoba is in its own category. A 240-hectare eco-luxury resort complex 45 minutes south of Cancún airport, housing Four Seasons, Banyan Tree, Rosewood, and Fairmont within a single gated estate of mangrove canals and white sand beaches. The 2026 FIFA World Cup elevated global awareness of Mayakoba when both Portugal and Uruguay chose Fairmont Mayakoba as their official team base camps.
      </p>
      <p>
        Owning a residence inside Mayakoba means full access to five-star hotel amenities — restaurants, spas, golf, beach clubs — as a permanent lifestyle, not a vacation treat. For retirees accustomed to executive compensation and lifestyle, this is the closest thing Mexico offers to resort living as a daily reality.
      </p>
      <p className="text-sm">Rivana listing here: The Reserve at Mayakoba from USD $1.1M — four-bedroom villas within the resort complex.</p>

      <H3>
        <ZoneLink to="/playa-del-carmen">Playa del Carmen</ZoneLink>
        {' '}— best for: cosmopolitan retirees who want urban energy
      </H3>
      <p>
        Playa del Carmen is for retirees who want café culture, a walkable urban grid, diverse international restaurants, and a cosmopolitan social scene — not the resort experience. La Quinta Avenida (5th Avenue) is a pedestrian boulevard that functions as a genuine town centre. Playa has approximately 20,000 expats from across North America and Europe, creating one of the most socially active foreign communities in Mexico.
      </p>
      <p>
        Healthcare access requires a drive to Cancún (one hour) or to the private facilities in Playa itself, which are good but not JCI-accredited.
      </p>

      <H2>Tax obligations: what Americans and Canadians must know</H2>
      <H3>Americans</H3>
      <p>
        The US taxes citizens on worldwide income wherever they live, including Social Security, pensions, IRA and 401(k) distributions, rental income, interest, dividends, and capital gains. Moving to Mexico does not change your US filing obligation. You file Form 1040 every year regardless of where you live.
      </p>
      <p>
        The Foreign Tax Credit (Form 1116) credits Mexican income tax dollar-for-dollar against your US tax, which prevents true double taxation for most retirees. If you generate rental income from Mexican property, that income is subject to Mexican withholding tax (25% on gross, or a lower rate on net income if you elect to file a Mexican return) and must also be reported on your US return, with the Mexican tax creditable.
      </p>
      <p>
        Social Security benefits: Roth IRA qualified distributions are tax-free in the US, and Mexico generally respects that under the treaty. Many retirees front-load Roth conversions before relocating. Work with a cross-border CPA before your move.
      </p>
      <H3>Canadians</H3>
      <p>
        Canadian tax residents are taxed on worldwide income regardless of where they live. If you establish Mexican residency and want to reduce your Canadian tax exposure, you need to formally sever Canadian tax residency — a significant legal step that requires careful planning and is not reversible casually. Most Canadian snowbirds who spend five to six months in Mexico do not sever Canadian tax residency and simply continue filing in Canada normally.
      </p>
      <p>
        The T1135 Foreign Income Verification Statement applies to Canadians who own foreign property with a cost exceeding CAD $100,000 at any point during the tax year. Your Mexican condo almost certainly crosses this threshold. For a full explanation of the T1135, see our{' '}
        <Link to={localePath('/journal/buying-property-mexico-canadian-2026-guide')} className="text-[hsl(var(--gold))] hover:underline">complete guide to buying property in Mexico as a Canadian</Link>.
      </p>

      <H2>Practical checklist before you retire here</H2>
      <H3>Before you sign anything:</H3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Consult a cross-border tax specialist (US or Canadian + Mexican experience) before purchasing property or establishing residency</li>
        <li>Verify your provincial health insurance rules for extended absences (Canadians)</li>
        <li>Confirm Social Security or CPP/OAS collection is not affected by Mexican residency status</li>
        <li>Rent for at least one season before buying — three months in the zone you think you want will either confirm or change your decision</li>
      </ul>
      <H3>When you buy:</H3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Work with an independent Mexican attorney for title verification — separate from your real estate agent</li>
        <li>Confirm the development allows short-term rentals if that is part of your plan</li>
        <li>Name beneficiaries in your fideicomiso trust document at closing — this eliminates probate on both the Mexican and North American sides</li>
      </ul>
      <H3>When you arrive:</H3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Open a Mexican bank account (HSBC México and Scotiabank México have English-service infrastructure and experience with North American clients)</li>
        <li>Obtain a CURP number — Mexico's national ID equivalent — which you need for utilities, banking, and healthcare enrollment</li>
        <li>Register with your country's embassy if you establish long-term residency (US: Smart Traveler Enrollment Program; Canada: Registration of Canadians Abroad)</li>
      </ul>

      <H2>The honest conversation about concerns</H2>
      <H3>Safety</H3>
      <p>
        The Hotel Zone, Puerto Cancún, Mayakoba, and Puerto Morelos are gated or contained environments with dedicated security. The tourist and expat corridors consistently report low crime rates, and the experience of North American residents in these zones is materially different from the broader Mexico narrative that sometimes dominates Canadian and American news coverage. That said: do your research on the specific development and neighbourhood, not just the general destination.
      </p>
      <H3>Language</H3>
      <p>
        You can live indefinitely in Cancún's main expat zones without functional Spanish. You cannot live as richly. Learning conversational Spanish — even at a basic level — changes your relationship with the place, your neighbours, and the broader community. It is worth doing.
      </p>
      <H3>Distance from family</H3>
      <p>
        Cancún to Toronto: under five hours direct. Cancún to Vancouver: under six hours with one stop. Cancún to Houston: two hours. The geographic argument against retiring here is weaker than most people expect when they actually check the flights. With WestJet, Air Canada, and multiple US carriers operating year-round direct service, this is not a remote destination.
      </p>

      <H2>Ready to explore?</H2>
      <p>
        Retirement in Cancún and the Riviera Maya is not for everyone. It requires genuine openness to a different pace, a different culture, and a different administrative reality. But for the North American retiree who has done the financial planning, the combination of cost efficiency, healthcare quality, climate, and property investment logic is genuinely hard to replicate anywhere this accessible.
      </p>
      <p>
        Rivana's advisory team works specifically with buyers at the luxury end of this market — people who are not choosing between Mexico and Florida on budget grounds, but who are choosing between Mexico and other premium retirement destinations on value and investment grounds. If that is your conversation, we would like to have it.
      </p>

      <div className="bg-card border border-[hsl(var(--gold)_/_0.3)] rounded-sm p-8 text-center my-12">
        <p className="font-display text-xl text-foreground mb-4">
          Schedule a complimentary advisory call with Rivana. We will walk through your retirement profile, healthcare planning, and the zones that best fit your lifestyle and investment goals.
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
            Explore Pre-Sale Opportunities →
          </Link>
        </div>
      </div>

      <p className="text-xs italic">
        This article is for informational purposes only and does not constitute tax, legal, immigration, or financial advice. Visa requirements, financial thresholds, and tax rules are subject to change. Consult qualified professionals in both your home country and Mexico before making any residency or property purchase decisions.
      </p>
    </div>
  );
};

export default RetireCancunBodyEN;