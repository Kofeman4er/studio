import type { Metadata } from "next";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Testimonials, { Testimonial } from "@/components/sections/Testimonials";
import ServiceDetail from "@/components/sections/ServiceDetail";
import type { ServiceDetailProps } from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Services Devsolutify | Shopify Design, Development, Plus, Apps",
  description:
    "Full-stack Shopify services: custom development, Shopify Plus, theme design, migrations, apps & API integrations, CRO, and ongoing support.",
};

type Detail = Omit<ServiceDetailProps, "reverse"> & { id: string };

const DETAILS: Detail[] = [
  {
    id: "custom-dev",
    title: "Customize your ecommerce exactly the way you want",
    lead: "Shopify is great for customization.",
    body:
      "What if your business model offers unique processes and no ready-made e-commerce can host them? We design and build bespoke storefronts with Liquid, React, and Tailwind so your team can move fast without constraints.",
    bullets: [
      "Custom sections/blocks your team can edit",
      "Core Web Vitals performance optimization",
      "WCAG 2.1 AA accessibility in components",
    ],
    cta: { label: "Book a meeting", href: "/contact?service=custom-dev#intake" },
    image: { src: "/images/services/custom-dev.jpg", alt: "Developer working on a Shopify theme" },
    accent: { color: "bg-yellow-400" },
  },
  {
    id: "shopify-plus",
    title: "Complex operations on Shopify Plus, simplified",
    lead: "Enterprise architecture, international stores, and B2B built to scale.",
    body:
      "From multi-region catalogs to checkout extensibility and B2B pricing, we ship Plus solutions that balance power and maintainability.",
    bullets: [
      "Multi-store / multi-region setups",
      "B2B/Wholesale experiences & company accounts",
      "Checkout Extensibility & Functions",
    ],
    cta: { label: "Talk to our Plus team", href: "/contact?service=shopify-plus#intake" },
    image: { src: "/images/services/plus.jpg", alt: "Shopify Plus operations dashboard" },
    accent: { color: "bg-sky-400" },
  },
  {
    id: "themes",
    title: "Theme design that looks great and converts",
    lead: "Design systems and custom themes that balance brand and performance.",
    body:
      "From research and wireframes to polished UI, we build section-first themes your team can update without dev help fast, accessible, and responsive across devices.",
    bullets: [
      "UX research, wireframes, and high-fidelity UI",
      "Reusable sections/blocks with design tokens",
      "A11y and SEO baked into the theme",
    ],
    cta: { label: "See our work", href: "/portfolio#themes" },
    image: { src: "/images/services/themes.jpg", alt: "Custom Shopify theme layouts" },
    accent: { color: "bg-rose-400" },
  },
  {
    id: "migrations",
    title: "Zero-drama migrations to Shopify",
    lead: "Replatform from WooCommerce, Magento, BigCommerce, or custom stacks without losing SEO.",
    body:
      "We plan redirects, map data, preserve analytics, and orchestrate a clean cutover so your traffic and revenue stay intact while performance improves.",
    bullets: [
      "Data & URL mapping + 301 redirect plan",
      "SEO parity, tracking & analytics continuity",
      "Parallel staging and controlled launch",
    ],
    cta: { label: "Plan my migration", href: "/contact?service=migrations#intake" },
    image: { src: "/images/services/migrations.jpg", alt: "Migration plan and data mapping" },
    accent: { color: "bg-amber-400" },
  },
  {
    id: "apps",
    title: "Custom apps & API integrations",
    lead: "Extend Shopify with private/public apps and reliable integrations.",
    body:
      "We build Admin and public apps, connect ERPs, CRMs, 3PLs, and marketing tools, and ship robust GraphQL/REST integrations designed for scale.",
    bullets: [
      "Admin & public apps (App Bridge, Polaris)",
      "GraphQL/REST integrations to ERP/OMS/3PL",
      "Headless/hybrid architectures when needed",
    ],
    cta: { label: "Discuss integrations", href: "/contact?service=apps#intake" },
    image: { src: "/images/services/apps.jpg", alt: "Shopify app UI and API diagrams" },
    accent: { color: "bg-indigo-400" },
  },
  {
    id: "cro",
    title: "CRO & ongoing optimization",
    lead: "Iterate with data, not guesses.",
    body:
      "We run experiments, fix UX friction, and improve speed. Expect clear hypotheses, measurable results, and a steady drumbeat of wins.",
    bullets: [
      "A/B testing & experiment design",
      "Analytics, tagging, dashboards & insights",
      "Performance audits and remediation",
    ],
    cta: { label: "Request an audit", href: "/contact?service=cro#intake" },
    image: { src: "/images/services/cro.jpg", alt: "Conversion dashboards and experiment results" },
    accent: { color: "bg-emerald-400" },
  },
  {
    id: "support",
    title: "Support & maintenance",
    lead: "Reliable retainers for updates, security, and proactive improvements.",
    body:
      "From small enhancements to roadmap delivery, we operate like your product team-prioritized sprints, SLAs, and transparent reporting.",
    bullets: [
      "SLA-based support with clear response times",
      "Quarterly roadmaps & sprint execution",
      "Monthly reporting and insights",
    ],
    cta: { label: "Set up a retainer", href: "/contact?service=support#intake" },
    image: { src: "/images/services/support.jpg", alt: "Roadmap planning and sprint board" },
    accent: { color: "bg-slate-400" },
  },
  {
    id: "seo",
    title: "Shopify SEO & Content Marketing",
    lead: "Technical SEO and content programs that compound organic growth.",
    body:
      "We fix crawl and index issues, structure your theme for search, and ship content that targets revenue-driving queries. Measurement is built in with Search Console/GA4 dashboards and an iterate-to-impact cadence.",
    bullets: [
      "Technical SEO: crawlability, indexation, canonicals, redirects, structured data",
      "Content: keyword research, briefs, on-page optimization, internal linking",
      "Measurement: GA4 & GSC dashboards, goals, and monthly iteration"
    ],
    cta: { label: "Plan my SEO program", href: "/contact?service=seo#intake" },
    image: { src: "/images/services/seo.jpg", alt: "Analytics dashboard and content planning" },
    accent: { color: "bg-emerald-500" },
  }

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
            Strategy, design, development, and optimization - so your storefront
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
      <ServicesShowcase />

      {/* Rich detailed sections (alternating layout) */}
      <section className="bg-white">
        {DETAILS.map((item, i) => (
          <ServiceDetail
            key={item.id}
            {...item}
            reverse={i % 2 === 1}   // alternate layout each row
          />
        ))}
      </section>

      {/* Testimonials */}
      {/*<Testimonials
        eyebrow="Client feedback"
        heading="Merchants love working with us"
        subheading="Here’s what a few Shopify brands say about our services."
        testimonials={SERVICE_TESTIMONIALS}
        columns={2}
      />*/}
    </>
  );
}
