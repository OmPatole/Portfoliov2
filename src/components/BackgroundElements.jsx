import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundElements = ({ isDark }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none transition-opacity duration-700">
      {/* Blob 1 */}
      <motion.div
        animate={{
          x: mousePosition.x * -50,
          y: mousePosition.y * -50,
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 100 }}
        className={`absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[128px] opacity-20 ${
          isDark ? 'bg-[#89b4fa]' : 'bg-[#6f4e37]'
        }`}
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: mousePosition.x * 30,
          y: mousePosition.y * 30,
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 100 }}
        className={`absolute top-0 right-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[128px] opacity-20 ${
          isDark ? 'bg-[#cba6f7]' : 'bg-[#a6662e]'
        }`}
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 80 }}
        className={`absolute -bottom-32 left-1/3 w-96 h-96 rounded-full mix-blend-screen filter blur-[128px] opacity-20 ${
          isDark ? 'bg-[#74c7ec]' : 'bg-[#ddb892]'
        }`}
      />
    </div>
  );
};

export default BackgroundElements;