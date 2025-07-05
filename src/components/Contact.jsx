import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, FileText } from 'lucide-react';
import TypeWriter from './TypeWriter';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: '50px' }
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="contact-orb absolute top-16 right-10 w-24 h-24 bg-gradient-to-br from-cyan-200/20 to-cyan-400/10 rounded-full animate-float-orbit"></div>
        <div className="contact-orb absolute bottom-20 left-16 w-20 h-20 bg-gradient-to-br from-purple-200/20 to-purple-400/10 rounded-full animate-float-reverse"></div>
        <div className="contact-orb absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-amber-200/15 to-amber-400/8 rounded-full animate-pulse-giant"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-6 text-amber-600 group cursor-pointer transition-all duration-1000 relative transform-3d ${
            isVisible ? 'animate-emerge-3d opacity-100' : 'opacity-0 scale-75 rotateX-45'
          }`}>
            <span className="inline-block hover:scale-110 hover:rotateY-10 transition-all duration-600 transform-3d bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
              <TypeWriter 
                text="Connect With Me 🎨"
                speed={100}
                delay={500}
                className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent"
              />
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-amber-600 to-blue-600 group-hover:w-48 transition-all duration-700 ease-out rounded-full shadow-glow"></div>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className={`contact-form-3d transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100 rotateY-0' : '-translate-x-10 opacity-0 rotateY-10'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-semibold transition-all duration-300 hover:from-amber-700 hover:to-amber-800 hover:shadow-lg transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className={`contact-info-3d transform transition-all duration-1200 space-y-8 ${
            isVisible ? 'translate-x-0 opacity-100 rotateY-0' : 'translate-x-10 opacity-0 rotateY-10'
          }`}>
            <div className="contact-card-3d bg-card p-6 rounded-xl shadow-lg border transform-3d transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Email</h3>
                  <p className="text-muted-foreground">your.email@example.com</p>
                </div>
              </div>
            </div>

            <div className="contact-card-3d bg-card p-6 rounded-xl shadow-lg border transform-3d transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Phone</h3>
                  <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </div>

            <div className="contact-card-3d bg-card p-6 rounded-xl shadow-lg border transform-3d transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Location</h3>
                  <p className="text-muted-foreground">India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/rahul-username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link-3d flex-1 p-4 bg-card border rounded-xl text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-gray-50 group"
              >
                <Github className="w-8 h-8 mx-auto mb-2 text-muted-foreground group-hover:text-gray-800 transition-colors duration-300" />
                <span className="text-sm font-medium text-card-foreground group-hover:text-gray-800">GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/rahul-username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link-3d flex-1 p-4 bg-card border rounded-xl text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-blue-50 group"
              >
                <Linkedin className="w-8 h-8 mx-auto mb-2 text-muted-foreground group-hover:text-blue-600 transition-colors duration-300" />
                <span className="text-sm font-medium text-card-foreground group-hover:text-blue-600">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Centered Download Section */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="download-btn-3d px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-semibold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/50 group transform-3d flex items-center space-x-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>
            
            <button className="declaration-btn-3d px-8 py-4 border-2 border-amber-600 text-amber-600 rounded-xl font-semibold transition-all duration-500 hover:scale-110 hover:bg-amber-600 hover:text-white hover:shadow-2xl hover:shadow-amber-500/30 group transform-3d flex items-center space-x-2">
              <FileText className="w-5 h-5 group-hover:animate-pulse" />
              <span>Professional Declaration</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
