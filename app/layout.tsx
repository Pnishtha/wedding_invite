// import type { Metadata } from "next";
// import { Playfair_Display, Inter } from "next/font/google";
// import "./globals.css";

// const playfair = Playfair_Display({
//   variable: "--font-playfair",
//   subsets: ["latin"],
// });

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   metadataBase: new URL("https://your-domain.com"),

//   title: {
//     default: "Govind & Nishtha | Wedding Invitation",
//     template: "%s | Govind & Nishtha",
//   },

//   description:
//     "Join Govind and Nishtha as they begin their forever. Celebrate their wedding with us on 02 December 2026.",

//   keywords: [
//     "Aarav and Ananya wedding",
//     "wedding invitation",
//     "Indian wedding",
//     "digital wedding invitation",
//     "New Delhi wedding",
//     "wedding invitation website",
//   ],

//   authors: [
//     {
//       name: "Govind & Nishtha",
//     },
//   ],

//   creator: "Govind & Nishtha",

//   openGraph: {
//     title: "Govind & Nishtha | Wedding Invitation",

//     description:
//       "Join us as we begin our forever. 14 February 2027 · The Grand Palace, New Delhi.",

//     url: "https://your-domain.com",

//     siteName: "Govind & Nishtha Wedding",

//     type: "website",

//     locale: "en_IN",

//     images: [
//       {
//         url: "/images/wedding-og.png",
//         width: 1200,
//         height: 630,
//         alt: "Govind & Nishtha Wedding Invitation",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",

//     title: "Govind & Nishtha | Wedding Invitation",

//     description:
//       "Join us as we begin our forever. 14 February 2027 · The Grand Palace, New Delhi.",

//     images: ["/images/wedding-og.png"],
//   },

//   robots: {
//     index: true,
//     follow: true,

//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//       "max-video-preview": -1,
//     },
//   },

//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en-IN">
//       <body className={`${playfair.variable} ${inter.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }




import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Set NEXT_PUBLIC_SITE_URL in .env.local and on your host, e.g.
//   NEXT_PUBLIC_SITE_URL=https://govind-weds-nishtha.com
// WhatsApp, Facebook and X need the *absolute* https URL to fetch the preview image.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com";

const title = "Govind & Nishtha | Wedding Invitation";
const description =
  "Join Govind and Nishtha as they begin their forever. 02 December 2026 · Hotel Bobina, Gorakhpur.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: title,
    template: "%s | Govind & Nishtha",
  },

  description,

  keywords: [
    "Govind and Nishtha wedding",
    "wedding invitation",
    "Indian wedding",
    "digital wedding invitation",
    "Gorakhpur wedding",
    "Begusarai",
  ],

  authors: [{ name: "Govind & Nishtha" }],
  creator: "Govind & Nishtha",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Govind & Nishtha Wedding",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/wedding-og.png", // file lives in public/images/
        width: 1200,
        height: 630,
        alt: "Govind & Nishtha are getting married on 02 December 2026",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/wedding-og.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

// Tints the browser bar on phones to match the site
export const viewport: Viewport = {
  themeColor: "#722536",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}