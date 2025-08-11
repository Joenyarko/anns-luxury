import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import FeaturedApartments from "@/components/sections/FeaturedApartments"
import WhyChooseUs from "@/components/sections/WhyChooseUs"

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedApartments />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}

export default Home