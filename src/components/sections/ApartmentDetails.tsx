import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Wifi, Car, Utensils, Dumbbell, Play, Pause, Volume2, VolumeX, CalendarClock, ShieldCheck, X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import annsVideo from "@/assets/Anns-luxury/video.MOV"
import buildingcompound from "@/assets/Anns-luxury/buildingcompound.jpg"
import environ from "@/assets/Anns-luxury/environ.jpg"
import securitypost from "@/assets/Anns-luxury/securitypost.jpg"
import pergola from "@/assets/Anns-luxury/pergola.jpg"
import generator from "@/assets/Anns-luxury/generator.jpg"
import starlink from "@/assets/Anns-luxury/starlink.jpg"
import electricfence from "@/assets/Anns-luxury/electricfence.jpg"
import cctv from "@/assets/Anns-luxury/cctv.jpg"

import livingroom from "@/assets/Anns-luxury/livingroom.jpg"
import sofa from "@/assets/Anns-luxury/sofa.jpg"
import sofa1 from "@/assets/Anns-luxury/sofa1.jpg"
import sofa2 from "@/assets/Anns-luxury/sofa2.jpg"
import tv from "@/assets/Anns-luxury/tv.jpg"
import dining from "@/assets/Anns-luxury/dining.jpg"

import bedroom from "@/assets/Anns-luxury/bedroom.jpg"
import bedroom1 from "@/assets/Anns-luxury/bedroom1.jpg"
import bedroom2 from "@/assets/Anns-luxury/bedroom2.jpg"
import bedroom3 from "@/assets/Anns-luxury/bedroom3.jpg"
import bedside from "@/assets/Anns-luxury/bedside.jpg"
import bedside2 from "@/assets/Anns-luxury/bedside2.jpg"

import kitchen from "@/assets/Anns-luxury/kitchen.jpg"
import kitchencabinet from "@/assets/Anns-luxury/kitchencabinet.jpg"
import kitchentap from "@/assets/Anns-luxury/kitchentap.jpg"
import kettle from "@/assets/Anns-luxury/kettle.jpg"
import microwave from "@/assets/Anns-luxury/microwave.jpg"
import refrigerator from "@/assets/Anns-luxury/refrigerator.jpg"
import stove from "@/assets/Anns-luxury/stove.jpg"
import stove2 from "@/assets/Anns-luxury/stove2.jpg"
import washingmachine from "@/assets/Anns-luxury/washingmachine.jpg"
import washingmachine1 from "@/assets/Anns-luxury/washingmachine1.jpg"
import washingmachine2 from "@/assets/Anns-luxury/washingmachine2.jpg"
import washingmachine3 from "@/assets/Anns-luxury/washingmachine3.jpg"
import washingmachine4 from "@/assets/Anns-luxury/washingmachine4.jpg"

import bathroom from "@/assets/Anns-luxury/bathroom.jpg"
import bathroomshower from "@/assets/Anns-luxury/bathroomshower.jpg"
import washroom from "@/assets/Anns-luxury/washroom.jpg"
import washroom3 from "@/assets/Anns-luxury/washroom3.jpg"
import tap from "@/assets/Anns-luxury/tap.jpg"
import tap2 from "@/assets/Anns-luxury/tap2.jpg"
import tab3 from "@/assets/Anns-luxury/tab3.jpg"
import acoutside from "@/assets/Anns-luxury/ACoutside.jpg"
import kitchencabinet2 from "@/assets/Anns-luxury/kitchencabinet2.jpg"
import kitchen3 from "@/assets/Anns-luxury/kitchen3.jpg"

const amenityIcons = {
  "High-Speed WiFi": Wifi,
  "Private Parking": Car,
  "Fully Equipped Kitchen": Utensils,
  "24/7 Security": ShieldCheck,
  "Flexible Check-in": CalendarClock
}

const amenities = Object.keys(amenityIcons)

const pricingOptions = [
  { term: "Nightly", price: "$199", description: "Perfect for short trips and weekend getaways." },
  { term: "Weekly", price: "$1,200", description: "Save 15% when you stay for a full week." },
  { term: "Monthly", price: "$4,500", description: "Best value! Enjoy luxury living long-term." }
]

const categories = [
  {
    title: "Building & Compound",
    images: [
      buildingcompound,
      environ,
      securitypost,
      pergola,
      generator,
      starlink,
      electricfence,
      cctv,
      acoutside
    ]
  },
  {
    title: "Living Room",
    images: [
      livingroom,
      sofa,
      sofa1,
      sofa2,
      tv,
      dining
    ]
  },
  {
    title: "Bedroom",
    images: [
      bedroom,
      bedroom1,
      bedroom2,
      bedroom3,
      bedside,
      bedside2
    ]
  },
  {
    title: "Kitchen",
    images: [
      kitchen,
      kitchencabinet,
      kitchentap,
      kettle,
      microwave,
      refrigerator,
      stove,
      stove2,
      washingmachine,
      washingmachine1,
      washingmachine2,
      washingmachine3,
      washingmachine4,
      kitchencabinet2,
      kitchen3
    ]
  },
  {
    title: "Bathroom",
    images: [
      bathroom,
      bathroomshower,
      washroom,
      washroom3,
      tap,
      tap2,
      tab3
    ]
  }
]

