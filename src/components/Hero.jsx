import { useState, useEffect, useRef } from 'react';
import { Download, Bot, Radio, Cpu, Terminal, ChevronDown } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import resumeFile from '../assets/Resume.pdf';

// --- Components ---

const ScrambleText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  
  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text.split("").map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  return <span onMouseEnter={scramble} className={`inline-block cursor-default ${className}`}>{displayText}</span>;
};

const ParticleNetwork = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const particleColor = isDark ? 'rgba(137, 180, 250, 0.5)' : 'rgba(166, 102, 46, 0.5)';
    const lineColor = isDark ? 'rgba(137, 180, 250, 0.15)' : 'rgba(166, 102, 46, 0.15)';

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numberOfParticles; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

// --- Animated Coding Bot (Desktop Only) ---
const CodingBot = ({ isDark, isExcited }) => {
  // Eye Tracking Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get mouse position relative to window center
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // INCREASED SENSITIVITY: Changed range from [-20, 20] to [-35, 35] for wider eye movement
  const eyeX = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-35, 35]);
  const eyeY = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-35, 35]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: isExcited ? [-5, 5, -5] : [-10, 10, -10], // Faster bounce when excited
      }}
      transition={{ 
        duration: isExcited ? 0.5 : 4, // Faster bounce
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="relative w-80 h-80 flex items-center justify-center"
    >
      {/* Glow Effect */}
      <motion.div 
        animate={{ scale: isExcited ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className={`absolute inset-0 blur-3xl opacity-30 rounded-full ${isDark ? 'bg-blue-500' : 'bg-orange-500'}`} 
      />

      {/* Bot Body */}
      <div className={`relative z-10 w-48 h-60 rounded-[2.5rem] border-4 backdrop-blur-md flex flex-col items-center justify-between p-6 shadow-2xl transition-colors duration-300 ${
        isDark ? 'bg-[#1e1e2e]/80 border-[#89b4fa] shadow-blue-500/20' : 'bg-[#fffcf9]/80 border-[#a6662e] shadow-orange-500/20'
      }`}>
        
        {/* Antenna */}
        <div className={`absolute -top-8 w-2 h-8 ${isDark ? 'bg-[#89b4fa]' : 'bg-[#a6662e]'}`}>
          <motion.div 
            animate={{ 
              opacity: isExcited ? [1, 0.2, 1] : [0.5, 1, 0.5],
              scale: isExcited ? 1.2 : 1
            }}
            transition={{ duration: isExcited ? 0.2 : 1, repeat: Infinity }}
            className={`absolute -top-3 -left-1.5 w-5 h-5 rounded-full ${isDark ? 'bg-red-400' : 'bg-red-500'} shadow-lg shadow-red-500/50`} 
          />
        </div>

        {/* Face/Screen */}
        <div className={`w-full h-24 rounded-2xl flex items-center justify-center gap-4 overflow-hidden relative transition-colors duration-300 ${isDark ? 'bg-[#11111b]' : 'bg-[#432818]'}`}>
          {/* Scanning Line */}
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: isExcited ? 1 : 3, repeat: Infinity, ease: "linear" }}
            className={`absolute left-0 w-full h-1 opacity-50 ${isDark ? 'bg-[#89b4fa]' : 'bg-[#a6662e]'}`}
          />
          
          {/* Eyes (Tracking + Emotion) */}
          {[0, 1].map((i) => (
            <motion.div 
              key={i}
              style={{ x: eyeX, y: eyeY }}
              animate={isExcited 
                ? { height: 20, width: 16, borderRadius: "12px" } // Wide open eyes
                : { height: [12, 2, 12], width: 12, borderRadius: "9999px" } // Normal blinking
              }
              transition={isExcited 
                ? { type: "spring", stiffness: 300, damping: 15 }
                : { duration: 3, repeat: Infinity, times: [0.9, 0.95, 1], delay: i * 0.1 }
              }
              className={`transition-colors duration-300 ${isDark ? 'bg-[#89b4fa]' : 'bg-[#f4ede4]'}`} 
            />
          ))}
        </div>

        {/* Chest Interface */}
        <div className="w-full grid grid-cols-2 gap-2 mt-4">
          <div className={`h-2 rounded-full w-full transition-colors duration-300 ${isDark ? 'bg-[#313244]' : 'bg-[#e3d5ca]'}`}>
            <motion.div 
              animate={{ width: isExcited ? "100%" : "30%" }} // Low when curious, Full when excited
              transition={{ duration: 0.5 }}
              className={`h-full rounded-full ${isDark ? 'bg-green-400' : 'bg-green-500'}`} 
            />
          </div>
          <div className="flex justify-end gap-1">
             <Bot size={16} className={isDark ? 'text-[#cba6f7]' : 'text-[#a6662e]'} />
             <Radio size={16} className={isDark ? 'text-[#89b4fa]' : 'text-[#9c6644]'} />
          </div>
        </div>

        <div className={`text-[10px] font-mono mt-auto transition-colors duration-300 ${isDark ? 'text-[#a6adc8]' : 'text-[#7f5539]'}`}>
          STATUS: <span className="text-green-500 animate-pulse">{isExcited ? "EXCITED!" : "CURIOUS"}</span>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        className={`absolute -right-8 top-10 p-3 rounded-xl border backdrop-blur-sm transition-colors duration-300 ${isDark ? 'bg-[#1e1e2e]/50 border-[#89b4fa]/30' : 'bg-[#fffcf9]/50 border-[#a6662e]/30'}`}
      >
        <Cpu size={24} className={isDark ? 'text-[#f38ba8]' : 'text-[#bc4749]'} />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className={`absolute -left-6 bottom-20 p-3 rounded-xl border backdrop-blur-sm transition-colors duration-300 ${isDark ? 'bg-[#1e1e2e]/50 border-[#cba6f7]/30' : 'bg-[#fffcf9]/50 border-[#a6662e]/30'}`}
      >
        <Terminal size={24} className={isDark ? 'text-[#a6e3a1]' : 'text-[#588157]'} />
      </motion.div>
    </motion.div>
  );
};

