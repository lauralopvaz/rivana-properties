import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { ScrollReveal } from '@/components/ScrollReveal';
import { BedIcon, RulerIcon, TrendingUpIcon, ArrowRightIcon, ChatIcon } from '@/components/icons';

const propMondrian = '/images/mondrian/mondrian-hero.jpg';
import slsVistaPrincipal from '@/assets/sls-vista-principal.jpg';
import dhamarPrincipal from '@/assets/dhamar-principal.jpg';
import reserveHero from '@/assets/reserve-mayakoba-fachada-alberca-jardin.jpg';
import vellmariHero from '@/assets/vellmari-hero.jpg';
import villageBluHero from '@/assets/village-blu-hero.jpg';
import kabeekHero from '@/assets/kabeek-fachada-atardecer.jpg';
import bayViewGrandHero from '@/assets/bvg-rooftop-pool-laguna.jpg';
import arboladaHero from '@/assets/arbolada-hero.jpg';
import thompsonHero from '@/assets/thompson-hero.jpg';
import soleBluHero from '@/assets/sole-blu-fachada-principal-atardecer.jpg';
import cuoreCumbresHero from '@/assets/cuore-cumbres-hero.jpg';

interface Property {
  name: string;
  zone: string;
  beds: number;
  area: number;
  price: number;
  status: 'preventa' | 'entrega-inmediata';
  yield?: string;
  image: string;
  slug: string;
}

const allProperties: Property[] = [
  { name: 'Mondrian Residences', zone: 'Hotel Zone', beds: 3, area: 165, price: 514000, status: 'preventa', yield: '33%', image: propMondrian, slug: 'mondrian-residences-grand-island-cancun' },
  { name: 'Kabeek Marina & Condos', zone: 'Hotel Zone', beds: 4, area: 670, price: 0, status: 'preventa', image: kabeekHero, slug: 'kabeek-marina-condos' },
  { name: 'Bay View Grand at Grand Island', zone: 'Hotel Zone', beds: 3, area: 451, price: 586146, status: 'preventa', image: bayViewGrandHero, slug: 'bay-view-grand-grand-island' },
  { name: 'Thompson Residences', zone: 'Puerto Cancún', beds: 5, area: 803, price: 730000, status: 'preventa', image: thompsonHero, slug: 'thompson-residences-puerto-cancun' },
  { name: 'SLS Ocean Beach', zone: 'Puerto Cancún', beds: 3, area: 356, price: 1600000, status: 'preventa', image: slsVistaPrincipal, slug: 'sls-ocean-beach-puerto-cancun' },
  { name: 'Vellmari Grand Living', zone: 'Puerto Cancún', beds: 5, area: 714, price: 845714, status: 'preventa', image: vellmariHero, slug: 'vellmari-grand-living' },
  { name: 'Dhamar', zone: 'Costa Mujeres', beds: 3, area: 178, price: 248000, status: 'preventa', image: dhamarPrincipal, slug: 'dhamar-costa-mujeres' },
  { name: 'The Reserve at Mayakoba', zone: 'Mayakoba', beds: 4, area: 660, price: 1141000, status: 'preventa', image: reserveHero, slug: 'the-reserve-at-mayakoba' },
  { name: 'Village Blu Beach Apartments', zone: 'Puerto Morelos', beds: 1, area: 73, price: 273000, status: 'preventa', yield: '8.8%', image: villageBluHero, slug: 'village-blu-beach-apartments' },
  { name: 'Sole Blu Ocean Living', zone: 'Puerto Morelos', beds: 2, area: 136, price: 392000, status: 'preventa', yield: '~10%', image: soleBluHero, slug: 'sole-blu-ocean-living' },
  { name: 'Arbolada Towers', zone: 'Downtown Cancún', beds: 2, area: 94, price: 263000, status: 'entrega-inmediata', image: arboladaHero, slug: 'arbolada-towers' },
  { name: 'Cuore Cumbres', zone: 'Downtown Cancún', beds: 3, area: 346, price: 0, status: 'preventa', image: cuoreCumbresHero, slug: 'cuore-cumbres-cancun' },
];

