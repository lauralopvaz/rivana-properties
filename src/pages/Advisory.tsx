import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, MessageCircle, Check, Loader2, ChevronDown } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const ZONES = [
  { label: 'Hotel Zone', desc: 'Beachfront luxury. Highest rental demand.', from: 'From $514K', href: '/cancun/zona-hotelera' },
  { label: 'Puerto Cancún', desc: 'Marina lifestyle. Branded residences.', from: 'From $730K', href: '/cancun/puerto-cancun' },
  { label: 'Costa Mujeres', desc: 'Highest appreciation upside. Pre-sale window open.', from: 'From $248K', href: '/cancun/costa-mujeres' },
  { label: 'Mayakoba', desc: 'Inside the resort estate. Fixed supply.', from: 'From $1.1M', href: '/mayakoba' },
  { label: 'Puerto Morelos', desc: 'Reef-protected. Quiet. Established expat community.', from: 'From $273K', href: '/puerto-morelos' },
  { label: 'Playa del Carmen', desc: 'Cosmopolitan. Walkable. Strong long-term rental demand.', from: 'From $1.1M', href: '/playa-del-carmen' },
];

const FAQS = [
  { q: "Does Rivana's advisory service cost anything?", a: 'No. Our advisory service is entirely free to buyers. Our fee is paid by the developer or seller on completed transactions, following the standard commission structure of the Mexican real estate market. If a transaction does not close, you owe nothing. There are no retainers, no consultation fees, and no charges for the shortlist, site visit reports, or discovery call.' },
  { q: 'Do I have to visit Cancún before buying?', a: 'No. Many of our clients complete the full purchase process remotely. We conduct site visits and developer meetings on your behalf, prepare written and photographic reports, and present our analysis by video call. If you decide to proceed, the closing process can be managed with a power of attorney — a standard mechanism in Mexican real estate transactions that allows your notary to sign documents on your behalf. That said, we always recommend at least one in-person visit before finalising a significant purchase. We will organise the visit and accompany you throughout.' },
  { q: 'How long does the property search process take?', a: 'The timeline from discovery call to shortlist delivery is 48 hours. From shortlist to final decision varies by buyer — some clients decide within two weeks, others take three months. We do not apply pressure or artificial urgency. Once a property is selected and an offer is accepted, the closing process for a pre-sale purchase typically takes 45–90 days.' },
  { q: 'Do you work with buyers from both the US and Canada?', a: 'Yes. Our bilingual team has extensive experience with American and Canadian buyers specifically — including the legal differences between US and Canadian tax obligations for foreign property ownership, the T1135 disclosure requirement for Canadians, the fideicomiso structure, and the practical differences in financing options available to each nationality. We connect buyers with qualified cross-border tax advisors as part of the advisory process.' },
  { q: 'What if the property I want is not in Rivana\u2019s portfolio?', a: 'We help you find it anyway. We have relationships with developers and brokers across the full corridor. If the right property for your profile is not in our current listings, we will source it from the broader market. Our obligation is to find you the right property — not to sell you a specific one.' },
  { q: 'What happens after the purchase closes?', a: "Rivana's relationship with clients does not end at closing. We connect buyers with property management firms for rental operations, provide introductions to local accountants familiar with foreign buyer tax obligations, and remain available for any questions that arise during the ownership period. Most of our clients come back to us for their second purchase." },
];

const STEPS = [
  { n: '01', label: 'Discovery call', body: 'We start with a 30–45 minute video call. You tell us your budget, your goals, your timeline, and your concerns about buying in Mexico. We listen and ask the questions you might not know to ask yet — rental permit rules, developer track record, zone-specific risks, tax implications for your nationality. This call is free and carries no obligation.' },
  { n: '02', label: 'Personalised shortlist', body: 'Within 48 hours of your discovery call, we send you a written shortlist — typically three to five properties or developments that genuinely fit your stated criteria. Each entry includes a zone overview, development background, price per square metre relative to the market, honest rental yield estimates based on comparable units, and our frank assessment of risks and advantages. We include options from the full market, not just Rivana\u2019s own portfolio.' },
  { n: '03', label: 'Site visits and developer meetings', body: 'We attend site visits and developer presentations on your behalf before you travel. We photograph what the renders do not show — construction progress, surrounding street context, access roads, view corridors. For pre-sale developments, we review permit status, developer corporate history, and any existing buyer reviews. We prepare a written report for each development you are seriously considering.' },
  { n: '04', label: 'Your decision — in person or by video', body: 'When you are ready to visit in person — or if you prefer to make the decision remotely — we present our full analysis and walk you through each option side by side. No pressure, no countdown timers, no "this unit is the last one at this price." You decide on your timeline, with full information. If you proceed, we manage the complete closing process: notary coordination, fideicomiso setup, due diligence, and after-sale support.' },
];

