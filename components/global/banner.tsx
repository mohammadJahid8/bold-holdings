"use client";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import FadeInWhenVisible from "./fade-in";
import TypingText from "./typing";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function Banner() {
  return (
    <FadeInWhenVisible>
      <section className="relative flex flex-col md:flex-row items-start justify-between text-white gap-8 md:gap-0">
        {/* Left Side - Description */}
        <h1
          className={cn(
            "text-[32px] sm:text-[48px] md:text-[72px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-tight sm:leading-[60px] md:leading-[90px] lg:leading-[120px] xl:leading-[135px] font-light text-left text-[#6e797a] w-full tracking-[-.02em] md:tracking-[-.04em]",
            dmSans.className
          )}
        >
          <span className="block">
            <span className="italic text-[#f8f4ea] text-[40px] sm:text-[64px] md:text-[80px] lg:text-[110px] xl:text-[130px] leading-tight sm:leading-[70px] md:leading-[95px] lg:leading-[125px] xl:leading-[140px]">
              <TypingText text="Our" />
            </span>{" "}
            <TypingText text="Approach:" delay={0.1} />
          </span>
          <span className="block">
            <TypingText text="Strategic, Insightful," delay={0.6} />
          </span>
          <span className="block">
            <TypingText text="Results-Driven" delay={1.5} />
          </span>
        </h1>

        <div className="w-full md:max-w-[30%]">
          <p className="text-base text-secondary-foreground font-light text-left md:text-right md:pt-3">
            We take pride in our expertise and our ability to adapt across
            industries. We don’t just solve problems—we create tailored,
            forward-thinking solutions that empower businesses to thrive.
          </p>
        </div>

        {/* Right Side - Hero Text */}
      </section>
    </FadeInWhenVisible>
  );
}
