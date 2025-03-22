"use client";
import React from "react";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import HowItems from "./how-items";
import TypingText from "./typing";
import FadeInWhenVisible from "./fade-in";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const How = () => {
  return (
    <div
      id="about"
      className="bg-muted text-primary px-4 md:px-12 pt-20 md:pt-28 relative z-10 md:mr-8 how-bg"
    >
      <FadeInWhenVisible>
        <h1
          className={cn(
            "text-3xl md:text-7xl font-bold mb-8 md:mb-10 text-secondary-foreground text-start md:text-end ",
            dmSans.className
          )}
        >
          <span className="italic">
            <TypingText text="How" />
          </span>{" "}
          <TypingText text="We Make It Happen" delay={0.1} />
        </h1>
        <div className="border-t border-[rgba(254,_249,_239,_.3)] py-12 md:py-20">
          <div className="flex flex-col gap-4 text-base md:text-3xl text-secondary-foreground md:max-w-[70%] font-light">
            <p>
              At{" "}
              <span className="text-accent-foreground font-medium">
                The Bold Holdings,
              </span>{" "}
              we strongly believe that success is never achieved alone.
            </p>
            <p>
              Our growth and accomplishments are made possible through the
              strength of our subsidiaries/partners, who play a vital role in
              shaping our journey.
            </p>
          </div>

          <HowItems />
        </div>
      </FadeInWhenVisible>
    </div>
  );
};

export default How;
