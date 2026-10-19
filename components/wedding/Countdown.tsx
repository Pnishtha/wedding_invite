// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Heart, Sparkles } from "lucide-react";

// const WEDDING_DATE = new Date(
//   "2026-12-02T19:00:00+05:30"
// ).getTime();

// type TimeLeft = {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// };

// function calculateTimeLeft(): TimeLeft {
//   const difference = WEDDING_DATE - Date.now();

//   if (difference <= 0) {
//     return {
//       days: 0,
//       hours: 0,
//       minutes: 0,
//       seconds: 0,
//     };
//   }

//   return {
//     days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//     hours: Math.floor(
//       (difference / (1000 * 60 * 60)) % 24
//     ),
//     minutes: Math.floor(
//       (difference / (1000 * 60)) % 60
//     ),
//     seconds: Math.floor(
//       (difference / 1000) % 60
//     ),
//   };
// }

// const countdownItems = [
//   {
//     key: "days",
//     label: "Days",
//   },
//   {
//     key: "hours",
//     label: "Hours",
//   },
//   {
//     key: "minutes",
//     label: "Minutes",
//   },
//   {
//     key: "seconds",
//     label: "Seconds",
//   },
// ] as const;

// export default function Countdown() {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>(
//     calculateTimeLeft()
//   );

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#722536] px-5 py-24 sm:px-8 sm:py-32">
      

//       <div className="pointer-events-none absolute inset-0">
//         <motion.div
//           className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A45D]/10 blur-3xl sm:h-[700px] sm:w-[700px]"
//           animate={{
//             scale: [1, 1.08, 1],
//             opacity: [0.4, 0.7, 0.4],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#F6E7D8]/5 blur-3xl" />

//         <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#C8A45D]/10 blur-3xl" />
//       </div>

//       {/* =====================================================
//           ORNAMENTAL FRAME
//       ====================================================== */}

//       <div className="pointer-events-none absolute inset-4 border border-[#C8A45D]/30 sm:inset-7" />

//       <div className="pointer-events-none absolute inset-7 border border-[#F6E7D8]/10 sm:inset-10" />

//       {/* Corner ornaments */}

//       <div className="pointer-events-none absolute left-8 top-8 h-16 w-16 border-l border-t border-[#C8A45D]/60 sm:left-12 sm:top-12 sm:h-24 sm:w-24" />

//       <div className="pointer-events-none absolute right-8 top-8 h-16 w-16 border-r border-t border-[#C8A45D]/60 sm:right-12 sm:top-12 sm:h-24 sm:w-24" />

//       <div className="pointer-events-none absolute bottom-8 left-8 h-16 w-16 border-b border-l border-[#C8A45D]/60 sm:bottom-12 sm:left-12 sm:h-24 sm:w-24" />

//       <div className="pointer-events-none absolute bottom-8 right-8 h-16 w-16 border-b border-r border-[#C8A45D]/60 sm:bottom-12 sm:right-12 sm:h-24 sm:w-24" />

//       {/* =====================================================
//           ROTATING MANDALA
//       ====================================================== */}

//       <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 items-center justify-center opacity-30 sm:h-[600px] sm:w-[600px]">
//         <motion.div
//           className="absolute inset-0 rounded-full border border-[#C8A45D]/40"
//           animate={{ rotate: 360 }}
//           transition={{
//             duration: 40,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />

//         <motion.div
//           className="absolute inset-8 rounded-full border border-dashed border-[#C8A45D]/30 sm:inset-12"
//           animate={{ rotate: -360 }}
//           transition={{
//             duration: 30,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />

//         <motion.div
//           className="absolute inset-20 rounded-full border border-[#C8A45D]/20 sm:inset-28"
//           animate={{ rotate: 360 }}
//           transition={{
//             duration: 50,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />

//         {/* Decorative dots */}

//         <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#C8A45D]" />

//         <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#C8A45D]" />

//         <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#C8A45D]" />

//         <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#C8A45D]" />
//       </div>

//       {/* =====================================================
//           CONTENT
//       ====================================================== */}

//       <div className="relative z-10 mx-auto max-w-5xl text-center">
//         {/* Label */}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.3,
//           }}
//           transition={{ duration: 0.8 }}
//           className="mb-6 flex items-center justify-center gap-3"
//         >
//           <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />

