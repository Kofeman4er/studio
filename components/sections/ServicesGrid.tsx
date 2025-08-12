"use client";

import Link from "next/link";
import { ReactNode } from "react";

type Service = {
  title: string;
  href: string;              // e.g. "/services#custom-dev"
  description: string;
  features?: string[];       // quick bullets
  icon?: ReactNode;          // optional custom icon
  badge?: string;            // e.g. "Popular", "Plus"
};

type Props = {
  heading?: string;
  subheading?: string;
  services?: Service[];
};

const IconWrap = ({ children }: { children: ReactNode }) => (
  <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
    {children}
  </div>
);

// Minimal inline icons (no deps)
const Icons = {
  code: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M9.4 16.6 5.8 13l3.6-3.6-1.4-1.4L3 13l4.4 4.4 2-2.8ZM14.6 7.4 18.2 11l-3.6 3.6 1.4 1.4L21 11l-4.4-4.4-2 2.8ZM13.1 4 9.9 20h2.1L15.2 4h-2.1Z" />
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5Z" />
    </svg>
  ),
  theme: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-4.8 3.6A1 1 0 0 1 7 20v-3H6a3 3 0 0 1-3-3V6Zm3-1h12a1 1 0 0 1 1 1v3H5V6a1 1 0 0 1 1-1Z" />
    </svg>
  ),
  migrate: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 3 7 8h3v4h4V8h3l-5-5Zm0 18 5-5h-3v-4h-4v4H7l5 5Z" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M7 2h2v3h6V2h2v3h2a2 2 0 0 1 2 2v3h-2V7H5v3H3V7a2 2 0 0 1 2-2h2V2Zm14 12v3a2 2 0 0 1-2 2h-2v3h-2v-3H9v3H7v-3H5a2 2 0 0 1-2-2v-3h2v3h14v-3h2Z" />
    </svg>
  ),
  cro: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M3 13h4l3 7 4-14 3 7h4" />
      <circle cx="5" cy="5" r="2" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2a8 8 0 0 0-8 8v5a3 3 0 0 0 3 3h2v-6H7v-2a5 5 0 1 1 10 0v2h-2v6h2a3 3 0 0 0 3-3v-5a8 8 0 0 0-8-8Z" />
    </svg>
  ),
};

const DEFAULT_SERVICES: Service[] = [
  {
    title: "Custom Shopify Development",
    href: "/services#custom-dev",
    description:
      "Bespoke storefronts with Liquid, React, and performance-first patterns tailored to your brand.",
    features: ["Custom sections & blocks", "Speed & SEO best practices", "Accessibility A11y"],
    icon: Icons.code,
  },
  {
    title: "Shopify Plus Solutions",
    href: "/services#shopify-plus",
    description:
      "Enterprise builds, internationalization, and complex ops—designed to scale on Plus.",
    features: ["Multi-store architecture", "B2B & wholesale", "Checkout extensibility"],
    icon: Icons.plus,
    badge: "Plus",
  },
  {
    title: "Theme Design & Customization",
    href: "/services#themes",
    description:
      "Design systems and theme work that balance brand expression and conversion.",
    features: ["UX/UI design", "Responsive layouts", "Section-first content model"],
    icon: Icons.theme,
  },
  {
    title: "Migrations to Shopify",
    href: "/services#migrations",
    description:
      "Smooth replatforming from Woo, Magento, BigCommerce, or custom stacks—without SEO loss.",
    features: ["Data & URL mapping", "Redirects & SEO parity", "Risk-managed launches"],
    icon: Icons.migrate,
  },
  {
    title: "Apps & API Integrations",
    href: "/services#apps",
    description:
      "Custom apps, backend services, and integrations with your ERP, 3PL, or marketing stack.",
    features: ["Admin & public apps", "GraphQL/REST APIs", "Headless options"],
    icon: Icons.api,
  },
  {
    title: "CRO & Ongoing Optimization",
    href: "/services#cro",
    description:
      "Conversion experiments, speed audits, and UX improvements that move the needle.",
    features: ["A/B testing", "Analytics & tagging", "Performance budgets"],
    icon: Icons.cro,
  },
  {
    title: "Support & Maintenance",
    href: "/services#support",
    description:
      "Reliable retainers for updates, security, and proactive improvements.",
    features: ["SLA-based support", "Roadmaps & sprints", "Monthly reporting"],
    icon: Icons.support,
  },
];

export default function ServicesGrid({
  heading = "What we do",
  subheading = "Full-stack Shopify design, development, and growth services.",
  services = DEFAULT_SERVICES,
}: Props) {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
            Services
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-slate-600">{subheading}</p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              {/* Badge */}
              {s.badge && (
                <span className="absolute right-4 top-4 rounded-full border border-sky-200 bg-sky-50 px-2 py-0.5 text-xs font-semibold text-sky-700">
                  {s.badge}
                </span>
              )}

              {/* Icon */}
              {s.icon && <IconWrap>{s.icon}</IconWrap>}

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900">
                <Link
                  href={s.href}
                  className="after:absolute after:inset-0"
                  aria-label={s.title}
                >
                  {s.title}
                </Link>
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.description}</p>

              {/* Features */}
              {s.features?.length ? (
                <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-500"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* CTA */}
              <div className="mt-5">
                <Link
                  href={s.href}
                  className="inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-800"
                >
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* soft background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-24 -z-10 h-64 bg-gradient-to-b from-white to-sky-50/60"
      />
    </section>
  );
}
