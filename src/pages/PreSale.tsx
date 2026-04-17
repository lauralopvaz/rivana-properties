import { useState, useEffect, useCallback } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const mondrianHero = '/images/mondrian/mondrian-hero.jpg';
const mondrianFrontDesk = '/images/mondrian/mondrian-front-desk.jpg';
const mondrianCoffeeBar = '/images/mondrian/mondrian-coffee-bar.jpg';

/* ─── Countdown Hook ─── */
function useCountdown(target: Date) {
  const calc = useCallback(() => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  }, [target]);
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [calc]);
  return time;
}

const DEADLINE = new Date('2026-06-01T00:00:00-05:00');

const PreSale = () => {
  const { language: L, localePath } = useLanguage();
  const countdown = useCountdown(DEADLINE);

  /* FAQ state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  /* Brochure modal */
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [brForm, setBrForm] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const openModal = () => { setModalSuccess(false); setModalOpen(true); };
  const closeModal = () => setModalOpen(false);

  const submitBrochure = async () => {
    if (!brForm.name.trim() || !brForm.phone.trim() || !brForm.email.trim() || !brForm.email.includes('@')) {
      toast({ title: 'Error', description: L === 'es' ? 'Por favor completa todos los campos.' : 'Please fill in all fields.', variant: 'destructive' });
      return;
    }
    await supabase.from('leads').insert({
      first_name: brForm.name,
      email: brForm.email,
      phone: brForm.phone,
      property_name: 'The Residences at Grand Island Cancun',
      interest: 'brochure',
      source_page: '/presale',
    });
    const msg = encodeURIComponent(
      '📋 *Nueva solicitud de brochure — The Residences at Grand Island Cancun*\n\n' +
      '👤 Nombre: ' + brForm.name + '\n' +
      '📱 Teléfono: ' + brForm.phone + '\n' +
      '✉️ Correo: ' + brForm.email + '\n\n' +
      'Solicitó el brochure desde la landing de preventa rivanaproperties.com/presale'
    );
    window.open('https://wa.me/529988457224?text=' + msg, '_blank');
    setModalSuccess(true);
    setBrForm({ name: '', phone: '', email: '' });
  };

  const pad = (n: number) => String(n).padStart(2, '0');

  const faqs = L === 'es' ? [
    { q: '¿Cuánto cuesta un departamento en The Residences at Grand Island Cancun?', a: 'El precio de preventa parte desde $514,000 USD para unidades de 76.96 m² hasta 164.75 m² con loft. En pesos equivale a desde $9,050,000 MXN, con un ahorro de $2,950,000 MXN frente al precio de lista de $12,000,000 MXN. A partir del 1 de junio de 2026, el precio aumenta 33%.' },
    { q: '¿Puedo comprar siendo extranjero?', a: 'Sí. Los ciudadanos extranjeros pueden adquirir propiedades en zona turística en México a través de un fideicomiso bancario, regulado por la Ley de Inversión Extranjera. El proceso es estándar y ampliamente utilizado por inversionistas de EE.UU., Canadá y Europa. Nuestro equipo legal especializado te acompaña en cada paso.' },
    { q: '¿Qué incluye el precio? ¿La unidad viene amueblada?', a: 'Sí, la entrega es completamente llave en mano. La unidad incluye mobiliario, electrodomésticos, acabados premium diseñados por Filipao Nunes Arquitectos, y acceso a todas las amenidades del desarrollo maestro Grand Island: infinity pool, beach club, spa, gimnasio, restaurante rooftop, marina privada y campo de golf de 18 hoyos.' },
    { q: '¿Cuál es el rendimiento estimado de renta?', a: 'Las proyecciones para residencias de marca en Zona Hotelera de Cancún indican rendimientos de renta del 8–12% anual, con tasas de ocupación sostenidas por la gestión Marca Elite internacional y la demanda de plataformas de renta premium. Adicionalmente, el proyecto proyecta una plusvalía del 33% entre el precio de preventa y el valor a entrega. Los rendimientos son estimados y no garantizados.' },
    { q: 'Si reservo hoy, ¿queda fijo mi precio aunque suba antes del 1 de junio?', a: 'Sí. Una vez que formalizas tu reserva con el 30% de enganche, tu precio queda congelado contractualmente. Cualquier incremento posterior al 1 de junio no te afecta — tú ya compraste al precio de lanzamiento, con toda la plusvalía por delante.' },
    { q: '¿Puedo financiar el 50% final con un crédito bancario?', a: 'Sí. El saldo a la entrega puede cubrirse mediante crédito hipotecario en instituciones bancarias mexicanas (BBVA, Santander, HSBC, entre otras) o con financiamiento internacional. Nuestro equipo puede orientarte sobre las opciones más convenientes según tu perfil y país de residencia, sin costo adicional.' },
  ] : [
    { q: 'How much does a unit at The Residences at Grand Island Cancun cost?', a: 'Pre-sale pricing starts at $514,000 USD for units from 76.96 m² up to 164.75 m² lofts. In MXN that\'s from $9,050,000, saving $2,950,000 MXN vs. the list price of $12,000,000 MXN. After June 1, 2026, prices increase by 33%.' },
    { q: 'Can foreigners buy property?', a: 'Yes. Foreign citizens can purchase property in Mexico\'s tourist zones through a bank trust (fideicomiso), regulated by Mexico\'s Foreign Investment Law. The process is standard and widely used by investors from the US, Canada, and Europe. Our specialized legal team guides you every step.' },
    { q: 'What\'s included? Is the unit furnished?', a: 'Yes, delivery is fully turnkey. The unit includes furniture, appliances, premium finishes by Filipao Nunes Arquitectos, and access to all Grand Island amenities: infinity pool, beach club, spa, gym, rooftop restaurant, private marina, and 18-hole golf course.' },
    { q: 'What\'s the estimated rental yield?', a: 'Projections for branded residences in Cancún\'s Hotel Zone indicate 8–12% annual rental yields, sustained by Marca Elite internacional management and premium rental platform demand. Additionally, the project projects 33% appreciation between pre-sale and delivery. Returns are estimated and not guaranteed.' },
    { q: 'If I reserve today, is my price locked even if it goes up?', a: 'Yes. Once you formalize your reservation with the 30% down payment, your price is contractually locked. Any subsequent increase after June 1 won\'t affect you.' },
    { q: 'Can I finance the final 50% with a bank loan?', a: 'Yes. The balance at delivery can be covered through a mortgage from Mexican banks (BBVA, Santander, HSBC) or international financing. Our team can guide you on the best options based on your profile and country of residence, at no additional cost.' },
  ];

  const paymentPlan = L === 'es' ? [
    { step: 'Paso 01 · Hoy', pct: '30%', title: 'Enganche al reservar', desc: 'Asegura tu unidad al precio de preventa actual. Una vez efectuado el enganche, el precio queda fijo — sin importar los incrementos que ocurran antes del 1 de junio.' },
    { step: 'Paso 02 · Durante construcción', pct: '20%', title: 'Diferido en 12 meses', desc: 'Mensualidades accesibles durante el período de construcción. Tu capital trabaja con el menor desembolso mensual posible mientras el activo acumula plusvalía mes a mes.' },
    { step: 'Paso 03 · Q2 2027', pct: '50%', title: 'A la entrega', desc: 'El saldo restante se liquida en la escrituración en Q2 2027. Puede cubrirse con financiamiento bancario, fondos propios o una combinación de ambos según tu estrategia patrimonial.' },
  ] : [
    { step: 'Step 01 · Today', pct: '30%', title: 'Down payment', desc: 'Secure your unit at the current pre-sale price. Once the down payment is made, your price is locked — regardless of any increases before June 1.' },
    { step: 'Step 02 · During construction', pct: '20%', title: 'Deferred over 12 months', desc: 'Affordable monthly payments during construction. Your capital works with the lowest possible monthly outlay while the asset accumulates value month by month.' },
    { step: 'Step 03 · Q2 2027', pct: '50%', title: 'At delivery', desc: 'The remaining balance is settled at closing in Q2 2027. Can be covered with bank financing, own funds, or a combination based on your wealth strategy.' },
  ];

  const stats = L === 'es'
    ? [{ n: '$514K', l: 'Precio desde USD' }, { n: '+33%', l: 'Plusvalía proyectada a entrega' }, { n: 'Q2 2027', l: 'Entrega llave en mano' }, { n: '8–12%', l: 'Rendimiento anual estimado' }]
    : [{ n: '$514K', l: 'Price from USD' }, { n: '+33%', l: 'Projected appreciation' }, { n: 'Q2 2027', l: 'Turnkey delivery' }, { n: '8–12%', l: 'Estimated annual yield' }];

  const diffs = L === 'es' ? [
    { n: '01', t: 'Operada por Marca Elite internacional', b: 'Uno de los grupos hoteleros más grandes del mundo. La marca atrae al viajero de alto poder adquisitivo, lo que se traduce en ocupación premium y tarifas superiores desde el primer día de renta vacacional.' },
    { n: '02', t: 'Vistas dobles únicas en la Zona Hotelera', b: 'El único desarrollo en el km 16.5 del Boulevard Kukulcán con vistas simultáneas al Mar Caribe y la Laguna Nichupté. Una perspectiva que no se repite en ningún otro proyecto de la zona.' },
    { n: '03', t: 'Llave en mano — genera desde el día uno', b: 'Cada unidad se entrega totalmente amueblada, equipada y lista para operar bajo gestión Marca Elite internacional. Sin curva de aprendizaje. Sin inversión adicional en mobiliario. Tus rendimientos comienzan desde la entrega.' },
  ] : [
    { n: '01', t: 'Operated by Marca Elite internacional', b: 'One of the world\'s largest hotel groups. The brand attracts high-net-worth travelers, translating to premium occupancy and superior rates from day one of vacation rental.' },
    { n: '02', t: 'Unique dual views in the Hotel Zone', b: 'The only development at km 16.5 on Boulevard Kukulcán with simultaneous Caribbean Sea and Nichupté Lagoon views. A perspective not replicated in any other project in the area.' },
    { n: '03', t: 'Turnkey — generating from day one', b: 'Every unit is delivered fully furnished, equipped, and ready to operate under Marca Elite internacional management. No learning curve. No additional furniture investment. Your returns begin at delivery.' },
  ];

  const trustItems = L === 'es'
    ? ['Trabajamos para ti — respuesta en menos de 2 horas', 'Tu asesor dedicado desde el primer contacto', 'Tu información es confidencial', 'Equipo bilingüe · ES · EN']
    : ['We work for you — response within 2 hours', 'Your dedicated advisor from first contact', 'Your information is confidential', 'Bilingual team · ES · EN'];

  return (
    <>
      <SEOHead
        title={L === 'es' ? 'Preventas Exclusivas Cancún & Riviera Maya | Rivana' : 'Exclusive Pre-Sales Cancún Riviera Maya | Rivana'}
        description={L === 'es' ? 'Departamentos en preventa desde $514K USD en la Zona Hotelera de Cancún. Precio de lanzamiento disponible hasta el 1 de junio de 2026. Entrega llave en mano Q2 2027. Asesoría sin costo.' : 'Pre-sale condos from $514K USD in Cancún\'s Hotel Zone. Launch pricing available until June 1, 2026. Turnkey delivery Q2 2027. Free advisory.'}
        ogImage="/images/mondrian/mondrian-hero.jpg"
        path={L === 'en' ? '/en/presale' : '/presale'}
        schema={{
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          name: "The Residences at Grand Island Cancun — Preventa",
          description: L === 'es' ? 'Residencia de marca en la Zona Hotelera de Cancún, diseñada por Filipao Nunes Arquitectos y operada por Marca Elite internacional. Entrega llave en mano Q2 2027. Preventa desde $514,000 USD.' : 'Branded residence in Cancún\'s Hotel Zone, designed by Filipao Nunes Arquitectos and operated by Marca Elite internacional. Turnkey delivery Q2 2027. Pre-sale from $514,000 USD.',
          url: `https://rivanaproperties.com${L === 'en' ? '/en/presale' : '/presale'}`,
          image: "https://rivanaproperties.com/images/mondrian/mondrian-hero.jpg",
          offers: {
            "@type": "Offer",
            price: "514000",
            priceCurrency: "USD",
            priceValidUntil: "2026-06-01",
            availability: "https://schema.org/InStock",
          },
        }}
      />

      <style>{`
        .ps-urgency-bar{
          background:#1C1C1C;color:#CFAE60;
          text-align:center;padding:11px 16px;
          font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:500;
          letter-spacing:.16em;text-transform:uppercase;line-height:1.6;
        }
        .ps-urgency-bar span{color:#F5F5F5}

        .ps-hero{position:relative;height:94vh;min-height:580px;overflow:hidden;display:flex;align-items:flex-end}
        .ps-hero-bg{
          position:absolute;inset:0;
          background:
            linear-gradient(160deg,rgba(28,28,28,.08) 0%,rgba(28,28,28,.74) 100%),
            url('${mondrianHero}') center/cover no-repeat;
        }
        .ps-hero-content{position:relative;z-index:2;padding:0 64px 80px;max-width:880px}
        .ps-hero-eyebrow{display:inline-flex;align-items:center;gap:12px;font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#CFAE60;margin-bottom:22px}
        .ps-hero-eyebrow::before{content:'';display:block;width:28px;height:1px;background:#CFAE60}
        .ps-hero h1{font-family:'Cormorant Garamond',serif;font-size:clamp(2.8rem,6.5vw,5.4rem);font-weight:300;line-height:1.04;color:#F5F5F5;margin:0 0 18px}
        .ps-hero h1 em{font-style:italic;color:#CFAE60}
        .ps-hero-sub{font-family:'Jost',sans-serif;font-size:1.08rem;font-weight:300;color:rgba(245,245,245,.82);letter-spacing:.03em;line-height:1.8;margin-bottom:40px;max-width:540px}
        .ps-hero-actions{display:flex;gap:16px;flex-wrap:wrap;align-items:center}

        .ps-btn-gold{background:#CFAE60;color:#1C1C1C;font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;padding:18px 36px;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;border:none;transition:background .2s,transform .15s;line-height:1;border-radius:0}
        .ps-btn-gold:hover{background:#b89845;transform:translateY(-1px)}
        .ps-btn-ghost-light{border:1px solid rgba(245,245,245,.55);color:#F5F5F5;font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:500;letter-spacing:.14em;text-transform:uppercase;padding:17px 32px;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;background:transparent;transition:border-color .2s,color .2s;line-height:1;border-radius:0}
        .ps-btn-ghost-light:hover{border-color:#CFAE60;color:#CFAE60}
        .ps-btn-ghost-dark{border:1px solid rgba(207,174,96,.35);color:rgba(245,245,245,.6);font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:400;letter-spacing:.14em;text-transform:uppercase;padding:17px 24px;text-decoration:none;display:flex;align-items:center;justify-content:center;width:100%;cursor:pointer;background:transparent;transition:border-color .2s,color .2s;line-height:1;border-radius:0}
        .ps-btn-ghost-dark:hover{border-color:#CFAE60;color:#CFAE60}
        .ps-btn-full{width:100%;padding:20px 24px;margin-bottom:12px}

        .ps-stats{background:#1C1C1C;display:grid;grid-template-columns:repeat(4,1fr)}
        .ps-stat{padding:36px 20px;border-right:1px solid rgba(207,174,96,.1);text-align:center}
        .ps-stat:last-child{border-right:none}
        .ps-stat-n{font-family:'Cormorant Garamond',serif;font-size:2.64rem;font-weight:400;color:#CFAE60;line-height:1;margin-bottom:8px}
        .ps-stat-l{font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:400;letter-spacing:.12em;text-transform:uppercase;color:rgba(245,245,245,.42);line-height:1.4}

        .ps-countdown{background:#F0EAE0;border-top:2px solid #CFAE60;padding:52px 64px;display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap}
        .ps-cd-text{flex:1;min-width:200px}
        .ps-cd-text p{font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:#CFAE60;margin:0 0 10px}
        .ps-cd-text h3{font-family:'Cormorant Garamond',serif;font-size:2.04rem;font-weight:400;color:#1C1C1C;line-height:1.3;margin:0}
        .ps-cd-units{display:flex;gap:4px;align-items:center;flex-shrink:0}
        .ps-cd-unit{text-align:center;background:#1C1C1C;padding:18px 24px;min-width:78px}
        .ps-cd-unit .ps-cd-n{font-family:'Cormorant Garamond',serif;font-size:2.9rem;font-weight:400;color:#CFAE60;line-height:1;display:block}
        .ps-cd-unit .ps-cd-l{font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:500;letter-spacing:.15em;text-transform:uppercase;color:rgba(245,245,245,.36);margin-top:5px;display:block}
        .ps-cd-sep{font-family:'Cormorant Garamond',serif;font-size:2rem;color:#CFAE60;opacity:.32;line-height:1;margin-top:-8px}

        .ps-gallery{display:grid;grid-template-columns:2fr 1fr 1fr;height:440px;gap:3px;background:#1C1C1C}
        .ps-gal-img{overflow:hidden;position:relative}
        .ps-gal-img img{width:100%;height:100%;object-fit:cover;transition:transform .65s ease}
        .ps-gal-img:hover img{transform:scale(1.05)}

        .ps-gl{height:1px;background:linear-gradient(to right,transparent,#CFAE60,transparent);opacity:.32}

        .ps-sec{padding:100px 64px}
        .ps-sec-eye{font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:#CFAE60;margin-bottom:18px;display:flex;align-items:center;gap:14px}
        .ps-sec-eye::after{content:'';display:block;width:40px;height:1px;background:#CFAE60;flex-shrink:0}
        .ps-sec h2{font-family:'Cormorant Garamond',serif;font-size:clamp(2.2rem,4.5vw,3.5rem);font-weight:300;line-height:1.1;color:#1C1C1C;margin:0 0 36px;max-width:680px}
        .ps-sec h2 em{font-style:italic;color:#CFAE60}
        .ps-body-t{font-family:'Jost',sans-serif;font-size:1.08rem;font-weight:300;line-height:1.88;color:#4B4B4B;max-width:720px;margin-bottom:28px}

        .ps-dif-sec{background:#1C1C1C;padding:100px 64px}
        .ps-dif-sec .ps-sec-eye{color:#CFAE60}
        .ps-dif-sec h2{color:#F5F5F5}
        .ps-dif-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(207,174,96,.1);margin-top:60px}
        .ps-dif-card{background:#212121;padding:48px 38px;transition:background .25s}
        .ps-dif-card:hover{background:#292929}
        .ps-dif-n{font-family:'Cormorant Garamond',serif;font-size:3.6rem;font-weight:300;color:rgba(207,174,96,.15);line-height:1;margin-bottom:22px}
        .ps-dif-t{font-family:'Cormorant Garamond',serif;font-size:1.55rem;font-weight:500;color:#FFFFFF;margin-bottom:16px;line-height:1.3}
        .ps-dif-b{font-family:'Jost',sans-serif;font-size:1.08rem;font-weight:300;line-height:1.78;color:rgba(255,255,255,.85)}

        .ps-plan-sec{background:#F0EAE0;padding:100px 64px}
        .ps-plan-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:60px}
        .ps-plan-card{background:#F5F5F5;border:1px solid #D9CAB3;padding:44px 34px;transition:border-color .2s,transform .2s}
        .ps-plan-card:hover{border-color:#CFAE60;transform:translateY(-3px)}
        .ps-plan-s{font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:#CFAE60;margin-bottom:18px}
        .ps-plan-p{font-family:'Cormorant Garamond',serif;font-size:4.2rem;font-weight:300;color:#1C1C1C;line-height:1;margin-bottom:10px}
        .ps-plan-t{font-family:'Jost',sans-serif;font-size:0.96rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#4B4B4B;margin-bottom:14px}
        .ps-plan-d{font-family:'Jost',sans-serif;font-size:0.96rem;font-weight:300;line-height:1.82;color:#4B4B4B}

        .ps-faq-sec{padding:100px 64px;background:#F5F5F5}
        .ps-faq-list{margin-top:56px;border:1px solid #D9CAB3}
        .ps-faq-item{border-bottom:1px solid #D9CAB3}
        .ps-faq-item:last-child{border-bottom:none}
        .ps-faq-hd{padding:28px 36px;display:flex;justify-content:space-between;align-items:center;gap:20px;cursor:pointer;transition:background .2s;user-select:none}
        .ps-faq-hd:hover{background:#F0EAE0}
        .ps-faq-q{font-family:'Cormorant Garamond',serif;font-size:1.32rem;font-weight:500;color:#1C1C1C;line-height:1.3;flex:1}
        .ps-faq-ic{font-family:'Jost',sans-serif;font-size:1.6rem;font-weight:300;color:#CFAE60;flex-shrink:0;transition:transform .25s;line-height:1}
        .ps-faq-item.ps-open .ps-faq-ic{transform:rotate(45deg)}
        .ps-faq-bd{display:none;padding:0 36px 28px;font-family:'Jost',sans-serif;font-size:1.08rem;font-weight:300;line-height:1.88;color:#4B4B4B;max-width:840px}
        .ps-faq-item.ps-open .ps-faq-bd{display:block}

        .ps-cta-fin{background:#1C1C1C;padding:100px 64px;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
        .ps-cta-fin h2{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,3.8vw,3.1rem);font-weight:300;color:#F5F5F5;line-height:1.1;margin:0 0 22px}
        .ps-cta-fin h2 em{font-style:italic;color:#CFAE60}
        .ps-cta-lead{font-family:'Jost',sans-serif;font-size:1.08rem;font-weight:300;line-height:1.85;color:rgba(245,245,245,.5);margin-bottom:36px}
        .ps-trust-list{display:flex;flex-direction:column;gap:12px;margin-top:28px}
        .ps-trust-i{display:flex;align-items:center;gap:12px;font-family:'Jost',sans-serif;font-size:0.96rem;font-weight:300;color:rgba(245,245,245,.38);letter-spacing:.04em}
        .ps-td{width:5px;height:5px;background:#CFAE60;flex-shrink:0}
        .ps-cta-box{background:rgba(245,245,245,.04);border:1px solid rgba(207,174,96,.22);padding:50px 42px}
        .ps-cta-box h3{font-family:'Cormorant Garamond',serif;font-size:1.68rem;font-weight:400;color:#F5F5F5;margin:0 0 8px}
        .ps-cta-sub2{font-family:'Jost',sans-serif;font-size:0.96rem;font-weight:300;color:rgba(245,245,245,.36);margin-bottom:28px;line-height:1.6}
        .ps-price-blk{margin-bottom:28px;padding:20px 0;border-top:1px solid rgba(207,174,96,.18);border-bottom:1px solid rgba(207,174,96,.18)}
        .ps-price-lbl{font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:rgba(245,245,245,.28);margin-bottom:6px}
        .ps-price-val{font-family:'Cormorant Garamond',serif;font-size:2.9rem;font-weight:400;color:#CFAE60;line-height:1}
        .ps-price-note{font-family:'Jost',sans-serif;font-size:0.96rem;color:rgba(245,245,245,.26);margin-top:6px}

        .ps-link-ficha{padding:40px 64px;background:#F0EAE0;border-top:1px solid #D9CAB3;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}
        .ps-link-ficha p{font-family:'Jost',sans-serif;font-size:1.08rem;font-weight:300;color:#4B4B4B;margin:0}
        .ps-link-ficha a{font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#1C1C1C;text-decoration:none;display:flex;align-items:center;gap:8px;border-bottom:1px solid #CFAE60;padding-bottom:3px;white-space:nowrap;transition:color .2s}
        .ps-link-ficha a:hover{color:#CFAE60}

        /* MODAL */
        .ps-modal-ov{position:fixed;inset:0;background:rgba(28,28,28,.84);z-index:500;display:flex;align-items:center;justify-content:center;padding:24px;backdrop-filter:blur(8px)}
        .ps-modal-box{background:#F5F5F5;max-width:490px;width:100%;padding:52px 44px;position:relative;animation:ps-upIn .3s ease}
        @keyframes ps-upIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .ps-modal-x{position:absolute;top:16px;right:20px;font-family:'Jost',sans-serif;font-size:1.5rem;font-weight:300;color:#4B4B4B;cursor:pointer;background:none;border:none;padding:4px 8px;line-height:1}
        .ps-modal-x:hover{color:#1C1C1C}
        .ps-modal-eye{font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:#CFAE60;margin-bottom:12px}
        .ps-modal-box h3{font-family:'Cormorant Garamond',serif;font-size:2.04rem;font-weight:400;color:#1C1C1C;line-height:1.2;margin:0 0 8px}
        .ps-modal-sub{font-family:'Jost',sans-serif;font-size:0.96rem;font-weight:300;color:#4B4B4B;line-height:1.72;margin-bottom:28px}
        .ps-form-g{margin-bottom:16px}
        .ps-form-l{display:block;font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#4B4B4B;margin-bottom:8px}
        .ps-form-i{width:100%;padding:15px 16px;font-family:'Jost',sans-serif;font-size:0.96rem;font-weight:300;color:#1C1C1C;background:#F5F5F5;border:1px solid #D9CAB3;outline:none;transition:border-color .2s;border-radius:0}
        .ps-form-i:focus{border-color:#CFAE60}
        .ps-form-i::placeholder{color:rgba(75,75,75,.38)}
        .ps-form-btn{width:100%;background:#CFAE60;color:#1C1C1C;font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;padding:19px 24px;border:none;cursor:pointer;margin-top:8px;transition:background .2s;border-radius:0}
        .ps-form-btn:hover{background:#b89845}
        .ps-form-priv{font-family:'Jost',sans-serif;font-size:0.75rem;color:rgba(75,75,75,.45);text-align:center;margin-top:14px;line-height:1.5}
        .ps-success-icon{font-size:2.8rem;margin-bottom:16px;color:#CFAE60}

        @media(max-width:900px){
          .ps-urgency-bar{font-size:0.75rem;padding:10px 14px;letter-spacing:.08em}
          .ps-hero{height:88vh;min-height:540px}
          .ps-hero-content{padding:0 22px 52px}
          .ps-hero h1{font-size:clamp(2.2rem,10vw,3.2rem)}
          .ps-hero-sub{font-size:1rem}
          .ps-hero-actions{flex-direction:column;align-items:stretch;gap:12px}
          .ps-hero-actions .ps-btn-gold,.ps-hero-actions .ps-btn-ghost-light{text-align:center;padding:18px 24px}
          .ps-stats{grid-template-columns:repeat(2,1fr)}
          .ps-stat{padding:28px 16px}
          .ps-stat:nth-child(2){border-right:none}
          .ps-stat:nth-child(3){border-top:1px solid rgba(207,174,96,.1);border-right:1px solid rgba(207,174,96,.1)}
          .ps-stat:nth-child(4){border-top:1px solid rgba(207,174,96,.1);border-right:none}
          .ps-stat-n{font-size:2.1rem}
          .ps-countdown{padding:36px 22px;flex-direction:column;align-items:flex-start;gap:28px}
          .ps-cd-text h3{font-size:1.6rem}
          .ps-cd-units{width:100%;justify-content:space-between}
          .ps-cd-unit{padding:14px 0;flex:1;min-width:unset}
          .ps-cd-unit .ps-cd-n{font-size:2.3rem}
          .ps-cd-sep{font-size:1.4rem}
          .ps-gallery{grid-template-columns:1fr;height:auto}
          .ps-gal-img{height:260px}
          .ps-gal-img:nth-child(2),.ps-gal-img:nth-child(3){height:200px}
          .ps-sec{padding:64px 22px}
          .ps-sec h2{font-size:clamp(1.9rem,8vw,2.7rem)}
          .ps-body-t{font-size:1rem}
          .ps-dif-sec{padding:64px 22px}
          .ps-dif-sec h2{font-size:clamp(1.9rem,8vw,2.7rem)}
          .ps-dif-grid{grid-template-columns:1fr}
          .ps-dif-card{padding:36px 24px}
          .ps-plan-sec{padding:64px 22px}
          .ps-plan-grid{grid-template-columns:1fr;gap:16px;margin-top:40px}
          .ps-plan-card{padding:36px 26px}
          .ps-plan-p{font-size:3.4rem}
          .ps-faq-sec{padding:64px 22px}
          .ps-faq-hd{padding:22px 20px}
          .ps-faq-q{font-size:1.12rem}
          .ps-faq-bd{padding:0 20px 24px;font-size:0.98rem}
          .ps-modal-box{padding:38px 24px}
          .ps-modal-box h3{font-size:1.65rem}
          .ps-modal-sub{font-size:0.9rem}
          .ps-cta-fin{grid-template-columns:1fr;gap:48px;padding:64px 22px}
          .ps-cta-fin h2{font-size:clamp(1.9rem,8vw,2.7rem)}
          .ps-cta-lead{font-size:1rem}
          .ps-trust-i{font-size:0.9rem}
          .ps-cta-box{padding:36px 24px}
          .ps-cta-box h3{font-size:1.45rem}
          .ps-price-val{font-size:2.3rem}
          .ps-link-ficha{padding:36px 22px;flex-direction:column;align-items:flex-start}
          .ps-link-ficha p{font-size:1rem}
        }
        @media(max-width:420px){
          .ps-hero h1{font-size:2rem}
          .ps-stat-n{font-size:1.75rem}
          .ps-cd-unit .ps-cd-n{font-size:1.9rem}
          .ps-cd-sep{display:none}
        }
      `}</style>

      {/* URGENCY BAR */}
      <div className="ps-urgency-bar">
        {L === 'es' ? <>Preventa activa ·&nbsp;<span>El precio aumenta 33% el 1 de junio de 2026</span>&nbsp;· Solo quedan <span>{countdown.days}</span> días</> : <>Active pre-sale ·&nbsp;<span>Price increases 33% on June 1, 2026</span>&nbsp;· Only <span>{countdown.days}</span> days left</>}
      </div>

      {/* HERO */}
      <section className="ps-hero">
        <div className="ps-hero-bg" />
        <div className="ps-hero-content">
          <div className="ps-hero-eyebrow">
            {L === 'es' ? 'Preventa Exclusiva · Zona Hotelera, Cancún' : 'Exclusive Pre-Sale · Hotel Zone, Cancún'}
          </div>
          <h1>The Residences at Grand Island Cancun</h1>
          <p className="ps-hero-sub">
            {L === 'es'
              ? 'Residencia de marca diseñada por Filipao Nunes y operada por Marca Elite internacional. Entrega llave en mano Q2 2027. Precio de preventa desde $514,000 USD.'
              : 'Branded residence designed by Filipao Nunes and operated by Marca Elite internacional. Turnkey delivery Q2 2027. Pre-sale pricing from $514,000 USD.'}
          </p>
          <div className="ps-hero-actions">
            <a href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20sobre%20Mondrian%20Residences" className="ps-btn-gold">
              {L === 'es' ? 'Reservar este precio →' : 'Lock this price →'}
            </a>
            <button className="ps-btn-ghost-light" onClick={openModal}>
              {L === 'es' ? 'Descargar brochure' : 'Download brochure'}
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="ps-stats">
        {stats.map((s) => (
          <div key={s.l} className="ps-stat">
            <div className="ps-stat-n">{s.n}</div>
            <div className="ps-stat-l">{s.l}</div>
          </div>
        ))}
      </div>

      {/* COUNTDOWN */}
      <div className="ps-countdown">
        <div className="ps-cd-text">
          <p>{L === 'es' ? 'Precio de preventa cierra' : 'Pre-sale pricing closes'}</p>
          <h3>{L === 'es' ? <>El 1 de junio de 2026<br />el precio aumenta 33%</> : <>On June 1, 2026<br />prices increase by 33%</>}</h3>
        </div>
        <div className="ps-cd-units">
          <div className="ps-cd-unit"><span className="ps-cd-n">{pad(countdown.days)}</span><span className="ps-cd-l">{L === 'es' ? 'Días' : 'Days'}</span></div>
          <span className="ps-cd-sep">:</span>
          <div className="ps-cd-unit"><span className="ps-cd-n">{pad(countdown.hours)}</span><span className="ps-cd-l">Hrs</span></div>
          <span className="ps-cd-sep">:</span>
          <div className="ps-cd-unit"><span className="ps-cd-n">{pad(countdown.minutes)}</span><span className="ps-cd-l">Min</span></div>
          <span className="ps-cd-sep">:</span>
          <div className="ps-cd-unit"><span className="ps-cd-n">{pad(countdown.seconds)}</span><span className="ps-cd-l">{L === 'es' ? 'Seg' : 'Sec'}</span></div>
        </div>
        <a href="https://wa.me/529988457224?text=Quiero%20reservar%20mi%20unidad%20en%20Mondrian%20Residences" className="ps-btn-gold">
          {L === 'es' ? 'Reservar ahora →' : 'Reserve now →'}
        </a>
      </div>

      {/* GALLERY */}
      <div className="ps-gallery">
        <div className="ps-gal-img">
          <img src={mondrianHero} alt="The Residences at Grand Island Cancun — Vista exterior Zona Hotelera Cancún" />
        </div>
        <div className="ps-gal-img">
          <img src={mondrianFrontDesk} alt="The Residences at Grand Island Cancun — Lobby diseño Filipao Nunes Arquitectos" />
        </div>
        <div className="ps-gal-img">
          <img src={mondrianCoffeeBar} alt="The Residences at Grand Island Cancun — Coffee bar amenidades premium Marca Elite internacional" />
        </div>
      </div>

      <div className="ps-gl" />

      {/* POR QUÉ AHORA */}
      <section className="ps-sec">
        <div className="ps-sec-eye">{L === 'es' ? 'La oportunidad' : 'The opportunity'}</div>
        <h2>{L === 'es' ? <>¿Por qué invertir<br />en <em>preventa ahora?</em></> : <>Why invest<br />in <em>pre-sale now?</em></>}</h2>
        <p className="ps-body-t">
          {L === 'es'
            ? <>El precio de preventa de <strong>$514,000 USD</strong> representa el precio de lanzamiento acordado con el desarrollador para los primeros inversionistas de The Residences at Grand Island Cancun. A partir del 1 de junio de 2026, el precio aumenta 33%, llevando el valor de entrada a aproximadamente <strong>$683,000 USD</strong>.</>
            : <>The pre-sale price of <strong>$514,000 USD</strong> is the launch price agreed with the developer for early investors in The Residences at Grand Island Cancun. After June 1, 2026, the price increases by 33%, bringing the entry value to approximately <strong>$683,000 USD</strong>.</>}
        </p>
        <p className="ps-body-t">
          {L === 'es'
            ? 'Quien entra hoy adquiere plusvalía documentada antes de recibir las llaves — un rendimiento sobre capital que ocurre durante la construcción, sin depender de la renta ni del mercado secundario. Con un plan de pagos 30/20/50 que distribuye la inversión en tres momentos clave, tu capital trabaja de forma inteligente durante los 14 meses que restan para la entrega.'
            : 'Those who enter today acquire documented appreciation before receiving the keys — a return on capital that occurs during construction, without depending on rent or the secondary market. With a 30/20/50 payment plan that distributes the investment across three key moments, your capital works intelligently during the 14 months remaining until delivery.'}
        </p>
        <p className="ps-body-t">
          {L === 'es'
            ? 'A esto se suma el efecto multiplicador del Mundial FIFA 2026: Cancún y la Riviera Maya proyectan cifras de turismo sin precedente, con demanda de renta vacacional premium que beneficia directamente a las residencias de marca en la Zona Hotelera.'
            : 'Add to this the multiplier effect of the 2026 FIFA World Cup: Cancún and the Riviera Maya project unprecedented tourism figures, with premium vacation rental demand that directly benefits branded residences in the Hotel Zone.'}
        </p>
        <a href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20sobre%20Mondrian%20Residences" className="ps-btn-gold" style={{ marginTop: 8 }}>
          {L === 'es' ? 'Trabajamos para ti — Agenda tu asesoría →' : 'We work for you — Schedule your advisory →'}
        </a>
      </section>

      <div className="ps-gl" />

      {/* DIFERENCIADORES */}
      <section className="ps-dif-sec">
        <div className="ps-sec-eye">{L === 'es' ? 'Por qué invertir aquí' : 'Why invest here'}</div>
        <h2>{L === 'es' ? <>Lo que hace <em>única</em><br />a esta propiedad</> : <>What makes this<br />property <em>unique</em></>}</h2>
        <div className="ps-dif-grid">
          {diffs.map((d) => (
            <div key={d.n} className="ps-dif-card">
              <div className="ps-dif-n">{d.n}</div>
              <div className="ps-dif-t">{d.t}</div>
              <div className="ps-dif-b">{d.b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PLAN DE PAGOS */}
      <section className="ps-plan-sec">
        <div className="ps-sec-eye">{L === 'es' ? 'Condiciones de preventa' : 'Pre-sale conditions'}</div>
        <h2>{L === 'es' ? <>Plan de pago<br /><em>The Residences at Grand Island Cancun</em></> : <>Payment plan<br /><em>The Residences at Grand Island Cancun</em></>}</h2>
        <p className="ps-body-t" style={{ marginTop: 0 }}>
          {L === 'es'
            ? 'El plan de pagos está diseñado para que tu capital trabaje con la mayor eficiencia posible durante la construcción — maximizando el retorno sobre capital invertido antes de la entrega en Q2 2027.'
            : 'The payment plan is designed so your capital works as efficiently as possible during construction — maximizing return on invested capital before delivery in Q2 2027.'}
        </p>
        <div className="ps-plan-grid">
          {paymentPlan.map((p) => (
            <div key={p.pct} className="ps-plan-card">
              <div className="ps-plan-s">{p.step}</div>
              <div className="ps-plan-p">{p.pct}</div>
              <div className="ps-plan-t">{p.title}</div>
              <div className="ps-plan-d">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="ps-gl" />

      {/* FAQ */}
      <section className="ps-faq-sec">
        <div className="ps-sec-eye">{L === 'es' ? 'Preguntas frecuentes' : 'FAQ'}</div>
        <h2>{L === 'es' ? <>Todo lo que necesitas<br /><em>saber antes de invertir</em></> : <>Everything you need to<br /><em>know before investing</em></>}</h2>
        <div className="ps-faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`ps-faq-item${openFaq === i ? ' ps-open' : ''}`}>
              <div className="ps-faq-hd" onClick={() => toggleFaq(i)}>
                <div className="ps-faq-q">{faq.q}</div>
                <span className="ps-faq-ic">+</span>
              </div>
              <div className="ps-faq-bd">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="ps-cta-fin">
        <div>
          <h2>{L === 'es' ? <>El precio de preventa<br />cierra el <em>1 de junio.</em></> : <>Pre-sale pricing<br />closes <em>June 1.</em></>}</h2>
          <p className="ps-cta-lead">
            {L === 'es'
              ? 'Nuestro equipo trabaja para ti — sin presión, sin compromisos. En menos de 30 minutos resolvemos todas tus dudas y te enviamos planos, precios por unidad y proyecciones financieras personalizadas.'
              : 'Our team works for you — no pressure, no commitment. In less than 30 minutes we answer all your questions and send you floor plans, unit pricing, and personalized financial projections.'}
          </p>
          <a href="https://wa.me/529988457224?text=Quiero%20asesor%C3%ADa%20premium%20sobre%20Mondrian%20Residences" className="ps-btn-gold">
            {L === 'es' ? 'Agenda tu Asesoría Premium →' : 'Schedule Your Premium Advisory →'}
          </a>
          <div className="ps-trust-list">
            {trustItems.map((t) => (
              <div key={t} className="ps-trust-i"><span className="ps-td" />{t}</div>
            ))}
          </div>
        </div>
        <div className="ps-cta-box">
          <h3>{L === 'es' ? 'Reserva tu unidad hoy' : 'Reserve your unit today'}</h3>
          <p className="ps-cta-sub2">{L === 'es' ? 'Precio de preventa disponible hasta el 1 de junio de 2026' : 'Pre-sale pricing available until June 1, 2026'}</p>
          <div className="ps-price-blk">
            <div className="ps-price-lbl">{L === 'es' ? 'Precio de preventa desde' : 'Pre-sale price from'}</div>
            <div className="ps-price-val">$514,000 USD</div>
            <div className="ps-price-note">{L === 'es' ? '+33% a partir del 1 de junio de 2026' : '+33% after June 1, 2026'}</div>
          </div>
          <a href="https://wa.me/529988457224?text=Quiero%20reservar%20mi%20unidad%20en%20Mondrian%20Residences" className="ps-btn-gold ps-btn-full">
            {L === 'es' ? 'Reservar por WhatsApp →' : 'Reserve via WhatsApp →'}
          </a>
          <button onClick={openModal} className="ps-btn-ghost-dark">
            {L === 'es' ? 'Descargar Brochure con Planos' : 'Download Brochure with Plans'}
          </button>
        </div>
      </section>

      {/* LINK A FICHA */}
      <div className="ps-link-ficha">
        <p>{L === 'es' ? '¿Quieres ver planos detallados, galería completa y comparativa de unidades?' : 'Want to see detailed plans, full gallery and unit comparison?'}</p>
        <a href={localePath('/propiedad/mondrian-residences-grand-island-cancun')}>
          {L === 'es' ? 'Ver ficha completa de The Residences at Grand Island Cancun →' : 'View full The Residences at Grand Island Cancun listing →'}
        </a>
      </div>

      {/* BROCHURE MODAL */}
      {modalOpen && (
        <div className="ps-modal-ov" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="ps-modal-box">
            <button className="ps-modal-x" onClick={closeModal}>×</button>

            {!modalSuccess ? (
              <>
                <div className="ps-modal-eye">{L === 'es' ? 'Brochure Exclusivo' : 'Exclusive Brochure'}</div>
                <h3>The Residences at Grand Island Cancun<br />— {L === 'es' ? 'Planos & Precios' : 'Plans & Pricing'}</h3>
                <p className="ps-modal-sub">
                  {L === 'es'
                    ? 'Recibe el brochure completo con planos, tabla de precios por unidad y proyecciones de rendimiento. Solo necesitamos tus datos.'
                    : 'Receive the complete brochure with plans, unit pricing table, and return projections. We just need your details.'}
                </p>
                <div className="ps-form-g">
                  <label className="ps-form-l">{L === 'es' ? 'Nombre completo' : 'Full name'}</label>
                  <input className="ps-form-i" type="text" placeholder={L === 'es' ? 'Tu nombre' : 'Your name'} value={brForm.name} onChange={(e) => setBrForm({ ...brForm, name: e.target.value })} />
                </div>
                <div className="ps-form-g">
                  <label className="ps-form-l">{L === 'es' ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp'}</label>
                  <input className="ps-form-i" type="tel" placeholder="+52 55 1234 5678" value={brForm.phone} onChange={(e) => setBrForm({ ...brForm, phone: e.target.value })} />
                </div>
                <div className="ps-form-g">
                  <label className="ps-form-l">{L === 'es' ? 'Correo electrónico' : 'Email'}</label>
                  <input className="ps-form-i" type="email" placeholder={L === 'es' ? 'tu@correo.com' : 'you@email.com'} value={brForm.email} onChange={(e) => setBrForm({ ...brForm, email: e.target.value })} />
                </div>
                <button className="ps-form-btn" onClick={submitBrochure}>{L === 'es' ? 'Recibir Brochure →' : 'Receive Brochure →'}</button>
                <p className="ps-form-priv">{L === 'es' ? 'Tu información es confidencial y nunca será compartida con terceros.' : 'Your information is confidential and will never be shared with third parties.'}</p>
              </>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <div className="ps-success-icon">✦</div>
                <div className="ps-modal-eye">{L === 'es' ? 'Brochure listo' : 'Brochure ready'}</div>
                <h3 style={{ textAlign: 'left' }}>{L === 'es' ? 'Tu brochure está listo' : 'Your brochure is ready'}</h3>
                <p className="ps-modal-sub" style={{ textAlign: 'left' }}>
                  {L === 'es'
                    ? 'Gracias. Un asesor de Rivana también te contactará en menos de 2 horas para acompañarte personalmente.'
                    : 'Thank you. A Rivana advisor will also contact you within 2 hours to assist you personally.'}
                </p>
                <a href="/brochures/mondrian-residences-grand-island.pdf" target="_blank" rel="noopener noreferrer" className="ps-btn-gold ps-btn-full" style={{ display: 'block', textAlign: 'center', marginBottom: 12 }}>
                  {L === 'es' ? 'Ver Brochure Mondrian →' : 'View Mondrian Brochure →'}
                </a>
                <a href="https://wa.me/529988457224?text=Hola%2C%20quisiera%20recibir%20el%20PDF%20del%20brochure%20de%20Mondrian%20Residences" className="ps-btn-ghost-dark" target="_blank" rel="noopener noreferrer">
                  {L === 'es' ? 'Recibir PDF por WhatsApp' : 'Receive PDF via WhatsApp'}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PreSale;
