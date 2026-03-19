export interface Package {
  id: string;
  category: 'tirta-yatra' | 'penida-trip' | 'mix-trip';
  name: { id: string; en: string };
  price: string;
  pax: string;
  destinations: string[]; // These are mostly proper names, but some might need translation
  image: string;
  featured: boolean;
  description: { id: string; en: string };
  includes: { id: string[]; en: string[] };
  excludes: { id: string[]; en: string[] };
  facilities: { id: string[]; en: string[] };
}

export const packages: Package[] = [
  // TIRTA YATRA
  {
    id: 'paket-a',
    category: 'tirta-yatra',
    name: { id: 'Paket A', en: 'Package A' },
    price: 'Rp2.000.000',
    pax: '5 pax',
    destinations: [
      'Pura Goa Giri Putri',
      'Pura Muncak Mundi',
      'Pura Penataran Dalem Ped'
    ],
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    featured: false,
    description: {
      id: 'Nikmati perjalanan spiritual ke pura-pura suci di Nusa Penida. Paket A mencakup kunjungan ke Pura Goa Giri Putri yang ikonik, Pura Muncak Mundi dengan pemandangan menakjubkan, dan Pura Penataran Dalem Ped yang bersejarah.',
      en: 'Enjoy a spiritual journey to the sacred temples in Nusa Penida. Package A includes visits to the iconic Pura Goa Giri Putri, Pura Muncak Mundi with stunning views, and the historic Pura Penataran Dalem Ped.'
    },
    includes: {
      id: ['Tiket Fastboat PP (Sanur-Penida)', 'Transportasi (Mobil + Driver + BBM)', 'Makan Siang (Lunch Box)', 'Tiket Masuk Pura', 'Parkir & Retribusi'],
      en: ['Round-trip Fastboat Tickets (Sanur-Penida)', 'Transportation (Car + Driver + Fuel)', 'Lunch (Lunch Box)', 'Temple Entry Tickets', 'Parking & Retribution']
    },
    excludes: {
      id: ['Sarana Persembahyangan (Pejati)', 'Belanja Pribadi', 'Tip Driver'],
      en: ['Prayer Offerings (Pejati)', 'Personal Expenses', 'Driver Tip']
    },
    facilities: {
      id: ['Mobil Ber-AC', 'Driver sebagai Guide', 'Air Mineral', 'Asuransi Perjalanan'],
      en: ['Air-Conditioned Car', 'Driver as Guide', 'Mineral Water', 'Travel Insurance']
    }
  },
  {
    id: 'paket-b',
    category: 'tirta-yatra',
    name: { id: 'Paket B', en: 'Package B' },
    price: 'Rp2.500.000',
    pax: '5 pax',
    destinations: [
      'Pura Goa Giri Putri',
      'Pura Muncak Mundi',
      'Pura Mobil',
      'Pura Penataran Dalem Ped'
    ],
    image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    featured: true,
    description: {
      id: 'Paket Tirta Yatra paling populer kami. Selain mengunjungi Pura Goa Giri Putri, Pura Muncak Mundi, dan Pura Penataran Dalem Ped, Anda juga akan diajak ke Pura Mobil yang unik dan penuh makna spiritual.',
      en: 'Our most popular Tirta Yatra package. In addition to visiting Pura Goa Giri Putri, Pura Muncak Mundi, and Pura Penataran Dalem Ped, you will also be taken to the unique Pura Mobil, full of spiritual significance.'
    },
    includes: {
      id: ['Tiket Fastboat PP (Sanur-Penida)', 'Transportasi (Mobil + Driver + BBM)', 'Makan Siang (Lunch Box)', 'Tiket Masuk Pura', 'Parkir & Retribusi'],
      en: ['Round-trip Fastboat Tickets (Sanur-Penida)', 'Transportation (Car + Driver + Fuel)', 'Lunch (Lunch Box)', 'Temple Entry Tickets', 'Parking & Retribution']
    },
    excludes: {
      id: ['Sarana Persembahyangan (Pejati)', 'Belanja Pribadi', 'Tip Driver'],
      en: ['Prayer Offerings (Pejati)', 'Personal Expenses', 'Driver Tip']
    },
    facilities: {
      id: ['Mobil Ber-AC', 'Driver sebagai Guide', 'Air Mineral', 'Asuransi Perjalanan'],
      en: ['Air-Conditioned Car', 'Driver as Guide', 'Mineral Water', 'Travel Insurance']
    }
  },
  {
    id: 'paket-c',
    category: 'tirta-yatra',
    name: { id: 'Paket C', en: 'Package C' },
    price: 'Rp3.000.000',
    pax: '5 pax',
    destinations: [
      'Pura Goa Giri Putri',
      'Pura Ratu Kidul',
      'Pura Penataran Dalem Ped'
    ],
    image: 'https://images.unsplash.com/photo-1588880628359-25f0ad0869a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    featured: false,
    description: {
      id: 'Perjalanan yatra mendalam yang menyentuh jiwa. Mengunjungi Pura Goa Giri Putri yang sakral, Pura Ratu Kidul di pinggir pantai yang tenang, dan Pura Penataran Dalem Ped sebagai pusat spiritual di Nusa Penida.',
      en: 'A profound yatra journey that touches the soul. Visiting the sacred Pura Goa Giri Putri, the serene beachfront Pura Ratu Kidul, and Pura Penataran Dalem Ped as the spiritual center of Nusa Penida.'
    },
    includes: {
      id: ['Tiket Fastboat PP (Sanur-Penida)', 'Transportasi (Mobil + Driver + BBM)', 'Makan Siang (Lunch Box)', 'Tiket Masuk Pura', 'Parkir & Retribusi'],
      en: ['Round-trip Fastboat Tickets (Sanur-Penida)', 'Transportation (Car + Driver + Fuel)', 'Lunch (Lunch Box)', 'Temple Entry Tickets', 'Parking & Retribution']
    },
    excludes: {
      id: ['Sarana Persembahyangan (Pejati)', 'Belanja Pribadi', 'Tip Driver'],
      en: ['Prayer Offerings (Pejati)', 'Personal Expenses', 'Driver Tip']
    },
    facilities: {
      id: ['Mobil Ber-AC', 'Driver sebagai Guide', 'Air Mineral', 'Asuransi Perjalanan'],
      en: ['Air-Conditioned Car', 'Driver as Guide', 'Mineral Water', 'Travel Insurance']
    }
  },
  {
    id: 'paket-custom',
    category: 'tirta-yatra',
    name: { id: 'Paket Custom', en: 'Custom Package' },
    price: 'Flexible',
    pax: 'Custom',
    destinations: [
      'Pilih pura sesuai keinginan dan kebutuhan yatra Anda.'
    ],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    featured: false,
    description: {
      id: 'Sesuaikan perjalanan spiritual Anda sepenuhnya. Anda dapat memilih pura yang ingin dikunjungi sesuai dengan niat dan waktu Anda. Tim kami akan membantu mengaturkan jadwal terbaik.',
      en: 'Fully customize your spiritual journey. You can choose the temples you wish to visit according to your intentions and schedule. Our team will help arrange the best itinerary.'
    },
    includes: {
      id: ['Tiket Fastboat PP (Sanur-Penida)', 'Transportasi (Mobil + Driver + BBM)', 'Tiket Masuk Pura', 'Parkir & Retribusi'],
      en: ['Round-trip Fastboat Tickets (Sanur-Penida)', 'Transportation (Car + Driver + Fuel)', 'Temple Entry Tickets', 'Parking & Retribution']
    },
    excludes: {
      id: ['Makan Siang', 'Sarana Persembahyangan (Pejati)', 'Belanja Pribadi', 'Tip Driver'],
      en: ['Lunch', 'Prayer Offerings (Pejati)', 'Personal Expenses', 'Driver Tip']
    },
    facilities: {
      id: ['Mobil Ber-AC', 'Driver sebagai Guide', 'Air Mineral', 'Asuransi Perjalanan'],
      en: ['Air-Conditioned Car', 'Driver as Guide', 'Mineral Water', 'Travel Insurance']
    }
  },
  // PENIDA TRIP
  {
    id: 'west-penida',
    category: 'penida-trip',
    name: { id: 'West Penida Trip', en: 'West Penida Trip' },
    price: 'Rp1.500.000',
    pax: '5 pax',
    destinations: [
      'Kelingking Beach',
      'Broken Beach',
      'Angel\'s Billabong',
      'Crystal Bay'
    ],
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    featured: false,
    description: {
      id: 'Jelajahi keindahan sisi barat Nusa Penida yang menakjubkan. Dari tebing Kelingking yang ikonik hingga kolam alami Angel\'s Billabong dan pasir putih Crystal Bay.',
      en: 'Explore the stunning beauty of Nusa Penida\'s west side. From the iconic Kelingking cliff to the natural pool of Angel\'s Billabong and the white sands of Crystal Bay.'
    },
    includes: {
      id: ['Tiket Fastboat PP (Sanur-Penida)', 'Transportasi (Mobil + Driver + BBM)', 'Makan Siang di Restoran', 'Tiket Masuk Wisata', 'Parkir & Retribusi'],
      en: ['Round-trip Fastboat Tickets (Sanur-Penida)', 'Transportation (Car + Driver + Fuel)', 'Restaurant Lunch', 'Tourist Site Entry Tickets', 'Parking & Retribution']
    },
    excludes: {
      id: ['Belanja Pribadi', 'Tip Driver', 'Aktivitas Snorkeling'],
      en: ['Personal Expenses', 'Driver Tip', 'Snorkeling Activities']
    },
    facilities: {
      id: ['Mobil Ber-AC', 'Driver sebagai Fotografer', 'Air Mineral', 'Asuransi Perjalanan'],
      en: ['Air-Conditioned Car', 'Driver as Photographer', 'Mineral Water', 'Travel Insurance']
    }
  },
  {
    id: 'east-penida',
    category: 'penida-trip',
    name: { id: 'East Penida Trip', en: 'East Penida Trip' },
    price: 'Rp1.600.000',
    pax: '5 pax',
    destinations: [
      'Diamond Beach',
      'Atuh Beach',
      'Tree House (Molenteng)',
      'Teletubbies Hill'
    ],
    image: 'https://images.unsplash.com/photo-1621685122971-70068a865b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    featured: false,
    description: {
      id: 'Sisi timur Nusa Penida menawarkan pemandangan pantai yang luar biasa. Kunjungi Diamond Beach yang jernih, Rumah Pohon yang fotogenik, dan perbukitan Teletubbies yang hijau.',
      en: 'The east side of Nusa Penida offers incredible beach views. Visit the clear Diamond Beach, the photogenic Tree House, and the green Teletubbies hills.'
    },
    includes: {
      id: ['Tiket Fastboat PP (Sanur-Penida)', 'Transportasi (Mobil + Driver + BBM)', 'Makan Siang di Restoran', 'Tiket Masuk Wisata', 'Parkir & Retribusi'],
      en: ['Round-trip Fastboat Tickets (Sanur-Penida)', 'Transportation (Car + Driver + Fuel)', 'Restaurant Lunch', 'Tourist Site Entry Tickets', 'Parking & Retribution']
    },
    excludes: {
      id: ['Belanja Pribadi', 'Tip Driver', 'Akses Diamond Beach (Opsional)'],
      en: ['Personal Expenses', 'Driver Tip', 'Diamond Beach Access (Optional)']
    },
    facilities: {
      id: ['Mobil Ber-AC', 'Driver sebagai Fotografer', 'Air Mineral', 'Asuransi Perjalanan'],
      en: ['Air-Conditioned Car', 'Driver as Photographer', 'Mineral Water', 'Travel Insurance']
    }
  },
  // MIX TRIP
  {
    id: 'mix-1',
    category: 'mix-trip',
    name: { id: 'Spiritual & Nature', en: 'Spiritual & Nature' },
    price: 'Rp2.800.000',
    pax: '5 pax',
    destinations: [
      'Pura Goa Giri Putri',
      'Diamond Beach',
      'Atuh Beach',
      'Pura Penataran Dalem Ped'
    ],
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    featured: false,
    description: {
      id: 'Paket kombinasi sempurna antara perjalanan spiritual dan wisata alam. Nikmati ketenangan pura dan keindahan pantai dalam satu hari perjalanan yang tak terlupakan.',
      en: 'The perfect combination package of spiritual journey and nature tourism. Enjoy the serenity of the temples and the beauty of the beaches in one unforgettable day trip.'
    },
    includes: {
      id: ['Tiket Fastboat PP (Sanur-Penida)', 'Transportasi (Mobil + Driver + BBM)', 'Makan Siang di Restoran', 'Tiket Masuk Wisata & Pura', 'Parkir & Retribusi'],
      en: ['Round-trip Fastboat Tickets (Sanur-Penida)', 'Transportation (Car + Driver + Fuel)', 'Restaurant Lunch', 'Tourist & Temple Entry Tickets', 'Parking & Retribution']
    },
    excludes: {
      id: ['Sarana Persembahyangan', 'Belanja Pribadi', 'Tip Driver'],
      en: ['Prayer Offerings', 'Personal Expenses', 'Driver Tip']
    },
    facilities: {
      id: ['Mobil Ber-AC', 'Driver sebagai Guide/Fotografer', 'Air Mineral', 'Asuransi Perjalanan'],
      en: ['Air-Conditioned Car', 'Driver as Guide/Photographer', 'Mineral Water', 'Travel Insurance']
    }
  }
];
