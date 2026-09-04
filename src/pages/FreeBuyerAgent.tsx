import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { ScrollReveal } from '@/components/ScrollReveal';
import { BedIcon, RulerIcon, TrendingUpIcon } from '@/components/icons';
import { properties } from '@/lib/properties';

const PATH = '/en/free-buyer-agent-cancun';
const URL = `https://rivanaproperties.com${PATH}`;

const WA =
  'https://wa.me/529988457224?text=FOREIGN%20BUYER%20%E2%80%94%20I%27d%20like%20a%20free%20buyer%27s%20agent%20in%20Canc%C3%BAn&utm_source=web&utm_medium=whatsapp&utm_campaign=lead&utm_content=free-buyer-agent-cancun';

/** Featured, foreign-friendly luxury inventory (fideicomiso-eligible, branded or beachfront). */
const FEATURED_SLUGS = [
  'thompson-residences-puerto-cancun',
  'sls-ocean-beach-puerto-cancun',
  'mondrian-residences-grand-island-cancun',
  'vellmari-grand-living',
  'bay-view-grand-grand-island',
  'dhamar-costa-mujeres',
];

const FAQS: { q: string; a: string }[] = [
  {
    q: 'Is a buyer\u2019s agent free in Mexico?',
    a: 'In practice, yes. In Mexico the commission is built into the developer\u2019s or seller\u2019s price and is paid by them at closing, then shared with the agency that brings the buyer. You pay the same list price whether you walk into the sales office alone or arrive represented \u2014 so working with a buyer\u2019s agent costs you nothing extra and gives you someone whose duty is to you, not to the project.',
  },
  {
    q: 'Can Canadians buy property in Canc\u00fan?',
    a: 'Yes. Canadians and Americans can own residential property anywhere in Mexico, including beachfront Canc\u00fan. Within 50 km of the coast, title is held through a fideicomiso (a Mexican bank trust) in which you are the beneficiary with full rights to use, rent, renovate, will and sell the property. No Mexican residency, visa or local credit history is required.',
  },
  {
    q: 'What is a fideicomiso?',
    a: 'A fideicomiso is a bank trust created for a 50-year renewable term. A Mexican bank holds legal title as trustee while you, the beneficiary, hold all the economic and use rights \u2014 you can live in it, rent it, remodel it, name your heirs and sell it whenever you want. The bank cannot use, encumber or sell the property. Setup runs roughly USD $1,000\u2013$2,000 with an annual fee of about USD $500\u2013$800.',
  },
  {
    q: 'Can I get financing as a foreigner?',
    a: 'Often, yes \u2014 but rarely from a Mexican retail bank at rates you would like. Most Canadian and U.S. buyers use one of three routes: developer payment plans during pre-construction (typically 30\u201350% spread over the build, interest-free), a home equity line of credit or refinance against property back home, or a cross-border lender that writes USD mortgages in Mexico. We walk through the maths of each before you commit.',
  },
];

const formatPrice = (usd: number) => {
  if (!usd) return 'On request';
  if (usd >= 1_000_000) return `$${(usd / 1_000_000).toFixed(1)}M USD`;
  return `$${Math.round(usd / 1000)}K USD`;
};

