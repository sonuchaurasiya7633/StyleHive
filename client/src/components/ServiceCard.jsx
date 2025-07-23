import { motion } from 'framer-motion';

function ServiceCard({ service }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-modern hover:shadow-lg transition-all"
    >
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">{service.description}</p>
      <p className="text-primary font-bold text-base sm:text-lg">${service.price}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{service.duration}</p>
    </motion.div>
  );
}

export default ServiceCard;