import { Menu, X, Sun, Moon } from 'lucide-react';

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
        <a
          href="#"
          className={`text-xl font-bold tracking-tighter transition-colors ${
            isDark ? 'hover:text-[#cba6f7] text-[#cdd6f4]' : 'hover:text-[#8839ef] text-[#4c4f69]'
          }`}
        >
          &lt;OP /&gt;
        </a>

        <div
          className={`hidden md:flex space-x-8 text-sm font-medium ${
            isDark ? 'text-[#a6adc8]' : 'text-[#6c6f85]'
          }`}
        >
          {menuItems.map((item, i) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              style={{ animationDelay: `${i * 100}ms` }}
              className={`relative hover:text-inherit transition-colors py-1 animate-fade-in-down opacity-0 [animation-fill-mode:forwards] ${
                activeSection === item.toLowerCase() 
                  ? (isDark ? 'text-[#cba6f7]' : 'text-[#8839ef] font-bold')
                  : isDark
                    ? 'hover:text-[#cdd6f4]'
                    : 'hover:text-[#4c4f69]'
              }`}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                    isDark ? 'bg-[#cba6f7]' : 'bg-[#8839ef]'
                  }`}
                ></span>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all shadow-md ${
              isDark
                ? 'bg-[#313244] hover:bg-[#45475a] text-[#f9e2af]'
                : 'bg-[#fdfbf7] text-[#df8e1d] hover:bg-[#dce0e8]'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className={`md:hidden active:scale-95 transition-transform ${
              isDark ? 'text-[#cdd6f4] hover:text-[#cba6f7]' : 'text-[#4c4f69] hover:text-[#8839ef]'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-20 left-4 right-4 glass-panel rounded-xl p-4 flex flex-col space-y-4 md:hidden animate-fade-in-down origin-top">
          {menuItems.map((item, i) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              style={{ animationDelay: `${i * 50}ms` }}
              className={`block text-left py-2 px-2 rounded-lg transition-all animate-slide-in opacity-0 [animation-fill-mode:forwards] ${
                isDark
                  ? 'text-[#a6adc8] hover:text-[#cdd6f4] hover:bg-[#313244]/50'
                  : 'text-[#6c6f85] hover:text-[#4c4f69] hover:bg-[#bcc0cc]/50'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;



