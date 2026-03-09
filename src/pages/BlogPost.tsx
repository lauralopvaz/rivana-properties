import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ClockIcon, ArrowRightIcon, MailIcon } from '@/components/icons';

const BlogPost = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toc = [
    'Introduction',
    'Market Overview',
    'Key Investment Drivers',
    'Rental Yield Analysis',
    'World Cup Effect',
    'Conclusion',
  ];

  return (
    <div>
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 right-0 z-[200]">
        <div className="reading-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      </div>

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 gradient-placeholder opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="eyebrow mb-4 inline-block">Inversión</span>
          <h1 className="mb-6">¿Por qué Costa Mujeres es el nuevo epicentro de inversión?</h1>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground font-body">
            <span>By Alejandra Reyes</span>
            <span>·</span>
            <span>March 2, 2026</span>
            <span>·</span>
            <span className="flex items-center gap-1"><ClockIcon className="w-3 h-3" /> 8 min read</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 px-6 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* TOC Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <p className="eyebrow text-xs mb-4">Contents</p>
              <nav className="space-y-2">
                {toc.map((item, i) => (
                  <a key={i} href="#" className="block text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Article */}
          <article className="lg:col-span-3 space-y-8">
            <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
              <p>Costa Mujeres has emerged as the most compelling investment destination in the Mexican Caribbean. Located just north of Cancún's iconic Hotel Zone, this master-planned community represents the last major stretch of undeveloped Caribbean coastline in the region.</p>

              <p>With over $2 billion in planned infrastructure investment and the approaching FIFA World Cup 2026, the zone is experiencing a perfect storm of factors that make it irresistible to both seasoned investors and first-time buyers.</p>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-primary pl-6 py-4 my-8">
                <p className="font-display text-2xl italic text-foreground leading-relaxed">
                  "Costa Mujeres is not just the next investment hotspot — it's the future of Caribbean luxury living."
                </p>
              </blockquote>

              <h2 className="text-foreground" id="market">Market Overview</h2>
              <p>The Costa Mujeres real estate market has seen consistent year-over-year appreciation of 18-22% since 2022. Pre-sale properties are delivering returns of 15-25% between purchase and delivery, making it one of the highest-performing markets in Latin America.</p>

              {/* Data callout */}
              <div className="bg-card border border-border rounded-sm p-6 my-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="font-display text-3xl text-primary">22%</span>
                    <p className="text-xs text-muted-foreground font-body mt-1">YoY Appreciation</p>
                  </div>
                  <div>
                    <span className="font-display text-3xl text-primary">10%</span>
                    <p className="text-xs text-muted-foreground font-body mt-1">Avg. Rental Yield</p>
                  </div>
                  <div>
                    <span className="font-display text-3xl text-primary">$1,800</span>
                    <p className="text-xs text-muted-foreground font-body mt-1">Avg. Price/m²</p>
                  </div>
                </div>
              </div>

              <h2 className="text-foreground">Key Investment Drivers</h2>
              <p>Several converging factors make Costa Mujeres uniquely positioned for continued growth. The zone benefits from Cancún's existing infrastructure — including the international airport serving 30+ million passengers annually — while offering significantly lower entry prices than established neighborhoods.</p>

              <p>New developments in the zone feature world-class amenities, sustainable design, and smart-home technology that appeal to both the rental market and end-users. The diversity of product types — from $195K studios to $2M+ penthouses — ensures broad market appeal.</p>

              <h2 className="text-foreground">Rental Yield Analysis</h2>
              <p>Properties in Costa Mujeres are achieving rental yields of 8-12% annually, significantly outperforming traditional markets. Short-term rental platforms like Airbnb have transformed the economics of Caribbean real estate, with beachfront units commanding nightly rates of $150-$400 depending on season and configuration.</p>

              <blockquote className="border-l-2 border-primary pl-6 py-4 my-8">
                <p className="font-display text-2xl italic text-foreground leading-relaxed">
                  "The combination of low entry price and high rental demand creates an investment equation that's hard to find anywhere else in the Americas."
                </p>
              </blockquote>

              <h2 className="text-foreground">The World Cup Effect</h2>
              <p>With México co-hosting the 2026 FIFA World Cup, Cancún and the Riviera Maya are expected to see unprecedented tourism numbers. Properties purchased now at pre-sale prices are positioned to benefit from both the construction-phase appreciation and the post-World Cup tourism boom.</p>

              <h2 className="text-foreground">Conclusion</h2>
              <p>For investors seeking a combination of lifestyle value and financial returns, Costa Mujeres represents a rare opportunity. The window for pre-sale pricing is narrowing as the zone matures, making 2026 a pivotal year for those looking to build wealth in the Caribbean.</p>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
              <MailIcon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-xl mb-2">Stay Informed</h3>
              <p className="text-sm text-muted-foreground font-body mb-4">Get exclusive market insights delivered to your inbox.</p>
              <form className="flex gap-2 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email" className="flex-1 bg-muted border border-border rounded-sm px-3 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <Button variant="gold" type="submit">Subscribe</Button>
              </form>
            </div>

            {/* Related */}
            <div>
              <h3 className="mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'World Cup 2026: Impact on Riviera Maya', cat: 'Mercado', time: '6 min' },
                  { title: 'Guía completa para compradores internacionales', cat: 'Guías', time: '12 min' },
                  { title: 'Mayakoba vs Puerto Cancún', cat: 'Destinos', time: '7 min' },
                ].map((a) => (
                  <Link key={a.title} to="/blog/post" className="group">
                    <div className="aspect-[16/10] gradient-placeholder-alt rounded-sm mb-3 group-hover:scale-[1.02] transition-transform duration-500" />
                    <span className="eyebrow text-xs">{a.cat}</span>
                    <p className="text-sm font-body mt-1 group-hover:text-primary transition-colors line-clamp-2">{a.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
