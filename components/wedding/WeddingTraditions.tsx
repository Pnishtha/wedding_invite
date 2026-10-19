"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Heart,
  Sparkles,
} from "lucide-react";

type Tradition = {
  id: number;
  number: string;
  symbol: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
};

const traditions: Tradition[] = [
  {
    id: 1,
    number: "01",
    symbol: "❋",
    title: "Mehendi",
    subtitle: "A celebration of colour",
    description:
      "An evening filled with intricate mehendi, music, laughter and beautiful memories with the people we love.",
    detail:
      "The bride's hands come alive with beautiful mehendi as family and friends gather around to celebrate the beginning of the wedding festivities.",
  },
  {
    id: 2,
    number: "02",
    symbol: "✦",
    title: "Haldi",
    subtitle: "Sunshine, laughter & blessings",
    description:
      "A joyful celebration filled with turmeric, flowers, laughter and heartfelt blessings from our families.",
    detail:
      "The golden haldi ceremony brings everyone together for a morning of happiness, playful moments and blessings for a beautiful married life.",
  },
  {
    id: 3,
    number: "03",
    symbol: "🥁",
    title: "Baraat",
    subtitle: "The journey begins",
    description:
      "With music in the air and hearts full of joy, the groom arrives surrounded by family and friends.",
    detail:
      "The baraat marks the beginning of the wedding celebration as the groom makes his way towards the bride, accompanied by music, dancing and endless excitement.",
  },
  {
    id: 4,
    number: "04",
    symbol: "✧",
    title: "Phere",
    subtitle: "Seven sacred promises",
    description:
      "Around the sacred fire, two hearts make seven promises and begin their journey together.",
    detail:
      "The seven pheras represent the sacred promises made by the couple as they embark on a lifetime of love, companionship, respect and togetherness.",
  },
  {
    id: 5,
    number: "05",
    symbol: "♡",
    title: "Vidaai",
    subtitle: "A beautiful new beginning",
    description:
      "A moment of emotions, blessings and love as one chapter closes and another beautiful one begins.",
    detail:
      "With the blessings of family and loved ones, the bride begins a new chapter while carrying with her the love and memories of her home.",
  },
];

