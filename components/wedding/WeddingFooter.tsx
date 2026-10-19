// "use client";

// import { motion } from "framer-motion";
// import { Heart, Sparkles } from "lucide-react";

// const petals = [
//   { left: "6%", delay: 0, duration: 9, rotate: 25 },
//   { left: "14%", delay: 2, duration: 12, rotate: -20 },
//   { left: "23%", delay: 4, duration: 10, rotate: 35 },
//   { left: "32%", delay: 1, duration: 13, rotate: -30 },
//   { left: "43%", delay: 5, duration: 11, rotate: 20 },
//   { left: "54%", delay: 3, duration: 14, rotate: -25 },
//   { left: "64%", delay: 6, duration: 10, rotate: 30 },
//   { left: "73%", delay: 2, duration: 12, rotate: -15 },
//   { left: "83%", delay: 4, duration: 11, rotate: 25 },
//   { left: "93%", delay: 1, duration: 13, rotate: -30 },
// ];

// export default function WeddingFooter() {
//   return (
//     <footer className="relative min-h-[85vh] overflow-hidden bg-[#722536] px-6 py-24 text-[#f8f3ea] sm:px-10">
//       {/* Background glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8a45d]/10 blur-[100px]" />

//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{
//             duration: 45,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c8a45d]/20"
//         />

//         <motion.div
//           animate={{ rotate: -360 }}
//           transition={{
//             duration: 30,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#c8a45d]/20"
//         />

//         <motion.div
//           animate={{
//             scale: [1, 1.08, 1],
//             opacity: [0.15, 0.3, 0.15],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//           }}
//           className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8a45d]/10 blur-3xl"
//         />
//       </div>

//       {/* Floating petals */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {petals.map((petal, index) => (
//           <motion.span
//             key={index}
//             initial={{
//               y: "110vh",
//               rotate: petal.rotate,
//               opacity: 0,
//             }}
//             animate={{
//               y: "-20vh",
//               rotate: petal.rotate + 360,
//               opacity: [0, 0.8, 0.8, 0],
//               x: [0, 20, -20, 10, 0],
//             }}
//             transition={{
//               duration: petal.duration,
//               delay: petal.delay,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute h-2 w-4 rounded-full bg-[#c8a45d]/50"
//             style={{
//               left: petal.left,
//             }}
//           />
//         ))}
//       </div>

//       {/* Decorative corners */}
//       <div className="absolute left-6 top-6 h-20 w-20 border-l border-t border-[#c8a45d]/40 sm:left-10 sm:top-10" />

//       <div className="absolute right-6 top-6 h-20 w-20 border-r border-t border-[#c8a45d]/40 sm:right-10 sm:top-10" />

//       <div className="absolute bottom-6 left-6 h-20 w-20 border-b border-l border-[#c8a45d]/40 sm:bottom-10 sm:left-10" />

//       <div className="absolute bottom-6 right-6 h-20 w-20 border-b border-r border-[#c8a45d]/40 sm:bottom-10 sm:right-10" />

//       {/* Content */}
//       <div className="relative mx-auto flex min-h-[65vh] max-w-5xl flex-col items-center justify-center text-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.8,
//             type: "spring",
//           }}
//         >
//           <Sparkles
//             size={20}
//             className="mx-auto mb-6 text-[#c8a45d]"
//           />

//           <p className="font-sans text-xs uppercase tracking-[0.4em] text-[#c8a45d]">
//             And so the journey begins
//           </p>
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 1,
//             delay: 0.2,
//           }}
//           className="mt-6 font-serif text-6xl leading-[0.9] sm:text-7xl md:text-8xl lg:text-9xl"
//         >
//           Forever
//           <span className="block italic text-[#c8a45d]">
//             Starts Here
//           </span>
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, scale: 0 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.7,
//             delay: 0.5,
//             type: "spring",
//           }}
//           className="my-10 flex items-center gap-5"
//         >
//           <span className="h-px w-16 bg-[#c8a45d]/50 sm:w-24" />

//           <Heart
//             size={22}
//             className="fill-[#c8a45d] text-[#c8a45d]"
//           />

//           <span className="h-px w-16 bg-[#c8a45d]/50 sm:w-24" />
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.7,
//             delay: 0.7,
//           }}
//           className="font-sans text-sm tracking-wide text-[#f8f3ea]/70 sm:text-base"
//         >
//          02-Dec-2026
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.7,
//             delay: 0.9,
//           }}
//           className="mt-5"
//         >
//           <p className="font-serif text-3xl sm:text-4xl">
//            Govind
//             <span className="mx-2 text-[#c8a45d]">&</span>{" "}
//            Nishtha
//           </p>
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.8,
//             delay: 1.1,
//           }}
//           className="mt-8 max-w-md font-serif text-lg italic text-[#f8f3ea]/60"
//         >
//           "With all our hearts, we cannot wait to celebrate
//           this beautiful beginning with you."
//         </motion.p>
//       </div>

