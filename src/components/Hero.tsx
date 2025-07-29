import { Button } from "@/components/ui/button";
import { ArrowDown, Coffee, Wifi, Users } from "lucide-react";
import heroImage from "@/assets/hero-coffee-shop.jpg";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Feels Coffee interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee/80 via-coffee/60 to-coffee/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Where every bite and sip
            <span className="block text-warm-foreground">feels like home</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience Kigali's coziest café with strong Wi-Fi, friendly service, 
            and diverse international & Rwandan flavors on our beautiful terrace.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Coffee className="h-6 w-6 text-warm-foreground" />
            <span className="text-primary-foreground font-medium">Premium Coffee</span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Wifi className="h-6 w-6 text-warm-foreground" />
            <span className="text-primary-foreground font-medium">Strong Wi-Fi</span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Users className="h-6 w-6 text-warm-foreground" />
            <span className="text-primary-foreground font-medium">Cozy Atmosphere</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open("https://drive.google.com/file/d/1JlKq7DD127b6hLgztV6aUefriTxR5_aK/view?fbclid=PAZXh0bgNhZW0CMTEAAaf-W6KFggddtJgKXIV0tQhSy6dC0XSN1xmPBtYz0dBVgy7gYXyrLbMBMc5OVA_aem_IPdjro9maaEbFm57zTBTXA", "_blank")}
            className="text-lg px-8 py-6"
          >
            View Full Menu
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setActiveSection("contact")}
            className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-coffee"
          >
            Book a Table
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary-foreground/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;