import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

/* ── Reusable property card ── */
const PropertyCard = ({
  name, badge, detail, tagline, link,
}: {
  name: string; badge: string; detail: string; tagline?: string; link: string;
}) => (
  <Link to={link} className="group block bg-card border border-border rounded-sm p-5 hover:border-primary/40 transition-colors my-6">
    <div className="flex items-start justify-between gap-4 flex-wrap">
      <div>
        <span className="text-xs font-body tracking-wider uppercase text-primary">{badge}</span>
        <h3 className="text-lg mt-1 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-sm text-muted-foreground font-body mt-1">{detail}</p>
        {tagline && <p className="text-sm text-primary/80 font-body italic mt-1">{tagline}</p>}
      </div>
      <span className="text-primary text-sm font-body whitespace-nowrap">→</span>
    </div>
  </Link>
);

/* ── Comparison table ── */
const ComparisonTableES = () => (
  <div className="overflow-x-auto my-8">
    <table className="w-full text-sm font-body border border-border">
      <thead>
        <tr className="bg-muted">
          <th className="text-left p-3 border-b border-border">Factor</th>
          <th className="text-left p-3 border-b border-border">Preventa</th>
          <th className="text-left p-3 border-b border-border">Reventa</th>
        </tr>
      </thead>
      <tbody className="text-muted-foreground">
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Precio de entrada</td><td className="p-3">15–33% inferior al valor de entrega</td><td className="p-3">Precio de mercado actual</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Flujo de caja</td><td className="p-3">Diferido hasta la entrega</td><td className="p-3">Inmediato si tiene STR activo</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Personalización</td><td className="p-3">Posible en muchos proyectos</td><td className="p-3">Limitada al estado actual</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Riesgo</td><td className="p-3">Mayor (retraso, desarrollador)</td><td className="p-3">Menor (propiedad existe)</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Retorno total</td><td className="p-3">Más alto si se entrega correctamente</td><td className="p-3">Más predecible</td></tr>
        <tr><td className="p-3 font-medium text-foreground">Ideal para</td><td className="p-3">Inversionista de patrimonio</td><td className="p-3">Inversionista de flujo de caja</td></tr>
      </tbody>
    </table>
  </div>
);

const ComparisonTableEN = () => (
  <div className="overflow-x-auto my-8">
    <table className="w-full text-sm font-body border border-border">
      <thead>
        <tr className="bg-muted">
          <th className="text-left p-3 border-b border-border">Factor</th>
          <th className="text-left p-3 border-b border-border">Pre-Sale</th>
          <th className="text-left p-3 border-b border-border">Resale</th>
        </tr>
      </thead>
      <tbody className="text-muted-foreground">
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Entry price</td><td className="p-3">15–33% below delivery value</td><td className="p-3">Current market price</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Cash flow</td><td className="p-3">Deferred until delivery</td><td className="p-3">Immediate if STR active</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Customization</td><td className="p-3">Possible in many projects</td><td className="p-3">Limited to current state</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Risk</td><td className="p-3">Higher (delay, developer)</td><td className="p-3">Lower (property exists)</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Total return</td><td className="p-3">Higher if delivered correctly</td><td className="p-3">More predictable</td></tr>
        <tr><td className="p-3 font-medium text-foreground">Ideal for</td><td className="p-3">Patrimonial investor</td><td className="p-3">Cash-flow investor</td></tr>
      </tbody>
    </table>
  </div>
);

/* ══════════════════════════════════════════
   SPANISH VERSION
   ══════════════════════════════════════════ */
export const PreSaleGuideBodyES = () => {
  const { localePath } = useLanguage();
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>Existe un momento en el ciclo inmobiliario en que el riesgo y la oportunidad se cruzan de forma extraordinaria. En el Caribe Mexicano, ese momento se llama preventa — y 2026 puede ser el último año en que ese cruce ocurra a los precios actuales.</p>

      <p>Comprar una propiedad en preventa en Cancún o la Riviera Maya significa adquirir hoy, a precio de hoy, un activo que cuando se entregue valdrá entre 15 y 33% más — antes de considerar un solo peso de ingresos por renta. Es la estrategia que los inversionistas más sofisticados del mercado han utilizado durante la última década para construir patrimonio en el Caribe Mexicano con un capital inicial significativamente menor al que requeriría el mismo activo en reventa.</p>

      <p>Esta guía explica exactamente cómo funciona la preventa, cuánto puedes ganar, qué debes verificar antes de firmar — y cuáles son las mejores opciones disponibles hoy en el portafolio Rivana.</p>

      {/* ── Qué es la preventa ── */}
      <h2 className="text-foreground" id="que-es-preventa">¿Qué es la preventa inmobiliaria y cómo genera plusvalía?</h2>
      <p>La preventa, conocida en mercados anglosajones como "off-plan", es la compra de una propiedad durante su fase de proyecto o construcción. El comprador adquiere el derecho sobre una unidad específica a un precio pactado hoy, generalmente inferior al que tendrá cuando la propiedad esté terminada y entregada.</p>
      <p>La lógica financiera es directa: el desarrollador necesita capital para financiar la construcción y ofrece descuento a cambio del compromiso temprano del comprador. Ese descuento se convierte en plusvalía para el inversionista en el momento de la entrega — sin que el mercado haya necesitado moverse en absoluto.</p>
      <p>En el Caribe Mexicano, esa plusvalía de preventa ha oscilado históricamente entre el 15 y el 33% sobre el precio de compra. Sobre ese retorno base se suma después la plusvalía de mercado — que en Cancún y la Riviera Maya ha registrado entre el 12 y el 22% anual sostenido según la zona — y el rendimiento de renta una vez que la propiedad está operativa.</p>
      <p>El resultado: el inversionista de preventa bien asesorado puede capturar tres fuentes de retorno sobre el mismo capital: descuento de preventa + plusvalía de mercado + rendimiento de renta. Ningún activo de reventa ofrece las tres simultáneamente.</p>

      {/* ── Por qué el Caribe Mexicano ── */}
      <h2 className="text-foreground" id="por-que-caribe">Por qué el Caribe Mexicano es el mercado de preventa más atractivo de América Latina</h2>
      <p>No todos los mercados de preventa son iguales. Lo que hace extraordinario al Caribe Mexicano es la combinación de cuatro factores que raramente se alinean en el mismo mercado al mismo tiempo:</p>
      <p><strong className="text-foreground">Demanda turística estructural y creciente.</strong> El Aeropuerto Internacional de Cancún recibe más de 30 millones de pasajeros al año. Puerto Morelos mantiene ocupación hotelera cercana al 75% durante todo el año. Esa demanda no es cíclica — es estructural. Y el Mundial FIFA 2026 proyecta un incremento histórico del 35 al 50% en flujo internacional para junio y julio.</p>
      <p><strong className="text-foreground">Escasez geográfica de oferta.</strong> La Zona Hotelera de Cancún no puede expandirse lateralmente — está rodeada de agua. El stock de tierra frente al mar en Puerto Morelos se está agotando — escasez estructural que garantiza apreciación sostenida. Cuando la tierra disponible se agota, los precios solo van en una dirección.</p>
      <p><strong className="text-foreground">Esquemas de pago accesibles.</strong> Las preventas en el Caribe Mexicano permiten estructurar la compra con 20 a 30% de enganche y el saldo en mensualidades durante la construcción, con el balance final a la entrega. Esto permite capturar la plusvalía total del activo con una fracción del capital que requeriría una compra de contado.</p>
      <p><strong className="text-foreground">Rendimiento de renta desde la entrega.</strong> A diferencia de otros mercados donde la propiedad puede tardar meses en rentarse, los desarrollos bien ubicados en el Caribe Mexicano con gestión operativa incluida están generando ingresos desde las primeras semanas post-entrega.</p>

      {/* ── Fases de preventa ── */}
      <h2 className="text-foreground" id="fases">Fases de preventa — cuándo entrar y por qué importa</h2>
      <p>La magnitud del retorno de preventa depende directamente del momento en que se entra. Las preventas se dividen en tres fases con perfiles de riesgo y retorno distintos:</p>
      <p><strong className="text-foreground">Fase de lanzamiento (0–30% de avance de obra).</strong> El precio más bajo del ciclo. La plusvalía potencial máxima. El riesgo más alto, porque la construcción apenas inicia y el historial del desarrollador es el único respaldo. Es la fase para compradores con alta tolerancia al riesgo y acceso a información de primera mano — exactamente el tipo de información que Rivana proporciona.</p>
      <p><strong className="text-foreground">Fase de construcción avanzada (30–70% de avance).</strong> El punto de equilibrio óptimo para la mayoría de los inversionistas. El proyecto ya existe físicamente, el desarrollador demostró capacidad de ejecución y el precio todavía tiene un descuento significativo respecto al valor de entrega. Esta es la fase donde se concentran la mayoría de las recomendaciones Rivana.</p>
      <p><strong className="text-foreground">Fase de cierre de preventa (70–100% de avance).</strong> El descuento es menor pero el riesgo es mínimo. Para compradores conservadores que priorizan certeza sobre rendimiento máximo.</p>

      {/* ── Propiedades ── */}
      <h2 className="text-foreground" id="propiedades">Las mejores propiedades en preventa del portafolio Rivana</h2>

      {/* Zona Hotelera */}
      <h3 className="text-foreground text-xl mt-8">Zona Hotelera de Cancún</h3>

      <p><strong className="text-foreground">The Residences at Grand Island Cancun</strong> ⭐ <em>Destacado</em></p>
      <p>Residencia de marca dentro del desarrollo maestro más exclusivo de la Zona Hotelera — diseñada por Filipao Nunes Arquitectos y operada por Accor bajo la marca Mondrian. Cada unidad se entrega llave en mano, totalmente amueblada y equipada, lista para operar desde el primer día. El único desarrollo en la Zona Hotelera con vistas simultáneas al Mar Caribe y la Laguna Nichupté. Preventa desde $9,050,000 MXN con plusvalía proyectada del 33% al precio de entrega. Plan de pago: 30% de enganche, 20% diferido en 12 meses, 50% a la entrega. Entrega Q2 2027.</p>
      <p>La gestión Accor opera por ti desde el primer día. Sin gestión directa. Sin curva de aprendizaje. Solo rendimientos.</p>
      <PropertyCard name="The Residences at Grand Island Cancun" badge="Preventa · ROI 33%" detail="Llave en mano · Desde $9,050,000 MXN · Entrega Q2 2027" link={localePath('/propiedad/mondrian-residences-grand-island-cancun')} />

      <p><strong className="text-foreground">Bay View Grand at Grand Island</strong> ⭐ <em>Destacado</em></p>
      <p>Más de 40 amenidades de resort, interiores de Filipão Nunes, cinco tipologías desde $586,000 USD. Ocupación vacacional superior al 80% anual. Inmediatamente comercializable en plataformas STR. El punto de entrada más flexible de la Zona Hotelera con amenidades que compiten con los mejores resorts del mundo.</p>
      <PropertyCard name="Bay View Grand at Grand Island" badge="Preventa" detail="5 tipologías · Desde $586K USD · 40+ amenidades" link={localePath('/propiedad/bay-view-grand-grand-island')} />

      <p><strong className="text-foreground">Kabeek Marina & Condos</strong></p>
      <p>Solo 23 residencias con muelle privado a la Laguna Nichupté para embarcaciones de hasta 80 pies. Doble vista Caribe y laguna. Arquitectura de Humberto Artigas. El activo más escaso de la Zona Hotelera — sin comparable en el mercado.</p>
      <PropertyCard name="Kabeek Marina & Condos" badge="Preventa" detail="23 unidades · 212–670 m² · Muelle privado" link={localePath('/propiedad/kabeek-marina-condos')} />

      <div className="my-4">
        <Link to={localePath('/cancun/zona-hotelera')} className="text-primary font-body text-sm hover:underline">Ver todas las preventas en Zona Hotelera →</Link>
      </div>

      {/* Puerto Cancún */}
      <h3 className="text-foreground text-xl mt-8">Puerto Cancún</h3>

      <p><strong className="text-foreground">SLS Ocean Beach</strong> ⭐ <em>Destacado</em></p>
      <p>Residencias de lujo en Novo Cancún desarrolladas por Inmobilia, Ucalli y Related. Arquitectura por Arquitectonica, interiorismo por Bernardi + Peschard. Operado bajo la marca SLS Hotels (Ennismore + Accor). Unidades de 191 a 356 m² desde $1.6 millones USD. Entrega verano 2028. El respaldo de marca global más sofisticado disponible en el Caribe Mexicano hoy.</p>
      <PropertyCard name="SLS Ocean Beach" badge="Preventa" detail="191–356 m² · Desde $1.6M USD · Entrega 2028" link={localePath('/propiedad/sls-ocean-beach-puerto-cancun')} />

      <p><strong className="text-foreground">Vellmari Grand Living</strong></p>
      <p>95 residencias más 3 penthouses en 2 torres de 20 pisos con vistas de 200 grados. 20 amenidades premium. Plaza Puerto Cancún a menos de 500 metros. Desde $846,000 USD, entregas diciembre 2026 y julio 2027.</p>
      <PropertyCard name="Vellmari Grand Living" badge="Preventa" detail="2 torres · Desde $846K USD · Entregas 2026–2027" link={localePath('/propiedad/vellmari-grand-living')} />

      <div className="my-4">
        <Link to={localePath('/cancun/puerto-cancun')} className="text-primary font-body text-sm hover:underline">Ver todas las preventas en Puerto Cancún →</Link>
      </div>

      {/* Costa Mujeres */}
      <h3 className="text-foreground text-xl mt-8">Costa Mujeres</h3>

      <p><strong className="text-foreground">Dhamar</strong></p>
      <p>1 a 3 recámaras, 47 a 177 m², desde $248,000 USD. Entrega 2027. Vistas al mar, manglar y luz natural como parte de la rutina. Costa Mujeres registra plusvalía anual del 22% con rendimientos de renta del 8 al 12%. El punto de entrada más accesible al corredor de mayor crecimiento del área metropolitana de Cancún.</p>
      <PropertyCard name="Dhamar" badge="Preventa" detail="1–3 Rec. · 47–177 m² · Desde $248K USD · Entrega 2027" link={localePath('/propiedad/dhamar-costa-mujeres')} />

      <div className="my-4">
        <Link to={localePath('/cancun/costa-mujeres')} className="text-primary font-body text-sm hover:underline">Ver todas las preventas en Costa Mujeres →</Link>
      </div>

      {/* Puerto Morelos */}
      <h3 className="text-foreground text-xl mt-8">Puerto Morelos</h3>

      <p><strong className="text-foreground">Village Blu Beach Apartments</strong></p>
      <p>Departamentos frente al mar en Puerto Morelos, 72–73 m², desde $273,000 USD. Entrega invierno 2026. ROI estimado del 8.8% anual. Gestión OPENKEY incluida — cero complicaciones para el propietario. Parte de la Blu Residences Collection. A solo 20 minutos del aeropuerto internacional de Cancún, Puerto Morelos combina vida de playa auténtica con retorno de inversión sólido.</p>
      <PropertyCard name="Village Blu Beach Apartments" badge="Preventa · ROI 8.8%" detail="72–73 m² · Desde $273K USD · Entrega invierno 2026" link={localePath('/propiedad/village-blu-beach-apartments')} />

      <p><strong className="text-foreground">Sole Blu Ocean Living</strong></p>
      <p>1 a 2 recámaras, 60 a 136 m², desde $392,000 USD. Entrega verano 2026. ROI proyectado ~10% anual. Gestión 100% delegada vía OPENKEY. Track record del desarrollador ELEVA Capital Group: Cumbres Towers 20% anual por 5 años, Arbolada Towers 45% en 1.5 años, Porto BLU 25% en 1.5 años.</p>
      <PropertyCard name="Sole Blu Ocean Living" badge="Preventa · ROI 10%" detail="1–2 Rec. · 60–136 m² · Desde $392K USD · Entrega 2026" link={localePath('/propiedad/sole-blu-ocean-living')} />

      <div className="my-4">
        <Link to={localePath('/puerto-morelos')} className="text-primary font-body text-sm hover:underline">Ver todas las preventas en Puerto Morelos →</Link>
      </div>

      {/* Mayakoba */}
      <h3 className="text-foreground text-xl mt-8">Mayakoba — Playa del Carmen</h3>

      <p><strong className="text-foreground">The Reserve at Mayakoba</strong> ⭐ <em>Destacado</em></p>
      <p>144 residencias de ultra-lujo en 16 torres de baja altura dentro del ecosistema Mayakoba, con el 65% del terreno como conservación natural. Desarrollado por Sancus Capital Partners e Inmobilia, arquitectura de L35 Arquitectos y Sepúlveda Arquitectos. Acceso a los servicios hoteleros del Banyan Tree: spa, room service y restaurantes. 2 a 4 recámaras, 192 a 660 m², desde $1.1 millones USD. Entregas 2027–2028.</p>
      <p>Mayakoba es sede de Banyan Tree, Rosewood, Fairmont y Andaz — y base confirmada de la selección de Uruguay durante el Mundial FIFA 2026. The Reserve es la única forma de ser propietario dentro de ese ecosistema.</p>
      <PropertyCard name="The Reserve at Mayakoba" badge="Preventa ⭐" detail="2–4 Rec. · 192–660 m² · Desde $1.1M USD · Entregas 2027–2028" link={localePath('/propiedad/the-reserve-at-mayakoba')} />

      <div className="my-4">
        <Link to={localePath('/mayakoba')} className="text-primary font-body text-sm hover:underline">Ver todas las propiedades en Mayakoba →</Link>
      </div>

      {/* ── Qué verificar ── */}
      <h2 className="text-foreground" id="verificar">Qué verificar antes de firmar cualquier preventa</h2>
      <p>La preventa ofrece el mayor potencial de retorno del mercado inmobiliario — y el mayor número de preguntas que deben responderse antes del depósito inicial. Estos son los cinco filtros que Rivana aplica antes de recomendar cualquier proyecto en preventa:</p>
      <p><strong className="text-foreground">Historial del desarrollador.</strong> ¿Ha entregado proyectos anteriores en tiempo y especificaciones? ¿Hay compradores anteriores verificables? Un desarrollador sin historial comprobable es una señal de alerta independientemente del precio. El track record de ELEVA Capital Group en Sole Blu, la trayectoria de Inmobilia en SLS y de Sancus en The Reserve son ejemplos de lo que buscamos.</p>
      <p><strong className="text-foreground">Título del terreno.</strong> Debe ser escritura pública limpia, libre de gravámenes y no ser tierra ejidal. Tu notario verifica esto — y Rivana lo confirma antes de cualquier recomendación.</p>
      <p><strong className="text-foreground">Contrato de promesa de compraventa.</strong> Cada cláusula de entrega, penalidad por retraso y especificación técnica debe estar por escrito. Lo que no está escrito no existe legalmente.</p>
      <p><strong className="text-foreground">Permiso STR proyectado.</strong> Si tu objetivo es renta vacacional, el reglamento de condominio del futuro edificio debe permitirla. Verificamos esto antes de la primera conversación de precio.</p>
      <p><strong className="text-foreground">Esquema de financiamiento del desarrollador.</strong> Un proyecto financiado exclusivamente por preventas sin respaldo bancario tiene mayor riesgo de retraso. Proyectos como Mondrian, SLS y The Reserve tienen estructuras financieras institucionales que reducen este riesgo significativamente.</p>

      {/* ── Riesgos ── */}
      <h2 className="text-foreground" id="riesgos">Riesgos reales — y cómo mitigarlos</h2>
      <p>La preventa tiene riesgos genuinos. Nombrarlos es parte de la asesoría honesta que define a Rivana:</p>
      <p><strong className="text-foreground">Retraso en entrega.</strong> El riesgo más común. Se mitiga eligiendo desarrolladores con historial de entrega verificado y contratos con penalidades por retraso. Un retraso de 6 a 12 meses es tolerable y generalmente no erosiona el retorno total. Más de eso requiere negociación.</p>
      <p><strong className="text-foreground">Cambios en especificaciones.</strong> Los acabados y amenidades prometidos deben estar detallados en el contrato de promesa. Si no está en el contrato, no existe.</p>
      <p><strong className="text-foreground">Insolvencia del desarrollador.</strong> Ocurre principalmente con desarrolladores pequeños sin respaldo financiero institucional. Los proyectos del portafolio Rivana están respaldados por desarrolladoras con trayectoria verificable y, en la mayoría de los casos, con financiamiento bancario o institucional.</p>
      <p><strong className="text-foreground">Mercado a la baja al momento de entrega.</strong> Históricamente improbable en el Caribe Mexicano dado el crecimiento sostenido de la demanda, pero siempre existe el riesgo macroeconómico. La diversificación geográfica dentro del portafolio mitiga este riesgo.</p>

      {/* ── Ventana 2026 ── */}
      <h2 className="text-foreground" id="ventana-2026">La ventana de 2026 — por qué este año específicamente</h2>
      <p>El 2026 concentra tres catalizadores que rara vez se alinean simultáneamente en el mismo mercado:</p>
      <p><strong className="text-foreground">El Mundial FIFA 2026</strong> está generando una demanda global de atención sobre el Caribe Mexicano sin precedente histórico. Los compradores internacionales que evalúan el mercado por primera vez están llegando con el torneo como detonante.</p>
      <p><strong className="text-foreground">La ventana de preventa a precios de 2024–2025 se está cerrando.</strong> En proyectos como The Residences at Grand Island Cancun, el precio aumenta 33% el 1 de junio de 2026. Una vez que los proyectos alcanzan su fase de entrega o de comercialización abierta, los precios de entrada habrán subido entre 15 y 33% sobre los actuales.</p>
      <p><strong className="text-foreground">La infraestructura sigue llegando.</strong> El corredor Nichupté, las expansiones del aeropuerto y los nuevos accesos viales al norte de Cancún continúan comprimiendo los tiempos de traslado y expandiendo el valor de zonas como Costa Mujeres y Puerto Morelos.</p>

      {/* ── Preventa vs Reventa ── */}
      <h2 className="text-foreground" id="preventa-vs-reventa">Preventa vs. reventa — la comparativa que importa</h2>
      <ComparisonTableES />
      <p>La respuesta correcta depende de tu horizonte de inversión y tu tolerancia al riesgo. Un asesor Rivana puede ayudarte a determinar cuál se ajusta mejor a tu perfil.</p>

      {/* ── FAQ ── */}
      <h2 className="text-foreground" id="faq">Preguntas frecuentes sobre preventa en el Caribe Mexicano</h2>
      <div className="space-y-6">
        <div>
          <p className="font-medium text-foreground">¿Puedo comprar en preventa siendo extranjero?</p>
          <p>Sí. La compra se realiza a través de un fideicomiso bancario que te otorga todos los derechos de propiedad. Rivana coordina el proceso completo en inglés y español.</p>
        </div>
        <div>
          <p className="font-medium text-foreground">¿Necesito estar en México para comprar?</p>
          <p>No. La firma del contrato de promesa puede realizarse remotamente. La escrituración final ante notario puede hacerse en persona o mediante poder notarial.</p>
        </div>
        <div>
          <p className="font-medium text-foreground">¿Qué pasa si el desarrollador no entrega?</p>
          <p>Los contratos de promesa bien redactados incluyen penalidades por retraso y mecanismos de devolución. Tu notario y asesor jurídico deben revisar estas cláusulas antes de la firma.</p>
        </div>
        <div>
          <p className="font-medium text-foreground">¿Puedo vender la propiedad antes de la entrega?</p>
          <p>En muchos proyectos sí — la cesión de derechos o "flip" de preventa es una estrategia común. Las condiciones varían por proyecto y deben verificarse en el contrato.</p>
        </div>
        <div>
          <p className="font-medium text-foreground">¿Cómo tributa la ganancia de preventa?</p>
          <p>La plusvalía realizada en la venta de una propiedad en México puede generar obligaciones fiscales tanto en México como en el país de residencia del comprador. Consulta a un especialista fiscal transfronterizo.</p>
        </div>
      </div>

      {/* ── Quote ── */}
      <blockquote className="border-l-2 border-primary pl-6 py-4 my-8">
        <p className="font-display text-xl italic text-foreground leading-relaxed">
          "La preventa no es especular — es reconocer antes que el mercado el valor de lo que se está construyendo. Los que entraron en Mondrian en fase de lanzamiento no apostaron: calcularon."
        </p>
      </blockquote>

      {/* ── CTA ── */}
      <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
        <h3 className="text-xl mb-3 text-foreground">¿Quieres conocer las opciones de preventa disponibles hoy?</h3>
        <p className="text-muted-foreground font-body mb-6">Habla con un asesor Rivana — bilingüe, especializado en el Caribe Mexicano y con acceso directo a precios, planos y condiciones de todos los desarrollos mencionados.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-body tracking-wider uppercase hover:bg-primary/90 transition-colors">
            Quiero asesoría inmobiliaria
          </a>
          <Link to={localePath('/presale')} className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-sm text-sm font-body tracking-wider uppercase text-foreground hover:border-primary/40 transition-colors">
            Ver todas las preventas
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   ENGLISH VERSION
   ══════════════════════════════════════════ */
export const PreSaleGuideBodyEN = () => {
  const { localePath } = useLanguage();
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>There is a moment in every real estate cycle when risk and opportunity intersect in an extraordinary way. In the Mexican Caribbean, that moment is called preventa — pre-sale — and 2026 may be the last year that intersection occurs at current prices.</p>

      <p>Buying a pre-sale property in Cancún or the Riviera Maya means acquiring today, at today's price, an asset that will be worth 15 to 33% more when delivered — before counting a single dollar of rental income. It is the strategy that the most sophisticated investors in this market have used over the last decade to build wealth in the Mexican Caribbean with significantly less upfront capital than the same asset would require in resale.</p>

      <p>This guide explains exactly how pre-sale works, how much you can earn, what you must verify before signing — and which are the best options available today in Rivana's portfolio.</p>

      {/* ── What is pre-sale ── */}
      <h2 className="text-foreground" id="what-is-presale">What is pre-sale real estate and how does it generate appreciation?</h2>
      <p>A pre-sale — known in the Mexican market as "preventa" — is the purchase of a property during its project or construction phase. The buyer acquires the right to a specific unit at a price agreed today, generally lower than what it will be worth when the property is finished and delivered.</p>
      <p>The financial logic is direct: the developer needs capital to finance construction and offers a discount in exchange for the buyer's early commitment. That discount converts into appreciation for the investor at the moment of delivery — without the market needing to move at all.</p>
      <p>In the Mexican Caribbean, that pre-sale appreciation has historically ranged from 15 to 33% above purchase price. On top of that base return comes market appreciation — which in Cancún and the Riviera Maya has registered a sustained 12 to 22% annually depending on the zone — plus rental yield once the property is operational.</p>
      <p>The result: a well-advised pre-sale investor can capture three return sources on the same capital: pre-sale discount + market appreciation + rental yield. No resale asset offers all three simultaneously.</p>

      {/* ── Why Mexican Caribbean ── */}
      <h2 className="text-foreground" id="why-caribbean">Why the Mexican Caribbean is Latin America's most attractive pre-sale market</h2>
      <p>Not all pre-sale markets are equal. What makes the Mexican Caribbean extraordinary is the combination of four factors that rarely align in the same market at the same time:</p>
      <p><strong className="text-foreground">Structural and growing tourism demand.</strong> Cancún International Airport receives over 30 million passengers per year. Puerto Morelos maintains hotel occupancy close to 75% year-round. That demand is not cyclical — it is structural. And FIFA World Cup 2026 projects a historic 35 to 50% increase in international arrivals for June and July.</p>
      <p><strong className="text-foreground">Geographic scarcity of supply.</strong> The Hotel Zone cannot expand laterally — it is surrounded by water. Beachfront land inventory in Puerto Morelos is running out — structural scarcity that guarantees sustained appreciation. When available land is exhausted, prices move in only one direction.</p>
      <p><strong className="text-foreground">Accessible payment structures.</strong> Pre-sales in the Mexican Caribbean allow buyers to structure purchases with 20 to 30% down and the balance in installments during construction, with the final payment at delivery. This allows capturing the full appreciation of the asset with a fraction of the capital required for a cash purchase.</p>
      <p><strong className="text-foreground">Rental yield from delivery.</strong> Unlike other markets where a property may take months to rent, well-located developments in the Mexican Caribbean with included operational management generate income from the first weeks post-delivery.</p>

      {/* ── Phases ── */}
      <h2 className="text-foreground" id="phases">Pre-sale phases — when to enter and why it matters</h2>
      <p>The magnitude of pre-sale return depends directly on when you enter. Pre-sales divide into three phases with distinct risk and return profiles:</p>
      <p><strong className="text-foreground">Launch phase (0–30% construction progress).</strong> The lowest price in the cycle. Maximum potential appreciation. The highest risk, because construction has barely started and the developer's track record is the only backing. This is the phase for buyers with high risk tolerance and access to first-hand information — exactly the type of information Rivana provides.</p>
      <p><strong className="text-foreground">Advanced construction phase (30–70% progress).</strong> The optimal balance point for most investors. The project already exists physically, the developer has demonstrated execution capability and the price still carries a significant discount relative to delivery value. This is the phase where most Rivana recommendations are concentrated.</p>
      <p><strong className="text-foreground">Late pre-sale phase (70–100% progress).</strong> The discount is smaller but the risk is minimal. For conservative buyers who prioritize certainty over maximum yield.</p>

      {/* ── Properties ── */}
      <h2 className="text-foreground" id="properties">The best pre-sale properties in Rivana's portfolio</h2>

      {/* Hotel Zone */}
      <h3 className="text-foreground text-xl mt-8">Hotel Zone — Cancún</h3>

      <p><strong className="text-foreground">The Residences at Grand Island Cancun</strong> ⭐ <em>Featured</em></p>
      <p>A branded residence within the most exclusive master development in the Hotel Zone — designed by Filipao Nunes Arquitectos and operated by Accor under the Mondrian brand. Every unit delivered turnkey, fully furnished and equipped, ready to operate from day one. The only development in the Hotel Zone with simultaneous views of the Caribbean Sea and Nichupté Lagoon. Pre-sale from $9,050,000 MXN with 33% projected appreciation to delivery price. Payment plan: 30% down, 20% deferred over 12 months, 50% at delivery. Q2 2027 delivery.</p>
      <p>Accor management from day one. No direct management. No learning curve. Just returns.</p>
      <PropertyCard name="The Residences at Grand Island Cancun" badge="Pre-Sale · ROI 33%" detail="Turnkey · From $9,050,000 MXN · Q2 2027 delivery" link={localePath('/propiedad/mondrian-residences-grand-island-cancun')} />

      <p><strong className="text-foreground">Bay View Grand at Grand Island</strong> ⭐ <em>Featured</em></p>
      <p>Over 40 resort amenities, interiors by Filipão Nunes, five typologies from $586,000 USD. Vacation occupancy above 80% annually. Immediately marketable on STR platforms. The most flexible entry point in the Hotel Zone with amenities that compete with the world's best resorts.</p>
      <PropertyCard name="Bay View Grand at Grand Island" badge="Pre-Sale" detail="5 typologies · From $586K USD · 40+ amenities" link={localePath('/propiedad/bay-view-grand-grand-island')} />

      <p><strong className="text-foreground">Kabeek Marina & Condos</strong></p>
      <p>Only 30 residences with a private dock on the Nichupté Lagoon for vessels up to 80 feet. Dual Caribbean and lagoon views. Architecture by Humberto Artigas. The scarcest asset in the Hotel Zone — no comparable exists in the market.</p>
      <PropertyCard name="Kabeek Marina & Condos" badge="Pre-Sale" detail="30 units · 212–670 m² · Private dock" link={localePath('/propiedad/kabeek-marina-condos')} />

      <div className="my-4">
        <Link to={localePath('/cancun/zona-hotelera')} className="text-primary font-body text-sm hover:underline">View all Hotel Zone pre-sales →</Link>
      </div>

      {/* Puerto Cancún */}
      <h3 className="text-foreground text-xl mt-8">Puerto Cancún</h3>

      <p><strong className="text-foreground">SLS Ocean Beach</strong> ⭐ <em>Featured</em></p>
      <p>Luxury residences in Novo Cancún developed by Inmobilia, Ucalli and Related. Architecture by Arquitectonica, interiors by Bernardi + Peschard. Operated under the SLS Hotels brand (Ennismore + Accor). Units from 191 to 356 m², from $1.6 million USD. Summer 2028 delivery. The most sophisticated global brand backing available in the Mexican Caribbean today.</p>
      <PropertyCard name="SLS Ocean Beach" badge="Pre-Sale" detail="191–356 m² · From $1.6M USD · Summer 2028" link={localePath('/propiedad/sls-ocean-beach-puerto-cancun')} />

      <p><strong className="text-foreground">Vellmari Grand Living</strong></p>
      <p>95 residences plus 3 penthouses across 2 twenty-story towers with 200-degree views. 20 premium amenities. Plaza Puerto Cancún less than 500 meters away. From $846,000 USD, December 2026 and July 2027 deliveries.</p>
      <PropertyCard name="Vellmari Grand Living" badge="Pre-Sale" detail="2 towers · From $846K USD · Deliveries 2026–2027" link={localePath('/propiedad/vellmari-grand-living')} />

      <div className="my-4">
        <Link to={localePath('/cancun/puerto-cancun')} className="text-primary font-body text-sm hover:underline">View all Puerto Cancún pre-sales →</Link>
      </div>

      {/* Costa Mujeres */}
      <h3 className="text-foreground text-xl mt-8">Costa Mujeres</h3>

      <p><strong className="text-foreground">Dhamar</strong></p>
      <p>1 to 3 bedrooms, 47 to 177 m², from $248,000 USD. 2027 delivery. Sea views, mangrove and natural light as part of daily life. Costa Mujeres records 22% annual appreciation with rental yields of 8 to 12%. The most accessible entry point to the highest-growth corridor in the Cancún metropolitan area.</p>
      <PropertyCard name="Dhamar" badge="Pre-Sale" detail="1–3 Bed · 47–177 m² · From $248K USD · 2027" link={localePath('/propiedad/dhamar-costa-mujeres')} />

      <div className="my-4">
        <Link to={localePath('/cancun/costa-mujeres')} className="text-primary font-body text-sm hover:underline">View all Costa Mujeres pre-sales →</Link>
      </div>

      {/* Puerto Morelos */}
      <h3 className="text-foreground text-xl mt-8">Puerto Morelos</h3>

      <p><strong className="text-foreground">Village Blu Beach Apartments</strong></p>
      <p>Beachfront apartments in Puerto Morelos, 72–73 m², from $273,000 USD. Winter 2026 delivery. Estimated ROI of 8.8% annually. OPENKEY management included — zero complications for the owner. Part of the Blu Residences Collection. Just 20 minutes from Cancún International Airport, Puerto Morelos combines authentic beach living with solid investment return.</p>
      <PropertyCard name="Village Blu Beach Apartments" badge="Pre-Sale · ROI 8.8%" detail="72–73 m² · From $273K USD · Winter 2026" link={localePath('/propiedad/village-blu-beach-apartments')} />

      <p><strong className="text-foreground">Sole Blu Ocean Living</strong></p>
      <p>1 to 2 bedrooms, 60 to 136 m², from $392,000 USD. Summer 2026 delivery. Projected ROI ~10% annually. 100% delegated management via OPENKEY. Developer ELEVA Capital Group track record: Cumbres Towers 20% annually for 5 years, Arbolada Towers 45% in 1.5 years, Porto BLU 25% in 1.5 years.</p>
      <PropertyCard name="Sole Blu Ocean Living" badge="Pre-Sale · ROI 10%" detail="1–2 Bed · 60–136 m² · From $392K USD · Summer 2026" link={localePath('/propiedad/sole-blu-ocean-living')} />

      <div className="my-4">
        <Link to={localePath('/puerto-morelos')} className="text-primary font-body text-sm hover:underline">View all Puerto Morelos pre-sales →</Link>
      </div>

      {/* Mayakoba */}
      <h3 className="text-foreground text-xl mt-8">Mayakoba — Playa del Carmen</h3>

      <p><strong className="text-foreground">The Reserve at Mayakoba</strong> ⭐ <em>Featured</em></p>
      <p>144 ultra-luxury residences across 16 low-rise towers inside the Mayakoba ecosystem, with 65% of land designated as natural conservation. Developed by Sancus Capital Partners and Inmobilia, architecture by L35 Arquitectos and Sepúlveda Arquitectos. Access to Banyan Tree hotel services: spa, room service and world-class restaurants. 2 to 4 bedrooms, 192 to 660 m², from $1.1 million USD. 2027–2028 deliveries.</p>
      <p>Mayakoba is home to Banyan Tree, Rosewood, Fairmont and Andaz — and the confirmed base camp of Uruguay's national team during FIFA World Cup 2026. The Reserve is the only way to be a property owner inside that ecosystem.</p>
      <PropertyCard name="The Reserve at Mayakoba" badge="Pre-Sale ⭐" detail="2–4 Bed · 192–660 m² · From $1.1M USD · 2027–2028" link={localePath('/propiedad/the-reserve-at-mayakoba')} />

      <div className="my-4">
        <Link to={localePath('/mayakoba')} className="text-primary font-body text-sm hover:underline">View all Mayakoba properties →</Link>
      </div>

      {/* ── What to verify ── */}
      <h2 className="text-foreground" id="verify">What to verify before signing any pre-sale</h2>
      <p>Pre-sale offers the highest return potential in real estate — and the most questions that must be answered before the initial deposit. These are the five filters Rivana applies before recommending any pre-sale project:</p>
      <p><strong className="text-foreground">Developer track record.</strong> Has the developer delivered previous projects on time and to specification? Are there verifiable previous buyers? A developer without a provable history is a red flag regardless of price. ELEVA Capital Group's track record in Sole Blu, Inmobilia's history in SLS and Sancus's record in The Reserve are benchmarks for what we look for.</p>
      <p><strong className="text-foreground">Land title.</strong> Must be a clean public deed, free of encumbrances and not ejido land. Your notary verifies this — and Rivana confirms it before any recommendation.</p>
      <p><strong className="text-foreground">Purchase promise agreement.</strong> Every delivery clause, delay penalty and technical specification must be in writing. What is not written does not exist legally.</p>
      <p><strong className="text-foreground">Projected STR permit.</strong> If vacation rental income is your goal, the future building's condo bylaws must allow it. We verify this before the first price conversation.</p>
      <p><strong className="text-foreground">Developer financing structure.</strong> A project financed exclusively by pre-sale buyers without institutional backing carries a higher delay risk. Projects like Mondrian, SLS and The Reserve have institutional financial structures that significantly reduce this risk.</p>

      {/* ── Risks ── */}
      <h2 className="text-foreground" id="risks">Real risks — and how to mitigate them</h2>
      <p>Pre-sale has genuine risks. Naming them is part of the honest advisory that defines Rivana:</p>
      <p><strong className="text-foreground">Delivery delay.</strong> The most common risk. Mitigated by choosing developers with a verified delivery history and contracts with delay penalties. A 6 to 12-month delay is tolerable and generally does not erode total return. Beyond that requires negotiation.</p>
      <p><strong className="text-foreground">Specification changes.</strong> Promised finishes and amenities must be detailed in the purchase promise contract. If it is not in the contract, it does not exist.</p>
      <p><strong className="text-foreground">Developer insolvency.</strong> Occurs primarily with small developers without institutional financial backing. Rivana portfolio projects are backed by developers with verifiable track records and, in most cases, bank or institutional financing.</p>
      <p><strong className="text-foreground">Market decline at delivery.</strong> Historically unlikely in the Mexican Caribbean given sustained demand growth, but macroeconomic risk always exists. Geographic diversification within the portfolio mitigates this risk.</p>

      {/* ── 2026 Window ── */}
      <h2 className="text-foreground" id="window-2026">The 2026 window — why this specific year</h2>
      <p>2026 concentrates three catalysts that rarely align simultaneously in the same market:</p>
      <p><strong className="text-foreground">FIFA World Cup 2026</strong> is generating unprecedented global attention on the Mexican Caribbean. International buyers evaluating the market for the first time are arriving with the tournament as the trigger.</p>
      <p><strong className="text-foreground">The pre-sale window at 2024–2025 prices is closing.</strong> In projects like The Residences at Grand Island Cancun, the price increases 33% on June 1, 2026. Once projects reach delivery or open-market commercialization, entry prices will have risen 15 to 33% above current levels.</p>
      <p><strong className="text-foreground">Infrastructure keeps arriving.</strong> The Nichupté corridor, airport expansions and new road access to northern Cancún continue compressing transfer times and expanding the value of zones like Costa Mujeres and Puerto Morelos.</p>

      {/* ── Pre-sale vs Resale ── */}
      <h2 className="text-foreground" id="presale-vs-resale">Pre-sale vs. resale — the comparison that matters</h2>
      <ComparisonTableEN />
      <p>The right answer depends on your investment horizon and risk tolerance. A Rivana advisor can help you determine which fits your profile.</p>

      {/* ── FAQ ── */}
      <h2 className="text-foreground" id="faq">Frequently asked questions about pre-sale in the Mexican Caribbean</h2>
      <div className="space-y-6">
        <div>
          <p className="font-medium text-foreground">Can I buy pre-sale as a foreigner?</p>
          <p>Yes. The purchase is made through a fideicomiso — a Mexican bank trust that grants you full ownership rights. Rivana manages the complete process in English and Spanish.</p>
        </div>
        <div>
          <p className="font-medium text-foreground">Do I need to be in Mexico to buy?</p>
          <p>No. The purchase promise agreement can be signed remotely. The final deed before a notary can be done in person or via power of attorney.</p>
        </div>
        <div>
          <p className="font-medium text-foreground">What happens if the developer doesn't deliver?</p>
          <p>Well-drafted purchase promise agreements include delay penalties and refund mechanisms. Your notary and legal advisor must review these clauses before signing.</p>
        </div>
        <div>
          <p className="font-medium text-foreground">Can I sell the property before delivery?</p>
          <p>In many projects yes — assignment of rights or pre-sale "flip" is a common strategy. Conditions vary by project and must be confirmed in the contract.</p>
        </div>
        <div>
          <p className="font-medium text-foreground">How is pre-sale appreciation taxed?</p>
          <p>Capital gains realized from the sale of a property in Mexico may generate tax obligations both in Mexico and in the buyer's country of residence. Consult a cross-border tax specialist.</p>
        </div>
      </div>

      {/* ── Quote ── */}
      <blockquote className="border-l-2 border-primary pl-6 py-4 my-8">
        <p className="font-display text-xl italic text-foreground leading-relaxed">
          "Pre-sale is not speculation — it is recognizing ahead of the market the value of what is being built. Those who entered Mondrian at launch did not gamble: they calculated."
        </p>
      </blockquote>

      {/* ── CTA ── */}
      <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
        <h3 className="text-xl mb-3 text-foreground">Want to explore the pre-sale options available today?</h3>
        <p className="text-muted-foreground font-body mb-6">Connect with a Rivana advisor — bilingual, specialized in the Mexican Caribbean and with direct access to pricing, floor plans and conditions for every development mentioned here.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://wa.me/529988457224?text=I%20want%20real%20estate%20advisory" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-body tracking-wider uppercase hover:bg-primary/90 transition-colors">
            I Want Real Estate Advisory
          </a>
          <Link to={localePath('/presale')} className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-sm text-sm font-body tracking-wider uppercase text-foreground hover:border-primary/40 transition-colors">
            View all pre-sales
          </Link>
        </div>
      </div>
    </div>
  );
};
