import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { JournalBody, H2, H3, Callout, Faq, WhatsAppCta } from './primitives';
import { getArticleFaqs } from '@/data/journal-articles';

/**
 * Body — ¿Qué es un broker inmobiliario? Guía Cancún 2026 (ES-only Tier-1).
 * Route: /journal/que-es-un-broker-inmobiliario-de-lujo-cancun
 */
export const BrokerLujoCancunBody = () => {
  const { localePath } = useLanguage();
  const slug = 'que-es-un-broker-inmobiliario-de-lujo-cancun';
  const faqs = getArticleFaqs(slug, 'es');
  const gold = 'text-[hsl(var(--gold))] hover:underline';

  return (
    <JournalBody>
      <p>
        Si estás pensando en comprar una propiedad en Cancún o la Riviera Maya, seguramente ya te
        topaste con estas palabras: broker, asesor, agente, inmobiliaria de lujo. Suenan parecido,
        se usan como si fueran lo mismo… y no lo son. Y entender la diferencia puede ser,
        literalmente, la diferencia entre una gran inversión y un dolor de cabeza de varios
        millones de pesos.
      </p>
      <p>
        Aquí te lo explicamos sin tecnicismos, como nos gusta hacerlo: con claridad, con datos y
        pensando en tu patrimonio.
      </p>

      <H2>¿Qué es un broker inmobiliario?</H2>
      <p>
        Un broker inmobiliario es un profesional que representa tus intereses en la compra o venta
        de una propiedad. No es un vendedor de departamentos: es la persona que analiza el mercado
        por ti, filtra las opciones que realmente te convienen, negocia en tu nombre y te acompaña
        en la parte legal y financiera hasta que las llaves —y las escrituras— están en tu mano.
      </p>
      <p>
        La distinción clave es esa: el vendedor trabaja para colocar un inmueble; el broker trabaja
        para ti.
      </p>
      <p>
        Un vendedor te muestra lo que tiene disponible. Un broker te pregunta primero qué quieres
        lograr —¿plusvalía?, ¿renta vacacional?, ¿un retiro frente al mar?, ¿patrimonio para tus
        hijos?— y a partir de ahí construye una estrategia. Son dos oficios distintos, aunque a
        veces usen la misma tarjeta de presentación.
      </p>

      <H2>¿Y qué es una inmobiliaria de lujo?</H2>
      <p>
        Aquí va una verdad incómoda del mercado: <em>“de lujo”</em> no significa vender propiedades
        caras. Cualquiera puede publicar un penthouse de un millón de dólares en un portal.
      </p>
      <p>Una verdadera inmobiliaria de lujo se reconoce por otras señales:</p>
      <ul>
        <li>
          <strong>Selección, no catálogo.</strong> No te presenta 200 opciones para ver “cuál te
          late”: estudia el inventario del mercado y te acerca una{' '}
          <Link to={localePath('/propiedades')} className={gold}>
            Selección Premium
          </Link>{' '}
          de propiedades que pasaron sus filtros de plusvalía, calidad del desarrollador y potencial
          real.
        </li>
        <li>
          <strong>Datos antes que discursos.</strong> Te habla de ocupación de la zona, de
          comportamiento histórico de precios, de proyecciones — no solo de la vista y los acabados
          (que también importan, claro).
        </li>
        <li>
          <strong>Discreción y trato personal.</strong> En este segmento, tu tiempo y tu privacidad
          valen tanto como tu dinero.
        </li>
        <li>
          <strong>Acompañamiento completo.</strong> El servicio no termina cuando dices “sí”: ahí es
          exactamente donde empieza.
        </li>
      </ul>
      <p>
        En Cancún y la Riviera Maya —uno de los mercados con mayor plusvalía de Latinoamérica— esta
        diferencia pesa el doble, porque las oportunidades son reales, pero también lo son los
        proyectos que nunca se entregan, los contratos con letras chiquitas y los precios inflados
        para el comprador desinformado.
      </p>

      <H2>El proceso Rivana: así se siente un acompañamiento de verdad</H2>
      <p>
        En Rivana Properties trabajamos como brokers y asesores, no como vendedores. Nuestro proceso
        tiene cuatro pasos, y te los contamos tal como los vivirás:
      </p>

      <H3>1. Primero te escuchamos (la asesoría)</H3>
      <p>
        Antes de enseñarte una sola propiedad, conversamos. ¿Buscas rendimiento por renta
        vacacional? ¿Un lugar para tu retiro? ¿Diversificar tu patrimonio? ¿Cuál es tu horizonte:
        3, 5, 10 años? De esa conversación sale tu perfil de inversión — y de tu perfil sale todo
        lo demás. Comprar al revés (enamorarse primero, pensar después) es el error más caro de
        este mercado.
      </p>

      <H3>2. Te presentamos tu Selección Premium</H3>
      <p>
        Con tu perfil claro, filtramos el mercado por ti: desarrolladores con historial comprobado,
        zonas con plusvalía sostenida, proyectos que corresponden a tu presupuesto y a tu objetivo.
        Recibes pocas opciones, pero todas con sentido — cada una con su análisis de números, no
        solo su folleto.
      </p>

      <H3>3. Negociamos de tu lado</H3>
      <p>
        Aquí es donde un broker se gana su lugar. Conocemos los precios reales de cada zona, sabemos
        qué condiciones se pueden mejorar (plan de pagos, fecha de entrega garantizada,
        penalizaciones) y negociamos con el desarrollador o el vendedor representándote a ti.
        Nuestro trabajo es que cada peso de tu inversión trabaje a tu favor.
      </p>

      <H3>4. Te acompañamos hasta las escrituras (y después)</H3>
      <p>
        Contratos,{' '}
        <Link to={localePath('/journal/fideicomiso-mexico-bank-trust-explained')} className={gold}>
          fideicomiso si eres extranjero
        </Link>
        , aspectos fiscales, escrituración: te acompañamos con nuestro equipo legal y financiero en
        cada firma, explicándote cada documento en un lenguaje que sí se entiende. Y cuando la
        propiedad ya es tuya, seguimos cerca — porque una inversión se cuida en el tiempo, y porque
        muchos de nuestros clientes regresan por la segunda.
      </p>

      <H2>¿Por qué elegir un broker en lugar de ir directo?</H2>
      <p>Es la pregunta lógica, y merece una respuesta honesta:</p>

      <H3>“¿No me sale más barato ir directo con el desarrollador?”</H3>
      <p>
        No — y este es el mito más extendido del sector. El precio de lista es el mismo; la
        diferencia es que solo te van a contar la versión del que vende. Con un broker de tu lado,
        ese mismo precio viene con análisis independiente, comparativa de mercado y negociación
        profesional. En la práctica, el acompañamiento correcto suele ahorrar dinero, no costarlo.
      </p>

      <H3>“¿Y si yo mismo investigo en los portales?”</H3>
      <p>
        Puedes — y de hecho te animamos a informarte todo lo posible (para eso escribimos este
        Journal). Pero los portales muestran inventario, no criterio: no te dicen qué desarrollador
        entrega tarde, qué torre tiene problemas de permisos de renta vacacional, ni qué zona está
        por corregir su precio. Esa información vive en el mercado, no en internet. Nuestro trabajo
        es que tú la tengas antes de firmar. Puedes empezar por nuestra{' '}
        <Link to={localePath('/journal/guia-preventa-cancun-2026')} className={gold}>
          guía de preventa Cancún 2026
        </Link>
        .
      </p>

      <H3>“¿Cómo sé que un broker realmente me representa a mí?”</H3>
      <p>
        Excelente pregunta — hazla siempre. Las señales: te pregunta por tus objetivos antes de
        mostrarte inventario, te presenta análisis con números verificables, te explica también los
        riesgos (no solo las bondades), y no te empuja hacia una decisión que no entiendes. Si un
        asesor te presiona o esquiva tus preguntas, esa es toda la información que necesitas.
      </p>

      <H2>Lo que esto significa para tu inversión</H2>
      <p>
        Cancún no es un mercado para improvisar: es un mercado para invertir con método. La
        combinación de turismo en crecimiento, infraestructura nueva y demanda internacional lo
        vuelve uno de los destinos más atractivos del continente — y precisamente por eso, la
        diferencia entre comprar bien y comprar mal se mide en cifras grandes.
      </p>
      <Callout>
        <p>
          Un broker de lujo no es un gasto ni un intermediario más: es la persona cuyo trabajo es
          que tu decisión esté respaldada por datos, tu contrato esté blindado y tu patrimonio
          crezca como lo planeaste. Tu inversión, tu legado — nosotros solo nos aseguramos de que
          llegue a buen puerto.
        </p>
      </Callout>

      <H2>Preguntas frecuentes</H2>
      <Faq items={faqs} />

      <WhatsAppCta
        title="¿Listo para conocer tu Selección Premium?"
        body="Cuéntanos qué quieres lograr con tu inversión y te decimos, con números sobre la mesa, cómo se ve el camino. Agenda tu asesoría privada por WhatsApp — es el primer paso del proceso, y es sin costo."
        keyword="ASESORÍA"
        message="Quiero agendar una asesoría privada con un broker de Rivana y conocer mi Selección Premium"
        slug={slug}
        waLabel="Agenda tu asesoría por WhatsApp"
        emailLabel="Explora las propiedades"
        emailSubject="[ASESORÍA] Quiero conocer mi Selección Premium en Cancún"
      />
    </JournalBody>
  );
};