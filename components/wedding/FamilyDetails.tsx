// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import {
//   BriefcaseBusiness,
//   ChevronDown,
//   Heart,
//   Home,
//   Sparkles,
//   UserRound,
//   Users,
// } from "lucide-react";
// import { useState } from "react";

// type FamilyMember = {
//   name: string;
//   relation: string;
//   profession?: string;
// };

// type Family = {
//   side: string;
//   name: string;
//   //   familyName: string;
//   hometown: string;
//   introduction: string;
//   parents: FamilyMember[];
//   grandparents?: FamilyMember[];
//   siblings: FamilyMember[];
//   uncles?: FamilyMember[];
// };

// const families: Family[] = [
//   {
//     side: "The Groom",
//     name: "Govind Raj",

//     hometown: "Begusarai, India",

//     introduction:
//       "A warm and close-knit family rooted in love, tradition and togetherness.",

//     grandparents: [
//       {
//         name: "Ganesh Prasad singh",
//         relation: "Grandfather",
//       },
//       {
//         name: "Mani Devi",
//         relation: "Grandmother",
//       },
//     ],
//     parents: [
//       {
//         name: "Kanhaiya Singh",
//         relation: "Father",
//       },
//       {
//         name: "Shanti Devi",
//         relation: "Mother",
//       },
//     ],
//     uncles: [
//       {
//         name: "Murari Singh",
//         relation: "Uncle",
//       },
//       {
//         name: "Gopal Singh",
//         relation: "Uncle",
//       },
//     ],

//     siblings: [
//       {
//         name: "Aman & Raman",
//         relation: "Brothers",
//       },
//       {
//         name: "Rounak (Chingu)",
//         relation: "Brother",
//       },
//       {
//         name: "Alok & Aditya",
//         relation: "Brother",
//       },
//       {
//         name: "Puja Singh & Manish Singh",
//         relation: "Elder Sister & Jija ji",
//       },
//       {
//         name: "Laxmi",
//         relation: "Younger Sister",
//       },
//       {
//         name: "Komal",
//         relation: "Sister",
//       },
//       {
//         name: "Rozy",
//         relation: "Sister",
//       },
//       {
//         name: "Manman,Pallavi & Punam",
//         relation: "Sisters",
//       },
//     ],
//   },

//   {
//     side: "The Bride",
//     name: "Nishtha",

//     hometown: "Gorakhpur, India",

//     introduction:
//       "A loving family that believes in celebrating every occasion with joy and togetherness.",

//     parents: [
//       {
//         name: "Ravi Prakash",
//         relation: "Father",
//       },
//       {
//         name: "Vinita",
//         relation: "Mother",
//       },
//     ],

//     siblings: [
//       {
//         name: "Apala",
//         relation: "Elder Sister",
//       },
//       {
//         name: "Shradha",
//         relation: "Younger Sister",
//       },
//       {
//         name: "Avyuh",
//         relation: "Nephew",
//       },
//     ],
//   },
// ];

// export default function FamilyDetails() {
//   const [openFamily, setOpenFamily] = useState<number | null>(null);

//   const toggleFamily = (index: number) => {
//     setOpenFamily(openFamily === index ? null : index);
//   };

//   return (
//     <section
//       id="families"
//       className="relative overflow-hidden bg-[#FBEFE5] px-5 py-24 sm:px-8 sm:py-32"
//     >
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A45D]/8 blur-3xl" />

//         <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#722536]/5 blur-3xl" />

//         <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#E8B7A5]/20 blur-3xl" />
//       </div>

//       <div className="pointer-events-none absolute inset-4 border border-[#C8A45D]/20 sm:inset-7" />

    

//       <div className="relative z-10 mx-auto max-w-6xl">
       

//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-14 text-center sm:mb-20"
//         >
//           <div className="mb-5 flex items-center justify-center gap-3">
//             <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />

//             <Sparkles size={13} className="text-[#C8A45D]" strokeWidth={1.2} />

//             <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#722536] sm:text-xs sm:tracking-[0.45em]">
//               With Their Blessings
//             </span>

//             <Sparkles size={13} className="text-[#C8A45D]" strokeWidth={1.2} />

//             <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />
//           </div>

//           <h2 className="font-serif text-4xl leading-tight text-[#722536] sm:text-5xl md:text-6xl">
//             Our Families
//           </h2>

