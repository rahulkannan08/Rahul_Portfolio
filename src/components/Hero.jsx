
import React from 'react';
import { ArrowDown, Download, Sparkles, Zap, Code, Palette } from 'lucide-react';

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
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rahul_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* 3D Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
      </div>

      {/* Enhanced 3D floating elements with icons */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs with 3D effect */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-full opacity-70 animate-float shadow-2xl" style={{
          filter: 'blur(1px)',
          transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg)',
          animation: 'float 4s ease-in-out infinite, glow 3s ease-in-out infinite alternate'
        }}></div>
        
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-60 animate-bounce shadow-xl" style={{
          filter: 'blur(0.5px)',
          transform: 'perspective(800px) rotateX(-30deg) rotateY(30deg)',
          animation: 'bounce 3s ease-in-out infinite, pulse 2s ease-in-out infinite'
        }}></div>

        <div className="absolute bottom-32 left-20 w-28 h-28 bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 rounded-full opacity-50" style={{
          filter: 'blur(2px)',
          transform: 'perspective(1200px) rotateX(60deg) rotateY(-45deg)',
          animation: 'float 5s ease-in-out infinite reverse, glow 4s ease-in-out infinite alternate'
        }}></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-40" style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          transform: 'perspective(600px) rotateX(45deg) rotateZ(45deg)',
          animation: 'float 3s ease-in-out infinite, spin 8s linear infinite'
        }}></div>

        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-35" style={{
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          transform: 'perspective(800px) rotateY(60deg) rotateX(30deg)',
          animation: 'float 4s ease-in-out infinite, spin 6s linear infinite reverse'
        }}></div>

        {/* Floating tech icons */}
        <div className="absolute top-1/3 right-1/3 p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm" style={{
          transform: 'perspective(600px) rotateX(45deg)',
          animation: 'float 3s ease-in-out infinite, pulse 2s ease-in-out infinite'
        }}>
          <Code className="w-8 h-8 text-purple-300" />
        </div>

        <div className="absolute bottom-1/3 left-1/3 p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm" style={{
          transform: 'perspective(600px) rotateY(45deg)',
          animation: 'float 4s ease-in-out infinite reverse, pulse 3s ease-in-out infinite'
        }}>
          <Palette className="w-8 h-8 text-cyan-300" />
        </div>

        <div className="absolute top-1/2 right-1/5 p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full backdrop-blur-sm" style={{
          transform: 'perspective(600px) rotateX(-45deg)',
          animation: 'float 3.5s ease-in-out infinite, pulse 2.5s ease-in-out infinite'
        }}>
          <Zap className="w-8 h-8 text-emerald-300" />
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `perspective(400px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`
            }}
          />
        ))}

        {/* Sparkle effects */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle ${2 + Math.random()}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <Sparkles className="w-6 h-6 text-yellow-300 opacity-60" />
          </div>
        ))}
      </div>

      {/* Enhanced wave effect with 3D perspective */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-32 opacity-30"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            transform: 'perspective(1000px) rotateX(45deg)',
            filter: 'drop-shadow(0 10px 20px rgba(147, 51, 234, 0.3))'
          }}
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="url(#waveGradient)"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: 'rgba(147, 51, 234, 0.6)'}} />
              <stop offset="50%" style={{stopColor: 'rgba(236, 72, 153, 0.6)'}} />
              <stop offset="100%" style={{stopColor: 'rgba(59, 130, 246, 0.6)'}} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8 relative">
            {/* Enhanced 3D avatar with multiple layers */}
            <div className="relative w-40 h-40 mx-auto mb-6">
              {/* Outer glow ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full opacity-50 animate-spin-slow blur-sm"></div>
              
              {/* Middle ring */}
              <div className="absolute inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full opacity-60 animate-pulse"></div>
              
              {/* Main avatar */}
              <div className="absolute inset-4 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl" style={{
                transform: 'perspective(400px) rotateX(15deg)',
                filter: 'drop-shadow(0 20px 40px rgba(147, 51, 234, 0.5))'
              }}>
                <span className="text-5xl font-black text-white animate-pulse">R</span>
              </div>
              
              {/* Floating sparkles around avatar */}
              <div className="absolute -top-2 -right-2 animate-bounce">
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </div>
              <div className="absolute -bottom-2 -left-2 animate-pulse">
                <Sparkles className="w-4 h-4 text-pink-300" />
              </div>
            </div>
          </div>
          
          {/* Enhanced text with 3D effect */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(147, 51, 234, 0.5)',
            transform: 'perspective(600px) rotateX(15deg)',
            filter: 'drop-shadow(0 5px 15px rgba(147, 51, 234, 0.3))'
          }}>
            Rahul
          </h1>
          
          <div className="relative">
            <p className="text-2xl md:text-3xl text-gray-100 mb-8 max-w-2xl mx-auto font-bold" style={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
              transform: 'perspective(400px) rotateX(5deg)'
            }}>
              BCA Student & Aspiring Full-Stack Developer
            </p>
            <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
              Passionate about creating innovative web solutions with Python, JavaScript, and modern frameworks. 
              Currently exploring React and diving deep into the world of prompt engineering.
            </p>
          </div>
          
          {/* Enhanced 3D buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={scrollToProjects}
              className="group px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white rounded-2xl font-bold text-lg relative overflow-hidden"
              style={{
                transform: 'perspective(600px) rotateX(10deg)',
                filter: 'drop-shadow(0 10px 30px rgba(147, 51, 234, 0.4))',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'perspective(600px) rotateX(10deg) translateY(-5px) scale(1.05)';
                e.target.style.filter = 'drop-shadow(0 20px 40px rgba(147, 51, 234, 0.6))';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'perspective(600px) rotateX(10deg)';
                e.target.style.filter = 'drop-shadow(0 10px 30px rgba(147, 51, 234, 0.4))';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">🚀 View My Work</span>
            </button>
            
            <button 
              onClick={downloadResume}
              className="group px-10 py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-2xl font-bold text-lg relative overflow-hidden"
              style={{
                transform: 'perspective(600px) rotateX(10deg)',
                filter: 'drop-shadow(0 10px 30px rgba(6, 182, 212, 0.4))',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'perspective(600px) rotateX(10deg) translateY(-5px) scale(1.05)';
                e.target.style.filter = 'drop-shadow(0 20px 40px rgba(6, 182, 212, 0.6))';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'perspective(600px) rotateX(10deg)';
                e.target.style.filter = 'drop-shadow(0 10px 30px rgba(6, 182, 212, 0.4))';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Download size={24} />
                <span>📄 Download Resume</span>
              </span>
            </button>
            
            <button 
              onClick={scrollToContact}
              className="group px-10 py-5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white rounded-2xl font-bold text-lg relative overflow-hidden"
              style={{
                transform: 'perspective(600px) rotateX(10deg)',
                filter: 'drop-shadow(0 10px 30px rgba(239, 68, 68, 0.4))',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'perspective(600px) rotateX(10deg) translateY(-5px) scale(1.05)';
                e.target.style.filter = 'drop-shadow(0 20px 40px rgba(239, 68, 68, 0.6))';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'perspective(600px) rotateX(10deg)';
                e.target.style.filter = 'drop-shadow(0 10px 30px rgba(239, 68, 68, 0.4))';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">💬 Get In Touch</span>
            </button>
          </div>
        </div>
        
        {/* Enhanced scroll indicator with 3D effect */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          onClick={scrollToAbout}
          style={{
            transform: 'perspective(400px) rotateX(15deg) translateX(-50%)',
            filter: 'drop-shadow(0 5px 15px rgba(147, 51, 234, 0.3))'
          }}
        >
          <div className="relative p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-purple-400/30 group-hover:scale-125 transition-all duration-300">
            <ArrowDown className="w-8 h-8 text-purple-200 group-hover:text-white animate-bounce" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
