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
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleNavClick("home")}
            >
              <Coffee className="h-8 w-8 text-coffee" />
              <div>
                <h1 className="text-2xl font-bold text-coffee">Feels Coffee</h1>
                <p className="text-xs text-muted-foreground">Kigali</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-coffee",
                    activeSection === item.id ? "text-coffee" : "text-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <Button variant="hero" size="sm">
                Reserve Table
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleMenu} />
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l border-border shadow-xl">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <Coffee className="h-6 w-6 text-coffee" />
                  <div>
                    <h2 className="text-lg font-bold text-coffee">Feels Coffee</h2>
                    <p className="text-xs text-muted-foreground">Kigali</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-6">
                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        "w-full text-left py-3 px-4 rounded-lg text-base font-medium transition-colors",
                        activeSection === item.id 
                          ? "bg-accent-light text-accent" 
                          : "text-foreground hover:bg-secondary"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </nav>

              {/* Menu Footer */}
              <div className="p-6 border-t border-border space-y-4">
                <Button variant="hero" className="w-full">
                  Reserve Table
                </Button>
                <div className="space-y-2 text-sm text-muted-foreground">
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