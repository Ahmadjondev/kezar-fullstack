import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import News from "@/components/ui/News";

export const metadata: Metadata = {
    title: "News — Kezar Teks",
    description: "Stay updated with the latest news from Kezar Teks and the textile industry.",
};

export default function NewsPage() {
    return (
        <>
            <Navbar />
            <main>
                <News />
            </main>
            <Footer />
        </>
    );
}
