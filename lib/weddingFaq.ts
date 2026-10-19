
export type WeddingFaq = {
  id: string;
  question: string;
  answer: string;
  keywords?: string[];
  link?: {
    label: string;
    href: string;
  };
};

export const WEDDING_FACTS = {
  couple: "Govind & Nishtha",
  date: "02 December 2026",
  venue: "Hotel Bobina, Gorakhpur, Uttar Pradesh",
  ceremonyTime: "To be confirmed",
  whatsappNumber: "919717722913",
  venueMapUrl:
    "https://www.google.com/maps/place/Hotel+Bobina,+Gorakhpur/@26.7613103,83.362008,17z/data=!4m9!3m8!1s0x3991444245a7d497:0xdb6353070ec29ee5!5m2!4m1!1i2!8m2!3d26.7613103!4d83.3645829!16s%2Fg%2F1hd_6qv34?entry=ttu",
};

export const WEDDING_FAQS: WeddingFaq[] = [
  {
    id: "wedding-date",
    question: "When is the wedding?",
    answer:
      "Govind and Nishtha's wedding is on 02 December 2026. We look forward to celebrating with you!",
    keywords: [
      "date",
      "when",
      "wedding",
      "day",
      "december",
      "2026",
      "shaadi",
      "shadi",
      "शादी",
      "तारीख",
      "कब",
    ],
  },
  {
    id: "wedding-venue",
    question: "Where is the wedding?",
    answer:
      "The wedding venue is Hotel Bobina in Gorakhpur, Uttar Pradesh.",
    keywords: [
      "where",
      "venue",
      "location",
      "address",
      "hotel",
      "bobina",
      "gorakhpur",
      "directions",
      "map",
      "जगह",
      "कहाँ",
      "लोकेशन",
    ],
    link: {
      label: "Get directions",
      href: WEDDING_FACTS.venueMapUrl,
    },
  },
  {
    id: "ceremony-time",
    question: "What time does the wedding start?",
    answer:
      "The wedding ceremony time has not been confirmed yet. Please contact the wedding family on WhatsApp for the latest information.",
  },
  {
    id: "rsvp",
    question: "How do I confirm my attendance?",
    answer:
      "Please use the RSVP section on the wedding invitation website if it is available, or contact the wedding family on WhatsApp for help.",
    keywords: [
      "rsvp",
      "attend",
      "attendance",
      "confirm",
      "coming",
      "respond",
      "register",
      "उपस्थित",
    ],
  },
  {
    id: "dress-code",
    question: "What should I wear?",
    answer:
      "The dress code has not been announced yet. Please contact the wedding family if you need guidance.",
    keywords: [
      "dress",
      "clothes",
      "wear",
      "outfit",
      "attire",
      "कपड़े",
      "ड्रेस",
    ],
  },
  {
    id: "other-events",
    question: "When are the Mehendi and Haldi ceremonies?",
    answer:
      "The Mehendi, Haldi, and Reception schedules have not been confirmed yet. Please check back for updates or contact the wedding family.",
    keywords: [
      "mehendi",
      "mehndi",
      "haldi",
      "reception",
      "events",
      "functions",
      "कार्यक्रम",
      "हल्दी",
      "मेहंदी",
    ],
  },
  {
    id: "contact",
    question: "How can I contact the wedding family?",
    answer:
      "You can contact the wedding family through WhatsApp. Tap the button below to start a conversation.",
    keywords: [
      "contact",
      "help",
      "whatsapp",
      "phone",
      "call",
      "support",
      "संपर्क",
      "मदद",
    ],
    link: {
      label: "Chat on WhatsApp",
      href: `https://wa.me/${WEDDING_FACTS.whatsappNumber}?text=${encodeURIComponent(
        "Hi! I need some help with the Govind & Nishtha wedding invitation."
      )}`,
    },
  },
];

export const FALLBACK_FAQ: WeddingFaq = {
  id: "fallback",
  question: "I couldn't find that answer.",
  answer:
    "I'm not sure about that detail yet. Please contact the wedding family on WhatsApp, and they'll be happy to help.",
  keywords: [],
  link: {
    label: "Ask on WhatsApp",
    href: `https://wa.me/${WEDDING_FACTS.whatsappNumber}?text=${encodeURIComponent(
      "Hi! I have a question about the Govind & Nishtha wedding."
    )}`,
  },
};
