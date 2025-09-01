// app/not-found.tsx
"use client"
import Link from "next/link";
import type { CSSProperties } from "react";
import { Compass, Home, Wrench, HelpCircle, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative overflow-hidden bg-white">

      {/* hero */}
      <section className="container mx-auto px-4 pt-20 pb-10 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
          <Compass className="h-4 w-4 text-sky-600" aria-hidden />
          Lost in the site map
        </div>

        <h1 className="mt-5 text-6xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
          4<span className="text-sky-600">0</span>4
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          The page you’re looking for doesn’t exist—or moved. Let’s get you back to something useful.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            <Home className="h-4 w-4" aria-hidden />
            Go home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            <Wrench className="h-4 w-4 text-sky-600" aria-hidden />
            Explore services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            <HelpCircle className="h-4 w-4 text-sky-600" aria-hidden />
            Contact us
          </Link>
        </div>
      </section>

      {/* marquee ribbon (non-interactive, subtle, infinite) */}
      <section className="relative mx-auto mb-16 mt-6 max-w-5xl">
        <div
          className="mask-fade pointer-events-none relative h-11 overflow-hidden"
          aria-hidden
        >
          <div
            className="marquee-track flex items-center gap-4 opacity-90"
            style={{ "--speed": "36s" } as CSSProperties}
          >
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex min-w-full items-center justify-around gap-3 px-3">
                {[
                  "Shopify",
                  "Theme Design",
                  "Apps",
                  "Hydrogen",
                  "CRO",
                  "SEO",
                  "B2B",
                  "Plus",
                ].map((t) => (
                  <span
                    key={`${t}-${dup}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur"
                  >
                    <SparkleDot />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* helpful links grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Popular services"
            desc="See how we help brands ship faster and convert more."
            href="/services"
          />
          <Card
            title="Recent insights"
            desc="Our take on Shopify performance, CRO, and design."
            href="/blog"
          />
          <Card
            title="Start a project"
            desc="Tell us your goals. We’ll propose a practical path."
            href="/contact?service=custom-dev#intake"
          />
        </div>
      </section>

      <style jsx>{`
        .mask-fade::before,
        .mask-fade::after {
          content: "";
          position: absolute;
          top: 0;
          height: 100%;
          width: 48px;
          z-index: 10;
          pointer-events: none;
        }
        .mask-fade::before {
          left: 0;
          background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        }
        .mask-fade::after {
          right: 0;
          background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        }
        .marquee-track {
          animation: ribbon var(--speed, 36s) linear infinite;
          will-change: transform;
        }
        @keyframes ribbon {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}

function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
        <ArrowRight className="mt-1 h-5 w-5 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-sky-600" />
      </div>
    </Link>
  );
}

function SparkleDot() {
  return (
    <span className="relative inline-flex">
      <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-sky-400 opacity-60" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
    </span>
  );
}
