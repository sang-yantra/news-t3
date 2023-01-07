import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { curveCardinal } from "d3-shape";
import { HourEntity } from "banner";

const cardinal = curveCardinal.tension(0.2);
interface ILineGraph {
  data: HourEntity[];
}
function LineGraph({ data }: ILineGraph) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="time" />
        <YAxis />
        {/* <ReferenceLine
          y={ymax}
          label="Max"
          stroke="red"
          strokeDasharray="3 3"
        /> */}
        <Tooltip />
        {/* <Area
          type="monotone"
          dataKey="open"
          stroke="rgb(104 243 168)"
          fill="lightgreen"
          fillOpacity={0.3}
          strokeWidth="3px"
        /> */}
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2A2A72" stopOpacity="1" />
            <stop offset="100%" stopColor="#009FFD" stopOpacity="1" />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="temp_c"
          stroke="rgb(104 243 168)"
          fill="url(#grad2)"
          fillOpacity={0.8}
          strokeWidth="2px"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default LineGraph;
