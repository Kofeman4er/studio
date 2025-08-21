import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopify Speed Optimization — Your Agency",
  description:
    "Improve Core Web Vitals and conversion with targeted performance work on Shopify themes and apps.",
};

const PACKAGES = [
  {
    name: "Essentials",
    price: "from $2,500",
    bullets: [
      "Performance audit & prioritized roadmap",
      "Image strategy (sizes, formats, lazy loading)",
      "Theme JS/CSS slimming (dead code & splitting)",
      "App bloat assessment & quick wins",
    ],
  },
  {
    name: "Growth",
    price: "from $6,500",
    bullets: [
      "All Essentials + implementation",
      "Third-party script strategy + consent integration",
      "Hydration strategy for sections (where applicable)",
      "Before/after CWV report & monitoring setup",
    ],
  },
  {
    name: "Plus",
    price: "Custom",
    bullets: [
      "Multi-store strategy & shared assets",
      "Checkout Extensibility performance review",
      "Advanced image/CDN rules & worker edge logic",
      "Ongoing monitoring & monthly tune-ups",
    ],
  },
];

export default function Page() {
  return (
    <section className="container mx-auto px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Services
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          Shopify Speed Optimization
        </h1>
        <p className="mt-3 text-slate-600">
          Faster sites convert better. We fix what actually slows you down—theme code, media,
          and third-party scripts—then set guardrails so it stays fast.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PACKAGES.map((p) => (
          <article
            key={p.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{p.name}</h2>
            <div className="mt-1 text-sm text-slate-500">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {p.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-600"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-6 text-center">
        <h3 className="text-lg font-semibold text-slate-900">Get your speed roadmap</h3>
        <p className="mt-1 text-sm text-slate-600">
          We’ll audit your store and share a prioritized plan with expected impact and effort.
        </p>
        <div className="mt-4">
          <Link
            href="/contact?service=cro#intake"
            className="inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Request a speed audit
          </Link>
        </div>
      </div>
    </section>
  );
}
