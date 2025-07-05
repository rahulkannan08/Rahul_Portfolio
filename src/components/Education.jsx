
import React, { useState, useEffect } from 'react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Enhanced stagger animations
          setTimeout(() => setVisibleCards(['edu-0']), 200);
          setTimeout(() => setVisibleCards(['edu-0', 'edu-1']), 400);
          setTimeout(() => setVisibleCards(['edu-0', 'edu-1', 'edu-2']), 600);
          setTimeout(() => setVisibleCards(prev => [...prev, 'cert-0']), 800);
          setTimeout(() => setVisibleCards(prev => [...prev, 'cert-1']), 1000);
          setTimeout(() => setVisibleCards(prev => [...prev, 'cert-2']), 1200);
          setTimeout(() => setVisibleCards(prev => [...prev, 'cert-3']), 1400);
          setTimeout(() => setVisibleCards(prev => [...prev, 'cert-4']), 1600);
        } else {
          setIsVisible(false);
          setVisibleCards([]);
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const element = document.getElementById('education');
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
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePosition({ x, y });
  };

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2023 - 2026",
      status: "Currently Pursuing",
      icon: "🎓",
      color: "blue"
    },
    {
      degree: "Higher Secondary Education (HSE)",
      period: "2021 - 2023",
      status: "79.17%",
      icon: "📚",
      color: "green"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      period: "2020 - 2021",
      status: "Completed",
      icon: "🏆",
      color: "purple"
    }
  ];

  const certifications = [
    {
      title: "Joy of Computing using Python",
      provider: "NPTEL",
      score: "66%",
      icon: "🐍",
      color: "yellow"
    },
    {
      title: "Database Management System",
      provider: "NPTEL",
      score: "51%",
      icon: "🗄️",
      color: "blue"
    },
    {
      title: "VB.NET Fundamentals",
      provider: "INFOSYS SPRINGBOARD",
      score: "Completed",
      icon: "💻",
      color: "indigo"
    },
    {
      title: "Python Programming",
      provider: "INFOSYS SPRINGBOARD",
      score: "Completed",
      icon: "🔮",
      color: "green"
    },
    {
      title: "Fundamentals of C",
      provider: "INFOSYS SPRINGBOARD",
      score: "Completed",
      icon: "⚡",
      color: "red"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background relative overflow-hidden">
      {/* Advanced Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="education-orb absolute top-20 left-1/3 w-36 h-36 bg-gradient-to-br from-purple-200/15 to-blue-300/10 rounded-full animate-float-massive blur-3xl"></div>
        <div className="education-orb absolute bottom-24 right-1/4 w-28 h-28 bg-gradient-to-br from-green-200/15 to-teal-300/10 rounded-full animate-float-reverse blur-2xl"></div>
        <div className="education-orb absolute top-1/2 right-16 w-20 h-20 bg-gradient-to-br from-amber-200/20 to-orange-300/15 rounded-full animate-pulse-orbit"></div>
        <div className="education-orb absolute bottom-1/3 left-12 w-16 h-16 bg-gradient-to-br from-cyan-200/20 to-blue-300/15 rounded-full animate-float-gentle"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-16 text-foreground group cursor-pointer transition-all duration-1200 relative transform-3d ${
          isVisible ? 'animate-title-spectacular opacity-100' : 'opacity-0 scale-75 rotateX-90'
        }`}>
          <span className="inline-block hover:scale-110 hover:rotateY-15 hover:rotateX-5 transition-all duration-800 transform-3d bg-gradient-to-r from-foreground via-purple-600 via-blue-600 to-amber-800 bg-clip-text text-transparent animate-gradient-text">
            Education & Certifications
          </span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 via-amber-600 to-green-500 group-hover:w-56 transition-all duration-1000 ease-out rounded-full shadow-rainbow animate-shimmer-rainbow"></div>
          <div className="absolute -inset-6 bg-gradient-to-r from-purple-100/20 via-blue-100/15 via-amber-100/20 to-green-100/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-2xl transform-3d"></div>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto perspective-2000">
          {/* Education Section */}
          <div className="education-section">
            <h3 className={`text-2xl font-semibold mb-8 text-center text-card-foreground hover:text-amber-800 transition-all duration-700 cursor-pointer transform-3d ${
              isVisible ? 'animate-section-title opacity-100' : 'opacity-0 rotateY-45'
            }`}>
              <span className="inline-block hover:scale-110 hover:rotateY-10 transition-all duration-500 transform-3d">
                🎓 Education
              </span>
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className={`education-card-3d bg-card p-6 rounded-xl shadow-xl border transform-3d transition-all duration-1000 group cursor-pointer relative overflow-hidden ${
                    visibleCards.includes(`edu-${index}`)
                      ? 'opacity-100 translate-x-0 rotateY-0'
                      : 'opacity-0 -translate-x-20 rotateY-20'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms`,
                    transformStyle: 'preserve-3d'
                  }}
                  onMouseMove={handleMouseMove}
                >
                  {/* Card background with dynamic gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${edu.color}-50/50 to-amber-50/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform-3d`}></div>
                  
                  {/* Floating icon */}
                  <div className="absolute top-4 right-4 text-2xl transform-3d transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12 animate-float-gentle">
                    {edu.icon}
                  </div>
                  
                  <div className="relative z-10 transform-3d"
                    style={{
                      transform: `perspective(800px) rotateX(${mousePosition.y * 0.2}deg) rotateY(${mousePosition.x * 0.2}deg) translateZ(5px)`
                    }}>
                    <h4 className="text-lg font-semibold mb-2 text-card-foreground group-hover:text-amber-800 transition-colors duration-500 transform group-hover:translateZ-2">
                      {edu.degree}
                    </h4>
                    <p className={`text-${edu.color}-600 font-medium mb-2 group-hover:text-${edu.color}-700 transition-colors duration-500 relative`}>
                      {edu.period}
                      <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-${edu.color}-400 group-hover:w-full transition-all duration-700 rounded-full`}></div>
                    </p>
                    <p className="text-muted-foreground group-hover:text-gray-700 transition-colors duration-500">
                      {edu.status}
                    </p>
                  </div>
                  
                  {/* Enhanced decorative elements */}
                  <div className={`absolute top-4 left-4 w-3 h-3 bg-${edu.color}-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse-glow`}></div>
                  <div className={`absolute bottom-4 right-4 w-2 h-2 bg-${edu.color}-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-bounce-3d`}></div>
                  <div className={`absolute bottom-6 left-6 w-1 h-1 bg-${edu.color}-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-900 animate-ping-3d`}></div>
                  
                  {/* Card glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${edu.color}-500/10 to-amber-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none`}></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div className="certifications-section">
            <h3 className={`text-2xl font-semibold mb-8 text-center text-card-foreground hover:text-amber-800 transition-all duration-700 cursor-pointer transform-3d ${
              isVisible ? 'animate-section-title opacity-100' : 'opacity-0 rotateY-45'
            }`}>
              <span className="inline-block hover:scale-110 hover:rotateY-10 transition-all duration-500 transform-3d">
                🏆 Certifications
              </span>
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`certification-card-3d bg-card p-6 rounded-xl shadow-xl border transform-3d transition-all duration-1000 group cursor-pointer relative overflow-hidden ${
                    visibleCards.includes(`cert-${index}`)
                      ? 'opacity-100 translate-x-0 rotateY-0'
                      : 'opacity-0 translate-x-20 rotateY-20'
                  }`}
                  style={{ 
                    transitionDelay: `${(index + 3) * 200}ms`,
                    transformStyle: 'preserve-3d'
                  }}
                  onMouseMove={handleMouseMove}
                >
                  {/* Dynamic background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${cert.color}-50/50 to-amber-50/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  
                  {/* Floating certification icon */}
                  <div className="absolute top-4 left-4 text-xl transform-3d transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12 animate-float-gentle">
                    {cert.icon}
                  </div>
                  
                  <div className="relative z-10 ml-12 transform-3d"
                    style={{
                      transform: `perspective(800px) rotateX(${mousePosition.y * -0.15}deg) rotateY(${mousePosition.x * -0.15}deg) translateZ(5px)`
                    }}>
                    <h4 className="text-lg font-semibold mb-2 text-card-foreground group-hover:text-amber-800 transition-colors duration-500 transform group-hover:translateZ-2">
                      {cert.title}
                    </h4>
                    <div className="flex justify-between items-center">
                      <p className={`text-${cert.color}-600 font-medium group-hover:text-${cert.color}-700 transition-colors duration-500`}>
                        {cert.provider}
                      </p>
                      <span className={`px-3 py-1 bg-${cert.color}-100 text-${cert.color}-800 rounded-full text-sm transition-all duration-500 transform-3d group-hover:bg-${cert.color}-200 group-hover:scale-110 group-hover:translateZ-2 shadow-glow-sm`}>
                        {cert.score}
                      </span>
                    </div>
                  </div>
                  
                  {/* Enhanced floating particles */}
                  <div className={`absolute top-4 right-4 w-2 h-2 bg-${cert.color}-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping-3d`}></div>
                  <div className={`absolute bottom-4 right-4 w-1 h-1 bg-${cert.color}-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-bounce-3d`}></div>
                  <div className={`absolute top-8 right-8 w-1 h-1 bg-${cert.color}-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-900 animate-pulse-3d`}></div>
                  <div className={`absolute bottom-8 left-8 w-0.5 h-0.5 bg-${cert.color}-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1100 animate-float-3d`}></div>
                  
                  {/* Certification glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${cert.color}-500/10 to-amber-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
