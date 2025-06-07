import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Code2, 
  Globe, 
  GraduationCap, 
  Users, 
  Briefcase, 
  Heart, 
  Brain, 
  Bot,
  Youtube,
  Database,
  Smartphone
} from "lucide-react";

const CareerRouteMap = () => {
  const milestones = [
    {
      year: "10th Grade",
      title: "Introduction to Hacking",
      description: "Started learning about hacking. Created a YouTube channel named 'Code Brother' to share knowledge on ethical hacking and Python. Videos were removed by YouTube due to guideline violations.",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      shadowColor: "shadow-red-500/50"
    },
    {
      year: "10th Grade Continued",
      title: "Self-Learning",
      description: "Used Google, YouTube, TryHackMe, and Hack The Box to explore penetration testing. Began learning Python.",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/50"
    },
    {
      year: "11th - 12th Grade",
      title: "Web Development",
      description: "Chose Computer Science stream. Learned JavaScript and web development. Created simple projects and portfolio pages using HTML, including audio features.",
      icon: Globe,
      color: "from-orange-500 to-yellow-500",
      shadowColor: "shadow-orange-500/50"
    },
    {
      year: "2022",
      title: "Bachelor's Degree (BCA)",
      description: "Enrolled in East West College, Bangalore, specializing in Cloud Computing and Cyber Security.",
      icon: GraduationCap,
      color: "from-purple-500 to-indigo-500",
      shadowColor: "shadow-purple-500/50"
    },
    {
      year: "2022",
      title: "Collaboration & Cybersecurity",
      description: "Collaborated with friend Devanand (Backend Developer) to learn software development systematically. Continued cybersecurity exploration.",
      icon: Users,
      color: "from-teal-500 to-green-500",
      shadowColor: "shadow-teal-500/50"
    },
    {
      year: "Later in 2022",
      title: "Full Stack Developer at Fosoft",
      description: "Worked on web and mobile apps using React Native. Mentored interns and shared knowledge.",
      icon: Briefcase,
      color: "from-emerald-500 to-lime-500",
      shadowColor: "shadow-emerald-500/50"
    },
    {
      year: "Ongoing",
      title: "Peer Support & LinkedIn Community",
      description: "Help friends and LinkedIn connections by resolving doubts and offering guidance in software development and cybersecurity.",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      shadowColor: "shadow-pink-500/50"
    },
    {
      year: "BCA Curriculum",
      title: "Machine Learning & Algorithms",
      description: "Learning how to build ML models using KNN, K-Means, and Regression. Practicing with Python, Scikit-learn, and TensorFlow.",
      icon: Brain,
      color: "from-violet-500 to-purple-500",
      shadowColor: "shadow-violet-500/50"
    },
    {
      year: "Future Goal",
      title: "Build Personal AI Assistant",
      description: "Plan to build a voice-enabled AI personal assistant capable of executing tasks, answering questions, and integrating with apps on my local system.",
      icon: Bot,
      color: "from-cyan-500 to-blue-500",
      shadowColor: "shadow-cyan-500/50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -90,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <section id="career" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-green-400 to-green-500 bg-clip-text text-transparent">
            Career Route Map
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Journey through my development path from ethical hacking to full-stack development
          </p>
        </motion.div>

        {/* Main Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Green Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
            <motion.div
              className="w-full bg-gradient-to-b from-green-400 via-cyan-400 to-blue-500 rounded-full shadow-lg shadow-green-500/50"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          {/* Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative mb-16 ${isLeft ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:text-left'}`}
                  style={{ perspective: "1000px" }}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                    whileHover={{ 
                      scale: 1.3, 
                      rotateY: 360,
                      boxShadow: "0 0 30px rgba(34, 197, 94, 0.8)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} p-4 ${milestone.shadowColor} shadow-2xl border-4 border-white/20 backdrop-blur-sm`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className={`relative max-w-lg ${isLeft ? 'md:ml-auto md:mr-20' : 'md:ml-20'} mx-4 md:mx-0`}
                    whileHover={{ 
                      y: -10,
                      rotateX: 5,
                      rotateY: isLeft ? -5 : 5,
                      scale: 1.02
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-green-500/20 transition-all duration-500">
                      {/* Glowing Border Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 via-transparent to-blue-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                      
                      <div className="relative z-10">
                        <motion.div
                          className="flex items-center gap-3 mb-4"
                          initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full text-sm font-semibold text-green-400 border border-green-500/30">
                            {milestone.year}
                          </span>
                        </motion.div>
                        
                        <motion.h3
                          className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {milestone.title}
                        </motion.h3>
                        
                        <motion.p
                          className="text-gray-300 leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {milestone.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[Code2, Database, Smartphone, Youtube, Shield, Brain].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute text-gray-600/20"
              style={{
                left: `${20 + (index * 15)}%`,
                top: `${10 + (index * 12)}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
            >
              <Icon size={48} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerRouteMap;