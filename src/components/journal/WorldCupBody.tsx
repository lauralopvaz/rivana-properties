import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const PropertyCard = ({ name, badge, detail, link }: { name: string; badge: string; detail: string; link: string }) => (
  <Link to={link} className="group block bg-card border border-border rounded-sm p-5 hover:border-primary/40 transition-colors my-6">
    <div className="flex items-start justify-between gap-4">
      <div>
        <span className="text-[10px] font-body uppercase tracking-widest text-primary">{badge}</span>
        <h4 className="text-base mt-1 group-hover:text-primary transition-colors">{name}</h4>
        <p className="text-sm text-muted-foreground font-body mt-1">{detail}</p>
      </div>
      <span className="text-primary text-lg shrink-0">→</span>
    </div>
  </Link>
);

/* ══════════════════════════════════════════════════════════════
   SPANISH
   ══════════════════════════════════════════════════════════════ */
export const WorldCupBodyES = () => {
  const { localePath } = useLanguage();
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>Cancún no es solo el destino turístico más visitado de México. Es uno de los mercados inmobiliarios más dinámicos, consistentes y mejor respaldados por demanda estructural en toda América Latina. Mientras otros mercados de la región han pasado por ciclos de volatilidad, corrección y estancamiento, Cancún ha mantenido una trayectoria de crecimiento sostenida que resiste comparación con casi cualquier activo alternativo de inversión.</p>

      <p>El mercado inmobiliario en Cancún experimentó un crecimiento del 14% en el valor de sus propiedades durante el último año, según la Asociación Mexicana de Profesionales Inmobiliarios (AMPI). El perfil predominante de quien adquiere una propiedad hoy es el del inversionista — tanto capitales nacionales como extranjeros dominan las transacciones actuales en el destino turístico.</p>

      <p>Esta guía está escrita para ese inversionista. No para quien busca una casa en la playa. Para quien entiende que Cancún es un activo financiero con cara de paraíso — y quiere los números reales para tomar una decisión informada.</p>

      {/* ── Por qué Cancún ── */}
      <h2 className="text-foreground">Por qué Cancún es un caso de inversión estructural, no cíclica</h2>
      <p>La mayoría de los mercados inmobiliarios de alto rendimiento en el mundo dependen de un factor macroeconómico específico: el crédito barato, la migración interna, el auge de una industria local. Cuando ese factor se revierte, el mercado corrige. Cancún es diferente porque su demanda descansa sobre tres pilares que no se revierten al mismo tiempo ni con la misma facilidad:</p>

      <p><strong className="text-foreground">Conectividad aérea sin paralelo.</strong> Cancún es el único destino con vuelos directos a las 16 sedes oficiales del Mundial 2026. Pero más allá del torneo, el Aeropuerto Internacional de Cancún opera con rutas directas a más de 60 ciudades en América del Norte, Europa y América Latina. Esa conectividad es infraestructura que tomó décadas construir — no puede replicarse en otro destino del Caribe en el corto plazo.</p>

      <p><strong className="text-foreground">Turismo internacional dolarizado.</strong> El mercado de Cancún es híbrido: turístico, internacional, dolarizado en gran parte de su demanda y altamente sensible a infraestructura. Los ingresos por renta vacacional se cotizan en dólares, lo que protege al inversionista mexicano contra la devaluación del peso y produce retornos reales superiores a los de mercados puramente domésticos.</p>

      <p><strong className="text-foreground">Escasez geográfica de producto premium.</strong> La Zona Hotelera tiene 23 kilómetros de costa y no puede expandirse lateralmente. Puerto Cancún tiene una marina diseñada con capacidad finita. Costa Mujeres está en proceso de agotamiento de tierra frente al mar. El stock de tierra frente al mar en Puerto Morelos se está agotando — escasez estructural que garantiza apreciación sostenida. La oferta de producto de lujo frente al Caribe es finita por definición geográfica.</p>

      {/* ── Los números ── */}
      <h2 className="text-foreground">Los números del mercado en 2026 — lo que dicen los datos</h2>

      <div className="bg-card border border-border rounded-sm p-6 my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <span className="font-display text-3xl text-primary">14%</span>
            <p className="text-xs text-muted-foreground font-body mt-1">Crecimiento anual AMPI</p>
          </div>
          <div>
            <span className="font-display text-3xl text-primary">8–12%</span>
            <p className="text-xs text-muted-foreground font-body mt-1">Rendimiento de renta</p>
          </div>
          <div>
            <span className="font-display text-3xl text-primary">$40B+</span>
            <p className="text-xs text-muted-foreground font-body mt-1">IED México 2025</p>
          </div>
          <div>
            <span className="font-display text-3xl text-primary">8.9%</span>
            <p className="text-xs text-muted-foreground font-body mt-1">Índice SHF Q3 2025</p>
          </div>
        </div>
      </div>

      <p>El mercado inmobiliario del Caribe Mexicano proyecta crecimiento sólido en 2026, con plusvalía estimada entre 7% y 9% anual en zonas clave como Cancún y Playa del Carmen. El Índice SHF de Precios de la Vivienda registró 8.9% de apreciación anual al tercer trimestre de 2025, con Quintana Roo superando la media nacional.</p>

      <p>Las proyecciones conservadoras para 2026 muestran crecimiento interanual en torno al 8–12% para segmentos demandados. El lujo y el frente al mar siguen liderando apreciación y demanda, tanto por compradores extranjeros como nacionales de alto poder adquisitivo.</p>

      <p>México superó los $40,000 millones USD en Inversión Extranjera Directa al tercer trimestre de 2025. Los principales inversionistas en Quintana Roo son España y Estados Unidos, enfocados en hotelería boutique, servicios inmobiliarios y vivienda vacacional.</p>

      <p>Lo que estos números dicen en conjunto: el mercado no es especulativo — es maduro, con demanda real, capital institucional respaldando la oferta y un ciclo de apreciación que ya lleva más de una década de tendencia positiva interrumpida únicamente por COVID (y que se recuperó en tiempo récord).</p>

      {/* ── Mundial FIFA ── */}
      <h2 className="text-foreground">El impacto del Mundial FIFA 2026 — cómo posicionarse antes de la ola</h2>
      <p>Cuando la FIFA confirmó que la Copa del Mundo 2026 se celebrará en México, Estados Unidos y Canadá, hay un dato que no ha recibido suficiente atención estratégica: <strong className="text-foreground">Cancún es el único destino con vuelos directos a las 16 sedes oficiales del Mundial 2026.</strong> No estamos hablando de turismo. Estamos hablando de infraestructura posicionada.</p>

      <p>Millones de aficionados desplazándose entre ciudades durante varias semanas. Alguien que cruza el océano para vivir el Mundial necesita una base de operaciones. Cancún es esa base — con la playa, el Caribe, la infraestructura hotelera de lujo y los vuelos directos a cada sede del torneo.</p>

      <p>La estructura del impacto es en dos fases:</p>

      <p><strong className="text-foreground">Fase 1 — Antes del torneo (ahora).</strong> Los inversionistas estratégicos detectan el potencial mientras los precios todavía no reflejan completamente el evento. Los que maximizan retornos entran en esta fase. Las propiedades con permiso STR activo en la Zona Hotelera y el corredor norte ya están recibiendo reservas para junio y julio de 2026 con tarifas entre 40 y 65% superiores al mismo período del año anterior.</p>

      <p><strong className="text-foreground">Fase 2 — Post-torneo (2026–2028).</strong> La visibilidad global que genera un Mundial no desaparece cuando termina el torneo — construye una narrativa de destino que persiste durante años. El mercado de Cancún post-2026 tendrá más compradores internacionales, más demanda turística y un mercado de renta más maduro que el de hoy.</p>

      {/* ── Zona a zona ── */}
      <h2 className="text-foreground">Zona a zona — análisis de inversión actualizado</h2>

      {/* Zona Hotelera */}
      <h3 className="text-foreground text-xl">Zona Hotelera: el motor de la renta vacacional</h3>
      <p>33% de plusvalía en preventa, rendimientos de renta del 8 al 12%, más de 12 millones de turistas al año. La Zona Hotelera es el activo de mayor liquidez en todo el Caribe Mexicano — 23 kilómetros de playa con la infraestructura hotelera más madura del país.</p>

      <p>Un departamento con vistas al mar puede generar ingresos atractivos en temporada alta. Las tarifas se cotizan en dólares y la demanda internacional puede elevar considerablemente el flujo mensual. El factor decisivo es siempre el permiso STR — los edificios con permiso activo generan entre 30 y 50% más de ingreso anual que los que operan en renta mensual.</p>

      <PropertyCard name="Mondrian Residences at Grand Island" badge="Preventa · ROI 33%" detail="Gestión Accor · Llave en mano · Desde $9,050,000 MXN · Entrega Q2 2027" link={localePath('/propiedad/mondrian-residences-grand-island-cancun')} />
      <PropertyCard name="Bay View Grand at Grand Island" badge="Preventa" detail="+40 amenidades · Filipão Nunes · Desde $586K USD · Ocupación >80%" link={localePath('/propiedad/bay-view-grand-grand-island')} />
      <PropertyCard name="Kabeek Marina & Condos" badge="Preventa · Exclusivo" detail="Solo 23 residencias · Muelle privado 80 pies · Arq. Humberto Artigas" link={localePath('/propiedad/kabeek-marina-condos')} />

      <Link to={localePath('/cancun/zona-hotelera')} className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline">Ver todas las propiedades en Zona Hotelera →</Link>

      {/* Puerto Cancún */}
      <h3 className="text-foreground text-xl mt-10">Puerto Cancún: patrimonio de largo plazo con vida de marina</h3>
      <p>Puerto Cancún es el desarrollo más exclusivo de Cancún y uno de los más prestigiosos de México. Marina privada, campo de golf, seguridad 24/7, escuelas internacionales y centros comerciales de lujo. Plusvalía anual sostenida del 15%, con proyecciones de aceleración para 2026.</p>

      <p>Puerto Cancún busca el mercado de segundas casas que antes no existía en Cancún, y que debido a la gran conectividad del destino y la belleza natural, resulta ser de gran atractivo para nacionales y extranjeros.</p>

      <PropertyCard name="SLS Ocean Beach" badge="Preventa · Branded" detail="Inmobilia + Related · SLS Hotels · Desde $1.6M USD · Entrega verano 2028" link={localePath('/propiedad/sls-ocean-beach-puerto-cancun')} />
      <PropertyCard name="Vellmari Grand Living" badge="Preventa" detail="2 torres · Vistas 200° · 20 amenidades · Desde $846K USD" link={localePath('/propiedad/vellmari-grand-living')} />

      <Link to={localePath('/cancun/puerto-cancun')} className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline">Ver todas las propiedades en Puerto Cancún →</Link>

      {/* Costa Mujeres */}
      <h3 className="text-foreground text-xl mt-10">Costa Mujeres: la zona de mayor potencial de plusvalía</h3>
      <p>Costa Mujeres ofrece precios de preconstrucción con apreciación proyectada del 18–25% para 2026. Más de 26 kilómetros de playas prístinas. Plusvalía anual del 22%, rendimientos de renta del 8 al 12%.</p>

      <p>Costa Mujeres está atravesando un proceso de consolidación impulsado por el desarrollo hotelero e infraestructura — similar al que vivieron Puerto Cancún en sus primeras etapas y Huayacán hace algunos años, que hoy son zonas de alta plusvalía consolidada.</p>

      <PropertyCard name="Dhamar" badge="Preventa" detail="1–3 rec. · 47–177 m² · Desde $248K USD · Entrega 2027" link={localePath('/propiedad/dhamar-costa-mujeres')} />

      <Link to={localePath('/cancun/costa-mujeres')} className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline">Ver todas las preventas en Costa Mujeres →</Link>

      {/* Puerto Morelos */}
      <h3 className="text-foreground text-xl mt-10">Puerto Morelos: el secreto mejor guardado del corredor</h3>
      <p>Puerto Morelos es un pueblo pesquero convertido en joya costera — entre Cancún y Playa del Carmen, con acceso al segundo arrecife más grande del mundo. A solo 20 minutos del aeropuerto internacional. Plusvalía anual del 20%, rendimientos de renta del 8 al 12%.</p>

      <PropertyCard name="Village Blu Beach Apartments" badge="Preventa · ROI 8.8%" detail="Frente al mar · Desde $273K USD · Gestión OPENKEY · Entrega invierno 2026" link={localePath('/propiedad/village-blu-beach-apartments')} />
      <PropertyCard name="Sole Blu Ocean Living" badge="Preventa · ROI ~10%" detail="Gestión 100% delegada · Desde $392K USD · Entrega verano 2026" link={localePath('/propiedad/sole-blu-ocean-living')} />

      <Link to={localePath('/puerto-morelos')} className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline">Ver todas las propiedades en Puerto Morelos →</Link>

      {/* Mayakoba */}
      <h3 className="text-foreground text-xl mt-10">Mayakoba: el ultra-lujo que no tiene sustituto</h3>
      <p>Mayakoba es el corredor de lujo más prestigioso de la Riviera Maya, hogar de Rosewood, Fairmont y Banyan Tree. Plusvalía anual del 16%, rendimientos de renta del 8 al 12%. La selección de Uruguay confirmó su base en el Fairmont Mayakoba para el Mundial 2026 — el ecosistema más exclusivo del Caribe Mexicano en la pantalla de dos mil millones de personas.</p>

      <PropertyCard name="The Reserve at Mayakoba" badge="Preventa · Ultra-lujo" detail="144 residencias · Banyan Tree services · Desde $1.1M USD · Entregas 2027–2028" link={localePath('/propiedad/the-reserve-at-mayakoba')} />

      <Link to={localePath('/mayakoba')} className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline">Ver Mayakoba →</Link>

      {/* ── Renta vs Plusvalía ── */}
      <h2 className="text-foreground mt-12">Renta vs. Plusvalía — la conversación que importa</h2>
      <p>En Cancún, gran parte de la riqueza inmobiliaria histórica no se ha generado por la renta, sino por la apreciación. La renta mantiene la propiedad viva; la plusvalía construye el patrimonio. Una paga el presente; la otra construye el futuro.</p>

      <p>Para el inversionista sofisticado, la respuesta no es elegir entre las dos — es entender en qué punto del ciclo está entrando y qué combinación de ambas produce el mayor retorno total sobre el capital invertido:</p>

      <p><strong className="text-foreground">Si entras en preventa hoy,</strong> capturas la plusvalía de construcción (15–33% según el proyecto) más la plusvalía de mercado durante la fase de obra más el rendimiento de renta desde la entrega. Ese es el ROI total — tres fuentes sobre el mismo capital. El mercado inmobiliario de Cancún ha recibido más de 7,500 millones de pesos en inversión, con una plusvalía que supera el 30% en tan solo 18 meses en proyectos bien posicionados.</p>

      <p><strong className="text-foreground">Si entras en reventa,</strong> el flujo de caja es inmediato en propiedades con permiso STR activo, pero la plusvalía de preventa ya fue capturada por el comprador anterior. El rendimiento neto en renta — descontando mantenimiento, gestión y vacancia — se ubica entre el 5 y el 8% anual. Sólido, predecible y perfectamente aceptable para un portafolio conservador.</p>

      {/* ── Lo que verificar ── */}
      <h2 className="text-foreground">Lo que el inversionista inteligente verifica antes de entrar</h2>
      <p>Es importante verificar la certeza jurídica de la propiedad, revisar el historial del desarrollador, confirmar permisos de construcción y analizar el potencial de plusvalía de la zona.</p>

      <p>En Rivana, esos no son consejos genéricos — son los cuatro filtros que aplicamos antes de cualquier recomendación:</p>

      <p><strong className="text-foreground">Certeza jurídica:</strong> título limpio, libre de gravámenes, no ejidal. Tu notario confirma; Rivana lo verifica primero.</p>
      <p><strong className="text-foreground">Historial del desarrollador:</strong> track record de entregas anteriores, no promesas de ventas. ELEVA Capital Group, Inmobilia, Sancus Capital Partners y Related son los perfiles de desarrollador que buscamos.</p>
      <p><strong className="text-foreground">Permiso STR:</strong> si tu objetivo es renta vacacional, el reglamento de condominio debe permitirlo. Lo verificamos antes de la primera conversación de precio.</p>
      <p><strong className="text-foreground">Micro-ubicación:</strong> dentro de cada zona, hay sub-corredores con perfiles de apreciación y demanda distintos. La diferencia entre el km 10 y el km 16 de la Zona Hotelera no es estética — es financiera.</p>

      {/* ── FAQ ── */}
      <h2 className="text-foreground">Preguntas frecuentes del inversionista</h2>

      <p><strong className="text-foreground">¿Es 2026 demasiado tarde para entrar al mercado de Cancún?</strong><br />No. Las proyecciones para 2026 siguen mostrando crecimiento interanual en torno al 8–12% para segmentos demandados. Y en preventa, los proyectos con entrega en 2027–2028 todavía ofrecen el descuento estructural del ciclo de construcción.</p>

      <p><strong className="text-foreground">¿Cómo afecta el tipo de cambio a mi inversión si soy extranjero?</strong><br />Los ingresos por renta vacacional se cotizan en dólares en los segmentos de lujo. La compra puede estructurarse en dólares en la mayoría de los proyectos del portafolio Rivana. El fideicomiso no tiene restricciones de moneda para la repatriación de ganancias.</p>

      <p><strong className="text-foreground">¿Qué zona tiene el mayor potencial de apreciación en los próximos 3 años?</strong><br />Costa Mujeres proyecta una apreciación del 18–25% con plusvalía anual del 22% — la más alta del área metropolitana de Cancún. Seguida de Zona Hotelera (18–33% en preventa) y Puerto Morelos (20% anual).</p>

      <p><strong className="text-foreground">¿Cuánto capital mínimo necesito para invertir en Cancún?</strong><br />El punto de entrada más accesible del portafolio Rivana es Dhamar en Costa Mujeres, desde $248,000 USD. Village Blu en Puerto Morelos parte de $273,000 USD. Ambos con esquemas de pago en preventa que permiten estructurar la compra con 20–30% de enganche inicial.</p>

      {/* ── Quote ── */}
      <blockquote className="border-l-2 border-primary pl-6 py-4 my-8">
        <p className="font-display text-xl italic text-foreground leading-relaxed">"Cancún no es una apuesta — es una tesis de inversión respaldada por infraestructura, demanda estructural y escasez geográfica. Los que lo entendieron hace diez años construyeron patrimonio extraordinario. Los que lo entienden hoy todavía están a tiempo."</p>
      </blockquote>

      {/* ── CTA ── */}
      <div className="bg-card border border-border rounded-sm p-8 my-12 text-center">
        <h3 className="text-xl text-foreground mb-3">¿Quieres analizar cuál es la mejor opción para tu perfil de inversión?</h3>
        <p className="text-muted-foreground font-body mb-6">Habla hoy con un asesor Rivana — bilingüe, especializado en el mercado de Cancún y la Riviera Maya, con acceso directo a números reales y disponibilidad actualizada de todos los desarrollos del portafolio.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria" target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="lg">Quiero asesoría inmobiliaria</Button>
          </a>
          <Link to={localePath('/listings')}>
            <Button variant="outline" size="lg">Ver todas las propiedades</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════
   ENGLISH
   ══════════════════════════════════════════════════════════════ */
export const WorldCupBodyEN = () => {
  const { localePath } = useLanguage();
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>Cancún is not just Mexico's most visited tourist destination. It is one of the most dynamic, consistent and structurally demand-backed real estate markets in all of Latin America. While other regional markets have moved through cycles of volatility, correction and stagnation, Cancún has maintained a sustained growth trajectory that holds up against virtually any alternative investment asset.</p>

      <p>Cancún's real estate market registered 14% growth in property values over the past year, according to the Mexican Association of Real Estate Professionals (AMPI). The predominant profile of today's buyer is the investor — both national and international capital dominate current transactions in the tourism destination.</p>

      <p>This guide is written for that investor. Not for someone looking for a beach house. For someone who understands that Cancún is a financial asset with the face of paradise — and wants the real numbers to make an informed decision.</p>

      {/* ── Structural case ── */}
      <h2 className="text-foreground">Why Cancún is a structural investment case, not a cyclical one</h2>
      <p>Most high-yield real estate markets in the world depend on a specific macroeconomic factor: cheap credit, domestic migration, the boom of a local industry. When that factor reverses, the market corrects. Cancún is different because its demand rests on three pillars that do not reverse simultaneously or easily:</p>

      <p><strong className="text-foreground">Unparalleled air connectivity.</strong> Cancún is the only destination with direct flights to all 16 official 2026 World Cup venues. But beyond the tournament, Cancún International Airport operates direct routes to over 60 cities in North America, Europe and Latin America. That connectivity is infrastructure that took decades to build — it cannot be replicated in another Caribbean destination in the near term.</p>

      <p><strong className="text-foreground">Dollarized international tourism.</strong> The Cancún market is hybrid: tourism-driven, international, largely dollarized in its demand and highly sensitive to infrastructure. Vacation rental income is quoted in US dollars, which protects the Mexican investor against peso devaluation and produces real returns superior to those of purely domestic markets.</p>

      <p><strong className="text-foreground">Geographic scarcity of premium product.</strong> The Hotel Zone has 23 kilometers of coastline and cannot expand laterally. Puerto Cancún has a marina designed with finite capacity. Costa Mujeres is in the process of exhausting beachfront land. Beachfront land inventory in Puerto Morelos is running out — structural scarcity that guarantees sustained appreciation. The supply of luxury product facing the Caribbean is finite by geographic definition.</p>

      {/* ── Market data ── */}
      <h2 className="text-foreground">The 2026 market data — what the numbers say</h2>

      <div className="bg-card border border-border rounded-sm p-6 my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <span className="font-display text-3xl text-primary">14%</span>
            <p className="text-xs text-muted-foreground font-body mt-1">AMPI annual growth</p>
          </div>
          <div>
            <span className="font-display text-3xl text-primary">8–12%</span>
            <p className="text-xs text-muted-foreground font-body mt-1">Rental yield</p>
          </div>
          <div>
            <span className="font-display text-3xl text-primary">$40B+</span>
            <p className="text-xs text-muted-foreground font-body mt-1">Mexico FDI 2025</p>
          </div>
          <div>
            <span className="font-display text-3xl text-primary">8.9%</span>
            <p className="text-xs text-muted-foreground font-body mt-1">SHF Index Q3 2025</p>
          </div>
        </div>
      </div>

      <p>The Mexican Caribbean real estate market projects solid growth in 2026, with estimated appreciation of 7% to 9% annually in key zones including Cancún and Playa del Carmen. The SHF Housing Price Index recorded 8.9% annual appreciation through Q3 2025, with Quintana Roo exceeding the national average.</p>

      <p>Conservative projections for 2026 show year-over-year growth of 8 to 12% for in-demand segments. Luxury and beachfront continue to lead appreciation and demand, driven by both foreign and high-net-worth domestic buyers.</p>

      <p>Mexico exceeded $40 billion USD in Foreign Direct Investment through Q3 2025. The leading investors in Quintana Roo are Spain and the United States, focused on boutique hospitality, real estate services and vacation residential.</p>

      <p>What these numbers say collectively: this market is not speculative — it is mature, backed by real demand, institutional capital supporting supply and an appreciation cycle that has maintained a positive trend for over a decade, interrupted only by COVID (from which it recovered at record speed).</p>

      {/* ── World Cup ── */}
      <h2 className="text-foreground">The FIFA World Cup 2026 impact — how to position before the wave</h2>
      <p>When FIFA confirmed that the 2026 World Cup would be held across Mexico, the United States and Canada, one strategically enormous detail did not receive enough attention: <strong className="text-foreground">Cancún is the only destination with direct flights to all 16 official World Cup venues.</strong> This is not tourism. This is positioned infrastructure.</p>

      <p>Millions of fans moving between cities over several weeks. Someone who crosses an ocean to experience the World Cup needs a base of operations. Cancún is that base — with the beach, the Caribbean, world-class hotel infrastructure and direct flights to every tournament venue.</p>

      <p>The impact structure is two-phase:</p>

      <p><strong className="text-foreground">Phase 1 — Before the tournament (now).</strong> Strategic investors detect the potential while prices do not yet fully reflect the event. Those who maximize returns enter in this phase. Properties with active STR permits in the Hotel Zone and northern corridor are already receiving reservations for June and July 2026 at rates 40 to 65% above the same period of the prior year.</p>

      <p><strong className="text-foreground">Phase 2 — Post-tournament (2026–2028).</strong> The global visibility generated by a World Cup does not disappear when the tournament ends — it builds a destination narrative that persists for years. The post-2026 Cancún market will have more international buyers, stronger tourism demand and a more mature rental market than today's.</p>

      {/* ── Zone by zone ── */}
      <h2 className="text-foreground">Zone by zone — updated investment analysis</h2>

      {/* Hotel Zone */}
      <h3 className="text-foreground text-xl">Hotel Zone: the vacation rental engine</h3>
      <p>33% pre-sale appreciation, rental yields of 8 to 12%, over 12 million tourists per year. The Hotel Zone is the highest-liquidity asset in the entire Mexican Caribbean — 23 kilometers of beach with the country's most mature hotel infrastructure.</p>

      <p>A sea-view apartment can generate attractive income in high season. Rates are quoted in dollars and international demand can significantly elevate monthly cash flow. The decisive factor is always the STR permit — buildings with active permits generate 30 to 50% more annual income than those operating on monthly leases.</p>

      <PropertyCard name="Mondrian Residences at Grand Island" badge="Pre-Sale · ROI 33%" detail="Accor management · Turnkey · From $9,050,000 MXN · Q2 2027 delivery" link={localePath('/propiedad/mondrian-residences-grand-island-cancun')} />
      <PropertyCard name="Bay View Grand at Grand Island" badge="Pre-Sale" detail="40+ amenities · Filipão Nunes · From $586K USD · >80% occupancy" link={localePath('/propiedad/bay-view-grand-grand-island')} />
      <PropertyCard name="Kabeek Marina & Condos" badge="Pre-Sale · Exclusive" detail="Only 30 residences · Private dock 80 ft · Humberto Artigas" link={localePath('/propiedad/kabeek-marina-condos')} />

      <Link to={localePath('/cancun/zona-hotelera')} className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline">View all Hotel Zone properties →</Link>

      {/* Puerto Cancún */}
      <h3 className="text-foreground text-xl mt-10">Puerto Cancún: long-term wealth with marina lifestyle</h3>
      <p>Puerto Cancún is Cancún's most exclusive development and one of the most prestigious in Mexico. Private marina, golf course, 24-hour security, international schools and luxury shopping. Sustained annual appreciation of 15%, with acceleration projections for 2026.</p>

      <p>Puerto Cancún is targeting the second-home market that did not previously exist in Cancún, and due to the destination's great connectivity and natural beauty, it is highly attractive to both national and foreign buyers.</p>

      <PropertyCard name="SLS Ocean Beach" badge="Pre-Sale · Branded" detail="Inmobilia + Related · SLS Hotels · From $1.6M USD · Summer 2028" link={localePath('/propiedad/sls-ocean-beach-puerto-cancun')} />
      <PropertyCard name="Vellmari Grand Living" badge="Pre-Sale" detail="2 towers · 200° views · 20 amenities · From $846K USD" link={localePath('/propiedad/vellmari-grand-living')} />

      <Link to={localePath('/cancun/puerto-cancun')} className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline">View all Puerto Cancún properties →</Link>

      {/* Costa Mujeres */}
      <h3 className="text-foreground text-xl mt-10">Costa Mujeres: the zone with the highest appreciation potential</h3>
      <p>Costa Mujeres offers pre-construction pricing with projected appreciation of 18–25% through 2026. Over 26 kilometers of pristine beaches. Annual appreciation of 22%, rental yields of 8 to 12%.</p>

      <p>Costa Mujeres is going through a consolidation process driven by hotel development and infrastructure — similar to what Puerto Cancún experienced in its early stages and Huayacán a few years ago, both of which are today consolidated high-appreciation zones.</p>

      <PropertyCard name="Dhamar" badge="Pre-Sale" detail="1–3 bed · 47–177 m² · From $248K USD · 2027 delivery" link={localePath('/propiedad/dhamar-costa-mujeres')} />

      <Link to={localePath('/cancun/costa-mujeres')} className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline">View all Costa Mujeres pre-sales →</Link>

      {/* Puerto Morelos */}
      <h3 className="text-foreground text-xl mt-10">Puerto Morelos: the corridor's best-kept secret</h3>
      <p>Puerto Morelos is a fishing village turned coastal gem — between Cancún and Playa del Carmen, with access to the world's second-largest reef. Just 20 minutes from Cancún International Airport. Annual appreciation of 20%, rental yields of 8 to 12%.</p>

      <PropertyCard name="Village Blu Beach Apartments" badge="Pre-Sale · ROI 8.8%" detail="Beachfront · From $273K USD · OPENKEY mgmt · Winter 2026" link={localePath('/propiedad/village-blu-beach-apartments')} />
      <PropertyCard name="Sole Blu Ocean Living" badge="Pre-Sale · ROI ~10%" detail="100% delegated mgmt · From $392K USD · Summer 2026" link={localePath('/propiedad/sole-blu-ocean-living')} />

      <Link to={localePath('/puerto-morelos')} className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline">View all Puerto Morelos properties →</Link>

      {/* Mayakoba */}
      <h3 className="text-foreground text-xl mt-10">Mayakoba: the ultra-luxury that has no substitute</h3>
      <p>Mayakoba is the most prestigious luxury corridor in the Riviera Maya, home to Rosewood, Fairmont and Banyan Tree. Annual appreciation of 16%, rental yields of 8 to 12%. Uruguay's national team confirmed its base at the Fairmont Mayakoba for the 2026 World Cup — the most exclusive ecosystem in the Mexican Caribbean on the screens of two billion people.</p>

      <PropertyCard name="The Reserve at Mayakoba" badge="Pre-Sale · Ultra-luxury" detail="144 residences · Banyan Tree services · From $1.1M USD · 2027–2028" link={localePath('/propiedad/the-reserve-at-mayakoba')} />

      <Link to={localePath('/mayakoba')} className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline">View Mayakoba →</Link>

      {/* ── Rental vs Appreciation ── */}
      <h2 className="text-foreground mt-12">Rental income vs. appreciation — the conversation that matters</h2>
      <p>In Cancún, most of the historical real estate wealth has not been generated by rental income but by appreciation. Rental income keeps the property financially healthy; appreciation builds the wealth. One pays the present; the other builds the future.</p>

      <p>For the sophisticated investor, the answer is not choosing between the two — it is understanding at which point of the cycle you are entering and which combination of both produces the highest total return on invested capital:</p>

      <p><strong className="text-foreground">If you enter pre-sale today,</strong> you capture construction-phase appreciation (15–33% depending on the project) plus market appreciation during the build phase plus rental yield from delivery. That is total ROI — three sources on the same capital. Cancún's real estate market has received over 7.5 billion pesos in investment, with appreciation exceeding 30% in just 18 months in well-positioned projects.</p>

      <p><strong className="text-foreground">If you enter resale,</strong> cash flow is immediate in properties with active STR permits, but the pre-sale appreciation was already captured by the previous buyer. Net rental yield — after maintenance, management and vacancy — runs 5 to 8% annually. Solid, predictable and entirely acceptable for a conservative portfolio.</p>

      {/* ── What to verify ── */}
      <h2 className="text-foreground">What the smart investor verifies before entering</h2>
      <p>It is important to verify the legal certainty of the property, review the developer's track record, confirm construction permits and analyze the appreciation potential of the zone.</p>

      <p>At Rivana, those are not generic guidelines — they are the four filters applied before any recommendation:</p>

      <p><strong className="text-foreground">Legal certainty:</strong> clean title, free of encumbrances, non-ejido. Your notary confirms; Rivana verifies first.</p>
      <p><strong className="text-foreground">Developer track record:</strong> proven delivery history, not just sales promises. ELEVA Capital Group, Inmobilia, Sancus Capital Partners and Related are the developer profiles we look for.</p>
      <p><strong className="text-foreground">STR permit:</strong> if vacation rental income is your goal, the condo bylaws must allow it. We verify before the first price conversation.</p>
      <p><strong className="text-foreground">Micro-location:</strong> within each zone, there are sub-corridors with distinct appreciation and demand profiles. The difference between km 10 and km 16 in the Hotel Zone is not aesthetic — it is financial.</p>

      {/* ── FAQ ── */}
      <h2 className="text-foreground">Frequently asked questions from investors</h2>

      <p><strong className="text-foreground">Is 2026 too late to enter the Cancún market?</strong><br />No. Projections for 2026 continue to show year-over-year growth of 8 to 12% for in-demand segments. And in pre-sale, projects with 2027–2028 delivery still offer the structural discount of the construction cycle.</p>

      <p><strong className="text-foreground">How does exchange rate affect my investment as a foreign buyer?</strong><br />Vacation rental income is quoted in US dollars in luxury segments. The purchase can be structured in dollars in most Rivana portfolio projects. The fideicomiso has no currency restrictions on profit repatriation.</p>

      <p><strong className="text-foreground">Which zone has the highest appreciation potential over the next 3 years?</strong><br />Costa Mujeres projects 18–25% appreciation with 22% annual growth — the highest in the Cancún metropolitan area. Followed by Hotel Zone (18–33% in pre-sale) and Puerto Morelos (20% annually).</p>

      <p><strong className="text-foreground">What is the minimum capital to invest in Cancún?</strong><br />The most accessible entry point in Rivana's portfolio is Dhamar in Costa Mujeres, from $248,000 USD. Village Blu in Puerto Morelos starts at $273,000 USD. Both offer pre-sale payment plans allowing purchase with 20–30% initial down payment.</p>

      {/* ── Quote ── */}
      <blockquote className="border-l-2 border-primary pl-6 py-4 my-8">
        <p className="font-display text-xl italic text-foreground leading-relaxed">"Cancún is not a bet — it is an investment thesis backed by infrastructure, structural demand and geographic scarcity. Those who understood that ten years ago built extraordinary wealth. Those who understand it today are still in time."</p>
      </blockquote>

      {/* ── CTA ── */}
      <div className="bg-card border border-border rounded-sm p-8 my-12 text-center">
        <h3 className="text-xl text-foreground mb-3">Want to analyze which option fits your investment profile?</h3>
        <p className="text-muted-foreground font-body mb-6">Connect with a Rivana advisor today — bilingual, specialized in Cancún and Riviera Maya real estate, with direct access to real numbers and updated availability across the entire portfolio.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://wa.me/529988457224?text=I%20want%20real%20estate%20advisory" target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="lg">I Want Real Estate Advisory</Button>
          </a>
          <Link to={localePath('/listings')}>
            <Button variant="outline" size="lg">View all properties</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
