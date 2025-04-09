"use client";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import TypingText from "./typing";
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

export default function Helped() {
  const projects = [
    {
      id: 1,
      title: "Project #1",
      description:
        "Assisted a Thailand-based client with technology solutions and land commercialization.",
      images: ["/tess.png", "/sion.png", "/huruf.png"],
    },
    {
      id: 2,
      title: "Project #2",
      description:
        "Successfully reduced a local florist CPA while increasing ROAS.",
      images: ["/tess.png", "/huruf.png"],
    },
    {
      id: 3,
      title: "Project #3",
      description: "Local Venture Space Commercialization.",
      images: ["/tess.png", "/huruf.png", "/espaco.png"],
    },
    {
      id: 4,
      title: "Project #4",
      description:
        "Developed an Order Flow Management system for a US client to support liquidity provision.",
      images: ["/tess.png", "/sion.png"],
    },
  ];

  return (
    <div className="bg-primary text-primary px-4 md:px-12 pt-20 relative z-10">
      <div className="border-t border-[rgba(254,_249,_239,_.3)] py-14 sm:py-20">
        <h1
          className={cn(
            "text-3xl sm:text-4xl font-bold mb-10 text-white",
            dmSans.className
          )}
        >
          <span className="italic">
            <TypingText text="Esteemed" />
          </span>{" "}
          <TypingText text="Clients we've helped" delay={0.1} />
        </h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className={cn(
                "bg-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full",
                (project.id === 2 || project.id === 4) && "bg-[#8B9596]"
              )}
            >
              <div>
                <h3
                  className={cn(
                    "font-semibold text-lg mb-2 text-white",
                    dmSans.className
                  )}
                >
                  {project.title}
                </h3>
                <p className="text-white">{project.description}</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                {project.images.map((image) => (
                  <div
                    key={image}
                    className="max-w-20 w-full sm:max-w-24 aspect-square flex justify-center items-center"
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-12 sm:h-14 object-contain"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
