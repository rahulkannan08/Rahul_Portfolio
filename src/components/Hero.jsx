
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Floating 3D-like elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-stone-200 to-stone-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-25"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full opacity-20 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Rahul
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            BCA Student & Aspiring Full-Stack Developer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions with Python, JavaScript, and modern frameworks. 
            Currently exploring React and diving deep into the world of prompt engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg">
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-border rounded-lg hover:bg-accent hover:scale-105 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
