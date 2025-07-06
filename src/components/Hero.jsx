
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import TypeWriter from './TypeWriter';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-orb absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-amber-400/20 rounded-full animate-float-3d blur-sm"></div>
        <div className="hero-orb absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-200/25 to-blue-400/15 rounded-full animate-float-reverse-3d blur-sm"></div>
        <div className="hero-orb absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-br from-purple-200/30 to-purple-400/20 rounded-full animate-pulse-3d blur-sm"></div>
        <div className="hero-orb absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-green-200/25 to-green-400/15 rounded-full animate-orbit-3d blur-sm"></div>
        
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-amber-400/60 rounded-full animate-float-particle-3d"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-float-particle-reverse-3d"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-ping-gentle-3d"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2.5 h-2.5 bg-green-400/50 rounded-full animate-bounce-soft-3d"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="hero-content-3d mb-8 transform-3d perspective-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text-3d animate-title-emerge-3d">
              <span className="inline-block hover:animate-bounce-soft transition-all duration-500 cursor-pointer transform-3d hover:rotateY-12">
                Rahul
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 min-h-[2rem]">
              <TypeWriter 
                text="BCA Student & Aspiring Full-Stack Developer"
                speed={80}
                delay={1000}
                className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent font-medium"
              />
            </div>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative web solutions and learning cutting-edge technologies. 
              Currently exploring React ecosystem and prompt engineering.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('projects')}
              className="hero-btn-3d px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-2xl font-semibold transition-all duration-700 transform-3d hover:scale-110 hover:translateZ-4 hover:shadow-2xl hover:shadow-amber-500/50 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/50 to-amber-700/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-shine-3d"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="hero-btn-3d px-8 py-4 border-2 border-amber-600 text-amber-600 rounded-2xl font-semibold transition-all duration-700 transform-3d hover:scale-110 hover:translateZ-4 hover:bg-amber-600 hover:text-white hover:shadow-2xl hover:shadow-amber-500/30 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 to-amber-600/100 rounded-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>

          {/* social links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/rahul-username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link-3d p-4 bg-card rounded-2xl border transform-3d transition-all duration-500 hover:scale-125 hover:translateZ-6 hover:shadow-2xl hover:shadow-gray-500/30 group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-gray-800 transition-colors duration-300" />
            </a>
            <a 
              href="https://linkedin.com/in/rahul-username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link-3d p-4 bg-card rounded-2xl border transform-3d transition-all duration-500 hover:scale-125 hover:translateZ-6 hover:shadow-2xl hover:shadow-blue-500/30 group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="social-link-3d p-4 bg-card rounded-2xl border transform-3d transition-all duration-500 hover:scale-125 hover:translateZ-6 hover:shadow-2xl hover:shadow-amber-500/30 group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-amber-600 transition-colors duration-300" />
            </a>
          </div>

          <div 
            onClick={() => scrollToSection('about')}
            className="scroll-indicator-3d inline-block cursor-pointer transform-3d transition-all duration-500 hover:scale-125 hover:translateZ-4"
          >
            <ArrowDown className="w-8 h-8 text-muted-foreground animate-bounce-3d-gentle hover:text-amber-600 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
