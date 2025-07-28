import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function ServiceCard({ service }) {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 150 }}
      className="
        relative bg-white/90 dark:bg-gray-800/80 backdrop-blur-md
        rounded-xl overflow-hidden shadow-lg hover:shadow-2xl
        border border-gray-100 dark:border-gray-700
        transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-w-4 aspect-h-3">
        <img
          src={service.image || 'https://via.placeholder.com/400x300?text=Service+Image'}
          alt={service.name}
          className="object-cover w-full h-full"
        />

        {/* Discount badge top-left */}
        {service.discount && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-xs sm:text-sm px-2 py-1 rounded-full shadow"
          >
            {service.discount}% OFF
          </motion.div>
        )}
      </div>

      <div className="flex-1 flex flex-col p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-800 dark:text-gray-100">
          {service.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-2">
          {service.description}
        </p>

        {/* Modern price row */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-primary font-bold text-base sm:text-lg">
            ₹{service.price}
          </span>
          <span className="text-gray-400 text-sm sm:text-base line-through">
            ₹{service.originalPrice}
          </span>
          <span className="text-green-600 text-xs sm:text-sm font-semibold">
            {service.discount}% off
          </span>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleBookNow}
          className="
            mt-auto inline-block bg-gradient-to-r from-primary to-secondary 
            hover:from-secondary hover:to-primary text-white text-sm px-4 py-2 
            rounded-lg shadow hover:shadow-lg transition-all duration-300"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
