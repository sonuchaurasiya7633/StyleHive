import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa'; // ✅ correct import
import { HiMenu, HiX } from 'react-icons/hi';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white dark:bg-gray-800 shadow-modern sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl sm:text-3xl font-heading text-primary">RohitRoyal</Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-primary text-sm lg:text-base">Home</Link>
            <Link to="/services" className="hover:text-primary text-sm lg:text-base">Services</Link>
            <Link to="/gallery" className="hover:text-primary text-sm lg:text-base">Gallery</Link>
            <Link to="/booking" className="hover:text-primary text-sm lg:text-base">Booking</Link>
            <Link to="/contact" className="hover:text-primary text-sm lg:text-base">Contact</Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
            </button>
          </div>

          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" className="hover:text-primary text-lg" onClick={toggleMenu}>Home</Link>
              <Link to="/services" className="hover:text-primary text-lg" onClick={toggleMenu}>Services</Link>
              <Link to="/gallery" className="hover:text-primary text-lg" onClick={toggleMenu}>Gallery</Link>
              <Link to="/booking" className="hover:text-primary text-lg" onClick={toggleMenu}>Booking</Link>
              <Link to="/contact" className="hover:text-primary text-lg" onClick={toggleMenu}>Contact</Link>
              <button
                onClick={() => { toggleDarkMode(); toggleMenu(); }}
                className="flex items-center space-x-2 text-lg"
              >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
