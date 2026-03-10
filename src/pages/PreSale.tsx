import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { BedIcon, RulerIcon, TrendingUpIcon, CalendarIcon, ChatIcon } from '@/components/icons';
import presaleHero from '@/assets/presale-hero.jpg';

const PreSale = () => {
  const [showAdvisor, setShowAdvisor] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowAdvisor(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img src={presaleHero} alt="Oceana Residences luxury beachfront" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/30" />
        {/* Subtle architectural silhouette */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 300V100L200 20L350 100V300' stroke='white' fill='none' stroke-width='0.5'/%3E%3Cpath d='M100 300V130L200 60L300 130V300' stroke='white' fill='none' stroke-width='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '60%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary blink-dot" />
                <span className="eyebrow">Pre-Sale · Now Open</span>
              </div>
              <h1 className="mb-4">Oceana Residences</h1>
              <p className="text-muted-foreground font-body text-lg mb-8 max-w-lg">
                Costa Mujeres' premier oceanfront development. 120 luxury units with unmatched Caribbean views and investment potential.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {[
                  { val: '120', label: 'Units' },
                  { val: '12', label: 'Floors' },
                  { val: 'Q4 2027', label: 'Delivery' },
                  { val: '10%', label: 'Est. Yield' },
                ].map((s) => (
                  <div key={s.label}>
                    <span className="font-display text-3xl text-primary">{s.val}</span>
                    <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="gold" size="lg">Request Pricing</Button>
                <Button variant="outline" size="lg">Download Brochure</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-12 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 h-64 lg:h-80">
          <div className="col-span-2 lg:col-span-2 lg:row-span-2 gradient-placeholder rounded-sm" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="gradient-placeholder-alt rounded-sm" />
          ))}
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="eyebrow mb-4">Project Details</p>
                <h2 className="mb-8">Project Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  {[
                    { label: 'Developer', val: 'Grupo Oceana' },
                    { label: 'Total Units', val: '120' },
                    { label: 'Floors', val: '12' },
                    { label: 'Delivery', val: 'Q4 2027' },
                    { label: 'Price Range', val: '$195K - $1.2M' },
                    { label: 'Location', val: 'Playa Mujeres' },
                  ].map((item) => (
                    <div key={item.label} className="bg-card border border-border rounded-sm p-4">
                      <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">{item.label}</p>
                      <span className="font-body font-400">{item.val}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Unit Types */}
              <ScrollReveal>
                <h3 className="mb-6">Unit Types</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  {[
                    { type: 'Studio / 1BR', area: '65-85 m²', price: 'From $195K', avail: 34 },
                    { type: '2-3 Bedroom', area: '95-185 m²', price: 'From $340K', avail: 41 },
                    { type: 'Penthouse', area: '220-320 m²', price: 'From $780K', avail: 12 },
                  ].map((u) => (
                    <div key={u.type} className="bg-card border border-border rounded-sm p-5">
                      <h4 className="text-lg mb-2">{u.type}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground font-body mb-4">
                        <p className="flex items-center gap-2"><RulerIcon className="w-3.5 h-3.5" /> {u.area}</p>
                        <p className="flex items-center gap-2"><TrendingUpIcon className="w-3.5 h-3.5" /> {u.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary blink-dot" />
                        <span className="text-xs font-body text-muted-foreground">{u.avail} units available</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Amenities */}
              <ScrollReveal>
                <h3 className="mb-6">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
                  {['Infinity Pool', 'Beach Club', 'Gym & Spa', 'Co-Working', 'Kids Area', 'Concierge', 'EV Charging', 'Pet Area', 'Rooftop Bar', 'Underground Parking', 'Smart Locks', 'Solar Panels'].map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm font-body text-muted-foreground bg-card border border-border rounded-sm px-3 py-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {a}
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Construction Timeline */}
              <ScrollReveal>
                <h3 className="mb-6">Construction Timeline</h3>
                <div className="flex flex-col md:flex-row gap-4 mb-12">
                  {[
                    { phase: 'Foundation', date: 'Q1 2025', status: 'Complete' },
                    { phase: 'Structure', date: 'Q3 2025', status: 'In Progress' },
                    { phase: 'Finishes', date: 'Q2 2026', status: 'Upcoming' },
                    { phase: 'Delivery', date: 'Q4 2027', status: 'Scheduled' },
                  ].map((t, i) => (
                    <div key={t.phase} className="flex-1 relative">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-display text-sm ${
                          t.status === 'Complete' ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground'
                        }`}>
                          {i + 1}
                        </span>
                        {i < 3 && <div className="hidden md:block flex-1 h-px bg-border" />}
                      </div>
                      <p className="text-sm font-body font-400">{t.phase}</p>
                      <p className="text-xs text-muted-foreground font-body">{t.date} · {t.status}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Sticky Advisor Panel */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-24 bg-card border border-border rounded-sm p-6">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">Starting From</p>
                <span className="font-display text-4xl text-primary">$195,000</span>
                <div className="flex items-center gap-2 mt-2 mb-6">
                  <TrendingUpIcon className="w-4 h-4 text-[#22c55e]" />
                  <span className="text-sm font-body text-[#22c55e]">8-12% yield</span>
                </div>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input placeholder="Full Name" className="w-full bg-muted border border-border rounded-sm px-3 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <input type="email" placeholder="Email" className="w-full bg-muted border border-border rounded-sm px-3 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <input type="tel" placeholder="Phone" className="w-full bg-muted border border-border rounded-sm px-3 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <Button variant="gold" className="w-full" type="submit">Get Pricing & Floor Plans</Button>
                  <Button variant="whatsapp" className="w-full" asChild>
                    <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer">
                      <ChatIcon className="w-4 h-4" /> WhatsApp
                    </a>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreSale;