//           <p className="mx-auto mt-5 max-w-xl font-serif text-sm leading-7 text-[#3B2925]/65 sm:text-base">
//             Two families, countless blessings, and a beautiful beginning that
//             brings us all together.
//           </p>
//         </motion.div>

     
//         <div className="grid gap-10 lg:grid-cols-2">
//           {families.map((family, index) => {
//             const isOpen = openFamily === index;

//             return (
//               <motion.div
//                 key={family.side}
//                 initial={{
//                   opacity: 0,
//                   x: index === 0 ? -40 : 40,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.2,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: index * 0.15,
//                 }}
//                 className="relative"
//               >
              

//                 <div
//                   className={`absolute -inset-2 border transition-all duration-500 ${
//                     isOpen ? "border-[#C8A45D]/70" : "border-[#C8A45D]/30"
//                   }`}
//                 />

             

//                 <div className="relative overflow-hidden bg-[#F6E7D8]">
               

//                   <div className="absolute left-4 top-4 h-12 w-12 border-l border-t border-[#C8A45D]/50" />

//                   <div className="absolute right-4 top-4 h-12 w-12 border-r border-t border-[#C8A45D]/50" />

//                   <div className="absolute bottom-4 left-4 h-12 w-12 border-b border-l border-[#C8A45D]/50" />

//                   <div className="absolute bottom-4 right-4 h-12 w-12 border-b border-r border-[#C8A45D]/50" />

                 

//                   <div className="px-6 pb-8 pt-10 text-center sm:px-10 sm:pt-12">
//                     <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.35em] text-[#C8A45D]">
//                       {family.side}
//                     </span>

//                     <h3 className="mt-3 font-serif text-3xl text-[#722536] sm:text-4xl">
//                       {family.name}
//                     </h3>

//                     <div className="my-5 flex items-center justify-center gap-3">
//                       <span className="h-px w-12 bg-[#C8A45D]/40" />

//                       <Heart
//                         size={15}
//                         className="fill-[#C8A45D]/10 text-[#C8A45D]"
//                         strokeWidth={1}
//                       />

//                       <span className="h-px w-12 bg-[#C8A45D]/40" />
//                     </div>

//                     <p className="mx-auto max-w-sm font-serif text-sm italic leading-6 text-[#3B2925]/65">
//                       {family.introduction}
//                     </p>

//                     {/* Family metadata */}

//                     <div className="mt-6 flex flex-wrap justify-center gap-3">
//                       <div className="flex items-center gap-2 border border-[#C8A45D]/25 px-3 py-2">
//                         <Home size={13} className="text-[#C8A45D]" />

//                         <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#3B2925]/60">
//                           {family.hometown}
//                         </span>
//                       </div>

//                       <div className="flex items-center gap-2 border border-[#C8A45D]/25 px-3 py-2">
//                         <Users size={13} className="text-[#C8A45D]" />

//                         <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#3B2925]/60">
//                           {family?.familyName}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <button
//                     type="button"
//                     onClick={() => toggleFamily(index)}
//                     aria-expanded={isOpen}
//                     className="relative flex min-h-12 w-full items-center justify-center gap-3 border-y border-[#C8A45D]/25 bg-[#722536]/[0.04] px-5 py-4 transition hover:bg-[#722536]/[0.08]"
//                   >
//                     <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#722536]">
//                       {isOpen ? "Close Family Details" : "Explore Family"}
//                     </span>

//                     <motion.span
//                       animate={{
//                         rotate: isOpen ? 180 : 0,
//                       }}
//                       transition={{
//                         duration: 0.3,
//                       }}
//                     >
//                       <ChevronDown
//                         size={17}
//                         className="text-[#C8A45D]"
//                         strokeWidth={1.5}
//                       />
//                     </motion.span>
//                   </button>

//                   {/* =================================================
//                       EXPANDED DETAILS
//                   ================================================== */}

