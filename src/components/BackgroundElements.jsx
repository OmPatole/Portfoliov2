const BackgroundElements = ({ isDark }) => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none transition-opacity duration-700">
      <div
        className={`absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob ${
          isDark ? 'bg-[#89b4fa]' : 'bg-[#1e66f5]'
        }`}
      ></div>
      <div
        className={`absolute top-0 right-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000 ${
          isDark ? 'bg-[#cba6f7]' : 'bg-[#8839ef]'
        }`}
      ></div>
      <div
        className={`absolute -bottom-32 left-1/3 w-96 h-96 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-4000 ${
          isDark ? 'bg-[#74c7ec]' : 'bg-[#04a5e5]'
        }`}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[80px] opacity-25 animate-float mix-blend-screen bg-linear-to-r ${
          isDark ? 'from-[#f5c2e7] to-[#b4befe]' : 'from-[#ea76cb] to-[#7287fd]'
        }`}
      ></div>
    </div>
  );
};

export default BackgroundElements;