const PROFILES = [
  { tag: 'The pure investor', body: 'You live in Chicago, Calgary, or Vancouver. You are not moving to Mexico — you want a well-located property generating 8–12% annual rental yield with a clear appreciation thesis. You need someone to evaluate developers objectively, model realistic returns (not developer projections), and manage the purchase without requiring you to take three flights to Cancún before you sign anything.' },
  { tag: 'The snowbird buyer', body: 'You spend four to five months in Canada or the northern US every winter and the rest somewhere warm. You are tired of renting the same apartment year after year and building no equity. You want a furnished condo you can use from November through March and rent out the rest of the year — and you want to know the honest numbers on whether ownership actually pencils out better than renting. (It does. We will show you the arithmetic.)' },
  { tag: 'The retirement buyer', body: 'You are 58–68, your retirement date is near or already here, and the Caribbean coast has been in the back of your mind for years. You have real money to deploy and zero tolerance for a purchase that goes wrong in a foreign country. You need a team that speaks your language, understands your tax situation as an American or Canadian, knows the healthcare infrastructure, and will not disappear after the commission clears.' },
];

const ZONE_OPTIONS = ['Hotel Zone', 'Puerto Cancún', 'Costa Mujeres', 'Mayakoba', 'Puerto Morelos', 'Playa del Carmen', 'Not sure — advise me'];

