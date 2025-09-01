// app/portfolio/page.tsx

"use client"
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Hourglass, Sparkles } from "lucide-react";

type Case = {
  slug: string;
  title: string;
  result: string;
  summary: string;
  image: string;
  tags: string[];
};

// Tip: leave this empty for now; adding items later will auto-render the real grid.
const CASES: Case[] = [];

export default function Page() {
  const hasCases = CASES.length > 0;

  return (
    <section className="container mx-auto px-4 py-16">
      <header className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
          Work
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          Case Studies
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          A few examples of how we design, build, and grow Shopify storefronts.
        </p>
      </header>

      {hasCases ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.slug}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <Link href={c.slug} className="block">
                <div className="relative h-48 w-full">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="text-xs font-semibold text-emerald-700">
                  {c.result}
                </div>
                <Link href={c.slug}>
                  <h2 className="mt-1 text-lg font-semibold text-slate-900">
                    {c.title}
                  </h2>
                </Link>
                <p className="mt-2 text-sm text-slate-600">{c.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={c.slug}
                  className="mt-4 inline-block text-sm font-semibold text-sky-700 hover:underline"
                >
                  Read the case →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState />
      )}

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 text-center">
        <h3 className="text-lg font-semibold text-slate-900">
          Have a project in mind?
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Tell us your goals and we’ll propose a practical path on Shopify.
        </p>
        <div className="mt-4">
          <Link
            href="/contact?service=custom-dev#intake"
            className="inline-flex items-center rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <div className="mx-auto max-w-5xl">
      {/* Top card */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="p-8">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
              <Briefcase className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              Case studies coming soon
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              We’re currently curating our most recent Shopify work. In the
              meantime, explore our services or reach out. Happy to share private
              walkthroughs relevant to your goals.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Explore services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:brightness-95"
              >
                Book a call
              </Link>
            </div>

            
          </div>

          {/* Right: subtle skeleton preview */}
          <div className="relative hidden overflow-hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white" />
            <div className="absolute inset-6 grid grid-rows-3 gap-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="h-20 w-full bg-slate-100" />
                  <div className="p-4">
                    <div className="h-4 w-2/3 rounded bg-slate-200" />
                    <div className="mt-2 h-3 w-5/6 rounded bg-slate-100" />
                    <div className="mt-2 flex gap-2">
                      <span className="h-5 w-16 rounded-full bg-slate-100" />
                      <span className="h-5 w-20 rounded-full bg-slate-100" />
                    </div>
                  </div>
                  {/* shimmer */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_2.2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                </div>
              ))}
            </div>
            <style jsx>{`
              @keyframes shimmer {
                100% {
                  transform: translateX(100%);
                }
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Small “timeline” stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { k: "Themes & Redesigns", v: "In progress", icon: Hourglass },
          { k: "Migrations & Plus", v: "Scheduling", icon: Hourglass },
          { k: "Apps & CRO", v: "Ongoing", icon: Hourglass },
        ].map((s) => (
          <div
            key={s.k}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <s.icon className="h-5 w-5 text-sky-600" />
            <div>
              <div className="text-xs font-semibold text-slate-500">{s.k}</div>
              <div className="text-sm font-medium text-slate-900">{s.v}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
