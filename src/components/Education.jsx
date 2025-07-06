
import React, { useState, useEffect } from 'react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger animations for education cards
          setTimeout(() => setVisibleCards(['edu-0']), 200);
          setTimeout(() => setVisibleCards(['edu-0', 'edu-1']), 400);
          setTimeout(() => setVisibleCards(['edu-0', 'edu-1', 'edu-2']), 600);
          // Then certifications
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
      { threshold: 0.3 }
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

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2023 - 2026",
      status: "Currently Pursuing"
    },
    {
      degree: "Higher Secondary Education (HSE)",
      period: "2021 - 2023",
      status: "79.17%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      period: "2020 - 2021",
      status: "Completed"
    }
  ];

  const certifications = [
    {
      title: "Joy of Computing using Python",
      provider: "NPTEL",
      score: "66%"
    },
    {
      title: "Database Management System",
      provider: "NPTEL",
      score: "51%"
    },
    {
      title: "VB.NET Fundamentals",
      provider: "INFOSYS SPRINGBOARD",
      score: "Completed"
    },
    {
      title: "Python Programming",
      provider: "INFOSYS SPRINGBOARD",
      score: "Completed"
    },
    {
      title: "Fundamentals of C",
      provider: "INFOSYS SPRINGBOARD",
      score: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Academic/Learning themed background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'float 9s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating educational elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-12 w-24 h-24 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-full opacity-25 animate-float shadow-2xl" style={{
          animation: 'float 6s ease-in-out infinite, glow 4s ease-in-out infinite alternate'
        }}></div>
        
        <div className="absolute top-36 right-20 w-20 h-28 bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-600 rounded-2xl opacity-30 animate-bounce shadow-xl" style={{
          animation: 'bounce 4s ease-in-out infinite, pulse 3s ease-in-out infinite'
        }}></div>

        <div className="absolute bottom-28 left-24 w-32 h-20 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 rounded-xl opacity-20" style={{
          animation: 'float 7s ease-in-out infinite reverse, glow 5s ease-in-out infinite alternate'
        }}></div>

        {/* Academic symbols */}
        <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-gradient-to-br from-emerald-300 to-teal-500 opacity-15" style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animation: 'float 5s ease-in-out infinite, spin 12s linear infinite'
        }}></div>

        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-cyan-300 to-emerald-500 opacity-20" style={{
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          animation: 'float 6s ease-in-out infinite, spin 10s linear infinite reverse'
        }}></div>

        {/* Graduation cap mockup */}
        <div className="absolute top-1/3 left-1/4 w-12 h-8 bg-gradient-to-br from-teal-500 to-emerald-600 opacity-15" style={{
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
          animation: 'float 4s ease-in-out infinite'
        }}></div>

        {/* Books mockup */}
        <div className="absolute bottom-1/4 left-1/3 opacity-20" style={{
          animation: 'float 5s ease-in-out infinite'
        }}>
          <div className="w-3 h-12 bg-emerald-400 rounded-sm mr-1 inline-block"></div>
          <div className="w-3 h-10 bg-teal-400 rounded-sm mr-1 inline-block"></div>
          <div className="w-3 h-14 bg-cyan-400 rounded-sm inline-block"></div>
        </div>

        {/* Floating knowledge particles */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-300 rounded-full opacity-25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-16 text-white group cursor-pointer transition-all duration-700 hover:text-emerald-300 hover:scale-110 relative transform ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          Education & Certifications
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-600 group-hover:w-56 transition-all duration-500 ease-out rounded-full shadow-lg"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100/20 to-cyan-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div>
            <h3 className={`text-2xl font-semibold mb-8 text-center text-card-foreground hover:text-amber-800 transition-colors duration-500 cursor-pointer transform ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className={`bg-card p-6 rounded-xl shadow-sm border hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-700 group cursor-pointer transform ${
                    visibleCards.includes(`edu-${index}`)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-stone-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h4 className="text-lg font-semibold mb-2 text-card-foreground relative z-10 group-hover:text-amber-800 transition-colors duration-300">{edu.degree}</h4>
                  <p className="text-amber-600 font-medium mb-2 relative z-10 group-hover:text-amber-700 transition-colors duration-300">{edu.period}</p>
                  <p className="text-muted-foreground relative z-10 group-hover:text-gray-700 transition-colors duration-300">{edu.status}</p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.3s' }}></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className={`text-2xl font-semibold mb-8 text-center text-card-foreground hover:text-amber-800 transition-colors duration-500 cursor-pointer transform ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`bg-card p-6 rounded-xl shadow-sm border hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-700 group cursor-pointer transform ${
                    visibleCards.includes(`cert-${index}`)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-stone-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h4 className="text-lg font-semibold mb-2 text-card-foreground relative z-10 group-hover:text-amber-800 transition-colors duration-300">{cert.title}</h4>
                  <div className="flex justify-between items-center relative z-10">
                    <p className="text-amber-600 font-medium group-hover:text-amber-700 transition-colors duration-300">{cert.provider}</p>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm group-hover:bg-amber-200 group-hover:scale-110 transition-all duration-300">
                      {cert.score}
                    </span>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-8 left-8 w-1 h-1 bg-amber-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" style={{ animationDelay: '0.7s' }}></div>
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
