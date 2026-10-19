// "use client";

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Heart, Menu, X } from "lucide-react";

// const navItems = [
//   { label: "Story", href: "#story" },
//   { label: "Events", href: "#events" },
//   { label: "Gallery", href: "#gallery" },
//   { label: "Venue", href: "#venue" },
//   { label: "RSVP", href: "#rsvp" },
// ];

// export default function WeddingNav() {
//   const [open, setOpen] = useState(false);

//   const handleNavigation = (href: string) => {
//     setOpen(false);

//     document.querySelector(href)?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <>
//       {/* Desktop navigation */}
//       <motion.nav
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 1 }}
//         className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 md:block"
//       >
//         <div className="flex items-center gap-2 rounded-full border border-[#c8a45d]/30 bg-[#f8f3ea]/85 px-3 py-2 shadow-[0_10px_40px_rgba(59,41,37,0.12)] backdrop-blur-xl">
//           {/* Couple name */}
//           <button
//             onClick={() =>
//               window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//               })
//             }
//             className="flex items-center gap-2 rounded-full px-4 py-2"
//           >
//             <Heart
//               size={15}
//               className="fill-[#722536] text-[#722536]"
//             />

//             <span className="font-serif text-sm text-[#722536]">
//               A & A
//             </span>
//           </button>

//           <span className="h-5 w-px bg-[#c8a45d]/30" />

//           {navItems.map((item) => (
//             <button
//               key={item.href}
//               onClick={() => handleNavigation(item.href)}
//               className="rounded-full px-4 py-2 font-sans text-[11px] uppercase tracking-[0.15em] text-[#3b2925]/65 transition-all duration-300 hover:bg-[#722536]/5 hover:text-[#722536]"
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//       </motion.nav>

//       {/* Mobile button */}
//       <motion.button
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 1 }}
//         onClick={() => setOpen((prev) => !prev)}
//         aria-label="Open navigation"
//         className="fixed right-5 top-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-[#c8a45d]/40 bg-[#f8f3ea]/90 text-[#722536] shadow-lg backdrop-blur-xl md:hidden"
//       >
//         {open ? <X size={20} /> : <Menu size={20} />}
//       </motion.button>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//               className="fixed inset-0 z-40 bg-[#3b2925]/30 backdrop-blur-sm md:hidden"
//             />

//             <motion.div
//               initial={{ opacity: 0, y: -20, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -20, scale: 0.95 }}
//               transition={{ duration: 0.25 }}
//               className="fixed left-5 right-5 top-20 z-50 rounded-[2rem] border border-[#c8a45d]/30 bg-[#f8f3ea]/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
//             >
//               <div className="mb-5 text-center">
//                 <Heart
//                   size={18}
//                   className="mx-auto mb-2 fill-[#c8a45d] text-[#c8a45d]"
//                 />

//                 <p className="font-serif text-xl text-[#722536]">
//                   Aarav & Ananya
//                 </p>

//                 <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.3em] text-[#3b2925]/40">
//                   14 · 02 · 2027
//                 </p>
//               </div>

//               <div className="h-px bg-[#c8a45d]/20" />

//               <div className="mt-3">
//                 {navItems.map((item, index) => (
//                   <motion.button
//                     key={item.href}
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{
//                       delay: index * 0.05,
//                     }}
//                     onClick={() =>
//                       handleNavigation(item.href)
//                     }
//                     className="flex w-full items-center justify-between border-b border-[#3b2925]/5 px-2 py-4 text-left last:border-0"
//                   >
//                     <span className="font-serif text-lg text-[#3b2925]">
//                       {item.label}
//                     </span>

//                     <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#c8a45d]">
//                       0{index + 1}
//                     </span>
//                   </motion.button>
//                 ))}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



"use client";

import { MouseEvent, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";

// Same order as the sections on the page
const navItems = [
  { label: "Story", href: "#story" },
  { label: "Families", href: "#families" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Venue", href: "#venue" },
  { label: "RSVP", href: "#rsvp" },
];

export default function WeddingNav() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const scrollBehavior = reduce ? "auto" : "smooth";

  const handleNavigation = (event: MouseEvent, href: string) => {
    event.preventDefault();
    setOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: scrollBehavior,
      block: "start",
    });
  };

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: Escape closes it, and the page behind doesn't scroll
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      {/* Desktop navigation */}
      <motion.nav
        aria-label="Main"
        initial={reduce ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 md:block"
      >
        <div className="flex items-center gap-1 rounded-full border border-[#C8A45D]/30 bg-[#F8F3EA]/85 px-3 py-2 shadow-[0_10px_40px_rgba(59,41,37,0.12)] backdrop-blur-xl">
          {/* Couple initials */}
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: scrollBehavior });
            }}
            aria-label="Back to top"
            className="flex items-center gap-2 rounded-full px-4 py-2"
          >
            <Heart size={15} className="fill-[#722536] text-[#722536]" />
            <span className="font-serif text-sm text-[#722536]">G &amp; N</span>
          </a>

          <span className="mx-1 h-5 w-px bg-[#C8A45D]/30" />

          {navItems.map((item) => {
            const isActive = active === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavigation(event, item.href)}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-full px-3.5 py-2 font-sans text-[11px] uppercase tracking-[0.15em] transition-all duration-300 lg:px-4 ${
                  isActive
                    ? "bg-[#722536]/10 text-[#722536]"
                    : "text-[#3B2925]/65 hover:bg-[#722536]/5 hover:text-[#722536]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile button */}
      <motion.button
        type="button"
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="fixed right-5 top-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A45D]/40 bg-[#F8F3EA]/90 text-[#722536] shadow-lg backdrop-blur-xl md:hidden"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
              className="fixed inset-0 z-40 bg-[#3B2925]/30 backdrop-blur-sm md:hidden"
            />

            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-label="Navigation"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="fixed left-5 right-5 top-20 z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-[2rem] border border-[#C8A45D]/30 bg-[#F8F3EA]/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="mb-5 text-center">
                <Heart
                  size={18}
                  className="mx-auto mb-2 fill-[#C8A45D] text-[#C8A45D]"
                />

                <p className="font-serif text-xl text-[#722536]">
                  Govind &amp; Nishtha
                </p>

                <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.3em] text-[#3B2925]/55">
                  02 · 12 · 2026
                </p>
              </div>

              <div className="h-px bg-[#C8A45D]/20" />

              <div className="mt-3">
                {navItems.map((item, index) => {
                  const isActive = active === item.href;

                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={reduce ? false : { opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={(event) => handleNavigation(event, item.href)}
                      aria-current={isActive ? "true" : undefined}
                      className="flex w-full items-center justify-between border-b border-[#3B2925]/5 px-2 py-4 text-left last:border-0"
                    >
                      <span
                        className={`font-serif text-lg ${
                          isActive ? "text-[#722536]" : "text-[#3B2925]"
                        }`}
                      >
                        {item.label}
                      </span>

                      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#C8A45D]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}