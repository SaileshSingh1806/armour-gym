import type { Metadata } from "next";
import { Oswald, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const oswald = Oswald({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"], 
  variable: "--font-oswald" 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat" 
});

export const metadata: Metadata = {
  title: "Armour 24-7 Gym | Ahmedabad’s Hardcore Strength & Performance Hub",
  description: "Experience 24/7 biometric gym access, elite Hammer Strength & Eleiko equipment, certified strength coaches, and recovery zones in Ahmedabad 382445.",
  keywords: ["Armour 24-7 Gym", "Gym in Ahmedabad", "24/7 Gym Ahmedabad", "Bodybuilding gym", "Powerlifting Ahmedabad", "Fitness center 382445"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${oswald.variable} ${montserrat.variable} bg-[#0a0a0a] text-white font-body antialiased min-h-screen flex flex-col selection:bg-[#ff2a3b] selection:text-white`}
      >
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}