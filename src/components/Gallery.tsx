import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import gallery images
import interior1 from "@/assets/gallery-interior-1.jpg";
import interior2 from "@/assets/gallery-interior-2.jpg";
import interior3 from "@/assets/gallery-interior-3.jpg";
import drinks1 from "@/assets/gallery-drinks-1.jpg";
import drinks2 from "@/assets/gallery-drinks-2.jpg";
import drinks3 from "@/assets/gallery-drinks-3.jpg";
import food1 from "@/assets/gallery-food-1.jpg";
import food2 from "@/assets/gallery-food-2.jpg";
import food3 from "@/assets/gallery-food-3.jpg";
import atmosphere1 from "@/assets/gallery-atmosphere-1.jpg";
import atmosphere2 from "@/assets/gallery-atmosphere-2.jpg";
import atmosphere3 from "@/assets/gallery-atmosphere-3.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All" },
    { id: "interior", name: "Interior" },
    { id: "food", name: "Food" },
    { id: "drinks", name: "Drinks" },
    { id: "atmosphere", name: "Atmosphere" }
  ];

  // Gallery items with actual images
  const galleryItems = [
    { id: 1, category: "interior", title: "Cozy Seating Area", description: "Comfortable spaces for work and relaxation", image: interior1 },
    { id: 2, category: "drinks", title: "Signature Coffee", description: "Our premium coffee creations", image: drinks1 },
    { id: 3, category: "food", title: "Fresh Breakfast", description: "Morning delights to start your day", image: food1 },
    { id: 4, category: "atmosphere", title: "Terrace Views", description: "Beautiful outdoor dining experience", image: atmosphere1 },
    { id: 5, category: "interior", title: "Modern Design", description: "Contemporary café aesthetics", image: interior2 },
    { id: 6, category: "drinks", title: "Tropical Smoothies", description: "Fresh fruit smoothie creations", image: drinks2 },
    { id: 7, category: "food", title: "Gourmet Burgers", description: "Handcrafted burger perfection", image: food2 },
    { id: 8, category: "atmosphere", title: "Evening Ambiance", description: "Perfect for cocktails and conversation", image: atmosphere2 },
    { id: 9, category: "drinks", title: "Cocktail Hour", description: "Expertly mixed signature cocktails", image: drinks3 },
    { id: 10, category: "food", title: "International Cuisine", description: "Diverse flavors from around the world", image: food3 },
    { id: 11, category: "interior", title: "Work-Friendly Spaces", description: "Perfect spots for productivity", image: interior3 },
    { id: 12, category: "atmosphere", title: "Community Gathering", description: "Where connections are made", image: atmosphere3 }
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
                {/* Gallery Image */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-coffee">
                    {filters.find(f => f.id === item.category)?.name}
                  </Badge>
                </div>

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/80">
                    {item.description}
                  </p>
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