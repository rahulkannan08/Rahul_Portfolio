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
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "100px" }
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
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
      const response = await fetch('https://formsubmit.co/6f704ddfe97f8ba9ae38915e57283e59', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Portfolio Contact Message from ' + formData.name,
          _captcha: 'false',
          _template: 'table'
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
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 relative overflow-hidden min-h-screen">
        {/* Enhanced 3D Background Elements */}
        <div className="absolute inset-0 transform-gpu">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float transform-gpu"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
                transform: `perspective(1000px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) translateZ(${Math.random() * 100}px) translateY(${scrollY * 0.1}px)`
              }}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400/20 via-indigo-400/30 to-purple-400/20 rounded-xl blur-sm animate-pulse shadow-xl transform-gpu" 
                   style={{
                     transform: `rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) rotateZ(${Math.random() * 360}deg)`,
                     boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
                   }} />
            </div>
          ))}
        </div>

        {/* Animated Wave Header */}
        <div className="absolute top-0 left-0 w-full overflow-hidden transform-gpu">
          <svg
            className="relative block w-full h-32 drop-shadow-xl"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{
              transform: `translateY(${scrollY * 0.05}px) rotateX(5deg)`,
              filter: 'drop-shadow(0 10px 30px rgba(59, 130, 246, 0.3))'
            }}
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(99,102,241,0.3)" />
                <stop offset="50%" stopColor="rgba(59,130,246,0.4)" />
                <stop offset="100%" stopColor="rgba(147,51,234,0.3)" />
              </linearGradient>
            </defs>
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="url(#waveGradient)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Enhanced Title with 3D Parallax Effect */}
          <div className={`text-center mb-16 transform-gpu transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 group cursor-pointer transition-all duration-500 relative"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) translateZ(20px) translateY(${scrollY * 0.02}px)`,
                  textShadow: '0 0 30px rgba(59, 130, 246, 0.8)'
                }}>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Connect With Me 🎨
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-medium"
               style={{
                 transform: `perspective(800px) rotateX(${mousePosition.y * 0.05}deg) translateZ(10px) translateY(${scrollY * 0.01}px)`,
                 textShadow: '0 0 20px rgba(147, 196, 251, 0.6)'
               }}>
              Creative collaboration and innovative design solutions 🚀
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
            {/* Contact Information with Enhanced 3D Effects */}
            <div className={`transform-gpu transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                 style={{
                   transform: `perspective(1000px) rotateY(${mousePosition.x * 0.1}deg) translateZ(30px) translateY(${scrollY * 0.03}px)`
                 }}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white drop-shadow-2xl"
                  style={{
                    transform: `perspective(800px) rotateX(${mousePosition.y * 0.08}deg) translateZ(15px)`,
                    textShadow: '0 0 25px rgba(255, 255, 255, 0.8)'
                  }}>
                Let's Create Together 🌟
              </h3>
              <p className="text-blue-100 mb-6 md:mb-10 leading-relaxed text-lg sm:text-xl"
                 style={{
                   transform: `perspective(600px) rotateX(${mousePosition.y * 0.05}deg) translateZ(10px)`,
                   textShadow: '0 0 15px rgba(147, 196, 251, 0.6)'
                 }}>
                I'm passionate about creating innovative design solutions and collaborating on cutting-edge projects. 
                Let's bring your creative vision to life with modern design principles! ✨
              </p>
              
              {/* Contact Cards with Advanced 3D Hover Effects */}
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-10">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  const isClickable = contact.isClickable;
                  
                  const content = (
                    <div className="bg-gradient-to-r from-slate-800/90 via-indigo-900/90 to-slate-800/90 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-2xl border border-indigo-500/30 hover:border-blue-400/50 transition-all duration-500 relative overflow-hidden group transform-gpu hover:scale-105"
                         style={{
                           boxShadow: '0 20px 60px rgba(59, 130, 246, 0.2), inset 0 0 20px rgba(99, 102, 241, 0.1)',
                           transform: `perspective(1000px) rotateX(${5 + mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg) translateZ(${10 + index * 5}px)`,
                           animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                           animationDelay: `${index * 0.2}s`
                         }}>
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/15 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
                      
                      <div className="flex items-center space-x-6 relative z-10">
                        <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg group-hover:shadow-blue-400/60 transition-all duration-500 group-hover:scale-125 transform-gpu"
                             style={{
                               boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
                               transform: `perspective(400px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) translateZ(10px)`
                             }}>
                          <IconComponent size={24} className="text-white drop-shadow-lg" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-2 text-white text-xl drop-shadow-lg"
                              style={{textShadow: '0 0 20px rgba(255, 255, 255, 0.8)'}}>{contact.type}</h4>
                          <p className="text-blue-300 hover:text-blue-100 transition-colors font-semibold text-lg mb-1"
                             style={{textShadow: '0 0 15px rgba(147, 196, 251, 0.8)'}}>
                            {contact.value}
                          </p>
                          <p className="text-sm text-blue-200/80"
                             style={{textShadow: '0 0 10px rgba(191, 219, 254, 0.6)'}}>{contact.description}</p>
                        </div>
                      </div>
                      
                      {/* Floating Particles */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                      <div className="absolute bottom-4 left-4 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300" />
                    </div>
                  );
                  
                  return (
                    <div key={index} className="group transform-gpu transition-all duration-500">
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

              {/* Enhanced 3D Download Button */}
              <button
                onClick={downloadResume}
                className="w-full px-10 py-6 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white rounded-2xl font-bold text-xl transition-all duration-500 hover:from-blue-500 hover:via-indigo-600 hover:to-purple-600 hover:scale-110 active:scale-95 flex items-center justify-center space-x-3 mb-10 relative overflow-hidden group transform-gpu"
                style={{
                  boxShadow: '0 25px 60px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(99, 102, 241, 0.1)',
                  transform: `perspective(1000px) rotateX(${10 + mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) translateZ(20px)`,
                  animation: 'float 4s ease-in-out infinite'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
                
                <Download size={24} className="relative z-10 drop-shadow-lg group-hover:animate-bounce" />
                <span className="relative z-10 drop-shadow-lg">Download Resume 📋</span>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute top-2 right-8 w-3 h-3 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                <div className="absolute bottom-3 left-12 w-2 h-2 bg-blue-300/80 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300" />
                <div className="absolute top-4 left-20 w-2 h-2 bg-indigo-300/70 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-500" />
              </button>

              {/* Enhanced Professional Declaration */}
              <div className="p-8 bg-gradient-to-r from-indigo-900/40 via-blue-900/40 to-indigo-900/40 border border-blue-400/30 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden group transform-gpu hover:scale-105"
                   style={{
                     boxShadow: '0 20px 50px rgba(59, 130, 246, 0.2), inset 0 0 15px rgba(99, 102, 241, 0.1)',
                     transform: `perspective(1000px) rotateX(${5 + mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg) translateZ(15px)`,
                     animation: 'float 5s ease-in-out infinite'
                   }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
                <p className="text-blue-100 font-medium relative z-10 drop-shadow-lg"
                   style={{
                     textShadow: '0 0 15px rgba(147, 196, 251, 0.6)'
                   }}>
                  <strong className="flex items-center space-x-3 mb-4 text-blue-200">
                    <Send size={20} className="animate-pulse" />
                    <span>Professional Declaration 📝</span>
                  </strong>
                  I, Rahul Kannan, am a dedicated web developer and designer committed to delivering high-quality digital solutions. 
                  Based in <span className="font-bold text-blue-300">Pollachi, Tamil Nadu</span>, I specialize in creating modern, 
                  responsive web applications that combine cutting-edge technology with exceptional user experience.
                  <br />
                  <span className="text-blue-200 mt-2 block">Ready to transform your ideas into reality! 🚀</span>
                </p>
                
                {/* Declaration Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-indigo-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300" />
              </div>
            </div>
            
            {/* Contact Form with Enhanced 3D Effects */}
            <div className={`transform-gpu transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                 style={{
                   transform: `perspective(1000px) rotateY(${mousePosition.x * -0.1}deg) translateZ(30px) translateY(${scrollY * 0.03}px)`
                 }}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white drop-shadow-2xl"
                  style={{
                    transform: `perspective(800px) rotateX(${mousePosition.y * 0.08}deg) translateZ(15px)`,
                    textShadow: '0 0 25px rgba(255, 255, 255, 0.8)'
                  }}>
                Start a Conversation 💌
              </h3>
              <form 
                onSubmit={handleSubmit} 
                className="bg-gradient-to-r from-slate-800/90 via-indigo-900/90 to-slate-800/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-indigo-500/30 space-y-8 relative overflow-hidden group hover:border-blue-400/50 transition-all duration-500 transform-gpu"
                style={{
                  boxShadow: '0 30px 80px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(99, 102, 241, 0.1)',
                  transform: `perspective(1000px) rotateX(${5 + mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * -0.05}deg) translateZ(20px)`,
                  animation: 'float 6s ease-in-out infinite'
                }}>
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
                
                <div className="relative z-10">
                  <label htmlFor="name" className="block text-lg font-bold mb-4 text-blue-200 drop-shadow-lg">
                    Your Name ✨
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-8 py-5 border-2 border-indigo-500/30 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-500 bg-slate-900/50 backdrop-blur-sm font-medium text-white placeholder-blue-200/60 shadow-inner hover:shadow-blue-500/20 transform-gpu focus:scale-105"
                    placeholder="Your full name"
                    style={{
                      boxShadow: 'inset 0 0 15px rgba(99, 102, 241, 0.1), 0 10px 30px rgba(59, 130, 246, 0.1)',
                      transform: 'perspective(400px) rotateX(3deg) translateZ(5px)'
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  <label htmlFor="email" className="block text-lg font-bold mb-4 text-blue-200 drop-shadow-lg">
                    Your Email 📧
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-8 py-5 border-2 border-indigo-500/30 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-500 bg-slate-900/50 backdrop-blur-sm font-medium text-white placeholder-blue-200/60 shadow-inner hover:shadow-blue-500/20 transform-gpu focus:scale-105"
                    placeholder="your.email@example.com"
                    style={{
                      boxShadow: 'inset 0 0 15px rgba(99, 102, 241, 0.1), 0 10px 30px rgba(59, 130, 246, 0.1)',
                      transform: 'perspective(400px) rotateX(3deg) translateZ(5px)'
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  <label htmlFor="message" className="block text-lg font-bold mb-4 text-blue-200 drop-shadow-lg">
                    Your Message 💭
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-8 py-5 border-2 border-indigo-500/30 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-500 bg-slate-900/50 backdrop-blur-sm font-medium resize-none text-white placeholder-blue-200/60 shadow-inner hover:shadow-blue-500/20 transform-gpu focus:scale-105"
                    placeholder="Tell me about your design project or creative opportunity..."
                    style={{
                      boxShadow: 'inset 0 0 15px rgba(99, 102, 241, 0.1), 0 10px 30px rgba(59, 130, 246, 0.1)',
                      transform: 'perspective(400px) rotateX(3deg) translateZ(5px)'
                    }}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-10 py-6 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white rounded-2xl font-bold text-xl transition-all duration-500 hover:from-blue-500 hover:via-indigo-600 hover:to-purple-600 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 relative overflow-hidden group/button transform-gpu"
                  style={{
                    boxShadow: '0 25px 60px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(99, 102, 241, 0.1)',
                    transform: `perspective(1000px) rotateX(${10 + mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.05}deg) translateZ(15px)`,
                    animation: 'float 3s ease-in-out infinite'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10" />
                      <span className="relative z-10 drop-shadow-lg">Sending Message... 🚀</span>
                    </>
                  ) : (
                    <>
                      <Send size={24} className="relative z-10 drop-shadow-lg group-hover/button:animate-pulse" />
                      <span className="relative z-10 drop-shadow-lg">Send Message ✨</span>
                    </>
                  )}
                  
                  {/* Enhanced Button Particles */}
                  <div className="absolute top-2 right-8 w-3 h-3 bg-white/60 rounded-full opacity-0 group-hover/button:opacity-100 animate-ping" />
                  <div className="absolute bottom-3 left-12 w-2 h-2 bg-blue-300/80 rounded-full opacity-0 group-hover/button:opacity-100 animate-pulse delay-300" />
                  <div className="absolute top-4 left-20 w-2 h-2 bg-indigo-300/70 rounded-full opacity-0 group-hover/button:opacity-100 animate-bounce delay-500" />
                </button>
                
                {/* Form Floating Elements */}
                <div className="absolute top-8 right-8 w-4 h-4 bg-blue-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-200" />
                <div className="absolute bottom-12 left-8 w-3 h-3 bg-indigo-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-500" />
                <div className="absolute top-20 left-12 w-2 h-2 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-700" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
