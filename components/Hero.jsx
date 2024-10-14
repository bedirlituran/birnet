'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from "framer-motion";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Menünün açık/kapalı durumu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Butona tıklanınca menüyü aç/kapa
  };

  return (
    <main className="dark:bg-gray-800 bg-slate-50 relative overflow-hidden h-screen font-roboto">
      {/* Header Animasyonu */}
      <motion.header 
        className="h-20 sm:h-28 flex items-center z-30 w-full"
        initial={{ opacity: 0, y: -20 }} // Başlangıç durumu
        animate={{ opacity: 1, y: 0 }} // Animasyon durumu
        transition={{ duration: 0.5 }} // Animasyon süresi
      >
        <div className="container mx-auto px-4 sm:px-6 py-16 flex items-center justify-between">
          <div className="text-gray-800 dark:text-white font-black text-2xl sm:text-3xl">
            BirNet MMC
          </div>
          <div className="flex items-center">
            <button className="lg:hidden flex flex-col ml-4" onClick={toggleMenu}>
              <span className="w-8 h-1 bg-gray-800 dark:bg-white mb-2 rounded-md"></span>
              <span className="w-8 h-1 bg-gray-800 dark:bg-white mb-2 rounded-md"></span>
              <span className="w-8 h-1 bg-gray-800 dark:bg-white mb-2 rounded-md"></span>
            </button>
            <nav className="hidden lg:flex font-roboto text-gray-800 dark:text-white uppercase text-sm sm:text-base">
              <Link href="/" className="py-2 px-6">Ana səhifə</Link>
              <Link href="../../Haqqimizda" className="py-2 px-6">Haqqımızda</Link>
              <Link href="../../ChannelList" className="py-2 px-6">Tv Kanallar</Link>
              <Link href="../../Elaqe" className="py-2 px-6">Əlaqə</Link>
              <Link href="#" className="uppercase flex items-center justify-center py-3 px-5 sm:px-6 rounded-lg bg-pink-500 text-white hover:bg-pink-400">Ödəniş et</Link>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hamburger Menüsü Animasyonu */}
      <motion.div
        className={`fixed inset-0 bg-black text-white flex flex-col justify-center items-center z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
        initial={{ opacity: 0 }} // Başlangıç durumu
        animate={menuOpen ? { opacity: 1 } : { opacity: 0 }} // Animasyon durumu
        transition={{ duration: 0.3 }} // Animasyon süresi
      >
        <button className="absolute top-8 right-8 text-3xl" onClick={toggleMenu}>
          &times;
        </button>
        <nav className="flex flex-col space-y-8 text-xl uppercase">
          <Link href="/" className="hover:text-pink-500" onClick={toggleMenu}>Ana səhifə</Link>
          <Link href="../../Haqqimizda" className="hover:text-pink-500" onClick={toggleMenu}>Haqqımızda</Link>
          <Link href="../../ChannelList" className="hover:text-pink-500" onClick={toggleMenu}>Tv Kanallar</Link>
          <Link href="../../Elaqe" className="hover:text-pink-500" onClick={toggleMenu}>Əlaqə</Link>
          <Link href="#" className="uppercase flex items-center justify-center py-3 px-5 sm:px-6 rounded-lg bg-pink-500 text-white hover:bg-pink-300" onClick={toggleMenu}>Ödəniş et</Link>
        </nav>
      </motion.div>

      {/* Hero Section Animasyonu */}
      <motion.div
        className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden opacity-90"
        initial={{ opacity: 0, y: 20 }} // Başlangıç durumu
        animate={{ opacity: 1, y: 0 }} // Animasyon durumu
        transition={{ duration: 0.5 }} // Animasyon süresi
      >
        <div className="container mx-auto px-4 sm:px-6 flex relative py-12">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-16 h-1 bg-gray-800 dark:bg-white mb-8"></span>
            <h1 className="font-sans uppercase text-5xl sm:text-6xl font-extrabold flex flex-col leading-tight dark:text-white text-gray-800">
              Hər Zaman <span className="text-4xl sm:text-5xl">Yanınızda</span>
            </h1>
            <p className="text-lg sm:text-lg text-gray-700 dark:text-white mt-4">
              İnternet və TV xidmətlərimizi kəşf edin. Müasir texnologiyalarla evinizdə keyfiyyətli əyləncə və əlaqə imkanı təqdim edirik.
            </p>
            <div className="flex mt-6">
              <a href="#" className="uppercase flex items-center justify-center py-3 px-5 sm:px-6 rounded-lg bg-pink-500 text-white hover:bg-pink-400">
                Başlayın
              </a>
            </div>
          </div>
          <div className="hidden sm:w-1/3 lg:w-3/5 ml-28 md:flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="hero"
              className="object-cover w-4/5 rounded-md"
            />
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Hero;
