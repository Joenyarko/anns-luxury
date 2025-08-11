import { Button } from "@/components/ui/button"
import { Calendar, Users, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import heroApartment from "@/assets/hero-apartment.jpg"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroApartment} 
          alt="Luxury Apartment Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Luxury Living
            <span className="block text-primary">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience premium serviced apartments with exceptional amenities, 
            sophisticated design, and unparalleled service in prime locations.
          </p>
          
          {/* Quick Booking Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto shadow-luxury animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="text-left">
                <label className="block text-sm font-medium mb-2 text-white/80">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-primary" />
                  <input 
                    type="date" 
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="text-left">
                <label className="block text-sm font-medium mb-2 text-white/80">Check-out</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-primary" />
                  <input 
                    type="date" 
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="text-left">
                <label className="block text-sm font-medium mb-2 text-white/80">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-primary" />
                  <select className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:ring-2 focus:ring-primary focus:border-primary">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4+ Guests</option>
                  </select>
                </div>
              </div>
              
              <Button variant="hero" size="lg" asChild className="h-12">
                <Link to="/apartments">
                  Search Apartments
                </Link>
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button variant="luxury" size="xl" asChild>
              <Link to="/apartments">Explore Apartments</Link>
            </Button>
            <Button variant="elegant" size="xl" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection