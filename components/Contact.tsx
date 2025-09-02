"use client";
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Alamat",
      details: [
        "Jl. Raya Kandanghaur No. 28/A Karanganyar",
        "Kandanghaur, Indramayu",
        "Jawa Barat 45254",
      ],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "WhatsApp",
      details: ["081122207770"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["smkmuhkandanghaur@gmail.com"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 07:00 - 15:30", "Sabtu dan Minggu : Libur"],
    },
  ];

  const socialMedia = [
    {
      icon: <Facebook className="h-5 w-5" />,
      name: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram",
      color: "hover:text-pink-600",
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      name: "YouTube",
      color: "hover:text-red-600",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      color: "hover:text-sky-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Untuk informasi lebih lanjut tentang pendaftaran, program keahlian,
            atau pertanyaan lainnya, jangan ragu untuk menghubungi kami.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Kontak */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-gray-600 text-sm leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sosial Media */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-gray-900 mb-4">
                Ikuti Media Sosial Kami
              </h3>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-blue-100 p-3 rounded-lg text-blue-600 ${social.color} transition-colors duration-200 hover:bg-blue-200`}
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Formulir */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">Kirim Pesan</h3>
              <p className="text-gray-600 mt-1">
                Kami akan membalas dalam 24 jam
              </p>
            </div>
            <form className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subjek
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Subjek pesan"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 flex items-center justify-center"
              >
                Kirim Pesan
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Peta */}
        <motion.div
          className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2392095535115!2d108.11099607576602!3d-6.363079662248809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6eb446a2860085%3A0x41b6f05a520ce043!2sSMK%20Muhammadiyah%20Kandanghaur!5e0!3m2!1sid!2sid!4v1756816035509!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
