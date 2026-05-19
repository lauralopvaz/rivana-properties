import { useLocation } from 'react-router-dom';

export const WhatsAppButton = () => {
  const { pathname } = useLocation();
  const isPropertyPage = pathname.includes('/propiedad/') || pathname.includes('/en/property/');

  if (isPropertyPage) return null;

  return (
    <a
      href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[200] w-16 h-16 flex items-center justify-center wa-pulse hover:scale-110 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        viewBox="0 0 256 256"
        className="w-full h-full drop-shadow-lg"
        aria-hidden="true"
      >
        <circle cx="128" cy="128" r="128" fill="#25D366" />
        <path
          fill="#FFFFFF"
          d="M128.5 54c-40.9 0-74.1 33.2-74.1 74.1 0 13.1 3.4 25.9 9.9 37.2L54 202l37.6-9.8a74 74 0 0 0 36.9 9.4h.1c40.8 0 74.1-33.2 74.1-74.1 0-19.8-7.7-38.4-21.7-52.4A73.7 73.7 0 0 0 128.5 54zm0 135.9h-.1a61.6 61.6 0 0 1-31.4-8.6l-2.3-1.3-22.3 5.8 6-21.7-1.5-2.3a61.6 61.6 0 0 1-9.4-32.7c0-34 27.7-61.6 61.6-61.6 16.5 0 32 6.4 43.6 18 11.6 11.6 18 27.1 18 43.6 0 34-27.7 61.6-61.6 61.6h-.6zm33.8-46.1c-1.8-.9-10.9-5.4-12.6-6-1.7-.6-2.9-.9-4.1.9s-4.7 6-5.8 7.2c-1.1 1.2-2.1 1.4-3.9.5-1.8-.9-7.8-2.9-14.9-9.2-5.5-4.9-9.2-10.9-10.3-12.7-1.1-1.8-.1-2.8.8-3.7.8-.8 1.8-2.1 2.7-3.2.9-1.1 1.2-1.8 1.8-3 .6-1.2.3-2.3-.2-3.2-.5-.9-4.1-9.9-5.7-13.5-1.5-3.6-3-3.1-4.1-3.1l-3.5-.1c-1.2 0-3.2.5-4.9 2.3-1.7 1.8-6.4 6.3-6.4 15.3 0 9 6.6 17.7 7.5 19 .9 1.2 13 19.8 31.5 27.8 4.4 1.9 7.8 3 10.5 3.9 4.4 1.4 8.4 1.2 11.6.7 3.5-.5 10.9-4.5 12.5-8.8 1.5-4.3 1.5-8 1.1-8.8-.5-.8-1.6-1.2-3.4-2.1z"
        />
      </svg>
    </a>
  );
};
