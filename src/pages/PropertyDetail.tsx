import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { BedIcon, RulerIcon, TrendingUpIcon, VideoIcon, PhoneIcon, CalendarIcon, BriefcaseIcon, DocumentIcon, ChatIcon } from '@/components/icons';

const PropertyDetail = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = ['Overview', 'Features', 'Floor Plan', 'Location'];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="pt-24 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <nav className="text-sm font-body text-muted-foreground flex items-center gap-2">
          <Link to="/" className="hover:text-primary transition-colors">Rivana</Link>
          <span>/</span>
          <Link to="/destination/costa-mujeres" className="hover:text-primary transition-colors">Costa Mujeres</Link>
          <span>/</span>
          <span className="text-foreground">Oceana Residences</span>
        </nav>
      </div>

      {/* Gallery */}
      <section className="py-8 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
          <div className="lg:col-span-3 aspect-[16/9] gradient-placeholder rounded-sm relative">
            <span className="absolute top-4 left-4 eyebrow text-xs bg-primary/20 px-3 py-1 rounded-sm">Pre-Sale</span>
            <button className="absolute top-4 right-4 text-xs font-body bg-deep-dark/80 backdrop-blur text-foreground px-3 py-1.5 rounded-sm border border-border">All Photos (24)</button>
          </div>
          <div className="hidden lg:grid grid-rows-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="gradient-placeholder-alt rounded-sm" />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
          {/* Left */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="eyebrow text-xs">Costa Mujeres · Playa Mujeres</span>
              <h1 className="mt-2 mb-2">Oceana Residences</h1>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display text-3xl text-primary">$195,000 USD</span>
                <span className="text-sm text-muted-foreground font-body">$2,200/m²</span>
              </div>

              {/* Specs */}
              <div className="flex flex-wrap gap-6 py-6 border-y border-border mb-8">
                {[
                  { icon: <BedIcon className="w-4 h-4" />, val: '1-3', label: 'Bedrooms' },
                  { icon: <BedIcon className="w-4 h-4" />, val: '1-3', label: 'Bathrooms' },
                  { icon: <RulerIcon className="w-4 h-4" />, val: '65-185', label: 'm²' },
                  { icon: <TrendingUpIcon className="w-4 h-4" />, val: '12', label: 'Floors' },
                  { icon: <CalendarIcon className="w-4 h-4" />, val: 'Q4 2027', label: 'Delivery' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2 text-sm font-body">
                    <span className="text-primary">{s.icon}</span>
                    <span className="text-foreground font-400">{s.val}</span>
                    <span className="text-muted-foreground">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="flex gap-0 border-b border-border mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                    className={`px-5 py-3 text-sm font-body tracking-wider uppercase transition-colors border-b-2 -mb-px ${
                      activeTab === tab.toLowerCase().replace(' ', '-')
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed animate-fade-in">
                  <p>Oceana Residences is a premier oceanfront development in Playa Mujeres, Costa Mujeres. Designed by award-winning architects, this 12-story tower offers 120 luxury units ranging from studios to 3-bedroom penthouses, each with private terraces and ocean views.</p>
                  <p>With pre-sale pricing starting at $195,000 USD, buyers can expect 8-12% annual rental yields and 15-22% capital appreciation by delivery in Q4 2027. The development features a rooftop infinity pool, private beach club, fitness center, co-working spaces, and underground parking.</p>
                  <p>Located just 25 minutes from Cancún International Airport and adjacent to a world-class golf course, Oceana Residences represents the perfect blend of Caribbean lifestyle and investment potential.</p>
                </div>
              )}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Infinity Pool', 'Private Beach Club', 'Fitness Center', 'Co-Working Space', 'Concierge Service', 'Underground Parking', 'EV Charging', 'Smart Home System', 'Ocean Views', 'Pet Friendly', 'Kids Area', 'Spa & Wellness'].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 'floor-plan' && (
                <div className="animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="aspect-square bg-muted border border-border rounded-sm flex items-center justify-center">
                      <p className="text-sm text-muted-foreground font-body">Floor Plan SVG</p>
                    </div>
                    <div>
                      <h3 className="text-xl mb-4">Unit Type A — 2 Bedroom</h3>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {[
                          { label: 'Interior', val: '95 m²' },
                          { label: 'Terrace', val: '18 m²' },
                          { label: 'Bedrooms', val: '2' },
                          { label: 'Price/m²', val: '$2,200' },
                        ].map((m) => (
                          <div key={m.label} className="bg-muted border border-border rounded-sm p-3">
                            <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">{m.label}</p>
                            <span className="font-display text-xl text-primary">{m.val}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary blink-dot" />
                        <span className="text-sm font-body text-muted-foreground">8 units available</span>
                      </div>
                      <Button variant="gold" className="w-full">Reserve This Unit</Button>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'location' && (
                <div className="animate-fade-in">
                  <div className="aspect-[16/9] bg-muted border border-border rounded-sm flex items-center justify-center mb-6">
                    <p className="text-sm text-muted-foreground font-body">Map View</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Airport', val: '25 min' },
                      { label: 'Downtown Cancún', val: '30 min' },
                      { label: 'Golf Course', val: '5 min' },
                      { label: 'Beach', val: 'Beachfront' },
                    ].map((d) => (
                      <div key={d.label} className="text-center">
                        <span className="font-display text-xl text-primary">{d.val}</span>
                        <p className="text-xs text-muted-foreground font-body mt-1">{d.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ScrollReveal>
          </div>

          {/* Right Sidebar — Advisor Panel */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Price Block */}
              <div className="bg-card border border-border rounded-sm p-6">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">Starting From</p>
                <span className="font-display text-4xl text-primary">$195,000</span>
                <div className="flex items-center gap-2 mt-2">
                  <TrendingUpIcon className="w-4 h-4 text-[#22c55e]" />
                  <span className="text-sm font-body text-[#22c55e]">8-12% yield</span>
                </div>
              </div>

              {/* Advisor */}
              <div className="bg-card border border-border rounded-sm overflow-hidden">
                <div className="bg-muted p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display text-primary text-lg">A</div>
                  <div>
                    <p className="text-sm font-body font-400">Alejandra Reyes</p>
                    <p className="text-xs text-muted-foreground font-body">Pre-Sale Specialist · EN·ES·FR</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-4 space-y-2">
                  {[
                    { icon: <VideoIcon className="w-4 h-4" />, label: 'Virtual Call', sub: 'Face-to-face online' },
                    { icon: <PhoneIcon className="w-4 h-4" />, label: 'Schedule Call', sub: 'Quick 15-min call' },
                    { icon: <CalendarIcon className="w-4 h-4" />, label: 'Book Visit', sub: 'In-person tour' },
                    { icon: <BriefcaseIcon className="w-4 h-4" />, label: 'Investment Advisory', sub: 'Portfolio review' },
                    { icon: <DocumentIcon className="w-4 h-4" />, label: 'Download Brochure', sub: 'PDF with details' },
                  ].map((a) => (
                    <button key={a.label} className="w-full flex items-center gap-3 p-3 rounded-sm border border-border hover:border-primary group transition-colors">
                      <span className="w-8 h-8 rounded-sm border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {a.icon}
                      </span>
                      <div className="text-left">
                        <p className="text-sm font-body">{a.label}</p>
                        <p className="text-xs text-muted-foreground font-body">{a.sub}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Form */}
                <form className="p-4 border-t border-border space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-2">
                    <input placeholder="First Name" className="bg-muted border border-border rounded-sm px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                    <input placeholder="Last Name" className="bg-muted border border-border rounded-sm px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <input type="email" placeholder="Email" className="w-full bg-muted border border-border rounded-sm px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <input type="tel" placeholder="Phone" className="w-full bg-muted border border-border rounded-sm px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <Button variant="dark" className="w-full" type="submit">Request Information</Button>
                  <Button variant="whatsapp" className="w-full" asChild>
                    <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer">
                      <ChatIcon className="w-4 h-4" /> WhatsApp
                    </a>
                  </Button>
                </form>
              </div>

              {/* Investment Snapshot */}
              <div className="bg-card border border-border rounded-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUpIcon className="w-5 h-5 text-primary" />
                  <div>
                    <h4 className="text-base">Investment Snapshot</h4>
                    <p className="text-xs text-muted-foreground font-body">Estimated returns</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Annual Yield', val: '10%' },
                    { label: 'Price/m²', val: '$2,200' },
                    { label: 'HOA/month', val: '$180' },
                    { label: 'Pre-Sale Gain', val: '~20%' },
                  ].map((m) => (
                    <div key={m.label} className="bg-muted rounded-sm p-3">
                      <p className="text-xs text-muted-foreground font-body">{m.label}</p>
                      <span className="font-display text-lg text-primary">{m.val}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs font-body text-muted-foreground py-3 border-t border-border">
                  <div className="text-center flex-1">
                    <p className="text-primary font-400">10%</p>
                    <p>Reservation</p>
                  </div>
                  <div className="text-center flex-1 border-x border-border">
                    <p className="text-primary font-400">20%</p>
                    <p>During Build</p>
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-primary font-400">70%</p>
                    <p>Delivery</p>
                  </div>
                </div>
                <Button variant="gold" className="w-full mt-4">Download Investment Report</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;
