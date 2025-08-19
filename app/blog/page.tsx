// app/blog/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POSTS, type Post } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Your Agency",
  description:
    "Insights, case studies, and practical tips on Shopify development and ecommerce growth.",
};

// Extend your Post type with optional category (for filters/pills)
type PostWithCategory = Post & { category?: string };

// ---------- helpers (strongly-typed) ----------
function wordsCount(post: Post): number {
  const body = Array.isArray(post.content) ? post.content.join(" ") : "";
  const text = `${post.title} ${post.excerpt} ${body}`;
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.length;
}
function readingTimeMins(post: Post): number {
  const wpm = 250;
  return Math.max(2, Math.round(wordsCount(post) / wpm));
}
function byNewest(a: Post, b: Post): number {
  return +new Date(b.date) - +new Date(a.date);
}
function uniq<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}
function getCategory(p: PostWithCategory): string {
  return p.category ?? "Insights";
}
function formatDate(isoOrPretty: string): string {
  const d = new Date(isoOrPretty);
  return isNaN(d.getTime())
    ? isoOrPretty
    : d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

// ---------- page ----------
type SearchParams = Promise<{
  q?: string;
  category?: string;
  page?: string;
}>;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const q = (params.q ?? "").toLowerCase().trim();
  const category = (params.category ?? "").trim();
  const page = Math.max(1, Number(params.page ?? 1));
  const perPage = 9;

  // Prepare list as typed array
  const allPosts: PostWithCategory[] = POSTS as PostWithCategory[];

  // derive categories from posts (fallback to "Insights")
  const categories = uniq(allPosts.map((p) => getCategory(p))).sort();

  // filter + sort
  let list = allPosts.slice().sort(byNewest);
  if (category) list = list.filter((p) => getCategory(p) === category);
  if (q) {
    list = list.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        (Array.isArray(p.content) && p.content.join(" ").toLowerCase().includes(q))
    );
  }

  // featured on page 1 with no filters (Liquify-style)
  const showFeatured = !q && !category && page === 1 && list.length > 0;
  const featured: PostWithCategory | undefined = showFeatured ? list[0] : undefined;
  const rest: PostWithCategory[] = showFeatured ? list.slice(1) : list;

  // pagination
  const total = rest.length; // when showFeatured=false, rest===list
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paged: PostWithCategory[] = rest.slice(start, end);

  const makeUrl = (overrides: Partial<{ page: number }>) => {
    const sp = new URLSearchParams();
    if (q) sp.set("q", q);
    if (category) sp.set("category", category);
    const pg = overrides.page ?? page;
    if (pg && Number(pg) > 1) sp.set("page", String(pg));
    return "/blog" + (sp.toString() ? `?${sp.toString()}` : "");
  };

  return (
    <section className="container mx-auto px-4 py-10">
      {/* header / search */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Blog
          </h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Shopify development, CRO, migrations, and growth playbooks.
          </p>
        </div>

        {/* search (GET) */}
        <form action="/blog" method="GET" className="w-full sm:w-auto">
          <div className="flex rounded-xl border border-slate-300 bg-white shadow-sm">
            <input
              defaultValue={q}
              type="search"
              name="q"
              placeholder="Search articles…"
              className="w-full min-w-[16rem] rounded-l-xl px-3 py-2 text-sm outline-none"
            />
            {/* preserve category on search */}
            {category ? <input type="hidden" name="category" value={category} /> : null}
            <button
              type="submit"
              className="rounded-r-xl bg-sky-500 px-3 text-sm font-semibold text-white hover:brightness-95"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* category pills */}
      <div className="-mx-1 mb-8 flex flex-wrap gap-2 overflow-x-auto">
        <CategoryPill href="/blog" active={!category}>
          All
        </CategoryPill>
        {categories.map((c) => (
          <CategoryPill
            key={c}
            href={`/blog?category=${encodeURIComponent(c)}`}
            active={category === c}
          >
            {c}
          </CategoryPill>
        ))}
      </div>

      {/* featured hero */}
      {showFeatured && featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group relative mb-10 block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative h-64 w-full md:h-full">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                Featured
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-slate-600">{featured.excerpt}</p>
              <MetaLine
                date={featured.date}
                author={featured.author}
                mins={readingTimeMins(featured)}
                category={getCategory(featured)}
                className="mt-4"
              />
              <span className="mt-5 inline-block text-sm font-semibold text-sky-700 group-hover:underline">
                Read more →
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* grid cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paged.map((post) => (
          <article
            key={post.slug}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
            </Link>
            <div className="p-6">
              <Link
                href={`/blog?category=${encodeURIComponent(getCategory(post))}`}
                className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {getCategory(post)}
              </Link>

              <Link href={`/blog/${post.slug}`}>
                <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-slate-900">
                  {post.title}
                </h3>
              </Link>
              <p className="mt-2 line-clamp-3 text-sm text-slate-600">
                {post.excerpt}
              </p>
              <MetaLine
                date={post.date}
                author={post.author}
                mins={readingTimeMins(post)}
                className="mt-4"
              />
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-sky-700 hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* empty state */}
      {paged.length === 0 && (
        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-600">
          No posts found. Try a different search or category.
        </div>
      )}

      {/* pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          <PageLink href={makeUrl({ page: page - 1 })} disabled={page <= 1} label="← Prev" />
          <span className="px-3 text-sm text-slate-600">
            Page {page} of {totalPages}
          </span>
          <PageLink href={makeUrl({ page: page + 1 })} disabled={page >= totalPages} label="Next →" />
        </div>
      )}
    </section>
  );
}

// ---------- small UI bits (typed) ----------
function CategoryPill({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${active
          ? "border-slate-900 bg-slate-900 text-white"
          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
        }`}
    >
      {children}
    </Link>
  );
}

function MetaLine({
  date,
  author,
  mins,
  category,
  className = "",
}: {
  date: string;
  author?: string;
  mins?: number;
  category?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-x-3 text-xs text-slate-500 ${className}`}>
      {category && <span className="text-slate-600">{category}</span>}
      <span>•</span>
      <time dateTime={date}>{formatDate(date)}</time>
      {author && (
        <>
          <span>•</span>
          <span>{author}</span>
        </>
      )}
      {typeof mins === "number" && mins > 0 && (
        <>
          <span>•</span>
          <span>{mins} min read</span>
        </>
      )}
    </div>
  );
}

function PageLink({
  href,
  disabled,
  label,
}: {
  href: string;
  disabled?: boolean;
  label: string;
}) {
  if (disabled) {
    return (
      <span className="inline-flex cursor-not-allowed items-center rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm text-slate-400">
        {label}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
    >
      {label}
    </Link>
  );
}
