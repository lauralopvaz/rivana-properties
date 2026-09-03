import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { waCta } from '@/lib/whatsapp-cta';

export const WhatsAppButton = () => {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const isPropertyPage = pathname.includes('/propiedad/') || pathname.includes('/en/property/');

  if (isPropertyPage) return null;

  return (
    <a
      href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria&utm_source=web&utm_medium=whatsapp&utm_campaign=lead&utm_content=floating-button"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[200] w-16 h-16 flex items-center justify-center wa-pulse hover:scale-110 transition-transform"
      aria-label={waCta(language, 'conocer')}
    >
