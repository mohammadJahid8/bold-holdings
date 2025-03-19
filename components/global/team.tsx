"use client";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import TypingText from "./typing";
import FadeInWhenVisible from "./fade-in";
import { TeamCard } from "./team-card";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Team() {
  return (
    <div
      id="team"
      className="bg-secondary text-primary px-4 md:px-12 pt-20 sm:pt-28 relative z-10 md:mr-8 team-bg"
    >
      <FadeInWhenVisible>
        <h1
          className={cn(
            "text-3xl sm:text-5xl md:text-7xl font-bold mb-10 text-[#6e797a] text-start",
            dmSans.className
          )}
        >
          <span className="italic">
            <TypingText text="Meet" />
          </span>{" "}
          <TypingText text="Our Team" delay={0.1} />
        </h1>
        <div className="border-t border-[rgba(110,121,122,.3)] py-14 sm:py-20">
          <TeamCard />
        </div>
      </FadeInWhenVisible>
    </div>
  );
}
