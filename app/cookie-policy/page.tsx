import type { Metadata } from "next";
import Link from "next/link";
import ManagePreferencesButton from "@/components/cookies/ManagePreferencesButton";

export const metadata: Metadata = {
    title: "Cookie Policy — Your Agency",
    description:
        "How and why we use cookies and similar technologies on this website, plus how you can control them.",
};

export default function Page() {
    return (
        <article className="bg-white">
            <section className="container mx-auto px-4 py-12">
                {/* Hero */}
                <header className="max-w-3xl">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Cookie Policy
                    </h1>
                    <p className="mt-3 text-slate-600">
                        This Cookie Policy explains what cookies are, how we use them, and
                        how you can control them. For how we handle personal data more
                        broadly, see our{" "}
                        <Link href="/privacy" className="text-sky-700 underline">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </header>

                {/* What are cookies */}
                <section className="mt-10 max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">What are cookies?</h2>
                    <p className="mt-3 text-slate-700">
                        Cookies are small text files that a website stores on your device.
                        They help the site remember your actions and preferences (such as
                        login, language, or region) over a period of time. Similar
                        technologies include pixels, local storage, and SDKs.
                    </p>
                </section>

                {/* Types of cookies we use */}
                <section className="mt-10 max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                        Types of cookies we use
                    </h2>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                        <li>
                            <strong>Strictly necessary</strong>: Required for core site
                            functionality and security (e.g., page navigation, forms).
                        </li>
                        <li>
                            <strong>Performance & analytics</strong>: Help us understand how
                            visitors use the site so we can improve UX (e.g., Google
                            Analytics).
                        </li>
                        <li>
                            <strong>Functional</strong>: Remember choices such as language or
                            region to provide a more personalized experience.
                        </li>
                        <li>
                            <strong>Advertising & remarketing</strong>: Used by us and our
                            partners (e.g., Google, Meta) to deliver relevant ads and measure
                            campaign performance.
                        </li>
                    </ul>
                </section>

                {/* How we use cookies */}
                <section className="mt-10 max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">How we use cookies</h2>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                        <li>To keep the site secure and operating as expected.</li>
                        <li>To analyze usage and improve performance and content.</li>
                        <li>To remember user preferences where applicable.</li>
                        <li>To create audiences/segments for advertising and measure results.</li>
                    </ul>
                </section>

                {/* Third-party cookies */}
                <section className="mt-10 max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">Third-party cookies</h2>
                    <p className="mt-3 text-slate-700">
                        We may use third-party services that set cookies when you visit our
                        site (for example: Google Analytics, Google Ads, Meta, and our
                        form/communication providers). These providers have their own privacy
                        and cookie policies that we encourage you to review.
                    </p>
                </section>

                {/* Managing cookies */}
                <section className="mt-10 max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">Managing cookies</h2>
                    <p className="mt-3 text-slate-700">
                        You can control cookies through your browser settings and, where
                        available, our on-site cookie banner/preferences. Most browsers let
                        you:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                        <li>See what cookies are set and delete them.</li>
                        <li>Block third-party cookies.</li>
                        <li>Block all cookies from specific sites.</li>
                        <li>Block all cookies or clear all cookies when you close the browser.</li>
                    </ul>
                    <p className="mt-3 text-slate-700">
                        Note: Blocking some cookies may impact site functionality. For
                        granular control, use the cookie banner (where available) or visit
                        the Network Advertising Initiative’s opt-out pages.
                    </p>
                    <p className="mt-3 text-slate-700">
                        You can change your choices at any time: <ManagePreferencesButton />
                    </p>
                </section>

                {/* Consent */}
                <section className="mt-10 max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                        Consent and changes to this policy
                    </h2>
                    <p className="mt-3 text-slate-700">
                        Where required by law, we ask for your consent to use non-essential
                        cookies. We may update this Cookie Policy from time to time to
                        reflect changes in technology or regulations. Updates will be posted
                        on this page.
                    </p>
                </section>

                {/* Contact */}
                <section className="mt-10 max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">Contact</h2>
                    <p className="mt-3 text-slate-700">
                        If you have questions about our use of cookies, please{" "}
                        <Link href="/contact" className="text-sky-700 underline">
                            contact us
                        </Link>
                        . For information on how we process personal data, see our{" "}
                        <Link href="/privacy" className="text-sky-700 underline">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </section>

                {/* Optional last-updated note */}
                <p className="mt-12 text-xs text-slate-500">
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </section>
        </article>
    );
}
