import { Terminal, Code2, Globe, Cpu, Database, Cloud, Github, Coffee } from 'lucide-react';

const Stack = ({ isDark }) => {
  const technologies = [
    {
      name: 'Python',
      icon: <Terminal className={isDark ? 'text-[#f9e2af]' : 'text-[#df8e1d]'} size={32} />,
    },
    {
      name: 'JavaScript',
      icon: <Code2 className={isDark ? 'text-[#f9e2af]' : 'text-[#df8e1d]'} size={32} />,
    },
    {
      name: 'React',
      icon: <Globe className={isDark ? 'text-[#74c7ec]' : 'text-[#04a5e5]'} size={32} />,
    },
    {
      name: 'Node.js',
      icon: <Cpu className={isDark ? 'text-[#a6e3a1]' : 'text-[#40a02b]'} size={32} />,
    },
    {
      name: 'MySQL',
      icon: <Database className={isDark ? 'text-[#89b4fa]' : 'text-[#1e66f5]'} size={32} />,
    },
    {
      name: 'Google Cloud',
      icon: <Cloud className={isDark ? 'text-[#cdd6f4]' : 'text-[#1e66f5]'} size={32} />,
    },
    {
      name: 'Git',
      icon: <Github className={isDark ? 'text-[#f38ba8]' : 'text-[#d20f39]'} size={32} />,
    },
    {
      name: 'Java',
      icon: <Coffee className={isDark ? 'text-[#fab387]' : 'text-[#fe640b]'} size={32} />,
    },
  ];

  return (
    <section id="stack" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span
            className={`border-b-2 pb-2 ${isDark ? 'border-[#74c7ec]' : 'border-[#04a5e5]'}`}
          >
            Technical Arsenal
          </span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className={`glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group transition-all duration-300 hover:-translate-y-2 ${
                isDark ? 'hover:bg-[#313244]/50' : 'hover:bg-[#bcc0cc]/40'
              }`}
            >
              <div className="group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                {tech.icon}
              </div>
              <span
                className={`text-sm ${isDark ? 'text-[#bac2de]' : 'text-[#6c6f85]'}`}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;



