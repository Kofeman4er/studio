"use client";

import { useEffect, useMemo, useState } from "react";
import { CONSENT_COOKIE, makeConsentCookie, type ConsentState } from "@/lib/consent";

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return;
  const match = document.cookie.split("; ").find((c) => c.startsWith(name + "="));
  return match?.split("=").slice(1).join("=");
}

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [openPrefs, setOpenPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [hidden, setHidden] = useState(true); // start hidden to avoid layout shift

  // show banner only if cookie not set
  useEffect(() => {
    setMounted(true);
    const raw = readCookie(CONSENT_COOKIE);
    if (!raw) {
      setHidden(false);
    }
  }, []);

useEffect(() => {
  const handler = () => {
    setHidden(false);
    setOpenPrefs(true);
  };
  window.addEventListener("open-cookie-preferences", handler);
  return () => window.removeEventListener("open-cookie-preferences", handler);
}, []);

  const acceptAll = () => {
    const payload: ConsentState = {
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    };
    document.cookie = makeConsentCookie(payload);
    setHidden(true);
    setOpenPrefs(false);
  };

  const rejectAll = () => {
    const payload: ConsentState = {
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    };
    document.cookie = makeConsentCookie(payload);
    setHidden(true);
    setOpenPrefs(false);
  };

  const savePrefs = () => {
    const payload: ConsentState = {
      analytics,
      marketing,
      timestamp: Date.now(),
    };
    document.cookie = makeConsentCookie(payload);
    setHidden(true);
    setOpenPrefs(false);
  };

  // avoid SSR/CSR mismatch
  if (!mounted) return null;

  return (
    <>
      {/* Banner */}
      {!hidden && (
        <div className="fixed inset-x-0 bottom-0 z-40">
          <div className="mx-auto mb-4 w-[min(96%,68rem)] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-slate-700">
                We use cookies to improve your experience, analyze traffic, and for marketing.
                You can accept all, reject all, or manage preferences.
              </p>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  onClick={() => setOpenPrefs(true)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Preferences
                </button>
                <button
                  onClick={rejectAll}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Reject
                </button>
                <button
                  onClick={acceptAll}
                  className="rounded-lg bg-sky-600 px-3 py-1.5 text-sm font-semibold text-white hover:brightness-95"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences dialog */}
      {openPrefs && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-[min(96%,38rem)] rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Cookie Preferences</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Choose which categories you’re comfortable with. You can change this later.
                </p>
              </div>
              <button
                onClick={() => setOpenPrefs(false)}
                aria-label="Close"
                className="rounded-full p-1 text-slate-500 hover:bg-slate-100"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <PrefRow
                title="Necessary"
                description="Required for core functionality (always on)."
                disabled
                checked
                onChange={() => {}}
              />
              <PrefRow
                title="Analytics"
                description="Helps us improve the site by understanding usage."
                checked={analytics}
                onChange={(v) => setAnalytics(v)}
              />
              <PrefRow
                title="Marketing"
                description="Used to deliver relevant ads and measure campaigns."
                checked={marketing}
                onChange={(v) => setMarketing(v)}
              />
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={rejectAll}
                className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Reject all
              </button>
              <button
                onClick={savePrefs}
                className="rounded-lg bg-sky-600 px-3 py-1.5 text-sm font-semibold text-white hover:brightness-95"
              >
                Save preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function PrefRow({
  title,
  description,
  checked,
  onChange,
  disabled,
}: {
  title: string;
  description: string;
  checked?: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
}) {
  const id = useMemo(() => "switch-" + Math.random().toString(36).slice(2), []);
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
      <div className="pr-4">
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="text-xs text-slate-600">{description}</div>
      </div>
      <label className={`inline-flex items-center ${disabled ? "opacity-50" : ""}`}>
        <input
          id={id}
          type="checkbox"
          className="peer sr-only"
          checked={!!checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <span className="
          inline-block h-6 w-11 rounded-full bg-slate-300 transition
          peer-checked:bg-sky-600
          relative
          after:absolute after:left-0.5 after:top-0.5
          after:h-5 after:w-5 after:rounded-full after:bg-white after:transition
          peer-checked:after:translate-x-5
        " />
      </label>
    </div>
  );
}
