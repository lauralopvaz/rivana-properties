import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  'nav.collections': { es: 'Colecciones', en: 'Collections' },
  'nav.listings': { es: 'Propiedades', en: 'Listings' },
  'nav.presale': { es: 'Pre-Venta', en: 'Pre-Sale' },
  'nav.blog': { es: 'Blog', en: 'Blog' },
  'nav.about': { es: 'Nosotros', en: 'About' },
  'nav.advisor': { es: 'Hablar con un Asesor', en: 'Speak with an Advisor' },
  'hero.tagline': { es: 'Tu inversión, tu legado.', en: 'Your investment, your legacy.' },
  'hero.subtitle': { es: 'Asesoría inmobiliaria de lujo en Cancún y la Riviera Maya. Propiedades exclusivas curadas para inversionistas visionarios.', en: 'Luxury real estate advisory in Cancún and the Riviera Maya. Exclusive properties curated for visionary investors.' },
  'hero.explore': { es: 'Explorar Propiedades', en: 'Explore Properties' },
  'hero.destinations': { es: 'Nuestros Destinos', en: 'Our Destinations' },
  'stats.sales': { es: 'USD en Ventas', en: 'USD in Sales' },
  'stats.clients': { es: 'Clientes', en: 'Clients' },
  'stats.destinations': { es: 'Destinos', en: 'Destinations' },
  'stats.countries': { es: 'Países', en: 'Countries' },
  'section.collections': { es: 'Colecciones Exclusivas', en: 'Exclusive Collections' },
  'section.collectionsTitle': { es: 'Destinos Curados', en: 'Curated Destinations' },
  'section.featured': { es: 'Selección Distinguida', en: 'Distinguished Selection' },
  'section.featuredTitle': { es: 'Propiedades Destacadas', en: 'Featured Properties' },
  'section.schedule': { es: 'Experiencia Personalizada', en: 'Personalized Experience' },
  'section.scheduleTitle': { es: 'Agenda una Visita Privada', en: 'Schedule a Private Visit' },
  'section.scheduleDesc': { es: 'Permítenos mostrarte en persona por qué Cancún y la Riviera Maya son el escenario perfecto para tu próxima inversión.', en: 'Let us show you in person why Cancún and the Riviera Maya are the perfect setting for your next investment.' },
  'form.name': { es: 'Nombre', en: 'Name' },
  'form.email': { es: 'Correo electrónico', en: 'Email' },
  'form.phone': { es: 'Teléfono', en: 'Phone' },
  'form.destination': { es: 'Destino de interés', en: 'Destination of interest' },
  'form.message': { es: 'Mensaje', en: 'Message' },
  'form.submit': { es: 'Enviar Solicitud', en: 'Submit Request' },
  'section.blog': { es: 'Insights & Intelligence', en: 'Insights & Intelligence' },
  'section.blogTitle': { es: 'Últimos Artículos', en: 'Latest Articles' },
  'blog.readMore': { es: 'Leer más', en: 'Read more' },
  'blog.viewAll': { es: 'Ver Todos los Artículos', en: 'View All Articles' },
  'card.explore': { es: 'Explorar', en: 'Explore' },
  'card.from': { es: 'Desde', en: 'From' },
  'card.properties': { es: 'propiedades', en: 'properties' },
  'card.viewProperty': { es: 'Ver Propiedad', en: 'View Property' },
  'footer.rights': { es: '© 2026 Rivana Properties. Todos los derechos reservados.', en: '© 2026 Rivana Properties. All rights reserved.' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');
  const t = (key: string) => translations[key]?.[language] || key;
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
