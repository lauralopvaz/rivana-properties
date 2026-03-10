import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, InstagramIcon, PinterestIcon, FacebookIcon } from '@/components/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { destinations } from '@/data/destinations';

export const Footer = () => {
  const { language, t, localePath } = useLanguage();

  // P1 destinations get most internal links
  const p1 = destinations.filter((d) => d.priority === 1);
  const others = destinations.filter((d) => d.priority > 1);

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to={localePath('/')} className="font-display text-3xl tracking-[4px] text-primary">
              RIVANA
            </Link>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-xs">
              {language === 'es'
                ? 'Tu inversión, tu legado. Asesoría inmobiliaria de lujo en Cancún y la Riviera Maya.'
                : 'Your investment, your legacy. Luxury real estate advisory in Cancún and the Riviera Maya.'}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="mailto:rivanapropertiesmx@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <MailIcon className="w-5 h-5" />
              </a>
              <a href="tel:+5299811457224" className="text-muted-foreground hover:text-primary transition-colors">
                <PhoneIcon className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/rivanaproperties" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/rivana.properties" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://mx.pinterest.com/rivanapropertiesmx/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <PinterestIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Destinations — P1 get most links */}
          <div>
            <h4 className="eyebrow mb-6">{t('footer.destinations')}</h4>
            <ul className="space-y-3">
              {p1.map((d) => (
                <li key={d.key}>
                   <Link to={localePath(d.basePath)} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">
                    {d.name[language]}
                  </Link>
                </li>
              ))}
              {others.map((d) => (
                <li key={d.key}>
                  <Link to={localePath(d.basePath)} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">
                    {d.name[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="eyebrow mb-6">{t('footer.properties')}</h4>
            <ul className="space-y-3">
              <li><Link to={localePath('/listings')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">{t('footer.allListings')}</Link></li>
              <li><Link to={localePath('/presale')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">{t('footer.presale')}</Link></li>
              <li><Link to={localePath('/cancun/zona-hotelera/penthouses')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">{t('footer.penthouses')}</Link></li>
              {/* Extra internal links to P1 destinations */}
              <li><Link to={localePath('/cancun/zona-hotelera/condos')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">{language === 'es' ? 'Condos Zona Hotelera' : 'Hotel Zone Condos'}</Link></li>
              <li><Link to={localePath('/cancun/costa-mujeres/preventa')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">{language === 'es' ? 'Preventa Costa Mujeres' : 'Costa Mujeres Pre-Sale'}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="eyebrow mb-6">{t('footer.company')}</h4>
            <ul className="space-y-3">
              <li><Link to={localePath('/about')} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.aboutUs')}</Link></li>
              <li><Link to={localePath('/journal')} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.journal')}</Link></li>
              <li><a href="mailto:hola@rivanaproperties.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.contact')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">{t('footer.rights')}</p>
          <p className="text-xs text-muted-foreground">hola@rivanaproperties.com</p>
        </div>
      </div>
    </footer>
  );
};
