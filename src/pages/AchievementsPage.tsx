import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Trophy,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

const AchievementsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--background))_100%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6 animate-fade-in">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Our Achievements</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient mb-6 animate-slide-up">
              Excellence in
              <br />
              <span className="text-primary">Education & Placement</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
              Showcasing our commitment to student success through comprehensive training,
              industry partnerships, and outstanding placement records.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">College Partnerships</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Industry Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College Training Activities */}
      <section className="py-16 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-6 text-center">
              <span className="text-white">College</span> <span className="text-green-600">Training Activities</span>
            </h2>
            <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: '200ms' }}>
              Empowering students across top institutions with cutting-edge technology training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={item} className="group animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-card to-card/50">
                  <img 
                    src={`bg.jpg`}
                    alt="College Training Activity"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">Training Workshop {item}</h3>
                    <p className="text-sm opacity-90">Advanced Technical Training</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Tieups */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-6 text-center">
              <span className="text-white">Placement</span> <span className="text-green-600">Tieups</span>
            </h2>
            <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: '200ms' }}>
              Strong partnerships with leading companies ensuring excellent placement opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={item} className="group animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-card to-card/50">
                  <img 
                    src={`google.png`}
                    alt="Company Partnership"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">MNC Partner {item}</h3>
                    <p className="text-sm opacity-90">Industry Leading Company</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Students Feedback */}
      <section className="py-16 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-6 text-center">
              <span className="text-white">Placed</span> <span className="text-green-600">Students</span>
            </h2>
            <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: '200ms' }}>
              Success stories from our students who achieved their career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={item} className="group animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-card to-card/50">
                  <img 
                    src={`tcs.png`}
                    alt="Student Success Story"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">Success Story {item}</h3>
                    <p className="text-sm opacity-90">Placed at Top MNC</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-orbitron font-bold text-gradient mb-6 animate-slide-up">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
              Transform your career with industry-leading training and guaranteed placement support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '400ms' }}>
              <Button asChild size="lg" className="btn-premium">
                <Link to="/courses">
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/10">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AchievementsPage;