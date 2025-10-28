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
    <div className="bg-gradient-to-br from-[#0f0c29]/70 via-[#302b63]/70 to-[#24243e]/70 
                    border border-[#8A2BE2]/40 backdrop-blur-xl rounded-2xl 
                    p-8 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] 
                    transition-all duration-300">
      <div className="text-[#E0E0FF] text-sm mb-2 font-medium tracking-wide drop-shadow-[0_0_4px_#00ffff]">
        Live Performance
      </div>

      <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFD700] 
                      font-semibold text-xl mb-4 animate-pulse">
        CUMULATIVE RETURN: +125.7%
      </div>

      <div style={{ height: 180 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Tooltip
              contentStyle={{
                background:
                  "linear-gradient(135deg, rgba(15,12,41,0.9), rgba(48,43,99,0.9))",
                borderRadius: "10px",
                border: "1px solid rgba(0,255,255,0.4)",
                color: "#E0E0FF",
                fontSize: "12px",
                boxShadow: "0 0 10px rgba(255,0,255,0.4)",
              }}
            />
            <Line
              type="monotone"
              dataKey="y"
              stroke="url(#neonGradient)"
              strokeWidth={3}
              dot={false}
            />
            <defs>
              <linearGradient id="neonGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00FFFF" />
                <stop offset="50%" stopColor="#FF00FF" />
                <stop offset="100%" stopColor="#FFD700" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
