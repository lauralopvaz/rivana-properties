import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSchedulingModal } from '@/contexts/SchedulingModalContext';
import { ShieldIcon, EyeIcon, GlobeIcon, HeartIcon, PhoneIcon, ChatIcon, ArrowRightIcon } from '@/components/icons';
import advisorJess from '@/assets/advisor-jess.png';
import advisorCelia from '@/assets/advisor-celia.png';

const team = [
  {
    name: 'Jess Candela', initial: 'J',
    role: { es: 'Especialista en Preventa', en: 'Pre-Sale Specialist' },
    zone: 'Costa Mujeres', lang: 'EN · ES', phone: '9988457224', photo: advisorJess, imgPosition: 'object-top',
    bio: {
      es: 'Con 8 años en el mercado inmobiliario del Caribe y raíces en la hospitalidad de lujo, Jess domina el arte de identificar el momento exacto para invertir. Ha cerrado más de $40M en preventas, acompañando a sus clientes desde la oportunidad hasta el cierre con estrategia, claridad y resultados concretos.',
      en: 'With 8 years in the Caribbean real estate market and roots in luxury hospitality, Jess masters the art of identifying the perfect moment to invest. She has closed over $40M in pre-sales, guiding her clients from opportunity to closing with strategy, clarity, and concrete results.',
    },
  },
  {
    name: 'Celia Candela', initial: 'C',
    role: { es: 'Especialista en Destino', en: 'Destination Specialist' },
    zone: 'Cancún · Riviera Maya', lang: 'EN · ES', phone: '9981118888', photo: advisorCelia, imgPosition: 'object-[center_65%]',
    bio: {
      es: 'Celia conoce el Caribe mexicano como pocos. Su dominio del territorio — desde Cancún hasta la Riviera Maya — le permite conectar a cada cliente con el destino que realmente le corresponde, combinando visión de mercado con un conocimiento local que va más allá de los datos.',
      en: 'Celia knows the Mexican Caribbean like few others. Her command of the territory — from Cancún to the Riviera Maya — allows her to connect each client with the destination that truly fits them, combining market vision with local knowledge that goes beyond the data.',
    },
  },
];

