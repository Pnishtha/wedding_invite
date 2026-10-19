// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   CalendarDays,
//   Check,
//   ChevronRight,
//   Clock3,
//   Copy,
//   Heart,
//   Home,
//   MapPin,
//   Navigation,
//   Sparkles,
// } from "lucide-react";

// /* =========================================================
//    VENUE DATA
// ========================================================= */

// const venueAddress = "Hotel Bobina, Gorakhpur, Uttar Pradesh, India";

// const mapUrl =
//   "https://www.google.com/maps/place/Hotel+Bobina,+Gorakhpur/@26.7613103,83.362008,17z/data=!4m9!3m8!1s0x3991444245a7d497:0xdb6353070ec29ee5!5m2!4m1!1i2!8m2!3d26.7613103!4d83.3645829!16s%2Fg%2F1hd_6qv34";

// const groomAddress = "Jagatpura , Begusarai, Bihar, India";
// Const groomAddressurl="https://maps.app.goo.gl/Q1G96bFqUfavjK3j7";

// const brideAddress = "Hotel Bobina, Gorakhpur, Uttar Pradesh, India";

// const baraatRouteUrl =
//   "https://www.google.com/maps/dir/?api=1&origin=25.3983085,86.0458556&destination=26.7613103,83.3645829&travelmode=driving";

// export default function Venue() {
//   const [copied, setCopied] = useState<string | null>(null);

//   const handleCopy = async (text: string, type: string) => {
//     try {
//       await navigator.clipboard.writeText(text);

//       setCopied(type);

//       setTimeout(() => {
//         setCopied(null);
//       }, 2200);
//     } catch (error) {
//       console.error("Failed to copy:", error);
//     }
//   };

//   return (
//     <section
//       id="venue"
//       className="relative overflow-hidden bg-[#FBEFE5] px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
//     >
//       <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C8A45D]/10 blur-3xl" />

//       <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-[#E8B7A5]/10 blur-3xl" />

//       <div className="pointer-events-none absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-[#722536]/5 blur-3xl" />

//       {/* Decorative corners */}

//       <div className="pointer-events-none absolute left-5 top-5 h-20 w-20 border-l border-t border-[#C8A45D]/40 sm:left-10 sm:top-10" />

//       <div className="pointer-events-none absolute bottom-5 right-5 h-20 w-20 border-b border-r border-[#C8A45D]/40 sm:bottom-10 sm:right-10" />

//       <div className="relative mx-auto max-w-6xl">
//         <motion.div
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
//             duration: 0.8,
//           }}
//           className="mb-16 text-center"
//         >
//           <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A45D]">
//             The Celebration Awaits
//           </p>

//           <h2 className="font-serif text-4xl text-[#722536] sm:text-5xl lg:text-6xl">
//             The Wedding Venue
//           </h2>

//           <div className="mx-auto mt-5 flex items-center justify-center gap-3">
//             <span className="h-px w-12 bg-[#C8A45D]/50" />

//             <Heart size={14} fill="currentColor" className="text-[#C8A45D]" />

//             <span className="h-px w-12 bg-[#C8A45D]/50" />
//           </div>

//           {/* <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#3B2925]/65 sm:text-base">
//             From the moment the baraat begins to the moment
//             we take phere, we would love to celebrate
//             every beautiful moment with you.
//           </p> */}
//         </motion.div>

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.2,
//           }}
//           transition={{
//             duration: 0.9,
//           }}
//           className="mb-20"
//         >
//           <div className="mb-10 text-center">
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#F6E7D8] px-4 py-2">
//               <Sparkles size={14} className="text-[#C8A45D]" />

//               <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#722536]">
//                 The Baraat Journey
//               </span>
//             </div>

//             <h3 className="font-serif text-3xl text-[#722536] sm:text-4xl">
//               From Our Home
//               <span className="mx-2 italic text-[#C8A45D]">to</span>
//               Yours
//             </h3>

//             <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#3B2925]/60">
//               The celebrations begin as the baraat makes its way towards the
//               bride's family.
//             </p>
//           </div>

