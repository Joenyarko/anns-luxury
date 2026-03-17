import { cn } from "@/lib/utils"

const stats = [
  { value: "500+", label: "Happy Guests" },
  { value: "1", label: "Luxury Apartment" },
  { value: "4.9", label: "Average Rating" },
  { value: "24/7", label: "Concierge Service" },
]

const StatsSection = () => {
  return (
    <section className="relative z-40 -mt-16 sm:-mt-24 md:-mt-32 pb-16 lg:pb-24 px-4 overflow-visible">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto bg-black/95 backdrop-blur-3xl border border-white/10 rounded-2xl sm:rounded-3xl md:rounded-[3.5rem] p-6 sm:p-8 md:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.8)] group hover:border-primary/20 transition-all duration-700">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex flex-col items-center justify-center text-center py-2 sm:py-4 px-1 sm:px-2 md:px-4",
                  index !== stats.length - 1 && "lg:border-r border-white/10"
                )}
              >
                <div className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-primary mb-1 md:mb-2 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)] group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </div>
                <div className="text-white/60 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-black">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
