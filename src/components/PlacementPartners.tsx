import { Badge } from "@/components/ui/badge";

const PlacementPartners = () => {
  const partners = [
    { name: "Google", logo: "/google.png" },
    { name: "HCL", logo: "/hcl.png" },
    { name: "Amazon", logo: "/amazon.png" },
    { name: "TCS", logo: "/tcs.png" },
    { name: "Cognizant", logo: "/cog.png" },
    { name: "TalentzEdge", logo: "/tal.png" },
    { name: "Hexaware", logo: "/hex.png" },
    { name: "OceanWalk", logo: "/oc.png" },
     { name: "MNC", logo: "/mnc.png"},
    { name: "Wipro", logo: "/wipro.png"},
     { name: "Accenture", logo: "/acc.png"},     
     { name: "Infosys", logo: "/info.png"},
  ];

  const testimonials = [
    {
      name: "Aadhithyan",
      role: "Software Engineer at HCL",
      company: "HCL",
      testimonial: "Spyder Academy's training was exceptional. The practical approach helped me land my dream job at HCL within 3 months of completion!",
      avatar: "👩‍💻"
    },
    {
      name: "Vignesh",
      role: "Data Scientist at Cognizant",
      company: "Cognizant",
      testimonial: "The ML course was comprehensive and industry-focused. The mentorship program made all the difference in my career transition.",
      avatar: "👨‍💻"
    },
    {
      name: "Suganth",
      role: "Full Stack Developer at OceanWalk",
      company: "OceanWalk",
      testimonial: "From zero cloud knowledge to Full Stack Developer - Spyder Academy made it possible. Their placement support is unmatched!",
      avatar: "👩‍🔧"
    }
  ];

  return (
    <section id="placement" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            100+ Hiring Partners
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Placement
            <span className="block text-gradient font-orbitron">PARTNERS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful professionals who landed their dream jobs 
            with top companies through our comprehensive placement program.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-gradient mb-2">95%</div>
            <div className="text-muted-foreground">Placement Rate</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-gradient mb-2">₹7L</div>
            <div className="text-muted-foreground">Average Package</div>
          </div>
          
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-gradient mb-2">30+</div>
            <div className="text-muted-foreground">Hiring Partners</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-bold text-gradient mb-2">100+</div>
            <div className="text-muted-foreground">Alumni Placed</div>
          </div>
        </div>

        {/* Partners Logo Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12 animate-slide-up">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={partner.name}
                className="flex flex-col items-center p-4 rounded-lg glass hover:bg-primary/5 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-2 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center h-12">
                  {partner.logo.startsWith("/") ? (
                    <img src={partner.logo} alt={partner.name} className="h-12 w-auto object-contain" />
                  ) : (
                    <span className="text-3xl">{partner.logo}</span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="animate-slide-up">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Success <span className="text-gradient">Stories</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="p-6 rounded-xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 rounded-2xl glass border border-primary/20 animate-slide-up">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-muted-foreground mb-6">
            Get personalized career guidance and placement assistance with our industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/7871801331"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 btn-premium rounded-lg font-semibold inline-block"
            >
              Book Career Counseling
            </a>
            <button className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 rounded-lg font-semibold">
              View Placement Reports
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementPartners;