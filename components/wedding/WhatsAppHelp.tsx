// "use client";

// import { useState } from "react";
// import { MessageCircle, X, ArrowUpRight, Heart } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const WHATSAPP_NUMBER = "919717722913";

// export default function WhatsAppHelp() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openWhatsApp = () => {
//     const message =
//       "Hi! I'm visiting the Govind & Nishtha wedding invitation website and need some help with the wedding details.";

//     const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

//     window.open(url, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div className="fixed bottom-5 right-4 z-[100] sm:bottom-7 sm:right-7">
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 12, scale: 0.96 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 8, scale: 0.96 }}
//             transition={{ duration: 0.2 }}
//             className="mb-3 w-[min(19rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[#C8A45D]/40 bg-[#FBF5ED] shadow-[0_12px_40px_rgba(59,41,37,0.18)]"
//           >
//             <div className="bg-[#722536] px-5 py-4 text-[#FBF5ED]">
//               <div className="flex items-start justify-between gap-3">
//                 <div>
//                   <p className="font-serif text-lg">
//                     Govind & Nishtha
//                   </p>
//                   <p className="mt-1 text-xs text-white/75">
//                     Wedding guest assistance
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => setIsOpen(false)}
//                   aria-label="Close WhatsApp help"
//                   className="rounded-full p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
//                 >
//                   <X size={18} />
//                 </button>
//               </div>
//             </div>

//             <div className="p-5">
//               <div className="flex gap-3">
//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8B7A5]/40">
//                   <Heart
//                     size={17}
//                     className="text-[#722536]"
//                     strokeWidth={1.5}
//                   />
//                 </div>

//                 <div>
//                   <p className="font-serif text-lg text-[#3B2925]">
//                     Need a little help?
//                   </p>
//                   <p className="mt-1 text-sm leading-6 text-[#80695B]">
//                     Questions about directions, RSVP, or wedding details?
//                     Send us a message.
//                   </p>
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 onClick={openWhatsApp}
//                 className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1FBA59] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#722536]"
//               >
//                 <MessageCircle size={19} />
//                 Chat on WhatsApp
//                 <ArrowUpRight size={16} />
//               </button>

//               <p className="mt-3 text-center text-[10px] tracking-wide text-[#80695B]">
//                 We look forward to celebrating with you
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="flex items-center justify-end gap-3">
//         <AnimatePresence>
//           {!isOpen && (
//             <motion.button
//               type="button"
//               initial={{ opacity: 0, x: 8 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 8 }}
//               onClick={() => setIsOpen(true)}
//               className="rounded-full border border-[#C8A45D]/40 bg-[#FBF5ED] px-4 py-2.5 text-xs font-medium text-[#722536] shadow-md transition hover:bg-[#F6E7D8]"
//             >
//               Need help?
//             </motion.button>
//           )}
//         </AnimatePresence>

//         <motion.button
//           type="button"
//           onClick={() => setIsOpen((previous) => !previous)}
//           aria-label={isOpen ? "Close help panel" : "Open WhatsApp help"}
//           aria-expanded={isOpen}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 bg-[#25D366] text-white shadow-[0_6px_22px_rgba(37,211,102,0.35)] transition-colors hover:bg-[#1FBA59]"
//         >
//           {isOpen ? (
//             <X size={24} />
//           ) : (
//             <MessageCircle size={27} />
//           )}
//         </motion.button>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X, ArrowUpRight, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Digits only, with country code. Prefer a dedicated family/helpline number
// over a personal one, and keep it in .env.local:
//   NEXT_PUBLIC_WHATSAPP_NUMBER=919XXXXXXXXX
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919717722913";

export default function WhatsAppHelp() {
  const [isOpen, setIsOpen] = useState(false);

  // Escape closes the panel
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const message =
    "Hi! I'm visiting the Govind & Nishtha wedding invitation website and need some help with the wedding details.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    // z-40: stays below the nav (z-50) and the gallery viewer (z-100)
    <div
      className="fixed right-4 z-40 sm:right-7"
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-label="Wedding guest help"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-[min(19rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[#C8A45D]/40 bg-[#FBF5ED] shadow-[0_12px_40px_rgba(59,41,37,0.18)]"
          >
            <div className="bg-[#722536] px-5 py-4 text-[#FBF5ED]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-serif text-lg">Govind &amp; Nishtha</p>
                  <p className="mt-1 text-xs text-white/80">
                    Wedding guest assistance
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close help panel"
                  className="rounded-full p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="p-5">
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8B7A5]/40">
                  <Heart
                    size={17}
                    className="text-[#722536]"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <p className="font-serif text-lg text-[#3B2925]">
                    Need a little help?
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#80695B]">
                    Questions about directions, RSVP, or wedding details? Send
                    us a message.
                  </p>
                </div>
              </div>

              {/* A real link: works with popup blockers and can be long-pressed */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#128C7E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0F7A6D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#722536]"
              >
                <MessageCircle size={19} />
                Chat on WhatsApp
                <ArrowUpRight size={16} />
              </a>

              <p className="mt-3 text-center text-[11px] tracking-wide text-[#80695B]">
                We look forward to celebrating with you
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-end gap-3">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              type="button"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              onClick={() => setIsOpen(true)}
              className="rounded-full border border-[#C8A45D]/40 bg-[#FBF5ED] px-4 py-2.5 text-xs font-medium text-[#722536] shadow-md transition hover:bg-[#F6E7D8]"
            >
              Need help?
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Close help panel" : "Open WhatsApp help"}
          aria-expanded={isOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#C8A45D]/70 bg-[#722536] text-[#F6E7D8] shadow-[0_6px_22px_rgba(114,37,54,0.35)] transition-colors hover:bg-[#5F1E2D]"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={26} />}
        </motion.button>
      </div>
    </div>
  );
}