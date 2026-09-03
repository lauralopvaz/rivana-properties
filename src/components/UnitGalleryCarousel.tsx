import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/data/la-amada-galleries";

interface UnitGalleryCarouselProps {
  images: GalleryImage[];
  language: "es" | "en";
  className?: string;
}

/** Carrusel simple para las cards de unidades: primera imagen como hero. */
export function UnitGalleryCarousel({ images, language, className = "" }: UnitGalleryCarouselProps) {
  const [index, setIndex] = useState(0);
  if (images.length === 0) return null;

  const total = images.length;
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <div className={`relative overflow-hidden bg-muted ${className}`}>
      <div className="relative aspect-[4/3]">
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt[language]}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={language === "es" ? "Imagen anterior" : "Previous image"}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 hover:bg-background transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={language === "es" ? "Siguiente imagen" : "Next image"}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 hover:bg-background transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={
                  language === "es" ? `Ver imagen ${i + 1} de ${total}` : `View image ${i + 1} of ${total}`
                }
                aria-current={i === index}
                className="w-2 h-2 transition"
                style={{ backgroundColor: i === index ? "#CFAE60" : "rgba(255,255,255,0.7)" }}
              />
            ))}
          </div>

          <span
            className="absolute top-3 right-3 px-2 py-1 font-body bg-background/80"
            style={{ fontSize: "12px", letterSpacing: "0.08em" }}
          >
            {index + 1}/{total}
          </span>
        </>
      )}
    </div>
  );
}
