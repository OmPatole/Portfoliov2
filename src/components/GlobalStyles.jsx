const GlobalStyles = ({ isDark }) => {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@300;500;700&display=swap');
      
      body { font-family: 'JetBrains Mono', monospace; }
      
      .glass-panel {
        background: var(--glass-panel-bg);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid var(--glass-border);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      }
      
      .glass-card {
        background: var(--glass-card-bg);
        backdrop-filter: blur(10px);
        border: 1px solid var(--glass-border);
        transition: all 0.3s ease;
      }
      
      .glass-card:hover {
        background: var(--glass-card-hover-bg);
        border-color: var(--glass-border-hover);
        transform: translateY(-5px);
        box-shadow: 0 10px 40px -10px rgba(0,0,0,0.15);
      }

      /* Mask Gradient for Marquee */
      .mask-gradient {
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      }

      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }

      @keyframes float-ball {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(20px, -20px); }
      }

      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      @keyframes fade-in-down {
        0% { opacity: 0; transform: translateY(-20px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      @keyframes slide-in-right {
        0% { opacity: 0; transform: translateX(-20px); }
        100% { opacity: 1; transform: translateX(0); }
      }

      /* Marquee Animations */
      @keyframes scroll-left {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      @keyframes scroll-right {
        from { transform: translateX(-50%); }
        to { transform: translateX(0); }
      }
      
      .animate-blob { animation: blob 7s infinite; }
      .animate-float { animation: float-ball 6s ease-in-out infinite; }
      .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      .animate-fade-in-down { animation: fade-in-down 0.5s ease-out forwards; }
      .animate-slide-in { animation: slide-in-right 0.8s ease-out forwards; }
      
      .animate-scroll-left {
        animation: scroll-left 40s linear infinite;
      }
      
      .animate-scroll-right {
        animation: scroll-right 40s linear infinite;
      }

      .hover-pause:hover .animate-scroll-left,
      .hover-pause:hover .animate-scroll-right {
        animation-play-state: paused;
      }
      
      .delay-100 { animation-delay: 100ms; }
      .delay-200 { animation-delay: 200ms; }
      .delay-300 { animation-delay: 300ms; }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }

      section { opacity: 0; transform: translateY(20px); transition: all 1s ease-out; }
      section.animate-on-scroll { opacity: 1; transform: translateY(0); }
    `}</style>
  );
};

export default GlobalStyles;