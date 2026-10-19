// // "use client";

// // import { motion } from "framer-motion";
// // import {
// //   ArrowUpRight,
// //   CalendarDays,
// //   Clock3,
// //   Heart,
// //   MapPin,
// // } from "lucide-react";

// // const events = [
// //   {
// //     number: "01",
// //     symbol: "✦",
// //     title: "Mehendi",
// //     subtitle: "An evening of colours",
// //     date: "12 February 2027",
// //     time: "5:00 PM onwards",
// //     venue: "The Garden Hall",
// //     description:
// //       "Let the celebrations begin with beautiful mehendi, music, laughter and the people we love.",
// //   },
// //   {
// //     number: "02",
// //     symbol: "❋",
// //     title: "Haldi",
// //     subtitle: "A little sunshine & love",
// //     date: "13 February 2027",
// //     time: "11:00 AM onwards",
// //     venue: "The Grand Palace",
// //     description:
// //       "A joyful morning filled with turmeric, laughter, blessings and beautiful memories.",
// //   },
// //   {
// //     number: "03",
// //     symbol: "♡",
// //     title: "Wedding",
// //     subtitle: "The beginning of forever",
// //     date: "14 February 2027",
// //     time: "7:00 PM onwards",
// //     venue: "The Grand Palace",
// //     description:
// //       "With our families beside us, we invite you to witness the moment we begin our forever.",
// //   },
// //   {
// //     number: "04",
// //     symbol: "✧",
// //     title: "Reception",
// //     subtitle: "Dinner, dancing & celebrations",
// //     date: "15 February 2027",
// //     time: "7:00 PM onwards",
// //     venue: "The Grand Palace",
// //     description:
// //       "One more evening of laughter, music, delicious food and memories together.",
// //   },
// // ];

// // export default function WeddingEvents() {
// //   return (
// //     <section
// //       id="events"
// //       className="relative overflow-hidden bg-[#FBEFE5] px-5 py-24 sm:px-8 sm:py-32"
// //     >
// //       {/* =====================================================
// //           BACKGROUND
// //       ====================================================== */}

// //       <div className="pointer-events-none absolute inset-0">
// //         <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C8A45D]/8 blur-3xl" />

// //         <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-[#722536]/5 blur-3xl" />

// //         <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#E8B7A5]/20 blur-3xl" />
// //       </div>

// //       {/* Decorative frame */}

// //       <div className="pointer-events-none absolute inset-4 border border-[#C8A45D]/20 sm:inset-7" />

// //       {/* =====================================================
// //           HEADER
// //       ====================================================== */}

// //       <div className="relative z-10 mx-auto max-w-6xl">
// //         <motion.div
// //           initial={{ opacity: 0, y: 25 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.3 }}
// //           transition={{ duration: 0.8 }}
// //           className="mb-16 text-center sm:mb-20"
// //         >
// //           <div className="mb-5 flex items-center justify-center gap-3">
// //             <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />

// //             <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#722536] sm:text-xs sm:tracking-[0.45em]">
// //               The Celebrations
// //             </span>

// //             <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />
// //           </div>

// //           <h2 className="font-serif text-4xl leading-tight text-[#722536] sm:text-5xl md:text-6xl">
// //             Days Filled With
// //             <br />
// //             <span className="italic">Love & Celebration</span>
// //           </h2>

// //           <p className="mx-auto mt-5 max-w-xl font-serif text-sm leading-7 text-[#3B2925]/65 sm:text-base">
// //             From the first swirl of mehendi to the final dance, we would love
// //             to have you with us for every beautiful moment.
// //           </p>
// //         </motion.div>

// //         {/* =====================================================
// //             DESKTOP TIMELINE
// //         ====================================================== */}

// //         <div className="relative hidden lg:block">
// //           {/* Central timeline */}

// //           <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#C8A45D]/35" />

// //           {/* Gold center ornament */}

// //           <div className="absolute left-1/2 top-0 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C8A45D] bg-[#FBEFE5]">
// //             <Heart
// //               size={15}
// //               className="fill-[#722536]/10 text-[#722536]"
// //               strokeWidth={1}
// //             />
// //           </div>

// //           <div className="space-y-24">
// //             {events.map((event, index) => {
// //               const isLeft = index % 2 === 0;

// //               return (
// //                 <motion.div
// //                   key={event.number}
// //                   initial={{
// //                     opacity: 0,
// //                     x: isLeft ? -50 : 50,
// //                   }}
// //                   whileInView={{
// //                     opacity: 1,
// //                     x: 0,
// //                   }}
// //                   viewport={{
// //                     once: true,
// //                     amount: 0.25,
// //                   }}
// //                   transition={{
// //                     duration: 0.8,
// //                     delay: index * 0.1,
// //                   }}
// //                   className="relative grid grid-cols-2"
// //                 >
// //                   {/* LEFT SIDE */}

