import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiPercent } from 'react-icons/fi';

const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: 'Pazartesi Kahve Günü',
      description: 'Her pazartesi tüm kahveler %20 indirim',
      discount: '%20',
      date: 'Her Pazartesi',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Öğleden Sonra Keyfi',
      description: 'Saat 14:00-17:00 arası 2. kahve %50 indirim',
      discount: '%50',
      date: 'Her Gün',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      title: 'Hafta Sonu Tatlı İkramı',
      description: 'Cumartesi ve pazar günleri tatlılar %15 indirim',
      discount: '%15',
      date: 'Cum-Paz',
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 4,
      title: 'Grup Rezervasyonu',
      description: '10+ kişi için özel fiyatlandırma ve hediyeler',
      discount: 'Özel',
      date: 'Her Zaman',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <motion.section
      id="campaigns"
      className="py-20 px-4 bg-white dark:bg-black-light transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="font-script text-5xl md:text-6xl font-bold text-black dark:text-cream mb-4">
            Kampanyalar
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Özel indirim ve fırsatlar</p>
        </motion.div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              className={`relative rounded-2xl p-8 text-white overflow-hidden cursor-pointer group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${campaign.color} opacity-90`}
              ></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Discount Badge */}
                <motion.div
                  className="inline-block bg-gold text-black font-bold rounded-full px-6 py-2 mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <FiPercent className="inline mr-2" />
                  {campaign.discount}
                </motion.div>

                {/* Title */}
                <h3 className="font-script text-2xl font-bold mb-3">{campaign.title}</h3>

                {/* Description */}
                <p className="text-white/90 mb-6 text-sm leading-relaxed">{campaign.description}</p>

                {/* Date */}
                <div className="flex items-center gap-2 text-white/80">
                  <FiCalendar size={16} />
                  <span className="text-sm">{campaign.date}</span>
                </div>
              </div>

              {/* Decorative Element */}
              <motion.div
                className="absolute -bottom-10 -right-10 text-6xl opacity-10 group-hover:opacity-20 transition-opacity"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                ☕
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Campaigns;
