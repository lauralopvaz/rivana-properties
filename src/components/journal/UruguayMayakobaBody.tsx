import { Link } from 'react-router-dom';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const WHATSAPP_LINK = 'https://wa.me/529988457224';

const PropertyCard = () => (
  <div className="my-10 border border-[#D9CAB3] rounded-sm overflow-hidden">
    <div className="p-6 md:p-8">
      <span className="inline-block text-xs font-body uppercase tracking-widest text-[#CFAE60] mb-2">Preventa</span>
      <h3 className="font-display text-2xl mb-2">The Reserve at Mayakoba</h3>
      <p className="text-muted-foreground font-body text-[15px] mb-4">La única residencia privada dentro del ecosistema Mayakoba</p>
      <Link
        to="/propiedad/the-reserve-at-mayakoba"
        className="inline-flex items-center gap-2 text-[#CFAE60] font-body text-sm hover:text-[#B8982F] transition-colors"
      >
        Ver propiedad →
      </Link>
    </div>
  </div>
);

const PropertyCardEN = () => (
  <div className="my-10 border border-[#D9CAB3] rounded-sm overflow-hidden">
    <div className="p-6 md:p-8">
      <span className="inline-block text-xs font-body uppercase tracking-widest text-[#CFAE60] mb-2">Pre-Sale</span>
      <h3 className="font-display text-2xl mb-2">The Reserve at Mayakoba</h3>
      <p className="text-muted-foreground font-body text-[15px] mb-4">The only private residence inside the Mayakoba ecosystem</p>
      <Link
        to="/en/property/the-reserve-at-mayakoba"
        className="inline-flex items-center gap-2 text-[#CFAE60] font-body text-sm hover:text-[#B8982F] transition-colors"
      >
        View property →
      </Link>
    </div>
  </div>
);

/* ═══════════════ SPANISH ═══════════════ */

