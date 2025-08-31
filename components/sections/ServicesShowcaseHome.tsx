"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

type Service = {
    title: string;
    href: string;
    image: string;
    tags?: string[];
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    tall?: boolean;
};

const SERVICES: Service[] = [
    { title: "Custom Development", href: "/services#custom-dev", image: "/images/services/custom-dev_home.jpg", icon: Code, tags: ["#APPS", "#CUSTOM"], tall: true },
    { title: "Theme Design", href: "/services#themes", image: "/images/services/themes_home.jpg", icon: MonitorSmartphone, tags: ["#UI", "#UX"] },
    { title: "Shopify Plus", href: "/services#shopify-plus", image: "/images/services/plus_home.jpg", icon: ShoppingCart, tags: ["#PLUS", "#B2B"], tall: true },
    { title: "Migrations", href: "/services#migrations", image: "/images/services/migrations_home.jpg", icon: Rocket, tags: ["#REPLATFORM"] },
    { title: "Apps & Integrations", href: "/services#apps", image: "/images/services/apps_home.jpg", icon: Plug, tags: ["#API"], tall: true },
    { title: "CRO & Optimization", href: "/services#cro", image: "/images/services/cro_home.jpg", icon: BarChart3, tags: ["#A/B", "#SPEED"] },
    { title: "Support & Maintenance", href: "/services#support", image: "/images/services/support_home.jpg", icon: Wrench, tags: ["#RETENTION"], tall: true },
    { title: "Headless / Hydrogen", href: "/services#custom-dev", image: "/images/services/headless_home.jpg", icon: Layers, tags: ["#HEADLESS"] },
];

