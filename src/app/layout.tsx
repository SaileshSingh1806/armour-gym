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
  openGraph: {
    type: "website",
    siteName: "ARMOUR 24-7 GYM",
    title: "ARMOUR 24-7 GYM | Hathijan, Ahmedabad",
    description: "More than a gym. It's a movement. Discover imported equipment, training and 24/7 member access.",
    images: ["/images/dummy-hero.webp"],
  },
  twitter: { card: "summary_large_image" },
  title: "Armour 24-7 Gym | Hathijan Circle, Ahmedabad",
  description: "24/7 gym access, imported strength machinery, dedicated free weights, and certified coaches in Hathijan Circle, Ahmedabad 382445.",
  keywords: ["Armour 24-7 Gym", "Gym in Hathijan Circle", "24/7 Gym Ahmedabad", "Fitness center 382445", "Weight training Ahmedabad"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
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
