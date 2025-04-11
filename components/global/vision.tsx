"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function VisionSection() {
  const projects = [
    {
      title: "Vision",
      description:
        "To lead the creation of pioneering ventures that drive industry innovation and accelerate growth on a global scale.",
    },
    {
      title: "Mission",
      description:
        "Building transformative businesses, solving challenges, and creating strategic connections for lasting success.",
    },
    {
      title: "Focus",
      description:
        "Venture building enables us to nurture and scale companies, turning innovative ideas into sustainable, thriving enterprises",
    },
  ];
  return (
    <div className="text-center">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 sm:mt-20"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="md:px-20 text-center"
          >
            <div
              className="inline-block px-8 py-2 mb-4 rounded-full text-lg font-bold text-black capitalize"
              style={{
                background: "linear-gradient(to right, #CFCBEE, #F4C2C1)",
              }}
            >
              {project.title}
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
