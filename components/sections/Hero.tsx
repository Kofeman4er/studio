// components/sections/Hero.tsx
"use client"
import Link from "next/link";
import Image from "next/image";

type Cta = { label: string; href: string; variant?: "primary" | "secondary" };
type Slide = { src: string; alt?: string };

type Props = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  slides?: Slide[]; // supply ~3 images; we loop them infinitely
};

export default function Hero({
  eyebrow = "THE O.G. SUBSCRIPTION",
  heading = "YOUR ULTIMATE\nCREATIVE PARTNER",
  subheading = "We combine expert Shopify development, performance, CRO, and integrations to power your growth.",
  primaryCta = { label: "Get Started", href: "/contact?service=custom-dev#intake", variant: "primary" },
  secondaryCta = { label: "How it works", href: "/process", variant: "secondary" },
  slides = [
    { src: "/images/hero/slide-1.jpg", alt: "Work 1" },
    { src: "/images/hero/slide-2.jpg", alt: "Work 2" },
    { src: "/images/hero/slide-3.jpg", alt: "Work 3" },
  ],
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0b0b] text-white">
      {/* Full height on lg; tall on smaller screens */}
      <div className="relative mx-auto h-[72vh] md:h-[76vh] lg:h-screen max-w-[1232px] px-4">
        {/* CAROUSEL — right 50%, behind text */}
        <div className="absolute inset-y-0 right-0 z-0 w-1/2 overflow-hidden">
          {/* left-edge tint so slides tuck under copy */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-28 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b]/70 to-transparent" />
          <Marquee slides={slides} />
        </div>

        {/* COPY — ~75% width, over the carousel */}
        <div className="relative z-10 flex h-full w-full items-center">
          <div className="w-full lg:w-3/4">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky-500">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              {heading.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-white/80 sm:text-xl">{subheading}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CtaLink {...primaryCta} />
              <CtaLink {...secondaryCta} />
            </div>
          </div>
        </div>
      </div>

      {/* subtle top/bottom fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

      {/* GLOBAL keyframes so the animation runs */}
      <style jsx global>{`
        @keyframes hero-marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-marquee-anim { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

function Marquee({ slides }: { slides: Slide[] }) {
  const GAP = 21; // px – keep constant spacing (and at the loop seam)
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/2 -translate-y-1/2">
        <div
          className="flex w-max gap-[21px] pr-[21px] hero-marquee-anim"
          style={{ animation: "hero-marquee 52s linear infinite" }}
        >
          <Strip slides={slides} />
          <Strip slides={slides} /> {/* duplicate once for seamless loop */}
        </div>
      </div>
    </div>
  );
}

function Strip({ slides }: { slides: Slide[] }) {
  return (
    <div className="flex items-center gap-[21px]">
      {slides.map((s, i) => (
        <div
          key={`${s.src}-${i}`}
          className="relative h-[460px] w-[340px] flex-shrink-0 overflow-hidden rounded-[16px] border border-white/10 bg-white/5"
        >
          <Image src={s.src} alt={s.alt ?? ""} fill className="object-cover" priority={i === 0} />
        </div>
      ))}
    </div>
  );
}

function CtaLink({ label, href, variant = "primary" }: Cta) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500";
  const styles =
    variant === "primary"
      ? "bg-sky-500 text-black hover:brightness-95"
      : "border border-sky-500 text-sky-500 hover:bg-sky-500/10";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {label}
    </Link>
  );
}
