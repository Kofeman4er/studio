"use client";

import Link from "next/link";
import {
    Code,
    MonitorSmartphone,
    ShoppingCart,
    Rocket,
    Wrench,
    Layers,
    BarChart3,
    Plug,
} from "lucide-react";
import { useEffect, useRef } from "react";

type Service = {
    title: string;
    href: string;
    image: string; // path from /public
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    blurb?: string; // shown on hover
};

const SERVICES: Service[] = [
    { title: "Custom Development", href: "/services#custom-dev", image: "/images/services/custom-dev_home.png", icon: Code, blurb: "Tailored Shopify features, sections and workflows that fit your brand." },
    { title: "Theme Design", href: "/services#themes", image: "/images/services/themes_home.png", icon: MonitorSmartphone, blurb: "Modern, fast themes crafted for conversion and maintainability." },
    { title: "Shopify Plus", href: "/services#shopify-plus", image: "/images/services/plus_home.png", icon: ShoppingCart, blurb: "Advanced capabilities, checkout customizations, and scale-ready setups." },
    { title: "Migrations", href: "/services#migrations", image: "/images/services/migrations_home.png", icon: Rocket, blurb: "Seamless moves to Shopify with data integrity and zero lost SEO." },
    { title: "Apps & Integrations", href: "/services#apps", image: "/images/services/apps_home.png", icon: Plug, blurb: "Connect your stack - Klaviyo, Algolia, ERPs, 3PLs, and more." },
    { title: "CRO & Optimization", href: "/services#cro", image: "/images/services/cro_home.png", icon: BarChart3, blurb: "Test, measure, and iterate to lift revenue and AOV." },
    { title: "Support & Maintenance", href: "/services#support", image: "/images/services/support_home.png", icon: Wrench, blurb: "Reliable monthly support for fixes, tweaks, and small wins." },
];

// Animation tuning
const PX_PER_SEC = 14; // slow, gentle auto-scroll
const RESUME_IDLE_MS = 1200;

export default function ServicesShowcaseHome() {
    return (
        <section className="relative border-t border-slate-200 bg-white">
            <div className="container mx-auto px-4 py-14">
                {/* Centered header */}
                <div className="mb-8 text-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">Services</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Everything you need, in one creative stack
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Slow auto-scroll, drag or swipe to explore. It’s endless.
                    </p>
                </div>

                {/* Carousel */}
                <EndlessCarousel items={SERVICES} />

                {/* CTA */}
                <div className="mt-8 flex justify-center">
                    <Link
                        href="/services"
                        className="cursor-pointer rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                    >
                        Explore all services
                    </Link>
                </div>
            </div>
        </section>
    );
}

function EndlessCarousel({ items }: { items: Service[] }) {
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const seqRef = useRef<HTMLDivElement | null>(null);

    // animation refs
    const offsetRef = useRef<number>(0);
    const speedRef = useRef<number>(-PX_PER_SEC);
    const lastTsRef = useRef<number>(0);
    const draggingRef = useRef<boolean>(false);
    const dragStartXRef = useRef<number>(0);
    const dragStartOffsetRef = useRef<number>(0);
    const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const rafRef = useRef<number | null>(null);
    const sequenceWidthRef = useRef<number>(0);
    const hoveringRef = useRef<boolean>(false); // <- track hover state

    // Measure sequence width
    useEffect(() => {
        const measure = () => {
            if (seqRef.current) {
                sequenceWidthRef.current = seqRef.current.getBoundingClientRect().width;
            }
        };
        measure();
        const onResize = () => measure();
        window.addEventListener("resize", onResize, { passive: true });
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // rAF loop
    useEffect(() => {
        const tick = (ts: number) => {
            const last = lastTsRef.current || ts;
            const dt = (ts - last) / 1000;
            lastTsRef.current = ts;

            if (!draggingRef.current) {
                offsetRef.current += speedRef.current * dt;

                const seqW = sequenceWidthRef.current;
                if (seqW > 0) {
                    if (offsetRef.current <= -seqW) offsetRef.current += seqW;
                    if (offsetRef.current > 0) offsetRef.current -= seqW;
                }
                applyTransform();
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const applyTransform = () => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
        }
    };

    // Pointer drag handlers
    useEffect(() => {
        const viewport = viewportRef.current;
        if (!viewport) return;

        const clearResumeTimer = () => {
            if (resumeTimerRef.current) {
                clearTimeout(resumeTimerRef.current);
                resumeTimerRef.current = null;
            }
        };

        const onPointerDown = (e: PointerEvent) => {
            if (e.button !== 0 && e.pointerType === "mouse") return;
            draggingRef.current = true;
            viewport.setPointerCapture(e.pointerId);
            dragStartXRef.current = e.clientX;
            dragStartOffsetRef.current = offsetRef.current;

            // pause auto
            speedRef.current = 0;
            clearResumeTimer();

            viewport.classList.add("is-dragging");
        };

        const onPointerMove = (e: PointerEvent) => {
            if (!draggingRef.current) return;
            const dx = e.clientX - dragStartXRef.current;
            offsetRef.current = dragStartOffsetRef.current + dx;

            const seqW = sequenceWidthRef.current;
            if (seqW > 0) {
                while (offsetRef.current <= -seqW) offsetRef.current += seqW;
                while (offsetRef.current > 0) offsetRef.current -= seqW;
            }
            applyTransform();
        };

        const onPointerUp = (e: PointerEvent) => {
            if (!draggingRef.current) return;
            draggingRef.current = false;
            viewport.releasePointerCapture(e.pointerId);

            clearResumeTimer();
            // Only resume if NOT hovered
            if (!hoveringRef.current) {
                resumeTimerRef.current = setTimeout(() => {
                    if (!hoveringRef.current) {
                        speedRef.current = -PX_PER_SEC;
                    }
                    resumeTimerRef.current = null;
                }, RESUME_IDLE_MS);
            }

            // avoid accidental click post-drag
            setTimeout(() => viewport.classList.remove("is-dragging"), 0);
        };

        viewport.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("pointerup", onPointerUp, { passive: true });

        return () => {
            viewport.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
        };
    }, []);

    // HOVER PAUSE: stop moving on hover over the whole carousel viewport
    const handleMouseEnter = () => {
        hoveringRef.current = true;
        if (resumeTimerRef.current) {
            clearTimeout(resumeTimerRef.current);
            resumeTimerRef.current = null;
        }
        speedRef.current = 0;
    };

    const handleMouseLeave = () => {
        hoveringRef.current = false;
        if (!draggingRef.current) {
            speedRef.current = -PX_PER_SEC;
        }
    };

    return (
        <div className="relative">
            {/* Edge fades */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent"
            />

            {/* Viewport */}
            <div
                ref={viewportRef}
                className="overflow-hidden touch-pan-y select-none cursor-default"
                style={{ WebkitOverflowScrolling: "auto" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Track: two sequences side-by-side */}
                <div
                    ref={trackRef}
                    className="flex will-change-transform"
                    style={{ transform: "translateX(0px)" }}
                >
                    <Sequence refEl={seqRef} items={items} />
                    <Sequence items={items} ariaHidden />
                </div>
            </div>

            <style jsx>{`
        .is-dragging a {
          pointer-events: none;
        }
      `}</style>
        </div>
    );
}

function Sequence({
    items,
    ariaHidden = false,
    refEl,
}: {
    items: Service[];
    ariaHidden?: boolean;
    refEl?: React.MutableRefObject<HTMLDivElement | null>;
}) {
    return (
        <div
            ref={refEl ?? null}
            className="flex items-stretch gap-4 pr-4"
            aria-hidden={ariaHidden || undefined}
        >
            {items.map((s) => (
                <ServiceCard key={`${s.title}-${s.href}-${ariaHidden ? "dup" : "orig"}`} service={s} />
            ))}
        </div>
    );
}

function ServiceCard({ service }: { service: Service }) {
    const Icon = service.icon;
    return (
        <Link
            href={service.href}
            className="group block w-[240px] sm:w-[280px] md:w-[300px] flex-none cursor-default"
            aria-label={service.title}
            draggable={false}
        >
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                {/* Image area with stylish blurb overlay */}
                <div className="relative h-[160px] sm:h-[180px] md:h-[190px] overflow-hidden">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        draggable={false}
                        loading="lazy"
                    />

                    {/* bottom fade */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/20 to-transparent" />

                    {/* BLURB: glass card with ring + shadow, fades & slides up on hover */}
                    {service.blurb && (
                        <div className="absolute inset-0 flex items-end p-3">
                            <div className="pointer-events-none translate-y-2 opacity-0 transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                                <div className="rounded-lg bg-white/80 backdrop-blur-md ring-1 ring-slate-200 shadow-lg px-3 py-2">
                                    <p className="text-[13px] leading-snug text-slate-900">
                                        {service.blurb}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Caption */}
                <div className="flex items-center gap-3 rounded-b-xl bg-white/90 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 ring-1 ring-sky-100">
                        <Icon className="h-4 w-4 text-sky-600" aria-hidden="true" />
                    </span>
                    <p className="flex-1 truncate text-sm font-semibold text-slate-900">
                        {service.title}
                    </p>
                </div>
            </div>
        </Link>
    );
}
