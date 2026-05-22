import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Campaigns from './components/Campaigns';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TropicalLeaves from './components/TropicalLeaves';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-b from-cream to-white dark:from-black dark:to-black-light transition-colors duration-300">
        <TropicalLeaves />
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Menu />
          <About />
          <Campaigns />
          <Contact />
        </main>
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
