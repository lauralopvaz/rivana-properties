import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { JournalBody, H2, H3, Callout, JTable, Faq, WhatsAppCta } from './primitives';
import { getArticleFaqs } from '@/data/journal-articles';

/**
 * Body — Buying Property in Cancún as a Foreigner (EN cluster).
 * Route: /en/journal/buying-property-in-cancun-as-a-foreigner
 * EN-only Tier-1 transactional article.
 */
export const ForeignBuyerCancunBody = () => {
  const { localePath } = useLanguage();
  const slug = 'buying-property-in-cancun-as-a-foreigner';
  const faqs = getArticleFaqs(slug, 'en');
  const gold = 'text-[hsl(var(--gold))] hover:underline';

  return (
    <JournalBody>
      <p>
        Every week we take calls from American and Canadian buyers who love a property but hesitate
        on the same question: <em>"Can I actually own this — safely, legally, in my name?"</em> The
        hesitation is understandable; the internet is full of half-answers. So here is the whole
        answer: the legal framework, the seven steps from offer to keys, the real costs, how remote
        closings work, and a 2026 bonus most articles miss — how your property can now support your
        Mexican residency application.
      </p>

      <H2>The Short Answer: Yes — Legal, Safe, and Done Thousands of Times a Year</H2>
      <p>
        Mexico's constitution restricts <em>direct</em> foreign ownership within the "restricted
        zone" — land within 50 km of the coast (all of Cancún) and 100 km of borders. But since the
        1970s, the law has provided a purpose-built solution: the <strong>fideicomiso</strong>, a
        bank trust in which a Mexican bank holds legal title as trustee while you, the beneficiary,
        hold every meaningful right — to use, rent, renovate, inherit, and sell the property.
        Investment-scale buyers can alternatively purchase through a Mexican corporation.
      </p>
      <p>
        Two facts matter for your confidence: the framework has operated stably for decades, and as
        of early 2026 no new restrictions on foreign buyers are under discussion. Foreign ownership
        through trusts isn't a loophole — it's the system working as designed. We unpack the
        mechanism, costs, and the five persistent myths in our dedicated{' '}
        <Link to={localePath('/journal/fideicomiso-mexico-bank-trust-explained')} className={gold}>
          fideicomiso guide
        </Link>
        .
      </p>

      <H2>The 7-Step Purchase Process, From Offer to Keys</H2>

      <H3>Step 1 — Define your strategy and budget</H3>
      <p>
        Cash flow, appreciation, or legacy? The answer determines corridor, product type, and
        structure. This 30-minute conversation prevents the expensive mistake of buying the wrong
        right property.
      </p>

      <H3>Step 2 — Property due diligence</H3>
      <p>
        Before you commit a peso, verify: the land is not unregularized <em>ejido</em> (communal
        land — the single most dangerous trap for foreign buyers), the title is clean of liens, the
        development holds its licenses and environmental permits, and the seller or developer has a
        verifiable track record. This is Rivana's five-point filter, applied before any property
        enters our Premium Selection.
      </p>

      <H3>Step 3 — Offer and promissory agreement</H3>
      <p>
        Terms are secured in a <em>contrato de promesa de compraventa</em>, ideally before a
        notario, with deposit protections and — in pre-construction — delivery dates and delay
        penalties in writing.
      </p>

      <H3>Step 4 — Trust setup with the bank</H3>
      <p>
        Your chosen trustee bank obtains the required federal permit and constitutes the
        fideicomiso naming you (and co-beneficiaries — spouses commonly hold jointly) as
        beneficiary, with substitute beneficiaries for inheritance.
      </p>

      <H3>Step 5 — The notario público (not what Americans think)</H3>
      <p>
        A Mexican notario is not a signature-stamper; they are a government-appointed legal
        authority who validates title, calculates and retains taxes, and formalizes the deed. The
        notario is a neutral pillar of transaction security — and choosing an experienced one is
        part of our coordination.
      </p>

      <H3>Step 6 — Closing and costs</H3>
      <p>
        The deed (<em>escritura</em>) is signed before the notario, funds move through secured
        channels, and title transfers into your trust.
      </p>

      <H3>Step 7 — After closing</H3>
      <p>
        Registration follows; you set up the annual trust fee, property tax (<em>predial</em>),
        utilities, and — if your plan includes renting — the operating and tax structure. Rivana's
        post-sale team handles rental administration for owners living abroad.
      </p>

      <H2>What It Really Costs: Closing and Ongoing</H2>
      <JTable
        headers={['Cost', 'Detail']}
        rows={[
          ['Closing costs', 'Plan for roughly 5-8% of purchase price all-in — transfer tax (ISAI), notario fees, permits, and trust setup. Your notario provides an itemized projection before signing; no serious closing has surprise math.'],
          ['Annual trust fee', "A modest recurring bank fee for the fideicomiso's administration."],
          ['Property tax (predial)', 'Remarkably low by North American standards — typically 0.1-0.2% of assessed value per year. Owners arriving from Ontario, BC, Texas, or Florida routinely double-check this number in disbelief. It is real.'],
          ['HOA fees', 'Vary by building and amenities; part of the unit-level analysis we prepare.'],
        ]}
      />

      <H2>Buying Remotely: How Cross-Border Clients Close Without Flying</H2>
      <p>
        A significant share of Rivana's foreign clients never board a plane until move-in day. The
        remote process: live video tours of shortlisted units → digital document exchange → power
        of attorney granted to a trusted representative (formalized through a Mexican consulate in
        the U.S. or Canada, or with an apostilled POA) → closing executed before the notario on
        your behalf → keys and post-sale onboarding handled by our team. Every step has been
        standard practice for years; the pandemic simply made it universal.
      </p>

      <H2>The 2026 Bonus: Your Property Can Support Your Residency File</H2>
      <p>
        Here's what most guides haven't caught up with. Since July 2025, Mexico recalculated
        residency financial requirements using the UMA index, and in January 2026 government fees
        roughly doubled. The 2026 thresholds: temporary residency requires roughly{' '}
        <strong>USD $4,400/month in income or ~USD $74,000 in savings</strong>; permanent residency
        roughly USD $7,300/month or ~$294,000 in savings (and the direct-from-abroad permanent
        route is now reserved for retirees and pensioners).
      </p>
      <Callout title="The lesser-known route">
        <p>
          Owning Mexican real estate valued above approximately <strong>USD $624,000</strong> is an
          alternative qualification path at some consulates. For buyers whose Cancún purchase
          clears that bar, the property does double duty — lifestyle asset and residency
          credential. Requirements vary by consulate and change every January; we point clients to
          the current rules and to immigration specialists before they apply.
        </p>
      </Callout>

      <H2>Red Flags We Screen So You Never Meet Them</H2>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Unregularized ejido land</strong> sold at "opportunity" prices — the classic
          foreign-buyer trap.
        </li>
        <li>
          <strong>Developers without delivered projects</strong> — a render is not a résumé.
        </li>
        <li>
          <strong>Payments outside a protected structure</strong> — deposits should live inside a
          notarized agreement, ideally with development-trust protection.
        </li>
        <li>
          <strong>"Airbnb-ready" units in buildings whose bylaws prohibit short-term rental</strong>
          {' '}— verify the condo regime document, not the listing copy.
        </li>
        <li>
          <strong>Prices quoted only in "final" pesos or dollars with no cost breakdown</strong> —
          transparency at the offer stage predicts transparency at closing.
        </li>
      </ul>
      <Callout>
        <p>
          Ready to look at the inventory that already passes these filters? Browse{' '}
          <Link to={localePath('/cancun/departamentos-en-venta')} className={gold}>
            Cancún condos for sale
          </Link>{' '}
          or the specialist selection in{' '}
          <Link to={localePath('/cancun/costa-mujeres')} className={gold}>
            Costa Mujeres real estate
          </Link>
          .
        </p>
      </Callout>

      <H2>Frequently Asked Questions</H2>
      <Faq items={faqs} />

      <WhatsAppCta
        title="Get the Checklist Before You Get the Keys"
        body={'The difference between a smooth foreign purchase and a stressful one is knowing the sequence before you start it. Text "FOREIGN BUYER" on WhatsApp and receive the Foreign Buyer’s Closing Checklist — every document, cost, and timeline stage — plus a free 30-minute call with an advisor who closes cross-border deals every week. Already have a property in mind? Send us the listing and we will run the red-flag screen before you commit.'}
        keyword="FOREIGN BUYER"
        message="Please send the Foreign Buyer's Closing Checklist and book a 30-minute call"
        slug={slug}
        campaign="tier1-english"
        waLabel="WhatsApp — text FOREIGN BUYER"
        emailLabel="Send the listing to review"
        emailSubject="[FOREIGN BUYER] Closing checklist & red-flag screen on a property"
      />
    </JournalBody>
  );
};