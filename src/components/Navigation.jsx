
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="relative cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-12 h-12 gradient-brown rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <span className="text-2xl font-black text-white">R</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-black gradient-text-brown">
                  Rahul
                </span>
                <div className="text-xs text-muted-foreground font-medium">Full Stack Developer</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-card/60 backdrop-blur-md rounded-full px-6 py-3 border border-border/50 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-amber-900/10 hover:shadow-lg hover:scale-105"
              >
                <span className="text-foreground group-hover:text-amber-900 transition-all duration-300">
                  {item.label}
                </span>
                {/* Professional underline effect */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-amber-800 group-hover:w-3/4 transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-3 rounded-2xl gradient-brown text-white shadow-lg hover:shadow-amber-900/50 hover:scale-110 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-4 right-4 top-24 bg-card/90 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl overflow-hidden">
            <div className="py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative w-full flex items-center px-6 py-4 text-left hover:bg-amber-900/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-lg font-medium text-foreground group-hover:text-amber-900 transition-all duration-300">
                    {item.label}
                  </span>
                  <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
