"use client";
import React from "react";
import {
  Wifi,
  Car,
  FlaskConical,
  Monitor,
  Wrench,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";

const Facilities = () => {
  const facilities = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Lab Komputer",
      description:
        "Laboratorium komputer dengan 40 unit PC modern dan akses internet high-speed",
      image:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Workshop Teknik",
      description:
        "Bengkel lengkap dengan peralatan modern untuk praktik teknik pemesinan",
      image:
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Bengkel Otomotif",
      description:
        "Fasilitas lengkap untuk praktik perbaikan dan maintenance kendaraan",
      image:
        "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Studio Multimedia",
      description:
        "Studio kreatif dengan software desain terkini dan peralatan produksi video",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: <FlaskConical className="h-8 w-8" />,
      title: "Laboratorium IPA",
      description:
        "Lab sains modern untuk mendukung pembelajaran mata pelajaran umum",
      image:
        "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Perpustakaan Digital",
      description:
        "Koleksi buku digital dan fisik dengan sistem katalog online",
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fasilitas Unggulan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fasilitas pembelajaran modern yang mendukung pengembangan kompetensi
            siswa di berbagai bidang keahlian.
          </p>
        </motion.div>

        {/* Grid facilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <div className="bg-white/20 p-2 rounded-lg mr-3">
                      {facility.icon}
                    </div>
                    <h3 className="text-xl font-bold">{facility.title}</h3>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra facilities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Fasilitas Penunjang Lainnya
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { count: "25", label: "Ruang Kelas" },
                { count: "3", label: "Lapangan Olahraga" },
                { count: "1", label: "Masjid" },
                { count: "2", label: "Kantin" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white p-4 rounded-xl shadow-sm mb-2">
                    <span className="text-2xl font-bold text-blue-600">
                      {item.count}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
