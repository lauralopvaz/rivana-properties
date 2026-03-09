import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { BuyerDots } from '@/components/BuyerDots';
import { ArrowRightIcon, TrendingUpIcon, BedIcon, RulerIcon, PhoneIcon, VideoIcon, CalendarIcon, BriefcaseIcon, ChatIcon } from '@/components/icons';

const projects = [
  { name: 'Oceana Residences', zone: 'Playa Mujeres', badge: 'Pre-Sale', units: 120, price: '$195K', beds: '1-3', area: '65-185', profiles: ['maria', 'investor'], featured: true },
  { name: 'Azure Tower', zone: 'Costa Mujeres Centro', badge: 'New Launch', units: 80, price: '$245K', beds: '2-4', area: '95-220', profiles: ['pedro', 'investor'] },
  { name: 'Mar Sereno', zone: 'Punta Sam', badge: 'Pre-Sale', units: 45, price: '$320K', beds: '2-3', area: '110-175', profiles: ['carlos', 'maria'] },
];

const faqs = [
  { q: 'What is the buying process in Costa Mujeres for foreign investors?', a: 'Foreign buyers can purchase through a fideicomiso (bank trust) with full ownership rights. The process typically takes 4-6 weeks and our legal team guides you through every step.' },
  { q: 'What are the expected rental yields in the zone?', a: 'Costa Mujeres properties average 8-12% annual rental yield, with beachfront units performing at the higher end. Pre-sale purchases can see additional 15-22% capital appreciation by delivery.' },
  { q: '¿Es seguro invertir en Costa Mujeres?', a: 'Absolutamente. Costa Mujeres es una zona planificada con infraestructura de primer nivel, respaldada por desarrolladores establecidos y un marco legal sólido para inversores extranjeros.' },
  { q: '¿Cuál es la plusvalía esperada para 2026?', a: 'Con el Mundial 2026, se proyecta una apreciación del 18-25% en propiedades frente al mar. Las preventas actuales ofrecen precios significativamente por debajo del valor futuro.' },
  { q: 'What amenities are available in Costa Mujeres?', a: 'The zone features world-class golf courses, marina access, beachfront restaurants, international schools, and a new commercial district under construction.' },
  { q: '¿Qué tipo de propiedad tiene mejor retorno?', a: 'Los estudios y departamentos de 1-2 recámaras en preventa ofrecen el mejor ROI por su alta demanda en plataformas como Airbnb, especialmente los que tienen vista al mar.' },
];

