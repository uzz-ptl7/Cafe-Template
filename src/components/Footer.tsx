import { Coffee, MapPin, Clock, Phone, Mail, Instagram, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  setActiveSection: (section: string) => void;
}

const Footer = ({ setActiveSection }: FooterProps) => {
  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "about", label: "About Us" },
    { id: "gallery", label: "Gallery" },
    { id: "location", label: "Location" },
    { id: "contact", label: "Contact" },
  ];

  const menuHighlights = [
    "Premium Coffee & Espresso",
    "Fresh Smoothies & Juices",
    "International Cuisine",
    "Signature Cocktails",
    "Breakfast All Day",
    "Terrace Dining"
  ];

  return (
    <footer className="bg-gradient-to-b from-secondary to-muted text-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
              <Coffee className="h-8 w-8 text-coffee" />
              <div>
                <h3 className="text-2xl font-bold">Feels Coffee</h3>
                <p className="text-sm text-muted-foreground">Kigali</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Where every bite and sip feels like home. Experience Kigali's coziest café 
              with premium coffee, diverse cuisine, and warm hospitality.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://instagram.com/feels_coffeexstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted-foreground/10 hover:bg-coffee/20 p-3 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setActiveSection(link.id)}
                    className="text-muted-foreground hover:text-coffee transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Highlights */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-6">What We Offer</h4>
            <ul className="space-y-3">
              {menuHighlights.map((item, index) => (
                <li key={index} className="text-muted-foreground text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-6">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <MapPin className="h-5 w-5 text-coffee mt-0.5" />
                <div>
                  <p className="text-foreground">
                    KG-628 Street, Rugando<br />
                    Kigali, Rwanda
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Clock className="h-5 w-5 text-coffee" />
                <p className="text-foreground">
                  Daily: 07:30 - 23:00
                </p>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Phone className="h-5 w-5 text-coffee" />
                <p className="text-foreground">
                  +250 123 456 789
                </p>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Mail className="h-5 w-5 text-coffee" />
                <p className="text-foreground">
                  hello@feelscoffee.rw
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
            <p className="text-muted-foreground mb-6">
              Follow us on social media for daily specials, events, and coffee inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-border text-foreground hover:bg-coffee/20 hover:text-coffee hover:border-coffee"
                onClick={() => setActiveSection("contact")}
              >
                Book a Table
              </Button>
              <Button 
                variant="outline" 
                className="border-border text-foreground hover:bg-coffee/20 hover:text-coffee hover:border-coffee"
                onClick={() => setActiveSection("menu")}
              >
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2024 Feels Coffee Kigali. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-coffee" />
              <span>in Kigali</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;