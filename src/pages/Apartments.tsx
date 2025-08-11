import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Wifi, Car, Utensils, Dumbbell, Users, Bed } from "lucide-react"
import { Link } from "react-router-dom"

const apartments = [
  {
    id: 1,
    name: "Executive Suite",
    price: 299,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    amenities: ["WiFi", "Parking", "Kitchen", "Gym"],
    bedrooms: 2,
    guests: 4,
    description: "Spacious executive suite with panoramic city views and premium amenities"
  },
  {
    id: 2,
    name: "Premium Penthouse",
    price: 499,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    amenities: ["WiFi", "Parking", "Kitchen", "Gym"],
    bedrooms: 3,
    guests: 6,
    description: "Luxurious penthouse with private terrace and stunning views"
  },
  {
    id: 3,
    name: "Deluxe Studio",
    price: 199,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    amenities: ["WiFi", "Kitchen", "Gym"],
    bedrooms: 1,
    guests: 2,
    description: "Modern studio apartment in the heart of the city"
  },
  {
    id: 4,
    name: "Luxury Villa",
    price: 699,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    amenities: ["WiFi", "Parking", "Kitchen", "Gym"],
    bedrooms: 4,
    guests: 8,
    description: "Exclusive villa with private pool and garden"
  },
  {
    id: 5,
    name: "Business Suite",
    price: 249,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    amenities: ["WiFi", "Parking", "Kitchen"],
    bedrooms: 1,
    guests: 2,
    description: "Perfect for business travelers with office space"
  },
  {
    id: 6,
    name: "Family Apartment",
    price: 349,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
    amenities: ["WiFi", "Parking", "Kitchen", "Gym"],
    bedrooms: 2,
    guests: 5,
    description: "Spacious family-friendly apartment with kid-safe amenities"
  }
]

const amenityIcons = {
  "WiFi": Wifi,
  "Parking": Car,
  "Kitchen": Utensils,
  "Gym": Dumbbell
}

const Apartments = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Our <span className="text-primary">Apartments</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from our collection of premium apartments, each designed to provide 
              the ultimate luxury living experience.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-4">
                <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                  <option>All Types</option>
                  <option>Studio</option>
                  <option>1 Bedroom</option>
                  <option>2+ Bedrooms</option>
                </select>
                <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                  <option>Price Range</option>
                  <option>$100 - $200</option>
                  <option>$200 - $400</option>
                  <option>$400+</option>
                </select>
                <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                  <option>Amenities</option>
                  <option>Parking</option>
                  <option>Gym</option>
                  <option>Kitchen</option>
                </select>
              </div>
              <div className="text-muted-foreground">
                Showing {apartments.length} apartments
              </div>
            </div>
          </div>
        </section>

        {/* Apartments Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apartments.map((apartment, index) => (
                <Card key={apartment.id} className="group overflow-hidden shadow-elegant hover:shadow-luxury transition-luxury animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
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
                    <p className="text-muted-foreground mb-4 text-sm">{apartment.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Bed className="h-4 w-4" />
                        <span>{apartment.bedrooms} bed{apartment.bedrooms > 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{apartment.guests} guests</span>
                      </div>
                    </div>

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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Apartments