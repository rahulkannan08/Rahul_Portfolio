import React, { useEffect, useRef, useState } from 'react';

const CursorFollower = () => {
  const cursorRef = useRef(null);
  const trail1Ref = useRef(null);
  const trail2Ref = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  // Detect touch device — hide cursor follower on touch screens
  const isTouch = useRef(
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  );

  useEffect(() => {
    // Don't attach listeners on touch-only devices
    if (isTouch.current) return;

    let requestRef = null;
    let mouseX = 0;
    let mouseY = 0;

    const updatePosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!requestRef) {
        requestRef = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
          }
          if (trail1Ref.current) {
            trail1Ref.current.style.transform = `translate3d(${mouseX - 20}px, ${mouseY - 20}px, 0) translate(-50%, -50%)`;
          }
          if (trail2Ref.current) {
            trail2Ref.current.style.transform = `translate3d(${mouseX + 15}px, ${mouseY + 15}px, 0) translate(-50%, -50%)`;
          }
          requestRef = null;
        });
      }
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
      if (requestRef) {
        cancelAnimationFrame(requestRef);
      }
    };
  }, []); // ← empty dep array: subscribe once, not on every state change

  if (!isVisible || isTouch.current) return null;

  return (
    <>
      {/* Main cursor follower */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="fixed pointer-events-none z-[9999] top-0 left-0 transition-transform duration-75 ease-out will-change-transform"
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
        ref={trail1Ref}
        aria-hidden="true"
        className="fixed pointer-events-none z-[9998] top-0 left-0 transition-transform duration-300 ease-out opacity-60 will-change-transform"
      >
        <div className="w-6 h-6 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-md animate-pulse" />
      </div>

      {/* Trailing particle 2 */}
      <div
        ref={trail2Ref}
        aria-hidden="true"
        className="fixed pointer-events-none z-[9998] top-0 left-0 transition-transform duration-500 ease-out opacity-40 will-change-transform"
      >
        <div className="w-4 h-4 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-lg animate-bounce" />
      </div>
    </>
  );
};

export default CursorFollower;
