import { motion } from 'framer-motion';
import BookingForm from '../components/BookingForm';

function Booking() {
  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl sm:text-4xl font-heading text-center mb-8 sm:mb-12"
      >
        Book an Appointment
      </motion.h1>
      <BookingForm />
    </div>
  );
}

export default Booking;