import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { JournalBody, H2, H3, Callout, JTable, Faq, WhatsAppCta } from './primitives';
import { getArticleFaqs } from '@/data/journal-articles';

/**
 * Body — Invertir en Bienes Raíces en Cancún.
 * Route: /journal/invertir-en-bienes-raices-cancun
 * ES-only Tier-1 transactional article.
 */
export const InvertirBienesRaicesCancunBody = () => {
  const { language, localePath } = useLanguage();
  const slug = 'invertir-en-bienes-raices-cancun';
  const faqs = getArticleFaqs(slug, language);
  const gold = 'text-[hsl(var(--gold))] hover:underline';

  return (
    <JournalBody>
      <p>
        Invertir en bienes raíces en Cancún dejó de ser una corazonada para convertirse en una tesis
        respaldada por datos oficiales. En 2025, Quintana Roo registró la mayor apreciación de
        vivienda de todo México: <strong>+14.3% anual</strong> según el índice de la Sociedad
        Hipotecaria Federal, frente a un promedio nacional de ~8.2%. No fue un año atípico: el estado
        encadenó incrementos de doble dígito en 2023 y 2024 (+11.8% a +13.4%), impulsado por
        infraestructura y demanda real.
      </p>
      <p>
        Esta guía está escrita para el inversionista que quiere entender el mercado antes de firmar:
        los motores del valor, las estrategias disponibles, los números honestos de rentabilidad, la
        fiscalidad básica y el proceso concreto para empezar.
      </p>

      <H2>La tesis de inversión: cuatro motores estructurales</H2>
      <p>
        <strong>1. Infraestructura que redefine el mapa.</strong> El Tren Maya conectó la península;
        la modernización aeroportuaria amplió la capacidad de llegada; y dentro de Cancún, el Puente
        Nichupté (acceso directo del centro a la Zona Hotelera) y la ampliación del Bulevar Colosio
        están revalorizando los corredores que conectan. La historia inmobiliaria es consistente: la
        infraestructura precede a la plusvalía.
      </p>
      <p>
        <strong>2. Demanda diversificada, no dependiente de un solo comprador.</strong> Entre 70% y
        75% de las transacciones en Quintana Roo son de compradores nacionales —Monterrey,
        Guadalajara, Bajío— que compran para patrimonio, retiro o renta de largo plazo. A eso se suma
        el capital extranjero, con una novedad 2025-2026: el giro de los snowbirds canadienses hacia
        México (la proporción que eligió destinos fuera de EE.UU. casi se duplicó, del 12% al 23%,
        según Snowbird Advisor), documentado por CBC y The Globe and Mail. Un mercado con múltiples
        perfiles de demanda es un mercado con liquidez de salida.
      </p>
      <p>
        <strong>3. Escasez donde importa.</strong> El pipeline estatal de ~22,000 unidades para
        2025-2026 se concentra en corredores de expansión; el suelo premium —Zona Hotelera, Puerto
        Cancún, primera línea de Costa Mujeres— es finito. La absorción estatal mantiene ciclos de
        inventario de 14-18 meses: profundidad sin saturación.
      </p>
      <p>
        <strong>4. Costo de capital a la baja.</strong> Banxico recortó su tasa a 7% en diciembre de
        2025. Las hipotecas mexicanas siguen en 10-12%, por lo que el esquema dominante para
        inversionistas sigue siendo preventa con planes de pago del desarrollador — apalancamiento
        sin intereses bancarios.
      </p>

      <H2>Las tres estrategias (y qué perfil corresponde a cada una)</H2>

      <H3>Estrategia A: Preventa para captura de plusvalía</H3>
      <p>
        Compras en precio de lanzamiento durante la construcción y capturas la apreciación hasta la
        entrega, con opción de reventa por cesión de derechos o de conservar y rentar. Horizonte:
        18-36 meses. Perfil: inversionista de crecimiento con liquidez para enganche del 20-30%.
      </p>
      <p>
        <strong>Match en el portafolio Rivana:</strong>{' '}
        <Link to={localePath('/propiedad/mondrian-residences-grand-island-cancun')} className={gold}>
          Mondrian Residences at Grand Island
        </Link>{' '}
        (desde $9,050,000 MXN, entrega Q2 2027, operación Accor, diseño Filipao Nunes) — la preventa
        de marca más completa del corredor.
      </p>

      <H3>Estrategia B: Renta vacacional (STR) para flujo</H3>
      <p>
        Compras producto terminado con capacidad legal de operar en plataformas tipo Airbnb y generas
        flujo desde el primer mes. La variable eliminatoria: los permisos, que no todos los edificios
        tienen. Horizonte: flujo inmediato + apreciación de fondo. Perfil: inversionista de ingresos.
      </p>
      <p>
        <strong>Match en el portafolio Rivana:</strong> los penthouses del{' '}
        <Link to={localePath('/zona-hotelera/edificio-salvia')} className={gold}>
          Edificio Salvia
        </Link>{' '}
        en la Zona Hotelera, con permisos de renta vacacional vigentes — un activo genuinamente
        escaso.
      </p>

      <H3>Estrategia C: Patrimonial de largo plazo</H3>
      <p>
        Compras en corredores en consolidación —Costa Mujeres es el caso 2026— donde el producto
        nuevo de lujo todavía tiene recorrido de precio, para uso mixto (disfrute + renta) y
        herencia. Horizonte: 5+ años. Perfil: patrimonio familiar y retiro.
      </p>
      <p>
        <strong>Match en el portafolio Rivana:</strong>{' '}
        <Link to={localePath('/costa-mujeres/la-amada')} className={gold}>
          La Amada Residence
        </Link>{' '}
        en Costa Mujeres, con múltiples unidades disponibles, y desarrollos seleccionados del
        portafolio como Bay View Grand, SLS Ocean Beach o The Reserve at Mayakoba según tu zona
        objetivo.
      </p>

      <H2>Rentabilidad: los números sin inflar</H2>
      <p>
        Seamos directos, porque es lo que distingue a un asesor de un vendedor: los rendimientos
        brutos de renta en México promedian <strong>~6% anual</strong> (Global Property Guide,
        diciembre 2025). La renta vacacional bien operada en corredores turísticos puede superar ese
        promedio — pero "bien operada" significa permisos en regla, pricing dinámico, operación
        profesional y cumplimiento fiscal (registro estatal e impuesto al hospedaje en Quintana Roo).
      </p>
      <p>
        El retorno total de una inversión en Cancún se compone de dos líneas:{' '}
        <strong>flujo de renta + apreciación del activo</strong>. Con la apreciación estatal de 2025
        en +14.3% y rentas brutas en el rango de mercado, el retorno combinado de una unidad correcta
        compite con casi cualquier clase de activo en México — pero la palabra clave es "correcta".
        Por eso en Rivana no publicamos porcentajes promocionales: construimos el análisis financiero
        de la unidad específica, con escenarios conservador, base y optimista, antes de que decidas.
      </p>

      <H2>Fiscalidad y estructura: lo básico que debes prever</H2>
      <JTable
        headers={['Concepto', 'Qué debes prever']}
        rows={[
          ['Extranjeros en zona costera', 'Compra vía fideicomiso bancario (título en banco fiduciario, todos los derechos para ti) o mediante sociedad mexicana si el objetivo es inversión en escala. Marco estable, sin cambios en discusión a inicios de 2026.'],
          ['Costos de adquisición', 'Gastos de cierre y notario, ISAI (impuesto de adquisición), y cuota anual del fideicomiso en su caso.'],
          ['Tenencia', 'Predial notablemente bajo (típicamente 0.1-0.2% del valor catastral).'],
          ['Rentas', 'Los ingresos por hospedaje tributan en México; operar en regla protege el activo y su valor de reventa.'],
          ['Venta', 'El ISR sobre ganancia de capital tiene reglas y exenciones específicas que conviene planear desde la compra.'],
        ]}
      />
      <Callout>
        <p>
          Rivana no sustituye a tu contador: te conecta con especialistas fiscales —incluyendo casos
          transfronterizos con Canadá y EE.UU.— y estructura la compra de forma coherente con tu
          plan.
        </p>
      </Callout>

      <H2>El proceso para empezar, paso a paso</H2>
      <JTable
        headers={['Paso', 'Qué sucede']}
        rows={[
          ['1. Llamada de descubrimiento (30 min)', 'Definimos tu tesis — plusvalía, flujo o patrimonial — presupuesto y horizonte.'],
          ['2. Selección Premium', 'Recibes un shortlist de unidades reales y disponibles que corresponden a tu perfil, con análisis financiero de cada una.'],
          ['3. Visita presencial o virtual', 'Recorridos en sitio o por video para compradores remotos.'],
          ['4. Due diligence y estructura legal', 'Verificación del inmueble, contrato, notario y fideicomiso si aplica.'],
          ['5. Cierre y post-venta', 'Entrega, y si tu estrategia es renta, administración profesional de la unidad mientras tú estás en otra ciudad o país.'],
        ]}
      />

      <H2>Preguntas frecuentes del inversionista</H2>
      <Faq items={faqs} />

      <WhatsAppCta
        title="Empieza con un análisis, no con un folleto"
        body="La diferencia entre invertir bien y comprar por impulso es información específica: qué unidad, en qué corredor, con qué números y con qué salida. Escribe INVERSIÓN por WhatsApp y agenda tu llamada de descubrimiento. En 30 minutos tendrás claridad sobre tu tesis y un shortlist inicial de la Selección Premium con números reales. ¿Prefieres empezar por escrito? Solicita el panorama de inversión Cancún 2026 de Rivana — apreciación por corredor, tickets de entrada y esquemas de pago vigentes."
        keyword="INVERSIÓN"
        message="Quiero agendar la llamada de descubrimiento y recibir la Selección Premium de inversión en Cancún"
        slug={slug}
        waLabel="WhatsApp — escribe INVERSIÓN"
        emailLabel="Solicitar panorama 2026"
        emailSubject="[INVERSIÓN] Panorama Cancún 2026 — Rivana"
      />
    </JournalBody>
  );
};