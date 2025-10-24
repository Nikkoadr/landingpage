"use client";
import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const News = () => {
  const news = [
    {
      title: "Prestasi Ekstrakurikuler Paskibraka",
      excerpt:
        "Siswa SMK Muhammadiyah Kandanghaur meraih prestasi gemilang dalam ajang lomba Paskibraka",
      date: "06 Oktober 2025",
      time: "07.00 WIB",
      image: "berita/paskibra.jpg",
      category: "Prestasi",
    },
    {
      title: "Hari Santri Nasional 2025",
      excerpt:
        "SMK Muhammadiyah Kandanghaur mengadakan peringatan Hari Santri Nasional 2025.",
      date: "22 Oktober 2025",
      time: "08.00 WIB",
      image: "berita/santri.jpg",
      category: "Peringatan",
    },
    {
      title: "Workshop Pengembangan TEFA 2025",
      excerpt:
        "Jadwal Workshop Pengembangan TEFA 2025 untuk semua program keahlian telah diumumkan.",
      date: "22 Oktober 2025",
      time: "12.00 WIB",
      category: "Workshop",
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Berita & Pengumuman
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ikuti perkembangan terbaru sekolah, prestasi siswa, dan berbagai
            kegiatan yang dilaksanakan di SMK Muhammadiyah Kandanghaur.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left (Artikel Utama) */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {news.slice(0, 2).map((article, index) => (
                <motion.article
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{article.date}</span>
                          <Clock className="h-4 w-4 ml-4 mr-1" />
                          <span>{article.time}</span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center transition-colors">
                          Baca Selengkapnya
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Berita Terbaru */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Berita Terbaru
              </h3>
              <div className="space-y-4">
                {news.slice(2).map((article, index) => (
                  <motion.div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                      {article.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{article.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pengumuman Penting */}
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Pengumuman Penting</h3>
              <div className="space-y-3">
                <motion.div
                  className="bg-white/20 rounded-lg p-3"
                  whileHover={{ scale: 1.03 }}
                >
                  <p className="font-medium text-sm">
                    Pendaftaran Siswa Baru 2025/2026
                  </p>
                  <p className="text-xs text-blue-100 mt-1">
                    Dibuka mulai November 2025
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white/20 rounded-lg p-3"
                  whileHover={{ scale: 1.03 }}
                >
                  <p className="font-medium text-sm">Ujian TKA </p>
                  <p className="text-xs text-blue-100 mt-1">
                    Dilaksanakan Pada November 2025
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
