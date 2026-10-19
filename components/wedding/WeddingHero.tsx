// "use client";

// import { motion } from "framer-motion";
// // import ganesh from "./assets/ganesh.png";
// import { ChevronDown, Heart, Sparkles } from "lucide-react";
// // import FloatingPetals from "./FloatingPetals";

// const petals = [
//   { left: "4%", delay: 0, duration: 12, size: 7, rotate: 15 },
//   { left: "11%", delay: 2, duration: 15, size: 5, rotate: 40 },
//   { left: "19%", delay: 4, duration: 11, size: 8, rotate: 70 },
//   { left: "29%", delay: 1, duration: 14, size: 6, rotate: 25 },
//   { left: "39%", delay: 5, duration: 13, size: 5, rotate: 80 },
//   { left: "50%", delay: 3, duration: 16, size: 7, rotate: 45 },
//   { left: "61%", delay: 6, duration: 12, size: 6, rotate: 15 },
//   { left: "71%", delay: 2, duration: 14, size: 8, rotate: 60 },
//   { left: "81%", delay: 4, duration: 13, size: 5, rotate: 30 },
//   { left: "91%", delay: 1, duration: 15, size: 7, rotate: 75 },
// ];

// export default function WeddingHero() {
//   return (
//     <section
//       id="home"
     
//      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FBF5ED] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
//     //   className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#F6E7D8] px-5 py-24 sm:px-8"
//     >
      
//       {/* =====================================================
//           BACKGROUND GLOW
//       ====================================================== */}

//       <div className="pointer-events-none absolute inset-0">
//         <motion.div
//           className="absolute left-1/2 top-[42%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8a45d]/10 blur-3xl sm:h-[600px] sm:w-[600px]"
//           animate={{
//             scale: [1, 1.08, 1],
//             opacity: [0.45, 0.65, 0.45],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         <motion.div
//           className="absolute left-[-120px] top-[10%] h-[280px] w-[280px] rounded-full bg-[#722536]/10 blur-3xl"
//           animate={{
//             x: [0, 30, 0],
//             y: [0, 20, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         <motion.div
//           className="absolute bottom-[-100px] right-[-80px] h-[300px] w-[300px] rounded-full bg-[#c8a45d]/10 blur-3xl"
//           animate={{
//             x: [0, -25, 0],
//             y: [0, -20, 0],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </div>

//       {/* =====================================================
//           OUTER ORNAMENTAL FRAME
//       ====================================================== */}

//       <div className="pointer-events-none absolute inset-3 border border-[#c8a45d]/30 sm:inset-5" />

//       <div className="pointer-events-none absolute inset-5 border border-[#722536]/10 sm:inset-8" />

//       {/* Corner ornaments */}

//       <div className="pointer-events-none absolute left-6 top-6 h-16 w-16 border-l border-t border-[#c8a45d]/70 sm:left-10 sm:top-10 sm:h-24 sm:w-24" />

//       <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 border-r border-t border-[#c8a45d]/70 sm:right-10 sm:top-10 sm:h-24 sm:w-24" />

//       <div className="pointer-events-none absolute bottom-6 left-6 h-16 w-16 border-b border-l border-[#c8a45d]/70 sm:bottom-10 sm:left-10 sm:h-24 sm:w-24" />

//       <div className="pointer-events-none absolute bottom-6 right-6 h-16 w-16 border-b border-r border-[#c8a45d]/70 sm:bottom-10 sm:right-10 sm:h-24 sm:w-24" />

//       {/* =====================================================
//           FLOATING PETALS
//       ====================================================== */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {petals.map((petal, index) => (
//           <motion.span
//             key={index}
//             className="absolute top-[-20px] rounded-full bg-[#722536]/25"
//             style={{
//               left: petal.left,
//               width: petal.size,
//               height: petal.size * 1.6,
//               rotate: petal.rotate,
//             }}
//             animate={{
//               y: ["0vh", "110vh"],
//               x: [0, 25, -20, 10, 0],
//               rotate: [petal.rotate, petal.rotate + 90, petal.rotate + 180],
//               opacity: [0, 0.7, 0.7, 0],
//             }}
//             transition={{
//               duration: petal.duration,
//               delay: petal.delay,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}

//       <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
//         {/* Small invitation label */}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="mb-7 flex items-center gap-3 sm:mb-9"
//         >
//           <span className="h-px w-8 bg-[#c8a45d] sm:w-12" />

//           <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#722536] sm:text-xs sm:tracking-[0.45em]">
//             Wedding Invitation
//           </span>

//           <span className="h-px w-8 bg-[#c8a45d] sm:w-12" />
//         </motion.div>

