import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (

    <div>
      <Navbar/>

       <div className="min-h-screen w-full bg-[#0b0f17] text-gray-200 px-6 py-12 flex flex-col items-center">
      {/* Glass container */}
      <div className="glass w-full max-w-5xl rounded-2xl p-10 backdrop-blur-lg border border-white/10 bg-white/5 shadow-2xl">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#00ff99] animate-bounce">
          About Crypto Signals
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-center mb-10 max-w-3xl mx-auto">
          We deliver transparent, real-time, and verifiable trading insights to help traders make informed decisions across major crypto pairs.
        </p>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-400/40 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-2 text-blue-400">Our Mission</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              To create a trusted ecosystem where traders can access real-time signals backed by on-chain verification and community validation — 
              ensuring every move in the market is supported by data and transparency.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-green-400/40 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-2 text-green-400">Our Vision</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We aim to become the leading decentralized signal hub for traders across the world — bridging advanced AI analysis with human intuition for smarter trading.
            </p>
          </div>
        </div>

        {/* Features */}
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-lg font-medium text-blue-400 mb-2">Verified Signals</h3>
            <p className="text-sm text-gray-300">Every signal can be verified on-chain to ensure transparency and credibility.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-lg font-medium text-green-400 mb-2">Real-Time Updates</h3>
            <p className="text-sm text-gray-300">Stay ahead with instant trade notifications and live performance tracking.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-lg font-medium text-yellow-400 mb-2">Community Driven</h3>
            <p className="text-sm text-gray-300">Join a growing trader community contributing to decentralized market insights.</p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-8 border-t border-white/10 pt-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} CryptoSignals. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Built with ❤️ by passionate traders & developers.
          </p>
        </div>
      </div>
    </div>

    </div>
  );
}
