import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import BackgroundElements from './components/BackgroundElements';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

import logoDark from './assets/Dark.png';
import logoLight from './assets/Light.png';

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const favicon = document.querySelector("link[rel*='icon']");
    if (favicon) {
      favicon.href = isDark ? logoDark : logoLight;
    }
  }, [isDark]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  if (isLoading) {
    return <LoadingScreen isDark={isDark} />;
  }

  return (
    <div 
      // CHANGED: Added "md:snap-y md:snap-mandatory" to enforce full-screen stops on desktop
      className={`relative h-screen w-full overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth transition-colors duration-500 ${
        isDark 
          ? 'bg-[#0a0a0a] text-gray-100 selection:bg-blue-500/30'
          : 'bg-[#fafafa] text-gray-900 selection:bg-blue-500/20'
      }`}
    >
      <BackgroundElements isDark={isDark} />
      
      <Navigation 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />

      <main className="w-full max-w-[1920px] mx-auto">
        <Hero isDark={isDark} />
        <Stack isDark={isDark} />
        <Projects isDark={isDark} />
        <Journey isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
      
      {/* Footer snaps to the end */}
      <div className="md:snap-start">
         <Footer isDark={isDark} />
      </div>
    </div>
  );
};

export default App;