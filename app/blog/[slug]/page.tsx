import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS } from "@/lib/posts";

function formatDate(isoOrPretty: string): string {
  const d = new Date(isoOrPretty);
  return isNaN(d.getTime())
    ? isoOrPretty
    : d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found — Blog" };

  const ogImage = post.image ? [{ url: post.image }] : undefined;

  return {
    title: `${post.title} — Blog`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 pt-10">
        <nav className="text-sm text-slate-500">
          <Link href="/blog" className="hover:underline">
            ← Back to blog
          </Link>
        </nav>

        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">
          <span>By {post.author}</span>
          <span>•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        {post.image && (
          <div className="mx-auto mt-6 max-w-2xl sm:max-w-3xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width:1024px) 48rem, 92vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}
      </header>

      {/* Body */}
      <section className="container mx-auto px-4 py-10">
        <div className="prose prose-slate max-w-3xl prose-a:text-sky-600">
          {Array.isArray(post.content)
            ? post.content.map((paragraph: string, i: number) => <p key={i}>{paragraph}</p>)
            : <p>{post.content as unknown as string}</p>}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Have a Shopify project?</h3>
          <p className="mt-1 text-sm text-slate-600">
            Tell us your goals and we’ll propose a practical path on Shopify.
          </p>
          <div className="mt-4">
            <Link
              href="/contact?service=custom-dev#intake"
              className="inline-flex items-center rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
