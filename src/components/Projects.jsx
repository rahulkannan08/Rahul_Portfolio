
import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setVisibleCards([0]), 300);
          setTimeout(() => setVisibleCards([0, 1]), 600);
        } else {
          setIsVisible(false);
          setVisibleCards([]);
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const element = document.getElementById('projects');
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
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;
    setMousePosition({ x, y });
  };

  const projects = [
    {
      title: "PHOTO FLAPPY",
      subtitle: "Flappy Bird-style Game (Web-Based)",
      description: "Developed using HTML, CSS, JavaScript with touch/keyboard controls, sound effects, and customizable assets. Designed and implemented responsive layout and game logic.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Touch/Keyboard Controls", "Sound Effects", "Responsive Design", "Game Logic"],
      gradient: "from-blue-500 to-purple-600",
      accentColor: "blue"
    },
    {
      title: "CAMPUS MANAGEMENT SYSTEM",
      subtitle: "College Information Portal",
      description: "Developed for college administration using advanced CSS and responsive design principles. Enabled efficient handling of student records, staff details, and administrative workflows.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: ["Student Records", "Staff Management", "Admin Dashboard", "Multi-Role Access"],
      gradient: "from-green-500 to-teal-600",
      accentColor: "green"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="project-orb absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-200/10 to-purple-300/5 rounded-full animate-float-massive blur-3xl"></div>
        <div className="project-orb absolute bottom-32 right-1/4 w-32 h-32 bg-gradient-to-br from-green-200/10 to-teal-300/5 rounded-full animate-float-reverse-slow blur-2xl"></div>
        <div className="project-orb absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-amber-200/15 to-orange-300/10 rounded-full animate-pulse-gentle"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-16 text-foreground group cursor-pointer transition-all duration-1200 relative transform-3d ${
          isVisible ? 'animate-title-emerge opacity-100' : 'opacity-0 scale-50 rotateY-45'
        }`}>
          <span className="inline-block hover:scale-110 hover:rotateX-10 hover:rotateY-5 transition-all duration-700 transform-3d bg-gradient-to-r from-foreground via-amber-800 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-amber-800 via-blue-500 to-amber-600 group-hover:w-44 transition-all duration-1000 ease-out rounded-full shadow-glow animate-shimmer"></div>
          <div className="absolute -inset-6 bg-gradient-to-r from-amber-100/20 via-blue-100/10 to-stone-100/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-2xl transform-3d"></div>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto perspective-2000">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card-3d group bg-card rounded-2xl shadow-2xl border overflow-hidden transform-3d transition-all duration-1000 cursor-pointer relative ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0 rotateX-0 rotateY-0' 
                  : 'opacity-0 translate-y-20 rotateX-20 rotateY-10'
              }`}
              style={{ 
                transitionDelay: `${index * 300}ms`,
                transformStyle: 'preserve-3d'
              }}
              onMouseMove={handleMouseMove}
            >
              {/* Enhanced project header with 3D gradient */}
              <div className={`project-header h-3 bg-gradient-to-r ${project.gradient} relative overflow-hidden group-hover:h-6 transition-all duration-700`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-shine"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse-wave"></div>
                </div>
              </div>
              
              <div 
                className="project-content p-8 relative overflow-hidden transform-3d"
                style={{
                  transform: `perspective(1200px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg) translateZ(10px)`
                }}
              >
                {/* Dynamic background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 via-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform-3d"></div>
                
                <div className="project-title mb-6 relative z-10 transform-3d">
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-all duration-500 transform group-hover:scale-105 group-hover:translateZ-4">
                    {project.title}
                  </h3>
                  <p className={`text-${project.accentColor}-600 font-medium group-hover:text-${project.accentColor}-700 transition-colors duration-500 relative`}>
                    {project.subtitle}
                    <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-${project.accentColor}-400 group-hover:w-full transition-all duration-700 rounded-full`}></div>
                  </p>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-500 transform group-hover:translateZ-2">
                  {project.description}
                </p>
                
                <div className="technologies mb-6 relative z-10 transform-3d">
                  <h4 className="font-semibold mb-3 text-card-foreground group-hover:text-amber-800 transition-colors duration-500">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="tech-tag px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm transition-all duration-500 cursor-default transform-3d hover:scale-110 hover:translateZ-2 hover:shadow-lg"
                        style={{ 
                          transitionDelay: `${techIndex * 100}ms`,
                          animation: `float-gentle 3s ease-in-out infinite ${techIndex * 0.5}s`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="features mb-8 relative z-10 transform-3d">
                  <h4 className="font-semibold mb-3 text-card-foreground group-hover:text-amber-800 transition-colors duration-500">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-muted-foreground group-hover:text-gray-700 transition-all duration-500 transform group-hover:translate-x-2 group-hover:translateZ-1"
                        style={{ transitionDelay: `${featureIndex * 150}ms` }}
                      >
                        <div className={`feature-dot w-2 h-2 bg-${project.accentColor}-500 rounded-full mr-3 animate-pulse-soft group-hover:bg-${project.accentColor}-600 group-hover:scale-125 transition-all duration-500 shadow-glow-sm`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-actions flex gap-4 relative z-10 transform-3d">
                  <button className="action-btn px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all duration-700 transform-3d hover:scale-110 hover:translateZ-4 hover:shadow-2xl hover:bg-amber-600 group-hover:animate-pulse-glow">
                    <span className="relative z-10">View Project</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/50 to-amber-600/50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                  <button className="action-btn px-6 py-3 border border-border rounded-lg transition-all duration-700 transform-3d hover:bg-accent hover:scale-110 hover:translateZ-4 hover:shadow-xl hover:border-amber-300">
                    <span className="relative z-10">GitHub</span>
                  </button>
                </div>
              </div>
              
              {/* Enhanced floating particles with 3D movement */}
              <div className="particle absolute top-8 right-8 w-3 h-3 bg-amber-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-float-3d"></div>
              <div className="particle absolute top-16 right-16 w-2 h-2 bg-blue-500/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-900 animate-ping-3d"></div>
              <div className="particle absolute bottom-8 left-8 w-1 h-1 bg-purple-600/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1100 animate-pulse-3d"></div>
              <div className="particle absolute bottom-16 left-16 w-2 h-2 bg-green-500/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-800 animate-bounce-3d"></div>
              
              {/* Project card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${project.accentColor}-500/10 via-transparent to-amber-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
