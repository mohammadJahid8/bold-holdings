"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "../ui/chart";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function ChallengesChart() {
  const chartData = [
    { category: "Startup", percentage: 40 },
    { category: "Small Business", percentage: 35 },
    { category: "Medium Enterprise", percentage: 20 },
    { category: "Large Enterprise", percentage: 5 },
  ];

  return (
    <div className="w-full">
      <h2 className={cn("text-center text-xl font-bold", dmSans.className)}>
        Percentage (%) of businesses facing these challenges
      </h2>
      <ChartContainer
        config={{
          percentage: {
            label: "Percentage",
            color: "hsl(220, 13%, 91%)",
          },
        }}
        className="max-h-[350px]"
      >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 20, left: 0, bottom: 40 }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#e5e5e5"
            />
            <XAxis
              dataKey="category"
              axisLine={false}
              tickLine={false}
              tick={<CustomTick x={0} y={0} payload={{ value: "" }} />}
              tickMargin={12}
              interval={0} // This forces all labels to show
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}%`}
              ticks={[0, 5, 20, 35, 40]}
              domain={[0, 40]}
              tick={{ fontSize: 12 }}
            />
            <Bar
              dataKey="percentage"
              fill="var(--color-percentage)"
              barSize={40}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
const CustomTick = (props: {
  x: number;
  y: number;
  payload: { value: string };
}) => {
  const { x, y, payload } = props;
  const words = payload.value.split(" ");
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fontSize={11} fill="#666">
        {words.map((word: string, index: number) => (
          <tspan key={index} x="0" dy={index === 0 ? 0 : 12}>
            {word}
          </tspan>
        ))}
      </text>
    </g>
  );
};
