# Hüzügüllü Cafe Bistro - Modern Web Sitesi 🎨☕

Modern, lüks ve responsive bir café web sitesi. React, Tailwind CSS ve Framer Motion ile geliştirilmiştir.

## 🌟 Özellikler

- ✅ **Modern Tasarım** - Siyah, Krem, Altın renk paleti
- ✅ **Dark/Light Mode** - Tema değişimi
- ✅ **Responsive Design** - Mobil uyumlu
- ✅ **Hero Slider** - Otomatik geçişli görseller
- ✅ **Sticky Header** - Şeffaflık efekti ile scroll
- ✅ **Smooth Animasyonlar** - Framer Motion & GSAP
- ✅ **Glassmorphism** - Modern tasarım detayları
- ✅ **Kategori Filtresi** - Menü filtresi
- ✅ **Parallax Efektleri** - Hakkımızda bölümü
- ✅ **Yaprak Animasyonları** - Tropikal bitki detayları

## 🚀 Başlangıç

### Gereksinimler
- Node.js (v14 veya üzeri)
- npm veya yarn

### Kurulum

```bash
# Repository'i klonlayın
git clone https://github.com/sinemtkrlk00/final-devim.git
cd final-devim

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm start
```

Tarayıcınızda `http://localhost:3000` adresinde açılacak!

## 📁 Proje Yapısı

```
final-devim/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js          # Sticky header, tema toggle
│   │   ├── Hero.js            # Hero bölümü, slider
│   │   ├── Menu.js            # Menü kartları, filtre
│   │   ├── About.js           # Hakkımızda, parallax
│   │   ├── Campaigns.js       # Kampanya kartları
│   │   ├── Contact.js         # İletişim, form, personel
│   │   ├── Footer.js          # Footer bölümü
│   │   └── TropicalLeaves.js  # Yaprak animasyonları
│   ├── App.js                 # Ana uygulama
│   ├── index.js               # Entry point
│   └── index.css              # Global stiller
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Renk Paleti

- **Siyah**: `#1a1a1a`
- **Krem**: `#f5e6d3`
- **Altın Sarısı**: `#d4af37`

## 🛠️ Teknoloji Stack

- **React 18** - UI Framework
- **Tailwind CSS 3** - Styling
- **Framer Motion** - Animasyonlar
- **GSAP** - Advanced animasyonlar
- **React Icons** - İkonlar
- **React Scroll** - Smooth scroll

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Dark mode otomatik olarak localStorage'de saklanır. Tema toggle yapılırken `dark` class'ı HTML'ye eklenir/çıkarılır.

## 📝 Bileşenler

### Header
- Sticky positioning
- Scroll ile şeffaflaşan efekt
- Tema toggle butonu
- Mobil menü

### Hero
- Otomatik slider
- Smooth fade geçişleri
- Slogan ve CTA butonları
- Slide göstergeleri

### Menu
- Kategori filtresi
- Ürün kartları
- Hover animasyonları
- Parlama efektleri

### About
- Parallax efektleri
- İstatistikler
- Responsive grid

### Campaigns
- Rengarenk kampanya kartları
- Badge'li indirim göstergesi
- Dekoratif elemanlar

### Contact
- Personel kartları (glassmorphism)
- İletişim formu
- Sosyal medya linkleri
- İletişim bilgileri

### Footer
- Footer menu
- Sosyal medya linkleri
- Çalışma saatleri
- Copyright bilgisi

## 🎯 Kullanılan Animasyonlar

- **Fade In**: Öğelerin sayfaya girmesi
- **Slide In**: Yanal kayma efektleri
- **Float**: Yumuşak yukarı-aşağı hareketi
- **Scale**: Hover'da büyütme/küçültme
- **Parallax**: Scroll ile arka plandaki hareketi
- **Glow**: Altın rengi halo efekti

## 📱 Mobil Uyumluluğu

- Tam responsive tasarım
- Dokunmatik uyumlu butonlar
- Mobil menüsü
- Optimize edilmiş font boyutları

## 🔧 Konfigürasyon

### Tailwind Tema Renkleri

`tailwind.config.js` dosyasından renkleri özelleştirebilirsiniz:

```javascript
colors: {
  cream: '#f5e6d3',
  gold: '#d4af37',
  black: '#1a1a1a',
}
```

## 🚀 Build İçin

```bash
npm run build
```

Production-ready build `build/` klasörüne oluşturulur.

## 📄 Lisans

MIT License - Serbestçe kullanabilirsiniz.

## 👨‍💻 Geliştirici

Hüzügüllü Cafe Bistro Web Sitesi - 2025

## 📧 İletişim

info@huezugullucafe.com

---

**Keyifli kodlamalar! ☕✨**
