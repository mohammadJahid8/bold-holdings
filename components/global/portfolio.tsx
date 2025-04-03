"use client";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import TypingText from "./typing";
import { motion } from "framer-motion";
import FadeInWhenVisible from "./fade-in";
import { ArrowRight } from "lucide-react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Portfolio() {
  const portfolio = [
    {
      name: "Tess",
      url: "https://tess.gg/",
    },
    {
      name: "Huruf",
      url: "https://huruf.gg/",
    },
    {
      name: "Sion Labs",
      url: "https://sion.gg/",
    },
    {
      name: "Espaco",
      url: "https://espaco.gg/",
    },
  ];

  return (
    <div
      id="portfolio"
      className="bg-accent text-primary px-4 md:px-12 pt-20 sm:pt-28 relative z-10 md:mr-8 portfolio-bg"
    >
      <FadeInWhenVisible>
        <h1
          className={cn(
            "text-3xl sm:text-5xl md:text-7xl font-bold mb-10 text-[#6e797a] text-start",
            dmSans.className
          )}
        >
          <span className="italic">
            <TypingText text="Portfolio" delay={0.1} />
          </span>
        </h1>
        <div className="border-t border-[rgba(110,121,122,.3)] py-14 sm:py-20">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {portfolio.map((data, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className={cn(
                  "group relative flex flex-col items-center justify-center text-center px-4 sm:px-6 min-h-[100px] sm:min-h-[200px] cursor-pointer transition-all",
                  idx !== portfolio.length - 1 &&
                    "md:border-r border-[rgba(110,121,122,.3)]"
                )}
              >
                {/* Default View */}
                <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white transition-opacity duration-300 group-hover:opacity-0">
                  {data.name}
                </h2>

                {/* Hover Reveal */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href={data.url}
                    target="_blank"
                    className="flex items-center space-x-2 text-xs sm:text-sm uppercase tracking-wide text-[#6e797a] hover:underline"
                  >
                    <span>View Website</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </FadeInWhenVisible>
    </div>
  );
}
