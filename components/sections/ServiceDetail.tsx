"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export type ServiceDetailProps = {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  body?: string;
  bullets?: string[];
  cta?: { label: string; href: string };
  image: { src: string; alt: string; width?: number; height?: number; priority?: boolean };
  accent?: { color?: string; icon?: ReactNode };
  reverse?: boolean;
};

const DefaultIcon = (
  <svg viewBox="0 0 24 24" className="h-8 w-8 text-slate-900" fill="currentColor" aria-hidden>
    <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14l-4-3H6a2 2 0 0 1-2-2V5Z" />
    <path d="M8 9h8v2H8zM8 12h6v2H8z" />
  </svg>
);

export default function ServiceDetail({
  id,
  eyebrow = "Custom Shopify Development Services",
  title,
  lead,
  body,
  bullets = [],
  cta,
  image,
  accent = { color: "bg-yellow-400", icon: DefaultIcon },
  reverse = false,
}: ServiceDetailProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-slate-200 bg-white py-14 first:border-t-0 md:py-20"
      // Prevent any child (like the accent) from creating a horizontal scrollbar
      style={{ overflowX: "clip" }}
    >
      <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2">
        {/* TEXT */}
        <div className={reverse ? "md:order-2" : ""}>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>

          {lead && <p className="mt-4 font-semibold text-slate-900">{lead}</p>}

          {body && <p className="mt-3 max-w-prose text-slate-600">{body}</p>}

          {!!bullets.length && (
            <ul className="mt-5 space-y-2 text-slate-700">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {cta && (
            <div className="mt-7">
              <Link
                href={cta.href}
                className="inline-flex items-center rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:brightness-95"
              >
                {cta.label}
              </Link>
            </div>
          )}
        </div>

        {/* IMAGE + ACCENT TILE */}
        <div className={`relative ${reverse ? "md:order-1" : ""}`}>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={image.priority}
                sizes="(min-width: 768px) 44rem, 100vw"
                className="object-cover"
              />
            </div>

            {/* Small screens: accent stays INSIDE, no overflow ever */}
            <div
              aria-hidden
              className={`
                pointer-events-none absolute bottom-2 ${reverse ? "right-2" : "left-2"}
                h-20 w-20 sm:h-24 sm:w-24 rounded-xl shadow-md
                ${accent?.color ?? "bg-yellow-400"} grid place-items-center md:hidden
              `}
            >
              {accent?.icon ?? DefaultIcon}
            </div>
          </div>

          {/* md+: outside badge look, but with gentler offset */}
          <div
            aria-hidden
            className={`
              pointer-events-none absolute -bottom-6 ${reverse ? "-right-4" : "-left-4"}
              hidden h-36 w-36 rounded-xl shadow-md md:grid place-items-center
              ${accent?.color ?? "bg-yellow-400"}
            `}
          >
            {accent?.icon ?? DefaultIcon}
          </div>
        </div>
      </div>
    </section>
  );
}
