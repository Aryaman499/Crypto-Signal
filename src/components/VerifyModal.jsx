import React from "react";

export default function VerifyModal({ open, onClose, tx }) {
  if (!open) return null;

  const explorer = "https://etherscan.io/tx/" + (tx || "");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-mono">
      {/* Glass + Carbon Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-[#0c0c0c]/90 via-[#1a1a1a]/90 to-[#0f0f0f]/90 
                   backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-lg 
                   bg-[#101015]/95 border border-[#00ffff33] 
                   rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.15)] 
                   p-6 transition-all duration-300 
                   hover:shadow-[0_0_45px_rgba(0,255,255,0.3)]"
      >
        {/* Title */}
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFD700] mb-2 tracking-wide">
          Verify Transaction 🔍
        </h3>

        <p className="text-sm text-[#c8c8ff]/70 leading-relaxed mb-4">
          This signal has been immutably logged on-chain.  
          Verify the transaction hash below for proof of authenticity.
        </p>

        {/* TX Hash Box */}
        <div
          className="bg-[#0a0a0f]/80 border border-[#00ffff33] rounded-lg 
                     p-3 font-mono text-sm text-[#e0e0ff] break-all 
                     shadow-[inset_0_0_10px_rgba(0,255,255,0.2)] 
                     tracking-tighter"
        >
          {tx || "No transaction hash provided"}
        </div>

        {/* Divider line */}
        <div className="mt-5 border-t border-[#00ffff22]" />

        {/* Buttons */}
        <div className="mt-5 flex justify-end gap-3">
          <a
            href={explorer}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-[#00ffff44] 
                       text-[#00ffffcc] hover:text-[#FFD700] 
                       hover:bg-[#00ffff10] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] 
                       transition-all duration-200"
          >
            Open in Explorer
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg font-semibold text-[#0c0c12] 
                       bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFD700] 
                       hover:shadow-[0_0_20px_rgba(255,0,255,0.4)] 
                       hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
