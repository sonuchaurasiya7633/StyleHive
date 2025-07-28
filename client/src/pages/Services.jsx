import servicesData from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';

function Services() {
  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 space-y-16">
      
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-2
                     bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent
                     tracking-wide"
        >
          Our Services
        </motion.h1>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm sm:text-base mb-10 sm:mb-12">
          Explore our wide range of premium services
        </p>
      </div>

      {/* Hair Services */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
          💇‍♂ Hair Services
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.hairServices.map(service => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </motion.div>
      </div>

      {/* Skin & Facial Services */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
          💆‍♀ Skin & Facial Services
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.skinFacialServices.map(service => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </motion.div>
      </div>

      {/* Grooming & Other Services */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
          💅 Grooming & Other Services
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.groomingOtherServices.map(service => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </motion.div>
      </div>

      {/* Bridal / Groom Packages */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
          👰 Bridal / Groom Packages
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.bridalGroomPackages.map(service => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </motion.div>
      </div>

      {/* Hair Wash & Treatments */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
          🚿 Hair Wash & Treatments
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.hairWashTreatments.map(service => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
