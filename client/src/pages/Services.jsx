import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import ServiceCard from '../components/ServiceCard';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/services`)
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl sm:text-4xl font-heading text-center mb-8 sm:mb-12"
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map(service => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;