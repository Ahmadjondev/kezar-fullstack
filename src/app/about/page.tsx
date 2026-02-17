import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About — Kezar Teks MChJ",
  description:
    "Kezar Teks MChJ haqida — 1998 yildan beri trikotaj matosini to'qish, bo'yash, gul bosish va tayyor trikotaj mahsulotlari ishlab chiqarish",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
