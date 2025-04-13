"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
      "Our tech division delivers smart, scalable digital solutions to meet the evolving needs of modern businesses. We offer services such as web and app development, AI and ML integration, plus tailored tech consulting—helping companies grow and adapt in a rapidly changing digital landscape.",
    url: "https://tess.gg/",
  },
  {
    name: "HURUF",
    logo: "/huruf.svg",
    description:
      "A creative powerhouse in marketing, branding, and event management, we deliver high-impact campaigns and brand activations. From concept to execution, we craft meaningful experiences that enhance brand identity and foster deeper engagement with communities.",
    url: "https://huruf.gg/",
  },
  {
    name: "Sion Labs",
    logo: "/sion.svg",
    description:
      "A next-gen venture firm that helps businesses leverage Web3 and Distributed Ledger Technology (DLT) to thrive in the digital economy. Through talent development, strategic collaborations, and innovative solutions, we foster a creative, transparent, and trust-driven environment.",
    url: "https://sion.gg/",
  },
  {
    name: "ESPACO",
    logo: "/espaco.svg",
    description:
      "Strongly focused on interior design, space planning, event management, and furniture manufacturing. As experts in crafting personalized environments, we blend style, comfort, and functionality to enhance spaces and create memorable experiences for clients across various industries.",
    url: "https://espaco.space/",
  },
];

export default function HowWeMakeItHappen() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="portfolio"
      className="bg-muted text-primary px-4 md:px-16 py-16"
    >
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
        <div className="col-span-2 space-y-10 w-full">
          {companies.map((company, index) => (
            <motion.div
              layout="position"
              key={`company-${index}`}
              className="flex flex-col md:flex-row md:items-center md:justify-start gap-6"
            >
              {/* Clickable Logo */}
              <div
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="cursor-pointer transition-transform duration-200 hover:scale-[1.05]"
              >
                <div className="rounded-full bg-[#E4C5D26E] p-1.5 md:p-3 w-full md:w-fit">
                  <div className="w-full md:w-[324px] h-[54px] md:h-[84.1px] flex items-center gap-3 px-6 py-2 md:py-4 rounded-full bg-gradient-to-r from-[#CFCBEE] to-[#F4C2C1]">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full  max-w-[150px] md:max-w-[200px] h-full mx-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Description (mobile & desktop beside logo) */}
              <motion.div
                layout
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  height: activeIndex === index ? "auto" : 0,
                  marginTop: activeIndex === index ? 0 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden text-secondary-foreground"
              >
                <div className={activeIndex === index ? "block" : "hidden"}>
                  <p className="text-base md:text-lg mb-2">
                    {company.description}
                  </p>
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-white hover:underline"
                  >
                    View website →
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
