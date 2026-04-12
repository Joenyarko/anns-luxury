import { Button } from "@/components/ui/button"
import { Play, ShieldCheck, Star, Sun, Wind } from "lucide-react"

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
        <div className="max-w-xl animate-fade-in order-2 lg:order-1 flex flex-col items-start text-left">
          
          <h1 className="font-display font-medium text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] leading-[1.05] tracking-tight text-white mb-6">
            Welcome to <br />
            <span className="font-bold text-[#E2FF4A]">Ann's Luxury</span> <br />
            Apartment
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl font-light mb-10 max-w-md leading-relaxed">
            Your luxury short stay in Accra. Experience the pinnacle of comfort in our premium serviced apartment. Professional, safe, and tailored to your specific needs.
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
        <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end animate-fade-in order-1 lg:order-2">
           
           {/* Rotated Right Edge Text */}
           <div className="absolute -right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center hidden xl:block z-0">
              <span className="text-white/30 tracking-[0.4em] text-[10px] uppercase whitespace-nowrap font-bold">Enjoy ultimate comfort</span>
           </div>

           {/* Main Image Container */}
           <div className="relative w-full sm:w-[80%] lg:w-[85%] xl:w-[75%] h-[90%] lg:h-[80%] bg-black/50 border border-white/10 overflow-visible flex justify-center items-center rounded-sm z-10 mx-auto lg:mr-16">
               
               <span className="text-white/30 tracking-widest uppercase font-black text-xl">Image Here</span>
               {/* Note: User will place their image inside this container replacing the text above */}

               {/* 1. Stat Outline Box - Top Left */}
               <div className="absolute -left-4 sm:-left-16 lg:-left-24 top-8 border border-white/40 p-4 sm:p-6 backdrop-blur-md hidden sm:block z-20">
                  <div className="text-3xl sm:text-5xl font-display text-white mb-2 flex items-baseline gap-1 font-semibold">
                    100<span className="text-xl sm:text-2xl">%</span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#E2FF4A] w-20 sm:w-28 font-bold leading-tight">
                    Premium Security
                  </div>
               </div>

               {/* 2. Pill Badge - Overlapping Left */}
               <div className="absolute -left-6 sm:-left-12 lg:-left-20 top-[40%] bg-[#E2FF4A] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 shadow-[0_10px_30px_rgba(226,255,74,0.3)] z-20 transition-transform hover:scale-105">
                  <Wind size={18} className="shrink-0" />
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider">Uninterrupted AC</span>
               </div>

               {/* 3. White Square Box - Bottom Left */}
               <div className="absolute -left-2 sm:-left-16 lg:-left-24 bottom-4 sm:bottom-12 bg-white p-5 sm:p-8 w-48 sm:w-64 shadow-2xl z-20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center mb-4 sm:mb-6 shadow-inner">
                     <Star className="text-[#E2FF4A] w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
                  </div>
                  <h4 className="text-black font-black text-base sm:text-xl leading-snug">
                     Your comfort with proven excellence
                  </h4>
               </div>

               {/* 4. White Circle Icon - Right Edge */}
               <div className="absolute -right-6 sm:-right-8 top-[60%] sm:top-[65%] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-xl z-20">
                  <Sun className="text-black w-5 h-5 sm:w-7 sm:h-7" />
               </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection