import { Github, Cpu, Terminal, Coffee, Calculator } from 'lucide-react';

const Projects = ({ isDark }) => {
  const projects = [
    {
      title: 'CGPA Calculator',
      desc: 'A clean, efficient, and user-friendly web application for calculating Cumulative Grade Point Average. Features real-time updates and dynamic inputs.',
      tags: ['React', 'Vite', 'Tailwind'],
      // Green/Teal gradient to match the calculator's logo/theme
      color: isDark ? 'from-[#a6e3a1]/20 to-[#94e2d5]/20' : 'from-[#40a02b]/10 to-[#179299]/10',
      icon: <Calculator size={40} className={isDark ? 'text-[#cdd6f4]/70' : 'text-[#4c4f69]/70'} />,
      repo: 'https://github.com/ompatole/CGPA-Cal'
    },
    {
      title: 'Neural Net Vis',
      desc: 'Interactive 3D visualization of neural network layers using WebGL. Allows users to adjust weights in real-time.',
      tags: ['TypeScript', 'Three.js'],
      color: isDark ? 'from-[#89b4fa]/20 to-[#cba6f7]/20' : 'from-[#1e66f5]/10 to-[#8839ef]/10',
      icon: <Cpu size={40} className={isDark ? 'text-[#cdd6f4]/70' : 'text-[#4c4f69]/70'} />,
      repo: '#'
    },
    {
      title: 'Algo Trader Bot',
      desc: 'High-frequency trading bot analyzing crypto markets. Features backtesting engine and sentiment analysis.',
      tags: ['Python', 'Pandas', 'Google Cloud'],
      color: isDark ? 'from-[#a6e3a1]/20 to-[#94e2d5]/20' : 'from-[#40a02b]/10 to-[#179299]/10',
      icon: <Terminal size={40} className={isDark ? 'text-[#cdd6f4]/70' : 'text-[#4c4f69]/70'} />,
      repo: '#'
    },
    {
      title: 'Distributed Cache',
      desc: 'High-performance distributed caching system built with Java. Features custom protocol and consistency hashing.',
      tags: ['Java', 'NIO'],
      color: isDark ? 'from-[#fab387]/20 to-[#f38ba8]/20' : 'from-[#fe640b]/10 to-[#d20f39]/10',
      icon: <Coffee size={40} className={isDark ? 'text-[#cdd6f4]/70' : 'text-[#4c4f69]/70'} />,
      repo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span
            className={`border-b-2 pb-2 ${isDark ? 'border-[#cba6f7]' : 'border-[#8839ef]'}`}
          >
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl overflow-hidden flex flex-col h-full group hover:shadow-2xl transition-all duration-500 ${
                isDark ? 'hover:shadow-[#cba6f7]/10' : 'hover:shadow-[#8839ef]/10'
              }`}
            >
              <div className={`h-40 bg-linear-to-br ${project.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                {project.icon}
              </div>
              <div className="p-6 grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-xl font-bold transition-colors ${
                      isDark ? 'group-hover:text-[#cba6f7] text-[#cdd6f4]' : 'group-hover:text-[#8839ef] text-[#4c4f69]'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${
                      isDark ? 'text-[#a6adc8] hover:text-[#cdd6f4]' : 'text-[#6c6f85] hover:text-[#4c4f69]'
                    }`}
                  >
                    <Github size={20} />
                  </a>
                </div>
                <p
                  className={`text-sm mb-4 ${isDark ? 'text-[#bac2de]' : 'text-[#6c6f85]'}`}
                >
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded-md text-xs border transition-colors ${
                        isDark
                          ? 'bg-[#313244] text-[#89b4fa] border-[#45475a] group-hover:border-[#89b4fa]/30'
                          : 'bg-[#ccd0da]/50 text-[#1e66f5] border-[#bcc0cc] group-hover:border-[#1e66f5]/30'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;