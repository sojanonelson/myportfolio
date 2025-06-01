import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import Developer from '../assets/developer.json';
import Particles from '../components/Particles';
import { Helmet } from 'react-helmet';
import { Github, Linkedin, FileText, Eye } from "lucide-react";

const Home = ({ viewCount }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Developer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const name = "SOJAN O NELSON";

  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-b from-[#0a0a0a] to-[#111111] flex items-center justify-center w-full text-white overflow-hidden px-4">
      {/* <Particles /> */}
      <Helmet>
        <title>Sojan O Nelson | Cybersecurity Analyst & MERN Developer</title>
        <meta name="description" content="Portfolio of Sojan O Nelson, a skilled Cybersecurity Analyst and MERN Stack Developer." />
        <meta name="keywords" content="Sojan, Cybersecurity, Ethical Hacking, MERN Developer, Web Developer" />
      </Helmet>
      
      <div className="container mx-auto flex flex-col md:flex-row overflow-hidden items-center justify-between py-20">
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-green-900/20 text-green-400 border border-green-400/30 mb-4 text-sm"
          >
            <Eye className="mr-2" size={16} />
            {viewCount} Views
          </motion.div>
          
          <motion.h1
            className="text-2xl lg:text-3xl font-mono text-green-400 mb-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hi there, I'm
          </motion.h1>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {name}
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-green-400">Cybersecurity Analyst</span> & <span className="text-green-400">MERN Stack Developer</span> building secure and scalable web applications.
          </motion.p>
          
          <div className="mb-8">
            <iframe 
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=112534" 
              style={{ border: "none", width: "100%", height: "auto" }}
              className="max-w-lg"
            ></iframe>
          </div>
          
          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <a
              href="https://drive.google.com/file/d/1DyPfWou7L4kro2tIsQqcDgzhsXvhbsmZ/view?usp=drive_link"
              download
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium flex items-center space-x-2 transition-colors duration-300"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
            <a
              href="https://github.com/sojanonelson"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md font-medium flex items-center space-x-2 transition-colors duration-300"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sojanonelson"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium flex items-center space-x-2 transition-colors duration-300"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] relative">
            <div className="absolute inset-0 rounded-full "></div>
            <Lottie options={defaultOptions} />
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
       
       
      >
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Home;