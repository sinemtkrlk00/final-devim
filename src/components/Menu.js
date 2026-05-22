import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'kahveler', 'tatlilar', 'sicak-icecekler', 'soguk-icecekler'];
  const categoryLabels = {
    all: 'Tümü',
    kahveler: 'Kahveler',
    tatlilar: 'Tatlılar',
    'sicak-icecekler': 'Sıcak İçecekler',
    'soguk-icecekler': 'Soğuk İçecekler',
  };

  const menuItems = [
    {
      id: 1,
      name: 'Espresso',
      category: 'kahveler',
      description: 'Yoğun ve aromalı İtalyan stili kahve',
      price: '₺35',
      image: '☕',
    },
    {
      id: 2,
      name: 'Cappuccino',
      category: 'kahveler',
      description: 'Espresso, süt ve köpük ile hazırlanmış',
      price: '₺45',
      image: '☕',
    },
    {
      id: 3,
      name: 'Latte',
      category: 'kahveler',
      description: 'Yumuşak ve kremlı kahve içeceği',
      price: '₺48',
      image: '☕',
    },
    {
      id: 4,
      name: 'Tiramisu',
      category: 'tatlilar',
      description: 'Klasik İtalyan tatlısı, maskarpon ve kakao ile',
      price: '₺75',
      image: '🍰',
    },
    {
      id: 5,
      name: 'Çikolata Keki',
      category: 'tatlilar',
      description: 'Islak çikolata keki, çilekli krem ile',
      price: '₺65',
      image: '🍰',
    },
    {
      id: 6,
      name: 'Sütlü Kahve',
      category: 'sicak-icecekler',
      description: 'Sıcak süt ile hazırlanmış rahatlatıcı kahve',
      price: '₺40',
      image: '☕',
    },
    {
      id: 7,
      name: 'Matcha Latte',
      category: 'sicak-icecekler',
      description: 'Yeşil çay tozu ile sağlıklı seçenek',
      price: '₺50',
      image: '🍵',
    },
    {
      id: 8,
      name: 'Buzlu Kahve',
      category: 'soguk-icecekler',
      description: 'Serinletici ve taze iced coffee',
      price: '₺42',
      image: '🧊',
    },
  ];

  const filtered =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <motion.section
      id="menu"
      className="py-20 px-4 bg-white dark:bg-black-light transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="font-script text-5xl md:text-6xl font-bold text-black dark:text-cream mb-4">Menümüz</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Lezzet ve kaliteyi bir arada sunuyoruz</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gold text-black shadow-gold'
                  : 'bg-gray-200 dark:bg-black text-black dark:text-cream hover:bg-gold hover:text-black'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {categoryLabels[category]}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              className="glass rounded-2xl p-6 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)' }}
            >
              {/* Image */}
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
                {item.image}
              </div>

              {/* Name */}
              <h3 className="font-script text-2xl font-bold text-black dark:text-cream mb-2">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>

              {/* Price */}
              <div className="flex justify-between items-center pt-4 border-t border-gold/20">
                <span className="text-gold font-bold text-lg">{item.price}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold text-black px-4 py-2 rounded-lg font-semibold hover:bg-gold-light transition-colors"
                >
                  Ekle
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Menu;
