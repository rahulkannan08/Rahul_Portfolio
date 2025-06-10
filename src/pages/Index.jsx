
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen.jsx';
import Navigation from '../components/Navigation.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Education from '../components/Education.jsx';
import Contact from '../components/Contact.jsx';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Simulate minimum loading time for better UX
  useEffect(() => {
    const minLoadTime = setTimeout(() => {
      // This ensures the loading screen shows for at least 2 seconds
    }, 2000);

    return () => clearTimeout(minLoadTime);
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