// //                   <div
// //                     className={`flex ${
// //                       isLeft
// //                         ? "justify-end pr-16"
// //                         : "justify-start pl-16"
// //                     }`}
// //                   >
// //                     {isLeft && (
// //                       <EventContent
// //                         event={event}
// //                         align="right"
// //                       />
// //                     )}
// //                   </div>

// //                   {/* RIGHT SIDE */}

// //                   <div
// //                     className={`flex ${
// //                       !isLeft
// //                         ? "justify-start pl-16"
// //                         : "justify-end pr-16"
// //                     }`}
// //                   >
// //                     {!isLeft && (
// //                       <EventContent
// //                         event={event}
// //                         align="left"
// //                       />
// //                     )}
// //                   </div>

// //                   {/* CENTER NUMBER */}

// //                   <div className="absolute left-1/2 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C8A45D] bg-[#FBEFE5] shadow-[0_0_0_8px_rgba(251,239,229,0.8)]">
// //                     <span className="font-serif text-sm text-[#722536]">
// //                       {event.number}
// //                     </span>
// //                   </div>

// //                   {/* Decorative symbol */}

// //                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-12 text-[#C8A45D]/70">
// //                     {event.symbol}
// //                   </div>
// //                 </motion.div>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* =====================================================
// //             MOBILE / TABLET TIMELINE
// //         ====================================================== */}

// //         <div className="relative lg:hidden">
// //           {/* Vertical line */}

// //           <div className="absolute left-[18px] top-4 bottom-4 w-px bg-[#C8A45D]/40" />

// //           <div className="space-y-10">
// //             {events.map((event, index) => (
// //               <motion.div
// //                 key={event.number}
// //                 initial={{
// //                   opacity: 0,
// //                   x: 30,
// //                 }}
// //                 whileInView={{
// //                   opacity: 1,
// //                   x: 0,
// //                 }}
// //                 viewport={{
// //                   once: true,
// //                   amount: 0.2,
// //                 }}
// //                 transition={{
// //                   duration: 0.7,
// //                   delay: index * 0.1,
// //                 }}
// //                 className="relative pl-12"
// //               >
// //                 {/* Timeline dot */}

// //                 <div className="absolute left-0 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A45D] bg-[#FBEFE5]">
// //                   <span className="font-serif text-[10px] text-[#722536]">
// //                     {event.number}
// //                   </span>
// //                 </div>

// //                 {/* Card */}

// //                 <div className="relative overflow-hidden border border-[#C8A45D]/30 bg-[#F6E7D8]/70 p-6 shadow-[0_12px_40px_rgba(114,37,54,0.06)]">
// //                   {/* Card ornament */}

// //                   <div className="absolute right-4 top-4 text-xl text-[#C8A45D]/50">
// //                     {event.symbol}
// //                   </div>

// //                   <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C8A45D]">
// //                     {event.number} · Celebration
// //                   </span>

// //                   <h3 className="mt-2 font-serif text-3xl text-[#722536]">
// //                     {event.title}
// //                   </h3>

// //                   <p className="mt-1 font-serif text-sm italic text-[#3B2925]/60">
// //                     {event.subtitle}
// //                   </p>

// //                   <div className="my-5 h-px bg-[#C8A45D]/25" />

// //                   <div className="space-y-3">
// //                     <EventDetail
// //                       icon={<CalendarDays size={15} />}
// //                       text={event.date}
// //                     />

// //                     <EventDetail
// //                       icon={<Clock3 size={15} />}
// //                       text={event.time}
// //                     />

// //                     <EventDetail
// //                       icon={<MapPin size={15} />}
// //                       text={event.venue}
// //                     />
// //                   </div>

// //                   <p className="mt-5 font-serif text-sm leading-6 text-[#3B2925]/65">
// //                     {event.description}
// //                   </p>

// //                   <a
// //                     href="https://www.google.com/maps/search/?api=1&query=The+Grand+Palace+New+Delhi"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="mt-6 inline-flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#722536]"
// //                   >
// //                     View Location
// //                     <ArrowUpRight size={14} strokeWidth={1.5} />
// //                   </a>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* =====================================================
// //             BOTTOM ORNAMENT
// //         ====================================================== */}

// //         <motion.div
// //           initial={{
// //             opacity: 0,
// //             scaleX: 0,
// //           }}
// //           whileInView={{
// //             opacity: 1,
// //             scaleX: 1,
// //           }}
// //           viewport={{
// //             once: true,
// //           }}
// //           transition={{
// //             duration: 1,
// //           }}
// //           className="mx-auto mt-24 flex max-w-xs items-center justify-center gap-4 sm:mt-32"
// //         >
// //           <span className="h-px flex-1 bg-[#C8A45D]/40" />

