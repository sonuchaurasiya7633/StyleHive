import { motion } from 'framer-motion';
import galleryData from '../data/galleryData';

function Gallery() {
  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl sm:text-4xl font-heading text-center mb-8 sm:mb-12 text-primary"
      >
        Our Gallery
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.map(image => (
          <motion.div
            key={image._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl group"
          >
            {/* Gradient border with glow */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-shadow duration-300">
              <div className="rounded-[inherit] bg-white dark:bg-gray-800">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="object-cover w-full h-full rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="p-3 sm:p-4 text-gray-700 dark:text-gray-300 text-center text-sm sm:text-base font-medium">
                  {image.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
