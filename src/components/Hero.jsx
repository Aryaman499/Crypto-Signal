import React from "react";
import KPIChip from "./KPIChip";
import LivePerformance from "./LivePerformance";

export default function Hero() {
  return (
    <section
      className="relative mt-12 bg-[#0b0b0f]/95 border border-[#2c2c34] rounded-2xl 
                 p-10 shadow-[0_0_40px_rgba(0,255,200,0.05)] backdrop-blur-lg 
                 transition-all duration-300 overflow-hidden font-['JetBrains_Mono']"
    >
      {/* Subtle terminal grid background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#00ff8866_1px,transparent_1px),linear-gradient(to_bottom,#00ff8866_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Neon reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ff8820] via-[#00ffff15] to-[#00ffaa10] blur-3xl opacity-70 animate-pulse-slow" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight 
                      bg-clip-text bg-gradient-to-r  
                      text-[white] "
          >
            Crypto Data.  
            <span className="text-[#00ff88]"> Verified. Transparent.</span>
          </h1>

          <p className="text-[#a3a3a3] mt-5 text-sm md:text-base max-w-lg leading-relaxed tracking-wide">
            Precision-engineered crypto insights for traders who think in code.  
            Every signal is verifiable, every move transparent — built by{" "}
            <span className="text-[#00ff88] font-semibold">engineers</span> for{" "}
            <span className="text-[#00ffaa] font-semibold">engineers</span>.
          </p>

          {/* KPI Chips */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <KPIChip label="Signals Today" value="24" />
            <KPIChip label="Accuracy" value="92%" />
            <KPIChip label="Avg ROI" value="+1.7%" />
          </div>

          {/* Simple hacker-style button */}
          <button
            className="mt-10 px-8 py-3 rounded-md font-semibold text-[#0b0b0f] 
                       bg-[#00ff88] hover:bg-[#00ffaa] hover:shadow-[0_0_25px_#00ff88] 
                       transition-all duration-300 uppercase tracking-wider"
          >
            Explore Live Data ⚡
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center lg:justify-end">
          <LivePerformance />
        </div>
      </div>
    </section>
  );
}
