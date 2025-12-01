const Footer = ({ isDark }) => {
  return (
    <footer
      className={`text-center py-8 text-sm glass-card border-t border-white/5 ${
        isDark ? 'text-[#6c7086]' : 'text-[#6c6f85]'
      }`}
    >
      <p>© 2024 Om Patole. Built with React & Tailwind.</p>
    </footer>
  );
};

export default Footer;



