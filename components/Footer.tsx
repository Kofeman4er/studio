// components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import {
  Twitter,
  Linkedin,
  Github,
  Youtube,
  Facebook,
  Instagram,
} from "lucide-react";

type LinkItem = { label: string; href: string };
type Column = { title: string; links: LinkItem[] };

type Social =
  | "x"
  | "linkedin"
  | "github"
  | "youtube"
  | "facebook"
  | "instagram";

type Props = {
  brand?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  address?: string;
  columns?: Column[];
  newsletter?: {
    enabled?: boolean;
    action?: string;
    placeholder?: string;
    disclaimer?: string;
  };
  socials?: Partial<Record<Social, string>>;
  year?: number;
};

const DEFAULT_COLUMNS: Column[] = [
  {
    title: "Services",
    links: [
      { label: "Custom Shopify Development", href: "/services#custom-dev" },
      { label: "Shopify Plus", href: "/services#shopify-plus" },
      { label: "Theme Customization", href: "/services#themes" },
      { label: "Migrations", href: "/services#migrations" },
      { label: "App & API Integrations", href: "/services#apps" },
      { label: "CRO & Optimization", href: "/services#cro" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Shopify Guides", href: "/blog" },
      { label: "Case Studies", href: "/portfolio" },
      { label: "Theme Checklist", href: "/blog/theme-checklist" },
      { label: "Speed Optimization", href: "/blog/site-speed" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

function SocialIcon({ name }: { name: Social }) {
  const cls = "h-[18px] w-[18px]";
  switch (name) {
    case "x":
      return <Twitter className={cls} aria-hidden="true" />;
    case "linkedin":
      return <Linkedin className={cls} aria-hidden="true" />;
    case "github":
      return <Github className={cls} aria-hidden="true" />;
    case "youtube":
      return <Youtube className={cls} aria-hidden="true" />;
    case "facebook":
      return <Facebook className={cls} aria-hidden="true" />;
    case "instagram":
      return <Instagram className={cls} aria-hidden="true" />;
  }
}

export default function Footer({
  brand = "Devsolutify",
  tagline = "We build high converting Shopify stores.",
  email = "devsolutify@gmail.com",
  address = "Edmonton, AB, Canada",
  columns = DEFAULT_COLUMNS,
  socials = { linkedin: "#", x: "#", github: "#" },
  newsletter = {
    enabled: true,
    action: "/api/subscribe",
    placeholder: "Enter your email",
    disclaimer: "We’ll send occasional updates. No spam.",
  },
  year = new Date().getFullYear(),
}: Props) {
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      {/* Newsletter callout */}
      {newsletter?.enabled && (
        <section className="container mx-auto px-4">
          <div className="relative -mt-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm sm:p-8">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                  Newsletter
                </p>
                <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  Stay sharp on Shopify
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  CRO, performance, and platform updates curated by our team.
                </p>
              </div>
              <div className="md:justify-self-end">
                <NewsletterForm />
                {newsletter.disclaimer && (
                  <p className="mt-2 text-xs text-slate-500">
                    {newsletter.disclaimer}
                  </p>
                )}
              </div>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40"
            />
          </div>
        </section>
      )}

      {/* Main footer grid */}
      <section className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-12">
        {/* Brand / contact */}
        <div className="md:col-span-4">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image src="/images/logo.png" alt="logo" width={28} height={28} />
            <span className="text-lg font-bold text-slate-900">{brand}</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-slate-600">{tagline}</p>

          <dl className="mt-4 space-y-2 text-sm text-slate-600">
            <div className="flex gap-2">
              <dt className="font-medium text-slate-900">Email:</dt>
              <dd>
                <a
                  className="text-sky-700 underline-offset-2 hover:underline"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-slate-900">Address:</dt>
              <dd>{address}</dd>
            </div>
          </dl>

          {/* Socials */}
          <div className="mt-5 flex items-center gap-2">
            {(
              Object.keys(socials) as Array<keyof typeof socials>
            ).map((k) => {
              const href = socials[k];
              if (!href) return null;
              return (
                <Link
                  key={k}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={k}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50"
                >
                  <SocialIcon name={k as Social} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Link clusters */}
        <nav className="md:col-span-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-slate-900">
                  {col.title}
                </h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-slate-600 underline-offset-4 transition hover:text-slate-900 hover:underline"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </section>

      {/* Sub-footer: badges / slim ribbon (optional) */}
      <section className="border-t border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <p>© {year} {brand}. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/privacy-policy"
                className="hover:text-slate-900 hover:underline"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-slate-900 hover:underline"
              >
                Terms
              </Link>
              <Link
                href="/cookie-policy"
                className="hover:text-slate-900 hover:underline"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
