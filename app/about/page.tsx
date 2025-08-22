import type { Metadata } from "next";
import LogoCloud from "@/components/sections/LogoCloud";
import Testimonials from "@/components/sections/Testimonials";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "About — Your Agency",
    description:
        "We’re a Shopify-focused team building fast, accessible storefronts and scaling brands on Shopify Plus.",
};



const VALUES = [
    {
        title: "Outcomes over output",
        desc: "We measure success by customer impact and revenue, not lines of code.",
    },
    {
        title: "Speed with quality",
        desc: "Tight feedback loops, performance budgets, and a11y baked in.",
    },
    {
        title: "Clear communication",
        desc: "No black boxes—roadmaps, demos, and async updates you can trust.",
    },
    {
        title: "Build for the team",
        desc: "Section-first content model so marketers can ship without dev time.",
    },
];

const TEAM = [
    {
        name: "Avery Kim",
        role: "Founder / Tech Lead",
        avatar: "/images/team/avery.jpg",
    },
    {
        name: "Jordan Lee",
        role: "Design Lead",
        avatar: "/images/team/jordan.jpg",
    },
    {
        name: "Sam Patel",
        role: "Solutions Architect",
        avatar: "/images/team/sam.jpg",
    },
    {
        name: "Mia Torres",
        role: "Project Manager",
        avatar: "/images/team/mia.jpg",
    },
];

const TIMELINE = [
    { year: "2017", title: "Started as a theme studio" },
    { year: "2019", title: "First Shopify Plus implementation" },
    { year: "2021", title: "Apps & API integrations practice" },
    { year: "2023", title: "CRO & performance programs" },
    { year: "2025", title: "Global multi-store rollouts" },
];