//           <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#F6E7D8]/80 sm:text-xs sm:tracking-[0.45em]">
//             The Countdown Begins
//           </span>

//           <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />
//         </motion.div>

//         {/* Heading */}

//         <motion.h2
//           initial={{
//             opacity: 0,
//             y: 25,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.3,
//           }}
//           transition={{
//             duration: 1,
//             delay: 0.1,
//           }}
//           className="font-serif text-4xl leading-tight text-[#F6E7D8] sm:text-5xl md:text-6xl"
//         >
//           Until We Say
//           <br />
//           <span className="italic text-[#C8A45D]">
//             "I Do"
//           </span>
//         </motion.h2>

//         {/* Heart */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0,
//           }}
//           whileInView={{
//             opacity: 1,
//             scale: 1,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.4,
//             type: "spring",
//           }}
//           className="mx-auto my-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#C8A45D]/50 bg-[#F6E7D8]/5"
//         >
//           <motion.div
//             animate={{
//               scale: [1, 1.15, 1],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             <Heart
//               size={23}
//               className="fill-[#C8A45D]/20 text-[#C8A45D]"
//               strokeWidth={1}
//             />
//           </motion.div>
//         </motion.div>

//         {/* =====================================================
//             COUNTDOWN
//         ====================================================== */}

//         <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
//           {countdownItems.map((item, index) => {
//             const value = timeLeft[item.key];

//             return (
//               <motion.div
//                 key={item.key}
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.3,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: 0.15 + index * 0.1,
//                 }}
//                 className="relative overflow-hidden border border-[#C8A45D]/35 bg-[#3B2925]/20 px-4 py-7 backdrop-blur-sm sm:px-6 sm:py-9"
//               >
//                 {/* Top ornament */}

//                 <div className="absolute left-1/2 top-0 h-px w-12 -translate-x-1/2 bg-[#C8A45D]" />

//                 {/* Number */}

//                 <motion.div
//                   key={value}
//                   initial={{
//                     opacity: 0.5,
//                     y: -5,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{
//                     duration: 0.3,
//                   }}
//                   className="font-serif text-4xl text-[#F6E7D8] sm:text-5xl md:text-6xl"
//                 >
//                   {String(value).padStart(2, "0")}
//                 </motion.div>

//                 {/* Label */}

//                 <div className="mt-2 font-sans text-[9px] uppercase tracking-[0.3em] text-[#C8A45D] sm:text-[10px]">
//                   {item.label}
//                 </div>

//                 {/* Bottom ornament */}

//                 <div className="absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2 bg-[#C8A45D]" />
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* =====================================================
//             DATE
//         ====================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.6,
//           }}
//           className="mt-10"
//         >
//           <div className="flex items-center justify-center gap-3">
//             <Sparkles
//               size={13}
//               className="text-[#C8A45D]"
//               strokeWidth={1}
//             />

//             <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F6E7D8]/70 sm:text-xs sm:tracking-[0.4em]">
//               02 December 2026 · 7:00 PM
//             </span>

//             <Sparkles
//               size={13}
//               className="text-[#C8A45D]"
//               strokeWidth={1}
//             />
//           </div>

//           <p className="mt-3 font-serif text-sm italic text-[#F6E7D8]/60">
//             Begusrai to Gorakhpur· India
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

// Explicit +05:30 offset, so everyone sees the same countdown
// whatever their own time zone is.
const WEDDING_DATE = new Date("2026-12-02T19:00:00+05:30").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  over: boolean;
};

function calculateTimeLeft(): TimeLeft {
  const difference = WEDDING_DATE - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, over: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    over: false,
  };
}

const countdownItems = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

