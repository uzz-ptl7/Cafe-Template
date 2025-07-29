import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Coffee, Users, Calendar, MessageSquare, Instagram, Phone, Mail } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    date: "",
    time: "",
    guests: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      type: "",
      date: "",
      time: "",
      guests: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+250 123 456 789",
      description: "Mon-Sun, 7:30 AM - 11:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@feelscoffee.rw",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Instagram,
      title: "Follow Us",
      content: "@feels_coffeexstudio",
      description: "For daily updates and specials"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the Feels Coffee difference? Contact us for reservations, 
            private events, or just to say hello. We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-coffee text-2xl">
                <MessageSquare className="h-6 w-6" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    required
                    className="mt-1 py-6"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="mt-1 py-6"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+250 xxx xxx xxx"
                    className="mt-1 py-6"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <Label htmlFor="type">Type of Inquiry *</Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)} required>
                    <SelectTrigger className="mt-1 py-6">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reservation">Table Reservation</SelectItem>
                      <SelectItem value="event">Private Event</SelectItem>
                      <SelectItem value="catering">Catering Services</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Reservation Details (conditional) */}
                {(formData.type === "reservation" || formData.type === "event") && (
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-primary-foreground rounded-lg">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="mt-1 bg-white/10"
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange("time", e.target.value)}
                        className="mt-1 bg-white/10"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Input
                        id="guests"
                        type="number"
                        value={formData.guests}
                        onChange={(e) => handleInputChange("guests", e.target.value)}
                        placeholder="1-20"
                        min="1"
                        max="20"
                        className="mt-1 bg-white/10"
                      />
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows={5}
                    className="mt-1"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full text-lg px-8 py-6 hover:bg-black hover:text-primary text-primary-foreground bg-coffee rounded-lg shadow-none transition-all duration-700" 
                  size="lg"
                  variant="outline"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 flex items-start gap-4">
                      <div className="bg-coffee/10 rounded-full p-3">
                        <IconComponent className="h-6 w-6 text-coffee" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-coffee mb-1">{method.title}</h4>
                        <p className="text-lg font-medium text-foreground mb-1">{method.content}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <Card className="shadow-lg bg-gradient-to-br from-gray-500/5 to-gray-500/15">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-coffee mb-6 text-center">
                  Quick Actions
                </h4>
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-center text-lg px-8 py-6 hover:bg-black hover:text-primary text-primary-foreground bg-coffee rounded-lg shadow-none transition-all duration-700" 
                    size="lg"
                    onClick={() => {
                      const contactForm = document.querySelector('form');
                      if (contactForm) {
                        contactForm.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <Calendar className="h-5 w-5 mr-3" />
                    Book a Table Online
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-center text-lg px-8 py-6 hover:bg-black hover:text-primary text-primary-foreground bg-coffee rounded-lg shadow-none transition-all duration-700" 
                    size="lg"
                    onClick={() => window.open("https://drive.google.com/file/d/1JlKq7DD127b6hLgztV6aUefriTxR5_aK/view?fbclid=PAZXh0bgNhZW0CMTEAAaf-W6KFggddtJgKXIV0tQhSy6dC0XSN1xmPBtYz0dBVgy7gYXyrLbMBMc5OVA_aem_IPdjro9maaEbFm57zTBTXA", "_blank")}
                  >
                    <Coffee className="h-5 w-5 mr-3" />
                    View Full Menu
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-center text-lg px-8 py-6 hover:bg-black hover:text-primary text-primary-foreground bg-coffee rounded-lg shadow-none transition-all duration-700" 
                    size="lg"
                    onClick={() => {
                      const contactForm = document.querySelector('form');
                      if (contactForm) {
                        contactForm.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <Users className="h-5 w-5 mr-3" />
                    Plan Private Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-coffee/10 to-accent-light/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-coffee mb-4">
              Experience the Feels Coffee Difference
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you're looking for your morning coffee fix, a productive workspace, 
              or a place to catch up with friends, we're here to make every moment special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const contactForm = document.getElementById('contact');
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-lg px-8 py-6 hover:bg-black hover:text-primary text-primary-foreground bg-coffee rounded-lg shadow-none transition-all duration-700"
              >
                Reserve Your Table
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-6 hover:bg-black hover:text-primary text-primary-foreground bg-coffee rounded-lg shadow-none transition-all duration-700"
                size="lg"
                onClick={() => window.open("https://drive.google.com/file/d/1JlKq7DD127b6hLgztV6aUefriTxR5_aK/view?fbclid=PAZXh0bgNhZW0CMTEAAaf-W6KFggddtJgKXIV0tQhSy6dC0XSN1xmPBtYz0dBVgy7gYXyrLbMBMc5OVA_aem_IPdjro9maaEbFm57zTBTXA", "_blank")}
              >
                View Our Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;