import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Wifi, Car, Utensils, Dumbbell, Play, Pause, Volume2, VolumeX, CalendarClock, ShieldCheck } from "lucide-react"
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
import ac1 from "@/assets/Anns-luxury/AC1.jpg"
import photo11 from "@/assets/Anns-luxury/photo_11_2026-04-10_11-38-07.jpg"

import bedroom from "@/assets/Anns-luxury/bedroom.jpg"
import bedroom1 from "@/assets/Anns-luxury/bedroom1.jpg"
import bedroom2 from "@/assets/Anns-luxury/bedroom2.jpg"
import bedroom3 from "@/assets/Anns-luxury/bedroom3.jpg"
import bedside from "@/assets/Anns-luxury/bedside.jpg"
import bedside2 from "@/assets/Anns-luxury/bedside2.jpg"
import photo38 from "@/assets/Anns-luxury/photo_38_2026-04-10_11-38-07.jpg"

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
      cctv
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
      dining,
      ac1,
      photo11
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
      bedside2,
      photo38
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
      washingmachine4
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % category.images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [category.images.length])

  return (
    <div className="flex flex-col h-full group">
      <h3 className="font-display text-xl font-semibold mb-4 text-center">{category.title}</h3>
      <div className="relative rounded-2xl overflow-hidden shadow-elegant h-[300px] w-full cursor-pointer hover:shadow-luxury transition-shadow duration-300">
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

        {/* Amenities section */}
        <div className="mb-16">
          <h3 className="font-display text-3xl font-semibold mb-8 text-center">Premium Amenities</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {amenities.map((amenity) => {
              const Icon = amenityIcons[amenity as keyof typeof amenityIcons]
              return (
                <div key={amenity} className="flex items-center space-x-3 bg-background rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{amenity}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pricing Flexboxes */}
        <div className="mb-20 px-2 lg:px-0">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">Flexible <span className="text-primary">Stays</span></h3>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((option, idx) => (
              <Card key={idx} className={cn(
                "flex-1 flex flex-col p-8 rounded-[2rem] transition-luxury duration-500 hover:-translate-y-2",
                idx === 1
                  ? "border-primary/50 border-2 bg-black text-white shadow-luxury scale-105 z-10"
                  : "bg-white border-white/10 shadow-elegant"
              )}>
                <CardHeader className="p-0 mb-6">
                  <div className={cn(
                    "inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4",
                    idx === 1 ? "bg-primary text-black" : "bg-primary/10 text-primary"
                  )}>
                    {option.term}
                  </div>
                  <CardTitle className={cn(
                    "text-5xl font-black font-display flex items-baseline gap-2",
                    idx === 1 ? "text-white" : "text-black"
                  )}>
                    {option.price}
                    <span className={cn(
                      "text-sm font-normal uppercase tracking-widest",
                      idx === 1 ? "text-white/40" : "text-black/40"
                    )}>
                      / {option.term.toLowerCase().replace('ly', '')}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex flex-col flex-1">
                  <p className={cn(
                    "text-base leading-relaxed mb-8 italic",
                    idx === 1 ? "text-white/60" : "text-gray-500"
                  )}>
                    "{option.description}"
                  </p>
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <Button
                      variant={idx === 1 ? "luxury" : "default"}
                      className={cn(
                        "w-full h-12 rounded-full font-bold uppercase tracking-widest text-xs",
                        idx === 1 ? "" : "bg-black text-white hover:bg-black/90"
                      )}
                    >
                      Select {option.term}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
