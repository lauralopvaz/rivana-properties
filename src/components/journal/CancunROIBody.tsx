import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

/* ── Inline property card ── */
const PropertyCard = ({ name, badge, detail, link }: { name: string; badge: string; detail: string; link: string }) => (
  <Link to={link} className="group block bg-card border border-border rounded-sm p-5 hover:border-primary/40 transition-colors my-6">
    <div className="flex items-start justify-between gap-4">
      <div>
        <span className="text-[10px] font-body uppercase tracking-widest text-primary">{badge}</span>
        <h3 className="text-base mt-1 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-sm text-muted-foreground font-body mt-1">{detail}</p>
      </div>
      <span className="text-primary text-lg shrink-0">→</span>
    </div>
  </Link>
);

/* ══════════════════════════════════════════════════════════════
   SPANISH
   ══════════════════════════════════════════════════════════════ */
export const CancunROIBodyES = () => {
  const { localePath } = useLanguage();
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>Cancún no es un solo mercado inmobiliario — es cuatro mercados distintos que coexisten en el mismo municipio, con perfiles de comprador, estructuras de renta y potenciales de plusvalía fundamentalmente diferentes. La Zona Hotelera genera el mayor volumen de renta vacacional del Caribe Mexicano. Puerto Cancún ofrece el lujo de marina con apreciación sostenida. Cancún Centro entrega el mayor rendimiento de renta mensual por peso invertido. Y el corredor norte — Costa Mujeres — tiene las proyecciones de plusvalía más agresivas de toda el área metropolitana.</p>

      <p>Elegir correctamente entre estas zonas no es cuestión de preferencia personal: es una decisión financiera que puede representar entre 4 y 8 puntos de diferencia en el rendimiento anual de tu inversión. Esta guía desglosa los números reales por zona para que tomes esa decisión con información completa, y referencia las propiedades del portafolio Rivana disponibles en cada corredor.</p>

      {/* ── Macro context ── */}
      <h2 className="text-foreground">El contexto macro — por qué Cancún en 2026</h2>
      <p>El Aeropuerto Internacional de Cancún recibe más de 30 millones de pasajeros al año, posicionándolo como el segundo más transitado de México y uno de los principales puntos de entrada para visitantes internacionales de América del Norte y Europa. Esa conectividad es la base estructural del rendimiento de renta en toda el área metropolitana: sin demanda turística constante, el modelo de renta vacacional no funciona. Con ella, los números son difícilmente replicables en otros mercados de la región.</p>

      <div className="bg-card border border-border rounded-sm p-6 my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <span className="font-display text-3xl text-primary">33%</span>
            <p className="text-xs text-muted-foreground font-body mt-1">Plusvalía preventa ZH</p>
          </div>
          <div>
            <span className="font-display text-3xl text-primary">15%</span>
            <p className="text-xs text-muted-foreground font-body mt-1">Plusvalía Puerto Cancún</p>
          </div>
          <div>
            <span className="font-display text-3xl text-primary">8–12%</span>
            <p className="text-xs text-muted-foreground font-body mt-1">Rendimiento renta</p>
          </div>
          <div>
            <span className="font-display text-3xl text-primary">12M+</span>
            <p className="text-xs text-muted-foreground font-body mt-1">Turistas/año</p>
          </div>
        </div>
      </div>

      <p>El denominador común es la demanda: más de 12 millones de turistas al año como base de demanda sostenida, con el Mundial FIFA 2026 proyectando un incremento histórico del 35 al 50% en flujo internacional durante junio y julio. Para propiedades con permiso STR activo, ese pico representa el equivalente a 3 o 4 meses de ingreso normal comprimidos en 6 semanas.</p>

      {/* ── Zona Hotelera ── */}
      <h2 className="text-foreground">Zona Hotelera — el motor de la renta vacacional</h2>
      <p>La Zona Hotelera es el activo de mayor liquidez y mayor volumen de renta vacacional en todo el Caribe Mexicano. Sus 23 kilómetros de playa, con la infraestructura hotelera más madura del país y una demanda turística que no cesa, producen los rendimientos STR más consistentes del área metropolitana de Cancún.</p>

      <p>Invertir en la Zona Hotelera significa acceder a un mercado con demanda constante, rendimientos de alquiler probados y plusvalía sostenida — con Punta Cancún alcanzando precios de $3,200 USD por metro cuadrado, la zona media en $2,800 USD y Punta Nizuc desde $2,500 USD.</p>

      <p>Los rendimientos brutos de renta a corto plazo en propiedades con permiso STR activo en la Zona Hotelera oscilan entre el 9 y el 12% anual, con tasas de ocupación del 75 al 85% en temporada alta y del 55 al 65% en temporada baja. Las tarifas nocturnas van de $150 USD para studios hasta $500 USD o más para penthouses y unidades de 3 recámaras con vistas privilegiadas.</p>

      <p>El factor determinante en la Zona Hotelera es siempre el permiso STR. Los edificios sin permiso activo quedan limitados a renta mensual, lo que reduce el rendimiento al 5–7% bruto — una diferencia de entre 30 y 40% en el ingreso anual proyectado. Rivana verifica este dato antes de cualquier recomendación.</p>

      <h3 className="text-foreground text-xl">Propiedades Rivana en Zona Hotelera</h3>

      <p><strong className="text-foreground">The Residences at Grand Island Cancun</strong> — Residencia de marca operada por Marca Elite internacional. Entrega llave en mano, totalmente amueblada y equipada. Plusvalía preventa del 33%. Vista dual al Caribe y la Laguna Nichupté — el único desarrollo en la Zona Hotelera con esa perspectiva. Desde $9,050,000 MXN, entrega Q2 2027. Gestión Marca Elite internacional desde el primer día, sin curva de aprendizaje ni gestión directa del propietario.</p>
      <PropertyCard name="The Residences at Grand Island Cancun" badge="Preventa" detail="Branded · Vista dual Caribe + Laguna · Desde $9.05M MXN · Q2 2027" link={localePath('/propiedad/mondrian-residences-grand-island-cancun')} />

      <p><strong className="text-foreground">Bay View Grand at Grand Island</strong> — Más de 40 amenidades de resort, interiores de Filipão Nunes, cinco tipologías desde $586,000 USD. Ocupación vacacional superior al 80% anual. Inmediatamente comercializable en plataformas STR.</p>
      <PropertyCard name="Bay View Grand at Grand Island" badge="Preventa" detail="40+ amenidades · 5 tipologías · Desde $586K USD" link={localePath('/propiedad/bay-view-grand-grand-island')} />

      <p><strong className="text-foreground">Kabeek Marina & Condos</strong> — Solo 23 residencias con muelle privado a la Laguna Nichupté para embarcaciones de hasta 80 pies. Doble vista Caribe y laguna. Arquitectura de Humberto Artigas. El activo más escaso de la Zona Hotelera.</p>
      <PropertyCard name="Kabeek Marina & Condos" badge="Preventa Exclusiva" detail="23 unidades · Marina privada · Doble vista · Arq. Humberto Artigas" link={localePath('/propiedad/kabeek-marina-condos')} />

      <div className="text-center my-4">
        <Link to={localePath('/cancun/zona-hotelera')} className="text-primary font-body text-sm hover:underline">Ver todas las propiedades en Zona Hotelera →</Link>
      </div>

      {/* ── Puerto Cancún ── */}
      <h2 className="text-foreground">Puerto Cancún — marina, plusvalía y vida de lujo permanente</h2>
      <p>Puerto Cancún es una propuesta distinta a la Zona Hotelera: no compite en volumen de renta vacacional — compite en calidad de activo patrimonial. Es una comunidad residencial cerrada con marina privada, campo de golf y acceso directo al mar — el desarrollo más exclusivo de Cancún y uno de los más prestigiosos de México. Con seguridad las 24 horas, centros comerciales de lujo y escuelas internacionales, es ideal para familias que buscan calidad de vida sin renunciar al retorno de inversión.</p>

      <p>Los precios en Puerto Cancún van desde $3,800 USD por metro cuadrado en la zona marina hasta $2,800 USD en la zona comercial mixta. La plusvalía anual sostenida es del 15%, con proyecciones de aceleración por el Mundial 2026.</p>

      <p>El perfil de renta en Puerto Cancún difiere de la Zona Hotelera: la mayoría de los propietarios opta por renta mensual de largo plazo o por uso propio con renta estacional. El rendimiento de renta mensual bruto se ubica entre el 7 y el 9% anual — ligeramente inferior al pico STR de la Zona Hotelera — pero la apreciación de capital y la liquidez de reventa en un mercado de compradores de alto nivel compensan esa diferencia.</p>

      <h3 className="text-foreground text-xl">Propiedades Rivana en Puerto Cancún</h3>

      <p><strong className="text-foreground">SLS Ocean Beach</strong> — Residencias de lujo en Novo Cancún desarrolladas por Inmobilia, Ucalli y Related. Arquitectura por Arquitectonica, interiorismo por Bernardi + Peschard. Operado bajo la marca SLS Hotels (Ennismore + Marca Elite internacional). Unidades de 191 a 356 m² desde $1.6 millones USD. Entrega verano 2028. El respaldo de marca más sofisticado disponible en el corredor de Cancún.</p>
      <PropertyCard name="SLS Ocean Beach — Puerto Cancún" badge="Preventa" detail="Branded SLS · 191–356 m² · Desde $1.6M USD · Verano 2028" link={localePath('/propiedad/sls-ocean-beach-puerto-cancun')} />

      <p><strong className="text-foreground">Vellmari Grand Living</strong> — 95 residencias más 3 penthouses en 2 torres de 20 pisos. Vistas de 200 grados desde cada piso. 20 amenidades premium: marina, albercas, pádel, pickleball, spa, gimnasio y kids club. Plaza Puerto Cancún a menos de 500 metros. Desde $846,000 USD, entregas diciembre 2026 y julio 2027.</p>
      <PropertyCard name="Vellmari Grand Living — Puerto Cancún" badge="Preventa" detail="95 residencias · 200° vistas · Desde $846K USD · Dic 2026" link={localePath('/propiedad/vellmari-grand-living')} />

      <div className="text-center my-4">
        <Link to={localePath('/cancun/puerto-cancun')} className="text-primary font-body text-sm hover:underline">Ver todas las propiedades en Puerto Cancún →</Link>
      </div>

      {/* ── Cancún Centro ── */}
      <h2 className="text-foreground">Cancún Centro — el mayor rendimiento por peso invertido</h2>
      <p>Cancún Centro es el segmento más incomprendido del mercado inmobiliario de Cancún — y por eso mismo el que ofrece la mayor eficiencia de capital para ciertos perfiles de inversionista. El centro de Cancún es el corazón urbano de la ciudad, con precios de entrada más accesibles y una demanda de alquiler constante que ofrece oportunidades de inversión atractivas para quienes buscan diversificar su portafolio. La zona está experimentando una renovación urbana con nuevos desarrollos verticales que elevan el estándar de vida en la ciudad.</p>

      <p>Cancún Centro registra plusvalía anual del 12% con rendimientos de renta del 8 al 12% sobre precios de entrada desde $150,000 USD.</p>

      <p>La lógica de inversión en Cancún Centro es diferente a la de la Zona Hotelera o Puerto Cancún: el rendimiento no viene principalmente de la renta vacacional turística, sino de la demanda residencial y de ejecutivos locales. Cancún Centro tiene una clase media-alta consolidada, profesionales que trabajan en el sector turístico y hotelero, y una demanda de arrendamiento mensual de calidad que produce flujos de caja más estables y predecibles que la estacionalidad de la renta vacacional.</p>

      <p>El precio de entrada significativamente más bajo — desde $150,000 USD contra los $514,000 USD de la Zona Hotelera — permite un rendimiento porcentual sobre capital invertido más eficiente para ciertos horizontes de inversión, especialmente para compradores que priorizan flujo de caja estable sobre apreciación especulativa.</p>

      <div className="text-center my-4">
        <Link to={localePath('/cancun/centro')} className="text-primary font-body text-sm hover:underline">Explorar Cancún Centro →</Link>
      </div>

      {/* ── Comparison table ── */}
      <h2 className="text-foreground">Comparativa directa por zona — tabla de decisión</h2>
      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm font-body border border-border">
          <thead>
            <tr className="bg-muted text-foreground">
              <th className="text-left p-3 border-b border-border">Zona</th>
              <th className="text-left p-3 border-b border-border">Entrada</th>
              <th className="text-left p-3 border-b border-border">Plusvalía</th>
              <th className="text-left p-3 border-b border-border">Renta</th>
              <th className="text-left p-3 border-b border-border">Perfil</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border">
              <td className="p-3 font-semibold text-foreground">Zona Hotelera</td>
              <td className="p-3">$514K USD</td>
              <td className="p-3">18–33%</td>
              <td className="p-3">9–12% STR</td>
              <td className="p-3">Renta vacacional, 3–7 años</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 font-semibold text-foreground">Puerto Cancún</td>
              <td className="p-3">$846K USD</td>
              <td className="p-3">15%/año</td>
              <td className="p-3">7–9%</td>
              <td className="p-3">Patrimonio, uso propio</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 font-semibold text-foreground">Cancún Centro</td>
              <td className="p-3">$150K USD</td>
              <td className="p-3">12%/año</td>
              <td className="p-3">8–12%</td>
              <td className="p-3">Flujo de caja estable</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-foreground">Costa Mujeres</td>
              <td className="p-3">$248K USD</td>
              <td className="p-3">22%/año</td>
              <td className="p-3">8–10%</td>
              <td className="p-3">Preventa, 2–5 años</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── STR factor ── */}
      <h2 className="text-foreground">El factor STR — cómo multiplica el rendimiento en la Zona Hotelera</h2>
      <p>El permiso de renta a corto plazo (STR) es el multiplicador más potente del rendimiento inmobiliario en Cancún. La diferencia entre un edificio con permiso activo y uno sin él puede representar entre 30 y 50% de diferencia en el ingreso anual proyectado para una misma unidad en la misma zona.</p>

      <p>Ejemplo concreto: un departamento de 2 recámaras frente al Caribe en la Zona Hotelera, con permiso STR activo, puede generar entre $2,500 y $4,500 USD mensuales en temporada alta. El mismo departamento en renta mensual sin permiso STR genera entre $1,200 y $1,800 USD. La diferencia anual puede superar los $20,000 USD — equivalente a más del 3% adicional de rendimiento sobre el capital invertido.</p>

      <p>En Rivana, el estatus STR es el primer filtro que aplicamos en cualquier recomendación de propiedad en la Zona Hotelera. No recomendamos propiedades sin haber verificado este dato primero.</p>

      {/* ── World Cup ── */}
      <h2 className="text-foreground">El efecto del Mundial FIFA 2026 sobre los rendimientos</h2>
      <p>Para propiedades con permiso STR activo en la Zona Hotelera y Cancún norte, junio y julio de 2026 representan el pico de rendimiento de mayor magnitud en la historia reciente del mercado. Las reservas para esas fechas ya están llegando con tarifas entre el 40 y el 65% por encima del mismo período del año anterior.</p>

      <p>Para propietarios que ya tienen posición en la Zona Hotelera con permiso STR, el impacto es inmediato y medible. Para inversionistas que están considerando entrar, el Mundial es la señal más visible de que el mercado de Cancún tiene un motor de demanda que no depende de un ciclo económico — depende de la conectividad aérea, la infraestructura de lujo consolidada y la demanda global de destinos del Caribe, que solo va en una dirección.</p>

      {/* ── FAQ ── */}
      <h2 className="text-foreground">Preguntas frecuentes sobre rendimientos en Cancún</h2>
      <div className="space-y-6 my-4">
        <div>
          <p className="text-foreground font-semibold">¿Los rendimientos del 8–12% son brutos o netos?</p>
          <p>Son rendimientos brutos sobre el precio de compra. El rendimiento neto — descontando cuotas de mantenimiento, impuestos, gestión y vacancia — suele ubicarse entre el 5 y el 8% anual dependiendo del edificio y la estrategia de renta.</p>
        </div>
        <div>
          <p className="text-foreground font-semibold">¿Puedo obtener esos rendimientos siendo extranjero sin estar en México?</p>
          <p>Sí. Los propietarios de fideicomisos pueden recibir ingresos por renta de forma remota. La gestión operativa puede delegarse a un property manager local o al programa de renta del desarrollador en edificios de marca como Mondrian o SLS.</p>
        </div>
        <div>
          <p className="text-foreground font-semibold">¿Qué impuestos aplican sobre los ingresos de renta en México?</p>
          <p>Las personas extranjeras con ingresos de fuente mexicana tributan vía retención o declaración ante el SAT. Consulta a un especialista fiscal transfronterizo antes del cierre.</p>
        </div>
        <div>
          <p className="text-foreground font-semibold">¿Es mejor preventa o reventa para maximizar el ROI total?</p>
          <p>La preventa maximiza el ROI total si el proyecto se entrega según lo prometido: captura la plusvalía de construcción más el rendimiento de renta. La reventa maximiza el flujo de caja inmediato para propiedades con permiso STR activo ya operativo.</p>
        </div>
      </div>

      {/* ── Closing quote ── */}
      <blockquote className="border-l-2 border-primary pl-6 py-4 my-8">
        <p className="font-display text-xl italic text-foreground leading-relaxed">"No existe un 'mejor' mercado en Cancún — existe el mercado correcto para cada perfil de inversionista. La diferencia entre una buena inversión y una excelente inversión suele ser la precisión de la recomendación inicial."</p>
      </blockquote>

      {/* ── CTA ── */}
      <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
        <h3 className="text-xl text-foreground mb-3">¿Quieres saber qué zona y qué propiedad convienen para tu objetivo?</h3>
        <p className="text-sm text-muted-foreground font-body mb-6">Habla hoy con un asesor Rivana — bilingüe, especializado en el mercado de Cancún y con acceso directo a los números reales de cada desarrollo.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="gold" asChild>
            <a href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria" target="_blank" rel="noopener noreferrer">Quiero asesoría inmobiliaria</a>
          </Button>
          <Button variant="gold-outline" asChild>
            <Link to={localePath('/listings')}>Ver todas las propiedades</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════
   ENGLISH
   ══════════════════════════════════════════════════════════════ */
