import React, { useEffect, useRef, useState } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  // Detect touch device — hide cursor follower on touch screens
  const isTouch = useRef(
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  );

  useEffect(() => {
    // Don't attach listeners on touch-only devices
    if (isTouch.current) return;

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []); // ← empty dep array: subscribe once, not on every state change

  if (!isVisible || isTouch.current) return null;

  return (
    <>
      {/* Main cursor follower */}
      <div
        aria-hidden="true"
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-75 ease-out will-change-transform"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <div className="relative">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-amber-400/30 via-purple-500/30 to-cyan-400/30 rounded-full blur-sm animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 bg-gradient-to-r from-amber-300 to-purple-400 rounded-full shadow-lg shadow-amber-400/50" />
          <div className="absolute -top-2 -right-2 w-2 h-2 bg-white rounded-full animate-ping opacity-75" />
          <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-60" />
        </div>
      </div>

      {/* Trailing particle 1 */}
      <div
        aria-hidden="true"
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-300 ease-out opacity-60 will-change-transform"
        style={{ left: `${position.x - 20}px`, top: `${position.y - 20}px` }}
      >
        <div className="w-6 h-6 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-md animate-pulse" />
      </div>

      {/* Trailing particle 2 */}
      <div
        aria-hidden="true"
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-500 ease-out opacity-40 will-change-transform"
        style={{ left: `${position.x + 15}px`, top: `${position.y + 15}px` }}
      >
        <div className="w-4 h-4 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-lg animate-bounce" />
      </div>
    </>
  );
};

export default CursorFollower;
