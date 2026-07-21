import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { JournalBody, H2, Callout, JTable, Faq, WhatsAppCta } from './primitives';
import { getArticleFaqs } from '@/data/journal-articles';

/**
 * Body — Plusvalía en Cancún 2026.
 * Route: /journal/plusvalia-en-cancun-2026
 * ES-only Tier-1 informational article.
 */
export const PlusvaliaCancun2026Body = () => {
  const { language, localePath } = useLanguage();
  const slug = 'plusvalia-en-cancun-2026';
  const faqs = getArticleFaqs(slug, language);
  const gold = 'text-[hsl(var(--gold))] hover:underline';

  return (
    <JournalBody>
      <p>
        "Cancún tiene mucha plusvalía" es la frase más repetida —y menos sustentada— del marketing
        inmobiliario mexicano. Este artículo hace lo contrario: toma los datos oficiales del índice
        de precios de la Sociedad Hipotecaria Federal (SHF), los motores verificables de valor y la
        lógica de cada corredor, para responder las tres preguntas que importan a un comprador en
        2026: <strong>cuánto se está apreciando Cancún realmente, por qué, y en qué zonas y
        productos se concentra la plusvalía que viene.</strong>
      </p>

      <H2>Los números oficiales: qué dice el índice SHF</H2>
      <p>
        La SHF es el organismo federal que mide la evolución de precios de vivienda en México con
        base en avalúos. Sus datos más recientes son contundentes:
      </p>
      <JTable
        headers={['Indicador oficial', 'Dato']}
        rows={[
          ['Quintana Roo — apreciación anual 2026', '+14.3% (la mayor de todos los estados; promedio nacional ~8.2%)'],
          ['Benito Juárez (Cancún) — 1T 2026', '+12.8% (arriba de Guadalajara +9.8%, Querétaro +6.7%, Valle de México +5.3%)'],
          ['Consistencia plurianual', '+11.8% a +13.4% en 2023-2024 — tres años de tendencia, no un pico aislado'],
          ['Precio residencial promedio Cancún', '~USD $2,400/m²'],
          ['Zona Hotelera y frentes de playa', 'USD $3,000 a $4,500/m²'],
          ['Corredores emergentes', '~USD $1,800 a $2,500/m²'],
        ]}
      />
      <p>
        Ese diferencial entre corredores es el mapa donde se juega la plusvalía.
      </p>

      <H2>Los cinco motores del valor (verificables, no promesas)</H2>
      <JTable
        headers={['Motor', 'Qué aporta']}
        rows={[
          ['1. Infraestructura de conectividad regional', 'El Tren Maya integró la península y la modernización aeroportuaria amplió la capacidad del segundo aeropuerto más transitado de México. Más accesibilidad = más demanda de fondo.'],
          ['2. Obra urbana que reconfigura la ciudad', 'El Puente Nichupté —conexión directa del centro a la Zona Hotelera— y la ampliación del Bulevar Colosio están cambiando tiempos de traslado. La regla histórica: el valor sigue a la conectividad.'],
          ['3. Demanda profunda y diversificada', '70-75% de las transacciones de Quintana Roo son de compradores nacionales (Monterrey, Guadalajara, Bajío). Se suma el capital extranjero: los snowbirds canadienses eligiendo destinos fuera de EE.UU. casi se duplicó (12% → 23%, Snowbird Advisor).'],
          ['4. Absorción sana de la oferta nueva', 'Pipeline estatal de ~22,000 unidades para 2026-2026 con ciclos de inventario de 14-18 meses. Hay oferta nueva sin sobreoferta que erosione precios.'],
          ['5. Costo de capital descendente', 'Banxico recortó su tasa a 7% en diciembre de 2026. La dirección del ciclo amplía gradualmente la base de compradores nacionales — más demanda futura para el activo que compres hoy.'],
        ]}
      />

      <H2>El mapa de la plusvalía por corredor</H2>
      <JTable
        headers={['Corredor', 'Tesis de plusvalía']}
        rows={[
          ['Zona Hotelera', 'Plusvalía por escasez absoluta. No se puede fabricar más barra entre laguna y mar. El producto nuevo (Grand Island) y las unidades con capacidad legal de renta vacacional concentran la prima. Perfil: flujo vacacional + apreciación defensiva.'],
          ['Puerto Cancún', 'Plusvalía por plan maestro finito. Marina y golf con inventario de suelo decreciente y tickets desde ~USD $800,000. Cada torre nueva consume tierra que no se repone. Perfil: lujo patrimonial con reventa protegida.'],
          ['Costa Mujeres', 'Plusvalía por consolidación. La infraestructura hotelera de gran lujo ya opera; el residencial la está alcanzando. Mayor recorrido de precio relativo en 2026. Perfil: horizonte 3-7 años, apreciación como tesis principal.'],
          ['Corredores urbanos (Huayacán, Colosio)', 'Plusvalía por conectividad. Precios de entrada desde ~USD $200,000 y el efecto directo de las obras viales. Perfil: entrada accesible con motor de infraestructura.'],
        ]}
      />
      <p>
        Profundiza en cada tesis:{' '}
        <Link to={localePath('/journal/preventa-puerto-cancun')} className={gold}>
          preventa en Puerto Cancún
        </Link>
        ,{' '}
        <Link to={localePath('/journal/departamentos-en-venta-costa-mujeres')} className={gold}>
          departamentos en venta en Costa Mujeres
        </Link>{' '}
        y{' '}
        <Link to={localePath('/journal/departamentos-en-preventa-cancun')} className={gold}>
          departamentos en preventa Cancún
        </Link>
        .
      </p>

      <H2>Cómo se captura la plusvalía (no basta con "estar" en Cancún)</H2>
      <p>
        La apreciación estatal es el promedio; tu resultado depende de tres decisiones:
      </p>
      <JTable
        headers={['Decisión', 'Impacto en tu plusvalía']}
        rows={[
          ['1. El vehículo: la preventa amplifica', 'Comprar en precio de lanzamiento durante la construcción convierte la apreciación del mercado en apreciación sobre tu precio de entrada, con planes de pago sin intereses bancarios. Es la mecánica detrás de Mondrian Residences at Grand Island (desde $9,050,000 MXN, entrega Q2 2027, operación Accor, diseño Filipao Nunes).'],
          ['2. La unidad dentro del desarrollo', 'Nivel, vista y tipología determinan la reventa. Dos unidades del mismo edificio pueden apreciarse a ritmos distintos; la selección fina es donde un asesor con acceso a disponibilidad real agrega valor medible.'],
          ['3. La capacidad de producir mientras esperas', 'Una unidad que renta —vacacional con permisos (como los penthouses de Salvia en la Zona Hotelera) o largo plazo— suma flujo a la apreciación. Los rendimientos brutos de renta en México promedian ~6% anual (Global Property Guide, dic. 2026); la vacacional bien operada puede superarlo.'],
        ]}
      />
      <Callout title="El retorno total">
        <p>
          El retorno de una inversión inmobiliaria en Cancún es la suma de dos líneas —apreciación y
          flujo de renta—. Optimizar una sola es dejar la mitad del resultado sobre la mesa.
        </p>
      </Callout>

      <H2>Lo que un análisis serio también te dice: los riesgos</H2>
      <JTable
        headers={['Riesgo', 'Qué implica']}
        rows={[
          ['La plusvalía pasada no garantiza la futura', '+14.3% es un dato de 2026, no una promesa de 2026. Los motores estructurales sugieren continuidad; ningún analista honesto firma un porcentaje.'],
          ['No todo Cancún se aprecia igual', 'El promedio estatal esconde corredores extraordinarios y zonas planas. Comprar "en Cancún" no es una tesis; comprar en el corredor correcto, sí.'],
          ['El desarrollador importa tanto como la zona', 'Una preventa mal estructurada puede congelar tu capital. Historial de entregas, contrato ante notario, licencias y situación del suelo: el filtro de cinco puntos de la Selección Premium de Rivana existe por esto.'],
          ['La renta exige regla', 'Impuesto al hospedaje, registro estatal y reglamento del condominio. La unidad "ideal para Airbnb" sin permisos es un pasivo disfrazado.'],
        ]}
      />

      <H2>Preguntas frecuentes</H2>
      <Faq items={faqs} />

      <WhatsAppCta
        title="Convierte los datos en una decisión"
        body='La plusvalía de Cancún no se captura leyendo artículos: se captura eligiendo el corredor, el desarrollo y la unidad correcta con información de primera mano. Escribe "PLUSVALÍA" por WhatsApp y solicita el análisis de plusvalía por corredor de Rivana (2026): datos SHF por zona, precios vigentes de la Selección Premium —Mondrian Residences, Salvia, La Amada y Puerto Cancún— y el comparativo para tu presupuesto. ¿Prefieres conversarlo? Agenda una videollamada de 30 minutos y define tu tesis con números sobre la mesa.'
        keyword="PLUSVALÍA"
        message="Quiero el análisis de plusvalía por corredor de Rivana (2026) con datos SHF y comparativo por presupuesto"
        slug={slug}
        waLabel="WhatsApp — escribe PLUSVALÍA"
        emailLabel="Agendar videollamada"
        emailSubject="[PLUSVALÍA] Análisis por corredor Cancún 2026"
      />
    </JournalBody>
  );
};