import React from "react";

export default function VerifyModal({ open, onClose, tx }) {
  if (!open) return null;

  const explorer = "https://etherscan.io/tx/" + (tx || "");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Neon glass overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0f0c29]/80 via-[#302b63]/80 to-[#24243e]/80 
                   backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Neon Modal */}
      <div className="relative z-10 w-full max-w-lg 
                      bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 
                      border border-[#00FFFF]/40 rounded-2xl 
                      shadow-[0_0_30px_rgba(0,255,255,0.3)] 
                      p-6 transition-all duration-300 
                      hover:shadow-[0_0_40px_rgba(255,0,255,0.5)]">
        {/* Header */}
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] mb-2">
          Verify Transaction 🔍
        </h3>
        <p className="text-sm text-[#C8C8FF]/80 mb-4">
          This signal has been immutably logged on-chain.  
          Verify the transaction hash below for authenticity.
        </p>

        {/* Transaction Hash */}
        <div className="bg-gradient-to-r from-[#0f0c29]/60 to-[#302b63]/50 
                        border border-[#8A2BE2]/50 
                        p-3 rounded-md font-mono text-sm text-[#E0E0FF] 
                        break-all shadow-inner">
          {tx || "No transaction hash provided"}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <a
            href={explorer}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg font-medium border border-[#00FFFF]/50 
                       text-[#00FFFF] hover:text-[#FFD700] 
                       hover:bg-[#00FFFF]/10 
                       hover:shadow-[0_0_10px_rgba(0,255,255,0.4)] 
                       transition-all duration-200"
          >
            Open in Explorer
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg font-semibold text-white 
                       bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFD700] 
                       hover:shadow-[0_0_20px_rgba(255,0,255,0.6)] 
                       hover:scale-105 active:scale-95 
                       transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
