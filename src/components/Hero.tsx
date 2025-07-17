import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        backgroundImage: 'url("/bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse-glow" 
             style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6 animate-glow">
              <Star className="w-4 h-4 mr-2" />
              #1 Professional Training Academy
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Master Your
              <span className="block text-gradient font-orbitron">FUTURE</span>
              with Expert Training
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Gain industry-relevant skills with our expert-led training courses. 
              Transform your career with in-demand certifications from Spyder Academy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-premium group">
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div> 

          {/* REMOVE this block to delete the right side green box and logo */}
          {/* Right Content - Hero Image/Animation */}
          {/* <div className="relative animate-slide-right">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 p-6">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-primary/30 font-mono text-sm animate-matrix"
                      style={{
                        left: `${Math.random() * 80}%`,
                        top: `${Math.random() * 80}%`,
                        animationDelay: `${Math.random() * 3}s`
                      }}
                    >
                      {['<code>', '</html>', 'function()', 'const data', 'async/await', 'npm install'][Math.floor(Math.random() * 6)]}
                    </div>
                  ))}
                </div>

                {/* Central logo */}
                {/* <div className="relative z-10 text-center">
                  <div className="text-6xl font-orbitron font-bold text-gradient animate-glow">
                    SA
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    SPYDER ACADEMY
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              {/* <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg p-3 glass animate-float">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/ai.png" alt="AI" className="w-6 h-6 object-contain" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">AI</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-3 glass animate-float" 
                   style={{ animationDelay: '1s' }}>
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/java.png" alt="AI" className="w-6 h-6 object-contain" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">Java</div>
              </div>
            </div>
          </div> */}
          {/* END REMOVE */}
        </div>
      </div>
    </section>
  );
};

export default Hero;