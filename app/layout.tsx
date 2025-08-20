// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { cookies } from "next/headers";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/cookies/CookieBanner";
import { CONSENT_COOKIE, parseConsentCookie } from "@/lib/consent";

export const metadata: Metadata = {
  title: "Your Agency — Shopify Development Experts",
  description: "Shopify Plus & custom development for ecommerce brands.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies(); // 👈 FIX: await here
  const raw = cookieStore.get(CONSENT_COOKIE)?.value;
  const consent = parseConsentCookie(raw);

  const analyticsAllowed = consent?.analytics === true;
  const marketingAllowed = consent?.marketing === true;

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-grow bg-gray-50 text-black">{children}</main>
        <Footer />
        <CookieBanner />

        {/* Conditional scripts */}
        {analyticsAllowed && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}

        {marketingAllowed && process.env.NEXT_PUBLIC_META_PIXEL && (
          <Script id="fb-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
