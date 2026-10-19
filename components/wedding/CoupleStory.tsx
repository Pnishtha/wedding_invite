// "use client";

// import { motion } from "framer-motion";
// import { Heart, Sparkles } from "lucide-react";

// const storyItems = [
//   {
//     year: "The Beginning",
//     title: "A Beautiful Meeting",
//     description:
//       "Some stories begin with a moment. Ours began with two people meeting at just the right time.",
//   },
//   {
//     year: "The Journey",
//     title: "Memories Along the Way",
//     description:
//       "From little conversations to unforgettable adventures, every moment brought us a little closer.",
//   },
//   {
//     year: "Forever",
//     title: "And Then Came Forever",
//     description:
//       "What started as a beautiful journey became a promise to walk through life together, hand in hand.",
//   },
// ];

// export default function CoupleStory() {
//   return (
//     <section
//       id="story"
//       className="relative overflow-hidden bg-[#F6E7D8] px-5 py-24 sm:px-8 sm:py-32"
//     >
//       {/* =====================================================
//           BACKGROUND
//       ====================================================== */}

//       <div className="pointer-events-none absolute inset-0">
//         {/* Soft center glow */}
//         <div className="absolute left-1/2 top-[30%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C8A45D]/10 blur-3xl" />

//         {/* Maroon glow */}
//         <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#722536]/5 blur-3xl" />

//         {/* Peach glow */}
//         <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#E8B7A5]/20 blur-3xl" />
//       </div>

     

//       <div className="pointer-events-none absolute inset-4 border border-[#C8A45D]/20 sm:inset-7" />

    

//       <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
//         <div className="h-20 w-20 rotate-45 border border-[#C8A45D]/40 bg-[#F6E7D8]" />

//         <Sparkles
//           size={18}
//           strokeWidth={1}
//           className="absolute text-[#C8A45D]"
//         />
//       </div>

   
//       <div className="relative z-10 mx-auto max-w-6xl">
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//           className="mb-16 text-center sm:mb-20"
//         >
        

//           <div className="mb-5 flex items-center justify-center gap-3">
//             <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />

//             <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#722536] sm:text-xs sm:tracking-[0.45em]">
//               Our Story
//             </span>

//             <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />
//           </div>

        

//           <h2 className="font-serif text-4xl leading-tight text-[#722536] sm:text-5xl md:text-6xl">
//             Two Hearts,
//             <br />
//             <span className="italic">One Beautiful Journey</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-xl font-serif text-sm leading-7 text-[#3B2925]/65 sm:text-base">
//             Every love story is beautiful, but ours is the one we will cherish
//             forever.
//           </p>
//         </motion.div>

      

//         <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
         

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -50,
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
//               duration: 1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="relative mx-auto w-full max-w-md"
//           >
           

//             <div className="absolute -inset-3 border border-[#C8A45D]/50 sm:-inset-5" />

          

//             <div className="absolute -left-5 -top-5 h-14 w-14 border-l border-t border-[#722536]/40 sm:-left-7 sm:-top-7 sm:h-20 sm:w-20" />

//             <div className="absolute -bottom-5 -right-5 h-14 w-14 border-b border-r border-[#722536]/40 sm:-bottom-7 sm:-right-7 sm:h-20 sm:w-20" />

       

//             <div className="relative cursor-pointer overflow-hidden">
//               <motion.img
//                 src="/Meet the Couple_ Govind & Nishtha.png"
//                 alt="Illustrated wedding profile of Govind and Nishtha"
//                 className="h-full w-full object-cover flex bg-no-repeat justify-center align-middle items-center"
//                 whileHover={{ scale: 1.04 }}
//                 transition={{ duration: 0.8 }}
             
//               />

          

//               <div className="absolute inset-0 bg-gradient-to-t from-[#3B2925]/30 via-transparent to-[#722536]/5" />

              

//               <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 text-white">
//                 <span className="h-px w-8 bg-white/60" />

//                 <Heart size={16} className="fill-white/20" strokeWidth={1} />

//                 <span className="h-px w-8 bg-white/60" />
//               </div>
//             </div>


//             <motion.div
//               animate={{
//                 y: [0, -8, 0],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A45D]/50 bg-[#FBEFE5] shadow-lg sm:-right-6 sm:-top-6 sm:h-14 sm:w-14"
//             >
//               <Heart
//                 size={19}
//                 className="fill-[#722536]/10 text-[#722536]"
//                 strokeWidth={1}
//               />
//             </motion.div>
//           </motion.div>

        

//           <div className="relative">
            

//             <div className="absolute left-[9px] top-3 bottom-3 w-px bg-[#C8A45D]/40" />

//             {/* <div className="space-y-12">
//               {storyItems.map((item, index) => (
//                 <motion.div
//                   key={item.year}
//                   initial={{
//                     opacity: 0,
//                     x: 35,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   viewport={{
//                     once: true,
//                     amount: 0.25,
//                   }}
//                   transition={{
//                     duration: 0.7,
//                     delay: index * 0.15,
//                   }}
//                   className="relative flex gap-7"
//                 >
                 

