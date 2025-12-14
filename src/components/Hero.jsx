import { useState, useEffect, useRef } from 'react';
import { Download, Bot, Radio, Cpu, Terminal, ChevronDown } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
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

  useEffect(() => {
    scramble();
  }, []);

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
  const [isClicked, setIsClicked] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const isActive = isExcited || isClicked;

  let statusText = "WATCHING";
  if (isClicked) statusText = "HAPPY!";
  else if (isExcited) statusText = "EXCITED!";

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleBotClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000); 
  };

  const moveX = useTransform(mouseX, [-window.innerWidth / 2, window.innerWidth / 2], [-50, 50]);
  const moveY = useTransform(mouseY, [-window.innerHeight / 2, window.innerHeight / 2], [-50, 50]);
  
  const rotateX = useTransform(mouseY, [-window.innerHeight / 2, window.innerHeight / 2], [25, -25]); 
  const rotateY = useTransform(mouseX, [-window.innerWidth / 2, window.innerWidth / 2], [-25, 25]); 
  
  const springConfig = { stiffness: 100, damping: 15 };
  const springX = useSpring(moveX, springConfig);
  const springY = useSpring(moveY, springConfig);
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const eyeX = useTransform(mouseX, [-window.innerWidth / 2, window.innerWidth / 2], [-20, 20]);
  const eyeY = useTransform(mouseY, [-window.innerHeight / 2, window.innerHeight / 2], [-20, 20]);

  const statusColor = isActive ? "text-green-500" : "text-green-500";
  const barColor = isActive ? "bg-green-500" : "bg-green-500";
  const barWidth = isActive ? "100%" : "30%";

  return (
    <div className="relative w-[600px] h-[500px] flex items-center justify-center">
      
      {/* 1. STATIC GLOW */}
      <div 
        className={`absolute inset-0 blur-3xl opacity-20 rounded-full pointer-events-none transform translate-z-0 ${isDark ? 'bg-blue-500' : 'bg-orange-500'}`} 
      />

      {/* 2. STATIC ICONS (No Tilt) */}
      <motion.div 
        animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        className={`absolute -right-16 top-10 p-4 rounded-xl border backdrop-blur-sm transition-colors duration-300 z-0 ${isDark ? 'bg-[#1e1e2e]/50 border-[#89b4fa]/30' : 'bg-[#fffcf9]/50 border-[#a6662e]/30'}`}
      >
        <Cpu size={32} className={isDark ? 'text-[#f38ba8]' : 'text-[#bc4749]'} />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className={`absolute -left-16 bottom-24 p-4 rounded-xl border backdrop-blur-sm transition-colors duration-300 z-0 ${isDark ? 'bg-[#1e1e2e]/50 border-[#cba6f7]/30' : 'bg-[#fffcf9]/50 border-[#a6662e]/30'}`}
      >
        <Terminal size={32} className={isDark ? 'text-[#a6e3a1]' : 'text-[#588157]'} />
      </motion.div>

      {/* 3. MOVING BOT (3D) */}
      <motion.div
        onClick={handleBotClick}
        style={{ 
          x: springX, 
          y: springY, 
          rotateX: springRotateX, 
          rotateY: springRotateY, 
          perspective: 1200 
        }}
        className="relative w-[500px] h-full flex items-center justify-center cursor-pointer z-10"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ 
            y: isActive ? [-5, 5, -5] : [-15, 15, -15],
          }}
          transition={{ 
            duration: isActive ? 0.5 : 4,
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-full h-full flex items-center justify-center relative transform-style-3d"
        >
          {/* Bot Body */}
          <div className={`relative z-10 w-64 h-80 rounded-[3rem] border-4 backdrop-blur-md flex flex-col items-center justify-between p-8 shadow-2xl transition-colors duration-300 ${
            isDark ? 'bg-[#1e1e2e]/90 border-[#89b4fa] shadow-blue-500/30' : 'bg-[#fffcf9]/90 border-[#a6662e] shadow-orange-500/30'
          }`}>
            
            {/* Antenna */}
            <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-12 rounded-full ${isDark ? 'bg-[#89b4fa]' : 'bg-[#a6662e]'}`}>
              <motion.div 
                animate={{ 
                  opacity: isActive ? [1, 0.2, 1] : [0.5, 1, 0.5],
                  scale: isActive ? 1.2 : 1
                }}
                transition={{ duration: isActive ? 0.2 : 1, repeat: Infinity }}
                className={`absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full ${isDark ? 'bg-red-400' : 'bg-red-500'} shadow-lg shadow-red-500/50 z-20`} 
              />
            </div>

            {/* Face/Screen */}
            <div className={`w-full h-32 rounded-3xl flex items-center justify-center gap-6 overflow-hidden relative transition-colors duration-300 ${isDark ? 'bg-[#11111b]' : 'bg-[#432818]'}`}>
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: isActive ? 1 : 3, repeat: Infinity, ease: "linear" }}
                className={`absolute left-0 w-full h-1 opacity-50 ${isDark ? 'bg-[#89b4fa]' : 'bg-[#a6662e]'}`}
              />
              
              {/* Eyes */}
              {[0, 1].map((i) => (
                <motion.div 
                  key={i}
                  style={{ x: eyeX, y: eyeY }}
                  animate={
                    isActive 
                        ? { height: 24, width: 20, borderRadius: "12px", rotate: 0 } 
                        : { height: [16, 2, 16], width: 16, borderRadius: "9999px", rotate: 0 }
                  }
                  transition={
                    isActive 
                        ? { type: "spring", stiffness: 300, damping: 15 }
                        : { duration: 3, repeat: Infinity, times: [0.9, 0.95, 1], delay: i * 0.1 }
                  }
                  className={`transition-colors duration-300 ${isDark ? 'bg-[#89b4fa]' : 'bg-[#f4ede4]'}`} 
                />
              ))}
            </div>

            {/* Chest Interface */}
            <div className="w-full grid grid-cols-2 gap-3 mt-4">
              <div className={`h-3 rounded-full w-full transition-colors duration-300 ${isDark ? 'bg-[#313244]' : 'bg-[#e3d5ca]'}`}>
                <motion.div 
                  animate={{ width: barWidth }} 
                  transition={{ duration: 0.5 }}
                  className={`h-full rounded-full ${barColor}`} 
                />
              </div>
              <div className="flex justify-end gap-2">
                <Bot size={20} className={isDark ? 'text-[#cba6f7]' : 'text-[#a6662e]'} />
                <Radio size={20} className={isDark ? 'text-[#89b4fa]' : 'text-[#9c6644]'} />
              </div>
            </div>

            <div className={`text-xs font-mono mt-auto transition-colors duration-300 ${isDark ? 'text-[#a6adc8]' : 'text-[#7f5539]'}`}>
              STATUS: <span className={`${statusColor} animate-pulse`}>{statusText}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
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
    // FIX APPLIED: 
    // 1. pt-32: Creates ~48px safe gap between Nav and Content (better than previous 64px or 0px).
    // 2. pb-48: Increases bottom padding significantly to ensure the 'Code Snippet' never hits the drop-down arrow.
    <section id="about" className="min-h-screen flex flex-col items-center justify-start md:justify-center pt-32 pb-48 md:py-20 px-4 relative overflow-hidden">
      <ParticleNetwork isDark={isDark} />

      {/* Main Container */}
      <div className="w-full max-w-[90%] xl:max-w-[1600px] flex flex-col items-center gap-12 relative z-10">
        
        {/* Top Center: System.out.println */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={itemVariants}
          className={`inline-block px-6 py-2 rounded-full text-sm border glass-card font-mono font-medium tracking-wide ${
            isDark
              ? 'text-[#89b4fa] border-[#89b4fa]/30 bg-[#1e1e2e]/50'
              : 'text-[#9c6644] border-[#9c6644]/30 bg-[#9c6644]/10'
          }`}
        >
          System.out.println("Hello World");
        </motion.div>

        {/* Grid Content */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div 
            className="text-left md:text-left flex flex-col justify-center gap-8 h-full"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
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
              {/* RESUME BUTTON: Triggers "Excited" state on hover */}
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

            {/* MOBILE ONLY: Code Snippet */}
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
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
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