const CategoryCarousel = ({ category }: { category: { title: string, images: string[] } }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Auto-sliding logic only acts when lightbox is closed
  useEffect(() => {
    if (isLightboxOpen) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % category.images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [category.images.length, isLightboxOpen])

  return (
    <div className="flex flex-col h-full group">
      <h3 className="font-display text-xl font-semibold mb-4 text-center">{category.title}</h3>
      <div 
        className="relative rounded-2xl overflow-hidden shadow-elegant h-[300px] w-full cursor-pointer hover:shadow-luxury transition-shadow duration-300"
        onClick={() => setIsLightboxOpen(true)}
      >
        {category.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${category.title} ${idx + 1}`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
              idx === currentSlide ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        {/* Overlay for better dot visibility */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Carousel Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {category.images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation()
                setCurrentSlide(idx)
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                idx === currentSlide ? "bg-primary w-6" : "bg-white/60 hover:bg-white"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/40 hover:bg-white/10 p-2 rounded-full transition-colors z-50"
            onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
            aria-label="Close Lightbox"
          >
            <X size={32} />
          </button>
          
          {/* Previous button */}
          <button 
            className="absolute left-2 md:left-8 text-white/50 hover:text-white transition-colors p-2 z-50"
            onClick={(e) => { 
                e.stopPropagation(); 
                setCurrentSlide((prev) => (prev - 1 + category.images.length) % category.images.length); 
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Current image */}
          <div className="relative max-w-7xl max-h-[90vh] flex flex-col items-center justify-center p-4">
             <h4 className="absolute -top-12 text-white font-display text-2xl tracking-widest uppercase opacity-80">{category.title}</h4>
             <img 
               src={category.images[currentSlide]} 
               alt={`${category.title} enlarged`} 
               className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
               onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
             />
             <div className="absolute -bottom-10 flex space-x-2 mt-4">
                 {category.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentSlide(idx)
                    }}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      idx === currentSlide ? "bg-primary w-4" : "bg-white/40 hover:bg-white/80"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
             </div>
          </div>

          {/* Next button */}
          <button 
            className="absolute right-2 md:right-8 text-white/50 hover:text-white transition-colors p-2 z-50"
            onClick={(e) => { 
                e.stopPropagation(); 
                setCurrentSlide((prev) => (prev + 1) % category.images.length); 
            }}
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  )
}

const ApartmentDetails = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false))
      }
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (e.key === ' ') e.preventDefault()
      togglePlay()
    }
  }

  return (
    <section id="apartment-details" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-primary">Executive Suite</span>
          </h2>
          <div className="flex items-center justify-center space-x-1 mb-4">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <span className="font-semibold text-lg">5.0</span>
            <span className="text-muted-foreground ml-2">(120+ Reviews)</span>
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Experience the pinnacle of luxury living in our premium suite. Located in the heart of the city, this thoughtfully designed apartment offers everything you need for a comfortable, productive, and memorable stay.
          </p>
        </div>

        {/* Media Gallery - Image Grid followed by Video */}
        <div className="space-y-8 mb-16">
          {/* Categorized Carousels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <CategoryCarousel key={idx} category={category} />
            ))}
          </div>

          {/* Virtual Tour Video */}
          <div
            className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-luxury group h-[450px] md:h-[650px] bg-gray-900 cursor-pointer"
            onClick={togglePlay}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-pressed={isPlaying}
            aria-label={isPlaying ? 'Pause virtual tour' : 'Play virtual tour'}
          >
            <video
              ref={videoRef}
              src={annsVideo}
              className="w-full h-full object-cover"
              playsInline
              muted={isMuted}
              loop
            />
            {/* Overlay */}
            <div className={cn(
              "absolute inset-0 bg-black/40 transition-opacity duration-500 flex items-center justify-center",
              isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            )}>
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110">
                  {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} className="ml-1" fill="currentColor" />}
                </div>
                {!isPlaying && <span className="text-white font-black tracking-[0.2em] uppercase text-sm md:text-base">Experience Virtual Tour</span>}
              </div>
            </div>
            {/* Sound toggle */}
            <div className="absolute bottom-6 right-6 z-20">
              <button
                onClick={toggleMute}
                className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-primary/20 hover:text-primary transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </div>
        </div>



        {/* Call to Action */}
        <div className="text-center mt-12 mb-8 p-10 bg-primary/5 rounded-3xl border border-primary/10 max-w-3xl mx-auto">
          <h3 className="font-display text-3xl font-semibold mb-4">Ready to Book Your Stay?</h3>
          <p className="text-muted-foreground text-lg mb-8">
            Contact us directly on WhatsApp to check availability, ask questions, or secure your reservation instantly.
          </p>
          <Button variant="luxury" size="xl" asChild className="w-full sm:w-auto h-14 px-10 text-lg shadow-luxury">
            <a href="https://wa.me/233547944813" target="_blank" rel="noopener noreferrer">
              Book via WhatsApp
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}

export default ApartmentDetails
