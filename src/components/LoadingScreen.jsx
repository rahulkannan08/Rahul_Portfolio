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
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Enhanced 3D Floating Background Elements with Twinkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-amber-400/20 rounded-full animate-float-3d blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-200/25 to-blue-400/15 rounded-full animate-float-reverse-3d blur-sm"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-br from-purple-200/30 to-purple-400/20 rounded-full animate-pulse-3d blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-green-200/25 to-green-400/15 rounded-full animate-orbit-3d blur-sm"></div>
        
        {/* Enhanced Twinkle Stars */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-twinkle-1 opacity-80"></div>
        <div className="absolute top-32 left-1/3 w-1.5 h-1.5 bg-amber-300 rounded-full animate-twinkle-2 opacity-90"></div>
        <div className="absolute top-16 right-16 w-1 h-1 bg-blue-300 rounded-full animate-twinkle-3 opacity-70"></div>
        <div className="absolute top-64 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-twinkle-4 opacity-85"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-green-300 rounded-full animate-twinkle-1 opacity-75"></div>
        <div className="absolute bottom-64 right-32 w-1.5 h-1.5 bg-pink-300 rounded-full animate-twinkle-2 opacity-80"></div>
        <div className="absolute top-3/4 left-16 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle-3 opacity-90"></div>
        <div className="absolute top-1/3 right-8 w-2 h-2 bg-yellow-300 rounded-full animate-twinkle-4 opacity-70"></div>
        
        {/* Shooting Stars */}
        <div className="absolute top-20 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-shooting-star opacity-60"></div>
        <div className="absolute top-60 right-0 w-24 h-0.5 bg-gradient-to-l from-transparent via-amber-300 to-transparent animate-shooting-star-reverse opacity-50"></div>
        
        {/* Floating particles with enhanced glow */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-amber-400/60 rounded-full animate-float-particle-3d shadow-[0_0_20px_rgba(251,191,36,0.8)]"></div>
        <div className="absolute top-3/4 right-1/4 w-2.5 h-2.5 bg-blue-400/60 rounded-full animate-float-particle-reverse-3d shadow-[0_0_15px_rgba(59,130,246,0.7)]"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-400/60 rounded-full animate-ping-gentle-3d shadow-[0_0_12px_rgba(147,51,234,0.6)]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3.5 h-3.5 bg-green-400/50 rounded-full animate-bounce-soft-3d shadow-[0_0_18px_rgba(34,197,94,0.5)]"></div>
        
        {/* Magical Dust Particles */}
        <div className="absolute top-1/6 left-2/3 w-1 h-1 bg-white/80 rounded-full animate-magical-dust-1"></div>
        <div className="absolute top-2/3 left-1/6 w-0.5 h-0.5 bg-amber-200/90 rounded-full animate-magical-dust-2"></div>
        <div className="absolute top-5/6 right-1/6 w-1 h-1 bg-blue-200/80 rounded-full animate-magical-dust-3"></div>
        <div className="absolute top-1/3 right-2/3 w-0.5 h-0.5 bg-purple-200/90 rounded-full animate-magical-dust-4"></div>
      </div>

      <div className="text-center space-y-12 px-6 relative z-10 transform-3d">
        {/* Enhanced 3D Laptop Opening Animation */}
        <div className="relative perspective-1500 group">
          <div className="laptop-container relative w-80 h-48 mx-auto" style={{
            transform: 'perspective(1000px) rotateX(20deg) rotateY(-10deg)',
            animation: 'float 3s ease-in-out infinite'
          }}>
            {/* Laptop Base with enhanced shadows */}
            <div className="absolute bottom-0 w-full h-8 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg shadow-2xl" 
                 style={{
                   transform: 'rotateX(90deg) translateZ(-4px)',
                   boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(147, 51, 234, 0.3)'
                 }}>
              {/* Enhanced Trackpad */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-slate-800 rounded border border-slate-500 shadow-inner"></div>
            </div>
            
            {/* Enhanced Laptop Screen with glowing effects */}
            <div 
              className="absolute bottom-8 w-full h-40 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-t-lg border-4 border-slate-600 overflow-hidden shadow-2xl laptop-screen"
              style={{
                transformOrigin: 'bottom center',
                transform: `rotateX(${-90 + (progress * 0.9)}deg)`,
                transition: 'transform 0.3s ease-out',
                boxShadow: '0 -10px 30px rgba(147, 51, 234, 0.4), inset 0 0 50px rgba(59, 130, 246, 0.15), 0 0 30px rgba(251, 191, 36, 0.2)'
              }}
            >
              {/* Enhanced Screen Content */}
              <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                {/* Enhanced Screen Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-purple-500/25 to-pink-500/15 animate-pulse"></div>
                
                {/* Floating particles on screen */}
                <div className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-twinkle-1"></div>
                <div className="absolute top-4 right-4 w-0.5 h-0.5 bg-amber-300/70 rounded-full animate-twinkle-2"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-300/60 rounded-full animate-twinkle-3"></div>
                
                {/* Enhanced Code Lines Animation */}
                <div className="absolute top-4 left-4 space-y-2 opacity-70">
                  <div className="h-1 bg-green-400 rounded animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" style={{width: `${Math.min(progress * 2, 100)}%`, maxWidth: '120px'}}></div>
                  <div className="h-1 bg-blue-400 rounded animate-pulse delay-300 shadow-[0_0_6px_rgba(59,130,246,0.7)]" style={{width: `${Math.min(progress * 1.5, 80)}%`, maxWidth: '100px'}}></div>
                  <div className="h-1 bg-purple-400 rounded animate-pulse delay-500 shadow-[0_0_7px_rgba(147,51,234,0.6)]" style={{width: `${Math.min(progress * 1.8, 90)}%`, maxWidth: '140px'}}></div>
                </div>
                
                {/* Enhanced Center Logo */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse relative">
                    <span className="text-2xl font-black text-white animate-glow">R</span>
                    {/* Glow ring */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 via-pink-600/50 to-cyan-600/50 rounded-full blur-md animate-pulse-fast"></div>
                  </div>
                </div>
                
                {/* Enhanced Progress Bar on Screen */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-slate-700/50 rounded-full h-1 overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 transition-all duration-300 rounded-full relative shadow-[0_0_10px_rgba(147,51,234,0.8)]"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-slide-shine-3d"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Laptop Keyboard */}
            <div className="absolute bottom-0 w-full h-8 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 rounded-b-lg shadow-lg">
              <div className="grid grid-cols-12 gap-px p-1 h-full">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bg-slate-700 rounded-sm animate-pulse shadow-inner" style={{animationDelay: `${i * 0.1}s`}}></div>
                ))}
              </div>
            </div>
          </div>
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
          <div className="relative mb-6">
            <div className="bg-muted/50 backdrop-blur-sm rounded-2xl h-4 overflow-hidden shadow-inner-3d border border-white/10">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 transition-all duration-500 ease-out rounded-2xl relative overflow-hidden transform-3d shadow-glow-3d"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-slide-shine-3d"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300/50 to-amber-500/50 animate-pulse-wave-3d"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-t-2xl"></div>
              </div>
            </div>
            
            <div 
              className="absolute top-0 left-0 h-4 bg-gradient-to-r from-amber-400/30 to-amber-600/30 rounded-2xl blur-md transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="relative">
            <div className="bg-card/30 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-xl transform-3d hover:translate-y-1 hover:shadow-2xl transition-all duration-500">
              <p className="text-2xl font-bold text-foreground mb-2 animate-number-glow">
                {progress}%
              </p>
              <p className="text-sm text-muted-foreground font-medium animate-text-slide-3d">
                {loadingMessages[currentMessage]}
              </p>
            </div>
            
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-amber-400/60 rounded-full animate-ping-gentle-3d"></div>
            <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-float-particle-3d"></div>
          </div>
        </div>

        {/* Enhanced Loading Dots Animation */}
        <div className="flex justify-center space-x-2 animate-fade-in-3d">
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce-3d-1 shadow-glow-sm shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce-3d-2 shadow-glow-sm shadow-[0_0_10px_rgba(59,130,246,0.7)]"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce-3d-3 shadow-glow-sm shadow-[0_0_10px_rgba(147,51,234,0.6)]"></div>
        </div>
      </div>

      {/* Enhanced background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default LoadingScreen;
