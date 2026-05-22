import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Hüzügüllü Cafe Bistro\'ya Hoş Geldiniz',
      subtitle: 'Lüks, sıcak ve estetik bir café deneyimi',
      image: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
    },
    {
      title: 'Premium Kahveler',
      subtitle: 'Dünya\'nın en iyi kahve çekirdekleri ile hazırlanmış',
      image: 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',
    },
    {
      title: 'Şef\'in Özel Tatlıları',
      subtitle: 'Her kahveye eşlik etmek için hazırlanmış lezzetli tatlılar',
      image: 'linear-gradient(135deg, #8b4513 0%, #654321 100%)',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      id="hero"
      className="pt-20 pb-10 relative h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Slider Background */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          style={{ background: slide.image }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <motion.h1
          key={`title-${currentSlide}`}
          className="font-script text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {slides[currentSlide].title}
        </motion.h1>

        <motion.p
          key={`subtitle-${currentSlide}`}
          className="text-xl md:text-2xl mb-8 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {slides[currentSlide].subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center justify-center gap-2"
          >
            Rezervasyon Yap <FiArrowRight />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Menüyü İncele
          </motion.button>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-gold' : 'w-3 bg-white/50'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Hero;
