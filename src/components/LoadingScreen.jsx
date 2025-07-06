
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
    <div className="fixed inset-0 bg-gradient-to-br from-background via-muted/20 to-amber-50/30 flex items-center justify-center z-50">
      <div className="text-center space-y-8 px-6">
        {/* Loading Icon */}
        <div className="relative">
          <div className="w-24 h-24 gradient-brown rounded-full mx-auto flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-3xl font-black text-white">R</span>
          </div>
          <div className="absolute inset-0 w-24 h-24 border-4 border-amber-200 rounded-full animate-spin border-t-transparent mx-auto"></div>
        </div>

        {/* Brand */}
        <div>
          <h1 className="text-4xl font-black gradient-text-brown mb-2">Rahul</h1>
          <p className="text-lg text-muted-foreground">Full Stack Developer</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-full mx-auto">
          <div className="bg-muted rounded-full h-2 overflow-hidden">
            <div 
              className="h-full gradient-brown transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground mt-3 font-medium">
            {progress}% • {loadingMessages[currentMessage]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
