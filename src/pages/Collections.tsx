import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRightIcon } from '@/components/icons';
import { BuyerDots } from '@/components/BuyerDots';

const destinations = [
  { name: 'Costa Mujeres', from: '$195K', count: 64, badge: 'Highest ROI 2026', slug: 'costa-mujeres', profiles: ['maria', 'investor'], desc: 'The last frontier of Caribbean luxury. Pre-sale opportunities with 8-12% yields.' },
  { name: 'Zona Hotelera', from: '$320K', count: 42, badge: 'Prime Location', slug: 'zona-hotelera', profiles: ['carlos', 'investor'], desc: 'Iconic beachfront strip with proven rental returns and world-class amenities.' },
  { name: 'Puerto Cancún', from: '$450K', count: 28, badge: 'Marina Living', slug: 'puerto-cancun', profiles: ['pedro', 'maria'], desc: 'Exclusive marina community with golf, yacht clubs, and gated security.' },
  { name: 'Mayakoba', from: '$680K', count: 18, badge: '⚽ Mundial 2026', slug: 'mayakoba', profiles: ['carlos', 'investor'], desc: 'Ultra-luxury resort corridor between Cancún and Playa del Carmen.' },
  { name: 'Holbox', from: '$275K', count: 15, badge: 'Hidden Gem', slug: 'holbox', profiles: ['carlos'], desc: 'Car-free island paradise. Boutique investments in an untouched ecosystem.' },
  { name: 'Tulum', from: '$240K', count: 35, slug: 'tulum', profiles: ['investor', 'maria'], desc: 'Bohemian luxury meets jungle living. Strong Airbnb market.' },
  { name: 'Mérida', from: '$165K', count: 22, slug: 'merida', profiles: ['pedro', 'carlos'], desc: 'Colonial charm meets modern investment. México\'s safest city.' },
];

const Collections = () => (
  <div>
    {/* Hero */}
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 gradient-placeholder opacity-50" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <p className="eyebrow mb-4">Explore</p>
        <h1>Our Collections</h1>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body">
          Seven curated destinations across Cancún and the Riviera Maya. Each with its own character, investment profile, and lifestyle promise.
        </p>
      </div>
    </section>

    {/* Grid */}
    <section className="py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <ScrollReveal key={d.slug} delay={i * 80} className={i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <Link to={`/destination/${d.slug}`} className="group block bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-colors duration-300">
                <div className="aspect-[16/10] gradient-placeholder group-hover:scale-105 transition-transform duration-700 relative">
                  {d.badge && (
                    <span className="absolute top-4 left-4 text-xs font-body tracking-wider uppercase bg-primary/20 text-primary px-3 py-1 rounded-sm">
                      {d.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{d.name}</h3>
                  <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-2">{d.desc}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground font-body mb-4">
                    <span>From {d.from}</span>
                    <span>·</span>
                    <span>{d.count} properties</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <BuyerDots profiles={d.profiles} />
                    <span className="text-sm text-primary font-body flex items-center gap-1">
                      Explore Zone <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Collections;
