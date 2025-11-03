import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#d1d5db] relative overflow-hidden font-['JetBrains_Mono','IBM_Plex_Mono',monospace]">
      {/* Noise + Grid Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-5 pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <Navbar />

      <div className="relative w-full px-6 py-16 flex flex-col items-center z-10">
        {/* Main Card */}
        <div className="w-full max-w-6xl bg-[rgba(25,25,25,0.85)] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1)] p-10 transition-all duration-300 hover:border-[#00ff88]/60">
          
          {/* Title */}
          <h1 className="text-5xl font-extrabold text-center mb-6 text-[#00ff88] tracking-tight">
            About <span className="text-[#d1d5db]">CryptoFuse</span>
            <span className="inline-block w-2 h-6 bg-[#00ff88] ml-1 animate-pulse"></span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            Empowering traders with clarity, transparency, and futuristic tech — making crypto trading 
            simple, secure, and data-driven through verified, on-chain intelligence.
          </p>

          {/* Mission + Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-xl bg-[#111]/80 border border-[#00ff88]/30 p-6 hover:border-[#00ff88]/60 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)] transition-all duration-300">
              <h2 className="text-xl font-semibold mb-3 text-[#00ff88]">
                Our Mission ▓
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                To craft a transparent ecosystem bridging blockchain validation with 
                intuitive trading tools — empowering every trader with verified data 
                and confidence in every move.
              </p>
            </div>

            <div className="rounded-xl bg-[#111]/80 border border-[#00b8d9]/30 p-6 hover:border-[#00b8d9]/60 hover:shadow-[0_0_20px_rgba(0,184,217,0.15)] transition-all duration-300">
              <h2 className="text-xl font-semibold mb-3 text-[#00b8d9]">
                Our Vision ▓
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                To redefine how crypto insights are shared — creating a decentralized, 
                engineer-powered hub for verified analytics and trustless insights.
              </p>
            </div>
          </div>

          {/* Features */}
          <h2 className="text-2xl font-semibold mb-8 text-center text-[#00ff88] uppercase tracking-wider">
            Why Choose <span className="text-gray-200">Us?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-xl bg-[#111]/80 border border-[#00ff88]/30 hover:border-[#00ff88]/60 hover:shadow-[0_0_16px_rgba(0,255,136,0.15)] transition-all duration-300">
              <h3 className="text-lg font-medium text-[#00ff88] mb-2">Verified Signals</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Every trading signal is verifiable on-chain — ensuring full trust, 
                transparency, and immutability.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111]/80 border border-[#00b8d9]/30 hover:border-[#00b8d9]/60 hover:shadow-[0_0_16px_rgba(0,184,217,0.15)] transition-all duration-300">
              <h3 className="text-lg font-medium text-[#00b8d9] mb-2">Real-Time Updates</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Experience instant alerts, live dashboards, and synchronized 
                market data pipelines.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111]/80 border border-[#ff7a00]/30 hover:border-[#ff7a00]/60 hover:shadow-[0_0_16px_rgba(255,122,0,0.15)] transition-all duration-300">
              <h3 className="text-lg font-medium text-[#ff7a00] mb-2">Community Driven</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Built for engineers, by engineers — a collective network of traders, 
                coders, and blockchain analysts.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center border-t border-[rgba(255,255,255,0.08)] pt-8">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} <span className="text-[#00ff88]">CryptoFuse</span> — All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Crafted with ⌨️ precision and ⚡ logic by the CryptoFuse Engineering Team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
