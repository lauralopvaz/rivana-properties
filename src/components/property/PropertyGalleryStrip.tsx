import { useState } from "react";
import { X, ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";

interface PropertyGalleryStripProps {
  images: string[];
}

export function PropertyGalleryStrip({ images }: PropertyGalleryStripProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const thumbs = images.slice(0, 3);

  const handlePrev = () =>
    setActiveIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  const handleNext = () =>
    setActiveIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <>
      {/* Strip */}
      <div
        className="grid grid-cols-4 gap-[2px] h-16"
        style={{ backgroundColor: "#1C1C1C" }}
      >
        {thumbs.map((img, i) => (
          <button
            key={i}
            className="overflow-hidden"
            onClick={() => {
              setActiveIndex(i);
              setLightboxOpen(true);
            }}
          >
            <img
              src={img}
              alt={`Galería ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
        <button
          className="flex flex-col items-center justify-center gap-1"
          style={{ backgroundColor: "rgba(207,174,96,0.09)" }}
          onClick={() => {
            setActiveIndex(0);
            setLightboxOpen(true);
          }}
        >
          <LayoutGrid size={14} style={{ color: "#CFAE60" }} />
          <span
            className="font-body font-light uppercase tracking-[2px]"
            style={{ fontSize: "7px", color: "#CFAE60" }}
          >
            Ver todas
          </span>
        </button>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 p-2"
          >
            <X size={20} style={{ color: "#FFFFFF" }} />
          </button>

          {/* Main image */}
          <div className="flex-1 flex items-center justify-center w-full px-12 relative">
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2"
            >
              <ChevronLeft size={24} style={{ color: "#FFFFFF" }} />
            </button>
            <img
              src={images[activeIndex]}
              alt={`Imagen ${activeIndex + 1}`}
              className="max-h-[70vh] max-w-full object-contain"
            />
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2"
            >
              <ChevronRight size={24} style={{ color: "#FFFFFF" }} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 p-4 overflow-x-auto">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="w-14 h-10 flex-shrink-0 overflow-hidden"
                style={{
                  border:
                    i === activeIndex
                      ? "2px solid #CFAE60"
                      : "2px solid transparent",
                }}
              >
                <img
                  src={img}
                  alt={`Miniatura ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
