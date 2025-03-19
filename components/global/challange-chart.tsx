"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer } from "../ui/chart";

export default function ChallangesChart() {
  const chartData = [
    { category: "Startup", percentage: 40 },
    { category: "Small Business", percentage: 35 },
    { category: "Medium Enterprise", percentage: 20 },
    { category: "Large Enterprise", percentage: 5 },
  ];
  return (
    <div className="w-full">
      <ChartContainer
        config={{
          percentage: {
            label: "Percentage",
            color: "hsl(220, 13%, 91%)",
          },
        }}
        className="max-h-[350px]"
      >
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
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
            tick={{ fontSize: 12 }}
            tickMargin={10}
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
            radius={0}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
