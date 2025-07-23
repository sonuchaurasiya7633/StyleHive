import { useState, useEffect } from 'react';
import axios from 'axios';

function BookingForm() {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    contactInfo: { name: '', email: '', phone: '' },
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/services`)
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
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
      await axios.post(`${import.meta.env.VITE_API_URL}/bookings`, formData);
      alert('Booking submitted successfully!');
      setFormData({
        service: '',
        date: '',
        time: '',
        contactInfo: { name: '', email: '', phone: '' },
      });
      setErrors({});
    } catch (err) {
      alert('Error submitting booking');
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
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 p-4 sm:p-6">
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
  );
}

export default BookingForm;