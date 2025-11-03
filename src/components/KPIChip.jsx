import React from "react";

export default function KPIChip({ label, value }) {
  return (
    <div
      className="bg-[#0a0a0a]/80 border border-[#00ff88]/25 rounded-md px-4 py-3 min-w-[120px]
                 text-center font-['JetBrains_Mono'] text-[#b0ffb0]
                 shadow-[0_0_10px_rgba(0,255,136,0.05)] hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]
                 backdrop-blur-sm transition-all duration-300"
    >
      {/* Label */}
      <div className="text-xs uppercase tracking-wider text-[#00ff88]/70">
        {label}
      </div>

      {/* Value */}
      <div
        className="mt-1 text-lg font-semibold text-[#00ff88]
                   drop-shadow-[0_0_5px_rgba(0,255,136,0.4)]
                   tracking-tight select-none"
      >
        {value}
      </div>

      {/* Optional Subtle Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]
                      bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),
                           linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
                      bg-[size:20px_20px] rounded-md"></div>
    </div>
  );
}
