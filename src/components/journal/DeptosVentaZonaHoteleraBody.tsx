import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { JournalBody, H2, Callout, JTable, Faq, WhatsAppCta } from './primitives';
import { getArticleFaqs } from '@/data/journal-articles';

/**
 * Body — Departamentos en Venta en la Zona Hotelera de Cancún.
 * Route: /journal/departamentos-en-venta-zona-hotelera-cancun
 * ES-only Tier-1 transactional article.
 */
export const DeptosVentaZonaHoteleraBody = () => {
  const { language, localePath } = useLanguage();
  const slug = 'departamentos-en-venta-zona-hotelera-cancun';
  const faqs = getArticleFaqs(slug, language);
  const gold = 'text-[hsl(var(--gold))] hover:underline';

  return (
    <JournalBody>
      <p>
        La Zona Hotelera de Cancún es el kilómetro cuadrado inmobiliario más codiciado del Caribe
        mexicano. Una franja de 22 kilómetros entre la Laguna Nichupté y el mar Caribe donde se
        concentran las playas más famosas del país, la infraestructura turística más consolidada de
        Latinoamérica y —lo que importa si estás leyendo esto— los departamentos con mayor demanda
        de compra y renta de todo Quintana Roo.
      </p>
      <p>
        Si buscas departamentos en venta en la Zona Hotelera de Cancún, esta guía te da el panorama
        completo: precios reales por metro cuadrado, qué tipo de producto existe, cómo funciona la
        compra si eres extranjero, y qué oportunidades concretas mantiene disponibles Rivana
        Properties en este momento.
      </p>

      <H2>Por qué la Zona Hotelera es el destino #1</H2>
      <p>
        Hay una razón por la que el suelo aquí no se compara con ningún otro corredor de la ciudad:{' '}
        <strong>no se puede fabricar más</strong>. La geografía de la barra —laguna de un lado, mar
        del otro— limita físicamente la oferta, mientras la demanda crece por tres vías simultáneas:
      </p>

      <JTable
        headers={['Motor', 'Qué está pasando en 2026']}
        rows={[
          ['Turismo estructural', 'Cancún opera el segundo aeropuerto más transitado de México, con conectividad directa a Norteamérica, Europa y Sudamérica.'],
          ['Apreciación líder', 'SHF: Quintana Roo lideró la apreciación nacional en 2025 (+14.3% anual); Benito Juárez creció +12.8% en Q1.'],
          ['Infraestructura nueva', 'El Puente Nichupté conectará el centro con la Zona Hotelera y descongestionará el acceso al corredor.'],
        ]}
      />

      <H2>Precios 2026: cuánto cuesta un departamento en la Zona Hotelera</H2>
      <p>
        Con base en los análisis de mercado más recientes, los precios residenciales en Cancún
        promedian USD $2,400/m², pero la Zona Hotelera opera en su propio rango:{' '}
        <strong>entre USD $3,000 y $4,500 por metro cuadrado</strong>, con productos frente al mar y
        penthouses superando ese techo. En tickets totales, el mercado se estratifica así:
      </p>

      <JTable
        headers={['Segmento', 'Rango de precio']}
        rows={[
          ['Departamentos 1-2 recámaras en torres consolidadas', 'Desde ~USD $350,000-600,000 según vista, antigüedad y amenidades.'],
          ['Producto nuevo y preventas de marca', 'Desde ~$9,050,000 MXN en desarrollos como Mondrian Residences at Grand Island.'],
          ['Penthouses y frentes de playa', 'Desde USD $1M en adelante, con la escasez como principal soporte de valor.'],
        ]}
        caption="Rangos referenciales de venta, Zona Hotelera de Cancún, 2026."
      />

      <Callout title="La variable que más mueve el precio">
        <p>
          Dentro del corredor no es solo la vista: es la <strong>capacidad legal de rentar en
          plataformas vacacionales</strong>, que no todos los edificios permiten. Sobre eso, sigue
          leyendo.
        </p>
      </Callout>

      <H2>El activo más escaso: departamentos con permiso de renta vacacional</H2>
      <p>
        Aquí está el secreto que separa a un departamento "bonito" de un activo que produce: en la
        Zona Hotelera, la renta vacacional está regulada y{' '}
        <strong>no todos los condominios cuentan con permisos para operar en plataformas como
        Airbnb</strong>. Los reglamentos internos de muchos edificios la prohíben, y la normativa
        estatal exige registro y pago del impuesto al hospedaje.
      </p>
      <p>
        Eso convierte a las unidades con permisos vigentes en un nicho con demanda de inversionistas
        muy superior a su oferta. Dentro de la Selección Premium de Rivana destacan los{' '}
        <Link to={localePath('/zona-hotelera/edificio-salvia')} className={gold}>
          penthouses del Edificio Salvia
        </Link>
        : tres unidades en la Zona Hotelera <strong>con permisos de renta vacacional vigentes</strong>,
        listas para operar desde el día uno. Para el inversionista que busca flujo inmediato en el
        corredor de mayor tarifa por noche de México, es de lo más eficiente que existe en el mercado
        actual. Profundizamos en este nicho en nuestra{' '}
        <Link to={localePath('/journal/luxury-condos-zona-hotelera-cancun-2026-guide')} className={gold}>
          guía de condominios de lujo en la Zona Hotelera
        </Link>
        .
      </p>

      <H2>Preventa de marca: la otra vía de entrada al corredor</H2>
      <p>
        Si tu horizonte es de mediano plazo y prefieres precio de lanzamiento sobre flujo inmediato,
        la vía es la preventa dentro del corredor. La referencia 2026 es{' '}
        <Link to={localePath('/propiedad/mondrian-residences-grand-island-cancun')} className={gold}>
          Mondrian Residences at Grand Island Cancún
        </Link>
        : preventa desde $9,050,000 MXN, entrega estimada en el segundo trimestre de 2027, operación
        de la marca Mondrian por Accor y diseño de Filipao Nunes. Comprar durante la construcción en
        la zona de mayor apreciación del país es la combinación que los inversionistas sofisticados
        buscan — y la razón por la que las listas de precios de este proyecto han subido desde su
        lanzamiento. Si quieres el panorama completo del formato, revisa nuestra{' '}
        <Link to={localePath('/journal/departamentos-en-preventa-cancun')} className={gold}>
          guía de departamentos en preventa en Cancún
        </Link>
        .
      </p>

      <H2>¿Extranjero comprando en la Zona Hotelera? Así funciona</H2>
      <p>
        Toda la Zona Hotelera está dentro de la "zona restringida" constitucional (50 km de costa),
        donde los extranjeros compran mediante <strong>fideicomiso bancario</strong>: el banco
        sostiene el título como fiduciario y tú, como beneficiario, conservas todos los derechos —
        uso, renta, remodelación, herencia y venta. Es la figura estándar desde hace décadas, sin
        cambios regulatorios en el horizonte 2026. Presupuesta gastos de cierre y notario, la cuota
        anual del fideicomiso y un predial notablemente bajo (típicamente 0.1-0.2% del valor
        catastral).
      </p>
      <p>
        Rivana coordina todo el proceso —notario, fideicomiso, due diligence del inmueble— en
        español o inglés, incluyendo compradores remotos que cierran sin viajar mediante poder
        notarial.
      </p>

      <H2>Renta vacacional en la Zona Hotelera: números honestos</H2>
      <p>
        Los rendimientos brutos de renta en México promedian ~6% anual según Global Property Guide
        (diciembre 2025). La Zona Hotelera, por tarifa por noche y ocupación turística, puede
        superar ese promedio en unidades bien operadas — pero el resultado real depende de cuatro
        variables que analizamos unidad por unidad antes de que compres:
      </p>

      <JTable
        headers={['Variable', 'Por qué importa']}
        rows={[
          ['1. Permisos y reglamento del condominio', 'La variable eliminatoria. Sin permisos, el modelo financiero cambia por completo.'],
          ['2. Temporalidad', 'Alta temporada muy fuerte (diciembre-abril) y valles que el modelo financiero debe absorber.'],
          ['3. Operación profesional', 'Limpieza, pricing dinámico, atención a huéspedes. Rivana ofrece administración post-venta para no residentes.'],
          ['4. Cumplimiento fiscal', 'Registro estatal, impuesto al hospedaje y régimen fiscal correcto. Operar en regla es rentable.'],
        ]}
      />

      <p>
        Por eso no publicamos porcentajes genéricos de retorno: preparamos el análisis financiero de
        la unidad específica que te interesa, con escenarios conservador, base y optimista.
      </p>

      <H2>Preguntas frecuentes</H2>
      <Faq items={faqs} />

      <WhatsAppCta
        title="Accede a la disponibilidad real del corredor"
        body="El inventario de calidad en la Zona Hotelera rota rápido, y las mejores unidades —las que combinan vista, piso alto y permisos de renta— rara vez llegan a los portales públicos. Escribe ZONA HOTELERA por WhatsApp y recibe hoy la Selección Premium de Rivana: disponibilidad vigente de los penthouses de Salvia, precios actualizados de Mondrian Residences y unidades reservadas de nuestro portafolio. ¿Prefieres empezar con números? Solicita el análisis financiero de la unidad que te interese — sin costo y con escenarios reales de renta y plusvalía."
        keyword="ZONA HOTELERA"
        message="Quiero la Selección Premium de departamentos en venta en la Zona Hotelera de Cancún"
        slug={slug}
        waLabel="WhatsApp — escribe ZONA HOTELERA"
        emailLabel="Solicitar análisis financiero"
        emailSubject="[ZONA HOTELERA] Análisis financiero de unidad — Zona Hotelera Cancún"
      />
    </JournalBody>
  );
};