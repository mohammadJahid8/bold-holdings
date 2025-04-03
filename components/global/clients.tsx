"use client";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import TypingText from "./typing";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// upto 34 clients
const clients = [
  {
    name: "client-1",
    logo: "/client-1.png",
  },
  {
    name: "client-2",
    logo: "/client-2.jpg",
  },
  {
    name: "client-3",
    logo: "/client-3.png",
  },
  {
    name: "client-4",
    logo: "/client-4.png",
  },
  {
    name: "client-5",
    logo: "/client-5.png",
  },
  {
    name: "client-6",
    logo: "/client-6.png",
  },
  {
    name: "client-7",
    logo: "/client-7.png",
  },
  {
    name: "client-8",
    logo: "/client-8.png",
  },
  {
    name: "client-9",
    logo: "/client-9.png",
  },
  {
    name: "client-10",
    logo: "/client-10.png",
  },
  {
    name: "client-11",
    logo: "/client-11.png",
  },
  {
    name: "client-12",
    logo: "/client-12.png",
  },
  // {
  //   name: "client-13",
  //   logo: "/client-13.png",
  // },
  {
    name: "client-14",
    logo: "/client-14.png",
  },
  {
    name: "client-15",
    logo: "/client-15.png",
  },
  {
    name: "client-16",
    logo: "/client-16.png",
  },
  {
    name: "client-17",
    logo: "/client-17.png",
  },
  {
    name: "client-18",
    logo: "/client-18.png",
  },
  {
    name: "client-19",
    logo: "/client-19.png",
  },
  {
    name: "client-20",
    logo: "/client-20.png",
  },
  {
    name: "client-21",
    logo: "/client-21.png",
  },
  {
    name: "client-22",
    logo: "/client-22.png",
  },
  {
    name: "client-23",
    logo: "/client-23.png",
  },
  {
    name: "client-24",
    logo: "/client-24.png",
  },
  {
    name: "client-25",

    logo: "/client-25.png",
  },
  {
    name: "client-26",
    logo: "/client-26.png",
  },
  {
    name: "client-27",
    logo: "/client-27.png",
  },
  {
    name: "client-28",
    logo: "/client-28.png",
  },
  {
    name: "client-30",
    logo: "/client-30.png",
  },
  {
    name: "client-31",
    logo: "/client-31.png",
  },
  {
    name: "client-32",
    logo: "/client-32.png",
  },
  {
    name: "client-33",
    logo: "/client-33.png",
  },
  {
    name: "client-34",
    logo: "/client-34.png",
  },
];

export default function Clients() {
  return (
    <div className="bg-primary text-primary px-4 sm:px-6 md:px-0 pt-20">
      <div className="border-t border-[rgba(254,_249,_239,_.3)] py-20">
        <h1
          className={cn(
            "text-3xl sm:text-4xl font-bold mb-16 text-white text-center",
            dmSans.className
          )}
        >
          <span className="italic">
            <TypingText text="Notable" />
          </span>{" "}
          <TypingText text="Clients" delay={0.1} />
        </h1>
        <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={clients} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
}
