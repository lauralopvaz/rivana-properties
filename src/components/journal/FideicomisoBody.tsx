import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { JournalBody, H2, Callout, JTable, Faq, WhatsAppCta } from './primitives';
import { getArticleFaqs } from '@/data/journal-articles';

/**
 * Body — Fideicomiso Mexico Bank Trust Explained (EN cluster #3, trust engine).
 * Route: /en/journal/fideicomiso-mexico-bank-trust-explained
 * EN-only Tier-1 informational article.
 */
export const FideicomisoBody = () => {
  const { localePath } = useLanguage();
  const slug = 'fideicomiso-mexico-bank-trust-explained';
  const faqs = getArticleFaqs(slug, 'en');
  const gold = 'text-[hsl(var(--gold))] hover:underline';

  return (
    <JournalBody>
      <p>
        If you have fallen for a condo on the Mexican Caribbean, someone has already told you two
        contradictory things: <em>"foreigners cannot own beachfront in Mexico"</em> and{' '}
        <em>"everyone does it through a trust."</em> Both sentences hide the truth, which is simpler
        and better than most buyers expect. This guide explains the <strong>fideicomiso</strong> —
        Mexico's bank trust for foreign property ownership — from its origins to its costs, its
        inheritance advantages, and the five myths that stop good buyers from making good decisions.
      </p>

      <H2>Why the Fideicomiso Exists: 90 Seconds of History</H2>
      <p>
        Mexico's 1917 Constitution — written in a post-revolutionary era wary of foreign land grabs
        — prohibited foreigners from <em>directly</em> holding title within the "restricted zone":
        50 kilometers from any coastline and 100 kilometers from borders. That zone includes every
        meter of Cancún, the Riviera Maya, and essentially all of Mexico's beachfront.
      </p>
      <p>
        For half a century that meant foreign capital simply could not participate in coastal
        development. In the 1970s — the same decade the government launched Cancún itself as a
        planned tourism hub — Mexico formalized the solution within its foreign-investment
        framework: the <strong>fideicomiso</strong>, a bank trust structure that honors the
        constitutional restriction while giving foreign buyers full practical ownership. Fifty years
        and hundreds of thousands of trusts later, it is not an experiment. It is infrastructure.
      </p>

      <H2>How It Actually Works: You Hold Every Right That Matters</H2>
      <p>The structure has three parties:</p>
      <JTable
        headers={['Party', 'Role']}
        rows={[
          ['The bank (trustee / fiduciario)', 'A federally authorized Mexican bank holds legal title to the property inside the trust. It cannot use, occupy, sell, or borrow against your property — its role is fiduciary administration, nothing more.'],
          ['You (beneficiary / fideicomisario)', 'You hold the beneficial rights — every right that defines ownership in practice. You can live in the property, rent it short- or long-term, renovate it, mortgage your interest, sell at market price and keep every peso, and pass it to your heirs.'],
          ['The seller (trustor)', 'Transfers the property into the trust at closing.'],
        ]}
      />
      <p>
        Think of it this way: the deed sits in a secure envelope with your name on every right
        inside it. Spouses commonly hold as co-beneficiaries, and you name{' '}
        <strong>substitute beneficiaries</strong> — more on why that is a quiet superpower below.
      </p>
      <Callout title="The 50-year term, plainly">
        <p>
          The trust term is <strong>50 years, renewable</strong> — and renewable again after that,
          indefinitely. You can also sell at any point during the term; the term is an
          administrative horizon, not a countdown on your ownership.
        </p>
      </Callout>

      <H2>The Five Myths That Scare Buyers Off (Debunked)</H2>
      <JTable
        headers={['Myth', 'Reality']}
        rows={[
          ['1. "It is basically a lease."', 'No. A lease pays an owner for temporary use. In a fideicomiso YOU capture all appreciation, all rental income, and all sale proceeds. The 50-year term renews as a formality; your economic position is identical to ownership.'],
          ['2. "The bank could take my property."', 'The bank is a regulated trustee with fiduciary duty, and trust assets are segregated from the bank\u2019s balance sheet — your property is not the bank\u2019s asset and is untouchable by the bank\u2019s creditors even in a bank failure. Trustee banks administer thousands of these; it is a fee business, not a claim on your home.'],
          ['3. "It is a loophole that could close any day."', 'The fideicomiso is written into Mexico\u2019s foreign-investment law and has operated for five decades through every political cycle. As of early 2026, no restrictions or reforms affecting foreign buyers are under discussion. The trend has been toward facilitation — coastal foreign investment is a pillar of Quintana Roo\u2019s economy.'],
          ['4. "It is expensive."', 'Setup runs in the low thousands of dollars (bank fee plus federal permit), folded into closing costs that total roughly 5-8% of purchase price all-in. Annual trustee fees are modest — typically comparable to a month of HOA fees. Mexican property tax (predial) runs about 0.1-0.2% of assessed value per year — a fraction of Texas, Florida, Ontario, or BC. Most foreign owners come out AHEAD on total carrying cost.'],
          ['5. "Selling will be complicated."', 'Reselling a trust-held property is standard practice: a foreign buyer can step into your existing trust (assignment of rights) or constitute a new one; a Mexican buyer takes direct title. Notarios and trustee banks process these daily. Your exit is as liquid as the market you bought into — which is why corridor selection matters more than structure.'],
        ]}
      />

      <H2>What It Costs: The Honest Line Items</H2>
      <JTable
        headers={['Cost', 'Detail']}
        rows={[
          ['At setup', 'Federal permit + bank constitution fee (low thousands USD, inside your 5-8% closing budget alongside transfer tax and notario fees).'],
          ['Annually', 'Trustee administration fee — modest, fixed, and disclosed upfront by the bank.'],
          ['Property tax (predial)', 'Approximately 0.1-0.2% of assessed value per year — a fraction of what owners pay in Texas, Florida, Ontario, or BC.'],
          ['At resale', 'Assignment or substitution processed at closing; capital-gains tax (ISR) rules apply as they would in any sale, with exemptions and deductions worth planning from day one — one more reason the structure of your PURCHASE should anticipate your EXIT.'],
        ]}
      />
      <p>
        Rivana provides the itemized trust cost projection for any specific property before you
        commit — real numbers for a real unit beat every generic table.
      </p>

      <H2>Fideicomiso vs. Mexican Corporation: Which Structure Fits You</H2>
      <JTable
        headers={['Vehicle', 'Best for']}
        rows={[
          ['Fideicomiso', 'The right answer for personal use, vacation homes, and one-to-few investment units. Simpler, cheaper to maintain, with the inheritance advantage below.'],
          ['Mexican corporation', 'The tool for scale — multiple units, active rental business, development plays. Direct title (even in the restricted zone, for non-residential-use rules and structures), but with corporate accounting and tax obligations that only make sense at volume.'],
        ]}
      />
      <p>
        The decision has tax consequences on both sides of the border. We map it with cross-border
        specialists as part of the advisory — the structure should serve your plan, never the
        reverse.
      </p>

      <H2>Estate Planning Built In: The Quiet Superpower</H2>
      <p>
        Here is the feature that surprises attorneys back home:{' '}
        <strong>you name substitute beneficiaries directly in the trust deed.</strong> When the
        beneficiary passes away, the property transfers to the named heirs through the trust's own
        mechanism — <strong>no Mexican probate process</strong>. Compare that to direct ownership in
        many U.S. states or Canadian provinces, where an estate crossing borders can mean months of
        proceedings in two legal systems. For families buying a legacy asset, the fideicomiso is not
        a workaround — it is arguably the <em>better</em> vehicle.
      </p>
      <Callout>
        <p>
          Ready to see how the trust maps to a real purchase? Read our{' '}
          <Link to={localePath('/journal/buying-property-mexico-canadian-2026-guide')} className={gold}>
            step-by-step guide for foreign buyers in Cancún
          </Link>{' '}
          — the process, the documents, and the timeline, front to back.
        </p>
      </Callout>

      <H2>Frequently Asked Questions</H2>
      <Faq items={faqs} />

      <WhatsAppCta
        title="From Understanding to Owning"
        body='You now know more about the fideicomiso than most people selling property in Mexico. The next step is applying it to a real unit with real numbers. Text "TRUST" on WhatsApp and get the Fideicomiso Cost & Process one-pager — and if you are already evaluating a property, send it over: we will map the exact trust structure, costs, and closing timeline for that unit, at no cost. Ready to see what is available? Browse the Premium Selection or book a 30-minute discovery call.'
        keyword="TRUST"
        message="I would like the Fideicomiso Cost & Process one-pager and a trust structure map for a specific property"
        slug={slug}
        campaign="tier1-english"
        waLabel="WhatsApp — text TRUST"
        emailLabel="Book discovery call"
        emailSubject="[TRUST] Fideicomiso — one-pager & unit-specific trust map"
      />
    </JournalBody>
  );
};