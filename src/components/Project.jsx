import React from 'react';
import { motion } from 'framer-motion';
import ChordBeat from "../assets/project/chordbeat.png";
import { Helmet } from 'react-helmet';

const projectsData = [
  { id: 1, name: "ChordBeats", image: ChordBeat, description: "A digital studio web application for creating music beats and virtual instruments." },
  { id: 2, name: "Personal Voice Assistant", image: ChordBeat, description: "A voice-controlled application to perform various computer tasks." },
  { id: 3, name: "Personal Voice Assistant", image: ChordBeat, description: "A voice-controlled application to perform various computer tasks." },
  { id: 4, name: "Personal Voice Assistant", image: ChordBeat, description: "A voice-controlled application to perform various computer tasks." },
  { id: 5, name: "Personal Voice Assistant", image: ChordBeat, description: "A voice-controlled application to perform various computer tasks." },
  { id: 6, name: "Personal Voice Assistant", image: ChordBeat, description: "A voice-controlled application to perform various computer tasks." },
  { id: 7, name: "Personal Voice Assistant", image: ChordBeat, description: "A voice-controlled application to perform various computer tasks." },
  { id: 8, name: "Personal Voice Assistant", image: ChordBeat, description: "A voice-controlled application to perform various computer tasks." },
  { id: 9, name: "Personal Voice Assistant", image: ChordBeat, description: "A voice-controlled application to perform various computer tasks." },
  { id: 10, name: "Personal Voice Assistant", image: ChordBeat, description: "A voice-controlled application to perform various computer tasks." },
  { id: 11, name: "Personal Voice Assistant", image: ChordBeat, description: "A voice-controlled application to perform various computer tasks." },
];

const Project = () => {
  return (
    <section id="projects" className="h-auto bg-[#101010] p-10 pt-32">
       <Helmet>
    <title>Sojan O Nelson | Software Developer</title>
    <meta name="description" content="Portfolio of Sojan O Nelson, a skilled Software Developer." />
    <meta name="keywords" content="Sojan, Software Developer, Web Developer" />
    
  </Helmet>
      <h1 className="text-4xl text-center poppins-bold mb-8 text-white">Projects</h1>
      <div className="px-5 sm:px-10 lg:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <motion.div
              className="absolute inset-0 flex items-center rounded-lg justify-center bg-opacity-100 text-white text-lg font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {project.description}
            </motion.div>
            <h2 className="mt-2 text-center text-xl text-white">{project.name}</h2>
            <p className="text-center text-gray-400">{project.description}</p> {/* Project description */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
