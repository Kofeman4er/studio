import type { Metadata } from "next";
import Link from "next/link";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Testimonials, { Testimonial } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Services — Your Agency | Shopify Design, Development, Plus, Apps",
  description:
    "Full-stack Shopify services: custom development, Shopify Plus, theme design, migrations, apps & API integrations, CRO, and ongoing support.",
};

type Detail = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  cta?: { label: string; href: string };
};

const DETAILS: Detail[] = [
  {
    id: "custom-dev",
    title: "Custom Shopify Development",
    summary:
      "Bespoke storefronts built with Liquid and React patterns, tuned for speed, accessibility, and maintainability.",
    bullets: [
      "Custom sections/blocks for flexible content",
      "Performance budgets & Core Web Vitals optimization",
      "Accessibility (WCAG) baked into components",
    ],
    cta: { label: "Start a project", href: "/contact" },
  },
  {
    id: "shopify-plus",
    title: "Shopify Plus Solutions",
    summary:
      "Enterprise architecture, international storefronts, and complex operations on Plus.",
    bullets: [
      "Multi-store & multi-region setups",
      "B2B/Wholesale experiences & customer pricing",
      "Checkout Extensibility & Functions",
    ],
    cta: { label: "Talk to our Plus team", href: "/contact" },
  },
  {
    id: "themes",
    title: "Theme Design & Customization",
    summary:
      "Conversion-focused design systems and theme work aligned to your brand.",
    bullets: [
      "UX research & wireframes through polished UI",
      "Responsive layouts & section-first content model",
      "Design tokens for consistency at scale",
    ],
    cta: { label: "See our work", href: "/portfolio" },
  },
  {
    id: "migrations",
    title: "Migrations to Shopify",
    summary:
      "Risk-managed replatforming from WooCommerce, Magento, BigCommerce, or custom stacks.",
    bullets: [
      "Data migration with field/URL mapping & redirects",
      "SEO parity & analytics continuity",
      "Parallel staging & controlled cutover",
    ],
    cta: { label: "Plan my migration", href: "/contact" },
  },
  {
    id: "apps",
    title: "Apps & API Integrations",
    summary:
      "Private/public apps, backend services, and integrations with your ERP, 3PL, or marketing stack.",
    bullets: [
      "Admin & public apps using GraphQL/REST",
      "ERP/OMS/3PL & marketing integrations",
      "Headless/hybrid architectures when needed",
    ],
    cta: { label: "Discuss integrations", href: "/contact" },
  },
  {
    id: "cro",
    title: "CRO & Ongoing Optimization",
    summary:
      "Experiments, speed audits, and UX improvements that move the needle.",
    bullets: [
      "A/B testing & experiment design",
      "Analytics, tagging, dashboards",
      "Performance audits & remediation",
    ],
    cta: { label: "Request an audit", href: "/contact" },
  },
  {
    id: "support",
    title: "Support & Maintenance",
    summary:
      "Reliable retainers for updates, security, and proactive improvements.",
    bullets: [
      "SLA-based support with defined response times",
      "Quarterly roadmaps & sprint execution",
      "Monthly reporting and insights",
    ],
    cta: { label: "Set up a retainer", href: "/contact" },
  },
];

// Example testimonials for this page
const SERVICE_TESTIMONIALS: Testimonial[] = [
  {
    name: "Jamie Ortega",
    role: "VP Ecommerce",
    company: "Lumina",
    quote:
      "Their Shopify Plus expertise saved us weeks of work. Everything from design to integrations was flawless.",
    avatar: { src: "/images/avatars/jamie.jpg" },
    rating: 5,
  },
  {
    name: "Sara Kim",
    role: "GM, DTC",
    company: "Peak Labs",
    quote:
      "Our migration to Shopify was seamless. We saw a 28% lift in conversions within the first month.",
    avatar: { src: "/images/avatars/sara.jpg" },
    rating: 5,
  },
];

export default function Page() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-sky-50/50 to-white">
        <div className="container mx-auto px-4 py-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Services
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Shopify services for growth
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Strategy, design, development, and optimization—so your storefront
            converts better, ships faster, and scales cleanly.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {DETAILS.map((d) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                {d.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <ServicesGrid />

      {/* Details */}
      <section className="bg-white">
        <div className="container mx-auto px-4 pb-24">
          <div className="mx-auto max-w-3xl">
            {DETAILS.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="scroll-mt-24 border-t border-slate-200 py-10 first:border-t-0 first:pt-0"
              >
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-slate-600">{item.summary}</p>

                <ul className="mt-4 space-y-2 text-slate-700">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-500"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {item.cta && (
                  <div className="mt-5">
                    <Link
                      className="inline-flex items-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
                      href={item.cta.href}
                    >
                      {item.cta.label}
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        eyebrow="Client feedback"
        heading="Merchants love working with us"
        subheading="Here’s what a few Shopify brands say about our services."
        testimonials={SERVICE_TESTIMONIALS}
        columns={2}
      />
    </>
  );
}
