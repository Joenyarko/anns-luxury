import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const reviews = [
  {
    id: 1,
    name: "Guest Name 1",
    role: "Business Traveler",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote: "Place your client's testimonial here. Use this space to highlight their positive experience at Ann's Luxurious Apartments.",
    rating: 5
  },
  {
    id: 2,
    name: "Guest Name 2",
    role: "Leisure Guest",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote: "Another wonderful review from a satisfied customer. Mention specific details they might have loved about the property or service.",
    rating: 5
  },
  {
    id: 3,
    name: "Guest Name 3",
    role: "Family Stay",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    quote: "A third testimonial placeholder. This helps build trust with potential guests by showing real feedback from previous stays.",
    rating: 5
  }
]

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Quote size={14} className="text-primary" />
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Testimonials</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">What People Say</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={review.id}
              className={cn(
                "bg-white p-8 rounded-3xl shadow-elegant border border-border/50 hover:border-primary/30 transition-luxury group relative overflow-hidden",
                "animate-slide-up"
              )}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={120} className="text-primary" />
              </div>

              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary mr-1" />
                  ))}
                </div>

                <p className="text-muted-foreground italic text-lg mb-8 leading-relaxed">
                  "{review.quote}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 p-0.5">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-full h-full object-cover rounded-full bg-secondary"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">{review.name}</h4>
                    <p className="text-primary text-xs font-bold uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