export default function ServicesShowcaseHome() {
    const copies = 3; // middle + guards for seamless loop
    const items = useMemo(() => Array.from({ length: copies }, () => SERVICES).flat(), []);
    const trackRef = useRef<HTMLDivElement>(null);
    const [paused, setPaused] = useState(false);

    // translateX state (in px, negative moves left)
    const x = useRef(0);
    const seqWidth = useRef(0);
    const oneSeqWidth = useRef(0);

    // pointer drag state
    const drag = useRef({
        down: false,
        startX: 0,
        startXVal: 0,
        moved: 0,
        downTarget: null as null | HTMLElement,
    });

    // measure one sequence width once images/layout are ready
    useEffect(() => {
        const measure = () => {
            const track = trackRef.current;
            if (!track) return;
            // width of ONE sequence = total / copies
            const total = track.scrollWidth;
            if (!total) return;
            oneSeqWidth.current = total / copies;
            seqWidth.current = total;
            // start from the middle copy
            x.current = -oneSeqWidth.current;
            track.style.transform = `translate3d(${x.current}px,0,0)`;
        };
        measure();
        const ro = new ResizeObserver(measure);
        if (trackRef.current) ro.observe(trackRef.current);
        return () => ro.disconnect();
    }, []);

    // infinite loop using translateX
    useEffect(() => {
        let raf = 0;
        const speed = 0.25; // very slow

        const tick = () => {
            const track = trackRef.current;
            if (!track || !oneSeqWidth.current) {
                raf = requestAnimationFrame(tick);
                return;
            }

            if (!paused && !drag.current.down) {
                x.current -= speed; // right -> left
            }

            // wrap into middle band for endlessness
            const min = -oneSeqWidth.current * 2;
            const max = 0;
            if (x.current <= min) x.current += oneSeqWidth.current;
            else if (x.current >= max) x.current -= oneSeqWidth.current;

            track.style.transform = `translate3d(${x.current}px,0,0)`;
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [paused]);

    // pointer drag handlers
    const TAP_SLOP = 12; // px

    const onPointerDown = (e: React.PointerEvent) => {
        const track = trackRef.current!;
        track.setPointerCapture(e.pointerId);
        drag.current = {
            down: true,
            startX: e.clientX,
            startXVal: x.current,
            moved: 0,
            downTarget: e.target as HTMLElement,
        };
        setPaused(true);
        track.classList.add("cursor-grabbing");
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!drag.current.down || !oneSeqWidth.current || !trackRef.current) return;
        const dx = e.clientX - drag.current.startX;
        drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
        x.current = drag.current.startXVal + dx;
        trackRef.current.style.transform = `translate3d(${x.current}px,0,0)`;
        // prevent text/image drag selection on desktop while moving
        e.preventDefault();
    };

    const onPointerEnd = (e?: React.PointerEvent) => {
        if (!drag.current.down) return;
        const wasTap = drag.current.moved < TAP_SLOP;
        const targetAtDown = drag.current.downTarget;
        drag.current.down = false;
        trackRef.current?.classList.remove("cursor-grabbing");

        // If it was a tap (not a drag), follow the link that was tapped.
        if (wasTap && targetAtDown) {
            const link = targetAtDown.closest("a[href]") as HTMLAnchorElement | null;
            if (link) {
                // Let Next.js handle it if it's an internal link; otherwise native click
                link.click();
            }
        }

        // resume auto-scroll after a short idle
        window.setTimeout(() => setPaused(false), 600);
    };

    return (
        <section className="relative border-t border-slate-200 bg-white">
            <div className="container mx-auto px-4 py-14">
                {/* Centered header */}
                <div className="mb-8 flex flex-col items-center text-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">Services</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Everything you need, in one creative stack
                    </h2>
                    <p className="mt-2 max-w-[56ch] text-sm text-slate-600">
                        Slow auto-scroll, drag or swipe to explore. It’s endless.
                    </p>
                </div>

                <div className="relative">
                    {/* edge fades */}
                    <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
                    <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

                    {/* viewport */}
                    <div
                        className="select-none overflow-hidden pb-2"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        {/* track */}
                        <div
                            ref={trackRef}
                            className="flex gap-3 will-change-transform cursor-grab"
                            onPointerDown={onPointerDown}
                            onPointerMove={onPointerMove}
                            onPointerUp={onPointerEnd}
                            onPointerCancel={onPointerEnd}
                            style={{ touchAction: "pan-y" }}
                        >
                            {Array.from({ length: copies }).map((_, copyIdx) => (
                                <Sequence key={copyIdx} items={SERVICES} eager={copyIdx === 1 /* middle copy */} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Sequence({ items, eager }: { items: Service[]; eager?: boolean }) {
    return (
        <>
            {items.map((s, i) => (
                <Card key={s.title + i + (eager ? "-e" : "-l")} s={s} eager={eager && i < 12} />
            ))}
        </>
    );
}

function Card({ s, eager }: { s: Service; eager?: boolean }) {
    const Icon = s.icon;
    const baseHeight = s.tall ? "h-[280px]" : "h-[220px]"; // smaller images

    return (
        <Link href={s.href} className="pr-1" aria-label={s.title} draggable={false}>
            <div className="flex w-[240px] sm:w-[280px] lg:w-[300px] flex-col gap-3">
                <div className={`overflow-hidden rounded-[16px] ${baseHeight} [contain:paint]`}>
                    <img
                        src={s.image}
                        alt={s.title}
                        draggable={false}
                        // Preload the middle copy to avoid “loading in while dragging”
                        loading={eager ? "eager" : "lazy"}
                        decoding="async"
                        {...(eager ? { fetchPriority: "high" as any } : {})}
                        className="h-full w-full rounded-[16px] object-cover transition-transform duration-500 ease-in-out will-change-transform hover:scale-105"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <h6 className="text-[15px] font-semibold leading-relaxed text-slate-900">
                        <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 ring-1 ring-sky-100 align-[-2px]">
                            <Icon className="h-3.5 w-3.5 text-sky-600" />
                        </span>
                        {s.title}
                    </h6>
                    {!!s.tags?.length && (
                        <div className="flex flex-wrap gap-1.5">
                            {s.tags.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-[40px] bg-slate-900/[0.03] px-2.5 py-[2px] text-[11px] text-slate-700 ring-1 ring-slate-200"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
