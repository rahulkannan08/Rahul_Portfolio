
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "PHOTO FLAPPY",
      subtitle: "Flappy Bird-style Game (Web-Based)",
      description: "Developed using HTML, CSS, JavaScript with touch/keyboard controls, sound effects, and customizable assets. Designed and implemented responsive layout and game logic.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Touch/Keyboard Controls", "Sound Effects", "Responsive Design", "Game Logic"]
    },
    {
      title: "CAMPUS MANAGEMENT SYSTEM",
      subtitle: "College Information Portal",
      description: "Developed for college administration using advanced CSS and responsive design principles. Enabled efficient handling of student records, staff details, and administrative workflows.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: ["Student Records", "Staff Management", "Admin Dashboard", "Multi-Role Access"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Featured Projects</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="group bg-card rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-amber-600 font-medium">{project.subtitle}</p>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-card-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-card-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-all duration-300">
                    View Project
                  </button>
                  <button className="px-6 py-2 border border-border rounded-lg hover:bg-accent transition-all duration-300">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
