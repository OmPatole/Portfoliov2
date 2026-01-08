import { motion } from 'framer-motion';
import { Download, ArrowRight, ShieldCheck } from 'lucide-react';
import resumeFile from '../assets/Resume.pdf';

const Hero = ({ isDark }) => {
  return (
    // CHANGED: Added "md:min-h-screen" and "md:snap-start" for full screen behavior
    <section id="about" className="w-full py-32 md:py-0 md:min-h-screen md:snap-start flex flex-col justify-center px-6 md:px-20 lg:px-32 md:items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl md:text-center"
      >
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-6 border ${
          isDark 
            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' 
            : 'border-emerald-600/30 bg-emerald-600/10 text-emerald-700'
        }`}>
          <ShieldCheck size={14} />
          <span>Security & Development</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Building secure,<br />
          <span className={isDark ? 'text-gray-300' : 'text-gray-400'}>resilient digital infrastructure.</span>
        </h1>

        <p className={`text-lg md:text-xl max-w-2xl leading-relaxed mb-8 ${isDark ? 'text-gray-200' : 'text-gray-600'} md:mx-auto`}>
          I'm <span className={isDark ? 'text-white font-semibold' : 'text-black font-semibold'}>Om Patole</span>. 
          I bridge the gap between <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>Full-Stack Development</span> and <span className={isDark ? 'text-emerald-400' : 'text-emerald-600'}>Cybersecurity</span>.
        </p>

        <p className={`text-base md:text-lg max-w-3xl leading-relaxed mb-10 ${isDark ? 'text-gray-300' : 'text-gray-500'} md:mx-auto`}>
          With a deep focus on <strong>Network Security</strong> and <strong>Distributed Systems</strong>, I craft applications that are not only performant but fundamentally secure. 
          Currently architecting next-gen solutions at <strong>Shivaji University</strong> and exploring the frontiers of <strong>Generative AI</strong>, 
          I leverage stacks like MERN and Next.js to build software that stands the test of time.
        </p>

        <div className="flex flex-wrap gap-4 md:justify-center">
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              isDark 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            <Download size={18} />
            Resume
          </a>
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            // CHANGED: Added backdrop-blur-sm and low opacity background colors (bg-white/10 and bg-black/5)
            // to make the button translucent instead of transparent.
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium border transition-all backdrop-blur-sm ${
              isDark 
                ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' 
                : 'bg-black/5 border-black/20 hover:bg-black/10 text-black'
            }`}
          >
            Projects
            <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;