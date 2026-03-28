import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const PropertyCard = ({
  name, badge, detail, link,
}: { name: string; badge: string; detail: string; link: string }) => (
  <Link to={link} className="group block bg-card border border-border rounded-sm p-5 hover:border-primary/40 transition-colors my-6">
    <div className="flex items-start justify-between gap-4 flex-wrap">
      <div>
        <span className="text-xs font-body tracking-wider uppercase text-primary">{badge}</span>
        <h3 className="text-lg mt-1 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-sm text-muted-foreground font-body mt-1">{detail}</p>
      </div>
      <span className="text-primary text-sm font-body whitespace-nowrap">→</span>
    </div>
  </Link>
);

const ComparisonTableES = () => (
  <div className="overflow-x-auto my-8">
    <table className="w-full text-sm font-body border border-border">
      <thead><tr className="bg-muted">
        <th className="text-left p-3 border-b border-border">Factor</th>
        <th className="text-left p-3 border-b border-border">Mayakoba</th>
        <th className="text-left p-3 border-b border-border">Puerto Cancún</th>
      </tr></thead>
      <tbody className="text-muted-foreground">
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Precio de entrada</td><td className="p-3">Desde $1.1M USD</td><td className="p-3">Desde $846K USD</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Precio por m²</td><td className="p-3">$5,000–$6,500 USD</td><td className="p-3">$2,800–$3,800 USD</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Plusvalía anual</td><td className="p-3">16%</td><td className="p-3">15%</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Rendimiento de renta</td><td className="p-3">8–12%</td><td className="p-3">8–12%</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Perfil de renta</td><td className="p-3">Alta gama, tarifas elevadas</td><td className="p-3">Mensual o estacional premium</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Distancia al aeropuerto</td><td className="p-3">55–65 min</td><td className="p-3">10–15 min</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Ecosistema natural</td><td className="p-3">Manglares, canales, cenotes</td><td className="p-3">Laguna Nichupté, marina</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Propuesta central</td><td className="p-3">Naturaleza + ultra-lujo</td><td className="p-3">Marina + vida urbana premium</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Propiedad Rivana destacada</td><td className="p-3">The Reserve at Mayakoba</td><td className="p-3">SLS Ocean Beach</td></tr>
        <tr><td className="p-3 font-medium text-foreground">Ideal para</td><td className="p-3">Patrimonio intergeneracional</td><td className="p-3">Segunda vivienda + renta</td></tr>
      </tbody>
    </table>
  </div>
);

const ComparisonTableEN = () => (
  <div className="overflow-x-auto my-8">
    <table className="w-full text-sm font-body border border-border">
      <thead><tr className="bg-muted">
        <th className="text-left p-3 border-b border-border">Factor</th>
        <th className="text-left p-3 border-b border-border">Mayakoba</th>
        <th className="text-left p-3 border-b border-border">Puerto Cancún</th>
      </tr></thead>
      <tbody className="text-muted-foreground">
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Entry price</td><td className="p-3">From $1.1M USD</td><td className="p-3">From $846K USD</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Price per m²</td><td className="p-3">$5,000–$6,500 USD</td><td className="p-3">$2,800–$3,800 USD</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Annual appreciation</td><td className="p-3">16%</td><td className="p-3">15%</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Rental yield</td><td className="p-3">8–12%</td><td className="p-3">8–12%</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Rental profile</td><td className="p-3">Premium nightly, high rates</td><td className="p-3">Monthly or seasonal premium</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Distance to airport</td><td className="p-3">55–65 min</td><td className="p-3">10–15 min</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Natural ecosystem</td><td className="p-3">Mangroves, canals, cenotes</td><td className="p-3">Nichupté Lagoon, marina</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Core proposition</td><td className="p-3">Nature + ultra-luxury</td><td className="p-3">Marina + premium urban living</td></tr>
        <tr className="border-b border-border"><td className="p-3 font-medium text-foreground">Featured Rivana property</td><td className="p-3">The Reserve at Mayakoba</td><td className="p-3">SLS Ocean Beach</td></tr>
        <tr><td className="p-3 font-medium text-foreground">Ideal for</td><td className="p-3">Multigenerational wealth</td><td className="p-3">Second home + rental income</td></tr>
      </tbody>
    </table>
  </div>
);

