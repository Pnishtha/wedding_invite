



"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Heart, Expand } from "lucide-react";

const photos = [
  {
    src: "/Intimate.png",
    title: "The Beginning",
    description: "Where our forever started.",
  },
  {
    src: "/Golden-Hour Temple Mural Portrait.png",
    title: "A Beautiful Moment",
    description: "Little moments, big memories.",
  },
  {
    src: "/The Beginning_ A Cozy Couple Portrait.png",
    title: "Together",
    description: "Side by side, always.",
  },
  {
    src: "/Golden-Hour Garden Couple.png",
    title: "The Celebration",
    description: "A day to remember forever.",
  },
  {
    src: "/Cosy Bedtime Trio Portrait.png",
    title: "The Celebration",
    description: "A day to remember forever.",
  },
  {
    src: "/Golden Sunset Overlook Couple.png",
    title: "The Moment",
    description: "A day to remember forever.",
  },
];

export default function WeddingGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const showNext = useCallback(() => {
    setSelectedIndex((i) => (i === null ? i : (i + 1) % photos.length));
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((i) =>
      i === null ? i : (i - 1 + photos.length) % photos.length
    );
  }, []);

  const isOpen = selectedIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, closeLightbox, showNext, showPrevious]);

  // Preload neighbouring photos so navigation feels instant
  useEffect(() => {
    if (selectedIndex === null) return;
    [1, -1].forEach((offset) => {
      const img = new Image();
      img.src = photos[(selectedIndex + offset + photos.length) % photos.length].src;
    });
  }, [selectedIndex]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -70 || info.velocity.x < -500) showNext();
    else if (info.offset.x > 70 || info.velocity.x > 500) showPrevious();
  };

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden bg-[#FBF5ED] px-4 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#722536]/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#C8A45D]/[0.12] blur-3xl" />

        {/* Heading */}
        <div className="relative z-10 mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <span className="h-px w-10 bg-[#C8A45D] sm:w-14" />
            <Heart size={17} fill="#C8A45D" className="text-[#C8A45D]" />
            <span className="h-px w-10 bg-[#C8A45D] sm:w-14" />
          </motion.div>

          <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-[#98743C] sm:text-xs sm:tracking-[0.5em]">
            Our Memories
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 font-serif text-4xl leading-tight text-[#722536] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            A Glimpse of Us
          </motion.h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#80665D] sm:text-base">
            Every photograph holds a little piece of our story, a memory we
            will treasure forever.
          </p>
        </div>

        {/*
          Masonry layout: each photo keeps its own natural aspect ratio
          (w-full + h-auto), so nothing is cropped or letterboxed.
          1 column on phones, 2 on tablets, 3 on desktops.
        */}
        <div className="relative z-10 mx-auto max-w-7xl columns-1 gap-6 sm:columns-2 sm:gap-8 lg:columns-3 lg:gap-10">
          {photos.map((photo, index) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: Math.min((index % 3) * 0.1, 0.3),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6 break-inside-avoid sm:mb-8 lg:mb-10"
            >
              <button
                type="button"
                aria-label={`Open photo: ${photo.title}`}
                onClick={() => setSelectedIndex(index)}
                className="group block w-full cursor-zoom-in rounded-sm bg-[#FFFDF9] p-2.5 text-left shadow-[0_10px_40px_-12px_rgba(59,41,37,0.22)] ring-1 ring-[#C8A45D]/30 outline-none transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_-14px_rgba(59,41,37,0.32)] focus-visible:ring-2 focus-visible:ring-[#C8A45D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FBF5ED] sm:p-3.5"
              >
                {/* Photo — shown exactly as it is */}
                <div className="relative overflow-hidden bg-[#E8D8C8]">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                    className="block h-auto w-full select-none"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-[#251414]/0 transition-colors duration-500 group-hover:bg-[#251414]/15" />

                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-black/25 text-white opacity-100 backdrop-blur-md transition duration-300 sm:opacity-0 sm:group-hover:scale-100 sm:group-hover:opacity-100 sm:scale-90">
                    <Expand size={15} />
                  </div>
                </div>

                {/* Caption below the photo so it never covers the image */}
                <figcaption className="px-1 pb-1 pt-4 text-center sm:pt-5">
                  <p className="font-serif text-lg leading-tight text-[#722536] sm:text-xl">
                    {photo.title}
                  </p>
                  <span className="mx-auto mt-2.5 block h-px w-8 bg-[#C8A45D]" />
                  <p className="mt-2.5 text-xs leading-5 text-[#80665D] sm:text-sm">
                    {photo.description}
                  </p>
                </figcaption>
              </button>
            </motion.figure>
          ))}
        </div>

        <p className="relative z-10 mt-6 text-center text-[10px] uppercase tracking-[0.25em] text-[#98743C] sm:mt-10 sm:text-xs sm:tracking-[0.35em]">
          Select a photograph to view it
        </p>
      </section>

      {/* Full-screen viewer */}
      <AnimatePresence>
        {selectedPhoto && selectedIndex !== null && (
          <motion.div
            key="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex flex-col bg-[#1B1112]/95 backdrop-blur-lg"
            style={{
              paddingTop: "max(env(safe-area-inset-top), 0.75rem)",
              paddingBottom: "max(env(safe-area-inset-bottom), 0.75rem)",
              paddingLeft: "max(env(safe-area-inset-left), 0.75rem)",
              paddingRight: "max(env(safe-area-inset-right), 0.75rem)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.title}
          >
            {/* Top bar */}
            <div className="relative z-20 flex shrink-0 items-center justify-between px-1 pb-2 sm:px-3 sm:pb-3">
              <p className="text-[10px] tracking-[0.3em] text-[#D9BD80] sm:text-xs">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </p>
              <button
                type="button"
                aria-label="Close photo viewer"
                onClick={closeLightbox}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:h-12 sm:w-12"
              >
                <X size={20} />
              </button>
            </div>

            {/* Stage */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center">
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-0 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:flex lg:left-4"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                type="button"
                aria-label="Next photo"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-0 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:flex lg:right-4"
              >
                <ChevronRight size={24} />
              </button>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={selectedPhoto.src}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.22 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragEnd={handleDragEnd}
                  onClick={(event) => event.stopPropagation()}
                  className="flex h-full w-full max-w-5xl touch-pan-y items-center justify-center sm:px-16"
                >
                  {/* Full photo, never cropped */}
                  <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    draggable={false}
                    className="max-h-full max-w-full select-none rounded-sm object-contain shadow-2xl ring-1 ring-white/10"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Caption + thumbnails */}
            <div
              onClick={(event) => event.stopPropagation()}
              className="shrink-0 pt-3 text-center text-white sm:pt-4"
            >
              <h3 className="font-serif text-xl sm:text-2xl">
                {selectedPhoto.title}
              </h3>
              <p className="mt-1 text-xs text-white/65 sm:text-sm">
                {selectedPhoto.description}
              </p>

              <div className="mx-auto mt-3 flex max-w-full items-center justify-center gap-2 overflow-x-auto px-2 pb-1 sm:mt-4 sm:gap-3">
                {photos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    aria-label={`View ${photo.title}`}
                    aria-current={index === selectedIndex}
                    onClick={() => setSelectedIndex(index)}
                    className={`h-11 w-11 shrink-0 overflow-hidden rounded-sm bg-white/5 transition sm:h-14 sm:w-14 ${
                      index === selectedIndex
                        ? "opacity-100 ring-2 ring-[#D9BD80]"
                        : "opacity-45 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt=""
                      draggable={false}
                      className="h-full w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}