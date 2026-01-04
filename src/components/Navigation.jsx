import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ isDark, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    links.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // CHANGED:
    // 1. Removed "border-b"
    // 2. Increased blur to "backdrop-blur-2xl"
    // 3. Lowered opacity to "/30" for better blending
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDark 
          ? 'bg-[#0a0a0a]/30 backdrop-blur-2xl' 
          : 'bg-[#fafafa]/30 backdrop-blur-2xl'
      }`}>
      
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between relative">
        
        {/* LEFT: Logo */}
        <button onClick={() => scrollTo('#about')} className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity z-20">
          &lt;OP /&gt;
        </button>

        {/* CENTER: Desktop Navigation */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
          {links.map((link, index) => (
            <div key={link.name} className="flex items-center">
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === link.href.substring(1)
                      ? (isDark ? 'text-white' : 'text-black') 
                      : (isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black')
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                        layoutId="nav-indicator"
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                            isDark ? 'bg-blue-500' : 'bg-blue-600'
                        }`}
                    />
                  )}
                </button>
                
                {index < links.length - 1 && (
                    <span className={`mx-4 text-xs ${isDark ? 'text-gray-800' : 'text-gray-300'}`}>|</span>
                )}
            </div>
          ))}
        </div>

        {/* RIGHT: Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4 z-20">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-black hover:bg-black/5'
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`md:hidden ${isDark ? 'text-white' : 'text-black'}`}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            // CHANGED: Added backdrop blur and transparency to mobile menu too
            className={`md:hidden overflow-hidden backdrop-blur-2xl ${
                isDark ? 'bg-[#0a0a0a]/90' : 'bg-[#fafafa]/90'
            }`}
          >
            <div className="flex flex-col items-center justify-center p-6 gap-2">
              {links.map((link, idx) => (
                <div key={link.name} className="w-full flex flex-col items-center">
                    <button
                        onClick={() => scrollTo(link.href)}
                        className={`text-lg font-medium py-3 w-full text-center transition-colors ${
                            isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                        }`}
                    >
                        {link.name}
                    </button>
                    
                    {idx < links.length - 1 && (
                        <div className={`h-px w-16 rounded-full opacity-50 ${
                            isDark ? 'bg-white/10' : 'bg-black/10'
                        }`} />
                    )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;