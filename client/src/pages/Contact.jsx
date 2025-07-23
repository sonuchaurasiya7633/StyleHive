import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl sm:text-4xl font-heading text-center mb-8 sm:mb-12"
      >
        Contact Us
      </motion.h1>
      <ContactForm />
    </div>
  );
}

export default Contact;