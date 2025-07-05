import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger category animations
          setTimeout(() => setVisibleCategories([0]), 200);
          setTimeout(() => setVisibleCategories([0, 1]), 400);
          setTimeout(() => setVisibleCategories([0, 1, 2]), 600);
          setTimeout(() => setVisibleCategories([0, 1, 2, 3]), 800);
        } else {
          setIsVisible(false);
          setVisibleCategories([]);
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
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
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="skill-orb absolute top-16 right-10 w-24 h-24 bg-gradient-to-br from-cyan-200/20 to-cyan-400/10 rounded-full animate-float-orbit"></div>
        <div className="skill-orb absolute bottom-20 left-16 w-20 h-20 bg-gradient-to-br from-purple-200/20 to-purple-400/10 rounded-full animate-float-reverse"></div>
        <div className="skill-orb absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-amber-200/10 to-amber-400/5 rounded-full animate-pulse-giant"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-16 text-amber-600 group cursor-pointer transition-all duration-1000 relative transform-3d ${
          isVisible ? 'animate-emerge-3d opacity-100' : 'opacity-0 scale-75 rotateX-45'
        }`}>
          <span className="inline-block hover:scale-110 hover:rotateY-10 transition-all duration-600 transform-3d bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
            Skills & Technologies
          </span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-amber-600 to-blue-600 group-hover:w-48 transition-all duration-700 ease-out rounded-full shadow-glow"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto perspective-2000">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`skill-card-3d bg-card p-8 rounded-xl shadow-xl border transform-3d transition-all duration-1000 group cursor-pointer relative overflow-hidden ${
                visibleCategories.includes(categoryIndex)
                  ? 'opacity-100 translate-y-0 rotateX-0'
                  : 'opacity-0 translate-y-10 rotateX-15'
              }`}
              style={{ 
                transitionDelay: `${categoryIndex * 200}ms`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
              
              {/* Category header with 3D effect */}
              <div className="relative z-10 mb-6">
                <h3 className="text-xl font-semibold text-card-foreground text-center group-hover:text-amber-800 transition-all duration-500 transform group-hover:scale-105 group-hover:translateZ-2">
                  {category.title}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto mt-2 rounded-full animate-shimmer"></div>
              </div>

              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item group/skill transform-3d">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground skill-percentage">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-container w-full bg-muted rounded-full h-3 overflow-hidden shadow-inner relative">
                      <div 
                        className={`skill-bar bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1500 ease-out relative overflow-hidden transform-3d group-hover/skill:scale-105`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white opacity-20 animate-pulse-wave"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-shine"></div>
                      </div>
                      
                      {/* Skill bar glow effect */}
                      <div 
                        className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover/skill:opacity-30 transition-all duration-500 blur-sm`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating particles inside card */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400/60 rounded-full animate-float-gentle opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-400/60 rounded-full animate-ping-soft opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-1/2 right-8 w-0.5 h-0.5 bg-purple-400/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-900"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
