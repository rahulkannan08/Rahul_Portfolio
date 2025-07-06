
import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [laptopOpen, setLaptopOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLaptopOpen(true);
            setTimeout(() => {
              setIsAnimating(false);
              setTimeout(onLoadingComplete, 500);
            }, 1500);
          }, 500);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center z-50 transition-opacity duration-1000 ${
      !isAnimating ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Enhanced Background Elements with Twinkles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-amber-400/10 rounded-full animate-float-3d-slow blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-blue-400/10 rounded-full animate-float-reverse-3d blur-lg"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-200/15 to-purple-400/8 rounded-full animate-orbit-3d blur-2xl"></div>
        
        {/* Twinkle Stars */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-amber-400 rounded-full animate-twinkle-1"></div>
        <div className="absolute top-32 left-80 w-1.5 h-1.5 bg-blue-400 rounded-full animate-twinkle-2"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-twinkle-3"></div>
        <div className="absolute top-60 right-80 w-2.5 h-2.5 bg-green-400 rounded-full animate-twinkle-4"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-pink-400 rounded-full animate-twinkle-1"></div>
        <div className="absolute bottom-60 right-60 w-1 h-1 bg-yellow-400 rounded-full animate-twinkle-2"></div>
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-twinkle-3"></div>
        <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-red-400 rounded-full animate-twinkle-4"></div>
        
        {/* Shooting Stars */}
        <div className="absolute top-16 left-0 w-1 h-1 bg-white rounded-full animate-shooting-star"></div>
        <div className="absolute top-80 right-0 w-1 h-1 bg-amber-300 rounded-full animate-shooting-star-reverse"></div>
        
        {/* Magical Dust Particles */}
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-amber-300/80 rounded-full animate-magical-dust-1"></div>
        <div className="absolute top-1/3 left-2/3 w-0.5 h-0.5 bg-blue-300/80 rounded-full animate-magical-dust-2"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-purple-300/80 rounded-full animate-magical-dust-3"></div>
        <div className="absolute bottom-1/2 left-1/4 w-1 h-1 bg-green-300/80 rounded-full animate-magical-dust-4"></div>
      </div>

      <div className="text-center relative z-10">
        {/* 3D Laptop Animation */}
        <div className="mb-12 perspective-1000">
          <div className={`laptop-container relative mx-auto transition-all duration-2000 transform-3d ${
            laptopOpen ? 'scale-110' : 'scale-100'
          }`}>
            {/* Laptop Base */}
            <div className="laptop-base w-64 h-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-2xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-lg animate-pulse-glow-3d"></div>
            </div>
            
            {/* Laptop Screen */}
            <div 
              className={`laptop-screen w-60 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-lg shadow-2xl mx-auto relative transition-all duration-1500 origin-bottom ${
                laptopOpen ? 'transform rotateX-120 translateY--10' : 'transform rotateX-0'
              }`}
              style={{
                transformOrigin: 'bottom center',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Screen Content */}
              <div className={`absolute inset-2 bg-gradient-to-br from-gray-900 to-black rounded border border-gray-700 overflow-hidden transition-opacity duration-1000 ${
                laptopOpen ? 'opacity-100' : 'opacity-50'
              }`}>
                {/* Screen Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-laptop-glow"></div>
                
                {/* Code Lines Animation */}
                <div className="absolute top-4 left-4 space-y-2">
                  <div className="w-20 h-1 bg-green-400 rounded animate-pulse"></div>
                  <div className="w-16 h-1 bg-blue-400 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-24 h-1 bg-yellow-400 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  <div className="w-12 h-1 bg-purple-400 rounded animate-pulse" style={{animationDelay: '0.6s'}}></div>
                </div>
                
                {/* Welcome Text */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <div className="text-green-400 text-xs font-mono animate-glow">
                    Welcome to Rahul's Portfolio
                  </div>
                </div>
              </div>
              
              {/* Screen Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-t-lg"></div>
            </div>
          </div>
        </div>

        {/* Loading Text with Enhanced Animation */}
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-shift">
          <span className="inline-block animate-letter-glow-3d">Loading Portfolio</span>
        </h2>
        
        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-8 perspective-1000">
          <div className="progress-container bg-muted rounded-full h-2 overflow-hidden shadow-inner transform-3d">
            <div 
              className="progress-bar bg-gradient-to-r from-amber-500 via-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300 ease-out relative overflow-hidden transform-3d animate-pulse-wave-3d"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-shine-3d"></div>
            </div>
          </div>
        </div>
        
        {/* Progress Percentage */}
        <div className="text-xl font-semibold text-muted-foreground animate-number-glow">
          {Math.round(progress)}%
        </div>
        
        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce-3d-1"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce-3d-2"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce-3d-3"></div>
        </div>
        
        {/* Status Text */}
        <div className="mt-6 text-sm text-muted-foreground animate-text-slide-3d">
          {progress < 30 && "Initializing components..."}
          {progress >= 30 && progress < 60 && "Loading assets..."}
          {progress >= 60 && progress < 90 && "Preparing interface..."}
          {progress >= 90 && progress < 100 && "Almost ready..."}
          {progress === 100 && "Welcome!"}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
