import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .night-sky {
        background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
        position: relative;
        overflow: hidden;
        min-height: 100vh;
      }

      .star {
        position: absolute;
        background: white;
        border-radius: 50%;
        animation: twinkle 2s infinite ease-in-out;
        opacity: 0.4;
      }

      @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.6); }
      }

      .moon {
        position: absolute;
        top: 10px;
        right: 60px;
        width: 80px;
        height: 80px;
        background: radial-gradient(circle at 30% 30%, #fff, #dcdcdc 60%, #aaa);
        border-radius: 50%;
        box-shadow: 0 0 40px #fff5, 0 0 80px #ffffff33;
        z-index: 10;
      }
    `;
    document.head.appendChild(style);

    const numStars = 250;
    const container = document.querySelector('.night-sky');

    if (container) {
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const size = Math.random() * 2 + 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${1.5 + Math.random() * 2}s`;
        star.style.opacity = `${0.2 + Math.random() * 0.6}`;

        container.appendChild(star);
      }
    }

    return () => {
      document.head.removeChild(style);
      if (container) {
        container.querySelectorAll('.star').forEach(star => star.remove());
      }
    };
  }, []);

  return (
    <div className="night-sky px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
      <div className="moon"></div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-heading text-center mb-8 sm:mb-12 text-white"
      >
  
      </motion.h1>

      <div className="relative z-20 bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 sm:p-10 max-w-3xl mx-auto border border-white/20">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
