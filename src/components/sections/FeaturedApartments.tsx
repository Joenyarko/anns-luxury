import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Wifi, Car, Utensils, Dumbbell } from "lucide-react"
import { Link } from "react-router-dom"

const featuredApartments = [
  {
    id: 1,
    name: "Executive Suite",
    price: 299,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    amenities: ["WiFi", "Parking", "Kitchen", "Gym"],
    description: "Spacious executive suite with panoramic city views"
  },
  {
    id: 2,
    name: "Premium Penthouse",
    price: 499,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    amenities: ["WiFi", "Parking", "Kitchen", "Gym"],
    description: "Luxurious penthouse with private terrace"
  },
  {
    id: 3,
    name: "Deluxe Studio",
    price: 199,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    amenities: ["WiFi", "Kitchen", "Gym"],
    description: "Modern studio apartment in the heart of the city"
  }
]

const amenityIcons = {
  "WiFi": Wifi,
  "Parking": Car,
  "Kitchen": Utensils,
  "Gym": Dumbbell
}

const FeaturedApartments = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Apartments</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our most sought-after luxury apartments, each offering unique amenities 
            and breathtaking views in premium locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredApartments.map((apartment, index) => (
            <Card key={apartment.id} className="group overflow-hidden shadow-elegant hover:shadow-luxury transition-luxury animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={apartment.image} 
                  alt={apartment.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-luxury"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
                  ${apartment.price}/night
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-semibold text-sm">{apartment.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">{apartment.name}</h3>
                <p className="text-muted-foreground mb-4">{apartment.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {apartment.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity as keyof typeof amenityIcons]
                    return (
                      <div key={amenity} className="flex items-center space-x-1 bg-secondary rounded-full px-3 py-1">
                        <Icon className="h-3 w-3 text-primary" />
                        <span className="text-xs font-medium">{amenity}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="flex space-x-2">
                  <Button variant="default" size="sm" asChild className="flex-1">
                    <Link to={`/apartments/${apartment.id}`}>View Details</Link>
                  </Button>
                  <Button variant="luxury" size="sm" asChild className="flex-1">
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="elegant" size="lg" asChild>
            <Link to="/apartments">View All Apartments</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedApartments