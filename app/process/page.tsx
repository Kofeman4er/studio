import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Process — Your Agency",
  description:
    "Our proven Shopify process: discovery, design, build, QA, launch, and ongoing optimization—transparent, fast, and outcomes-focused.",
};

const STEPS = [
  {
    title: "01 · Discovery & Strategy",
    desc:
      "We align on goals, customers, and constraints. We audit your current site/data and turn objectives into a pragmatic plan.",
    bullets: [
      "Stakeholder interviews, analytics & tech audit",
      "KPIs & success metrics agreed upfront",
      "Scope, budget, and risk assumptions",
    ],
  },
  {
    title: "02 · UX, Content & Design",
    desc:
      "From IA and wireframes to polished UI. We design a section-first system so your team can build pages without dev time.",
    bullets: [
      "IA, flows, and wireframes",
      "Design system & tokens (colors, type, spacing)",
      "Component library & content patterns",
    ],
  },
  {
    title: "03 · Build (Theme, Sections, Apps)",
    desc:
      "We develop a performant Shopify theme with custom sections/blocks, integrations, and accessibility baked in.",
    bullets: [
      "Liquid + React patterns, TailwindCSS",
      "Custom sections/blocks & app integrations",
      "Performance budgets (Core Web Vitals)",
    ],
  },
  {
    title: "04 · QA, Content Load & UAT",
    desc:
      "Cross-browser/device testing, accessibility checks, and structured UAT with your team before launch.",
    bullets: [
      "WCAG 2.1 AA accessibility checks",
      "SEO/analytics parity & schema",
      "UAT plan with tracked issues",
    ],
  },
  {
    title: "05 · Launch",
    desc:
      "Risk-managed cutover with redirects, monitoring, and rollback plan. We stay on for hypercare.",
    bullets: [
      "Redirects, DNS, payments & tax/ship checks",
      "Monitoring & error alerting",
      "Rollback & contingency plan",
    ],
  },
  {
    title: "06 · Optimize & Grow",
    desc:
      "Post-launch improvements via CRO, performance, and roadmap sprints tied to KPIs.",
    bullets: [
      "Experiment backlog & A/B testing",
      "Iteration sprints & monthly reporting",
      "Quarterly roadmap reviews",
    ],
  },
];

const TIMELINES = [
  { label: "Express theme build", value: "3–5 weeks" },
  { label: "Custom theme", value: "6–10 weeks" },
  { label: "Shopify Plus / multi-region", value: "8–14 weeks" },
  { label: "Replatform + migration", value: "8–12 weeks" },
];

const DELIVERABLES = [
  "Audit & strategy brief",
  "IA map & wireframes",
  "Design system & UI kit",
  "Theme + sections/blocks",
  "Integration specs",
  "QA report & a11y checklist",
  "Redirect map & launch runbook",
  "Post-launch report",
];

const TOOLS = [
  "Figma (design, prototypes)",
  "Linear/Jira (issues & sprints)",
  "GitHub (code, PRs)",
  "Shopify (Theme, Admin, Plus)",
  "GA4 + Tag Manager",
  "Hotjar/Clarity (UX insights)",
  "Lighthouse/PageSpeed (perf)",
  "Slack/Email (comms)",
];

const FAQ = [
  {
    q: "How do we work together day-to-day?",
    a: "Weekly standup + async updates. You’ll see work in Figma and a staging theme. We track issues in Linear/Jira and keep a shared roadmap.",
  },
  {
    q: "What do you need from us?",
    a: "A single decision-maker, timely feedback, access to analytics, brand assets, and any required 3rd-party accounts (apps, domains, etc.).",
  },
  {
    q: "Can you migrate our URLs and SEO safely?",
    a: "Yes—redirect map, parity checks, structured data, and analytics continuity are part of our standard replatforming playbook.",
  },
  {
    q: "Do you offer retainers?",
    a: "Yes. Ongoing optimization retainers include CRO, design/dev hours, and prioritized sprint delivery with monthly reporting.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50/60 to-white">
        <div className="container mx-auto px-4 py-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Our process
          </p>
          <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A clear path from brief to business impact
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            This is the same playbook used by top Shopify agencies: strategy, section-first
            design, performant builds, rigorous QA, and data-driven iteration.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild href="/contact?service=custom-dev#intake">
              Start a project
            </Button>
            <Button asChild href="/portfolio" variant="secondary">
              See our work
            </Button>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              How we work—step by step
            </h2>
            <p className="mt-2 text-slate-600">
              Transparent milestones, demoable outputs, and measurable goals.
            </p>
          </div>

          <ol className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-700 text-sm font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{s.desc}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span
                            aria-hidden
                            className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-500"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Timelines & Engagement */}
      <section className="bg-white">
        <div className="container mx-auto grid items-start gap-10 px-4 pb-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Typical timelines</h3>
            <ul className="mt-3 divide-y divide-slate-200">
              {TIMELINES.map((t) => (
                <li key={t.label} className="flex items-center justify-between py-3 text-sm">
                  <span className="text-slate-700">{t.label}</span>
                  <span className="font-semibold text-slate-900">{t.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              Timelines vary based on scope, integrations, and content readiness.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Engagement model</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Fixed-scope projects (defined deliverables & price)</li>
              <li>Ongoing retainers for optimization & support</li>
              <li>Hybrid: fixed launch, then retainer for growth</li>
            </ul>
            <div className="mt-5">
              <Button asChild href="/contact">
                Get a tailored plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Tools */}
      <section className="bg-white">
        <div className="container mx-auto grid items-start gap-10 px-4 py-16 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">What you get</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-500"
                  />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">How we collaborate</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {TOOLS.map((t) => (
                <li key={t} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-500"
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              Weekly standups + async updates; shared roadmap and demo links every sprint.
            </p>
          </div>
        </div>
      </section>

      {/* QA & Launch checklist */}
      <section className="bg-white">
        <div className="container mx-auto grid items-start gap-10 px-4 pb-16 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">QA checklist</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Cross-browser/device testing & responsive checks</li>
              <li>Accessibility (WCAG 2.1 AA), focus states, semantics</li>
              <li>Core Web Vitals, lazy-loading, image compression</li>
              <li>SEO: meta, schema, sitemaps, robots, redirects</li>
              <li>Analytics & pixels parity, events, conversions</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Launch checklist</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>DNS cutover window & rollback plan</li>
              <li>Payments, tax, shipping, notifications smoke-test</li>
              <li>Redirect map live, 404/500 monitoring</li>
              <li>Performance budget & error alerting enabled</li>
              <li>Hypercare window with daily checks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white">
        <div className="container mx-auto px-4 pb-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              FAQ
            </h2>
            <p className="mt-2 text-slate-600">The most common questions we get.</p>
          </div>

          <div className="mx-auto mt-8 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
            {FAQ.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-900">
                  {f.q}
                  <span className="ml-4 text-slate-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm leading-6 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild href="/contact?service=custom-dev#intake" className="rounded-full px-6 py-3">
              Book a discovery call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
