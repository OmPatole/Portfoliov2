const Footer = ({ isDark }) => {
  return (
    <footer className={`py-8 text-center text-sm ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
      <p>© {new Date().getFullYear()} Om Patole. Crafted with React.</p>
    </footer>
  );
};

export default Footer;