"use client";
import React from "react";
import { Monitor, Flame, Pill, Car, Zap, Bike } from "lucide-react";
import { motion } from "framer-motion";

const Programs = () => {
  const programs = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Teknik Komputer dan Jaringan (TKJ)",
      description:
        "Mempelajari instalasi, konfigurasi, dan maintenance sistem komputer serta jaringan.",
      duration: "3 Tahun",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Teknik Kendaraan Ringan (TKR)",
      description:
        "Keahlian dalam perbaikan dan maintenance kendaraan bermotor roda empat.",
      duration: "3 Tahun",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Teknik Pengelasan (TPL)",
      description:
        "Menguasai teknik pengelasan modern untuk industri manufaktur dan konstruksi.",
      duration: "3 Tahun",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Bike className="h-8 w-8" />,
      title: "Teknik Sepeda Motor (TSM)",
      description:
        "Spesialisasi dalam perawatan dan perbaikan sepeda motor roda dua.",
      duration: "3 Tahun",
      color: "from-slate-500 to-slate-700",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Teknik Elektronika Industri (TEI)",
      description:
        "Fokus pada instalasi, perawatan, dan pemrograman sistem elektronika industri.",
      duration: "3 Tahun",
      color: "from-orange-400 to-orange-500",
    },
    {
      icon: <Pill className="h-8 w-8" />,
      title: "Layanan Penunjang Kefarmasian Klinis dan Komunitas (LPKKK)",
      description:
        "Membekali siswa dengan kompetensi pelayanan kefarmasian di klinik maupun komunitas.",
      duration: "3 Tahun",
      color: "from-sky-400 to-sky-500",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Konsentrasi Keahlian
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai konsentrasi keahlian yang dirancang untuk mempersiapkan
            siswa menjadi tenaga kerja terampil dan profesional.
          </p>
        </motion.div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className={`bg-gradient-to-r ${program.color} p-6 flex flex-col items-center text-center`}
              >
                <motion.div
                  className="text-white mb-4"
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {program.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {program.title}
                </h3>
                <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                  {program.duration}
                </span>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {program.description}
                </p>
                <motion.button
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Pelajari Lebih Lanjut →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bagian bawah */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sertifikasi & Kerjasama Industri
            </h3>
            <p className="text-gray-600 mb-6">
              Setiap program keahlian dilengkapi dengan sertifikasi kompetensi
              dan program magang di perusahaan partner untuk memastikan kesiapan
              kerja lulusan.
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {["BNSP Certified", "Industry Partnership", "Job Guarantee"].map(
                (item, i) => (
                  <motion.span
                    key={i}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      i === 2
                        ? "bg-amber-100 text-amber-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {item}
                  </motion.span>
                )
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