//         {/* Together with families */}

//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.45 }}
//           className="mb-3 font-serif text-sm italic text-[#3b2925]/70 sm:text-base"
//         >
//             <p>
//             वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव
//             सर्वकार्येषु सर्वदा॥
//           </p>
//         </motion.div>

//         {/* =====================================================
//             MANDALA
//         ====================================================== */}
//        <div className="relative mb-5 flex flex-col items-center sm:mb-7">
//   <div className="relative h-24 w-24 sm:h-32 sm:w-32">
//     <div className="absolute inset-2 rounded-full bg-[#C8A45D]/20 blur-2xl" />

//     <motion.img
//       src="/ganesh.png"
//       alt="Lord Ganesha"
//       width={128}
//       height={128}
//       className="relative h-full w-full object-contain"
//       animate={{ y: [0, -3, 0] }}
//       transition={{
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     />
//   </div>

//   <p className="mt-2 font-serif text-xs tracking-wide text-[#722536] sm:text-sm">
//     ॥ श्री गणेशाय नमः ॥
//   </p>

//   <div className="mt-3 flex items-center gap-3">
//     <span className="h-px w-8 bg-[#C8A45D]/70 sm:w-12" />
//     <span className="text-xs text-[#C8A45D]">✦</span>
//     <span className="h-px w-8 bg-[#C8A45D]/70 sm:w-12" />
//   </div>
// </div>
//         <div className="relative mb-5 flex h-24 w-24 items-center justify-center sm:mb-7 sm:h-28 sm:w-28">
//           {/* Outer rotating ring */}

//           <motion.div
//             className="absolute inset-0 rounded-full border border-[#c8a45d]/50"
//             animate={{ rotate: 360 }}
//             transition={{
//               duration: 30,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />

//           {/* Dashed ring */}

//           <motion.div
//             className="absolute inset-3 rounded-full border border-dashed border-[#722536]/30"
//             animate={{ rotate: -360 }}
//             transition={{
//               duration: 24,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />

//           {/* Decorative diamonds */}

//           <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#c8a45d]" />

//           <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#c8a45d]" />

//           <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-[#c8a45d]" />

//           <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-[#c8a45d]" />

//           {/* Inner circle */}

//           <motion.div
//             className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#c8a45d]/60 bg-[#f8f3ea] shadow-[0_0_30px_rgba(200,164,93,0.15)] sm:h-16 sm:w-16"
//             animate={{
//               scale: [1, 1.04, 1],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             <Heart
//               size={22}
//               strokeWidth={1}
//               className="fill-[#722536]/10 text-[#722536]"
//             />
//           </motion.div>
//         </div>

//         {/* =====================================================
//             COUPLE NAMES
//         ====================================================== */}

//         <div className="flex flex-col items-center">
//           {/* Aarav */}

//           <motion.h1
//             initial={{
//               opacity: 0,
//               y: 40,
//               filter: "blur(8px)",
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               filter: "blur(0px)",
//             }}
//             transition={{
//               duration: 1.2,
//               delay: 0.7,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="font-serif text-[clamp(3.5rem,10vw,7.5rem)] font-normal leading-[0.95] tracking-[-0.045em] text-[#722536]"
//             // className="font-serif text-[4.2rem] font-medium leading-[0.85] tracking-[-0.04em] text-[#722536] sm:text-8xl md:text-9xl"
//           >
//             Govind
//           </motion.h1>

//           {/* Heart separator */}

