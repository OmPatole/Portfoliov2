import { Github, Cpu, Terminal, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = ({ isDark }) => {
  const projects = [
    {
      title: 'CGPA Calculator',
      desc: 'A clean, efficient, and user-friendly web application for calculating Cumulative Grade Point Average. Features real-time updates and dynamic inputs.',
      tags: ['React', 'Vite', 'Tailwind'],
      bgColor: isDark ? 'bg-[#a6e3a1]/20' : 'bg-[#588157]/20',
      icon: <Calculator size={40} className={isDark ? 'text-[#cdd6f4]/70' : 'text-[#432818]/70'} />,
      repo: 'https://github.com/ompatole/CGPA-Cal'
    },
    {
      title: 'Neural Net Vis',
      desc: 'Interactive 3D visualization of neural network layers using WebGL. Allows users to adjust weights in real-time.',
      tags: ['TypeScript', 'Three.js'],
      bgColor: isDark ? 'bg-[#89b4fa]/20' : 'bg-[#6f4e37]/20',
      icon: <Cpu size={40} className={isDark ? 'text-[#cdd6f4]/70' : 'text-[#432818]/70'} />,
      repo: '#'
    },
    {
      title: 'Algo Trader Bot',
      desc: 'High-frequency trading bot analyzing crypto markets. Features backtesting engine and sentiment analysis.',
      tags: ['Python', 'Pandas', 'Google Cloud'],
      bgColor: isDark ? 'bg-[#a6e3a1]/20' : 'bg-[#588157]/20',
      icon: <Terminal size={40} className={isDark ? 'text-[#cdd6f4]/70' : 'text-[#432818]/70'} />,
      repo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          <span className={`border-b-2 pb-2 ${isDark ? 'border-[#cba6f7]' : 'border-[#a6662e]'}`}>
            Featured Projects
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className={`glass-card rounded-2xl overflow-hidden flex flex-col h-full group hover:shadow-2xl transition-all duration-300 ${
                isDark ? 'hover:shadow-[#cba6f7]/10' : 'hover:shadow-[#a6662e]/10'
              }`}
            >
              <div className={`h-40 ${project.bgColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                {project.icon}
              </div>
              <div className="p-6 grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-xl font-bold ${isDark ? 'group-hover:text-[#cba6f7] text-[#cdd6f4]' : 'group-hover:text-[#a6662e] text-[#432818]'}`}>
                    {project.title}
                  </h3>
                  <motion.a
                    whileHover={{ rotate: 20, scale: 1.2 }}
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={isDark ? 'text-[#a6adc8] hover:text-[#cdd6f4]' : 'text-[#7f5539] hover:text-[#432818]'}
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
                <p className={`text-sm mb-4 ${isDark ? 'text-[#bac2de]' : 'text-[#7f5539]'}`}>
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded-md text-xs border ${
                        isDark
                          ? 'bg-[#313244] text-[#89b4fa] border-[#45475a]'
                          : 'bg-[#e3d5ca] text-[#9c6644] border-[#ddb892]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;