//                   <div className="relative z-10 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#C8A45D] bg-[#F6E7D8]">
//                     <div className="h-1.5 w-1.5 rounded-full bg-[#722536]" />
//                   </div>

             

//                   <div>
//                     <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8A45D]">
//                       {item.year}
//                     </span>

//                     <h3 className="mt-2 font-serif text-2xl text-[#722536] sm:text-3xl">
//                       {item.title}
//                     </h3>

//                     <p className="mt-3 max-w-lg font-serif text-sm leading-7 text-[#3B2925]/65 sm:text-base">
//                       {item.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div> */}

         

//             {/* <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 20,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.4,
//               }}
//               className="mt-14 border-t border-[#C8A45D]/30 pt-8"
//             >
//               <div className="flex items-start gap-4">
//                 <Heart
//                   size={18}
//                   className="mt-1 shrink-0 fill-[#C8A45D]/20 text-[#C8A45D]"
//                   strokeWidth={1}
//                 />

//                 <p className="font-serif text-lg italic leading-relaxed text-[#722536]/80 sm:text-xl">
//                   "And suddenly, all the love songs started making sense."
//                 </p>
//               </div>
//             </motion.div> */}
//           </div>
//         </div>

      

//         <motion.div
//           initial={{ opacity: 0, scaleX: 0 }}
//           whileInView={{ opacity: 1, scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="mx-auto mt-24 flex max-w-xs items-center justify-center gap-4 sm:mt-32"
//         >
//           <span className="h-px flex-1 bg-[#C8A45D]/40" />

//           <div className="h-3 w-3 rotate-45 border border-[#C8A45D] bg-[#F6E7D8]" />

//           <span className="h-px flex-1 bg-[#C8A45D]/40" />
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CoupleStory() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#F6E7D8] px-5 py-20 sm:px-10 sm:py-28 lg:py-32"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[35%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#C8A45D]/12 blur-3xl" />
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#722536]/5 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#E8B7A5]/20 blur-3xl" />
      </div>

      {/* Double gold border */}
      <div className="pointer-events-none absolute inset-3 border border-[#C8A45D]/25 sm:inset-6" />
      <div className="pointer-events-none absolute inset-4 border border-[#C8A45D]/10 sm:inset-8" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative mb-8 flex h-12 w-12 items-center justify-center"
        >
          <div className="absolute h-10 w-10 rotate-45 border border-[#C8A45D]/60" />
          <Sparkles
            size={16}
            strokeWidth={1.2}
            className="relative text-[#C8A45D]"
          />
        </motion.div>

        {/* The one bold headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
          className="text-center font-serif text-5xl font-black italic leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="bg-gradient-to-br from-[#722536] via-[#8E3347] to-[#98743C] bg-clip-text text-transparent">
            Two Hearts,
          </span>
          <br />
          <span className="bg-gradient-to-br from-[#98743C] via-[#C8A45D] to-[#722536] bg-clip-text text-transparent">
            One Journey
          </span>
        </motion.h2>

        {/* Gold divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex w-full max-w-[14rem] items-center justify-center gap-3 sm:mt-10"
        >
          <span className="h-px flex-1 bg-[#C8A45D]/60" />
          <Heart
            size={14}
            strokeWidth={1.2}
            className="fill-[#C8A45D]/30 text-[#C8A45D]"
          />
          <span className="h-px flex-1 bg-[#C8A45D]/60" />
        </motion.div>

        {/* Portrait — shown whole, never cropped */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="relative mt-14 w-full max-w-[22rem] sm:mt-16 sm:max-w-md md:max-w-lg"
        >
          <div className="pointer-events-none absolute -inset-3 border border-[#C8A45D]/50 sm:-inset-4" />
          <div className="pointer-events-none absolute -left-4 -top-4 h-12 w-12 border-l border-t border-[#722536]/50 sm:-left-6 sm:-top-6 sm:h-16 sm:w-16" />
          <div className="pointer-events-none absolute -bottom-4 -right-4 h-12 w-12 border-b border-r border-[#722536]/50 sm:-bottom-6 sm:-right-6 sm:h-16 sm:w-16" />

          <div className="relative bg-[#FFFDF9] p-2.5 shadow-[0_25px_60px_-20px_rgba(59,41,37,0.35)] sm:p-3.5">
            <img
              src="/Meet the Couple_ Govind & Nishtha.png"
              alt="Illustrated wedding profile of Govind and Nishtha"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="block h-auto w-full select-none"
            />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 -top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A45D]/50 bg-[#FBEFE5] shadow-lg sm:-right-6 sm:-top-6 sm:h-14 sm:w-14"
          >
            <Heart
              size={19}
              className="fill-[#722536]/10 text-[#722536]"
              strokeWidth={1}
            />
          </motion.div>
        </motion.div>

        {/* Closing divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 flex w-full max-w-xs items-center justify-center gap-4 sm:mt-24"
        >
          <span className="h-px flex-1 bg-[#C8A45D]/40" />
          <div className="h-3 w-3 rotate-45 border border-[#C8A45D] bg-[#F6E7D8]" />
          <span className="h-px flex-1 bg-[#C8A45D]/40" />
        </motion.div>
      </div>
    </section>
  );
}
