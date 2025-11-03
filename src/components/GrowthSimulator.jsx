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
    <div
      className="relative rounded-2xl p-6 mb-8 border border-[#2c2c34]/80 
                 bg-[#0b0b0f]/95 backdrop-blur-lg 
                 shadow-[0_0_40px_rgba(0,255,150,0.1)] overflow-hidden 
                 font-['JetBrains_Mono'] text-[#c8c8c8] transition-all duration-300 
                 hover:shadow-[0_0_60px_rgba(0,255,150,0.15)]"
    >
      {/* Matrix Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#00ff8866_1px,transparent_1px),linear-gradient(to_bottom,#00ff8866_1px,transparent_1px)] bg-[size:50px_50px]" />

      <h2
        className="text-xl md:text-2xl font-semibold mb-6 
                   text-transparent bg-clip-text bg-gradient-to-r 
                   from-[#00ff88] via-[#80ffcc] to-[#b0ffb0] 
                   "
      >
        Growth Simulator
      </h2>

      {/* Filter Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 relative z-10">
        <input
          type="date"
          className="p-2 rounded-md bg-[#111115]/90 text-[#b0ffb0] border border-[#00ff88]/30 
                     focus:ring-2 focus:ring-[#00ffaa]/50 outline-none transition-all duration-300"
        />
        <input
          type="date"
          className="p-2 rounded-md bg-[#111115]/90 text-[#b0ffb0] border border-[#00ff88]/30 
                     focus:ring-2 focus:ring-[#00ffaa]/50 outline-none transition-all duration-300"
        />
        <input
          placeholder="Initial Capital"
          className="p-2 rounded-md bg-[#111115]/90 text-[#b0ffb0] border border-[#00ff88]/30 
                     placeholder:text-[#5affc0]/50 focus:ring-2 focus:ring-[#00ffaa]/50 
                     outline-none transition-all duration-300"
        />
        <select
          className="p-2 rounded-md bg-[#111115]/90 text-[#b0ffb0] border border-[#00ff88]/30 
                     focus:ring-2 focus:ring-[#00ffaa]/50 outline-none transition-all duration-300"
        >
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
              tick={{ fill: "#88ffaa" }}
              axisLine={{ stroke: "#00ff88" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#88ffaa" }}
              axisLine={{ stroke: "#00ff88" }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background:
                  "linear-gradient(135deg, rgba(10,10,20,0.95), rgba(0,255,150,0.1))",
                border: "1px solid rgba(0,255,150,0.3)",
                borderRadius: "6px",
                color: "#b0ffb0",
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="url(#matrixLine)"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5, fill: "#00ffaa" }}
            />
            <defs>
              <linearGradient id="matrixLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00ff88" />
                <stop offset="50%" stopColor="#80ffcc" />
                <stop offset="100%" stopColor="#b0ffb0" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div
        className="flex flex-wrap justify-between mt-5 text-sm 
                   text-[#b0ffb0] relative z-10"
      >
        <div>
          ROI:{" "}
          <span className="font-semibold text-[#00ffaa]">
            +158%
          </span>
        </div>
        <div>
          Total Trades:{" "}
          <span className="font-semibold text-[#88ffaa]">
            85
          </span>
        </div>
        <div>
          Win Rate:{" "}
          <span className="font-semibold text-[#00ff88]">
            68%
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        className="relative z-10 mt-6 px-6 py-2.5 rounded-md bg-[#00ff88] 
                   text-[#0b0b0f] font-semibold uppercase tracking-wide 
                   hover:bg-[#00ffaa] hover:shadow-[0_0_25px_#00ffaa] 
                   transition-all duration-300"
      >
        Export CSV
      </button>
    </div>
  );
}
