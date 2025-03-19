"use client";
import React from "react";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import TypingText from "./typing";
import FadeInWhenVisible from "./fade-in";
import { WorldMapSection } from "./world-map";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Global = () => {
  return (
    <div className="bg-muted-foreground text-primary px-4 md:px-12 pt-20 sm:pt-28 relative global-bg">
      <FadeInWhenVisible>
        <h1
          className={cn(
            "text-3xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-10 text-secondary-foreground text-start",
            dmSans.className
          )}
        >
          <span className="italic">
            <TypingText text="Global" />
          </span>{" "}
          <TypingText text="Clientele" delay={0.1} />
        </h1>
        <div className="border-t border-[rgba(254,_249,_239,_.3)] py-12 sm:py-20">
          <div className="flex flex-col gap-4 text-base sm:text-2xl md:text-3xl text-secondary-foreground max-w-full sm:max-w-[85%] md:max-w-[70%] font-light">
            <p>
              <span className="text-accent-foreground font-medium">
                The BOLD Holdings,
              </span>{" "}
              is fully committed to expanding its global footprint and providing
              world-class professional services to clients in every corner of
              the world.
            </p>
          </div>

          <div className="mt-12">
            <WorldMapSection />
          </div>
        </div>
      </FadeInWhenVisible>
    </div>
  );
};

export default Global;
