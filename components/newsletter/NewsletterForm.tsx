// components/newsletter/NewsletterForm.tsx
"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="mt-3 flex w-full max-w-md flex-col gap-2"
    >
      {/* REQUIRED: your public key (safe to expose) */}
      <input
        type="hidden"
        name="access_key"
        value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
      />

      {/* Helpful metadata */}
      <input type="hidden" name="subject" value="Newsletter signup" />
      <input type="hidden" name="from_name" value="Your Agency Website" />
      <input type="hidden" name="source" value="footer_subscribe" />
      <input type="hidden" name="redirect" value="http://localhost:3000/thank-you-newsletter" />

      {/* Have Web3Forms set Reply-To header to the subscriber */}
      <input type="hidden" name="replyto" value={email} />

      {/* CC the subscriber so they receive a copy */}
      <input type="hidden" name="cc" value={email} />

      {/* Honeypot to block bots */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          placeholder="enter your email"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="newsletter-consent"
        />
        <button
          type="submit"
          className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:brightness-95 disabled:opacity-60"
          disabled={!email || !consent}
        >
          Subscribe
        </button>
      </div>

      {/* Consent checkbox (required) */}
      <label
        id="newsletter-consent"
        className="mt-1 flex items-start gap-2 text-xs text-slate-600"
      >
        <input
          type="checkbox"
          name="consent"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5"
        />
        I agree to receive newsletters and marketing updates. You can unsubscribe anytime.
      </label>

      <p className="text-[11px] text-slate-500">
        By subscribing, you agree to our{" "}
        <a href="/privacy-policy" className="underline">Privacy Policy</a>.
      </p>
    </form>
  );
}
