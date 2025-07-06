
import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-600" },
        { name: "C", level: 75, color: "from-gray-400 to-gray-600" },
        { name: "HTML/CSS", level: 90, color: "from-orange-400 to-orange-600" }
      ]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Node.js", level: 70, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 70, color: "from-gray-400 to-gray-600" },
        { name: "React", level: 60, color: "from-cyan-400 to-cyan-600" },
        { name: "MongoDB", level: 65, color: "from-green-500 to-green-700" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 65, color: "from-green-400 to-green-600" },
        { name: "Oracle", level: 55, color: "from-red-400 to-red-600" }
      ]
    },
    {
      title: "Currently Learning",
      skills: [
        { name: "React", level: 60, color: "from-blue-400 to-blue-600" },
        { name: "Prompt Engineering", level: 50, color: "from-purple-400 to-purple-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Code-themed background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
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

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-white group cursor-pointer transition-all duration-300 hover:text-purple-300 relative">
          Skills & Technologies
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-400 to-pink-600 group-hover:w-48 transition-all duration-300 ease-out rounded-full"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-6 text-card-foreground text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out group-hover:scale-105 relative overflow-hidden`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transition: 'width 1.5s ease-out'
                        }}
                      >
                        <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
