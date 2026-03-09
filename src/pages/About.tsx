import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ShieldIcon, EyeIcon, GlobeIcon, HeartIcon, PhoneIcon, ChatIcon, ArrowRightIcon } from '@/components/icons';

const team = [
  { name: 'Alejandra Reyes', initial: 'A', role: 'Pre-Sale Specialist', zone: 'Costa Mujeres', lang: 'EN·ES·FR', bio: 'Former luxury hospitality manager with 8 years in Caribbean real estate. Alejandra specializes in pre-sale investment strategies and has closed over $40M in transactions.', profiles: ['maria', 'investor'] },
  { name: 'Carlos Mendoza', initial: 'C', role: 'Investment Director', zone: 'Mayakoba', lang: 'EN·ES', bio: 'CFA charterholder with a background in private equity. Carlos brings institutional-grade analysis to every property recommendation, focusing on long-term value creation.', profiles: ['investor', 'carlos'] },
  { name: 'Regina Flores', initial: 'R', role: 'Family Advisor', zone: 'Puerto Cancún', lang: 'EN·ES·PT', bio: 'Specializing in family relocations and legacy properties. Regina helps families find their ideal home with attention to schools, safety, and community.', profiles: ['pedro', 'maria'] },
  { name: 'Miguel Ángel Torres', initial: 'M', role: 'Retirement Specialist', zone: 'Holbox', lang: 'EN·ES', bio: 'Licensed retirement planning advisor turned real estate consultant. Miguel helps retirees navigate the transition to Caribbean living with comprehensive support.', profiles: ['carlos'] },
  { name: 'Sofía Laurent', initial: 'S', role: 'International Sales', zone: 'Zona Hotelera', lang: 'EN·ES·FR', bio: 'French-Mexican dual national with deep connections to European and North American buyers. Sofía bridges cultural gaps to ensure smooth cross-border transactions.', profiles: ['investor', 'maria'] },
  { name: 'David Castillo', initial: 'D', role: 'Emerging Markets', zone: 'Tulum · Mérida', lang: 'EN·ES', bio: 'Early Tulum pioneer who identified the zone before its boom. David now scouts emerging markets across the Yucatán Peninsula for high-growth opportunities.', profiles: ['investor', 'pedro'] },
];

const profileColors: Record<string, string> = {
  maria: 'bg-profile-maria',
  pedro: 'bg-profile-pedro',
  carlos: 'bg-profile-carlos',
  investor: 'bg-profile-investor',
};

