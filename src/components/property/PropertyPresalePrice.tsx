import { useState, useEffect } from "react";
import { Flame, MessageCircle } from "lucide-react";
import { formatNumber } from "@/lib/formatPrice";
import { t } from "@/lib/propertyI18n";
import type { PresalePrice, Locale } from "@/types/property";

interface PropertyPresalePriceProps {
  presalePrice: PresalePrice;
  locale: Locale;
  onReserve?: () => void;
  onWhatsApp?: () => void;
}

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

export function PropertyPresalePrice({ presalePrice, locale, onReserve, onWhatsApp }: PropertyPresalePriceProps) {
  const i = t(locale);
  const countdown = useCountdown(presalePrice.deadlineDate);
  const savings = presalePrice.originalMXN - presalePrice.discountMXN;

  const deadlineFormatted = new Date(presalePrice.deadlineDate).toLocaleDateString(
    locale === "es" ? "es-MX" : "en-US",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const countdownBoxes = [
    { value: countdown.days, label: i.countdownDays },
    { value: countdown.hours, label: i.countdownHrs },
    { value: countdown.minutes, label: i.countdownMin },
    { value: countdown.seconds, label: i.countdownSec },
  ];

  return (
    <section className="p-5" style={{ backgroundColor: "#1C1C1C" }}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <Flame size={14} style={{ color: "#b03a2e" }} />
        <span className="font-body font-light uppercase prop-label" style={{ letterSpacing: "3px", color: "rgba(176,58,46,0.7)" }}>
          {i.presaleLabel}
        </span>
      </div>
      <p className="font-body font-light prop-text-xs mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
        {i.presaleSub}
      </p>

      {/* Prices */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-display prop-title-sm line-through" style={{ color: "rgba(255,255,255,0.22)" }}>
          ${formatNumber(presalePrice.originalMXN)}
        </span>
        <span style={{ color: "rgba(255,255,255,0.3)" }}>→</span>
        <span className="font-display prop-title-lg" style={{ color: "#FFFFFF" }}>
          ${formatNumber(presalePrice.discountMXN)}
        </span>
        <span className="font-body font-light self-end mb-1 prop-text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          MXN
        </span>
      </div>

      {/* Savings */}
      <div className="p-3 mb-5" style={{ backgroundColor: "rgba(176,58,46,0.10)", border: "1px solid rgba(176,58,46,0.2)" }}>
        <span className="font-display prop-title-sm" style={{ color: "#b03a2e" }}>
          −${formatNumber(savings)}
        </span>
        <span className="block font-body font-light mt-1 prop-text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
          {i.presaleSavingsLabel}
        </span>
      </div>

      {/* Countdown */}
      <div className="flex items-start gap-3 mb-5">
        <div className="flex gap-[6px]">
          {countdownBoxes.map((box, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center px-2 py-2"
              style={{ backgroundColor: "rgba(207,174,96,0.08)", border: "1px solid rgba(207,174,96,0.18)" }}
            >
              <span className="font-display prop-num-countdown" style={{ color: "#CFAE60" }}>
                {String(box.value).padStart(2, "0")}
              </span>
              <span
                className="font-body font-light uppercase"
                style={{ fontSize: "6px", letterSpacing: "1px", color: "rgba(207,174,96,0.45)" }}
              >
                {box.label}
              </span>
            </div>
          ))}
        </div>
        <p className="font-body font-light flex-1 italic prop-text-xs" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>
          {i.presaleIncreaseNote} {presalePrice.priceIncreasePercent}% {i.presaleOn} {deadlineFormatted}
        </p>
      </div>

      {/* CTA */}
      <div className="flex gap-[2px]">
        <button
          onClick={onReserve}
          className="flex-1 py-3.5 font-body font-light uppercase prop-text-xs"
          style={{ letterSpacing: "3px", backgroundColor: "#CFAE60", color: "#FFFFFF" }}
        >
          {i.reservePrice}
        </button>
        <button
          onClick={onWhatsApp}
          className="w-[46px] flex items-center justify-center flex-shrink-0"
          style={{ border: "1px solid rgba(37,211,102,0.3)" }}
        >
          <MessageCircle size={18} style={{ color: "#25d366" }} />
        </button>
      </div>
    </section>
  );
}
