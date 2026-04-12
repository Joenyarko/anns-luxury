import { Button } from "@/components/ui/button"
import { Play, ShieldCheck, Star, Sun, Wind, Users, Bed, Zap } from "lucide-react"
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
          
          <p className="font-display italic text-white/90 text-2xl md:text-3xl lg:text-4xl mb-6">
            Your luxury short stay in Accra
          </p>

          <p className="text-white/80 text-base md:text-lg font-light mb-10 max-w-md leading-relaxed">
            Experience the pinnacle of comfort in our premium serviced apartment. Professional, safe, and tailored to your specific needs.
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
            
            <a href="https://wa.me/233547944813" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 cursor-pointer group w-full sm:w-auto justify-center sm:justify-start">
               <div className="w-14 h-14 rounded-full bg-black/40 border border-white/20 flex items-center justify-center group-hover:bg-black/60 transition-colors shadow-lg">
                  <Play className="text-white w-5 h-5 ml-1" fill="currentColor" />
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

        {/* RIGHT COLUMN - IMAGE PLACEHOLDER AND BADGES */}
        <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end animate-fade-in mt-16 lg:mt-0">
           
           {/* Rotated Right Edge Text */}
           <div className="absolute -right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center hidden xl:block z-0">
              <span className="text-white/30 tracking-[0.4em] text-[10px] uppercase whitespace-nowrap font-bold">Enjoy ultimate comfort</span>
           </div>

           {/* Main Image Container */}
           <div className="relative w-full sm:w-[80%] lg:w-[85%] xl:w-[75%] h-[90%] lg:h-[80%] bg-black/50 border border-white/10 overflow-visible flex justify-center items-center rounded-sm z-10 mx-auto lg:mr-16">
               
               <img src={livingroom} alt="Living Room" className="absolute inset-0 w-full h-full object-cover rounded-sm" />

               {/* 1. Stat Box - Top Left */}
               <div className="absolute -left-4 sm:-left-16 lg:-left-24 top-8 border border-white/40 p-4 sm:p-6 backdrop-blur-md hidden sm:block z-20 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-5xl font-display text-white mb-2 flex items-baseline gap-1 font-semibold">
                    100<span className="text-xl sm:text-2xl">%</span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#E2FF4A] w-20 sm:w-28 font-bold leading-tight">
                    Premium Security
                  </div>
               </div>

               {/* 2. Pill Badge - Mid Left */}
               <div className="absolute -left-6 sm:-left-12 lg:-left-20 top-[40%] bg-[#E2FF4A] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 shadow-[0_10px_30px_rgba(226,255,74,0.3)] z-20 transition-transform hover:scale-105 duration-300">
                  <Wind className="shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[9px] sm:text-xs font-black uppercase tracking-wider">Relax in AC Sitting Room</span>
               </div>

               {/* 3. White Square Box - Bottom Left */}
               <div className="absolute -left-2 sm:-left-16 lg:-left-24 bottom-4 sm:bottom-12 bg-white p-4 sm:p-6 w-40 sm:w-56 shadow-2xl z-20 hidden sm:block hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center mb-3 sm:mb-4 shadow-inner">
                     <Users className="text-[#E2FF4A] w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
                  </div>
                  <h4 className="text-black font-black text-sm sm:text-base leading-snug">
                     Perfect space for Family & Friends
                  </h4>
               </div>

               {/* 4. Pill Badge - Top Right */}
               <div className="absolute -right-4 sm:-right-12 lg:-right-16 top-16 bg-white text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-2 shadow-2xl z-20 transition-transform hover:scale-105 duration-300 hidden sm:flex">
                  <Bed className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wide">Sleep in Comfort</span>
               </div>

               {/* 5. Pill Badge - Bottom Right */}
               <div className="absolute -right-6 sm:-right-10 lg:-right-12 bottom-[20%] sm:bottom-[25%] bg-[#011422] border border-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 shadow-xl z-20 transition-transform hover:scale-105 duration-300">
                  <Zap className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-[#E2FF4A] fill-[#E2FF4A]" />
                  <span className="text-[9px] sm:text-xs font-bold tracking-wide">24 Hour Electricity</span>
               </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection