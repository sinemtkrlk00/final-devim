import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const staff = [
    {
      id: 1,
      name: 'Cem Yıldız',
      role: 'Barista Şefi',
      phone: '+90 530 123 4567',
      image: '👨‍💼',
      socials: ['instagram', 'twitter'],
    },
    {
      id: 2,
      name: 'Zeynep Kaya',
      role: 'Pastane Şefi',
      phone: '+90 530 234 5678',
      image: '👩‍🍳',
      socials: ['instagram', 'facebook'],
    },
    {
      id: 3,
      name: 'Ali Demir',
      role: 'Müdür',
      phone: '+90 530 345 6789',
      image: '👨‍💼',
      socials: ['instagram', 'twitter'],
    },
    {
      id: 4,
      name: 'Ayşe Şahin',
      role: 'Resepsiyonist',
      phone: '+90 530 456 7890',
      image: '👩‍💼',
      socials: ['instagram'],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const getSocialIcon = (social) => {
    switch (social) {
      case 'instagram':
        return <FiInstagram size={18} />;
      case 'twitter':
        return <FiTwitter size={18} />;
      case 'facebook':
        return <FiFacebook size={18} />;
      default:
        return null;
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 bg-cream dark:bg-black-light transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="font-script text-5xl md:text-6xl font-bold text-black dark:text-cream mb-4">
            İletişim
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Bize ulaşın ve bilebilecek tüm soruları sorun</p>
        </motion.div>

        {/* Staff Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black dark:text-cream mb-8 text-center">Ekibimiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((member, index) => (
              <motion.div
                key={member.id}
                className="glass rounded-2xl p-6 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)' }}
              >
                {/* Avatar */}
                <motion.div
                  className="text-7xl mb-4 inline-block group-hover:scale-110 transition-transform"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  {member.image}
                </motion.div>

                {/* Name */}
                <h4 className="font-script text-2xl font-bold text-black dark:text-cream mb-1">
                  {member.name}
                </h4>

                {/* Role */}
                <p className="text-gold font-semibold mb-3">{member.role}</p>

                {/* Phone */}
                <div className="flex items-center justify-center gap-2 mb-4 text-gray-600 dark:text-gray-400">
                  <FiPhone size={16} />
                  <span className="text-sm">{member.phone}</span>
                </div>

                {/* Socials */}
                <div className="flex justify-center gap-3">
                  {member.socials.map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="p-2 rounded-full bg-gold/10 hover:bg-gold hover:text-black text-gold transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {getSocialIcon(social)}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-cream mb-8">İletişim Bilgileri</h3>

            <div className="space-y-6">
              {[
                {
                  icon: FiMapPin,
                  title: 'Adres',
                  info: 'Cafe Sokak No:42, İstanbul, Türkiye',
                },
                {
                  icon: FiPhone,
                  title: 'Telefon',
                  info: '+90 212 123 4567',
                },
                {
                  icon: FiMail,
                  title: 'E-mail',
                  info: 'info@huezugullucafe.com',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-gold text-2xl">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="font-bold text-black dark:text-cream mb-1">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="mt-8 rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-gold/20 to-gold/5 dark:from-gold/10 dark:to-gold/5 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-center">
                <p className="text-gold font-semibold mb-2">📍 Google Maps</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Cafe Sokak No:42, İstanbul</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-cream mb-8">Bize Yazın</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <input
                  type="text"
                  placeholder="Adınız"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-3 rounded-lg bg-white dark:bg-black border border-gold/30 focus:border-gold outline-none transition-colors dark:text-cream"
                  required
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-3 rounded-lg bg-white dark:bg-black border border-gold/30 focus:border-gold outline-none transition-colors dark:text-cream"
                  required
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <textarea
                  placeholder="Mesajınız"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full px-6 py-3 rounded-lg bg-white dark:bg-black border border-gold/30 focus:border-gold outline-none transition-colors dark:text-cream resize-none"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Gönder
              </motion.button>

              {submitted && (
                <motion.p
                  className="text-center text-gold font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ✓ Mesajınız başarıyla gönderildi!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
