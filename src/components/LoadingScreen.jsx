
import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "vibes loading...",
    "crafting portfolio ✨",
    "no cap, almost ready 🔥",
    "serving looks 💅",
    "building dreams ⚡"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Floating bubbles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <div className="text-center z-10 space-y-8">
        {/* Animated avatar */}
        <div className="relative mx-auto">
          <div className="w-24 h-24 bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 rounded-full mx-auto animate-spin-slow flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                R
              </span>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        {/* Loading text with typing effect */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            hey bestie! 👋
          </h2>
          <p className="text-xl text-gray-300 font-medium min-h-[2rem] transition-all duration-300">
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto space-y-3">
          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>loading portfolio...</span>
            <span className="font-mono">{progress}%</span>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Fun facts */}
        <div className="text-gray-400 text-sm max-w-md mx-auto">
          <p className="animate-fade-in">
            💡 fun fact: this portfolio was built with React & lots of ☕
          </p>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 text-2xl animate-bounce">🚀</div>
      <div className="absolute top-4 right-4 text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
      <div className="absolute bottom-4 left-4 text-2xl animate-bounce" style={{animationDelay: '1s'}}>🎨</div>
      <div className="absolute bottom-4 right-4 text-2xl animate-bounce" style={{animationDelay: '1.5s'}}>💻</div>
    </div>
  );
};

export default LoadingScreen;
