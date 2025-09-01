// components/sections/BlogTeaserHome.tsx
"use client";

import Link from "next/link";
import clsx from "clsx";

// Adjust the import path if your alias differs
import { POSTS, type Post } from "@/lib/posts";

export default function BlogTeaserHome({ className }: { className?: string }) {
  const topThree = getLatestPosts(POSTS, 3);

  return (
    <section className={clsx("relative border-t border-slate-200 bg-white", className)}>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-800">
            Insights
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Shopify ideas, guides & playbooks
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Practical, no-fluff content from our team—covering performance, CRO, apps, and
            workflow tips for growing Shopify brands.
          </p>

          <Link
            href="/blog"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-2 text-sm font-semibold text-white transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            Read the blog
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topThree.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- subcomponents ---------- */

function ArticleCard({ post }: { post: Post }) {
  const href = `/blog/${post.slug}`;
  const dateFmt = readableDate(post.date);
  const minutes = estimateReadMinutes(post);

  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
      aria-label={post.title}
    >
      {/* Cover */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={post.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Body */}
      <div className="flex h-full flex-col gap-3 p-5">
        {/* Meta */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <time dateTime={post.date}>{dateFmt}</time>
          {minutes && (
            <>
              <span className="select-none">•</span>
              <span>{minutes} min read</span>
            </>
          )}
          <span className="select-none">•</span>
          <span>{post.author}</span>
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-slate-900">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="line-clamp-3 text-sm text-slate-600">
          {post.excerpt}
        </p>

        {/* CTA line */}
        <div className="mt-2 flex items-center gap-1 text-sm font-semibold text-sky-700">
          Read more
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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

/* ---------- utils ---------- */

function getLatestPosts(posts: Post[], take: number) {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, take);
}

function readableDate(isoOrReadable: string) {
  const d = new Date(isoOrReadable);
  if (isNaN(d.getTime())) return isoOrReadable; // already readable
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function estimateReadMinutes(post: Post) {
  const text = [post.excerpt, ...(post.content ?? [])].join(" ");
  const words = text.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 220)); // ~220 wpm
  return mins;
}
