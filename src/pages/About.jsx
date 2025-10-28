import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#13052b] to-[#21073a] text-white relative overflow-hidden">
      {/* Neon holographic background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,255,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,255,255,0.15),transparent_40%)]"></div>

      <Navbar />

      <div className="relative w-full px-6 py-16 flex flex-col items-center z-10">
        {/* Main Card */}
        <div className="w-full max-w-6xl bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.1)] p-10">
          {/* Title */}
          <h1 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#00fff0] via-[#ff00ff] to-[#00bfff] bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            About <span className="text-white">CryptoFuse</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            Empowering traders with clarity, transparency, and futuristic tech —
            making crypto trading simple, secure, and data-driven through
            real-time blockchain verification.
          </p>

          {/* Mission + Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl bg-black/40 border border-cyan-400/30 p-6 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-xl font-semibold mb-3 text-cyan-300">
                Our Mission 🚀
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                To craft a transparent ecosystem bridging blockchain validation
                with intuitive trading tools — empowering every trader with
                verified data and confidence in their every move.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 border border-pink-400/30 p-6 hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-xl font-semibold mb-3 text-pink-300">
                Our Vision 🌐
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                To redefine how crypto insights are shared — creating a
                decentralized, community-powered hub for verified signals and
                trustless analytics.
              </p>
            </div>
          </div>

          {/* Features */}
          <h2 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-[#00fff0] to-[#ff00ff] bg-clip-text text-transparent">
            Why Choose <span className="text-white">Us?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-2xl bg-black/40 border border-cyan-400/30 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-medium text-cyan-300 mb-2">
                Verified Signals
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Every trading signal is verifiable on-chain — ensuring complete
                trust, transparency, and data integrity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-pink-400/30 hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-medium text-pink-300 mb-2">
                Real-Time Updates
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Experience instant market alerts, live performance metrics, and
                signal synchronization — all powered by real-time pipelines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-purple-400/30 hover:shadow-[0_0_20px_rgba(200,0,255,0.3)] hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-medium text-purple-300 mb-2">
                Community Driven
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Built for traders, by traders — a global network sharing
                verified insights to foster trust and growth.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center border-t border-white/10 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="text-cyan-300">CryptoFuse</span>. All rights
              reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Built with ⚡ innovation and 💎 precision by the CryptoFuse Team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
