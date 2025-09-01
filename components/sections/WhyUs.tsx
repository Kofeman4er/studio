// components/sections/WhyUs.tsx
"use client";

import Link from "next/link";
import clsx from "clsx";
import { CircleCheck, CircleX } from "lucide-react";

type Row = {
  platform: string;
  blurb?: string;
  values: [boolean, boolean, boolean, boolean]; // Speed, Quality, Support, Cost
};

const ROWS: Row[] = [
  {
    platform: "Devsolutify",
    blurb:
      "Your on-demand Shopify partner for fast delivery, consistent quality, and predictable pricing.",
    values: [true, true, true, true],
  },
  {
    platform: "In-house team",
    blurb:
      "Hiring takes time, replacements are slow, and ongoing salaries make in-house design costly, especially when needs fluctuate.",
    values: [false, true, true, true],
  },
  {
    platform: "Freelancers",
    blurb:
      "Hit or miss. Sourcing and managing talent for every project keeps you chasing consistency, not building your brand.",
    values: [false, true, true, false],
  },
  {
    platform: "Agencies",
    blurb:
      "Strategic partners, but high-cost retainers, rigid scopes, and slow timelines make them a poor fit for everyday creative needs.",
    values: [false, true, true, false],
  },
  {
    platform: "DIY Tools",
    blurb:
      "Quick to use — but the output is off-brand, inconsistent, and still needs heavy manual effort to finish.",
    values: [true, false, false, false],
  },
];

export default function WhyUs() {
  return (
    <section className="relative border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-800">
            Built for you
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why us?
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Compare how Devsolutify stacks up against common alternatives for
            Shopify work.
          </p>

          <Link
            href="/contact?service=custom-dev#intake"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-2 text-sm font-semibold text-white transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            Get started
          </Link>
        </div>

        {/* Table */}
        <div className="mx-auto max-w-4xl lg:max-w-[56rem] overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full border-collapse text-sm lg:text-xs">
            <thead className="bg-sky-900">
              <tr className="text-center font-semibold text-white">
                {/* empty header cell for the row labels */}
                <Th className="w-[38%] lg:w-[32%] text-left" />
                <Th>Speed</Th>
                <Th>Quality</Th>
                <Th>Support</Th>
                <Th>Cost</Th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {ROWS.map((row) => {
                const isFirst = row.platform === "Devsolutify";
                return (
                  <tr key={row.platform}>
                    {/* Platform cell */}
                    <td className={clsx("align-top p-3 sm:p-4 lg:p-2.5 bg-white")}>
                      <div className="font-semibold text-slate-900 text-sm lg:text-xs">
                        {row.platform}
                      </div>
                      {row.blurb && (
                        <p className="mt-1 hidden text-slate-600 sm:block text-xs lg:text-[11px] leading-snug">
                          {row.blurb}
                        </p>
                      )}
                    </td>

                    {/* Value cells */}
                    {row.values.map((v, i) => {
                      const isEdgeLeft = i === 0;
                      const isEdgeRight = i === row.values.length - 1;

                      return (
                        <td
                          key={`${row.platform}-${i}`}
                          className={clsx(
                            "p-3 sm:p-4 lg:p-2.5 text-center",
                            isFirst && v && "bg-sky-100",
                            isFirst && v && isEdgeLeft && "rounded-l-xl",
                            isFirst && v && isEdgeRight && "rounded-r-xl"
                          )}
                        >
                          {v ? (
                            <CircleCheck
                              className="mx-auto h-5 w-5 lg:h-4 lg:w-4 text-sky-600"
                              aria-label="Yes"
                            />
                          ) : (
                            <CircleX
                              className="mx-auto h-5 w-5 lg:h-4 lg:w-4 text-slate-500"
                              aria-label="No"
                            />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-center text-xs text-slate-500">
          Checks indicate a strong fit for everyday, growth-focused Shopify needs.
        </p>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */
function Th({
  children,
  className = "",
}: {
  children?: React.ReactNode; // made optional to allow <Th />
  className?: string;
}) {
  return (
    <th className={`p-3 sm:p-4 lg:p-2.5 ${className}`}>
      {children ? <span className="inline-block">{children}</span> : null}
    </th>
  );
}
