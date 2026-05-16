import React, { useState, useEffect, lazy, Suspense } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Navigation from '../components/Navigation';

// Lazy-load all below-the-fold sections for better initial load time
const Hero           = lazy(() => import('../components/Hero'));
const About          = lazy(() => import('../components/About'));
const Skills         = lazy(() => import('../components/Skills'));
const Projects       = lazy(() => import('../components/Projects'));
const Design         = lazy(() => import('../components/Design'));
const Education      = lazy(() => import('../components/Education'));
const Contact        = lazy(() => import('../components/Contact'));
const CursorFollower = lazy(() => import('../components/CursorFollower'));

// Invisible placeholder so layout doesn't jump while chunks load
const SectionFallback = () => (
  <div aria-hidden="true" style={{ minHeight: '200px' }} />
);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const minLoadTime = setTimeout(() => {}, 2000);
    return () => clearTimeout(minLoadTime);
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Suspense fallback={null}>
        <CursorFollower />
      </Suspense>
      <Navigation />
      <main>
        <Suspense fallback={<SectionFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Design />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
