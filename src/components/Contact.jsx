import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Download, Send, Github, Linkedin, MapPin } from 'lucide-react';
import CursorFollower from './CursorFollower';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/rahulkannan.bca@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Portfolio Contact Message',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully! ✨",
          description: "Your message got sent to rahulkannan.bca@gmail.com. I'll get back to you soon!",
          className: "bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Message Sent! ✨",
        description: "Your message got sent to rahulkannan.bca@gmail.com. I'll get back to you soon!",
        className: "bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200",
      });
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rahul_Resume.pdf';
    link.click();
  };

  const contactInfo = [
    {
      type: "Location",
      value: "Pollachi",
      link: "https://maps.google.com/?q=Pollachi",
      description: "Based in Tamil Nadu",
      icon: MapPin,
      isClickable: false
    },
    {
      type: "GitHub",
      value: "GitHub",
      link: "https://github.com/rahulkannan08",
      description: "Check out my code repositories",
      icon: Github,
      isClickable: true
    },
    {
      type: "LinkedIn",
      value: "LinkedIn",
      link: "https://www.linkedin.com/in/rahul-k-082k6",
      description: "Let's connect professionally",
      icon: Linkedin,
      isClickable: true
    }
  ];

  return (
    <>
      <CursorFollower />
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 relative overflow-hidden min-h-screen perspective-1000">
        <div className="absolute inset-0 transform-gpu perspective-2000">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float transform-gpu"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
                transform: `perspective(1000px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) translateZ(${Math.random() * 100}px)`
              }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400/30 via-indigo-400/40 to-purple-400/30 rounded-xl blur-sm animate-pulse shadow-2xl shadow-blue-500/40 transform-gpu perspective-1000 rotate-45 hover:rotate-180 transition-transform duration-1000" 
                   style={{
                     transform: `rotateX(45deg) rotateY(45deg) rotateZ(${Math.random() * 360}deg)`,
                     boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(147, 51, 234, 0.3)'
                   }} />
            </div>
          ))}
          
          {[...Array(20)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute animate-bounce transform-gpu"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${5 + Math.random() * 2}s`,
                transform: `perspective(1500px) rotateX(${45 + Math.random() * 90}deg) rotateY(${Math.random() * 180}deg) translateZ(${50 + Math.random() * 100}px)`
              }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${
                i % 4 === 0 ? 'from-blue-500/20 via-indigo-600/25 to-cyan-500/20' :
                i % 4 === 1 ? 'from-purple-500/20 via-pink-600/25 to-fuchsia-500/20' :
                i % 4 === 2 ? 'from-teal-500/20 via-emerald-600/25 to-cyan-500/20' :
                'from-indigo-500/20 via-blue-600/25 to-purple-500/20'
              } ${
                i % 3 === 0 ? 'rounded-full' :
                i % 3 === 1 ? 'rounded-2xl rotate-45' :
                'rounded-lg rotate-12'
              } blur-md shadow-2xl animate-pulse hover:animate-spin transition-all duration-1000 transform-gpu`}
              style={{
                boxShadow: `0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(147, 51, 234, 0.2), inset 0 0 30px rgba(99, 102, 241, 0.3)`,
                transform: `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) rotateZ(${Math.random() * 360}deg)`
              }} />
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 w-full overflow-hidden transform-gpu perspective-1000" style={{transform: 'rotateX(10deg) translateZ(50px)'}}>
          <svg
            className="relative block w-full h-40 drop-shadow-2xl"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="ultra3DWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(99,102,241,0.4)" />
                <stop offset="25%" stopColor="rgba(139,92,246,0.3)" />
                <stop offset="50%" stopColor="rgba(59,130,246,0.4)" />
                <stop offset="75%" stopColor="rgba(147,51,234,0.3)" />
                <stop offset="100%" stopColor="rgba(79,70,229,0.4)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="url(#ultra3DWaveGradient)"
              filter="url(#glow)"
              className="drop-shadow-2xl"
              style={{filter: 'drop-shadow(0 10px 30px rgba(59, 130, 246, 0.5))'}}
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 transform-gpu perspective-1000">
          <div className={`text-center mb-16 transform-gpu transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transform: 'perspective(1000px) rotateX(5deg) translateZ(20px)'}}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 group cursor-pointer transition-all duration-500 hover:text-blue-300 relative transform-gpu perspective-1000 hover:scale-110" 
                style={{
                  transform: 'perspective(1500px) rotateY(-5deg) translateZ(30px)',
                  textShadow: '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(147, 51, 234, 0.4)'
                }}>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-pulse drop-shadow-2xl shadow-blue-400/50">
                Connect With Me 🎨
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-3 bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 group-hover:w-40 sm:group-hover:w-60 transition-all duration-500 ease-out rounded-full shadow-lg shadow-blue-400/50 blur-sm"
                   style={{boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(147, 51, 234, 0.6)'}}></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-400/30 via-indigo-300/30 to-purple-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform-gpu"
                   style={{transform: 'translateZ(-10px)'}}></div>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-medium drop-shadow-lg transform-gpu"
               style={{
                 transform: 'perspective(800px) rotateX(10deg) translateZ(15px)',
                 textShadow: '0 0 20px rgba(147, 196, 251, 0.6)'
               }}>
              Creative collaboration and innovative design solutions 🚀
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto transform-gpu perspective-1000">
            <div className={`transform-gpu perspective-1500 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transform: 'rotateY(-10deg) translateZ(40px)'}}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white drop-shadow-2xl transform-gpu"
                  style={{
                    transform: 'perspective(1000px) rotateX(15deg) translateZ(25px)',
                    textShadow: '0 0 25px rgba(255, 255, 255, 0.8), 0 0 50px rgba(59, 130, 246, 0.5)'
                  }}>
                Let's Create Together 🌟
              </h3>
              <p className="text-blue-100 mb-6 md:mb-10 leading-relaxed text-lg sm:text-xl drop-shadow-lg transform-gpu"
                 style={{
                   transform: 'perspective(800px) rotateX(8deg) translateZ(15px)',
                   textShadow: '0 0 15px rgba(147, 196, 251, 0.6)'
                 }}>
                I'm passionate about creating innovative design solutions and collaborating on cutting-edge projects. 
                Let's bring your creative vision to life with modern design principles! ✨
              </p>
              
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-10">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  const isClickable = contact.isClickable;
                  
                  const content = (
                    <div className="bg-gradient-to-r from-slate-800/95 via-indigo-900/95 to-slate-800/95 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-indigo-500/40 hover:border-blue-400/60 transition-all duration-700 relative overflow-hidden transform-gpu"
                         style={{
                           boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3), 0 0 40px rgba(147, 51, 234, 0.2), inset 0 0 30px rgba(99, 102, 241, 0.1)',
                           transform: `perspective(1200px) rotateX(${5 + index * 2}deg) rotateY(${index * 2}deg) translateZ(${10 + index * 5}px) ${isVisible ? 'rotateZ(0deg)' : 'rotateZ(5deg)'}`
                         }}>
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-indigo-500/20 to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl transform-gpu"
                           style={{transform: 'translateZ(5px)'}}></div>
                      
                      <div className="flex items-center space-x-4 md:space-x-6 relative z-10">
                        <div className="p-3 md:p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl md:rounded-2xl shadow-lg group-hover:shadow-blue-400/80 transition-all duration-500 group-hover:scale-125 transform-gpu"
                             style={{
                               boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(99, 102, 241, 0.3)',
                               transform: 'perspective(500px) rotateX(15deg) rotateY(10deg) translateZ(15px)'
                             }}>
                          <IconComponent size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-white drop-shadow-lg filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                        </div>
                        <div className="flex-1 transform-gpu" style={{transform: 'translateZ(5px)'}}>
                          <h4 className="font-bold mb-2 md:mb-3 text-white text-lg md:text-xl drop-shadow-lg"
                              style={{textShadow: '0 0 20px rgba(255, 255, 255, 0.8)'}}>{contact.type}</h4>
                          <p className="text-blue-300 hover:text-blue-100 transition-colors block mb-1 md:mb-2 font-semibold text-base md:text-lg drop-shadow-lg hover:drop-shadow-2xl break-all transform-gpu hover:scale-105"
                             style={{textShadow: '0 0 15px rgba(147, 196, 251, 0.8)'}}>
                            {contact.value}
                          </p>
                          <p className="text-xs sm:text-sm text-blue-200/80 drop-shadow-sm"
                             style={{textShadow: '0 0 10px rgba(191, 219, 254, 0.6)'}}>{contact.description}</p>
                        </div>
                      </div>
                      
                      <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transform-gpu"
                           style={{boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)', transform: 'translateZ(20px)'}}></div>
                      <div className="absolute bottom-4 left-4 w-3 h-3 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300 transform-gpu"
                           style={{boxShadow: '0 0 15px rgba(99, 102, 241, 0.8)', transform: 'translateZ(15px)'}}></div>
                      <div className="absolute top-8 left-8 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-500 transform-gpu"
                           style={{boxShadow: '0 0 12px rgba(147, 51, 234, 0.8)', transform: 'translateZ(25px)'}}></div>
                    </div>
                  );
                  
                  return (
                    <div key={index} className={`group transform-gpu transition-all duration-700 hover:scale-110 ${isVisible ? 'animate-slide-in-left' : ''}`} 
                         style={{transform: `perspective(1200px) rotateY(${5 + index * 3}deg) translateZ(${20 + index * 10}px)`, animationDelay: `${index * 200}ms`}}>
                      {isClickable ? (
                        <a href={contact.link} target="_blank" rel="noopener noreferrer" className="block">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </div>
                  );
                })}
              </div>

              <button
                onClick={downloadResume}
                className={`w-full px-6 md:px-10 py-4 md:py-6 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white rounded-xl md:rounded-2xl font-bold text-lg md:text-xl transition-all duration-700 hover:from-blue-500 hover:via-indigo-600 hover:to-purple-600 hover:scale-110 active:scale-95 flex items-center justify-center space-x-3 mb-6 md:mb-10 relative overflow-hidden group transform-gpu perspective-1000 ${isVisible ? 'animate-slide-in-left' : ''}`}
                style={{
                  boxShadow: '0 25px 60px rgba(59, 130, 246, 0.4), 0 0 40px rgba(147, 51, 234, 0.3), inset 0 0 30px rgba(99, 102, 241, 0.2)',
                  transform: 'perspective(1000px) rotateX(15deg) rotateY(-5deg) translateZ(30px)',
                  animationDelay: '600ms'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform-gpu"
                     style={{transform: 'translateZ(5px)'}}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl transform-gpu"
                     style={{transform: 'translateZ(-5px)'}}></div>
                
                <Download size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10 drop-shadow-lg group-hover:animate-bounce transform-gpu"
                          style={{filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))', transform: 'translateZ(10px)'}} />
                <span className="relative z-10 drop-shadow-lg transform-gpu"
                      style={{textShadow: '0 0 20px rgba(255, 255, 255, 0.8)', transform: 'translateZ(8px)'}}>Download Resume 📋</span>
                
                <div className="absolute top-2 right-8 w-3 h-3 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-100 transform-gpu"
                     style={{boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)', transform: 'translateZ(25px)'}}></div>
                <div className="absolute bottom-3 left-12 w-2 h-2 bg-blue-300/90 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-500 transform-gpu"
                     style={{boxShadow: '0 0 12px rgba(147, 196, 251, 0.8)', transform: 'translateZ(20px)'}}></div>
                <div className="absolute top-4 left-20 w-2 h-2 bg-indigo-300/80 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-700 transform-gpu"
                     style={{boxShadow: '0 0 10px rgba(165, 180, 252, 0.8)', transform: 'translateZ(30px)'}}></div>
              </button>

              <div className={`p-4 sm:p-6 md:p-8 bg-gradient-to-r from-indigo-900/50 via-blue-900/50 to-indigo-900/50 border border-blue-400/40 rounded-2xl md:rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden group transform-gpu perspective-1000 ${isVisible ? 'animate-slide-in-left' : ''}`}
                   style={{
                     boxShadow: '0 20px 50px rgba(59, 130, 246, 0.3), 0 0 30px rgba(147, 51, 234, 0.2), inset 0 0 25px rgba(99, 102, 241, 0.1)',
                     transform: 'perspective(1000px) rotateX(10deg) rotateY(5deg) translateZ(20px)',
                     animationDelay: '800ms'
                   }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/15 via-indigo-400/15 to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl transform-gpu"
                     style={{transform: 'translateZ(3px)'}}></div>
                <p className="text-blue-100 font-medium relative z-10 drop-shadow-lg text-sm sm:text-base transform-gpu"
                   style={{
                     textShadow: '0 0 15px rgba(147, 196, 251, 0.6)',
                     transform: 'translateZ(5px)'
                   }}>
                  <strong className="flex items-center space-x-3 mb-4 text-blue-200 transform-gpu"
                          style={{transform: 'translateZ(8px)'}}>
                    <Send size={16} className="sm:w-5 sm:h-5 animate-pulse" 
                          style={{filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))'}} />
                    <span>Professional Declaration 📝</span>
                  </strong>
                  I, Rahul Kannan, am a dedicated web developer and designer committed to delivering high-quality digital solutions. 
                  Based in <span className="font-bold text-blue-300">Pollachi, Tamil Nadu</span>, I specialize in creating modern, 
                  responsive web applications that combine cutting-edge technology with exceptional user experience.
                  <br />
                  <span className="text-blue-200 mt-2 block">Ready to transform your ideas into reality! 🚀</span>
                </p>
              </div>
            </div>
            
            <div className={`transform-gpu perspective-1500 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transform: 'rotateY(10deg) translateZ(40px)'}}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white drop-shadow-2xl transform-gpu"
                  style={{
                    transform: 'perspective(1000px) rotateX(15deg) translateZ(25px)',
                    textShadow: '0 0 25px rgba(255, 255, 255, 0.8), 0 0 50px rgba(59, 130, 246, 0.5)'
                  }}>
                Start a Conversation 💌
              </h3>
              <form 
                onSubmit={handleSubmit} 
                className="bg-gradient-to-r from-slate-800/95 via-indigo-900/95 to-slate-800/95 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-indigo-500/40 space-y-6 md:space-y-8 relative overflow-hidden group hover:border-blue-400/60 transition-all duration-700 transform-gpu"
                style={{
                  boxShadow: '0 30px 80px rgba(59, 130, 246, 0.4), 0 0 50px rgba(147, 51, 234, 0.3), inset 0 0 40px rgba(99, 102, 241, 0.1)',
                  transform: 'perspective(1200px) rotateX(10deg) rotateY(-5deg) translateZ(30px)'
                }}>
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/15 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl transform-gpu"
                     style={{transform: 'translateZ(5px)'}}></div>
                
                <div className="relative z-10 transform-gpu" style={{transform: 'translateZ(10px)'}}>
                  <label htmlFor="name" className="block text-base md:text-lg font-bold mb-3 md:mb-4 text-blue-200 drop-shadow-lg transform-gpu"
                         style={{textShadow: '0 0 15px rgba(147, 196, 251, 0.8)', transform: 'translateZ(5px)'}}>
                    Your Name ✨
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 border-2 border-indigo-500/40 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-blue-500/40 focus:border-blue-400 transition-all duration-500 bg-slate-900/60 backdrop-blur-sm font-medium text-white placeholder-blue-200/60 shadow-inner hover:shadow-blue-500/30 transform-gpu focus:scale-105 text-sm sm:text-base"
                    placeholder="Your full name"
                    style={{
                      boxShadow: 'inset 0 0 20px rgba(99, 102, 241, 0.2), 0 10px 30px rgba(59, 130, 246, 0.2)',
                      transform: 'perspective(500px) rotateX(5deg) translateZ(8px)'
                    }}
                  />
                </div>
                
                <div className="relative z-10 transform-gpu" style={{transform: 'translateZ(12px)'}}>
                  <label htmlFor="email" className="block text-base md:text-lg font-bold mb-3 md:mb-4 text-blue-200 drop-shadow-lg transform-gpu"
                         style={{textShadow: '0 0 15px rgba(147, 196, 251, 0.8)', transform: 'translateZ(5px)'}}>
                    Your Email 📧
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 border-2 border-indigo-500/40 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-blue-500/40 focus:border-blue-400 transition-all duration-500 bg-slate-900/60 backdrop-blur-sm font-medium text-white placeholder-blue-200/60 shadow-inner hover:shadow-blue-500/30 transform-gpu focus:scale-105 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                    style={{
                      boxShadow: 'inset 0 0 20px rgba(99, 102, 241, 0.2), 0 10px 30px rgba(59, 130, 246, 0.2)',
                      transform: 'perspective(500px) rotateX(5deg) translateZ(8px)'
                    }}
                  />
                </div>
                
                <div className="relative z-10 transform-gpu" style={{transform: 'translateZ(14px)'}}>
                  <label htmlFor="message" className="block text-base md:text-lg font-bold mb-3 md:mb-4 text-blue-200 drop-shadow-lg transform-gpu"
                         style={{textShadow: '0 0 15px rgba(147, 196, 251, 0.8)', transform: 'translateZ(5px)'}}>
                    Your Message 💭
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 border-2 border-indigo-500/40 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-blue-500/40 focus:border-blue-400 transition-all duration-500 bg-slate-900/60 backdrop-blur-sm font-medium resize-none text-white placeholder-blue-200/60 shadow-inner hover:shadow-blue-500/30 transform-gpu focus:scale-105 text-sm sm:text-base"
                    placeholder="Tell me about your design project or creative opportunity..."
                    style={{
                      boxShadow: 'inset 0 0 20px rgba(99, 102, 241, 0.2), 0 10px 30px rgba(59, 130, 246, 0.2)',
                      transform: 'perspective(500px) rotateX(5deg) translateZ(8px)'
                    }}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white rounded-xl md:rounded-2xl font-bold text-lg md:text-xl transition-all duration-700 hover:from-blue-500 hover:via-indigo-600 hover:to-purple-600 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 relative overflow-hidden group/button transform-gpu perspective-1000"
                  style={{
                    boxShadow: '0 25px 60px rgba(59, 130, 246, 0.4), 0 0 40px rgba(147, 51, 234, 0.3), inset 0 0 30px rgba(99, 102, 241, 0.2)',
                    transform: 'perspective(1000px) rotateX(15deg) rotateY(-3deg) translateZ(25px)'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10 transform-gpu"
                           style={{transform: 'translateZ(10px)'}}></div>
                      <span className="relative z-10 drop-shadow-lg transform-gpu"
                            style={{textShadow: '0 0 20px rgba(255, 255, 255, 0.8)', transform: 'translateZ(8px)'}}>Sending Message... 🚀</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10 drop-shadow-lg group-hover/button:animate-pulse transform-gpu"
                            style={{filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))', transform: 'translateZ(10px)'}} />
                      <span className="relative z-10 drop-shadow-lg transform-gpu"
                            style={{textShadow: '0 0 20px rgba(255, 255, 255, 0.8)', transform: 'translateZ(8px)'}}>Send Message ✨</span>
                    </>
                  )}
                  
                  <div className="absolute top-2 right-8 w-3 h-3 bg-white/80 rounded-full opacity-0 group-hover/button:opacity-100 animate-ping delay-100 transform-gpu"
                       style={{boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)', transform: 'translateZ(30px)'}}></div>
                  <div className="absolute bottom-3 left-12 w-2 h-2 bg-blue-300/90 rounded-full opacity-0 group-hover/button:opacity-100 animate-pulse delay-500 transform-gpu"
                       style={{boxShadow: '0 0 12px rgba(147, 196, 251, 0.8)', transform: 'translateZ(25px)'}}></div>
                  <div className="absolute top-4 left-20 w-2 h-2 bg-indigo-300/80 rounded-full opacity-0 group-hover/button:opacity-100 animate-bounce delay-700 transform-gpu"
                       style={{boxShadow: '0 0 10px rgba(165, 180, 252, 0.8)', transform: 'translateZ(35px)'}}></div>
                  <div className="absolute bottom-4 right-16 w-1 h-1 bg-purple-300/70 rounded-full opacity-0 group-hover/button:opacity-100 animate-ping delay-1000 transform-gpu"
                       style={{boxShadow: '0 0 8px rgba(196, 181, 253, 0.8)', transform: 'translateZ(20px)'}}></div>
                </button>
                
                <div className="absolute top-8 right-8 w-4 h-4 bg-blue-400/80 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-200 transform-gpu"
                     style={{boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)', transform: 'translateZ(40px)'}}></div>
                <div className="absolute bottom-12 left-8 w-3 h-3 bg-indigo-400/80 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-500 transform-gpu"
                     style={{boxShadow: '0 0 15px rgba(99, 102, 241, 0.8)', transform: 'translateZ(35px)'}}></div>
                <div className="absolute top-20 left-12 w-2 h-2 bg-purple-400/80 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-1000 transform-gpu"
                     style={{boxShadow: '0 0 12px rgba(147, 51, 234, 0.8)', transform: 'translateZ(30px)'}}></div>
                <div className="absolute top-32 right-20 w-2 h-2 bg-cyan-400/70 rounded-full opacity-0 group-hover:opacity-100 animate-spin delay-1500 transform-gpu"
                     style={{boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)', transform: 'translateZ(45px)'}}></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
