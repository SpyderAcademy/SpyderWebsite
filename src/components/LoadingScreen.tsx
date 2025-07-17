import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Show logo after a brief delay
    const logoTimer = setTimeout(() => setShowLogo(true), 500);

    // Simulate loading progress
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          setTimeout(onLoadingComplete, 800);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(progressTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-matrix"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className={`transition-all duration-1000 ${showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="relative">
            {/* Glow effect behind text */}
            <div className="absolute inset-0 text-6xl md:text-8xl font-orbitron font-bold text-gradient blur-lg opacity-50">
              SPYDER
            </div>
            
            {/* Main logo text */}
            <h1 className="relative text-6xl md:text-8xl font-orbitron font-bold text-gradient animate-glow !bg-transparent">
              SPYDER
            </h1>
          </div>
          
          <div className="mt-4 text-2xl md:text-3xl font-inter font-light text-foreground/80 animate-slide-up">
            ACADEMY
          </div>

          <div className="mt-8 text-sm text-muted-foreground animate-slide-up">
            Loading Premium Experience...
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 w-80 max-w-[90vw] mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Rotating elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="w-96 h-96 border border-primary/20 rounded-full animate-spin-slow" />
          <div className="absolute top-8 left-8 w-80 h-80 border border-primary/10 rounded-full animate-spin-slow" 
               style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;