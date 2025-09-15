import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Wifi, Heart, Users, Clock, MapPin } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: "Premium Coffee",
      description: "We source the finest beans and craft each cup with passion and precision."
    },
    {
      icon: Wifi,
      title: "Strong Wi-Fi",
      description: "Stay connected with our reliable high-speed internet, perfect for work or study."
    },
    {
      icon: Heart,
      title: "Cozy Atmosphere",
      description: "A warm, welcoming space that feels like your second home."
    },
    {
      icon: Users,
      title: "Friendly Service",
      description: "Our team is dedicated to making every visit a delightful experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee mb-6">
            About Our Cafe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            More than just a café, we’re a home for coffee lovers, 
            digital nomads, and anyone seeking a perfect blend of comfort and quality.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-coffee mb-6">Our Story</h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Nestled in the heart of Kigali, our cafe began with a simple vision: 
                to create a space where every sip and bite truly feels like home. We believe that 
                great coffee is more than just a beverage—it's a moment of connection, creativity, and comfort.
              </p>
              <p>
                Our terrace offers stunning views while you enjoy our diverse menu 
                featuring both international favorites and authentic local flavors. Whether 
                you're catching up with friends, working on your next big project, or simply 
                savoring a quiet moment, our cafe provides the perfect backdrop.
              </p>
              <p>
                From our signature drinks to our carefully crafted meals, 
                every item on our menu is prepared with love and attention to detail. We're 
                not just serving food and drinks—we're creating experiences and building community.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <IconComponent className="h-12 w-12 text-coffee mx-auto" />
                    </div>
                    <h4 className="font-semibold text-coffee mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-gray-600/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-coffee mb-8">Our Mission</h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              To provide an exceptional café experience that combines premium quality, 
              outstanding value, and genuine hospitality. We're committed to being 
              Kigali's go-to destination for coffee enthusiasts and food lovers alike.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-coffee/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Coffee className="h-8 w-8 text-coffee" />
                </div>
                <h4 className="font-semibold text-coffee mb-2">Quality First</h4>
                <p className="text-muted-foreground">We never compromise on the quality of our ingredients or service.</p>
              </div>
              <div className="text-center">
                <div className="bg-coffee/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-coffee" />
                </div>
                <h4 className="font-semibold text-coffee mb-2">Community Focused</h4>
                <p className="text-muted-foreground">Building connections and supporting our local community.</p>
              </div>
              <div className="text-center">
                <div className="bg-coffee/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-coffee" />
                </div>
                <h4 className="font-semibold text-coffee mb-2">Exceptional Experience</h4>
                <p className="text-muted-foreground">Every visit should leave you feeling welcomed and satisfied.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Card className="p-8 text-center">
            <CardContent className="p-0">
              <MapPin className="h-12 w-12 text-coffee mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-coffee mb-2">Location</h4>
              <p className="text-muted-foreground">
                KG-628 Street, Rugando<br />
                Kigali, Rwanda
              </p>
            </CardContent>
          </Card>
          <Card className="p-8 text-center">
            <CardContent className="p-0">
              <Clock className="h-12 w-12 text-coffee mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-coffee mb-2">Hours</h4>
              <p className="text-muted-foreground">
                Open Daily<br />
                07:30 AM - 11:00 PM
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
