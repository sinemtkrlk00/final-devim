import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Header = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Ana Sayfa', id: 'hero' },
    { name: 'Menü', id: 'menu' },
    { name: 'Hakkımızda', id: 'about' },
    { name: 'Kampanyalar', id: 'campaigns' },
    { name: 'İletişim', id: 'contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
          <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-lg">☕</span>
          </div>
          <span className="font-script text-2xl font-bold text-black dark:text-cream hidden sm:inline">
            Hüzügüllü
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              className="text-black dark:text-cream font-medium cursor-pointer hover:text-gold dark:hover:text-gold transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex gap-4 items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gold/10 hover:bg-gold/20 text-gold transition-colors"
          >
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gold/10 hover:bg-gold/20"
          >
            {isOpen ? (
              <FiX size={24} className="text-gold" />
            ) : (
              <FiMenu size={24} className="text-gold" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-black-light"
      >
        <nav className="flex flex-col gap-4 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-black dark:text-cream font-medium cursor-pointer hover:text-gold transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
