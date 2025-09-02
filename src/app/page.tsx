import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import GamesSection from "@/components/GamesSection"
import PromotionsSection from "@/components/PromotionsSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GamesSection />
      <PromotionsSection />
      <Footer />
    </main>
  )
}