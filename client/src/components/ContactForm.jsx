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
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-white dark:bg-gray-950">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 sm:p-10 md:p-12 rounded-3xl shadow-xl bg-gradient-to-br from-pink-500 via-purple-600 to-pink-500 dark:from-purple-900 dark:via-pink-800 dark:to-purple-900 backdrop-blur-xl border border-pink-400/30 dark:border-purple-700/80"
      >
        <h2 className="text-3xl sm:text-4xl text-white font-extrabold text-center mb-8 drop-shadow-lg">Get in Touch 💌</h2>

        <div className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-4 rounded-xl outline-none bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-white border transition focus:ring-4 ${errors.name ? 'border-red-500 focus:ring-red-400' : 'border-transparent focus:ring-pink-400'}`}
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
              className={`w-full p-4 rounded-xl outline-none bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-white border transition focus:ring-4 ${errors.email ? 'border-red-500 focus:ring-red-400' : 'border-transparent focus:ring-pink-400'}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full p-4 rounded-xl outline-none bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-white border transition focus:ring-4 ${errors.message ? 'border-red-500 focus:ring-red-400' : 'border-transparent focus:ring-pink-400'}`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default ContactForm;
