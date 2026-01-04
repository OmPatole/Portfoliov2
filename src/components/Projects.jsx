import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = ({ isDark }) => {
  const projects = [
    {
      title: "Secure Captive Portal",
      type: "Security",
      description: "Enterprise Wi-Fi management with Ruckus & Google Auth.",
      tech: ["NetSec", "Node.js", "Firebase"],
      github: "https://github.com/OmPatole/Captive-Portal",
      link: "#"
    },
    {
      title: "CGPA Calculator",
      type: "Development",
      description: "University grade calculator with custom logic.",
      tech: ["JS", "Algorithm", "HTML/CSS"],
      github: "https://github.com/OmPatole/CGPA-Cal",
      link: "https://ompatole.github.io/CGPA-Cal/"
    },
    {
      title: "Music Downloader",
      type: "Desktop App",
      description: "Automated song downloader with metadata tagging.",
      tech: ["Electron", "Node.js", "API"],
      github: "#",
      link: "#"
    },
    {
      title: "System Updater",
      type: "System Tool",
      description: "Windows utility for organizing & updating apps.",
      tech: ["PowerShell", "WinAPI"],
      github: "#",
      link: "#"
    }
  ];

  return (
    // CHANGED: Added "md:min-h-screen" and "md:snap-start"
    <section id="projects" className="w-full py-24 md:py-0 md:min-h-screen md:snap-start flex flex-col justify-center px-6 md:px-20 lg:px-32">
      <div className="mb-12 flex items-end justify-between">
        <div>
            <h2 className="text-3xl font-bold mb-4">Selected Work</h2>
            <div className={`h-px w-20 ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`} />
        </div>
        <a 
            href="https://github.com/OmPatole" 
            target="_blank" 
            rel="noreferrer" 
            className={`text-sm flex items-center gap-1 hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
            View GitHub <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative p-6 rounded-xl border transition-all duration-300 flex flex-col ${
              isDark 
                ? 'bg-[#121212] border-white/10 hover:border-white/20' 
                : 'bg-white border-black/5 hover:border-black/20 shadow-sm'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
               <div className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                  project.type === "Security" 
                    ? (isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-600/10 text-emerald-600')
                    : (isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-600/10 text-blue-600')
                }`}>
                  {project.type}
              </div>
              <div className="flex gap-2">
                {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100">
                    <Github size={18} />
                    </a>
                )}
                {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100">
                    <ExternalLink size={18} />
                    </a>
                )}
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            
            <p className={`text-sm mb-6 leading-relaxed flex-grow ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t, i) => (
                <span 
                  key={i}
                  className={`text-[10px] px-2 py-1 rounded-full font-medium ${
                    isDark 
                      ? 'bg-white/5 text-gray-300 border border-white/5' 
                      : 'bg-black/5 text-gray-700 border border-black/5'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;