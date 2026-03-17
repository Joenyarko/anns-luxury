import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Wifi, Car, Utensils, Dumbbell, PlayCircle, CalendarClock, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import ann1 from "@/assets/ann-1.jpg"
import ann2 from "@/assets/ann-2.jpg"
import ann3 from "@/assets/ann-3.jpg"
import ann4 from "@/assets/ann-4.jpg"
import ann5 from "@/assets/ann-5.jpg"
import ann6 from "@/assets/ann-6.jpg"

const amenityIcons = {
  "High-Speed WiFi": Wifi,
  "Private Parking": Car,
  "Fully Equipped Kitchen": Utensils,
  "Fitness Center Access": Dumbbell,
  "24/7 Security": ShieldCheck,
  "Flexible Check-in": CalendarClock
}

const amenities = Object.keys(amenityIcons)

const pricingOptions = [
  { term: "Nightly", price: "$199", description: "Perfect for short trips and weekend getaways." },
  { term: "Weekly", price: "$1,200", description: "Save 15% when you stay for a full week." },
  { term: "Monthly", price: "$4,500", description: "Best value! Enjoy luxury living long-term." }
]

const galleryImages = [ann1, ann2, ann3, ann4, ann5, ann6]

const ApartmentDetails = () => {
  return (
    <section id="apartment-details" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-primary">Executive Suite</span>
          </h2>
          <div className="flex items-center justify-center space-x-1 mb-4">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <span className="font-semibold text-lg">5.0</span>
            <span className="text-muted-foreground ml-2">(120+ Reviews)</span>
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Experience the pinnacle of luxury living in our premium suite. Located in the heart of the city, this thoughtfully designed apartment offers everything you need for a comfortable, productive, and memorable stay.
          </p>
        </div>

        {/* Media Gallery - Image Grid followed by Video */}
        <div className="space-y-8 mb-16">
          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-elegant h-[240px] md:h-[300px] group">
                <img 
                  src={img} 
                  alt={`Apartment detail ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
            ))}
          </div>

          {/* Virtual Tour Video */}
          <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-luxury group h-[400px] md:h-[600px] bg-gray-900 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop" 
              alt="Video Thumbnail" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="relative z-10 flex flex-col items-center cursor-pointer hover:scale-110 transition-transform duration-500">
              <div className="w-24 h-24 rounded-full bg-primary/90 flex items-center justify-center mb-4 shadow-gold animate-pulse">
                <PlayCircle className="w-12 h-12 text-black" strokeWidth={2} />
              </div>
              <span className="text-white font-black tracking-[0.2em] uppercase text-sm md:text-base">Experience Virtual Tour</span>
            </div>
          </div>
        </div>

        {/* Amenities section */}
        <div className="mb-16">
          <h3 className="font-display text-3xl font-semibold mb-8 text-center">Premium Amenities</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {amenities.map((amenity) => {
              const Icon = amenityIcons[amenity as keyof typeof amenityIcons]
              return (
                <div key={amenity} className="flex items-center space-x-3 bg-background rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{amenity}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pricing Flexboxes */}
        <div className="mb-20 px-2 lg:px-0">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">Flexible <span className="text-primary">Stays</span></h3>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((option, idx) => (
              <Card key={idx} className={cn(
                "flex-1 flex flex-col p-8 rounded-[2rem] transition-luxury duration-500 hover:-translate-y-2",
                idx === 1 
                  ? "border-primary/50 border-2 bg-black text-white shadow-luxury scale-105 z-10" 
                  : "bg-white border-white/10 shadow-elegant"
              )}>
                <CardHeader className="p-0 mb-6">
                  <div className={cn(
                    "inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4",
                    idx === 1 ? "bg-primary text-black" : "bg-primary/10 text-primary"
                  )}>
                    {option.term}
                  </div>
                  <CardTitle className={cn(
                    "text-5xl font-black font-display flex items-baseline gap-2",
                    idx === 1 ? "text-white" : "text-black"
                  )}>
                    {option.price}
                    <span className={cn(
                      "text-sm font-normal uppercase tracking-widest",
                      idx === 1 ? "text-white/40" : "text-black/40"
                    )}>
                      / {option.term.toLowerCase().replace('ly', '')}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex flex-col flex-1">
                  <p className={cn(
                    "text-base leading-relaxed mb-8 italic",
                    idx === 1 ? "text-white/60" : "text-gray-500"
                  )}>
                    "{option.description}"
                  </p>
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <Button 
                      variant={idx === 1 ? "luxury" : "default"} 
                      className={cn(
                        "w-full h-12 rounded-full font-bold uppercase tracking-widest text-xs",
                        idx === 1 ? "" : "bg-black text-white hover:bg-black/90"
                      )}
                    >
                      Select {option.term}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 mb-8 p-10 bg-primary/5 rounded-3xl border border-primary/10 max-w-3xl mx-auto">
          <h3 className="font-display text-3xl font-semibold mb-4">Ready to Book Your Stay?</h3>
          <p className="text-muted-foreground text-lg mb-8">
            Contact us directly on WhatsApp to check availability, ask questions, or secure your reservation instantly.
          </p>
          <Button variant="luxury" size="xl" asChild className="w-full sm:w-auto h-14 px-10 text-lg shadow-luxury">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              Book via WhatsApp
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}

export default ApartmentDetails
