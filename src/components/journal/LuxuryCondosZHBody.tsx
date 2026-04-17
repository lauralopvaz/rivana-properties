import { Link } from 'react-router-dom';

const WHATSAPP_ES = 'https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria';
const WHATSAPP_EN = 'https://wa.me/529988457224?text=I%20want%20real%20estate%20advisory';

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">{children}</h2>
);

const PropertyCard = ({ name, tagline, link }: { name: string; tagline: string; link: string }) => (
  <div className="my-8 border border-[#D9CAB3] rounded-sm overflow-hidden">
    <div className="p-6">
      <span className="inline-block text-xs font-body uppercase tracking-widest text-[#CFAE60] mb-2">Preventa</span>
      <h3 className="font-display text-xl mb-1">{name}</h3>
      <p className="text-muted-foreground font-body text-[14px] mb-3">{tagline}</p>
      <Link to={link} className="inline-flex items-center gap-2 text-[#CFAE60] font-body text-sm hover:text-[#B8982F] transition-colors">
        Ver propiedad →
      </Link>
    </div>
  </div>
);

const PropertyCardEN = ({ name, tagline, link }: { name: string; tagline: string; link: string }) => (
  <div className="my-8 border border-[#D9CAB3] rounded-sm overflow-hidden">
    <div className="p-6">
      <span className="inline-block text-xs font-body uppercase tracking-widest text-[#CFAE60] mb-2">Pre-Sale</span>
      <h3 className="font-display text-xl mb-1">{name}</h3>
      <p className="text-muted-foreground font-body text-[14px] mb-3">{tagline}</p>
      <Link to={link} className="inline-flex items-center gap-2 text-[#CFAE60] font-body text-sm hover:text-[#B8982F] transition-colors">
        View property →
      </Link>
    </div>
  </div>
);

/* ═══════════════ SPANISH ═══════════════ */

