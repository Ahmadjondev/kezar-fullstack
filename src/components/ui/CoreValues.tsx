"use client";

import { useEffect, useRef, useState } from "react";

const VALUES = [
    {
        title: "Leadership",
        description: "To provide market leadership and brand coverage",
        color: "text-primary",
        borderColor: "group-hover:border-primary/40",
        icon: (
            <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.4}>
                <path d="M32 8l6 12h-12l6-12z" className="text-primary" stroke="currentColor" />
                <rect x="28" y="20" width="8" height="16" rx="1" className="text-primary" stroke="currentColor" />
                <path d="M22 36h20v4H22z" className="text-primary" stroke="currentColor" />
                <path d="M20 40h24v3H20z" className="text-primary" stroke="currentColor" />
                <path d="M24 24l-6 4m16-4l6 4" className="text-primary" stroke="currentColor" strokeLinecap="round" />
                <circle cx="17" cy="29" r="1.5" className="text-primary" stroke="currentColor" />
                <circle cx="47" cy="29" r="1.5" className="text-primary" stroke="currentColor" />
                <path d="M18 31v3m28-3v3" className="text-primary" stroke="currentColor" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Innovation",
        description: "To pursue technological innovation",
        color: "text-indigo-500",
        borderColor: "group-hover:border-indigo-400/40",
        icon: (
            <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.4}>
                <circle cx="32" cy="26" r="12" className="text-indigo-500" stroke="currentColor" />
                <path d="M26 38v6a6 6 0 0012 0v-6" className="text-indigo-500" stroke="currentColor" />
                <circle cx="32" cy="26" r="5" className="text-indigo-500" stroke="currentColor" />
                <path d="M32 14v-4m12.5 6.5l2.8-2.8M44 26h4m-2.5 9.5l2.8 2.8M20 26h-4m2.5-9.5l-2.8-2.8m2.8 22.3l-2.8 2.8" className="text-indigo-500" stroke="currentColor" strokeLinecap="round" />
                <path d="M29 42h6" className="text-indigo-500" stroke="currentColor" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Productivity",
        description: "To partner with operators for their maximum productivity",
        color: "text-orange-500",
        borderColor: "group-hover:border-orange-400/40",
        icon: (
            <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.4}>
                <circle cx="32" cy="28" r="14" className="text-orange-500" stroke="currentColor" />
                <path d="M32 28l-7 7M32 28V16" className="text-orange-500" stroke="currentColor" strokeLinecap="round" />
                <circle cx="32" cy="28" r="2" className="text-orange-500" stroke="currentColor" />
                <rect x="20" y="46" width="5" height="8" rx="1" className="text-orange-500" stroke="currentColor" />
                <rect x="29.5" y="42" width="5" height="12" rx="1" className="text-orange-500" stroke="currentColor" />
                <rect x="39" y="44" width="5" height="10" rx="1" className="text-orange-500" stroke="currentColor" />
            </svg>
        ),
    },
    {
        title: "Integrity",
        description:
            "To provide virtuous to our customers, employees, communities, and the environment",
        color: "text-blue-500",
        borderColor: "group-hover:border-blue-400/40",
        icon: (
            <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.4}>
                <path d="M32 12l-16 8v4h32v-4l-16-8z" className="text-blue-500" stroke="currentColor" />
                <circle cx="32" cy="30" r="8" className="text-blue-500" stroke="currentColor" />
                <path d="M29 30l2 2 4-4" className="text-blue-500" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 42l-4 8h32l-4-8" className="text-blue-500" stroke="currentColor" strokeLinejoin="round" />
                <path d="M24 24v18m16-18v18" className="text-blue-500" stroke="currentColor" />
            </svg>
        ),
    },
] as const;

export default function CoreValues() {
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
            { threshold: 0.15 },
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-32 md:py-44 bg-[#fafafa] dark:bg-gray-900 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-8 md:px-12">
                {/* Heading */}
                <div
                    className={`text-center mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-800 dark:text-gray-100 uppercase">
                        Core <span className="text-primary font-normal italic">Values</span>
                    </h2>
                </div>

                <p
                    className={`text-center text-gray-500 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-16 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    Respect for the individual, integrity, speed, simplicity,
                    self-assuredness, and a 100% commitment. Our values are
                    non-negotiable, they are never to be jettisoned. For us, our values
                    are our well-spring.
                </p>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {VALUES.map((value, i) => (
                        <div
                            key={value.title}
                            className={`group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 ${value.borderColor} p-8  pt-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${visible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-12"
                                }`}
                            style={{ transitionDelay: visible ? `${150 + i * 100}ms` : "0ms" }}
                        >
                            <div className="">{value.icon}</div>

                            <h3 className={`text-xl md:text-2xl font-normal ${value.color}`}>
                                {value.title}
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                                {value.description}
                            </p>

                            <button
                                className={`w-10 h-10 rounded-full border border-gray-200 dark:border-gray-600 group-hover:border-current ${value.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                                aria-label={`Learn more about ${value.title}`}
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
