import { ScrollReveal } from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const pillars = [
  {
    num: '01',
    title: { es: 'Asesoría Estratégica', en: 'Strategic Advisory' },
    desc: {
      es: 'Análisis de mercado, ROI y plusvalía antes de cada decisión. Tu inversión respaldada por datos, no por impulsos.',
      en: 'Market analysis, ROI and capital gains before every decision. Your investment backed by data, not impulse.',
    },
  },
  {
    num: '02',
    title: { es: 'Acceso Exclusivo', en: 'Exclusive Access' },
    desc: {
      es: 'Proyectos en preventa antes de que lleguen al mercado abierto. Precios de lanzamiento y condiciones preferenciales.',
      en: 'Pre-sale projects before they hit the open market. Launch pricing and preferential terms.',
    },
  },
  {
    num: '03',
    title: { es: 'Acompañamiento Integral', en: 'End-to-End Support' },
    desc: {
      es: 'Desde la primera llamada hasta la escrituración. Legal, financiero, fiscal y postventa en un solo equipo.',
      en: 'From the first call to closing. Legal, financial, tax and after-sales support in one team.',
    },
  },
];

export const AllySection = () => {
  const { language } = useLanguage();
  const L = language;

  return (
    <section className="py-24 lg:py-32 bg-[hsl(var(--paper))]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Copy */}
          <ScrollReveal>
            <p className="eyebrow mb-4">
              {L === 'es' ? 'Por Qué Rivana' : 'Why Rivana'}
            </p>
            <h2 className="mb-6 text-secondary">
              {L === 'es' ? 'No somos una agencia.' : 'We\'re not an agency.'}
              <br />
              <em className="not-italic text-primary italic">
                {L === 'es' ? 'Somos tu aliado.' : 'We\'re your ally.'}
              </em>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-[1.85] max-w-[480px]">
              {L === 'es'
                ? 'Rivana Properties es una firma boutique de asesoría inmobiliaria que combina profundo conocimiento local con estándares globales de inversión. Cada recomendación que hacemos está respaldada por análisis de mercado, proyecciones de plusvalía y un compromiso real con tus objetivos.'
                : 'Rivana Properties is a boutique real estate advisory firm that combines deep local expertise with global investment standards. Every recommendation we make is backed by market analysis, capital gains projections and a real commitment to your goals.'}
            </p>
            <button
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 uppercase transition-colors duration-300 px-8 py-4 font-body text-[13px] tracking-[3px] font-normal bg-primary text-white hover:bg-[#b89a4a] border-none cursor-pointer"
            >
              {L === 'es' ? 'Agendar Asesoría' : 'Schedule Advisory'}
            </button>
          </ScrollReveal>

          {/* Right — 3 Pillars */}
          <div className="flex flex-col gap-10">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 120}>
                <div className="flex gap-6 items-start">
                  <span className="font-display text-3xl text-primary leading-none mt-1 shrink-0">
                    {p.num}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-secondary mb-2 font-light">
                      {p.title[L]}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-[1.85]">
                      {p.desc[L]}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
