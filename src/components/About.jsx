
import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-200/30 to-amber-400/20 rounded-full animate-float-slow"></div>
        <div className="floating-orb absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-200/30 to-blue-400/20 rounded-full animate-float-medium"></div>
        <div className="floating-orb absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-200/30 to-purple-400/20 rounded-full animate-float-fast"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 text-foreground group cursor-pointer transition-all duration-1000 relative transform-3d ${
            isVisible ? 'animate-slide-down-3d opacity-100' : 'opacity-0 translate-y-[-100px] rotateX-90'
          }`}>
            <span className="inline-block hover:scale-110 hover:rotateY-12 transition-all duration-500 transform-3d">
              About Me
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-amber-800 to-amber-600 group-hover:w-32 transition-all duration-700 ease-out rounded-full shadow-lg"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-100/20 to-stone-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl transform-3d"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center perspective-2000">
            <div className={`space-y-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100 rotateY-0' : '-translate-x-20 opacity-0 rotateY-15'
            }`}>
              <div 
                className="card-3d bg-card p-8 rounded-xl shadow-lg border transform-3d transition-all duration-700 group cursor-pointer"
                onMouseMove={handleMouseMove}
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translateZ(10px)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-stone-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full animate-pulse-glow"></div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground relative z-10 group-hover:text-amber-800 transition-colors duration-500">
                  Background
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-500">
                  I'm currently pursuing my BCA degree (2023-2026), diving deep into the world of computer applications 
                  and software development. My journey in programming started with Python and has expanded to web technologies.
                </p>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-amber-500 rounded-full opacity-60 animate-bounce-soft"></div>
              </div>
              
              <div 
                className="card-3d bg-card p-8 rounded-xl shadow-lg border transform-3d transition-all duration-700 group cursor-pointer"
                onMouseMove={handleMouseMove}
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * -0.3}deg) rotateY(${mousePosition.x * -0.3}deg) translateZ(8px)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-stone-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-6 right-6 w-2 h-2 bg-blue-400 rounded-full animate-ping-soft"></div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground relative z-10 group-hover:text-amber-800 transition-colors duration-500">
                  Interests & Focus
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-500">
                  I'm passionate about full-stack development, particularly interested in creating user-friendly web applications. 
                  Currently exploring React ecosystem and prompt engineering to stay ahead in the rapidly evolving tech landscape.
                </p>
                <div className="absolute bottom-6 right-6 w-1 h-1 bg-purple-500 rounded-full opacity-60 animate-pulse"></div>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1200 ${
              isVisible ? 'translate-x-0 opacity-100 rotateY-0' : 'translate-x-20 opacity-0 rotateY-15'
            }`}>
              <div 
                className="profile-card-3d bg-gradient-to-br from-amber-50 to-stone-50 p-8 rounded-xl border shadow-2xl transform-3d transition-all duration-1000 group cursor-pointer relative overflow-hidden"
                onMouseMove={handleMouseMove}
                style={{
                  transform: `perspective(1500px) rotateX(${mousePosition.y * 0.8}deg) rotateY(${mousePosition.x * 0.8}deg) translateZ(20px)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 to-stone-100/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 animate-shimmer"></div>
                
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl transform-3d transition-all duration-700 group-hover:scale-125 group-hover:shadow-3xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-300/50 to-transparent rounded-full animate-rotate-slow"></div>
                    <span className="text-4xl font-bold text-amber-800 group-hover:text-amber-900 transition-colors duration-500 relative z-10 animate-letter-glow">R</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-900 transition-colors duration-500">Rahul</h3>
                  <p className="text-muted-foreground group-hover:text-gray-700 transition-colors duration-500">BCA Student & Developer</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse-wave group-hover:bg-amber-500 transition-colors duration-500"></div>
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse-wave group-hover:bg-amber-500 transition-colors duration-500" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse-wave group-hover:bg-amber-500 transition-colors duration-500" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-8 left-8 w-1 h-1 bg-amber-600/60 rounded-full animate-float-particle"></div>
                <div className="absolute bottom-8 right-8 w-1 h-1 bg-blue-600/60 rounded-full animate-float-particle-reverse"></div>
                <div className="absolute top-1/2 left-4 w-0.5 h-0.5 bg-purple-600/60 rounded-full animate-ping-gentle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
