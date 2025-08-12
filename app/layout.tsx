import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Your Agency — Shopify Development Experts",
  description: "Shopify Plus & custom development for ecommerce brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />  {/* <-- This is where your header is injected */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
