import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, BookOpen, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Faculty",
      description: "Learn from industry professionals with 10+ years of experience",
      color: "text-blue-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Live & Interactive",
      description: "Real-time learning with hands-on projects and live coding sessions",
      color: "text-green-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Certifications",
      description: "Earn globally recognized certifications from leading tech companies",
      color: "text-purple-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Placement Guarantee",
      description: "100% placement assistance with our extensive hiring partner network",
      color: "text-orange-500"
    }
  ];

  const achievements = [
    { number: "50+", label: "Expert Courses", icon: "📚" },
    { number: "10+", label: "Colleges", icon: "🎓" },
    { number: "90+", label: "Renowned Faculty", icon: "👨‍🏫" },
    { number: "10K+", label: "Active Learners", icon: "🧑‍💻" },
    { number: "30+", label: "Hiring Partners", icon: "🤝" },
    { number: "95%", label: "Success Rate", icon: "📈" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            About Spyder Academy
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforming Careers Through
            <span className="block text-gradient font-orbitron">INNOVATION</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Spyder Academy is a premier Ed-Tech platform revolutionizing professional education. 
            We're the first to bring 'Live & Interactive' learning in digital format, 
            enabling working professionals to fast-track their careers with cutting-edge skills.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="animate-slide-left">
            <div className="glass p-8 rounded-2xl border border-border/50 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To empower professionals worldwide with future-ready skills and create a global 
                ecosystem where talent meets opportunity through innovative learning experiences.
              </p>
              
            </div>
          </div>

          <div className="animate-slide-right">
            <div className="glass p-8 rounded-2xl border border-border/50 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To bridge the skill gap between industry requirements and professional capabilities 
                through expert-led training, mentorship, and comprehensive placement support.
              </p>
             
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 animate-slide-up">
            Why Choose <span className="text-gradient">Spyder Academy?</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group hover:scale-105 transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${feature.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 animate-slide-up">
            Our <span className="text-gradient">Achievements</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label}
                className="text-center p-6 glass rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-2xl font-bold text-gradient mb-1">
                  {achievement.number}
                </div>
                <div className="text-xs text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 rounded-2xl glass border border-primary/20 animate-slide-up">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their careers with Spyder Academy. 
            Start your journey towards success today!
          </p>
          <a
            href="https://wa.me/7871801331"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 btn-premium rounded-lg font-semibold"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;