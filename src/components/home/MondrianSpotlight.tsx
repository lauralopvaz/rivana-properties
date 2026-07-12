import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@/components/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSchedulingModal } from '@/contexts/SchedulingModalContext';

import mondrianHero from '@/assets/mondrian-hero.jpg';
import mondrianBeachClub from '@/assets/mondrian-beach-club.jpg';

const content = {
  eyebrow: {
    es: 'Desarrollo Estrella',
    en: 'Star Development',
  },
  title: {
    es: 'Mondrian',
    en: 'Mondrian',
  },
  subtitle: {
    es: 'Puerto Cancún',
    en: 'Puerto Cancún',
  },
  description: {
    es: 'Nuestra selección premium para inversionistas exigentes: arquitectura contemporánea, vistas al mar y un plan de pago diseñado para escalonar tu inversión con confianza.',
    en: 'Our premium pick for discerning investors: contemporary architecture, ocean views and a payment plan designed to stagger your investment with confidence.',
  },
  badge: {
    es: 'Proyecto Destacado',
    en: 'Featured Project',
  },
  badgeTitle: {
    es: 'El pináculo del caribe contemporáneo',
    en: 'The pinnacle of contemporary Caribbean living',
  },
  stats: {
    roi: {
      label: { es: 'ROI Proyectado', en: 'Projected ROI' },
      value: { es: '33%', en: '33%' },
    },
    plan: {
      label: { es: 'Plan de Pago', en: 'Payment Plan' },
      value: { es: '30 / 20 / 50', en: '30 / 20 / 50' },
    },
    delivery: {
      label: { es: 'Entrega Estimada', en: 'Estimated Delivery' },
      value: { es: 'Q2 2027', en: 'Q2 2027' },
    },
    status: {
      label: { es: 'Estatus', en: 'Status' },
      value: { es: 'Preventa Fase I', en: 'Presale Phase I' },
    },
  },
  ctaPrimary: {
    es: 'Explorar Mondrian',
    en: 'Explore Mondrian',
  },
  ctaSecondary: {
    es: 'Agendar asesoría',
    en: 'Schedule advisory',
  },
  whatsappAria: {
    es: 'Contactar por WhatsApp',
    en: 'Contact via WhatsApp',
  },
};

export const MondrianSpotlight = () => {
  const { language, localePath } = useLanguage();
  const { openModal } = useSchedulingModal();
  const L = language;

  const whatsappLink = 'https://wa.me/529988457224?text=Hola%20Rivana%2C%20me%20interesa%20Mondrian%20Residences';

  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal>
              {/* Decorative frame */}
              <div
                className="absolute -top-4 -left-4 w-full h-full border z-0"
                style={{ borderColor: 'hsl(var(--gold) / 0.35)' }}
              />

              {/* Main image */}
              <div className="relative z-10 overflow-hidden shadow-2xl group">
                <img
                  src={mondrianHero}
                  alt={L === 'es' ? 'Mondrian Residences — vista exterior en Puerto Cancún' : 'Mondrian Residences — exterior view in Puerto Cancún'}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Floating badge */}
                <div className="absolute bottom-0 left-0 bg-[hsl(var(--deep-black))] p-6 max-w-[260px]">
                  <p className="text-[hsl(var(--gold))] text-[10px] uppercase tracking-[0.35em] mb-2 font-body">
                    {content.badge[L]}
                  </p>
                  <h3 className="text-[hsl(var(--pearl))] text-2xl font-display leading-tight">
                    {content.badgeTitle[L]}
                  </h3>
                </div>
              </div>

              {/* Detail inset */}
              <div className="absolute -bottom-10 -right-6 xl:-right-10 w-[45%] hidden lg:block z-20 border-[10px] border-[hsl(var(--background))] shadow-2xl">
                <img
                  src={mondrianBeachClub}
                  alt={L === 'es' ? 'Detalle del beach club en Mondrian Residences' : 'Mondrian Residences beach club detail'}
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col pt-8 lg:pt-0">
            <ScrollReveal delay={100}>
              <span className="eyebrow mb-6 inline-block">{content.eyebrow[L]}</span>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2 className="text-5xl md:text-7xl lg:text-8xl text-secondary leading-[0.9] mb-6">
                {content.title[L]}
                <br />
                <span className="italic font-light text-primary">{content.subtitle[L]}</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg mb-12">
                {content.description[L]}
              </p>
            </ScrollReveal>

            {/* Stats grid */}
            <ScrollReveal delay={250}>
              <div className="grid grid-cols-2 gap-8 border-t border-border pt-10 mb-12">
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-body">
                    {content.stats.roi.label[L]}
                  </p>
                  <p className="text-2xl md:text-3xl font-display text-secondary">{content.stats.roi.value[L]}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-body">
                    {content.stats.plan.label[L]}
                  </p>
                  <p className="text-2xl md:text-3xl font-display text-secondary">{content.stats.plan.value[L]}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-body">
                    {content.stats.delivery.label[L]}
                  </p>
                  <p className="text-2xl md:text-3xl font-display text-secondary">{content.stats.delivery.value[L]}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-body">
                    {content.stats.status.label[L]}
                  </p>
                  <p className="text-2xl md:text-3xl font-display text-secondary">{content.stats.status.value[L]}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Actions */}
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="gold" size="lg" asChild className="rounded-none group">
                  <Link to={localePath('/propiedad/mondrian-residences-grand-island-cancun')}>
                    {content.ctaPrimary[L]}
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => openModal('asesoria')}
                  className="rounded-none border-foreground/30 hover:border-primary hover:text-primary"
                >
                  {content.ctaSecondary[L]}
                </Button>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={content.whatsappAria[L]}
                  className="h-14 w-14 flex items-center justify-center border border-foreground/30 text-foreground transition-all hover:bg-[#25d366] hover:border-[#25d366] hover:text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.632 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
