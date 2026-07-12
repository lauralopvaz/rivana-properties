import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  JournalBody,
  H2,
  H3,
  Quote,
  Callout,
  JTable,
  Faq,
  WhatsAppCta,
} from './primitives';
import { getArticleFaqs } from '@/data/journal-articles';

/**
 * Example article body that demonstrates every reusable primitive.
 * Route: /journal/journal-template-demo
 * Duplicate this file as a starting point for each Tier-1 post.
 */
export const Tier1DemoBody = () => {
  const { language, localePath } = useLanguage();
  const faqs = getArticleFaqs('journal-template-demo', language);
  const slug = 'journal-template-demo';

  return (
    <JournalBody>
      <p>
        {language === 'es'
          ? 'Este artículo demuestra los componentes reutilizables del template Tier-1 del Journal: tipografía, tablas, callouts, FAQs y CTAs. Copia este archivo como punto de partida para cada nuevo post del cluster.'
          : 'This post demonstrates every reusable Tier-1 Journal primitive: typography, tables, callouts, FAQs and CTAs. Duplicate it as the starting point for every new post in the cluster.'}
      </p>

      <Quote>
        {language === 'es'
          ? '“Un solo template, siete artículos, cero deuda de diseño.”'
          : '“One template, seven articles, zero design debt.”'}
      </Quote>

      <H2>{language === 'es' ? 'Bloque de datos con tabla' : 'Data block with table'}</H2>
      <p>
        {language === 'es'
          ? 'Las tablas usan el componente JTable con scroll horizontal automático en móvil.'
          : 'Tables use the JTable component with automatic horizontal scroll on mobile.'}
      </p>

      <JTable
        headers={
          language === 'es'
            ? ['Zona', 'Precio USD/m²', 'ROI anual', 'Entrega']
            : ['Zone', 'Price USD/m²', 'Yearly ROI', 'Delivery']
        }
        rows={[
          ['Puerto Cancún', '$3,200 – $4,500', '8–10%', '2026–2027'],
          ['Mayakoba', '$4,000 – $6,500', '9–12%', '2027–2028'],
          ['Costa Mujeres', '$1,800 – $2,500', '10–14%', '2026–2027'],
        ]}
        caption={language === 'es' ? 'Rangos referenciales 2026.' : 'Reference ranges, 2026.'}
      />

      <Callout title={language === 'es' ? 'Callout con acento dorado' : 'Gold-accented callout'}>
        <p>
          {language === 'es'
            ? 'Úsalo para insights, advertencias o datos clave. Fondo con opacidad dorada 8% y borde izquierdo #CFAE60.'
            : 'Use it for insights, warnings or key data points. Gold 8% opacity background and #CFAE60 left border.'}
        </p>
      </Callout>

      <H2>{language === 'es' ? 'Enlaces internos' : 'Internal links'}</H2>
      <p>
        {language === 'es' ? (
          <>
            Enlaza destinos con{' '}
            <Link to={localePath('/cancun/puerto-cancun')} className="text-[hsl(var(--gold))] hover:underline">
              Puerto Cancún
            </Link>{' '}
            o{' '}
            <Link to={localePath('/mayakoba')} className="text-[hsl(var(--gold))] hover:underline">
              Mayakoba
            </Link>{' '}
            usando el color de acento dorado.
          </>
        ) : (
          <>
            Link destinations like{' '}
            <Link to={localePath('/en/cancun/puerto-cancun')} className="text-[hsl(var(--gold))] hover:underline">
              Puerto Cancún
            </Link>{' '}
            or{' '}
            <Link to={localePath('/en/mayakoba')} className="text-[hsl(var(--gold))] hover:underline">
              Mayakoba
            </Link>{' '}
            using the gold accent color.
          </>
        )}
      </p>

      <H3>{language === 'es' ? 'Subsección con H3' : 'Subsection with H3'}</H3>
      <p>
        {language === 'es'
          ? 'La jerarquía es estricta H1 → H2 → H3 para cumplir con accesibilidad y SEO.'
          : 'Hierarchy is strictly H1 → H2 → H3 for accessibility and SEO compliance.'}
      </p>

      <WhatsAppCta
        title={language === 'es' ? '¿Listo para invertir en preventa?' : 'Ready to invest in pre-sale?'}
        body={
          language === 'es'
            ? 'Agenda 30 minutos con un asesor bilingüe. Sin compromiso.'
            : 'Book a 30-minute call with a bilingual advisor. No commitment.'
        }
        keyword="PREVENTA"
        message={
          language === 'es'
            ? 'Quiero información sobre preventa en Cancún y Riviera Maya'
            : 'I would like info about pre-sale in Cancún and Riviera Maya'
        }
        slug={slug}
      />

      <H2>{language === 'es' ? 'Preguntas frecuentes' : 'Frequently asked questions'}</H2>
      <Faq items={faqs} />
    </JournalBody>
  );
};