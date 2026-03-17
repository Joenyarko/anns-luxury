import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Phone, Mail, Instagram, Facebook, Twitter, Youtube, Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import annLogo from "@/assets/ann-logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const isDarkPage = location.pathname === "/" || location.pathname === "/about" || location.pathname === "/contact"
  
  const textColorClass = (isScrolled || isMenuOpen) 
    ? "text-white hover:text-primary" 
    : (isDarkPage ? "text-white/90 hover:text-white" : "text-gray-900 hover:text-primary")
    
  const activeTextColorClass = (isScrolled || isMenuOpen)
    ? "text-primary font-semibold"
    : (isDarkPage ? "text-white font-semibold" : "text-primary font-semibold")

  const logoClass = "h-14 sm:h-16 md:h-24 lg:h-32 w-auto object-contain transition-all duration-300 drop-shadow-2xl"

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Row 1: Top Bar (Gold) */}
      <div className="bg-primary py-2 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center text-[10px] md:text-xs font-bold text-black uppercase tracking-wider">
          <div className="flex items-center space-x-4 md:space-x-6">
            <a href="tel:+1234567890" className="flex items-center hover:opacity-70 transition-opacity">
              <Phone size={14} className="mr-1.5" />
              <span className="hidden sm:inline">+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@annsgoldenstays.com" className="flex items-center hover:opacity-70 transition-opacity">
              <Mail size={14} className="mr-1.5" />
              <span className="hidden sm:inline">info@annsgoldenstays.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-3 md:space-x-4">
            <a href="#" className="hover:opacity-70 transition-opacity"><Youtube size={14} /></a>
            <a href="#" className="hover:opacity-70 transition-opacity"><Instagram size={14} /></a>
            <a href="#" className="hover:opacity-70 transition-opacity"><Twitter size={14} /></a>
            <a href="#" className="hover:opacity-70 transition-opacity"><Facebook size={14} /></a>
          </div>
        </div>
      </div>

      {/* Row 2: Navbar */}
      <div 
        className={cn(
          "w-full transition-all duration-300",
          isScrolled || isMenuOpen 
            ? "bg-[#1A1A1A] backdrop-blur-md border-b border-white/5 shadow-lg py-2" 
            : "bg-transparent border-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-20 sm:h-16">
            {/* Logo with transparent background - Increased Size */}
            <div className="transition-luxury hover:scale-105">
              <Link to="/" className="flex items-center">
                <img src={annLogo} alt="Anns Luxurious Apartments" className={logoClass} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10 px-10 py-2.5 border border-primary/30 rounded-full bg-white/5 backdrop-blur-md">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "font-medium transition-luxury relative",
                    isActive(item.href) ? activeTextColorClass : textColorClass
                  )}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className={cn(
                      "absolute -bottom-1 left-0 w-full h-0.5 rounded-full transition-colors",
                      (isScrolled || isMenuOpen || !isDarkPage) ? "bg-primary" : "bg-white"
                    )} />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant={isScrolled ? "luxury" : "default"} className={cn("rounded-full font-bold uppercase tracking-wider text-black", (isScrolled || isDarkPage) ? "bg-primary hover:bg-primary/90" : "bg-white")} asChild>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Book Now</a>
              </Button>
            </div>

            {/* Mobile Menu Button & Call Now */}
            <div className="flex items-center space-x-2 lg:hidden">
              <Button variant="luxury" size="sm" asChild className="h-8 px-3 text-[10px] rounded-full font-bold uppercase tracking-wider">
                <a href="https://wa.me/233543958978" target="_blank" rel="noopener noreferrer">Call Now</a>
              </Button>
              <button
                className={cn("p-2 transition-colors", (isScrolled || isMenuOpen) ? "text-white" : (isDarkPage ? "text-white" : "text-gray-900"))}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen Overlay - Moved to top level of header */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[200] bg-[#000000] flex flex-col animate-in fade-in zoom-in duration-300">
          <div className="flex justify-end p-6">
            <button
              className="p-2 text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <nav className="flex flex-col space-y-8 w-full max-w-sm">
              {navigation.map((item, idx) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-2xl font-display font-bold transition-all text-center py-2",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  )}
                  style={{ animationDelay: `${idx * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-12 text-center">
                <Button variant="luxury" size="xl" asChild className="w-full h-16 text-xl rounded-full shadow-gold uppercase tracking-[0.2em] font-black">
                  <a href="https://wa.me/233543958978" target="_blank" rel="noopener noreferrer">Book Now</a>
                </Button>
                
                <div className="mt-12 flex justify-center space-x-8 text-white/40">
                  <Instagram size={24} className="hover:text-primary transition-colors cursor-pointer" />
                  <Facebook size={24} className="hover:text-primary transition-colors cursor-pointer" />
                  <Twitter size={24} className="hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header