//           <div className="relative rounded-[2rem] border border-[#C8A45D]/25 bg-[#F6E7D8]/70 p-6 shadow-[0_25px_70px_rgba(114,37,54,0.08)] backdrop-blur-sm sm:p-10">
//             {/* Desktop horizontal route */}

//             <div className="hidden md:block">
//               <div className="grid grid-cols-[1fr_180px_1fr] items-center gap-6">
//                 {/* Groom location */}

//                 <LocationCard
//                   icon={<Home size={22} />}
//                   label="Baraat Starts From"
//                   title="Begusarai"
//                   address={groomAddress,grooms}
//                   accent="left"
//                 />

//                 {/* Center journey */}

//                 <div className="relative flex flex-col items-center">
//                   <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#C8A45D]/40 bg-[#722536] text-[#F6E7D8] shadow-lg">
//                     <span className="text-xl">🥁</span>
//                   </div>

//                   <p className="font-serif text-lg text-[#722536]">Baraat</p>

//                   <div className="mt-1 flex items-center gap-2">
//                     <Clock3 size={13} className="text-[#C8A45D]" />

//                     <span className="text-xs text-[#722536] bg-amber-200">
//                       11:00 PM (NIGHT of 1-Dec)
//                     </span>
//                   </div>
//                 </div>

//                 {/* Bride location */}

//                 <LocationCard
//                   icon={<Heart size={22} />}
//                   label="Baraat Arrives At"
//                   title="Hotel Bobina"
//                   address={brideAddress}
//                   accent="right"
//                 />
//               </div>

//               {/* Animated route */}

//               <div className="relative mx-auto mt-8 max-w-3xl">
//                 <div className="h-px w-full bg-[#C8A45D]/30" />

//                 <motion.div
//                   animate={{
//                     left: ["0%", "100%"],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#C8A45D] shadow-[0_0_15px_rgba(200,164,93,0.8)]"
//                 />
//               </div>
//             </div>

//             {/* =================================================
//                 MOBILE VERTICAL ROUTE
//             ================================================= */}

//             <div className="md:hidden">
//               {/* Groom */}

//               <LocationCard
//                 icon={<Home size={21} />}
//                 label="Baraat Starts From"
//                 title="Govind's Residence"
//                 address={groomAddress}
//                 accent="left"
//               />

//               {/* Journey */}

//               <div className="relative my-7 ml-6">
//                 <div className="absolute bottom-0 left-0 top-0 w-px bg-[#C8A45D]/35" />

//                 <motion.div
//                   animate={{
//                     y: [0, 55, 110],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute left-[-5px] top-0 h-3 w-3 rounded-full bg-[#C8A45D] shadow-[0_0_12px_rgba(200,164,93,0.8)]"
//                 />

//                 <div className="ml-7 flex items-center gap-3">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#722536] text-xl">
//                     🥁
//                   </div>

//                   <div>
//                     <p className="font-serif text-lg text-[#722536]">Baraat</p>

//                     <div className="mt-1 flex items-center gap-2">
//                       <Clock3 size={13} className="text-[#C8A45D]" />

//                       <span className="text-xs text-[#3B2925]/60">
//                         Departure · 4:00 PM
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Bride */}

//               <LocationCard
//                 icon={<Heart size={21} />}
//                 label="Baraat Arrives At"
//                 title="Nishtha's Residence"
//                 address={brideAddress}
//                 accent="right"
//               />
//             </div>

//             {/* =================================================
//                 JOURNEY BUTTONS
//             ================================================= */}

//             <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
//               <CopyButton
//                 copied={copied === "bride"}
//                 onClick={() => handleCopy(brideAddress, "bride")}
//                 label="Copy Bride's Address"
//               />

