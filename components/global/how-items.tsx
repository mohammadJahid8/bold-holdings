import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  {
    name: "TESS",
    logo: "/tess.png",
    description:
      "Our tech division, specializing in web/app development, AI, and ML, delivering cutting-edge solutions for modern businesses",
  },
  {
    name: "Sion Labs",
    logo: "/sion.png",
    description:
      "A Web3 marketing pioneer, connecting businesses with Asia's top Web3 leaders through strategic collaborations",
  },
  {
    name: "HURUF",
    logo: "/huruf.png",
    description:
      "A creative powerhouse in marketing, branding, and event management, driving high-impact campaigns and brand activations",
  },
  {
    name: "ESPACO",
    logo: "/espaco.png",
    description:
      "Experts in interior design and space planning, crafting personalized environments that blend style, comfort, and functionality",
  },
];

// Parent stagger variant
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Each item fade-in variant
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HowItems() {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-12 md:py-20 overflow-hidden">
      {/* Divider lines + arrows */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        <div className="flex items-center justify-center h-full max-w-xs mx-auto">
          <div className="w-full h-px border-t border-dashed border-gray-400 relative">
            <div className="absolute -left-2 text-gray-400 -top-3">
              <ArrowLeft />
            </div>
            <div className="absolute -right-2 text-gray-400 -top-3">
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full absolute top-0 bottom-0 max-h-[20rem] my-auto">
          <div className="h-full w-px border-l border-dashed border-gray-400 relative">
            <div className="absolute -top-2 text-gray-400 -left-3">
              <ArrowUp />
            </div>
            <div className="absolute -bottom-2 text-gray-400 -left-3">
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>

      {/* Grid items with stagger effect */}
      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {companies.map((company, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center p-6"
            variants={item}
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={100}
              height={100}
              className="h-12 sm:h-16 object-contain"
            />

            {/* <div className="font-bold text-2xl mb-4 text-white">
              {company.name}
            </div> */}
            <p className="text-sm md:text-xl text-[#bec5c5] max-w-md">
              {company.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
