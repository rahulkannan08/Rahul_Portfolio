import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const words = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast', 'Code Craftsman'];

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
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-amber-50/40 flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          animation: 'float 10s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating coding elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-16 w-28 h-28 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg opacity-20 animate-float shadow-2xl" style={{
          animation: 'float 5s ease-in-out infinite, glow 3s ease-in-out infinite alternate'
        }}></div>
        
        <div className="absolute top-32 right-24 w-20 h-20 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-lg opacity-25 animate-bounce shadow-xl" style={{
          animation: 'bounce 3s ease-in-out infinite, pulse 2s ease-in-out infinite'
        }}></div>

        <div className="absolute bottom-24 left-32 w-24 h-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-lg opacity-15" style={{
          animation: 'float 6s ease-in-out infinite reverse, glow 4s ease-in-out infinite alternate'
        }}></div>

        {/* Code brackets and symbols */}
        <div className="absolute top-1/3 left-1/5 text-6xl font-mono text-purple-300 opacity-10 animate-pulse">{'<>'}</div>
        <div className="absolute bottom-1/3 right-1/4 text-5xl font-mono text-cyan-300 opacity-15 animate-float">{'{}'}</div>
        <div className="absolute top-1/2 right-1/6 text-4xl font-mono text-green-300 opacity-20 animate-bounce">[]</div>

        {/* Binary rain effect */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-sm opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Section */}
        <div className="mb-8">
          <div className="w-40 h-40 rounded-full mx-auto mb-6 relative overflow-hidden">
            <img 
              src="/profile.jpg"
              alt="Rahul"
              className="object-cover w-full h-full rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-2">Rahul</h1>
          <p className="text-xl text-muted-foreground mb-4">
            <span className="mr-2">A passionate</span>
            <span className="gradient-text">{text}</span>
            <span className="cursor" style={{ opacity: 1 }}></span>
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            I'm a BCA student with a passion for crafting digital experiences.
            Explore my portfolio to see how I blend creativity with code to solve real-world problems.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/80 font-medium rounded-md py-3 px-6 transition-colors duration-300">
              View Projects
            </button>
            <button className="border border-border text-muted-foreground hover:bg-secondary hover:text-secondary-foreground font-medium rounded-md py-3 px-6 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Gradient blend to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
