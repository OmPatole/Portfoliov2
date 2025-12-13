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
import GlobalStyles from './components/GlobalStyles';

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const totalTime = 2500;
    const interval = 20;
    const steps = totalTime / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min((currentStep / steps) * 100, 100);
      setLoadingProgress(progress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setIsLoading(false), 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setIsVisible(true);
    }
  }, [isLoading]);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add('animate-on-scroll');
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isLoading]);

  const toggleTheme = () => setIsDark(!isDark);

  if (isLoading) {
    return <LoadingScreen isDark={isDark} loadingProgress={loadingProgress} />;
  }

  return (
    <div 
      className={`min-h-screen font-mono transition-colors duration-700 overflow-x-hidden relative ${
        isDark 
          ? 'bg-linear-to-br from-[#1e1e2e] via-[#181825] to-[#11111b] text-[#cdd6f4] selection:bg-[#f5c2e7]/30 selection:text-[#f5c2e7]'
          : 'bg-[#f4ede4] text-[#432818] selection:bg-[#a6662e]/30 selection:text-[#a6662e]'
      }`}
    >
      <GlobalStyles isDark={isDark} />
      <div style={{
        '--glass-panel-bg': isDark ? 'rgba(30, 30, 46, 0.7)' : 'rgba(255, 255, 255, 0.6)',
        '--glass-card-bg': isDark ? 'rgba(49, 50, 68, 0.4)' : 'rgba(255, 255, 255, 0.5)',
        '--glass-card-hover-bg': isDark ? 'rgba(69, 71, 90, 0.6)' : 'rgba(255, 255, 255, 0.8)',
        '--glass-border': isDark ? 'rgba(147, 153, 178, 0.2)' : 'rgba(127, 85, 57, 0.2)',
        '--glass-border-hover': isDark ? 'rgba(180, 190, 254, 0.4)' : 'rgba(156, 102, 68, 0.5)',
      }}>
        <BackgroundElements isDark={isDark} />

        <Navigation 
          isDark={isDark}
          toggleTheme={toggleTheme}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          isVisible={isVisible}
        />

        <Hero 
          isDark={isDark}
          isVisible={isVisible}
          scrollToSection={scrollToSection}
        />

        <Stack isDark={isDark} />

        <Projects isDark={isDark} />

        <Journey isDark={isDark} />

        <Contact isDark={isDark} />

        <Footer isDark={isDark} />
      </div>
    </div>
  );
};

export default App;