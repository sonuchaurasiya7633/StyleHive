import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative bg-gradient-to-br from-primary to-secondary py-16 sm:py-24 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center p-4 sm:p-8 max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-5xl font-heading text-white mb-4 sm:mb-6">
            Transform Your Look at StyleHive
          </h1>
          <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8">
            Experience premium hair services with our expert stylists.
          </p>
          <Link to="/booking">
            <button className="btn bg-white text-primary hover:bg-gray-100">
              Book Now
            </button>
          </Link>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl sm:text-3xl font-heading text-center mb-6 sm:mb-8"
        >
          About StyleHive
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto"
        >
          StyleHive is your go-to salon for modern haircuts, vibrant colors, and professional styling. Our team is dedicated to making you look and feel your best.
        </motion.p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-heading mb-4 sm:mb-6">Ready for a New Look?</h2>
          <Link to="/services">
            <button className="btn bg-primary text-white hover:bg-secondary">
              Explore Our Services
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;