//           <motion.div
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{
//               duration: 0.8,
//               delay: 1.35,
//               type: "spring",
//               stiffness: 120,
//             }}
//             className="my-5 flex items-center gap-4 sm:my-6 sm:gap-6"
//           >
//             <span className="h-px w-12 bg-[#c8a45d]/60 sm:w-20" />

//             <motion.div
//               animate={{
//                 scale: [1, 1.15, 1],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <Heart
//                 size={22}
//                 className="fill-[#c8a45d] text-[#c8a45d]"
//                 strokeWidth={1.2}
//               />
//             </motion.div>

//             <span className="h-px w-12 bg-[#c8a45d]/60 sm:w-20" />
//           </motion.div>

//           {/* Ananya */}

//           <motion.h1
//             initial={{
//               opacity: 0,
//               y: 40,
//               filter: "blur(8px)",
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               filter: "blur(0px)",
//             }}
//             transition={{
//               duration: 1.2,
//               delay: 1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="font-serif text-[4.2rem] font-medium leading-[0.85] tracking-[-0.04em] text-[#722536] sm:text-8xl md:text-9xl"
//           >
//             Nishtha
//           </motion.h1>
//         </div>

//         {/* =====================================================
//             INVITATION MESSAGE
//         ====================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 1,
//             delay: 1.7,
//           }}
//           className="mt-8 max-w-md sm:mt-10"
//         >
//           <p className="font-serif text-base leading-relaxed text-[#3b2925]/75 sm:text-lg">
//             Invite you to celebrate
//             <br />
//             <span className="text-[#722536]">
//               the beginning of their forever.
//             </span>
//           </p>
//         </motion.div>

//         {/* =====================================================
//             DATE
//         ====================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 1,
//             delay: 2,
//           }}
//           className="mt-8 flex flex-col items-center sm:mt-10"
//         >
//           <div className="flex items-center gap-4">
//             <span className="h-px w-10 bg-[#c8a45d] sm:w-16" />

//             <span className="font-sans text-xs font-semibold tracking-[0.3em] text-[#3b2925] sm:text-sm sm:tracking-[0.4em]">
//               02 · 12 · 2026
//             </span>

//             <span className="h-px w-10 bg-[#c8a45d] sm:w-16" />
//           </div>

//           <div className="mt-3 flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.35em] text-[#722536]/70 sm:text-xs">
//             <Sparkles size={12} strokeWidth={1.5} />
//             Gorakhpur· India
//             <Sparkles size={12} strokeWidth={1.5} />
//           </div>
//         </motion.div>
//       </div>

//       {/* =====================================================
//           SCROLL INDICATOR
//       ====================================================== */}

//       <motion.a
//         href="#story"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           duration: 1,
//           delay: 2.7,
//         }}
//         className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[#722536]/60 sm:bottom-9"
//         aria-label="Scroll to our story"
//       >
//         <span className="font-sans text-[9px] uppercase tracking-[0.35em]">
//           Discover
//         </span>

//         <motion.div
//           animate={{
//             y: [0, 6, 0],
//           }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <ChevronDown size={18} strokeWidth={1.2} />
//         </motion.div>
//       </motion.a>
//     </section>
//   );
// }



"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Heart, Sparkles } from "lucide-react";

const petals = [
  { left: "4%", delay: 0, duration: 12, size: 7, rotate: 15 },
  { left: "11%", delay: 2, duration: 15, size: 5, rotate: 40 },
  { left: "19%", delay: 4, duration: 11, size: 8, rotate: 70 },
  { left: "29%", delay: 1, duration: 14, size: 6, rotate: 25 },
  { left: "39%", delay: 5, duration: 13, size: 5, rotate: 80 },
  { left: "50%", delay: 3, duration: 16, size: 7, rotate: 45 },
  { left: "61%", delay: 6, duration: 12, size: 6, rotate: 15 },
  { left: "71%", delay: 2, duration: 14, size: 8, rotate: 60 },
  { left: "81%", delay: 4, duration: 13, size: 5, rotate: 30 },
  { left: "91%", delay: 1, duration: 15, size: 7, rotate: 75 },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function WeddingHero() {
  const reduce = useReducedMotion();

  // Entrance animation helper — skipped for reduced-motion users
  const enter = (delay: number, y = 20) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay },
        };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FBF5ED] px-5 pb-24 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12"
    >
      {/* Background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-[42%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A45D]/10 blur-3xl sm:h-[600px] sm:w-[600px]"
          animate={
            reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.45, 0.65, 0.45] }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute left-[-120px] top-[10%] h-[280px] w-[280px] rounded-full bg-[#722536]/10 blur-3xl"
          animate={reduce ? undefined : { x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-[-100px] right-[-80px] h-[300px] w-[300px] rounded-full bg-[#C8A45D]/10 blur-3xl"
          animate={reduce ? undefined : { x: [0, -25, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Ornamental frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 border border-[#C8A45D]/30 sm:inset-5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-5 border border-[#722536]/10 sm:inset-8"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-6 h-16 w-16 border-l border-t border-[#C8A45D]/70 sm:left-10 sm:top-10 sm:h-24 sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-6 h-16 w-16 border-r border-t border-[#C8A45D]/70 sm:right-10 sm:top-10 sm:h-24 sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-6 h-16 w-16 border-b border-l border-[#C8A45D]/70 sm:bottom-10 sm:left-10 sm:h-24 sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 right-6 h-16 w-16 border-b border-r border-[#C8A45D]/70 sm:bottom-10 sm:right-10 sm:h-24 sm:w-24"
      />

      {/* Floating petals — off for reduced-motion users */}
      {!reduce && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {petals.map((petal, index) => (
            <motion.span
              key={index}
              className="absolute top-[-20px] rounded-full bg-[#722536]/25"
              style={{
                left: petal.left,
                width: petal.size,
                height: petal.size * 1.6,
                rotate: petal.rotate,
              }}
              animate={{
                y: ["0vh", "110vh"],
                x: [0, 25, -20, 10, 0],
                rotate: [petal.rotate, petal.rotate + 90, petal.rotate + 180],
                opacity: [0, 0.7, 0.7, 0],
              }}
              transition={{
                duration: petal.duration,
                delay: petal.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        {/* Label */}
        <motion.div {...enter(0.2)} className="mb-6 flex items-center gap-3 sm:mb-8">
          <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#722536] sm:text-xs sm:tracking-[0.45em]">
            Wedding Invitation
          </span>
          <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />
        </motion.div>

        {/* Ganesh shloka */}
        <motion.p
          {...enter(0.4, 15)}
          lang="sa"
          className="mb-5 max-w-md font-serif text-sm leading-7 text-[#3B2925]/75 sm:mb-6 sm:text-base"
        >
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
          <br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
        </motion.p>

        {/* Ganesha */}
        <div className="relative mb-6 flex flex-col items-center sm:mb-8">
          <div className="relative h-24 w-24 sm:h-32 sm:w-32">
            <div className="absolute inset-2 rounded-full bg-[#C8A45D]/20 blur-2xl" />

            <motion.img
              src="/ganesh.png"
              alt="Lord Ganesha"
              width={128}
              height={128}
              decoding="async"
              draggable={false}
              className="relative h-full w-full select-none object-contain"
              animate={reduce ? undefined : { y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <p
            lang="sa"
            className="mt-2 font-serif text-xs tracking-wide text-[#722536] sm:text-sm"
          >
            ॥ श्री गणेशाय नमः ॥
          </p>

          <div className="mt-3 flex items-center gap-3" aria-hidden="true">
            <span className="h-px w-8 bg-[#C8A45D]/70 sm:w-12" />
            <span className="text-xs text-[#C8A45D]">✦</span>
            <span className="h-px w-8 bg-[#C8A45D]/70 sm:w-12" />
          </div>
        </div>

        {/* Together with families */}
        <motion.p
          {...enter(0.6, 15)}
          className="mb-4 font-serif text-sm italic text-[#3B2925]/70 sm:text-base"
        >
          Together with their families
        </motion.p>

        {/* Couple names — one h1, two lines */}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.8, ease }}
          className="flex flex-col items-center font-serif text-[clamp(3.5rem,11vw,8rem)] font-medium leading-[0.95] tracking-[-0.03em] text-[#722536]"
        >
          <span>Govind</span>

          <span
            aria-hidden="true"
            className="my-4 flex items-center gap-4 sm:my-5 sm:gap-6"
          >
            <span className="h-px w-12 bg-[#C8A45D]/60 sm:w-20" />

            <motion.span
              className="flex"
              animate={reduce ? undefined : { scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart
                size={22}
                className="fill-[#C8A45D] text-[#C8A45D]"
                strokeWidth={1.2}
              />
            </motion.span>

            <span className="h-px w-12 bg-[#C8A45D]/60 sm:w-20" />
          </span>

          <span className="sr-only"> and </span>
          <span>Nishtha</span>
        </motion.h1>

        {/* Invitation message */}
        <motion.p
          {...enter(1.7)}
          className="mt-8 max-w-md font-serif text-base leading-relaxed text-[#3B2925]/75 sm:mt-10 sm:text-lg"
        >
          invite you to celebrate
          <br />
          <span className="text-[#722536]">the beginning of their forever.</span>
        </motion.p>

        {/* Date */}
        <motion.div {...enter(2)} className="mt-8 flex flex-col items-center sm:mt-10">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#C8A45D] sm:w-16" />
            <span className="font-sans text-xs font-semibold tracking-[0.3em] text-[#3B2925] sm:text-sm sm:tracking-[0.4em]">
              02 · 12 · 2026
            </span>
            <span className="h-px w-10 bg-[#C8A45D] sm:w-16" />
          </div>

          <div className="mt-3 flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.3em] text-[#722536]/80 sm:text-xs sm:tracking-[0.35em]">
            <Sparkles size={12} strokeWidth={1.5} aria-hidden="true" />
            Hotel Bobina · Gorakhpur
            <Sparkles size={12} strokeWidth={1.5} aria-hidden="true" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on short screens so it never overlaps the date */}
      <motion.a
        href="#story"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.7 }}
        className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[#722536]/70 sm:bottom-9 [@media(max-height:720px)]:hidden"
        aria-label="Scroll to our story"
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.35em]">
          Discover
        </span>

        <motion.span
          className="flex"
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} strokeWidth={1.2} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}