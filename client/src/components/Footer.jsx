import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-800 py-8 mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              © 2025 StyleHive. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-primary">
              <FaFacebook size={20} className="sm:h-6 sm:w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-primary">
              <FaInstagram size={20} className="sm:h-6 sm:w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-primary">
              <FaTwitter size={20} className="sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;