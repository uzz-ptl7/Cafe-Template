import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Soup, Sandwich, Wine, IceCream } from "lucide-react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const categories = [
    { id: "coffee", name: "Coffee & Espresso", icon: Coffee },
    { id: "drinks", name: "Drinks & Smoothies", icon: IceCream },
    { id: "breakfast", name: "Breakfast", icon: Soup },
    { id: "mains", name: "Main Dishes", icon: Sandwich },
    { id: "cocktails", name: "Cocktails & Wine", icon: Wine },
  ];

  const menuData = {
    coffee: {
      title: "Coffee & Espresso",
      items: [
        { name: "Espresso Single", price: "1,500", description: "Rich and bold single shot" },
        { name: "Espresso Double", price: "2,000", description: "Double the intensity" },
        { name: "Americano", price: "2,500", description: "Classic black coffee" },
        { name: "Cappuccino", price: "3,000", description: "Espresso with steamed milk foam" },
        { name: "Café Latte", price: "3,000", description: "Smooth espresso with steamed milk" },
        { name: "Mocha", price: "3,500", description: "Coffee meets chocolate" },
        { name: "Vanilla Latte", price: "3,500", description: "Sweet vanilla flavored latte" },
        { name: "Caramel Macchiato", price: "3,500", description: "Caramel sweetness in every sip" },
        { name: "Cinnamon Latte", price: "3,500", description: "Warm spiced coffee delight" },
      ]
    },
    drinks: {
      title: "Fresh Drinks & Smoothies",
      items: [
        { name: "Mango Berry Smoothie", price: "4,500", description: "Tropical mango with mixed berries" },
        { name: "Green Detox Smoothie", price: "4,500", description: "Healthy greens and fruits blend" },
        { name: "Tropical Smoothie", price: "4,500", description: "Exotic tropical fruits mix" },
        { name: "Fresh Orange Juice", price: "4,500", description: "Freshly squeezed oranges" },
        { name: "Passion Juice", price: "3,500", description: "Local passion fruit juice" },
        { name: "Tree Tomatoes Lemonade", price: "2,500", description: "Unique local fruit lemonade" },
        { name: "Classic Lemonade", price: "2,500", description: "Fresh squeezed lemons" },
        { name: "Take me to Feels", price: "3,000", description: "Our signature iced tea blend", featured: true },
      ]
    },
    breakfast: {
      title: "Breakfast Delights",
      items: [
        { name: "Pancakes", price: "7,000", description: "Fluffy pancakes with syrup" },
        { name: "French Toast", price: "3,500", description: "Golden brown French toast" },
        { name: "Rolex", price: "3,500", description: "Ugandan-style egg roll" },
        { name: "Morning Combo", price: "8,000", description: "Complete breakfast platter", featured: true },
        { name: "Avocado & Toast", price: "2,500", description: "Smashed avocado on toast" },
        { name: "Ham & Cheese Sandwich", price: "5,000", description: "Classic breakfast sandwich" },
        { name: "Breakfast Burrito", price: "7,000", description: "Wrapped breakfast goodness" },
        { name: "Special Omelet", price: "5,000", description: "Chef's special omelet" },
      ]
    },
    mains: {
      title: "Main Dishes",
      items: [
        { name: "Special Feels Chicken", price: "8,000", description: "Our signature chicken dish", featured: true },
        { name: "Chicken Biryani", price: "8,000", description: "Aromatic spiced rice with chicken" },
        { name: "Beef Pepper Steak", price: "8,000", description: "Tender beef with peppers" },
        { name: "Grilled Fish Fillet", price: "9,000", description: "Fresh tilapia grilled to perfection" },
        { name: "Chicken Alfredo", price: "7,500", description: "Creamy pasta with chicken" },
        { name: "King's Burger", price: "7,500", description: "Our premium burger creation", featured: true },
        { name: "Feels Salad", price: "6,000", description: "Fresh mixed greens with house dressing" },
        { name: "Share Platter", price: "25,000", description: "Perfect for sharing - chicken, beef, fish with sides" },
      ]
    },
    cocktails: {
      title: "Cocktails & Spirits",
      items: [
        { name: "Feels Choice", price: "8,000", description: "Our signature cocktail", featured: true },
        { name: "Feels Mojito", price: "7,500", description: "Fresh mint mojito with a twist" },
        { name: "Passion Fruit Margarita", price: "10,000", description: "Tropical passion fruit margarita" },
        { name: "Long Island", price: "10,000", description: "Classic Long Island iced tea" },
        { name: "Take me to Feels", price: "10,000", description: "Our special cocktail creation" },
        { name: "Virgin Mojito", price: "5,000", description: "Non-alcoholic mojito" },
        { name: "Red Wine", price: "7,000", description: "Selection of red wines" },
        { name: "White Wine", price: "7,000", description: "Selection of white wines" },
      ]
    }
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee mb-6">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse selection of international and Rwandan flavors, 
            from premium coffee to delicious meals and refreshing drinks.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "coffee" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2"
              >
                <IconComponent className="h-4 w-4" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-coffee text-center">
                {menuData[activeCategory as keyof typeof menuData].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {menuData[activeCategory as keyof typeof menuData].items.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-start p-4 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-coffee text-lg">
                          {item.name}
                        </h4>
                        {item.featured && (
                          <Badge variant="secondary" className="bg-accent text-accent-foreground">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-right ml-4">
                      <span className="text-2xl font-bold text-coffee">
                        {item.price}
                      </span>
                      <span className="text-sm text-muted-foreground block">
                        RWF
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            All prices are in Rwandan Francs (RWF). Taste the difference of fresh, quality ingredients.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open("https://drive.google.com/file/d/1JlKq7DD127b6hLgztV6aUefriTxR5_aK/view?fbclid=PAZXh0bgNhZW0CMTEAAaf-W6KFggddtJgKXIV0tQhSy6dC0XSN1xmPBtYz0dBVgy7gYXyrLbMBMc5OVA_aem_IPdjro9maaEbFm57zTBTXA", "_blank")}
            className="text-lg px-8 py-6 hover:bg-black hover:text-primary text-primary-foreground bg-coffee rounded-lg shadow-none transition-all duration-700"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;