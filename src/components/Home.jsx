import { useState, useEffect, useRef } from 'react';
import LoadingScreen from './LoadingScreen';
import Navigation from './Navigation';
import BackgroundElements from './BackgroundElements';
import Hero from './Hero';
import Stack from './Stack';
import Projects from './Projects';
import Journey from './Journey';
import Contact from './Contact';
import Footer from './Footer';

// CHANGED: Imports updated to point to ../assets
import logoDark from '../assets/Dark.png';
import logoLight from '../assets/Light.png';

const Home = () => {
  const scrollRef = useRef(null);
  
  // Theme State logic moved here
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [isLoading, setIsLoading] = useState(true);

  // Manage Favicon based on theme
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
      ref={scrollRef}
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

      <main className="relative z-10 w-full max-w-[1920px] mx-auto">
        <Hero isDark={isDark} />
        <Stack isDark={isDark} />
        <Projects isDark={isDark} />
        <Journey isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
      
      <div className="md:snap-start relative z-10">
         <Footer isDark={isDark} />
      </div>
    </div>
  );
};

export default Home;