import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ScissorsIcon, CalendarIcon } from "@heroicons/react/24/outline";

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary to-secondary py-20 sm:py-32 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/image/hero.jpg)" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center p-6 sm:p-10 max-w-4xl mx-auto backdrop-blur-sm bg-white/10 rounded-xl shadow-lg"
        >
          <h1 className="text-4xl sm:text-6xl font-heading text-white mb-4 sm:mb-6 font-bold tracking-tight drop-shadow-md">
            Transform Your Look at RohitRoyal
          </h1>
          <p className="text-lg sm:text-2xl text-gray-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Experience premium hair services with our expert stylists. Unleash
            your style potential today.
          </p>
          <Link to="/booking">
            <button className="btn bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-transform duration-300 px-6 py-3 rounded-full font-semibold shadow-md">
              Book Now
            </button>
          </Link>
        </motion.div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-heading text-center mb-8 sm:mb-12 text-gray-800 dark:text-white"
        >
          About RohitRoyal
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-3xl mx-auto"
        >
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center">
            RohitRoyal is your go-to salon for modern haircuts, vibrant colors,
            and professional styling. Our team of expert stylists is dedicated
            to making you look and feel your best, using the latest techniques
            and premium products.
          </p>
        </motion.div>
      </div>

      {/* Services Teaser Section */}
      <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-heading text-center mb-12 text-gray-800 dark:text-white"
        >
          Our Signature Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["haircut", "coloring", "styling"].map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-52 sm:h-60 mb-4">
                <img
                  src={`/image/services/${service}.jpg`}
                  alt={service}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white capitalize">
                {service}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional {service} tailored to your style.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-secondary to-primary py-16 sm:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDB2MjBNMCAxMGgyME0xMCAyMFYwTTIwIDEwaC0yME0xMCAyMFYwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')]"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto"
        >
          <ScissorsIcon className="w-12 h-12 mx-auto text-white mb-4" />
          <h2 className="text-3xl sm:text-4xl font-heading text-white mb-6">
            Ready for a New Look?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
            <Link to="/services">
              <button className="btn bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-transform duration-300 px-6 py-3 rounded-full font-semibold shadow-md flex items-center justify-center">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Explore Our Services
              </button>
            </Link>
            <Link to="/booking">
              <button className="btn bg-transparent border-2 border-white text-white hover:bg-white/20 transition-colors duration-300 px-6 py-3 rounded-full font-semibold">
                Book an Appointment
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
