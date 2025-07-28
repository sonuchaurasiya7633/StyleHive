import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="
        sticky top-0 z-50 
        bg-gradient-to-r from-primary to-secondary/90 
        dark:from-gray-900 dark:to-gray-800/90 
        shadow-xl backdrop-blur-md 
        rounded-b-2xl transition-shadow duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="
              text-2xl sm:text-3xl font-heading font-bold text-white 
              hover:scale-105 hover:text-yellow-300 transition-transform duration-300 drop-shadow-md"
          >
            RohitRoyal
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {["Home", "Services", "Gallery", "Booking", "Contact"].map((text) => (
              <Link
                key={text}
                to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                className="
                  relative text-white/90 hover:text-yellow-300 transition-colors duration-300 
                  after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                  after:bg-yellow-300 after:transition-all after:duration-300 
                  hover:after:w-full"
              >
                {text}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="
                p-2 rounded-full bg-white/20 hover:bg-white/30 
                dark:bg-gray-700 dark:hover:bg-gray-600 
                shadow-inner hover:shadow-lg transition-all duration-300"
            >
              {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-white" />}
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-white/20 dark:hover:bg-gray-700 transition"
          >
            {isMenuOpen ? <HiX size={26} className="text-white" /> : <HiMenu size={26} className="text-white" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-primary/90 to-secondary/90 dark:from-gray-900 dark:to-gray-800 shadow-inner rounded-b-xl"
          >
            <div className="flex flex-col space-y-4 p-4">
              {["Home", "Services", "Gallery", "Booking", "Contact"].map((text) => (
                <Link
                  key={text}
                  to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="
                    text-white/90 hover:text-yellow-300 text-lg 
                    transition-colors duration-300"
                >
                  {text}
                </Link>
              ))}
              <button
                onClick={() => { toggleDarkMode(); toggleMenu(); }}
                className="flex items-center space-x-2 text-white/90 hover:text-yellow-300 text-lg transition-colors duration-300"
              >
                {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-white" />}
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
