import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookingForm() {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    contactInfo: { name: '', email: '', phone: '' },
  });
  const [errors, setErrors] = useState({});
  const form = useRef();

  useEffect(() => {
    setServices([
      { _id: '1', name: 'Haircut' },
      { _id: '2', name: 'Beard Styling' },
      { _id: '3', name: 'Hair Coloring' },
      { _id: '4', name: 'Facial' },
      { _id: '5', name: 'Hair Washing' }
    ]);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.service) newErrors.service = 'Service is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.contactInfo.name) newErrors.name = 'Name is required';
    if (!formData.contactInfo.email || !/\S+@\S+\.\S+/.test(formData.contactInfo.email)) newErrors.email = 'Valid email is required';
    if (!formData.contactInfo.phone) newErrors.phone = 'Phone is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await emailjs.sendForm(
        'service_yuk9rgs',
        'template_v6gn2g7',
        form.current,
        'wJvTC3Wn0sZTvvsFC'
      );
      toast.success('Booking submitted successfully!');
      setFormData({
        service: '',
        date: '',
        time: '',
        contactInfo: { name: '', email: '', phone: '' },
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error('Error submitting booking');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('contactInfo.')) {
      const field = name.split('.')[1];
      setFormData({
        ...formData,
        contactInfo: { ...formData.contactInfo, [field]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setErrors({ ...errors, [name.split('.')[1] || name]: '' });
  };

  return (
    <>
      <form ref={form} onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 p-4 sm:p-6">
        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary"
          >
            <option value="">Select Service</option>
            {services.map(service => (
              <option key={service._id} value={service.name}>{service.name}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
        </div>
        <div>
          <input
            type="date"
            name="date"
            placeholder='Enter the Date...'
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary"
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>
        <div>
          <input
            type="time"
            name="time"
            placeholder='Enter the Time...'
            value={formData.time}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary"
          />
          {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
        </div>
        <div>
          <input
            type="text"
            name="contactInfo.name"
            placeholder="Full Name"
            value={formData.contactInfo.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            name="contactInfo.email"
            placeholder="Email Address"
            value={formData.contactInfo.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <input
            type="tel"
            name="contactInfo.phone"
            placeholder="Phone Number"
            value={formData.contactInfo.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <button type="submit" className="btn bg-primary text-white hover:bg-secondary w-full">
          Submit Booking
        </button>
      </form>
      
      {/* Toast container */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop closeOnClick />
    </>
  );
}

export default BookingForm;
