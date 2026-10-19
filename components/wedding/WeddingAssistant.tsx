
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Heart,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

import {
  WEDDING_FAQS,
  FALLBACK_FAQ,
  WEDDING_FACTS,
  type WeddingFaq,
} from "@/lib/weddingFaq";

type ChatMessage = {
  id: number;
  sender: "bot" | "guest";
  text: string;
  link?: WeddingFaq["link"];
};

const SUGGESTIONS = [
  "When is the wedding?",
  "Where is the venue?",
  "What time does it start?",
  "How can I contact the family?",
];

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findFaq(message: string): WeddingFaq | undefined {
  const normalizedMessage = normalizeText(message);

  if (!normalizedMessage) return undefined;

  // Match the FAQ question exactly.
  const exactMatch = WEDDING_FAQS.find(
    (faq) =>
      normalizeText(faq.question) === normalizedMessage
  );

  if (exactMatch) return exactMatch;

  // Match keywords safely, even if an FAQ has no keywords.
  const rankedFaqs = WEDDING_FAQS.map((faq) => {
    const keywords = Array.isArray(faq.keywords)
      ? faq.keywords
      : [];

    const score = keywords.reduce<number>(
      (total, keyword) => {
        if (typeof keyword !== "string") return total;

        const normalizedKeyword = normalizeText(keyword);

        if (!normalizedKeyword) return total;

        return normalizedMessage.includes(normalizedKeyword)
          ? total + normalizedKeyword.length
          : total;
      },
      0
    );

    return { faq, score };
  }).sort((a, b) => b.score - a.score);

  return rankedFaqs[0]?.score > 0
    ? rankedFaqs[0].faq
    : undefined;
}

function createWhatsAppLink(message: string) {
  return `https://wa.me/${WEDDING_FACTS.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export default function WeddingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "bot",
      text:
        "Namaste! 🌸 Welcome to Govind & Nishtha's wedding invitation. I'm your wedding assistant. Ask me about the wedding date, venue, directions, or other details.",
    },
  ]);

  function sendMessage(value: string) {
    const question = value.trim();

    if (!question) return;

    const matchedFaq = findFaq(question);
    const answer = matchedFaq ?? FALLBACK_FAQ;

    const guestMessage: ChatMessage = {
      id: Date.now(),
      sender: "guest",
      text: question,
    };

    const botMessage: ChatMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: answer.answer,
      link: answer.link,
    };

    setMessages((current) => [
      ...current,
      guestMessage,
      botMessage,
    ]);

    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-4 z-[9999] sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            key="wedding-chat-panel"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Wedding assistant chat"
            className="absolute bottom-[4.75rem] right-0 flex h-[min(590px,calc(100dvh-7rem))] w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-[#C8A45D]/50 bg-[#FBF5ED] shadow-2xl shadow-[#541825]/20 sm:bottom-[5.25rem]"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-[#722536] px-5 py-5 text-white">
              <div className="pointer-events-none absolute -right-5 -top-8 h-28 w-28 rounded-full border border-[#C8A45D]/40" />

              <div className="relative flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C8A45D]/60 bg-white/10">
                  <Heart className="h-5 w-5 text-[#E8B7A5]" />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="font-serif text-xl">
                    Wedding Assistant
                  </h2>
                  <p className="mt-1 text-xs text-white/75">
                    Govind & Nishtha · Here to help
                  </p>
                </div>

                <Sparkles className="h-5 w-5 text-[#C8A45D]" />
              </div>
            </div>

            {/* Chat messages */}
            <div
              className="flex-1 space-y-4 overflow-y-auto px-4 py-5"
              aria-live="polite"
              aria-relevant="additions"
            >
              <p className="text-center text-[10px] uppercase tracking-[0.2em] text-[#8C756C]">
                Made with love
              </p>

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "guest"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.sender === "guest"
                        ? "rounded-br-sm bg-[#722536] text-white"
                        : "rounded-bl-sm border border-[#E8D8C8] bg-white text-[#3B2925]"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">
                      {message.text}
                    </p>

                    {message.link && (
                      <a
                        href={message.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#F6E7D8] px-3 py-2 font-medium text-[#722536] transition hover:bg-[#E8B7A5]/50"
                      >
                        {message.link.label}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Suggested questions */}
              <div className="pt-1">
                <p className="mb-2 text-xs font-medium text-[#8C756C]">
                  Quick questions
                </p>

                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => sendMessage(suggestion)}
                      className="rounded-full border border-[#C8A45D]/60 bg-white px-3 py-2 text-left text-xs text-[#722536] transition hover:border-[#722536] hover:bg-[#F6E7D8]"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Message input and WhatsApp support */}
            <div className="border-t border-[#E8D8C8] bg-white/90 p-3">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage(input);
                }}
              >
                <div className="flex items-center gap-2 rounded-full border border-[#E8D8C8] bg-[#FBF5ED] py-1.5 pl-4 pr-1.5 focus-within:border-[#C8A45D]">
                  <input
                    value={input}
                    onChange={(event) =>
                      setInput(event.target.value)
                    }
                    placeholder="Ask a wedding question..."
                    aria-label="Type your wedding question"
                    maxLength={300}
                    className="min-w-0 flex-1 bg-transparent text-sm text-[#3B2925] outline-none placeholder:text-[#9B8880]"
                  />

                  <button
                    type="submit"
                    disabled={!input.trim()}
                    aria-label="Send message"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#722536] text-white transition hover:bg-[#541825] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>

              <a
                href={createWhatsAppLink(
                  "Hi! I need help with the Govind & Nishtha wedding invitation."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-[#C8A45D]/60 bg-[#F6E7D8] px-4 py-2.5 text-sm font-medium text-[#722536] transition hover:bg-[#E8B7A5]/40"
              >
                <MessageCircle className="h-4 w-4" />
                Need help? Chat on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Floating chat button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={
          isOpen ? "Close wedding assistant" : "Open wedding assistant"
        }
        aria-expanded={isOpen}
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#C8A45D]/70 bg-[#722536] text-white shadow-xl shadow-[#541825]/25 transition-colors hover:bg-[#541825] sm:h-16 sm:w-16"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#FBF5ED] bg-[#C8A45D]">
              <span className="h-1 w-1 rounded-full bg-[#541825]" />
            </span>
          </>
        )}
      </motion.button>
    </div>
  );
}
