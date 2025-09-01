'use client'
// studio/app/about/page.tsx
import type { Metadata } from "next";
import LogoCloud from "@/components/sections/LogoCloud";
import Button from "@/components/ui/Button";
import {
  BarChart3,
  Info,
  Gem,
  Star,
  Cog,
  Goal,
  ShoppingBag,
  Palette,
  Puzzle,
  Cpu,
  TrendingUp,
  Search,
  Building2,
  Crown,
} from "lucide-react";
import React from "react";


const VALUES = [
  {
    title: "Outcomes over output",
    desc: "We measure success by customer impact and revenue, not lines of code.",
    icon: BarChart3,
  },
  {
    title: "Speed with quality",
    desc: "Tight feedback loops, performance budgets, and a11y baked in.",
    icon: Gem,
  },
  {
    title: "Clear communication",
    desc: "No black boxes. Roadmaps, demos, and async updates you can trust.",
    icon: Info,
  },
  {
    title: "Build for the team",
    desc: "Section-first content model so marketers can ship without dev time.",
    icon: Cog,
  },
  {
    title: "Partner mindset",
    desc: "We co-create, iterate openly, and optimize for your goals.",
    icon: Star,
  },
  {
    title: "Strategic guidance",
    desc: "Roadmaps and trade-offs that grow DTC and B2B revenue.",
    icon: Goal,
  },
];

const TEAM = [
  { name: "Avery Kim", role: "Founder / Tech Lead", avatar: "/images/team/avery.jpg" },
  { name: "Jordan Lee", role: "Design Lead", avatar: "/images/team/jordan.jpg" },
  { name: "Sam Patel", role: "Solutions Architect", avatar: "/images/team/sam.jpg" },
  { name: "Mia Torres", role: "Project Manager", avatar: "/images/team/mia.jpg" },
];