//                   <AnimatePresence initial={false}>
//                     {isOpen && (
//                       <motion.div
//                         initial={{
//                           height: 0,
//                           opacity: 0,
//                         }}
//                         animate={{
//                           height: "auto",
//                           opacity: 1,
//                         }}
//                         exit={{
//                           height: 0,
//                           opacity: 0,
//                         }}
//                         transition={{
//                           duration: 0.45,
//                           ease: [0.22, 1, 0.36, 1],
//                         }}
//                         className="overflow-hidden"
//                       >
//                         <div className="space-y-8 px-6 py-8 sm:px-10">
//                           {/* Parents */}{" "}
//                           <FamilyGroup
//                             icon={<Sparkles size={17} strokeWidth={1.3} />}
//                             title="Grandparents"
//                             members={family?.grandparents}
//                           />
//                           <FamilyGroup
//                             icon={<Heart size={17} strokeWidth={1.3} />}
//                             title="Parents"
//                             members={family.parents}
//                           />
//                           <FamilyGroup
//                             icon={<Heart size={17} strokeWidth={1.3} />}
//                             title="Uncles"
//                             members={family?.uncles}
//                           />
//                           <FamilyGroup
//                             icon={<Users size={17} strokeWidth={1.3} />}
//                             title="Brothers & Sisters"
//                             members={family.siblings}
//                           />
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

                  

//                   <div className="border-t border-[#C8A45D]/20 px-5 py-5 text-center">
//                     <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-[#722536]/60">
//                       {family?.familyName}
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0.9,
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
//           }}
//           className="mx-auto mt-14 flex h-14 w-14 items-center justify-center rounded-full border border-[#C8A45D] bg-[#FBEFE5]"
//         >
//           <Heart
//             size={18}
//             className="fill-[#722536]/10 text-[#722536]"
//             strokeWidth={1}
//           />
//         </motion.div>

//         <motion.p
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
//             duration: 0.8,
//             delay: 0.2,
//           }}
//           className="mx-auto mt-7 max-w-xl text-center font-serif text-lg italic text-[#722536]/70 sm:text-xl"
//         >
//           "Two families, two traditions, one beautiful beginning."
//         </motion.p>
//       </div>
//     </section>
//   );
// }

// function FamilyGroup({
//   icon,
//   title,
//   members,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   members: FamilyMember[];
// }) {
//   return (
//     <div>
//       {/* Heading */}

//       <div className="mb-4 flex items-center gap-3">
//         <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A45D]/40 text-[#722536]">
//           {icon}
//         </div>

//         <div>
//           <p className="font-serif text-lg text-[#722536]">{title}</p>

//           <div className="h-px w-8 bg-[#C8A45D]" />
//         </div>
//       </div>

//       {/* Members */}

//       <div className="grid gap-3 sm:grid-cols-2">
//         {members?.map((member) => (
//           <div
//             key={`${member.name}-${member.relation}`}
//             className="group border border-[#C8A45D]/20 bg-[#FBEFE5]/50 p-4 transition hover:border-[#C8A45D]/50"
//           >
//             <div className="flex items-start gap-3">
//               <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#722536]/5">
//                 <UserRound
//                   size={15}
//                   className="text-[#722536]"
//                   strokeWidth={1.3}
//                 />
//               </div>

//               <div className="min-w-0">
//                 <p className="font-serif text-base text-[#3B2925]">
//                   {member.name}
//                 </p>

//                 <p className="mt-0.5 font-sans text-[9px] uppercase tracking-[0.2em] text-[#722536]/60">
//                   {member.relation}
//                 </p>

//                 {member.profession && (
//                   <div className="mt-2 flex items-center gap-1.5">
//                     <BriefcaseBusiness
//                       size={12}
//                       className="text-[#C8A45D]"
//                       strokeWidth={1.3}
//                     />

//                     <span className="font-sans text-[10px] text-[#3B2925]/55">
//                       {member.profession}
//                     </span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseBusiness,
  ChevronDown,
  Heart,
  Home,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react";
import { useState } from "react";

type FamilyMember = {
  name: string;
  relation: string;
  profession?: string;
};

type Family = {
  side: string;
  name: string;
  familyName?: string;
  hometown: string;
  introduction: string;
  parents?: FamilyMember[];
  grandparents?: FamilyMember[];
  siblings?: FamilyMember[];
  uncles?: FamilyMember[];
};

