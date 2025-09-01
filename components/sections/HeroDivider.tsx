"use client";

import {
  Layout,
  FileText,
  Boxes,
  Monitor,
  PenTool,
  Palette,
  Image,
  BarChart3,
} from "lucide-react";

type Feature = { icon: React.ElementType; label: string };

const FEATURES: Feature[] = [
  { icon: Layout, label: "Landing Page" },
  { icon: FileText, label: "Blog & Article Graphics" },
  { icon: Boxes, label: "Mockups" },
  { icon: Monitor, label: "Website Design" },
  { icon: PenTool, label: "UI/UX Design" },
  { icon: Palette, label: "Brand Identity" },
  { icon: Image, label: "Marketing Assets" },
  { icon: BarChart3, label: "CRO Graphics" },
];

export default function HeroDivider() {
  return (
    <section className="relative isolate overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0b0b0b] to-white" />

      <div className="relative mx-auto w-full max-w-[1400px] py-8 sm:py-10">
        <div
          className="mt-4 h-24 sm:h-28 overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* ❗ No fixed width here */}
          <div
            className="marquee-track inline-flex gap-3 sm:gap-4"
            style={{ "--marquee-duration": "52s" } as React.CSSProperties}
          >
            <Sequence items={FEATURES} />
            <Sequence items={FEATURES} />
          </div>
        </div>
      </div>

      <StyleBlock />
    </section>
  );
}

function Sequence({ items }: { items: Feature[] }) {
  return (
    // ❗ Let the sequence size to its content; don't force w-1/2
    <div className="marquee-group inline-flex items-center gap-3 sm:gap-4 shrink-0">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          // ❗ Prevent flex shrinking so cards never collapse/overlap
          <div
            key={`${item.label}-${i}`}
            className="flex flex-none items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-3 border-2 border-white rounded-xl bg-transparent"
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
            <p className="text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap">
              {item.label}
            </p>
          </div>
        );
      })}
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
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
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
