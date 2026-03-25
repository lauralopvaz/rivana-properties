import { SEOHead } from '@/components/SEOHead';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const isEs = language === 'es';

  const title = isEs ? 'Aviso de Privacidad | Rivana Properties' : 'Privacy Policy | Rivana Properties';
  const description = isEs
    ? 'Aviso de privacidad de Rivana Properties conforme a la LFPDPPP.'
    : 'Rivana Properties privacy policy in accordance with Mexican data protection law.';
  const path = isEs ? '/aviso-de-privacidad' : '/en/privacy-policy';

  return (
    <>
      <SEOHead title={title} description={description} path={path} noIndex />

      <main className="min-h-screen bg-background pt-32 pb-24">
        <article className="max-w-[720px] mx-auto px-6">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl tracking-tight text-foreground mb-8">
              {isEs ? 'Aviso de Privacidad' : 'Privacy Policy'}
            </h1>

            <p className="text-muted-foreground text-sm mb-12">
              {isEs ? 'Última actualización: 25 de marzo de 2026' : 'Last updated: March 25, 2026'}
            </p>
          </ScrollReveal>

          <div className="prose prose-lg max-w-none font-body text-foreground/90 space-y-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
            {isEs ? <SpanishContent /> : <EnglishContent />}
          </div>
        </article>
      </main>
    </>
  );
};

const SpanishContent = () => (
  <>
    <h2>I. Responsable del tratamiento de datos personales</h2>
    <p>
      <strong>Rivana Properties</strong>, con domicilio en Zona Hotelera, Cancún, Quintana Roo, México,
      es responsable del tratamiento de sus datos personales, de conformidad con la Ley Federal de
      Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.
    </p>
    <p>
      Correo electrónico de contacto: <a href="mailto:rivanapropertiesmx@gmail.com" className="text-primary hover:underline">rivanapropertiesmx@gmail.com</a>
    </p>

    <h2>II. Datos personales que recabamos</h2>
    <p>Para las finalidades descritas en este aviso, podemos recabar los siguientes datos personales:</p>
    <ul>
      <li>Nombre completo</li>
      <li>Correo electrónico</li>
      <li>Número de teléfono</li>
      <li>Presupuesto de inversión</li>
      <li>Destino de interés</li>
    </ul>
    <p>
      No recabamos datos personales sensibles. Los datos se obtienen directamente del titular a través
      de los formularios de contacto, solicitud de información, agendado de asesorías y suscripción al
      newsletter disponibles en nuestro sitio web.
    </p>

    <h2>III. Finalidades del tratamiento</h2>
    <p>Sus datos personales serán utilizados para las siguientes finalidades primarias, necesarias para la relación con usted:</p>
    <ul>
      <li>Contacto comercial y seguimiento de consultas inmobiliarias</li>
      <li>Envío de información sobre propiedades, desarrollos y oportunidades de inversión</li>
      <li>Agendado y confirmación de asesorías personalizadas</li>
    </ul>
    <p>Adicionalmente, con su consentimiento, sus datos podrán ser utilizados para:</p>
    <ul>
      <li>Envío de newsletter con análisis de mercado, tendencias inmobiliarias y nuevas oportunidades</li>
      <li>Invitaciones a eventos exclusivos y preventas</li>
    </ul>

    <h2>IV. Derechos ARCO</h2>
    <p>
      Usted tiene derecho a Acceder, Rectificar y Cancelar sus datos personales, así como a Oponerse
      al tratamiento de los mismos o revocar el consentimiento que para dicho fin nos haya otorgado,
      a través de los procedimientos que hemos implementado.
    </p>
    <p>
      Para ejercer sus derechos ARCO, envíe un correo electrónico a{' '}
      <a href="mailto:rivanapropertiesmx@gmail.com" className="text-primary hover:underline">rivanapropertiesmx@gmail.com</a>{' '}
      indicando su nombre completo, descripción del derecho que desea ejercer y cualquier documento
      que facilite la localización de sus datos.
    </p>
    <p>Responderemos su solicitud en un plazo máximo de 20 días hábiles.</p>

    <h2>V. Transferencia de datos</h2>
    <p>
      Sus datos personales no serán transferidos a terceros sin su consentimiento, salvo las excepciones
      previstas en el artículo 37 de la LFPDPPP.
    </p>

    <h2>VI. Uso de cookies y tecnologías de rastreo</h2>
    <p>
      Nuestro sitio web utiliza Google Analytics para recopilar información estadística sobre el uso del
      sitio. Esta información es anónima y se utiliza exclusivamente para mejorar la experiencia del usuario.
      Puede desactivar las cookies en la configuración de su navegador.
    </p>

    <h2>VII. Modificaciones al aviso de privacidad</h2>
    <p>
      Nos reservamos el derecho de modificar este aviso de privacidad. Cualquier cambio será publicado
      en nuestro sitio web en esta misma página.
    </p>

    <h2>VIII. Consentimiento</h2>
    <p>
      Al proporcionar sus datos personales a través de nuestros formularios, usted manifiesta su
      consentimiento para que sean tratados conforme a los términos de este aviso de privacidad.
    </p>
  </>
);

