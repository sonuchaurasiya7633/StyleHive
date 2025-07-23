import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/gallery`)
      .then(res => setImages(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl sm:text-4xl font-heading text-center mb-8 sm:mb-12"
      >
        Our Gallery
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {images.map(image => (
          <motion.div
            key={image._id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-modern overflow-hidden"
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <p className="p-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">{image.caption}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;