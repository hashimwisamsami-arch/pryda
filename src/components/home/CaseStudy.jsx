import { useMemo, useState } from "react";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import IconButton from "../ui/IconButton";
import Button from "../ui/Button";

import { projects } from "../../constants/projects";
import { getWallpapers } from "../../utils/wallpapers";

const wallpaperImages = getWallpapers();

const stockArtwork = projects.find(
  (project) => project.title === "Stock Artwork",
)?.caseStudy;

function CaseStudy() {
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = useMemo(() => {
    return wallpaperImages.slice(4, 6);
  }, []);

  if (!stockArtwork) {
    return null;
  }

  return (
    <section id="stock-artwork" className="py-10 sm:py-14 lg:py-20">
      <Container>
        <GlassCard strong className="overflow-hidden">
          {/* =========================
              MAIN CONTENT
          ========================== */}
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* =========================
                IMAGES
            ========================== */}
            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/20">
                {galleryImages.length > 0 && (
                  <img
                    src={galleryImages[selectedImage].image}
                    alt={`${stockArtwork.title} preview ${selectedImage + 1}`}
                    className="
                     aspect-4/3
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                    "
                  />
                )}

                {/* Image overlay */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                  bg-linear-to-t
                    from-pryda-navy/40
                    via-transparent
                    to-transparent
                  "
                />

                {/* Watermark */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    right-4
                    top-4
                    text-xs
                    font-bold
                    tracking-[0.3em]
                    text-white/30
                  "
                >
                  PRYDA+
                </span>
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {galleryImages.map((item, index) => {
                    const isActive = selectedImage === index;

                    return (
                      <button
                        key={item.path}
                        type="button"
                        aria-label={`عرض الصورة ${index + 1}`}
                        aria-pressed={isActive}
                        onClick={() => setSelectedImage(index)}
                        className={`
                          overflow-hidden
                          rounded-md
                          border
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "border-cyan-300/50 shadow-[0_0_24px_rgba(36,215,232,0.12)]"
                              : "border-white/10 opacity-60 hover:border-white/25 hover:opacity-100"
                          }
                        `}
                      >
                        <img
                          src={item.image}
                          alt={`Thumbnail ${index + 1}`}
                          className="aspect-16/10 w-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Gallery controls */}
              {galleryImages.length > 1 && (
                <div className="mt-4 flex justify-end gap-2">
                  <IconButton
                    label="الصورة السابقة"
                    onClick={() =>
                      setSelectedImage(
                        (current) =>
                          (current - 1 + galleryImages.length) %
                          galleryImages.length,
                      )
                    }
                  >
                    ←
                  </IconButton>

                  <IconButton
                    label="الصورة التالية"
                    onClick={() =>
                      setSelectedImage(
                        (current) => (current + 1) % galleryImages.length,
                      )
                    }
                  >
                    →
                  </IconButton>
                </div>
              )}
            </div>

            {/* =========================
                PROJECT INFO
            ========================== */}
            <div className="flex flex-col justify-center border-t border-white/5 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <p className="text-label">Case Study</p>

              <h2 className="text-heading mt-3">{stockArtwork.title}</h2>

              <p className="mt-4 text-lg font-bold leading-relaxed text-white/85">
                {stockArtwork.subtitle}
              </p>

              <p className="text-body mt-5">{stockArtwork.description}</p>

              <Button
                href="#stock-artwork-details"
                variant="secondary"
                className="mt-7 w-full sm:w-fit"
              >
                المزيد عن هذا المشروع
              </Button>
            </div>
          </div>

          {/* =========================
              METADATA
          ========================== */}
          <div className="grid border-t border-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {stockArtwork.metadata.map((item, index) => (
              <div
                key={item.label}
                className={`
                    p-5
                    sm:p-6
                    ${
                      index > 0
                        ? "border-t border-white/5 sm:border-l sm:border-t-0"
                        : ""
                    }
                  `}
              >
                <p className="text-label">{item.label}</p>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <p className="font-bold text-white/85">{item.value}</p>

                  {item.temporary && (
                    <span className="rounded-full border border-orange-300/20 bg-orange-300/6 px-2 py-1 text-[0.6rem] uppercase tracking-wider text-orange-200/70">
                      Temporary
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}

export default CaseStudy;
