"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Avoid SSR/client divergence by rendering client-only effects after mount
  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => router.push("/"), 5000);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <section className="relative container mx-auto max-w-2xl px-4 py-20 text-center">
      {/* Confetti: render only after mount to prevent hydration mismatch */}
      {mounted && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <Confetti />
        </div>
      )}

      {/* Animated check */}
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 animate-[pop_500ms_ease-out]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
        </svg>
      </div>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
        Thanks—your message is on its way!
      </h1>
      <p className="mt-3 text-slate-600">
        We’ll review your details and get back to you within one business day.
        If it’s urgent, email us at{" "}
        <a className="text-sky-600 underline" href="mailto:hello@youragency.com">
          hello@youragency.com
        </a>.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Back to home
        </Link>
        <Link
          href="/portfolio"
          className="inline-flex items-center rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
        >
          See our work
        </Link>
      </div>

      <p className="mt-8 text-xs text-slate-500">
        You’ll be redirected to the homepage in 5 seconds.
      </p>

      {/* Local styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
        }
        @keyframes pop {
          0% { transform: scale(0.6); }
          60% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
}

/** Tiny, dependency-free confetti (client-only) */
function Confetti() {
  // Create the confetti pieces only once per mount to keep them stable
  const pieces = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 0.6;
      const duration = 3 + Math.random() * 2;
      const size = 6 + Math.random() * 8;
      const colors = ["#0ea5e9", "#22c55e", "#f97316", "#eab308", "#6366f1", "#06b6d4"];
      const color = colors[i % colors.length];
      const isCircle = Math.random() > 0.6;
      return { left, delay, duration, size, color, isCircle };
    });
  }, []);

  return (
    <div className="absolute inset-x-0 top-0 mx-auto h-0 w-full">
      {pieces.map((p, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${p.left}vw`,
            top: "100vh",
            width: p.size,
            height: p.size * (p.isCircle ? 1 : 0.7),
            background: p.color,
            borderRadius: p.isCircle ? "9999px" : "4px",
            transform: "translateY(0)",
            animation: `float ${p.duration}s ease-in ${p.delay}s forwards`,
            filter: "saturate(120%)",
          }}
        />
      ))}
    </div>
  );
}
