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
      className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-lg wa-pulse hover:scale-110 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7"
        fill="#FFFFFF"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.578-1.276.187-.33.288-.73.288-1.103 0-.43-1.245-.789-1.762-.989zm-2.91 7.21c-3.65 0-7.06-2.063-8.71-5.32-2.235-4.4-.572-9.94 3.787-12.29C16.62 4.45 22.31 6.226 24.51 10.66c2.235 4.405.575 9.943-3.785 12.29-1.405.752-2.96 1.21-4.527 1.21zm.013-19.428c-5.595 0-10.146 4.55-10.146 10.144 0 1.91.526 3.77 1.53 5.4l-1.61 5.882 6.029-1.583a10.182 10.182 0 0 0 4.197.91h.004c5.594 0 10.145-4.55 10.145-10.144 0-2.71-1.058-5.256-2.972-7.172a10.062 10.062 0 0 0-7.177-2.978z"/>
      </svg>
    </a>
  );
};
