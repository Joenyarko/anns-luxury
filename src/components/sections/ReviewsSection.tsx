import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import review1 from "@/assets/anns-review1.png"
import review2 from "@/assets/anns-review2.png"
import review3 from "@/assets/anns-review3.png"

const reviews = [
  {
    id: 1,
    name: "Emmanuel “Kay” Amoako",
    role: "Business Traveler",
    image: review1,
    quote: "My stay here was genuinely refreshing. The apartment felt warm and welcoming the moment I walked in - clean, cozy, and set up with everything I needed. The pool access was a sweet bonus; I ended most evenings with a quiet swim, which made the whole trip feel a bit more like a getaway. What really stood out, though, was the host. Super responsive, always just a message away, and quick to sort out anything that popped up. It made the entire stay feel smooth and stress-free.",
    rating: 5
  },
  {
    id: 2,
    name: "Stephen Paamo",
    role: "Leisure Guest",
    image: review2,
    quote: "I spent four wonderful days at Ann’s apartment in Accra, and it truly felt like a home away from home. The apartment was well-equipped, offering all the essentials and more—from constant electricity to a comfortable and cozy living space. Everything I needed was available, and the overall experience was smooth and relaxing.",
    rating: 5
  },
  {
    id: 3,
    name: "Abdulai Barrie",
    role: "Conference Attendee",
    image: review3,
    quote: "I want to appreciate all the staff's at Ann's luxurious appartement they made our stay felt like home and we experience home. The place was worth staying as is clean, enough water, wifi, AC and more especially their transportation service as we went for a conference at the Accra international conference center they were so helpful as anything we need they try for us to be comfortable.",
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
