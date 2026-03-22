import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"
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
              <a 
                href="https://www.tiktok.com/@annsluxapartments?_r=1&_t=ZS-94ug9NGf2rV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-primary/10 rounded-full hover:bg-primary/20 transition-smooth group"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 text-primary group-hover:scale-110 transition-transform">
                  <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
                </svg>
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
              <a href="https://wa.me/233547944813" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-background transition-smooth">Book via WhatsApp</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-primary">Contact</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-muted-foreground">054 794 4813</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground">info@annsluxury.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground">
                  Ofankor 7 Days,<br />
                  Golden Gate Street, Accra
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