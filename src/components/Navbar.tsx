import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MenuIcon, XIcon } from '@/components/icons';

const navLinks = [
  { label: 'Collections', href: '/collections' },
  { label: 'Listings', href: '/listings' },
  { label: 'Pre-Sale', href: '/presale' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

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
          <Button variant="gold" size="sm" asChild>
            <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer">
              Speak with an Advisor
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
            <Button variant="gold" className="mt-4" asChild>
              <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer">
                Speak with an Advisor
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
