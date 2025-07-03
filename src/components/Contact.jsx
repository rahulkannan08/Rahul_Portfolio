
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Download, Send, Mail, Phone, MapPin } from 'lucide-react';
import CursorFollower from './CursorFollower';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      // Simulate sending email automatically
      const emailData = {
        to: 'rahulkannan.bca@gmail.com',
        subject: `Portfolio Contact: Message from ${formData.name}`,
        body: `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
        `
      };

      // In a real implementation, this would call your backend API
      console.log('Sending email:', emailData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Show success message
      toast({
        title: "Message Sent Successfully! ✨",
        description: "Your message has been delivered to rahulkannan.bca@gmail.com. I'll get back to you soon!",
        className: "bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
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
      type: "Email",
      value: "rahulkannan.bca@gmail.com",
      link: "mailto:rahulkannan.bca@gmail.com",
      description: "Messages will be sent to this email",
      icon: Mail
    },
    {
      type: "GitHub",
      value: "rahulll.github",
      link: "https://github.com/rahulll",
      description: "Check out my code repositories",
      icon: MapPin
    },
    {
      type: "LinkedIn",
      value: "rahullll",
      link: "https://linkedin.com/in/rahullll",
      description: "Let's connect professionally",
      icon: Phone
    }
  ];

  return (
    <>
      <CursorFollower />
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 relative overflow-hidden min-h-screen">
        {/* Enhanced animated background elements with design-themed 3D effects */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400/20 via-indigo-400/30 to-purple-400/20 rounded-lg blur-sm animate-pulse shadow-2xl shadow-blue-500/30 transform-gpu perspective-1000 rotate-45" />
            </div>
          ))}
          
          {/* Design-themed floating geometric shapes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute animate-bounce"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${5 + Math.random() * 2}s`
              }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${
                i % 4 === 0 ? 'from-blue-500/15 to-indigo-500/15' :
                i % 4 === 1 ? 'from-purple-500/15 to-pink-500/15' :
                i % 4 === 2 ? 'from-teal-500/15 to-cyan-500/15' :
                'from-indigo-500/15 to-purple-500/15'
              } ${
                i % 3 === 0 ? 'rounded-full' :
                i % 3 === 1 ? 'rounded-lg rotate-45' :
                'rounded-none rotate-12'
              } blur-sm shadow-2xl animate-pulse`} />
            </div>
          ))}
        </div>

        {/* Design-themed wave effect */}
        <div className="absolute top-0 left-0 w-full overflow-hidden transform-gpu">
          <svg
            className="relative block w-full h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="designWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(99,102,241,0.3)" />
                <stop offset="50%" stopColor="rgba(139,92,246,0.2)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0.3)" />
              </linearGradient>
            </defs>
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="url(#designWaveGradient)"
              className="drop-shadow-2xl"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 group cursor-pointer transition-all duration-500 hover:text-blue-300 relative transform-gpu perspective-1000">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-pulse drop-shadow-2xl shadow-blue-400/50">
                Connect With Me 🎨
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 group-hover:w-40 sm:group-hover:w-60 transition-all duration-500 ease-out rounded-full shadow-lg shadow-blue-400/50 blur-sm"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-indigo-300/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-medium drop-shadow-lg">Creative collaboration and innovative design solutions 🚀</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
            {/* Enhanced Contact Info with design-themed 3D cards - responsive */}
            <div className="transform-gpu perspective-1000">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white drop-shadow-2xl">
                Let's Create Together 🌟
              </h3>
              <p className="text-blue-100 mb-6 md:mb-10 leading-relaxed text-lg sm:text-xl drop-shadow-lg">
                I'm passionate about creating innovative design solutions and collaborating on cutting-edge projects. 
                Let's bring your creative vision to life with modern design principles! ✨
              </p>
              
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-10">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="group transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-y-6">
                      <div className="bg-gradient-to-r from-slate-800/90 via-indigo-900/90 to-slate-800/90 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-indigo-500/30 hover:border-blue-400/50 transition-all duration-500 hover:shadow-indigo-500/50 hover:shadow-2xl relative overflow-hidden">
                        {/* Design-themed glow effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                        
                        <div className="flex items-center space-x-4 md:space-x-6 relative z-10">
                          <div className="p-3 md:p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/50 group-hover:shadow-blue-400/70 transition-all duration-300 group-hover:scale-110 transform-gpu">
                            <IconComponent size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-white drop-shadow-lg" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold mb-2 md:mb-3 text-white text-lg md:text-xl drop-shadow-lg">{contact.type}</h4>
                            <a 
                              href={contact.link}
                              className="text-blue-300 hover:text-blue-100 transition-colors block mb-1 md:mb-2 font-semibold text-base md:text-lg drop-shadow-lg hover:drop-shadow-2xl break-all"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {contact.value}
                            </a>
                            <p className="text-xs sm:text-sm text-blue-200/80 drop-shadow-sm">{contact.description}</p>
                          </div>
                        </div>
                        
                        {/* Design-themed sparkle effect */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300"></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced Resume Download Button with design-themed 3D effects - responsive */}
              <button
                onClick={downloadResume}
                className="w-full px-6 md:px-10 py-4 md:py-6 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white rounded-xl md:rounded-2xl font-bold text-lg md:text-xl transition-all duration-500 hover:from-blue-500 hover:via-indigo-600 hover:to-purple-600 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/60 active:scale-95 flex items-center justify-center space-x-3 mb-6 md:mb-10 relative overflow-hidden group transform-gpu perspective-1000 hover:rotate-y-3"
              >
                {/* Design-themed glow effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <Download size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10 drop-shadow-lg group-hover:animate-bounce" />
                <span className="relative z-10 drop-shadow-lg">Download Resume 📋</span>
                
                {/* Enhanced floating particles */}
                <div className="absolute top-2 right-8 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-100"></div>
                <div className="absolute bottom-3 left-12 w-1 h-1 bg-blue-300/80 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-500"></div>
              </button>

              {/* Enhanced info panel with design-themed glow effects - responsive */}
              <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-indigo-900/40 via-blue-900/40 to-indigo-900/40 border border-blue-400/30 rounded-2xl md:rounded-3xl backdrop-blur-xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-400/30 transition-all duration-500 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <p className="text-blue-100 font-medium relative z-10 drop-shadow-lg text-sm sm:text-base">
                  <strong className="flex items-center space-x-3 mb-4 text-blue-200">
                    <Send size={16} className="sm:w-5 sm:h-5 animate-pulse" />
                    <span>Automatic Message Delivery! 🚀</span>
                  </strong>
                  Messages sent through the contact form will be automatically delivered to: 
                  <span className="font-bold text-blue-300 drop-shadow-lg break-all"> rahulkannan.bca@gmail.com</span>
                  <br />
                  <span className="text-blue-200">I typically respond within 24-48 hours. ⚡</span>
                </p>
              </div>
            </div>
            
            {/* Enhanced Contact Form with design-themed 3D effects - responsive */}
            <div className="transform-gpu perspective-1000">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white drop-shadow-2xl">
                Start a Conversation 💌
              </h3>
              <form onSubmit={handleSubmit} className="bg-gradient-to-r from-slate-800/95 via-indigo-900/95 to-slate-800/95 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-indigo-500/30 space-y-6 md:space-y-8 relative overflow-hidden group hover:border-blue-400/50 transition-all duration-500 hover:shadow-indigo-500/50 transform-gpu hover:scale-105 hover:rotate-y-3">
                
                {/* Enhanced design-themed glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <label htmlFor="name" className="block text-base md:text-lg font-bold mb-3 md:mb-4 text-blue-200 drop-shadow-lg">
                    Your Name ✨
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 border-2 border-indigo-500/30 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 bg-slate-900/50 backdrop-blur-sm font-medium text-white placeholder-blue-200/60 shadow-inner shadow-indigo-500/20 hover:shadow-blue-500/20 transform-gpu focus:scale-105 text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="relative z-10">
                  <label htmlFor="email" className="block text-base md:text-lg font-bold mb-3 md:mb-4 text-blue-200 drop-shadow-lg">
                    Your Email 📧
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 border-2 border-indigo-500/30 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 bg-slate-900/50 backdrop-blur-sm font-medium text-white placeholder-blue-200/60 shadow-inner shadow-indigo-500/20 hover:shadow-blue-500/20 transform-gpu focus:scale-105 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="relative z-10">
                  <label htmlFor="message" className="block text-base md:text-lg font-bold mb-3 md:mb-4 text-blue-200 drop-shadow-lg">
                    Your Message 💭
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 border-2 border-indigo-500/30 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 bg-slate-900/50 backdrop-blur-sm font-medium resize-none text-white placeholder-blue-200/60 shadow-inner shadow-indigo-500/20 hover:shadow-blue-500/20 transform-gpu focus:scale-105 text-sm sm:text-base"
                    placeholder="Tell me about your design project or creative opportunity..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white rounded-xl md:rounded-2xl font-bold text-lg md:text-xl transition-all duration-500 hover:from-blue-500 hover:via-indigo-600 hover:to-purple-600 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/60 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 relative overflow-hidden group/button transform-gpu perspective-1000 hover:rotate-y-3"
                >
                  {/* Design-themed glow effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10"></div>
                      <span className="relative z-10 drop-shadow-lg">Sending Message... 🚀</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10 drop-shadow-lg group-hover/button:animate-pulse" />
                      <span className="relative z-10 drop-shadow-lg">Send Message ✨</span>
                    </>
                  )}
                  
                  {/* Enhanced floating particles */}
                  <div className="absolute top-2 right-8 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover/button:opacity-100 animate-ping delay-100"></div>
                  <div className="absolute bottom-3 left-12 w-1 h-1 bg-blue-300/80 rounded-full opacity-0 group-hover/button:opacity-100 animate-pulse delay-500"></div>
                  <div className="absolute top-4 left-20 w-1 h-1 bg-indigo-300/60 rounded-full opacity-0 group-hover/button:opacity-100 animate-bounce delay-700"></div>
                </button>
                
                {/* Floating sparkles around the form */}
                <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-200"></div>
                <div className="absolute bottom-12 left-8 w-2 h-2 bg-indigo-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-500"></div>
                <div className="absolute top-20 left-12 w-1 h-1 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-1000"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
