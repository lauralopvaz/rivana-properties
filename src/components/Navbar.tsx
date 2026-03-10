import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MenuIcon, XIcon } from '@/components/icons';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t('nav.collections'), href: '/collections' },
    { label: t('nav.listings'), href: '/listings' },
    { label: t('nav.presale'), href: '/presale' },
    { label: t('nav.blog'), href: '/blog' },
    { label: t('nav.about'), href: '/about' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const toggleLang = () => setLanguage(language === 'es' ? 'en' : 'es');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-deep-dark/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="font-display text-2xl tracking-[4px] text-primary">
          RIVANA
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-body text-sm tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors duration-300 gold-underline"
            >
              {link.label}
            </Link>
          ))}

          {/* Language switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 font-body text-xs tracking-widest uppercase border border-border rounded-sm px-3 py-1.5 text-foreground/70 hover:text-primary hover:border-primary/40 transition-colors duration-300"
            aria-label="Change language"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          <Button variant="gold" size="sm" asChild>
            <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer">
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
        <div className="lg:hidden bg-deep-dark/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-body text-lg tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile language switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 font-body text-sm tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
              {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            </button>

            <Button variant="gold" className="mt-4" asChild>
              <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer">
                {t('nav.advisor')}
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
