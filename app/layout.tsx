import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/sections/ServicesGrid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Agency — Shopify Experts",
  description: "We build high-converting Shopify stores and apps.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        {/* ...Header */}
        <main id="main">{children}</main>
        <Footer
          brand="Your Agency"
          socials={{ linkedin: "https://linkedin.com/company/youragency", x: "#", github: "#" }}
          newsletter={{ enabled: true, action: "/api/subscribe", placeholder: "Your email" }}
        />
      </body>
    </html>
  );
}

