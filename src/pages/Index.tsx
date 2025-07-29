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

  // Handle smooth scrolling to sections only when navigation is clicked
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      const homeElement = document.getElementById("home");
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "about", "gallery", "location", "contact"];
      const scrollPosition = window.scrollY + 120;

      // Check all sections including home
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
      <Header 
        activeSection={activeSection} 
        setActiveSection={(section) => {
          setActiveSection(section);
          scrollToSection(section);
        }} 
      />
      
      <main>
        <Hero setActiveSection={(section) => {
          setActiveSection(section);
          scrollToSection(section);
        }} />
        <Menu />
        <About />
        <Gallery />
        <Location />
        <Contact />
      </main>
      
      <Footer setActiveSection={(section) => {
        setActiveSection(section);
        scrollToSection(section);
      }} />
    </div>
  );
};

export default Index;