export default function WeddingTraditions() {
  const [activeTradition, setActiveTradition] =
    useState<number | null>(null);

  const toggleTradition = (id: number) => {
    setActiveTradition((current) =>
      current === id ? null : id
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#FBEFE5] px-5 py-24 sm:px-8 sm:py-28 lg:px-12">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C8A45D]/8 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#E8B7A5]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#722536]/5 blur-3xl" />

      {/* Decorative corners */}

      <div className="pointer-events-none absolute left-5 top-5 h-20 w-20 border-l border-t border-[#C8A45D]/35 sm:left-10 sm:top-10" />

      <div className="pointer-events-none absolute bottom-5 right-5 h-20 w-20 border-b border-r border-[#C8A45D]/35 sm:bottom-10 sm:right-10" />

      <div className="relative mx-auto max-w-6xl">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#F6E7D8] px-4 py-2">
            <Sparkles
              size={14}
              className="text-[#C8A45D]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#722536]">
              Our Traditions
            </span>
          </div>

          <h2 className="font-serif text-4xl text-[#722536] sm:text-5xl lg:text-6xl">
            Celebrations of Love
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C8A45D]/50" />

            <Heart
              size={14}
              fill="currentColor"
              className="text-[#C8A45D]"
            />

            <span className="h-px w-12 bg-[#C8A45D]/50" />
          </div>

          <p className="mt-6 text-sm leading-7 text-[#3B2925]/65 sm:text-base">
            Every ceremony carries a story, every ritual carries
            a blessing, and every celebration brings our families
            a little closer together.
          </p>
        </motion.div>


        {/* ===================================================
            DESKTOP TRADITION CARDS
        =================================================== */}

        <div className="hidden gap-4 lg:grid lg:grid-cols-5">
          {traditions.map((tradition, index) => (
            <TraditionCard
              key={tradition.id}
              tradition={tradition}
              index={index}
              active={
                activeTradition === tradition.id
              }
              onClick={() =>
                toggleTradition(tradition.id)
              }
            />
          ))}
        </div>


        {/* ===================================================
            MOBILE / TABLET ACCORDION
        =================================================== */}

        <div className="space-y-3 lg:hidden">
          {traditions.map((tradition, index) => {
            const isActive =
              activeTradition === tradition.id;

            return (
              <motion.div
                key={tradition.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isActive
                    ? "border-[#722536]/30 bg-[#722536]"
                    : "border-[#C8A45D]/20 bg-[#F6E7D8]/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    toggleTradition(
                      tradition.id
                    )
                  }
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl ${
                      isActive
                        ? "bg-[#F6E7D8]/10 text-[#F6E7D8]"
                        : "bg-[#722536]/8 text-[#722536]"
                    }`}
                  >
                    {tradition.symbol}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-[9px] font-semibold uppercase tracking-[0.2em] ${
                        isActive
                          ? "text-[#C8A45D]"
                          : "text-[#C8A45D]"
                      }`}
                    >
                      {tradition.number}
                    </p>

                    <h3
                      className={`mt-1 font-serif text-xl ${
                        isActive
                          ? "text-[#F6E7D8]"
                          : "text-[#722536]"
                      }`}
                    >
                      {tradition.title}
                    </h3>

                    <p
                      className={`mt-1 text-xs ${
                        isActive
                          ? "text-[#F6E7D8]/60"
                          : "text-[#3B2925]/50"
                      }`}
                    >
                      {tradition.subtitle}
                    </p>
                  </div>

                  <motion.div
                    animate={{
                      rotate: isActive ? 180 : 0,
                    }}
                    className={
                      isActive
                        ? "text-[#F6E7D8]"
                        : "text-[#722536]"
                    }
                  >
                    <ChevronDown size={19} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="border-t border-[#F6E7D8]/10 px-5 pb-6 pt-1">
                        <p className="text-sm leading-7 text-[#F6E7D8]/70">
                          {tradition.description}
                        </p>

                        <p className="mt-4 text-xs leading-6 text-[#F6E7D8]/50">
                          {tradition.detail}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>


        {/* ===================================================
            BOTTOM MESSAGE
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-14 text-center"
        >
          <div className="mx-auto flex max-w-md items-center justify-center gap-3">
            <span className="h-px flex-1 bg-[#C8A45D]/25" />

            <span className="text-sm text-[#C8A45D]">
              ✦
            </span>

            <span className="h-px flex-1 bg-[#C8A45D]/25" />
          </div>

          <p className="mt-5 font-serif text-base italic text-[#722536]/70">
            “Together with our families, we celebrate the
            traditions that make our love story ours.”
          </p>
        </motion.div>

      </div>
    </section>
  );
}


/* ===========================================================
   DESKTOP TRADITION CARD
=========================================================== */

function TraditionCard({
  tradition,
  index,
  active,
  onClick,
}: {
  tradition: Tradition;
  index: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
      }}
      onClick={onClick}
      className={`group relative min-h-[360px] overflow-hidden rounded-[1.75rem] border p-6 text-left transition-all duration-500 ${
        active
          ? "border-[#722536] bg-[#722536] shadow-xl shadow-[#722536]/15"
          : "border-[#C8A45D]/20 bg-[#F6E7D8]/60 hover:border-[#C8A45D]/50"
      }`}
    >
      {/* Decorative glow */}

      <div
        className={`absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl transition-opacity ${
          active
            ? "bg-[#C8A45D]/20 opacity-100"
            : "bg-[#C8A45D]/10 opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Number */}

      <div className="relative flex items-start justify-between">
        <span
          className={`font-serif text-sm ${
            active
              ? "text-[#C8A45D]"
              : "text-[#C8A45D]/70"
          }`}
        >
          {tradition.number}
        </span>

        <span
          className={`text-xl ${
            active
              ? "text-[#F6E7D8]"
              : "text-[#722536]"
          }`}
        >
          {tradition.symbol}
        </span>
      </div>


      {/* Content */}

      <div className="relative mt-12">

        <h3
          className={`font-serif text-3xl ${
            active
              ? "text-[#F6E7D8]"
              : "text-[#722536]"
          }`}
        >
          {tradition.title}
        </h3>

        <p
          className={`mt-2 text-xs font-medium uppercase tracking-[0.15em] ${
            active
              ? "text-[#C8A45D]"
              : "text-[#C8A45D]"
          }`}
        >
          {tradition.subtitle}
        </p>

        <p
          className={`mt-5 text-sm leading-6 ${
            active
              ? "text-[#F6E7D8]/70"
              : "text-[#3B2925]/55"
          }`}
        >
          {tradition.description}
        </p>

      </div>


      {/* Bottom action */}

      <div className="absolute bottom-6 left-6 right-6">

        <div
          className={`flex items-center gap-2 text-xs font-medium ${
            active
              ? "text-[#F6E7D8]"
              : "text-[#722536]"
          }`}
        >
          <span>
            {active
              ? "Close details"
              : "Explore tradition"}
          </span>

          <motion.span
            animate={{
              x: active ? 3 : 0,
            }}
          >
            <ArrowRight size={14} />
          </motion.span>
        </div>

      </div>

    </motion.button>
  );
}