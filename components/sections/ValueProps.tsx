"use client";

import NextImage from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Store, TrendingUp, Workflow, BarChart3, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVal(target);
      return;
    }

    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
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
<div>
    asdasdasdsads
</div>
/** Value propositions header + parallax dots + cards */
export function ValueProps() {
  return (
    <div className="relative mt-14">
      {/* floating background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 right-[-3rem] hidden h-48 w-48 rounded-full bg-sky-100/50 blur-3xl lg:block"
      />

      <h3 className="text-center text-xl font-semibold text-slate-900">
        Value propositions
      </h3>
      <p className="mt-2 text-center text-slate-600">
        What you get when you partner with Devsolutify.
      </p>

      {/* animated dotted stripe */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative mx-auto mt-4 h-6 max-w-5xl overflow-hidden"
      >
        <div className="absolute inset-0 opacity-40 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="h-full w-[200%] bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.300)_1px,transparent_1.5px)] bg-[length:16px_16px] animate-[marquee_24s_linear_infinite] motion-reduce:animate-none" />
        </div>
      </div>

      {/* cards */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ValueCard
          icon={Store}
          title="Shopify specialization"
          blurb="Deep platform knowledge: Liquid, App Extensions, Checkout Extensibility, Hydrogen, and Plus."
          imageSrc="/images/value/shopify.jpg" /* ensure this exists under /public */
        />
        <ValueCard
          icon={TrendingUp}
          title="CRO-first mindset"
          blurb="Frictionless UX, performance budgets, and disciplined experimentation to lift conversion."
          imageSrc="/images/value/cro.jpg"
        />
        <ValueCard
          icon={Workflow}
          title="Clear process"
          blurb="Brief → scope → sprints → QA → launch. Transparent timelines and async status."
          imageSrc="/images/value/process.jpg"
        />
        <ValueCard
          icon={BarChart3}
          title="Measurable results"
          blurb="We track what matters - CWV, AOV, checkout rate - so you see impact, not output."
          imageSrc="/images/value/results.jpg"
        />
      </div>

      {/* metrics */}
      <MetricsStrip />
    </div>
  );
}

/** One card with animated glow, image pan, icon pulse */
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
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="group relative rounded-2xl">
      {/* animated glow ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur transition duration-500 group-hover:opacity-100"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,0.25), rgba(14,165,233,0.25), rgba(56,189,248,0.25))",
        }}
      />
      {/* card body */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
        {/* image (Next/Image) to ensure it displays */}
        <div className="relative h-36 sm:h-40">
          {imageSrc ? (
            <div className="absolute inset-0">
              <NextImage
                src={imageSrc}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[9000ms] will-change-transform group-hover:scale-[1.03] motion-reduce:transition-none"
                priority={false}
              />
            </div>
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-slate-50 via-white to-sky-50">
              <div className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_100%_-20%,rgba(56,189,248,0.18),transparent_60%)]" />
            </div>
          )}

          {/* sparkle */}
          <div className="pointer-events-none absolute right-3 top-3 text-sky-50">
            <Sparkles
              className="h-5 w-5 drop-shadow-[0_1px_1px_rgba(2,6,23,0.25)] animate-[floatY_3.5s_ease-in-out_infinite] motion-reduce:animate-none"
              aria-hidden="true"
            />
          </div>

          {/* bottom tint */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/35 to-transparent" />
        </div>

        {/* copy */}
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

/** local keyframes */
<style jsx>{`
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes floatY {
    0% { transform: translateY(0px); opacity: 0.9; }
    50% { transform: translateY(-6px); opacity: 1; }
    100% { transform: translateY(0px); opacity: 0.9; }
  }
  @keyframes pulseSoft {
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(56,189,248,0.3); }
    70% { transform: scale(1.04); box-shadow: 0 0 0 12px rgba(56,189,248,0); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(56,189,248,0); }
  }
`}</style>