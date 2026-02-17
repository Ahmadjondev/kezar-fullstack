"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CLIENT_BRANDS = [
    { name: "JCPenney", style: "font-bold text-red-600 text-lg" },
    { name: "Tommy Hilfiger", style: "font-bold text-sm tracking-wide uppercase" },
    { name: "Walmart", style: "font-bold text-blue-600 text-lg" },
    { name: "amazon", style: "font-bold text-gray-800 dark:text-gray-200 text-xl lowercase italic" },
    { name: "Target", style: "font-bold text-red-500 text-base" },
    { name: "PVH", style: "font-black text-gray-700 dark:text-gray-300 text-xl tracking-widest" },
    { name: "BOARDRIDERS", style: "font-bold text-xs tracking-[0.2em] uppercase" },
    { name: "Michael's", style: "font-bold text-red-700 text-base italic" },
    { name: "adidas", style: "font-bold text-gray-800 dark:text-gray-200 text-lg lowercase" },
    { name: "IZOD", style: "font-black text-blue-800 dark:text-blue-400 text-lg tracking-wider" },
    { name: "Bass", style: "font-serif font-bold text-gray-700 dark:text-gray-300 text-lg italic" },
    { name: "VanHeusen", style: "font-light text-gray-600 dark:text-gray-400 text-base tracking-wide" },
    { name: "WOLVERINE", style: "font-black text-amber-700 text-xs tracking-[0.15em]" },
    { name: "THE STING", style: "font-bold text-sm border border-gray-400 dark:border-gray-600 px-2 py-0.5" },
    { name: "EXPRESS", style: "font-black text-gray-800 dark:text-gray-200 text-sm tracking-widest" },
    { name: "JACK & JONES", style: "font-black text-gray-900 dark:text-gray-100 text-sm tracking-wider" },
    { name: "ARROW", style: "font-bold text-gray-600 dark:text-gray-400 text-sm tracking-[0.2em]" },
    { name: "PULL&BEAR", style: "font-bold text-gray-800 dark:text-gray-200 text-sm" },
    { name: "s.Oliver", style: "font-bold text-orange-600 text-base" },
    { name: "macy's", style: "font-bold text-red-600 text-lg italic lowercase" },
    { name: "QUIKSILVER", style: "font-bold text-gray-800 dark:text-gray-200 text-xs tracking-[0.15em]" },
    { name: "DC", style: "font-black text-gray-900 dark:text-gray-100 text-2xl" },
    { name: "ROXY", style: "font-bold text-pink-600 text-lg tracking-wider" },
    { name: "Lee Cooper", style: "font-serif font-bold text-red-700 text-base italic" },
    { name: "Carrefour", style: "font-bold text-blue-700 text-base" },
    { name: "THE CHILDREN'S PLACE", style: "font-bold text-red-600 text-[10px] tracking-wide" },
    { name: "H&M", style: "font-bold text-red-600 text-2xl" },
    { name: "Kappa", style: "font-bold text-blue-900 dark:text-blue-400 text-base italic" },
    { name: "MANGO", style: "font-light text-gray-800 dark:text-gray-200 text-lg tracking-[0.3em]" },
    { name: "BILLABONG", style: "font-black text-gray-800 dark:text-gray-200 text-xs tracking-wider" },
    { name: "Pepe Jeans", style: "font-serif font-bold text-blue-800 dark:text-blue-400 text-base italic" },
    { name: "PME LEGEND", style: "font-black text-gray-700 dark:text-gray-300 text-xs tracking-wider" },
    { name: "hunkemöller", style: "font-light text-pink-700 text-sm lowercase tracking-wide" },
    { name: "TEDDY SMITH", style: "font-black text-blue-800 dark:text-blue-400 text-xs tracking-wider" },
    { name: "GYMSHARK", style: "font-black text-gray-800 dark:text-gray-200 text-sm tracking-wider" },
    { name: "CHAMPS SPORTS", style: "font-black text-green-700 text-xs tracking-wider" },
    { name: "Mercedes-Benz", style: "font-light text-gray-600 dark:text-gray-400 text-sm tracking-wide" },
] as const;

export default function Clients() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full py-24 md:py-36 bg-white dark:bg-gray-950 transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left — Text content */}
                    <div
                        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        {/* Decorative script title */}
                        <h2 className="text-6xl md:text-7xl font-light italic text-gray-200 dark:text-gray-800 leading-none mb-6 select-none transition-colors">
                            {t.clients.sectionTitle}
                        </h2>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 uppercase leading-snug mb-6 max-w-md transition-colors">
                            {t.clients.heading}
                        </h3>

                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-4 max-w-lg transition-colors">
                            {t.clients.desc1}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-lg transition-colors">
                            {t.clients.desc2}
                        </p>
                    </div>

                    {/* Right — Brand logos grid */}
                    <div
                        className={`bg-gray-50 dark:bg-gray-900 rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1">
                            {CLIENT_BRANDS.map((brand, i) => (
                                <div
                                    key={brand.name}
                                    className={`flex items-center justify-center h-16 md:h-18 px-2 rounded-xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm transition-all duration-300 cursor-default ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                                        }`}
                                    style={{
                                        transitionDelay: visible ? `${200 + i * 30}ms` : "0ms",
                                    }}
                                >
                                    <span
                                        className={`select-none text-center leading-tight whitespace-nowrap ${brand.style}`}
                                    >
                                        {brand.name}
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
