import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <motion.footer
      className="bg-black dark:bg-black text-cream py-16 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">☕</span>
              </div>
              <span className="font-script text-xl font-bold">Hüzügüllü Cafe</span>
            </div>
            <p className="text-gray-400 text-sm">Modern, lüks ve sıcak bir café deneyimi sunan bistro.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h4 className="font-bold text-gold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Ana Sayfa</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Menü</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">İletişim</a></li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h4 className="font-bold text-gold mb-4">Çalışma Saatleri</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Pazartesi - Cuma: 08:00 - 22:00</li>
              <li>Cumartesi: 09:00 - 23:00</li>
              <li>Pazar: 10:00 - 21:00</li>
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h4 className="font-bold text-gold mb-4">Sosyal Medya</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="p-3 rounded-full bg-gold/10 hover:bg-gold text-gold hover:text-black transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Hüzügüllü Cafe Bistro. Tüm hakları saklıdır.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-gold transition-colors">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
