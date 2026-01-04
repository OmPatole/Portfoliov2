import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ isDark }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-500 ${
        isDark ? 'bg-[#0a0a0a]' : 'bg-[#fafafa]'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className={`text-2xl font-bold tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
          &lt;OP /&gt;
        </div>
        <div className={`h-1 w-12 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
            <motion.div 
                className={`h-full w-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;