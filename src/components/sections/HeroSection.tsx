import { Button } from "@/components/ui/button"
import { Play, ShieldCheck, Star, Sun, Wind, Users, Bed, Zap, Phone } from "lucide-react"
import livingroom from "@/assets/Anns-luxury/livingroom.jpg"
import buildingcompound from "@/assets/Anns-luxury/buildingcompound.jpg"

const HeroSection = () => {
  const scrollToDetails = () => {
    const detailsSection = document.getElementById("apartment-details")
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative bg-primary min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-32 overflow-hidden flex items-center">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16 relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-12 lg:gap-8 items-center mt-8">
        
        {/* COLUMN 1 - DUAL OVERLAPPING IMAGES (Left on Desktop, 2nd on Mobile) */}
        <div className="relative w-full flex items-center justify-center lg:justify-start animate-fade-in order-2 lg:order-1 pt-12 lg:pt-0 pb-12 lg:pb-0">
           <div className="relative w-[280px] sm:w-[350px] lg:w-[420px] h-[380px] sm:h-[450px] lg:h-[580px]">
               {/* Back Image (Building Compound) - Positioned Top Right */}
               <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-black/50 border border-white/10 overflow-hidden rounded-2xl z-10 shadow-2xl transition-transform hover:scale-105 duration-500">
                   <img src={buildingcompound} alt="Building Compound" className="w-full h-full object-cover" />
               </div>

               {/* Front Image (Living Room) - Positioned Bottom Left & Dragged Down */}
               <div className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-black/50 border border-white/20 overflow-hidden rounded-2xl z-20 shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-transform hover:scale-105 duration-500 -translate-x-6 translate-y-10 lg:-translate-x-12 lg:translate-y-16">
                   <img src={livingroom} alt="Living Room" className="w-full h-full object-cover" />
                   {/* Glass Effect Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
               </div>
           </div>
        </div>

        {/* COLUMN 2 - TEXT CONTENT (Middle on Desktop, 1st on Mobile) */}
        <div className="max-w-xl mx-auto animate-fade-in flex flex-col items-center text-center order-1 lg:order-2">
          <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.1] tracking-tight text-white mb-4">
            <span className="block mb-2 text-3xl sm:text-4xl md:text-5xl">Welcome to</span>
            <span className="font-bold text-[#E2FF4A] block">
              Ann's Luxury <br className="hidden lg:block" /> Apartment
            </span>
          </h1>
          
          <p className="font-display italic text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6">
            Your luxury short stay in Accra
          </p>

          <p className="text-white/80 text-sm md:text-base font-light mb-10 max-w-sm leading-relaxed">
            Experience the pinnacle of comfort in our premium serviced apartment.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full sm:w-auto mt-4">
            <Button 
              variant="default" 
              onClick={scrollToDetails} 
              className="bg-white text-black hover:bg-white/90 rounded-full px-10 h-14 font-bold tracking-widest text-xs uppercase w-full sm:w-auto shrink-0 shadow-xl hover:scale-105 transition-transform"
            >
              Get Started
            </Button>
            
            <a href="tel:+233547944813" className="flex items-center gap-4 cursor-pointer group w-full sm:w-auto justify-center">
               <div className="w-14 h-14 rounded-full bg-black/40 border border-white/20 flex items-center justify-center group-hover:bg-black/60 transition-colors shadow-lg">
                  <Phone className="text-[#E2FF4A] w-5 h-5" fill="none" />
               </div>
               <div className="flex flex-col text-left">
                 <span className="text-white/70 text-[10px] uppercase tracking-widest font-bold">Talk to us</span>
                 <span className="text-white text-sm font-medium leading-snug group-hover:text-lemon transition-colors">
                    Call Now
                 </span>
               </div>
            </a>
          </div>
        </div>

        {/* COLUMN 3 - FEATURES LIST (Right on Desktop, 3rd on Mobile) */}
        <div className="flex flex-col gap-3 w-full animate-fade-in order-3 lg:order-3">
          {[
            { icon: ShieldCheck, title: "100% Security", label: "Premium" },
            { icon: Wind, title: "Relax in AC Sitting Room", label: "Comfort" },
            { icon: Users, title: "Space for Family & Friends", label: "Perfect" },
            { icon: Bed, title: "Sleep in Comfort", label: "Bed" },
            { icon: Zap, title: "24 Hour Electricity", label: "Electricity" }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#011422] border border-white/10 p-4 flex items-center gap-4 rounded-xl shadow-2xl transition-all hover:translate-x-[10px] duration-300"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <item.icon className="text-[#E2FF4A] w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-bold text-xs sm:text-sm tracking-wide">{item.title}</span>
                <span className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-widest">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection