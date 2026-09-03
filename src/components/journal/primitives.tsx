import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { waCta } from '@/lib/whatsapp-cta';

/**
 * Reusable primitives for Journal articles.
 * All new Tier-1 posts MUST use these — no custom styling.
 * Palette: #CFAE60 (gold), #1C1C1C, #F5F5F5, #26547D, #4B4B4B, #D9CAB3.
 * Typography: Cormorant Garamond headings, Jost body. Zero border-radius.
 */

/* ---------- Typography ---------- */

export const H2 = ({ children, id }: { children: ReactNode; id?: string }) => (
  <h2 id={id} className="text-foreground border-b border-[hsl(var(--gold)_/_0.4)] pb-2 scroll-mt-28">
    {children}
  </h2>
);

export const H3 = ({ children, id }: { children: ReactNode; id?: string }) => (
  <h3 id={id} className="text-foreground mt-8 scroll-mt-28">
    {children}
  </h3>
);

export const Quote = ({ children }: { children: ReactNode }) => (
  <blockquote className="border-l-2 border-primary pl-6 py-4 my-8">
    <p className="font-display text-2xl italic text-foreground leading-relaxed">{children}</p>
  </blockquote>
);

/* ---------- Breadcrumb ---------- */

interface BreadcrumbProps {
  title: string;
}

export const JournalBreadcrumb = ({ title }: BreadcrumbProps) => {
  const { language, localePath } = useLanguage();
  return (
    <nav
      aria-label={language === 'es' ? 'Ruta de navegación' : 'Breadcrumb'}
      className="max-w-3xl mx-auto px-6 pt-24 lg:pt-28"
    >
      <ol className="flex flex-wrap items-center gap-2 text-xs font-body text-muted-foreground uppercase tracking-[0.15em]">
        <li>
          <Link to={localePath('/')} className="hover:text-primary transition-colors">
            {language === 'es' ? 'Inicio' : 'Home'}
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link to={localePath('/journal')} className="hover:text-primary transition-colors">
            Journal
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-foreground line-clamp-1" aria-current="page">
          {title}
        </li>
      </ol>
    </nav>
  );
};

/* ---------- Callout ---------- */

export const Callout = ({ children, title }: { children: ReactNode; title?: string }) => (
  <aside className="border-l-2 border-[hsl(var(--gold))] bg-[hsl(var(--gold)_/_0.08)] px-6 py-5 my-6 space-y-3">
    {title && <p className="font-display text-lg text-foreground m-0">{title}</p>}
    <div className="text-[15px] leading-[1.75] text-muted-foreground font-body space-y-3">{children}</div>
  </aside>
);

/* ---------- Responsive Table ---------- */

interface JTableProps {
  headers: string[];
  rows: (string | ReactNode)[][];
  caption?: string;
}

export const JTable = ({ headers, rows, caption }: JTableProps) => (
  <div className="my-8 -mx-6 sm:mx-0">
    <div className="overflow-x-auto px-6 sm:px-0">
      <table className="w-full text-sm border border-border min-w-[560px]">
        {caption && <caption className="text-xs text-muted-foreground text-left pb-3 font-body">{caption}</caption>}
        <thead>
          <tr className="bg-card">
            {headers.map((h, i) => (
              <th key={i} className="text-left p-3 border-b border-border text-foreground font-display font-normal">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td key={c} className="p-3 border-b border-border align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/* ---------- FAQ accordion ---------- */

export interface FaqEntry {
  q: string;
  a: string;
}

export const Faq = ({ items }: { items: FaqEntry[] }) => (
  <div className="my-6">
    {items.map((it, i) => (
      <details key={i} className="group border-b border-border py-4">
        <summary className="cursor-pointer font-display text-lg text-foreground list-none flex items-start justify-between gap-4">
          <span>{it.q}</span>
          <span className="text-[hsl(var(--gold))] transition-transform group-open:rotate-45 text-xl shrink-0">+</span>
        </summary>
        <p className="mt-3 text-[15px] leading-[1.75] text-muted-foreground font-body">{it.a}</p>
      </details>
    ))}
  </div>
);

/* ---------- WhatsApp / Email CTAs ---------- */

const WA_NUMBER = '529988457224'; // +52 998 845 7224
const EMAIL = 'hola@rivanaproperties.com';

export const buildWhatsAppUrl = (keyword: string, message: string) => {
  const text = `${keyword.toUpperCase()} — ${message}`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const buildUtm = (slug: string, campaign: string = 'tier1-transaccional') =>
  `?utm_source=journal&utm_medium=blog&utm_campaign=${campaign}&utm_content=${encodeURIComponent(slug)}`;

interface CtaProps {
  title: string;
  body: string;
  keyword: string;
  message: string;
  slug: string;
  waLabel?: string;
  emailLabel?: string;
  emailSubject?: string;
  /** UTM campaign override. Defaults to 'tier1-transaccional' (ES cluster). Use 'tier1-english' for EN cluster. */
  campaign?: string;
}

export const WhatsAppCta = ({
  title,
  body,
  keyword,
  message,
  slug,
  waLabel,
  emailLabel,
  emailSubject,
  campaign,
}: CtaProps) => {
  const { language } = useLanguage();
  const utm = buildUtm(slug, campaign);
  const waHref = `${buildWhatsAppUrl(keyword, message)}&${utm.slice(1)}`;
  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject || `[${keyword.toUpperCase()}] ${message}`)}${utm.replace('?', '&')}`;

  return (
    <div className="my-10 border border-[hsl(var(--gold)_/_0.4)] bg-[hsl(var(--gold)_/_0.05)] p-6 lg:p-8">
      <p className="font-display text-2xl text-foreground m-0">{title}</p>
      <p className="mt-3 text-[15px] leading-[1.75] text-muted-foreground font-body">{body}</p>
      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <a
          href={waHref}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center px-6 py-3 bg-[hsl(var(--gold))] text-[hsl(var(--foreground))] font-body text-sm uppercase tracking-[0.15em] hover:bg-[hsl(var(--gold)_/_0.85)] transition-colors"
        >
          {waCta(language, 'conocer')}
        </a>
        <a
          href={mailHref}
          className="inline-flex items-center justify-center px-6 py-3 border border-foreground text-foreground font-body text-sm uppercase tracking-[0.15em] hover:bg-foreground hover:text-background transition-colors"
        >
          {emailLabel || (language === 'es' ? 'Enviar correo' : 'Send email')}
        </a>
      </div>
    </div>
  );
};

/* ---------- Sources ---------- */

export interface SourceEntry {
  title: string;
  url: string;
  publisher?: string;
}

export const Sources = ({ items }: { items: SourceEntry[] }) => {
  const { language } = useLanguage();
  if (!items?.length) return null;
  return (
    <section className="mt-16 pt-8 border-t border-border">
      <p className="eyebrow text-xs mb-4">{language === 'es' ? 'Fuentes' : 'Sources'}</p>
      <ol className="list-decimal list-inside space-y-2 text-sm font-body text-muted-foreground">
        {items.map((s, i) => (
          <li key={i}>
            <a
              href={s.url}
              target="_blank"
              rel="nofollow noopener"
              className="text-[hsl(var(--gold))] hover:underline"
            >
              {s.title}
            </a>
            {s.publisher && <span className="text-muted-foreground"> — {s.publisher}</span>}
          </li>
        ))}
      </ol>
    </section>
  );
};

/* ---------- Article body wrapper (typography defaults) ---------- */

export const JournalBody = ({ children }: { children: ReactNode }) => (
  <div className="text-muted-foreground font-body text-[17px] leading-[1.85] space-y-6">{children}</div>
);