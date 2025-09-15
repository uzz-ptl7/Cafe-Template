import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Coffee, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "about", label: "About Us" },
    { id: "gallery", label: "Gallery" },
    { id: "location", label: "Location & Hours" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-default hover:scale-105 transition-transform duration-500"
              onClick={() => handleNavClick("home")}
            >
              <Coffee className="h-8 w-8 text-coffee" />
              <div>
                <h1 className="text-2xl font-bold text-coffee">Coffee</h1>
                <p className="text-xs text-muted-foreground">Kigali</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-coffee relative py-2",
                    activeSection === item.id 
                      ? "text-coffee font-semibold before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-coffee before:rounded-full" 
                      : "text-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="hero" 
                size="sm"
                onClick={() => handleNavClick("contact")}
                className="hover:border-coffee hover:border hover:bg-transparent hover:text-primary text-primary-foreground bg-coffee rounded-lg shadow-none transition-all duration-700"
              >
                Reserve Table
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleMenu} />
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l border-border shadow-xl">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center gap-2 cursor-default">
                  <Coffee className="h-6 w-6 text-coffee" />
                  <div>
                    <h2 className="text-lg font-bold text-coffee">Feels Coffee</h2>
                    <p className="text-xs text-muted-foreground">Kigali</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-4">
                <div className="space-y-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        "w-full text-left py-2 px-3 rounded-lg text-base font-medium transition-all duration-300",
                        activeSection === item.id
                          ? "text-coffee bg-coffee/10 font-semibold"
                          : "text-foreground hover:text-coffee hover:bg-secondary"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </nav>

              {/* Menu Footer */}
              <div className="p-4 border-t border-border space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleNavClick("contact")}
                >
                  Reserve A Table
                </Button>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>KG-628 St, Rugando, Kigali</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Daily 07:30 - 23:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;