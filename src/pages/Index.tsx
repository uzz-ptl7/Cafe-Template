import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Handle smooth scrolling to sections
  useEffect(() => {
    if (activeSection === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(activeSection);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  }, [activeSection]);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["menu", "about", "gallery", "location", "contact"];
      const scrollPosition = window.scrollY + 120;

      // Check if we're at the top for home section
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // Check other sections
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <Hero setActiveSection={setActiveSection} />
        <Menu />
        <About />
        <Gallery />
        <Location />
        <Contact />
      </main>
      
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
};

export default Index;
