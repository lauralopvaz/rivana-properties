import { useState, useEffect } from "react";
import { Tag, MessageCircle, CreditCard } from "lucide-react";
import { formatNumber } from "@/lib/formatPrice";
import { tr } from "@/lib/propertyI18n";
import type { PresalePrice, Locale } from "@/types/property";

export interface PaymentPlanRow {
  percent: string;
  label: string;
  labelEn?: string;
}

interface PropertyPresalePriceProps {
  presalePrice: PresalePrice;
  locale: Locale;
  onReserve?: () => void;
  onWhatsApp?: () => void;
  paymentPlan?: PaymentPlanRow[];
}

const defaultPaymentPlan: PaymentPlanRow[] = [
  { percent: '30%', label: '30% de enganche', labelEn: '30% Down payment' },
  { percent: '20%', label: '20% diferido en 12 meses', labelEn: '20% Deferred over 12 months' },
  { percent: '50%', label: '50% a la entrega', labelEn: '50% At delivery' },
];

function useCountdown(deadline: string) {
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(deadline).getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setRemaining({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [deadline]);

  return remaining;
}

export function PropertyPresalePrice({ presalePrice, locale, onReserve, onWhatsApp, paymentPlan }: PropertyPresalePriceProps) {
  const countdown = useCountdown(presalePrice.deadlineDate);
  const savings = presalePrice.originalMXN - presalePrice.discountMXN;
  const plan = paymentPlan || defaultPaymentPlan;

  const deadlineFormatted = new Date(presalePrice.deadlineDate).toLocaleDateString(
    locale === "es" ? "es-MX" : "en-US",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const countdownBoxes = [
    { value: countdown.days, label: tr(locale, 'countdownDays') },
    { value: countdown.hours, label: tr(locale, 'countdownHrs') },
    { value: countdown.minutes, label: tr(locale, 'countdownMin') },
    { value: countdown.seconds, label: tr(locale, 'countdownSec') },
  ];

  return (
    <section
      className="p-5"
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "3px solid #CFAE60",
        borderBottom: "1px solid rgba(207,174,96,0.22)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <div
          className="w-[42px] h-[42px] flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "rgba(207,174,96,0.08)", border: "1px solid rgba(207,174,96,0.22)" }}
        >
          <Tag size={18} style={{ color: "#CFAE60" }} />
        </div>
        <div>
          <span className="font-body uppercase block prop-presale-label" style={{ letterSpacing: "3px", color: "#CFAE60", fontWeight: 400 }}>
            {tr(locale, 'presaleSpecialPrice')}
          </span>
          <span className="font-body block prop-presale-sublabel" style={{ color: "#4B4B4B", fontWeight: 300 }}>
            {tr(locale, 'exclusiveForEarlyBuyers')}
          </span>
        </div>
      </div>

      {/* Prices */}
      <div
        className="flex items-center gap-3 py-4 my-4"
        style={{ borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}
      >
        <span className="font-display prop-title-sm line-through" style={{ color: "rgba(75,75,75,0.35)" }}>
          ${formatNumber(presalePrice.originalMXN)}
        </span>
        <span style={{ color: "rgba(176,58,46,0.6)" }}>→</span>
        <div className="flex flex-col">
          <span className="font-body font-light uppercase prop-badge" style={{ letterSpacing: "1px", color: "#4B4B4B" }}>
            {tr(locale, 'from')}
          </span>
          <span className="font-display prop-title-lg" style={{ color: "#1C1C1C" }}>
            ${formatNumber(presalePrice.discountMXN)}
          </span>
        </div>
        <span className="font-body font-light self-end mb-1 prop-text-xs" style={{ color: "#4B4B4B" }}>
          MXN
        </span>
      </div>

      {/* Savings */}
      <div
        className="p-3 mb-3"
        style={{ backgroundColor: "rgba(207,174,96,0.08)", border: "1px solid rgba(207,174,96,0.22)" }}
      >
        <span className="font-display prop-title-sm" style={{ color: "#CFAE60" }}>
          −${formatNumber(savings)}
        </span>
        <span className="block font-body font-light mt-1 prop-text-xs" style={{ color: "#4B4B4B" }}>
          {tr(locale, 'savingsVsListPrice')}
        </span>
        <span className="block font-body font-light prop-text-xs" style={{ color: "#4B4B4B" }}>
          {tr(locale, 'validDuringPresale')}
        </span>
      </div>

      {/* Payment plan */}
      <div
        className="p-[12px_14px] mb-3"
        style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0,0,0,0.07)" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <CreditCard size={13} style={{ color: "#CFAE60" }} />
          <span className="font-body font-light uppercase prop-badge" style={{ letterSpacing: "2px", color: "#CFAE60" }}>
            {tr(locale, 'paymentPlanLabel')}
          </span>
        </div>
        {plan.map((row, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-[7px]"
            style={{ borderBottom: idx < plan.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}
          >
            <span className="font-display prop-unit-price" style={{ color: "#CFAE60", fontWeight: 300 }}>
              {row.percent}
            </span>
            <span className="font-body font-light prop-text-xs" style={{ color: "#4B4B4B" }}>
              {locale === 'en' && row.labelEn ? row.labelEn : row.label}
            </span>
          </div>
        ))}
      </div>

      {/* Countdown */}
      <div className="flex items-start gap-3 mb-5">
        <div className="flex gap-[6px]">
          {countdownBoxes.map((box, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center px-2 py-2"
              style={{ backgroundColor: "#F8F6F2", border: "1px solid rgba(207,174,96,0.22)" }}
            >
              <span className="font-display prop-num-countdown" style={{ color: "#CFAE60" }}>
                {String(box.value).padStart(2, "0")}
              </span>
              <span
                className="font-body font-light uppercase prop-badge"
                style={{ letterSpacing: "1px", color: "rgba(207,174,96,0.55)" }}
              >
                {box.label}
              </span>
            </div>
          ))}
        </div>
        <p className="font-body font-light flex-1 italic prop-text-xs" style={{ color: "#4B4B4B", lineHeight: 1.5 }}>
          {tr(locale, 'priceIncreasesOn')} {presalePrice.priceIncreasePercent}% {tr(locale, 'on')} {deadlineFormatted}
        </p>
      </div>

      {/* CTA */}
      <div className="flex gap-[2px]">
        <button
          onClick={onReserve}
          className="flex-1 py-3.5 font-body font-light uppercase prop-btn"
          style={{ letterSpacing: "3px", backgroundColor: "#CFAE60", color: "#FFFFFF" }}
        >
          {tr(locale, 'reserveThisPrice')}
        </button>
        <button
          onClick={onWhatsApp}
          className="w-[48px] flex items-center justify-center flex-shrink-0"
          style={{ border: "1px solid rgba(37,211,102,0.28)" }}
        >
          <MessageCircle size={18} style={{ color: "#25d366" }} />
        </button>
      </div>
    </section>
  );
}
