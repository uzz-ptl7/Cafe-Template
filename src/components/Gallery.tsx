import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All" },
    { id: "interior", name: "Interior" },
    { id: "food", name: "Food" },
    { id: "drinks", name: "Drinks" },
    { id: "atmosphere", name: "Atmosphere" }
  ];

  // Placeholder gallery items - in real implementation, these would be actual photos
  const galleryItems = [
    { id: 1, category: "interior", title: "Cozy Seating Area", description: "Comfortable spaces for work and relaxation" },
    { id: 2, category: "drinks", title: "Signature Coffee", description: "Our premium coffee creations" },
    { id: 3, category: "food", title: "Fresh Breakfast", description: "Morning delights to start your day" },
    { id: 4, category: "atmosphere", title: "Terrace Views", description: "Beautiful outdoor dining experience" },
    { id: 5, category: "interior", title: "Modern Design", description: "Contemporary café aesthetics" },
    { id: 6, category: "drinks", title: "Tropical Smoothies", description: "Fresh fruit smoothie creations" },
    { id: 7, category: "food", title: "Gourmet Burgers", description: "Handcrafted burger perfection" },
    { id: 8, category: "atmosphere", title: "Evening Ambiance", description: "Perfect for cocktails and conversation" },
    { id: 9, category: "drinks", title: "Cocktail Hour", description: "Expertly mixed signature cocktails" },
    { id: 10, category: "food", title: "International Cuisine", description: "Diverse flavors from around the world" },
    { id: 11, category: "interior", title: "Work-Friendly Spaces", description: "Perfect spots for productivity" },
    { id: 12, category: "atmosphere", title: "Community Gathering", description: "Where connections are made" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee mb-6">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a taste of the Feels Coffee experience through our visual journey. 
            From our cozy interiors to our delicious offerings.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-coffee text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-coffee/10"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                {/* Placeholder for image - in real implementation, this would be an actual image */}
                <div className="aspect-square bg-gradient-to-br from-coffee/20 via-warm/30 to-accent-light/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h4 className="font-semibold text-coffee mb-2 group-hover:text-coffee/80 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-coffee">
                    {filters.find(f => f.id === item.category)?.name}
                  </Badge>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-coffee/0 group-hover:bg-coffee/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center">
                    <p className="font-medium">View Full Size</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Instagram Integration */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-coffee mb-6">
            Follow Us on Instagram
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay updated with our latest creations, events, and the daily life at Feels Coffee. 
            Follow @feels_coffeexstudio for behind-the-scenes moments and coffee inspiration.
          </p>
          
          {/* Instagram Feed Placeholder */}
          <div className="bg-gradient-to-r from-coffee/10 to-accent-light/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-coffee/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📸</span>
              </div>
              <h4 className="font-semibold text-coffee mb-2">@feels_coffeexstudio</h4>
              <p className="text-muted-foreground mb-6">
                Connect with us on Instagram to see our latest posts and stories
              </p>
              <a 
                href="https://instagram.com/feels_coffeexstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-coffee text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-coffee/90 transition-colors"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;