//       {/* Bottom */}
//       <div className="absolute bottom-6 left-1/2 w-full -translate-x-1/2 px-8 sm:bottom-10">
//         <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 border-t border-[#c8a45d]/20 pt-5 sm:flex-row">
//           <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#f8f3ea]/40">
//             Govind & Nishtha
//           </p>

//           <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#f8f3ea]/40">
//             Made with love
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }




"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const petals = [
  { left: "6%", delay: 0, duration: 9, rotate: 25 },
  { left: "14%", delay: 2, duration: 12, rotate: -20 },
  { left: "23%", delay: 4, duration: 10, rotate: 35 },
  { left: "32%", delay: 1, duration: 13, rotate: -30 },
  { left: "43%", delay: 5, duration: 11, rotate: 20 },
  { left: "54%", delay: 3, duration: 14, rotate: -25 },
  { left: "64%", delay: 6, duration: 10, rotate: 30 },
  { left: "73%", delay: 2, duration: 12, rotate: -15 },
  { left: "83%", delay: 4, duration: 11, rotate: 25 },
  { left: "93%", delay: 1, duration: 13, rotate: -30 },
];

export default function WeddingFooter() {
  const reduce = useReducedMotion();

  return (
    <footer className="relative flex min-h-[85svh] flex-col overflow-hidden bg-[#722536] px-6 pb-8 pt-24 text-[#F8F3EA] sm:px-10 sm:pb-10">
      {/* Background glow and rings */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A45D]/10 blur-[100px]" />

        <motion.div
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C8A45D]/20"
        />

        <motion.div
          animate={reduce ? undefined : { rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#C8A45D]/20"
        />

        <motion.div
          animate={
            reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A45D]/10 blur-3xl"
        />
      </div>

      {/* Floating petals — off for reduced-motion users */}
      {!reduce && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {petals.map((petal, index) => (
            <motion.span
              key={index}
              initial={{ y: "110vh", rotate: petal.rotate, opacity: 0 }}
              animate={{
                y: "-20vh",
                rotate: petal.rotate + 360,
                opacity: [0, 0.8, 0.8, 0],
                x: [0, 20, -20, 10, 0],
              }}
              transition={{
                duration: petal.duration,
                delay: petal.delay,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-2 w-4 rounded-full bg-[#C8A45D]/50 will-change-transform"
              style={{ left: petal.left }}
            />
          ))}
        </div>
      )}

      {/* Decorative corners */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-6 h-20 w-20 border-l border-t border-[#C8A45D]/40 sm:left-10 sm:top-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-6 h-20 w-20 border-r border-t border-[#C8A45D]/40 sm:right-10 sm:top-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-6 h-20 w-20 border-b border-l border-[#C8A45D]/40 sm:bottom-10 sm:left-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 right-6 h-20 w-20 border-b border-r border-[#C8A45D]/40 sm:bottom-10 sm:right-10"
      />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center py-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <Sparkles
            size={20}
            aria-hidden="true"
            className="mx-auto mb-6 text-[#C8A45D]"
          />

          <p className="font-sans text-xs uppercase tracking-[0.4em] text-[#C8A45D]">
            And so the journey begins
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 font-serif text-5xl leading-[0.95] sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Forever
          <span className="block italic text-[#C8A45D]">Starts Here</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
          aria-hidden="true"
          className="my-10 flex items-center gap-5"
        >
          <span className="h-px w-16 bg-[#C8A45D]/50 sm:w-24" />
          <Heart size={22} className="fill-[#C8A45D] text-[#C8A45D]" />
          <span className="h-px w-16 bg-[#C8A45D]/50 sm:w-24" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="font-sans text-sm tracking-[0.2em] text-[#F8F3EA]/75 sm:text-base"
        >
          02 December 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-5 font-serif text-3xl sm:text-4xl"
        >
          Govind
          <span className="mx-2 text-[#C8A45D]">&amp;</span>
          Nishtha
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 max-w-md font-serif text-lg italic text-[#F8F3EA]/75"
        >
          &ldquo;With all our hearts, we cannot wait to celebrate this
          beautiful beginning with you.&rdquo;
        </motion.p>
      </div>

      {/* Bottom bar — part of the normal flow, so it never overlaps the content */}
      <div className="relative mx-auto mt-10 w-full max-w-5xl px-2 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#C8A45D]/20 pt-5 sm:flex-row">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#F8F3EA]/60">
            Govind &amp; Nishtha · 2026
          </p>

          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#F8F3EA]/60">
            Made with love
          </p>
        </div>
      </div>
    </footer>
  );
}