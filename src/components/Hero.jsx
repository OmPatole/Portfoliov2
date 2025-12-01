import { Download } from 'lucide-react';

const Hero = ({ isDark, isVisible, scrollToSection }) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl w-full text-center relative">
        <div
          className={`glass-card inline-block px-4 py-1 rounded-full text-xs mb-6 border ${
            isDark
              ? 'text-[#89b4fa] border-[#89b4fa]/30'
              : 'text-[#1e66f5] border-[#1e66f5]/30 bg-[#1e66f5]/10'
          } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          System.out.println("Hello World");
        </div>
        
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          Building the <span className="gradient-text">Future</span><br />
          One Line at a Time
        </h1>
        
        <p
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${
            isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
          } ${isDark ? 'text-[#a6adc8]' : 'text-[#6c6f85]'}`}
        >
          Full-Stack Developer & CS Engineer specialized in building exceptional digital experiences. Currently focused on distributed systems and AI integration.
        </p>

        <div className={`flex flex-col md:flex-row items-center justify-center gap-4 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          <a 
            href="/src/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all transform hover:-translate-y-1 w-full md:w-auto flex items-center justify-center gap-2 group active:scale-95 ${
              isDark
                ? 'bg-linear-to-r from-[#89b4fa] to-[#b4befe] text-[#1e1e2e] hover:shadow-[#89b4fa]/25'
                : 'bg-linear-to-r from-[#1e66f5] to-[#7287fd] text-[#fdfbf7] hover:shadow-[#1e66f5]/25'
            }`}
            onClick={(e) => {
              e.preventDefault();
              window.open('/src/assets/Resume.pdf', '_blank');
            }}
          >
            <Download size={20} className="group-hover:animate-bounce" />
            Resume (PDF)
          </a>

          <button 
            onClick={() => scrollToSection('contact')}
            className={`px-8 py-3 rounded-xl glass-card font-medium transition-all w-full md:w-auto active:scale-95 ${
              isDark ? 'text-[#cdd6f4] hover:bg-[#313244]/50' : 'text-[#4c4f69] hover:bg-[#bcc0cc]/50'
            }`}
          >
            Contact Me
          </button>
        </div>

        <div
          className={`mt-16 mx-auto max-w-2xl rounded-xl p-4 text-left transform rotate-1 hover:rotate-0 transition-transform duration-500 hidden md:block border shadow-2xl ${
            isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'
          } bg-[#181825] backdrop-blur-md border-[#313244]`}
        >
          <div className="flex space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#f38ba8]"></div>
            <div className="w-3 h-3 rounded-full bg-[#f9e2af]"></div>
            <div className="w-3 h-3 rounded-full bg-[#a6e3a1]"></div>
          </div>
          <code className="text-sm block text-[#a6adc8]">
            <span className="text-[#cba6f7]">class</span>{' '}
            <span className="text-[#f9e2af]">Developer</span> {'{'}<br />
            &nbsp;&nbsp;<span className="text-[#cba6f7]">constructor</span>() {'{'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#89b4fa]">this</span>.name =
            <span className="text-[#a6e3a1]">"Om Patole"</span>;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#89b4fa]">this</span>.location =
            <span className="text-[#a6e3a1]">"Kolhapur"</span>;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#89b4fa]">this</span>.life =
            <span className="text-[#f9e2af]">["Eat", "Code", "Sleep"]</span>;<br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </code>
        </div>
      </div>
    </section>
  );
};

export default Hero;



