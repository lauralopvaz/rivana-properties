import { useLocation } from 'react-router-dom';
import { ChatIcon } from '@/components/icons';

export const WhatsAppButton = () => {
  const { pathname } = useLocation();
  const isPropertyPage = pathname.includes('/propiedad/') || pathname.includes('/en/property/');

  if (isPropertyPage) return null;

  return (
    <a
      href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-lg wa-pulse hover:scale-110 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <ChatIcon className="w-6 h-6 text-foreground" />
    </a>
  );
};
