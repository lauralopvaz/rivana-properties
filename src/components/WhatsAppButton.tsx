import { ChatIcon } from '@/components/icons';

export const WhatsAppButton = () => (
  <a
    href="https://wa.me/529981234567"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-lg wa-pulse hover:scale-110 transition-transform"
    aria-label="Contact us on WhatsApp"
  >
    <ChatIcon className="w-6 h-6 text-foreground" />
  </a>
);
