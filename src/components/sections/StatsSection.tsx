import { cn } from "@/lib/utils"
import bedroom from "@/assets/Anns-luxury/bedroom.jpg"

const stats = [
  { value: "500+", label: "Happy guests in total" },
  { value: "4.9", label: "Average rating annually" },
  { value: "24/7", label: "Top concierge service awards" },
]

const StatsSection = () => {
  return (
    <section className="relative z-40 w-full bg-[#040B14] flex flex-col lg:flex-row">
      {/* Container to enforce exact grid layout as reference */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end px-4 lg:px-16 py-16 lg:py-24">
        <div className="w-full max-w-xl flex flex-col gap-12">
          
          {/* Top Row: Avatars & Contact */}
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-500 border-2 border-[#040B14] overflow-hidden flex-shrink-0 z-30">
                <img src="https://i.pravatar.cc/100?img=33" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-400 border-2 border-[#040B14] overflow-hidden flex-shrink-0 z-20">
                <img src="https://i.pravatar.cc/100?img=47" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-300 border-2 border-[#040B14] overflow-hidden flex-shrink-0 z-10">
                <img src="https://i.pravatar.cc/100?img=12" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 z-0 relative ml-[-12px]">
                <span className="text-[10px] md:text-xs font-bold text-black leading-none">100+</span>
              </div>
            </div>
            
            <div className="text-white text-sm md:text-base font-bold leading-tight">
              Contact<br/>our experts
            </div>
          </div>

          {/* Bottom Row: Stats line */}
          <div className="flex flex-wrap items-start gap-y-8 md:gap-x-0 w-full border-t border-white/10 pt-10">
            {stats.map((stat, i) => (
              <div key={i} className={cn(
                "flex flex-col flex-1 min-w-[120px]",
                i !== 0 && "pl-4 md:pl-8 border-l border-white/10"
              )}>
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 md:mb-4 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-white/60 text-[10px] md:text-xs leading-relaxed max-w-[130px] font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Right Side Image mapping to arcenergy layout */}
      <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[500px] relative bg-gray-900 border-t border-l-0 lg:border-t-0 lg:border-l border-white/5 overflow-hidden flex items-center justify-center">
        <img src={bedroom} alt="Bedroom" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105" />
      </div>
    </section>
  )
}

export default StatsSection
