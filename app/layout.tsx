import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// app/layout.tsx (or app/(site)/layout.tsx)
export const metadata = {
  metadataBase: new URL("http://localhost:3000/"), // <— set your domain
  // ...other global metadata
};

/*export const metadata: Metadata = {
  title: "Your Agency — Shopify Development Experts",
  description: "Shopify Plus & custom development for ecommerce brands.",
};*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />  {/* <-- This is where your header is injected */}
        <main className="flex-grow bg-gray-50 text-black">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
