"use client";

import Link from "next/link";
import {
  Code,
  MonitorSmartphone,
  ShoppingCart,
  Rocket,
  Wrench,
  Layers,
  BarChart3,
  Plug,
} from "lucide-react";

type Service = {
  title: string;
  href: string;
  image: string; // path from /public
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SERVICES: Service[] = [
  { title: "Custom Development", href: "/services#custom-dev", image: "/images/services/custom-dev.jpg", icon: Code },
  { title: "Theme Design", href: "/services#themes", image: "/images/services/themes.jpg", icon: MonitorSmartphone },
  { title: "Shopify Plus", href: "/services#shopify-plus", image: "/images/services/plus.jpg", icon: ShoppingCart },
  { title: "Migrations", href: "/services#migrations", image: "/images/services/migrations.jpg", icon: Rocket },
  { title: "Apps & Integrations", href: "/services#apps", image: "/images/services/apps.jpg", icon: Plug },
  { title: "CRO & Optimization", href: "/services#cro", image: "/images/services/cro.jpg", icon: BarChart3 },
  { title: "Support & Maintenance", href: "/services#support", image: "/images/services/support.jpg", icon: Wrench },
  { title: "Headless / Hydrogen", href: "/services#custom-dev", image: "/images/services/headless.jpg", icon: Layers },
];

export default function ServicesShowcaseHome() {
  return (
    <section className="relative border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-14">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              Services
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              What we can ship for you
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Modern Shopify work—built for performance, maintainability, and growth.
            </p>
          </div>

          <Link
            href="/services"
            className="hidden shrink-0 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 sm:inline-flex"
          >
            Explore all services
          </Link>
        </div>

        {/* Marquee viewport */}
        <div className="relative isolate overflow-hidden">
          {/* Edge fades (above track) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent"
          />

          {/* Track: two full-width sequences side-by-side */}
          <div
            className="flex min-w-[200%] animate-[svc-marquee_30s_linear_infinite] will-change-transform"
          >
            <Sequence items={SERVICES} />
            <Sequence items={SERVICES} ariaHidden />
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href="/services"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            Explore all services
          </Link>
        </div>
      </div>

      {/* keyframes */}
      <style jsx global>{`
        @keyframes svc-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\[svc-marquee_30s_linear_infinite\] {
            animation: none !important;
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </section>
  );
}

function Sequence({ items, ariaHidden = false }: { items: Service[]; ariaHidden?: boolean }) {
  return (
    <div
      className="flex min-w-full shrink-0 items-stretch gap-5"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((s) => (
        <ServiceCard key={`${s.title}-${s.href}-${ariaHidden ? "dup" : "orig"}`} service={s} />
      ))}
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className="group block w-[300px] sm:w-[340px] flex-none"
      aria-label={service.title}
    >
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
        {/* Image */}
        <div className="relative h-[220px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/40 to-transparent" />
        </div>

        {/* Caption */}
        <div className="flex items-center gap-3 rounded-b-2xl bg-white/90 px-5 py-4 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 ring-1 ring-sky-100">
            <Icon className="h-4 w-4 text-sky-600" aria-hidden="true" />
          </span>
          <p className="flex-1 truncate text-base font-semibold text-slate-900">
            {service.title}
          </p>
          <svg
            className="h-5 w-5 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-600"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
