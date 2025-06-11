
import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a dummy PDF download link
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your actual resume PDF to the public folder
    link.download = 'Rahul_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Enhanced floating 3D-like elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full opacity-30 animate-float animate-glow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-stone-200 to-stone-300 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-35 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Wave effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="rgba(245,245,244,0.3)"
          ></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 gradient-brown rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl animate-glow">
              <span className="text-4xl font-bold text-white">R</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-amber-600 to-muted-foreground bg-clip-text text-transparent animate-fade-in">
            Rahul
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
            BCA Student & Aspiring Full-Stack Developer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions with Python, JavaScript, and modern frameworks. 
            Currently exploring React and diving deep into the world of prompt engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 hover:scale-105 transition-all duration-300 hover:shadow-lg font-semibold"
            >
              View My Work
            </button>
            <button 
              onClick={downloadResume}
              className="px-8 py-4 bg-gradient-to-r from-stone-600 to-stone-700 text-white rounded-lg hover:from-stone-700 hover:to-stone-800 hover:scale-105 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 font-semibold"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </button>
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-stone-600 text-white rounded-lg hover:from-amber-600 hover:to-stone-700 hover:scale-105 transition-all duration-300 hover:shadow-lg font-semibold"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-125 hover:text-amber-600 transition-all duration-300 group"
          onClick={scrollToAbout}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground group-hover:text-amber-600 transition-colors duration-300" />
          <div className="absolute -inset-2 bg-amber-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
