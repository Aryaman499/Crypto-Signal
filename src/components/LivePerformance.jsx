import React from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { x: 0, y: 30 },
  { x: 1, y: 40 },
  { x: 2, y: 35 },
  { x: 3, y: 60 },
  { x: 4, y: 50 },
  { x: 5, y: 80 },
  { x: 6, y: 70 },
];

export default function LivePerformance() {
  return (
    <div
      className="relative bg-[#0a0a0a]/90 border border-[#00ff88]/20 rounded-md 
                 p-10 mr-16 font-['JetBrains_Mono'] text-[#b0ffb0] 
                 shadow-[0_0_20px_rgba(0,255,136,0.05)] 
                 hover:shadow-[0_0_25px_rgba(0,255,136,0.15)] 
                 transition-all duration-300 overflow-hidden"
    >
      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]
                   bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),
                        linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
                   bg-[size:20px_20px]"
      ></div>

      {/* Header */}
      <div className="relative text-xs uppercase tracking-widest text-[#00ff88]/70 mb-2">
        Live Performance
      </div>

      <div className="relative text-[#00ff88] text-xl font-semibold mb-5">
        CUMULATIVE RETURN: +125.7%
      </div>

      {/* Chart */}
      <div className="relative" style={{ height: 180 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Tooltip
              contentStyle={{
                background: "rgba(10,10,10,0.9)",
                border: "1px solid #00ff88",
                borderRadius: "4px",
                color: "#b0ffb0",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "12px",
              }}
              cursor={{ stroke: "#00ff88", strokeWidth: 1, opacity: 0.2 }}
            />
            <Line
              type="monotone"
              dataKey="y"
              stroke="url(#matrixGradient)"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
            <defs>
              <linearGradient id="matrixGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00ff88" />
                <stop offset="100%" stopColor="#00ffaa" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
