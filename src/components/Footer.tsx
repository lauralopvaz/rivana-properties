import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, InstagramIcon, PinterestIcon, FacebookIcon } from '@/components/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { destinations } from '@/data/destinations';
import { useNewsletterSubscribe } from '@/hooks/useNewsletterSubscribe';

export const Footer = () => {
  const { language, t, localePath } = useLanguage();
  const nl = useNewsletterSubscribe();

  const p1 = destinations.filter((d) => d.priority === 1);
  const others = destinations.filter((d) => d.priority > 1);

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand + Newsletter */}
          <div>
            <Link to={localePath('/')} className="font-display text-3xl tracking-[4px] text-primary">
              RIVANA
            </Link>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-xs">
              {language === 'es'
                ? 'Tu inversión, tu legado. Asesoría inmobiliaria de lujo en Cancún y la Riviera Maya.'
                : 'Your investment, your legacy. Luxury real estate advisory in Cancún and the Riviera Maya.'}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="mailto:rivanapropertiesmx@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
                <MailIcon className="w-5 h-5" />
              </a>
              <a href="tel:+529988457224" aria-label="Phone" className="text-muted-foreground hover:text-primary transition-colors">
                <PhoneIcon className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/rivanaproperties" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/rivana.properties" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://mx.pinterest.com/rivanapropertiesmx/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-muted-foreground hover:text-primary transition-colors">
                <PinterestIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              {nl.success ? (
                <p className="text-primary font-body text-sm">{language === 'es' ? '¡Suscrito! 🎉' : 'Subscribed! 🎉'}</p>
              ) : (
                <form className="flex" onSubmit={nl.handleSubmit}>
                  <input
                    type="email"
                    required
                    value={nl.email}
                    onChange={(e) => nl.setEmail(e.target.value)}
                    placeholder={language === 'es' ? 'Tu correo electrónico' : 'Your email'}
                    style={{
                      background: '#F8F6F2',
                      border: '1px solid rgba(0,0,0,0.09)',
                      borderRadius: 0,
                    }}
                    className="flex-1 min-w-0 px-3 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={nl.loading}
                    style={{
                      background: '#CFAE60',
                      color: '#fff',
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      fontSize: '12px',
                      borderRadius: 0,
                      border: 'none',
                      padding: '0 16px',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                    }}
                  >
                    {nl.loading ? '...' : language === 'es' ? 'Suscribirse' : 'Subscribe'}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div>
            <h3 className="eyebrow mb-6">{t('footer.destinations')}</h3>
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
            <h3 className="eyebrow mb-6">{t('footer.properties')}</h3>
            <ul className="space-y-3">
              <li><Link to={localePath('/listings')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">{t('footer.allListings')}</Link></li>
              <li><Link to={localePath('/presale')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">{t('footer.presale')}</Link></li>
              <li><Link to={localePath('/propiedad/mondrian-residences-grand-island-cancun')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">The Residences at Grand Island Cancun</Link></li>
              <li><Link to={localePath('/propiedad/sls-ocean-beach-puerto-cancun')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">SLS Ocean Beach</Link></li>
              <li><Link to={localePath('/propiedad/thompson-residences-puerto-cancun')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">Thompson Residences</Link></li>
              <li><Link to={localePath('/propiedad/bay-view-grand-grand-island')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">Bay View Grand at Grand Island</Link></li>
              <li><Link to={localePath('/propiedad/kabeek-marina-condos')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">Kabeek Marina</Link></li>
              <li><Link to={localePath('/propiedad/arbolada-towers')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">Arbolada Towers</Link></li>
              <li><Link to={localePath('/propiedad/sole-blu-ocean-living')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">Sole Blu Ocean Living</Link></li>
              <li><Link to={localePath('/propiedad/cuore-cumbres-cancun')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">Cuore Cumbres</Link></li>
              <li><Link to={localePath('/propiedad/dhamar-costa-mujeres')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">Dhamar</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="eyebrow mb-6">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li><Link to={localePath('/about')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">{t('footer.aboutUs')}</Link></li>
              <li><Link to={localePath('/journal')} className="text-[15px] text-muted-foreground hover:text-primary transition-colors">{t('footer.journal')}</Link></li>
              <li><a href="mailto:rivanapropertiesmx@gmail.com" className="text-[15px] text-muted-foreground hover:text-primary transition-colors">{t('footer.contact')}</a></li>
              <li>
                <Link
                  to={localePath(language === 'es' ? '/aviso-de-privacidad' : '/privacy-policy')}
                  className="text-[15px] text-muted-foreground hover:text-primary transition-colors"
                >
                  {language === 'es' ? 'Aviso de Privacidad' : 'Privacy Policy'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{t('footer.rights')}</p>
          <p className="text-sm text-muted-foreground">rivanapropertiesmx@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};
