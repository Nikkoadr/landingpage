"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Visi",
      description: "Bergerak maju menjadi yang terdepan.",
    },
    {
      icon: <Eye className="h-8 w-8 text-green-600" />,
      title: "Misi",
      description: `
  1. Mengembangkan ilmu pengetahuan dan penguasaan teknologi berdasarkan minat, bakat, serta potensi peserta didik di lingkungan sekolah dan masyarakat.  

  2. Meningkatkan mutu lulusan untuk bekerja, berwirausaha, dan melanjutkan pendidikan yang lebih tinggi.  

  3. Mengamalkan nilai-nilai keagamaan dalam kehidupan sehari-hari di sekolah, keluarga, dan masyarakat.  

  4. Meningkatkan kesadaran warga sekolah dalam upaya melestarikan lingkungan hidup.  

  5. Meningkatkan kompetensi peserta didik dalam penguasaan ilmu pengetahuan serta teknologi yang berwawasan regional, nasional, dan global serta peduli dan berbudaya lingkungan.  

  6. Menjalankan pelayanan terbaik.  

  7. Menumbuhkan serta mewujudkan jiwa patriotis dan nasionalis.
      `,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tentang Sekolah
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SMK Muhammadiyah Kandanghaur berdiri sejak 1998 sebagai lembaga
            pendidikan kejuruan yang berkomitmen menghasilkan lulusan
            berkualitas dengan landasan akhlak mulia.
          </p>
        </motion.div>

        {/* Visi & Misi */}
        <div className="space-y-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 transform group-hover:scale-105">
                <div className="flex justify-center items-center gap-3 mb-3">
                  <div className="text-blue-600">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line text-center">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Box */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Mengapa Memilih SMK Muhammadiyah Kandanghaur?
              </h3>
              <p className="text-emerald-100 mb-6 leading-relaxed">
                Dengan pengalaman lebih dari 25 tahun dalam dunia pendidikan
                kejuruan, kami telah membuktikan komitmen dalam mencetak lulusan
                yang tidak hanya terampil secara teknis, tetapi juga berakhlak
                mulia.
              </p>
              <ul className="space-y-3">
                {[
                  "Kurikulum terintegrasi dengan nilai-nilai Islam",
                  "Fasilitas modern dan lengkap",
                  "Kerjasama dengan industri terkemuka",
                  "Lulusan dengan tingkat serapan kerja tinggi",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Gambar */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="/kenapa.webp"
                alt="Suasana belajar"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
