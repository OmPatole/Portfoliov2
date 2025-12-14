import React from 'react';

const LoadingScreen = ({ isDark, loadingProgress }) => {
  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center font-mono transition-colors duration-500 ${
        isDark ? 'bg-[#1e1e2e]' : 'bg-[#fdfbf7]'
      }`}
    >
      <div className="relative flex items-center justify-center scale-150">
        <div className="relative w-16 h-16 z-20">
          {/* Top Half of Pac-Man */}
          <div
            className="absolute top-0 left-0 w-full h-1/2 rounded-t-full animate-[chompTop_0.3s_infinite_alternate_linear] origin-bottom bg-[#FDB813]"
          ></div>
          {/* Bottom Half of Pac-Man */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-full animate-[chompBottom_0.3s_infinite_alternate_linear] origin-top bg-[#FDB813]"
          ></div>
        </div>
        
        {/* Dots / Food */}
        <div className="absolute left-8 w-48 h-4 overflow-hidden flex items-center z-10">
          <div
            className={`flex gap-6 animate-[feed_0.4s_linear_infinite] ${
              isDark ? 'text-[#89b4fa]' : 'text-[#1e66f5]'
            }`}
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-current shrink-0"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Loading Text */}
      <div
        className={`mt-16 font-bold tracking-widest uppercase animate-pulse flex flex-col items-center gap-2 ${
          isDark ? 'text-[#cba6f7]' : 'text-[#8839ef]'
        }`}
      >
        <span>{loadingProgress < 100 ? 'Eating Bits...' : 'Level Complete!'}</span>
        <span className="text-xs opacity-70">{Math.round(loadingProgress)}%</span>
      </div>

      <style>{`
        @keyframes chompTop {
          0% { transform: rotate(-5deg); }
          100% { transform: rotate(-45deg); }
        }
        @keyframes chompBottom {
          0% { transform: rotate(5deg); }
          100% { transform: rotate(45deg); }
        }
        @keyframes feed {
          0% { transform: translateX(0); }
          100% { transform: translateX(-36px); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;