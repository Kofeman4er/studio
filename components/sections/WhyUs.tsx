// components/sections/WhyUs.tsx
import Link from "next/link";
import clsx from "clsx";

type Row = {
  platform: string;
  blurb?: string;
  values: [boolean, boolean, boolean, boolean, boolean]; // Speed, Quality, Support, Cost
};

const ROWS: Row[] = [
  {
    platform: "Devsolutify",
    blurb:
      "Your on-demand Shopify partner for fast delivery, consistent quality, and predictable pricing.",
    values: [true, true, true, true, true],
  },
  {
    platform: "In-house team",
    blurb:
      "Hiring takes time, replacements are slow, and ongoing salaries make in-house design costly, especially when needs fluctuate.",
    values: [false, false, true, true, true],
  },
  {
    platform: "Freelancers",
    blurb:
      "Hit or miss. Sourcing and managing talent for every project keeps you chasing consistency, not building your brand.",
    values: [false, false, true, true, false],
  },
  {
    platform: "Agencies",
    blurb:
      "Strategic partners, but high-cost retainers, rigid scopes, and slow timelines make them a poor fit for everyday creative needs.",
    values: [false, false, true, true, false],
  },
  {
    platform: "DIY Tools",
    blurb:
      "Quick to use — but the output is off-brand, inconsistent, and still needs heavy manual effort to finish.",
    values: [true, true, false, false, false],
  },
];

export default function WhyUs() {
  return (
    <section className="relative border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Centered Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
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
            className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            Get started
          </Link>
        </div>

        {/* Table — full width on all screens; scroll remains available if needed */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full border-collapse">
            <thead className="bg-sky-500">
              <tr className="text-center text-sm font-semibold text-white">
                <Th className="w-[40%]"> </Th>
                <Th >Platform</Th>
                <Th>Speed</Th>
                <Th>Quality</Th>
                <Th>Support</Th>
                <Th>Cost</Th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {ROWS.map((row, idx) => {
                const isFirst = row.platform === "Devsolutify";
                return (
                  <tr key={row.platform} className="align-center">
                    {/* Platform cell */}
                    <td
                      className={clsx(
                        "p-3 sm:p-5",
                        isFirst && "bg-sky-50 sm:rounded-l-2xl"
                      )}
                    >
                      <div className="font-semibold text-slate-900">
                        {row.platform}
                      </div>
                      {/* hide blurb on small screens */}
                      {row.blurb && (
                        <p className="mt-1 hidden text-sm leading-relaxed text-slate-600 sm:block">
                          {row.blurb}
                        </p>
                      )}
                    </td>

                    {/* Matrix cells */}
                    {row.values.map((v, i) => (
                      <td
                        key={`${row.platform}-${i}`}
                        className={clsx(
                          "p-3 text-center sm:p-5",
                          isFirst && "bg-sky-50",
                          isFirst && i === row.values.length - 1 && "sm:rounded-r-2xl"
                        )}
                      >
                        {v ? <BadgeCheck ariaLabel="Yes" /> : <BadgeX ariaLabel="No" />}
                      </td>
                    ))}
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
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th className={`p-3 sm:p-5 ${className}`}>
      <span className="inline-block">{children}</span>
    </th>
  );
}

function BadgeCheck({ ariaLabel }: { ariaLabel: string }) {
  return (
    <span
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 ring-1 ring-sky-500/20"
      aria-label={ariaLabel}
      title="Yes"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-sky-500"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M7 12.5l3 3 7-7"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function BadgeX({ ariaLabel }: { ariaLabel: string }) {
  return (
    <span
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 ring-1 ring-slate-200"
      aria-label={ariaLabel}
      title="No"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-500" fill="none" aria-hidden="true">
        <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}
