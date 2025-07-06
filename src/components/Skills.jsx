
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
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground group cursor-pointer transition-all duration-300 hover:text-amber-900 relative">
          Skills & Technologies
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-amber-800 to-amber-600 group-hover:w-48 transition-all duration-300 ease-out rounded-full"></div>
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