//               <motion.a
//                 href={baraatRouteUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{
//                   y: -3,
//                 }}
//                 whileTap={{
//                   scale: 0.98,
//                 }}
//                 className="inline-flex items-center justify-center gap-3 rounded-full bg-[#722536] px-7 py-3.5 text-amber-100 text-sm font-medium  shadow-lg shadow-[#722536]/20 transition-colors hover:bg-[#5f1e2d]"
//               >
//                 <Navigation size={17} />
//                 View Baraat Route
//                 <ArrowUpRight size={16} />
//               </motion.a>
//             </div>
//           </div>
//         </motion.div>

//         <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -35,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.25,
//             }}
//             transition={{
//               duration: 0.9,
//             }}
//             className="relative mx-auto w-full max-w-xl"
//           >
//             <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#C8A45D]/30 bg-[#F6E7D8] shadow-[0_25px_70px_rgba(114,37,54,0.12)]">
//               {/* Map lines */}

//               <div className="absolute left-[-10%] top-[20%] h-px w-[120%] rotate-12 bg-[#C8A45D]/25" />

//               <div className="absolute left-[-10%] top-[48%] h-px w-[120%] -rotate-6 bg-[#C8A45D]/20" />

//               <div className="absolute left-[-10%] top-[72%] h-px w-[120%] rotate-6 bg-[#C8A45D]/20" />

//               <div className="absolute left-[20%] top-[-10%] h-[120%] w-px rotate-[18deg] bg-[#C8A45D]/20" />

//               <div className="absolute left-[58%] top-[-10%] h-[120%] w-px -rotate-[25deg] bg-[#C8A45D]/20" />

//               <div className="absolute left-[82%] top-[-10%] h-[120%] w-px rotate-[8deg] bg-[#C8A45D]/20" />

//               <svg
//                 className="absolute inset-0 h-full w-full"
//                 viewBox="0 0 600 450"
//                 fill="none"
//               >
//                 <path
//                   d="M-20 350 C100 280 120 380 220 300 S390 180 620 260"
//                   stroke="#C8A45D"
//                   strokeOpacity="0.22"
//                   strokeWidth="3"
//                 />

//                 <path
//                   d="M40 80 C150 140 190 40 290 110 S470 210 620 100"
//                   stroke="#722536"
//                   strokeOpacity="0.12"
//                   strokeWidth="2"
//                 />

//                 <path
//                   d="M330 -20 C290 100 400 140 350 230 S400 370 500 470"
//                   stroke="#C8A45D"
//                   strokeOpacity="0.18"
//                   strokeWidth="2"
//                 />
//               </svg>

//               <motion.div
//                 animate={{
//                   rotate: 360,
//                 }}
//                 transition={{
//                   duration: 25,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C8A45D]/20"
//               />

//               <motion.div
//                 animate={{
//                   rotate: -360,
//                 }}
//                 transition={{
//                   duration: 18,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#722536]/20"
//               />

//               <motion.div
//                 initial={{
//                   scale: 0,
//                   opacity: 0,
//                 }}
//                 whileInView={{
//                   scale: 1,
//                   opacity: 1,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   delay: 0.4,
//                   type: "spring",
//                   stiffness: 180,
//                 }}
//                 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[65%]"
//               >
//                 <motion.div
//                   animate={{
//                     y: [0, -7, 0],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="relative"
//                 >
//                   <div className="absolute inset-0 rounded-full bg-[#722536]/20 blur-xl" />

//                   <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#FBEFE5] bg-[#722536] shadow-xl">
//                     <MapPin
//                       size={27}
//                       strokeWidth={1.7}
//                       className="text-[#F6E7D8]"
//                     />
//                   </div>
//                 </motion.div>
//               </motion.div>

//               {/* Map label */}

//               <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-[#C8A45D]/30 bg-[#FBEFE5]/90 px-5 py-2 backdrop-blur-sm">
//                 <p className="whitespace-nowrap font-serif text-sm text-[#722536]">
//                   Hotel Bobina
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: 35,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.25,
//             }}
//             transition={{
//               duration: 0.9,
//             }}
//             className="text-center lg:text-left"
//           >
//             <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#F6E7D8] px-4 py-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-[#C8A45D]" />

