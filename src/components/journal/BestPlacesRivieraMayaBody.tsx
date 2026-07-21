import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { JournalBody, H2, H3, Callout, JTable, Faq, WhatsAppCta } from './primitives';
import { getArticleFaqs } from '@/data/journal-articles';

/**
 * Body — Best Places to Buy Property in the Riviera Maya (EN cluster, published last).
 * Route: /en/journal/best-places-to-buy-property-riviera-maya
 * EN-only Tier-1 hub article — links to every other cluster piece.
 */
export const BestPlacesRivieraMayaBody = () => {
  const { localePath } = useLanguage();
  const slug = 'best-places-to-buy-property-riviera-maya';
  const faqs = getArticleFaqs(slug, 'en');
  const gold = 'text-[hsl(var(--gold))] hover:underline';

  return (
    <JournalBody>
      <p>
        Every "best places to buy in the Riviera Maya" article ranks the same way: whichever town
        the author has listings in wins. We're going to do this differently — methodology first,
        official data second, and an honest admission built in:{' '}
        <strong>
          the best place to buy depends on your strategy, and anyone who names one winner for every
          buyer is selling, not advising.
        </strong>{' '}
        Rivana holds inventory across most of these zones, which is precisely why we can afford to
        be honest about all of them.
      </p>

      <H2>How We Ranked Them (Methodology First)</H2>
      <p>Five criteria, weighted toward what protects and grows capital:</p>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <strong>Official appreciation data</strong> — Mexico's Federal Mortgage Society (SHF)
          index, not listing-site guesses. The state backdrop:{' '}
          <strong>Quintana Roo led all of Mexico with +14.3% home-price growth in 2026</strong>{' '}
          (national average ~8.2%), after double-digit years in 2023-2024.
        </li>
        <li>
          <strong>Scarcity</strong> — can more supply be created next to yours?
        </li>
        <li>
          <strong>Infrastructure pipeline</strong> — Maya Train, airport works, the Nichupté
          Bridge, Colosio expansion.
        </li>
        <li>
          <strong>Rental economics</strong> — legal ability to rent short-term, nightly rates,
          occupancy depth. (Mexico's gross rental yields average ~6%; tourist corridors with
          permits can outperform — always modeled per unit.)
        </li>
        <li>
          <strong>Exit liquidity</strong> — depth and diversity of the buyer pool when you sell.
        </li>
      </ol>

      <H2>The Seven Zones, Ranked</H2>

      <H3>1. Cancún Hotel Zone — the scarcity king</H3>
      <p>
        A 22-km sandbar between lagoon and Caribbean that cannot be extended, carrying Mexico's
        highest nightly rates and its deepest tourist demand (the country's second-busiest airport
        feeds it daily). Benito Juárez posted +12.8% in Q1 2026 alone. The corridor rewards two
        plays: units with <strong>short-term rental permits in place</strong> — genuinely scarce,
        since most building bylaws prohibit STR (Rivana's{' '}
        <Link to={localePath('/zona-hotelera/edificio-salvia')} className={gold}>
          Edificio Salvia penthouses
        </Link>{' '}
        are the reference: three units, permits active) — and branded pre-construction, led by{' '}
        <Link to={localePath('/propiedad/mondrian-residences-grand-island-cancun')} className={gold}>
          Mondrian Residences at Grand Island
        </Link>{' '}
        (Accor operation, Q2 2027 delivery). <em>Best for: cash-flow investors and defensive
        appreciation.</em>
      </p>

      <H3>2. Puerto Cancún — the closed master plan</H3>
      <p>
        Marina, championship golf, luxury retail, and gated towers on a finite land plan ten
        minutes from downtown. Premium product starts around USD $800,000, and when the residential
        land is gone, it's gone — the cleanest scarcity thesis in the city.{' '}
        <em>Best for: luxury and legacy buyers who want a functioning ecosystem, not a promise.</em>
      </p>

      <H3>3. Costa Mujeres — the consolidation play</H3>
      <p>
        The corridor north of Cancún where ultra-luxury hotel brands already operate at capacity
        while residential pricing is still catching up — the same hotels-first, residences-later
        sequence the Hotel Zone ran decades ago. Add the new Canadian demand wave (snowbirds
        choosing non-U.S. destinations doubled from 12% to 23% in a year, per Snowbird Advisor)
        mapping exactly onto this product: new, private, beachfront, resort-serviced. Rivana's
        anchor:{' '}
        <Link to={localePath('/costa-mujeres/la-amada')} className={gold}>
          La Amada Residence
        </Link>
        , the pioneer marina community where we hold multiple units. Full analysis in our{' '}
        <Link to={localePath('/journal/costa-mujeres-real-estate')} className={gold}>
          Costa Mujeres guide
        </Link>
        . <em>Best for: appreciation-first buyers with a 3-7 year horizon.</em>
      </p>

      <H3>4. Mayakoba / Playa del Carmen — the resort-brand corridor</H3>
      <p>
        Mayakoba is the Riviera Maya's most consolidated luxury resort enclave — golf, lagoons,
        and hospitality brands with global recognition — while Playa del Carmen supplies the
        walkable-town energy and rental depth beside it. The 2026 World Cup summer has put fresh
        international attention on the corridor. Rivana's portfolio here includes{' '}
        <Link to={localePath('/propiedad/the-reserve-at-mayakoba')} className={gold}>
          The Reserve at Mayakoba
        </Link>{' '}
        among selected developments. <em>Best for: lifestyle-plus-brand buyers who want resort
        infrastructure with a real town nearby.</em>
      </p>

      <H3>5. Puerto Morelos — authenticity at a lower ticket</H3>
      <p>
        A genuine fishing town between Cancún and Playa del Carmen, fronting the Puerto Morelos
        Reef National Park (part of the Mesoamerican Reef, the planet's second largest). Walkable,
        tight-knit expat community, entry prices below the luxury corridors, 25-35 minutes from
        the airport. Appreciation here is steadier than spectacular — which is exactly what some
        buyers want. <em>Best for: lifestyle-first and retirement buyers who value community over
        corridor hype.</em>
      </p>

      <H3>6. Tulum — brand power, higher variance</H3>
      <p>
        Tulum has the strongest destination brand on this list and some of its best product —
        alongside the region's widest quality variance: land-title issues (ejido history),
        infrastructure catching up to growth, and an STR market with heavy new supply. It can
        absolutely work; it simply demands the strictest due diligence of any zone here.{' '}
        <em>Best for: experienced buyers who will verify title, developer, and rental assumptions
        line by line — or who have an advisor who will.</em>
      </p>

      <H3>7. Cancún urban corridors (Huayacán / Colosio) — the infrastructure ticket</H3>
      <p>
        Entry from roughly USD $200,000 with a direct value driver: the Nichupté Bridge and
        Colosio Boulevard expansion reconfiguring city mobility. Lower glamour, sound logic.{' '}
        <em>Best for: entry investors riding connectivity-led appreciation with less capital at
        risk.</em>
      </p>

      <H2>The Comparison Table</H2>
      <JTable
        headers={['Zone', 'Character', 'Entry ticket', 'Value driver', 'Rental logic', 'Ideal buyer']}
        rows={[
          ['Hotel Zone', 'Iconic beachfront, urban', '$350K+', 'Absolute scarcity', 'Highest nightly rates (permits required)', 'Cash-flow investor'],
          ['Puerto Cancún', 'Gated marina/golf luxury', '~$800K+', 'Closed master plan', 'Long-term executive rental', 'Legacy buyer'],
          ['Costa Mujeres', 'New luxury corridor', 'Mid-high', 'Consolidation phase', 'High-spend leisure stays', 'Appreciation investor'],
          ['Mayakoba/Playa', 'Resort brands + town', 'Wide range', 'Brand + World Cup attention', 'Resort & town rental mix', 'Lifestyle + brand'],
          ['Puerto Morelos', 'Authentic town, reef', 'Lower', 'Steady lifestyle demand', 'Boutique vacation', 'Retiree / lifestyle'],
          ['Tulum', 'Global brand, variance', 'Wide range', 'Destination brand', 'Crowded STR field', 'Experienced only'],
          ['Urban corridors', 'City growth', '~$200K+', 'New infrastructure', 'Long-term local', 'Entry investor'],
        ]}
      />

      <H2>The Mistake Most Buyers Make: Choosing the Zone Before the Strategy</H2>
      <p>
        Cash flow points you to the Hotel Zone with permits — see the{' '}
        <Link to={localePath('/journal/cancun-condos-for-sale')} className={gold}>
          Cancún condos for sale guide
        </Link>
        . Appreciation points you to Costa Mujeres or{' '}
        <Link to={localePath('/journal/pre-construction-condos-cancun')} className={gold}>
          pre-construction
        </Link>
        . Legacy points you to Puerto Cancún or Mayakoba. Lifestyle might point you to Puerto
        Morelos over all of them. <strong>Same budget, four different right answers</strong> —
        which is why our discovery call starts with your thesis, not with a listing. And wherever
        you land, the purchase mechanics for foreigners are the same stable framework: the
        fideicomiso bank trust, explained in full in our{' '}
        <Link to={localePath('/journal/fideicomiso-mexico-bank-trust-explained')} className={gold}>
          dedicated guide
        </Link>
        , with the full step-by-step process in the{' '}
        <Link to={localePath('/journal/buying-property-in-cancun-as-a-foreigner')} className={gold}>
          foreign-buyer guide
        </Link>
        .
      </p>

      <Callout>
        <p>
          Zeroing in on the Riviera Maya's flagship consolidation play? Read the{' '}
          <Link to={localePath('/journal/costa-mujeres-real-estate')} className={gold}>
            Costa Mujeres real estate guide
          </Link>{' '}
          for the corridor's investment logic and available units.
        </p>
      </Callout>

      <H2>Frequently Asked Questions</H2>
      <Faq items={faqs} />

      <WhatsAppCta
        title="Get the Map With Real Numbers"
        body={'Rankings orient you; prices and available units decide. Text "RIVIERA MAYA" on WhatsApp and receive the Zone-by-Zone Investment Map 2026: SHF appreciation data per corridor, current entry prices, and Rivana’s available Premium Selection in each zone — Salvia, Mondrian Residences, La Amada, Puerto Cancún, and The Reserve at Mayakoba. Want the shortcut? A 30-minute discovery call matches your strategy to the right corridor before you spend a weekend on listings.'}
        keyword="RIVIERA MAYA"
        message="Please send the Zone-by-Zone Investment Map 2026 and today's Premium Selection across corridors"
        slug={slug}
        campaign="tier1-english"
        waLabel="WhatsApp — text RIVIERA MAYA"
        emailLabel="Book strategy call"
        emailSubject="[RIVIERA MAYA] Zone-by-Zone Investment Map 2026 & Premium Selection"
      />
    </JournalBody>
  );
};