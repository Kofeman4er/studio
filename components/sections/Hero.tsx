"use client";

import Image from "next/image";
import Link from "next/link";

type Logo = { src: string; alt: string; href?: string; width?: number; height?: number };

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  metrics?: { label: string; value: string }[]; // e.g. [{value:"+37%", label:"Avg. CVR lift"}]
  logos?: Logo[]; // client/partner logos
  image?: { src: string; alt: string; width?: number; height?: number; priority?: boolean };
};

export default function Hero({
  eyebrow = "Shopify Experts",
  title,
  subtitle = "We design, build, and optimize high-converting Shopify stores for ambitious brands.",
  primaryCta = { label: "Start a Project", href: "/contact" },
  secondaryCta = { label: "See Our Work", href: "/portfolio" },
  metrics = [
    { value: "+37%", label: "Avg. CVR lift" },
    { value: "200+", label: "Projects shipped" },
    { value: "4.9★", label: "Client rating" },
  ],
  logos,
  image, // e.g. { src: "/images/hero/storefront.png", alt: "Mockup" }
}: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-sky-50/60 via-white to-white" />
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-sky-100 blur-3xl"
      />

      <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        {/* Copy */}
        <div>
          <p className="mb-3 inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {subtitle}
            </p>
          )}

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>

          {/* Metrics */}
          {metrics?.length ? (
            <dl className="mt-8 grid grid-cols-3 gap-4 max-sm:grid-cols-2">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                  <dt className="text-xs text-slate-500">{m.label}</dt>
                  <dd className="mt-1 text-xl font-bold text-slate-900">{m.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          {/* Logo cloud */}
          {logos?.length ? (
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wide text-slate-500">Trusted by</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-4 opacity-80">
                {logos.map((logo, i) =>
                  logo.href ? (
                    <a key={i} href={logo.href} target="_blank" rel="noreferrer">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width ?? 96}
                        height={logo.height ?? 32}
                      />
                    </a>
                  ) : (
                    <Image
                      key={i}
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width ?? 96}
                      height={logo.height ?? 32}
                    />
                  )
                )}
              </div>
            </div>
          ) : null}
        </div>

        {/* Image */}
        <div className="relative">
          {image ? (
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={image.priority}
                sizes="(min-width: 768px) 42rem, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-slate-200 p-8 text-center text-slate-500">
              <span className="text-sm">Add a hero image via the <code>image</code> prop</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
