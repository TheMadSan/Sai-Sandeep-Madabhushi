// import Card from "./Card"
// import {PROJECTS} from '../constants';
// import { motion } from "framer-motion";


// const containerVariants = {
//     hidden : {opacity: 0, y: -20},
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.5, 
//             staggerChildren: 0.4
//         },
//     },
// }

// const itemVariants = {
//     hidden: {opacity: 0, y: 0.8},
//     visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
// }


// const Projects = () => {
//   return (
//     <div id='projects'>
//         <motion.h2 initial="hidden" whileInView="visible" variants={containerVariants} viewport={{once:true}} className="mt-20 text-center text-4xl font-semibold">Projects</motion.h2>
//         <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{once:true}} className="flex flex-wrap justify-center py-8">
//             {PROJECTS.map((project, index) => (
//                 <motion.div variants={itemVariants} key={index}>
//                     <Card image={project.image} title={project.title}
//                     subtitle={project.subtitle} link={project.link} /> 
//                 </motion.div>
//             ))}
//         </motion.div>
//     </div>
//   )
// }

// export default Projects


import { MdArrowOutward } from 'react-icons/md';
import { PROJECTS } from '../constants';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectsRef = useRef(null);

  // Function to handle smooth scroll into the Projects section when clicked
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="pt-20" id="projects" ref={projectsRef}>
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Projects</h2>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Scroll Indicator */}
        <div className="text-center mb-6">
          <p className="text-lg text-gray-600">Scroll horizontally to view more projects</p>
          <motion.div
            className="mx-auto mt-4 w-8 h-8 rounded-full border-2 border-gray-600 flex justify-center items-center"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 0.8,
              ease: 'easeInOut',
            }}
          >
            <span className="text-gray-600">→</span>
          </motion.div>
        </div>

        {/* Horizontal Scrollable Projects */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative w-80 shrink-0 overflow-hidden rounded-3xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="mb-2 text-xl">{project.title}</h3>
                <p className="mb-12 p-4">{project.subtitle}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                >
                  <div className="flex items-center">
                    <span>View on GitHub</span>
                    <MdArrowOutward />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
