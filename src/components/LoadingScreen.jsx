
import React, { useState, useEffect, useMemo } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showStars, setShowStars] = useState(false);
  const [laptopAngle, setLaptopAngle] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);

  // Stable positions computed once — avoid position-jumping on every 60ms re-render
  const orbs = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: `${10 + (i * 11) % 80}%`,
        top: `${8 + (i * 10.5) % 80}%`,
        duration: `${8 + (i % 4)}s`,
        delay: `${(i % 3)}s`,
      })),
    []
  );

  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${4 + (i * 4.8) % 91}%`,
        top: `${4 + (i * 4.6) % 90}%`,
        delay: `${(i % 4)}s`,
        duration: `${2 + (i % 3)}s`,
      })),
    []
  );

  const loadingMessages = [
    "Initializing portfolio...",
    "Loading projects...",
    "Setting up components...",
    "Optimizing performance...",
    "Finalizing details...",
    "Almost ready...",
    "Welcome!"
  ];

  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Creative Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % loadingMessages.length);
    }, 800);

    const roleInterval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 2000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(roleInterval);
    };
  }, []);

  useEffect(() => {
    const starsTimer = setTimeout(() => {
      setShowStars(true);
    }, 1000);

    const laptopTimer = setInterval(() => {
      setLaptopAngle(prev => (prev + 2) % 360);
    }, 100);

    return () => {
      clearTimeout(starsTimer);
      clearInterval(laptopTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'float 12s ease-in-out infinite'
        }}></div>
      </div>

      {/* Slower floating orbs — stable positions */}
      <div className="absolute inset-0" aria-hidden="true">
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-40"
            style={{
              left: orb.left,
              top: orb.top,
              animation: `float ${orb.duration} ease-in-out infinite`,
              animationDelay: orb.delay,
            }}
          />
        ))}
      </div>

      {/* Twinkling stars — stable positions */}
      {showStars && (
        <div className="absolute inset-0" aria-hidden="true">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute w-1 h-1 bg-white rounded-full animate-ping"
              style={{
                left: star.left,
                top: star.top,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}
        </div>
      )}

      <div className="text-center space-y-8 sm:space-y-12 px-4 sm:px-6 relative z-10 max-w-md mx-auto">
        {/* 3D Laptop Animation */}
        <div className="relative perspective-1000">
          <div 
            className="w-24 h-18 sm:w-32 sm:h-24 mx-auto relative transform-gpu"
            style={{
              transform: `rotateY(${laptopAngle * 0.5}deg) rotateX(${Math.sin(laptopAngle * 0.02) * 10}deg)`
            }}
          >
            {/* Laptop base */}
            <div className="absolute bottom-0 w-24 h-3 sm:w-32 sm:h-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg shadow-2xl transform rotateX(60deg)"></div>
            
            {/* Laptop screen */}
            <div 
              className="absolute bottom-1 sm:bottom-2 w-20 h-15 sm:w-28 sm:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-t-lg mx-auto left-2 shadow-2xl transform-origin-bottom transition-transform duration-500"
              style={{
                transform: `rotateX(${progress > 50 ? -100 + (progress - 50) : -20 - progress}deg)`
              }}
            >
              {/* Screen content */}
              <div className="absolute inset-1 sm:inset-2 bg-black rounded border border-gray-700 overflow-hidden">
                <div className="absolute top-0.5 sm:top-1 left-0.5 sm:left-1 right-0.5 sm:right-1 h-2 sm:h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded animate-pulse"></div>
                <div className="absolute top-3 sm:top-6 left-0.5 sm:left-1 right-0.5 sm:right-1 bottom-0.5 sm:bottom-1 bg-gradient-to-b from-blue-900 to-purple-900 rounded">
                  <div className="text-xs text-green-400 font-mono p-0.5 sm:p-1 animate-pulse">
                    {progress > 30 && <div>&gt; npm run dev</div>}
                    {progress > 50 && <div>&gt; Starting server...</div>}
                    {progress > 70 && <div>&gt; Ready! ✓</div>}
                  </div>
                </div>
              </div>
              
              {/* Screen glow */}
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Brand Section */}
        <div className="relative">
          <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 gradient-brown rounded-full mx-auto flex items-center justify-center shadow-2xl animate-pulse mb-4 relative overflow-hidden">
              <span className="text-xl sm:text-2xl font-black text-white relative z-10">R</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-orange-500/30 animate-spin"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text-brown mb-3 animate-pulse">Rahul</h1>
            <div className="relative h-8 sm:h-10 overflow-hidden">
              <div 
                className="absolute inset-0 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${currentRole * 100}%)` }}
              >
                {roles.map((role, index) => (
                  <p 
                    key={index}
                    className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 font-semibold h-8 sm:h-10 flex items-center justify-center"
                  >
                    {role}
                  </p>
                ))}
              </div>
              {/* Glowing underline animation */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Progress Section */}
        <div className="w-full max-w-sm mx-auto space-y-4 sm:space-y-6">
          {/* Main progress bar */}
          <div className="relative">
            <div className="bg-gray-800/50 rounded-full h-3 sm:h-4 overflow-hidden backdrop-blur-sm border border-purple-500/30">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transition-all duration-300 ease-out rounded-full relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-ping"></div>
              </div>
            </div>
            
            {/* Progress glow */}
            <div 
              className="absolute top-0 h-3 sm:h-4 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-full blur-md transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Animated progress text */}
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2 animate-pulse">
              {progress.toFixed(0)}%
            </div>
            <p className="text-base sm:text-lg text-purple-200 font-medium animate-fade-in">
              {loadingMessages[currentMessage]}
            </p>
          </div>

          {/* Loading dots animation */}
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Code snippets floating around */}
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 text-purple-300 font-mono text-xs sm:text-sm opacity-60 animate-float">
          {'{ code: "magic" }'}
        </div>
        <div className="absolute bottom-24 sm:bottom-32 right-8 sm:right-16 text-pink-300 font-mono text-xs sm:text-sm opacity-60 animate-float" style={{ animationDelay: '1s' }}>
          {'<Portfolio />'}
        </div>
        <div className="absolute top-32 sm:top-40 right-6 sm:right-12 text-indigo-300 font-mono text-xs sm:text-sm opacity-60 animate-float" style={{ animationDelay: '0.5s' }}>
          {'function() { return awesome; }'}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
