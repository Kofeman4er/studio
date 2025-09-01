// components/sections/ServicesShowcase.tsx
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Layout,
  BarChart3,
  PlusCircle,
  MoveRight,
  Code2,
  TestTube2,
  ShieldCheck,
} from "lucide-react";

type ServiceCard = {
  id: string;
  title: string;
  blurb?: string;
  href: string;
  image: string;
  icon?:
    | "spark"
    | "theme"
    | "chart"
    | "plus"
    | "migrate"
    | "api"
    | "ab"
    | "speed";
};

const SERVICES: ServiceCard[] = [
  {
    id: "custom-dev",
    title: "Custom Shopify Development",
    blurb: "Sections, Liquid & React patterns that scale.",
    href: "/services#custom-dev",
    image: "/images/services/custom-dev.png",
    icon: "spark",
  },
  {
    id: "redesign",
    title: "Theme design that looks great and converts",
    blurb: "Design systems and custom themes that balance brand and performance.",
    href: "/services#themes",
    image: "/images/services/themes.png",
    icon: "theme",
  },
  {
    id: "seo",
    title: "Shopify SEO & Content Marketing",
    blurb: "Technical SEO + content that ranks.",
    href: "/services#seo",
    image: "/images/services/seo.png",
    icon: "chart",
  },
  {
    id: "plus",
    title: "Shopify Plus Support & Services",
    blurb: "Multi-store, B2B, and checkout extensibility.",
    href: "/services#shopify-plus",
    image: "/images/services/plus.png",
    icon: "plus",
  },
  {
    id: "migrations",
    title: "Migrations to Shopify",
    blurb: "Risk-managed replatforming without SEO loss.",
    href: "/services#migrations",
    image: "/images/services/migrations.png",
    icon: "migrate",
  },
  {
    id: "apps",
    title: "Apps & API Integrations",
    blurb: "Private/public apps + ERP/3PL integrations.",
    href: "/services#apps",
    image: "/images/services/apps.png",
    icon: "api",
  },
  {
    id: "cro",
    title: "CRO & Experimentation",
    blurb: "A/B testing that moves the KPI needle.",
    href: "/services#cro",
    image: "/images/services/cro.png",
    icon: "ab",
  },
  {
    id: "speed",
    title: "Support & maintenance",
    blurb:
      "Reliable retainers for updates, security, and proactive improvements.",
    href: "/services#support",
    image: "/images/services/support.png",
    icon: "speed",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <Card key={s.id} {...s} />
        ))}
      </div>
    </section>
  );
}

function Card({ title, blurb, href, image, icon = "spark" }: ServiceCard) {
  return (
    <Link
      href={href}
      className="
        group relative block h-[350px] overflow-hidden rounded-2xl border border-slate-200
        bg-slate-100 shadow-sm transition-transform duration-500
        hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500
      "
    >
      {/* Background image — slow zoom on hover */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-[5000ms] group-hover:scale-110"
        sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
      />

      {/* Base readability gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Hover tint overlay */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-t from-sky-600/80 via-black/20 to-transparent
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        {/* Icon + Title (nudge up on hover) */}
        <div className="transition-transform duration-300 group-hover:-translate-y-1">
          <div className="mb-2">
            <Icon name={icon} className="h-10 w-10 text-white drop-shadow-md" />
          </div>
          <h3 className="text-2xl font-semibold leading-tight text-white drop-shadow-sm">
            {title}
          </h3>
        </div>

        {/* Blurb appears on hover */}
        {blurb && (
          <div
            className="
              mt-1 max-w-[48ch] overflow-hidden
              max-h-0 opacity-0 translate-y-2
              transition-all duration-300
              group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0
              md:group-hover:max-h-28
            "
          >
            <p className="text-base text-white/90">{blurb}</p>
          </div>
        )}
      </div>
    </Link>
  );
}

function Icon({
  name,
  className,
}: {
  name: NonNullable<ServiceCard["icon"]>;
  className?: string;
}) {
  const cls = className || "h-10 w-10 text-white";
  switch (name) {
    case "spark":
      return <Sparkles className={cls} />;
    case "theme":
      return <Layout className={cls} />;
    case "chart":
      return <BarChart3 className={cls} />;
    case "plus":
      return <PlusCircle className={cls} />;
    case "migrate":
      return <MoveRight className={cls} />;
    case "api":
      return <Code2 className={cls} />;
    case "ab":
      return <TestTube2 className={cls} />;
    case "speed":
      return <ShieldCheck className={cls} />;
  }
}
