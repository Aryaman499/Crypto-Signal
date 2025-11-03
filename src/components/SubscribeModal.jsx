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
    <div className="fixed inset-0 z-50 flex items-center justify-center font-['JetBrains_Mono']">
      {/* Carbon Matrix Background */}
      <div
        className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
        {/* Grid lines overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Brutalist Glass Card */}
      <div className="relative z-10 w-full max-w-md border border-[#00ff88]/20 bg-[#0f0f0f]/80 backdrop-blur-md rounded-xl p-6 shadow-[0_0_30px_rgba(0,255,136,0.05)] hover:shadow-[0_0_40px_rgba(0,255,136,0.1)] transition-all duration-300">
        {/* Title */}
        <h3 className="text-[#00ff88] text-xl font-bold uppercase tracking-wider mb-4">
          SUBSCRIBE / TERMINAL ACCESS
        </h3>
        <p className="text-[#b0ffb0]/70 text-sm leading-relaxed mb-6">
          Gain direct feed from the CryptoFuse mainframe.  
          Updates delivered — <span className="text-[#00ff88]">raw & encrypted.</span>
        </p>

        {/* Input + Button */}
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="enter@cryptofuse.io"
            className="flex-1 bg-[#000]/60 border border-[#00ff88]/20 text-[#caffca] placeholder-[#00ff88]/40 rounded-md px-3 py-2 focus:outline-none focus:border-[#00ff88]/60 transition"
          />
          <button className="relative px-4 py-2 border border-[#00ff88]/40 text-[#00ff88] rounded-md font-semibold tracking-widest text-xs uppercase hover:bg-[#00ff88]/10 hover:border-[#00ff88]/70 transition-all duration-200 shadow-[0_0_10px_rgba(0,255,136,0.1)]">
            Deploy
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-[#00ff88]/70 hover:text-[#b0ffb0] text-lg transition"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Footer line */}
        <div className="mt-5 border-t border-[#00ff88]/10 pt-2 text-[#b0ffb0]/40 text-[11px] tracking-wider text-right">
          CryptoFuse ©2025 // matrix.access
        </div>
      </div>
    </div>
  );
}
