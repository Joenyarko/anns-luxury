import { Shield, MapPin, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Premium Security",
    description: "24/7 security with state-of-the-art surveillance and secure access systems for your peace of mind."
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Strategically located in the heart of the city with easy access to business districts and attractions."
  },
  {
    icon: Clock,
    title: "Exceptional Service",
    description: "Round-the-clock concierge service and dedicated staff to cater to your every need."
  },
  {
    icon: Award,
    title: "Luxury Amenities",
    description: "World-class amenities including fitness centers, rooftop lounges, and premium business facilities."
  }
]

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Anns Luxury</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the difference that comes with our commitment to excellence, 
            luxury, and unparalleled guest satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary group-hover:shadow-gold transition-luxury">
                <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-luxury" />
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs