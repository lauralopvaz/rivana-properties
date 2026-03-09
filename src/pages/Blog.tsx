import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, ClockIcon, MailIcon } from '@/components/icons';

const categories = ['All', 'Inversión', 'Mercado', 'Guías', 'Destinos', 'Lifestyle', 'Legal'];

const articles = [
  { id: 1, title: '¿Por qué Costa Mujeres es el nuevo epicentro de inversión?', cat: 'Inversión', excerpt: 'An in-depth look at the fastest-growing zone in the Mexican Caribbean and why investors are flocking to its shores.', date: 'Mar 2, 2026', time: '8 min', featured: true },
  { id: 2, title: 'World Cup 2026: Impact on Riviera Maya Real Estate', cat: 'Mercado', excerpt: 'How the FIFA World Cup is driving unprecedented demand in Cancún and surrounding areas.', date: 'Feb 18, 2026', time: '6 min' },
  { id: 3, title: 'Guía completa para compradores internacionales', cat: 'Guías', excerpt: 'Everything you need to know about buying property in México as a foreign investor.', date: 'Feb 5, 2026', time: '12 min' },
  { id: 4, title: 'Mayakoba vs Puerto Cancún: A Luxury Comparison', cat: 'Destinos', excerpt: 'Two of México\'s most exclusive addresses compared across investment metrics and lifestyle.', date: 'Jan 22, 2026', time: '7 min' },
  { id: 5, title: 'The Rise of Digital Nomad Real Estate in Tulum', cat: 'Lifestyle', excerpt: 'How remote work is reshaping the Tulum property market and creating new opportunities.', date: 'Jan 10, 2026', time: '5 min' },
  { id: 6, title: 'Fideicomiso Explained: Legal Guide for Foreign Buyers', cat: 'Legal', excerpt: 'A comprehensive guide to the bank trust system that enables foreign property ownership in México.', date: 'Dec 28, 2025', time: '10 min' },
];

const Blog = () => {
  const [activeCat, setActiveCat] = useState('All');
  const featured = articles[0];
  const filtered = articles.filter((a) => activeCat === 'All' || a.cat === activeCat);

  return (
    <div>
      {/* Masthead */}
      <section className="pt-28 pb-16 px-6 lg:px-10 max-w-[1400px] mx-auto text-center">
        <p className="eyebrow mb-4">Insights & Intelligence</p>
        <h1 className="mb-4">The Rivana Journal</h1>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground font-body mt-6">
          <span>48 Articles</span>
          <span>·</span>
          <span>6 Categories</span>
          <span>·</span>
          <span>12K Readers/Month</span>
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto mb-16">
        <Link to="/blog/post" className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card border border-border rounded-sm overflow-hidden">
          <div className="aspect-[16/10] gradient-placeholder group-hover:scale-105 transition-transform duration-700" />
          <div className="p-8 flex flex-col justify-center">
            <span className="eyebrow text-xs mb-3">{featured.cat}</span>
            <h2 className="mb-4 group-hover:text-primary transition-colors">{featured.title}</h2>
            <p className="text-muted-foreground font-body mb-6">{featured.excerpt}</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
              <span>{featured.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><ClockIcon className="w-3 h-3" /> {featured.time} read</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Category Filter */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`text-xs font-body tracking-wider uppercase px-4 py-2 rounded-sm border transition-colors ${
                activeCat === cat
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 80}>
                <Link to="/blog/post" className="group block">
                  <div className="aspect-[16/10] gradient-placeholder-alt rounded-sm mb-4 group-hover:scale-[1.02] transition-transform duration-500" />
                  <span className="eyebrow text-xs">{article.cat}</span>
                  <h4 className="mt-2 mb-2 group-hover:text-primary transition-colors">{article.title}</h4>
                  <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-3">{article.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><ClockIcon className="w-3 h-3" /> {article.time}</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter */}
            <div className="bg-card border border-border rounded-sm p-6">
              <MailIcon className="w-6 h-6 text-primary mb-3" />
              <h4 className="text-lg mb-2">Newsletter</h4>
              <p className="text-sm text-muted-foreground font-body mb-4">Get market insights and exclusive listings delivered weekly.</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email" className="w-full bg-muted border border-border rounded-sm px-3 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <Button variant="gold" className="w-full" type="submit">Subscribe</Button>
              </form>
            </div>

            {/* Most Read */}
            <div className="bg-card border border-border rounded-sm p-6">
              <h4 className="text-lg mb-4">Most Read</h4>
              <div className="space-y-4">
                {articles.slice(0, 4).map((a, i) => (
                  <Link key={a.id} to="/blog/post" className="flex items-start gap-3 group">
                    <span className="font-display text-2xl text-primary/40">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="text-sm font-body group-hover:text-primary transition-colors line-clamp-2">{a.title}</p>
                      <span className="text-xs text-muted-foreground font-body">{a.time} read</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
