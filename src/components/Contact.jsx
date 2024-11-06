import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaInstagram,FaGithub  } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <section id="contact" className="h-[40vh] bg-gradient-to-b from-[#020202] to-[#101010] p-10 flex flex-col justify-center items-center">
       <Helmet>
    <title>Sojan O Nelson | Software Developer</title>
    <meta name="description" content="Portfolio of Sojan O Nelson, a skilled Software Developer." />
    <meta name="keywords" content="Sojan, Software Developer, Web Developer" />
    
  </Helmet>
      <h1 className="text-2xl font-light text-orange-400 mb-2">Get in Touch</h1>
      <h1 className="text-6xl poppins-bold  text-white mb-10">Contact Me</h1>
      
      <motion.div
        className="flex gap-8 bg-slate-800 px-9 py-2 rounded-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* LinkedIn */}
        <motion.a
          href="https://linkedin.com/in/sojan-o-nelson"
          className="text-white text-4xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaLinkedin className="hover:text-blue-400 transition-colors duration-300" />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://instagram.com/sojxnn"
          className="text-white text-4xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaInstagram className="hover:text-pink-400 transition-colors duration-300" />
        </motion.a>
        <motion.a
          href="https://www.github.com/sojanonelson"
          className="text-white text-4xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaGithub className="hover:text-yellow-400 transition-colors duration-300" />
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:sojanonelson54@gmail.com"
          className="text-white text-4xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaEnvelope className="hover:text-yellow-400 transition-colors duration-300" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
