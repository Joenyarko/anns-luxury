import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import airbnbbed2 from "@/assets/Anns-luxury/airbnbbed2.jpg"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2"

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);

    // Show loading alert
    Swal.fire({
      title: 'Sending Inquiry...',
      text: 'Please wait while we process your request.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const result = await emailjs.sendForm(
        'service_mo4u974',
        'template_tem73d5',
        form.current,
        '7Idb3lc2PH_BMLnAM'
      );

      if (result.text === 'OK') {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for your inquiry. We will get back to you shortly.',
          confirmButtonColor: '#0F172A',
        });
        form.current.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'Something went wrong. Please try again or contact us via WhatsApp.',
        confirmButtonColor: '#0F172A',
      });
    } finally {
      setIsSending(false);
    }
  };

    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        
        {/* Contact Hero */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={airbnbbed2} 
              alt="Contact Us" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 text-center text-white px-4 pt-32 md:pt-40 animate-fade-in">
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-sm sm:text-base md:text-xl text-white/90 max-w-2xl mx-auto">
              We're here to help. Reach out to us for bookings, inquiries, or any assistance you need.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Contact Information */}
              <div className="lg:w-1/3 space-y-8 animate-slide-up">
                <div>
                  <h2 className="font-display text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Ready to book your stay or have some questions? Our team is available and ready to assist you. Connect with us directly via WhatsApp for the fastest response.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone / WhatsApp</h3>
                      <p className="text-muted-foreground">054 794 4813</p>
                      <a href="https://wa.me/233547944813" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-lemon hover:underline text-sm font-medium mt-1 inline-block transition-colors">
                        Message us on WhatsApp
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email directly</h3>
                      <p className="text-muted-foreground">annsluxapartments@gmail.com</p>
                      <a href="mailto:annsluxapartments@gmail.com" className="text-primary hover:text-lemon hover:underline text-sm font-medium mt-1 inline-block transition-colors">
                        Send an email
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Visit our location</h3>
                      <p className="text-muted-foreground">
                        Ofankor 7 Days,<br />
                        Golden Gate Street, Accra
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form OR Map Placeholder */}
              <div className="lg:w-2/3 animate-scale-in">
                <div className="bg-white rounded-3xl shadow-elegant p-8 border border-border">
                  <h3 className="font-display text-2xl font-bold mb-6">Direct Booking Inquiry</h3>
                  <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <input name="first_name" type="text" required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-lemon focus:border-lemon transition-all outline-none" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <input name="last_name" type="text" required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-lemon focus:border-lemon transition-all outline-none" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <input name="user_email" type="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <input 
                          name="user_phone" 
                          type="tel" 
                          required 
                          pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                          onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.value = target.value.replace(/[^0-9+\-() ]/g, '');
                          }}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" 
                          placeholder="+233 54 794 4813" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none" placeholder="How can we help you? Let us know your planned dates..."></textarea>
                    </div>
                    <Button 
                      type="submit" 
                      variant="luxury" 
                      size="xl" 
                      className="w-full gap-2 mt-4 text-lg"
                      disabled={isSending}
                    >
                      <Send size={18} /> {isSending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
              </div>
              
            </div>
          </div>
        </div>
      </section>

        {/* Full-Width Google Map Section */}
        <section className="w-full bg-secondary/30 pt-4">
          <div className="w-full h-[450px] md:h-[600px] relative overflow-hidden shadow-inner grayscale-[20%] hover:grayscale-0 transition-luxury duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4381274187663!2d-0.26697529999999997!3d5.6495788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9f0476ee4851%3A0x5854ac85ed4011cd!2sAnn&#39;s%20Luxurious%20Apartments!5e0!3m2!1sen!2sgh!4v1773704371020!5m2!1sen!2sgh" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            {/* Top/Bottom luxury divider lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-primary/20" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-primary/20" />
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  )
}

export default Contact
