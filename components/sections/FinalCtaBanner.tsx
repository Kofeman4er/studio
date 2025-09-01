// components/sections/FinalCtaBanner.tsx
"use client";

import Link from "next/link";

export default function FinalCtaBanner() {
  return (
    <section className="relative border-t border-slate-200 bg-gradient-to-b from-sky-600 to-sky-700">
      <div className="container mx-auto px-4 py-20 text-center text-white">
        {/* Heading */}
        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Ready to grow your Shopify store?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-sky-100 sm:text-lg">
          Partner with us to ship faster, sell more, and scale with confidence.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact?service=custom-dev#intake"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-sky-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Start a project
          </Link>

          
        </div>
      </div>

      {/* Decorative subtle gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
      />
    </section>
  );
}
