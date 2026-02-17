import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroVideo from "@/components/ui/HeroVideo";
import Statistics from "@/components/ui/Statistics";
import KezarIntro from "@/components/ui/KezarIntro";
import CoreValues from "@/components/ui/CoreValues";
import Divisions from "@/components/ui/Divisions";
import VideoShowcase from "@/components/ui/VideoShowcase";
import Clients from "@/components/ui/Clients";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroVideo />
        <Statistics />
        <KezarIntro />
        <CoreValues />
        <Divisions />
        <VideoShowcase />
        <Clients />
      </main>
      <Footer />
    </>
  );
}
