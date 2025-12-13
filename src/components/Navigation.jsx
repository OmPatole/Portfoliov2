import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = ({ 
  isDark, 
  toggleTheme, 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  scrollToSection, 
  isVisible 
}) => {
  const menuItems = ['About', 'Stack', 'Projects', 'Journey', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 px-4 py-4 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="max-w-6xl mx-auto glass-panel rounded-2xl px-6 py-3 flex justify-between items-center">
        <a href="#" className={`text-xl font-bold tracking-tighter transition-colors ${isDark ? 'hover:text-[#cba6f7] text-[#cdd6f4]' : 'hover:text-[#a6662e] text-[#432818]'}`}>
          &lt;OP /&gt;
        </a>

        <div className={`hidden md:flex space-x-8 text-sm font-medium ${isDark ? 'text-[#a6adc8]' : 'text-[#7f5539]'}`}>
          {menuItems.map((item, i) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`relative hover:text-inherit transition-colors py-1 ${
                activeSection === item.toLowerCase() 
                  ? (isDark ? 'text-[#cba6f7]' : 'text-[#a6662e] font-bold')
                  : isDark ? 'hover:text-[#cdd6f4]' : 'hover:text-[#432818]'
              }`}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <motion.span
                  layoutId="navIndicator"
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${isDark ? 'bg-[#cba6f7]' : 'bg-[#a6662e]'}`}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all shadow-md ${
              isDark
                ? 'bg-[#313244] hover:bg-[#45475a] text-[#f9e2af]' // Dark Mode: Dark Blue BG, Yellow Sun
                : 'bg-black text-white hover:bg-gray-800'           // Light Mode: Black BG, White Moon
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          <button 
            className={`md:hidden active:scale-95 transition-transform ${isDark ? 'text-[#cdd6f4] hover:text-[#cba6f7]' : 'text-[#432818] hover:text-[#a6662e]'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-4 right-4 glass-panel rounded-xl p-4 flex flex-col space-y-4 md:hidden"
        >
          {menuItems.map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`block text-left py-2 px-2 rounded-lg transition-all ${
                isDark
                  ? 'text-[#a6adc8] hover:text-[#cdd6f4] hover:bg-[#313244]/50'
                  : 'text-[#7f5539] hover:text-[#432818] hover:bg-[#e3d5ca]/50'
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;