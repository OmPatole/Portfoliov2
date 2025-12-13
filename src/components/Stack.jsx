import { Terminal, Code2, Globe, Cpu, Database, Cloud, Github, Coffee, FileCode, Box, Server, CloudLightning } from 'lucide-react';
import { motion } from 'framer-motion';

// TechCard defined outside to prevent re-renders
const TechCard = ({ tech, isDark }) => (
  <div
    // UPDATED: Reduced min-w for mobile so two cards fit (140px * 2 = 280px < ~360px screen)
    className={`glass-card p-3 md:p-4 rounded-xl flex items-center justify-center gap-2 md:gap-3 min-w-[140px] md:min-w-[180px] group transition-all duration-300 ${
      isDark ? 'hover:bg-[#313244]/50' : 'hover:bg-[#e3d5ca]/50'
    }`}
  >
    <div className="group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
      {tech.icon}
    </div>
    <span className={`text-sm font-medium ${isDark ? 'text-[#bac2de]' : 'text-[#7f5539]'}`}>
      {tech.name}
    </span>
  </div>
);

const Stack = ({ isDark }) => {
  const technologies = [
    { name: 'Python', icon: <Terminal className={isDark ? 'text-[#f9e2af]' : 'text-[#e09f3e]'} size={32} /> },
    { name: 'JavaScript', icon: <Code2 className={isDark ? 'text-[#f9e2af]' : 'text-[#e09f3e]'} size={32} /> },
    { name: 'React', icon: <Globe className={isDark ? 'text-[#74c7ec]' : 'text-[#6f4e37]'} size={32} /> },
    { name: 'Node.js', icon: <Cpu className={isDark ? 'text-[#a6e3a1]' : 'text-[#588157]'} size={32} /> },
    { name: 'MySQL', icon: <Database className={isDark ? 'text-[#89b4fa]' : 'text-[#9c6644]'} size={32} /> },
    { name: 'Google Cloud', icon: <Cloud className={isDark ? 'text-[#cdd6f4]' : 'text-[#7f5539]'} size={32} /> },
    { name: 'Git', icon: <Github className={isDark ? 'text-[#f38ba8]' : 'text-[#bc4749]'} size={32} /> },
    { name: 'Java', icon: <Coffee className={isDark ? 'text-[#fab387]' : 'text-[#d4a373]'} size={32} /> },
    { name: 'TypeScript', icon: <FileCode className={isDark ? 'text-[#89b4fa]' : 'text-[#1e66f5]'} size={32} /> },
    { name: 'Docker', icon: <Box className={isDark ? 'text-[#74c7ec]' : 'text-[#04a5e5]'} size={32} /> }, 
    { name: 'PostgreSQL', icon: <Server className={isDark ? 'text-[#cba6f7]' : 'text-[#8839ef]'} size={32} /> },
    { name: 'AWS', icon: <CloudLightning className={isDark ? 'text-[#fab387]' : 'text-[#fe640b]'} size={32} /> },
  ];

  // Duplicate list for infinite loop
  const techList = [...technologies, ...technologies];

  return (
    <section id="stack" className="py-20 overflow-hidden">
      <div className="max-w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold mb-16 text-center"
        >
          <span className={`border-b-2 pb-2 ${isDark ? 'border-[#74c7ec]' : 'border-[#6f4e37]'}`}>
            Technical Arsenal
          </span>
        </motion.h2>
        
        <div className="flex flex-col gap-12 hover-pause">
          {/* Row 1: Moves Left */}
          <div className="flex overflow-hidden w-full mask-gradient py-4">
            <div className="flex gap-6 w-max animate-scroll-left pl-6">
              {techList.map((tech, idx) => (
                <TechCard key={`row1-${idx}`} tech={tech} isDark={isDark} />
              ))}
            </div>
          </div>

          {/* Row 2: Moves Right (Reverse) */}
          <div className="flex overflow-hidden w-full mask-gradient py-4">
            <div className="flex gap-6 w-max animate-scroll-right pl-6">
              {techList.map((tech, idx) => (
                <TechCard key={`row2-${idx}`} tech={tech} isDark={isDark} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;