export default function Page() {
  return (
    <>
      {/* Hero / intro (centered) */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            About us
          </p>
          <h1 className="mx-auto mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            We build Shopify stores that look great and convert better
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            We’re a tight, senior team of designers and engineers focused on Shopify.
            Our playbook blends brand craft with conversion science so your storefront
            is fast, accessible, and easy to evolve.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild href="/contact">
              Get in touch
            </Button>
            <Button asChild href="/portfolio" variant="secondary">
              See our work
            </Button>
          </div>

          {/* marquee ribbon (HeroDivider-style, non-interactive, white bg) */}
          <div className="relative mx-auto mt-12 w-full max-w-5xl pointer-events-none select-none">
            {/* soft edge fades like HeroDivider */}
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent"
            />
            <div
              className="overflow-hidden"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div
                className="about-marquee-track flex"
                style={
                  {
                    width: "200%",
                    "--marquee-duration": "28s",
                  } as React.CSSProperties
                }
                aria-hidden
              >
                <RibbonSequence />
                <RibbonSequence />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why work with us (visual cards with lucide) */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <header className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Why should you work with us?
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded bg-sky-500" aria-hidden />
          </header>

          <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <li
                  key={v.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 ring-1 ring-sky-200">
                    <Icon className="h-5 w-5 text-sky-700" aria-hidden />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">{v.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{v.desc}</p>

                  {/* subtle animated underline on hover */}
                  <span className="pointer-events-none absolute inset-x-5 bottom-4 h-px origin-left scale-x-0 bg-sky-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </li>
              );
            })}
          </ul>

          <div className="mt-12 text-center">
            <Button asChild href="/services" className="rounded-full px-6 py-3">
              See our services
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & values */}
      <section className="bg-white">
        <div className="container mx-auto grid items-start gap-10 px-4 py-16 md:grid-cols-2">
          <div className="relative">

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Our mission
            </h2>
            <p className="mt-3 max-w-prose text-slate-600">
              At Devsolutify, our mission is simple: empower brands to thrive online. We believe every
              business deserves a beautiful, high-performing Shopify store that not only looks amazing
              but also drives real results.
              <br />
              <br />
              We’re here to bridge the gap between design, technology, and business goals -
              crafting online experiences that inspire trust, delight customers, and convert visitors
              into loyal buyers.
              <br />
              <br />
              From your first sale to your next big milestone, we’re committed to building solutions
              that grow with you, adapt to your vision, and stand out in a competitive market.
              <br />
              <br />
              Because your success isn’t just our work - it’s our purpose.
            </p>
            <div className="mt-6">
              <Button asChild href="/services" >
                Explore services
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">Our values</h3>
            <ul className="mt-3 grid gap-4">
              {VALUES.slice(0, 4).map((v) => {
                const Icon = v.icon;
                return (
                  <li
                    key={v.title}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 ring-1 ring-sky-100">
                      <Icon className="h-4 w-4 text-sky-700" aria-hidden />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{v.title}</div>
                      <p className="mt-1 text-sm text-slate-600">{v.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Team</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              The people behind the work
            </h2>
            <p className="mt-2 text-slate-600">
              Senior talent across design, engineering, and delivery.
            </p>
          </div>

          <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {TEAM.map((m) => (
              <li
                key={m.name}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-slate-100">
                  <img src={m.avatar} alt={m.name} className="h-full w-full object-cover" />
                </div>
                <div className="mt-3 text-sm font-semibold text-slate-900">{m.name}</div>
                <div className="text-xs text-slate-500">{m.role}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Logo cloud (partners/certifications) */}
      <LogoCloud
        eyebrow="Partners & platforms"
        subheading="We collaborate with leading ecommerce tools."
        logos={[
          { src: "/badges/shopify-partner.svg", alt: "Shopify Partner" },
          { src: "/badges/plus.svg", alt: "Shopify Plus" },
          { src: "/badges/klaviyo.svg", alt: "Klaviyo" },
          { src: "/badges/meta.svg", alt: "Meta" },
          { src: "/badges/google.svg", alt: "Google" },
          { src: "/badges/algolia.svg", alt: "Algolia" },
        ]}
        compact
        grayscale
      />

      {/* CTA */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-8 text-center shadow-sm sm:p-12">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-slate-600">
              Tell us your goals and we’ll propose a practical path on Shopify.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild href="/contact">Start a project</Button>
              <Button asChild href="/services" variant="secondary">
                Explore services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* local styles for marquee */}
      <style jsx global>{`
        .about-marquee-track {
          animation: about-marquee var(--marquee-duration, 28s) linear infinite;
          will-change: transform;
        }
        @keyframes about-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-marquee-track {
            animation: none !important;
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </>
  );
}

/* --------- helpers --------- */
function Ribbon() {
  return (
    <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden bg-white">
      <div
        className="marquee-track flex items-center gap-6 opacity-90"
        style={{ ["--speed" as any]: "40s" }}
        aria-hidden
      >
        {/* duplicate the same sequence twice */}
        <RibbonSequence />
        <RibbonSequence />
      </div>

      <style jsx>{`
        .marquee-track {
          animation: ribbon-marquee var(--speed, 40s) linear infinite;
          will-change: transform;
        }
        @keyframes ribbon-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

function RibbonSequence() {
  const items = [
    { icon: ShoppingBag, label: "Shopify" },
    { icon: Palette, label: "Theme Design" },
    { icon: Puzzle, label: "Apps" },
    { icon: Cpu, label: "Hydrogen" },
    { icon: TrendingUp, label: "CRO" },
    { icon: Search, label: "SEO" },
    { icon: Building2, label: "B2B" },
    { icon: Crown, label: "Plus" },
  ];

  return (
    <div className="flex flex-none items-center gap-3 px-3">
      {items.map((it, i) => {
        const Icon = it.icon;
        return (
          <div
            key={`${it.label}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-[14px] border-2 border-white/90 bg-transparent px-3 py-2 shadow-sm"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/70 ring-1 ring-white/80 backdrop-blur">
              <Icon className="h-4 w-4 text-slate-900" aria-hidden />
            </span>
            <span className="whitespace-nowrap text-sm font-semibold text-slate-900">
              {it.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

