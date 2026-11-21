import type { Metadata } from "next";
import { Oswald, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const oswald = Oswald({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"], 
  variable: "--font-oswald",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://armour-gym-pi.vercel.app"),
  title: {
    default: "Armour 24-7 Gym | Best 24-Hour Gym in Hathijan Circle, Ahmedabad",
    template: "%s | Armour 24-7 Gym Ahmedabad",
  },
  description:
    "Armour 24-7 Gym is premier 24-hour fitness center & strength gym in Hathijan Circle, Ahmedabad. Features imported machinery, Olympic weights, cardio zones, certified personal trainers & ladies fitness with round-the-clock biometric access.",
  keywords: [
    "Armour Gym",
    "Armour 24-7 Gym",
    "Armour 24/7 Gym Ahmedabad",
    "Armour Gym Hathijan",
    "Gym in Hathijan",
    "Gym in Hathijan Circle",
    "Best gym in Hathijan",
    "Gym in Ahmedabad",
    "Best gym in Ahmedabad",
    "Top gym in Ahmedabad",
    "24 hour gym Ahmedabad",
    "24/7 gym Ahmedabad",
    "Gyms near Hathijan Circle 382445",
    "Fitness center Hathijan Ahmedabad",
    "Personal trainer Ahmedabad",
    "Ladies gym Hathijan",
    "Imported gym equipment Ahmedabad",
    "Powerlifting gym Ahmedabad",
  ],
  authors: [{ name: "Armour 24-7 Gym Management" }],
  creator: "Armour 24-7 Gym",
  publisher: "Armour 24-7 Gym Ahmedabad",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Armour 24-7 Gym",
    title: "Armour 24-7 Gym | Best 24-Hour Gym in Hathijan Circle, Ahmedabad",
    description:
      "Ahmedabad's leading 24/7 gym at Hathijan Circle. Imported strength equipment, certified trainers, cardio line, studio workouts and round-the-clock biometric keycard entry.",
    url: "https://armour-gym-pi.vercel.app",
    images: [
      {
        url: "/images/dummy-hero.webp",
        width: 1200,
        height: 630,
        alt: "Armour 24-7 Gym Training Floor in Hathijan Circle, Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Armour 24-7 Gym | Best Gym in Hathijan, Ahmedabad",
    description:
      "24/7 biometric gym access, imported strength equipment, Olympic lifting platforms, and certified coaching in Hathijan Circle, Ahmedabad.",
    images: ["/images/dummy-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  category: "fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Hathijan Circle" />
        <meta name="geo.position" content="22.9515;72.6450" />
        <meta name="ICBM" content="22.9515, 72.6450" />
      </head>
      <body
        suppressHydrationWarning
        className={`${oswald.variable} ${montserrat.variable} bg-[#0a0a0a] text-white font-body antialiased min-h-screen flex flex-col selection:bg-[#C8010A] selection:text-white`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
