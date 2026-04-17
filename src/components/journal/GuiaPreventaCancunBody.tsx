import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const GuiaPreventaCancunBodyES = () => {
  const { localePath } = useLanguage();
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-8">
      <p>
        La preventa inmobiliaria en Cancún se ha convertido en el mecanismo preferido por los inversionistas sofisticados para acceder a precios
        por debajo del mercado, asegurar plusvalía desde la fase de planeación y diversificar su portafolio en el Caribe Mexicano. En 2026, con el
        impulso del Mundial FIFA y la expansión de infraestructura, las oportunidades en preventa son más atractivas que nunca.
      </p>

      <h2>¿Qué es la preventa inmobiliaria?</h2>
      <p>
        La preventa es la comercialización de unidades habitacionales antes de que el proyecto esté terminado — típicamente durante la fase de
        planeación o construcción temprana. El comprador adquiere a un precio inferior al de entrega, y el desarrollador obtiene capital para
        financiar la construcción. Es un modelo ganar-ganar cuando se elige un desarrollador serio y un proyecto bien ubicado.
      </p>

      <h2>Ventajas de comprar en preventa en Cancún</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Precio por debajo del mercado:</strong> Típicamente 15-30% menos que el precio de entrega.</li>
        <li><strong>Plusvalía acumulada:</strong> Tu inversión gana valor desde el primer día de obra.</li>
        <li><strong>Esquemas de pago flexibles:</strong> Enganches del 10-30% con mensualidades durante construcción.</li>
        <li><strong>Personalización:</strong> Muchos proyectos permiten elegir orientación, piso y acabados.</li>
        <li><strong>Primera selección:</strong> Acceso a las mejores unidades antes del público general.</li>
      </ul>

      <h2>Riesgos y cómo mitigarlos</h2>
      <p>
        No toda preventa es igual. Los riesgos principales incluyen retrasos en entrega, desarrolladores sin historial comprobable y proyectos
        sin permisos completos. Por eso es fundamental trabajar con un asesor que verifique la solidez del desarrollo.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Verifica que el desarrollador tenga proyectos entregados anteriormente.</li>
        <li>Confirma que los permisos de construcción y uso de suelo estén vigentes.</li>
        <li>Revisa el contrato de compra-venta con un abogado inmobiliario.</li>
        <li>Asegúrate de que exista un fideicomiso bancario para proteger tu inversión.</li>
      </ul>

      <h2>Las mejores preventas del portafolio Rivana en 2026</h2>
      <p>
        En Rivana verificamos cada desarrollo antes de incluirlo en nuestro portafolio. Estas son las preventas que ofrecen la mejor combinación
        de precio, ubicación y respaldo del desarrollador:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link to={localePath('/propiedad/mondrian-residences-grand-island-cancun')} className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
          <p className="font-display text-sm text-primary">The Residences at Grand Island Cancun</p>
          <p className="text-sm text-muted-foreground">Zona Hotelera · Desde $9M MXN</p>
        </Link>
        <Link to={localePath('/propiedad/sls-ocean-beach-puerto-cancun')} className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
          <p className="font-display text-sm text-primary">SLS Ocean Beach</p>
          <p className="text-sm text-muted-foreground">Puerto Cancún · Desde $7.2M MXN</p>
        </Link>
        <Link to={localePath('/propiedad/dhamar-costa-mujeres')} className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
          <p className="font-display text-sm text-primary">Dhamar</p>
          <p className="text-sm text-muted-foreground">Costa Mujeres · Desde $5.4M MXN</p>
        </Link>
        <Link to={localePath('/propiedad/the-reserve-at-mayakoba')} className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
          <p className="font-display text-sm text-primary">The Reserve at Mayakoba</p>
          <p className="text-sm text-muted-foreground">Mayakoba · Desde $16.2M MXN</p>
        </Link>
      </div>

      <h2>Esquemas de pago típicos</h2>
      <p>
        Los esquemas varían por proyecto, pero la estructura más común en Cancún es:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead><tr className="bg-muted"><th className="p-3 text-left">Fase</th><th className="p-3 text-left">Porcentaje</th><th className="p-3 text-left">Momento</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3">Enganche</td><td className="p-3">10-30%</td><td className="p-3">Firma de contrato</td></tr>
            <tr className="border-t border-border"><td className="p-3">Mensualidades</td><td className="p-3">20-40%</td><td className="p-3">Durante construcción</td></tr>
            <tr className="border-t border-border"><td className="p-3">Contra entrega</td><td className="p-3">30-50%</td><td className="p-3">Al recibir la unidad</td></tr>
          </tbody>
        </table>
      </div>

      <h2>¿Por qué 2026 es el mejor año para comprar en preventa?</h2>
      <p>
        El Mundial FIFA 2026 ha acelerado la inversión en infraestructura hotelera y residencial en todo el corredor Cancún–Riviera Maya.
        Los desarrolladores más serios están lanzando sus mejores proyectos ahora, con precios de preventa que no se repetirán una vez que
        la demanda post-mundial consolide la plusvalía.
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-8 text-center space-y-4 mt-12">
        <p className="font-display text-lg text-primary">¿Listo para invertir en preventa?</p>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto">
          Nuestro equipo te presenta las preventas verificadas con los mejores esquemas de pago y condiciones.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20sobre%20preventas%20en%20Canc%C3%BAn"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Quiero Asesoría de Preventa
          </a>
          <Link
            to={localePath('/presale')}
            className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
          >
            Ver todas las preventas
          </Link>
        </div>
      </div>
    </div>
  );
};