// //           <Heart
// //             size={14}
// //             className="fill-[#C8A45D]/10 text-[#C8A45D]"
// //             strokeWidth={1}
// //           />

// //           <span className="h-px flex-1 bg-[#C8A45D]/40" />
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* =========================================================
// //    EVENT CONTENT
// // ========================================================= */

// // function EventContent({
// //   event,
// //   align,
// // }: {
// //   event: (typeof events)[number];
// //   align: "left" | "right";
// // }) {
// //   const textAlign =
// //     align === "right" ? "text-right" : "text-left";

// //   return (
// //     <div className={`max-w-md ${textAlign}`}>
// //       <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C8A45D]">
// //         {event.number} · Celebration
// //       </span>

// //       <h3 className="mt-2 font-serif text-4xl text-[#722536]">
// //         {event.title}
// //       </h3>

// //       <p className="mt-1 font-serif text-sm italic text-[#3B2925]/60">
// //         {event.subtitle}
// //       </p>

// //       <div
// //         className={`my-5 flex items-center gap-3 ${
// //           align === "right" ? "justify-end" : "justify-start"
// //         }`}
// //       >
// //         <span className="h-px w-12 bg-[#C8A45D]/40" />

// //         <span className="text-lg text-[#C8A45D]">
// //           {event.symbol}
// //         </span>

// //         <span className="h-px w-12 bg-[#C8A45D]/40" />
// //       </div>

// //       <div className="space-y-2">
// //         <EventDetail
// //           icon={<CalendarDays size={14} />}
// //           text={event.date}
// //           align={align}
// //         />

// //         <EventDetail
// //           icon={<Clock3 size={14} />}
// //           text={event.time}
// //           align={align}
// //         />

// //         <EventDetail
// //           icon={<MapPin size={14} />}
// //           text={event.venue}
// //           align={align}
// //         />
// //       </div>

// //       <p className="mt-5 font-serif text-sm leading-6 text-[#3B2925]/65">
// //         {event.description}
// //       </p>

// //       <a
// //         href="https://www.google.com/maps/search/?api=1&query=The+Grand+Palace+New+Delhi"
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className={`mt-5 inline-flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#722536] ${
// //           align === "right" ? "flex-row-reverse" : ""
// //         }`}
// //       >
// //         View Location
// //         <ArrowUpRight size={14} strokeWidth={1.5} />
// //       </a>
// //     </div>
// //   );
// // }

// // /* =========================================================
// //    DETAIL
// // ========================================================= */

// // function EventDetail({
// //   icon,
// //   text,
// //   align = "left",
// // }: {
// //   icon: React.ReactNode;
// //   text: string;
// //   align?: "left" | "right";
// // }) {
// //   return (
// //     <div
// //       className={`flex items-center gap-2 font-sans text-xs text-[#3B2925]/65 ${
// //         align === "right" ? "justify-end" : ""
// //       }`}
// //     >
// //       <span className="text-[#C8A45D]">
// //         {icon}
// //       </span>

// //       <span>{text}</span>
// //     </div>
// //   );
// // }






// "use client";

// import { motion, useReducedMotion } from "framer-motion";
// import {
//   ArrowUpRight,
//   CalendarDays,
//   Clock3,
//   Heart,
//   MapPin,
//   Sparkles,
// } from "lucide-react";

// const VENUE_URL =
//   "https://www.google.com/maps/place/Hotel+Bobina,+Gorakhpur/@26.7613103,83.362008,17z/data=!4m9!3m8!1s0x3991444245a7d497:0xdb6353070ec29ee5!5m2!4m1!1i2!8m2!3d26.7613103!4d83.3645829!16s%2Fg%2F1hd_6qv34?entry=ttu";

// const events = [
//   {
//     number: "01",
//     symbol: "✦",
//     title: "Mehendi",
//     subtitle: "An evening of colours",
//     date: "01-Dec-2026",
//     time: "11:00 AM",
//     venue: "Govind's Residence",
//     description:
//       "Mehendi, music, laughter and beautiful moments shared with the people we love.",
//     confirmed: true,
//   },
//   {
//     number: "02",
//     symbol: "❋",
//     title: "Haldi",
//     subtitle: "A little sunshine & love",
//     date: "To be announced",
//     time: "To be announced",
//     venue: "To be announced",
//     description:
//       "A joyful celebration filled with blessings, laughter and unforgettable memories.",
//     confirmed: true,
//   },
//   {
//     number: "03",
//     symbol: "♡",
//     title: "Wedding",
//     subtitle: "The beginning of forever",
//     date: "02 December 2026",
//     time: "",
//     venue: "Hotel Bobina, Gorakhpur",
//     description:
//       "The Barat will depart from Govind's address to Nishtha's address",
//     confirmed: true,
//   },
//   {
//     number: "04",
//     symbol: "✧",
//     title: "Reception",
//     subtitle: "An evening of togetherness",
//     date: "04-Dec-2026",
//     time: "5:00 PM",
//     venue: "Govind's Residence",
//     description:
//       "An opportunity to come together, celebrate our new beginning and make lasting memories.",
//     confirmed: true,
//   },
// ];

