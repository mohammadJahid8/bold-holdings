import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const companies = [
  {
    name: "TESS",
    logo: "/tess.png",
    description:
      "Our tech division, specializing in web/app development, AI, and ML, delivering cutting-edge solutions for modern businesses",
    url: "https://tess.gg/",
  },
  {
    name: "Sion Labs",
    logo: "/sion.png",
    description:
      "A Web3 marketing pioneer, connecting businesses with Asia's top Web3 leaders through strategic collaborations",
    url: "https://sion.gg/",
  },
  {
    name: "HURUF",
    logo: "/huruf.png",
    description:
      "A creative powerhouse in marketing, branding, and event management, driving high-impact campaigns and brand activations",
    url: "https://huruf.gg/",
  },
  {
    name: "ESPACO",
    logo: "/espaco.png",
    description:
      "Experts in interior design and space planning, crafting personalized environments that blend style, comfort, and functionality",
    url: "https://espaco.gg/",
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
            className="flex flex-col items-center text-center p-6 bg-[#8B9596] rounded-3xl"
            variants={item}
          >
            <Link href={company.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={company.logo}
                alt={company.name}
                width={100}
                height={100}
                className="h-12 sm:h-16 object-contain transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1 cursor-pointer"
              />
            </Link>

            <p className="text-sm md:text-xl text-[#f7f9eb] max-w-md">
              {company.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
