import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { JournalBody, H2, Callout, JTable, Faq, WhatsAppCta } from './primitives';
import { getArticleFaqs } from '@/data/journal-articles';

/**
 * Body — Departamentos en Venta en Costa Mujeres.
 * Route: /journal/departamentos-en-venta-costa-mujeres
 * ES-only Tier-1 transactional article.
 */
export const DeptosVentaCostaMujeresBody = () => {
  const { language, localePath } = useLanguage();
  const slug = 'departamentos-en-venta-costa-mujeres';
  const faqs = getArticleFaqs(slug, language);
  const gold = 'text-[hsl(var(--gold))] hover:underline';

  return (
    <JournalBody>
      <p>
        Hay un momento óptimo para entrar a cualquier corredor inmobiliario: cuando la
        infraestructura ya existe, las marcas ya llegaron y el precio todavía no termina de
        reflejarlo. En la Riviera Maya de 2026, ese momento le pertenece a{' '}
        <strong>Costa Mujeres</strong> — la franja de playa al norte de Cancún donde los grupos
        hoteleros de gran lujo ya operan, el producto residencial es nuevo, y la consolidación sigue
        en curso.
      </p>
      <p>
        Si buscas departamentos en venta en Costa Mujeres, esta guía te da lo que los portales no:
        contexto del corredor, precios de referencia, la lógica de plusvalía, el detalle de{' '}
        <Link to={localePath('/costa-mujeres/la-amada')} className={gold}>
          La Amada Residence
        </Link>{' '}
        —el desarrollo ancla del que Rivana mantiene múltiples unidades— y el camino concreto para
        comprar, seas mexicano o extranjero.
      </p>

      <H2>Dónde está y por qué importa</H2>
      <p>
        Costa Mujeres es el corredor costero de Playa Mujeres, al norte del centro de Cancún, a
        25-35 minutos del aeropuerto internacional. Frente a sus playas —de las más vírgenes que
        quedan en la zona continental— se ubica Isla Mujeres; a sus espaldas, la conectividad de la
        ciudad más turística de México.
      </p>
      <p>
        El corredor nació master-planned: campo de golf de campeonato (Playa Mujeres, diseño de Greg
        Norman), marina, y una hilera de resorts de gran lujo de marcas internacionales que ya
        operan a plena capacidad. Esa secuencia es la clave para el inversionista:{' '}
        <strong>
          primero llegó la infraestructura hotelera de lujo; el producto residencial la está
          alcanzando ahora
        </strong>
        . Es la misma película que la Zona Hotelera protagonizó hace décadas y Puerto Cancún hace
        quince años — con la diferencia de que en Costa Mujeres el precio de entrada todavía
        pertenece a la fase de consolidación.
      </p>

      <H2>Los datos que respaldan al corredor</H2>
      <JTable
        headers={['Motor', 'Qué está pasando']}
        rows={[
          ['Estado líder en apreciación', 'Quintana Roo cerró 2025 con +14.3% de apreciación anual (SHF), la más alta de México. Costa Mujeres pertenece al municipio de Isla Mujeres, contiguo a Benito Juárez, que registró +12.8% solo en Q1 de 2025.'],
          ['Demanda de lujo en expansión', 'El mercado inmobiliario de lujo mexicano alcanzó ventas récord en años recientes, y los corredores de playa nuevos con marcas hoteleras son sus principales receptores. Costa Mujeres aparece consistentemente como zona emergente de alto potencial.'],
          ['Escasez estructural en formación', 'El frente de playa continental cerca de Cancún es finito. Cada resort y torre terminada reduce el inventario de primera línea restante — el mecanismo clásico de soporte de valor a largo plazo.'],
          ['Nueva demanda internacional', 'El giro de los snowbirds canadienses hacia México (de 12% a 23% eligiendo destinos no-EE.UU. en un año, Snowbird Advisor) apunta al perfil de Costa Mujeres: nuevo, privado, de playa y con servicios de resort.'],
        ]}
      />

      <H2>La Amada Residence: el ancla residencial del corredor</H2>
      <p>
        Dentro de la Selección Premium de Rivana,{' '}
        <Link to={localePath('/costa-mujeres/la-amada')} className={gold}>
          <strong>La Amada Residence</strong>
        </Link>{' '}
        es la vía de entrada más sólida a Costa Mujeres — y mantenemos{' '}
        <strong>múltiples unidades disponibles</strong> en distintos niveles y tipologías.
      </p>
      <JTable
        headers={['Atributo', 'Qué significa para ti']}
        rows={[
          ['Comunidad consolidada, no promesa', 'La Amada es de los desarrollos pioneros del corredor, con marina propia, playa privada y años de operación que validan la calidad de construcción y la vida de comunidad.'],
          ['Frente de playa real', 'Unidades con acceso directo a una de las playas más serenas de la zona norte, con vista a Isla Mujeres.'],
          ['Perfil de residentes internacional', 'Una comunidad reservada de propietarios mexicanos, norteamericanos y europeos — el vecindario que protege el valor de reventa.'],
          ['Flexibilidad de uso', 'Residencia principal, casa de playa familiar o activo de renta; la marina y el golf del corredor sostienen demanda de estadías de alto perfil.'],
        ]}
      />
      <Callout>
        <p>
          Al tratarse de múltiples unidades en un mismo desarrollo, Rivana puede mostrarte opciones
          comparadas —nivel, vista, tipología, precio por m²— dentro de La Amada, algo que un portal
          con un solo listing no permite.
        </p>
      </Callout>

      <H2>¿Comprar terminado o en preventa en Costa Mujeres?</H2>
      <p>El corredor ofrece ambas vías y la respuesta depende de tu tesis:</p>
      <JTable
        headers={['Modalidad', 'Perfil ideal']}
        rows={[
          ['Producto terminado (La Amada Residence)', 'Uso y renta inmediatos, comunidad probada, cero riesgo de obra. Ideal para casa de playa patrimonial o flujo desde el primer mes.'],
          ['Preventas del corredor', 'Precio de lanzamiento y plan de pagos durante la construcción, con la plusvalía de consolidación por delante. Ideal para el inversionista de horizonte 24-48 meses.'],
        ]}
      />
      <p>
        Con frecuencia recomendamos comparar la misma tipología en ambas modalidades: el diferencial
        de precio contra el tiempo de espera es la decisión real, y ese comparativo es parte del
        análisis que preparamos por escrito antes de que decidas. Si quieres el marco general de
        inversión, revisa nuestra{' '}
        <Link to={localePath('/journal/invertir-en-bienes-raices-cancun')} className={gold}>
          guía de inversión en bienes raíces en Cancún
        </Link>
        .
      </p>

      <H2>Comprador extranjero: así se estructura la compra</H2>
      <p>
        Costa Mujeres está dentro de la zona restringida constitucional (50 km de costa): los
        extranjeros compran mediante <strong>fideicomiso bancario</strong> — el banco sostiene el
        título como fiduciario y tú conservas todos los derechos: usar, rentar, remodelar, heredar y
        vender. Es la figura estándar desde hace décadas, estable y sin cambios regulatorios en
        discusión a inicios de 2026.
      </p>
      <p>
        Costos a presupuestar: cierre y notario, ISAI, cuota anual del fideicomiso y un predial
        notablemente bajo para estándares norteamericanos (típicamente 0.1-0.2% del valor
        catastral). Rivana coordina el proceso completo en inglés o español, incluyendo cierres
        remotos por poder notarial para compradores que no pueden viajar.
      </p>

      <H2>Vivir (o rentar) en Costa Mujeres: expectativas honestas</H2>
      <p>
        Costa Mujeres es un corredor residencial y de resort, no un centro urbano: la vida aquí es
        de playa, golf, marina y tranquilidad, con el comercio y los hospitales mayores de Cancún a
        20-30 minutos. Para el propietario que renta, eso define el perfil del huésped —estadías de
        descanso de alto poder adquisitivo— y la estrategia de operación. Los rendimientos brutos de
        renta en México promedian ~6% anual (Global Property Guide, dic. 2025); en producto de playa
        bien operado el desempeño puede ser superior, y como siempre, el número real se calcula
        unidad por unidad, no con promedios. Rivana ofrece administración de rentas post-venta para
        propietarios remotos.
      </p>

      <H2>Preguntas frecuentes</H2>
      <Faq items={faqs} />

      <WhatsAppCta
        title="Conoce la disponibilidad real de Costa Mujeres"
        body="El inventario de calidad en corredores en consolidación se mueve antes de llegar a los portales — y las mejores unidades de La Amada Residence (nivel, vista, precio por m²) se colocan por relación directa. Escribe COSTA MUJERES por WhatsApp y recibe hoy la Selección Premium del corredor: unidades disponibles de La Amada Residence con precios vigentes, comparativo de tipologías y análisis de plusvalía. ¿Estás comparando corredores? Agenda una videollamada de 30 minutos para el comparativo Costa Mujeres vs. Puerto Cancún vs. Zona Hotelera con números por zona."
        keyword="COSTA MUJERES"
        message="Quiero la Selección Premium de Costa Mujeres y la disponibilidad vigente de La Amada Residence"
        slug={slug}
        waLabel="WhatsApp — escribe COSTA MUJERES"
        emailLabel="Agendar comparativo de corredores"
        emailSubject="[COSTA MUJERES] Selección Premium y disponibilidad La Amada Residence"
      />
    </JournalBody>
  );
};