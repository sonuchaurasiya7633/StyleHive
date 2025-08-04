import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-gray-50/70 to-gray-100/70 dark:from-gray-900/70 dark:to-gray-800/70 
                 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 py-8 mt-auto shadow-[0_-5px_30px_rgba(0,0,0,0.05)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

          {/* Logo / Brand */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: -2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-primary font-extrabold text-xl sm:text-2xl tracking-wide"
          >
            <Link to="/">RohitRoyal</Link>
          </motion.div>

          {/* Quick Links */}
          <div className="flex space-x-6 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            {["Home", "Services","Products", "Gallery", "Contact"].map((text, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, color: "#6366F1" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  className="transition-colors duration-200"
                >
                  {text}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {[{ icon: FaFacebook, link: "https://facebook.com" },
              { icon: FaInstagram, link: "https://instagram.com" },
              { icon: FaTwitter, link: "https://twitter.com" }]
              .map(({ icon: Icon, link }, idx) => (
                <motion.a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, backgroundColor: '#6366F1', color: '#fff' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary 
                             bg-white/80 dark:bg-gray-700/80 p-2 rounded-full shadow-md 
                             transition-colors duration-200"
                >
                  <Icon size={18} />
                </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm"
        >
          © 2025 RohitRoyal. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}

export default Footer;
