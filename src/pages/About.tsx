import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { CheckCircle2 } from "lucide-react"

const About = () => {
  const values = [
    { title: "Exceptional Quality", description: "We believe in providing only the best furnishings and amenities." },
    { title: "Unparalleled Comfort", description: "Every detail is designed to make you feel right at home." },
    { title: "Prime Location", description: "Situated in the most sought-after neighborhood for your convenience." },
    { title: "Personalized Service", description: "Our dedicated team is always ready to assist you." },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-1">
        {/* About Hero */}
        <section className="relative h-[250px] md:h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop" 
              alt="Luxury Living" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 text-center text-white px-4 animate-fade-in">
            <h1 className="font-display text-3xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto">
              Setting the standard for luxury serviced apartments and redefining premium stays.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 animate-slide-up">
                <h2 className="font-display text-4xl font-bold mb-6">Our <span className="text-primary">Story</span></h2>
                <p className="text-muted-foreground text-lg mb-4">
                  Founded with a vision to offer an unprecedented level of comfort and luxury, Ann's Golden Stays provides an exceptional alternative to traditional hotels. Our meticulously designed apartment offers a unique blend of elegance, functionality, and convenience.
                </p>
                <p className="text-muted-foreground text-lg mb-6">
                  We understand that whether you are traveling for business, relocating, or simply taking a well-deserved vacation, your accommodation plays a crucial role in your overall experience. That's why we've poured our passion into creating a space that looks stunning and feels like home.
                </p>
              </div>
              <div className="md:w-1/2 animate-scale-in">
                <img 
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop" 
                  alt="Our Apartment" 
                  className="rounded-2xl shadow-luxury w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover the values that drive us to deliver extraordinary stays.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-background rounded-2xl shadow-sm border border-border">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default About
