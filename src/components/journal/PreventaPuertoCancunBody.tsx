import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { JournalBody, H2, Callout, JTable, Faq, WhatsAppCta } from './primitives';
import { getArticleFaqs } from '@/data/journal-articles';

/**
 * Body — Preventa en Puerto Cancún.
 * Route: /journal/preventa-puerto-cancun
 * ES-only Tier-1 transactional article.
 */
export const PreventaPuertoCancunBody = () => {
  const { language, localePath } = useLanguage();
  const slug = 'preventa-puerto-cancun';
  const faqs = getArticleFaqs(slug, language);
  const gold = 'text-[hsl(var(--gold))] hover:underline';

  return (
    <JournalBody>
      <p>
        Puerto Cancún es un caso único en el Caribe mexicano: una comunidad master-planned de casi
        800 hectáreas dentro de la ciudad, con marina privada, campo de golf de campeonato diseñado
        por Tom Weiskopf, centro comercial de lujo (Marina Town Center), acceso controlado y frente
        de playa propio — a diez minutos del centro y a veinte del aeropuerto. No es una promesa de
        desarrollo futuro: es un ecosistema terminado y en operación, donde las preventas que van
        quedando compiten por el suelo residencial más escaso de Cancún.
      </p>
      <p>
        Si estás evaluando una preventa en Puerto Cancún, esta guía te explica por qué el corredor
        sostiene los tickets más altos de la ciudad, cómo funciona comprar en preventa dentro de la
        comunidad, y cómo acceder a la disponibilidad real — que rara vez llega completa a los
        portales públicos.
      </p>

      <H2>Qué hace diferente a Puerto Cancún</H2>
      <JTable
        headers={['Atributo', 'Por qué importa']}
        rows={[
          ['Escasez planificada', 'A diferencia de los corredores de expansión, Puerto Cancún tiene un plan maestro cerrado: cuando el suelo residencial se agote, no habrá más. Cada torre nueva se construye sobre un inventario de tierra decreciente — soporte de valor de largo plazo.'],
          ['Ecosistema de lujo operando', 'Marina con acceso directo al mar, golf, retail premium, restaurantes, torres residenciales consolidadas y seguridad perimetral. El comprador no apuesta a que la zona "se haga": entra a una comunidad que ya funciona.'],
          ['Corredor de tickets altos', 'Las propiedades premium parten cerca de USD $800,000 y escalan con vista a marina, golf o mar. Benito Juárez creció +12.8% en Q1 2026 (SHF) y Quintana Roo lideró el país con +14.3% anual — el segmento de lujo ha sido beneficiario directo.'],
          ['Conectividad en mejora', 'La ampliación del Bulevar Colosio y el Puente Nichupté están reconfigurando la movilidad del frente norte, del cual Puerto Cancún es el ancla de lujo.'],
        ]}
      />

      <H2>Por qué comprar en preventa dentro de Puerto Cancún</H2>
      <p>
        La lógica de preventa —precio de lanzamiento, plan de pagos durante obra, captura de
        plusvalía a la entrega— se amplifica en un corredor de suelo finito:
      </p>
      <JTable
        headers={['#', 'Ventaja']}
        rows={[
          ['1', 'Listas de precios ascendentes por diseño. Los desarrolladores escalonan precios conforme avanza la obra y se agota cada torre. Entrar temprano en la torre correcta es la diferencia de doble dígito a la entrega.'],
          ['2', 'Apalancamiento sin banco. Enganche típico de 20-30% y mensualidades durante construcción, sin intereses — relevante con hipotecas mexicanas en 10-12% pese al recorte de Banxico a 7% (diciembre 2026).'],
          ['3', 'Demanda de reventa y renta asegurada por el ecosistema. Las torres terminadas mantienen demanda constante de compra y renta de largo plazo de ejecutivos y residentes de alto perfil.'],
          ['4', 'Perfil de vecindario protegido. El plan maestro regula densidades, alturas y usos: la inversión no convive con la incertidumbre de qué construirán junto a tu torre.'],
        ]}
      />

      <H2>Producto disponible: qué se está vendiendo en 2026</H2>
      <p>El inventario activo de Puerto Cancún combina tres tipos de producto:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Preventas de torres nuevas:</strong> unidades de 1 a 3 recámaras y penthouses, con
          listas de precios por nivel y vista (marina, golf, laguna o mar). Es el producto con mejor
          relación precio de entrada / valor de entrega.
        </li>
        <li>
          <strong>Unidades de estreno en torres recién entregadas:</strong> para quien quiere la
          ecuación de producto nuevo sin esperar la construcción.
        </li>
        <li>
          <strong>Reventas selectas en torres consolidadas</strong> (el portafolio de Rivana incluye
          unidades en desarrollos de la zona norte y torres de marina): entrada inmediata al
          corredor, a veces con ventaja de precio frente al producto nuevo equivalente.
        </li>
      </ul>
      <Callout>
        <p>
          La disponibilidad real cambia semana a semana — las unidades con mejor vista y nivel se
          reservan primero y las listas de precios se actualizan al alza conforme avanza cada obra.
          Por eso el primer paso correcto no es un portal: es{' '}
          <Link to={localePath('/cancun/puerto-cancun')} className={gold}>
            pedir la disponibilidad vigente
          </Link>
          .
        </p>
      </Callout>

      <H2>Comprador extranjero: el fideicomiso también aplica aquí</H2>
      <p>
        Puerto Cancún está dentro de la zona restringida (50 km de costa), donde los extranjeros
        adquieren mediante <strong>fideicomiso bancario</strong>: el banco sostiene el título como
        fiduciario y tú conservas todos los derechos reales — uso, renta, herencia y venta. Es la
        figura estándar, estable desde hace décadas y sin cambios regulatorios en discusión a inicios
        de 2026. Rivana coordina notario, fideicomiso y due diligence, con proceso completo en
        inglés o español y opción de cierre remoto por poder notarial.
      </p>

      <H2>Cómo evaluamos una preventa antes de recomendarla</H2>
      <p>
        Nuestro filtro de Selección Premium aplica cinco verificaciones antes de que un desarrollo
        de Puerto Cancún llegue a tu shortlist:
      </p>
      <JTable
        headers={['#', 'Verificación']}
        rows={[
          ['1', 'Historial de entregas del desarrollador dentro y fuera de la comunidad.'],
          ['2', 'Estructura legal de tus pagos (contrato ante notario; idealmente fideicomiso de administración de obra).'],
          ['3', 'Licencias y cumplimiento del plan maestro.'],
          ['4', 'Posición de la torre dentro de la comunidad: vista, orientación, cercanía a amenidades — las variables que determinan la reventa.'],
          ['5', 'Tesis de salida: reventa a la entrega, renta de largo plazo o uso propio; el producto correcto depende de tu respuesta.'],
        ]}
      />

      <p>
        Para ampliar la lógica de preventa, revisa la{' '}
        <Link to={localePath('/journal/departamentos-en-preventa-cancun')} className={gold}>
          guía de departamentos en preventa en Cancún
        </Link>{' '}
        y el marco de{' '}
        <Link to={localePath('/journal/invertir-en-bienes-raices-cancun')} className={gold}>
          inversión en bienes raíces en Cancún
        </Link>
        .
      </p>

      <H2>Preguntas frecuentes sobre preventa en Puerto Cancún</H2>
      <Faq items={faqs} />

      <WhatsAppCta
        title="Accede a la disponibilidad real de Puerto Cancún"
        body="Las mejores unidades de este corredor se colocan por relación directa, antes de llegar a portales. Rivana mantiene la Selección Premium de Puerto Cancún actualizada semana a semana: preventas activas con listas de precios vigentes, unidades de estreno y reventas selectas. Escribe PUERTO CANCÚN por WhatsApp y recibe hoy la disponibilidad real del corredor: torres, plantas, niveles, vistas y esquemas de pago. ¿Quieres comparar corredores antes de decidir? Agenda una videollamada de 30 minutos y te presentamos el comparativo Puerto Cancún vs. Zona Hotelera vs. Costa Mujeres con números de plusvalía por zona."
        keyword="PUERTO CANCÚN"
        message="Quiero la Selección Premium y la disponibilidad vigente de preventas en Puerto Cancún"
        slug={slug}
        waLabel="WhatsApp — escribe PUERTO CANCÚN"
        emailLabel="Agendar videollamada comparativa"
        emailSubject="[PUERTO CANCÚN] Disponibilidad vigente y comparativo de corredores"
      />
    </JournalBody>
  );
};