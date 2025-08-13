"use client";

import { useSearchParams } from "next/navigation";

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service…" },
  { value: "custom-dev", label: "Custom Shopify Development" },
  { value: "shopify-plus", label: "Shopify Plus Solutions" },
  { value: "themes", label: "Theme Design & Customization" },
  { value: "migrations", label: "Migrations" },
  { value: "apps", label: "Apps & API Integrations" },
  { value: "cro", label: "CRO & Optimization" },
  { value: "support", label: "Support & Maintenance" },
];

export default function ContactPage() {
  const params = useSearchParams();
  const defaultService = params.get("service") ?? "";
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50">
      {/* Optional: warn in dev if the key is missing */}
      {!accessKey && (
        <div className="mb-4 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800">
          <b>Heads up:</b> <code>NEXT_PUBLIC_WEB3FORMS_KEY</code> is not set. Add it to your
          <code> .env.local</code> so submissions work.
        </div>
      )}

      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Start a project</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        Tell us a bit about your Shopify project and we’ll get back within one business day.
      </p>

      {/* Web3Forms: submit directly to their endpoint */}
      <form
        id="intake"
        action="https://api.web3forms.com/submit"
        method="POST"
        className="mt-8 grid max-w-xl gap-4"
      >
        {/* REQUIRED: your public access key (safe to expose) */}
        <input type="hidden" name="access_key" value={accessKey} />

        {/* Optional niceties */}
        <input type="hidden" name="subject" value="New project inquiry from website" />
        <input type="hidden" name="from_name" value="Your Agency Website" />
        {/* Relative redirect works fine */}
        <input type="hidden" name="redirect" value="/thank-you" />
        {/* Honeypot */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        <label className="text-sm font-medium text-slate-700">
          What do you need?
          <select
            name="service"
            defaultValue={defaultService}
            required
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          >
            {SERVICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-slate-700">
          Your name
          <input
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Email
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Message
          <textarea
            name="message"
            rows={6}
            placeholder="Share goals, timelines, budget range—anything that helps."
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </label>

        {/* Helpful context fields for your inbox/automations */}
        <input type="hidden" name="source" value="contact_page" />
        <input type="hidden" name="path" value="/contact" />

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
        >
          Send message
        </button>
      </form>

      <p className="mt-6 text-xs text-slate-500">
        By submitting, you agree to our{" "}
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>
        .
      </p>
    </section>
  );
}
