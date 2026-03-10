import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { BedIcon, RulerIcon, TrendingUpIcon, VideoIcon, PhoneIcon, CalendarIcon, BriefcaseIcon, DocumentIcon, ChatIcon } from '@/components/icons';

const PropertyDetail = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { language, t, localePath } = useLanguage();

  const tabs = language === 'es'
    ? ['General', 'Características', 'Plano', 'Ubicación']
    : ['Overview', 'Features', 'Floor Plan', 'Location'];
  const tabKeys = ['overview', 'features', 'floor-plan', 'location'];

  const seoTitle = language === 'es'
    ? 'Oceana Residences — Costa Mujeres | Rivana Properties'
    : 'Oceana Residences — Costa Mujeres | Rivana Properties';

  return (
    <div>
      <SEOHead
        title={seoTitle}
        description="Oceana Residences: luxury oceanfront development in Costa Mujeres. 120 units, pre-sale from $195K."
        path={language === 'en' ? '/en/property/oceana-residences' : '/property/oceana-residences'}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'RealEstateListing',
          name: 'Oceana Residences',
          description: 'Premier oceanfront development in Costa Mujeres',
          url: 'https://rivanaproperties.com/property/oceana-residences',
        }}
      />

      {/* Breadcrumb */}
      <div className="pt-24 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <nav className="text-sm font-body text-muted-foreground flex items-center gap-2">
          <Link to={localePath('/')} className="hover:text-primary transition-colors">Rivana</Link>
          <span>/</span>
          <Link to={localePath('/cancun/costa-mujeres')} className="hover:text-primary transition-colors">Costa Mujeres</Link>
          <span>/</span>
          <span className="text-foreground">Oceana Residences</span>
        </nav>
      </div>

      {/* Gallery */}
      <section className="py-8 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
          <div className="lg:col-span-3 aspect-[16/9] gradient-placeholder rounded-sm relative">
            <span className="absolute top-4 left-4 eyebrow text-xs bg-primary/20 px-3 py-1 rounded-sm">{language === 'es' ? 'Preventa' : 'Pre-Sale'}</span>
            <button className="absolute top-4 right-4 text-xs font-body bg-card/80 backdrop-blur text-foreground px-3 py-1.5 rounded-sm border border-border">{language === 'es' ? 'Todas las Fotos (24)' : 'All Photos (24)'}</button>
          </div>
          <div className="hidden lg:grid grid-rows-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="gradient-placeholder-alt rounded-sm" />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 lg:px-10 max-w-[1400px] mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="eyebrow text-xs">Costa Mujeres · Playa Mujeres</span>
              <h1 className="mt-2 mb-2">Oceana Residences</h1>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display text-3xl text-primary">$195,000 USD</span>
                <span className="text-sm text-muted-foreground font-body">$2,200/m²</span>
              </div>

              <div className="flex flex-wrap gap-6 py-6 border-y border-border mb-8">
                {[
                  { icon: <BedIcon className="w-4 h-4" />, val: '1-3', label: language === 'es' ? 'Recámaras' : 'Bedrooms' },
                  { icon: <BedIcon className="w-4 h-4" />, val: '1-3', label: language === 'es' ? 'Baños' : 'Bathrooms' },
                  { icon: <RulerIcon className="w-4 h-4" />, val: '65-185', label: 'm²' },
                  { icon: <TrendingUpIcon className="w-4 h-4" />, val: '12', label: language === 'es' ? 'Pisos' : 'Floors' },
                  { icon: <CalendarIcon className="w-4 h-4" />, val: 'Q4 2027', label: language === 'es' ? 'Entrega' : 'Delivery' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2 text-sm font-body">
                    <span className="text-primary">{s.icon}</span>
                    <span className="text-foreground font-400">{s.val}</span>
                    <span className="text-muted-foreground">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-0 border-b border-border mb-8">
                {tabs.map((tab, idx) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tabKeys[idx])}
                    className={`px-5 py-3 text-sm font-body tracking-wider uppercase transition-colors border-b-2 -mb-px ${
                      activeTab === tabKeys[idx] ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'overview' && (
                <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed animate-fade-in">
                  <p>{language === 'es'
                    ? 'Oceana Residences es un desarrollo premier frente al mar en Playa Mujeres, Costa Mujeres. Diseñado por arquitectos galardonados, esta torre de 12 pisos ofrece 120 unidades de lujo desde estudios hasta penthouses de 3 recámaras, cada uno con terraza privada y vistas al mar.'
                    : 'Oceana Residences is a premier oceanfront development in Playa Mujeres, Costa Mujeres. Designed by award-winning architects, this 12-story tower offers 120 luxury units ranging from studios to 3-bedroom penthouses, each with private terraces and ocean views.'}</p>
                  <p>{language === 'es'
                    ? 'Con precios de preventa desde $195,000 USD, los compradores pueden esperar rendimientos anuales del 8-12% y una apreciación del 15-22% para la entrega en Q4 2027.'
                    : 'With pre-sale pricing starting at $195,000 USD, buyers can expect 8-12% annual rental yields and 15-22% capital appreciation by delivery in Q4 2027.'}</p>
                </div>
              )}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Infinity Pool', 'Beach Club', language === 'es' ? 'Gimnasio' : 'Fitness Center', 'Co-Working', 'Concierge', language === 'es' ? 'Estacionamiento' : 'Underground Parking', 'EV Charging', 'Smart Home', language === 'es' ? 'Vista al Mar' : 'Ocean Views', 'Pet Friendly', language === 'es' ? 'Área Infantil' : 'Kids Area', 'Spa & Wellness'].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />{f}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 'floor-plan' && (
                <div className="animate-fade-in">
                  <div className="aspect-square bg-muted border border-border rounded-sm flex items-center justify-center max-w-md">
                    <p className="text-sm text-muted-foreground font-body">{language === 'es' ? 'Plano SVG' : 'Floor Plan SVG'}</p>
                  </div>
                </div>
              )}
              {activeTab === 'location' && (
                <div className="animate-fade-in">
                  <div className="aspect-[16/9] bg-muted border border-border rounded-sm flex items-center justify-center mb-6">
                    <p className="text-sm text-muted-foreground font-body">{language === 'es' ? 'Vista de Mapa' : 'Map View'}</p>
                  </div>
                </div>
              )}
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="bg-card border border-border rounded-sm p-6">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">{language === 'es' ? 'Desde' : 'Starting From'}</p>
                <span className="font-display text-4xl text-primary">$195,000</span>
                <div className="flex items-center gap-2 mt-2">
                  <TrendingUpIcon className="w-4 h-4 text-[#22c55e]" />
                  <span className="text-sm font-body text-[#22c55e]">8-12% {language === 'es' ? 'rendimiento' : 'yield'}</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-sm overflow-hidden">
                <div className="bg-muted p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display text-primary text-lg">A</div>
                  <div>
                    <p className="text-sm font-body font-400">Alejandra Reyes</p>
                    <p className="text-xs text-muted-foreground font-body">Pre-Sale Specialist · EN·ES·FR</p>
                  </div>
                </div>
                <form className="p-4 border-t border-border space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input placeholder={t('form.name')} className="w-full bg-muted border border-border rounded-sm px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <input type="email" placeholder={t('form.email')} className="w-full bg-muted border border-border rounded-sm px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <input type="tel" placeholder={t('form.phone')} className="w-full bg-muted border border-border rounded-sm px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <Button variant="gold" className="w-full" type="submit">{t('dest.requestInfo')}</Button>
                  <Button variant="whatsapp" className="w-full" asChild>
                    <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer"><ChatIcon className="w-4 h-4" /> WhatsApp</a>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;