export default function Page() {
    return (
        <>
            {/* Hero / intro */}
            <section className="bg-gradient-to-b from-sky-50/60 to-white">
                <div className="container mx-auto px-4 py-16">
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                        About us
                    </p>
                    <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        We build Shopify stores that look great and convert better
                    </h1>
                    <p className="mt-3 max-w-2xl text-slate-600">
                        We’re a tight, senior team of designers and engineers focused on Shopify.
                        Our playbook blends brand craft with conversion science so your storefront
                        is fast, accessible, and easy to evolve.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button asChild href="/contact">
                            Get in touch
                        </Button>
                        <Button asChild href="/portfolio" variant="secondary">
                            See our work
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why work with us */}
            <section className="bg-white">
                <div className="container mx-auto px-4 py-16">
                    <header className="text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Why should you work with us?
                        </h2>
                        <div className="mx-auto mt-3 h-1 w-16 rounded bg-sky-500" aria-hidden />
                    </header>

                    <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* 1 */}
                        <li className="flex gap-4">
                            <div className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-sky-500">
                                {/* Data icon */}
                                <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-900" fill="currentColor" aria-hidden>
                                    <path d="M4 6c0-1.657 3.582-3 8-3s8 1.343 8 3-3.582 3-8 3-8-1.343-8-3Z" />
                                    <path d="M4 10c0 1.657 3.582 3 8 3s8-1.343 8-3v4c0 1.657-3.582 3-8 3s-8-1.343-8-3v-4Z" />
                                    <path d="M4 16c0 1.657 3.582 3 8 3s8-1.343 8-3v2c0 1.657-3.582 3-8 3s-8-1.343-8-3v-2Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-slate-900">We work on hard data</h3>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                    We analyze your site and customers first. Decisions are driven by analytics,
                                    research, and testing—not guesses.
                                </p>
                            </div>
                        </li>

                        {/* 2 */}
                        <li className="flex gap-4">
                            <div className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-sky-500">
                                {/* Info/updates icon */}
                                <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-900" fill="currentColor" aria-hidden>
                                    <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-slate-900">We keep you informed</h3>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                    Clear comms, short feedback loops, and weekly demos so you always know
                                    where things stand.
                                </p>
                            </div>
                        </li>

                        {/* 3 */}
                        <li className="flex gap-4">
                            <div className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-sky-500">
                                {/* Quality/diamond icon */}
                                <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-900" fill="currentColor" aria-hidden>
                                    <path d="M12 2 8 8l4 12 4-12-4-6Zm8 6-4-6H8L4 8l8 12 8-12Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-slate-900">We hate half measures</h3>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                    We obsess over quality, performance, and accessibility to make real impact.
                                </p>
                            </div>
                        </li>

                        {/* 4 */}
                        <li className="flex gap-4">
                            <div className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-sky-500">
                                {/* Feedback/star icon */}
                                <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-900" fill="currentColor" aria-hidden>
                                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-slate-900">We seek your feedback</h3>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                    You’re the expert on your brand. We co-create with you and incorporate
                                    feedback every sprint.
                                </p>
                            </div>
                        </li>

                        {/* 5 */}
                        <li className="flex gap-4">
                            <div className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-sky-500">
                                {/* Fit/gear icon */}
                                <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-900" fill="currentColor" aria-hidden>
                                    <path d="M19.14 12.94a7.49 7.49 0 0 0 0-1.88l2.03-1.58-2-3.46-2.39.96a7.51 7.51 0 0 0-1.63-.95l-.36-2.54h-4l-.36 2.54c-.57.23-1.12.54-1.63.95l-2.39-.96-2 3.46 2.03 1.58a7.49 7.49 0 0 0 0 1.88L2.41 14.5l2 3.46 2.39-.96c.51.41 1.06.72 1.63.95l.36 2.55h4l.36-2.55c.57-.23 1.12-.54 1.63-.95l2.39.96 2-3.46-2.03-1.56ZM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-slate-900">We tailor the service</h3>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                    Solutions fit your needs: from bespoke themes to integrations and workflows.
                                </p>
                            </div>
                        </li>

                        {/* 6 */}
                        <li className="flex gap-4">
                            <div className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-sky-500">
                                {/* Strategy icon */}
                                <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-900" fill="currentColor" aria-hidden>
                                    <path d="M3 3h18v2H3zM3 19h18v2H3zM7 7h2v10H7zM15 7h2v10h-2zM11 9h2v6h-2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-slate-900">Strategic ecommerce advice</h3>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                    We help you prioritize roadmaps and make trade-offs that grow revenue across DTC and B2B.
                                </p>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-12 text-center">
                        <Button asChild href="/services" className="rounded-full px-6 py-3">
                            See our services
                        </Button>
                    </div>
                </div>
            </section>

            {/* Mission & values */}
            <section className="bg-white">
                <div className="container mx-auto grid items-start gap-10 px-4 py-16 md:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Our mission
                        </h2>
                        <p className="mt-3 max-w-prose text-slate-600">
                            At [Your Agency Name], our mission is simple: empower brands to thrive online. We believe every business deserves a beautiful, high-performing Shopify store that not only looks amazing but also drives real results.

                            We’re here to bridge the gap between design, technology, and business goals — crafting online experiences that inspire trust, delight customers, and convert visitors into loyal buyers.

                            From your first sale to your next big milestone, we’re committed to building solutions that grow with you, adapt to your vision, and stand out in a competitive market.

                            Because your success isn’t just our work — it’s our purpose.
                        </p>
                        <div className="mt-6">
                            <Button asChild href="/services" variant="secondary">
                                Explore services
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">Our values</h3>
                        <ul className="mt-3 grid gap-4">
                            {VALUES.map((v) => (
                                <li
                                    key={v.title}
                                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                                >
                                    <div className="text-sm font-semibold text-slate-900">{v.title}</div>
                                    <p className="mt-1 text-sm text-slate-600">{v.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="bg-white">
                <div className="container mx-auto px-4 py-16">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Team
                        </p>
                        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            The people behind the work
                        </h2>
                        <p className="mt-2 text-slate-600">
                            Senior talent across design, engineering, and delivery—small on purpose.
                        </p>
                    </div>

                    <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                        {TEAM.map((m) => (
                            <li
                                key={m.name}
                                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                            >
                                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-slate-100">
                                    {/* swap to <Image> if you have real images */}
                                    <img
                                        src={m.avatar}
                                        alt={m.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="mt-3 text-sm font-semibold text-slate-900">
                                    {m.name}
                                </div>
                                <div className="text-xs text-slate-500">{m.role}</div>
                            </li>
                        ))}
                    </ul>

                    
                </div>
            </section>

            {/* Timeline */}
            <section className="bg-white">
                <div className="container mx-auto px-4 py-16">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Timeline
                        </p>
                        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Our journey
                        </h2>
                    </div>

                    <ol className="mx-auto mt-8 max-w-3xl">
                        {TIMELINE.map((t, i) => (
                            <li key={t.year} className="relative border-l border-slate-200 pl-6 py-4">
                                <span className="absolute -left-2 top-5 h-4 w-4 rounded-full border border-slate-300 bg-white" />
                                <div className="text-sm font-semibold text-slate-900">{t.year}</div>
                                <div className="text-sm text-slate-600">{t.title}</div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Logo cloud (partners/certifications) */}
            <LogoCloud
                eyebrow="Partners & platforms"
                subheading="We collaborate with leading ecommerce tools."
                logos={[
                    { src: "/badges/shopify-partner.svg", alt: "Shopify Partner" },
                    { src: "/badges/plus.svg", alt: "Shopify Plus" },
                    { src: "/badges/klaviyo.svg", alt: "Klaviyo" },
                    { src: "/badges/meta.svg", alt: "Meta" },
                    { src: "/badges/google.svg", alt: "Google" },
                    { src: "/badges/algolia.svg", alt: "Algolia" },
                ]}
                compact
                grayscale
            />

            {/* Social proof */}
            <Testimonials
                eyebrow="What clients say"
                heading="A trusted Shopify partner"
                subheading="Direct feedback from ecommerce teams we work with."
                columns={3}
            />

            {/* CTA */}
            <section className="bg-white">
                <div className="container mx-auto px-4 py-16">
                    <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-8 text-center shadow-sm sm:p-12">
                        <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Have a project in mind?
                        </h3>
                        <p className="mt-2 text-slate-600">
                            Tell us your goals and we’ll propose a practical path on Shopify.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <Button asChild href="/contact">
                                Start a project
                            </Button>
                            <Button asChild href="/services" variant="secondary">
                                Explore services
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
