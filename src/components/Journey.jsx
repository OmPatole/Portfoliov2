import { Network, GraduationCap, School } from 'lucide-react';
import { motion } from 'framer-motion';

const Journey = ({ isDark }) => {
  const journeyItems = [
    {
      icon: (
        <Network size={18} className={isDark ? 'text-[#89b4fa]' : 'text-[#1e66f5]'} />
      ),
      title: "Intern",
      date: "Current",
      org: "Shivaji University Networking Department",
      desc: "Gaining hands-on experience in network infrastructure, troubleshooting, and system administration.",
      colorClass: isDark
        ? 'hover:border-[#89b4fa]/30 group-hover:border-[#89b4fa]'
        : 'hover:border-[#1e66f5]/30 group-hover:border-[#1e66f5]',
      titleColor: isDark ? 'text-[#89b4fa]' : 'text-[#1e66f5]',
      orgColor: isDark ? 'text-[#b4befe]' : 'text-[#7287fd]',
    },
    {
      icon: (
        <GraduationCap
          size={18}
          className={isDark ? 'text-[#cba6f7]' : 'text-[#8839ef]'}
        />
      ),
      title: "Bachelor of Engineering",
      date: "2022 - 2026",
      org: "School of Engineering & Technology, Shivaji University",
      desc: "Pursuing degree with focus on Computer Science fundamentals and advanced engineering concepts.",
      colorClass: isDark
        ? 'hover:border-[#cba6f7]/30 group-hover:border-[#cba6f7]'
        : 'hover:border-[#8839ef]/30 group-hover:border-[#8839ef]',
      titleColor: isDark ? 'text-[#cba6f7]' : 'text-[#8839ef]',
      orgColor: isDark ? 'text-[#f5c2e7]' : 'text-[#ea76cb]',
    },
    {
      icon: (
        <School size={18} className={isDark ? 'text-[#a6e3a1]' : 'text-[#40a02b]'} />
      ),
      title: "HSC (12th Grade)",
      date: "2020 - 2022",
      org: "B.M. Rote College, Kolhapur",
      desc: "Completed Higher Secondary education with focus on Science and Mathematics.",
      colorClass: isDark
        ? 'hover:border-[#a6e3a1]/30 group-hover:border-[#a6e3a1]'
        : 'hover:border-[#40a02b]/30 group-hover:border-[#40a02b]',
      titleColor: isDark ? 'text-[#a6e3a1]' : 'text-[#40a02b]',
      orgColor: isDark ? 'text-[#94e2d5]' : 'text-[#179299]',
    },
    {
      icon: (
        <School size={18} className={isDark ? 'text-[#f9e2af]' : 'text-[#df8e1d]'} />
      ),
      title: "SSC (10th Grade)",
      date: "Completed",
      org: "New Model English School, Kolhapur",
      desc: "Foundation building in secondary education.",
      colorClass: isDark
        ? 'hover:border-[#f9e2af]/30 group-hover:border-[#f9e2af]'
        : 'hover:border-[#df8e1d]/30 group-hover:border-[#df8e1d]',
      titleColor: isDark ? 'text-[#f9e2af]' : 'text-[#df8e1d]',
      orgColor: isDark ? 'text-[#fab387]' : 'text-[#fe640b]',
    }
  ];

  return (
    <section id="journey" className="py-20 px-4 pb-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-24 text-center">
          <span
            className={`border-b-2 pb-2 ${isDark ? 'border-[#89b4fa]' : 'border-[#1e66f5]'}`}
          >
            My Journey
          </span>
        </h2>
        
        <div className="relative">
          {/* Animated Line - Extended top and bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={`absolute left-5 md:left-1/2 -translate-x-px md:-translate-x-1/2 h-[135%] -top-[10%] w-0.5 bg-linear-to-b from-transparent via-10% to-transparent ${
              isDark ? 'via-[#585b70]' : 'via-[#acb0be]'
            }`}
          />

          <div className="space-y-8 relative">
            {journeyItems.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border bg-slate-900 glass-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 transition-transform duration-300 ${isDark ? 'border-white/20' : 'border-slate-300'} ${item.colorClass}`}>
                  {item.icon}
                </div>
                <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 ${isDark ? 'hover:bg-white/5' : 'hover:bg-white/40'} ${item.colorClass}`}>
                  <div className="flex justify-between items-center mb-1">
                    <h3 className={`font-bold text-lg ${item.titleColor}`}>{item.title}</h3>
                    <time className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.date}</time>
                  </div>
                  <div className={`text-sm mb-2 ${item.orgColor}`}>{item.org}</div>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;