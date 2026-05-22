import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="py-20 px-4 bg-cream dark:bg-black-light transition-colors duration-300 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-10 right-10 text-9xl opacity-10 dark:opacity-5"
        style={{ y }}
      >
        🍃
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 text-8xl opacity-10 dark:opacity-5"
        style={{ y }}
      >
        🌿
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-script text-5xl md:text-6xl font-bold text-black dark:text-cream mb-6">
              Hakkımızda
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Hüzügüllü Cafe Bistro, 2015 yılından beri şehrin en sevilen mekanlarından biri. Passionu ve sanatı kahveye döküp, her fincanı özel bir deneyim haline getiriyoruz.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              En iyi kahve çekirdekleri, yetişmiş barista'larımız ve sıcak atmosferimizle, size yalnızca bir içecek değil, anı yaşatırız.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: '10+', label: 'Yıl Tecrübe' },
                { number: '5000+', label: 'Mutlu Müşteri' },
                { number: '50+', label: 'Menü Ürünü' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <p className="text-gold text-3xl font-bold">{stat.number}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image/Visual */}
          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold-light opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-black to-black-light opacity-60"></div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-9xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              ☕
            </motion.div>
            <div className="absolute inset-0 border-4 border-gold/30 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