// type WeddingEvent = (typeof events)[number];
// type Alignment = "left" | "right";

// export default function WeddingEvents() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <section
//       id="events"
//       className="relative isolate overflow-hidden bg-[#FBF5ED] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
//     >
//       {/* Background decoration */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
//       >
//         <div className="absolute left-1/2 top-[20%] h-80 w-80 -translate-x-1/2 rounded-full bg-[#C8A45D]/10 blur-3xl sm:h-[34rem] sm:w-[34rem]" />

//         <div className="absolute -left-36 bottom-20 h-72 w-72 rounded-full bg-[#722536]/5 blur-3xl" />

//         <div className="absolute -right-36 top-20 h-72 w-72 rounded-full bg-[#E8B7A5]/20 blur-3xl" />
//       </div>

//       {/* Fine decorative frame */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-3 border border-[#C8A45D]/20 sm:inset-6 lg:inset-8"
//       />

//       <div className="relative mx-auto max-w-6xl">
//         {/* Section introduction */}
//         <motion.header
//           initial={reduceMotion ? false : { opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto mb-14 max-w-2xl text-center sm:mb-20"
//         >
//           <div className="mb-5 flex items-center justify-center gap-3">
//             <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />

//             <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#722536] sm:text-xs sm:tracking-[0.4em]">
//               Save the Date
//             </span>

//             <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />
//           </div>

//           <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#722536] sm:text-5xl md:text-6xl">
//             Days Filled With
//             <span className="mt-1 block italic">
//               Love & Celebration
//             </span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#3B2925]/70 sm:text-base sm:leading-8">
//             Every moment becomes more beautiful when shared
//             with the people we love. Join us as Govind and
//             Nishtha begin their journey together.
//           </p>

//           <div className="mt-6 flex items-center justify-center gap-2 text-[#C8A45D]">
//             <Sparkles size={14} strokeWidth={1.3} />
//             <Heart size={15} strokeWidth={1.2} />
//             <Sparkles size={14} strokeWidth={1.3} />
//           </div>
//         </motion.header>

//         {/* Desktop timeline */}
//         <div className="relative hidden lg:block">
//           <div
//             aria-hidden="true"
//             className="absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-[#C8A45D]/35"
//           />

//           <div className="space-y-14 xl:space-y-16">
//             {events.map((event, index) => {
//               const isLeft = index % 2 === 0;

//               return (
//                 <motion.article
//                   key={event.number}
//                   initial={
//                     reduceMotion
//                       ? false
//                       : {
//                           opacity: 0,
//                           x: isLeft ? -22 : 22,
//                         }
//                   }
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, amount: 0.2 }}
//                   transition={{
//                     duration: 0.65,
//                     delay: index * 0.08,
//                   }}
//                   className="relative grid min-h-64 grid-cols-2 items-center"
//                 >
//                   {/* Left column */}
//                   <div
//                     className={`flex ${
//                       isLeft
//                         ? "justify-end pr-16 xl:pr-24"
//                         : "justify-start pl-16 xl:pl-24"
//                     }`}
//                   >
//                     {isLeft && (
//                       <EventCard
//                         event={event}
//                         align="right"
//                       />
//                     )}
//                   </div>

//                   {/* Right column */}
//                   <div
//                     className={`flex ${
//                       !isLeft
//                         ? "justify-start pl-16 xl:pl-24"
//                         : "justify-end pr-16 xl:pr-24"
//                     }`}
//                   >
//                     {!isLeft && (
//                       <EventCard
//                         event={event}
//                         align="left"
//                       />
//                     )}
//                   </div>

