import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const form = useRef();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.message) newErrors.message = 'Message is required';
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
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error('Error sending message');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <>
      <form ref={form} onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 p-4 sm:p-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary"
            rows="5"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button type="submit" className="btn bg-primary text-white hover:bg-secondary w-full">
          Send Message
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop closeOnClick />
    </>
  );
}

export default ContactForm;
