import { cn } from "@/lib/utils"

const WelcomeBanner = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto border border-white/10 bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 shadow-2xl">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
            Looking forward to hosting you,
            <span className="block text-primary italic font-light mt-2 text-3xl md:text-4xl lg:text-5xl">your comfort is our priority!</span>
          </h2>
          <div className="w-24 h-1 bg-primary/40 mx-auto rounded-full mt-8"></div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeBanner
