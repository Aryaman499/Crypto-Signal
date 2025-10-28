import React, { useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const demo = Array.from({ length: 12 }).map((_, i) => ({
  name: i,
  value: 10 + i * 3 + Math.random() * 5,
}));

export default function GrowthSimulator() {
  const [data] = useState(demo);

  return (
    <div className="relative rounded-2xl p-6 shadow-[0_0_25px_rgba(0,255,255,0.25)] border border-[#7df9ff]/30 bg-[radial-gradient(circle_at_top_left,_#0a0f1f,_#1b0033_80%)] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_45px_rgba(255,0,255,0.4)]">
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,255,0.15),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(0,255,255,0.15),transparent_60%)] pointer-events-none"></div>

      <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] via-[#d46bff] to-[#ff85ec] drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]">
        Growth Simulator
      </h2>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 relative z-10">
        <input
          type="date"
          className="p-2 rounded-md bg-[#0f1323]/80 text-[#d7f9ff] border border-[#2affea]/30 focus:ring-2 focus:ring-[#ff85ec] placeholder-[#7df9ff]/70 outline-none transition-all duration-300"
        />
        <input
          type="date"
          className="p-2 rounded-md bg-[#0f1323]/80 text-[#d7f9ff] border border-[#2affea]/30 focus:ring-2 focus:ring-[#ff85ec] placeholder-[#7df9ff]/70 outline-none transition-all duration-300"
        />
        <input
          placeholder="Initial Capital"
          className="p-2 rounded-md bg-[#0f1323]/80 text-[#d7f9ff] border border-[#ff85ec]/30 focus:ring-2 focus:ring-[#00eaff] placeholder-[#b3b3b3]/70 outline-none transition-all duration-300"
        />
        <select className="p-2 rounded-md bg-[#0f1323]/80 text-[#d7f9ff] border border-[#00eaff]/30 focus:ring-2 focus:ring-[#d46bff] outline-none transition-all duration-300">
          <option>All-in</option>
          <option>Fixed % per signal</option>
        </select>
      </div>

      {/* Chart */}
      <div style={{ height: 220 }} className="relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="name"
              tick={{ fill: "#9cf6f6" }}
              axisLine={{ stroke: "#2affea" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#9cf6f6" }}
              axisLine={{ stroke: "#2affea" }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background:
                  "linear-gradient(135deg, rgba(0,0,40,0.9), rgba(255,0,255,0.2))",
                border: "1px solid rgba(0,255,255,0.3)",
                borderRadius: "10px",
                color: "#d7f9ff",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="url(#holoGradient)"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: "#ff85ec" }}
            />
            <defs>
              <linearGradient id="holoGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00eaff" />
                <stop offset="50%" stopColor="#d46bff" />
                <stop offset="100%" stopColor="#ff85ec" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className="flex flex-wrap justify-between mt-5 text-sm text-[#e8e8ff] z-10 relative">
        <div>
          ROI:{" "}
          <span className="text-[#00eaff] font-semibold tracking-wide drop-shadow-[0_0_5px_#00eaff]">
            +158%
          </span>
        </div>
        <div>
          Total Trades:{" "}
          <span className="font-semibold text-[#ff85ec] drop-shadow-[0_0_5px_#ff85ec]">
            85
          </span>
        </div>
        <div>
          Win Rate:{" "}
          <span className="text-[#7df9ff] font-semibold tracking-wide drop-shadow-[0_0_5px_#7df9ff]">
            68%
          </span>
        </div>
      </div>

      {/* Download Button */}
      <button className="relative z-10 mt-6 px-6 py-2.5 rounded-md bg-gradient-to-r from-[#00eaff] via-[#d46bff] to-[#ff85ec] text-[#0a0f1f] font-semibold shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_35px_rgba(255,0,255,0.6)] hover:scale-[1.03] transition-all duration-300">
        Download CSV
      </button>
    </div>
  );
}
