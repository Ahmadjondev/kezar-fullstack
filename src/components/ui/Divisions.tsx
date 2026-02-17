"use client";

import { useEffect, useRef, useState } from "react";

const DIVISIONS = [
    {
        number: "01",
        title: "Spinning",
        icon: (
            <svg className="w-12 h-12 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.3}>
                <circle cx="24" cy="24" r="16" />
                <ellipse cx="24" cy="24" rx="8" ry="16" />
                <ellipse cx="24" cy="24" rx="16" ry="8" />
                <circle cx="24" cy="24" r="3" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Knitting",
        icon: (
            <svg className="w-12 h-12 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.3}>
                <rect x="10" y="10" width="28" height="28" rx="3" />
                <path d="M10 18h28M10 26h28M10 34h28" />
                <path d="M18 10v28M26 10v28M34 10v28" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Processing",
        icon: (
            <svg className="w-12 h-12 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.3}>
                <circle cx="24" cy="24" r="10" />
                <circle cx="24" cy="24" r="4" />
                <path d="M24 4v6M24 38v6M4 24h6M38 24h6M9.86 9.86l4.24 4.24M33.9 33.9l4.24 4.24M9.86 38.14l4.24-4.24M33.9 14.1l4.24-4.24" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Apparel",
        icon: (
            <svg className="w-12 h-12 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.3}>
                <path d="M18 8l-10 8 4 4 4-3v23h16V17l4 3 4-4-10-8" strokeLinejoin="round" />
                <path d="M18 8a6 6 0 0012 0" />
            </svg>
        ),
    },
] as const;

export default function Divisions() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 },
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="factories"
            ref={sectionRef}
            className="relative w-full py-28 md:py-36 overflow-hidden"
            style={{
                background:
                    "linear-gradient(135deg, #3a7032 0%, #4a8c3f 30%, #55a044 55%, #3a7032 100%)",
            }}
        >
            {/* Subtle wave pattern overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative max-w-6xl mx-auto px-8 md:px-12">
                {/* Header */}
                <div
                    className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <h2 className="text-5xl md:text-7xl font-extralight text-white/30 uppercase tracking-widest mb-8">
                        Divisions
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div>
                            <h3 className="text-white text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide">
                                Manufacturing Process
                            </h3>
                            <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                                Kezar is a vertically integrated textile unit. It has in-house
                                yarn, knitting, fabric dyeing, processing, apparel
                                manufacturing and laundry facilities. Every unit operates in
                                the most efficient manner to achieve competitive prices, timely
                                delivery and quality products.
                            </p>
                        </div>

                        {/* Division icons */}
                        <div className="flex items-center justify-center lg:justify-end gap-6 md:gap-10 flex-wrap">
                            {DIVISIONS.map((div, i) => (
                                <div
                                    key={div.title}
                                    className={`flex flex-col items-center gap-3 transition-all duration-600 ${visible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8"
                                        }`}
                                    style={{
                                        transitionDelay: visible ? `${300 + i * 120}ms` : "0ms",
                                    }}
                                >
                                    <span className="text-sm font-semibold text-white/40 tabular-nums">
                                        {div.number}
                                    </span>
                                    <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center transition-all duration-300 hover:border-white/60 hover:scale-110">
                                        {div.icon}
                                    </div>
                                    <span className="text-white text-sm font-medium tracking-wide">
                                        {div.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
