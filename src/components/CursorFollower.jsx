
import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor follower */}
      <div
        className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="relative">
          {/* Outer glow ring - responsive sizing */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-amber-400/30 via-purple-500/30 to-cyan-400/30 rounded-full blur-sm animate-pulse" />
          
          {/* Inner core - responsive sizing */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-gradient-to-r from-amber-300 to-purple-400 rounded-full shadow-lg shadow-amber-400/50" />
          
          {/* Sparkle effects - responsive positioning */}
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full animate-ping opacity-75" />
          <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-60" />
        </div>
      </div>

      {/* Trailing particles - responsive sizing */}
      <div
        className="fixed pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out opacity-60"
        style={{
          left: `${position.x - 20}px`,
          top: `${position.y - 20}px`,
        }}
      >
        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-md animate-pulse" />
      </div>

      <div
        className="fixed pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out opacity-40"
        style={{
          left: `${position.x + 15}px`,
          top: `${position.y + 15}px`,
        }}
      >
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-lg animate-bounce" />
      </div>
    </>
  );
};

export default CursorFollower;