export const GuiaPreventaCancunBodyEN = () => {
  const { localePath } = useLanguage();
  return (
    <div className="text-muted-foreground font-body text-[17px] leading-[1.8] space-y-8">
      <p>
        Pre-sale real estate in Cancún has become the preferred mechanism for sophisticated investors to access below-market pricing, lock in
        appreciation from the planning phase, and diversify their portfolio in the Mexican Caribbean. In 2026, with the FIFA World Cup momentum
        and infrastructure expansion, pre-sale opportunities are more attractive than ever.
      </p>

      <h2>What is a pre-sale?</h2>
      <p>
        A pre-sale is the commercialization of residential units before the project is completed — typically during the planning or early construction
        phase. The buyer acquires at a price below the delivery value, and the developer obtains capital to finance construction. It's a win-win model
        when you choose a reputable developer and a well-located project.
      </p>

      <h2>Advantages of buying pre-sale in Cancún</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Below-market pricing:</strong> Typically 15-30% less than delivery price.</li>
        <li><strong>Built-in appreciation:</strong> Your investment gains value from day one of construction.</li>
        <li><strong>Flexible payment plans:</strong> Down payments of 10-30% with monthly installments during construction.</li>
        <li><strong>Customization:</strong> Many projects allow you to choose orientation, floor level, and finishes.</li>
        <li><strong>First pick:</strong> Access to the best units before the general public.</li>
      </ul>

      <h2>Risks and how to mitigate them</h2>
      <p>
        Not all pre-sales are created equal. The main risks include delivery delays, developers without a proven track record, and projects
        without complete permits. That's why it's essential to work with an advisor who verifies the strength of each development.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Verify the developer has previously delivered projects.</li>
        <li>Confirm that construction and land-use permits are current.</li>
        <li>Review the purchase agreement with a real estate attorney.</li>
        <li>Ensure a bank trust (fideicomiso) protects your investment.</li>
      </ul>

      <h2>Best pre-sales from the Rivana portfolio in 2026</h2>
      <p>
        At Rivana, we verify every development before including it in our portfolio. These are the pre-sales offering the best combination
        of price, location, and developer backing:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <Link to={localePath('/propiedad/mondrian-residences-grand-island-cancun')} className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
          <p className="font-display text-sm text-primary">The Residences at Grand Island Cancun</p>
          <p className="text-sm text-muted-foreground">Hotel Zone · From $514K USD</p>
        </Link>
        <Link to={localePath('/propiedad/sls-ocean-beach-puerto-cancun')} className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
          <p className="font-display text-sm text-primary">SLS Ocean Beach</p>
          <p className="text-sm text-muted-foreground">Puerto Cancún · From $411K USD</p>
        </Link>
        <Link to={localePath('/propiedad/dhamar-costa-mujeres')} className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
          <p className="font-display text-sm text-primary">Dhamar</p>
          <p className="text-sm text-muted-foreground">Costa Mujeres · From $309K USD</p>
        </Link>
        <Link to={localePath('/propiedad/the-reserve-at-mayakoba')} className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
          <p className="font-display text-sm text-primary">The Reserve at Mayakoba</p>
          <p className="text-sm text-muted-foreground">Mayakoba · From $926K USD</p>
        </Link>
      </div>

      <h2>Typical payment structures</h2>
      <p>
        Payment plans vary by project, but the most common structure in Cancún is:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead><tr className="bg-muted"><th className="p-3 text-left">Phase</th><th className="p-3 text-left">Percentage</th><th className="p-3 text-left">Timing</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3">Down payment</td><td className="p-3">10-30%</td><td className="p-3">Contract signing</td></tr>
            <tr className="border-t border-border"><td className="p-3">Monthly installments</td><td className="p-3">20-40%</td><td className="p-3">During construction</td></tr>
            <tr className="border-t border-border"><td className="p-3">Upon delivery</td><td className="p-3">30-50%</td><td className="p-3">When receiving the unit</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Why 2026 is the best year to buy pre-sale</h2>
      <p>
        The FIFA World Cup 2026 has accelerated investment in hotel and residential infrastructure across the entire Cancún–Riviera Maya corridor.
        The most serious developers are launching their best projects now, with pre-sale prices that won't be repeated once post-World Cup demand
        consolidates appreciation.
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-8 text-center space-y-4 mt-12">
        <p className="font-display text-lg text-primary">Ready to invest in a pre-sale?</p>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto">
          Our team presents verified pre-sales with the best payment plans and conditions for every development.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/529988457224?text=I%20want%20pre-sale%20advisory%20in%20Cancun"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            I Want Pre-Sale Advisory
          </a>
          <Link
            to={localePath('/presale')}
            className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
          >
            View all pre-sales
          </Link>
        </div>
      </div>
    </div>
  );
};
