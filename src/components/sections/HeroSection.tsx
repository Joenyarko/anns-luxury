import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import heroApartment from "@/assets/hero-apartment.jpg"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const carouselImages = [
  heroApartment,
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&h=900&fit=crop",
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
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="inline-block px-5 py-2 bg-primary/20 border border-primary/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Private Executive Suite</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-7xl lg:text-9xl font-black mb-8 leading-[1.1]">
            <span className="text-primary">Luxury</span> Living<br />
            <span className="italic font-light opacity-90">Redefined.</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-white/80 leading-relaxed max-w-2xl mx-auto">
            Experience the pinnacle of comfort in our premium serviced apartment. 
            Professional, safe, and tailored to your specific needs.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center animate-scale-in">
            <Button variant="luxury" size="xl" asChild className="w-full sm:w-auto h-16 px-12 text-lg rounded-full shadow-gold">
               <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Call Now</a>
            </Button>
            <Button variant="default" size="xl" onClick={scrollToDetails} className="w-full sm:w-auto h-16 px-12 text-lg rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 transition-all shadow-lg">
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