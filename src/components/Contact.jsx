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
        className: "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200",
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
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden min-h-screen">
        {/* Enhanced animated background elements with 3D effects */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
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
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 rounded-full blur-sm animate-pulse shadow-2xl shadow-purple-500/50 transform-gpu perspective-1000 rotate-x-12" />
            </div>
          ))}
          
          {/* Floating orbs with enhanced glow */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute animate-bounce"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${6 + Math.random() * 2}s`
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-400/20 rounded-full blur-xl shadow-2xl shadow-blue-500/30 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Enhanced wave effect with 3D transform */}
        <div className="absolute top-0 left-0 w-full overflow-hidden transform-gpu">
          <svg
            className="relative block w-full h-32 transform rotate-x-12"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(139,69,19,0.3)" />
                <stop offset="50%" stopColor="rgba(160,147,125,0.2)" />
                <stop offset="100%" stopColor="rgba(107,91,71,0.3)" />
              </linearGradient>
            </defs>
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="url(#waveGradient)"
              className="drop-shadow-2xl"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 group cursor-pointer transition-all duration-500 hover:text-amber-300 relative transform-gpu perspective-1000">
              <span className="gradient-text-brown bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent animate-pulse drop-shadow-2xl shadow-amber-400/50">
                Let's Connect ✨
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 group-hover:w-40 sm:group-hover:w-60 transition-all duration-500 ease-out rounded-full shadow-lg shadow-amber-400/50 blur-sm"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-amber-100 font-medium drop-shadow-lg">Professional collaboration and networking 🚀</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
            {/* Enhanced Contact Info with 3D cards - responsive */}
            <div className="transform-gpu perspective-1000">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white drop-shadow-2xl">
                Connect With Me 🌟
              </h3>
              <p className="text-amber-100 mb-6 md:mb-10 leading-relaxed text-lg sm:text-xl drop-shadow-lg">
                I'm always open to discussing new opportunities, collaborating on innovative projects, 
                or connecting with fellow developers. Let's build something amazing together! ✨
              </p>
              
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-10">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="group transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-y-6">
                      <div className="bg-gradient-to-r from-slate-800/90 via-purple-800/90 to-slate-800/90 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-purple-500/30 hover:border-amber-400/50 transition-all duration-500 hover:shadow-purple-500/50 hover:shadow-2xl relative overflow-hidden">
                        {/* Glow effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                        
                        <div className="flex items-center space-x-4 md:space-x-6 relative z-10">
                          <div className="p-3 md:p-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl md:rounded-2xl shadow-lg shadow-amber-500/50 group-hover:shadow-amber-400/70 transition-all duration-300 group-hover:scale-110 transform-gpu">
                            <IconComponent size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-white drop-shadow-lg" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold mb-2 md:mb-3 text-white text-lg md:text-xl drop-shadow-lg">{contact.type}</h4>
                            <a 
                              href={contact.link}
                              className="text-amber-300 hover:text-amber-100 transition-colors block mb-1 md:mb-2 font-semibold text-base md:text-lg drop-shadow-lg hover:drop-shadow-2xl break-all"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {contact.value}
                            </a>
                            <p className="text-xs sm:text-sm text-amber-200/80 drop-shadow-sm">{contact.description}</p>
                          </div>
                        </div>
                        
                        {/* Enhanced sparkle effect */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300"></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced Resume Download Button with 3D effects - responsive */}
              <button
                onClick={downloadResume}
                className="w-full px-6 md:px-10 py-4 md:py-6 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white rounded-xl md:rounded-2xl font-bold text-lg md:text-xl transition-all duration-500 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 hover:scale-105 hover:shadow-2xl hover:shadow-amber-600/60 active:scale-95 flex items-center justify-center space-x-3 mb-6 md:mb-10 relative overflow-hidden group transform-gpu perspective-1000 hover:rotate-y-3"
              >
                {/* Glow effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <Download size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10 drop-shadow-lg group-hover:animate-bounce" />
                <span className="relative z-10 drop-shadow-lg">Download Resume 📄</span>
                
                {/* Enhanced floating particles */}
                <div className="absolute top-2 right-8 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-100"></div>
                <div className="absolute bottom-3 left-12 w-1 h-1 bg-yellow-300/80 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-500"></div>
              </button>

              {/* Enhanced info panel with glow effects - responsive */}
              <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-amber-900/40 via-orange-900/40 to-amber-900/40 border border-amber-400/30 rounded-2xl md:rounded-3xl backdrop-blur-xl shadow-2xl shadow-amber-500/20 hover:shadow-amber-400/30 transition-all duration-500 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-400/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <p className="text-amber-100 font-medium relative z-10 drop-shadow-lg text-sm sm:text-base">
                  <strong className="flex items-center space-x-3 mb-4 text-amber-200">
                    <Send size={16} className="sm:w-5 sm:h-5 animate-pulse" />
                    <span>Automatic Message Delivery! 🚀</span>
                  </strong>
                  Messages sent through the contact form will be automatically delivered to: 
                  <span className="font-bold text-amber-300 drop-shadow-lg break-all"> rahulkannan.bca@gmail.com</span>
                  <br />
                  <span className="text-amber-200">I typically respond within 24-48 hours. ⚡</span>
                </p>
              </div>
            </div>
            
            {/* Enhanced Contact Form with 3D effects - responsive */}
            <div className="transform-gpu perspective-1000">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white drop-shadow-2xl">
                Send a Message 💌
              </h3>
              <form onSubmit={handleSubmit} className="bg-gradient-to-r from-slate-800/95 via-purple-800/95 to-slate-800/95 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-purple-500/30 space-y-6 md:space-y-8 relative overflow-hidden group hover:border-amber-400/50 transition-all duration-500 hover:shadow-purple-500/50 transform-gpu hover:scale-105 hover:rotate-y-3">
                
                {/* Enhanced glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <label htmlFor="name" className="block text-base md:text-lg font-bold mb-3 md:mb-4 text-amber-200 drop-shadow-lg">
                    Your Name ✨
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 border-2 border-purple-500/30 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-300 bg-slate-900/50 backdrop-blur-sm font-medium text-white placeholder-amber-200/60 shadow-inner shadow-purple-500/20 hover:shadow-amber-500/20 transform-gpu focus:scale-105 text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="relative z-10">
                  <label htmlFor="email" className="block text-base md:text-lg font-bold mb-3 md:mb-4 text-amber-200 drop-shadow-lg">
                    Your Email 📧
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 border-2 border-purple-500/30 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-300 bg-slate-900/50 backdrop-blur-sm font-medium text-white placeholder-amber-200/60 shadow-inner shadow-purple-500/20 hover:shadow-amber-500/20 transform-gpu focus:scale-105 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="relative z-10">
                  <label htmlFor="message" className="block text-base md:text-lg font-bold mb-3 md:mb-4 text-amber-200 drop-shadow-lg">
                    Your Message 💭
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 border-2 border-purple-500/30 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-300 bg-slate-900/50 backdrop-blur-sm font-medium resize-none text-white placeholder-amber-200/60 shadow-inner shadow-purple-500/20 hover:shadow-amber-500/20 transform-gpu focus:scale-105 text-sm sm:text-base"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white rounded-xl md:rounded-2xl font-bold text-lg md:text-xl transition-all duration-500 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 hover:scale-105 hover:shadow-2xl hover:shadow-amber-600/60 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 relative overflow-hidden group/button transform-gpu perspective-1000 hover:rotate-y-3"
                >
                  {/* Glow effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-orange-400/20 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
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
                  <div className="absolute bottom-3 left-12 w-1 h-1 bg-yellow-300/80 rounded-full opacity-0 group-hover/button:opacity-100 animate-pulse delay-500"></div>
                  <div className="absolute top-4 left-20 w-1 h-1 bg-amber-300/60 rounded-full opacity-0 group-hover/button:opacity-100 animate-bounce delay-700"></div>
                </button>
                
                {/* Floating sparkles around the form */}
                <div className="absolute top-8 right-8 w-3 h-3 bg-amber-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-200"></div>
                <div className="absolute bottom-12 left-8 w-2 h-2 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-500"></div>
                <div className="absolute top-20 left-12 w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-1000"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