//               <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#722536]">
//                 Gorakhpur· India
//               </span>
//             </div>

//             <h3 className="font-serif text-4xl leading-tight text-[#722536] sm:text-5xl">
//               Hotel Bobina
//               <br />
//               <span className="italic text-[#C8A45D]"></span>
//             </h3>

//             {/* <p className="mt-5 max-w-lg text-sm leading-7 text-[#3B2925]/65">
//               A timeless setting for a timeless beginning. We would be delighted
//               to have you with us as we celebrate this beautiful chapter with
//               our loved ones.
//             </p> */}

//             {/* =================================================
//                 VENUE DETAILS
//             ================================================= */}

//             <div className="mt-8 space-y-4">
//               <VenueDetail
//                 icon={<MapPin size={18} />}
//                 title="Venue"
//                 value="Hotel Bobina, Gorakhpur"
//               />

//               <VenueDetail
//                 icon={<CalendarDays size={18} />}
//                 title="Wedding Date"
//                 value="02 December 2026"
//               />

//               <VenueDetail
//                 icon={<Clock3 size={18} />}
//                 title="Ceremony"
//                 value="7:00 PM onwards"
//               />
//             </div>

//             {/* =================================================
//                 ADDRESS
//             ================================================= */}

//             <div className="mt-5 rounded-2xl border border-[#C8A45D]/20 bg-[#F6E7D8]/60 p-4">
//               <div className="flex items-start gap-3 text-left">
//                 <MapPin size={18} className="mt-0.5 shrink-0 text-[#722536]" />

//                 <div className="min-w-0">
//                   <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8A45D]">
//                     Full Address
//                   </p>

//                   <p className="mt-1 text-sm leading-6 text-[#3B2925]">
//                     {venueAddress}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:items-start">
//               <CopyButton
//                 copied={copied === "venue"}
//                 onClick={() => handleCopy(venueAddress, "venue")}
//                 label="Copy Venue"
//               />

//               <motion.a
//                 href={mapUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{
//                   y: -3,
//                 }}
//                 whileTap={{
//                   scale: 0.98,
//                 }}
//                 className="inline-flex items-center justify-center gap-3 rounded-full bg-[#722536] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#722536]/20 transition-colors hover:bg-[#5f1e2d]"
//               >
//                 <Navigation size={17} />
//                 Get Directions
//                 <ArrowUpRight size={16} />
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 15,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.7,
//             delay: 0.2,
//           }}
//           className="mt-20 text-center"
//         >
//           <div className="mx-auto flex max-w-md items-center justify-center gap-3">
//             <span className="h-px flex-1 bg-[#C8A45D]/25" />

//             <span className="text-sm text-[#C8A45D]">✦</span>

//             <span className="h-px flex-1 bg-[#C8A45D]/25" />
//           </div>