const FreeBuyerAgent = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const featured = FEATURED_SLUGS.map((slug) => properties.find((p) => p.slug === slug)).filter(
    (p): p is (typeof properties)[number] => Boolean(p),
  );

  const seoTitle = "Free Buyer's Agent in Cancún for Canadians & Americans | Rivana";
  const seoDesc =
    "Free buyer representation in Cancún for Canadian and U.S. buyers — the seller pays our commission. Fideicomiso, cross-border financing and closing, handled.";

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Rivana Properties',
      description: seoDesc,
      url: URL,
      telephone: '+52 998 845 7224',
      priceRange: '$$$',
      areaServed: [
        { '@type': 'Place', name: 'Puerto Cancún' },
        { '@type': 'Place', name: 'Cancún Hotel Zone' },
        { '@type': 'Place', name: 'Costa Mujeres' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cancún',
        addressRegion: 'Quintana Roo',
        addressCountry: 'MX',
      },
      sameAs: [
        'https://www.instagram.com/rivanaproperties',
        'https://www.facebook.com/rivanaproperties',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: "Free Buyer's Agent in Cancún",
      serviceType: 'Buyer representation in real estate',
      description:
        "Buyer-side representation in Cancún for Canadian and U.S. purchasers at no cost to the buyer: the developer or seller pays the commission at closing.",
      url: URL,
      provider: { '@type': 'RealEstateAgent', name: 'Rivana Properties', url: URL },
      areaServed: { '@type': 'Place', name: 'Cancún, Quintana Roo, Mexico' },
      audience: { '@type': 'Audience', audienceType: 'Canadian and U.S. property buyers' },
      offers: {
        '@type': 'Offer',
        price: 0,
        priceCurrency: 'USD',
        description: 'No cost to the buyer — commission is paid by the seller or developer.',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Foreign-friendly luxury listings in Cancún',
      numberOfItems: featured.length,
      itemListElement: featured.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: p.name,
          url: `https://rivanaproperties.com/en/property/${p.slug}`,
          offers: {
            '@type': 'Offer',
            price: p.priceFromUSD || undefined,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
      })),
    },
  ];

  const CtaWhatsApp = ({ label }: { label?: string }) => (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block uppercase transition-colors duration-300 hover:bg-[#b89a4a]"
      style={{
        background: '#CFAE60',
        color: '#FFFFFF',
        fontSize: '13px',
        letterSpacing: '3px',
        fontWeight: 400,
        padding: '17px 44px',
        fontFamily: "'Jost', sans-serif",
      }}
    >
      {label || "Get a free buyer's agent"}
    </a>
  );

  const H2 = ({ children }: { children: React.ReactNode }) => (
    <h2
      className="font-body text-[clamp(22px,3.5vw,32px)] font-semibold mb-4"
      style={{ color: '#1C1C1C' }}
    >
      {children}
    </h2>
  );

  const Body = ({ children }: { children: React.ReactNode }) => (
    <div
      className="font-body font-normal text-[16px] space-y-4"
      style={{ color: '#4B4B4B', lineHeight: 1.9 }}
    >
      {children}
    </div>
  );

  return (
    <div style={{ background: '#F8F6F2' }}>
      <SEOHead
        title={seoTitle}
        description={seoDesc}
        path={PATH}
        schema={schema}
        hreflangEs={PATH}
        hreflangEn={PATH}
      />

      {/* ── Hero / Intro ── */}
      <section className="pt-28 pb-12 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <p
          className="text-[12px] tracking-[4px] uppercase font-body font-normal mb-4"
          style={{ color: '#CFAE60' }}
        >
          Buyer Representation · Cancún
        </p>
        <h1
          className="font-display text-[clamp(40px,5vw,48px)] font-normal mb-4"
          style={{ color: '#1C1C1C' }}
        >
          Free Buyer&apos;s Agent in Cancún — For Canadian &amp; U.S. Buyers
        </h1>
        <div
          className="font-body font-normal text-[16px] max-w-2xl leading-[1.8] mb-8 space-y-4"
          style={{ color: '#4B4B4B' }}
        >
          <p>
            Having your own agent in Cancún costs you nothing. In Mexico the commission is already
            priced into what the developer or seller charges, and they pay it at closing — so the list
            price is identical whether you show up alone or arrive with someone reading the contract
            on your behalf.
          </p>
          <p>
            Rivana is a bilingual, buyer-side brokerage. We do not own inventory and we are not a
            developer&apos;s sales team. We shortlist, verify, negotiate, and stay on the file through
            the bank trust, the notary and the recorded deed.
          </p>
        </div>
        <CtaWhatsApp label="Get a free buyer's agent" />
      </section>

      {/* ── Curated listings ── */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto mb-20">
        <ScrollReveal>
          <h2
            className="font-body text-[clamp(22px,3.5vw,32px)] font-semibold mb-6"
            style={{ color: '#1C1C1C' }}
          >
            Foreign-friendly luxury listings we represent buyers on
          </h2>
        </ScrollReveal>

        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2px]"
          style={{ background: '#F8F6F2' }}
        >
          {featured.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 60}>
              <Link
                to={`/en/property/${p.slug}`}
                className="group block bg-white h-full transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:-translate-y-[2px]"
              >
                <div className="relative overflow-hidden" style={{ paddingTop: '75%' }}>
                  <img
                    src={p.images[0]}
                    alt={`${p.name} — luxury condo for sale in ${p.zoneEn || p.zone}, Cancún`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  {p.roiEstimate > 0 && (
                    <span
                      className="absolute top-3 left-3 text-[12px] px-[10px] py-[5px] font-body flex items-center gap-1 text-white"
                      style={{ background: '#CFAE60' }}
                    >
                      <TrendingUpIcon className="w-3 h-3" /> {p.roiEstimate}%
                    </span>
                  )}
                </div>
                <div className="px-5 pt-5 pb-4">
                  <p
                    className="text-[12px] tracking-[3px] uppercase font-body font-normal mb-1.5"
                    style={{ color: '#CFAE60' }}
                  >
                    {p.zoneEn || p.zone}
                  </p>
                  <h3 className="font-display text-[22px] font-normal mb-2.5" style={{ color: '#1C1C1C' }}>
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-[14px] mb-3">
                    <span className="flex items-center gap-1 text-[14px] font-body" style={{ color: '#4B4B4B' }}>
                      <BedIcon className="w-3 h-3" /> {p.bedroomsEn || p.bedrooms} BR
                    </span>
                    <span className="flex items-center gap-1 text-[14px] font-body" style={{ color: '#4B4B4B' }}>
                      <RulerIcon className="w-3 h-3" /> {p.sqmRange}
                    </span>
                  </div>
                  <div
                    className="flex items-end justify-between pt-3 mt-3"
                    style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
                  >
                    <div>
                      <span
                        className="block text-[11px] font-body font-normal uppercase tracking-[2px]"
                        style={{ color: '#4B4B4B' }}
                      >
                        From
                      </span>
                      <span className="font-display text-[22px]" style={{ color: '#CFAE60' }}>
                        {formatPrice(p.priceFromUSD)}
                      </span>
                    </div>
                    <span
                      className="text-[13px] font-body font-normal flex items-center gap-1 transition-colors group-hover:text-[#CFAE60]"
                      style={{ color: '#4B4B4B' }}
                    >
                      View <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link
              to="/en/listings"
              className="font-body text-[14px] tracking-[2px] uppercase"
              style={{ color: '#CFAE60' }}
            >
              See all listings →
            </Link>
            <Link
              to="/en/pre-construction-cancun"
              className="font-body text-[14px] tracking-[2px] uppercase"
              style={{ color: '#CFAE60' }}
            >
              Pre-construction properties Cancún →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Editorial body ── */}
      <section className="px-6 lg:px-10 max-w-[900px] mx-auto pb-8">
        <article className="space-y-12">
          <ScrollReveal>
            <H2>Why your buyer&apos;s agent is free</H2>
            <Body>
              <p>
                In Canada and the United States you are used to a listing side and a buying side, with
                the commission split between them. Mexico works the same way in substance, with one
                difference that matters to you: the developer sets a single list price that already
                contains the full commission, usually between 5% and 8% of the sale. When a buyer
                arrives represented, the developer pays part of that same pool to the buyer&apos;s
                agency. When a buyer arrives alone, the developer simply keeps it.
              </p>
              <p>
                So there is no version of this transaction where you save money by going unrepresented.
                The sales office cannot discount their own commission to you — it is priced into the
                unit and audited across every channel the project sells through. Walking in alone means
                you pay the same number and negotiate against a team that is contractually loyal to the
                seller.
              </p>
              <p>
                What representation actually buys you is asymmetry correction. A developer&apos;s sales
                agent will not tell you that the tower next door delivered fourteen months late, that
                the projected rental figures assume 82% occupancy the building has never hit, that the
                HOA fee is scheduled to reset after year two, or that the same floor plan two blocks
                inland trades 18% cheaper. We say those things because our fee does not depend on you
                buying <em>this</em> unit.
              </p>
              <p>
                To be straightforward about the incentive: we are paid a commission by the seller when a
                purchase closes. What we are not paid to do is push a specific building. We work across
                every developer on this coast, which is precisely why we can afford to tell you a
                project is a poor buy.
              </p>
            </Body>
          </ScrollReveal>

          <ScrollReveal>
            <H2>Buying in Cancún as a Canadian or American</H2>
            <Body>
              <p>
                Foreigners own property in Mexico outright. The one structural detail is that Cancún
                sits inside the <em>zona restringida</em> — the 50 km coastal strip — where a
                non-Mexican buyer takes title through a <em>fideicomiso</em>, a bank trust, rather than
                in their own name directly.
              </p>
              <p>
                Strip away the vocabulary and it behaves like a trust you would recognise at home. A
                Mexican bank is the trustee and holds legal title. You are the sole beneficiary, and the
                trust instrument grants you every right that matters: occupy it, renovate it, rent it
                nightly, name your heirs, mortgage it, sell it to whoever you like and keep the
                proceeds. The bank has no authority to touch, encumber or dispose of the property. The
                term is 50 years, renewable indefinitely, and it transfers to your beneficiaries without
                probate in Mexico.
              </p>
              <p>
                Budget roughly USD $1,000–$2,000 to establish the trust plus an annual maintenance fee
                in the USD $500–$800 range. Closing costs overall — acquisition tax, notary, registry,
                permits — typically land between 5% and 7% of the purchase price. No Mexican residency,
                visa or credit file is required to buy. Our{' '}
                <Link to="/en/journal/fideicomiso-mexico-bank-trust-explained" style={{ color: '#CFAE60' }}>
                  guide to the Mexican bank trust
                </Link>{' '}
                and the{' '}
                <Link to="/en/journal/buying-property-in-cancun-as-a-foreigner" style={{ color: '#CFAE60' }}>
                  step-by-step foreign buyer process
                </Link>{' '}
                cover the paperwork in full.
              </p>
            </Body>
          </ScrollReveal>

          <ScrollReveal>
            <H2>Cross-border financing options (USD/CAD)</H2>
            <Body>
              <p>
                Most foreign purchases here are cash or developer-financed, and that is not because
                mortgages are unavailable — it is because Mexican peso mortgages for non-residents carry
                rates in the double digits, which rarely survives a spreadsheet. The three routes that
                do work:
              </p>
              <p>
                <strong style={{ color: '#1C1C1C' }}>Developer payment plans.</strong> In
                pre-construction the developer is effectively your lender. A common structure is 10–15%
                on signing, 30–40% in monthly instalments through construction, and the balance on
                delivery — with no interest on the construction portion. This is the cheapest leverage
                available in the market and the main reason pre-sale pricing works for foreign buyers.
              </p>
              <p>
                <strong style={{ color: '#1C1C1C' }}>Home equity from Canada or the U.S.</strong> A HELOC
                or refinance against your primary residence usually prices far below anything offered on
                Mexican collateral, and it makes you a cash buyer here — which is worth real negotiating
                room on price, unit selection and upgrades.
              </p>
              <p>
                <strong style={{ color: '#1C1C1C' }}>Cross-border lenders.</strong> A handful of
                specialist lenders write USD-denominated mortgages on Mexican property for U.S. and
                Canadian borrowers, generally 50–65% loan-to-value on 15–25 year terms. Slower to close
                and more expensive than home equity, but it keeps your assets at home untouched.
              </p>
              <p>
                One thing we insist on regardless of route: model the currency. If your income is CAD and
                the contract is USD, a 5% move against you is a real cost, and we will show it to you in
                the numbers before you sign anything.
              </p>
            </Body>
          </ScrollReveal>

          <ScrollReveal>
            <H2>How Rivana represents YOU</H2>
            <Body>
              <p>
                We take a limited number of buyers at a time, and we work in English and Spanish across
                North American time zones, so you are never waiting a day for an answer or relying on a
                translated contract you cannot verify.
              </p>
              <p>
                Zero pressure is a policy, not a slogan. No manufactured waitlists, no incentive that
                expires tonight, no calls until you decide. What we send you is the unverified claim next
                to the verified fact: permits, actual construction progress, the developer&apos;s
                delivery history, comparable resale pricing, and rental numbers net of management,
                utilities, HOA and tax rather than gross headline yields.
              </p>
              <p>
                Legal, fiscal and closing sit with the same team. That means purchase agreement review
                before you sign, notary coordination, the SRE permit and trust set-up, a written closing
                cost breakdown with no surprises at the table, RFC tax registration, and guidance on how
                rental income and eventual capital gains will be treated in Mexico and reported at home.
                One point of contact from shortlist to recorded deed.
              </p>
              <p>
                After closing we stay useful: property management introductions, rental setup, furniture
                packages and resale timing when you are ready to exit.
              </p>
            </Body>
          </ScrollReveal>

          <ScrollReveal>
            <H2>Where we work</H2>
            <Body>
              <p>
                <strong style={{ color: '#1C1C1C' }}>
                  <Link to="/en/cancun/puerto-cancun" style={{ color: '#CFAE60' }}>
                    Puerto Cancún
                  </Link>
                </strong>{' '}
                — gated, marina-and-golf, and the closest thing to a full-time residential neighbourhood
                at this price level. Strong owner-occupier demand, tight land supply, and the branded
                inventory foreign buyers gravitate to.
              </p>
              <p>
                <strong style={{ color: '#1C1C1C' }}>
                  <Link to="/en/cancun/zona-hotelera" style={{ color: '#CFAE60' }}>
                    Zona Hotelera
                  </Link>
                </strong>{' '}
                — beachfront with the deepest short-term rental market in the country. Best nightly
                rates, highest occupancy, and the buildings where vacation-rental permission and
                management quality need the closest reading.
              </p>
              <p>
                <strong style={{ color: '#1C1C1C' }}>
                  <Link to="/en/cancun/costa-mujeres" style={{ color: '#CFAE60' }}>
                    Costa Mujeres
                  </Link>
                </strong>{' '}
                — the north shore, still below Hotel Zone pricing per square metre, wider beaches and a
                dense cluster of new branded hotels. Longer appreciation runway, lower entry ticket. You
                can also speak directly with a{' '}
                <Link to="/en/real-estate-agent-costa-mujeres" style={{ color: '#CFAE60' }}>
                  real estate agent in Costa Mujeres
                </Link>
                .
              </p>
            </Body>
          </ScrollReveal>
        </article>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 lg:px-10 max-w-[900px] mx-auto pb-16">
        <ScrollReveal>
          <H2>Frequently asked questions</H2>
        </ScrollReveal>
        <div className="space-y-[2px]">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={faq.q} delay={i * 50}>
              <div className="bg-white">
                <button
                  type="button"
                  className="w-full text-left px-6 py-4 flex items-center justify-between"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <h3
                    className="font-body text-[16px] font-[400] pr-4 m-0"
                    style={{ color: '#1C1C1C' }}
                  >
                    {faq.q}
                  </h3>
                  <span
                    className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    style={{ color: '#CFAE60' }}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    className="px-6 pb-5 font-body font-normal text-[15px]"
                    style={{ color: '#4B4B4B', lineHeight: 1.9 }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="px-6 lg:px-10 max-w-[900px] mx-auto pb-24 text-center">
        <ScrollReveal>
          <H2>Start with a conversation, not a sales pitch</H2>
          <p
            className="font-body font-normal text-[16px] mb-8 max-w-xl mx-auto"
            style={{ color: '#4B4B4B', lineHeight: 1.9 }}
          >
            Tell us your budget, your timeline and whether this is for use, income or both. We will come
            back with a shortlist and the numbers behind it — at no cost to you.
          </p>
          <CtaWhatsApp label="Get a free buyer's agent" />
        </ScrollReveal>
      </section>
    </div>
  );
};

export default FreeBuyerAgent;