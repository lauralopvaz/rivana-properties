import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { BuyerDots } from '@/components/BuyerDots';
import { ArrowRightIcon, BedIcon, RulerIcon, DollarIcon, LocationIcon } from '@/components/icons';
import homeHero from '@/assets/home-hero.jpg';

/* ── Data ── */
const services = [
  { num: '01', text: 'Facilitamos cada paso del proceso legal y notarial' },
  { num: '02', text: 'Inventario curado de propiedades de alto retorno' },
  { num: '03', text: 'Preventas con condiciones preferentes para nuestros clientes' },
  { num: '04', text: 'Asesoría especializada para compradores internacionales' },
];

const destinations = [
  { name: 'Zona Hotelera', from: '$320K', count: 42, badge: 'Prime Location', slug: 'zona-hotelera' },
  { name: 'Puerto Cancún', from: '$450K', count: 28, badge: 'Marina Living', slug: 'puerto-cancun' },
  { name: 'Costa Mujeres', from: '$195K', count: 64, badge: 'Highest ROI 2026', slug: 'costa-mujeres' },
  { name: 'Mayakoba', from: '$680K', count: 18, badge: '⚽ Mundial 2026', slug: 'mayakoba' },
  { name: 'Holbox', from: '$275K', count: 15, badge: 'Hidden Gem', slug: 'holbox' },
  { name: 'Tulum', from: '$240K', count: 35, slug: 'tulum' },
  { name: 'Mérida', from: '$165K', count: 22, slug: 'merida' },
];

const featuredProperties = [
  { name: 'Oceana Residences', zone: 'Costa Mujeres', beds: 3, area: 185, price: '$425K', profiles: ['maria', 'investor'] },
  { name: 'Marina Towers', zone: 'Puerto Cancún', beds: 2, area: 140, price: '$510K', profiles: ['pedro', 'carlos'] },
  { name: 'Jade Penthouse', zone: 'Zona Hotelera', beds: 4, area: 320, price: '$1.2M', profiles: ['maria', 'carlos', 'investor'] },
  { name: 'Selva Lofts', zone: 'Tulum', beds: 1, area: 78, price: '$195K', profiles: ['investor'] },
];

const blogPosts = [
  { title: '¿Por qué Costa Mujeres es el nuevo epicentro de inversión?', category: 'Inversión', date: 'Mar 2, 2026', readTime: '8 min' },
  { title: 'World Cup 2026: Impact on Riviera Maya Real Estate', category: 'Market', date: 'Feb 18, 2026', readTime: '6 min' },
  { title: 'Guía completa para compradores internacionales', category: 'Guides', date: 'Feb 5, 2026', readTime: '12 min' },
];

const Home = () => {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={homeHero} alt="Luxury beachfront property in Cancún" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="eyebrow mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Luxury Real Estate Advisory
          </p>
          <h1 className="mb-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Tu inversión,{' '}
            <em className="text-primary not-italic font-display italic">tu legado.</em>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            Curated properties in Cancún and the Riviera Maya. From pre-sale opportunities to oceanfront penthouses — your legacy starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <Button variant="gold" size="lg" asChild>
              <Link to="/listings">Explore Properties</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/collections">Our Destinations</Link>
            </Button>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-hint">
          <span className="w-px h-8 bg-primary/50" />
          <span className="text-xs font-body uppercase tracking-widest text-muted-foreground">Scroll</span>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 border-y border-border bg-deep-dark">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 100}>
                <div className="text-center lg:text-left">
                  <span className="font-display text-3xl lg:text-4xl text-primary">{s.num}</span>
                  <p className="text-sm text-foreground/80 mt-3 font-body uppercase tracking-widest leading-relaxed">{s.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS GRID ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">Destinations</p>
            <h2 className="mb-16">Our Collections</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinations.map((d, i) => (
              <ScrollReveal key={d.slug} delay={i * 80} className={i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}>
                <Link
                  to={`/destination/${d.slug}`}
                  className="group block relative overflow-hidden aspect-[16/10] rounded-sm"
                >
                  <div className="absolute inset-0 gradient-placeholder-alt group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/90 via-deep-dark/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {d.badge && (
                      <span className="inline-block text-xs font-body tracking-wider uppercase bg-primary/20 text-primary px-3 py-1 rounded-sm mb-3">
                        {d.badge}
                      </span>
                    )}
                    <h3 className="text-2xl mb-1">{d.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-body">
                      <span>From {d.from}</span>
                      <span>·</span>
                      <span>{d.count} properties</span>
                    </div>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm text-primary font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ── */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-4">Curated Selection</p>
            <h2 className="mb-16">Featured Properties</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProperties.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 100}>
                <Link to="/property/oceana-residences" className="group block bg-muted rounded-sm overflow-hidden">
                  <div className="aspect-[16/10] gradient-placeholder group-hover:scale-105 transition-transform duration-700" />
                  <div className="p-6">
                    <span className="eyebrow text-xs">{p.zone}</span>
                    <h3 className="text-xl mt-2 mb-4">{p.name}</h3>
                    <div className="flex items-center gap-5 text-sm text-muted-foreground font-body mb-4">
                      <span className="flex items-center gap-1.5"><BedIcon className="w-4 h-4" /> {p.beds} Beds</span>
                      <span className="flex items-center gap-1.5"><RulerIcon className="w-4 h-4" /> {p.area} m²</span>
                      <span className="flex items-center gap-1.5"><DollarIcon className="w-4 h-4" /> {p.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <BuyerDots profiles={p.profiles} />
                      <span className="text-sm text-primary font-body flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        View <ArrowRightIcon className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEDULE A VISIT ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="eyebrow mb-4">Personal Advisory</p>
              <h2 className="mb-6">Schedule a Visit</h2>
              <p className="text-muted-foreground mb-6 max-w-md">
                Meet with one of our advisors for a personalized property tour in Cancún or the Riviera Maya. Whether you're investing or finding your next home, we're here for you.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <LocationIcon className="w-4 h-4 text-primary" />
                  <span>Cancún, Q.R., México</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <form className="bg-card border border-border rounded-sm p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input placeholder="First Name" className="bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <input placeholder="Last Name" className="bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
                <input type="email" placeholder="Email" className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <input type="tel" placeholder="Phone" className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <select className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-muted-foreground focus:outline-none focus:border-primary transition-colors">
                  <option value="">Select Destination</option>
                  {destinations.map((d) => (
                    <option key={d.slug} value={d.slug}>{d.name}</option>
                  ))}
                </select>
                <textarea placeholder="Message (optional)" rows={3} className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
                <Button variant="gold" className="w-full" type="submit">Schedule Visit</Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="py-24 lg:py-32 bg-card border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="eyebrow mb-4">Insights</p>
                <h2>From the Blog</h2>
              </div>
              <Link to="/blog" className="text-sm text-primary font-body flex items-center gap-1 gold-underline">
                All Articles <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 100}>
                <Link to="/blog/post" className="group block">
                  <div className="aspect-[16/10] gradient-placeholder-alt rounded-sm mb-4 group-hover:scale-[1.02] transition-transform duration-500" />
                  <span className="eyebrow text-xs">{post.category}</span>
                  <h4 className="mt-2 mb-3 group-hover:text-primary transition-colors">{post.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime} read</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
