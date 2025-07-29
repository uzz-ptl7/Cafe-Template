import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Car, Accessibility, Phone, Mail } from "lucide-react";

const Location = () => {
  const openingHours = [
    { day: "Monday", hours: "07:30 - 23:00" },
    { day: "Tuesday", hours: "07:30 - 23:00" },
    { day: "Wednesday", hours: "07:30 - 23:00" },
    { day: "Thursday", hours: "07:30 - 23:00" },
    { day: "Friday", hours: "07:30 - 23:00" },
    { day: "Saturday", hours: "07:30 - 23:00" },
    { day: "Sunday", hours: "07:30 - 23:00" },
  ];

  const features = [
    {
      icon: Car,
      title: "Parking Available",
      description: "Convenient parking spaces for our customers"
    },
    {
      icon: Accessibility,
      title: "Accessible",
      description: "Wheelchair accessible entrance and facilities"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Easy to find in the heart of Rugando"
    }
  ];

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee mb-6">
            Location & Hours
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find us in the heart of Kigali. We're open every day, ready to welcome you 
            with great coffee and warm hospitality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Location Info */}
          <div className="space-y-8">
            {/* Address Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-coffee">
                  <MapPin className="h-6 w-6" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-coffee mb-2">Address</h4>
                    <p className="text-muted-foreground">
                      KG-628 Street, Rugando<br />
                      Kigali, Rwanda
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('https://maps.google.com/?q=KG-628+Street,+Rugando,+Kigali', '_blank')}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-coffee">
                  <Clock className="h-6 w-6" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-coffee">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-accent-light rounded-lg">
                  <p className="text-center text-accent font-medium">
                    Open 7 days a week for your convenience!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-coffee">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-coffee" />
                    <div>
                      <p className="font-medium text-coffee">Phone</p>
                      <p className="text-muted-foreground">+250 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-coffee" />
                    <div>
                      <p className="font-medium text-coffee">Email</p>
                      <p className="text-muted-foreground">hello@feelscoffee.rw</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Features */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <Card className="shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-accent-light/30 to-coffee/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-coffee mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-coffee mb-2">Interactive Map</h4>
                  <p className="text-muted-foreground mb-4">
                    Click below to view our location on Google Maps
                  </p>
                  <Button 
                    variant="coffee"
                    onClick={() => window.open('https://maps.google.com/?q=KG-628+Street,+Rugando,+Kigali', '_blank')}
                  >
                    View on Map
                  </Button>
                </div>
              </div>
            </Card>

            {/* Features */}
            <div className="grid gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                    <CardContent className="p-0 flex items-center gap-4">
                      <div className="bg-coffee/10 rounded-full p-3">
                        <IconComponent className="h-6 w-6 text-coffee" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-coffee mb-1">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Directions */}
            <Card className="shadow-lg bg-gradient-to-r from-secondary to-accent-light">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold text-coffee mb-4">
                  Getting Here
                </h4>
                <p className="text-muted-foreground mb-6">
                  Located in the vibrant Rugando area, we're easily accessible by car, 
                  public transport, or on foot. Look for our distinctive coffee signage!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" size="sm">
                    By Car
                  </Button>
                  <Button variant="outline" size="sm">
                    Public Transport
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;