const DestinationPage = () => {
  const [showAdvisor, setShowAdvisor] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setShowAdvisor(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="pt-24 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <nav className="text-sm font-body text-muted-foreground flex items-center gap-2">
          <Link to="/" className="hover:text-primary transition-colors">Rivana</Link>
          <span>/</span>
          <span>Cancún</span>
          <span>/</span>
          <span className="text-foreground">Costa Mujeres</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <p className="eyebrow mb-4">Destination</p>
              <h1 className="mb-4">Costa Mujeres</h1>
              <p className="font-display text-xl text-muted-foreground italic mb-8">The last frontier of Caribbean luxury</p>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {[
                  { val: '64', label: 'Properties' },
                  { val: '$195K', label: 'Starting From' },
                  { val: '22%', label: 'YoY Growth' },
                  { val: '120+', label: 'Units Available' },
                ].map((s) => (
                  <div key={s.label}>
                    <span className="font-display text-3xl text-primary">{s.val}</span>
                    <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {['Pre-Sale Open', '8-12% Yield', '⚽ Mundial 2026'].map((chip) => (
                  <span key={chip} className="text-xs font-body tracking-wider bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-sm">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact form in hero */}
            <div className="lg:col-span-2">
              <form className="bg-card border border-border rounded-sm p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <h4 className="text-lg mb-2">Get Costa Mujeres Pricing</h4>
                <input placeholder="Full Name" className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <input type="email" placeholder="Email" className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <input type="tel" placeholder="Phone" className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <Button variant="gold" className="w-full" type="submit">Request Information</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro */}
      <section className="py-20 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <h2>Why Costa Mujeres?</h2>
              <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
                <p>Costa Mujeres represents the final chapter of Cancún's Caribbean coastline development. With over 26 kilometers of pristine white-sand beaches, this master-planned zone is attracting the world's most discerning developers and investors.</p>
                <p>Unlike its more established neighbors, Costa Mujeres offers pre-construction pricing with projected appreciation of 18-25% by 2026, driven by the FIFA World Cup and unprecedented infrastructure investment.</p>
                <p>From boutique oceanfront condos to sprawling luxury developments, the zone caters to every investment profile — whether you're seeking passive rental income, a family legacy property, or a retirement haven in the Caribbean.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sub-zones */}
      <section className="py-20 bg-card">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">Sub-Zones</p>
            <h2 className="mb-12">Zone Breakdown</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Playa Mujeres', price: '$2,200/m²', vibe: 'Resort & Golf', chips: ['Golf Course', 'Beach Club'] },
              { name: 'Costa Mujeres Centro', price: '$1,800/m²', vibe: 'Urban Beach', chips: ['Commercial Zone', 'Marina'] },
              { name: 'Punta Sam', price: '$1,400/m²', vibe: 'Emerging', chips: ['Pre-Sale Hub', 'Highest ROI'] },
            ].map((zone, i) => (
              <ScrollReveal key={zone.name} delay={i * 100}>
                <div className="bg-muted border border-border rounded-sm p-6">
                  <h3 className="text-xl mb-2">{zone.name}</h3>
                  <p className="text-sm text-primary font-body mb-1">{zone.price}</p>
                  <p className="text-sm text-muted-foreground font-body mb-4">{zone.vibe}</p>
                  <div className="flex flex-wrap gap-2">
                    {zone.chips.map((c) => (
                      <span key={c} className="text-xs font-body bg-primary/5 text-muted-foreground px-2 py-1 rounded-sm border border-border">{c}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">Featured Projects</p>
            <h2 className="mb-12">New Developments</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 100} className={p.featured ? 'lg:row-span-2' : ''}>
                <Link to="/property/oceana-residences" className="group block bg-card border border-border rounded-sm overflow-hidden h-full">
                  <div className={`gradient-placeholder group-hover:scale-105 transition-transform duration-700 ${p.featured ? 'aspect-[4/5]' : 'aspect-[16/10]'}`}>
                    <div className="p-4">
                      <span className="text-xs font-body tracking-wider uppercase bg-primary/20 text-primary px-3 py-1 rounded-sm">
                        {p.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-muted-foreground font-body">{p.zone}</span>
                    <h3 className="text-lg mt-1 mb-3">{p.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-body mb-3">
                      <span className="flex items-center gap-1"><BedIcon className="w-3.5 h-3.5" /> {p.beds}</span>
                      <span className="flex items-center gap-1"><RulerIcon className="w-3.5 h-3.5" /> {p.area} m²</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl text-primary">From {p.price}</span>
                      <BuyerDots profiles={p.profiles} />
                    </div>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm text-primary font-body">
                      View Project <ArrowRightIcon className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">Market Intelligence</p>
            <h2 className="mb-12">Investment Data</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUpIcon className="w-6 h-6 text-primary" />, val: '22%', label: 'YoY Appreciation' },
              { icon: <TrendingUpIcon className="w-6 h-6 text-primary" />, val: '8-12%', label: 'Rental Yield' },
              { icon: <TrendingUpIcon className="w-6 h-6 text-primary" />, val: '12M+', label: 'Tourists/Year' },
              { icon: <TrendingUpIcon className="w-6 h-6 text-primary" />, val: '2026', label: 'World Cup Boost' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 100}>
                <div className="bg-muted border border-border rounded-sm p-6 text-center">
                  <div className="flex justify-center mb-3">{s.icon}</div>
                  <span className="font-display text-3xl text-primary">{s.val}</span>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mt-2">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Profiles */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">Who Buys Here</p>
            <h2 className="mb-12">Buyer Profiles</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'María', color: 'border-l-profile-maria', desc: '~45, professional seeking privacy and returns. Solo buyer with refined taste.', fit: 'Oceanfront studios & 1BR condos' },
              { name: 'Pedro & Lucía', color: 'border-l-profile-pedro', desc: '~38-42, young family prioritizing security, schools, and legacy building.', fit: 'Family 3BR with amenities' },
              { name: 'Carlos', color: 'border-l-profile-carlos', desc: '~65, retired executive seeking lifestyle, community, and tropical elegance.', fit: 'Penthouses & marina units' },
              { name: 'Foreign Investor', color: 'border-l-profile-investor', desc: '35-60, US/EU/CA passport. Pure ROI focus, portfolio diversification.', fit: 'Pre-sale 1-2BR for rental' },
            ].map((b, i) => (
              <ScrollReveal key={b.name} delay={i * 100}>
                <div className={`bg-card border border-border ${b.color} border-l-4 rounded-sm p-6`}>
                  <h4 className="text-lg mb-2">{b.name}</h4>
                  <p className="text-sm text-muted-foreground font-body mb-4">{b.desc}</p>
                  <p className="text-xs text-primary font-body uppercase tracking-wider">Best fit: {b.fit}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">Common Questions</p>
            <h2 className="mb-12">FAQ</h2>
          </ScrollReveal>
          <div className="max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="border border-border rounded-sm">
                  <button
                    className="w-full text-left px-6 py-4 flex items-center justify-between"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-body text-base font-400 pr-4">{faq.q}</span>
                    <span className={`text-primary transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-sm text-muted-foreground font-body animate-fade-in">{faq.a}</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">Explore More</p>
            <h2 className="mb-12">Related Destinations</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Puerto Cancún', from: '$450K', slug: 'puerto-cancun' },
              { name: 'Zona Hotelera', from: '$320K', slug: 'zona-hotelera' },
              { name: 'Holbox', from: '$275K', slug: 'holbox' },
            ].map((d, i) => (
              <ScrollReveal key={d.slug} delay={i * 100}>
                <Link to={`/destination/${d.slug}`} className="group block aspect-[16/10] gradient-placeholder-alt rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/90 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl mb-1">{d.name}</h3>
                    <span className="text-sm text-muted-foreground font-body">From {d.from}</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Advisor Bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-[150] transition-transform duration-500 ${showAdvisor ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-card border-t border-border shadow-2xl">
          <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
            <div className="hidden md:flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display text-primary text-lg">A</div>
              <div>
                <p className="text-sm font-body font-400">Alejandra Reyes</p>
                <p className="text-xs text-muted-foreground font-body">Costa Mujeres Specialist</p>
              </div>
              <div className="w-px h-8 bg-border mx-2" />
              <div className="flex items-center gap-2">
                {[
                  { icon: <VideoIcon className="w-4 h-4" />, label: 'Virtual Call' },
                  { icon: <PhoneIcon className="w-4 h-4" />, label: 'Schedule' },
                  { icon: <CalendarIcon className="w-4 h-4" />, label: 'Visit' },
                  { icon: <BriefcaseIcon className="w-4 h-4" />, label: 'Advisory' },
                ].map((a) => (
                  <button key={a.label} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors px-2 py-1">
                    {a.icon} <span className="hidden lg:inline">{a.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <Button variant="gold" size="sm">Get Pricing & Floor Plans</Button>
              <Button variant="whatsapp" size="sm" asChild>
                <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer">
                  <ChatIcon className="w-4 h-4" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
