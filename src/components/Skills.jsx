
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C", level: 75 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 70 },
        { name: "React", level: 60 },
        { name: "MongoDB", level: 65 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 65 },
        { name: "Oracle", level: 55 }
      ]
    },
    {
      title: "Currently Learning",
      skills: [
        { name: "React", level: 60 },
        { name: "Prompt Engineering", level: 50 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-card-foreground text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full transition-all duration-1000 ease-out group-hover:scale-105"
                        style={{ width: `${skill.level}%` }}
                      ></div>
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
