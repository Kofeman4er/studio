// studio/app/process/page.tsx
"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import {
  Target,
  Map,
  LayoutTemplate,
  Blocks,
  Wand2,
  Gauge,
  Accessibility,
  Rocket,
  ClipboardList,
  ShieldCheck,
  GitBranch,
  FlaskConical,
  BarChart3,
  CalendarCheck2,
  FileText,
  Figma,
  Github,
  Workflow,
  Search,
  ShoppingBag,
  Cpu,
  MessageSquareMore,
} from "lucide-react";
import { Fragment } from "react";

type Step = {
  title: string;
  desc: string;
  bullets: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const STEPS: Step[] = [
  {
    title: "01 · Discovery & Strategy",
    desc:
      "We align on goals, customers, and constraints. We audit your current site/data and turn objectives into a pragmatic plan.",
    bullets: [
      "Stakeholder interviews, analytics & tech audit",
      "KPIs & success metrics agreed upfront",
      "Scope, budget, and risk assumptions",
    ],
    icon: Target,
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
    icon: LayoutTemplate,
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
    icon: Blocks,
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
    icon: ShieldCheck,
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
    icon: Rocket,
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
    icon: BarChart3,
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
  { label: "Figma (design, prototypes)", icon: Figma },
  { label: "Linear / Jira (sprints)", icon: Workflow },
  { label: "GitHub (code, PRs)", icon: Github },
  { label: "Shopify (Theme, Admin, Plus)", icon: ShoppingBag },
  { label: "GA4 + Tag Manager", icon: Gauge },
  { label: "Clarity / Hotjar (UX)", icon: Search },
  { label: "Lighthouse / PageSpeed", icon: Cpu },
  { label: "Slack / Email (comms)", icon: MessageSquareMore },
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
    a: "Yes. redirect map, parity checks, structured data, and analytics continuity are part of our standard replatforming playbook.",
  },
  {
    q: "Do you offer retainers?",
    a: "Yes. Ongoing optimization retainers include CRO, design/dev hours, and prioritized sprint delivery with monthly reporting.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero / centered intro */}
      <section className="bg-gradient-to-b from-sky-50/60 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              Our process
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A clear path from brief to business impact
            </h1>
            <p className="mt-3 text-slate-600">
              The same playbook used by top Shopify teams: strategy, section-first
              design, performant builds, rigorous QA, and data-driven iteration.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild href="/contact?service=custom-dev#intake">
                Start a project
              </Button>
              <Button asChild href="/portfolio" variant="secondary">
                See our work
              </Button>
            </div>
          </div>

          
        </div>
      </section>

      {/* Steps – centered section heading */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              How we work: step by step
            </h2>
            <p className="mt-2 text-slate-600">
              Transparent milestones, demoable outputs, and measurable goals.
            </p>
          </div>

          <ol className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  {/* animated sheen */}
                  <span className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <span className="absolute -inset-y-12 -left-20 h-24 w-[140%] -rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-2xl" />
                  </span>

                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-sky-100 text-sky-700 ring-1 ring-sky-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {s.title}
                      </h3>
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
              );
            })}
          </ol>
        </div>
      </section>

      {/* Timelines & Engagement */}
      <section className="bg-white">
        <div className="container mx-auto grid items-start gap-10 px-4 pb-4 md:grid-cols-2">
          <Card title="Typical timelines" icon={CalendarCheck2}>
            <ul className="mt-3 divide-y divide-slate-200">
              {TIMELINES.map((t) => (
                <li
                  key={t.label}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="text-slate-700">{t.label}</span>
                  <span className="font-semibold text-slate-900">{t.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              Timelines vary based on scope, integrations, and content readiness.
            </p>
          </Card>

          <Card title="Engagement model" icon={ClipboardList}>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Fixed-scope projects (defined deliverables & price)</li>
              <li>Ongoing retainers for optimization & support</li>
              <li>Hybrid: fixed launch, then retainer for growth</li>
            </ul>
            <div className="mt-5">
              <Button asChild href="/contact">Get a tailored plan</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Deliverables & Tools */}
      <section className="bg-white">
        <div className="container mx-auto grid items-start gap-10 px-4 py-16 md:grid-cols-2">
          <Card title="What you get" icon={FileText}>
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
          </Card>

          <Card title="How we collaborate" icon={Workflow}>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {TOOLS.map((t) => {
                const Icon = t.icon;
                return (
                  <li key={t.label} className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-sky-50 ring-1 ring-sky-100">
                      <Icon className="h-4 w-4 text-sky-700" aria-hidden />
                    </span>
                    <span>{t.label}</span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              Weekly standups + async updates; shared roadmap and demo links every sprint.
            </p>
          </Card>
        </div>
      </section>

      {/* QA & Launch */}
      <section className="bg-white">
        <div className="container mx-auto grid items-start gap-10 px-4 pb-16 md:grid-cols-2">
          <Card title="QA checklist" icon={ShieldCheck}>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Cross-browser/device testing & responsive checks</li>
              <li>Accessibility (WCAG 2.1 AA), focus states, semantics</li>
              <li>Core Web Vitals, lazy-loading, image compression</li>
              <li>SEO: meta, schema, sitemaps, robots, redirects</li>
              <li>Analytics & pixels parity, events, conversions</li>
            </ul>
          </Card>

          <Card title="Launch checklist" icon={Rocket}>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>DNS cutover window & rollback plan</li>
              <li>Payments, tax, shipping, notifications smoke-test</li>
              <li>Redirect map live, 404/500 monitoring</li>
              <li>Performance budget & error alerting enabled</li>
              <li>Hypercare window with daily checks</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* FAQs – centered */}
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
            <Button
              asChild
              href="/contact?service=custom-dev#intake"
              className="rounded-full px-6 py-3"
            >
              Book a discovery call
            </Button>
          </div>
        </div>
      </section>

      {/* local styles for marquee */}
      <style jsx global>{`
        .process-marquee {
          animation: process-marquee var(--speed, 36s) linear infinite;
          will-change: transform;
        }
        @keyframes process-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .process-marquee {
            animation: none !important;
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </>
  );
}

/* ---------------- helpers ---------------- */

function Card({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 ring-1 ring-sky-200">
          <Icon className="h-5 w-5 text-sky-700" aria-hidden />
        </span>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      {children}
    </div>
  );
}

/** Endless, non-interactive ribbon (keeps white background) */
function Ribbon() {
  const items = [
    { icon: ShoppingBag, label: "Shopify" },
    { icon: LayoutTemplate, label: "Theme Design" },
    { icon: Blocks, label: "Apps & Sections" },
    { icon: Cpu, label: "Hydrogen" },
    { icon: BarChart3, label: "CRO" },
    { icon: Search, label: "SEO" },
    { icon: GitBranch, label: "Integrations" },
    { icon: ShieldCheck, label: "A11y" },
  ];

  return (
    <div className="relative mx-auto mt-10 max-w-5xl overflow-hidden">
      {/* soft edge fades to keep it elegant */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent"
      />

      <div
        className="process-marquee flex items-center gap-4 opacity-90"
        style={{ "--speed": "36s" } as React.CSSProperties}
        aria-hidden
      >
        <RibbonSequence items={items} />
        <RibbonSequence items={items} />
      </div>
    </div>
  );
}

function RibbonSequence({
  items,
}: {
  items: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; label: string }[];
}) {
  return (
    <div className="flex flex-none items-center gap-3 px-3">
      {items.map((it, i) => {
        const Icon = it.icon;
        return (
          <div
            key={`${it.label}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-[14px] border-2 border-white bg-white/70 px-3 py-2 shadow-sm ring-1 ring-slate-200/70 backdrop-blur"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white ring-1 ring-slate-200">
              <Icon className="h-4 w-4 text-slate-900" aria-hidden />
            </span>
            <span className="whitespace-nowrap text-sm font-semibold text-slate-900">
              {it.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