export default function Advisory() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '', budget: '', goal: '',
    callTime: '', notes: '',
  });
  const [zones, setZones] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const toggleZone = (z: string) => setZones((arr) => arr.includes(z) ? arr.filter((x) => x !== z) : [...arr, z]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.country || !form.budget || !form.goal || !form.callTime) return;
    setLoading(true);
    const message = [
      `Country: ${form.country}`,
      `Budget: ${form.budget}`,
      `Goal: ${form.goal}`,
      `Zones: ${zones.length ? zones.join(', ') : '—'}`,
      `Best time: ${form.callTime}`,
      form.notes ? `Notes: ${form.notes}` : null,
    ].filter(Boolean).join(' | ');
    const { error } = await supabase.from('leads').insert({
      first_name: form.name,
      email: form.email,
      phone: form.phone || null,
      interest: 'advisory_service',
      message,
      source_page: '/en/advisory',
    });
    setLoading(false);
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setSuccess(true);
      window.scrollTo({ top: document.getElementById('advisory-form')?.offsetTop || 0, behavior: 'smooth' });
    }
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: 'hsl(var(--paper))',
    border: '1px solid rgba(0,0,0,0.07)',
    color: '#1C1C1C',
    borderRadius: 0,
    minHeight: 44,
  };
  const labelStyle = "block font-body font-light uppercase mb-2 text-secondary/70";

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Rivana Property Search Advisory',
    serviceType: 'Real Estate Buyer Advisory',
    provider: { '@type': 'RealEstateAgent', name: 'Rivana Properties', url: 'https://rivanaproperties.com' },
    areaServed: ['Cancún', 'Riviera Maya', 'Costa Mujeres', 'Mayakoba', 'Puerto Morelos', 'Playa del Carmen'],
    audience: { '@type': 'Audience', audienceType: 'American and Canadian property buyers' },
    description: "Local buyer's advisory: market-wide property search, site visits, developer due diligence, and honest comparisons for foreign buyers in Cancún and the Riviera Maya.",
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <div className="bg-background">
      <SEOHead
        title="Property Search Service Cancún & Riviera Maya — Find Your Property | Rivana"
        description="Rivana's local advisory team finds the right property in Cancún and the Riviera Maya for American and Canadian buyers. Tell us your criteria. We search, shortlist, and present. You decide."
        path="/en/advisory"
        hreflangEs="/en/advisory"
        hreflangEn="/en/advisory"
        schema={[schema, faqSchema]}
      />

      {/* HERO */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p className="eyebrow mb-4">Personal Property Search · Cancún & Riviera Maya</p>
          <h1 className="text-secondary mb-5" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', lineHeight: 1.1 }}>
            Your local advisory team in Cancún and the <em className="text-primary not-italic font-display italic">Riviera Maya</em>
          </h1>
          <p className="font-body font-light text-muted-foreground max-w-3xl mb-8" style={{ fontSize: '23px', lineHeight: 1.6 }}>
            We search the market. We attend the site visits. We give you the honest picture. You make the decision — from home, with full information.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a href="#advisory-form" className="inline-flex items-center justify-center px-7 py-3.5 font-body font-light uppercase" style={{ letterSpacing: '3px', backgroundColor: 'hsl(var(--gold))', color: '#FFFFFF', fontSize: '16px', borderRadius: 0 }}>
              Start my property search →
            </a>
            <Link to="/en/listings" className="inline-flex items-center justify-center px-7 py-3.5 font-body font-light uppercase" style={{ letterSpacing: '3px', border: '1px solid hsl(var(--gold))', color: 'hsl(var(--gold))', fontSize: '16px', borderRadius: 0 }}>
              Browse listings →
            </Link>
          </div>
          <p className="font-body font-light text-muted-foreground" style={{ fontSize: '15px' }}>
            Bilingual · ES · EN · No buyer fees · Response within 2 business hours
          </p>
        </div>
      </section>

      {/* SECTION 2 — PROBLEM */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">Why buyers need a local advisor</p>
            <h2 className="text-secondary mb-8">Buying property in Mexico from abroad is not like buying at home</h2>
            <div className="space-y-5 font-body font-light text-secondary/85" style={{ fontSize: '20px', lineHeight: 1.8 }}>
              <p>The Cancún and Riviera Maya market is not transparent by North American standards. Developers control their own pricing, inventory, and disclosure. Renders are beautiful and delivery timelines are optimistic. Two developments on the same street can have completely different legal situations, rental yield realities, and construction track records — and both will tell you they are the best option.</p>
              <p>Without someone on the ground who has visited the site, met the developer, reviewed the permits, and compared real rental data from similar units — you are making a six-figure decision based on a PDF brochure and a WhatsApp conversation.</p>
              <p>That is the problem Rivana's advisory service solves.</p>
              <p>We are not a listing portal. We are not a developer sales team. We are a boutique advisory firm that works exclusively in Cancún and the Riviera Maya, with a team that lives in the market year-round and has relationships with every credible developer in the corridor. We know which projects deliver what they promise. We know which ones do not. And we tell you the difference before you wire a deposit.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3 — HOW IT WORKS */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'hsl(var(--paper))' }}>
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">The process</p>
            <h2 className="text-secondary mb-14">Four steps from first conversation to signed agreement</h2>
          </ScrollReveal>
          <div className="relative">
            <div className="hidden md:block absolute left-[42px] top-4 bottom-4 w-px bg-primary/30" />
            {STEPS.map((s) => (
              <ScrollReveal key={s.n}>
                <div className="flex flex-col md:flex-row gap-5 md:gap-10 mb-12 md:mb-14 relative">
                  <div className="flex-shrink-0 w-[88px] flex items-start justify-start">
                    <span className="font-display text-primary relative bg-[hsl(var(--paper))] pr-3" style={{ fontSize: '52px', lineHeight: 1 }}>{s.n}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-display text-2xl text-secondary mb-3">{s.label}</h3>
                    <p className="font-body font-light text-secondary/85" style={{ fontSize: '19px', lineHeight: 1.8 }}>{s.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY RIVANA */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'hsl(var(--paper))' }}>
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">Why Rivana</p>
            <h2 className="text-secondary mb-8">We represent you. Not the developer.</h2>
            <div className="space-y-5 font-body font-light text-secondary/85" style={{ fontSize: '20px', lineHeight: 1.8 }}>
              <p>In the Cancún and Riviera Maya market, most "real estate agents" are developer sales representatives. They work for the seller. Their commission comes from the developer. Their incentive is to move inventory, not to protect your investment.</p>
              <p>Rivana operates differently. We are a buyer-oriented advisory firm. Our fee is paid by the developer on completed transactions — which means our service costs you nothing — but our analysis and recommendations are built around your goals, not the developer's sales targets.</p>
              <p>This means we will tell you when a development is overpriced relative to the market. We will flag permit issues, construction delays, and developer red flags before you commit. We will recommend a competitor's project if it genuinely fits your profile better than ours. And we will give you rental yield estimates based on real Airbnb and Vrbo data from comparable units in the same zone — not the developer's marketing projections.</p>
              <p>
                We have closed transactions in every zone of the Cancún and Riviera Maya corridor: the{' '}
                <Link to="/en/cancun/zona-hotelera" className="text-primary hover:underline">Hotel Zone</Link>,{' '}
                <Link to="/en/cancun/puerto-cancun" className="text-primary hover:underline">Puerto Cancún</Link>,{' '}
                <Link to="/en/cancun/costa-mujeres" className="text-primary hover:underline">Costa Mujeres</Link>,{' '}
                <Link to="/en/mayakoba" className="text-primary hover:underline">Mayakoba</Link>,{' '}
                <Link to="/en/puerto-morelos" className="text-primary hover:underline">Puerto Morelos</Link>, and{' '}
                <Link to="/en/playa-del-carmen" className="text-primary hover:underline">Playa del Carmen</Link>. We know what each zone actually delivers — for investors, for snowbirds, and for full-time residents — and we will tell you which one fits your specific profile before we show you a single property.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 6 — ZONES */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">Where we work</p>
            <h2 className="text-secondary mb-12">The full Cancún and Riviera Maya corridor</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-12">
            {ZONES.map((z) => (
              <div key={z.label} className="pl-5" style={{ borderLeft: '2px solid #CFAE60' }}>
                <Link to={`/en${z.href}`} className="font-display text-xl text-secondary hover:text-primary transition-colors">
                  {z.label}
                </Link>
                <p className="font-body font-light text-secondary/75 mt-1.5" style={{ fontSize: '18px', lineHeight: 1.6 }}>
                  {z.desc} <span className="text-primary">{z.from}.</span>
                </p>
              </div>
            ))}
          </div>
          <p className="font-body font-light text-secondary/80 max-w-3xl" style={{ fontSize: '19px', lineHeight: 1.8 }}>
            Not sure which zone fits your profile? That is exactly the conversation we start with. Most buyers arrive thinking they want one zone and end up in a different one after a proper analysis. We have seen it enough times to know: the right zone depends on your specific use case, risk tolerance, and timeline — not on which render looks most beautiful.
          </p>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'hsl(var(--paper))' }}>
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-secondary mb-10">Common questions about our advisory service</h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
                <AccordionTrigger className="font-display text-lg text-left text-secondary py-5 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-body font-light text-secondary/80 pb-5" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 8 — LEAD FORM */}
      <section id="advisory-form" className="py-16 lg:py-24 bg-background scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">Start your search</p>
            <h2 className="text-secondary mb-5">Tell us what you're looking for</h2>
            <p className="font-body font-light text-secondary/80 max-w-2xl mb-12" style={{ fontSize: '19px', lineHeight: 1.7 }}>
              Every Rivana advisory engagement begins the same way: a conversation. Fill in the form below and one of our advisors will contact you within two business hours — by email to confirm, then by video call at a time that works for your schedule.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* LEFT 40% */}
            <aside className="lg:col-span-2 space-y-8">
              {[
                { Icon: Search, label: 'We search the full market', text: 'Not just our listings. If the right property for you is somewhere else, we tell you.' },
                { Icon: MapPin, label: 'We are on the ground', text: "Our team lives and works in Cancún and the Riviera Maya. We know what the renders don't show." },
                { Icon: MessageCircle, label: 'Bilingual. No obligation.', text: 'Every conversation in English or Spanish. No fees to the buyer — ever.' },
              ].map(({ Icon, label, text }) => (
                <div key={label} className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center" style={{ backgroundColor: 'rgba(207,174,96,0.08)', border: '1px solid rgba(207,174,96,0.22)' }}>
                    <Icon size={18} style={{ color: 'hsl(var(--gold))' }} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-secondary mb-1.5">{label}</h3>
                    <p className="font-body font-light text-secondary/75" style={{ fontSize: '17px', lineHeight: 1.65 }}>{text}</p>
                  </div>
                </div>
              ))}
              <p className="font-body font-light text-secondary/70 pt-3 border-t border-border" style={{ fontSize: '17px', lineHeight: 1.7 }}>
                Every inquiry is handled personally by a Rivana advisor — not a chatbot, not a call centre.
              </p>
            </aside>

            {/* RIGHT 60% */}
            <div className="lg:col-span-3">
              <div className="p-7 lg:p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)' }}>
                {success ? (
                  <div className="flex flex-col items-center py-10 gap-4">
                    <div className="w-14 h-14 flex items-center justify-center" style={{ backgroundColor: 'rgba(207,174,96,0.08)', border: '1px solid rgba(207,174,96,0.22)' }}>
                      <Check size={22} style={{ color: 'hsl(var(--gold))' }} />
                    </div>
                    <p className="font-display text-xl text-center text-secondary max-w-md">
                      We have your details. Expect a message from us within 2 business hours — usually sooner.
                    </p>
                  </div>
                ) : (
                <form onSubmit={submit} className="flex flex-col gap-5" style={{ fontSize: '14px', letterSpacing: '2px' }}>
                  <div>
                    <label htmlFor="adv-name" className={labelStyle}>Name *</label>
                    <input id="adv-name" required value={form.name} onChange={(e) => update('name', e.target.value)} className="w-full px-3 py-3 font-body font-light focus:outline-none" style={{ ...inputStyle, fontSize: '18px', letterSpacing: 'normal' }} />
                  </div>
                  <div>
                    <label htmlFor="adv-email" className={labelStyle}>Email *</label>
                    <input id="adv-email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className="w-full px-3 py-3 font-body font-light focus:outline-none" style={{ ...inputStyle, fontSize: '18px', letterSpacing: 'normal' }} />
                  </div>
                  <div>
                    <label htmlFor="adv-phone" className={labelStyle}>Phone / WhatsApp *</label>
                    <input id="adv-phone" type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+1 (area code) number" className="w-full px-3 py-3 font-body font-light focus:outline-none" style={{ ...inputStyle, fontSize: '18px', letterSpacing: 'normal' }} />
                  </div>
                  <div>
                    <label htmlFor="adv-country" className={labelStyle}>Country of residence *</label>
                    <div className="relative">
                      <select id="adv-country" required value={form.country} onChange={(e) => update('country', e.target.value)} className="w-full px-3 py-3 font-body font-light focus:outline-none appearance-none" style={{ ...inputStyle, fontSize: '18px', letterSpacing: 'normal' }}>
                        <option value="">Select…</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-secondary/50" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="adv-budget" className={labelStyle}>Budget range *</label>
                    <div className="relative">
                      <select id="adv-budget" required value={form.budget} onChange={(e) => update('budget', e.target.value)} className="w-full px-3 py-3 font-body font-light focus:outline-none appearance-none" style={{ ...inputStyle, fontSize: '18px', letterSpacing: 'normal' }}>
                        <option value="">Select…</option>
                        <option>Under $300K USD</option>
                        <option>$300K – $600K USD</option>
                        <option>$600K – $1M USD</option>
                        <option>$1M – $2M USD</option>
                        <option>$2M+ USD</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-secondary/50" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="adv-goal" className={labelStyle}>Primary goal *</label>
                    <div className="relative">
                      <select id="adv-goal" required value={form.goal} onChange={(e) => update('goal', e.target.value)} className="w-full px-3 py-3 font-body font-light focus:outline-none appearance-none" style={{ ...inputStyle, fontSize: '18px', letterSpacing: 'normal' }}>
                        <option value="">Select…</option>
                        <option>Rental income / investment returns</option>
                        <option>Vacation home / snowbird retreat</option>
                        <option>Retirement / full-time living</option>
                        <option>Pure capital appreciation</option>
                        <option>I need guidance — not sure yet</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-secondary/50" />
                    </div>
                  </div>
                  <fieldset>
                    <legend className={labelStyle} style={{ padding: 0 }}>Zones of interest</legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                      {ZONE_OPTIONS.map((z) => (
                        <label key={z} className="flex items-center gap-2 px-3 py-2.5 cursor-pointer" style={{ border: '1px solid rgba(0,0,0,0.07)', backgroundColor: zones.includes(z) ? 'rgba(207,174,96,0.08)' : 'hsl(var(--paper))', minHeight: 44 }}>
                          <input type="checkbox" checked={zones.includes(z)} onChange={() => toggleZone(z)} className="accent-[#CFAE60]" />
                          <span className="font-body font-light text-secondary" style={{ fontSize: '17px', letterSpacing: 'normal' }}>{z}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div>
                    <label htmlFor="adv-call" className={labelStyle}>Preferred call time *</label>
                    <div className="relative">
                      <select id="adv-call" required value={form.callTime} onChange={(e) => update('callTime', e.target.value)} className="w-full px-3 py-3 font-body font-light focus:outline-none appearance-none" style={{ ...inputStyle, fontSize: '18px', letterSpacing: 'normal' }}>
                        <option value="">Select…</option>
                        <option>Morning (9am–12pm EST)</option>
                        <option>Afternoon (12pm–5pm EST)</option>
                        <option>Evening (5pm–8pm EST)</option>
                        <option>Weekends only</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-secondary/50" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="adv-notes" className={labelStyle}>Anything else you want us to know</label>
                    <textarea id="adv-notes" rows={4} value={form.notes} onChange={(e) => update('notes', e.target.value)} placeholder="Timeline, concerns, specific requirements, previous experience with Mexican real estate…" className="w-full px-3 py-3 font-body font-light focus:outline-none resize-y" style={{ ...inputStyle, fontSize: '18px', letterSpacing: 'normal', minHeight: 110 }} />
                  </div>
                  <button type="submit" disabled={loading} className="w-full mt-2 py-4 font-body font-light uppercase flex items-center justify-center gap-2" style={{ letterSpacing: '3px', backgroundColor: '#CFAE60', color: '#1C1C1C', fontSize: '16px', borderRadius: 0, opacity: loading ? 0.7 : 1, minHeight: 52 }}>
                    {loading ? (<><Loader2 size={14} className="animate-spin" />Sending…</>) : (<>Start my property search →</>)}
                  </button>
                  <p className="font-body font-light text-center text-secondary/65" style={{ fontSize: '15px', letterSpacing: 'normal', lineHeight: 1.6 }}>
                    Your information is confidential and will never be shared with third parties. No obligation. No fees. Response within 2 business hours.
                  </p>
                </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — CLOSING */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(var(--paper))' }}>
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-secondary mb-8" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', lineHeight: 1.2 }}>
              The market rewards buyers who move with <em className="text-primary not-italic font-display italic">good information</em>.
            </h2>
            <div className="space-y-5 font-body font-light text-secondary/85 mb-8" style={{ fontSize: '20px', lineHeight: 1.8 }}>
              <p>Cancún and the Riviera Maya have delivered 8–12% annual appreciation across most segments for the past four years. The buyers who captured that appreciation were not the fastest movers. They were the best-informed ones — buyers who understood which zone, which developer, and which entry price represented genuine value rather than a well-marketed pitch.</p>
              <p>That is what Rivana's advisory service delivers. Not urgency. Information.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/en/listings" className="font-body text-primary hover:underline" style={{ fontSize: '18px' }}>
                Browse current listings →
              </Link>
              <Link to="/en/journal" className="font-body text-primary hover:underline" style={{ fontSize: '18px' }}>
                Read our market journal →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}