const families: Family[] = [
  {
    side: "The Groom",
    name: "Govind Raj",

    hometown: "Begusarai, India",

    introduction:
      "A warm and close-knit family rooted in love, tradition and togetherness.",

    grandparents: [
      {
        name: "Ganesh Prasad singh",
        relation: "Grandfather",
      },
      {
        name: "Mani Devi",
        relation: "Grandmother",
      },
    ],
    parents: [
      {
        name: "Kanhaiya Singh",
        relation: "Father",
      },
      {
        name: "Shanti Devi",
        relation: "Mother",
      },
    ],
    uncles: [
      {
        name: "Murari Singh",
        relation: "Uncle",
      },
      {
        name: "Gopal Singh",
        relation: "Uncle",
      },
    ],

    siblings: [
      {
        name: "Aman & Raman",
        relation: "Brothers",
      },
      {
        name: "Rounak (Chingu)",
        relation: "Brother",
      },
      {
        name: "Alok & Aditya",
        relation: "Brother",
      },
      {
        name: "Puja Singh & Manish Singh",
        relation: "Elder Sister & Jija ji",
      },
      {
        name: "Laxmi",
        relation: "Younger Sister",
      },
      {
        name: "Komal",
        relation: "Sister",
      },
      {
        name: "Rozy",
        relation: "Sister",
      },
      {
        name: "Manman,Pallavi & Punam",
        relation: "Sisters",
      },
    ],
  },

  {
    side: "The Bride",
    name: "Nishtha",

    hometown: "Gorakhpur, India",

    introduction:
      "A loving family that believes in celebrating every occasion with joy and togetherness.",

    parents: [
      {
        name: "Ravi Prakash",
        relation: "Father",
      },
      {
        name: "Vinita",
        relation: "Mother",
      },
    ],

    siblings: [
      {
        name: "Apala",
        relation: "Elder Sister",
      },
      {
        name: "Shradha",
        relation: "Younger Sister",
      },
      {
        name: "Avyuh",
        relation: "Nephew",
      },
    ],
  },
];

