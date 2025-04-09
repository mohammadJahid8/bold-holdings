"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

const DottedWave = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const heights = [
    170, 176, 176, 184, 182, 190, 194, 190, 200, 196, 200, 215, 213, 227, 240,
    240, 257, 240, 260, 258, 260, 258, 256, 256, 253, 247, 243, 227, 222, 222,
    170, 160, 146, 131, 116, 103, 93, 77, 68, 55, 47,
  ];

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const index = Math.floor(relativeX / 18);
    setHoverIndex(index);
  };

  return (
    <svg
      className="w-max h-[170px] md:h-[400px]"
      viewBox={`0 0 ${heights.length * 18} ${isMobile ? 300 : 400}`}
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverIndex(null)}
    >
      {heights.map((h, i) => {
        const isNear = hoverIndex !== null && Math.abs(i - hoverIndex) <= 2;

        return (
          <motion.line
            key={i}
            x1={i * 18}
            y1={400 - h}
            x2={i * 18}
            y2={400}
            stroke={isNear ? "#6e6e6e" : "#48474c"}
            strokeWidth="3"
            strokeDasharray="2 4"
            animate={{
              scaleY: isNear ? 1.25 : 1,
              transition: { duration: 0.3 },
            }}
            style={{ transformOrigin: "bottom center" }}
          />
        );
      })}
    </svg>
  );
};

export default DottedWave;
