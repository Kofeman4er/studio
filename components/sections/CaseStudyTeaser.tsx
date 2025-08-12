"use client";

import Image from "next/image";
import Link from "next/link";

type Metric = { label: string; value: string };         // e.g. { value: "+37%", label: "Conversion rate" }
type Tag = { label: string; href?: string };
type Props = {
  href: string;                                         // link to the full case study
  title: string;                                        // case study title
  summary?: string;                                     // brief 1-2 sentence teaser
  image: { src: string; alt: string; width?: number; height?: number; priority?: boolean };
  client?: string;                                      // optional client/brand
  tags?: Tag[];                                         // industry / platform tags
  metrics?: Metric[];                                   // up to 3–4 quick results
  quote?: { text: string; author?: string; role?: string };
  compact?: boolean;                                    // tighter layout
};

export default function CaseStudyTeaser({
  href,
  title,
  summary,
  image,
  client,
  tags = [],
  metrics = [],
  quote,
  compact = false,
}: Props) {
  return (
    <section
      className={`relative ${compact ? "py-8" : "py-12"} bg-white`}
      aria-labelledby="cs-title"
    >
      <div className="container mx-auto grid items-stretch gap-8 px-4 md:grid-cols-2">
        {/* Media */}
        <Link
          href={href}
          className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm"
          aria-label={`Open case study: ${title}`}
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={image.priority}
              sizes="(min-width: 768px) 42rem, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 ring-0 ring-inset ring-transparent transition group-hover:ring-2 group-hover:ring-sky-200" />
        </Link>

        {/* Content */}
        <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {/* Top meta */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {client && (
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
                  {client}
                </span>
              )}
              {tags.map((t) =>
                t.href ? (
                  <Link
                    key={t.label}
                    href={t.href}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50"
                  >
                    {t.label}
                  </Link>
                ) : (
                  <span
                    key={t.label}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {t.label}
                  </span>
                )
              )}
            </div>

            <h2 id="cs-title" className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              <Link href={href} className="hover:underline">{title}</Link>
            </h2>

            {summary && (
              <p className="mt-3 max-w-prose text-slate-600">{summary}</p>
            )}

            {/* Metrics */}
            {!!metrics.length && (
              <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {metrics.slice(0, 4).map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-slate-200 bg-white p-4 text-center"
                  >
                    <dt className="text-xs text-slate-500">{m.label}</dt>
                    <dd className="mt-1 text-xl font-bold text-slate-900">{m.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {/* Quote */}
            {quote?.text && (
              <figure className="mt-5 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                <blockquote className="text-sm italic text-slate-700">
                  “{quote.text}”
                </blockquote>
                {(quote.author || quote.role) && (
                  <figcaption className="mt-2 text-xs text-slate-500">
                    {quote.author && <span className="font-medium text-slate-700">{quote.author}</span>}
                    {quote.author && quote.role && <span> · </span>}
                    {quote.role}
                  </figcaption>
                )}
              </figure>
            )}
          </div>

          {/* CTA */}
          <div className="mt-6">
            <Link
              href={href}
              className="inline-flex items-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
              aria-label={`Read case study: ${title}`}
            >
              Read the case study
              <svg
                className="ml-1 h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
              </svg>
            </Link>
          </div>
        </article>
      </div>

      {/* soft background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -z-10 -bottom-24 h-64 bg-gradient-to-b from-white to-sky-50/60"
      />
    </section>
  );
}
