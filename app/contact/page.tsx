"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Phone,
  Clock,
  Building2,
  Globe,
  ChevronRight,
  Sparkles,
} from "lucide-react";

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

const BUDGETS = [
  { value: "", label: "Budget (optional)" },
  { value: "under-5k", label: "Under $5k" },
  { value: "5-15k", label: "$5k – $15k" },
  { value: "15-30k", label: "$15k – $30k" },
  { value: "30-60k", label: "$30k – $60k" },
  { value: "60k-plus", label: "$60k+" },
];

const TIMELINES = [
  { value: "", label: "Timeline (optional)" },
  { value: "asap", label: "ASAP / this month" },
  { value: "1-2", label: "1–2 months" },
  { value: "3-4", label: "3–4 months" },
  { value: "flexible", label: "Flexible" },
];

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactSkeleton />}>
      <ContactForm />
    </Suspense>
  );
}

function ContactSkeleton() {
  return (
    <section className="bg-gradient-to-b from-sky-50/60 to-white">
      <div className="container mx-auto px-4 py-14">
        <div className="mb-6">
          <div className="h-7 w-64 animate-pulse rounded bg-slate-200" />
          <div className="mt-3 h-5 w-96 animate-pulse rounded bg-slate-200" />
        </div>
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 w-full animate-pulse rounded bg-slate-200" />
              ))}
              <div className="h-24 w-full animate-pulse rounded bg-slate-200" />
              <div className="h-10 w-32 animate-pulse rounded bg-slate-300" />
            </div>
          </div>
          <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-6 w-40 animate-pulse rounded bg-slate-200" />
            <div className="mt-3 h-4 w-64 animate-pulse rounded bg-slate-200" />
            <div className="mt-3 h-4 w-52 animate-pulse rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const params = useSearchParams();
  const defaultService = params.get("service") ?? "";
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

  return (
    <section className="bg-gradient-to-b from-sky-50/60 to-white">
      <div className="container mx-auto px-4 py-14">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Start a project
          </h1>
          <p className="mt-3 text-slate-600">
            Tell us a bit about your Shopify goals. We’ll reply within one business day
            with next steps.
          </p>
        </div>

        {/* Heads-up for key */}
        {!accessKey && (
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800">
            <b>Heads up:</b> <code>NEXT_PUBLIC_WEB3FORMS_KEY</code> is not set. Add it to
            <code> .env.local</code> so submissions work.
          </div>
        )}

        {/* Grid: form + contact card */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-5">
          {/* Form card */}
          <div className="lg:col-span-3">
            <form
              id="intake"
              action="https://api.web3forms.com/submit"
              method="POST"
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              {/* required for Web3Forms */}
              <input type="hidden" name="access_key" value={accessKey} />
              <input type="hidden" name="subject" value="New project inquiry from website" />
              <input type="hidden" name="from_name" value="Devsolutify Website" />
              <input type="hidden" name="redirect" value="/thank-you" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
              <input type="hidden" name="source" value="contact_page" />
              <input type="hidden" name="path" value="/contact" />

              <div className="grid gap-4">
                {/* Service */}
                <label className="block text-sm font-medium text-slate-700">
                  What do you need?
                  <select
                    name="service"
                    defaultValue={defaultService}
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  >
                    {SERVICE_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>

                {/* Two-up: name + email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Your name
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Email
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                  </label>
                </div>

                {/* Two-up: company + website */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Company (optional)
                    <div className="relative mt-1">
                      <span className="pointer-events-none absolute left-3 top-2.5 text-slate-400">
                        <Building2 className="h-4 w-4" />
                      </span>
                      <input
                        name="company"
                        type="text"
                        placeholder="Acme Inc."
                        className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      />
                    </div>
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Website (optional)
                    <div className="relative mt-1">
                      <span className="pointer-events-none absolute left-3 top-2.5 text-slate-400">
                        <Globe className="h-4 w-4" />
                      </span>
                      <input
                        name="website"
                        type="url"
                        placeholder="https://example.com"
                        className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      />
                    </div>
                  </label>
                </div>

                {/* Two-up: budget + timeline */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Budget range
                    <select
                      name="budget"
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    >
                      {BUDGETS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Timeline
                    <select
                      name="timeline"
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    >
                      {TIMELINES.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                {/* Message */}
                <label className="block text-sm font-medium text-slate-700">
                  Message
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Share goals, timelines, budget range—anything that helps."
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  Send message
                  <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </button>

                <p className="text-xs text-slate-500">
                  By submitting, you agree to our{" "}
                  <a href="/privacy-policy" className="underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>

          {/* Right column: helpful info */}
          <aside className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-base font-semibold text-slate-900">
                    What to expect next
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    We’ll review your notes and reply with a short plan or a request for a quick call.
                    If it’s a fit, we’ll outline scope, timeline, and pricing.
                  </p>
                </div>
              </div>

              <ul className="mt-6 grid gap-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  <a
                  className="text-sky-700 underline-offset-2 hover:underline"
                  href={`mailto:${"devsolutify@gmail.com"}`}
                >
                  {"devsolutify@gmail.com"}
                </a>
                </li>

              </ul>

              
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