const About = () => (
  <div className="light-page">
    {/* Hero */}
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 px-6 lg:px-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <p className="eyebrow mb-4">About Rivana</p>
          <h1 className="mb-6">Not Just an Agency.<br /><em className="italic text-primary">Your Partner.</em></h1>
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-8 max-w-lg">
            We don't sell properties. We build legacies. Rivana Properties is a boutique real estate advisory firm that combines deep local expertise with global investor standards. Every recommendation is curated, every transaction is guided, every client is family.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { val: '140M+', label: 'USD Closed' },
              { val: '280+', label: 'Happy Clients' },
              { val: '7', label: 'Zones' },
            ].map((s) => (
              <div key={s.label}>
                <span className="font-display text-3xl text-primary">{s.val}</span>
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-deep-dark text-foreground rounded-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              {team.slice(0, 4).map((t) => (
                <div key={t.name} className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display text-primary text-sm">
                  {t.initial}
                </div>
              ))}
              <span className="text-sm font-body text-muted-foreground ml-2">+2 more</span>
            </div>
            <p className="font-display text-xl italic leading-relaxed mb-4">
              "We protect your investment as if it were our own — because to us, your trust is our most valuable asset."
            </p>
            <div className="border-t border-border pt-4 mt-4">
              <p className="eyebrow text-xs">Tu inversión, tu legado</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Manifesto */}
    <section className="py-20 bg-deep-dark text-foreground">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-display text-3xl lg:text-4xl italic leading-relaxed">
            "In a market flooded with noise, we choose substance. Every property in our collection is visited, vetted, and believed in — not by algorithms, but by people who know this coastline like the back of their hand."
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 px-6 lg:px-10 max-w-[1400px] mx-auto">
      <ScrollReveal>
        <p className="eyebrow mb-4">Our Values</p>
        <h2 className="mb-12">What Guides Us</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <ShieldIcon className="w-6 h-6" />, title: 'Transparency', desc: 'No hidden fees, no surprises. We disclose everything — pricing, developer track records, market risks.' },
          { icon: <EyeIcon className="w-6 h-6" />, title: 'Curated Access', desc: 'We say no to 80% of properties we evaluate. Only the best make it into our collection.' },
          { icon: <GlobeIcon className="w-6 h-6" />, title: 'Global Reach', desc: 'Clients from 18 countries trust us. Our team speaks 4 languages and understands international investment.' },
          { icon: <HeartIcon className="w-6 h-6" />, title: 'Long-Term Vision', desc: 'We don\'t chase commissions. We build relationships that last decades and span generations.' },
        ].map((v, i) => (
          <ScrollReveal key={v.title} delay={i * 100}>
            <div className="bg-card border border-border rounded-sm p-6">
              <span className="text-primary mb-4 block">{v.icon}</span>
              <h4 className="text-lg mb-2">{v.title}</h4>
              <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Team */}
    <section className="py-20 px-6 lg:px-10 max-w-[1400px] mx-auto">
      <ScrollReveal>
        <p className="eyebrow mb-4">The Team</p>
        <h2 className="mb-12">Meet Your Advisors</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <ScrollReveal key={member.name} delay={i * 80}>
            <div className="bg-card border border-border rounded-sm overflow-hidden">
              {/* Portrait area */}
              <div className="relative h-48 bg-gradient-to-br from-deep-dark to-muted flex items-center justify-center">
                <span className="font-display text-7xl text-primary/20">{member.initial}</span>
                <span className="absolute bottom-3 right-3 text-xs font-body bg-muted/80 backdrop-blur text-foreground px-2 py-1 rounded-sm">
                  {member.lang}
                </span>
              </div>
              <div className="p-6">
                <p className="eyebrow text-xs mb-1">{member.role}</p>
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-xs text-muted-foreground font-body mb-3">{member.zone}</p>
                <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-3">{member.bio}</p>
                <div className="flex items-center gap-1.5 mb-4">
                  {member.profiles.map((p) => (
                    <span key={p} className={`w-2.5 h-2.5 rounded-full ${profileColors[p]}`} title={p} />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <PhoneIcon className="w-3.5 h-3.5" /> Call
                  </Button>
                  <Button variant="whatsapp" size="sm" className="flex-1" asChild>
                    <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer">
                      <ChatIcon className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Numbers */}
    <section className="py-20 bg-deep-dark text-foreground">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {[
            { val: '$140M+', label: 'Total Sales' },
            { val: '280+', label: 'Clients' },
            { val: '18', label: 'Countries' },
            { val: '7', label: 'Destinations' },
            { val: '96%', label: 'Satisfaction' },
          ].map((s) => (
            <ScrollReveal key={s.label}>
              <span className="font-display text-4xl text-primary">{s.val}</span>
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mt-2">{s.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-20 px-6 lg:px-10 max-w-[1400px] mx-auto">
      <ScrollReveal>
        <p className="eyebrow mb-4">How We Work</p>
        <h2 className="mb-12">Our Process</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { step: '01', title: 'Discovery', desc: 'We learn about your goals, budget, lifestyle, and investment timeline.' },
          { step: '02', title: 'Curation', desc: 'Our team handpicks 3-5 properties that match your exact criteria.' },
          { step: '03', title: 'Evaluation', desc: 'Deep-dive analysis on financials, legal, developer reputation, and market data.' },
          { step: '04', title: 'Closing', desc: 'Full-service support through contracts, fideicomiso setup, and post-purchase management.' },
        ].map((s, i) => (
          <ScrollReveal key={s.step} delay={i * 100}>
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center font-display text-xl text-primary mb-4">
                {s.step}
              </div>
              <h4 className="text-lg mb-2">{s.title}</h4>
              <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Contact */}
    <section className="py-20 bg-deep-dark text-foreground">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <p className="eyebrow mb-4">Get in Touch</p>
            <h2 className="mb-6">Let's Talk About Your Investment</h2>
            <p className="text-muted-foreground font-body mb-8">
              Whether you're exploring your first property in México or expanding your portfolio, we're here to help.
            </p>
            <div className="space-y-3">
              <a href="mailto:hola@rivanaproperties.com" className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                <span className="text-primary">✉</span> hola@rivanaproperties.com
              </a>
              <a href="tel:+529981234567" className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                <PhoneIcon className="w-4 h-4 text-primary" /> +52 998 123 4567
              </a>
              <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                <ChatIcon className="w-4 h-4 text-primary" /> WhatsApp
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="First Name" className="bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <input placeholder="Last Name" className="bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              </div>
              <input type="email" placeholder="Email" className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <input type="tel" placeholder="Phone" className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <select className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-muted-foreground focus:outline-none focus:border-primary transition-colors">
                <option value="">What are you interested in?</option>
                <option>Investment Advisory</option>
                <option>Family Property</option>
                <option>Retirement Home</option>
                <option>Pre-Sale Opportunity</option>
              </select>
              <textarea placeholder="Tell us about your goals" rows={4} className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
              <Button variant="gold" className="w-full" type="submit">Send Message</Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
);

export default About;
