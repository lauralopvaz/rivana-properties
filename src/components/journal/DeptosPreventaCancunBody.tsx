import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  JournalBody,
  H2,
  H3,
  Callout,
  JTable,
  Faq,
  WhatsAppCta,
} from './primitives';
import { getArticleFaqs } from '@/data/journal-articles';

/**
 * Body — Departamentos en Preventa en Cancún 2026.
 * Route: /journal/departamentos-en-preventa-cancun
 * ES-only article (no EN slug configured).
 */
export const DeptosPreventaCancunBody = () => {
  const { language, localePath } = useLanguage();
  const slug = 'departamentos-en-preventa-cancun';
  const faqs = getArticleFaqs(slug, language);
  const gold = 'text-[hsl(var(--gold))] hover:underline';

  return (
    <JournalBody>
      <p>
        Comprar un departamento en preventa en Cancún es, hoy por hoy, una de las estrategias más
        eficientes para entrar al mercado inmobiliario de mayor apreciación de México. No es una
        frase de marketing: según el índice de la Sociedad Hipotecaria Federal (SHF), Quintana Roo
        lideró la apreciación nacional de vivienda en 2025 con <strong>+14.3% anual</strong>, muy
        por encima del promedio nacional de ~8.2%, y el municipio de Benito Juárez —donde se ubica
        Cancún— registró <strong>+12.8%</strong> tan solo en el primer trimestre de 2025.
      </p>

      <p>
        En esta guía te explicamos cómo funciona la preventa, cuánto puedes ganar durante la
        construcción, qué riesgos filtrar antes de firmar, y qué oportunidades concretas existen en
        2026 dentro de la Selección Premium de Rivana Properties.
      </p>

      <H2>¿Qué es exactamente comprar en preventa?</H2>
      <p>
        Comprar en preventa significa adquirir un departamento antes de que el edificio esté
        terminado — en fase de lanzamiento, construcción temprana o avanzada. El desarrollador
        financia parte de la obra con esas ventas anticipadas y, a cambio, ofrece dos ventajas que
        no existen en producto terminado:
      </p>
      <p>
        <strong>Precio de lanzamiento.</strong> Las primeras listas de precios de un desarrollo
        suelen ubicarse por debajo del valor de mercado proyectado a la entrega. En un mercado que
        se apreció más de 14% en un año, esa diferencia entre precio de lista inicial y valor de
        entrega es donde vive la plusvalía de preventa.
      </p>
      <p>
        <strong>Planes de pago durante la obra.</strong> En lugar de liquidar el 100% al contado o
        vía hipoteca, el esquema típico en Cancún estructura un enganche (generalmente 20-30%),
        mensualidades durante la construcción y un pago final contra entrega. Esto permite a un
        inversionista apalancar su capital sin intereses bancarios — relevante cuando las tasas
        hipotecarias en México siguen en 10-12% pese al recorte de Banxico a 7% en diciembre de
        2025.
      </p>

      <H2>Los números: por qué la preventa en Cancún funciona en 2026</H2>
      <p>Los motores de la plusvalía en Cancún son estructurales, no especulativos:</p>

      <JTable
        headers={['Motor', 'Qué está pasando en 2026']}
        rows={[
          ['Conectividad', 'Tren Maya y modernización aeroportuaria amplían el alcance turístico y residencial de toda la región.'],
          ['Infraestructura urbana', 'Puente Nichupté y ampliación del Bulevar Colosio redefinen tiempos de traslado y valor de los corredores.'],
          ['Demanda diversificada', '70–75% de las transacciones vienen de compradores nacionales, complementadas por flujo extranjero creciente.'],
          ['Oferta en absorción sana', '~22,000 unidades en pipeline estatal 2025-2026 con inventarios en ciclos de 14 a 18 meses.'],
        ]}
        caption="Motores estructurales del mercado inmobiliario de Cancún, 2026."
      />

      <Callout title="Referencia de precios">
        <p>
          El promedio residencial en Cancún ronda los <strong>USD $2,400/m²</strong>, con la Zona
          Hotelera y frentes de playa entre <strong>USD $3,000 y $4,500/m²</strong>. Un departamento
          comprado en preventa hoy, en un corredor correcto, compite contra esos valores al momento
          de la entrega.
        </p>
      </Callout>

      <H2>Cómo filtrar una preventa segura (la parte que nadie te cuenta)</H2>
      <p>
        La preventa amplifica resultados en ambas direcciones: bien elegida, captura plusvalía; mal
        elegida, congela tu capital. Antes de recomendar cualquier desarrollo, en Rivana aplicamos
        un filtro de cinco puntos que te conviene conocer aunque no compres con nosotros:
      </p>

      <H3>1. Historial del desarrollador</H3>
      <p>
        Proyectos entregados, tiempos reales de entrega vs. prometidos, calidad post-venta. Un
        render no es un currículum.
      </p>

      <H3>2. Estructura legal de tu pago</H3>
      <p>
        Contrato de promesa de compraventa ante notario, idealmente con los pagos protegidos vía
        fideicomiso de administración de la obra.
      </p>

      <H3>3. Situación del suelo</H3>
      <p>
        Verificar que el terreno no sea ejidal sin regularizar y que el proyecto cuente con
        licencias y manifestación de impacto ambiental.
      </p>

      <H3>4. Operador y marca</H3>
      <p>
        Un desarrollo operado por una marca hotelera internacional tiene estándares de construcción
        auditados y un motor de demanda de renta ya integrado.
      </p>

      <H3>5. Tesis de salida</H3>
      <p>
        Antes de comprar debes saber cómo sales: ¿reventa a la entrega, renta vacacional, renta
        anual, uso propio con renta parcial? El departamento correcto depende de esa respuesta.
      </p>

      <H2>La oportunidad insignia de 2026: Mondrian Residences en Grand Island</H2>
      <p>
        Dentro de la Selección Premium de Rivana, la preventa que concentra las tres variables que
        más pesan —ubicación, marca y diseño— es{' '}
        <Link to={localePath('/propiedad/mondrian-residences-grand-island-cancun')} className={gold}>
          Mondrian Residences at Grand Island Cancún
        </Link>
        :
      </p>

      <JTable
        headers={['Variable', 'Detalle']}
        rows={[
          ['Precio de preventa', 'Desde $9,050,000 MXN con planes de pago durante la construcción.'],
          ['Entrega estimada', 'Segundo trimestre de 2027 — ~1 año de obra por delante para capturar apreciación.'],
          ['Operación', 'Accor bajo la marca Mondrian: estándares hoteleros internacionales y canal de huéspedes integrado.'],
          ['Diseño', 'Filipao Nunes — una de las firmas de arquitectura e interiorismo más reconocidas de México.'],
          ['Ubicación', 'Grand Island, el megadesarrollo que redefine el perfil residencial de la Zona Hotelera.'],
        ]}
      />

      <p>
        Para el inversionista que compara: pocas preventas en México combinan marca hotelera global,
        arquitecto de renombre y la zona de mayor apreciación del país en el mismo producto.
      </p>

      <H2>¿Y si soy extranjero? El fideicomiso en 60 segundos</H2>
      <p>
        Si eres comprador extranjero, la ley mexicana te permite adquirir en la zona costera
        mediante un fideicomiso bancario: el banco sostiene el título como fiduciario y tú conservas
        todos los derechos reales — usar, rentar, remodelar, heredar y vender. Es la figura estándar
        desde hace décadas, estable y sin cambios regulatorios en discusión a inicios de 2026.
        Rivana coordina la estructura completa con notarios de confianza como parte de la asesoría.
      </p>

      <H2>Sigue explorando</H2>
      <p>
        Si quieres profundizar, revisa nuestro análisis de{' '}
        <Link to={localePath('/journal/cancun-roi-rental-yield')} className={gold}>
          plusvalía y rendimientos de renta en Cancún 2026
        </Link>{' '}
        y la comparativa de{' '}
        <Link to={localePath('/journal/invertir-en-preventa-cancun-riviera-maya-2026')} className={gold}>
          preventas en Cancún, Puerto Cancún y la Riviera Maya
        </Link>
        . También puedes explorar el listado completo de preventas en{' '}
        <Link to={localePath('/cancun/puerto-cancun/preventa')} className={gold}>
          Puerto Cancún
        </Link>{' '}
        y las oportunidades del{' '}
        <Link to={localePath('/zona-hotelera/edificio-salvia')} className={gold}>
          Edificio Salvia
        </Link>{' '}
        o{' '}
        <Link to={localePath('/costa-mujeres/la-amada')} className={gold}>
          La Amada Residence
        </Link>
        .
      </p>

      <H2>Preguntas frecuentes sobre preventa en Cancún</H2>
      <Faq items={faqs} />

      <WhatsAppCta
        title="Da el siguiente paso con información real"
        body="Los departamentos en preventa en Cancún se mueven por listas de precios que suben conforme avanza la obra: la unidad que hoy está disponible en cierto nivel y vista, en tres meses cuesta más o ya no existe. Solicita hoy la lista de unidades disponibles y precios vigentes de Mondrian Residences y de toda la Selección Premium de preventas de Rivana — plantas, niveles, esquemas de pago y análisis comparativo de plusvalía por corredor."
        keyword="PREVENTA"
        message="Quiero la lista de unidades y precios vigentes de la Selección Premium de preventas en Cancún"
        slug={slug}
        waLabel="WhatsApp — escribe PREVENTA"
        emailLabel="Agendar videollamada"
        emailSubject="[PREVENTA] Videollamada — Selección Premium de preventas Cancún"
      />
    </JournalBody>
  );
};