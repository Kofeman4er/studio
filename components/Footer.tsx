import Link from "next/link";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import Image from "next/image";


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
    action?: string; // e.g. your form handler / Mailchimp/ConvertKit endpoint
    placeholder?: string;
    disclaimer?: string;
  };
  socials?: Partial<Record<Social, string>>; // map to profile URLs
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

function Icon({ name }: { name: Social }) {
  const common = "h-5 w-5";
  switch (name) {
    case "x":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M18.9 3H21l-6.9 7.9L22 21h-5.5l-4.3-5.1L6 21H3.9l7.4-8.5L2.4 3H8l4 4.8L18.9 3Zm-1.9 16h1.5L8.2 5H6.7L17 19Z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.08V23h-4v-7.8c0-1.86-.04-4.26-2.6-4.26-2.6 0-3 2.03-3 4.12V23h-4V8z"
          />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.43-1.31.78-1.61-2.66-.3-5.46-1.33-5.46-5.9 0-1.3.47-2.36 1.24-3.18-.12-.3-.54-1.51.12-3.15 0 0 1-.32 3.3 1.22a11.5 11.5 0 0 1 6 0C17.2 5.9 18.2 6.22 18.2 6.22c.66 1.64.24 2.85.12 3.15.77.82 1.24 1.88 1.24 3.18 0 4.59-2.8 5.59-5.48 5.89.44.38.83 1.11.83 2.25v3.34c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.3.6 9.3.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.7 15.5V8.5l6.3 3.5-6.3 3.5Z"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M22 12A10 10 0 1 0 10.9 21.9V14.9H8.1V12h2.8V9.8c0-2.8 1.7-4.3 4.2-4.3 1.2 0 2.5.2 2.5.2v2.8h-1.4c-1.4 0-1.8.9-1.8 1.8V12h3l-.5 2.9h-2.5v7A10 10 0 0 0 22 12Z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.3 1 .6 1.5 1.1.5.5.8.9 1.1 1.5.2.4.4 1 .5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.3.6-.6 1-1.1 1.5-.5.5-.9.8-1.5 1.1-.4.2-1 .4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.3-1-.6-1.5-1.1-.5-.5-.8-.9-1.1-1.5-.2-.4-.4-1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.3-.6.6-1 1.1-1.5.5-.5 .9-.8 1.5-1.1.4-.2 1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 2c-3.1 0-3.4 0-4.6.1-1 .1-1.5.2-1.8.4-.5.2-.8.4-1.1.8-.3.3-.6.6-.8 1.1-.1.3-.3.8-.4 1.8-.1 1.2-.1 1.5-.1 4.6s0 3.4.1 4.6c.1 1 .2 1.5.4 1.8.2.5.4.8.8 1.1.3.3.6.6 1.1.8.3.2.8.4 1.8.4 1.2.1 1.5.1 4.6.1s3.4 0 4.6-.1c1-.1 1.5-.2 1.8-.4.5-.2.8-.4 1.1-.8.3-.3.6-.6.8-1.1.1-.3.3-.8.4-1.8.1-1.2.1-1.5.1-4.6s0-3.4-.1-4.6c-.1-1-.2-1.5-.4-1.8-.2-.5-.4-.8-.8-1.1-.3-.3-.6-.6-1.1-.8-.3-.2-.8-.4-1.8-.4-1.2-.1-1.5-.1-4.6-.1Zm0 3.3a4.5 4.5 0 1 1 0 9.1 4.5 4.5 0 0 1 0-9.1Zm5-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
          />
        </svg>
      );
  }
}

export default function Footer({
  brand = "Devsolutify",
  tagline = "We build high-converting Shopify stores.",
  email = "hello@youragency.com",
  phone = "+1 (000) 000-0000",
  address = "123 Your St, City, Country",
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
    <footer className="border-t border-slate-200 bg-white">
      {/* top */}
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-12">
        {/* Brand / About */}
        <div className="md:col-span-4">
          <div className="inline-flex items-center gap-2">
            <Image src="/images/logo.png" alt="logo" width={28} height={28} />
            <span className="text-lg font-bold text-slate-900">{brand}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-slate-600">{tagline}</p>

          <div className="mt-4 space-y-1 text-sm text-slate-600">
            <p>
              <span className="font-medium text-slate-900">Email:</span>{" "}
              <a className="text-sky-600 hover:underline" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
            <p>
              <span className="font-medium text-slate-900">Phone:</span>{" "}
              <a className="text-sky-600 hover:underline" href={`tel:${phone.replace(/[^+\d]/g, "")}`}>
                {phone}
              </a>
            </p>
            <p>
              <span className="font-medium text-slate-900">Address:</span> {address}
            </p>
          </div>

          {/* Socials */}
          <div className="mt-5 flex items-center gap-3">
            {Object.entries(socials).map(([k, href]) =>
              href ? (
                <Link
                  key={k}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50"
                  aria-label={k}
                >
                  <Icon name={k as Social} />
                </Link>
              ) : null
            )}
          </div>
        </div>

        {/* Link columns */}
        <div className="md:col-span-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-sm font-semibold text-slate-900">{col.title}</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-slate-600 transition hover:text-slate-900 hover:underline"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      {newsletter?.enabled && (
        <div className="border-t border-slate-200 bg-white">
          <div className="container mx-auto px-4 py-6 md:py-10">
            <div className="flex flex-col items-center text-center gap-6 md:flex-row md:text-left md:justify-between">
              {/* Text */}
              <div className="max-w-md">
                <h4 className="text-lg font-semibold text-slate-900 tracking-tight">
                  Stay in the loop
                </h4>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Expert tips on CRO, speed optimization, and Shopify news — delivered monthly.
                </p>
              </div>

              {/* Form */}
              <div className="w-full md:w-auto">
                <NewsletterForm />
              </div>
            </div>

            {newsletter.disclaimer && (
              <p className="mt-4 text-xs text-slate-500 text-center md:text-left">
                {newsletter.disclaimer}
              </p>
            )}
          </div>
        </div>
      )}

      {/* bottom */}
      <div className="border-t border-slate-200">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-600 md:flex-row">
          <p>© {year} {brand}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-900 hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 hover:underline">
              Terms
            </Link>
            <Link href="/cookie-policy" className="hover:text-slate-900 hover:underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