export const UruguayMayakobaBodyES = () => (
  <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
    <p>
      La Asociación Uruguaya de Fútbol confirmó que su selección se hospedará en el Fairmont Mayakoba durante el Mundial FIFA 2026, realizando sus entrenamientos en el Mayakoba Training Centre adyacente — a 40 minutos del Aeropuerto Internacional de Cancún. No fue una decisión por descarte: Playa del Carmen superó en todos los criterios técnicos a Tampa, Atlanta, Boca Raton y Austin. El Mayakoba fue elegido por su infraestructura, logística, instalaciones de recuperación física y entorno de trabajo de élite.
    </p>
    <p>
      Durante 30 días, algunos de los mejores futbolistas del planeta vivirán, entrenarán y se recuperarán dentro del ecosistema más exclusivo de la Riviera Maya. Y Rivana tiene acceso a la única propiedad residencial privada dentro de ese mismo entorno: The Reserve at Mayakoba.
    </p>

    <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">La Celeste que entrena en tu vecindario</h2>
    <p>
      Uruguay llega al Mundial 2026 en su mejor momento de la última década. Bajo la dirección de Marcelo Bielsa, el equipo completó una solvente fase de clasificación terminando cuarto por encima de Brasil, y sus estrellas llegan al torneo en estado de forma excepcional.
    </p>
    <p>
      Federico Valverde, capitán del Real Madrid, es el timón por el que pasa todo el juego de Uruguay — su físico, llegada y mentalidad lo convierten en una de las grandes amenazas del torneo. Esta temporada se ha consagrado como uno de los mejores futbolistas del planeta, con 12 asistencias y 8 goles, incluyendo un hat trick histórico al Manchester City en Champions League.
    </p>
    <p>
      Ronald Araujo (FC Barcelona) aporta velocidad y liderazgo en la defensa. José María Giménez lleva más de diez años en la élite del Atlético de Madrid. Darwin Núñez, delantero del Al-Hilal, terminó las eliminatorias como uno de los máximos artilleros de la CONMEBOL con cinco goles, siendo además líder en recuperaciones ante Brasil y Argentina. Manuel Ugarte (Manchester United), Rodrigo Bentancur, Facundo Pellistri, Maximiliano Araújo, Giorgian de Arrascaeta y Nicolás de la Cruz completan un plantel de élite global.
    </p>
    <p>
      Todos ellos entrenarán en el Mayakoba Training Centre, que cuenta con canchas con certificación FIFA, gimnasios de equipamiento de élite, servicios médicos de primer nivel y áreas de recuperación física específicas — instalaciones integradas al mismo ecosistema donde se ubica The Reserve at Mayakoba.
    </p>

    <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">Por qué Uruguay eligió Mayakoba sobre todo el continente</h2>
    <p>
      Playa del Carmen fue presentada por la AUF como la única sede que cumple con la totalidad de criterios para la concentración. Los módulos de hospedaje privados tienen capacidad y distribución análoga al Complejo Celeste de Montevideo, lo que garantiza privacidad absoluta y la dinámica interna del grupo sin fricciones de entorno externo.
    </p>
    <p>
      La decisión coloca a Uruguay en México pese a que dos de sus tres partidos del Grupo H se juegan en Estados Unidos — Miami contra Arabia Saudita el 15 de junio, Cabo Verde el 21 de junio, para luego volar de regreso a enfrentar a España en Guadalajara el 26 de junio. Que el equipo prefiera hacer dos viajes transatlánticos antes que cambiar de base dice todo sobre el nivel del entorno de Mayakoba.
    </p>
    <p>
      La elección del Fairmont Mayakoba es uno de los setups más favorables para los aficionados de todo el torneo: el resort es espectacular y la ubicación en la Riviera Maya facilita combinar el ambiente mundialista con vacaciones de playa. Para millones de aficionados uruguayos, argentinos, españoles y europeos que planifican el Mundial como una experiencia más amplia que solo los partidos, Playa del Carmen y Mayakoba serán destinos aspiracionales de primer nivel. Ese flujo de turismo de alto poder adquisitivo impacta directamente en la demanda de renta vacacional de la zona.
    </p>

    <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">The Reserve at Mayakoba — La única forma de ser propietario dentro de este ecosistema</h2>
    <p>
      The Reserve at Mayakoba es un desarrollo residencial de ultra-lujo dentro del icónico complejo Mayakoba en la Riviera Maya. 144 departamentos distribuidos en 16 torres de baja altura rodeadas de naturaleza — con el 65% del terreno destinado a conservación natural.
    </p>
    <p>
      Desarrollado por Sancus Capital Partners e Inmobilia, con arquitectura de L35 Arquitectos y Sepúlveda Arquitectos — firmas con sede en Barcelona, Madrid y París. Los propietarios tienen acceso a los servicios hoteleros del Banyan Tree Mayakoba: spa, room service y restaurantes de clase mundial.
    </p>
    <p className="font-display text-xl text-foreground italic">No como huéspedes. Como propietarios.</p>
    <p>
      Mayakoba es sede de Banyan Tree, Rosewood, Fairmont y Andaz. The Reserve es la primera oportunidad de ser propietario dentro de este ecosistema de ultra-lujo, con acceso directo a campo de golf PGA, cenotes privados y club de playa — amenidades que normalmente solo están disponibles para los huéspedes de sus hoteles de lujo.
    </p>
    <p>
      Las unidades van de 2 a 4 recámaras, con metrajes entre 192 y 660 m², con entregas proyectadas para 2027–2028. El precio de entrada parte desde $1.1 millones de dólares.
    </p>
    <p>
      <Link to="/propiedad/the-reserve-at-mayakoba" className="text-[#CFAE60] hover:text-[#B8982F] transition-colors">
        → Ver propiedad completa, planos y precios
      </Link>
    </p>

    <PropertyCard />

    <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">Lo que el Mundial 2026 significa para tu inversión</h2>
    <p>
      El efecto de visibilidad que genera la concentración de una selección mundialista en un destino es inmediato y duradero. Cuando el mundo entero sigue a Valverde y Darwin Núñez en sus redes sociales y las transmisiones muestran el entorno de manglares, canales de agua dulce y playa del Caribe que rodean el Fairmont Mayakoba, ese ecosistema queda grabado en la memoria de millones de viajeros de alto poder adquisitivo.
    </p>
    <p>
      El Mundial FIFA 2026 tiene una audiencia global de más de dos mil millones de personas. Para los propietarios de The Reserve at Mayakoba, junio y julio de 2026 serán los meses de mayor demanda y mayor tarifa de renta vacacional en la historia de la zona. Las propiedades de lujo en la Riviera Maya ya registran incrementos del 35 al 55% en tarifas para esas fechas respecto al año anterior.
    </p>
    <p>
      Para quienes están evaluando entrar, hay un dato que lo resume todo: The Reserve tiene 144 residencias dentro de un ecosistema de conservación natural que no puede crecer. La oferta es fija por diseño. La demanda global que el Mundial 2026 está generando sobre este destino no lo es.
    </p>

    <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">Vivir donde vive la élite del fútbol mundial</h2>
    <p>
      Durante 30 días, Valverde, Darwin Núñez, Araujo y el resto de La Celeste compartirán el ecosistema Mayakoba con los propietarios de The Reserve. Eso no es solo un dato anecdótico — es el reflejo del tipo de entorno que este desarrollo representa: el nivel de privacidad, infraestructura y calidad de vida que una selección de élite elige sobre todas las demás opciones del continente.
    </p>
    <p>
      Lo que Uruguay disfrutará durante un mes, los propietarios de The Reserve lo tienen los 365 días del año: laguna, manglar, cenotes y selva. Torres de baja altura diseñadas para integrarse en el paisaje, no para dominarlo. Acceso a spa, room service, restaurantes y concierge del Banyan Tree como propietario. El campo de golf El Camaleón, sede histórica del PGA Tour. El club de playa privado frente al Caribe.
    </p>
    <p>
      Y la comunidad de vecinos que coexiste en ese entorno: el mismo perfil de persona que elige el Rosewood o el Fairmont para sus vacaciones. Ejecutivos de alto nivel, familias de patrimonio intergeneracional, compradores internacionales que priorizan calidad y privacidad sobre cualquier otra consideración.
    </p>

    <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">Preguntas frecuentes</h2>
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="q1">
        <AccordionTrigger className="font-display text-lg text-foreground">¿Puedo comprar siendo extranjero?</AccordionTrigger>
        <AccordionContent className="font-body text-muted-foreground text-[16px] leading-[1.8]">
          Sí. La compra se realiza a través de un fideicomiso bancario que te otorga todos los derechos de propiedad. Rivana coordina el proceso completo en inglés y español.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q2">
        <AccordionTrigger className="font-display text-lg text-foreground">¿Hay financiamiento disponible?</AccordionTrigger>
        <AccordionContent className="font-body text-muted-foreground text-[16px] leading-[1.8]">
          El proyecto ofrece esquemas de pago durante la fase de construcción. Nuestros asesores te presentan las condiciones actuales según disponibilidad.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q3">
        <AccordionTrigger className="font-display text-lg text-foreground">¿Cuándo se entregan las unidades?</AccordionTrigger>
        <AccordionContent className="font-body text-muted-foreground text-[16px] leading-[1.8]">
          Las entregas están proyectadas para 2027–2028, lo que significa que entrar hoy es capturar la plusvalía de construcción más el contexto de mercado post-Mundial.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q4">
        <AccordionTrigger className="font-display text-lg text-foreground">¿Puedo rentar mi propiedad?</AccordionTrigger>
        <AccordionContent className="font-body text-muted-foreground text-[16px] leading-[1.8]">
          Consulta con tu asesor Rivana el estatus de renta vacacional de la unidad específica antes de tomar cualquier decisión. Es el primer filtro que aplicamos en toda recomendación.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <blockquote className="border-l-2 border-[#CFAE60] pl-6 py-4 my-10">
      <p className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed">
        "Mayakoba no es solo el enclave más exclusivo de la Riviera Maya. Es el lugar donde las mejores selecciones del mundo eligen concentrarse, donde los mejores hoteles del planeta eligen operar, y donde los propietarios de The Reserve eligen vivir. Tu inversión en ese entorno no necesita más argumento."
      </p>
    </blockquote>

    {/* CTA */}
    <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
      <h3 className="font-display text-2xl mb-2">Habla hoy con un asesor Rivana sobre The Reserve at Mayakoba.</h3>
      <p className="text-sm text-muted-foreground font-body mb-6">Bilingüe · Acceso directo a precios y disponibilidad.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/propiedad/the-reserve-at-mayakoba"
          className="inline-flex items-center justify-center gap-2 bg-[#CFAE60] text-white font-body text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#B8982F] transition-colors"
        >
          Ver la propiedad
        </Link>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-[#CFAE60] text-[#CFAE60] font-body text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#CFAE60]/10 transition-colors"
          aria-label="Contactar asesor Rivana por WhatsApp"
        >
          WhatsApp: +52 998 845 7224
        </a>
      </div>
    </div>
  </div>
);

/* ═══════════════ ENGLISH ═══════════════ */

export const UruguayMayakobaBodyEN = () => (
  <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
    <p>
      The Uruguayan Football Association confirmed that its men's national team will stay at the Fairmont Mayakoba during the 2026 FIFA World Cup, with training sessions held at the nearby Mayakoba Training Centre — approximately 40 minutes from Cancún International Airport. The decision wasn't made by process of elimination. Playa del Carmen outranked Tampa, Atlanta, Boca Raton and Austin across every technical criterion — selected for its infrastructure, lodging facilities, logistical provisions, physical recovery setup and elite working environment.
    </p>
    <p>
      For 30 days, some of the best footballers on the planet will live, train and recover within the most exclusive ecosystem in the Riviera Maya. And Rivana holds access to the only private residential property inside that same environment: The Reserve at Mayakoba.
    </p>

    <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">La Celeste — World-class stars, training in your neighborhood</h2>
    <p>
      Uruguay arrives at the 2026 World Cup in its best shape in a decade. Under Marcelo Bielsa, the squad completed a dominant qualifying campaign, finishing fourth in CONMEBOL — above Brazil — with key players arriving at the tournament in peak form.
    </p>
    <p>
      Federico Valverde, Real Madrid captain, is the tactical engine of Uruguay. His physical intensity, box-to-box range and mental strength make him one of the most dangerous players in the tournament. This season he cemented his place among the best footballers on earth, contributing 12 assists and 8 goals — including a historic hat-trick against Manchester City in the Champions League.
    </p>
    <p>
      Ronald Araujo (FC Barcelona) brings pace, aerial dominance and defensive leadership. José María Giménez has spent over a decade at Atlético de Madrid's elite level. Darwin Núñez, now at Al-Hilal, finished qualifying as one of CONMEBOL's top scorers with five goals, also leading in pressing and recovery stats against Brazil and Argentina. Manuel Ugarte (Manchester United), Rodrigo Bentancur, Facundo Pellistri, Maximiliano Araújo, Giorgian de Arrascaeta and Nicolás de la Cruz round out a squad built for a deep run.
    </p>
    <p>
      All of them will train at the Mayakoba Training Centre, which features FIFA-certified pitches, elite gym equipment, premium medical services, and purpose-built physical recovery areas — facilities integrated into the very same ecosystem where The Reserve at Mayakoba sits.
    </p>

    <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">Why Uruguay chose Mayakoba over every other option in North America</h2>
    <p>
      The AUF presented Playa del Carmen to FIFA as the only location that met every single criterion for the national team's base camp. The private accommodation modules have a capacity and layout analogous to Uruguay's Complejo Celeste in Montevideo — ensuring absolute privacy and uninterrupted team dynamics throughout the tournament.
    </p>
    <p>
      The decision places Uruguay in Mexico despite two of its three Group H matches taking place in the United States — opening against Saudi Arabia in Miami on June 15 and Cape Verde on June 21, before flying back to face Spain in Guadalajara on June 26. Choosing to make two international flights rather than relocating their base speaks to the quality of the Mayakoba environment above everything else.
    </p>
    <p>
      Uruguay's choice of the Fairmont Mayakoba is one of the most fan-friendly setups of the entire tournament. The resort is stunning and the Riviera Maya location makes it easy to combine beach vacation with World Cup fever. For millions of Uruguayan, Argentine, Spanish and European fans who are planning the World Cup as a broader experience beyond match days, Playa del Carmen and Mayakoba will be first-tier aspirational destinations. That flow of high-spending tourism directly drives demand — and nightly rates — for vacation rentals across the area.
    </p>

    <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">The Reserve at Mayakoba — The only way to own inside this ecosystem</h2>
    <p>
      The Reserve at Mayakoba is an ultra-luxury residential development inside the iconic Mayakoba complex in the Riviera Maya. 144 residences distributed across 16 low-rise towers surrounded by nature — with 65% of the land designated as natural conservation.
    </p>
    <p>
      Developed by Sancus Capital Partners and Inmobilia, with architecture by L35 Arquitectos and Sepúlveda Arquitectos — firms based in Barcelona, Madrid and Paris. Owners have access to Banyan Tree Mayakoba's full hotel services: spa, room service and world-class restaurants.
    </p>
    <p className="font-display text-xl text-foreground italic">Not as guests. As owners.</p>
    <p>
      Mayakoba is home to Banyan Tree, Rosewood, Fairmont and Andaz. The Reserve is the first opportunity to be a property owner within this ultra-luxury ecosystem, with direct access to the PGA Tour golf course, private cenotes and a beach club — amenities that until now were only available to hotel guests paying nightly rates.
    </p>
    <p>
      Units range from 2 to 4 bedrooms, between 192 and 660 m², with delivery projected for 2027–2028. Pricing starts from $1.1M USD.
    </p>
    <p>
      <Link to="/en/property/the-reserve-at-mayakoba" className="text-[#CFAE60] hover:text-[#B8982F] transition-colors">
        → View full property, floor plans and pricing
      </Link>
    </p>

    <PropertyCardEN />

    <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">What the 2026 World Cup means for your investment</h2>
    <p>
      The visibility effect generated by a World Cup national team basing themselves in a destination is immediate and lasting. When the world watches Valverde and Darwin Núñez on their screens, and the training footage shows mangroves, freshwater canals and Caribbean beach surrounding the Fairmont Mayakoba, that ecosystem gets imprinted on the memory of millions of high-net-worth travelers.
    </p>
    <p>
      The 2026 FIFA World Cup reaches a global audience of over two billion people. For owners of The Reserve at Mayakoba, June and July 2026 will represent the strongest rental demand — and the highest nightly rates — in the history of the area. Luxury properties across the Riviera Maya are already seeing 35 to 55% rate increases for those specific dates compared to the year before.
    </p>
    <p>
      For those still evaluating whether to enter: The Reserve has 144 residences inside a protected natural conservation ecosystem that cannot expand. Supply is fixed by design. The global demand the World Cup is generating for this specific destination is not.
    </p>

    <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">Living where the world's best footballers choose to stay</h2>
    <p>
      For 30 days, Valverde, Darwin Núñez, Araujo and the rest of La Celeste will share the Mayakoba ecosystem with The Reserve's residents. That's not just an interesting footnote — it's a reflection of what this development actually represents: the level of privacy, infrastructure and quality of life that an elite national team selects above every other option across an entire continent.
    </p>
    <p>
      What Uruguay enjoys for one month, The Reserve's owners have year-round: lagoon, mangrove, cenotes and jungle. Low-rise towers designed to integrate into the landscape rather than dominate it. Direct access to the Banyan Tree's spa, room service, restaurants and concierge — as an owner, not a guest. The El Camaleón Golf Club, longtime PGA Tour host. A private beach club facing the Caribbean.
    </p>
    <p>
      And a community of neighbors that matches the profile of those who stay at the Rosewood or the Fairmont: senior executives, multigenerational wealth buyers, international purchasers who place quality and privacy above any other consideration.
    </p>

    <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">Group H — The match the whole world will watch from Mayakoba</h2>
    <p>
      Uruguay faces Spain in Guadalajara on June 26 in what is already the most anticipated group-stage match of the entire tournament. Two-time champions against a Spanish side built by Xabi Alonso — with Valverde and company on one side, the broadcast coverage will be global and relentless. And in every one of those broadcasts, the name Mayakoba will appear as La Celeste's home base.
    </p>
    <p>
      For fans — Uruguayan, Argentine, Spanish, European — who are making the 2026 World Cup into a full travel experience rather than just attending matches, Playa del Carmen and Mayakoba will rank among the most coveted destinations of the tournament. The combination of world-class football atmosphere and Caribbean luxury is something no other base camp location in the tournament can replicate.
    </p>
    <p>
      That demand — premium travelers with high budgets, discovering the Mexican Caribbean for the first time — is precisely the audience that makes vacation rental properties in Mayakoba extraordinary assets for that window.
    </p>

    <h2 className="text-foreground font-display text-3xl mt-12 mb-4 border-b border-[#CFAE60]/30 pb-3">Frequently Asked Questions</h2>
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="q1">
        <AccordionTrigger className="font-display text-lg text-foreground">Can I buy as a foreigner?</AccordionTrigger>
        <AccordionContent className="font-body text-muted-foreground text-[16px] leading-[1.8]">
          Yes. The purchase is made through a fideicomiso — a Mexican bank trust that grants you full ownership rights. Rivana manages the entire process in English and Spanish, end to end.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q2">
        <AccordionTrigger className="font-display text-lg text-foreground">Is financing available?</AccordionTrigger>
        <AccordionContent className="font-body text-muted-foreground text-[16px] leading-[1.8]">
          The project offers payment plans during the construction phase. Our advisors present current conditions based on available inventory.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q3">
        <AccordionTrigger className="font-display text-lg text-foreground">When are units delivered?</AccordionTrigger>
        <AccordionContent className="font-body text-muted-foreground text-[16px] leading-[1.8]">
          Delivery is projected for 2027–2028 — meaning that entering today captures both construction-phase appreciation and the post-World Cup market environment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q4">
        <AccordionTrigger className="font-display text-lg text-foreground">Can I rent my unit on Airbnb?</AccordionTrigger>
        <AccordionContent className="font-body text-muted-foreground text-[16px] leading-[1.8]">
          Ask your Rivana advisor about the specific rental status of the unit before any decision. This is the first filter we apply on every single recommendation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q5">
        <AccordionTrigger className="font-display text-lg text-foreground">Is the ecosystem at risk of overdevelopment?</AccordionTrigger>
        <AccordionContent className="font-body text-muted-foreground text-[16px] leading-[1.8]">
          No. The Mayakoba conservation model restricts development by regulation. The Reserve's 144 residences are the ceiling — there are no additional towers planned within the natural conservation perimeter.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <blockquote className="border-l-2 border-[#CFAE60] pl-6 py-4 my-10">
      <p className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed">
        "Mayakoba is not just the most exclusive enclave in the Riviera Maya. It is the place where elite national teams choose to concentrate, where the world's best hotel brands choose to operate, and where The Reserve's owners choose to live. In June 2026, two billion people will learn its name. Your investment there needs no further argument."
      </p>
    </blockquote>

    {/* CTA */}
    <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
      <h3 className="font-display text-2xl mb-2">Speak with a Rivana advisor about The Reserve at Mayakoba today.</h3>
      <p className="text-sm text-muted-foreground font-body mb-6">Bilingual · Direct access to pricing and availability.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/en/property/the-reserve-at-mayakoba"
          className="inline-flex items-center justify-center gap-2 bg-[#CFAE60] text-white font-body text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#B8982F] transition-colors"
        >
          View the property
        </Link>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-[#CFAE60] text-[#CFAE60] font-body text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#CFAE60]/10 transition-colors"
          aria-label="Contact Rivana advisor via WhatsApp"
        >
          WhatsApp: +52 998 845 7224
        </a>
      </div>
    </div>
  </div>
);
