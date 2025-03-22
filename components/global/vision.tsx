"use client";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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
        "To lead the creation of pioneering ventures that drive industry innovation and accelerate growth on global scale.",
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
      <h3
        className={cn(
          "text-sm sm:text-base font-semibold text-muted",
          dmSans.className
        )}
      >
        The Bold Holdings Vision
      </h3>
      <h1
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold mt-2",
          dmSans.className
        )}
      >
        At your side
      </h1>
      <h2
        className={cn(
          "text-5xl sm:text-6xl md:text-7xl font-bold mt-2",
          dmSans.className
        )}
      >
        2030
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 sm:mt-12 md:hidden"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item} className="px-4 sm:px-2">
            <h4
              className={cn(
                "text-lg sm:text-xl text-muted font-bold tracking-wide mt-4 arrow-cell mb-2"
              )}
            >
              {project.title}
            </h4>
            <p
              className={cn(
                "mt-6 sm:mt-8 text-muted tracking-wide leading-relaxed text-sm sm:text-base"
              )}
            >
              {project.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Wrapper for responsive switch */}
      <div className="hidden sm:table w-full mt-8 sm:mt-12">
        {/* HEAD section as stacked items on mobile */}
        <div className="flex flex-col sm:table-header-group">
          <div className="flex  sm:table-row">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative bg-accent text-center px-4 py-2 text-xs sm:text-base font-bold text-gray-800 arrow-cell sm:table-cell `}
              >
                <div className="flex items-center justify-center gap-2">
                  {project.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BODY section as stacked items on mobile */}
        <div className="flex flex-col sm:table-row-group">
          <div className="flex sm:table-row">
            {projects.map((project, index) => (
              <div
                key={index}
                className="px-4 py-4 text-xs sm:text-base text-muted leading-relaxed sm:table-cell"
              >
                {project.description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
