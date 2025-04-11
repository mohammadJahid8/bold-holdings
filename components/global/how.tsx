"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const companies = [
  {
    name: "TESS",
    logo: "/tess.svg",
    description:
      "Our tech division, specializing in web/app development, AI, and ML, delivering cutting-edge solutions for modern businesses",
    url: "https://tess.gg/",
  },
  {
    name: "HURUF",
    logo: "/huruf.svg",
    description:
      "A creative powerhouse in marketing, branding, and event management, driving high-impact campaigns and brand activations",
    url: "https://huruf.gg/",
  },
  {
    name: "Sion Labs",
    logo: "/sion.svg",
    description:
      "A Web3 marketing pioneer, connecting businesses with Asia's top Web3 leaders through strategic collaborations",
    url: "https://sion.gg/",
  },
  {
    name: "ESPACO",
    logo: "/espaco.svg",
    description:
      "Experts in interior design and space planning, crafting personalized environments that blend style, comfort, and functionality",
    url: "https://espaco.gg/",
  },
];

export default function HowWeMakeItHappen() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-muted text-primary px-4 md:px-16 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Column 1: Text */}
        <div className="lg:max-w-[400px] flex flex-col gap-8">
          <h2
            className={cn(
              "text-3xl md:text-6xl font-bold text-secondary-foreground",
              dmSans.className
            )}
          >
            <span className="italic">How</span> <br /> We Make It
            <br /> Happen
          </h2>
          <p className="text-secondary-foreground text-lg">
            At The Bold Holdings, we strongly believe that success is never
            achieved alone.
          </p>
          <p className="text-secondary-foreground text-lg">
            Our growth and accomplishments are made possible through the
            strength of our subsidiaries/partners, who play a vital role in
            shaping our journey.
          </p>
        </div>

        {/* Column 2: Logos + mobile text */}
        <div className="space-y-6 md:space-y-0 md:flex flex-col gap-6 items-center w-full">
          {companies.map((company, index) => (
            <div key={company.name}>
              <div
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="cursor-pointer transition-transform duration-200 hover:scale-[1.05] w-full"
              >
                <div className="rounded-full bg-[#E4C5D26E] p-1.5 md:p-3 w-full">
                  <div className="w-full md:w-[324px] h-[54px] md:h-[84.1px] flex items-center gap-3 px-6 py-2 md:py-4 rounded-full bg-gradient-to-r from-[#CFCBEE] to-[#F4C2C1]">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full md:max-w-[200px] h-full mx-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile-only description under each logo */}
              {activeIndex === index && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`mobile-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="block md:hidden mt-3 text-secondary-foreground"
                  >
                    <p className="text-base mb-2">{company.description}</p>
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-white"
                    >
                      View website →
                    </a>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Column 3: Desktop-only description */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            {activeIndex !== null && (
              <motion.div
                key={`desktop-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-secondary-foreground space-y-3"
              >
                <p className="text-base md:text-lg">
                  {companies[activeIndex].description}
                </p>
                <a
                  href={companies[activeIndex].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-white hover:underline"
                >
                  View website →
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
