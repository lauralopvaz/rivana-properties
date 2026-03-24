import { ScrollReveal } from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const steps = [
  {
    num: '01',
    title: { es: 'Descubrimiento', en: 'Discovery' },
    desc: {
      es: 'Entendemos tu perfil, objetivos y horizonte de inversión para diseñar una estrategia personalizada.',
      en: 'We understand your profile, goals and investment horizon to design a personalized strategy.',
    },
  },
  {
    num: '02',
    title: { es: 'Selección', en: 'Selection' },
    desc: {
      es: 'Presentamos las mejores opciones del mercado con análisis comparativo de ROI, plusvalía y riesgo.',
      en: 'We present the best market options with comparative ROI, capital gains and risk analysis.',
    },
  },
  {
    num: '03',
    title: { es: 'Negociación', en: 'Negotiation' },
    desc: {
      es: 'Negociamos las mejores condiciones, planes de pago y beneficios exclusivos de preventa para ti.',
      en: 'We negotiate the best terms, payment plans and exclusive pre-sale benefits for you.',
    },
  },
  {
    num: '04',
    title: { es: 'Cierre', en: 'Closing' },
    desc: {
      es: 'Te acompañamos en cada trámite legal y financiero hasta la escrituración de tu propiedad.',
      en: 'We accompany you through every legal and financial step until your property is titled.',
    },
  },
];

export const ProcessTimeline = () => {
  const { language } = useLanguage();
  const L = language;

  return (
    <section className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <p className="eyebrow mb-4">
            {L === 'es' ? 'Nuestro Proceso' : 'Our Process'}
          </p>
          <h2 className="mb-16 text-secondary max-w-xl">
            {L === 'es'
              ? 'Cuatro pasos hacia tu próxima inversión'
              : 'Four steps to your next investment'}
          </h2>
        </ScrollReveal>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 120}>
              <div className="relative pl-8 md:pl-0 md:pr-8 pb-12 md:pb-0">
                {/* Vertical line (mobile) */}
                {i < steps.length - 1 && (
                  <span className="absolute left-[11px] top-8 bottom-0 w-px bg-primary/25 md:hidden" />
                )}
                {/* Horizontal line (desktop) */}
                {i < steps.length - 1 && (
                  <span className="hidden md:block absolute top-[11px] left-[22px] right-0 h-px bg-primary/25" />
                )}
                {/* Dot */}
                <span className="absolute left-0 top-0 md:relative md:left-auto md:top-auto w-[22px] h-[22px] border border-primary flex items-center justify-center mb-6">
                  <span className="w-[8px] h-[8px] bg-primary" />
                </span>
                <div className="md:mt-6">
                  <span className="font-display text-sm text-primary tracking-widest">
                    {step.num}
                  </span>
                  <h3 className="font-display text-xl text-secondary font-light mt-2 mb-3">
                    {step.title[L]}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-[1.85] max-w-[240px]">
                    {step.desc[L]}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
