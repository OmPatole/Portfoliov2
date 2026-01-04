import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const XIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const LeetCodeIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const Contact = ({ isDark }) => {
  const socialLinks = [
    { 
        name: 'LinkedIn', 
        url: 'https://www.linkedin.com/in/om-patole/',
        icon: <Linkedin size={24} />,
        hoverClass: 'hover:text-[#0077B5] hover:border-[#0077B5]/30'
    },
    { 
        name: 'GitHub', 
        url: 'https://github.com/OmPatole',
        icon: <Github size={24} />,
        hoverClass: isDark ? 'hover:text-[#bc8cff] hover:border-[#bc8cff]/30' : 'hover:text-black hover:border-black/30'
    },
    {
        name: 'LeetCode',
        url: 'https://leetcode.com/u/Om_Patole/',
        icon: <LeetCodeIcon size={24} />,
        hoverClass: 'hover:text-[#FFA116] hover:border-[#FFA116]/30'
    },
    { 
        name: 'X (Twitter)', 
        url: 'https://x.com/Om_patole3030',
        icon: <XIcon size={22} />,
        hoverClass: isDark ? 'hover:text-white hover:border-white/30' : 'hover:text-black hover:border-black/30'
    },
  ];

  return (
    // CHANGED: Added "md:min-h-screen" and "md:snap-start"
    <section id="contact" className="w-full py-24 md:py-0 md:min-h-screen md:snap-start flex flex-col justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`w-full max-w-4xl py-20 px-8 rounded-2xl border transition-colors duration-300 text-center ${
            isDark ? 'bg-[#121212] border-white/5' : 'bg-gray-50 border-black/5'
        }`}
      >
        <h2 className="text-4xl font-bold mb-6">Ready to collaborate?</h2>
        <p className={`text-lg mb-10 max-w-xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Open for development and security opportunities.
        </p>
        
        <a 
          href="mailto:ompatole@proton.me"
          className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 mb-12 ${
            isDark ? 'bg-white text-black' : 'bg-black text-white'
          }`}
        >
          <Mail size={20} />
          ompatole@proton.me
        </a>

        <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social) => (
                <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex items-center gap-3 px-6 py-4 rounded-xl border border-transparent transition-all duration-300 ${
                        isDark ? 'bg-white/5 hover:bg-white/10 text-gray-300' : 'bg-white hover:bg-gray-100 text-gray-700 shadow-sm'
                    } ${social.hoverClass}`}
                >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                    </span>
                    <span className="font-medium text-base">{social.name}</span>
                </a>
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;