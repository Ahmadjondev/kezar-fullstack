import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Products from "@/components/ui/Products";

export const metadata: Metadata = {
    title: "Products — Kezar Teks MChJ",
    description:
        "Kezar Teks MChJ mahsulotlari — trikotaj matolar va tayyor kiyimlar",
};

export default function ProductsPage() {
    return (
        <>
            <Navbar />
            <main>
                <Products />
            </main>
            <Footer />
        </>
    );
}
