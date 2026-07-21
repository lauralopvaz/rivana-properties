import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { JournalBody, H2, H3, Callout, JTable, Faq, WhatsAppCta } from './primitives';
import { getArticleFaqs } from '@/data/journal-articles';

/**
 * Body — Cancún Condos for Sale: 2026 Buyer's Guide (EN cluster).
 * Route: /en/journal/cancun-condos-for-sale
 * EN-only Tier-1 transactional article.
 */
export const CancunCondosForSaleBody = () => {
  const { localePath } = useLanguage();
  const slug = 'cancun-condos-for-sale';
  const faqs = getArticleFaqs(slug, 'en');
  const gold = 'text-[hsl(var(--gold))] hover:underline';

  return (
    <JournalBody>
      <p>
        Searching "Cancún condos for sale" returns thousands of listings and almost no
        orientation. Which area fits your goal? What do prices actually look like per square meter
        — not per glossy listing? And how does the purchase work if you're American or Canadian?
        This guide answers all three, with official data instead of sales copy, and shows you the
        condos Rivana Properties currently holds in its Premium Selection across Cancún's three
        defining corridors.
      </p>

      <H2>Why Cancún Leads Mexico's Property Market Right Now</H2>
      <p>
        Start with the number that frames everything: according to Mexico's Federal Mortgage
        Society (SHF) — the government body that tracks national home prices through appraisals —{' '}
        <strong>
          Quintana Roo posted +14.3% year-over-year home-price appreciation in 2026, the highest of
          any state in Mexico
        </strong>
        , against a national average of roughly 8.2%. The municipality of Benito Juárez, where
        Cancún sits, recorded +12.8% in the first quarter of 2026 alone, outpacing Guadalajara,
        Querétaro, and Mexico City.
      </p>
      <p>
        This isn't a one-year spike. The state chained double-digit gains through 2023 and 2024,
        driven by forces you can verify: the Maya Train and airport modernization expanded regional
        connectivity; urban projects like the Nichupté Bridge (a direct link from downtown to the
        Hotel Zone) and the Colosio Boulevard expansion are rewriting commute times; and demand is
        deep and diversified — 70-75% of Quintana Roo transactions come from Mexican national
        buyers building patrimony, layered with growing foreign capital.
      </p>
      <p>
        That foreign layer has a new chapter: the Canadian shift. Snowbird Advisor's survey of
        4,000 Canadian travellers found the share choosing non-U.S. winter destinations nearly
        doubled in one year, from 12% to 23% — a migration documented by CBC News and The Globe
        and Mail, with Mexico among the top beneficiaries. More buyer profiles competing for the
        same coastline is the simplest definition of price support.
      </p>

      <H2>Cancún Condo Prices in 2026 (Real Numbers, Not Listing Bait)</H2>
      <p>
        Market-wide analyses put Cancún's residential average around{' '}
        <strong>USD $2,400 per square meter</strong>. But averages hide the map. Here's how the
        corridors actually price:
      </p>
      <JTable
        headers={['Area', 'Price/m² (USD)', 'Typical ticket', 'Buyer profile']}
        rows={[
          ['Hotel Zone & beachfront', '$3,000 – $4,500+', '$350K to $1M+', 'Vacation-rental investors, lifestyle buyers'],
          ['Puerto Cancún', 'Premium tier', 'From ~$800K', 'Luxury/legacy buyers, marina & golf lifestyle'],
          ['Costa Mujeres', 'Consolidating', 'Mid-to-high, new product', 'Appreciation-focused, privacy seekers'],
          ['Urban corridors (Huayacán/Colosio)', '$1,800 – $2,500', 'From ~$200K', 'Entry investors riding infrastructure'],
        ]}
      />
      <p>
        The variable that moves price <em>within</em> a corridor is rarely just the view: it's
        floor level, delivery status (pre-construction vs. turnkey), brand operation, and — the
        most underrated factor — whether the building legally permits short-term rental.
      </p>

      <H2>The Four Areas That Matter (and Who Each Is For)</H2>

      <H3>Hotel Zone: scarcity plus the best nightly rates in Mexico</H3>
      <p>
        A 22-kilometer sandbar between the Nichupté Lagoon and the Caribbean. You cannot
        manufacture more of it — which is why it holds the country's highest vacation-rental rates
        and why supply-constrained assets here appreciate defensively. Two Rivana anchors define
        the corridor's opposite entry points: the{' '}
        <Link to={localePath('/zona-hotelera/edificio-salvia')} className={gold}>
          Edificio Salvia penthouses
        </Link>
        , three units with short-term rental permits already in place (a genuinely scarce
        combination — most buildings prohibit STR in their bylaws), and{' '}
        <Link to={localePath('/propiedad/mondrian-residences-grand-island-cancun')} className={gold}>
          Mondrian Residences at Grand Island
        </Link>
        , the corridor's flagship pre-construction, operated by Accor's Mondrian brand with
        delivery in Q2 2027.
      </p>

      <H3>Puerto Cancún: the master-planned luxury enclave</H3>
      <p>
        Nearly 800 hectares of marina, Tom Weiskopf-designed golf, luxury retail, and gated
        residential towers — ten minutes from downtown, twenty from the airport. The master plan
        is closed: when residential land runs out, there is no more. Premium homes start around
        USD $800,000, and Rivana maintains a rotating Premium Selection of pre-construction, newly
        delivered, and select resale units in the community.
      </p>

      <H3>Costa Mujeres: the consolidation play</H3>
      <p>
        North of Cancún, facing Isla Mujeres: ultra-luxury hotel brands already operate at
        capacity while residential pricing is still catching up — the same sequence the Hotel Zone
        ran decades ago. Rivana's anchor here is{' '}
        <Link to={localePath('/costa-mujeres/la-amada')} className={gold}>
          La Amada Residence
        </Link>
        , a pioneer community with private marina and beach where we currently hold multiple
        units, letting you comparison-shop levels, views, and layouts within one proven
        development.
      </p>

      <H3>Urban growth corridors: the infrastructure ticket</H3>
      <p>
        Huayacán and the Colosio corridor offer entry from roughly USD $200,000, with the Nichupté
        Bridge and boulevard expansion as direct value drivers. The play here is
        connectivity-led appreciation with lower capital at risk.
      </p>

      <H2>Can Foreigners Buy? Yes — Here's the 60-Second Version</H2>
      <p>
        All of coastal Cancún sits in Mexico's constitutional "restricted zone" (within 50 km of
        the coast), where foreigners purchase through a <strong>fideicomiso</strong> — a bank
        trust in which a Mexican bank holds title as trustee while you, the beneficiary, keep
        every right that matters: use, rent, renovate, inherit, and sell. The structure has
        operated for decades, and as of early 2026 no regulatory changes are under discussion.
        Budget for closing costs and notario fees, a modest annual trust fee, and property tax
        that is remarkably low by U.S. or Canadian standards (typically 0.1-0.2% of assessed
        value). We break down the entire mechanism — including the five myths that scare buyers
        off — in our{' '}
        <Link to={localePath('/journal/fideicomiso-mexico-bank-trust-explained')} className={gold}>
          full fideicomiso guide
        </Link>
        .
      </p>

      <H2>New Condo vs. Pre-Construction vs. Resale</H2>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Pre-construction</strong> buys you launch pricing and interest-free developer
          payment plans during the build — the appreciation-capture strategy in a +14.3% state.
          See our{' '}
          <Link to={localePath('/journal/pre-sale-guide-cancun-2026')} className={gold}>
            pre-construction guide
          </Link>{' '}
          for the math and the developer-vetting filter.
        </li>
        <li>
          <strong>New turnkey</strong> delivers immediate use or rental income with
          current-generation amenities.
        </li>
        <li>
          <strong>Select resale</strong> in consolidated towers can beat new-equivalent pricing —
          when the unit's position (floor, view, HOA health) survives due diligence.
        </li>
      </ul>
      <p>
        The right answer depends on your thesis: cash flow, appreciation, or legacy. Choosing the
        product before choosing the thesis is the most common — and most expensive — mistake we
        see.
      </p>

      <Callout>
        <p>
          Comparing corridors beyond Cancún? Read our guide to the{' '}
          <Link to={localePath('/journal/mayakoba-vs-puerto-cancun')} className={gold}>
            best places in the Riviera Maya
          </Link>{' '}
          for luxury investors in 2026.
        </p>
      </Callout>

      <H2>Frequently Asked Questions</H2>
      <Faq items={faqs} />

      <WhatsAppCta
        title="See Today's Availability — Not Last Month's Listings"
        body={'The best condos in Cancún — high floors, protected views, rental permits — move through direct relationships before they reach the portals. Text "CONDOS" on WhatsApp and receive today’s Premium Selection: available units in the Hotel Zone, Puerto Cancún, and Costa Mujeres, current price lists, and a side-by-side comparison built for your budget. Prefer to start with a conversation? Book a free 30-minute discovery video call.'}
        keyword="CONDOS"
        message="Please send today's Premium Selection of Cancún condos and a side-by-side comparison"
        slug={slug}
        campaign="tier1-english"
        waLabel="WhatsApp — text CONDOS"
        emailLabel="Book discovery call"
        emailSubject="[CONDOS] Cancún — Premium Selection & side-by-side comparison"
      />
    </JournalBody>
  );
};