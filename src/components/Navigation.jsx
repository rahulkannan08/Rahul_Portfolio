
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

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
    { id: 'hero', label: 'Home', emoji: '🏠' },
    { id: 'about', label: 'About', emoji: '👋' },
    { id: 'skills', label: 'Skills', emoji: '⚡' },
    { id: 'projects', label: 'Projects', emoji: '🚀' },
    { id: 'education', label: 'Education', emoji: '🎓' },
    { id: 'contact', label: 'Contact', emoji: '📱' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-amber-200/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Gen Z vibes */}
          <div 
            className="relative cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-tr from-purple-400 via-pink-400 to-amber-400 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-purple-400/50">
                  <span className="text-2xl font-black text-white">R</span>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
                  Rahul
                </span>
                <div className="text-xs text-muted-foreground font-medium">✨ dev vibes ✨</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation with Gen Z styling */}
          <div className="hidden md:flex items-center space-x-2 bg-card/60 backdrop-blur-md rounded-full px-6 py-3 border border-border/50 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:shadow-lg hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                    {item.emoji}
                  </span>
                  <span className="text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                    {item.label}
                  </span>
                </span>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button with Gen Z styling */}
          <button
            className="md:hidden relative p-3 rounded-2xl bg-gradient-to-tr from-purple-400 to-pink-400 text-white shadow-lg hover:shadow-purple-400/50 hover:scale-110 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative z-10">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-amber-400 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Navigation with Gen Z vibes */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-4 right-4 top-24 bg-card/90 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl overflow-hidden">
            <div className="py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative w-full flex items-center space-x-4 px-6 py-4 text-left hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4 w-full">
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                      {item.emoji}
                    </span>
                    <span className="text-lg font-medium text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                      {item.label}
                    </span>
                  </div>
                  <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
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
