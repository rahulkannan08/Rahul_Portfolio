
import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
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

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 text-foreground group cursor-pointer transition-all duration-700 hover:text-amber-900 hover:scale-110 relative transform ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            About Me
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-amber-800 to-amber-600 group-hover:w-32 transition-all duration-500 ease-out rounded-full shadow-lg"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-100/20 to-stone-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-stone-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground relative z-10 group-hover:text-amber-800 transition-colors duration-300">Background</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                  I'm currently pursuing my BCA degree (2023-2026), diving deep into the world of computer applications 
                  and software development. My journey in programming started with Python and has expanded to web technologies.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-stone-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground relative z-10 group-hover:text-amber-800 transition-colors duration-300">Interests & Focus</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                  I'm passionate about full-stack development, particularly interested in creating user-friendly web applications. 
                  Currently exploring React ecosystem and prompt engineering to stay ahead in the rapidly evolving tech landscape.
                </p>
              </div>
            </div>
            
            <div className={`bg-gradient-to-br from-amber-50 to-stone-50 p-8 rounded-xl border hover:shadow-2xl hover:scale-110 transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-10 opacity-0 rotate-3'} group cursor-pointer`}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 to-stone-100/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center animate-glow group-hover:animate-pulse group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-125">
                  <span className="text-4xl font-bold text-amber-800 group-hover:text-amber-900 transition-colors duration-300">R</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-900 transition-colors duration-300">Rahul</h3>
                <p className="text-muted-foreground group-hover:text-gray-700 transition-colors duration-300">BCA Student & Developer</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse group-hover:bg-amber-500 transition-colors duration-300"></div>
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse group-hover:bg-amber-500 transition-colors duration-300" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse group-hover:bg-amber-500 transition-colors duration-300" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
