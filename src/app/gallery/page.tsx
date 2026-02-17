import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/ui/Gallery";

export const metadata: Metadata = {
  title: "Gallery — Kezar Teks",
  description: "Explore our textile manufacturing facilities, fabrics, garments, and team.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