const EnglishContent = () => (
  <>
    <h2>I. Data controller</h2>
    <p>
      <strong>Rivana Properties</strong>, located in Zona Hotelera, Cancún, Quintana Roo, Mexico,
      is responsible for the processing of your personal data in accordance with the Mexican Federal
      Law on Protection of Personal Data Held by Private Parties (LFPDPPP).
    </p>
    <p>
      Contact email: <a href="mailto:rivanapropertiesmx@gmail.com" className="text-primary hover:underline">rivanapropertiesmx@gmail.com</a>
    </p>

    <h2>II. Personal data we collect</h2>
    <p>We may collect the following personal data for the purposes described herein:</p>
    <ul>
      <li>Full name</li>
      <li>Email address</li>
      <li>Phone number</li>
      <li>Investment budget</li>
      <li>Destination of interest</li>
    </ul>
    <p>
      We do not collect sensitive personal data. All data is obtained directly from you through contact
      forms, information requests, advisory scheduling, and newsletter subscriptions on our website.
    </p>

    <h2>III. Purpose of data processing</h2>
    <p>Your personal data will be used for the following primary purposes:</p>
    <ul>
      <li>Commercial contact and follow-up on real estate inquiries</li>
      <li>Sending information about properties, developments, and investment opportunities</li>
      <li>Scheduling and confirming personalized advisory sessions</li>
    </ul>
    <p>Additionally, with your consent, your data may be used for:</p>
    <ul>
      <li>Newsletter with market analysis, real estate trends, and new opportunities</li>
      <li>Invitations to exclusive events and pre-sales</li>
    </ul>

    <h2>IV. ARCO rights</h2>
    <p>
      You have the right to Access, Rectify, Cancel, and Oppose the processing of your personal data,
      as well as to revoke the consent granted for such purpose.
    </p>
    <p>
      To exercise your ARCO rights, send an email to{' '}
      <a href="mailto:rivanapropertiesmx@gmail.com" className="text-primary hover:underline">rivanapropertiesmx@gmail.com</a>{' '}
      including your full name, a description of the right you wish to exercise, and any document
      that may help locate your data.
    </p>
    <p>We will respond to your request within 20 business days.</p>

    <h2>V. Data transfers</h2>
    <p>
      Your personal data will not be transferred to third parties without your consent, except as
      provided by Article 37 of the LFPDPPP.
    </p>

    <h2>VI. Cookies and tracking technologies</h2>
    <p>
      Our website uses Google Analytics to collect anonymous statistical information about site usage.
      This information is used solely to improve the user experience. You can disable cookies in your
      browser settings.
    </p>

    <h2>VII. Changes to this privacy policy</h2>
    <p>
      We reserve the right to modify this privacy policy. Any changes will be published on this page
      of our website.
    </p>

    <h2>VIII. Consent</h2>
    <p>
      By providing your personal data through our forms, you consent to its processing in accordance
      with the terms of this privacy policy.
    </p>
  </>
);

export default PrivacyPolicy;