//                   {/* Timeline marker */}
//                   <div
//                     className={`absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-[#FBF5ED] shadow-[0_0_0_8px_rgba(251,245,237,0.9)] ${
//                       event.confirmed
//                         ? "border-[#C8A45D] shadow-[0_0_0_8px_rgba(200,164,93,0.08)]"
//                         : "border-[#C8A45D]/70"
//                     }`}
//                   >
//                     {event.confirmed ? (
//                       <Heart
//                         size={18}
//                         className="fill-[#722536]/10 text-[#722536]"
//                         strokeWidth={1.3}
//                       />
//                     ) : (
//                       <span className="font-serif text-sm text-[#722536]">
//                         {event.number}
//                       </span>
//                     )}
//                   </div>
//                 </motion.article>
//               );
//             })}
//           </div>
//         </div>

//         {/* Mobile and tablet timeline */}
//         <div className="relative lg:hidden">
//           <div
//             aria-hidden="true"
//             className="absolute bottom-5 left-[17px] top-5 w-px bg-[#C8A45D]/40"
//           />

//           <div className="space-y-7 sm:space-y-9">
//             {events.map((event, index) => (
//               <motion.article
//                 key={event.number}
//                 initial={
//                   reduceMotion ? false : { opacity: 0, y: 16 }
//                 }
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.15 }}
//                 transition={{
//                   duration: 0.55,
//                   delay: index * 0.06,
//                 }}
//                 className="relative pl-11 sm:pl-14"
//               >
//                 {/* Number marker */}
//                 <div
//                   className={`absolute left-0 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border bg-[#FBF5ED] ${
//                     event.confirmed
//                       ? "border-[#C8A45D]"
//                       : "border-[#C8A45D]/70"
//                   }`}
//                 >
//                   {event.confirmed ? (
//                     <Heart
//                       size={13}
//                       className="fill-[#722536]/10 text-[#722536]"
//                       strokeWidth={1.3}
//                     />
//                   ) : (
//                     <span className="font-serif text-[10px] text-[#722536]">
//                       {event.number}
//                     </span>
//                   )}
//                 </div>

//                 <EventCard event={event} align="left" />
//               </motion.article>
//             ))}
//           </div>
//         </div>

//         {/* Closing ornament */}
//         <motion.div
//           initial={reduceMotion ? false : { opacity: 0, scaleX: 0.7 }}
//           whileInView={{ opacity: 1, scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto mt-16 flex max-w-xs items-center justify-center gap-4 sm:mt-24"
//         >
//           <span className="h-px flex-1 bg-[#C8A45D]/40" />
//           <Heart
//             size={15}
//             className="text-[#C8A45D]"
//             strokeWidth={1.2}
//           />
//           <span className="h-px flex-1 bg-[#C8A45D]/40" />
//         </motion.div>

//         <p className="mt-5 text-center font-serif text-sm italic text-[#80695B]">
//           With love, Govind & Nishtha
//         </p>
//       </div>
//     </section>
//   );
// }

// function EventCard({
//   event,
//   align,
// }: {
//   event: WeddingEvent;
//   align: Alignment;
// }) {
//   const isWedding = event.confirmed;
//   const desktopAlignment = align === "right" ? "lg:text-right" : "text-left";

