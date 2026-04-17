import { Star, Quote, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import review1 from "@/assets/Anns-luxury/customer1.png"
import review2 from "@/assets/Anns-luxury/anns-review2.png"
import review3 from "@/assets/Anns-luxury/anns-review3.png"

const reviews = [
  {
    id: 1,
    name: "Asabea Dagrou",
    role: "Happy Guest",
    image: review1,
    quote: "I recently had the pleasure of staying at Ann’s Luxurious Apartments, and it was an exceptional experience from start to finish. The apartment was beautifully furnished, spotlessly clean, and equipped with all the amenities needed for a comfortable stay. The decor was elegant yet cozy, creating a welcoming atmosphere that made me feel right at home.\n\nThe location was perfect—not far from major attractions, restaurants, and shopping centers, yet peaceful enough to provide a relaxing retreat. The host was incredibly hospitable and responsive, ensuring that all my needs were met promptly.\n\nOne of the highlights was the attention to detail, from the plush bedding to the well-stocked kitchen. It truly felt like a home away from home. I highly recommend Ann’s Luxurious Apartments to anyone looking for a top-tier stay, whether for a short getaway or an extended visit. I will definitely be returning!",
    rating: 5
  },
  {
    id: 2,
    name: "Stephen Paamo",
    role: "Leisure Guest",
    image: review2,
    quote: "I spent four wonderful days at Ann’s apartment in Accra, and it truly felt like a home away from home. The apartment was well-equipped, offering all the essentials and more—from constant electricity to a comfortable and cozy living space.\n\nEverything I needed was available, and the overall experience was smooth and relaxing. I would gladly stay here again and highly recommend it to anyone visiting Accra.",
    rating: 5
  },
  {
    id: 3,
    name: "Abdulai Barrie",
    role: "Conference Attendee",
    image: review3,
    quote: "I want to appreciate all the staff's at Ann's luxurious appartement they made our stay felt like home and we experience home. The place was worth staying as is clean, enough water, wifi, AC and more especially their transportation service as we went for a conference at the Accra international conference center they were so helpful as anything we need they try for us to be comfortable and all my colleagues were happy with the stay too. And my kudos to madam Ann's she was always available as a host .... And see you guys soon as promised",
    rating: 5
  }
]

const ReviewCard = ({ review, idx }: { review: typeof reviews[0], idx: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const wordLimit = 25
  const words = review.quote.split(' ')
  const isLong = words.length > wordLimit
  const displayQuote = isExpanded ? review.quote : words.slice(0, wordLimit).join(' ') + (isLong ? '...' : '')

  return (
    <div 
      className={cn(
        "bg-white p-8 rounded-3xl shadow-elegant border border-border/50 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden flex flex-col h-full",
        "animate-slide-up"
      )}
      style={{ animationDelay: `${idx * 150}ms` }}
    >
      {/* Floating Quote Icon */}
      <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
        <Quote size={120} className="text-primary" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex mb-6">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-[#E2FF4A] text-[#E2FF4A] mr-1" />
          ))}
        </div>

        <div className="flex-1">
          <p className="text-muted-foreground italic text-lg mb-6 leading-relaxed flex-grow whitespace-pre-line">
            "{displayQuote}"
          </p>
          
          {isLong && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:text-lemon transition-colors mb-8 text-sm not-italic font-bold flex items-center gap-1 group/btn"
            >
              {isExpanded ? (
                <>Show less <ChevronUp size={14} className="group-hover/btn:-translate-y-0.5 transition-transform" /></>
              ) : (
                <>Read more <ChevronDown size={14} className="group-hover/btn:translate-y-0.5 transition-transform" /></>
              )}
            </button>
          )}
        </div>

        <div className="flex items-center space-x-4 mt-auto pt-6 border-t border-border/10">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#E2FF4A]/20 p-0.5 bg-white shrink-0 shadow-sm">
            <img 
              src={review.image} 
              alt={review.name} 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-display font-bold text-lg truncate">{review.name}</h4>
            <p className="text-primary text-[10px] font-bold uppercase tracking-wider">{review.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/5 rounded-full mb-4 border border-primary/10">
            <Quote size={14} className="text-primary" />
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">Testimonials</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight">What Our Guests Say</h2>
          <div className="w-24 h-1.5 bg-[#E2FF4A] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review, idx) => (
            <ReviewCard key={review.id} review={review} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
