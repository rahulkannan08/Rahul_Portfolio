import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900/50 via-blue-900 to-purple-900/80 relative overflow-hidden">
      {/* Gradient blend from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-amber-50/20 to-transparent pointer-events-none"></div>

      {/* Professional Tech Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-500 rounded-full opacity-30 animate-float shadow-xl" style={{
          animation: 'float 6s ease-in-out infinite, glow 4s ease-in-out infinite alternate'
        }}></div>
        
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-full opacity-40 animate-bounce shadow-lg" style={{
          animation: 'bounce 4s ease-in-out infinite, pulse 3s ease-in-out infinite'
        }}></div>

        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-600 rounded-full opacity-25" style={{
          animation: 'float 7s ease-in-out infinite reverse, glow 5s ease-in-out infinite alternate'
        }}></div>

        {/* Tech shapes */}
        <div className="absolute top-1/4 left-3/4 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 opacity-30" style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animation: 'float 4s ease-in-out infinite, spin 10s linear infinite'
        }}></div>

        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-25" style={{
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          animation: 'float 5s ease-in-out infinite, spin 8s linear infinite reverse'
        }}></div>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 text-white group cursor-pointer transition-all duration-700 hover:text-cyan-300 hover:scale-110 relative transform ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            About Me
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-32 transition-all duration-500 ease-out rounded-full shadow-lg"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-100/20 to-blue-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-stone-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground relative z-10 group-hover:text-amber-800 transition-colors duration-300">Background</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                  I'm currently pursuing my BCA degree (2023-2026), diving deep into the world of computer applications 
                  and software development. My journey in programming started with Python and has expanded to web technologies.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-stone-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground relative z-10 group-hover:text-amber-800 transition-colors duration-300">Interests & Focus</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                  I'm passionate about full-stack development, with a strong interest in creating user-friendly web applications. Alongside coding, I enjoy working on UI/UX design to craft intuitive digital experiences and also explore graphic design (thumbnails, Canva designs, and creative visuals) to strengthen my design sense. Currently, I'm diving deeper into the React ecosystem and prompt engineering, while expanding my skills in UI/UX tools like Figma and planning to learn Miro for collaborative design.
                  </p>
              </div>
            </div>
            
            <div className={`bg-gradient-to-br from-amber-50 to-stone-50 p-8 rounded-xl border hover:shadow-2xl hover:scale-110 transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-10 opacity-0 rotate-3'} group cursor-pointer`}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 to-stone-100/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center animate-glow group-hover:animate-pulse group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-125">
                  <span className="text-4xl font-bold text-amber-800 group-hover:text-amber-900 transition-colors duration-300">R</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-900 transition-colors duration-300">Rahul</h3>
                <p className="text-muted-foreground group-hover:text-gray-700 transition-colors duration-300">BCA Student & Developer</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse group-hover:bg-amber-500 transition-colors duration-300"></div>
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse group-hover:bg-amber-500 transition-colors duration-300" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse group-hover:bg-amber-500 transition-colors duration-300" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient blend to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-purple-900/50 pointer-events-none"></div>
    </section>
  );
};

export default About;
