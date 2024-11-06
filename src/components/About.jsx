import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Profile from "../assets/profile.jpg";
import { Helmet } from 'react-helmet';

const About = () => {
  const [activeSection, setActiveSection] = useState("skills");
  const [isHovered, setIsHovered] = useState(false);

  const skills = {
    frontend: [
      "React.js",
      "Next.js",
      "Vite.js",
      "Python",
      "Tailwind CSS",
      "Bootstrap",
      "Figma",
      "Photoshop",
    ],
    backend: ["Node.js", "Python"],
    database: ["MongoDB"],
    developmentTools: ["Visual Studio Code", "Git","Postman","Insomania"],
  };

  const education = (
    <div className="text-white mb-2">
      <p>
        BCA in Cloud Computing & Ethical Hacking - East West College of Management, Bangalore (09/2022 - Present)
      </p>
    </div>
  );

  const certifications = (
    <ul className="list-disc list-inside text-white">
      <li>Internship Completion Certificate (01/2023 - 03/2023)</li>
      <li>Attended Cyber Security Webinar (02/2023)</li>
    </ul>
  );

  const projects = (
    <ul className="list-disc list-inside text-white mb-6">
      <li>ChordBeats: A digital studio web application for creating music beats and virtual instruments.</li>
      <li>Personal Voice Assistant: A voice-controlled application to perform various computer tasks.</li>
      <li>Chatbot: Frontend and backend integrated with OpenAI API</li>
      <li>Stack Overflow Clone: A replica of Stack Overflow with full Q&A features</li>
      <li>Tourist Agency Portfolio: Portfolio for a tourist agency showcasing destinations and services</li>
      <li>E-commerce Web Application: An online store with cart, checkout, and user authentication</li>
      <a href="/projects" className="poppins-medium text-orange-400 animate-pulse">Know more</a>
    </ul>
  );

  const tabIndex = {
    skills: 0,
    education: 1,
    certifications: 2,
    projects: 3,
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row justify-center px-10 items-center p-5 md:p-10 bg-[#1a1a1a]"
    >
       <Helmet>
    <title>Sojan O Nelson | Software Developer</title>
    <meta name="description" content="Portfolio of Sojan O Nelson, a skilled Software Developer." />
    <meta name="keywords" content="Sojan, Software Developer, Web Developer" />
    
  </Helmet>
      <div className="w-full md:w-1/3 mx-2 flex mb-5 md:mb-0">
        
         <motion.img
      src={Profile}
      alt="Sojan"
      className={`w-2/3 md:w-[70%] hidden lg:block justify-self-end mx-10 transition-all duration-2000 border-white border-2 p-1 rounded-full ${
        isHovered ? "" : "grayscale "
      }`}
      onHoverStart={() => setIsHovered(true)}
      transition={{ duration: 2 }}
    />
      </div>
      <div className="flex flex-col h-full w-full md:w-2/3 mx-2">
        <h1 className="text-left select-none text-3xl md:text-4xl poppins-bold text-white mb-4">
          About Me
        </h1>
        <motion.img
          src={Profile}
          alt="Sojan O Nelson - Software Developer"
          className="w-1/3 lg:hidden md:w-[70%] border-white border-2 my-4 rounded-full "
         
          transition={{ duration: 0.3 }}
        />

        <p className="text-sm md:text-xl select-none text-white poppins-light text-justify mb-4">
          I specialize in using modern technologies such as React.js, Next.js,
          and Node.js to build dynamic applications that are both visually
          appealing and functionally robust. My experience spans across various
          domains, including web development, UI/UX design, and full-stack
          integration. I enjoy collaborating with teams to bring ideas to life,
          consistently delivering high-quality work that meets deadlines and
          exceeds expectations.
        </p>

        <div className="flex flex-wrap space-x-2 md:space-x-6 mb-6 select-none relative">
          {Object.keys(tabIndex).map((section) => (
            <button
              key={section}
              className={`relative select-none  text-lg text-white ${activeSection === section ? "font-bold" : ""} mb-2 md:mb-0`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <motion.div
                  className="absolute left-0 -bottom-1 w-full h-1 bg-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%", left: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {activeSection === "skills" && (
            <div>
              <h2 className="text-3xl text-white font-bold select-none mb-4">Skills</h2>
              <div className="grid md:grid-cols-2 select-none  grid-cols-2 lg:flex-row lg:flex gap-6">
                <div className="text-white mb-6">
                  <h3 className="text-xl font-semibold text-orange-400">Frontend:</h3>
                  <ul className="list-disc list-inside">
                    {skills.frontend.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-white mb-6">
                  <h3 className="text-xl font-semibold text-orange-400">Backend:</h3>
                  <ul className="list-disc list-inside">
                    {skills.backend.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-white mb-6">
                  <h3 className="text-xl font-semibold text-orange-400">Database:</h3>
                  <ul className="list-disc list-inside">
                    {skills.database.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-white mb-6">
                  <h3 className="text-xl font-semibold text-orange-400">Development Tools:</h3>
                  <ul className="list-disc list-inside">
                    {skills.developmentTools.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          {activeSection === "education" && (
            <div>
              <h2 className="text-3xl text-white font-bold mb-4">Education</h2>
              {education}
            </div>
          )}
          {activeSection === "certifications" && (
            <div>
              <h2 className="text-3xl text-white font-bold mb-4">Certifications</h2>
              {certifications}
            </div>
          )}
          {activeSection === "projects" && (
            <div>
              <h2 className="text-3xl text-white font-bold mb-4">Projects</h2>
              {projects}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
