import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MenuIcon, XIcon } from '@/components/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { destinations } from '@/data/destinations';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, localePath, switchLanguageUrl } = useLanguage();

  // Priority 1 destinations shown prominently
  const cancunDestinations = destinations.filter((d) => ['zona-hotelera', 'puerto-cancun', 'costa-mujeres', 'cancun-centro'].includes(d.key));
  const rivieraMayaDestinations = destinations.filter((d) => !['zona-hotelera', 'puerto-cancun', 'costa-mujeres', 'cancun-centro'].includes(d.key));

  const navLinks = [
    { label: t('nav.listings'), href: '/listings' },
    { label: t('nav.presale'), href: '/presale' },
    { label: t('nav.journal'), href: '/journal' },
    { label: t('nav.about'), href: '/about' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDestOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 bg-background/90 backdrop-blur-md ${
        scrolled ? 'border-b border-border' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to={localePath('/')} className="font-display text-2xl tracking-[4px] text-primary">
          RIVANA
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Destinations dropdown */}
          <div className="relative">
            <button
              onClick={() => setDestOpen(!destOpen)}
              className="font-body text-sm font-normal tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors duration-300 gold-underline flex items-center gap-1"
            >
              {t('nav.destinations')}
              <svg className={`w-3 h-3 transition-transform ${destOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="6 9 12 15 18 9" /></svg>
            </button>

            {destOpen && (
              <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-sm shadow-xl min-w-[280px] animate-fade-in z-50">
                <div className="p-4">
                  <p className="eyebrow text-xs mb-3">{language === 'es' ? 'Cancún' : 'Cancún'}</p>
                  {cancunDestinations.map((d) => (
                    <Link
                      key={d.key}
                      to={localePath(d.basePath)}
                      className="block px-3 py-2 text-sm font-body text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-sm transition-colors"
                    >
                      {d.name[language]}
                    </Link>
                  ))}
                  <div className="border-t border-border mt-3 pt-3">
                    <p className="eyebrow text-xs mb-3">{language === 'es' ? 'Riviera Maya' : 'Riviera Maya'}</p>
                    {otherDestinations.map((d) => (
                      <Link
                        key={d.key}
                        to={localePath(d.basePath)}
                        className="block px-3 py-2 text-sm font-body text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-sm transition-colors"
                      >
                        {d.name[language]}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={localePath(link.href)}
              className="font-body text-sm font-normal tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors duration-300 gold-underline"
            >
              {link.label}
            </Link>
          ))}

          {/* Language switcher */}
          <Link
            to={switchLanguageUrl()}
            className="flex items-center gap-1.5 font-body text-xs tracking-widest uppercase border border-border rounded-sm px-3 py-1.5 text-foreground/70 hover:text-primary hover:border-primary/40 transition-colors duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
            {language === 'es' ? 'EN' : 'ES'}
          </Link>

          <Button variant="gold" size="sm" asChild>
            <a href="https://wa.me/5299888457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria" target="_blank" rel="noopener noreferrer">
              {t('nav.advisor')}
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="flex flex-col px-6 py-8 gap-6">
            {/* Destinations section */}
            <div>
              <p className="eyebrow text-xs mb-3">{t('nav.destinations')}</p>
              <div className="space-y-3 ml-2">
                {destinations.map((d) => (
                  <Link
                    key={d.key}
                    to={localePath(d.basePath)}
                    className="block font-body text-base tracking-wider text-foreground/70 hover:text-primary transition-colors"
                  >
                    {d.name[language]}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-border" />

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={localePath(link.href)}
                className="font-body text-lg tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile language switcher */}
            <Link
              to={switchLanguageUrl()}
              className="flex items-center gap-2 font-body text-sm tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
              {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            </Link>

            <Button variant="gold" className="mt-4" asChild>
              <a href="https://wa.me/5299888457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria" target="_blank" rel="noopener noreferrer">
                {t('nav.advisor')}
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
