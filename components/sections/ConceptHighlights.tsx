// components/sections/ConceptHighlights.tsx
import Link from "next/link";

type Item = {
  title: string;
  url: string;
  caption: string;
  // Use a local image if you have one; otherwise keep "imgSrc" undefined
  // and we'll render a branded gradient placeholder.
  imgSrc?: string;
  tags?: string[];
};

const ITEMS: Item[] = [
  {
    title: "OKI9 - Minimalist Fashion Concept",
    url: "https://portfolio-oki9.vercel.app",
    caption:
      "Concept storefront focusing on typography, airy layouts, and fast navigation.",
    imgSrc: "/images/portfolio/oki9.jpg",
    tags: ["Concept", "Theme", "UX"],
  },
  {
    title: "Mechanic - Tools & Parts Concept",
    url: "https://mechanic-portfolio.vercel.app",
    caption:
      "Industrial look, robust filtering, and clear CTAs for conversion-ready PDPs.",
    imgSrc: "/images/portfolio/mechanic.jpg",
    tags: ["Concept", "Collection UX", "PDP"],
  },
  {
    title: "Leather Master - Premium Goods Concept",
    url: "https://leather-master.vercel.app/",
    caption:
      "Rich editorial visuals, section-driven homepage, and lifestyle storytelling.",
    imgSrc: "/images/portfolio/leather-master.jpg",
    tags: ["Concept", "Brand", "Visual"],
  },
];

export default function ConceptHighlights() {
  return (
    <section className="relative border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Mock Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Concept Highlights
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Visual explorations that demonstrate our Shopify patterns, speed, and
            UX approach. These are concept builds, not client work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-2 text-sm font-semibold text-white transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            See more work
          </Link>
        </div>
      </div>
    </section>
  );
}

function Card({ title, url, caption, imgSrc, tags = [] }: Item) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
    >
      {/* Visual */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {imgSrc ? (
          // If you later add local screenshots, plug them into imgSrc
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.03]"
          />
        ) : (
          // Gradient placeholder with subtle brand pattern
          <div className="h-full w-full bg-gradient-to-br from-slate-100 via-white to-sky-50">
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(80rem_40rem_at_20%_-10%,rgba(56,189,248,0.15),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_100%_120%,rgba(15,23,42,0.06),transparent_60%)]" />
          </div>
        )}

        {/* Top-left "Concept" pill */}
        <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-black/5">
          Concept
        </span>

        {/* Soft fade bottom for text readability */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Copy */}
      <div className="p-4 sm:p-5">
        <h3 className="text-base font-semibold leading-snug text-slate-900">
          <span className="bg-gradient-to-r from-slate-900 to-slate-900 bg-clip-text text-transparent transition-colors group-hover:from-sky-700 group-hover:to-sky-700">
            {title}
          </span>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-slate-600">{caption}</p>

        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        )}

      </div>
    </Link>
  );
}
