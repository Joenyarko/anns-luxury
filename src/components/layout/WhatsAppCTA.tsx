import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const WhatsAppCTA = () => {
  return (
    <div className="fixed bottom-6 right-4 md:bottom-10 md:right-10 z-[100] animate-fade-in flex items-center justify-center">
      {/* Pulse background for extra visibility */}
      <div className="absolute w-20 h-20 md:w-28 md:h-28 bg-[#25D366]/20 rounded-full animate-ping" />
      
      <Button
        variant="default"
        size="icon"
        asChild
        className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#25D366] hover:bg-[#20ba59] shadow-[0_15px_45px_rgba(37,211,102,0.5)] md:shadow-[0_20px_60px_rgba(37,211,102,0.6)] hover:shadow-[0_25px_70px_rgba(37,211,102,0.8)] text-white border-none transform hover:scale-110 active:scale-95 transition-all duration-300 group z-10"
      >
        <a 
          href="https://wa.me/233543958978" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-full h-full"
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-9 h-9 md:w-14 md:h-14 fill-white drop-shadow-md"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          
          {/* Tooltip-style label */}
          <span className="absolute right-full mr-8 px-6 py-3 bg-black/90 backdrop-blur-md text-white text-sm font-bold rounded-2xl opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-x-2 whitespace-nowrap pointer-events-none hidden md:block shadow-2xl">
            Start a Conversation
          </span>
        </a>
      </Button>
    </div>
  )
}

export default WhatsAppCTA
