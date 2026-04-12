import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import heroApartment from "@/assets/hero-apartment.jpg"
import annsHero from "@/assets/anns-hero.jpg"
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const carouselImages = [
  heroApartment,
  annsHero,
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&h=900&fit=crop"
]

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))
  }

  const scrollToDetails = () => {
    const section = document.getElementById('apartment-details')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-[100px] lg:pt-[120px]">
      {/* Row 3: Full Width Carousel Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <img 
              src={img} 
              alt={`Luxury Apartment view ${index + 1}`} 
              className="w-full h-full object-cover" 
            />
            {/* Strengthened dark overlay for maximum legibility */}
            <div className="absolute inset-0 bg-black/80" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Floating Left Image Placeholder */}
        <div className="hidden xl:block absolute left-10 2xl:left-20 top-1/2 -translate-y-1/2 z-20 animate-[float_6s_ease-in-out_infinite]">
          <div className="w-[300px] h-[400px] rounded-[2rem] bg-white/10 backdrop-blur-md border-2 border-white/20 p-2 shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer overflow-hidden">
            <div className="w-full h-full rounded-[1.5rem] bg-gray-800/80 flex items-center justify-center relative overflow-hidden">
               {/* Replace with real image when ready */}
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
               <span className="text-white/50 font-display font-medium tracking-widest text-sm z-10 uppercase">Image Placeholder</span>
            </div>
          </div>
        </div>

        {/* Floating Right Features List */}
        <div className="hidden xl:block absolute right-10 2xl:right-20 top-1/2 -translate-y-1/2 z-20 animate-[float_7s_ease-in-out_infinite_reverse]">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl w-[320px] rounded-br-none">
            <h3 className="text-white font-display text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary" />
              Why Choose Us
            </h3>
            <ul className="space-y-4 text-left">
              {[
                "Sleep in ultimate comfort",
                "Relax in AC living rooms",
                "Perfect for Family & Friends",
                "24/7 Premium Security",
                "Uninterrupted 24hr Electricity"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 group">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                    <CheckCircle2 size={14} className="text-primary group-hover:text-black" />
                  </div>
                  <span className="font-medium text-sm tracking-wide">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in pb-24 sm:pb-28 md:pb-32 lg:pb-32 2xl:px-0 px-4">
          <div className="inline-block px-5 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-primary font-bold text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase">Your luxury short stay in Accra</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-[1.1]">
            Welcome to <br className="hidden md:block"/>
            <span className="text-primary">Ann's Luxury Apartment</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-white/80 leading-relaxed max-w-2xl mx-auto">
            Experience the pinnacle of comfort in our premium serviced apartment. 
            Professional, safe, and tailored to your specific needs.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center animate-scale-in">
            <Button variant="luxury" size="xl" asChild className="w-full sm:w-auto h-14 md:h-16 lg:h-20 px-10 md:px-12 text-base md:text-lg lg:text-xl rounded-full shadow-gold">
               <a href="https://wa.me/233547944813" target="_blank" rel="noopener noreferrer">Call Now</a>
            </Button>
            <Button variant="default" size="xl" onClick={scrollToDetails} className="w-full sm:w-auto h-14 md:h-16 lg:h-20 px-10 md:px-12 text-base md:text-lg lg:text-xl rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 transition-all shadow-lg">
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-primary w-8" : "bg-white/40"
            )}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20 cursor-pointer hidden sm:block" onClick={scrollToDetails}>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/30 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection