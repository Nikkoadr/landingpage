"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/hero1.webp", alt: "SMK Muhammadiyah Kandanghaur 1" },
    { src: "/hero2.webp", alt: "SMK Muhammadiyah Kandanghaur 2" },
    { src: "/hero3.webp", alt: "SMK Muhammadiyah Kandanghaur 3" },
  ];

  // Auto slide tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Sekolah Pusat Keunggulan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                SMK Muhammadiyah
                <span className="block text-blue-600">Kandanghaur</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Membangun generasi unggul yang berakhlak mulia, terampil, dan
                siap menghadapi tantangan masa depan dengan landasan nilai-nilai
                Islami.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Jelajahi Sekolah
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200">
                Hubungi Kami
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {[
                {
                  icon: (
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  ),
                  value: "1500+",
                  label: "Siswa Aktif",
                },
                {
                  icon: (
                    <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  ),
                  value: "6",
                  label: "Program Keahlian",
                },
                {
                  icon: (
                    <Award className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  ),
                  value: "A",
                  label: "Akreditasi",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
                >
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    {stat.icon}
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Slider + Background */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl h-96">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[currentIndex].src}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-96 object-cover rounded-2xl"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>

              {/* Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-3 h-3 rounded-full ${
                      i === currentIndex ? "bg-blue-600" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Background kotak biru tetap ada */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
