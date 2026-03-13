import { useState, useEffect } from "react";
import { Flame, MessageCircle } from "lucide-react";
import type { PresalePrice } from "@/types/property";
import { formatNumber } from "@/lib/formatPrice";

interface PropertyPresalePriceProps {
  presalePrice: PresalePrice;
  onReserve?: () => void;
  onWhatsApp?: () => void;
}

function useCountdown(deadline: string) {
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(deadline).getTime();

    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
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

export function PropertyPresalePrice({
  presalePrice,
  onReserve,
  onWhatsApp,
}: PropertyPresalePriceProps) {
  const countdown = useCountdown(presalePrice.deadlineDate);
  const savings = presalePrice.originalMXN - presalePrice.discountMXN;
  const deadlineFormatted = new Date(presalePrice.deadlineDate).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const countdownBoxes = [
    { value: countdown.days, label: "DÍAS" },
    { value: countdown.hours, label: "HRS" },
    { value: countdown.minutes, label: "MIN" },
    { value: countdown.seconds, label: "SEG" },
  ];

  return (
    <section className="p-5" style={{ backgroundColor: "#1C1C1C" }}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <Flame size={14} style={{ color: "#b03a2e" }} />
        <span
          className="font-body font-light uppercase tracking-[3px]"
          style={{ fontSize: "8px", color: "rgba(176,58,46,0.7)" }}
        >
          Precio especial de preventa
        </span>
      </div>
      <p
        className="font-body font-light mb-5"
        style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}
      >
        Exclusivo para los primeros compradores
      </p>

      {/* Prices */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="font-display text-[18px] line-through"
          style={{ color: "rgba(255,255,255,0.22)" }}
        >
          ${formatNumber(presalePrice.originalMXN)}
        </span>
        <span style={{ color: "rgba(255,255,255,0.3)" }}>→</span>
        <span className="font-display text-[34px]" style={{ color: "#FFFFFF" }}>
          ${formatNumber(presalePrice.discountMXN)}
        </span>
        <span
          className="font-body font-light self-end mb-1"
          style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}
        >
          MXN
        </span>
      </div>

      {/* Savings card */}
      <div
        className="p-3 mb-5"
        style={{
          backgroundColor: "rgba(176,58,46,0.08)",
          border: "1px solid rgba(176,58,46,0.2)",
        }}
      >
        <span className="font-display text-[20px]" style={{ color: "#b03a2e" }}>
          −${formatNumber(savings)}
        </span>
        <span
          className="block font-body font-light mt-1"
          style={{ fontSize: "9px", color: "rgba(255,255,255,0.45)" }}
        >
          Ahorro total vs. precio post-preventa
        </span>
      </div>

      {/* Countdown */}
      <div className="flex items-start gap-3 mb-5">
        <div className="flex gap-[6px]">
          {countdownBoxes.map((box, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-2 py-2"
              style={{
                backgroundColor: "rgba(207,174,96,0.08)",
                border: "1px solid rgba(207,174,96,0.18)",
              }}
            >
              <span className="font-display text-[18px]" style={{ color: "#CFAE60" }}>
                {String(box.value).padStart(2, "0")}
              </span>
              <span
                className="font-body font-light uppercase tracking-[1px]"
                style={{ fontSize: "6px", color: "rgba(207,174,96,0.45)" }}
              >
                {box.label}
              </span>
            </div>
          ))}
        </div>
        <p
          className="font-body font-light flex-1"
          style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}
        >
          Precio aumenta {presalePrice.priceIncreasePercent}% el {deadlineFormatted}
        </p>
      </div>

      {/* CTA */}
      <div className="flex gap-[2px]">
        <button
          onClick={onReserve}
          className="flex-1 py-3.5 font-body font-light uppercase tracking-[3px]"
          style={{ fontSize: "9px", backgroundColor: "#CFAE60", color: "#FFFFFF" }}
        >
          Reservar este Precio
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