//   return (
//     <div
//       className={`group relative w-full max-w-md overflow-hidden border p-5 transition duration-300 hover:-translate-y-1 sm:p-7 ${
//         isWedding
//           ? "border-[#C8A45D]/80 bg-gradient-to-br from-[#F6E7D8] via-[#FBF5ED] to-[#F6E7D8] shadow-[0_16px_45px_rgba(114,37,54,0.10)]"
//           : "border-[#C8A45D]/30 bg-white/55 shadow-[0_10px_35px_rgba(59,41,37,0.045)] hover:shadow-[0_18px_45px_rgba(59,41,37,0.09)]"
//       } ${desktopAlignment}`}
//     >
//       {/* Double gold border on the wedding card */}
//       {isWedding && (
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-1.5 border border-[#C8A45D]/25"
//         />
//       )}

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-[#C8A45D]/15 to-transparent"
//       />

//       <div className="relative">
//         <div
//           className={`flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] sm:text-[10px] ${
//             align === "right" ? "lg:justify-end" : ""
//           }`}
//         >
//           <span className="text-[#C8A45D]">{event.number}</span>
//           <span className="h-px w-5 bg-[#C8A45D]/50" />
//           <span className="text-[#80695B]">
//             {isWedding ? "The Main Celebration" : "Wedding Celebration"}
//           </span>
//         </div>

//         <div
//           className={`mt-4 flex items-start justify-between gap-3 ${
//             align === "right" ? "lg:flex-row-reverse" : ""
//           }`}
//         >
//           <div>
//             <h3
//               className={`font-serif leading-tight text-[#722536] ${
//                 isWedding
//                   ? "text-4xl sm:text-5xl"
//                   : "text-3xl sm:text-4xl"
//               }`}
//             >
//               {event.title}
//             </h3>

//             <p className="mt-2 font-serif text-sm italic text-[#80695B] sm:text-base">
//               {event.subtitle}
//             </p>
//           </div>

//           <span className="shrink-0 pt-1 text-xl text-[#C8A45D]/80">
//             {event.symbol}
//           </span>
//         </div>

//         <div className="my-5 h-px bg-[#C8A45D]/30" />

//         {/* Wedding date spotlight */}
//         {isWedding ? (
//           <div
//             className={`mb-5 flex items-start gap-3 ${
//               align === "right" ? "lg:flex-row-reverse" : ""
//             }`}
//           >
//             <span className="mt-1 shrink-0 text-[#C8A45D]">
//               <CalendarDays size={18} strokeWidth={1.5} />
//             </span>

//             <div>
//               <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#80695B]">
//                 Save our date
//               </p>

//               <p className="mt-1 font-serif text-2xl leading-tight text-[#722536] sm:text-3xl">
//                 02 December
//               </p>

//               <p className="mt-1 text-xs tracking-[0.12em] text-[#80695B]">
//                 WEDNESDAY · 2026
//               </p>
//             </div>
//           </div>
//         ) : (
//           <EventDetail
//             icon={<CalendarDays size={15} />}
//             text={event.date}
//             align={align}
//           />
//         )}

//         <div className="space-y-3">
//           {isWedding && (
//             <EventDetail
//               icon={<CalendarDays size={15} />}
//               text={event.date}
//               align={align}
//             />
//           )}

//           <EventDetail
//             icon={<Clock3 size={15} />}
//             text={event.time}
//             align={align}
//           />

//           <EventDetail
//             icon={<MapPin size={15} />}
//             text={event.venue}
//             align={align}
//           />
//         </div>

//         <p className="mt-5 text-sm leading-7 text-[#3B2925]/70">
//           {event.description}
//         </p>

//         {isWedding && (
//           <a
//             href={VENUE_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`mt-5 inline-flex min-h-10 items-center gap-2 border-b border-[#C8A45D]/60 pb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#722536] transition-colors hover:border-[#722536] ${
//               align === "right" ? "lg:flex-row-reverse" : ""
//             }`}
//           >
//             View venue directions
//             <ArrowUpRight size={14} strokeWidth={1.5} />
//           </a>
//         )}

//         {!isWedding && (
//           <p className="mt-5 text-[10px] uppercase tracking-[0.12em] text-[#80695B]">
//             Details to be announced
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// function EventDetail({
//   icon,
//   text,
//   align = "left",
// }: {
//   icon: React.ReactNode;
//   text: string;
//   align?: Alignment;
// }) {
//   return (
//     <div
//       className={`flex items-start gap-2.5 text-xs leading-5 text-[#3B2925]/75 sm:text-sm ${
//         align === "right" ? "lg:flex-row-reverse" : ""
//       }`}
//     >
//       <span className="mt-0.5 shrink-0 text-[#C8A45D]">
//         {icon}
//       </span>
//       <span>{text}</span>
//     </div>
//   );
// }



"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Heart,
  MapPin,
  Sparkles,
} from "lucide-react";

/* =========================================================
   LINKS
========================================================= */

const VENUE_URL =
  "https://www.google.com/maps/place/Hotel+Bobina,+Gorakhpur/@26.7613103,83.362008,17z/data=!4m9!3m8!1s0x3991444245a7d497:0xdb6353070ec29ee5!5m2!4m1!1i2!8m2!3d26.7613103!4d83.3645829!16s%2Fg%2F1hd_6qv34";

const GROOM_URL = "https://maps.app.goo.gl/NURfWPf185nCiNFs7";

/* =========================================================
   EVENTS
   - Leave out date / time / venue to hide that row.
   - An event with no details shows "Details to be announced".
========================================================= */

type WeddingEvent = {
  number: string;
  symbol: string;
  title: string;
  subtitle: string;
  date?: string;
  time?: string;
  venue?: string;
  description: string;
  mapUrl?: string;
  /** Marks the main wedding card (gets the featured styling) */
  featured?: boolean;
  /** Big date shown on the featured card */
  spotlight?: { day: string; meta: string };
};

const events: WeddingEvent[] = [
  {
    number: "01",
    symbol: "✦",
    title: "Mehendi",
    subtitle: "A morning of colours",
    date: "01 December 2026",
    time: "11:00 AM",
    venue: "Govind's Residence, Begusarai",
    description:
      "Mehendi, music, laughter and beautiful moments shared with the people we love.",
    mapUrl: GROOM_URL,
  },
  {
    number: "02",
    symbol: "❋",
    title: "Haldi",
    subtitle: "A little sunshine & love",
    description:
      "A joyful celebration filled with blessings, laughter and unforgettable memories.",
  },
  {
    number: "03",
    symbol: "♡",
    title: "Wedding",
    subtitle: "The beginning of forever",
    venue: "Hotel Bobina, Gorakhpur",
    description:
      "The baraat departs from Govind's home in Begusarai and arrives at Hotel Bobina, Gorakhpur.",
    mapUrl: VENUE_URL,
    featured: true,
    spotlight: { day: "02 December", meta: "WEDNESDAY · 2026" },
  },
  {
    number: "04",
    symbol: "✧",
    title: "Reception",
    subtitle: "An evening of togetherness",
    date: "04 December 2026",
    time: "5:00 PM",
    venue: "Govind's Residence, Begusarai",
    description:
      "An opportunity to come together, celebrate our new beginning and make lasting memories.",
    mapUrl: GROOM_URL,
  },
];

type Alignment = "left" | "right";

export default function WeddingEvents() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="events"
      className="relative isolate overflow-hidden bg-[#FBF5ED] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[20%] h-80 w-80 -translate-x-1/2 rounded-full bg-[#C8A45D]/10 blur-3xl sm:h-[34rem] sm:w-[34rem]" />
        <div className="absolute -left-36 bottom-20 h-72 w-72 rounded-full bg-[#722536]/5 blur-3xl" />
        <div className="absolute -right-36 top-20 h-72 w-72 rounded-full bg-[#E8B7A5]/20 blur-3xl" />
      </div>

      {/* Fine decorative frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 border border-[#C8A45D]/20 sm:inset-6 lg:inset-8"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section introduction */}
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-20"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#722536] sm:text-xs sm:tracking-[0.4em]">
              Save the Date
            </span>
            <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#722536] sm:text-5xl md:text-6xl">
            Days Filled With
            <span className="mt-1 block italic">Love &amp; Celebration</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#3B2925]/70 sm:text-base sm:leading-8">
            Every moment becomes more beautiful when shared with the people we
            love. Join us as Govind and Nishtha begin their journey together.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-[#C8A45D]">
            <Sparkles size={14} strokeWidth={1.3} />
            <Heart size={15} strokeWidth={1.2} />
            <Sparkles size={14} strokeWidth={1.3} />
          </div>
        </motion.header>

        {/* Desktop timeline */}
        <div className="relative hidden lg:block">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-[#C8A45D]/35"
          />

          <div className="space-y-14 xl:space-y-16">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={event.number}
                  initial={
                    reduceMotion ? false : { opacity: 0, x: isLeft ? -22 : 22 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  className="relative grid min-h-64 grid-cols-2 items-center"
                >
                  <div
                    className={`flex ${
                      isLeft
                        ? "justify-end pr-16 xl:pr-24"
                        : "justify-start pl-16 xl:pl-24"
                    }`}
                  >
                    {isLeft && <EventCard event={event} align="right" />}
                  </div>

                  <div
                    className={`flex ${
                      !isLeft
                        ? "justify-start pl-16 xl:pl-24"
                        : "justify-end pr-16 xl:pr-24"
                    }`}
                  >
                    {!isLeft && <EventCard event={event} align="left" />}
                  </div>

                  {/* Timeline marker */}
                  <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C8A45D] bg-[#FBF5ED] shadow-[0_0_0_8px_rgba(251,245,237,0.9)]">
                    {event.featured ? (
                      <Heart
                        size={18}
                        className="fill-[#722536]/10 text-[#722536]"
                        strokeWidth={1.3}
                      />
                    ) : (
                      <span className="font-serif text-sm text-[#722536]">
                        {event.number}
                      </span>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Mobile and tablet timeline */}
        <div className="relative lg:hidden">
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-[17px] top-5 w-px bg-[#C8A45D]/40"
          />

          <div className="space-y-7 sm:space-y-9">
            {events.map((event, index) => (
              <motion.article
                key={event.number}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="relative pl-11 sm:pl-14"
              >
                <div className="absolute left-0 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A45D] bg-[#FBF5ED]">
                  {event.featured ? (
                    <Heart
                      size={13}
                      className="fill-[#722536]/10 text-[#722536]"
                      strokeWidth={1.3}
                    />
                  ) : (
                    <span className="font-serif text-[10px] text-[#722536]">
                      {event.number}
                    </span>
                  )}
                </div>

                <EventCard event={event} align="left" />
              </motion.article>
            ))}
          </div>
        </div>

        {/* Closing ornament */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 flex max-w-xs items-center justify-center gap-4 sm:mt-24"
        >
          <span className="h-px flex-1 bg-[#C8A45D]/40" />
          <Heart size={15} className="text-[#C8A45D]" strokeWidth={1.2} />
          <span className="h-px flex-1 bg-[#C8A45D]/40" />
        </motion.div>

        <p className="mt-5 text-center font-serif text-sm italic text-[#80695B]">
          With love, Govind &amp; Nishtha
        </p>
      </div>
    </section>
  );
}

function EventCard({
  event,
  align,
}: {
  event: WeddingEvent;
  align: Alignment;
}) {
  const featured = !!event.featured;
  const hasDetails = !!(event.date || event.time || event.venue || event.spotlight);
  const rowAlign = align === "right" ? "lg:flex-row-reverse" : "";

  return (
    <div
      className={`group relative w-full max-w-md overflow-hidden border p-5 transition duration-300 hover:-translate-y-1 sm:p-7 ${
        featured
          ? "border-[#C8A45D]/80 bg-gradient-to-br from-[#F6E7D8] via-[#FBF5ED] to-[#F6E7D8] shadow-[0_16px_45px_rgba(114,37,54,0.10)]"
          : "border-[#C8A45D]/30 bg-white/55 shadow-[0_10px_35px_rgba(59,41,37,0.045)] hover:shadow-[0_18px_45px_rgba(59,41,37,0.09)]"
      } ${align === "right" ? "text-left lg:text-right" : "text-left"}`}
    >
      {featured && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-1.5 border border-[#C8A45D]/25"
        />
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-[#C8A45D]/15 to-transparent"
      />

      <div className="relative">
        <div
          className={`flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] sm:text-[10px] ${
            align === "right" ? "lg:justify-end" : ""
          }`}
        >
          <span className="text-[#C8A45D]">{event.number}</span>
          <span className="h-px w-5 bg-[#C8A45D]/50" />
          <span className="text-[#80695B]">
            {featured ? "The Main Celebration" : "Wedding Celebration"}
          </span>
        </div>

        <div className={`mt-4 flex items-start justify-between gap-3 ${rowAlign}`}>
          <div>
            <h3
              className={`font-serif leading-tight text-[#722536] ${
                featured ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
              }`}
            >
              {event.title}
            </h3>

            <p className="mt-2 font-serif text-sm italic text-[#80695B] sm:text-base">
              {event.subtitle}
            </p>
          </div>

          <span className="shrink-0 pt-1 text-xl text-[#C8A45D]/80">
            {event.symbol}
          </span>
        </div>

        <div className="my-5 h-px bg-[#C8A45D]/30" />

        {/* Featured date spotlight */}
        {event.spotlight && (
          <div className={`mb-5 flex items-start gap-3 ${rowAlign}`}>
            <span className="mt-1 shrink-0 text-[#C8A45D]">
              <CalendarDays size={18} strokeWidth={1.5} />
            </span>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#80695B]">
                Save our date
              </p>
              <p className="mt-1 font-serif text-2xl leading-tight text-[#722536] sm:text-3xl">
                {event.spotlight.day}
              </p>
              <p className="mt-1 text-xs tracking-[0.12em] text-[#80695B]">
                {event.spotlight.meta}
              </p>
            </div>
          </div>
        )}

        {/* Detail rows — only the ones that exist */}
        {(event.date || event.time || event.venue) && (
          <div className="space-y-3">
            {event.date && !event.spotlight && (
              <EventDetail
                icon={<CalendarDays size={15} />}
                text={event.date}
                align={align}
              />
            )}
            {event.time && (
              <EventDetail
                icon={<Clock3 size={15} />}
                text={event.time}
                align={align}
              />
            )}
            {event.venue && (
              <EventDetail
                icon={<MapPin size={15} />}
                text={event.venue}
                align={align}
              />
            )}
          </div>
        )}

        <p className="mt-5 text-sm leading-7 text-[#3B2925]/70">
          {event.description}
        </p>

        {event.mapUrl && (
          <a
            href={event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-5 inline-flex min-h-10 items-center gap-2 border-b border-[#C8A45D]/60 pb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#722536] transition-colors hover:border-[#722536] ${rowAlign}`}
          >
            View location
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        )}

        {!hasDetails && (
          <p className="mt-5 text-[10px] uppercase tracking-[0.12em] text-[#80695B]">
            Details to be announced
          </p>
        )}
      </div>
    </div>
  );
}

function EventDetail({
  icon,
  text,
  align = "left",
}: {
  icon: React.ReactNode;
  text: string;
  align?: Alignment;
}) {
  return (
    <div
      className={`flex items-start gap-2.5 text-xs leading-5 text-[#3B2925]/75 sm:text-sm ${
        align === "right" ? "lg:flex-row-reverse" : ""
      }`}
    >
      <span className="mt-0.5 shrink-0 text-[#C8A45D]">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
