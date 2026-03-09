import { Link } from 'react-router-dom';
import { LocationIcon, PhoneIcon, MailIcon } from '@/components/icons';

const destinations = [
  { name: 'Zona Hotelera', href: '/destination/zona-hotelera' },
  { name: 'Puerto Cancún', href: '/destination/puerto-cancun' },
  { name: 'Costa Mujeres', href: '/destination/costa-mujeres' },
  { name: 'Mayakoba', href: '/destination/mayakoba' },
  { name: 'Holbox', href: '/destination/holbox' },
  { name: 'Tulum', href: '/destination/tulum' },
  { name: 'Mérida', href: '/destination/merida' },
];

export const Footer = () => (
  <footer className="bg-deep-dark border-t border-border">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="font-display text-3xl tracking-[4px] text-primary">
            RIVANA
          </Link>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-xs">
            Tu inversión, tu legado. Luxury real estate advisory in Cancún and the Riviera Maya.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a href="mailto:hola@rivanaproperties.com" className="text-muted-foreground hover:text-primary transition-colors">
              <MailIcon className="w-5 h-5" />
            </a>
            <a href="tel:+529981234567" className="text-muted-foreground hover:text-primary transition-colors">
              <PhoneIcon className="w-5 h-5" />
            </a>
            <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <LocationIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="eyebrow mb-6">Destinations</h4>
          <ul className="space-y-3">
            {destinations.map((d) => (
              <li key={d.name}>
                <Link to={d.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Properties */}
        <div>
          <h4 className="eyebrow mb-6">Properties</h4>
          <ul className="space-y-3">
            <li><Link to="/listings" className="text-sm text-muted-foreground hover:text-primary transition-colors">All Listings</Link></li>
            <li><Link to="/presale" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pre-Sale</Link></li>
            <li><Link to="/listings?type=penthouse" className="text-sm text-muted-foreground hover:text-primary transition-colors">Penthouses</Link></li>
            <li><Link to="/listings?type=villa" className="text-sm text-muted-foreground hover:text-primary transition-colors">Villas</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="eyebrow mb-6">Company</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            <li><a href="mailto:hola@rivanaproperties.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© 2026 Rivana Properties. All rights reserved.</p>
        <p className="text-xs text-muted-foreground">hola@rivanaproperties.com</p>
      </div>
    </div>
  </footer>
);
