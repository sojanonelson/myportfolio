import React from 'react';
import { motion } from 'framer-motion';
import ChordBeat from "../assets/project/chordbeat.png";
import Spotify from '../assets/project/spotify.png';
import Lara from '../assets/project/Lara.jpg';
import Ecom from '../assets/project/Ecom.jpg';
import Portfolio from '../assets/project/Portfolio.png'
import OnlineLearn  from '../assets/project/OnlineLearn.jpg'
import { Helmet } from 'react-helmet';
// Import React Icons

import { FaReact, FaNodeJs, FaPython,FaSpotify } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTensorflow, SiPostman,  SiFirebase } from 'react-icons/si';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    name: "ChordBeats",
    image: ChordBeat,
    description: "A digital studio web application for creating music beats and virtual instruments.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Express.js", icon: <SiExpress /> }
    ],
    link:"https://chordbeat.vercel.app"
  },
  {
    id: 2,
    name: "Spotify Clone",
    image: Spotify,
    description: "A clone of Spotify with essential features including playlists, search, and playback.",
    technologies: [
      { name: "MERN Stack", icon: <FaReact /> },
      { name: "REST API", icon: <SiPostman /> },
      { name: "Spotify API", icon: <FaSpotify /> }
    ]
  },
  {
    id: 3,
    name: "Personal Voice Assistant",
    image: Lara,
    description: "A voice-controlled application to perform various computer tasks, such as opening apps and setting reminders.",
    technologies: [
      { name: "Python", icon: <FaPython /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Eel", icon: null },
      { name: "MongoDB", icon: <SiMongodb /> }
    ]
  },
  {
    id: 4,
    name: "E-Commerce Platform",
    image: Ecom, // Replace with actual image
    description: "A comprehensive e-commerce platform with product management, user authentication, and payment integration.",
    technologies: [
     
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    link:"https://www.kasavuaalayam.com"
  },
  {
    id: 5,
    name: "Portfolio Website",
    image: Portfolio, // Replace with actual image
    description: "A personal portfolio to showcase skills, projects, and achievements.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "CSS3", icon: null },
      { name: "JavaScript", icon: null }
    ],
    link:"https://sojanonelson.github.io/myportfolio"
  },
  {
    id: 6,
    name: "Online Learning Platform",
    image: OnlineLearn, // Replace with actual image
    description: "A platform for hosting and accessing online courses with video streaming and quizzes.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ]
  },

]

const Project = () => {
  return (
    <section id="projects" className="lg:h-auto bg-[#0a0a0a] p-10 pt-32 justify-center items-center flex flex-col">
      <Helmet>
        <title>Sojan  | Software Developer</title>
        <meta name="description" content="Portfolio of Sojan O Nelson, a skilled Software Developer." />
        <meta name="keywords" content="Sojan, Software Developer, Web Developer" />
      </Helmet>
      <h1 className="text-4xl text-center poppins-bold mb-8 text-[#00ff41]">Projects</h1>
      <div  className="grid grid-cols-1 lg:px-10 pt-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Link to={project.link}>
          <motion.div
            key={project.id}
            className="bg-[#0d1117] border border-[#30363d] rounded-lg p-2 lg:p-6 shadow-lg shadow-[#00ff41]/10 flex flex-col cursor-pointer  items-center text-center hover:border-[#00ff41] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="lg:text-2xl text-xl poppins-bold text-[#00ff41] mb-2">{project.name}</h2>
            <p className="poppins-regular text-sm lg:text-lg text-[#c9d1d9] mb-4">{project.description}</p>
            <h3 className="text-lg poppins-bold text-[#58a6ff] mb-2">Technologies:</h3>
            <ul className="flex flex-wrap   justify-center gap-4">

              {project.technologies.map((tech, index) => (
                <li key={index} className="flex items-center gap-2 text-[#8b949e] poppins-regular">
                  {tech.icon && <span className=" text-sm lg:text-xl text-[#00ff41]">{tech.icon}</span>}
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Project;