export const CancunROIBodyEN = () => {
  const { localePath } = useLanguage();
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>Cancún is not a single real estate market — it is four distinct markets coexisting within the same city, each with a fundamentally different buyer profile, rental structure and appreciation potential. The Hotel Zone generates the highest volume of vacation rental income in the Mexican Caribbean. Puerto Cancún delivers marina luxury with sustained capital appreciation. Downtown Cancún produces the highest rental yield per dollar invested. And the northern corridor — Costa Mujeres — carries the most aggressive appreciation projections across the entire metropolitan area.</p>

      <p>Choosing correctly between these zones is not a matter of personal preference: it is a financial decision that can represent 4 to 8 percentage points of difference in your annual investment return. This guide breaks down the real numbers by zone so you can make that decision with complete information — and references the Rivana portfolio properties available in each corridor today.</p>

      {/* ── Macro context ── */}
      <h2 className="text-foreground">The macro context — why Cancún in 2026</h2>
      <p>Cancún International Airport receives over 30 million passengers per year, making it Mexico's second busiest and one of the primary international entry points for North American and European visitors. That connectivity is the structural foundation of rental yields across the entire metropolitan area: without constant tourism demand, the vacation rental model does not work. With it, the numbers are nearly impossible to replicate in other regional markets.</p>

      <div className="bg-card border border-border rounded-sm p-6 my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <span className="font-display text-3xl text-primary">33%</span>
            <p className="text-xs text-muted-foreground font-body mt-1">Hotel Zone pre-sale</p>
          </div>
          <div>
            <span className="font-display text-3xl text-primary">15%</span>
            <p className="text-xs text-muted-foreground font-body mt-1">Puerto Cancún annual</p>
          </div>
          <div>
            <span className="font-display text-3xl text-primary">8–12%</span>
            <p className="text-xs text-muted-foreground font-body mt-1">Rental yield</p>
          </div>
          <div>
            <span className="font-display text-3xl text-primary">12M+</span>
            <p className="text-xs text-muted-foreground font-body mt-1">Tourists/year</p>
          </div>
        </div>
      </div>

      <p>The common denominator is demand: over 12 million tourists per year as a sustained demand baseline, with FIFA World Cup 2026 projecting a historic 35 to 50% increase in international arrivals during June and July. For properties with active STR permits, that peak represents the equivalent of 3 to 4 months of normal income compressed into 6 weeks.</p>

      {/* ── Hotel Zone ── */}
      <h2 className="text-foreground">Hotel Zone — the vacation rental engine</h2>
      <p>The Hotel Zone is the highest-liquidity, highest-volume vacation rental asset in the entire Mexican Caribbean. Its 23 kilometers of beach, combined with the country's most mature hotel infrastructure and relentless tourism demand, produce the most consistent STR yields in Cancún's metropolitan area.</p>

      <p>Investing in the Hotel Zone means accessing a market with constant demand, proven rental yields and sustained appreciation — with Punta Cancún reaching $3,200 USD per square meter, the mid-zone at $2,800 USD and Punta Nizuc from $2,500 USD.</p>

      <p>Gross short-term rental yields on Hotel Zone properties with active STR permits range from 9 to 12% annually, with occupancy rates of 75 to 85% in high season and 55 to 65% in low season. Nightly rates range from $150 USD for studios to $500 USD or more for penthouses and 3-bedroom units with premium views.</p>

      <p>The decisive factor in the Hotel Zone is always the STR permit. Buildings without an active permit are limited to monthly rentals, which reduces gross yield to 5–7% — a 30 to 40% difference in projected annual income. Rivana verifies this before any recommendation.</p>

      <h3 className="text-foreground text-xl">Rivana properties in the Hotel Zone</h3>

      <p><strong className="text-foreground">The Residences at Grand Island Cancun</strong> — A branded residence operated by Marca Elite internacional. Delivered turnkey, fully furnished and equipped. 33% pre-sale appreciation. Dual views of the Caribbean and Nichupté Lagoon — the only development in the Hotel Zone with that perspective. From $9,050,000 MXN, Q2 2027 delivery. Marca Elite internacional management from day one — no learning curve, no direct management required.</p>
      <PropertyCard name="The Residences at Grand Island Cancun" badge="Pre-Sale" detail="Branded · Dual Caribbean + Lagoon views · From $9.05M MXN · Q2 2027" link={localePath('/propiedad/mondrian-residences-grand-island-cancun')} />

      <p><strong className="text-foreground">Bay View Grand at Grand Island</strong> — Over 40 resort amenities, interiors by Filipão Nunes, five typologies from $586,000 USD. Vacation occupancy above 80% annually. Immediately marketable on STR platforms.</p>
      <PropertyCard name="Bay View Grand at Grand Island" badge="Pre-Sale" detail="40+ amenities · 5 typologies · From $586K USD" link={localePath('/propiedad/bay-view-grand-grand-island')} />

      <p><strong className="text-foreground">Kabeek Marina & Condos</strong> — Only 30 residences with a private dock on the Nichupté Lagoon for vessels up to 80 feet. Dual Caribbean and lagoon views. Architecture by Humberto Artigas. The scarcest asset in the Hotel Zone.</p>
      <PropertyCard name="Kabeek Marina & Condos" badge="Exclusive Pre-Sale" detail="30 units · Private marina · Dual views · Arch. Humberto Artigas" link={localePath('/propiedad/kabeek-marina-condos')} />

      <div className="text-center my-4">
        <Link to={localePath('/cancun/zona-hotelera')} className="text-primary font-body text-sm hover:underline">View all Hotel Zone properties →</Link>
      </div>

      {/* ── Puerto Cancún ── */}
      <h2 className="text-foreground">Puerto Cancún — marina living, appreciation and permanent luxury</h2>
      <p>Puerto Cancún is a fundamentally different proposition from the Hotel Zone: it does not compete on vacation rental volume — it competes on the quality of the patrimonial asset. It is a gated residential community with a private marina, golf course and direct sea access — Cancún's most exclusive development and one of the most prestigious in Mexico. With 24-hour security, luxury shopping and international schools, it is ideal for families seeking quality of life without sacrificing investment return.</p>

      <p>Prices in Puerto Cancún range from $3,800 USD per square meter in the marina zone to $2,800 USD in the commercial mixed-use area. Sustained annual appreciation is 15%, with acceleration projections tied to the 2026 World Cup.</p>

      <p>The rental profile in Puerto Cancún differs from the Hotel Zone: most owners opt for long-term monthly rentals or personal use with seasonal rental. Gross monthly rental yield runs 7 to 9% annually — slightly below the Hotel Zone's peak STR figure — but capital appreciation and the liquidity of resale in a high-net-worth buyer market more than compensate for that difference.</p>

      <h3 className="text-foreground text-xl">Rivana properties in Puerto Cancún</h3>

      <p><strong className="text-foreground">SLS Ocean Beach</strong> — Luxury residences in Novo Cancún developed by Inmobilia, Ucalli and Related. Architecture by Arquitectonica, interiors by Bernardi + Peschard. Operated under the SLS Hotels brand (Ennismore + Marca Elite internacional). Units from 191 to 356 m², from $1.6 million USD. Summer 2028 delivery. The most sophisticated branded luxury offering in the Cancún corridor.</p>
      <PropertyCard name="SLS Ocean Beach — Puerto Cancún" badge="Pre-Sale" detail="Branded SLS · 191–356 m² · From $1.6M USD · Summer 2028" link={localePath('/propiedad/sls-ocean-beach-puerto-cancun')} />

      <p><strong className="text-foreground">Vellmari Grand Living</strong> — 95 residences plus 3 penthouses across 2 twenty-story towers. 200-degree views from every floor. 20 premium amenities: marina, pools, paddle tennis, pickleball, spa, gym and kids club. Plaza Puerto Cancún less than 500 meters away. From $846,000 USD, December 2026 and July 2027 deliveries.</p>
      <PropertyCard name="Vellmari Grand Living — Puerto Cancún" badge="Pre-Sale" detail="95 residences · 200° views · From $846K USD · Dec 2026" link={localePath('/propiedad/vellmari-grand-living')} />

      <div className="text-center my-4">
        <Link to={localePath('/cancun/puerto-cancun')} className="text-primary font-body text-sm hover:underline">View all Puerto Cancún properties →</Link>
      </div>

      {/* ── Downtown Cancún ── */}
      <h2 className="text-foreground">Downtown Cancún — the highest yield per dollar invested</h2>
      <p>Downtown Cancún is the most misunderstood segment of Cancún's real estate market — and for that exact reason, the one that offers the greatest capital efficiency for certain investor profiles. Downtown Cancún is the urban heart of the city, with more accessible entry prices and constant rental demand that offers attractive investment opportunities for those seeking to diversify their portfolio. The area is undergoing urban renewal with new vertical developments raising the city's standard of living.</p>

      <p>Downtown Cancún records 12% annual appreciation with rental yields of 8 to 12% on entry prices from $150,000 USD.</p>

      <p>The investment logic in Downtown Cancún is different from the Hotel Zone or Puerto Cancún: yield does not come primarily from tourism-driven vacation rental, but from residential and executive demand. Downtown has a consolidated upper-middle-class resident base, professionals working in the tourism and hotel sector, and quality monthly rental demand that produces more stable and predictable cash flows than the seasonal peaks of vacation rental.</p>

      <p>The significantly lower entry price — from $150,000 USD versus $514,000 USD in the Hotel Zone — allows for a more capital-efficient percentage yield for certain investment horizons, especially for buyers who prioritize stable cash flow over speculative appreciation.</p>

      <div className="text-center my-4">
        <Link to={localePath('/cancun/centro')} className="text-primary font-body text-sm hover:underline">Explore Downtown Cancún →</Link>
      </div>

      {/* ── Comparison table ── */}
      <h2 className="text-foreground">Zone-by-zone comparison — decision table</h2>
      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm font-body border border-border">
          <thead>
            <tr className="bg-muted text-foreground">
              <th className="text-left p-3 border-b border-border">Zone</th>
              <th className="text-left p-3 border-b border-border">Entry</th>
              <th className="text-left p-3 border-b border-border">Appreciation</th>
              <th className="text-left p-3 border-b border-border">Yield</th>
              <th className="text-left p-3 border-b border-border">Profile</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border">
              <td className="p-3 font-semibold text-foreground">Hotel Zone</td>
              <td className="p-3">$514K USD</td>
              <td className="p-3">18–33%</td>
              <td className="p-3">9–12% STR</td>
              <td className="p-3">Vacation rental, 3–7 yr</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 font-semibold text-foreground">Puerto Cancún</td>
              <td className="p-3">$846K USD</td>
              <td className="p-3">15%/yr</td>
              <td className="p-3">7–9%</td>
              <td className="p-3">Patrimonial, personal use</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 font-semibold text-foreground">Downtown</td>
              <td className="p-3">$150K USD</td>
              <td className="p-3">12%/yr</td>
              <td className="p-3">8–12%</td>
              <td className="p-3">Stable cash flow</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-foreground">Costa Mujeres</td>
              <td className="p-3">$248K USD</td>
              <td className="p-3">22%/yr</td>
              <td className="p-3">8–10%</td>
              <td className="p-3">Pre-sale, 2–5 yr</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── STR factor ── */}
      <h2 className="text-foreground">The STR factor — how it multiplies Hotel Zone returns</h2>
      <p>The short-term rental permit is the single most powerful yield multiplier in Cancún real estate. The difference between a building with an active STR permit and one without can represent 30 to 50% more in projected annual income for the same unit in the same zone.</p>

      <p>Concrete example: a 2-bedroom Caribbean-facing apartment in the Hotel Zone with an active STR permit can generate between $2,500 and $4,500 USD per month in high season. The same apartment on a monthly lease without an STR permit generates between $1,200 and $1,800 USD. The annual difference can exceed $20,000 USD — equivalent to more than 3 additional percentage points of yield on invested capital.</p>

      <p>At Rivana, STR status is the first filter applied in any Hotel Zone property recommendation. We do not recommend properties without having verified this first.</p>

      {/* ── World Cup ── */}
      <h2 className="text-foreground">The FIFA World Cup 2026 effect on returns</h2>
      <p>For properties with active STR permits in the Hotel Zone and northern Cancún, June and July 2026 represent the highest-magnitude yield peak in the recent history of the market. Reservations for those dates are already arriving at rates 40 to 65% above the same period of the prior year.</p>

      <p>For owners who already hold a position in the Hotel Zone with an STR permit, the impact is immediate and measurable. For investors considering entry, the World Cup is the clearest signal that Cancún's market has a demand engine that does not depend on an economic cycle — it depends on air connectivity, consolidated luxury infrastructure and global Caribbean demand, which only moves in one direction.</p>

      {/* ── FAQ ── */}
      <h2 className="text-foreground">Frequently asked questions about Cancún yields</h2>
      <div className="space-y-6 my-4">
        <div>
          <p className="text-foreground font-semibold">Are the 8–12% yields gross or net?</p>
          <p>They are gross yields on purchase price. Net yield — after maintenance fees, taxes, management and vacancy — typically runs 5 to 8% annually depending on the building and rental strategy.</p>
        </div>
        <div>
          <p className="text-foreground font-semibold">Can I achieve those yields as a foreigner without being in Mexico?</p>
          <p>Yes. Fideicomiso beneficiaries can receive rental income remotely. Operational management can be delegated to a local property manager or to the developer's rental program in branded buildings like Mondrian or SLS.</p>
        </div>
        <div>
          <p className="text-foreground font-semibold">What taxes apply to rental income in Mexico?</p>
          <p>Foreign individuals with Mexican-source income pay withholding or file with SAT. Consult a cross-border tax specialist before closing.</p>
        </div>
        <div>
          <p className="text-foreground font-semibold">Is pre-sale or resale better for maximizing total ROI?</p>
          <p>Pre-sale maximizes total ROI if the project delivers as promised — capturing construction-phase appreciation plus rental yield. Resale maximizes immediate cash flow for properties with already-active STR permits already operating.</p>
        </div>
      </div>

      {/* ── Closing quote ── */}
      <blockquote className="border-l-2 border-primary pl-6 py-4 my-8">
        <p className="font-display text-xl italic text-foreground leading-relaxed">"There is no single 'best' market in Cancún — there is the right market for each investor profile. The difference between a good investment and an excellent one is usually the precision of the initial recommendation."</p>
      </blockquote>

      {/* ── CTA ── */}
      <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
        <h3 className="text-xl text-foreground mb-3">Want to know which zone and which property fit your objective?</h3>
        <p className="text-sm text-muted-foreground font-body mb-6">Connect with a Rivana advisor today — bilingual, specialized in the Cancún market and with direct access to the real numbers behind every development.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="gold" asChild>
            <a href="https://wa.me/529988457224?text=I%20want%20real%20estate%20advisory" target="_blank" rel="noopener noreferrer">I Want Real Estate Advisory</a>
          </Button>
          <Button variant="gold-outline" asChild>
            <Link to={localePath('/listings')}>View all properties</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