export default function FamilyDetails() {
  const [openFamily, setOpenFamily] = useState<number | null>(null);

  const toggleFamily = (index: number) => {
    setOpenFamily(openFamily === index ? null : index);
  };

  return (
    <section
      id="families"
      className="relative overflow-hidden bg-[#FBEFE5] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A45D]/8 blur-3xl" />

        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#722536]/5 blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#E8B7A5]/20 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-4 border border-[#C8A45D]/20 sm:inset-7" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center sm:mb-20"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />

            <Sparkles size={13} className="text-[#C8A45D]" strokeWidth={1.2} />

            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#722536] sm:text-xs sm:tracking-[0.45em]">
              With Their Blessings
            </span>

            <Sparkles size={13} className="text-[#C8A45D]" strokeWidth={1.2} />

            <span className="h-px w-8 bg-[#C8A45D] sm:w-12" />
          </div>

          <h2 className="font-serif text-4xl leading-tight text-[#722536] sm:text-5xl md:text-6xl">
            Our Families
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-serif text-sm leading-7 text-[#3B2925]/65 sm:text-base">
            Two families, countless blessings, and a beautiful beginning that
            brings us all together.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {families.map((family, index) => {
            const isOpen = openFamily === index;

            return (
              <motion.div
                key={family.side}
                initial={{
                  opacity: 0,
                  x: index === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                className="relative self-start"
              >
                <div
                  className={`absolute -inset-2 border transition-all duration-500 ${
                    isOpen ? "border-[#C8A45D]/70" : "border-[#C8A45D]/30"
                  }`}
                />

                <div className="relative overflow-hidden bg-[#F6E7D8]">
                  <div className="absolute left-4 top-4 h-12 w-12 border-l border-t border-[#C8A45D]/50" />

                  <div className="absolute right-4 top-4 h-12 w-12 border-r border-t border-[#C8A45D]/50" />

                  <div className="absolute bottom-4 left-4 h-12 w-12 border-b border-l border-[#C8A45D]/50" />

                  <div className="absolute bottom-4 right-4 h-12 w-12 border-b border-r border-[#C8A45D]/50" />

                  <div className="px-6 pb-8 pt-10 text-center sm:px-10 sm:pt-12">
                    <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.35em] text-[#C8A45D]">
                      {family.side}
                    </span>

                    <h3 className="mt-3 font-serif text-3xl text-[#722536] sm:text-4xl">
                      {family.name}
                    </h3>

                    <div className="my-5 flex items-center justify-center gap-3">
                      <span className="h-px w-12 bg-[#C8A45D]/40" />

                      <Heart
                        size={15}
                        className="fill-[#C8A45D]/10 text-[#C8A45D]"
                        strokeWidth={1}
                      />

                      <span className="h-px w-12 bg-[#C8A45D]/40" />
                    </div>

                    <p className="mx-auto max-w-sm font-serif text-sm italic leading-6 text-[#3B2925]/65">
                      {family.introduction}
                    </p>

                    {/* Family metadata */}
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <div className="flex items-center gap-2 border border-[#C8A45D]/25 px-3 py-2">
                        <Home size={13} className="text-[#C8A45D]" />

                        <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#3B2925]/60">
                          {family.hometown}
                        </span>
                      </div>

                      {family.familyName && (
                        <div className="flex items-center gap-2 border border-[#C8A45D]/25 px-3 py-2">
                          <Users size={13} className="text-[#C8A45D]" />

                          <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#3B2925]/60">
                            {family.familyName}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleFamily(index)}
                    aria-expanded={isOpen}
                    className="relative flex min-h-12 w-full items-center justify-center gap-3 border-y border-[#C8A45D]/25 bg-[#722536]/[0.04] px-5 py-4 transition hover:bg-[#722536]/[0.08]"
                  >
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#722536]">
                      {isOpen ? "Close Family Details" : "Explore Family"}
                    </span>

                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <ChevronDown
                        size={17}
                        className="text-[#C8A45D]"
                        strokeWidth={1.5}
                      />
                    </motion.span>
                  </button>

                  {/* Expanded details */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
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
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-8 px-6 py-8 sm:px-10">
                          {/* Groups with no members render nothing */}
                          <FamilyGroup
                            icon={<Sparkles size={17} strokeWidth={1.3} />}
                            title="Grandparents"
                            members={family.grandparents}
                          />
                          <FamilyGroup
                            icon={<Heart size={17} strokeWidth={1.3} />}
                            title="Parents"
                            members={family.parents}
                          />
                          <FamilyGroup
                            icon={<Heart size={17} strokeWidth={1.3} />}
                            title="Uncles"
                            members={family.uncles}
                          />
                          <FamilyGroup
                            icon={<Users size={17} strokeWidth={1.3} />}
                            title="Brothers & Sisters"
                            members={family.siblings}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {family.familyName && (
                    <div className="border-t border-[#C8A45D]/20 px-5 py-5 text-center">
                      <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-[#722536]/60">
                        {family.familyName}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto mt-14 flex h-14 w-14 items-center justify-center rounded-full border border-[#C8A45D] bg-[#FBEFE5]"
        >
          <Heart
            size={18}
            className="fill-[#722536]/10 text-[#722536]"
            strokeWidth={1}
          />
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mx-auto mt-7 max-w-xl text-center font-serif text-lg italic text-[#722536]/70 sm:text-xl"
        >
          &ldquo;Two families, two traditions, one beautiful beginning.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}

function FamilyGroup({
  icon,
  title,
  members,
}: {
  icon: React.ReactNode;
  title: string;
  members?: FamilyMember[];
}) {
  // Nothing to show -> don't render the heading or an empty grid
  if (!members || members.length === 0) return null;

  return (
    <div>
      {/* Heading */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A45D]/40 text-[#722536]">
          {icon}
        </div>

        <div>
          <p className="font-serif text-lg text-[#722536]">{title}</p>

          <div className="h-px w-8 bg-[#C8A45D]" />
        </div>
      </div>

      {/* Members */}
      <div className="grid gap-3 sm:grid-cols-2">
        {members.map((member) => (
          <div
            key={`${member.name}-${member.relation}`}
            className="group border border-[#C8A45D]/20 bg-[#FBEFE5]/50 p-4 transition hover:border-[#C8A45D]/50"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#722536]/5">
                <UserRound
                  size={15}
                  className="text-[#722536]"
                  strokeWidth={1.3}
                />
              </div>

              <div className="min-w-0">
                <p className="font-serif text-base text-[#3B2925]">
                  {member.name}
                </p>

                <p className="mt-0.5 font-sans text-[9px] uppercase tracking-[0.2em] text-[#722536]/60">
                  {member.relation}
                </p>

                {member.profession && (
                  <div className="mt-2 flex items-center gap-1.5">
                    <BriefcaseBusiness
                      size={12}
                      className="text-[#C8A45D]"
                      strokeWidth={1.3}
                    />

                    <span className="font-sans text-[10px] text-[#3B2925]/55">
                      {member.profession}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}