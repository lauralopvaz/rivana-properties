import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { JournalBody, H2, Callout, Faq, WhatsAppCta } from './primitives';
import { getArticleFaqs } from '@/data/journal-articles';

/**
 * Body — Pre-Construction Condos in Cancún (EN cluster).
 * Route: /en/journal/pre-construction-condos-cancun
 * EN-only Tier-1 transactional article.
 */
export const PreConstructionCondosCancunBody = () => {
  const { localePath } = useLanguage();
  const slug = 'pre-construction-condos-cancun';
  const faqs = getArticleFaqs(slug, 'en');
  const gold = 'text-[hsl(var(--gold))] hover:underline';

  return (
    <JournalBody>
      <p>
        Pre-construction is the strategy sophisticated investors use to buy tomorrow's market at
        today's launch price — and there is no market in Mexico where that mechanism currently
        works harder than Cancún. The state posted the country's highest home-price appreciation in
        2026 (+14.3%, per the Federal Mortgage Society's official index), and pre-construction is
        the vehicle that converts market appreciation into appreciation <em>on your entry price</em>
        , financed by interest-free developer payment plans along the way.
      </p>
      <p>
        This guide covers the mechanics, a worked example under deliberately conservative
        assumptions, the protections foreign buyers should demand, and the flagship opportunity in
        Rivana's Premium Selection for 2026:{' '}
        <Link to={localePath('/propiedad/mondrian-residences-grand-island-cancun')} className={gold}>
          Mondrian Residences at Grand Island
        </Link>
        .
      </p>

      <H2>Why Pre-Construction Works in This Specific Market</H2>
      <p>
        Pre-construction means buying a condo before the building is finished — at launch, early
        construction, or advanced stages. The developer funds part of the build with those early
        sales and compensates you with two advantages unavailable in finished product:
      </p>
      <p>
        <strong>Launch pricing below projected delivery value.</strong> Developers price early
        lists to sell velocity, then raise them as floors rise and inventory thins. In a market
        appreciating at double digits, the spread between your launch price and delivery-date
        market value is where pre-construction returns live.
      </p>
      <p>
        <strong>Interest-free leverage.</strong> The typical Cancún structure: 20-30% down, staged
        payments through construction, balance at delivery. You control an appreciating asset with
        a fraction of its price deployed — without bank interest. That matters more than usual in
        2026: even after Banxico cut its benchmark rate to 7% in December 2026, Mexican mortgage
        rates still run 10-12%. The developer plan <em>is</em> the financing.
      </p>
      <p>
        And the demand side is structural, not speculative: 70-75% of Quintana Roo transactions
        come from Mexican national buyers building patrimony; foreign capital adds the second layer
        — now including the documented Canadian shift away from U.S. winters (non-U.S. snowbird
        destinations doubled from 12% to 23% in a year, per Snowbird Advisor). The state's
        ~22,000-unit pipeline for 2026-2026 is absorbing at healthy 14-18 month inventory cycles —
        depth without glut.
      </p>

      <H2>The Math: A Worked Example (Conservative on Purpose)</H2>
      <p>
        Illustration only — not a promise, and precisely the kind of math we rebuild with real
        numbers for any specific unit:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          Launch price: <strong>$500,000</strong> · Down payment 30%: <strong>$150,000</strong> ·
          Staged payments during a 24-month build: <strong>$200,000</strong> · Balance at delivery:{' '}
          <strong>$150,000</strong>.
        </li>
        <li>
          Assume corridor appreciation at <strong>8% per year</strong> — deliberately <em>below</em>{' '}
          the state's recent +14.3% trend, because conservative assumptions are how adults model.
        </li>
        <li>
          Projected market value at delivery (24 months): roughly <strong>$583,000</strong>.
        </li>
        <li>
          Paper gain at delivery: <strong>~$83,000</strong> — earned on capital you deployed
          progressively, most of it in the final payment. Measured against the cash actually out
          the door during construction, the return-on-capital profile is what makes pre-construction
          the growth investor's vehicle.
        </li>
      </ul>
      <p>
        Now the honest counterweight: the same leverage amplifies mistakes. A delayed or troubled
        project freezes your capital instead of compounding it. Which is why the next section is
        the most important one in this article.
      </p>

      <H2>How Foreign Buyers Protect Themselves in Pre-Construction</H2>
      <p>
        Rivana applies a five-point filter before any development enters the Premium Selection —
        use it even if you never work with us:
      </p>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <strong>Developer track record.</strong> Delivered projects, real versus promised
          timelines, post-delivery quality. A render is not a résumé.
        </li>
        <li>
          <strong>Legal structure of your payments.</strong> A promissory agreement formalized
          before a notario; ideally, buyer payments protected inside a development trust so funds
          are tied to the project, not the developer's general balance sheet.
        </li>
        <li>
          <strong>Land status.</strong> No unregularized <em>ejido</em> history; construction
          licenses and environmental authorization in place.
        </li>
        <li>
          <strong>Brand operator.</strong> A project operated by an international hospitality brand
          carries audited build standards and a built-in guest engine for owners who plan to rent.
        </li>
        <li>
          <strong>Exit thesis before entry.</strong> Assignment resale at delivery, hold-and-rent,
          or personal use — the right unit differs for each answer, so answer first.
        </li>
      </ol>
      <p>
        Contract non-negotiables: delivery date <strong>with delay penalties in writing</strong>, a
        defined assignment (resale-before-delivery) mechanism, and full cost transparency including
        closing projections. As a foreign buyer you'll close through the standard fideicomiso bank
        trust — stable for decades, fully compatible with pre-construction, and explained
        end-to-end in our{' '}
        <Link to={localePath('/journal/fideicomiso-mexico-bank-trust-explained')} className={gold}>
          fideicomiso guide
        </Link>
        . Remote purchase (video tours, power of attorney closing) is standard practice — see the{' '}
        <Link to={localePath('/journal/buying-property-in-cancun-as-a-foreigner')} className={gold}>
          full foreign-buyer process
        </Link>{' '}
        for the step-by-step.
      </p>

      <H2>The Flagship: Mondrian Residences at Grand Island Cancún</H2>
      <p>
        One 2026 pre-construction concentrates every variable the filter looks for — location,
        brand, design, and structure:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Pricing from $9,050,000 MXN</strong> (roughly USD $480-500K at prevailing
          exchange rates — confirm current list, as prices step up with construction progress),
          with staged payment plans through the build.
        </li>
        <li>
          <strong>Delivery: Q2 2027</strong> — approximately a year of construction runway ahead to
          capture appreciation before keys.
        </li>
        <li>
          <strong>Operated by Accor under the Mondrian brand</strong> — one of the world's largest
          hospitality groups: audited construction standards, international amenity programming,
          and an integrated guest channel for owners who rent.
        </li>
        <li>
          <strong>Design by Filipao Nunes</strong>, among Mexico's most recognized architecture and
          interiors firms.
        </li>
        <li>
          <strong>Inside Grand Island</strong>, the megadevelopment redefining the residential
          profile of the Hotel Zone — the corridor whose scarcity economics anchor the entire
          Cancún market ($3,000-4,500/m² zone pricing).
        </li>
      </ul>
      <p>
        Few pre-construction offerings in Mexico combine a global hotel brand, a marquee architect,
        and the country's #1 appreciation state in a single product. Price lists on this project
        have moved upward since launch — the standard pre-construction pattern, working as designed.
      </p>
      <Callout>
        <p>
          Comparing pre-construction against turnkey and resale inventory? See the full{' '}
          <Link to={localePath('/journal/cancun-condos-for-sale')} className={gold}>
            Cancún condos for sale guide
          </Link>{' '}
          for corridor-by-corridor pricing and buyer profiles.
        </p>
      </Callout>

      <H2>Exit Options Before and After Delivery</H2>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Assignment before delivery</strong> (<em>cesión de derechos</em>): sell your
          contract position to another buyer, subject to the timing and fee terms in your
          agreement — terms we verify before you sign, not after.
        </li>
        <li>
          <strong>Hold and rent at delivery:</strong> short-term rental where the building's regime
          and permits allow (verify — never assume), or long-term executive rental; Rivana's
          post-sale team manages rentals for owners abroad.
        </li>
        <li>
          <strong>Personal-use hybrid:</strong> occupy high season or your chosen months, rent the
          remainder — the model many cross-border owners land on.
        </li>
      </ul>

      <H2>Frequently Asked Questions</H2>
      <Faq items={faqs} />

      <WhatsAppCta
        title="Launch Pricing Doesn't Wait for Your Research to Finish"
        body={'Pre-construction lists step upward on a schedule set by construction progress, not by your decision timeline. The unit available today at a given floor and view will cost more in ninety days — or belong to someone else. Text "PRE-CON" on WhatsApp and receive Mondrian Residences’ current price list and available units by floor and view — plus the full pre-construction Premium Selection with payment plans compared side by side. Want the model first? Ask for the worked financial analysis on the specific unit you’re considering — conservative, base, and optimistic scenarios, free.'}
        keyword="PRE-CON"
        message="Please send Mondrian's current price list and the pre-construction Premium Selection with payment plans"
        slug={slug}
        campaign="tier1-english"
        waLabel="WhatsApp — text PRE-CON"
        emailLabel="Ask for the financial model"
        emailSubject="[PRE-CON] Mondrian & pre-construction Premium Selection — payment plans & financial model"
      />
    </JournalBody>
  );
};