/* ══════════════════════════════════════════
   SPANISH VERSION
   ══════════════════════════════════════════ */
export const MayakobaVsPuertoBodyES = () => {
  const { localePath } = useLanguage();
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>Dos destinos. Dos filosofías de lujo. Dos tesis de inversión completamente distintas. Mayakoba, en la Riviera Maya, es la naturaleza más curada de México — un ecosistema privado que comparte ADN con los resorts Fairmont, Rosewood, Banyan Tree y Andaz, donde el 65% del terreno es conservación natural y donde la selección de Uruguay eligió concentrarse durante el Mundial FIFA 2026. Puerto Cancún es el urbanismo de lujo más sofisticado del Caribe — una marina privada rodeada de torres de cristal, campo de golf de 18 hoyos, comercio premium y acceso directo al Caribe en el corazón de la ciudad.</p>
      <p>Elegir entre los dos no es una decisión trivial. Tampoco debería serlo. Esta comparativa te da los números reales, el perfil real de cada mercado y las propiedades específicas que Rivana tiene disponibles en ambas zonas hoy.</p>

      <h2 className="text-foreground">Mayakoba — el lujo que se integra a la naturaleza</h2>
      <p>Mayakoba es el corredor de lujo más prestigioso de la Riviera Maya, hogar de resorts como Rosewood, Fairmont y Banyan Tree. The Reserve at Mayakoba ofrece residencias exclusivas en un entorno natural protegido.</p>
      <p>Lo que hace a Mayakoba genuinamente irrepetible no es el lujo de sus hoteles — es la decisión de no sacrificar la naturaleza por el desarrollo. Más de 600 hectáreas de manglares, canales de agua dulce, cenotes y playa del Caribe gobiernan el ecosistema. Las torres residenciales se integran al paisaje en lugar de dominarlo. Esa filosofía de desarrollo — proteger el entorno como activo, no como obstáculo — es lo que explica que las marcas más exigentes del mundo hayan elegido Mayakoba como su única ubicación en la Riviera Maya.</p>
      <p>Con el Mundial 2026 como catalizador — la selección de Uruguay concentrándose en el Fairmont Mayakoba — las propiedades en Mayakoba están posicionadas para una apreciación significativa. El campo de golf de clase mundial y la infraestructura five-star atraen a compradores de todo el mundo.</p>
      <p>La plusvalía anual en Mayakoba se ubica en el 16%, con rendimientos de renta del 8 al 12%. El precio de entrada — desde $1.1 millones de dólares en The Reserve — refleja la exclusividad del ecosistema y la escasez de oferta residencial dentro de él.</p>

      <h3 className="text-foreground text-xl mt-8">La propiedad Rivana en Mayakoba:</h3>
      <p><strong className="text-foreground">The Reserve at Mayakoba</strong> ⭐</p>
      <p>144 residencias de ultra-lujo en 16 torres de baja altura con el 65% del terreno como conservación natural. Desarrollado por Sancus Capital Partners e Inmobilia, arquitectura de L35 Arquitectos y Sepúlveda Arquitectos. Acceso a los servicios hoteleros del Banyan Tree: spa, room service y restaurantes de clase mundial. 2 a 4 recámaras, 192 a 660 m², desde $1.1 millones USD. Entregas 2027–2028.</p>
      <p>The Reserve es la primera y única oportunidad de ser propietario residencial dentro del ecosistema Mayakoba — no adyacente a él, sino dentro. La distinción es total: accedes a los servicios del Banyan Tree como propietario, no como huésped. El campo de golf El Camaleón, el club de playa privado y los canales de agua dulce son parte de tu cotidiano.</p>
      <PropertyCard name="The Reserve at Mayakoba" badge="Preventa" detail="2–4 Rec. · 192–660 m² · Desde $1.1M USD" link={localePath('/propiedad/the-reserve-at-mayakoba')} />
      <div className="my-4">
        <Link to={localePath('/mayakoba')} className="text-primary font-body text-sm hover:underline">Explorar Mayakoba →</Link>
      </div>

      <h2 className="text-foreground">Puerto Cancún — la marina más exclusiva del Caribe</h2>
      <p>Puerto Cancún es una comunidad residencial cerrada con marina privada, campo de golf y acceso directo al mar — el desarrollo más exclusivo de Cancún y uno de los más prestigiosos de México. Con seguridad las 24 horas, centros comerciales de lujo y escuelas internacionales, es ideal para familias que buscan calidad de vida sin renunciar al retorno de inversión.</p>
      <p>La propuesta de Puerto Cancún es urbana en el mejor sentido: no es un resort, es una ciudad dentro de una ciudad. Los yates comparten agua con condominios de cristal. Los restaurantes de autor coexisten con escuelas internacionales. El campo de golf de 18 hoyos tiene como telón de fondo la laguna del Nichupté. Todo está diseñado para quien quiere el nivel más alto de vida permanente — no solo de vacaciones.</p>
      <p>Los precios en Puerto Cancún oscilan entre $3,800 USD por metro cuadrado en la zona marina y $2,800 USD en la zona comercial mixta. La plusvalía anual sostenida es del 15%, con proyecciones de aceleración por el Mundial 2026. El rendimiento de renta oscila entre el 8 y el 12%.</p>
      <p>La ventaja logística de Puerto Cancún sobre Mayakoba es decisiva para ciertos perfiles: 10 minutos del aeropuerto, en el centro de la red de servicios de Cancún y con la mayor densidad de oferta educativa y médica del corredor.</p>

      <h3 className="text-foreground text-xl mt-8">Las propiedades Rivana en Puerto Cancún:</h3>
      <p><strong className="text-foreground">SLS Ocean Beach</strong> ⭐</p>
      <p>Residencias de lujo en Novo Cancún desarrolladas por Inmobilia, Ucalli y Related. Arquitectura por Arquitectonica, interiorismo por Bernardi + Peschard. Operado bajo la marca SLS Hotels (Ennismore + Accor). Unidades de 191 a 356 m² desde $1.6 millones USD. Entrega verano 2028. El respaldo de marca más sofisticado del corredor — el equivalente en Puerto Cancún a lo que Banyan Tree representa en Mayakoba.</p>
      <PropertyCard name="SLS Ocean Beach" badge="Preventa" detail="1–3 Rec. · 191–356 m² · Desde $1.6M USD" link={localePath('/propiedad/sls-ocean-beach-puerto-cancun')} />

      <p><strong className="text-foreground">Vellmari Grand Living</strong></p>
      <p>95 residencias más 3 penthouses en 2 torres de 20 pisos con vistas de 200 grados al Mar Caribe, la laguna y la marina. 20 amenidades premium: marina, albercas, pádel, pickleball, spa, gimnasio, kids club y lounge bar. Plaza Puerto Cancún a menos de 500 metros. Desde $846,000 USD, entregas diciembre 2026 y julio 2027.</p>
      <PropertyCard name="Vellmari Grand Living" badge="Preventa" detail="2–5 Rec. · 169–714 m² · Desde $846K USD" link={localePath('/propiedad/vellmari-grand-living')} />
      <div className="my-4">
        <Link to={localePath('/cancun/puerto-cancun')} className="text-primary font-body text-sm hover:underline">Explorar Puerto Cancún →</Link>
      </div>

      <h2 className="text-foreground">Comparativa directa — los números que importan</h2>
      <p>Esta tabla resume los factores clave para un inversionista que evalúa ambas zonas simultáneamente:</p>
      <ComparisonTableES />
      <p>La diferencia de precio por metro cuadrado no refleja una diferencia de calidad — refleja la escasez geográfica de cada ecosistema. Mayakoba tiene 144 residencias dentro de un perímetro de conservación que no puede expandirse. Puerto Cancún tiene mayor volumen de oferta, mayor liquidez de reventa y mayor conectividad urbana.</p>

      <h2 className="text-foreground">Perfil de comprador — ¿cuál eres tú?</h2>
      <p><strong className="text-foreground">Elige Mayakoba si:</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Tu horizonte de inversión es de 5 años o más y priorizas la apreciación de patrimonio sobre el flujo de caja inmediato.</li>
        <li>La naturaleza y la privacidad son factores determinantes en tu calidad de vida.</li>
        <li>El acceso a un ecosistema de resorts de lujo — Banyan Tree, Rosewood, Fairmont, Andaz — es parte del activo que estás comprando, no solo el amenity.</li>
        <li>No dependes de la renta mensual para sostener la inversión.</li>
        <li>Quieres un activo que dentro de una generación sea más difícil de conseguir de lo que es hoy.</li>
      </ul>
      <p><strong className="text-foreground">Elige Puerto Cancún si:</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Quieres combinar uso propio de alta calidad con rendimiento de renta mensual o estacional.</li>
        <li>La conectividad urbana — aeropuerto, hospitales, escuelas internacionales, restaurantes, centros comerciales — es un factor de peso en tu decisión.</li>
        <li>Tienes interés en la vida de marina y el acceso náutico.</li>
        <li>Buscas un activo con mayor liquidez de reventa en el mercado local de Cancún.</li>
        <li>Tu horizonte es de 3 a 5 años con una estrategia de salida clara.</li>
      </ul>
      <p><strong className="text-foreground">¿Y si no encajas en ninguno de los dos?</strong></p>
      <p>Existe un tercer perfil que varios clientes Rivana han elegido: diversificar entre ambas zonas, balanceando la apreciación de patrimonio de largo plazo de Mayakoba con el flujo de caja de renta de Puerto Cancún. La combinación produce un portafolio con menor volatilidad, dos perfiles de demanda distintos y la mayor cobertura posible del espectro de lujo en el Caribe Mexicano.</p>

      <h2 className="text-foreground">El factor Mundial FIFA 2026 en ambas zonas</h2>
      <p>El Mundial tiene un impacto distinto en cada zona — y ambos son positivos, aunque de naturaleza diferente.</p>
      <p><strong className="text-foreground">En Mayakoba,</strong> el impacto es de visibilidad global. La selección de Uruguay concentrándose en el Fairmont Mayakoba durante 30 días pone el nombre del ecosistema en pantallas de todo el mundo. Para los propietarios de The Reserve, eso significa que el activo que poseen aparece en el radar de compradores internacionales de ultra-alto poder adquisitivo que hasta ahora no lo conocían. La demanda de renta vacacional en Mayakoba para junio y julio de 2026 ya está registrando tarifas históricamente altas.</p>
      <p><strong className="text-foreground">En Puerto Cancún,</strong> el impacto es de demanda directa. La zona norte de Cancún — donde se ubica Puerto Cancún — es uno de los principales corredores de acceso para los miles de aficionados internacionales que usarán el aeropuerto de Cancún como base durante el torneo. La demanda de renta premium en unidades de largo plazo para esas semanas está siendo absorbida en tiempo récord por propietarios con unidades disponibles en la zona.</p>

      <h2 className="text-foreground">Por qué Rivana en ambas zonas</h2>
      <p>Tener acceso a propiedades verificadas en Mayakoba y Puerto Cancún simultáneamente no es lo habitual en el mercado — la mayoría de los agentes se especializan en una zona o en un tipo de producto. Rivana opera en el espectro completo del lujo en el Caribe Mexicano porque nuestra tesis es que la mejor recomendación para cada cliente puede estar en cualquier punto de ese espectro, dependiendo de su perfil.</p>
      <p>Lo que hacemos antes de cualquier recomendación en ambas zonas: verificamos el historial del desarrollador, confirmamos el estatus del título, evaluamos el permiso STR proyectado, revisamos el contrato de promesa y contrastamos el precio con las transacciones recientes de mercado. Eso es lo que significa asesoría especializada — no mostrar catálogos, sino filtrar con criterio.</p>

      <h2 className="text-foreground">Preguntas frecuentes</h2>
      <div className="space-y-6">
        <div><p className="font-medium text-foreground">¿Cuál genera más renta, Mayakoba o Puerto Cancún?</p><p>Mayakoba genera tarifas nocturnas más altas en términos absolutos — $500 USD o más por noche en temporada alta para propiedades de calidad — pero con menor volumen de noches que la Zona Hotelera. Puerto Cancún produce un flujo de renta más estable y predecible, especialmente en el segmento de renta mensual premium. El rendimiento bruto anual es comparable en ambas zonas, pero la estructura de ese rendimiento es diferente.</p></div>
        <div><p className="font-medium text-foreground">¿Puedo comprar en ambas zonas siendo extranjero?</p><p>Sí. Ambas zonas están dentro de la zona costera restringida y requieren fideicomiso bancario para compradores extranjeros. Rivana coordina el proceso completo en inglés y español.</p></div>
        <div><p className="font-medium text-foreground">¿Cuál tiene mejor liquidez de reventa?</p><p>Puerto Cancún tiene un mercado de reventa más activo en términos de volumen de transacciones — hay más compradores locales y nacionales en ese segmento de precio. Mayakoba tiene un mercado de reventa más reducido pero con compradores de muy alto poder adquisitivo y menor sensibilidad al precio. La velocidad de venta puede ser similar, pero el perfil del comprador es muy diferente.</p></div>
        <div><p className="font-medium text-foreground">¿Cuánto tiempo debo esperar para ver plusvalía en preventa?</p><p>En ambas zonas, la plusvalía de preventa se realiza en el momento de la entrega — entre 18 meses y 3 años dependiendo del proyecto. The Reserve at Mayakoba entrega en 2027–2028. SLS Ocean Beach entrega en verano 2028. Vellmari entrega en diciembre 2026 y julio 2027.</p></div>
      </div>

      <blockquote className="border-l-2 border-primary pl-6 py-4 my-8">
        <p className="font-display text-xl italic text-foreground leading-relaxed">"Mayakoba y Puerto Cancún no compiten — se complementan. Una es el legado que se hereda; la otra, el estilo de vida que se vive. Los mejores portafolios tienen las dos."</p>
      </blockquote>

      <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
        <h3 className="text-xl mb-3 text-foreground">¿Quieres saber cuál se ajusta mejor a tu objetivo?</h3>
        <p className="text-muted-foreground font-body mb-6">Habla hoy con un asesor Rivana — bilingüe, con acceso directo a The Reserve at Mayakoba, SLS Ocean Beach, Vellmari y todas las propiedades mencionadas.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20inmobiliaria" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-body tracking-wider uppercase hover:bg-primary/90 transition-colors">Quiero asesoría inmobiliaria</a>
          <Link to={localePath('/listings')} className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-sm text-sm font-body tracking-wider uppercase text-foreground hover:border-primary/40 transition-colors">Ver todas las propiedades</Link>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   ENGLISH VERSION
   ══════════════════════════════════════════ */
export const MayakobaVsPuertoBodyEN = () => {
  const { localePath } = useLanguage();
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-6">
      <p>Two destinations. Two philosophies of luxury. Two fundamentally different investment theses. Mayakoba, in the Riviera Maya, is Mexico's most curated natural setting — a private ecosystem that shares DNA with the Fairmont, Rosewood, Banyan Tree and Andaz resorts, where 65% of the land is natural conservation and where Uruguay's national team chose to base itself during the 2026 FIFA World Cup. Puerto Cancún is the most sophisticated urban luxury in the Caribbean — a private marina surrounded by glass towers, an 18-hole golf course, premium retail and direct Caribbean access at the heart of the city.</p>
      <p>Choosing between the two is not a trivial decision. Nor should it be. This comparison gives you the real numbers, the real profile of each market and the specific Rivana properties available in both zones today.</p>

      <h2 className="text-foreground">Mayakoba — luxury that integrates with nature</h2>
      <p>Mayakoba is the most prestigious luxury corridor in the Riviera Maya, home to resorts like Rosewood, Fairmont and Banyan Tree. The Reserve at Mayakoba offers exclusive residences in a protected natural environment.</p>
      <p>What makes Mayakoba genuinely unrepeatable is not the luxury of its hotels — it is the decision not to sacrifice nature for development. More than 600 hectares of mangroves, freshwater canals, cenotes and Caribbean beach govern the ecosystem. Residential towers integrate into the landscape rather than dominating it. That development philosophy — protecting the environment as an asset, not an obstacle — is precisely why the world's most demanding brands chose Mayakoba as their only location in the Riviera Maya.</p>
      <p>With the 2026 World Cup as a catalyst — Uruguay's national team basing at the Fairmont Mayakoba — properties in Mayakoba are positioned for significant appreciation. The world-class golf course and five-star infrastructure attract buyers from around the world.</p>
      <p>Annual appreciation in Mayakoba is 16%, with rental yields of 8 to 12%. The entry price — from $1.1 million USD at The Reserve — reflects the exclusivity of the ecosystem and the scarcity of residential supply within it.</p>

      <h3 className="text-foreground text-xl mt-8">The Rivana property in Mayakoba:</h3>
      <p><strong className="text-foreground">The Reserve at Mayakoba</strong> ⭐</p>
      <p>144 ultra-luxury residences across 16 low-rise towers with 65% of land as natural conservation. Developed by Sancus Capital Partners and Inmobilia, architecture by L35 Arquitectos and Sepúlveda Arquitectos. Access to Banyan Tree hotel services: spa, room service and world-class restaurants. 2 to 4 bedrooms, 192 to 660 m², from $1.1 million USD. 2027–2028 deliveries.</p>
      <p>The Reserve is the first and only opportunity to own residential property inside the Mayakoba ecosystem — not adjacent to it, but within it. The distinction is total: you access Banyan Tree services as an owner, not a guest. El Camaleón Golf Club, the private beach club and the freshwater canals become part of your daily life.</p>
      <PropertyCard name="The Reserve at Mayakoba" badge="Pre-Sale" detail="2–4 Bed · 192–660 m² · From $1.1M USD" link={localePath('/propiedad/the-reserve-at-mayakoba')} />
      <div className="my-4">
        <Link to={localePath('/mayakoba')} className="text-primary font-body text-sm hover:underline">Explore Mayakoba →</Link>
      </div>

      <h2 className="text-foreground">Puerto Cancún — the most exclusive marina in the Caribbean</h2>
      <p>Puerto Cancún is a gated residential community with a private marina, golf course and direct sea access — Cancún's most exclusive development and one of the most prestigious in Mexico. With 24-hour security, luxury shopping and international schools, it is ideal for families seeking quality of life without sacrificing investment return.</p>
      <p>Puerto Cancún's proposition is urban in the best sense: it is not a resort, it is a city within a city. Yachts share water with glass condominiums. Signature restaurants coexist with international schools. The 18-hole golf course has the Nichupté Lagoon as its backdrop. Everything is designed for those who want the highest standard of permanent living — not just vacation living.</p>
      <p>Prices in Puerto Cancún range from $3,800 USD per square meter in the marina zone to $2,800 USD in the commercial mixed-use area. Sustained annual appreciation is 15%, with acceleration projections tied to the 2026 World Cup. Rental yields of 8 to 12%.</p>
      <p>Puerto Cancún's logistical advantage over Mayakoba is decisive for certain profiles: 10 minutes from the airport, at the center of Cancún's services network and with the highest density of educational and medical infrastructure in the corridor.</p>

      <h3 className="text-foreground text-xl mt-8">Rivana properties in Puerto Cancún:</h3>
      <p><strong className="text-foreground">SLS Ocean Beach</strong> ⭐</p>
      <p>Luxury residences in Novo Cancún developed by Inmobilia, Ucalli and Related. Architecture by Arquitectonica, interiors by Bernardi + Peschard. Operated under the SLS Hotels brand (Ennismore + Accor). Units from 191 to 356 m², from $1.6 million USD. Summer 2028 delivery. The most sophisticated brand backing in the corridor — the Puerto Cancún equivalent of what Banyan Tree represents in Mayakoba.</p>
      <PropertyCard name="SLS Ocean Beach" badge="Pre-Sale" detail="1–3 Bed · 191–356 m² · From $1.6M USD" link={localePath('/propiedad/sls-ocean-beach-puerto-cancun')} />

      <p><strong className="text-foreground">Vellmari Grand Living</strong></p>
      <p>95 residences plus 3 penthouses across 2 twenty-story towers with 200-degree views of the Caribbean, the lagoon and the marina. 20 premium amenities: marina, pools, paddle tennis, pickleball, spa, gym, kids club and lounge bar. Plaza Puerto Cancún less than 500 meters away. From $846,000 USD, December 2026 and July 2027 deliveries.</p>
      <PropertyCard name="Vellmari Grand Living" badge="Pre-Sale" detail="2–5 Bed · 169–714 m² · From $846K USD" link={localePath('/propiedad/vellmari-grand-living')} />
      <div className="my-4">
        <Link to={localePath('/cancun/puerto-cancun')} className="text-primary font-body text-sm hover:underline">Explore Puerto Cancún →</Link>
      </div>

      <h2 className="text-foreground">Direct comparison — the numbers that matter</h2>
      <p>This table summarizes the key factors for an investor evaluating both zones simultaneously:</p>
      <ComparisonTableEN />
      <p>The price-per-square-meter difference does not reflect a quality difference — it reflects the geographic scarcity of each ecosystem. Mayakoba has 144 residences within a conservation perimeter that cannot expand. Puerto Cancún has greater supply volume, greater resale liquidity and greater urban connectivity.</p>

      <h2 className="text-foreground">Buyer profile — which one are you?</h2>
      <p><strong className="text-foreground">Choose Mayakoba if:</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Your investment horizon is 5 years or more and you prioritize wealth appreciation over immediate cash flow.</li>
        <li>Nature and privacy are determining factors in your quality of life.</li>
        <li>Access to a luxury resort ecosystem — Banyan Tree, Rosewood, Fairmont, Andaz — is part of the asset you are buying, not just an amenity.</li>
        <li>You do not depend on monthly rental income to sustain the investment.</li>
        <li>You want an asset that will be harder to acquire in a generation than it is today.</li>
      </ul>
      <p><strong className="text-foreground">Choose Puerto Cancún if:</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li>You want to combine high-quality personal use with monthly or seasonal rental yield.</li>
        <li>Urban connectivity — airport, hospitals, international schools, restaurants, shopping — carries significant weight in your decision.</li>
        <li>You are interested in marina life and nautical access.</li>
        <li>You are looking for an asset with stronger resale liquidity in Cancún's local market.</li>
        <li>Your horizon is 3 to 5 years with a clear exit strategy.</li>
      </ul>
      <p><strong className="text-foreground">What if neither fits perfectly?</strong></p>
      <p>There is a third profile that several Rivana clients have chosen: diversifying across both zones, balancing Mayakoba's long-term wealth appreciation with Puerto Cancún's rental cash flow. The combination produces a portfolio with lower volatility, two distinct demand profiles and the widest possible coverage of the luxury spectrum in the Mexican Caribbean.</p>

      <h2 className="text-foreground">The FIFA World Cup 2026 factor in both zones</h2>
      <p>The World Cup has a different impact in each zone — and both are positive, though of a different nature.</p>
      <p><strong className="text-foreground">In Mayakoba,</strong> the impact is global visibility. Uruguay's national team concentrating at the Fairmont Mayakoba for 30 days puts the ecosystem's name on screens worldwide. For The Reserve owners, that means the asset they hold appears on the radar of ultra-high-net-worth international buyers who were not previously aware of it. Vacation rental demand in Mayakoba for June and July 2026 is already recording historically high rates.</p>
      <p><strong className="text-foreground">In Puerto Cancún,</strong> the impact is direct demand. Northern Cancún — where Puerto Cancún is located — is one of the primary access corridors for the thousands of international fans who will use Cancún airport as their base during the tournament. Demand for premium long-term rentals in the zone for those weeks is being absorbed at record speed by owners with available units.</p>

      <h2 className="text-foreground">Why Rivana across both zones</h2>
      <p>Having access to verified properties in Mayakoba and Puerto Cancún simultaneously is not the norm in this market — most agents specialize in one zone or one product type. Rivana operates across the full spectrum of luxury in the Mexican Caribbean because our thesis is that the best recommendation for each client can come from any point along that spectrum, depending on their profile.</p>
      <p>What we do before any recommendation in both zones: we verify the developer's track record, confirm title status, evaluate the projected STR permit, review the purchase promise agreement and benchmark the price against recent market transactions. That is what specialized advisory means — not showing catalogs, but filtering with judgment.</p>

      <h2 className="text-foreground">Frequently asked questions</h2>
      <div className="space-y-6">
        <div><p className="font-medium text-foreground">Which generates more rental income, Mayakoba or Puerto Cancún?</p><p>Mayakoba generates higher absolute nightly rates — $500 USD or more per night in high season for quality properties — but with lower volume of nights than the Hotel Zone. Puerto Cancún produces more stable and predictable rental flow, especially in the premium monthly rental segment. Gross annual yield is comparable in both zones, but the structure of that yield is different.</p></div>
        <div><p className="font-medium text-foreground">Can I buy in both zones as a foreigner?</p><p>Yes. Both zones fall within the coastal restricted zone and require a bank trust (fideicomiso) for foreign buyers. Rivana manages the complete process in English and Spanish.</p></div>
        <div><p className="font-medium text-foreground">Which has better resale liquidity?</p><p>Puerto Cancún has a more active resale market by transaction volume — there are more local and national buyers in that price segment. Mayakoba has a smaller resale market but with ultra-high-net-worth buyers and lower price sensitivity. Sale speed can be similar, but the buyer profile is very different.</p></div>
        <div><p className="font-medium text-foreground">How long until I see pre-sale appreciation?</p><p>In both zones, pre-sale appreciation is realized at delivery — between 18 months and 3 years depending on the project. The Reserve at Mayakoba delivers in 2027–2028. SLS Ocean Beach delivers summer 2028. Vellmari delivers in December 2026 and July 2027.</p></div>
      </div>

      <blockquote className="border-l-2 border-primary pl-6 py-4 my-8">
        <p className="font-display text-xl italic text-foreground leading-relaxed">"Mayakoba and Puerto Cancún do not compete — they complement each other. One is the legacy you pass on; the other is the lifestyle you live. The strongest portfolios hold both."</p>
      </blockquote>

      <div className="bg-card border border-border rounded-sm p-8 text-center my-12">
        <h3 className="text-xl mb-3 text-foreground">Want to know which fits your investment objective?</h3>
        <p className="text-muted-foreground font-body mb-6">Connect with a Rivana advisor today — bilingual, with direct access to The Reserve at Mayakoba, SLS Ocean Beach, Vellmari and all the properties mentioned here.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://wa.me/529988457224?text=I%20want%20real%20estate%20advisory" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-body tracking-wider uppercase hover:bg-primary/90 transition-colors">I Want Real Estate Advisory</a>
          <Link to={localePath('/listings')} className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-sm text-sm font-body tracking-wider uppercase text-foreground hover:border-primary/40 transition-colors">View all properties</Link>
        </div>
      </div>
    </div>
  );
};
