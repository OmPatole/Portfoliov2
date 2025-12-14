import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Wifi, Music, Calculator, Package } from 'lucide-react';

const Projects = ({ isDark }) => {
  const projects = [
    {
      title: "Ruckus Wi-Fi Manager",
      description: "Guest Wi-Fi management system using Ruckus routers and Google Auth.",
      tech: ["Firebase", "Google Auth", "React", "Node.js"],
      icon: <Wifi size={32} />,
      github: "https://github.com/OmPatole/Captive-Portal"
    },
    {
      title: "Music Downloader",
      description: "Desktop application to download songs with metadata and cover art.",
      tech: ["Electron", "React", "Node.js", "API"],
      icon: <Music size={32} />,
      github: "#"
    },
    {
      title: "CGPA Calculator",
      description: "Academic tool for calculating SGPA/CGPA based on university syllabus.",
      tech: ["JavaScript", "HTML/CSS", "Logic"],
      icon: <Calculator size={32} />,
      github: "https://github.com/OmPatole/CGPA-Cal",
      demo: "https://ompatole.github.io/CGPA-Cal/" // Added Demo Link only for this project
    },
    {
      title: "App Launcher & Updater",
      description: "Windows utility to organize, launch, and auto-update installed applications.",
      tech: ["Electron", "PowerShell", "React", "WinAPI"],
      icon: <Package size={32} />,
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 flex justify-center items-center">
      {/* Container - Uses full available width (up to 1600px) */}
      <div className="w-full max-w-[1600px]">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className={`h-1 w-20 mx-auto rounded-full ${isDark ? 'bg-[#89b4fa]' : 'bg-[#a6662e]'}`}></div>
        </motion.div>

        {/* Grid - 4 Columns on Large Screens (One Line) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 flex flex-col h-full ${
                isDark 
                  ? 'bg-[#1e1e2e]/50 border-[#313244] hover:border-[#89b4fa]/50 hover:shadow-lg hover:shadow-[#89b4fa]/10' 
                  : 'bg-[#fffcf9]/80 border-[#e3d5ca] hover:border-[#a6662e]/50 hover:shadow-lg hover:shadow-[#a6662e]/10'
              }`}
            >
              {/* Icon & Title */}
              <div className="mb-4 flex items-center justify-between">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-[#89b4fa]/10 text-[#89b4fa]' : 'bg-[#a6662e]/10 text-[#a6662e]'}`}>
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <a href={project.github} className={`p-2 rounded-full hover:bg-black/5 transition-colors ${isDark ? 'text-[#a6adc8] hover:text-white' : 'text-[#7f5539] hover:text-black'}`}>
                    <Github size={20} />
                  </a>
                  {/* Conditional Rendering for Demo Link */}
                  {project.demo && (
                    <a href={project.demo} className={`p-2 rounded-full hover:bg-black/5 transition-colors ${isDark ? 'text-[#a6adc8] hover:text-white' : 'text-[#7f5539] hover:text-black'}`}>
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              
              <p className={`text-sm mb-6 grow leading-relaxed ${isDark ? 'text-[#a6adc8]' : 'text-[#9c6644]'}`}>
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      isDark 
                        ? 'bg-[#313244] text-[#cba6f7]' 
                        : 'bg-[#e3d5ca] text-[#9c6644]'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;