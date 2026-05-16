import React, { useState, useEffect, useMemo } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Memoize so the array reference is stable across renders
  const words = useMemo(
    () => ['Full Stack Developer', 'AI/ML Developer', 'Problem Solver', 'Tech Enthusiast'],
    []
  );

  // Stable decorative positions — computed once, never on re-render
  const binaryItems = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${5 + (i * 6.5) % 90}%`,
        top: `${5 + (i * 7.3) % 88}%`,
        duration: `${3 + (i % 3)}s`,
        delay: `${(i % 4) * 0.5}s`,
        char: i % 2 === 0 ? '1' : '0',
      })),
    []
  );

  // Hero is the first section — trigger immediately on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const word = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < word.length) {
        setText(word.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(word.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === word.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-amber-50/40 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            animation: 'float 10s ease-in-out infinite',
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-16 left-16 w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg opacity-20 shadow-2xl"
          style={{ animation: 'float 5s ease-in-out infinite, glow 3s ease-in-out infinite alternate' }}
        />
        <div
          className="absolute top-32 right-24 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-lg opacity-25 shadow-xl"
          style={{ animation: 'bounce 3s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-24 left-32 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-lg opacity-15"
          style={{ animation: 'float 6s ease-in-out infinite reverse' }}
        />

        {/* Code symbols */}
        <div className="absolute top-1/3 left-[15%] text-5xl sm:text-6xl font-mono text-purple-300 opacity-10 animate-pulse select-none">{'<>'}</div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl sm:text-5xl font-mono text-cyan-300 opacity-15 select-none" style={{ animation: 'float 5s ease-in-out infinite' }}>{'{}'}</div>
        <div className="absolute top-1/2 right-[15%] text-3xl sm:text-4xl font-mono text-green-300 opacity-20 select-none" style={{ animation: 'bounce 4s ease-in-out infinite' }}>{'[]'}</div>

        {/* Binary decorations — stable positions */}
        {binaryItems.map((item) => (
          <div
            key={item.id}
            className="absolute text-green-400 font-mono text-sm opacity-20 select-none"
            style={{
              left: item.left,
              top: item.top,
              animation: `float ${item.duration} ease-in-out infinite`,
              animationDelay: item.delay,
            }}
          >
            {item.char}
          </div>
        ))}
      </div>

      <div
        className={`container mx-auto px-4 sm:px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        {/* Profile */}
        <div className="mb-8">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 relative overflow-hidden ring-4 ring-purple-500/30 ring-offset-2 ring-offset-transparent">
            <img
              src="/profile.jpg"
              alt="Rahul — Full Stack Developer"
              width={160}
              height={160}
              loading="eager"
              decoding="async"
              className="object-cover w-full h-full rounded-full shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 hover:opacity-40 transition-opacity duration-300" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Rahul
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-4 min-h-[1.75rem]">
            <span className="mr-2">A passionate</span>
            <span className="gradient-text">{text}</span>
            <span className="cursor-blink text-purple-400" aria-hidden="true" />
          </p>

          <div className="flex justify-center space-x-5">
            <a
              href="https://github.com/rahulkannan08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-125 inline-block"
            >
              <i className="fab fa-github text-2xl" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-k-082k6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:scale-125 inline-block"
            >
              <i className="fab fa-linkedin text-2xl" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 px-4">
            BCA student crafting AI-powered and full-stack web experiences.
            Explore my projects to see creativity meet code.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-primary text-primary-foreground hover:bg-primary/80 font-semibold rounded-lg py-3 px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="border border-border text-muted-foreground hover:bg-secondary hover:text-secondary-foreground font-semibold rounded-lg py-3 px-8 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              About Me
            </button>
          </div>
        </div>
      </div>

      {/* Gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default Hero;
