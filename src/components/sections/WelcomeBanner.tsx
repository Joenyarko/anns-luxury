import { cn } from "@/lib/utils"

const WelcomeBanner = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent text-center">
      <div className="container mx-auto px-4">
        <p className="font-display italic text-3xl md:text-4xl lg:text-5xl text-foreground font-light opacity-90 leading-tight">
          Looking forward to hosting you, your comfort is our priority
        </p>
      </div>
    </section>
  )
}

export default WelcomeBanner
