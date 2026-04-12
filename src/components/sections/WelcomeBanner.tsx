import { cn } from "@/lib/utils"

const WelcomeBanner = () => {
  return (
    <section className="py-12 md:py-16 bg-transparent text-center">
      <div className="container mx-auto px-4">
        <p className="font-body italic text-xl md:text-2xl lg:text-3xl text-foreground/60 font-light leading-relaxed">
          Looking forward to hosting you, your comfort is our priority
        </p>
      </div>
    </section>
  )
}

export default WelcomeBanner
