"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

/* ─── Mock news data ────────────────────────────────────────── */
interface NewsArticle {
    id: string;
    titleEn: string;
    titleRu: string;
    titleUz: string;
    excerptEn: string;
    excerptRu: string;
    excerptUz: string;
    image: string;
    category: "industry" | "company" | "export" | "sustainability";
    date: string; // ISO
}

const NEWS_ARTICLES: NewsArticle[] = [
    {
        id: "n1",
        titleEn: "Kezar Teks Expands Production Capacity by 40%",
        titleRu: "Kezar Teks увеличивает производственные мощности на 40%",
        titleUz: "Kezar Teks ishlab chiqarish quvvatini 40% ga oshirdi",
        excerptEn:
            "With the installation of new knitting and dyeing machinery, our factory now processes over 500 tons of fabric per month, meeting growing demand from European markets.",
        excerptRu:
            "С установкой нового вязального и красильного оборудования наша фабрика теперь перерабатывает более 500 тонн ткани в месяц, удовлетворяя растущий спрос европейских рынков.",
        excerptUz:
            "Yangi to'qish va bo'yash mashinalarining o'rnatilishi bilan fabrikamiz oyiga 500 tonnadan ortiq matoni qayta ishlaydi va Yevropa bozorlarining o'sib borayotgan talabini qondiradi.",
        image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        category: "company",
        date: "2025-01-15",
    },
    {
        id: "n2",
        titleEn: "Global Textile Forum 2025: Sustainability Takes Center Stage",
        titleRu: "Глобальный текстильный форум 2025: устойчивое развитие в центре внимания",
        titleUz: "Global Textile Forum 2025: Barqaror rivojlanish diqqat markazida",
        excerptEn:
            "Industry leaders gathered in Istanbul to discuss the future of sustainable textile manufacturing. Kezar Teks presented our water recycling initiative that reduces consumption by 35%.",
        excerptRu:
            "Лидеры отрасли собрались в Стамбуле для обсуждения будущего устойчивого текстильного производства. Kezar Teks представил нашу инициативу по рециркуляции воды.",
        excerptUz:
            "Sanoat yetakchilari Istanbulda barqaror to'qimachilik ishlab chiqarishning kelajagini muhokama qilish uchun yig'ildi. Kezar Teks suv qayta ishlash tashabbusimizni taqdim etdi.",
        image:
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
        category: "sustainability",
        date: "2025-01-08",
    },
    {
        id: "n3",
        titleEn: "New Partnership with European Fashion Brands",
        titleRu: "Новое партнёрство с европейскими модными брендами",
        titleUz: "Yevropa moda brendlari bilan yangi hamkorlik",
        excerptEn:
            "Kezar Teks has secured long-term supply agreements with three major European fashion houses, expanding our export footprint across the EU market.",
        excerptRu:
            "Kezar Teks заключил долгосрочные договоры на поставку с тремя крупными европейскими модными домами, расширяя экспортное присутствие на рынке ЕС.",
        excerptUz:
            "Kezar Teks uchta yirik Yevropa moda uylari bilan uzoq muddatli yetkazib berish shartnomalarini tuzdi va YeI bozoridagi eksport ko'lamini kengaytirdi.",
        image:
            "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80",
        category: "export",
        date: "2024-12-20",
    },
    {
        id: "n4",
        titleEn: "Uzbekistan Textile Exports Reach Record $3.5 Billion",
        titleRu: "Экспорт текстиля Узбекистана достиг рекордных $3,5 млрд",
        titleUz: "O'zbekiston to'qimachilik eksporti rekord 3,5 mlrd dollarga yetdi",
        excerptEn:
            "The Uzbek textile industry has achieved record export figures in 2024, driven by investments in vertical integration and modern manufacturing capabilities.",
        excerptRu:
            "Текстильная промышленность Узбекистана достигла рекордных показателей экспорта в 2024 году благодаря инвестициям в вертикальную интеграцию.",
        excerptUz:
            "O'zbekiston to'qimachilik sanoati 2024 yilda vertikal integratsiya va zamonaviy ishlab chiqarish quvvatlariga investitsiyalar tufayli rekord eksport ko'rsatkichlariga erishdi.",
        image:
            "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=800&q=80",
        category: "industry",
        date: "2024-12-10",
    },
    {
        id: "n5",
        titleEn: "Kezar Teks Achieves OEKO-TEX Standard 100 Certification",
        titleRu: "Kezar Teks получил сертификат OEKO-TEX Standard 100",
        titleUz: "Kezar Teks OEKO-TEX Standard 100 sertifikatiga erishdi",
        excerptEn:
            "Our commitment to safety and quality has been recognized with the prestigious OEKO-TEX Standard 100 certification across our entire product range.",
        excerptRu:
            "Наша приверженность безопасности и качеству была отмечена престижным сертификатом OEKO-TEX Standard 100 для всего ассортимента продукции.",
        excerptUz:
            "Xavfsizlik va sifatga bo'lgan sodiqligimiz nufuzli OEKO-TEX Standard 100 sertifikati bilan tan olindi.",
        image:
            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
        category: "company",
        date: "2024-11-28",
    },
    {
        id: "n6",
        titleEn: "Smart Textiles: The Future of Fabric Manufacturing",
        titleRu: "Умный текстиль: будущее производства тканей",
        titleUz: "Aqlli to'qimachilik: mato ishlab chiqarishning kelajagi",
        excerptEn:
            "Exploring how IoT and automation are transforming traditional textile factories into smart manufacturing hubs, improving efficiency and reducing waste.",
        excerptRu:
            "Как IoT и автоматизация превращают традиционные текстильные фабрики в умные производственные центры, повышая эффективность и сокращая отходы.",
        excerptUz:
            "IoT va avtomatlashtirish an'anaviy to'qimachilik fabrikalarini qanday qilib aqlli ishlab chiqarish markazlariga aylantirmoqda.",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        category: "industry",
        date: "2024-11-15",
    },
];

