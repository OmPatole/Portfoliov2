import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const DiscordIcon = ({ size = 24, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor" // Moves fill to SVG level for better CSS control
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.978 13.978 0 0 0-.574 1.181 18.293 18.293 0 0 0-5.56 0 14.28 14.28 0 0 0-.577-1.181.073.073 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-1.287c.126-.094.252-.192.373-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006 1.287 13.04 13.04 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.897 19.897 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
  </svg>
);

const Contact = ({ isDark }) => {
  const socialLinks = [
    { Icon: Github, label: 'GitHub', url: 'https://github.com/OmPatole' },
    { Icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/om-patole/' },
    { Icon: Twitter, label: 'Twitter', url: 'https://x.com/Om_patole3030' },
    { Icon: DiscordIcon, label: 'Discord (deadlytommy108)', url: 'https://discord.com/users/deadlytommy108' },
  ];

  return (
    <section id="contact" className="py-20 px-4 mb-20">
      <div className="max-w-3xl mx-auto glass-panel rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div
          className={`absolute -top-24 -right-24 w-48 h-48 rounded-full mix-blend-multiply filter blur-3xl opacity-20 ${
            isDark ? 'bg-[#89b4fa]' : 'bg-[#1e66f5]'
          }`}
        ></div>
        
        <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h2>
        <p
          className={`mb-6 max-w-lg mx-auto ${
            isDark ? 'text-[#bac2de]' : 'text-[#6c6f85]'
          }`}
        >
          Currently open for freelance opportunities and collaborations. Have a question or just want to say hi?
        </p>

        <div
          className={`mt-4 space-y-3 text-sm md:text-base ${
            isDark ? 'text-[#cdd6f4]' : 'text-[#4c4f69]'
          }`}
        >
          <div className="flex flex-col items-center gap-1 md:flex-row md:justify-center md:gap-3">
            <span className="inline-flex items-center gap-2">
              <Mail size={18} />
              <a
                href="mailto:ompatole@proton.me"
                className={isDark ? 'text-[#89b4fa] hover:underline' : 'text-[#1e66f5] hover:underline'}
              >
                ompatole@proton.me
              </a>
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 md:flex-row md:justify-center md:gap-3">
            <span className="inline-flex items-center gap-2">
              <Phone size={18} />
              <a
                href="tel:+919168267172"
                className={isDark ? 'text-[#89dceb] hover:underline' : 'text-[#04a5e5] hover:underline'}
              >
                +91 91682 67172
              </a>
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 md:flex-row md:justify-center md:gap-3">
            <span className="inline-flex items-center gap-2">
              <MapPin size={18} />
              <span>Kolhapur, Maharashtra, India</span>
            </span>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          {socialLinks.map(({ Icon, url, label }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors transform hover:scale-110 hover:rotate-6 ${
                isDark ? 'text-[#a6adc8] hover:text-[#cdd6f4]' : 'text-[#6c6f85] hover:text-[#4c4f69]'
              }`}
              aria-label={label}
            >
              <Icon size={28} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;