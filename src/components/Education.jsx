
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
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 text-foreground group cursor-pointer transition-all duration-700 hover:text-amber-900 hover:scale-110 relative transform ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          Education & Certifications
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-amber-800 to-amber-600 group-hover:w-56 transition-all duration-500 ease-out rounded-full shadow-lg"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-100/20 to-stone-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
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
