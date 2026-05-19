import React, { useState, useEffect, useRef, useMemo } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  // Stable decorative dots — computed once, never on re-render
  const floatingDots = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${3 + (i * 4.7) % 92}%`,
        top: `${3 + (i * 5.1) % 91}%`,
        duration: `${4 + (i % 3)}s`,
        delay: `${(i % 4) * 0.5}s`,
      })),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
          // Disconnect after first trigger — no more resets
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "VoiceShield AI – Multilingual AI Voice Detection System",
      subtitle: "🤖 AI-Powered Audio Forensics Platform",
      description: "AI-powered audio forensics platform that detects whether a voice sample is AI-generated or human-spoken across Tamil, English, Hindi, Malayalam, and Telugu. Built a REST API pipeline for multilingual deepfake voice detection with real-time inference, confidence scoring, and robust audio preprocessing for noisy and compressed recordings.",
      technologies: ["Python", "FastAPI", "Postman", "gTTS", "Pydub", "NumPy", "FFmpeg"],
      features: ["Multilingual Voice Detection", "Deepfake Audio Forensics", "Real-time Inference", "Confidence Scoring", "REST API Pipeline", "Noise-robust Preprocessing"],
      gradient: "from-rose-500 via-red-600 to-orange-600",
      viewLink: "https://github.com/rahulkannan08",
      githubLink: "https://github.com/rahulkannan08",
      badge: "AI Forensics"
    },
    {
      title: "AgriVision AI (AgriGuard) – Crop Disease Detection & Advisory",
      subtitle: "🌱 AI-Powered Agricultural Intelligence Platform",
      description: "AI-driven agricultural intelligence platform that detects crop diseases from leaf images and provides treatment recommendations, multilingual voice guidance, and outbreak heatmap analytics for farmers and field teams.",
      technologies: ["Python", "PyTorch", "OpenCV", "ElevenLabs", "LiveKit", "FastAPI", "Node.js", "TypeScript", "Next.js", "MongoDB", "NVIDIA AI APIs", "Gemini API"],
      features: ["Crop Disease Detection", "AI Treatment Recommendations", "Multilingual Voice Guidance", "Outbreak Heatmap Analytics", "Farmer Dashboard", "Real-time Advisory"],
      gradient: "from-green-500 via-emerald-600 to-teal-600",
      viewLink: "https://github.com/rahulkannan08/agriGuard-Ai",
      githubLink: "https://github.com/rahulkannan08/agriGuard-Ai",
      badge: "AgriTech AI"
    },
    {
      title: "Smart Scheme – Government Scheme Information Portal",
      subtitle: "📋 AI Chatbot for Scheme Discovery",
      description: "A web application that provides information about government and organizational schemes. Users can view scheme details, eligibility, and how to apply. An integrated AI chatbot powered by Gemini API helps answer user questions in real-time.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Gemini API"],
      features: ["Scheme Discovery", "Eligibility Checker", "AI Chatbot (Gemini)", "Application Guide", "Responsive Design", "Real-time Q&A"],
      gradient: "from-sky-500 via-blue-600 to-indigo-600",
      viewLink: "https://smartscheme.vercel.app/",
      githubLink: "https://github.com/rahulkannan08/smartscheme",
      badge: "GovTech"
    },
    {
      title: "LOOKBOOKgen - AI Fashion Content Generator",
      subtitle: "🏆 PixelRiot International Hackathon Finalist",
      description: "Selected as a finalist in PixelRiot - THE CREATIVE TECH HACKATHON THAT BROKE THE INTERNET! Built an AI-powered fashion platform to reduce clothing waste by enabling market research before mass production. Features interactive aurora canvas animations, AI avatar generation from real model photos, and infinite fashion carousels. Mission: Slow fashion above fast fashion - reducing waste, not jobs.",
      technologies: ["Next.js", "React", "Framer Motion", "Canvas API", "CSS Modules"],
      features: ["AI Lookbook Generator", "Interactive Aurora Animation", "Before/After Showcase", "Infinite Fashion Carousel", "Market Validation Tool"],
      gradient: "from-pink-500 via-purple-600 to-indigo-600",
      viewLink: "https://lookwand.vercel.app/",
      githubLink: "https://github.com/rahulkannan08/lookwand",
      badge: "International Finalist"
    },
    {
      title: "WAME - Tournament & Coaching Management",
      subtitle: "🎯 Tech4SocialGood Hackathon (OASIS, FOSS United)",
      description: "Participated in Tech4SocialGood Hackathon by OASIS and FOSS United. Built a comprehensive web application for managing sports tournaments and coaching programs with integrated activity tracking. Implemented Google OAuth for seamless authentication and Google Fit API integration to track player fitness activities. Leveraged Supabase for real-time data sync and SQLite for tournament management (4 teams, 32 players). Full-stack solution combining Django REST Framework backend with Next.js frontend.",
      technologies: ["Django", "Next.js", "React", "Google OAuth", "Google Fit API", "Supabase", "SQLite"],
      features: ["Google Fit Activity Tracker", "OAuth Authentication", "Tournament Management", "Player Dashboard", "Real-time Sync", "Match Scheduling"],
      gradient: "from-emerald-500 to-teal-600",
      viewLink: "https://github.com/rahulkannan08/wame_frontend",
      githubLink: "https://github.com/rahulkannan08/wame_frontend",
      badge: "Social Good"
    },
    {
      title: "PHOTO FLAPPY",
      subtitle: "Flappy Bird-style Game (Web-Based)",
      description: "Developed using HTML, CSS, JavaScript with touch/keyboard controls, sound effects, and customizable assets. Designed and implemented responsive layout and game logic.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Touch/Keyboard Controls", "Sound Effects", "Responsive Design", "Game Logic"],
      gradient: "from-blue-500 to-purple-600",
      viewLink: "https://github.com/rahulkannan08/PHOTO-FLAPPY",
      githubLink: "https://github.com/rahulkannan08/PHOTO-FLAPPY"
    },
    {
      title: "CAMPUS MANAGEMENT SYSTEM",
      subtitle: "College Information Portal",
      description: "Developed for college administration using advanced CSS and responsive design principles. Enabled efficient handling of student records, staff details, and administrative workflows.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: ["Student Records", "Staff Management", "Admin Dashboard", "Multi-Role Access"],
      gradient: "from-green-500 to-teal-600",
      viewLink: "https://github.com/rahulkannan08/CAMPUS-MANAGEMENT",
      githubLink: "https://github.com/rahulkannan08/CAMPUS-MANAGEMENT"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-indigo-900/80 via-purple-900 to-emerald-900/60 relative overflow-hidden">
      {/* Gradient blend from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/30 to-transparent pointer-events-none"></div>

      {/* Project/Portfolio themed background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'float 12s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating project elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-20 bg-gradient-to-br from-violet-400 via-purple-500 to-pink-500 rounded-2xl opacity-25 animate-float shadow-2xl" style={{
          animation: 'float 7s ease-in-out infinite, glow 4s ease-in-out infinite alternate'
        }}></div>

        <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 rounded-full opacity-30 animate-bounce shadow-xl" style={{
          animation: 'bounce 4s ease-in-out infinite, pulse 3s ease-in-out infinite'
        }}></div>

        <div className="absolute bottom-32 right-32 w-28 h-16 bg-gradient-to-br from-pink-400 via-violet-500 to-indigo-600 rounded-xl opacity-20" style={{
          animation: 'float 8s ease-in-out infinite reverse, glow 5s ease-in-out infinite alternate'
        }}></div>

        {/* Window/browser mockups */}
        <div className="absolute top-1/4 right-1/4 w-20 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg opacity-15" style={{
          animation: 'float 5s ease-in-out infinite'
        }}>
          <div className="flex space-x-1 p-2">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-1/3 left-1/4 w-16 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-md opacity-20" style={{
          animation: 'float 6s ease-in-out infinite reverse'
        }}>
          <div className="flex space-x-1 p-1">
            <div className="w-1 h-1 bg-indigo-400 rounded-full"></div>
            <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
            <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
          </div>
        </div>

        {/* Code snippets */}
        <div className="absolute top-1/2 left-[16%] text-3xl font-mono text-indigo-300 opacity-15 animate-pulse select-none">{'</>'}</div>
        <div className="absolute bottom-1/4 right-[20%] text-2xl font-mono text-violet-300 opacity-20 select-none" style={{ animation: 'float 5s ease-in-out infinite' }}>{'()'}</div>

        {/* Floating dots — stable positions via useMemo */}
        {floatingDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-30"
            style={{
              left: dot.left,
              top: dot.top,
              animation: `float ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-white group cursor-pointer transition-all duration-700 hover:text-violet-300 hover:scale-110 relative transform ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          Featured Projects
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-violet-400 to-pink-600 group-hover:w-44 transition-all duration-500 ease-out rounded-full shadow-lg"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-100/20 to-pink-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative group bg-card rounded-xl shadow-sm border overflow-hidden hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-700 cursor-pointer transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Project header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient} group-hover:h-4 transition-all duration-500`}></div>

              {/* Hackathon Badge */}
              {project.badge && (
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
                  <div className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg animate-pulse">
                    {project.badge}
                  </div>
                </div>
              )}

              <div className="p-4 sm:p-6 md:p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-stone-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="mb-4 sm:mb-6 relative z-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-card-foreground group-hover:text-primary group-hover:scale-105 transition-all duration-500 transform-gpu">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-amber-600 font-medium group-hover:text-amber-700 transition-colors duration-300">{project.subtitle}</p>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="mb-6 relative z-10">
                  <h4 className="font-semibold mb-3 text-card-foreground group-hover:text-amber-800 transition-colors duration-300">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm hover:bg-amber-200 hover:scale-110 transition-all duration-300 cursor-default group-hover:shadow-lg"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6 relative z-10">
                  <h4 className="font-semibold mb-3 text-card-foreground group-hover:text-amber-800 transition-colors duration-300">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground group-hover:text-gray-700 transition-all duration-300 transform group-hover:translate-x-2"
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse group-hover:bg-amber-600 group-hover:scale-125 transition-all duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 sm:gap-3 md:gap-4 relative z-10 flex-wrap">
                  <a href={project.viewLink} target="_blank" rel="noopener noreferrer">
                    <button className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base bg-primary text-primary-foreground rounded-lg hover:scale-110 hover:shadow-lg transition-all duration-500 btn-pulse hover-glow group-hover:bg-amber-600">
                      View Project
                    </button>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <button className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base border border-border rounded-lg hover:bg-accent hover:scale-110 hover:shadow-lg transition-all duration-500 card-hover group-hover:border-amber-300">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>

              {/* Enhanced hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-50/20 to-amber-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Floating particles on hover */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-amber-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" style={{ animationDelay: '0.8s' }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient blend to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-emerald-900/50 pointer-events-none"></div>
    </section>
  );
};

export default Projects;
