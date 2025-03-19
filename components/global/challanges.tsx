"use client";

import React from "react";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import ChallangesChart from "./challange-chart";
import { motion } from "framer-motion";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Stagger parent
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Child animation
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Challenges = () => {
  const businessChallenges = [
    {
      title: "Lack of Industry Networks",
      description:
        "Many companies have limited access to key stakeholders and mentors, hindering growth and industry entry, especially for startups.",
    },
    {
      title: "Risk Aversion",
      description:
        "Failure to assess and mitigate risks hinders bold decision-making.",
    },
    {
      title: "Knowledge Gap",
      description:
        "Many businesses overestimate their knowledge and overlook key success factors due to a lack of strategic awareness.",
    },
    {
      title: "Insufficient Funding",
      description:
        "Many businesses develop promising, viable ideas but face financial constraints in executing them.",
    },
  ];

  return (
    <div className="bg-secondary text-primary px-4 md:px-12 pt-20 challenges-bg relative">
      <div className="border-t border-[rgba(110,121,122,0.3)] py-14 sm:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "text-3xl sm:text-4xl font-bold mb-10 text-muted-foreground",
            dmSans.className
          )}
        >
          <span className="italic">Challenges</span> in today’s world
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Text List */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6 lg:col-span-1"
          >
            {businessChallenges.map((itemData, index) => (
              <motion.div key={index} variants={item}>
                <h3
                  className={cn(
                    "font-bold text-lg sm:text-xl text-muted-foreground",
                    dmSans.className
                  )}
                >
                  {itemData.title}
                </h3>
                <p className={cn("text-sm sm:text-base text-muted-foreground")}>
                  {itemData.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Chart */}
          <div className="lg:col-span-1">
            <ChallangesChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
