"use client";

import { MessageCircle, Share2 } from "lucide-react";
import { motion } from "framer-motion";

type WhatsAppShareProps = {
  compact?: boolean;
};

export default function WhatsAppShare({
  compact = false,
}: WhatsAppShareProps) {
  const shareInvitation = () => {
    const message = `💍 Aarav & Ananya are getting married!

We would be delighted to have you celebrate our special day with us.

📅 14 February 2027
📍 The Grand Palace, New Delhi

View the wedding invitation:
${window.location.origin}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.button
      type="button"
      onClick={shareInvitation}
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={`group inline-flex items-center justify-center gap-3 rounded-full border border-[#C8A45D]/40 bg-[#722536] font-medium text-[#F6E7D8] shadow-lg shadow-[#722536]/15 transition-all duration-300 hover:bg-[#5e1e2d] ${
        compact
          ? "px-5 py-3 text-xs"
          : "px-6 py-3.5 text-sm"
      }`}
    >
      <MessageCircle
        size={compact ? 16 : 18}
        className="transition-transform duration-300 group-hover:scale-110"
      />

      <span>
        Share on WhatsApp
      </span>

      {!compact && (
        <Share2
          size={15}
          className="text-[#C8A45D]"
        />
      )}
    </motion.button>
  );
}