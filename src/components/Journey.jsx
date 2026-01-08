import { motion } from 'framer-motion';

const Journey = ({ isDark }) => {
  const items = [
    {
      year: "Current",
      role: "Network Security Intern",
      org: "Shivaji University Networking Dept.",
      desc: "Managing network infrastructure, firewall rules, and security monitoring."
    },
    {
      year: "2022 - Pursuing",
      role: "Bachelor of Engineering",
      org: "Shivaji University",
      desc: "Computer Science & Engineering. Focus on Distributed Systems."
    },
    {
      year: "2020 - 2022",
      role: "Higher Secondary (HSC)",
      org: "B.M. Rote College",
      desc: "Science & Mathematics focus."
    },
    {
      year: "2020",
      role: "Secondary School (SSC)",
      org: "New Model English School, Kolhapur",
      desc: "Completed secondary education."
    }
  ];

  return (
    // CHANGED: Added "md:min-h-screen" and "md:snap-start"
    <section id="journey" className="w-full py-24 md:py-0 md:min-h-screen md:snap-start flex flex-col justify-center px-6 md:px-20 lg:px-32">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
        <div className={`h-px w-20 ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`} />
      </div>

      <div className="relative space-y-24 pl-6 md:pl-0">
        <div 
            className={`absolute left-1.5 md:left-34 top-2 bottom-2 w-px ${
                isDark ? 'bg-white/10' : 'bg-black/10'
            }`} 
        />

        {items.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative flex flex-col md:flex-row md:items-start gap-2 md:gap-8"
          >
            <span className={`absolute -left-[1.35rem] md:left-[8.2rem] top-1.5 h-3 w-3 rounded-full border-2 z-10 ${
                  isDark 
                  ? 'bg-[#0a0a0a] border-blue-500' 
                  : 'bg-[#fafafa] border-blue-600'
            }`} />

            <div className={`w-32 shrink-0 text-sm font-mono pt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {item.year}
            </div>
            <div className="">
                <h3 className="text-lg font-bold">{item.role}</h3>
                <div className={`text-sm font-medium mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{item.org}</div>
                <p className={`text-base max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.desc}
                </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;