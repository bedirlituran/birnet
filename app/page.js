"use client"
import { motion } from "framer-motion";
import Gostericiler from "@/components/Gostericiler";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Future from "@/components/Future";
import Reklam from "@/components/Reklam";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Başlangıç durumu
        animate={{ opacity: 1, y: 0 }} // Animasyon durumu
        exit={{ opacity: 0, y: -20 }} // Çıkış animasyonu
        transition={{ duration: 0.5 }} // Animasyon süresi
      >
        <Pricing />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Reklam />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Future />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Faq />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Gostericiler />
      </motion.div>
    </>
  );
}
