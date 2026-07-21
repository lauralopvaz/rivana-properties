import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { JournalBody, H2, Callout, JTable, Faq, WhatsAppCta } from './primitives';
import { getArticleFaqs } from '@/data/journal-articles';

/**
 * Body — Departamentos con Permiso Airbnb en Cancún.
 * Route: /journal/departamentos-con-permiso-airbnb-cancun
 * ES-only Tier-1 transactional article.
 */
export const PermisoAirbnbCancunBody = () => {
  const { language, localePath } = useLanguage();
  const slug = 'departamentos-con-permiso-airbnb-cancun';
  const faqs = getArticleFaqs(slug, language);
  const gold = 'text-[hsl(var(--gold))] hover:underline';

  return (
    <JournalBody>
      <p>
        Cualquier agente puede venderte un departamento "ideal para Airbnb" en Cancún. Muy pocos
        pueden venderte uno que <strong>legalmente pueda operar como tal</strong>. Esa diferencia
        —que cabe en una palabra: permisos— separa a un activo que produce flujo desde el primer mes
        de uno que acumula multas, conflictos con el condominio y anuncios dados de baja.
      </p>
      <p>
        Esta guía explica cómo funciona realmente la renta vacacional regulada en Cancún, por qué
        las unidades con permisos vigentes valen estructuralmente más, cómo se ven los números de
        operación honestos, y qué inventario con permisos mantiene disponible Rivana Properties en
        este momento — empezando por los penthouses del{' '}
        <Link to={localePath('/zona-hotelera/edificio-salvia')} className={gold}>
          Edificio Salvia
        </Link>{' '}
        en la Zona Hotelera.
      </p>

      <H2>La regulación que la mayoría descubre demasiado tarde</H2>
      <p>
        Operar renta vacacional en Quintana Roo no es simplemente publicar un anuncio. El marco
        tiene tres capas, y las tres deben estar en verde:
      </p>
      <JTable
        headers={['Capa', 'Qué exige y por qué importa']}
        rows={[
          ['1. Reglamento del condominio', 'La capa eliminatoria y la más ignorada. Muchos edificios residenciales —incluidos varios de los más deseados— prohíben expresamente la renta de corta estancia. Comprar ahí con tesis de Airbnb es comprar un problema: las asambleas aplican multas, restringen accesos y pueden escalar legalmente.'],
          ['2. Registro e impuesto estatal al hospedaje', 'Quintana Roo grava el hospedaje —incluida la renta vacacional por plataformas— y exige registro del anfitrión ante la autoridad fiscal estatal. Las plataformas colaboran con retenciones, y operar fuera de registro expone al propietario a créditos fiscales.'],
          ['3. Régimen fiscal federal', 'Los ingresos por hospedaje tributan (ISR e IVA según el esquema). Operar en regla permite comprobar ingresos, que el activo sea bancable y que la unidad se revenda con su historial operativo como argumento de valor.'],
        ]}
      />
      <Callout>
        <p>
          La consecuencia de este marco es una asimetría brutal de mercado:{' '}
          <strong>
            la demanda de inversionistas por unidades listas para operar es enorme; la oferta de
            unidades que de verdad pueden hacerlo, mínima.
          </strong>
        </p>
      </Callout>

      <H2>Por qué el permiso multiplica el valor del activo</H2>
      <p>
        Un departamento con capacidad legal de renta vacacional en la Zona Hotelera combina tres
        motores en una sola unidad:
      </p>
      <JTable
        headers={['Motor', 'Qué aporta']}
        rows={[
          ['Tarifa por noche más alta de México', 'La Zona Hotelera concentra la demanda turística premium del país, alimentada por el segundo aeropuerto más transitado de México.'],
          ['Flujo + apreciación', 'Los rendimientos brutos de renta en México promedian ~6% anual (Global Property Guide, dic. 2026); la renta vacacional bien operada en corredores turísticos puede superar ese promedio — y por debajo del flujo corre la apreciación del estado líder del país (+14.3% en 2026 según SHF).'],
          ['Prima de escasez a la reventa', 'Cuando decidas salir, no venderás "un departamento": venderás un negocio en operación con permisos, historial y calendario de reservas. Ese comprador paga prima.'],
        ]}
      />

      <H2>Los penthouses de Salvia: el nicho, resuelto</H2>
      <p>
        Dentro de la Selección Premium de Rivana existe un inventario que resuelve de origen todo lo
        anterior:{' '}
        <Link to={localePath('/zona-hotelera/edificio-salvia')} className={gold}>
          <strong>los penthouses del Edificio Salvia, en la Zona Hotelera de Cancún, con permisos
          de renta vacacional vigentes.</strong>
        </Link>
      </p>
      <JTable
        headers={['Atributo', 'Detalle']}
        rows={[
          ['Inventario', 'Tres penthouses — un inventario finito por definición.'],
          ['Permisos', 'Renta de corta estancia en regla, listos para operar en plataformas desde el día uno, sin trámites pendientes ni zonas grises con el condominio.'],
          ['Ubicación', 'Zona Hotelera, el corredor de mayor tarifa por noche y ocupación turística del país, con precios de zona entre USD $3,000 y $4,500/m² que respaldan el valor del activo.'],
          ['Formato', 'Penthouse: la tipología de mayor tarifa y mejor diferenciación en plataformas, donde la foto de la vista es el anuncio.'],
        ]}
      />
      <p>
        Para el inversionista de flujo, es difícil construir un caso más limpio: el activo escaso,
        en el corredor correcto, con la parte legal ya resuelta. Para el contexto completo del
        corredor, revisa nuestra{' '}
        <Link to={localePath('/journal/departamentos-en-venta-zona-hotelera-cancun')} className={gold}>
          guía de departamentos en venta en la Zona Hotelera
        </Link>
        .
      </p>

      <H2>Los números de operación, sin humo</H2>
      <p>
        Publicar porcentajes de retorno genéricos sería faltarte al respeto: el resultado de una
        unidad vacacional depende de variables que se modelan, no se prometen. Lo que sí te decimos
        es qué mueve el número, porque es exactamente lo que modelamos en el análisis financiero de
        cada penthouse antes de que decidas:
      </p>
      <JTable
        headers={['Variable', 'Cómo la modelamos']}
        rows={[
          ['1. Tarifa por noche y estacionalidad', 'Cancún tiene temporada alta poderosa (diciembre-abril, con mercado norteamericano y creciente flujo canadiense) y valles que el modelo absorbe con pricing dinámico.'],
          ['2. Ocupación realista', 'Escenarios conservador, base y optimista — no el mejor mes anualizado.'],
          ['3. Costos de operación', 'Limpieza, plataforma, administración, mantenimiento, cuotas de condominio, impuesto al hospedaje. El retorno que importa es el neto.'],
          ['4. Administración profesional', 'La diferencia entre una unidad mediocre y una top-performer en la misma torre es la operación. Rivana ofrece administración post-venta: pricing, huéspedes, limpieza y reportes mensuales para propietarios remotos.'],
        ]}
      />
      <Callout title="El entregable concreto">
        <p>
          Solicita el análisis financiero de los penthouses de Salvia y recibe el modelo con los
          tres escenarios, costos reales de operación y comparativo contra renta de largo plazo.
        </p>
      </Callout>

      <H2>¿Y si soy extranjero?</H2>
      <p>
        La Zona Hotelera está en la zona restringida (50 km de costa): compras mediante{' '}
        <strong>fideicomiso bancario</strong>, conservando todos los derechos —incluido el de
        rentar. El marco es estable, sin cambios en discusión a inicios de 2026. Los ingresos por
        hospedaje tributan en México; te conectamos con especialistas fiscales (incluyendo casos
        transfronterizos con Canadá y EE.UU.) para estructurar la operación en regla desde el día
        uno. El cierre puede hacerse de forma remota por poder notarial. El marco general está en
        nuestra{' '}
        <Link to={localePath('/journal/invertir-en-bienes-raices-cancun')} className={gold}>
          guía de inversión en bienes raíces en Cancún
        </Link>
        .
      </p>

      <H2>Preguntas frecuentes</H2>
      <Faq items={faqs} />

      <WhatsAppCta
        title="Solo existen tres — y este nicho no espera"
        body="El inventario con permisos de renta vacacional en la Zona Hotelera es, literalmente, contado. Los penthouses de Salvia son tres unidades: cuando se coloquen, este artículo será historia. Escribe SALVIA por WhatsApp y recibe hoy: disponibilidad vigente de los tres penthouses, precios, fotos y el análisis financiero con escenarios de operación. ¿Primero quieres entender el nicho completo? Agenda una videollamada de 30 minutos sobre inversión en renta vacacional regulada en Cancún."
        keyword="SALVIA"
        message="Quiero disponibilidad y análisis financiero de los penthouses de Salvia con permiso de renta vacacional"
        slug={slug}
        waLabel="WhatsApp — escribe SALVIA"
        emailLabel="Agendar videollamada"
        emailSubject="[SALVIA] Penthouses con permiso de renta vacacional — Zona Hotelera Cancún"
      />
    </JournalBody>
  );
};