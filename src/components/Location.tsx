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

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 max-w-6xl mx-auto">
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
                      Kigali, Rwanda
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full text-lg px-8 py-5 hover:bg-black hover:text-primary text-primary-foreground bg-coffee rounded-lg shadow-none transition-all duration-700"
                      onClick={() => window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510407.34217400616!2d29.53620306914678!3d-1.928981147360898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sfr!2sca!4v1757959647652!5m2!1sfr!2sca', '_blank')}
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
                  <p className="mt-6 text-center text-accent font-medium pt-2 border-t-2 border-gray-400/30">
                    Open 7 days a week for your convenience!
                  </p>
              </CardContent>
            </Card>
          </div>

          {/* Map and Features */}
          <div className="space-y-8">
            {/* Map */}
            <Card className="shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510407.34217400616!2d29.53620306914678!3d-1.928981147360898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sfr!2sca!4v1757959647652!5m2!1sfr!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Coffee Location"
                />
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;