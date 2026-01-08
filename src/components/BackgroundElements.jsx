import React, { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';

const BackgroundElements = ({ isDark }) => {
  // 1. Base Dot Color (Faint)
  const baseDotColor = isDark
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.1)';

  // 2. Glow Dot Color (High Intensity)
  const glowDotColor = isDark
    ? '#38bdf8' // Solid Sky Blue
    : '#000000'; // Solid Black

  // Motion values for Spotlight 1
  const x1 = useMotionValue(0);
  const y1 = useMotionValue(0);

  // Motion values for Spotlight 2
  const x2 = useMotionValue(0);
  const y2 = useMotionValue(0);

  useEffect(() => {
    // --- Animation for Spotlight 1 ---
    const moveX1 = animate(x1, [0, window.innerWidth, window.innerWidth * 0.5, 0], {
      duration: 25,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    });
    const moveY1 = animate(y1, [0, window.innerHeight, window.innerHeight * 0.3, 0], {
      duration: 30,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    });

    // --- Animation for Spotlight 2 ---
    const moveX2 = animate(x2, [window.innerWidth, 0, window.innerWidth * 0.8, window.innerWidth], {
      duration: 35,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    });
    const moveY2 = animate(y2, [window.innerHeight * 0.5, 0, window.innerHeight, window.innerHeight * 0.5], {
      duration: 28, 
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    });

    return () => {
      moveX1.stop(); moveY1.stop();
      moveX2.stop(); moveY2.stop();
    };
  }, [x1, y1, x2, y2]);

  const maskImage = useMotionTemplate`
    radial-gradient(350px circle at ${x1}px ${y1}px, white, transparent),
    radial-gradient(350px circle at ${x2}px ${y2}px, white, transparent)
  `;

  return (
    <div 
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none" 
      aria-hidden="true"
    >
      {/* LAYER 1: Base Pattern */}
      <div 
        className="absolute inset-0 bg-dot-pattern"
        style={{
          '--dot-color': baseDotColor
        }}
      />

      {/* LAYER 2: Glow Pattern */}
      <motion.div 
        className="absolute inset-0 bg-dot-pattern"
        style={{
          '--dot-color': glowDotColor,
          maskImage: maskImage,
          WebkitMaskImage: maskImage,
          filter: isDark ? 'drop-shadow(0 0 2px rgba(56, 189, 248, 0.6))' : 'none',
        }}
      />
    </div>
  );
};

export default BackgroundElements;