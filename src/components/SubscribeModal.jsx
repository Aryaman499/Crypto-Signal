import React, { useEffect } from "react";

export default function SubscribeModal({ open, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Holographic Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0f0c29]/90 via-[#302b63]/90 to-[#24243e]/90 backdrop-blur-[10px] animate-pulse-slow"
        onClick={onClose}
      ></div>

      {/* Neon Glass Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 border border-[#66fcf1]/40 backdrop-blur-xl rounded-2xl shadow-[0_0_25px_rgba(102,252,241,0.2)] p-6 transition-all duration-300 hover:shadow-[0_0_40px_rgba(102,252,241,0.5)]">
        {/* Header */}
        <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ffff99] mb-3 tracking-wide">
          Stay in the Loop ⚡
        </h3>
        <p className="text-sm text-[#d1d1ff]/80 mb-5 leading-relaxed">
          Subscribe to receive the latest{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#ff99ff]">
            CryptoFuse
          </span>{" "}
          updates directly into your digital stream.
        </p>

        {/* Input + Button */}
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="enter your neon id ⚡"
            className="flex-1 p-3 rounded-lg border border-[#66fcf1]/40 bg-[#1b1b2f]/60 text-[#e0e0ff] placeholder-[#aaaaee]/60 focus:border-[#ff00ff]/60 focus:ring-2 focus:ring-[#66fcf1]/40 transition outline-none"
          />
          <button className="relative px-5 py-3 rounded-lg bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ffff99] text-black font-semibold shadow-[0_0_15px_rgba(255,0,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.7)] hover:scale-105 transition-all duration-200 overflow-hidden">
            <span className="relative z-8">Subscribe</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/30 to-[#ff00ff]/30 blur-md animate-pulse-fast"></span>
          </button>
        </div>

        {/* Footer Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-[#66fcf1]/70 hover:text-[#ff00ff] transition duration-200 text-lg"
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        @keyframes pulse-fast {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-pulse-fast {
          animation: pulse-fast 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