//           <p className="mt-5 font-serif text-sm italic text-[#722536]/70">
//             “Where two families become one.”
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function LocationCard({
//   icon,
//   label,
//   title,
//   address,
//   accent,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   title: string;
//   address: string;
//   accent: "left" | "right";
// }) {
//   return (
//     <motion.div
//       whileHover={{
//         y: -4,
//       }}
//       transition={{
//         duration: 0.25,
//       }}
//       className="rounded-2xl border border-[#C8A45D]/20 bg-[#FBEFE5]/70 p-5 shadow-sm"
//     >
//       <div className="flex items-start gap-4">
//         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#722536] text-[#F6E7D8]">
//           {icon}
//         </div>

//         <div className="min-w-0">
//           <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C8A45D]">
//             {label}
//           </p>

//           <h4 className="mt-1 font-serif text-xl text-[#722536]">{title}</h4>

//           <p className="mt-1 text-xs leading-5 text-[#3B2925]/60">{address}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function CopyButton({
//   copied,
//   onClick,
//   label,
// }: {
//   copied: boolean;
//   onClick: () => void;
//   label: string;
// }) {
//   return (
//     <motion.button
//       type="button"
//       onClick={onClick}
//       whileHover={{
//         y: -3,
//       }}
//       whileTap={{
//         scale: 0.98,
//       }}
//       className="inline-flex items-center justify-center gap-3 rounded-full border border-[#722536]/20 bg-[#F6E7D8] px-7 py-3.5 text-sm font-medium text-[#722536] shadow-sm transition-colors hover:bg-[#F1DED0]"
//     >
//       {copied ? (
//         <>
//           <Check size={17} />
//           Copied!
//         </>
//       ) : (
//         <>
//           <Copy size={17} />
//           {label}
//         </>
//       )}
//     </motion.button>
//   );
// }

// function VenueDetail({
//   icon,
//   title,
//   value,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   value: string;
// }) {
//   return (
//     <div className="flex items-center gap-4 rounded-2xl border border-[#C8A45D]/20 bg-[#F6E7D8]/70 p-4 text-left">
//       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#722536] text-[#F6E7D8]">
//         {icon}
//       </div>

//       <div>
//         <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8A45D]">
//           {title}
//         </p>

//         <p className="mt-1 text-sm text-[#3B2925]">{value}</p>
//       </div>

//       <ChevronRight size={16} className="ml-auto text-[#C8A45D]/60" />
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Copy,
  Heart,
  Home,
  MapPin,
  Navigation,
  Sparkles,
} from "lucide-react";

/* =========================================================
   VENUE DATA — single source of truth
========================================================= */

const venueName = "Hotel Bobina";

const venueAddress =
  "Hotel Bobina, Gorakhpur, Nepal Road, Hazaripur, Gorakhpur, Uttar Pradesh 273001";

const venueMapUrl =
  "https://www.google.com/maps/place/Hotel+Bobina,+Gorakhpur/@26.7613103,83.362008,17z/data=!4m9!3m8!1s0x3991444245a7d497:0xdb6353070ec29ee5!5m2!4m1!1i2!8m2!3d26.7613103!4d83.3645829!16s%2Fg%2F1hd_6qv34";

const groomAddress = "Jagatpura, Begusarai, Bihar, India";
const groomMapUrl = "https://maps.app.goo.gl/NURfWPf185nCiNFs7";

const baraatRouteUrl =
  "https://www.google.com/maps/dir/?api=1&origin=25.3983085,86.0458556&destination=26.7613103,83.3645829&travelmode=driving";

// Shown on both desktop and mobile — change it here only
const baraatTime = "11:00 PM (Night of 1 Dec)";

// Celebrations held at the groom's home — fill in date/time when confirmed.
// Leave them out and the card shows "Details to follow".
const groomEvents: {
  name: string;
  icon: "mehendi" | "reception";
  date?: string;
  time?: string;
}[] = [
  { name: "Mehendi", icon: "mehendi" },
  { name: "Reception", icon: "reception" },
];

export default function Venue() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2200);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <section
      id="venue"
      className="relative overflow-hidden bg-[#FBEFE5] px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C8A45D]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-[#E8B7A5]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-[#722536]/5 blur-3xl" />

      {/* Decorative corners */}
      <div className="pointer-events-none absolute left-5 top-5 h-20 w-20 border-l border-t border-[#C8A45D]/40 sm:left-10 sm:top-10" />
      <div className="pointer-events-none absolute bottom-5 right-5 h-20 w-20 border-b border-r border-[#C8A45D]/40 sm:bottom-10 sm:right-10" />

      <div className="relative mx-auto max-w-6xl">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A45D]">
            The Celebration Awaits
          </p>

          <h2 className="font-serif text-4xl text-[#722536] sm:text-5xl lg:text-6xl">
            The Wedding Venue
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C8A45D]/50" />
            <Heart size={14} fill="currentColor" className="text-[#C8A45D]" />
            <span className="h-px w-12 bg-[#C8A45D]/50" />
          </div>
        </motion.div>

        {/* ================= BARAAT JOURNEY ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="mb-20"
        >
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#F6E7D8] px-4 py-2">
              <Sparkles size={14} className="text-[#C8A45D]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#722536]">
                The Baraat Journey
              </span>
            </div>

            <h3 className="font-serif text-3xl text-[#722536] sm:text-4xl">
              From Our Home
              <span className="mx-2 italic text-[#C8A45D]">to</span>
              Yours
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#3B2925]/60">
              The celebrations begin as the baraat makes its way towards the
              bride&apos;s family.
            </p>
          </div>

          <div className="relative rounded-[2rem] border border-[#C8A45D]/25 bg-[#F6E7D8]/70 p-6 shadow-[0_25px_70px_rgba(114,37,54,0.08)] backdrop-blur-sm sm:p-10">
            {/* ---------- Desktop horizontal route ---------- */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[1fr_180px_1fr] items-center gap-6">
                <LocationCard
                  icon={<Home size={22} />}
                  label="Baraat Starts From"
                  title="Govind's Home"
                  address={groomAddress}
                  mapHref={groomMapUrl}
                />

                <BaraatBadge />

                <LocationCard
                  icon={<Heart size={22} />}
                  label="Baraat Arrives At"
                  title={venueName}
                  address={venueAddress}
                  mapHref={venueMapUrl}
                />
              </div>

              {/* Animated route */}
              <div className="relative mx-auto mt-8 max-w-3xl">
                <div className="h-px w-full bg-[#C8A45D]/30" />

                <motion.div
                  animate={{ left: ["0%", "100%"] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A45D] shadow-[0_0_15px_rgba(200,164,93,0.8)]"
                />
              </div>
            </div>

            {/* ---------- Mobile vertical route ---------- */}
            <div className="md:hidden">
              <LocationCard
                icon={<Home size={21} />}
                label="Baraat Starts From"
                title="Govind's Home"
                address={groomAddress}
                mapHref={groomMapUrl}
              />

              <div className="relative my-2 ml-6 h-36">
                <div className="absolute bottom-0 left-0 top-0 w-px bg-[#C8A45D]/35" />

                <motion.div
                  animate={{ top: ["0%", "100%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A45D] shadow-[0_0_12px_rgba(200,164,93,0.8)]"
                />

                <div className="absolute inset-y-0 left-7 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#722536] text-xl">
                    🥁
                  </div>

                  <div>
                    <p className="font-serif text-lg text-[#722536]">Baraat</p>

                    <div className="mt-1 flex items-center gap-2">
                      <Clock3 size={13} className="shrink-0 text-[#C8A45D]" />
                      <span className="text-xs text-[#3B2925]/70">
                        {baraatTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <LocationCard
                icon={<Heart size={21} />}
                label="Baraat Arrives At"
                title={venueName}
                address={venueAddress}
                mapHref={venueMapUrl}
              />
            </div>

            {/* Journey buttons */}
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <CopyButton
                copied={copied === "bride"}
                onClick={() => handleCopy(venueAddress, "bride")}
                label="Copy Bride's Address"
              />

              <motion.a
                href={baraatRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#722536] px-7 py-3.5 text-sm font-medium text-[#F6E7D8] shadow-lg shadow-[#722536]/20 transition-colors hover:bg-[#5f1e2d]"
              >
                <Navigation size={17} />
                View Baraat Route
                <ArrowUpRight size={16} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* ================= VENUE ================= */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Map illustration — tapping opens the real map */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <a
              href={venueMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Hotel Bobina in Google Maps"
              className="group relative block aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#C8A45D]/30 bg-[#F6E7D8] shadow-[0_25px_70px_rgba(114,37,54,0.12)] transition-shadow hover:shadow-[0_30px_80px_rgba(114,37,54,0.2)]"
            >
              <div className="absolute left-[-10%] top-[20%] h-px w-[120%] rotate-12 bg-[#C8A45D]/25" />
              <div className="absolute left-[-10%] top-[48%] h-px w-[120%] -rotate-6 bg-[#C8A45D]/20" />
              <div className="absolute left-[-10%] top-[72%] h-px w-[120%] rotate-6 bg-[#C8A45D]/20" />
              <div className="absolute left-[20%] top-[-10%] h-[120%] w-px rotate-[18deg] bg-[#C8A45D]/20" />
              <div className="absolute left-[58%] top-[-10%] h-[120%] w-px -rotate-[25deg] bg-[#C8A45D]/20" />
              <div className="absolute left-[82%] top-[-10%] h-[120%] w-px rotate-[8deg] bg-[#C8A45D]/20" />

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 600 450"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M-20 350 C100 280 120 380 220 300 S390 180 620 260"
                  stroke="#C8A45D"
                  strokeOpacity="0.22"
                  strokeWidth="3"
                />
                <path
                  d="M40 80 C150 140 190 40 290 110 S470 210 620 100"
                  stroke="#722536"
                  strokeOpacity="0.12"
                  strokeWidth="2"
                />
                <path
                  d="M330 -20 C290 100 400 140 350 230 S400 370 500 470"
                  stroke="#C8A45D"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                />
              </svg>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C8A45D]/20"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#722536]/20"
              />

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 180 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[65%]"
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 rounded-full bg-[#722536]/20 blur-xl" />

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#FBEFE5] bg-[#722536] shadow-xl">
                    <MapPin
                      size={27}
                      strokeWidth={1.7}
                      className="text-[#F6E7D8]"
                    />
                  </div>
                </motion.div>
              </motion.div>

              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#FBEFE5]/90 px-5 py-2 backdrop-blur-sm transition-colors group-hover:bg-[#FBEFE5]">
                <p className="whitespace-nowrap font-serif text-sm text-[#722536]">
                  {venueName}
                </p>
                <ArrowUpRight size={14} className="text-[#C8A45D]" />
              </div>
            </a>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#F6E7D8] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8A45D]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#722536]">
                Gorakhpur · India
              </span>
            </div>

            <h3 className="font-serif text-4xl leading-tight text-[#722536] sm:text-5xl">
              {venueName}
            </h3>

            <div className="mt-8 space-y-4">
              <VenueDetail
                icon={<MapPin size={18} />}
                title="Venue"
                value="Hotel Bobina, Gorakhpur"
              />
              <VenueDetail
                icon={<CalendarDays size={18} />}
                title="Wedding Date"
                value="02 December 2026"
              />
              <VenueDetail
                icon={<Clock3 size={18} />}
                title="Ceremony"
                value="7:00 PM onwards"
              />
            </div>

            <div className="mt-5 rounded-2xl border border-[#C8A45D]/20 bg-[#F6E7D8]/60 p-4">
              <div className="flex items-start gap-3 text-left">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#722536]" />

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8A45D]">
                    Full Address
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#3B2925]">
                    {venueAddress}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:items-start">
              <CopyButton
                copied={copied === "venue"}
                onClick={() => handleCopy(venueAddress, "venue")}
                label="Copy Venue"
              />

              <motion.a
                href={venueMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#722536] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#722536]/20 transition-colors hover:bg-[#5f1e2d]"
              >
                <Navigation size={17} />
                Get Directions
                <ArrowUpRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* ================= CELEBRATIONS AT GROOM'S HOME ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="mt-24"
        >
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#F6E7D8] px-4 py-2">
              <Home size={14} className="text-[#C8A45D]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#722536]">
                Begusarai · Bihar
              </span>
            </div>

            <h3 className="font-serif text-3xl text-[#722536] sm:text-4xl">
              Celebrations at
              <span className="ml-2 italic text-[#C8A45D]">Govind&apos;s Home</span>
            </h3>
          </div>

          <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#C8A45D]/25 bg-[#F6E7D8]/70 p-6 shadow-[0_25px_70px_rgba(114,37,54,0.08)] backdrop-blur-sm sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {groomEvents.map((event) => (
                <EventCard key={event.name} {...event} />
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-[#C8A45D]/20 bg-[#FBEFE5]/60 p-4">
              <div className="flex items-start gap-3 text-left">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#722536]" />

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8A45D]">
                    Address
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#3B2925]">
                    {groomAddress}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <CopyButton
                copied={copied === "groom"}
                onClick={() => handleCopy(groomAddress, "groom")}
                label="Copy Address"
              />

              <motion.a
                href={groomMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#722536] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#722536]/20 transition-colors hover:bg-[#5f1e2d]"
              >
                <Navigation size={17} />
                Get Directions
                <ArrowUpRight size={16} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* ================= FOOTER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto flex max-w-md items-center justify-center gap-3">
            <span className="h-px flex-1 bg-[#C8A45D]/25" />
            <span className="text-sm text-[#C8A45D]">✦</span>
            <span className="h-px flex-1 bg-[#C8A45D]/25" />
          </div>

          <p className="mt-5 font-serif text-sm italic text-[#722536]/70">
            &ldquo;Where two families become one.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   SUB-COMPONENTS
========================================================= */

function EventCard({
  name,
  icon,
  date,
  time,
}: {
  name: string;
  icon: "mehendi" | "reception";
  date?: string;
  time?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col items-center rounded-2xl border border-[#C8A45D]/20 bg-[#FBEFE5]/70 p-6 text-center shadow-sm"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#722536] text-[#F6E7D8]">
        {icon === "mehendi" ? <Sparkles size={21} /> : <Heart size={21} />}
      </div>

      <h4 className="font-serif text-2xl text-[#722536]">{name}</h4>

      <span className="my-3 block h-px w-8 bg-[#C8A45D]" />

      {date || time ? (
        <div className="space-y-1 text-sm text-[#3B2925]/70">
          {date && <p>{date}</p>}
          {time && <p>{time}</p>}
        </div>
      ) : (
        <p className="text-xs uppercase tracking-[0.2em] text-[#3B2925]/50">
          Details to follow
        </p>
      )}
    </motion.div>
  );
}

function BaraatBadge() {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#C8A45D]/40 bg-[#722536] text-[#F6E7D8] shadow-lg">
        <span className="text-xl">🥁</span>
      </div>

      <p className="font-serif text-lg text-[#722536]">Baraat</p>

      <div className="mt-1.5 flex items-center gap-1.5 rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/15 px-3 py-1">
        <Clock3 size={12} className="shrink-0 text-[#98743C]" />
        <span className="text-[11px] leading-tight text-[#722536]">
          {baraatTime}
        </span>
      </div>
    </div>
  );
}

function LocationCard({
  icon,
  label,
  title,
  address,
  mapHref,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  address: string;
  mapHref?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-[#C8A45D]/20 bg-[#FBEFE5]/70 p-5 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#722536] text-[#F6E7D8]">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C8A45D]">
            {label}
          </p>

          <h4 className="mt-1 font-serif text-xl text-[#722536]">{title}</h4>

          <p className="mt-1 text-xs leading-5 text-[#3B2925]/60">{address}</p>

          {mapHref && (
            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-[#722536] underline-offset-4 hover:underline"
            >
              View on Maps
              <ArrowUpRight size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CopyButton({
  copied,
  onClick,
  label,
}: {
  copied: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-center gap-3 rounded-full border border-[#722536]/20 bg-[#F6E7D8] px-7 py-3.5 text-sm font-medium text-[#722536] shadow-sm transition-colors hover:bg-[#F1DED0]"
    >
      {copied ? (
        <>
          <Check size={17} />
          Copied!
        </>
      ) : (
        <>
          <Copy size={17} />
          {label}
        </>
      )}
    </motion.button>
  );
}

function VenueDetail({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#C8A45D]/20 bg-[#F6E7D8]/70 p-4 text-left">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#722536] text-[#F6E7D8]">
        {icon}
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8A45D]">
          {title}
        </p>
        <p className="mt-1 text-sm text-[#3B2925]">{value}</p>
      </div>

      <ChevronRight size={16} className="ml-auto text-[#C8A45D]/60" />
    </div>
  );
}