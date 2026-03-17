import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import annLogo from "@/assets/ann-logo.png"

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
              <img src={annLogo} alt="Anns Luxurious Apartments" className="h-24 w-auto mb-0 drop-shadow-lg" />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Experience luxury living redefined. Our premium serviced apartments offer unparalleled comfort, 
              sophisticated design, and exceptional service in prime locations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-smooth">
                <Facebook size={20} className="text-primary" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-smooth">
                <Instagram size={20} className="text-primary" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-smooth">
                <Twitter size={20} className="text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-muted-foreground hover:text-background transition-smooth">Home</Link>
              <Link to="/about" className="text-muted-foreground hover:text-background transition-smooth">About Us</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-background transition-smooth">Contact</Link>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-background transition-smooth">Book via WhatsApp</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-primary">Contact</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground">info@annsluxury.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground">
                  123 Luxury Avenue<br />
                  Premium District, City
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Anns Luxurious Apartments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer