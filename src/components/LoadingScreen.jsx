
import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const loadingMessages = [
    "Initializing portfolio...",
    "Loading projects...",
    "Setting up components...",
    "Almost ready...",
    "Welcome!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % loadingMessages.length);
    }, 1000);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-muted/20 to-amber-50/30 flex items-center justify-center z-50 overflow-hidden perspective-2000">
      {/* 3D Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-amber-400/20 rounded-full animate-float-3d blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-200/25 to-blue-400/15 rounded-full animate-float-reverse-3d blur-sm"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-br from-purple-200/30 to-purple-400/20 rounded-full animate-pulse-3d blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-green-200/25 to-green-400/15 rounded-full animate-orbit-3d blur-sm"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-amber-400/60 rounded-full animate-float-particle-3d"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-float-particle-reverse-3d"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-ping-gentle-3d"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2.5 h-2.5 bg-green-400/50 rounded-full animate-bounce-soft-3d"></div>
      </div>

      <div className="text-center space-y-12 px-6 relative z-10 transform-3d">
        {/* Enhanced 3D Loading Icon */}
        <div className="relative perspective-1500 group">
          <div className="w-32 h-32 gradient-brown rounded-full mx-auto flex items-center justify-center shadow-2xl animate-float-3d-slow hover:animate-pulse-3d transition-all duration-700 transform-gpu">
            <span className="text-4xl font-black text-white animate-letter-glow-3d transform hover:scale-110 transition-transform duration-500">R</span>
          </div>
          
          {/* Multiple rotating rings */}
          <div className="absolute inset-0 w-32 h-32 border-4 border-amber-200/60 rounded-full animate-spin-3d-slow border-t-transparent mx-auto"></div>
          <div className="absolute inset-2 w-28 h-28 border-2 border-blue-300/40 rounded-full animate-spin-3d-reverse border-r-transparent mx-auto"></div>
          <div className="absolute inset-4 w-24 h-24 border-2 border-purple-300/30 rounded-full animate-spin-3d-fast border-b-transparent mx-auto"></div>
          
          {/* Glowing orb effect */}
          <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-blue-400/20 rounded-full animate-pulse-glow-3d blur-md mx-auto"></div>
        </div>

        {/* Enhanced 3D Brand */}
        <div className="transform-3d perspective-1000">
          <h1 className="text-5xl font-black gradient-text-3d mb-4 animate-title-emerge-3d hover:animate-bounce-soft transition-all duration-500 cursor-pointer">
            <span className="inline-block hover:rotate-y-12 hover:scale-110 transition-all duration-700 transform-3d">R</span>
            <span className="inline-block hover:rotate-y-12 hover:scale-110 transition-all duration-700 transform-3d" style={{transitionDelay: '100ms'}}>a</span>
            <span className="inline-block hover:rotate-y-12 hover:scale-110 transition-all duration-700 transform-3d" style={{transitionDelay: '200ms'}}>h</span>
            <span className="inline-block hover:rotate-y-12 hover:scale-110 transition-all duration-700 transform-3d" style={{transitionDelay: '300ms'}}>u</span>
            <span className="inline-block hover:rotate-y-12 hover:scale-110 transition-all duration-700 transform-3d" style={{transitionDelay: '400ms'}}>l</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-3d font-medium tracking-wide">
            <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent animate-gradient-shift">
              Full Stack Developer
            </span>
          </p>
        </div>

        {/* Enhanced 3D Progress Section */}
        <div className="w-96 max-w-full mx-auto transform-3d perspective-1000">
          {/* 3D Progress Container */}
          <div className="relative mb-6">
            <div className="bg-muted/50 backdrop-blur-sm rounded-2xl h-4 overflow-hidden shadow-inner-3d border border-white/10">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 transition-all duration-500 ease-out rounded-2xl relative overflow-hidden transform-3d shadow-glow-3d"
                style={{ width: `${progress}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-slide-shine-3d"></div>
                
                {/* Pulsing glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300/50 to-amber-500/50 animate-pulse-wave-3d"></div>
                
                {/* 3D highlight */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-t-2xl"></div>
              </div>
            </div>
            
            {/* Progress glow effect */}
            <div 
              className="absolute top-0 left-0 h-4 bg-gradient-to-r from-amber-400/30 to-amber-600/30 rounded-2xl blur-md transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* 3D Progress Text */}
          <div className="relative">
            <div className="bg-card/30 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-xl transform-3d hover:translate-y-1 hover:shadow-2xl transition-all duration-500">
              <p className="text-2xl font-bold text-foreground mb-2 animate-number-glow">
                {progress}%
              </p>
              <p className="text-sm text-muted-foreground font-medium animate-text-slide-3d">
                {loadingMessages[currentMessage]}
              </p>
            </div>
            
            {/* Floating dots around text */}
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-amber-400/60 rounded-full animate-ping-gentle-3d"></div>
            <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-float-particle-3d"></div>
          </div>
        </div>

        {/* Loading Dots Animation */}
        <div className="flex justify-center space-x-2 animate-fade-in-3d">
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce-3d-1 shadow-glow-sm"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce-3d-2 shadow-glow-sm"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce-3d-3 shadow-glow-sm"></div>
        </div>
      </div>

      {/* Enhanced background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default LoadingScreen;