export default function Countdown() {
  const reduceMotion = useReducedMotion();

  // null until mounted: the server and first client render match,
  // so there is no hydration mismatch from Date.now().
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const next = calculateTimeLeft();
      setTimeLeft(next);
      if (next.over) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const over = timeLeft?.over ?? false;

  return (
    <section
      id="countdown"
      className="relative isolate overflow-hidden bg-[#722536] px-8 py-24 sm:px-12 sm:py-32"
    >
      {/* Ambient glow — static for reduced-motion users */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A45D]/10 blur-3xl sm:h-[700px] sm:w-[700px]"
          animate={reduceMotion ? undefined : { opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#F6E7D8]/5 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#C8A45D]/10 blur-3xl" />
      </div>

      {/* Ornamental frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 border border-[#C8A45D]/30 sm:inset-7"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-7 border border-[#F6E7D8]/10 sm:inset-10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-8 top-8 h-16 w-16 border-l border-t border-[#C8A45D]/60 sm:left-12 sm:top-12 sm:h-24 sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-8 h-16 w-16 border-r border-t border-[#C8A45D]/60 sm:right-12 sm:top-12 sm:h-24 sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-8 h-16 w-16 border-b border-l border-[#C8A45D]/60 sm:bottom-12 sm:left-12 sm:h-24 sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-8 h-16 w-16 border-b border-r border-[#C8A45D]/60 sm:bottom-12 sm:right-12 sm:h-24 sm:w-24"
      />

      {/* Rotating mandala */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 flex h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 items-center justify-center opacity-30 sm:h-[600px] sm:w-[600px]"
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-[#C8A45D]/40"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border border-dashed border-[#C8A45D]/30 sm:inset-12"
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-20 rounded-full border border-[#C8A45D]/20 sm:inset-28"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#C8A45D]" />
        <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#C8A45D]" />
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#C8A45D]" />
        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#C8A45D]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#F6E7D8]/85 sm:text-xs sm:tracking-[0.45em]">
            {over ? "The Day Is Here" : "The Countdown Begins"}
          </span>
          <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif text-4xl leading-tight text-[#F6E7D8] sm:text-5xl md:text-6xl"
        >
          {over ? (
            <>
              Govind &amp; Nishtha
              <br />
              <span className="italic text-[#C8A45D]">Are Married</span>
            </>
          ) : (
            <>
              Until We Say
              <br />
              <span className="italic text-[#C8A45D]">
                &ldquo;I Do&rdquo;
              </span>
            </>
          )}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="mx-auto my-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#C8A45D]/50 bg-[#F6E7D8]/5"
        >
          <motion.div
            animate={reduceMotion ? undefined : { scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart
              size={23}
              className="fill-[#C8A45D]/20 text-[#C8A45D]"
              strokeWidth={1}
            />
          </motion.div>
        </motion.div>

        {/* Countdown */}
        {!over && (
          <div
            role="timer"
            aria-label={
              timeLeft
                ? `${timeLeft.days} days, ${timeLeft.hours} hours and ${timeLeft.minutes} minutes until the wedding`
                : "Countdown to the wedding"
            }
            className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5"
          >
            {countdownItems.map((item, index) => {
              const value = timeLeft ? timeLeft[item.key] : null;

              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.15 + index * 0.1 }}
                  className="relative overflow-hidden border border-[#C8A45D]/35 bg-[#3B2925]/20 px-4 py-7 backdrop-blur-sm sm:px-6 sm:py-9"
                >
                  <div className="absolute left-1/2 top-0 h-px w-12 -translate-x-1/2 bg-[#C8A45D]" />

                  {/* aria-hidden: the timer's label already announces it */}
                  <div
                    aria-hidden="true"
                    className="font-serif text-4xl tabular-nums text-[#F6E7D8] sm:text-5xl md:text-6xl"
                  >
                    {value === null ? "––" : String(value).padStart(2, "0")}
                  </div>

                  <div className="mt-2 font-sans text-[9px] uppercase tracking-[0.3em] text-[#C8A45D] sm:text-[10px]">
                    {item.label}
                  </div>

                  <div className="absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2 bg-[#C8A45D]" />
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <div className="flex items-center justify-center gap-3">
            <Sparkles size={13} className="text-[#C8A45D]" strokeWidth={1} />

            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F6E7D8]/80 sm:text-xs sm:tracking-[0.4em]">
              02 December 2026 · 7:00 PM
            </span>

            <Sparkles size={13} className="text-[#C8A45D]" strokeWidth={1} />
          </div>

          <p className="mt-3 font-serif text-sm italic text-[#F6E7D8]/75">
            Begusarai to Gorakhpur · India
          </p>
        </motion.div>
      </div>
    </section>
  );
}