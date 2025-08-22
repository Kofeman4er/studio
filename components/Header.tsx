"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type NavLink = { label: string; href: string };

const LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

type Props = {
  brand?: string;
  logoSrc?: string;     // e.g. "/logo.svg"
  logoAlt?: string;
  logoHref?: string;
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function Header({
  brand = "Devsolutify",
  logoSrc = "/images/logo.png",
  logoAlt = "Logo",
  logoHref = "/",
  links = LINKS,
  ctaLabel = "Start a Project",
  ctaHref = "/contact",
}: Props) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const linkBase =
    "inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-100";
  const linkMuted = "text-slate-600 hover:text-slate-900";
  const linkActive = "bg-indigo-50 text-slate-900";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur
        ${scrolled ? "bg-white/90 border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.06)]" : "bg-white/70 border-transparent"}
      `}
    >
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:rounded-md focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="container mx-auto flex items-center gap-4 px-4 py-3 md:py-3.5">
        <Link
          href={logoHref}
          className="inline-flex items-center gap-2 text-slate-900"
          aria-label={`${brand} home`}
        >
          {logoSrc ? (
            <Image src={logoSrc} alt={logoAlt} width={28} height={28} priority />
          ) : (
            <span className="grid h-7 w-7 place-items-center rounded-md bg-lime-400 text-white">◆</span>
          )}
          <span className="text-base font-bold tracking-tight">{brand}</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="ml-auto hidden items-center gap-2 md:flex">
          <ul className="flex list-none items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`${linkBase} ${active ? linkActive : linkMuted}`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="ml-2">
            <Link
              href={ctaHref}
              className="inline-flex items-center rounded-xl border border-transparent bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
            >
              {ctaLabel}
            </Link>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="ml-auto inline-grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-0.5 w-5 bg-slate-900 before:absolute before:-top-1.5 before:block before:h-0.5 before:w-5 before:bg-slate-900 after:absolute after:top-1.5 after:block after:h-0.5 after:w-5 after:bg-slate-900" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`md:hidden border-t border-slate-200 bg-white transition-all
          ${open ? "pointer-events-auto max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`${linkBase} w-full ${active ? linkActive : linkMuted}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-1">
            <Link
              href={ctaHref}
              className="inline-flex w-full items-center justify-center rounded-xl border border-transparent bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
              onClick={() => setOpen(false)}
            >
              {ctaLabel}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
