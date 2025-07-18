import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, Target } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      "Full Stack Development",
      "Data Science & ML",
      "Artificial Intelligence",
      "Cloud Computing",
      "Mobile Development",
      "Cybersecurity"
    ],
    company: [
      "About Us",
      "Our Mission",
      "Success Stories",
      "Faculty",
      "Careers",
      "Press"
    ],
    resources: [
      "Course Catalog",
      "Learning Paths",
      "Placement Reports",
      "Student Portal",
      "Corporate Training",
      "Blog"
    ],
    support: [
      "Help Center",
      "Contact Us",
      "Live Chat",
      "Schedule Demo",
      "Technical Support",
      "Community"
    ]
  };

  const socialLinks = [
   
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/spyder-academyllp/", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/spyder_academy?igsh=NHMzczYwb2oyZ2x0&utm_source=qr", label: "Instagram" },
   
  ];

  return (
    <footer className="bg-background border-t border-border/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 animate-slide-left">
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-3xl font-orbitron font-bold text-gradient">
                  SPYDER
                </div>
                <div className="text-lg font-inter text-muted-foreground">
                  ACADEMY
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                "Train Smart, Grow Fast, Get Placed"
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>admin@spyderacademy.in</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91 - 7871801331</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>42-8, 3rd St, near karuvatupalam, Devendrapuram, Kitchipalayam, Salem, Tamil Nadu 636001</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={"_blank"}
                    className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
              {/* Courses */}
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-semibold text-foreground mb-6">Courses</h3>
                <ul className="space-y-3">
                  {footerLinks.courses.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-semibold text-foreground mb-6">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-semibold text-foreground mb-6">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-semibold text-foreground mb-6">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        

        {/* Bottom Section */}
        <div className="py-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm animate-slide-left">
              © {currentYear} Spyder Academy. All rights reserved. 
              
            </div>
            <div className="flex space-x-6 text-sm animate-slide-right">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
