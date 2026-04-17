import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

/* ══════════════════════════════════════════════════════════════
   SPANISH
   ══════════════════════════════════════════════════════════════ */
export const MondrianGrandIslandBodyES = () => {
  const { localePath } = useLanguage();
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      {/* Language switcher */}
      <div className="flex justify-end">
        <Link to="/en/journal/mondrian-residences-grand-island-cancun" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Read in English →
        </Link>
      </div>

      <p className="font-display text-xl text-foreground italic">Tu inversión, tu legado.</p>

      <p>Hay desarrollos que simplemente llegan en el momento correcto. <strong className="text-foreground">The Residences at Grand Island Cancun en Grand Island, Cancún</strong>, es uno de ellos: el respaldo de Accor — el grupo hotelero más grande del mundo — una ubicación que en cinco años todos van a reconocer, vistas al mar Caribe y a la Laguna de Nichupté que jamás serán obstruidas, y un precio de preventa que todavía hace posible lo que después será una cifra muy distinta.</p>

      <p>Esta guía es para quien ya está evaluando con seriedad. Aquí encontrarás lo que necesitas saber sobre el proyecto, los números reales y por qué los inversionistas con visión están tomando posición hoy.</p>

      {/* ── SECTION: Accor backing ── */}
      <h2 className="text-foreground">El respaldo que cambia todo: Accor, Mondrian y Grand Island</h2>

      <p>The Residences at Grand Island Cancun no es simplemente un desarrollo inmobiliario con un nombre atractivo. Es un proyecto respaldado por <strong className="text-foreground">Accor</strong>, el grupo hotelero más grande del mundo con más de 5,700 propiedades en 110 países y marcas que van desde Sofitel y Fairmont hasta las colecciones de lujo y lifestyle más reconocidas del planeta.</p>

      <p><strong className="text-foreground">Mondrian</strong> es una de las marcas insignia del portafolio de lifestyle de Accor: diseño de vanguardia, experiencias curadas y un estándar de servicio que los huéspedes y residentes de Miami, Londres, Dubai y Los Ángeles ya conocen bien. Cuando Accor pone su nombre en un desarrollo residencial, no es solo marketing — es un compromiso operativo, reputacional y de largo plazo.</p>

      <p>Para el inversionista, esto se traduce en algo concreto: un activo que mantiene valor por sí solo, que atrae al arrendatario correcto, y que se posiciona en un segmento de mercado con demanda global sostenida. No compras un departamento; compras participación en un ecosistema de marca que ya probó su trayectoria en los destinos más sofisticados del mundo.</p>

      <p>Grand Island es el vehículo local de esa visión: un desarrollo de uso mixto que integra residencias, hotelería de marca, comercio y servicios dentro de un mismo complejo, con la operación y los estándares de Accor como columna vertebral.</p>

      {/* CTA 1 */}
      <div className="my-10 text-center">
        <Link to={localePath('/propiedad/mondrian-residences-grand-island-cancun')}>
          <Button variant="gold" size="lg">Ver la propiedad The Residences at Grand Island Cancun →</Button>
        </Link>
      </div>

      {/* ── SECTION: Location ── */}
      <h2 className="text-foreground">Ubicación: Grand Island y las vistas que nunca serán obstruidas</h2>

      <p>Grand Island ocupa uno de los terrenos más estratégicamente privilegiados de Cancún: frente al mar Caribe por un lado, con vista directa a la Laguna de Nichupté por el otro. No es una posición que se repite. Es una de las últimas oportunidades de propiedad en un punto donde el océano y la laguna convergen sin intermediarios.</p>

      <p>La particularidad que distingue a este desarrollo de cualquier otro en la zona es una que los inversionistas experimentados valoran por encima de cualquier amenidad: <strong className="text-foreground">las vistas son permanentes e inobstruibles</strong>. La configuración del proyecto y su posición geográfica garantizan que ninguna construcción futura — en ninguna dirección — podrá interponerse entre tu unidad y el horizonte. Lo que ves hoy es lo que verás en veinte años.</p>

      <p>En un mercado donde la Zona Hotelera ya está saturada y los nuevos desarrollos compiten por los últimos metros disponibles, Grand Island representa algo diferente: espacio, perspectiva y una vista que por definición no tiene precio — y que el mercado reconocerá en cada ciclo de valorización.</p>

      <p>A nivel de conectividad, la ubicación combina acceso directo a la marina, proximidad al centro de Cancún y a la infraestructura de la ciudad, con la privacidad y el aislamiento sensorial que solo el frente de agua puede ofrecer.</p>

      {/* ── SECTION: Amenities ── */}
      <h2 className="text-foreground">Amenidades: vivir dentro de un complejo de escala mundial</h2>

      <p>Una de las dimensiones que más distingue a The Residences at Grand Island Cancun del resto de la oferta de preventa en Cancún es el ecosistema de amenidades al que el residente tiene acceso — no solo las propias del edificio, sino las del complejo Grand Island en su totalidad, operadas bajo los estándares de Accor.</p>

      <h3 className="text-foreground">Campo de golf</h3>
      <p>Grand Island incluye un campo de golf integrado al complejo. No como amenidad decorativa, sino como componente central de la propuesta de lifestyle: una experiencia de juego con vista al mar y a la laguna, disponible para residentes, con el nivel de mantenimiento y servicio que el respaldo de Accor garantiza. Para el comprador que busca calidad de vida — y para el arrendatario de alto perfil que tu unidad puede atraer — esto no es un extra; es un diferenciador de primer orden.</p>

      <h3 className="text-foreground">Amenidades del complejo</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Albercas de diseño con vista al Caribe y a la Laguna de Nichupté</li>
        <li>Spa y centro de bienestar con operación de estándares Accor</li>
        <li>Gimnasio equipado a nivel hotelero de lujo</li>
        <li>Restaurantes y bares dentro del complejo, con oferta gastronómica curada</li>
        <li>Marina y acceso directo al agua</li>
        <li>Áreas sociales, salones de eventos y espacios de coworking premium</li>
        <li>Servicio de concierge disponible para residentes — equiparable al de un hotel cinco estrellas</li>
        <li>Seguridad y acceso controlado en todo el perímetro del complejo</li>
      </ul>

      <p>Para quien elige vivir aquí, cada día comienza y termina dentro de un entorno diseñado para funcionar como destino en sí mismo. Para quien invierte con visión de renta, este catálogo de amenidades es el argumento que justifica las tarifas más altas del mercado vacacional en Cancún.</p>

      {/* ── SECTION: Ficha del proyecto ── */}
      <h2 className="text-foreground">Ficha del proyecto</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-border">
          <tbody>
            <tr className="border-b border-border"><td className="p-3 font-semibold text-foreground">Operador</td><td className="p-3">Accor — Mondrian Hotels & Resorts</td></tr>
            <tr className="border-b border-border"><td className="p-3 font-semibold text-foreground">Complejo</td><td className="p-3">Grand Island Cancún</td></tr>
            <tr className="border-b border-border"><td className="p-3 font-semibold text-foreground">Entrega estimada</td><td className="p-3">Q2 2027</td></tr>
            <tr className="border-b border-border"><td className="p-3 font-semibold text-foreground">Precio de preventa desde</td><td className="p-3">$9,050,000 MXN</td></tr>
            <tr className="border-b border-border"><td className="p-3 font-semibold text-foreground">Precio proyectado post-preventa</td><td className="p-3">$12,000,000 MXN</td></tr>
            <tr className="border-b border-border"><td className="p-3 font-semibold text-foreground">Plusvalía esperada al momento de entrega</td><td className="p-3">~33%</td></tr>
            <tr className="border-b border-border"><td className="p-3 font-semibold text-foreground">Plan de pago</td><td className="p-3">30% enganche / 20% en parcialidades / 50% a la entrega</td></tr>
            <tr><td className="p-3 font-semibold text-foreground">Uso permitido</td><td className="p-3">Habitacional y renta vacacional</td></tr>
          </tbody>
        </table>
      </div>

      {/* CTA 2 */}
      <div className="my-10 text-center">
        <Link to={localePath('/presale')}>
          <Button variant="gold" size="lg">Ver preventa activa en Cancún →</Button>
        </Link>
      </div>

      {/* ── SECTION: Plan de pago ── */}
      <h2 className="text-foreground">El plan de pago 30/20/50: cómo funciona en la práctica</h2>

      <p>Una de las barreras más comunes para invertir en preventa es creer que se necesita el capital completo desde el primer día. El plan 30/20/50 está diseñado precisamente para lo contrario.</p>

      <p>Así se estructura:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">30%</strong> de enganche al momento de firma del contrato</li>
        <li><strong className="text-foreground">20%</strong> distribuido en mensualidades durante el periodo de construcción (hasta entrega Q2 2027)</li>
        <li><strong className="text-foreground">50%</strong> a la entrega, financiable con crédito hipotecario o recursos propios</li>
      </ul>

      <p>Esto significa que con el enganche inicial y pagos mensuales manejables, puedes asegurar una unidad cuyo valor proyectado al momento de entrega ya habrá incrementado considerablemente — mientras el activo todavía no existe físicamente, tu posición en él ya está generando rendimiento.</p>

      {/* ── SECTION: Por qué 2026 ── */}
      <h2 className="text-foreground">¿Por qué 2026 es el momento de entrar?</h2>

      <p>El mercado inmobiliario de lujo en Cancún está en un momento que rara vez se repite: demanda creciente, oferta de preventa limitada en desarrollos de marca, y un catalizador externo de alcance global — el <strong className="text-foreground">Mundial de Fútbol 2026</strong>, con partidos en Cancún — que ya está moviendo los radares de compradores nacionales e internacionales.</p>

      <p>Históricamente, los destinos sede de grandes eventos deportivos registran incrementos sostenidos en valor inmobiliario durante los 24 meses previos y posteriores al evento. Cancún ya está dentro de esa ventana.</p>

      <p>The Residences at Grand Island Cancun, con entrega en Q2 2027, llega justo cuando ese ciclo está en su punto más alto. Quien entre en preventa hoy no solo captura la plusvalía del proyecto — captura además el momentum de un destino que el mundo está redescubriendo.</p>

      {/* ── SECTION: Para quién ── */}
      <h2 className="text-foreground">¿Para quién es este proyecto?</h2>

      <p>The Residences at Grand Island Cancun es para el inversionista que entiende que el patrimonio no se construye esperando el momento perfecto, sino tomando decisiones informadas cuando la oportunidad está presente. Es para quien valora el respaldo de una de las marcas hoteleras más reconocidas del mundo, la certeza de vistas que nadie podrá obstruir, y la visión de estar en un destino que el mundo está descubriendo.</p>

      <p>También es para quien busca un activo que trabaje: la posibilidad de renta vacacional dentro de un complejo operado por Accor hace de esta unidad un instrumento financiero con retorno activo — un huésped que elige Mondrian Grand Island no está buscando un departamento de renta; está buscando una experiencia, y está dispuesto a pagarla.</p>

      {/* ── SECTION: El siguiente paso ── */}
      <h2 className="text-foreground">El siguiente paso</h2>

      <p>En Rivana Properties acompañamos a nuestros clientes en cada etapa del proceso: desde resolver todas las preguntas hasta la firma del contrato y más allá. Sin prisa, con toda la información sobre la mesa.</p>

      <p>Si quieres conocer disponibilidad de unidades, detalles del contrato o explorar si The Residences at Grand Island Cancun se alinea con tus objetivos de inversión y estilo de vida, el primer paso es una conversación.</p>

      {/* CTA 3 — full width */}
      <div className="my-12 text-center">
        <a href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria%20sobre%20Mondrian%20Residences" target="_blank" rel="noopener noreferrer" className="block">
          <Button variant="gold" size="lg" className="w-full max-w-lg mx-auto">Quiero asesoría inmobiliaria sobre The Residences at Grand Island Cancun</Button>
        </a>
      </div>

      <p className="font-display text-lg text-foreground italic text-center">Tu inversión, tu legado. — Rivana Properties</p>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════
   ENGLISH
   ══════════════════════════════════════════════════════════════ */
export const MondrianGrandIslandBodyEN = () => {
  const { localePath } = useLanguage();
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      {/* Language switcher */}
      <div className="flex justify-end">
        <Link to="/journal/mondrian-residences-grand-island-cancun" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Leer en español →
        </Link>
      </div>

      <p className="font-display text-xl text-foreground italic">Your investment. Your legacy.</p>

      <p>Some developments arrive at exactly the right moment. <strong className="text-foreground">The Residences at Grand Island Cancun</strong>, is one of them: the full weight of Accor — the world's largest hotel group — behind every square meter, an address that will define a generation of Cancún real estate, unobstructed views of both the Caribbean Sea and Laguna de Nichupté that no future construction will ever block, and a pre-sale price that still makes sense before it no longer does.</p>

      <p>This guide is for the serious buyer. Here you'll find everything that matters: the project, the backing, the numbers, and why forward-thinking investors are moving now.</p>

      {/* ── SECTION: Accor backing ── */}
      <h2 className="text-foreground">The backing that changes everything: Accor, Mondrian, and Grand Island</h2>

      <p>The Residences at Grand Island Cancun isn't simply a real estate development with a compelling name. It's a project backed by <strong className="text-foreground">Accor</strong> — the world's largest hotel group, with more than 5,700 properties across 110 countries and a portfolio that spans Sofitel, Fairmont, Raffles, and some of the most recognized luxury and lifestyle brands on the planet.</p>

      <p><strong className="text-foreground">Mondrian</strong> is one of the flagship lifestyle brands within the Accor collection: design-forward, experience-driven, with a service standard that guests and residents in Miami, London, Dubai, and Los Angeles already know well. When Accor places its name on a residential development, it's not marketing — it's an operational, reputational, and long-term commitment.</p>

      <p>For the investor, this translates into something concrete: an asset that holds value independently, attracts the right tenant, and positions itself in a market segment with sustained global demand. You're not buying a condominium. You're buying into a brand ecosystem that has proven its trajectory in the world's most sophisticated destinations.</p>

      <p>Grand Island is the local vehicle for that vision: a mixed-use development that integrates residences, branded hospitality, retail, and services within a single complex — with Accor's operations and standards as its backbone.</p>

      {/* CTA 1 */}
      <div className="my-10 text-center">
        <Link to={localePath('/propiedad/mondrian-residences-grand-island-cancun')}>
          <Button variant="gold" size="lg">View the The Residences at Grand Island Cancun property →</Button>
        </Link>
      </div>

      {/* ── SECTION: Location ── */}
      <h2 className="text-foreground">Location: Grand Island and the views that will never be blocked</h2>

      <p>Grand Island occupies one of the most strategically privileged sites in Cancún: facing the Caribbean Sea on one side, with direct views of Laguna de Nichupté on the other. This is not a position that repeats itself. It is one of the last opportunities for ownership at a point where ocean and lagoon converge without intermediaries.</p>

      <p>The characteristic that sets this development apart from everything else in the market is one that experienced investors value above any amenity: <strong className="text-foreground">the views are permanent and unobstructable</strong>. The project's configuration and geographic position guarantee that no future construction — in any direction — will ever stand between your unit and the horizon. What you see today is what you will see in twenty years.</p>

      <p>In a market where the Hotel Zone is already saturated and new developments compete for the last available land, Grand Island represents something different: space, perspective, and a view that by definition has no price — and that the market will recognize in every appreciation cycle.</p>

      <p>From a connectivity standpoint, the location combines direct marina access, proximity to Cancún's city center and urban infrastructure, with the privacy and sensory isolation that only a waterfront position can offer.</p>

      {/* ── SECTION: Amenities ── */}
      <h2 className="text-foreground">Amenities: living inside a world-class complex</h2>

      <p>One of the dimensions that most distinguishes The Residences at Grand Island Cancun from the rest of Cancún's pre-sale offering is the amenity ecosystem available to residents — not only those within the building itself, but those of the entire Grand Island complex, operated to Accor's standards.</p>

      <h3 className="text-foreground">Golf course</h3>
      <p>Grand Island includes a golf course integrated into the complex — not as a decorative feature, but as a central component of the lifestyle proposition. A playing experience with views of the Caribbean Sea and Laguna de Nichupté, available to residents, maintained to the level of service that Accor's backing guarantees. For the buyer seeking quality of life — and for the high-profile tenant your unit can attract — this is not an extra. It is a first-order differentiator in the Cancún market.</p>

      <h3 className="text-foreground">Complex amenities</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Design pools with direct views of the Caribbean and Laguna de Nichupté</li>
        <li>Spa and wellness center operated to Accor luxury standards</li>
        <li>Fully equipped hotel-grade fitness center</li>
        <li>Restaurants and bars within the complex, with curated culinary programming</li>
        <li>Marina and direct water access</li>
        <li>Social areas, event spaces, and premium co-working facilities</li>
        <li>Concierge service available to residents — equivalent to a five-star hotel</li>
        <li>Full-perimeter security and controlled access</li>
      </ul>

      <p>For those who choose to live here, every day begins and ends within an environment designed to function as a destination in itself. For those investing with a rental vision, this amenity catalogue is the argument that justifies the highest nightly rates in Cancún's vacation market.</p>

      {/* ── SECTION: Project overview ── */}
      <h2 className="text-foreground">Project overview</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-border">
          <tbody>
            <tr className="border-b border-border"><td className="p-3 font-semibold text-foreground">Operator</td><td className="p-3">Accor — Mondrian Hotels & Resorts</td></tr>
            <tr className="border-b border-border"><td className="p-3 font-semibold text-foreground">Complex</td><td className="p-3">Grand Island Cancún</td></tr>
            <tr className="border-b border-border"><td className="p-3 font-semibold text-foreground">Estimated delivery</td><td className="p-3">Q2 2027</td></tr>
            <tr className="border-b border-border"><td className="p-3 font-semibold text-foreground">Pre-sale price from</td><td className="p-3">$9,050,000 MXN</td></tr>
            <tr className="border-b border-border"><td className="p-3 font-semibold text-foreground">Projected post-presale price</td><td className="p-3">$12,000,000 MXN</td></tr>
            <tr className="border-b border-border"><td className="p-3 font-semibold text-foreground">Expected appreciation at delivery</td><td className="p-3">~33%</td></tr>
            <tr className="border-b border-border"><td className="p-3 font-semibold text-foreground">Payment plan</td><td className="p-3">30% down / 20% during construction / 50% at delivery</td></tr>
            <tr><td className="p-3 font-semibold text-foreground">Use</td><td className="p-3">Residential and vacation rental permitted</td></tr>
          </tbody>
        </table>
      </div>

      {/* CTA 2 */}
      <div className="my-10 text-center">
        <Link to={localePath('/presale')}>
          <Button variant="gold" size="lg">View active pre-sale listings in Cancún →</Button>
        </Link>
      </div>

      {/* ── SECTION: Payment plan ── */}
      <h2 className="text-foreground">The 30/20/50 payment plan: how it works</h2>

      <p>One of the most common misconceptions about pre-sale investing is that you need the full capital upfront. The 30/20/50 structure is designed to eliminate exactly that barrier.</p>

      <p>Here's how it breaks down:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">30%</strong> down payment at contract signing</li>
        <li><strong className="text-foreground">20%</strong> in monthly installments during the construction period (through Q2 2027 delivery)</li>
        <li><strong className="text-foreground">50%</strong> at delivery — financeable with a mortgage or personal funds</li>
      </ul>

      <p>In practical terms: with a structured entry point and manageable monthly payments through 2027, you can secure a unit whose projected value at delivery will already reflect significant appreciation — while the asset is still being built, your position in it is already generating return.</p>

      <p>For international buyers, Cancún real estate is fully accessible through a bank trust (fideicomiso), a secure and well-established legal structure that grants foreigners the same rights as domestic buyers. Our team handles the full process — no complexity, no surprises.</p>

      {/* ── SECTION: Why 2026 ── */}
      <h2 className="text-foreground">Why 2026 is the entry point</h2>

      <p>Cancún's luxury real estate market is at an inflection point that rarely repeats: growing demand, limited branded pre-sale inventory, and a global external catalyst — the <strong className="text-foreground">2026 FIFA World Cup</strong>, with matches scheduled in Cancún — already driving interest from domestic and international buyers.</p>

      <p>Historically, host-city real estate markets see sustained value increases in the 24 months before and after major sporting events. Cancún is already inside that window. The Residences at Grand Island Cancun, delivering in Q2 2027, lands right at the peak of that cycle. Those who enter at pre-sale today don't just capture the project's appreciation — they capture the momentum of a destination the world is actively rediscovering.</p>

      {/* ── SECTION: Who is it for ── */}
      <h2 className="text-foreground">Who is this project for?</h2>

      <p>The Residences at Grand Island Cancun is for the investor who understands that wealth is not built by waiting for the perfect moment, but by making informed decisions when opportunity is present. It's for the buyer who values the operational weight of the world's largest hotel group behind the asset, the certainty of views that no one will ever obstruct, and the vision to be positioned in a destination that global demand is now recognizing.</p>

      <p>It's also for the investor seeking an asset that works: vacation rental income within an Accor-operated complex makes this unit a yield-generating instrument, not just a passive appreciation play. A guest who chooses Mondrian Grand Island is not looking for a rental apartment — they are seeking an experience, and they are prepared to pay for it.</p>

      {/* ── SECTION: Next step ── */}
      <h2 className="text-foreground">Your next step</h2>

      <p>At Rivana Properties, we guide our clients through every stage of the process — from answering every question to contract signing and beyond. No pressure. Full transparency, every step of the way.</p>

      <p>If you'd like to explore unit availability, review contract details, or understand whether The Residences at Grand Island Cancun aligns with your investment goals and lifestyle vision, the first step is a conversation.</p>

      {/* CTA 3 — full width */}
      <div className="my-12 text-center">
        <a href="https://wa.me/529988457224?text=I%20Want%20Real%20Estate%20Advisory%20about%20Mondrian%20Residences" target="_blank" rel="noopener noreferrer" className="block">
          <Button variant="gold" size="lg" className="w-full max-w-lg mx-auto">I Want Real Estate Advisory about The Residences at Grand Island Cancun</Button>
        </a>
      </div>

      <p className="font-display text-lg text-foreground italic text-center">Your investment. Your legacy. — Rivana Properties</p>
    </div>
  );
};
