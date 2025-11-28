import React, { useState, useEffect } from 'react';

const Design = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger card animations
          setTimeout(() => setVisibleCards([0]), 200);
          setTimeout(() => setVisibleCards([0, 1]), 400);
          setTimeout(() => setVisibleCards([0, 1, 2]), 600);
          setTimeout(() => setVisibleCards([0, 1, 2, 3]), 800);
          setTimeout(() => setVisibleCards([0, 1, 2, 3, 4]), 1000);
          setTimeout(() => setVisibleCards([0, 1, 2, 3, 4, 5]), 1200);
        } else {
          setIsVisible(false);
          setVisibleCards([]);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('design');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const designWorks = [
    {
      title: "VESENEX - Homepage UI Design",
      category: "UI/UX Design",
      description: "Crafted a modern and intuitive homepage design for VESENEX platform. Features clean layouts, contemporary design patterns, and user-centric interface elements. Focused on creating a seamless user experience with attention to visual hierarchy and brand aesthetics.",
      tools: ["Figma", "UI Design", "Prototyping"],
      features: ["Modern Interface", "User-Centric Design", "Responsive Layout", "Visual Hierarchy"],
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      viewLink: "https://www.figma.com/design/sLPEEtViw6AS4m1KFFWyNF/VESENEX-%E2%80%93-Homepage.?node-id=0-1&t=tQnZmjxH6jgJdq2g-1",
      badge: "Figma",
      icon: "🎨"
    },
    {
      title: "BrainyMedic - NEET Tamil Platform",
      category: "UX/Wireframing",
      description: "Designing a comprehensive educational platform for NEET aspirants with Tamil language support. Currently in wireframe stage with focus on intuitive navigation, learning modules, and student-friendly interface. Building a scalable design system for future development.",
      tools: ["Figma", "Wireframing", "UX Design", "Design Systems"],
      features: ["Educational UX", "Wireframe Design", "Tamil Language UI", "Learning Platform"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      viewLink: "https://www.figma.com/design/6Dc0MCYhOsHZ7wApYkiDyl/BrainyMedic-Neet-Tamil?node-id=40-1498&t=1RN7fsc28BMLRHAy-1",
      badge: "In Progress",
      icon: "📚"
    },
    {
      title: "_meme.o.meme - Instagram Community",
      category: "Social Media Management",
      description: "Managing and curating an engaging Instagram meme page as a creative side project. Creating relatable content during free time, building community engagement, and exploring digital content creation. Focused on humor, trending topics, and connecting with audiences through visual storytelling. Content posted whenever inspiration strikes.",
      tools: ["Instagram", "Content Curation", "Community Building", "Social Media"],
      features: ["Curated Content", "Community Engagement", "Trend Analysis", "Visual Storytelling"],
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      viewLink: "https://www.instagram.com/_meme.o.meme?igsh=MWloNGd0a3F0cjAxbA==",
      badge: "Creative Hobby",
      icon: "😄"
    },
    {
      title: "Naming Ceremony Poster Design",
      category: "Graphic Design",
      description: "Created vibrant and eye-catching birthday celebration poster for a real client event. Successfully delivered a custom design that was used in the actual celebration, showcasing professional poster design skills with attention to festive aesthetics and client requirements. Featured on LinkedIn with positive client feedback.",
      tools: ["Canva", "Graphic Design", "Print Design", "Typography"],
      features: ["Client Project", "Real-world Application", "Festive Design", "Custom Typography"],
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      viewLink: "https://www.linkedin.com/posts/rahul0808_graphicdesign-milestone-posterdesign-activity-7380461905984831488-hpNi",
      linkedinLink: "https://www.linkedin.com/posts/rahul0808_graphicdesign-milestone-posterdesign-activity-7380461905984831488-hpNi",
      canvaLink: "https://www.canva.com/design/DAG0hQJqUxU/dhe-gYvNdRu7dQ3DKsQE2w/view",
      badge: "Client Work",
      icon: "🎉"
    },
    {
      title: "College Event Poster",
      category: "Graphic Design",
      description: "Designed professional college event poster with modern layouts and striking visuals. Focused on clear communication of event details while maintaining visual appeal and brand consistency for institutional events.",
      tools: ["Canva", "Event Design", "Typography", "Layout Design"],
      features: ["Event Branding", "Clear Messaging", "Professional Layout", "Print Ready"],
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      viewLink: "https://www.canva.com/design/DAGuLSNTSzY/LtoKFWfeq2RpUNQ2DLD96Q/view",
      badge: "Event Design",
      icon: "🎓"
    },
    {
      title: "YouTube Thumbnail & Presentation Design",
      category: "Visual Content",
      description: "Crafted engaging YouTube thumbnails with attention-grabbing visuals and custom presentation designs. Combined graphic design principles with content strategy to create compelling visuals that drive engagement and professional presentation materials.",
      tools: ["Canva", "Thumbnail Design", "Presentation Design", "Visual Communication"],
      features: ["YouTube Thumbnails", "Presentation Slides", "Brand Consistency", "Engagement-focused"],
      gradient: "from-red-500 via-pink-500 to-purple-500",
      viewLink: "https://www.canva.com/design/DAGuO-la5dg/kFEbDNMpVAIY4ADs-l064A/view",
      presentationLink: "https://www.canva.com/design/DAGuPBw3L0g/4xcoKMpwFjkydzkFfX3WuQ/view",
      badge: "Content Design",
      icon: "🎬"
    }
  ];

  return (
    <section id="design" className="py-20 bg-gradient-to-br from-purple-900/70 via-pink-900/60 to-indigo-900/80 relative overflow-hidden">
      {/* Gradient blend from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-emerald-900/50 to-transparent pointer-events-none"></div>

      {/* Design-themed background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(167, 139, 250, 0.3) 0%, transparent 50%),
            linear-gradient(rgba(167, 139, 250, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 50px 50px, 50px 50px',
          animation: 'float 15s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 rounded-full opacity-20 animate-float shadow-2xl blur-xl"></div>
        <div className="absolute top-40 right-16 w-40 h-40 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-600 rounded-2xl opacity-25 animate-bounce shadow-xl blur-lg" style={{
          animation: 'bounce 5s ease-in-out infinite, pulse 4s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-32 right-32 w-28 h-28 bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600 rounded-full opacity-20" style={{
          animation: 'float 9s ease-in-out infinite reverse, glow 6s ease-in-out infinite alternate'
        }}></div>

        {/* Design icons floating */}
        <div className="absolute top-1/3 left-1/4 text-4xl opacity-10 animate-pulse">🎨</div>
        <div className="absolute bottom-1/3 right-1/4 text-3xl opacity-15 animate-float">✨</div>
        <div className="absolute top-1/2 right-1/3 text-2xl opacity-10 animate-bounce">🖌️</div>

        {/* Floating dots */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white group cursor-pointer transition-all duration-700 hover:text-pink-300 hover:scale-110 relative transform ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          Design & Creative Work
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-pink-400 to-purple-600 group-hover:w-64 transition-all duration-500 ease-out rounded-full shadow-lg"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-100/20 to-purple-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
        </h2>
        
        <p className={`text-center text-purple-200 mb-12 sm:mb-16 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Exploring creativity through UI/UX design, graphic design, and social media content creation
        </p>
        
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {designWorks.map((work, index) => (
            <div 
              key={index} 
              className={`group bg-card rounded-xl shadow-sm border overflow-hidden hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-700 cursor-pointer transform ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0 rotate-0' 
                  : 'opacity-0 translate-y-10 rotate-1'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${work.gradient} group-hover:h-4 transition-all duration-500`}></div>
              
              {/* Badge */}
              {work.badge && (
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
                  <div className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg animate-pulse">
                    {work.badge}
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 text-2xl sm:text-3xl md:text-4xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                {work.icon}
              </div>
              
              <div className="p-4 sm:p-6 md:p-8 pt-12 sm:pt-14 md:pt-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="mb-4 sm:mb-6 relative z-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-card-foreground group-hover:text-primary group-hover:scale-105 transition-all duration-500 transform-gpu">
                    {work.title}
                  </h3>
                  <p className="text-sm sm:text-base text-purple-600 font-medium group-hover:text-pink-700 transition-colors duration-300">{work.category}</p>
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                  {work.description}
                </p>
                
                <div className="mb-6 relative z-10">
                  <h4 className="font-semibold mb-3 text-card-foreground group-hover:text-purple-800 transition-colors duration-300">Tools & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {work.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex} 
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200 hover:scale-110 transition-all duration-300 cursor-default group-hover:shadow-lg"
                        style={{ transitionDelay: `${toolIndex * 50}ms` }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6 relative z-10">
                  <h4 className="font-semibold mb-3 text-card-foreground group-hover:text-purple-800 transition-colors duration-300">Highlights:</h4>
                  <ul className="space-y-2">
                    {work.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-muted-foreground group-hover:text-gray-700 transition-all duration-300 transform group-hover:translate-x-2"
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse group-hover:bg-pink-600 group-hover:scale-125 transition-all duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2 sm:gap-3 md:gap-4 relative z-10 flex-wrap">
                  <a href={work.viewLink} target="_blank" rel="noopener noreferrer">
                    <button className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base bg-primary text-primary-foreground rounded-lg hover:scale-110 hover:shadow-lg transition-all duration-500 btn-pulse hover-glow group-hover:bg-purple-600">
                      {work.category === "Social Media Management" ? "Check It Out" : "View Design"}
                    </button>
                  </a>
                  {work.linkedinLink && (
                    <a href={work.linkedinLink} target="_blank" rel="noopener noreferrer">
                      <button className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base border border-border rounded-lg hover:bg-accent hover:scale-110 hover:shadow-lg transition-all duration-500 card-hover group-hover:border-purple-300">
                        LinkedIn Post
                      </button>
                    </a>
                  )}
                  {work.canvaLink && (
                    <a href={work.canvaLink} target="_blank" rel="noopener noreferrer">
                      <button className="px-6 py-2 border border-border rounded-lg hover:bg-accent hover:scale-110 hover:shadow-lg transition-all duration-500 card-hover group-hover:border-pink-300">
                        Canva Design
                      </button>
                    </a>
                  )}
                  {work.presentationLink && (
                    <a href={work.presentationLink} target="_blank" rel="noopener noreferrer">
                      <button className="px-6 py-2 border border-border rounded-lg hover:bg-accent hover:scale-110 hover:shadow-lg transition-all duration-500 card-hover group-hover:border-pink-300">
                        Presentation
                      </button>
                    </a>
                  )}
                </div>
              </div>
              
              {/* Enhanced hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-50/20 to-pink-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Floating particles on hover */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-pink-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" style={{ animationDelay: '0.8s' }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient blend to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-purple-900/50 pointer-events-none"></div>
    </section>
  );
};

export default Design;
