"use client";

import Image from "next/image";
import Link from "next/link";

export type LogoItem = {
  src: string;           // /public path or remote URL
  alt: string;           // accessible alt (brand name)
  href?: string;         // optional click-through
  width?: number;        // default 120
  height?: number;       // default 40
  title?: string;        // optional tooltip
  priority?: boolean;    // for above-the-fold
};

type Props = {
  eyebrow?: string;              // small label (e.g., "Trusted by")
  heading?: string;              // optional headline
  subheading?: string;           // optional copy
  logos: LogoItem[];             // the stars of the show
  grayscale?: boolean;           // desaturate logos by default
  compact?: boolean;             // tighter padding/gaps
  cta?: { label: string; href: string } | null;
};

export default function LogoCloud({
  eyebrow = "Trusted by",
  heading,
  subheading,
  logos,
  grayscale = true,
  compact = false,
  cta = null,
}: Props) {
  const pad = compact ? "py-8" : "py-14 md:py-16";
  const gap = compact ? "gap-x-6 gap-y-6" : "gap-x-10 gap-y-8";
  const imgBase =
    "h-8 w-auto object-contain transition will-change-transform md:h-9";
  const gray = grayscale
    ? "opacity-80 grayscale hover:grayscale-0 hover:opacity-100"
    : "opacity-90 hover:opacity-100";

  return (
    <section className={`bg-white ${pad}`}>
      <div className="container mx-auto px-4">
        {(eyebrow || heading || subheading) && (
          <header className="mx-auto max-w-2xl text-center">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-2 text-slate-600">{subheading}</p>
            )}
          </header>
        )}

        {/* Grid of logos */}
        <ul
          className={`mx-auto mt-6 grid max-w-5xl grid-cols-2 items-center ${gap} sm:grid-cols-3 lg:grid-cols-6`}
        >
          {logos.map((logo, i) => {
            const img = (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width ?? 120}
                height={logo.height ?? 40}
                title={logo.title}
                priority={logo.priority}
                className={`${imgBase} ${gray}`}
              />
            );

            return (
              <li key={`${logo.alt}-${i}`} className="flex justify-center">
                {logo.href ? (
                  <Link
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={logo.alt}
                    className="group inline-flex items-center"
                  >
                    {img}
                  </Link>
                ) : (
                  img
                )}
              </li>
            );
          })}
        </ul>

        {cta && (
          <div className="mt-8 text-center">
            <Link
              href={cta.href}
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
