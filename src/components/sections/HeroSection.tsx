import { Button } from "@/components/ui/button"
import { Play, ShieldCheck, Star, Sun, Wind, Users, Bed, Zap, Phone } from "lucide-react"
import livingroom from "@/assets/Anns-luxury/livingroom.jpg"

const HeroSection = () => {
  const scrollToDetails = () => {
    const detailsSection = document.getElementById("apartment-details")
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative bg-primary min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-32 overflow-hidden flex items-center">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mt-8">
        
        {/* LEFT COLUMN - TEXT CONTENT */}
        <div className="max-w-xl animate-fade-in flex flex-col items-start text-left">
          
          <h1 className="font-display font-medium text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] tracking-tight text-white mb-4">
            <span className="block mb-2 text-4xl sm:text-5xl md:text-6xl">Welcome to</span>
            <span className="font-bold text-[#E2FF4A] block">
              Ann's Luxury <br className="hidden lg:block" /> Apartment
            </span>
          </h1>
          
          <p className="font-display italic text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6">
            Your luxury short stay in Accra
          </p>

          <p className="text-white/80 text-base md:text-lg font-light mb-10 max-w-md leading-relaxed">
            Experience the pinnacle of comfort in our premium serviced apartment.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 w-full sm:w-auto mt-4">
            <Button 
              variant="default" 
              onClick={scrollToDetails} 
              className="bg-white text-black hover:bg-white/90 rounded-full px-10 h-14 font-bold tracking-widest text-xs uppercase w-full sm:w-auto shrink-0 shadow-xl hover:scale-105 transition-transform"
            >
              Get Started
            </Button>
            
            <a href="tel:+233547944813" className="flex items-center gap-4 cursor-pointer group w-full sm:w-auto justify-center sm:justify-start">
               <div className="w-14 h-14 rounded-full bg-black/40 border border-white/20 flex items-center justify-center group-hover:bg-black/60 transition-colors shadow-lg">
                  <Phone className="text-[#E2FF4A] w-5 h-5" fill="none" />
               </div>
               <div className="flex flex-col text-left">
                 <span className="text-white/70 text-[10px] uppercase tracking-widest font-bold">Talk to us</span>
                 <span className="text-white text-sm font-medium leading-snug group-hover:text-primary transition-colors">
                    Call Now
                 </span>
               </div>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN - IMAGE AND FEATURES LIST */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between animate-fade-in mt-16 lg:mt-0 gap-8">
           
           {/* Image Container */}
           <div className="relative w-full lg:w-[75%] xl:w-[70%] h-[350px] sm:h-[450px] lg:h-[550px] bg-black/50 border border-white/10 overflow-hidden rounded-2xl z-10 shrink-0">
               <img src={livingroom} alt="Living Room" className="absolute inset-0 w-full h-full object-cover" />
           </div>

           {/* Features List Arranged on Right Side - No Overlap */}
           <div className="flex flex-col gap-3 w-full lg:w-auto max-w-sm lg:flex-1">
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
                    <span className="text-white font-bold text-sm tracking-wide">{item.title}</span>
                    <span className="text-white/40 text-[10px] uppercase tracking-widest">{item.label}</span>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection