import React from "react";
import { VisionSection } from "./vision";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import FadeInWhenVisible from "./fade-in";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Mission = () => {
  const stats = [
    { value: "7+", label: "companies" },
    { value: "11+", label: "countries collaborated" },
    { value: "50+", label: "partnership" },
    { value: "200+", label: "projects" },
  ];

  return (
    <div className="bg-secondary text-primary px-4 md:px-12 pt-16 sm:pt-20">
      <FadeInWhenVisible>
        <div className="border-t border-[rgba(110,121,122,0.3)] py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          <div className="grid grid-cols-2 gap-6 place-items-center col-span-1">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h2
                  className={cn(
                    "text-2xl sm:text-3xl font-bold",
                    dmSans.className
                  )}
                >
                  {stat.value}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="col-span-2">
            <VisionSection />
          </div>
        </div>
      </FadeInWhenVisible>
    </div>
  );
};

export default Mission;
