import React from "react";

export default function KPIChip({ label, value }) {
  return (
    <div className="bg-gradient-to-r from-[#0f0c29]/60 via-[#302b63]/60 to-[#24243e]/60 backdrop-blur-xl 
                    border border-[#8A2BE2]/40 rounded-xl px-4 py-3 min-w-[120px] text-center 
                    shadow-[0_0_15px_rgba(138,43,226,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] 
                    transition-all duration-300">
      <div className="text-[#D1C4E9] text-xs font-medium uppercase tracking-wide drop-shadow-[0_0_5px_#00ffff]">
        {label}
      </div>
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFD700] 
                      text-xl font-semibold mt-1 animate-pulse">
        {value}
      </div>
    </div>
  );
}
