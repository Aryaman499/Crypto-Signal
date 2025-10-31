import React from "react";
import KPIChip from "./KPIChip";
import LivePerformance from "./LivePerformance";

export default function Hero() {
  return (
    <section className="relative mt-8 bg-[#0c0c12]/90 border border-[#2a2a3b] rounded-1xl p-10 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-300 overflow-hidden">

      {/* Neon background aura */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff80bf20] via-[#80d0ff15] to-[#a680ff20] blur-3xl opacity-70 animate-pulse-slow" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff80bf] via-[#80d0ff] to-[#a680ff] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Transparent Crypto{" "}
            <span className="text-white">Signals</span>
          </h1>

          <p className="text-[#bfbfd1] mt-5 text-lg max-w-lg leading-relaxed">
            Verifiable On-Chain. Real-Time. Secure.  
            Empowering traders with <span className="text-[#80d0ff] font-medium">clarity</span>, <span className="text-[#ff80bf] font-medium">accuracy</span>, and <span className="text-[#a680ff] font-medium">trust</span>.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <KPIChip label="Signals Today" value="24" />
            <KPIChip label="Win Rate Last 30D" value="78%" />
            <KPIChip label="Avg ROI" value="+1.2%" />
          </div>

          <button className="mt-8 px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#ff80bf] via-[#80d0ff] to-[#a680ff] hover:shadow-[0_0_25px_rgba(255,128,255,0.4)] hover:scale-105 transition-all duration-300">
            Explore Live Data
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
