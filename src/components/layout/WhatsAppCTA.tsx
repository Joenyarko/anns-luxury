const WhatsAppCTA = () => {
  return (
    <div className="fixed bottom-6 right-4 md:bottom-10 md:right-10 z-[100] animate-fade-in flex items-center justify-center">
      <a 
        href="https://wa.me/233543958978" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20ba59] shadow-xl hover:shadow-2xl text-white transform hover:scale-110 active:scale-95 transition-all duration-300 group z-10 p-2.5 md:p-3"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-full h-full fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C6.505 2 2.002 6.503 2 12.04c0 1.735.448 3.42 1.305 4.908L2 22l5.19-.136a10.038 10.038 0 0 0 4.85 1.252c5.535 0 10.037-4.503 10.04-10.04.002-2.68-1.04-5.202-2.934-7.098A10.016 10.016 0 0 0 12.04 2Zm5.783 14.397c-.25.643-1.442 1.233-1.986 1.309-.49.07-1.12.13-1.785-.11-4.045-1.447-6.685-5.592-6.885-5.862-.2-.27-1.64-2.185-1.64-4.167 0-1.982 1.034-2.956 1.405-3.344.37-.388.81-.486 1.08-.486.273 0 .54.004.773.013.242.01.558-.09.873.666.315.757 1.08 2.636 1.173 2.827.093.19.156.413.03.664-.125.252-.188.413-.374.63-.188.217-.395.487-.565.653-.19.185-.386.388-.166.764.22.376.974 1.624 2.088 2.618 1.435 1.282 2.645 1.68 3.018 1.865.372.185.594.156.814-.094.218-.25.938-1.096 1.19-1.472.25-.376.5-.313.844-.188.344.126 2.185 1.033 2.56 1.22.375.188.625.282.714.44.09.157.09.91-.16 1.552z"/>
        </svg>
        
        {/* Tooltip-style label */}
        <span className="absolute right-full mr-8 px-6 py-3 bg-black/90 backdrop-blur-md text-white text-base font-bold rounded-2xl opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0 translate-x-4 whitespace-nowrap pointer-events-none hidden md:block shadow-2xl border border-white/10">
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  )
}

export default WhatsAppCTA
