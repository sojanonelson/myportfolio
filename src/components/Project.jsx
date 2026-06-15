"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaSpotify, FaGlobe } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTensorflow, SiPostman, SiFirebase } from 'react-icons/si';

const liveProjects = [
  {
    id: 1,
    name: "Kasavu Aalayam",
    image: "/assets/project/Ecom.png",
    description: "A premium e-commerce platform for traditional and contemporary Indian ethnic wear, featuring a worldwide shipping system.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    link: "https://www.kasavuaalayam.com"
  },
  {
    id: 2,
    name: "Persona Gifts",
    image: "/assets/project/PersonaGifts.png",
    description: "A specialized e-commerce store for personalized gifts and prints based in the UK, offering custom product designs.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Stripe", icon: <FaGlobe /> }
    ],
    link: "https://personagifts.co.uk"
  }
];

const personalProjects = [
  {
    id: 1,
    name: "ChordBeats",
    image: "/assets/project/chordbeat.png",
    description: "A digital studio web application for creating music beats and virtual instruments.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Express.js", icon: <SiExpress /> }
    ],
    link: "https://chordbeat.vercel.app"
  },
  {
    id: 2,
    name: "Spotify Clone",
    image: "/assets/project/spotify.png",
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
    image: "/assets/project/Lara.jpg",
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
    name: "Portfolio Website",
    image: "/assets/project/Portfolio.png",
    description: "A personal portfolio to showcase skills, projects, and achievements.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "CSS3", icon: null },
      { name: "JavaScript", icon: null }
    ],
    link: "https://sojanonelson.github.io/myportfolio"
  },
  {
    id: 5,
    name: "Lunchify",
    image: "/assets/project/Lunchify.png",
    description: "A smart, simple lunch ordering system for teams and institutions, streamlining food management and coordination.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ]
  },
  {
    id: 6,
    name: "Online Learning Platform",
    image: "/assets/project/OnlineLearn.jpg",
    description: "A platform for hosting and accessing online courses with video streaming and quizzes.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ]
  },
];

const ProjectCard = ({ project, isProfessional }) => {
  const CardContent = (
    <motion.div
      className="bg-[#0d1117] border border-[#30363d] rounded-lg p-2 lg:p-6 shadow-lg shadow-[#00ff41]/10 flex flex-col cursor-pointer items-center text-center hover:border-[#00ff41] transition-colors duration-300 h-full relative"
      whileHover={{ scale: 1.05 }}
    >
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="lg:text-2xl text-xl poppins-bold text-[#00ff41] mb-2">{project.name}</h2>
      <p className="poppins-regular text-sm lg:text-lg text-[#c9d1d9] mb-4">{project.description}</p>
      
      <div className="flex-grow"></div>

      <div className="mb-4">
        <h3 className="text-lg poppins-bold text-[#58a6ff] mb-2">Technologies:</h3>
        <ul className="flex flex-wrap justify-center gap-4">
          {project.technologies.map((tech, index) => (
            <li key={index} className="flex items-center gap-2 text-[#8b949e] poppins-regular">
              {tech.icon && <span className="text-sm lg:text-xl text-[#00ff41]">{tech.icon}</span>}
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {isProfessional && project.link && (
        <div className="mt-4 pt-4 border-t border-[#30363d] w-full flex items-center justify-center gap-2 text-[#00ff41] group">
          <FaGlobe size={14} className="group-hover:animate-pulse" />
          <span className="text-sm font-medium hover:underline">
            {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
        </div>
      )}
    </motion.div>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

const Project = () => {
  return (
    <section id="projects" className="lg:h-auto bg-[#0a0a0a] p-10 pt-32 justify-center items-center flex flex-col">
      
      <h1 className="text-4xl text-center poppins-bold mb-12 text-[#00ff41]">Projects</h1>

      
      <div className="w-full max-w-7xl mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] bg-green-500/30 flex-grow"></div>
          <h2 className="text-2xl poppins-bold text-white whitespace-nowrap">Professional Work</h2>
          <div className="h-[1px] bg-green-500/30 flex-grow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {liveProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isProfessional={true} />
          ))}
        </div>
      </div>

    
      <div className="w-full max-w-7xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] bg-green-500/30 flex-grow"></div>
          <h2 className="text-2xl poppins-bold text-white whitespace-nowrap">Personal Projects</h2>
          <div className="h-[1px] bg-green-500/30 flex-grow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
