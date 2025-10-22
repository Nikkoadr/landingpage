"use client";
import React from "react";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Sekolah", href: "#about" },
    { name: "Program Keahlian", href: "#programs" },
    { name: "Fasilitas", href: "#facilities" },
    { name: "Pendaftaran", href: "#contact" },
    { name: "Berita", href: "#news" },
  ];

  const programs = [
    "Teknik Kendaraan Ringan",
    "Teknik Pengelasan",
    "Teknik Eletronika Industri",
    "Teknik Komputer & Jaringan",
    "Teknik Sepeda Motor",
    "Layanan Penunjang Kefarmasian Klinis dan Komunitas",
  ];

  const socialMedia = [
    {
      icon: <Facebook className="h-5 w-5" />,
      color: "hover:text-blue-600",
      link: "https://facebook.com/smkmuhkandanghaur",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      color: "hover:text-pink-600",
      link: "https://instagram.com/",
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      color: "hover:text-red-600",
      link: "https://youtube.com/smkmuhkandanghaur",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      color: "hover:text-blue-400",
      link: "https://x.com/smkmuhkdh",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SMK Muhammadiyah</h3>
                <p className="text-gray-400 text-sm">Kandanghaur</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Mencetak generasi yang beriman, berilmu, berakhlak mulia, serta
              memiliki keterampilan unggul sesuai tuntutan dunia kerja.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gray-800 p-3 rounded-lg text-gray-400 ${social.color} transition-colors duration-200`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Menu Cepat */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Menu Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 6, color: "#2563eb" }} // animasi geser + warna biru
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-gray-400 block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Program Keahlian */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Konsentrasi Keahlian</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 6, color: "#2563eb" }}
                  className="text-gray-400 text-sm leading-relaxed"
                >
                  {program}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Kontak */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm leading-relaxed">
                  Jl. Raya Kandanghaur No. 28/A Karanganyar
                  <br />
                  Kandanghaur, Indramayu
                  <br />
                  Jawa Barat 45254
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400 text-sm">
                  info@smkmuhkandanghaur.sch.id
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        className="border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SMK Muhammadiyah Kandanghaur. Semua
              hak dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#60a5fa" }}
                className="text-gray-400 text-sm"
              >
                Kebijakan Privasi
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#60a5fa" }}
                className="text-gray-400 text-sm"
              >
                Syarat & Ketentuan
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
