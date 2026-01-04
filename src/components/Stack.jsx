import { 
  Terminal, Code2, Globe, Cpu, Database, Cloud, Github, 
  Coffee, FileCode, Box, Server, CloudLightning, Shield, 
  Key, Eye, Fingerprint, Layers, Layout, Server as ServerIcon 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Stack = ({ isDark }) => {
  const devStack = [
    { name: 'JavaScript', icon: <Code2 size={24} /> },
    { name: 'TypeScript', icon: <FileCode size={24} /> },
    { name: 'React', icon: <Globe size={24} /> },
    { name: 'Next.js', icon: <Layers size={24} /> },
    { name: 'Tailwind', icon: <Layout size={24} /> },
    { name: 'Node.js', icon: <Cpu size={24} /> },
    { name: 'Express', icon: <ServerIcon size={24} /> },
    { name: 'Python', icon: <Terminal size={24} /> },
    { name: 'Java', icon: <Coffee size={24} /> },
    { name: 'PostgreSQL', icon: <Database size={24} /> },
    { name: 'MongoDB', icon: <Database size={24} /> },
  ];

  const secStack = [
    { name: 'Network Sec', icon: <CloudLightning size={24} /> },
    { name: 'Linux/Kali', icon: <Terminal size={24} /> },
    { name: 'Cryptography', icon: <Key size={24} /> },
    { name: 'Auth Systems', icon: <Fingerprint size={24} /> },
    { name: 'Cloud Sec', icon: <Shield size={24} /> },
    { name: 'Monitoring', icon: <Eye size={24} /> },
  ];

  const Category = ({ title, items, delayOffset }) => (
    <div className="mb-12">
      <h3 className={`text-sm font-bold uppercase tracking-wider mb-6 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
        {title}
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((tech, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx * 0.03) + delayOffset }}
            className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
              isDark 
                ? 'bg-white/5 border-white/5 hover:border-white/20 text-gray-400 hover:text-white' 
                : 'bg-gray-50 border-black/5 hover:border-black/20 text-gray-600 hover:text-black'
            }`}
          >
            <div className="mb-2">{tech.icon}</div>
            <span className="text-xs font-medium text-center">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    // CHANGED: Added "md:min-h-screen" and "md:snap-start"
    <section id="stack" className="w-full py-24 md:py-0 md:min-h-screen md:snap-start flex flex-col justify-center px-6 md:px-20 lg:px-32">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
        <div className={`h-px w-20 ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`} />
      </div>

      <Category title="Development Core" items={devStack} delayOffset={0} />
      <Category title="Security & Infrastructure" items={secStack} delayOffset={0.2} />
    </section>
  );
};

export default Stack;