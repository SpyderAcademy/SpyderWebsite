import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    const whatsappMessage =
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/7871801331?text=${encodedMessage}`, "_blank");
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "42-8, 3rd St, near karuvatupalam, Devendrapuram, Kitchipalayam, Salem, Tamil Nadu 636001"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 7871801331"
    },
    {
      icon: Mail,
      title: "Email",
      details: "admin@spyderacademy.in"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="text-4xl font-orbitron font-bold text-gradient animate-glow mb-4">
            Loading Contact...
          </div>
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" 
               style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-slide-up">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Get in Touch
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Contact
              <span className="block text-gradient font-orbitron">US</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your learning journey? Have questions about our courses? 
              We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-left">
              <h2 className="text-3xl font-bold mb-6">
                Send us a <span className="text-gradient">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="glass"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="glass"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="glass"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Enter subject"
                      required
                      className="glass"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message here..."
                    rows={6}
                    required
                    className="glass resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full btn-premium group">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-right">
              <h2 className="text-3xl font-bold mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're here to answer your questions and help you choose the right course 
                for your career goals. Reach out to us through any of the following methods.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-start p-4 rounded-lg glass border border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground text-sm">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 p-6 rounded-lg glass border border-border/50 animate-slide-up">
                <h3 className="font-semibold mb-4">Find Us on Map</h3>
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <iframe
                    title="Spyder Academy Location"
                    src="https://www.google.com/maps?q=42-8,+3rd+St,+near+karuvatupalam,+Devendrapuram,+Kitchipalayam,+Salem,+Tamil+Nadu+636001&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked
              <span className="block text-gradient font-orbitron">QUESTIONS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="p-6 rounded-xl glass border border-border/50 animate-slide-up">
                <h3 className="font-semibold mb-2">How long are the courses?</h3>
                <p className="text-muted-foreground text-sm">
                  Our courses range from 12-20 weeks depending on the complexity and depth of the subject matter.
                </p>
              </div>
              
              <div className="p-6 rounded-xl glass border border-border/50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-semibold mb-2">Do you provide placement assistance?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we have a dedicated placement team with 95% placement rate and partnerships with 500+ companies.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl glass border border-border/50 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-semibold mb-2">Are the courses suitable for beginners?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely! Our courses are designed for all levels, from complete beginners to advanced professionals.
                </p>
              </div>
              
              <div className="p-6 rounded-xl glass border border-border/50 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-semibold mb-2">What is the class schedule?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer flexible schedules including weekday, weekend, and online classes to fit your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;