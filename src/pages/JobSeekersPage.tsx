import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, TrendingUp, Target, Award, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const JobSeekersPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Briefcase,
      title: "Job Placement Assistance",
      description: "Get connected with top companies through our extensive network of hiring partners."
    },
    {
      icon: Users,
      title: "Interview Preparation",
      description: "Comprehensive interview coaching with mock interviews and feedback sessions."
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description: "Personalized career counseling to help you choose the right path for growth."
    },
    {
      icon: Target,
      title: "Resume Building",
      description: "Professional resume writing services to make you stand out to employers."
    },
    {
      icon: Award,
      title: "Skill Assessment",
      description: "Evaluate your skills and get recommendations for improvement areas."
    },
    {
      icon: CheckCircle,
      title: "Job Matching",
      description: "AI-powered job matching based on your skills, experience, and preferences."
    }
  ];

  const jobRoles = [
    { title: "Full Stack Developer", companies: "250+ Companies", avgSalary: "₹12-18 LPA" },
    { title: "Data Scientist", companies: "180+ Companies", avgSalary: "₹15-25 LPA" },
    { title: "Cloud Engineer", companies: "200+ Companies", avgSalary: "₹14-22 LPA" },
    { title: "DevOps Engineer", companies: "150+ Companies", avgSalary: "₹13-20 LPA" },
    { title: "Python Developer", companies: "300+ Companies", avgSalary: "₹10-16 LPA" },
    { title: "Database Administrator", companies: "120+ Companies", avgSalary: "₹12-18 LPA" }
  ];

  const testimonials = [
    {
      name: "Archana",
      role: "Software Engineer at TCS",
      testimonial: "Spyder Academy's placement support helped me land my dream job at TCS. The interview preparation was exceptional!",
      avatar: "👩‍💻"
    },
    {
      name: "Aravind",
      role: "Database Developer at Infosys",
      testimonial: "From resume building to final placement, the team supported me throughout my job search journey.",
      avatar: "👨‍💻"
    },
    {
      name: "Priya Patel",
      role: "Cloud Architect at Amazon",
      testimonial: "The career guidance and skill assessment helped me transition into cloud computing successfully.",
      avatar: "👩‍🔧"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="text-4xl font-orbitron font-bold text-gradient animate-glow mb-4">
            Loading Job Services...
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
              Career Services & Job Placement
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Job
              <span className="block text-gradient font-orbitron">SEEKERS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Accelerate your career with our comprehensive job placement services. 
              From skill development to interview preparation, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-gradient mb-2">95%</div>
              <div className="text-muted-foreground">Placement Rate</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-gradient mb-2">₹15L</div>
              <div className="text-muted-foreground">Average Package</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-muted-foreground">Hiring Partners</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-gradient mb-2">10K+</div>
              <div className="text-muted-foreground">Alumni Placed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our Job Placement
              <span className="block text-gradient font-orbitron">SERVICES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support to help you land your dream job in the tech industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Roles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Top Job
              <span className="block text-gradient font-orbitron">OPPORTUNITIES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the most in-demand job roles in the tech industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobRoles.map((role, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-3">{role.title}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Hiring Companies:</span>
                    <span className="font-medium text-primary">{role.companies}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Average Salary:</span>
                    <span className="font-medium text-primary">{role.avgSalary}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Success
              <span className="block text-gradient font-orbitron">STORIES</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center p-8 rounded-2xl glass border border-primary/20 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Launch Your Career?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Take the first step towards your dream job. Our career experts are ready 
              to help you navigate the competitive tech job market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/7871801331"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium group inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold"
              >
                Get Career Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Button size="lg" variant="outline" className="glass">
                Upload Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobSeekersPage;