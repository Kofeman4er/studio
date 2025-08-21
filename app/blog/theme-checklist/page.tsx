import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopify Theme Launch Checklist — Your Agency",
  description:
    "A practical pre-launch checklist for Shopify themes covering content, performance, tracking, SEO, and accessibility.",
};

const SECTIONS: { title: string; items: string[] }[] = [
  {
    title: "Content & UX",
    items: [
      "Header, nav, and footer links tested on mobile & desktop",
      "Homepage hero text and CTAs verified",
      "PDP: variant selection, media zoom, size guides, trust badges",
      "Cart: shipping thresholds, discount codes, upsells",
      "Error states and 404 styled",
    ],
  },
  {
    title: "Performance",
    items: [
      "Image sizes optimized (cover vs. contain, lazy loading on lists)",
      "App bloat check (remove unused apps, defer non-critical JS)",
      "Third-party scripts behind consent where required",
      "Core Web Vitals checked on staging",
    ],
  },
  {
    title: "SEO",
    items: [
      "Unique titles & meta descriptions for key pages",
      "Canonical tags on product/collection templates if needed",
      "Sitemap submitted; robots.txt reviewed",
      "301 redirects for URL changes",
    ],
  },
  {
    title: "Tracking & Analytics",
    items: [
      "GA4 + Consent mode (if applicable)",
      "Meta pixel events mapped (ViewContent, AddToCart, InitiateCheckout, Purchase)",
      "UTM tagging on launch campaigns",
      "Server-side events (if using) validated",
    ],
  },
  {
    title: "Accessibility",
    items: [
      "Semantic headings (H1/H2) and landmark roles",
      "Focusable, visible outlines; sufficient contrast",
      "Alt text for meaningful images; decorative images hidden",
      "Keyboard navigation through modals and menus",
    ],
  },
  {
    title: "Go-Live Ops",
    items: [
      "Store settings: payments, shipping, taxes, legal",
      "Disable password page; enable apps necessary for checkout",
      "Staging theme preserved; backup taken",
      "Monitoring in place (real-time analytics & error tracking)",
    ],
  },
];

export default function Page() {
  return (
    <section className="container mx-auto px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
          Resource
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          Shopify Theme Launch Checklist
        </h1>
        <p className="mt-3 text-slate-600">
          A concise, practical list we use before every theme launch. Copy it, adapt it, ship faster.
        </p>
      </header>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {SECTIONS.map((s) => (
          <article key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">{s.title}</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {s.items.map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-500"
                  />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 text-center">
        <h3 className="text-lg font-semibold text-slate-900">Need a pre-launch audit?</h3>
        <p className="mt-1 text-sm text-slate-600">
          We can review your theme for performance, SEO, and accessibility before go-live.
        </p>
        <div className="mt-4">
          <Link
            href="/contact?service=themes#intake"
            className="inline-flex items-center rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Request an audit
          </Link>
        </div>
      </div>
    </section>
  );
}
