import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-3">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Hızlı Linkler */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Sürətli linklər</h3>
          <ul>
            <li className="mb-2">
              <Link href="../../Haqqimizda" className="hover:text-yellow-400">
                Haqqımızda
              </Link>
            </li>
            <li className="mb-2">
              <Link href="../../Elaqe" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#privacy" className="hover:text-yellow-400">
                Kanal siyahısı
              </Link>
            </li>
            <li className="mb-2">
              <a href="#terms" className="hover:text-yellow-400">
                Şərtlər və qaydalar
              </a>
            </li>
          </ul>
        </div>

        {/* Sosyal Medya İkonları */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Bizi sosial media hesablarından takib edin</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="w-6 h-6 hover:scale-110 transform transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="w-6 h-6 hover:scale-110 transform transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="w-6 h-6 hover:scale-110 transform transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="w-6 h-6 hover:scale-110 transform transition" />
            </a>
          </div>
        </div>

        {/* E-Bülten Abonelik */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Mesaj göndər</h3>
          <form>
            <input
              type="email"
              placeholder="email adres"
              className="w-full px-4 py-2 mb-4 rounded bg-gray-800 text-white"
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 px-4 rounded"
            >
              Göndər
            </button>
          </form>
        </div>
      </div>

      {/* Alt Kısım: İletişim Bilgileri ve Ödeme Yöntemleri */}
      <div className="container mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-700 pt-5">
        {/* İletişim Bilgileri */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Bizimlə əlaqə</h3>
          <p className="mb-2">Phone: +123 456 789</p>
          <p className="mb-2">Email: support@yourcompany.com</p>
          <p className="mb-2">Address: 123 Main St, Your City, Your Country</p>
        </div>

        {/* Ödeme Yöntemleri */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-4">Ödəniş üsulları</h3>
          <div className="flex justify-center md:justify-end space-x-4">
          <div className="flex justify-center md:justify-end space-x-4">
  <FaCcVisa className="w-12 h-12" />
  <FaCcMastercard className="w-12 h-12" />
</div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-8 text-center">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} BirNet. Bütün hüquqlar qorunur.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
