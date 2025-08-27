// components/sections/WhyUs.tsx
"use client";

import Link from "next/link";
import clsx from "clsx";
import NextImage from "next/image";
import { ShoppingBag, TrendingUp, Workflow, BarChart3, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ------------------------- Comparison table data ------------------------- */

type Row = {
  platform: string;
  blurb?: string;
  values: [boolean, boolean, boolean, boolean, boolean]; // Platform, Speed, Quality, Support, Cost
};

const ROWS: Row[] = [
  {
    platform: "Devsolutify",
    blurb:
      "Your on-demand Shopify partner for fast delivery, consistent quality, and predictable pricing.",
    values: [true, true, true, true, true],
  },
  {
    platform: "In-house team",
    blurb:
      "Hiring takes time, replacements are slow, and ongoing salaries make in-house design costly, especially when needs fluctuate.",
    values: [false, false, true, true, true],
  },
  {
    platform: "Freelancers",
    blurb:
      "Hit or miss. Sourcing and managing talent for every project keeps you chasing consistency, not building your brand.",
    values: [false, false, true, true, false],
  },
  {
    platform: "Agencies",
    blurb:
      "Strategic partners, but high-cost retainers, rigid scopes, and slow timelines make them a poor fit for everyday creative needs.",
    values: [false, false, true, true, false],
  },
  {
    platform: "DIY Tools",
    blurb:
      "Quick to use — but the output is off-brand, inconsistent, and still needs heavy manual effort to finish.",
    values: [true, true, false, false, false],
  },
];

/* --------------------------- Value props content -------------------------- */

const VALUE_PROPS = [
  {
    title: "Shopify specialization",
    blurb:
      "Deep platform knowledge—Liquid, App Extensions, Checkout Extensibility, Hydrogen, and Plus.",
    icon: ShoppingBag,
    image: "/images/value/shopify.jpg",
  },
  {
    title: "CRO-first mindset",
    blurb:
      "Frictionless UX, performance budgets, and disciplined experimentation to lift conversion.",
    icon: TrendingUp,
    image: "/images/value/cro.jpg",
  },
  {
    title: "Clear process",
    blurb:
      "Brief → scope → sprints → QA → launch. Transparent timelines and async status.",
    icon: Workflow,
    image: "/images/value/process.jpg",
  },
  {
    title: "Measurable results",
    blurb:
      "We track what matters—CWV, AOV, checkout rate—so you see impact, not output.",
    icon: BarChart3,
    image: "/images/value/results.jpg",
  },
];

/* ================================== UI ================================== */

export default function WhyUs() {
  return (
    <section className="relative border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Built for you
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why us?
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Compare how Devsolutify stacks up against common alternatives for Shopify work.
          </p>

          <Link
            href="/contact?service=custom-dev#intake"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            Get started
          </Link>
        </div>

        {/* Table (unchanged) */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full border-collapse">
            <thead className="bg-sky-500">
              <tr className="text-center text-sm font-semibold text-white">
                <Th className="w-[40%]"> </Th>
                <Th>Platform</Th>
                <Th>Speed</Th>
                <Th>Quality</Th>
                <Th>Support</Th>
                <Th>Cost</Th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {ROWS.map((row) => {
                const isFirst = row.platform === "Devsolutify";
                return (
                  <tr key={row.platform}>
                    {/* Platform cell */}
                    <td
                      className={clsx(
                        "p-3 sm:p-5",
                        isFirst && "bg-sky-50 sm:rounded-l-2xl"
                      )}
                    >
                      <div className="font-semibold text-slate-900">{row.platform}</div>
                      {/* hide blurb on small screens */}
                      {row.blurb && (
                        <p className="mt-1 hidden text-sm leading-relaxed text-slate-600 sm:block">
                          {row.blurb}
                        </p>
                      )}
                    </td>

                    {/* Matrix cells */}
                    {row.values.map((v, i) => (
                      <td
                        key={`${row.platform}-${i}`}
                        className={clsx(
                          "p-3 text-center sm:p-5",
                          isFirst && "bg-sky-50",
                          isFirst && i === row.values.length - 1 && "sm:rounded-r-2xl"
                        )}
                      >
                        {v ? <BadgeCheck ariaLabel="Yes" /> : <BadgeX ariaLabel="No" />}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-center text-xs text-slate-500">
          Checks indicate a strong fit for everyday, growth-focused Shopify needs.
        </p>

        {/* Value propositions (dynamic, with images & metrics) */}
        <ValueProps />
      </div>
    </section>
  );
}

/* ------------------------------ Subcomponents ----------------------------- */

function Th({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th className={`p-3 sm:p-5 ${className}`}>
      <span className="inline-block">{children}</span>
    </th>
  );
}

function BadgeCheck({ ariaLabel }: { ariaLabel: string }) {
  return (
    <span
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 ring-1 ring-sky-500/20"
      aria-label={ariaLabel}
      title="Yes"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-sky-500" fill="none" aria-hidden="true">
        <path
          d="M7 12.5l3 3 7-7"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function BadgeX({ ariaLabel }: { ariaLabel: string }) {
  return (
    <span
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 ring-1 ring-slate-200"
      aria-label={ariaLabel}
      title="No"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-red-400" fill="none" aria-hidden="true">
        <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/* --------------------------- Value Props Section -------------------------- */

function ValueProps() {
  return (
    <div className="relative mt-20">
      {/* floating accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 right-[-3rem] hidden h-48 w-48 rounded-full bg-sky-100/50 blur-3xl lg:block"
      />

      <h3 className="text-center text-xl font-semibold text-slate-900">Value propositions</h3>
      <p className="mt-2 text-center text-slate-600">
        What you get when you partner with Devsolutify.
      </p>

      {/* animated dotted stripe */}
      <div aria-hidden="true" className="pointer-events-none relative mx-auto mt-4 h-6 max-w-5xl overflow-hidden">
        <div className="absolute inset-0 opacity-40 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="h-full w-[200%] bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.300)_1px,transparent_1.5px)] bg-[length:16px_16px] animate-[marquee_24s_linear_infinite] motion-reduce:animate-none" />
        </div>
      </div>

      {/* cards */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUE_PROPS.map((p) => (
          <ValueCard key={p.title} icon={p.icon} title={p.title} blurb={p.blurb} imageSrc={p.image} />
        ))}
      </div>

      {/* metrics */}
      <MetricsStrip />
      <Keyframes />
    </div>
  );
}

/* ----------------------------- Value Card (fix: no hover bleed) ----------------------------- */

function ValueCard({
  icon: Icon,
  title,
  blurb,
  imageSrc,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  blurb: string;
  imageSrc?: string;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="group relative rounded-2xl">
      {/* glow ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur transition duration-500 group-hover:opacity-100"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,0.25), rgba(14,165,233,0.25), rgba(56,189,248,0.25))",
        }}
      />

      {/* body: overflow-hidden + rounded to clip scaled image */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
        {/* image wrapper (only top corners rounded visually, but full clip because parent is rounded) */}
        <div className="relative h-36 sm:h-40 overflow-hidden isolate">
          {imageSrc ? (
            <div className="absolute inset-0">
              <NextImage
                src={imageSrc}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transform-gpu origin-center will-change-transform transition-transform duration-[9000ms] group-hover:scale-[1.03] motion-reduce:transition-none"
                priority={false}
              />
            </div>
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-slate-50 via-white to-sky-50" />
          )}

          {/* sparkle + bottom tint INSIDE the clipped wrapper */}
          <div className="pointer-events-none absolute right-3 top-3 text-sky-100">
            <Sparkles
              className="h-5 w-5 drop-shadow-[0_1px_1px_rgba(2,6,23,0.25)] animate-[floatY_3.5s_ease-in-out_infinite] motion-reduce:animate-none"
              aria-hidden="true"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/35 to-transparent" />
        </div>

        {/* content */}
        <div className="relative p-5">
          <div className="flex items-start gap-3">
            <span
              className={clsx(
                "inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-100 transition",
                inView && "animate-[pulseSoft_1400ms_ease-in-out_1]"
              )}
            >
              <Icon className="h-5 w-5 text-sky-600" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h4 className="text-base font-semibold text-slate-900">{title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{blurb}</p>
            </div>
          </div>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-sky-500/60 to-transparent transition-all duration-500 group-hover:w-24" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Metrics strip ------------------------------ */

function MetricsStrip() {
  return (
    <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
      <Metric label="Core Web Vitals" suffix="%" target={90} />
      <Metric label="Avg. CVR Lift" prefix="+" suffix="%" target={22} />
      <Metric label="LCP Under" suffix="s" decimals={1} target={2.0} />
      <Metric label="NPS" target={60} prefix="+" />
    </div>
  );
}

function Metric({
  label,
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1200,
}: {
  label: string;
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStarted(true)),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setVal(target);
      return;
    }

    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const next = parseFloat((target * eased).toFixed(decimals));
      setVal(next);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration, decimals]);

  return (
    <div ref={ref} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
      <div className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {prefix}
        {val.toFixed(decimals)}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </div>
    </div>
  );
}

/* ------------------------------ Local keyframes ----------------------------- */

function Keyframes() {
  return (
    <style jsx>{`
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      @keyframes floatY {
        0% {
          transform: translateY(0px);
          opacity: 0.9;
        }
        50% {
          transform: translateY(-6px);
          opacity: 1;
        }
        100% {
          transform: translateY(0px);
          opacity: 0.9;
        }
      }
      @keyframes pulseSoft {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.3);
        }
        70% {
          transform: scale(1.04);
          box-shadow: 0 0 0 12px rgba(56, 189, 248, 0);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
        }
      }
    `}</style>
  );
}