// --- Main Hero Component ---

const Hero = ({ isDark, isVisible, scrollToSection }) => {
  const [isResumeHovered, setIsResumeHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-32 md:py-20 px-4 relative overflow-hidden">
      <ParticleNetwork isDark={isDark} />

      <div className="max-w-[90%] xl:max-w-[1600px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          className="text-left flex flex-col justify-center gap-8 h-full py-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className={`inline-block px-4 py-1 rounded-full text-xs border glass-card w-fit ${
              isDark
                ? 'text-[#89b4fa] border-[#89b4fa]/30'
                : 'text-[#9c6644] border-[#9c6644]/30 bg-[#9c6644]/10'
            }`}
          >
            System.out.println("Hello World");
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Building the <ScrambleText text="Future" className={isDark ? 'text-[#cba6f7]' : 'text-[#a6662e]'} /><br />
            One Line at a Time
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl max-w-xl leading-relaxed ${
              isDark ? 'text-[#a6adc8]' : 'text-[#7f5539]'
            }`}
          >
            Full-Stack Developer & CS Engineer specialized in building exceptional digital experiences. Currently focused on distributed systems and AI integration.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start gap-4">
            <motion.a 
              onMouseEnter={() => setIsResumeHovered(true)}
              onMouseLeave={() => setIsResumeHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all w-full sm:w-auto flex items-center justify-center gap-2 group ${
                isDark
                  ? 'bg-[#89b4fa] text-[#1e1e2e] hover:shadow-[#89b4fa]/25'
                  : 'bg-[#a6662e] text-[#f4ede4] hover:shadow-[#a6662e]/25'
              }`}
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Resume (PDF)
            </motion.a>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 rounded-xl glass-card font-medium transition-all w-full sm:w-auto ${
                isDark ? 'text-[#cdd6f4] hover:bg-[#313244]/50' : 'text-[#5c4033] hover:bg-[#e3d5ca]/50'
              }`}
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* MOBILE ONLY: Old Code Snippet */}
          <motion.div
            variants={itemVariants}
            className={`w-full rounded-2xl p-6 text-left block md:hidden border shadow-2xl transition-all duration-300 ${
              isDark 
                ? 'bg-[#181825] backdrop-blur-md border-[#313244]' 
                : 'bg-[#fffcf9] backdrop-blur-md border-[#ddb892]'
            }`}
          >
            <div className="flex space-x-2 mb-4">
              <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-[#f38ba8]' : 'bg-[#d00000]'}`}></div>
              <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-[#f9e2af]' : 'bg-[#ffba08]'}`}></div>
              <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-[#a6e3a1]' : 'bg-[#3f8f29]'}`}></div>
            </div>
            <pre className={`text-xs block font-mono leading-relaxed overflow-x-auto ${isDark ? 'text-[#a6adc8]' : 'text-[#7f5539]'}`}>
              <code>
                <span className={isDark ? 'text-[#cba6f7]' : 'text-[#9c6644]'}>class</span>{' '}
                <span className={isDark ? 'text-[#f9e2af]' : 'text-[#e09f3e]'}>Dev</span> {'{'}<br />
                {'  '}<span className={isDark ? 'text-[#89b4fa]' : 'text-[#6f4e37]'}>this</span>.name = <span className={isDark ? 'text-[#a6e3a1]' : 'text-[#588157]'}>"Om"</span>;<br />
                {'  '}<span className={isDark ? 'text-[#89b4fa]' : 'text-[#6f4e37]'}>this</span>.loc = <span className={isDark ? 'text-[#a6e3a1]' : 'text-[#588157]'}>"India"</span>;<br />
                {'}'}
              </code>
            </pre>
          </motion.div>
        </motion.div>

        {/* Right Side: Coding Bot (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:flex justify-center items-center h-full"
        >
          <CodingBot isDark={isDark} isExcited={isResumeHovered} />
        </motion.div>
      </div>

      {/* Scroll Down Indicator Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() => scrollToSection('stack')}
      >
        <ChevronDown 
          size={32} 
          className={`${isDark ? 'text-[#89b4fa]' : 'text-[#a6662e]'} hover:scale-125 transition-transform duration-300`} 
        />
      </motion.div>
    </section>
  );
};

export default Hero;