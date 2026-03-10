import { createContext, useContext, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  /** Prefix a path with /en for English, or return as-is for Spanish */
  localePath: (path: string) => string;
  /** Get the equivalent URL in the other language */
  switchLanguageUrl: () => string;
  /** Whether current URL is English */
  isEnglish: boolean;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.destinations': { es: 'Destinos', en: 'Destinations' },
  'nav.zonaHotelera': { es: 'Zona Hotelera', en: 'Hotel Zone' },
  'nav.puertoCancun': { es: 'Puerto Cancún', en: 'Puerto Cancún' },
  'nav.costaMujeres': { es: 'Costa Mujeres', en: 'Costa Mujeres' },
  'nav.mayakoba': { es: 'Mayakoba', en: 'Mayakoba' },
  'nav.puertoMorelos': { es: 'Puerto Morelos', en: 'Puerto Morelos' },
  'nav.cancunCentro': { es: 'Cancún Centro', en: 'Downtown Cancún' },
  'nav.tulum': { es: 'Tulum', en: 'Tulum' },
  'nav.listings': { es: 'Propiedades', en: 'Listings' },
  'nav.presale': { es: 'Preventa', en: 'Pre-Sale' },
  'nav.journal': { es: 'Journal', en: 'Journal' },
  'nav.about': { es: 'Nosotros', en: 'About' },
  'nav.advisor': { es: 'Hablar con un Asesor', en: 'Speak with an Advisor' },

  // Hero
  'hero.tagline': { es: 'Tu inversión, tu legado.', en: 'Your investment, your legacy.' },
  'hero.subtitle': { es: 'Propiedades exclusivas en Cancún y la Riviera Maya, curadas para inversionistas visionarios.', en: 'Exclusive properties in Cancún and the Riviera Maya, curated for visionary investors.' },
  'hero.explore': { es: 'Explorar Propiedades', en: 'Explore Properties' },
  'hero.destinations': { es: 'Nuestros Destinos', en: 'Our Destinations' },

  // Services
  'services.01': { es: 'Facilitamos cada paso del proceso legal y notarial', en: 'We facilitate every step of the legal and notarial process' },
  'services.02': { es: 'Inventario curado de propiedades con alto potencial de retorno', en: 'Curated inventory of high-return potential properties' },
  'services.03': { es: 'Acceso a preventas con condiciones exclusivas para nuestros clientes', en: 'Access to pre-sales with exclusive conditions for our clients' },
  'services.04': { es: 'Asesoría especializada para inversionistas internacionales', en: 'Specialized advisory for international investors' },

  // Sections
  'section.destinations': { es: 'Destinos', en: 'Destinations' },
  'section.collections': { es: 'Nuestras Colecciones', en: 'Our Collections' },
  'section.featured': { es: 'Selección Curada', en: 'Curated Selection' },
  'section.featuredTitle': { es: 'Propiedades Destacadas', en: 'Featured Properties' },
  'section.schedule': { es: 'Asesoría Personalizada', en: 'Personal Advisory' },
  'section.scheduleTitle': { es: 'Agenda una Visita', en: 'Schedule a Visit' },
  'section.scheduleDesc': { es: 'Reúnete con uno de nuestros asesores para un recorrido personalizado en Cancún o la Riviera Maya.', en: 'Meet with one of our advisors for a personalized property tour in Cancún or the Riviera Maya.' },
  'section.blog': { es: 'Insights', en: 'Insights' },
  'section.blogTitle': { es: 'Desde el Journal', en: 'From the Journal' },

  // Forms
  'form.name': { es: 'Nombre', en: 'Name' },
  'form.firstName': { es: 'Nombre', en: 'First Name' },
  'form.lastName': { es: 'Apellido', en: 'Last Name' },
  'form.email': { es: 'Correo electrónico', en: 'Email' },
  'form.phone': { es: 'Teléfono', en: 'Phone' },
  'form.destination': { es: 'Destino de interés', en: 'Destination of interest' },
  'form.message': { es: 'Mensaje (opcional)', en: 'Message (optional)' },
  'form.submit': { es: 'Enviar Solicitud', en: 'Submit Request' },
  'form.scheduleVisit': { es: 'Agendar Visita', en: 'Schedule Visit' },
  'form.selectDestination': { es: 'Seleccionar Destino', en: 'Select Destination' },

  // Cards
  'card.explore': { es: 'Explorar', en: 'Explore' },
  'card.from': { es: 'Desde', en: 'From' },
  'card.properties': { es: 'propiedades', en: 'properties' },
  'card.viewProperty': { es: 'Ver Propiedad', en: 'View Property' },
  'card.view': { es: 'Ver', en: 'View' },

  // Blog / Journal
  'blog.readMore': { es: 'Leer más', en: 'Read more' },
  'blog.viewAll': { es: 'Todos los Artículos', en: 'All Articles' },
  'journal.title': { es: 'The Rivana Journal', en: 'The Rivana Journal' },

  // Footer
  'footer.rights': { es: '© 2026 Rivana Properties. Todos los derechos reservados.', en: '© 2026 Rivana Properties. All rights reserved.' },
  'footer.destinations': { es: 'Destinos', en: 'Destinations' },
  'footer.properties': { es: 'Propiedades', en: 'Properties' },
  'footer.company': { es: 'Compañía', en: 'Company' },
  'footer.allListings': { es: 'Todas las Propiedades', en: 'All Listings' },
  'footer.presale': { es: 'Preventa', en: 'Pre-Sale' },
  'footer.penthouses': { es: 'Penthouses', en: 'Penthouses' },
  'footer.villas': { es: 'Villas', en: 'Villas' },
  'footer.aboutUs': { es: 'Nosotros', en: 'About Us' },
  'footer.journal': { es: 'Journal', en: 'Journal' },
  'footer.contact': { es: 'Contacto', en: 'Contact' },

  // Destination page
  'dest.destination': { es: 'Destino', en: 'Destination' },
  'dest.subZones': { es: 'Sub-Zonas', en: 'Sub-Zones' },
  'dest.zoneBreakdown': { es: 'Desglose de Zona', en: 'Zone Breakdown' },
  'dest.featuredProjects': { es: 'Proyectos Destacados', en: 'Featured Projects' },
  'dest.newDevelopments': { es: 'Nuevos Desarrollos', en: 'New Developments' },
  'dest.marketIntelligence': { es: 'Inteligencia de Mercado', en: 'Market Intelligence' },
  'dest.investmentData': { es: 'Datos de Inversión', en: 'Investment Data' },
  'dest.whoBuysHere': { es: '¿Quién Compra Aquí?', en: 'Who Buys Here' },
  'dest.buyerProfiles': { es: 'Perfiles de Comprador', en: 'Buyer Profiles' },
  'dest.commonQuestions': { es: 'Preguntas Frecuentes', en: 'Common Questions' },
  'dest.faq': { es: 'Preguntas Frecuentes', en: 'FAQ' },
  'dest.exploreMore': { es: 'Explorar Más', en: 'Explore More' },
  'dest.relatedDestinations': { es: 'Destinos Relacionados', en: 'Related Destinations' },
  'dest.requestInfo': { es: 'Solicitar Información', en: 'Request Information' },
  'dest.viewProject': { es: 'Ver Proyecto', en: 'View Project' },

  // About
  'about.tagline': { es: 'No somos una agencia.', en: 'Not just an agency.' },
  'about.partner': { es: 'Tu aliado.', en: 'Your Partner.' },

  // Listings
  'listings.browse': { es: 'Explorar', en: 'Browse' },
  'listings.title': { es: 'Propiedades en Venta', en: 'Property Listings' },
  'listings.subtitle': { es: 'Explora nuestra colección curada de propiedades de lujo en Cancún y la Riviera Maya.', en: 'Explore our curated collection of luxury properties across Cancún and the Riviera Maya.' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isEnglish = location.pathname === '/en' || location.pathname.startsWith('/en/');
  const language: Language = isEnglish ? 'en' : 'es';

  const t = (key: string) => translations[key]?.[language] || key;

  const localePath = (path: string) => {
    if (isEnglish) {
      return path === '/' ? '/en' : `/en${path}`;
    }
    return path;
  };

  const switchLanguageUrl = () => {
    if (isEnglish) {
      // Remove /en prefix
      const esPath = location.pathname.replace(/^\/en/, '') || '/';
      return esPath;
    }
    // Add /en prefix
    return location.pathname === '/' ? '/en' : `/en${location.pathname}`;
  };

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    navigate(switchLanguageUrl());
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, localePath, switchLanguageUrl, isEnglish }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