export const LuxuryCondosZHBodyES = () => (
  <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
    <p>
      La Zona Hotelera de Cancún es una de las franjas costeras más codiciadas de América. Veintitrés kilómetros de playa del Caribe, con el mar turquesa por un lado y la laguna del Nichupté por el otro, conectados por el Bulevar Kukulcán. En esa franja conviven los resorts más reconocidos del mundo con un mercado residencial de lujo que ha evolucionado dramáticamente en la última década. Esta guía te da todo lo que necesitas saber para navegar ese mercado correctamente en 2026 — con referencias directas a los desarrollos que Rivana ha verificado, curado y tiene disponibles hoy.
    </p>

    <H2>¿Qué hace única a la Zona Hotelera para inversión?</H2>
    <p>
      La Zona Hotelera de Cancún es el corredor inmobiliario más icónico del Caribe Mexicano. Con 23 kilómetros de playas de arena blanca, concentra los hoteles, restaurantes y centros comerciales más exclusivos de la región. Invertir aquí significa acceder a un mercado con demanda constante, rendimientos de alquiler probados y plusvalía sostenida.
    </p>
    <p>
      El segundo factor diferencial es la escasez estructural. La Zona Hotelera está delimitada geográficamente: no puede crecer hacia los lados porque está rodeada de agua. El inventario nuevo que llega al mercado es limitado por definición, lo que ejerce presión alcista permanente sobre los precios. Esta dinámica de oferta restringida más demanda creciente es la fórmula estructural que explica la apreciación sostenida de la zona — 33% de plusvalía en preventa, rendimientos de renta del 8 al 12%, y más de 12 millones de turistas al año como base de demanda.
    </p>
    <p>
      Con el Mundial FIFA 2026 generando un pico de demanda sin precedente histórico para junio y julio, las propiedades bien ubicadas en la Zona Hotelera están posicionadas para su mejor temporada de todos los tiempos.
    </p>

    <H2>Precios actuales y qué esperar por zona</H2>
    <p>
      La Zona Hotelera no es homogénea. Los precios, el perfil de demanda y el tipo de producto varían significativamente dependiendo del kilómetro del Bulevar Kukulcán.
    </p>
    <div className="bg-card border border-border rounded-sm p-6 my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <span className="font-display text-2xl text-[#CFAE60]">$3,200</span>
          <p className="text-xs text-muted-foreground font-body mt-1">USD/m² — Punta Cancún (km 0–8)</p>
          <p className="text-xs text-muted-foreground font-body">Nightlife y shopping premium</p>
        </div>
        <div>
          <span className="font-display text-2xl text-[#CFAE60]">$2,800</span>
          <p className="text-xs text-muted-foreground font-body mt-1">USD/m² — Zona Media (km 10–16)</p>
          <p className="text-xs text-muted-foreground font-body">Mejores playas, hoteles de lujo</p>
        </div>
        <div>
          <span className="font-display text-2xl text-[#CFAE60]">$2,500</span>
          <p className="text-xs text-muted-foreground font-body mt-1">USD/m² — Punta Nizuc (km 16–23)</p>
          <p className="text-xs text-muted-foreground font-body">Mayor exclusividad y privacidad</p>
        </div>
      </div>
    </div>
    <p>
      En términos de tipología, los departamentos de 1 recámara son el punto de entrada con mayor liquidez de renta vacacional — ideales para inversionistas que priorizan el flujo de caja. Los departamentos de 2 y 3 recámaras son el segmento de mayor demanda total, tanto para uso propio como para renta. Y los penthouses con terraza privada representan los activos de mayor apreciación y menor competencia en toda la franja.
    </p>

    <H2>El factor decisivo — permiso de renta a corto plazo (STR)</H2>
    <p>
      Si tu objetivo es generar ingresos por Airbnb, VRBO o Booking, el permiso STR no es un detalle secundario — es el determinante principal del rendimiento de tu inversión. Hay edificios en la Zona Hotelera con permiso activo y edificios sin él, y esa diferencia puede significar entre 30 y 50% de diferencia en el ingreso anual proyectado. Muchos compradores descubren esta limitación después del cierre, cuando ya no hay nada que negociar. En Rivana, el estatus STR es el primer dato que verificamos antes de cualquier recomendación.
    </p>

    <H2>Propiedades Rivana en la Zona Hotelera y Puerto Cancún — análisis por perfil</H2>

    <h3 className="text-foreground font-display text-2xl mt-8 mb-3">The Residences at Grand Island Cancun</h3>
    <p>
      The Residences at Grand Island Cancun es una residencia de marca dentro del desarrollo maestro más exclusivo de la Zona Hotelera — diseñada por Filipao Nunes Arquitectos y operada por Marca Elite internacional bajo la marca Mondrian. Cada unidad se entrega llave en mano, totalmente amueblada y equipada, lista para operar desde el primer día. La ubicación es en el km 16.5, con vistas simultáneas al Mar Caribe y a la Laguna Nichupté — el único desarrollo en la Zona Hotelera con esa perspectiva dual.
    </p>
    <p>
      El desarrollo ofrece preventa desde $9,050,000 MXN con una plusvalía proyectada del 33% al precio de entrega — entrega Q2 2027. Plan de pago: 30% de enganche, 20% diferido en 12 meses, 50% a la entrega.
    </p>
    <p className="italic text-foreground">Perfil ideal: inversionista que quiere flujo de caja desde el primer día sin gestión directa, respaldado por una de las marcas hoteleras más reconocidas del mundo.</p>
    <PropertyCard name="The Residences at Grand Island Cancun" tagline="Residencia de marca Marca Elite internacional en Grand Island, Zona Hotelera" link="/propiedad/mondrian-residences-grand-island-cancun" />

    <h3 className="text-foreground font-display text-2xl mt-8 mb-3">Bay View Grand at Grand Island</h3>
    <p>
      Bay View Grand redefine el lujo en la Zona Hotelera con más de 40 amenidades interiores y exteriores — desde escalada en roca hasta piano bar, simuladores de golf y F1, wellness center con ice bath y club de playa exclusivo. Los interiores son de Filipão Nunes, arquitecto portugués de reconocida presencia internacional. Cinco tipologías disponibles, desde studios hasta penthouses de 451 m², con precios desde $586,000 USD.
    </p>
    <p>
      La Zona Hotelera tiene ocupación vacacional superior al 80% anual, y las amenidades de resort de Bay View Grand hacen que cada unidad sea inmediatamente comercializable en Airbnb, VRBO y plataformas de renta de lujo.
    </p>
    <p className="italic text-foreground">Perfil ideal: comprador que busca punto de entrada accesible a la Zona Hotelera con amenidades de resort completo y flexibilidad de uso — propio o de renta.</p>
    <PropertyCard name="Bay View Grand at Grand Island" tagline="40+ amenidades, 5 tipologías, desde $586,000 USD" link="/propiedad/bay-view-grand-grand-island" />

    <h3 className="text-foreground font-display text-2xl mt-8 mb-3">Kabeek Marina & Condos</h3>
    <p>
      Kabeek Marina es un producto ultra-escaso: solo 23 residencias con muelle privado a la Laguna Nichupté para embarcaciones de hasta 80 pies — no existe comparable en el mercado de la Zona Hotelera. Las residencias van de 212 a 670 m² con doble vista al Mar Caribe y la laguna. Arquitectura de Humberto Artigas, uno de los arquitectos residenciales de lujo más reconocidos de México. Amenidades de resort completo: alberca semi-olímpica climatizada, spa europeo, lounge bar y marina privada.
    </p>
    <p className="italic text-foreground">Perfil ideal: comprador de muy alto patrimonio que combina estilo de vida náutico con inversión en un activo verdaderamente escaso y sin competencia directa.</p>
    <PropertyCard name="Kabeek Marina & Condos" tagline="Solo 23 residencias con muelle privado, doble vista" link="/propiedad/kabeek-marina-condos" />

    <h3 className="text-foreground font-display text-2xl mt-8 mb-3">SLS Ocean Beach — Puerto Cancún</h3>
    <p>
      SLS Ocean Beach está en Novo Cancún, Puerto Cancún — residencias de lujo desarrolladas por Inmobilia, Ucalli y Related, con arquitectura por Arquitectonica e interiorismo por Bernardi + Peschard. Operado bajo la marca SLS Hotels (Ennismore + Marca Elite internacional). Unidades de 1 a 3 recámaras entre 191 y 356 m², desde $1.6 millones de dólares, con entrega en verano 2028.
    </p>
    <p>
      Aunque su ubicación es Puerto Cancún en lugar de la Zona Hotelera estricta, SLS Ocean Beach es la apuesta de lujo de marca más sofisticada del corredor norte — con el mismo ecosistema de conectividad al aeropuerto y acceso directo al Caribe. Para el comprador que busca el respaldo de una marca hotelera global con presencia en Miami, Nueva York y Barcelona, esta es la opción más cercana a esa experiencia en el Caribe Mexicano.
    </p>
    <PropertyCard name="SLS Ocean Beach" tagline="Marca SLS Hotels, Puerto Cancún, desde $1.6M USD" link="/propiedad/sls-ocean-beach-puerto-cancun" />

    <h3 className="text-foreground font-display text-2xl mt-8 mb-3">Vellmari Grand Living — Puerto Cancún</h3>
    <p>
      Vellmari Grand Living ofrece 95 residencias exclusivas más 3 penthouses en 2 torres de 20 pisos en el corazón de Puerto Cancún, con vistas de 200 grados desde cada piso. Diseño de Ancona + Ancona Arquitectos con 20 amenidades premium: marina, albercas, pádel, pickleball, spa, gimnasio, kids club y lounge bar. Plaza Puerto Cancún a menos de 500 metros con tiendas de lujo, restaurantes, entretenimiento y cine IMAX. Precios desde $846,000 USD con entregas en diciembre 2026 y julio 2027.
    </p>
    <p className="italic text-foreground">Perfil ideal: comprador que quiere combinar la vida de marina con conectividad urbana de alto nivel — más orientado a residencia permanente o segunda vivienda premium que a renta vacacional pura.</p>
    <PropertyCard name="Vellmari Grand Living" tagline="95 residencias en Puerto Cancún, vistas 200°" link="/propiedad/vellmari-grand-living" />

    <H2>Cómo elegir según tu perfil</H2>
    <div className="bg-card border border-border rounded-sm p-6 my-8 space-y-4">
      <p><strong className="text-foreground">Flujo de caja inmediato sin gestión:</strong> The Residences at Grand Island Cancun. La gestión Marca Elite internacional opera por ti desde el primer día.</p>
      <p><strong className="text-foreground">Mayor número de amenidades con entrada flexible:</strong> Bay View Grand. Cinco tipologías, más de 40 amenidades, ocupación proyectada superior al 80%.</p>
      <p><strong className="text-foreground">Activo único e irrepetible:</strong> Kabeek Marina. Solo 30 unidades, muelle privado, sin competencia directa.</p>
      <p><strong className="text-foreground">Lujo de marca más sofisticado:</strong> SLS Ocean Beach. Respaldo global de Ennismore y Marca Elite internacional.</p>
      <p><strong className="text-foreground">Vida de marina con entregas próximas:</strong> Vellmari Grand Living. Torres de 20 pisos, 200° de vista, entrega diciembre 2026.</p>
    </div>

    <H2>Lista de verificación antes de comprar en la Zona Hotelera</H2>
    <ul className="list-none space-y-3">
      <li><strong className="text-foreground">Permiso STR vigente:</strong> si tu objetivo es renta vacacional, es el criterio número uno. Rivana lo verifica antes de cualquier recomendación.</li>
      <li><strong className="text-foreground">Historial del desarrollador:</strong> ¿ha entregado proyectos anteriores en tiempo? Todos los desarrollos del portafolio Rivana tienen track record verificado.</li>
      <li><strong className="text-foreground">Reglamento de condominio:</strong> restricciones sobre mascotas, remodelaciones o tipo de arrendatarios deben leerse antes de firmar cualquier documento.</li>
      <li><strong className="text-foreground">Cuotas de mantenimiento:</strong> en edificios de lujo con amenidades extensas pueden superar los $500 USD mensuales. Incorpóralas en tu análisis de flujo de caja.</li>
      <li><strong className="text-foreground">Título limpio y libre de ejido:</strong> tu notario debe verificarlo. Rivana hace este filtro como parte estándar de toda asesoría.</li>
    </ul>

    <blockquote className="border-l-2 border-[#CFAE60] pl-6 py-4 my-10">
      <p className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed">
        "La Zona Hotelera de Cancún no tiene sustituto. Cuando el inventario se agota, no se puede crear más tierra frente al Caribe. Cada propiedad que existe ahí es, por definición, un activo escaso."
      </p>
    </blockquote>

    {/* CTA */}
    <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
      <h3 className="font-display text-2xl mb-2">¿Listo para encontrar tu propiedad en la Zona Hotelera de Cancún?</h3>
      <p className="text-sm text-muted-foreground font-body mb-6">Habla hoy con un asesor Rivana — bilingüe, especializado en el Caribe Mexicano y con acceso directo a precios y disponibilidad de todos los desarrollos mencionados.</p>
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
          to="/cancun/zona-hotelera"
          className="inline-flex items-center justify-center gap-2 border border-[#CFAE60] text-[#CFAE60] font-body text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#CFAE60]/10 transition-colors"
        >
          Ver todas las propiedades
        </Link>
      </div>
    </div>
  </div>
);

/* ═══════════════ ENGLISH ═══════════════ */

export const LuxuryCondosZHBodyEN = () => (
  <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
    <p>
      Cancún's Hotel Zone is one of the most coveted coastal strips in the Americas. Twenty-three kilometers of Caribbean beach, with the turquoise sea on one side and the Nichupté Lagoon on the other, connected by Bulevar Kukulcán. Within that strip, some of the world's most recognized resorts coexist with a luxury residential market that has evolved dramatically over the last decade. This guide gives you everything you need to navigate that market correctly in 2026 — with direct references to the developments Rivana has verified, curated and has available today.
    </p>

    <H2>What makes the Hotel Zone unique for investment?</H2>
    <p>
      Cancún's Hotel Zone is the most iconic real estate corridor in the Mexican Caribbean. With 23 kilometers of white-sand beaches, it concentrates the most exclusive hotels, restaurants and shopping centers in the region. Investing here means accessing a market with constant demand, proven rental yields and sustained appreciation.
    </p>
    <p>
      The second differentiating factor is structural scarcity. The Hotel Zone is geographically bounded — it cannot expand sideways because it is surrounded by water. New inventory entering the market is limited by design, which creates permanent upward pressure on prices. This dynamic of restricted supply against growing demand is the structural formula behind the zone's sustained appreciation — 33% pre-sale appreciation, rental yields of 8 to 12%, and over 12 million tourists per year as the demand baseline.
    </p>
    <p>
      With FIFA World Cup 2026 generating an unprecedented demand spike for June and July, well-positioned properties in the Hotel Zone are set for their strongest season in history.
    </p>

    <H2>Current prices and what to expect by zone</H2>
    <p>
      The Hotel Zone is not homogeneous. Prices, demand profile and product type vary significantly depending on the kilometer along Bulevar Kukulcán.
    </p>
    <div className="bg-card border border-border rounded-sm p-6 my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <span className="font-display text-2xl text-[#CFAE60]">$3,200</span>
          <p className="text-xs text-muted-foreground font-body mt-1">USD/sqm — Punta Cancún (km 0–8)</p>
          <p className="text-xs text-muted-foreground font-body">Nightlife & premium shopping</p>
        </div>
        <div>
          <span className="font-display text-2xl text-[#CFAE60]">$2,800</span>
          <p className="text-xs text-muted-foreground font-body mt-1">USD/sqm — Mid-Zone (km 10–16)</p>
          <p className="text-xs text-muted-foreground font-body">Best beaches, luxury hotels</p>
        </div>
        <div>
          <span className="font-display text-2xl text-[#CFAE60]">$2,500</span>
          <p className="text-xs text-muted-foreground font-body mt-1">USD/sqm — Punta Nizuc (km 16–23)</p>
          <p className="text-xs text-muted-foreground font-body">Most exclusive & private</p>
        </div>
      </div>
    </div>
    <p>
      In terms of unit type, 1-bedroom apartments are the highest-liquidity entry point for vacation rental investors. 2 and 3-bedroom units represent the strongest total demand segment, both for personal use and rental. Penthouses with private terraces are the highest-appreciation, lowest-competition assets across the entire strip.
    </p>

    <H2>The decisive factor — short-term rental permit (STR)</H2>
    <p>
      If your goal is income through Airbnb, VRBO or Booking, the STR permit is not a secondary detail — it is the primary determinant of your investment's yield. Some Hotel Zone buildings have active permits; others do not. That difference can represent 30 to 50% variation in projected annual income. Many buyers discover this limitation only after closing, when there is nothing left to negotiate. At Rivana, STR status is the first data point we verify before any recommendation.
    </p>

    <H2>Rivana's Hotel Zone and Puerto Cancún portfolio — analysis by profile</H2>

    <h3 className="text-foreground font-display text-2xl mt-8 mb-3">The Residences at Grand Island Cancun</h3>
    <p>
      The Residences at Grand Island Cancun is a branded residence within the most exclusive master development in the Hotel Zone — designed by Filipao Nunes Arquitectos and operated by Marca Elite internacional under the Mondrian brand. Every unit is delivered turnkey, fully furnished and equipped, ready to operate from day one. Located at km 16.5, with simultaneous views of the Caribbean Sea and Nichupté Lagoon — the only development in the Hotel Zone with that dual perspective.
    </p>
    <p>
      Pre-sale pricing starts at $9,050,000 MXN with 33% projected appreciation to delivery price — Q2 2027. Payment plan: 30% down, 20% deferred over 12 months, 50% at delivery.
    </p>
    <p className="italic text-foreground">Ideal profile: investor who wants cash flow from day one without direct management, backed by one of the world's most recognized hospitality brands.</p>
    <PropertyCardEN name="The Residences at Grand Island Cancun" tagline="Marca Elite internacional-branded residence at Grand Island, Hotel Zone" link="/en/property/mondrian-residences-grand-island-cancun" />

    <h3 className="text-foreground font-display text-2xl mt-8 mb-3">Bay View Grand at Grand Island</h3>
    <p>
      Bay View Grand redefines luxury in the Hotel Zone with over 40 interior and exterior amenities — from rock climbing wall to piano bar, golf and F1 simulators, wellness center with ice bath, and an exclusive beach club. Interiors by Filipão Nunes, a Portuguese architect with major international recognition. Five typologies available, from studios to 451 m² penthouses, from $586,000 USD.
    </p>
    <p>
      The Hotel Zone delivers vacation occupancy above 80% annually, and Bay View Grand's resort-level amenities make each unit immediately marketable on Airbnb, VRBO and luxury rental platforms.
    </p>
    <p className="italic text-foreground">Ideal profile: buyer seeking an accessible entry point to the Hotel Zone with full resort amenities and flexibility — for personal use or rental income.</p>
    <PropertyCardEN name="Bay View Grand at Grand Island" tagline="40+ amenities, 5 typologies, from $586,000 USD" link="/en/property/bay-view-grand-grand-island" />

    <h3 className="text-foreground font-display text-2xl mt-8 mb-3">Kabeek Marina & Condos</h3>
    <p>
      Kabeek Marina is a genuinely scarce asset: only 30 residences with a private dock on the Nichupté Lagoon accommodating vessels up to 80 feet — with no comparable product anywhere in the Hotel Zone. Residences range from 212 to 670 m² with dual views of the Caribbean Sea and the lagoon. Architecture by Humberto Artigas, one of Mexico's most recognized luxury residential architects. Full resort amenities: heated semi-Olympic pool, European spa, lounge bar and private marina.
    </p>
    <p className="italic text-foreground">Ideal profile: ultra-high-net-worth buyer combining nautical lifestyle with investment in a genuinely unique asset that has no direct competition.</p>
    <PropertyCardEN name="Kabeek Marina & Condos" tagline="Only 30 residences with private dock, dual views" link="/en/property/kabeek-marina-condos" />

    <h3 className="text-foreground font-display text-2xl mt-8 mb-3">SLS Ocean Beach — Puerto Cancún</h3>
    <p>
      SLS Ocean Beach is located in Novo Cancún, Puerto Cancún — luxury residences developed by Inmobilia, Ucalli and Related, with architecture by Arquitectonica and interiors by Bernardi + Peschard. Operated under the SLS Hotels brand (Ennismore + Marca Elite internacional). Units from 1 to 3 bedrooms, between 191 and 356 m², starting from $1.6 million USD, with delivery in Summer 2028.
    </p>
    <p>
      Although its location is Puerto Cancún rather than the Hotel Zone proper, SLS Ocean Beach is the most sophisticated branded luxury play in the northern corridor — with the same airport connectivity ecosystem and direct Caribbean access. For the buyer who wants the backing of a global hospitality brand with presence in Miami, New York and Barcelona, this is the closest equivalent to that experience in the Mexican Caribbean.
    </p>
    <PropertyCardEN name="SLS Ocean Beach" tagline="SLS Hotels brand, Puerto Cancún, from $1.6M USD" link="/en/property/sls-ocean-beach-puerto-cancun" />

    <h3 className="text-foreground font-display text-2xl mt-8 mb-3">Vellmari Grand Living — Puerto Cancún</h3>
    <p>
      Vellmari Grand Living offers 95 exclusive residences plus 3 penthouses across 2 twenty-story towers in the heart of Puerto Cancún, with 200-degree views from every floor. Design by Ancona + Ancona Arquitectos with 20 premium amenities: marina, pools, paddle tennis, pickleball, spa, gym, kids club and lounge bar. Plaza Puerto Cancún less than 500 meters away with luxury stores, restaurants, entertainment and IMAX cinema. Prices from $846,000 USD with deliveries in December 2026 and July 2027.
    </p>
    <p className="italic text-foreground">Ideal profile: buyer who wants marina living combined with high-level urban connectivity — more oriented toward primary residence or premium second home than pure vacation rental.</p>
    <PropertyCardEN name="Vellmari Grand Living" tagline="95 residences in Puerto Cancún, 200° views" link="/en/property/vellmari-grand-living" />

    <H2>How to choose based on your profile</H2>
    <div className="bg-card border border-border rounded-sm p-6 my-8 space-y-4">
      <p><strong className="text-foreground">Immediate cash flow without management:</strong> The Residences at Grand Island Cancun. Marca Elite internacional manages from day one. You receive the returns.</p>
      <p><strong className="text-foreground">Most amenities with flexible entry:</strong> Bay View Grand. Five typologies, 40+ amenities, projected occupancy above 80%.</p>
      <p><strong className="text-foreground">Genuinely unique asset:</strong> Kabeek Marina. Only 30 units, private dock, no direct competition.</p>
      <p><strong className="text-foreground">Most sophisticated branded luxury:</strong> SLS Ocean Beach. Global backing from Ennismore and Marca Elite internacional.</p>
      <p><strong className="text-foreground">Marina living with near-term delivery:</strong> Vellmari Grand Living. 20-story towers, 200° views, December 2026 delivery.</p>
    </div>

    <H2>Pre-sale checklist before buying in the Hotel Zone</H2>
    <ul className="list-none space-y-3">
      <li><strong className="text-foreground">Active STR permit:</strong> if vacation rental income is your goal, this is criterion number one. Rivana verifies this before any recommendation.</li>
      <li><strong className="text-foreground">Developer track record:</strong> has the developer delivered previous projects on time? Every development in Rivana's portfolio has a verified delivery history.</li>
      <li><strong className="text-foreground">Condo bylaws:</strong> restrictions on pets, renovations or tenant types must be read before signing anything.</li>
      <li><strong className="text-foreground">Maintenance fees:</strong> in luxury buildings with extensive amenities, these can exceed $500 USD per month. Factor them into your cash-flow analysis.</li>
      <li><strong className="text-foreground">Clean, non-ejido title:</strong> your notary must verify this. Rivana applies this filter as a standard part of every advisory engagement.</li>
    </ul>

    <blockquote className="border-l-2 border-[#CFAE60] pl-6 py-4 my-10">
      <p className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed">
        "The Hotel Zone has no substitute. When the inventory runs out, no one can create more land facing the Caribbean. Every property that exists there is, by definition, a scarce asset."
      </p>
    </blockquote>

    {/* CTA */}
    <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
      <h3 className="font-display text-2xl mb-2">Ready to find your property in Cancún's Hotel Zone?</h3>
      <p className="text-sm text-muted-foreground font-body mb-6">Connect with a Rivana advisor today — bilingual, exclusively specialized in the Mexican Caribbean, with direct access to pricing and availability across every development featured here.</p>
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
          to="/en/cancun/zona-hotelera"
          className="inline-flex items-center justify-center gap-2 border border-[#CFAE60] text-[#CFAE60] font-body text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#CFAE60]/10 transition-colors"
        >
          Browse all properties
        </Link>
      </div>
    </div>
  </div>
);
