import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import StatsSection from "@/components/sections/StatsSection"
import ApartmentDetails from "@/components/sections/ApartmentDetails"
import WhyChooseUs from "@/components/sections/WhyChooseUs"

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <WhyChooseUs />
        <ApartmentDetails />
      </main>
      <Footer />
    </div>
  )
}

export default Home