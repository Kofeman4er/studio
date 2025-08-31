"use client";

type Logo = { src: string; alt: string };

const LOGOS: Logo[] = [
  { src: "/badges/shopify-partner.png", alt: "Shopify Partner" },
  { src: "/badges/klaviyo.svg", alt: "Klaviyo" },
  { src: "/badges/google.svg", alt: "Google" },
  { src: "/badges/algolia.svg", alt: "algolia" },
];

export default function HeroDivider() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Black → White gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0b0b0b] to-white" />

      <div className="relative mx-auto w-full max-w-[1400px] py-8 sm:py-10">
        {/* Marquee container */}
        <div
          className="mt-4 h-14 sm:h-16 overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Moving track */}
          <div
            className="marquee-track flex"
            style={
              {
                width: "200%",
                "--marquee-duration": "28s",
              } as React.CSSProperties
            }
          >
            <Sequence logos={LOGOS} />
            <Sequence logos={LOGOS} />
          </div>
        </div>
      </div>

      <StyleBlock />
    </section>
  );
}

function Sequence({ logos }: { logos: Logo[] }) {
  return (
    <div className="lg:mr-40 lg:ml-40 sm:mr-10 sm:ml-10 marquee-group flex w-1/2 flex-shrink-0 items-center justify-between gap-2 sm:gap-8 md:gap-10 px-2">
      {logos.map((l, i) => (
        <div key={`${l.src}-${i}`} className="shrink-0">
          <img
            src={l.src}
            alt={l.alt}
            loading="lazy"
            className="block h-12 sm:h-7 md:h-8 w-auto max-w-[10vw] sm:max-w-none object-contain brightness-0 invert opacity-90"
          />
        </div>
      ))}
    </div>
  );
}

function StyleBlock() {
  return (
    <style jsx global>{`
      .marquee-track {
        animation: hero-marquee var(--marquee-duration, 28s) linear infinite;
        will-change: transform;
      }
      @keyframes hero-marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @media (prefers-reduced-motion: reduce) {
        .marquee-track {
          animation: none !important;
          transform: translateX(0) !important;
        }
      }
    `}</style>
  );
}