const formatPrice = (usd: number) => {
  if (usd === 0) return 'Contact Us';
  if (usd >= 1000000) return `$${(usd / 1000000).toFixed(1)}M USD`;
  return `$${(usd / 1000).toFixed(0)}K USD`;
};

/* ── ROI Calculator ── */
const ROICalculator = () => {
  const [budget, setBudget] = useState('500000');
  const [currency, setCurrency] = useState<'USD' | 'CAD'>('USD');
  const [holdYears, setHoldYears] = useState(5);

  const cadRate = 0.74; // 1 CAD ≈ 0.74 USD
  const budgetUsd = currency === 'CAD' ? Number(budget) * cadRate : Number(budget);
  const annualAppreciation = 0.12;
  const annualRentalYield = 0.09;

  const futureValue = budgetUsd * Math.pow(1 + annualAppreciation, holdYears);
  const totalRentalIncome = budgetUsd * annualRentalYield * holdYears;
  const totalReturn = futureValue - budgetUsd + totalRentalIncome;
  const totalROI = ((totalReturn / budgetUsd) * 100).toFixed(0);

  const fmtNum = (n: number) => {
    if (n >= 1000000) return `$${(n / 1000000).toFixed(2)}M`;
    return `$${(n / 1000).toFixed(0)}K`;
  };

  return (
    <div className="bg-white border border-[rgba(207,174,96,0.22)] p-6 md:p-8">
      <p className="text-[10px] tracking-[4px] uppercase font-body font-[400] mb-3" style={{ color: '#CFAE60' }}>Investment Calculator</p>
      <h3 className="font-display text-[22px] font-[300] mb-6" style={{ color: '#1C1C1C' }}>Estimate Your Returns</h3>

      {/* Currency Toggle */}
      <div className="flex gap-2 mb-4">
        {(['USD', 'CAD'] as const).map(c => (
          <button
            key={c}
            onClick={() => setCurrency(c)}
            className="px-4 py-2 text-[12px] tracking-[2px] uppercase font-body transition-colors"
            style={{
              background: currency === c ? '#CFAE60' : 'transparent',
              color: currency === c ? 'white' : '#4B4B4B',
              border: `1px solid ${currency === c ? '#CFAE60' : 'rgba(0,0,0,0.10)'}`,
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Budget Input */}
      <label className="block mb-4">
        <span className="text-[11px] font-body uppercase tracking-[2px] mb-1 block" style={{ color: '#4B4B4B' }}>
          Budget ({currency})
        </span>
        <input
          type="number"
          value={budget}
          onChange={e => setBudget(e.target.value)}
          min={100000}
          step={50000}
          className="w-full bg-[#F8F6F2] border border-[rgba(0,0,0,0.10)] px-4 py-3 text-[15px] font-body font-[300] text-[#1C1C1C] focus:outline-none focus:border-[#CFAE60] transition-colors"
        />
      </label>

      {/* Hold Period */}
      <label className="block mb-6">
        <span className="text-[11px] font-body uppercase tracking-[2px] mb-1 block" style={{ color: '#4B4B4B' }}>
          Hold Period (years)
        </span>
        <div className="flex gap-2">
          {[3, 5, 7, 10].map(y => (
            <button
              key={y}
              onClick={() => setHoldYears(y)}
              className="flex-1 py-2 text-[13px] font-body transition-colors"
              style={{
                background: holdYears === y ? '#1C1C1C' : 'transparent',
                color: holdYears === y ? '#CFAE60' : '#4B4B4B',
                border: `1px solid ${holdYears === y ? '#1C1C1C' : 'rgba(0,0,0,0.10)'}`,
              }}
            >
              {y}yr
            </button>
          ))}
        </div>
      </label>

      {/* Results */}
      <div className="border-t border-[rgba(207,174,96,0.22)] pt-5">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <span className="text-[10px] font-body uppercase tracking-[2px] block mb-1" style={{ color: '#4B4B4B' }}>Property Value</span>
            <span className="font-display text-[24px] font-[300]" style={{ color: '#CFAE60' }}>{fmtNum(futureValue)}</span>
          </div>
          <div>
            <span className="text-[10px] font-body uppercase tracking-[2px] block mb-1" style={{ color: '#4B4B4B' }}>Rental Income</span>
            <span className="font-display text-[24px] font-[300]" style={{ color: '#2d7a4a' }}>{fmtNum(totalRentalIncome)}</span>
          </div>
        </div>
        <div className="bg-[#1C1C1C] p-4 flex items-center justify-between">
          <span className="text-[11px] font-body uppercase tracking-[2px] text-white/60">Estimated Total ROI</span>
          <span className="font-display text-[28px] font-[300] text-[#CFAE60]">{totalROI}%</span>
        </div>
        <p className="text-[10px] font-body text-[#4B4B4B] mt-3 italic leading-[1.6]">
          *Based on 12% annual appreciation and 9% rental yield averages for Cancún beachfront properties. Actual returns may vary. Not financial advice.
        </p>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════ */

const BeachfrontCondos = () => {
  const [buyerOrigin, setBuyerOrigin] = useState<'American' | 'Canadian'>('American');

  const whatsappText = encodeURIComponent(`Hi, I'm a ${buyerOrigin} buyer interested in Cancún condos`);
  const whatsappUrl = `https://wa.me/529988457224?text=${whatsappText}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Beachfront Condos for Sale in Cancún',
    description: "Beachfront condos for sale in Cancún's Hotel Zone. Pre-sale and move-in ready from $248K USD.",
    url: 'https://rivanaproperties.com/en/cancun/beachfront-condos-for-sale',
    numberOfItems: allProperties.length,
    itemListElement: allProperties.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': 'Product', name: p.name, url: `https://rivanaproperties.com/en/property/${p.slug}` },
    })),
  };

  return (
    <div style={{ background: '#F8F6F2' }}>
      <SEOHead
        title="Cancún Beachfront Condos for Sale 2026 | Rivana"
        description="Beachfront condos for sale in Cancún's Hotel Zone. Pre-sale and move-in ready from $248K USD. Bilingual advisors for US and Canadian buyers."
        path="/en/cancun/beachfront-condos-for-sale"
        schema={schema}
        hreflangEs="/cancun/departamentos-en-venta"
        hreflangEn="/en/cancun/beachfront-condos-for-sale"
      />

      {/* ═══ HERO ═══ */}
      <section className="pt-28 pb-14 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <p className="text-[12px] tracking-[4px] uppercase font-body font-[300] mb-4" style={{ color: '#CFAE60' }}>
          Cancún · For US &amp; Canadian Buyers
        </p>
        <h1 className="font-display text-[clamp(28px,5vw,48px)] font-[300] mb-5" style={{ color: '#1C1C1C' }}>
          Beachfront Condos for Sale in Cancún
        </h1>
        <p className="font-body font-[300] text-[16px] max-w-2xl leading-[1.8]" style={{ color: '#4B4B4B' }}>
          From branded residences in the Hotel Zone to marina-front penthouses in Puerto Cancún — explore the Mexican Caribbean's most coveted real estate, curated for international investors.
        </p>
      </section>

      {/* ═══ H2: Hotel Zone Condos ═══ */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto mb-16">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(22px,3.5vw,32px)] font-[300] mb-3" style={{ color: '#1C1C1C' }}>
            Hotel Zone Condos — Cancún's Prime Investment Corridor
          </h2>
          <p className="font-body font-[300] text-[14px] max-w-2xl mb-8" style={{ color: '#4B4B4B', lineHeight: 1.8 }}>
            Stretching 23 km along the Caribbean coast, the Hotel Zone is Cancún's most sought-after address. Properties here command premium rental rates and have averaged 12–18% annual appreciation over the past five years.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2px]" style={{ background: '#F8F6F2' }}>
          {allProperties.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 50}>
              <Link
                to={`/en/property/${p.slug}`}
                className="group block bg-white transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:-translate-y-[2px]"
              >
                <div className="relative overflow-hidden" style={{ paddingTop: '75%' }}>
                  <img src={p.image} alt={`${p.name} — ${p.zone}, Cancún`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-[rgba(207,174,96,0.12)] transition-colors duration-300" />
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="text-[12px] tracking-[2px] uppercase font-body text-white px-[10px] py-[5px]" style={{ background: p.status === 'preventa' ? '#26547D' : '#1C1C1C' }}>
                      {p.status === 'preventa' ? 'Pre-Sale' : 'Ready to Move'}
                    </span>
                    {p.yield && (
                      <span className="text-[12px] px-[10px] py-[5px] font-body flex items-center gap-1 text-white" style={{ background: '#CFAE60' }}>
                        <TrendingUpIcon className="w-3 h-3" /> {p.yield}
                      </span>
                    )}
                  </div>
                </div>
                <div className="px-5 pt-5 pb-4">
                  <p className="text-[12px] tracking-[3px] uppercase font-body font-[300] mb-1.5" style={{ color: '#CFAE60' }}>{p.zone}</p>
                  <h3 className="font-display text-[22px] font-[300] mb-2.5" style={{ color: '#1C1C1C' }}>{p.name}</h3>
                  <div className="flex items-center gap-[14px] mb-3">
                    <span className="flex items-center gap-1 text-[14px] font-body" style={{ color: '#4B4B4B' }}><BedIcon className="w-3 h-3" /> {p.beds} Beds</span>
                    <span className="flex items-center gap-1 text-[14px] font-body" style={{ color: '#4B4B4B' }}><RulerIcon className="w-3 h-3" /> {p.area} m²</span>
                  </div>
                  <div className="flex items-end justify-between pt-3 mt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <div>
                      <span className="block text-[11px] font-body font-[300] uppercase tracking-[2px]" style={{ color: '#4B4B4B' }}>From</span>
                      <span className="font-display text-[22px]" style={{ color: '#CFAE60' }}>{formatPrice(p.price)}</span>
                    </div>
                    <span className="text-[13px] font-body font-[300] flex items-center gap-1 transition-colors group-hover:text-[#CFAE60]" style={{ color: '#4B4B4B' }}>
                      View <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ H2: Why US & Canadian Buyers ═══ */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto mb-16">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(22px,3.5vw,32px)] font-[300] mb-6" style={{ color: '#1C1C1C' }}>
            Why US and Canadian Buyers Choose Cancún
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { num: '01', title: '2–4 Hour Direct Flights', desc: 'Cancún International Airport connects to 50+ US and Canadian cities with non-stop flights. Closer than Hawaii for most North American buyers.' },
            { num: '02', title: 'USD-Denominated Market', desc: 'Most luxury properties are priced and transacted in USD, eliminating currency risk for American and Canadian investors.' },
            { num: '03', title: '8–12% Annual Rental Yields', desc: 'Short-term vacation rentals in the Hotel Zone generate consistent returns driven by 30M+ annual visitors to Cancún.' },
            { num: '04', title: 'No Property Tax Surprise', desc: 'Mexican property taxes are a fraction of US/Canadian rates — typically 0.1–0.3% of assessed value annually.' },
            { num: '05', title: 'Growing Infrastructure', desc: 'The Maya Train, new highways, and the 2026 FIFA World Cup are driving unprecedented infrastructure investment across the region.' },
            { num: '06', title: 'Bilingual Support', desc: 'Rivana provides end-to-end bilingual advisory — from property tours to closing — specifically tailored for foreign buyers.' },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="bg-white border border-[rgba(0,0,0,0.06)] p-6 h-full">
                <span className="font-display text-[28px] font-[300] block mb-2" style={{ color: '#CFAE60' }}>{item.num}</span>
                <h3 className="font-display text-[17px] font-[300] mb-2" style={{ color: '#1C1C1C' }}>{item.title}</h3>
                <p className="font-body text-[13px] font-[300] leading-[1.7]" style={{ color: '#4B4B4B' }}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ H2: Pre-Sale vs Move-In Ready + ROI Calculator ═══ */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <ScrollReveal>
              <h2 className="font-display text-[clamp(22px,3.5vw,32px)] font-[300] mb-6" style={{ color: '#1C1C1C' }}>
                Pre-Sale vs. Move-In Ready: Which Is Right for You?
              </h2>
            </ScrollReveal>
            <div className="space-y-6">
              <div className="bg-white border border-[rgba(0,0,0,0.06)] p-6">
                <span className="text-[10px] tracking-[3px] uppercase font-body font-[400] block mb-2" style={{ color: '#26547D' }}>Pre-Sale</span>
                <h3 className="font-display text-[18px] font-[300] mb-3" style={{ color: '#1C1C1C' }}>Lock In Today's Prices</h3>
                <ul className="space-y-2 font-body text-[13px] font-[300] leading-[1.7]" style={{ color: '#4B4B4B' }}>
                  <li className="flex gap-2"><span style={{ color: '#CFAE60' }}>✓</span> 15–33% projected appreciation by delivery</li>
                  <li className="flex gap-2"><span style={{ color: '#CFAE60' }}>✓</span> Flexible payment plans — as low as 10% down</li>
                  <li className="flex gap-2"><span style={{ color: '#CFAE60' }}>✓</span> Defer 60–70% until delivery (18–24 months)</li>
                  <li className="flex gap-2"><span style={{ color: '#CFAE60' }}>✓</span> First pick of floor plans and views</li>
                </ul>
              </div>
              <div className="bg-white border border-[rgba(0,0,0,0.06)] p-6">
                <span className="text-[10px] tracking-[3px] uppercase font-body font-[400] block mb-2" style={{ color: '#1C1C1C' }}>Move-In Ready</span>
                <h3 className="font-display text-[18px] font-[300] mb-3" style={{ color: '#1C1C1C' }}>Start Earning Immediately</h3>
                <ul className="space-y-2 font-body text-[13px] font-[300] leading-[1.7]" style={{ color: '#4B4B4B' }}>
                  <li className="flex gap-2"><span style={{ color: '#CFAE60' }}>✓</span> Generate rental income from day one</li>
                  <li className="flex gap-2"><span style={{ color: '#CFAE60' }}>✓</span> What you see is what you get — no construction risk</li>
                  <li className="flex gap-2"><span style={{ color: '#CFAE60' }}>✓</span> Immediate personal use or vacation home</li>
                  <li className="flex gap-2"><span style={{ color: '#CFAE60' }}>✓</span> Proven rental track record available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ROI Calculator */}
          <div>
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* ═══ H2: Buying Process (Fideicomiso) ═══ */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto mb-16">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(22px,3.5vw,32px)] font-[300] mb-6" style={{ color: '#1C1C1C' }}>
            The Buying Process for Foreign Buyers
          </h2>
          <p className="font-body font-[300] text-[14px] max-w-2xl mb-8" style={{ color: '#4B4B4B', lineHeight: 1.8 }}>
            Mexican law allows foreigners to own property through a <em>fideicomiso</em> (bank trust). Here's how it works — in three simple steps:
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              step: '01',
              title: 'Choose Your Property',
              desc: 'Select your condo, sign a purchase agreement, and pay a reservation deposit (typically $5,000–$10,000 USD). This locks your unit and price.',
            },
            {
              step: '02',
              title: 'Set Up the Fideicomiso',
              desc: 'A Mexican bank holds the title on your behalf. You retain 100% ownership rights — you can sell, rent, inherit, or renovate freely. Setup takes 4–6 weeks.',
            },
            {
              step: '03',
              title: 'Close & Own',
              desc: 'Final closing happens at a Notary Public (similar to a title company). Total closing costs are typically 4–6% of the purchase price, including trust setup.',
            },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-white border border-[rgba(207,174,96,0.22)] p-6 h-full">
                <span className="font-display text-[36px] font-[300] block mb-3" style={{ color: '#CFAE60' }}>{item.step}</span>
                <h3 className="font-display text-[18px] font-[300] mb-3" style={{ color: '#1C1C1C' }}>{item.title}</h3>
                <p className="font-body text-[13px] font-[300] leading-[1.7]" style={{ color: '#4B4B4B' }}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="bg-[#1C1C1C] p-6 md:p-8">
          <h3 className="font-display text-[20px] font-[300] text-white mb-4">Key Facts About the Fideicomiso</h3>
          <ul className="space-y-3 font-body text-[13px] font-[300] leading-[1.7] text-white/80">
            <li className="flex gap-3">
              <span className="text-[#CFAE60] shrink-0 text-[16px]">→</span>
              <span><strong className="text-white">100% ownership rights</strong> — the trust is a legal mechanism, not a limitation. You have full control to sell, rent, remodel, or pass down to heirs.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#CFAE60] shrink-0 text-[16px]">→</span>
              <span><strong className="text-white">50-year renewable term</strong> — the fideicomiso is set for 50 years and automatically renewable. It's designed to be permanent.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#CFAE60] shrink-0 text-[16px]">→</span>
              <span><strong className="text-white">Annual cost: ~$500 USD</strong> — the bank charges a modest annual fee to administer the trust. No hidden costs.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto pb-20">
        <div className="bg-white border border-[rgba(207,174,96,0.22)] p-8 md:p-12 text-center" style={{ boxShadow: '0 6px 48px rgba(0,0,0,0.06)' }}>
          <p className="text-[10px] tracking-[4px] uppercase font-body font-[400] mb-3" style={{ color: '#CFAE60' }}>Ready to Invest?</p>
          <h2 className="font-display text-[clamp(22px,4vw,36px)] font-[300] mb-4" style={{ color: '#1C1C1C' }}>
            Speak with a Bilingual Advisor Today
          </h2>
          <p className="font-body font-[300] text-[14px] max-w-lg mx-auto mb-6" style={{ color: '#4B4B4B', lineHeight: 1.7 }}>
            Our team specializes in guiding US and Canadian buyers through every step — from property selection to closing.
          </p>

          {/* Buyer Origin Toggle */}
          <div className="flex justify-center gap-3 mb-6">
            {(['American', 'Canadian'] as const).map(origin => (
              <button
                key={origin}
                onClick={() => setBuyerOrigin(origin)}
                className="px-5 py-2.5 text-[12px] tracking-[2px] uppercase font-body transition-colors"
                style={{
                  background: buyerOrigin === origin ? '#1C1C1C' : 'transparent',
                  color: buyerOrigin === origin ? '#CFAE60' : '#4B4B4B',
                  border: `1px solid ${buyerOrigin === origin ? '#1C1C1C' : 'rgba(0,0,0,0.10)'}`,
                }}
              >
                I'm {origin}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] tracking-[3px] uppercase font-body font-[400] transition-colors no-underline"
              style={{ background: '#25D366', color: 'white' }}
            >
              <ChatIcon className="w-4 h-4" /> Message on WhatsApp
            </a>
            <Link
              to="/en/listings"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] tracking-[3px] uppercase font-body font-[400] transition-colors no-underline"
              style={{ border: '1px solid #CFAE60', color: '#CFAE60', background: 'transparent' }}
            >
              View All Listings <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeachfrontCondos;
