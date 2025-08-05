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
      whileHover={{ scale: 1.04, y: -4, boxShadow: '0 20px 50px rgba(236,72,153,0.25)' }}
      transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 hover:border-pink-300/50 transition-all duration-500 flex flex-col max-w-sm mx-auto"
    >
      <div className="relative aspect-w-4 aspect-h-3 overflow-hidden rounded-t-2xl">
        <img
          src={service.image || 'https://via.placeholder.com/400x300?text=Service+Image'}
          alt={service.name}
          className="object-cover w-full h-full hover:scale-110 transform transition-transform duration-700 ease-in-out"
        />

        {service.discount && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-4 left-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-sm px-3 py-1 rounded-full shadow-md font-medium tracking-wide"
          >
            {service.discount}% OFF
          </motion.div>
        )}
      </div>

      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 tracking-wide">
          {service.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-4 flex-grow line-clamp-3">
          {service.description}
        </p>

        <div className="flex items-center space-x-3 mb-4">
          {service.originalPrice && (
            <span className="text-gray-400 text-sm line-through">₹{service.originalPrice}</span>
          )}
          {service.price && (
            <span className="text-pink-500 dark:text-pink-300 font-bold text-lg">
              ₹{service.price}
            </span>
          )}
        </div>

        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleBookNow}
          className="mt-auto bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-medium px-6 py-2.5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
