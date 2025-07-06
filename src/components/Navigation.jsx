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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    console.log('Scrolling to section:', sectionId);
    const element = document.getElementById(sectionId);
    console.log('Element found:', element);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMobileMenuOpen(false);
    } else {
      console.error('Element not found with ID:', sectionId);
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
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div 
            className="relative cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-brown rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <span className="text-xl sm:text-2xl font-black text-white">R</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl sm:text-2xl font-black gradient-text-brown">
                  Rahul
                </span>
                <div className="text-xs text-muted-foreground font-medium">Full Stack Developer</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 bg-card/60 backdrop-blur-md rounded-full px-6 py-3 border border-border/50 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-amber-900/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                aria-label={`Navigate to ${item.label} section`}
              >
                <span className="relative text-foreground group-hover:text-amber-900 transition-colors duration-300 z-10">
                  {item.label}
                </span>
                {/* Professional underline effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-800 to-amber-600 group-hover:w-4/5 transition-all duration-300 ease-out rounded-full"></div>
                {/* Background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-amber-800/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Tablet Navigation - Compact version */}
          <div className="hidden md:flex lg:hidden items-center space-x-1 bg-card/60 backdrop-blur-md rounded-full px-4 py-2 border border-border/50 shadow-lg">
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:bg-amber-900/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                aria-label={`Navigate to ${item.label} section`}
              >
                <span className="relative text-foreground group-hover:text-amber-900 transition-colors duration-300 z-10">
                  {item.label}
                </span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-800 to-amber-600 group-hover:w-4/5 transition-all duration-300 ease-out rounded-full"></div>
              </button>
            ))}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:bg-amber-900/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              aria-label="Open menu"
            >
              <span className="relative text-foreground group-hover:text-amber-900 transition-colors duration-300 z-10">
                More
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2.5 sm:p-3 rounded-2xl gradient-brown text-white shadow-lg hover:shadow-amber-900/50 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-container md:hidden absolute left-4 right-4 top-20 sm:top-24 bg-card/95 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
            <div className="py-4 sm:py-6 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative w-full flex items-center justify-between px-6 py-3 sm:py-4 text-left hover:bg-amber-900/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-amber-900/10"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  <span className="text-base sm:text-lg font-medium text-foreground group-hover:text-amber-900 transition-all duration-300">
                    {item.label}
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-1 h-1 bg-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tablet/Desktop Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="hidden md:block lg:hidden absolute right-0 top-20 bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300 min-w-[200px]">
            <div className="py-2 space-y-1">
              {navItems.slice(4).map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative w-full flex items-center justify-between px-4 py-3 text-left hover:bg-amber-900/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-amber-900/10"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  <span className="text-sm font-medium text-foreground group-hover:text-amber-900 transition-all duration-300">
                    {item.label}
                  </span>
                  <div className="w-1.5 h-1.5 bg-amber-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