const About = () => {
  const { language, t, localePath } = useLanguage();
  const { openModal } = useSchedulingModal();
  const seoTitle = language === 'es'
    ? 'Nosotros — Rivana Properties | Asesoría Inmobiliaria Cancún'
    : 'About Us — Rivana Properties | Real Estate Advisory Cancún';
  const seoDesc = language === 'es'
    ? 'Conoce al equipo de Rivana Properties. Asesoría inmobiliaria boutique en Cancún y la Riviera Maya con más de $140M en ventas.'
    : 'Meet the Rivana Properties team. Boutique real estate advisory in Cancún and the Riviera Maya with over $140M in sales.';

  return (
    <div>
      <SEOHead title={seoTitle} description={seoDesc} path={language === 'en' ? '/en/about' : '/about'} />

      {/* Hero */}
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="eyebrow mb-4">{language === 'es' ? 'Sobre Rivana' : 'About Rivana'}</p>
            <h1 className="mb-6">{language === 'es' ? 'No somos una agencia.' : 'Not Just an Agency.'}<br /><em className="italic text-primary">{language === 'es' ? 'Tu aliado.' : 'Your Partner.'}</em></h1>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-8 max-w-lg">
              {language === 'es'
                ? 'No vendemos propiedades. Construimos legados. Rivana Properties es una firma boutique de asesoría inmobiliaria que combina profundo conocimiento local con estándares globales de inversión.'
                : 'We don\'t sell properties. We build legacies. Rivana Properties is a boutique real estate advisory firm that combines deep local expertise with global investor standards.'}
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { val: '140M+', label: language === 'es' ? 'USD Cerrados' : 'USD Closed' },
                { val: '280+', label: language === 'es' ? 'Clientes' : 'Happy Clients' },
                { val: '7', label: language === 'es' ? 'Zonas' : 'Zones' },
              ].map((s) => (
                <div key={s.label}>
                  <span className="font-display text-3xl text-primary">{s.val}</span>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="bg-[hsl(30_15%_93%)] border border-border rounded-sm p-8">
              <p className="font-display text-xl italic leading-relaxed mb-4">
                {language === 'es'
                  ? '"Protegemos tu inversión como si fuera nuestra — porque para nosotros, tu confianza es nuestro activo más valioso."'
                  : '"We protect your investment as if it were our own — because to us, your trust is our most valuable asset."'}
              </p>
              <div className="border-t border-border pt-4 mt-4">
                <p className="eyebrow text-xs">{t('hero.tagline')}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 bg-[hsl(30_15%_93%)] border-y border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-display text-3xl lg:text-4xl italic leading-relaxed">
              {language === 'es'
                ? '"En un mercado inundado de ruido, elegimos sustancia. Cada propiedad en nuestra colección es visitada, evaluada y respaldada — no por algoritmos, sino por personas que conocen esta costa como la palma de su mano."'
                : '"In a market flooded with noise, we choose substance. Every property in our collection is visited, vetted, and believed in — not by algorithms, but by people who know this coastline like the back of their hand."'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <p className="eyebrow mb-4">{language === 'es' ? 'Nuestros Valores' : 'Our Values'}</p>
          <h2 className="mb-12">{language === 'es' ? 'Lo Que Nos Guía' : 'What Guides Us'}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <ShieldIcon className="w-6 h-6" />, title: language === 'es' ? 'Transparencia' : 'Transparency', desc: language === 'es' ? 'Sin comisiones ocultas, sin sorpresas. Divulgamos todo — precios, historial de desarrolladores, riesgos de mercado.' : 'No hidden fees, no surprises. We disclose everything — pricing, developer track records, market risks.' },
            { icon: <EyeIcon className="w-6 h-6" />, title: language === 'es' ? 'Acceso Curado' : 'Curated Access', desc: language === 'es' ? 'Decimos no al 80% de las propiedades que evaluamos. Solo las mejores llegan a nuestra colección.' : 'We say no to 80% of properties we evaluate. Only the best make it into our collection.' },
            { icon: <GlobeIcon className="w-6 h-6" />, title: language === 'es' ? 'Alcance Global' : 'Global Reach', desc: language === 'es' ? 'Clientes de 18 países confían en nosotros. Nuestro equipo habla 4 idiomas y entiende la inversión internacional.' : 'Clients from 18 countries trust us. Our team speaks 4 languages and understands international investment.' },
            { icon: <HeartIcon className="w-6 h-6" />, title: language === 'es' ? 'Visión a Largo Plazo' : 'Long-Term Vision', desc: language === 'es' ? 'No perseguimos comisiones. Construimos relaciones que duran décadas y abarcan generaciones.' : 'We don\'t chase commissions. We build relationships that last decades and span generations.' },
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
          <p className="eyebrow mb-4">{language === 'es' ? 'El Equipo' : 'The Team'}</p>
          <h2 className="mb-12">{language === 'es' ? 'Conoce a Tus Asesores' : 'Meet Your Advisors'}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 80}>
              <div className="bg-card border border-border rounded-sm overflow-hidden">
                <div className="relative h-56 bg-gradient-to-br from-[hsl(30_15%_90%)] to-muted">
                  <img src={member.photo} alt={member.name} className={`w-full h-full object-cover ${member.imgPosition}`} />
                  <span className="absolute bottom-3 right-3 text-xs font-body bg-muted/80 backdrop-blur text-foreground px-2 py-1 rounded-sm">{member.lang}</span>
                </div>
                <div className="p-6">
                  <p className="eyebrow text-xs mb-1">{member.role[language]}</p>
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className="text-xs text-muted-foreground font-body mb-3">{member.zone}</p>
                  <p className="text-sm text-muted-foreground font-body mb-4">{member.bio[language]}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => openModal('llamada')}><PhoneIcon className="w-3.5 h-3.5" /> {language === 'es' ? 'Llamar' : 'Call'}</Button>
                    <Button variant="whatsapp" size="sm" className="flex-1" asChild>
                      <a href={`https://wa.me/52${member.phone}?text=${encodeURIComponent(`Hola, ${member.name}, me gustaría una asesoría inmobiliaria`)}`} target="_blank" rel="noopener noreferrer"><ChatIcon className="w-3.5 h-3.5" /> WhatsApp</a>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 bg-[hsl(30_15%_93%)] border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: '$140M+', label: language === 'es' ? 'Ventas Totales' : 'Total Sales' },
              { val: '280+', label: language === 'es' ? 'Clientes' : 'Clients' },
              { val: '18', label: language === 'es' ? 'Países' : 'Countries' },
              { val: '7', label: language === 'es' ? 'Destinos' : 'Destinations' },
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
          <p className="eyebrow mb-4">{language === 'es' ? 'Cómo Trabajamos' : 'How We Work'}</p>
          <h2 className="mb-12">{language === 'es' ? 'Nuestro Proceso' : 'Our Process'}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: language === 'es' ? 'Descubrimiento' : 'Discovery', desc: language === 'es' ? 'Conocemos tus metas, presupuesto, estilo de vida y horizonte de inversión.' : 'We learn about your goals, budget, lifestyle, and investment timeline.' },
            { step: '02', title: language === 'es' ? 'Curación' : 'Curation', desc: language === 'es' ? 'Nuestro equipo selecciona 3-5 propiedades que coinciden con tus criterios exactos.' : 'Our team handpicks 3-5 properties that match your exact criteria.' },
            { step: '03', title: language === 'es' ? 'Evaluación' : 'Evaluation', desc: language === 'es' ? 'Análisis profundo de finanzas, legal, reputación del desarrollador y datos de mercado.' : 'Deep-dive analysis on financials, legal, developer reputation, and market data.' },
            { step: '04', title: language === 'es' ? 'Cierre' : 'Closing', desc: language === 'es' ? 'Soporte completo: contratos, fideicomiso y administración post-compra.' : 'Full-service support through contracts, fideicomiso setup, and post-purchase management.' },
          ].map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 100}>
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center font-display text-xl text-primary mb-4">{s.step}</div>
                <h4 className="text-lg mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-[hsl(30_15%_93%)] border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <p className="eyebrow mb-4">{language === 'es' ? 'Contacto' : 'Get in Touch'}</p>
              <h2 className="mb-6">{language === 'es' ? 'Hablemos de Tu Inversión' : 'Let\'s Talk About Your Investment'}</h2>
              <p className="text-muted-foreground font-body mb-8">
                {language === 'es'
                  ? 'Ya sea que estés explorando tu primera propiedad en México o expandiendo tu portafolio, estamos aquí para ayudarte.'
                  : 'Whether you\'re exploring your first property in México or expanding your portfolio, we\'re here to help.'}
              </p>
              <div className="space-y-3">
                <a href="mailto:rivanapropertiesmx@gmail.com" className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors"><span className="text-primary">✉</span> rivanapropertiesmx@gmail.com</a>
                <a href="tel:+529988457224" className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors"><PhoneIcon className="w-4 h-4 text-primary" /> +52 998 845 7224</a>
                <a href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors"><ChatIcon className="w-4 h-4 text-primary" /> WhatsApp</a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder={t('form.firstName')} className="bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <input placeholder={t('form.lastName')} className="bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
                <input type="email" placeholder={t('form.email')} className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <input type="tel" placeholder={t('form.phone')} className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <select className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-muted-foreground focus:outline-none focus:border-primary transition-colors">
                  <option value="">{language === 'es' ? '¿Qué te interesa?' : 'What are you interested in?'}</option>
                  <option>{language === 'es' ? 'Asesoría de Inversión' : 'Investment Advisory'}</option>
                  <option>{language === 'es' ? 'Propiedad Familiar' : 'Family Property'}</option>
                  <option>{language === 'es' ? 'Retiro' : 'Retirement Home'}</option>
                  <option>{language === 'es' ? 'Oportunidad en Preventa' : 'Pre-Sale Opportunity'}</option>
                </select>
                <textarea placeholder={language === 'es' ? 'Cuéntanos sobre tus metas' : 'Tell us about your goals'} rows={4} className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
                <Button variant="gold" className="w-full" type="submit">{language === 'es' ? 'Enviar Mensaje' : 'Send Message'}</Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
