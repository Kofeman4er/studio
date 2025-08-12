"use client";

import Image from "next/image";

export type Testimonial = {
  name: string;
  role?: string;
  company?: string;
  quote: string;
  avatar?: { src: string; alt?: string; width?: number; height?: number };
  logo?: { src: string; alt?: string; width?: number; height?: number };
  rating?: number; // 1..5
};

type Props = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  testimonials?: Testimonial[];
  compact?: boolean;        // tighter spacing
  columns?: 2 | 3;          // grid cols on desktop
};

const DEFAULTS: Testimonial[] = [
  {
    name: "Alex Morgan",
    role: "Ecommerce Director",
    company: "ACME",
    quote:
      "They shipped fast, communicated clearly, and our conversion rate jumped within weeks.",
    avatar: { src: "/images/avatars/alex.jpg", alt: "Alex Morgan" },
    rating: 5,
  },
  {
    name: "Priya Singh",
    role: "Head of DTC",
    company: "Nimbus",
    quote:
      "Our Shopify Plus rollout was seamless. The team handled edge cases and integrations like pros.",
    avatar: { src: "/images/avatars/priya.jpg", alt: "Priya Singh" },
    rating: 5,
  },
  {
    name: "Marcus Lee",
    role: "Founder",
    company: "Northwear",
    quote:
      "Speed improved dramatically and the new sections empower our team to iterate without dev time.",
    avatar: { src: "/images/avatars/marcus.jpg", alt: "Marcus Lee" },
    rating: 4,
  },
];

function Stars({ rating = 5 }: { rating?: number }) {
  const r = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center" aria-label={`${r} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < r ? "text-amber-400" : "text-slate-300"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({
  eyebrow = "What clients say",
  heading = "Results clients can feel",
  subheading = "Trusted by growth-focused Shopify brands and Plus merchants.",
  testimonials = DEFAULTS,
  compact = false,
  columns = 3,
}: Props) {
  const pad = compact ? "py-10" : "py-16 md:py-20";
  const gridCols =
    columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={`relative bg-white ${pad}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {eyebrow}
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {heading}
          </h2>
          {subheading && <p className="mt-2 text-slate-600">{subheading}</p>}
        </div>

        {/* Grid */}
        <div className={`mx-auto mt-8 grid gap-6 ${gridCols} max-w-6xl`}>
          {testimonials.map((t, idx) => (
            <figure
              key={idx}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              {/* Logo (optional) */}
              {t.logo && (
                <div className="mb-3 h-6">
                  <Image
                    src={t.logo.src}
                    alt={t.logo.alt || t.company || t.name}
                    width={t.logo.width ?? 96}
                    height={t.logo.height ?? 24}
                    className="h-6 w-auto object-contain opacity-80"
                  />
                </div>
              )}

              {/* Quote */}
              <blockquote className="text-slate-700">
                <svg
                  className="mb-2 h-5 w-5 text-sky-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.1 11.2C5.2 11 4 9.8 4 7.9c0-2.1 1.6-3.9 3.8-3.9s3.8 1.8 3.8 3.9c0 2-1.2 3.1-3 3.1-.4 2.2-1.8 4.1-4.4 5.8l-.7-1.1c1.6-1.1 2.8-2.4 3.6-3.6zM16 11.2c-1.9-.2-3.1-1.4-3.1-3.3 0-2.1 1.6-3.9 3.8-3.9s3.8 1.8 3.8 3.9c0 2-1.2 3.1-3 3.1-.4 2.2-1.8 4.1-4.4 5.8l-.7-1.1c1.6-1.1 2.8-2.4 3.6-3.6z" />
                </svg>
                <p className="text-sm leading-6">
                  “{t.quote}”
                </p>
              </blockquote>

              {/* Footer (person) */}
              <figcaption className="mt-4 flex items-center gap-3">
                {t.avatar && (
                  <Image
                    src={t.avatar.src}
                    alt={t.avatar.alt || t.name}
                    width={t.avatar.width ?? 40}
                    height={t.avatar.height ?? 40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                )}
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </div>
                  {(t.role || t.company) && (
                    <div className="text-xs text-slate-500">
                      {t.role}
                      {t.role && t.company ? " · " : ""}
                      {t.company}
                    </div>
                  )}
                  {typeof t.rating === "number" && (
                    <div className="mt-1">
                      <Stars rating={t.rating} />
                    </div>
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* soft background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -z-10 -bottom-24 h-64 bg-gradient-to-b from-white to-sky-50/60"
      />
    </section>
  );
}
