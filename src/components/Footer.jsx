const Footer = ({ isDark }) => {
  return (
    <footer
      className={`text-center py-8 pb-12 md:pb-8 w-full border-t transition-colors duration-300 ${
        isDark 
          ? 'text-[#6c7086] border-[#313244]/50 bg-[#1e1e2e]/50' 
          : 'text-[#7f5539] border-[#ddb892]/30 bg-[#f4ede4]/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm md:text-base font-medium">
          {/* FIXED: Changed newDg() to new Date() */}
          © {new Date().getFullYear()} Om Patole. 
          <span className="block md:inline md:ml-2 mt-1 md:mt-0 opacity-80">
            Built with React & Tailwind.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;