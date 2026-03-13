import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Grid2x2 } from "lucide-react";
import { tr } from "@/lib/propertyI18n";
import type { Locale } from "@/types/property";

interface PropertyGalleryStripProps {
  images: string[];
  locale: Locale;
}

export function PropertyGalleryStrip({ images, locale }: PropertyGalleryStripProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const thumbs = images.slice(0, 3);

  const handlePrev = () => setActiveIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  const handleNext = () => setActiveIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <>
      <div className="prop-gallery-strip grid grid-cols-4 gap-[3px]" style={{ backgroundColor: "hsl(var(--paper))" }}>
        {thumbs.map((img, idx) => (
          <button
            key={idx}
            className="overflow-hidden h-full"
            onClick={() => { setActiveIndex(idx); setLightboxOpen(true); }}
          >
            <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
        <button
          className="flex flex-col items-center justify-center gap-1"
          style={{ backgroundColor: "rgba(207,174,96,0.08)", border: "1px solid rgba(207,174,96,0.22)" }}
          onClick={() => { setActiveIndex(0); setLightboxOpen(true); }}
        >
          <Grid2x2 size={14} style={{ color: "hsl(var(--gold))" }} />
          <span className="font-body font-light uppercase prop-gallery-label" style={{ letterSpacing: "2px", color: "hsl(var(--gold))" }}>
            {tr(locale, 'viewAll')}
          </span>
        </button>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: "rgba(5,8,12,0.92)" }}
        >
          <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 z-10 p-2">
            <X size={20} style={{ color: "#FFFFFF" }} />
          </button>
          <div className="flex-1 flex items-center justify-center w-full px-12 relative">
            <button onClick={handlePrev} className="absolute left-3 top-1/2 -translate-y-1/2 p-2">
              <ChevronLeft size={24} style={{ color: "#FFFFFF" }} />
            </button>
            <img
              src={images[activeIndex]}
              alt={`Image ${activeIndex + 1}`}
              className="max-h-[70vh] max-w-full object-contain"
            />
            <button onClick={handleNext} className="absolute right-3 top-1/2 -translate-y-1/2 p-2">
              <ChevronRight size={24} style={{ color: "#FFFFFF" }} />
            </button>
          </div>
          <div className="flex gap-2 p-4 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="w-14 h-10 flex-shrink-0 overflow-hidden"
                style={{ border: idx === activeIndex ? "2px solid hsl(var(--gold))" : "2px solid transparent" }}
              >
                <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
