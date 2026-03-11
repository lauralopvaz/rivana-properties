import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

export const PreSaleSection = () => {
  const { language, localePath } = useLanguage();
  const L = language;

  const stats = L === 'es'
    ? [{ value: '8–12%', label: 'Rendimiento anual' }, { value: '15–22%', label: 'Plusvalía a entrega' }, { value: '12+', label: 'Proyectos activos' }]
    : [{ value: '8–12%', label: 'Annual yield' }, { value: '15–22%', label: 'Appreciation at delivery' }, { value: '12+', label: 'Active projects' }];

  return (
    <section className="py-28 lg:py-36 overflow-hidden border-y border-border" style={{ background: '#F8F6F2' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-px" style={{ background: 'rgba(207,174,96,0.5)' }} />
            <span className="uppercase" style={{ fontFamily: "'Jost', sans-serif", fontSize: '9px', letterSpacing: '5px', color: '#CFAE60', fontWeight: 300 }}>
              {L === 'es' ? 'Oportunidad de Inversión' : 'Investment Opportunity'}
            </span>
            <span className="w-8 h-px" style={{ background: 'rgba(207,174,96,0.5)' }} />
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(44px, 6vw, 72px)', lineHeight: 1.05 }} className="mb-6">
            <span style={{ color: '#26547D' }}>{L === 'es' ? 'Proyectos en ' : 'Projects in '}</span>
            <em className="not-italic" style={{ color: '#CFAE60', fontStyle: 'italic' }}>{L === 'es' ? 'Preventa' : 'Pre-Sale'}</em>
          </h2>

          <p className="mx-auto mb-10" style={{ fontFamily: "'Jost', sans-serif", fontSize: '14px', color: '#4B4B4B', fontWeight: 300, lineHeight: 1.85, maxWidth: '560px' }}>
            {L === 'es'
              ? 'Accede a los mejores precios antes de que el proyecto salga al mercado. En preventa, tu capital trabaja desde el primer día y la plusvalía comienza a acumularse antes de la entrega.'
              : 'Access the best prices before the project hits the market. In pre-sale, your capital works from day one and appreciation starts building before delivery.'}
          </p>

          <div className="inline-flex mx-auto mb-10" style={{ border: '1px solid rgba(207,174,96,0.24)', background: 'white' }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{ padding: '22px 40px', borderRight: i < stats.length - 1 ? '1px solid rgba(207,174,96,0.24)' : 'none' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: '#CFAE60', fontWeight: 300, lineHeight: 1.2 }}>{s.value}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '9px', color: '#4B4B4B', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 300, marginTop: '6px' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <Link
              to={localePath('/presale')}
              className="inline-block uppercase transition-all duration-300"
              style={{ background: '#CFAE60', color: 'white', fontSize: '10px', letterSpacing: '3px', fontWeight: 400, padding: '17px 52px', fontFamily: "'Jost', sans-serif" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#b89a4a'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#CFAE60'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {L === 'es' ? 'Descubrir Proyectos' : 'Discover Projects'}
            </Link>
          </div>

          <p style={{ fontSize: '10px', color: 'rgba(75,75,75,0.55)', fontStyle: 'italic', fontWeight: 300, fontFamily: "'Jost', sans-serif" }}>
            {L === 'es' ? '* Rendimientos estimados con base en el mercado actual. No garantizan retorno.' : '* Estimated yields based on current market. Returns are not guaranteed.'}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};