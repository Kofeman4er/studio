import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — Your Agency",
  description:
    "Real Shopify results: migrations, redesigns, and performance lifts from our client work.",
};

type Case = {
  slug: string;        // link to your real case page if you have it (e.g., /portfolio/acme-cvr-lift)
  title: string;
  result: string;      // quick outcome / KPI
  summary: string;
  image: string;       // /public path 1200x800 recommended
  tags: string[];
};

const CASES: Case[] = [
  {
    slug: "/portfolio/acme-cvr-lift",
    title: "ACME — 28% Conversion Lift",
    result: "+28% CVR • -35% LCP",
    summary:
      "Theme refactor to section-first architecture, image strategy overhaul, and CRO experiments across PDP/Cart.",
    image: "/images/portfolio/acme-hero.jpg",
    tags: ["CRO", "Performance", "Theme Dev"],
  },
  {
    slug: "/portfolio/lumina-migration",
    title: "Lumina — Magento → Shopify Plus",
    result: "0 SEO loss • +22% revenue",
    summary:
      "Risk-managed replatform with URL mapping, analytics parity, B2B price lists, and custom checkout extensions.",
    image: "/images/portfolio/lumina-hero.jpg",
    tags: ["Migration", "Plus", "B2B"],
  },
  {
    slug: "/portfolio/peak-ops",
    title: "Peak Labs — Ops & Apps",
    result: "-40% manual ops • +18% AOV",
    summary:
      "Private app for bundles, ERP/3PL integrations, and a design system enabling faster landing page launches.",
    image: "/images/portfolio/peak-hero.jpg",
    tags: ["Apps", "Integrations", "Design System"],
  },
];

export default function Page() {
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
              <div className="text-xs font-semibold text-emerald-700">{c.result}</div>
              <Link href={c.slug}>
                <h2 className="mt-1 text-lg font-semibold text-slate-900">{c.title}</h2>
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

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 text-center">
        <h3 className="text-lg font-semibold text-slate-900">Have a project in mind?</h3>
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
