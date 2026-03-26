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
export const MondrianPresaleBodyES = () => {
  const { localePath } = useLanguage();
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>Lo que durante años se conoció como <strong className="text-foreground">The Residences at Grand Island</strong> acaba de recibir un nombre que cambia todo lo que significa invertir en la Zona Hotelera de Cancún: <strong className="text-foreground">Mondrian Residences at Grand Island Cancún</strong>. Este relanzamiento no es cosmético. Es el resultado de un acuerdo entre Grupo Murano — empresa listada en Nasdaq bajo el ticker MRNO — y Ennismore/Accor, la misma alianza que opera el Mondrian Ciudad de México en Condesa, uno de los hoteles boutique más reconocidos de América Latina.</p>

      <p>Esta guía es el recurso más completo disponible sobre este desarrollo. Si estás evaluando la preventa de Mondrian Residences, aquí encuentras todo lo que necesitas saber.</p>

      <h2 className="text-foreground">Qué es Mondrian Residences Grand Island Cancún</h2>
      <p>Mondrian Residences at Grand Island es un proyecto de <strong className="text-foreground">residencias de marca</strong> (<em>branded residences</em>) ubicado dentro del desarrollo maestro Grand Island, en el kilómetro 16.5 de la Zona Hotelera de Cancún — una franja de 23 hectáreas que representa la apuesta de mayor escala en el mercado inmobiliario de lujo de Quintana Roo en los últimos veinte años.</p>

      <p>El proyecto ofrece unidades de <strong className="text-foreground">1 a 3 recámaras más loft</strong>, con superficies entre 76.96 y 164.75 m², diseñadas por <strong className="text-foreground">Filipao Nunes Arquitectos</strong> — la firma portuguesa responsable del lenguaje visual de los Mondrian de Dubai y Doha — y operadas bajo la marca Mondrian por Accor, con entrega programada para <strong className="text-foreground">Q2 2027</strong>.</p>

      <p>Lo que distingue a este proyecto de cualquier otro en la Zona Hotelera es simple: es el único desarrollo residencial en Cancún en el que la marca operadora, el diseñador de arquitectura y el desarrollador tienen historial probado operando juntos. No es una marca licenciada a un desarrollador desconocido. Es Grupo Murano — la misma empresa que construyó y opera el Mondrian México City — replicando el modelo en Cancún.</p>

      <h2 className="text-foreground">De The Residences at Grand Island a Mondrian: qué cambió y qué significa</h2>
      <p>Quienes siguieron este desarrollo desde sus inicios lo conocen como <strong className="text-foreground">The Residences at Grand Island</strong>. El rebranding a <strong className="text-foreground">Mondrian Residences at Grand Island Cancún</strong> es consecuencia directa del cierre del acuerdo formal con Ennismore — la plataforma de marcas lifestyle de Accor — para operar el componente residencial bajo los estándares de la marca Mondrian.</p>

      <h3 className="text-foreground">Lo que cambia</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">El nombre operativo:</strong> de "The Residences at Grand Island" a "Mondrian Residences at Grand Island Cancún"</li>
        <li><strong className="text-foreground">El respaldo de marca:</strong> las unidades se integran al programa de rentas de Accor bajo el estándar Mondrian, con acceso al programa de lealtad ALL — Accor Live Limitless (más de 5,600 hoteles en el mundo)</li>
        <li><strong className="text-foreground">El posicionamiento de precio:</strong> el rebranding eleva el piso de precio y el perfil del comprador objetivo</li>
        <li><strong className="text-foreground">La gestión:</strong> operación profesional desde el día uno, sin curva de aprendizaje para el propietario</li>
      </ul>

      <h3 className="text-foreground">Lo que no cambia</h3>
      <p>La ubicación, las vistas, el diseño de Filipao Nunes y la fecha de entrega.</p>

      <h2 className="text-foreground">Por qué la marca Mondrian importa en términos de inversión</h2>
      <p>La marca Mondrian tiene presencia en <strong className="text-foreground">Nueva York, Los Ángeles, Londres, Cannes, Ciudad de México, Dubai y Bali</strong>, entre otras ciudades. El Mondrian Ciudad de México Condesa, inaugurado en diciembre de 2022, fue el primer hotel Mondrian en América Latina, con 183 habitaciones y cuatro conceptos gastronómicos, y forma parte del mismo grupo desarrollador — Murano — que construye Grand Island Cancún.</p>

      <p>Mondrian es parte de Ennismore, que tras su joint venture con Accor en 2021 se convirtió en la compañía de hospitalidad lifestyle más grande del mundo, con más de 200 hoteles, 160 en pipeline y una red de más de 45 residencias de marca.</p>

      <p>Para el inversionista, esto se traduce en algo concreto: las <strong className="text-foreground">residencias de marca operadas por cadenas del calibre de Accor</strong> generan históricamente entre un 20% y un 35% más de ingreso por renta que residencias sin afiliación hotelera en el mismo mercado, por tres razones:</p>

      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">Tarifa promedio más alta</strong> — el viajero de Mondrian está dispuesto a pagar más por reconocimiento de marca</li>
        <li><strong className="text-foreground">Canal de distribución global</strong> — la propiedad entra al inventario de reservas de Accor inmediatamente</li>
        <li><strong className="text-foreground">Gestión operativa profesional</strong> — el propietario no gestiona nada; recibe rendimientos</li>
      </ul>

      <h2 className="text-foreground">Análisis de la ubicación: Grand Island en la Zona Hotelera de Cancún</h2>
      <p>Grand Island ocupa el <strong className="text-foreground">km 16.5 de la Zona Hotelera</strong>, una posición estratégica que combina dos ventajas que no coexisten en ningún otro punto de la franja:</p>

      <p><strong className="text-foreground">Vista doble:</strong> Es el único desarrollo en la Zona Hotelera con vistas simultáneas al <strong className="text-foreground">Mar Caribe</strong> (al este) y a la <strong className="text-foreground">Laguna Nichupté</strong> (al oeste). La mayoría de los desarrollos en la zona tienen acceso a una de las dos, no a ambas.</p>

      <p><strong className="text-foreground">Masterplan de 23 hectáreas con infraestructura propia:</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Marina privada</li>
        <li>Campo de golf de 18 hoyos</li>
        <li>Beach club exclusivo</li>
        <li>Seguridad perimetral 24/7</li>
        <li>Restaurante rooftop con vista al Caribe</li>
        <li>Spa, gimnasio y wellness center diseñados por Filipao Nunes</li>
      </ul>

      <p>La primera fase del desarrollo Grand Island ya abrió en abril de 2024 bajo las marcas Vivid y Dreams de Hyatt, con una inversión que superó los 10 mil millones de pesos y la creación de más de 5,000 empleos. Las Mondrian Residences son la segunda fase residencial de este masterplan ya consolidado — ingresas a un ecosistema operativo, no a una promesa en papel.</p>

      <h2 className="text-foreground">Números de la preventa: precio, ROI y plan de pagos</h2>

      <h3 className="text-foreground">Precio de preventa</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="text-left p-3 font-body font-semibold text-foreground border-b border-border">Tipo</th>
              <th className="text-left p-3 font-body font-semibold text-foreground border-b border-border">Superficie</th>
              <th className="text-left p-3 font-body font-semibold text-foreground border-b border-border">Precio preventa</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3">1 recámara</td>
              <td className="p-3">desde 76.96 m²</td>
              <td className="p-3">desde $9,050,000 MXN</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">2 recámaras</td>
              <td className="p-3">hasta ~120 m²</td>
              <td className="p-3">precio según unidad</td>
            </tr>
            <tr>
              <td className="p-3">3 recámaras + Loft</td>
              <td className="p-3">hasta 164.75 m²</td>
              <td className="p-3">desde ~$514K USD</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>El <strong className="text-foreground">precio de lista post-preventa proyectado es de $12,000,000 MXN</strong>, lo que representa una plusvalía de <strong className="text-foreground">~33% antes de recibir las llaves</strong>.</p>

      <h3 className="text-foreground">Plan de pago flexible</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">30%</strong> de enganche al firma de contrato</li>
        <li><strong className="text-foreground">20%</strong> diferido en 12 mensualidades durante la construcción</li>
        <li><strong className="text-foreground">50%</strong> a la entrega (Q2 2027)</li>
      </ul>

      <h2 className="text-foreground">El contexto macroeconómico: por qué Cancún en 2026</h2>
      <p>El mercado de bienes raíces de lujo en Cancún tiene tres catalizadores activos que ningún otro destino de playa en México concentra simultáneamente:</p>

      <h3 className="text-foreground">1. Copa del Mundo 2026</h3>
      <p>Cancún será sede alterna y zona de concentración de aficionados durante el torneo. El impacto en la demanda de hospedaje premium y en la visibilidad internacional del destino ya es medible en los mercados de renta a corto plazo.</p>

      <h3 className="text-foreground">2. Apertura masiva de marcas de lujo</h3>
      <p>Entre los hoteles más esperados de 2026 en la zona se encuentran el Grand Hyatt Cancún Beach Resort, el Park Hyatt Cancún y el St. Regis Costa Mujeres. La concentración de marcas de primer nivel en un mismo destino eleva el precio promedio de renta de todo el mercado.</p>

      <h3 className="text-foreground">3. Presencia de Murano en Nasdaq</h3>
      <p>Murano Global Investments (Nasdaq: MRNO) ha desplegado más de 2 mil millones de dólares en proyectos inmobiliarios en los últimos 20 años, con respaldo de Bancomext, Sabadell y La Caixa. La solidez financiera del desarrollador es un diferenciador crítico en un mercado donde los proyectos de preventa sin ese respaldo representan riesgo de ejecución.</p>

      <h2 className="text-foreground">¿Para quién es esta inversión?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">El patrimonialista activo</strong> — quien busca un activo real, físico, en una moneda fuerte (USD/MXN), con plusvalía incorporada y generación de renta desde la entrega.</li>
        <li><strong className="text-foreground">El inversionista extranjero</strong> — norteamericano, europeo o latinoamericano que busca diversificación geográfica en un destino turístico de clase mundial con operación en inglés y respaldo de marca global.</li>
        <li><strong className="text-foreground">El comprador de segunda residencia</strong> — que quiere usar su propiedad parte del año y dejar que Accor la administre el resto del tiempo, generando ingresos sin gestión directa.</li>
        <li><strong className="text-foreground">El fondo o club de inversión</strong> — que evalúa el retorno ponderado por riesgo de branded residences en destinos de alta demanda turística.</li>
      </ul>

      <h2 className="text-foreground">Cómo adquirir: proceso paso a paso con Rivana Properties</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong className="text-foreground">Consulta inicial</strong> — tu asesor Rivana te presenta disponibilidad actual, planos de unidades y precio por piso/orientación</li>
        <li><strong className="text-foreground">Reserva de unidad</strong> — monto de apartado para asegurar el precio de preventa</li>
        <li><strong className="text-foreground">Firma de contrato</strong> — instrumento notarial con el desarrollador, con las condiciones de preventa</li>
        <li><strong className="text-foreground">Enganche (30%)</strong> — primer desembolso al firma</li>
        <li><strong className="text-foreground">Mensualidades (20%)</strong> — 12 pagos durante la etapa de construcción</li>
        <li><strong className="text-foreground">Escrituración y entrega (50%)</strong> — Q2 2027</li>
      </ol>

      <p>Rivana Properties es asesor autorizado de Mondrian Residences Grand Island Cancún. Nuestro equipo puede acompañarte desde la primera consulta hasta la escritura, incluyendo asesoría en fideicomiso para compradores extranjeros.</p>

      {/* ── CTA ── */}
      <div className="bg-card border border-border rounded-sm p-8 my-12 text-center">
        <h3 className="text-xl text-foreground mb-3">¿Quieres conocer disponibilidad y precios actualizados de Mondrian Residences?</h3>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to={localePath('/propiedad/mondrian-residences-grand-island-cancun')}>
            <Button variant="gold" size="lg">Ver la propiedad completa →</Button>
          </Link>
          <a href="https://wa.me/529988457224?text=Quiero%20información%20sobre%20Mondrian%20Residences%20Grand%20Island%20Cancún" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">Hablar con un asesor por WhatsApp</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════
   ENGLISH
   ══════════════════════════════════════════════════════════════ */
export const MondrianPresaleBodyEN = () => {
  const { localePath } = useLanguage();
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>The development formerly known as <strong className="text-foreground">The Residences at Grand Island</strong> has officially relaunched under one of the world's most recognizable hospitality brands: <strong className="text-foreground">Mondrian Residences at Grand Island Cancun</strong>. This isn't a cosmetic rebranding. It's the formalization of an agreement between <strong className="text-foreground">Grupo Murano</strong> — a Nasdaq-listed real estate company (ticker: MRNO) — and <strong className="text-foreground">Ennismore/Accor</strong>, the same partnership that operates Mondrian Mexico City Condesa, Latin America's first Mondrian property.</p>

      <p>This guide is the most complete resource available in English on this development. If you're evaluating the Mondrian Residences Cancun presale, everything you need is here.</p>

      <h2 className="text-foreground">What Is Mondrian Residences Grand Island Cancun?</h2>
      <p>Mondrian Residences at Grand Island is a <strong className="text-foreground">branded residences</strong> project within the Grand Island master development, located at <strong className="text-foreground">km 16.5 of Cancun's Hotel Zone</strong> — a 23-hectare estate that represents the largest luxury real estate bet in Quintana Roo in two decades.</p>

      <p>The project offers units ranging from <strong className="text-foreground">1 to 3 bedrooms plus loft</strong>, with surfaces between 829 and 1,773 sq ft, designed by <strong className="text-foreground">Filipao Nunes Arquitectos</strong> — the Portuguese firm behind the Mondrian properties in Dubai and Doha — and operated under the Mondrian brand by Accor, with delivery scheduled for <strong className="text-foreground">Q2 2027</strong>.</p>

      <p>What separates this project from every other development in Cancun's Hotel Zone is straightforward: it's the only residential development in the city where the brand operator, the architect, and the developer have a proven track record working together. This isn't a licensed brand on an unknown developer. It's Grupo Murano — the same company that built and operates Mondrian Mexico City — replicating the model in Cancun.</p>

      <h2 className="text-foreground">From The Residences at Grand Island to Mondrian: What Changed and Why It Matters</h2>
      <p>Many investors who followed this project from its early stages know it as <strong className="text-foreground">The Residences at Grand Island</strong>. The rebranding to <strong className="text-foreground">Mondrian Residences at Grand Island Cancun</strong> is the result of the formal closing of the agreement with Ennismore to operate the residential component under Mondrian standards.</p>

      <h3 className="text-foreground">What changes</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">The operating name:</strong> from "The Residences at Grand Island" to "Mondrian Residences at Grand Island Cancun"</li>
        <li><strong className="text-foreground">Brand backing:</strong> units integrate into Accor's rental program under Mondrian standards, with access to the ALL — Accor Live Limitless loyalty program (5,600+ hotels worldwide)</li>
        <li><strong className="text-foreground">Price positioning:</strong> the rebranding raises the price floor and the target buyer profile</li>
        <li><strong className="text-foreground">Day-one management:</strong> professional Accor operation from the first day of delivery — no management curve for the owner</li>
      </ul>

      <h3 className="text-foreground">What doesn't change</h3>
      <p>Location, views, Filipao Nunes' design language, and the delivery date.</p>

      <h2 className="text-foreground">Why the Mondrian Brand Matters for Your Investment Return</h2>
      <p>The Mondrian brand has active properties in <strong className="text-foreground">New York, Los Angeles, London, Cannes, Mexico City, Dubai, and Bali</strong>, among others. Mondrian Mexico City Condesa, which opened in December 2022, was the brand's first hotel in Latin America, developed in partnership with Grupo Murano — the same developer behind Grand Island Cancun.</p>

      <p>Mondrian is part of Ennismore, which after its joint venture with Accor in 2021 became the world's largest and fastest-growing lifestyle hospitality company, with more than 200 hotels, 160 in the pipeline, and a network of over 45 branded residences globally.</p>

      <p>For investors, this translates into concrete numbers. Branded residences operated by global hotel chains historically generate between <strong className="text-foreground">20% and 35% more rental income</strong> than non-affiliated residences in the same market, for three reasons:</p>

      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">Higher average daily rate</strong> — Mondrian guests pay a premium for brand recognition and service consistency</li>
        <li><strong className="text-foreground">Global distribution channel</strong> — your unit enters Accor's reservation inventory on day one</li>
        <li><strong className="text-foreground">Hands-off management</strong> — you own the asset; Accor handles the operations</li>
      </ul>

      <h2 className="text-foreground">Location Analysis: Grand Island in Cancun's Hotel Zone</h2>
      <p>Grand Island occupies <strong className="text-foreground">km 16.5 of the Hotel Zone</strong> — a position that combines two advantages that don't coexist anywhere else on the strip:</p>

      <p><strong className="text-foreground">Dual view:</strong> It's the only development in Cancun's Hotel Zone with simultaneous views of the <strong className="text-foreground">Caribbean Sea</strong> (east) and <strong className="text-foreground">Nichupté Lagoon</strong> (west). Most developments on the strip face one or the other.</p>

      <p><strong className="text-foreground">23-hectare masterplan with its own infrastructure:</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Private marina</li>
        <li>18-hole golf course</li>
        <li>Exclusive beach club</li>
        <li>24/7 perimeter security</li>
        <li>Rooftop restaurant with Caribbean views</li>
        <li>Spa, gym, and wellness center by Filipao Nunes</li>
      </ul>

      <p>The first phase of Grand Island already opened in April 2024 under the Hyatt Vivid and Dreams brands, with an investment exceeding 10 billion pesos and the creation of over 5,000 jobs. Mondrian Residences is the second, residential phase of this already-operating masterplan — you're entering a functioning ecosystem, not a paper promise.</p>

      <h2 className="text-foreground">Presale Numbers: Price, ROI, and Payment Plan</h2>

      <h3 className="text-foreground">Presale Pricing</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="text-left p-3 font-body font-semibold text-foreground border-b border-border">Unit Type</th>
              <th className="text-left p-3 font-body font-semibold text-foreground border-b border-border">Size</th>
              <th className="text-left p-3 font-body font-semibold text-foreground border-b border-border">Presale Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3">1 Bedroom</td>
              <td className="p-3">from 829 sq ft</td>
              <td className="p-3">from ~$475K USD</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">2 Bedrooms</td>
              <td className="p-3">up to ~1,290 sq ft</td>
              <td className="p-3">price per unit</td>
            </tr>
            <tr>
              <td className="p-3">3 Bedrooms + Loft</td>
              <td className="p-3">up to 1,773 sq ft</td>
              <td className="p-3">from $514K USD</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>The <strong className="text-foreground">projected post-presale list price is ~$630K USD</strong>, representing a <strong className="text-foreground">~33% appreciation before receiving the keys</strong>. Buyers who enter today are acquiring at a value that will cost 33% more by delivery.</p>

      <h3 className="text-foreground">Flexible Payment Schedule</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">30%</strong> down payment at contract signing</li>
        <li><strong className="text-foreground">20%</strong> deferred over 12 monthly installments during construction</li>
        <li><strong className="text-foreground">50%</strong> at delivery (Q2 2027)</li>
      </ul>

      <h2 className="text-foreground">The Macro Context: Why Cancun in 2026</h2>
      <p>Cancun's luxury real estate market has three active catalysts that no other beach destination in Mexico concentrates simultaneously:</p>

      <h3 className="text-foreground">1. FIFA World Cup 2026</h3>
      <p>Cancun is an alternate host city and will serve as a major fan hub during the tournament. The impact on premium hospitality demand and international visibility is already measurable in the short-term rental market.</p>

      <h3 className="text-foreground">2. Luxury brand wave</h3>
      <p>Among the most anticipated hotel openings of 2026 in the Cancun area are Grand Hyatt Cancun Beach Resort, Park Hyatt Cancun, and the St. Regis Costa Mujeres. The concentration of tier-one brands in one destination raises the average nightly rate floor for the entire market — directly benefiting existing inventory.</p>

      <h3 className="text-foreground">3. Murano on Nasdaq</h3>
      <p>Murano Global Investments (Nasdaq: MRNO) has deployed more than $2 billion in capital over 20 years, backed by Bancomext, Sabadell, and La Caixa. Developer financial strength is a critical differentiator in a presale market where execution risk is real.</p>

      <h2 className="text-foreground">Who Is This Investment For?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-foreground">The patrimony builder</strong> — someone who wants a hard asset, in a strong currency, with built-in appreciation and rental income from day one of delivery.</li>
        <li><strong className="text-foreground">The international investor</strong> — North American, European, or Latin American buyers diversifying geographically into a world-class tourism destination with English-speaking operations and a globally recognized brand.</li>
        <li><strong className="text-foreground">The second-home buyer</strong> — who wants to use the property part of the year and let Accor manage it the rest, generating income without direct management.</li>
        <li><strong className="text-foreground">The institutional buyer or investment club</strong> — evaluating risk-adjusted returns on branded residences in high-demand tourism markets.</li>
      </ul>

      <h2 className="text-foreground">Can Foreigners Buy? The Fideicomiso Explained</h2>
      <p>Yes. Foreign nationals can purchase real estate in Mexico's restricted zones — which include the coastline — through a <strong className="text-foreground">fideicomiso</strong> (bank trust). In this structure, a Mexican bank holds the title of the property in trust on the buyer's behalf, while the foreign buyer retains all ownership rights: the right to use, rent, sell, and pass the property to heirs.</p>

      <p>The fideicomiso is a fully legal, widely used mechanism backed by Mexican federal law. Rivana Properties provides complete advisory on this process as part of the purchase transaction — no additional intermediary required.</p>

      <h2 className="text-foreground">How to Buy: Step-by-Step Process with Rivana Properties</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong className="text-foreground">Initial consultation</strong> — your Rivana advisor presents current availability, floor plans, and pricing by floor and orientation</li>
        <li><strong className="text-foreground">Unit reservation</strong> — reservation deposit to lock in the presale price</li>
        <li><strong className="text-foreground">Contract signing</strong> — notarized instrument with the developer, with presale conditions</li>
        <li><strong className="text-foreground">Down payment (30%)</strong> — first disbursement at signing</li>
        <li><strong className="text-foreground">Monthly installments (20%)</strong> — 12 payments during construction</li>
        <li><strong className="text-foreground">Closing and delivery (50%)</strong> — Q2 2027, with deed transfer</li>
      </ol>

      <p>Rivana Properties is an authorized advisor for Mondrian Residences Grand Island Cancun. Our team accompanies you from first consultation to deed transfer, including fideicomiso advisory for foreign buyers.</p>

      {/* ── CTA ── */}
      <div className="bg-card border border-border rounded-sm p-8 my-12 text-center">
        <h3 className="text-xl text-foreground mb-3">Ready to see availability and updated pricing for Mondrian Residences?</h3>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to={localePath('/propiedad/mondrian-residences-grand-island-cancun')}>
            <Button variant="gold" size="lg">View the full property listing →</Button>
          </Link>
          <a href="https://wa.me/529988457224?text=I%20want%20information%20about%20Mondrian%20Residences%20Grand%20Island%20Cancun" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">Talk to an advisor on WhatsApp</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
