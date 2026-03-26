import { Link } from 'react-router-dom';

const WHATSAPP_ES = 'https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria';
const WHATSAPP_EN = 'https://wa.me/529988457224?text=I%20want%20real%20estate%20advisory';

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">{children}</h2>
);

/* ═══════════════ SPANISH ═══════════════ */

export const CostaMujeresBodyES = () => (
  <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
    <p>
      Al norte del Aeropuerto Internacional de Cancún, separada de Isla Mujeres por un canal de aguas turquesa, Costa Mujeres ha pasado en menos de una década de ser una franja de costa prácticamente virgen a convertirse en el corredor de lujo de mayor crecimiento en todo el Caribe Mexicano. Las marcas hoteleras más exclusivas del mundo ya están consolidadas ahí. Los precios del suelo se han triplicado desde 2018. Y las preventas de los nuevos desarrollos residenciales están absorbiendo una demanda que supera la oferta disponible.
    </p>
    <p>
      Costa Mujeres representa el último capítulo del desarrollo costero del Caribe de Cancún. Con más de 26 kilómetros de playas prístinas de arena blanca, esta zona planificada atrae a los desarrolladores e inversionistas más exigentes del mundo. A diferencia de sus vecinos más establecidos, Costa Mujeres ofrece precios de preconstrucción con una apreciación proyectada del 18–25% para 2026, impulsada por el Mundial FIFA y una inversión en infraestructura sin precedentes.
    </p>
    <p>
      Esta es la guía definitiva para entender el mercado, cuánto cuesta entrar, qué sub-zonas ofrecen la mayor oportunidad y qué propiedades del portafolio Rivana están disponibles hoy.
    </p>

    <H2>¿Qué es Costa Mujeres y por qué importa?</H2>
    <p>
      Costa Mujeres es el tramo de costa que se extiende al norte de la Zona Hotelera de Cancún, entre el aeropuerto y Punta Sam — el embarcadero histórico hacia Isla Mujeres. Geográficamente privilegiada: playas de arena blanca con aguas protegidas por la barrera de Isla Mujeres, menor densidad de desarrollo que el corredor sur y vistas directas al Caribe abierto.
    </p>
    <p>
      Lo que transformó este destino fue la llegada de inversión hotelera de primer nivel. Hyatt Zilara, Hard Rock Hotel y el complejo Moon Palace anclan el perfil de visitante de alto poder adquisitivo que hoy define la zona. Cuando las marcas hoteleras de lujo deciden concentrarse en una franja costera, el mercado inmobiliario residencial que las rodea experimenta un efecto de arrastre inevitable y sostenido. Costa Mujeres está exactamente en esa fase: el efecto hotelero ya ocurrió, el mercado residencial todavía tiene margen de maduración.
    </p>
    <p>
      Desde condominios boutique frente al mar hasta grandes desarrollos de lujo, la zona atiende a todo perfil de inversión — ya sea ingreso pasivo por renta, una propiedad familiar o un refugio de retiro en el Caribe.
    </p>

    <H2>Desglose por sub-zona — precios y perfil</H2>
    <p>
      La zona se divide en tres corredores con características distintas.
    </p>
    <div className="bg-card border border-border rounded-sm p-6 my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <span className="font-display text-2xl text-[#CFAE60]">$2,200</span>
          <p className="text-xs text-muted-foreground font-body mt-1">USD/m² — Playa Mujeres</p>
          <p className="text-xs text-muted-foreground font-body">Resort y golf, mayor renta inmediata</p>
        </div>
        <div>
          <span className="font-display text-2xl text-[#CFAE60]">$1,800</span>
          <p className="text-xs text-muted-foreground font-body mt-1">USD/m² — Costa Mujeres Centro</p>
          <p className="text-xs text-muted-foreground font-body">Conectividad urbana, marina emergente</p>
        </div>
        <div>
          <span className="font-display text-2xl text-[#CFAE60]">$1,400</span>
          <p className="text-xs text-muted-foreground font-body mt-1">USD/m² — Punta Sam</p>
          <p className="text-xs text-muted-foreground font-body">Mayor ROI proyectado, entrada más baja</p>
        </div>
      </div>
    </div>
    <p>
      Esta estratificación es importante para el perfil de comprador: quien busca el mayor rendimiento de renta vacacional inmediato se orienta hacia Playa Mujeres, donde el ecosistema hotelero ya produce demanda constante. Quien busca la mayor plusvalía de apreciación en el mediano plazo, con precio de entrada más competitivo, mira hacia Punta Sam.
    </p>

    <H2>Los números que importan</H2>
    <div className="bg-card border border-border rounded-sm p-6 my-8">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <span className="font-display text-3xl text-[#CFAE60]">22%</span>
          <p className="text-xs text-muted-foreground font-body mt-1">Plusvalía Anual</p>
        </div>
        <div>
          <span className="font-display text-3xl text-[#CFAE60]">8–12%</span>
          <p className="text-xs text-muted-foreground font-body mt-1">Rendimiento Renta</p>
        </div>
        <div>
          <span className="font-display text-3xl text-[#CFAE60]">12M+</span>
          <p className="text-xs text-muted-foreground font-body mt-1">Turistas/Año</p>
        </div>
      </div>
    </div>
    <p>
      Las propiedades residenciales en Costa Mujeres han registrado apreciaciones del 20 al 28% anual en los últimos tres años, superando en varios puntos porcentuales a las zonas más consolidadas de la Zona Hotelera. La explicación es directa: el mercado todavía está en fase de maduración activa, y las fases tempranas de maduración son las de mayor apreciación relativa. La Zona Hotelera ya maduró — sus precios reflejan esa certeza. Costa Mujeres todavía tiene margen de convergencia significativo.
    </p>
    <p>
      El precio promedio por metro cuadrado en Costa Mujeres hoy oscila entre los $1,400 y los $2,200 USD dependiendo del corredor y el tipo de proyecto. Ese rango es todavía accesible en comparación con las propiedades más consolidadas de la Zona Hotelera, donde los edificios más cotizados superan los $3,200 USD por metro cuadrado. La diferencia de precio no refleja una diferencia de calidad de vida — refleja una diferencia de madurez de mercado. Esa diferencia es la oportunidad.
    </p>

    <H2>Por qué Costa Mujeres antes que otras zonas en 2026</H2>
    <ul className="list-none space-y-4">
      <li>
        <strong className="text-foreground">Precio de entrada real.</strong> Puedes acceder a una propiedad frente al mar en Costa Mujeres con un presupuesto que no alcanzaría para una unidad equivalente en la Zona Hotelera o Puerto Cancún consolidados. Esa diferencia no refleja calidad — refleja el momento del mercado en que se compra.
      </li>
      <li>
        <strong className="text-foreground">Ecosistema hotelero de lujo establecido.</strong> La presencia de Hyatt Zilara, Hard Rock y Moon Palace garantiza un perfil de turista de alto poder adquisitivo de forma permanente. Esos visitantes son exactamente quienes buscan alternativas de renta vacacional de calidad a las habitaciones estándar de hotel.
      </li>
      <li>
        <strong className="text-foreground">Ventana de preventa activa.</strong> Los proyectos de mayor calidad en Costa Mujeres todavía tienen unidades disponibles en condiciones de preventa. Una vez que estos proyectos alcancen la fase de entrega, los precios de entrada habrán subido entre 18 y 25% sobre los actuales. La ventana no es indefinida.
      </li>
      <li>
        <strong className="text-foreground">Impulso del Mundial FIFA 2026.</strong> El Caribe Mexicano en su conjunto está recibiendo atención global como destino de inversión gracias al Mundial. Costa Mujeres, como la zona de mayor crecimiento del corredor norte de Cancún, está en el centro de esa narrativa. Compradores internacionales que están evaluando el mercado por primera vez están mirando Costa Mujeres específicamente por su combinación de precio de entrada y potencial de plusvalía.
      </li>
    </ul>

    <H2>Dhamar — La propiedad Rivana en Costa Mujeres</H2>
    <p>
      Dhamar es un desarrollo en preventa ubicado en Costa Mujeres, Cancún. Ofrece residencias de 1 a 3 recámaras, con metrajes entre 47 y 177 m², desde $248,000 USD. Entrega proyectada en 2027. Un lugar pensado para disfrutarse hoy y crecer en valor mañana — bienestar que se siente, valor que perdura.
    </p>
    <p>
      La propuesta de Dhamar articula exactamente lo que distingue a Costa Mujeres: una conexión auténtica con el entorno natural — mar, manglar, luz natural — integrada a un producto inmobiliario de calidad con precio de acceso real. No es un desarrollo que compite con la Zona Hotelera en escala o marca. Es un desarrollo que entiende que el lujo contemporáneo en el Caribe Mexicano tiene que ver con el entorno, la calma y la escala humana — y que ese producto tiene una demanda creciente entre compradores que ya conocen los grandes resorts y buscan algo distinto.
    </p>
    <p>
      Con entrega en 2027 y preventa activa hoy, Dhamar ofrece la combinación de precio de entrada competitivo, plusvalía de construcción proyectada y un mercado en maduración que favorece a los compradores que entran temprano.
    </p>

    {/* Property Card */}
    <div className="my-8 border border-[#D9CAB3] rounded-sm overflow-hidden">
      <div className="p-6">
        <span className="inline-block text-xs font-body uppercase tracking-widest text-[#CFAE60] mb-2">Preventa</span>
        <h3 className="font-display text-xl mb-1">Dhamar</h3>
        <p className="text-muted-foreground font-body text-[14px] mb-1">1–3 Rec. · 47–177 m² · Desde $248K USD · Entrega 2027</p>
        <p className="text-muted-foreground font-body text-[13px] italic mb-3">Bienestar que se siente. Valor que perdura.</p>
        <div className="flex gap-4">
          <Link to="/propiedad/dhamar-costa-mujeres" className="inline-flex items-center gap-2 text-[#CFAE60] font-body text-sm hover:text-[#B8982F] transition-colors">
            Ver propiedad →
          </Link>
          <Link to="/cancun/costa-mujeres/preventa" className="inline-flex items-center gap-2 text-muted-foreground font-body text-sm hover:text-foreground transition-colors">
            Explorar preventas en Costa Mujeres →
          </Link>
        </div>
      </div>
    </div>

    <H2>Lo que Rivana verifica antes de recomendar en Costa Mujeres</H2>
    <p>
      Costa Mujeres tiene proyectos con desarrolladores de track record sólido y también proyectos más especulativos de actores nuevos. La diferencia no siempre es evidente en el material de ventas. Antes de cualquier recomendación en esta zona, Rivana verifica tres cosas que el comprador no puede verificar solo desde el exterior:
    </p>
    <ul className="list-none space-y-4">
      <li>
        <strong className="text-foreground">El historial del desarrollador.</strong> ¿Ha entregado proyectos anteriores en tiempo y especificaciones? ¿Hay compradores previos que puedan dar referencia directa? Un desarrollador sin historial verificable es una señal de alerta independientemente del precio.
      </li>
      <li>
        <strong className="text-foreground">El corredor exacto dentro de Costa Mujeres.</strong> No es lo mismo comprar en Playa Mujeres que en Punta Sam — el perfil de renta, la conectividad y el ritmo de apreciación son distintos. La recomendación de zona debe estar alineada con el objetivo de inversión del comprador.
      </li>
      <li>
        <strong className="text-foreground">El estatus de permiso STR.</strong> Si el objetivo es renta vacacional en Airbnb o plataformas similares, confirmamos si el reglamento del desarrollo lo permite antes de cualquier otra conversación. Este es el error más costoso que cometen los compradores de preventa que trabajan sin asesor especializado.
      </li>
    </ul>

    <H2>Perfil del comprador ideal para Costa Mujeres</H2>
    <p>
      Costa Mujeres es especialmente atractiva para tres perfiles. El primero es quien busca la mayor apreciación posible en un horizonte de 3 a 5 años: la zona todavía tiene margen de convergencia de precio significativo antes de llegar a la madurez de la Zona Hotelera. El segundo es quien quiere un segundo hogar con potencial de renta en un entorno más tranquilo y auténtico que la densidad del corredor sur. El tercero es el inversionista de renta de largo plazo que quiere posicionarse en un mercado en expansión con costos de entrada todavía razonables.
    </p>
    <p>
      Lo que los tres tienen en común: están comprando antes de que el mercado ajuste completamente los precios. Esa ventana no es indefinida.
    </p>

    <blockquote className="border-l-2 border-[#CFAE60] pl-6 py-4 my-10">
      <p className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed">
        "Costa Mujeres es donde Cancún estará dentro de diez años. Los que entran hoy están comprando a precio de hoy en el destino de mañana."
      </p>
    </blockquote>

    {/* CTA */}
    <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
      <h3 className="font-display text-2xl mb-2">¿Quieres conocer las opciones disponibles en Costa Mujeres?</h3>
      <p className="text-sm text-muted-foreground font-body mb-6">Habla hoy con un asesor Rivana — bilingüe, especializado en el corredor norte y con acceso directo a precios y disponibilidad de Dhamar y otros proyectos en la zona.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={WHATSAPP_ES}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#CFAE60] text-white font-body text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#B8982F] transition-colors"
          aria-label="Solicitar asesoría inmobiliaria por WhatsApp"
        >
          Quiero asesoría inmobiliaria
        </a>
        <Link
          to="/cancun/costa-mujeres"
          className="inline-flex items-center justify-center gap-2 border border-[#CFAE60] text-[#CFAE60] font-body text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#CFAE60]/10 transition-colors"
        >
          Ver Costa Mujeres
        </Link>
      </div>
    </div>
  </div>
);

/* ═══════════════ ENGLISH ═══════════════ */

export const CostaMujeresBodyEN = () => (
  <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
    <p>
      North of Cancún International Airport, separated from Isla Mujeres by a turquoise channel, Costa Mujeres has transformed in less than a decade from a virtually untouched stretch of coastline into the fastest-growing luxury corridor in the entire Mexican Caribbean. The world's most exclusive hotel brands are already established there. Land prices have tripled since 2018. And pre-sale residential developments are absorbing demand that consistently outpaces available supply.
    </p>
    <p>
      Costa Mujeres represents the final chapter of Cancún's Caribbean coastal development. With over 26 kilometers of pristine white-sand beaches, this master-planned zone attracts the world's most discerning developers and investors. Unlike its more established neighbors, Costa Mujeres offers pre-construction pricing with projected appreciation of 18–25% through 2026, driven by the FIFA World Cup and unprecedented infrastructure investment.
    </p>
    <p>
      This is the definitive guide to understanding the market, what it costs to enter, which sub-zones offer the greatest opportunity and which Rivana portfolio properties are available today.
    </p>

    <H2>What is Costa Mujeres and why does it matter?</H2>
    <p>
      Costa Mujeres is the coastal strip extending north of Cancún's Hotel Zone, between the airport and Punta Sam — the historic ferry terminal to Isla Mujeres. It is geographically privileged: white-sand beaches with waters protected by Isla Mujeres' natural barrier, lower development density than the southern corridor and direct views across the open Caribbean.
    </p>
    <p>
      What transformed this destination was the arrival of first-tier hotel investment. Hyatt Zilara, Hard Rock Hotel and the Moon Palace complex anchor the high-net-worth visitor profile that now defines the zone. When global luxury hotel brands decide to concentrate in a coastal strip, the surrounding residential real estate market inevitably experiences a sustained pull-through effect. Costa Mujeres is exactly in that phase: the hotel effect has already happened, the residential market still has significant room to mature.
    </p>
    <p>
      From boutique beachfront condos to large-scale luxury developments, the zone serves every investment profile — whether passive rental income, a family property or a Caribbean retirement retreat.
    </p>

    <H2>Sub-zone breakdown — prices and profiles</H2>
    <p>
      The zone divides into three distinct corridors.
    </p>
    <div className="bg-card border border-border rounded-sm p-6 my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <span className="font-display text-2xl text-[#CFAE60]">$2,200</span>
          <p className="text-xs text-muted-foreground font-body mt-1">USD/sqm — Playa Mujeres</p>
          <p className="text-xs text-muted-foreground font-body">Resort & golf, highest immediate yield</p>
        </div>
        <div>
          <span className="font-display text-2xl text-[#CFAE60]">$1,800</span>
          <p className="text-xs text-muted-foreground font-body mt-1">USD/sqm — Costa Mujeres Centro</p>
          <p className="text-xs text-muted-foreground font-body">Urban connectivity, emerging marina</p>
        </div>
        <div>
          <span className="font-display text-2xl text-[#CFAE60]">$1,400</span>
          <p className="text-xs text-muted-foreground font-body mt-1">USD/sqm — Punta Sam</p>
          <p className="text-xs text-muted-foreground font-body">Highest projected ROI, lowest entry</p>
        </div>
      </div>
    </div>
    <p>
      This stratification matters for buyer profiling. Those seeking the highest immediate vacation rental yield orient toward Playa Mujeres, where the hotel ecosystem already generates permanent demand. Those seeking the maximum appreciation upside in the medium term at a competitive entry price look toward Punta Sam.
    </p>

    <H2>The numbers that matter</H2>
    <div className="bg-card border border-border rounded-sm p-6 my-8">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <span className="font-display text-3xl text-[#CFAE60]">22%</span>
          <p className="text-xs text-muted-foreground font-body mt-1">Annual Appreciation</p>
        </div>
        <div>
          <span className="font-display text-3xl text-[#CFAE60]">8–12%</span>
          <p className="text-xs text-muted-foreground font-body mt-1">Rental Yield</p>
        </div>
        <div>
          <span className="font-display text-3xl text-[#CFAE60]">12M+</span>
          <p className="text-xs text-muted-foreground font-body mt-1">Tourists/Year</p>
        </div>
      </div>
    </div>
    <p>
      Residential properties in Costa Mujeres have recorded appreciation of 20 to 28% annually over the last three years, outperforming the more established Hotel Zone by several percentage points. The explanation is straightforward: the market is still in active maturation, and early-maturation phases produce the strongest relative appreciation. The Hotel Zone already matured — its prices reflect that certainty. Costa Mujeres still has meaningful convergence room.
    </p>
    <p>
      The average price per square meter in Costa Mujeres today ranges from $1,400 to $2,200 USD depending on the sub-zone and project type. That range is still accessible compared to the most consolidated Hotel Zone properties, where leading buildings exceed $3,200 USD per square meter. The price difference does not reflect a quality-of-life difference — it reflects a market maturity difference. That difference is the opportunity.
    </p>

    <H2>Why Costa Mujeres before other zones in 2026</H2>
    <ul className="list-none space-y-4">
      <li>
        <strong className="text-foreground">Real entry price.</strong> You can access a beachfront property in Costa Mujeres with a budget that would not cover an equivalent unit in the consolidated Hotel Zone or Puerto Cancún. That difference reflects market timing, not quality.
      </li>
      <li>
        <strong className="text-foreground">Established luxury hotel ecosystem.</strong> The presence of Hyatt Zilara, Hard Rock and Moon Palace permanently anchors a high-net-worth visitor profile. Those guests are exactly the travelers who seek quality vacation rental alternatives to standard hotel rooms.
      </li>
      <li>
        <strong className="text-foreground">Active pre-sale window.</strong> The highest-quality projects in Costa Mujeres still have units available at pre-sale conditions. Once these projects reach delivery, entry prices will have risen 18 to 25% above current levels. The window is not indefinite.
      </li>
      <li>
        <strong className="text-foreground">FIFA World Cup 2026 momentum.</strong> The Mexican Caribbean as a whole is receiving global attention as an investment destination driven by the World Cup. Costa Mujeres, as the highest-growth zone in Cancún's northern corridor, sits at the center of that narrative. International buyers evaluating the market for the first time are looking at Costa Mujeres specifically for its combination of entry price and appreciation potential.
      </li>
    </ul>

    <H2>Dhamar — Rivana's property in Costa Mujeres</H2>
    <p>
      Dhamar is a pre-sale development located in Costa Mujeres, Cancún. It offers residences from 1 to 3 bedrooms, with floor plans between 47 and 177 m², starting from $248,000 USD. Projected delivery in 2027. A place designed to be enjoyed today and grow in value tomorrow — wellness you can feel, value that endures.
    </p>
    <p>
      Dhamar's proposition articulates exactly what distinguishes Costa Mujeres: an authentic connection with the natural environment — sea, mangrove, natural light — integrated into a quality real estate product at a real access price. It does not compete with the Hotel Zone in scale or brand recognition. It understands that contemporary luxury in the Mexican Caribbean is about environment, calm and human scale — and that this product has growing demand among buyers who already know the large resort experience and are looking for something different.
    </p>
    <p>
      With 2027 delivery and active pre-sale today, Dhamar offers the combination of competitive entry pricing, projected construction-phase appreciation and a maturing market that rewards early buyers.
    </p>

    {/* Property Card */}
    <div className="my-8 border border-[#D9CAB3] rounded-sm overflow-hidden">
      <div className="p-6">
        <span className="inline-block text-xs font-body uppercase tracking-widest text-[#CFAE60] mb-2">Pre-Sale</span>
        <h3 className="font-display text-xl mb-1">Dhamar</h3>
        <p className="text-muted-foreground font-body text-[14px] mb-1">1–3 Bed · 47–177 m² · From $248K USD · Delivery 2027</p>
        <p className="text-muted-foreground font-body text-[13px] italic mb-3">Wellness you can feel. Value that endures.</p>
        <div className="flex gap-4">
          <Link to="/en/property/dhamar-costa-mujeres" className="inline-flex items-center gap-2 text-[#CFAE60] font-body text-sm hover:text-[#B8982F] transition-colors">
            View property →
          </Link>
          <Link to="/en/cancun/costa-mujeres/preventa" className="inline-flex items-center gap-2 text-muted-foreground font-body text-sm hover:text-foreground transition-colors">
            Explore Costa Mujeres pre-sales →
          </Link>
        </div>
      </div>
    </div>

    <H2>What Rivana verifies before recommending in Costa Mujeres</H2>
    <p>
      Costa Mujeres has projects backed by developers with solid delivery track records and also more speculative projects from newer actors. The difference is not always visible in the sales material. Before any recommendation in this zone, Rivana verifies three things that a buyer cannot confirm independently from the outside:
    </p>
    <ul className="list-none space-y-4">
      <li>
        <strong className="text-foreground">Developer track record.</strong> Has the developer delivered previous projects on time and to specification? Are there previous buyers who can provide direct references? A developer without a verifiable history is a red flag regardless of the price point.
      </li>
      <li>
        <strong className="text-foreground">The exact sub-zone corridor.</strong> Buying in Playa Mujeres is not the same as buying in Punta Sam — the rental profile, connectivity and appreciation pace are different. The zone recommendation must be aligned with the buyer's specific investment objective.
      </li>
      <li>
        <strong className="text-foreground">STR permit status.</strong> If vacation rental income through Airbnb or similar platforms is the goal, we confirm whether the development's bylaws permit it before any further conversation. This is the most expensive mistake pre-sale buyers make when working without a specialized advisor.
      </li>
    </ul>

    <H2>Ideal buyer profile for Costa Mujeres</H2>
    <p>
      Costa Mujeres is particularly compelling for three profiles. The first is the buyer seeking maximum appreciation over a 3 to 5-year horizon — the zone still has significant price convergence room before reaching Hotel Zone maturity levels. The second is the buyer who wants a second home with rental income potential in a quieter, more authentic environment than the density of the southern corridor. The third is the long-term rental investor who wants to position in an expanding market with still-reasonable entry costs.
    </p>
    <p>
      What all three share: they are buying before the market fully reprices. That window is not indefinite.
    </p>

    <blockquote className="border-l-2 border-[#CFAE60] pl-6 py-4 my-10">
      <p className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed">
        "Costa Mujeres is where Cancún will be in ten years. Those entering today are buying at today's price in tomorrow's destination."
      </p>
    </blockquote>

    {/* CTA */}
    <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
      <h3 className="font-display text-2xl mb-2">Want to explore available options in Costa Mujeres?</h3>
      <p className="text-sm text-muted-foreground font-body mb-6">Connect with a Rivana advisor today — bilingual, specialized in the northern corridor and with direct access to pricing and availability for Dhamar and other projects in the zone.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={WHATSAPP_EN}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#CFAE60] text-white font-body text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#B8982F] transition-colors"
          aria-label="Request real estate advisory via WhatsApp"
        >
          I Want Real Estate Advisory
        </a>
        <Link
          to="/en/cancun/costa-mujeres"
          className="inline-flex items-center justify-center gap-2 border border-[#CFAE60] text-[#CFAE60] font-body text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#CFAE60]/10 transition-colors"
        >
          View Costa Mujeres
        </Link>
      </div>
    </div>
  </div>
);