type NewsCat = "all" | "industry" | "company" | "export" | "sustainability";
const CATS: NewsCat[] = ["all", "industry", "company", "export", "sustainability"];

/* ─── News Component ────────────────────────────────────────── */
export default function News() {
    const { t, locale: language } = useLanguage();
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [heroVisible, setHeroVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState<NewsCat>("all");

    useEffect(() => {
        const timer = setTimeout(() => setHeroVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.05 },
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const categoryLabel = (cat: NewsCat): string => {
        const map: Record<NewsCat, string> = {
            all: t.news.allNews,
            industry: t.news.industry,
            company: t.news.company,
            export: t.news.export,
            sustainability: t.news.sustainability,
        };
        return map[cat];
    };

    const title = (a: NewsArticle) =>
        language === "ru" ? a.titleRu : language === "uz" ? a.titleUz : a.titleEn;

    const excerpt = (a: NewsArticle) =>
        language === "ru" ? a.excerptRu : language === "uz" ? a.excerptUz : a.excerptEn;

    const formatDate = (iso: string) => {
        const d = new Date(iso);
        return d.toLocaleDateString(language === "ru" ? "ru-RU" : language === "uz" ? "uz-UZ" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const filtered =
        activeCategory === "all"
            ? NEWS_ARTICLES
            : NEWS_ARTICLES.filter((a) => a.category === activeCategory);

    const featured = filtered[0];
    const rest = filtered.slice(1);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
            {/* ── Hero ──────────────────────────────────────────────── */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-[#1a1e20]">
                    <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a8c3f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent" />
                </div>
                <div
                    className={`relative max-w-6xl mx-auto px-6 md:px-12 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <p className="text-primary/80 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Kezar Teks
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white tracking-tight leading-tight mb-6">
                        {t.news.heroTitle}
                    </h1>
                    <p className="text-white/50 text-lg md:text-xl max-w-2xl font-light">
                        {t.news.heroSubtitle}
                    </p>
                </div>
            </section>

            {/* ── Content ───────────────────────────────────────────── */}
            <section
                ref={sectionRef}
                className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* Category filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-14">
                        {CATS.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                        ? "bg-primary text-white shadow-md shadow-primary/20"
                                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 border border-gray-200 dark:border-gray-700"
                                    }`}
                            >
                                {categoryLabel(cat)}
                            </button>
                        ))}
                    </div>

                    {/* Featured article */}
                    {featured && (
                        <div
                            className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <div className="grid lg:grid-cols-2 gap-8 bg-white dark:bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="relative h-64 lg:h-auto overflow-hidden">
                                    <img
                                        src={featured.image}
                                        alt={title(featured)}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-lg bg-primary/90 text-white text-xs font-semibold uppercase tracking-wide">
                                            {t.news.latestNews}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 lg:p-10 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        <span className="px-2.5 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium">
                                            {categoryLabel(featured.category as NewsCat)}
                                        </span>
                                        <span>{formatDate(featured.date)}</span>
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-4 leading-tight">
                                        {title(featured)}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                        {excerpt(featured)}
                                    </p>
                                    <button className="self-start px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors duration-300">
                                        {t.news.readMore} →
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Articles grid */}
                    {rest.length > 0 && (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {rest.map((article, i) => (
                                <article
                                    key={article.id}
                                    className={`group bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                        }`}
                                    style={{ transitionDelay: `${(i + 1) * 120}ms` }}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={title(article)}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2.5 py-0.5 rounded-md bg-white/90 dark:bg-gray-900/90 text-primary text-xs font-medium">
                                                {categoryLabel(article.category as NewsCat)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
                                            {formatDate(article.date)}
                                        </p>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                                            {title(article)}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4">
                                            {excerpt(article)}
                                        </p>
                                        <button className="text-sm text-primary font-medium hover:underline transition-all">
                                            {t.news.readMore} →
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
