import React, { useState } from "react";

// ✅ Verify Modal — Brutalist Carbon Theme
const VerifyModal = ({ open, tx, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 mt-10 flex items-center justify-center bg-black/80 backdrop-blur-sm font-['JetBrains_Mono']">
      <div className="relative bg-[#0a0a0a]/95 border border-[#00ff88]/30 rounded-md p-6 w-full max-w-md text-[#b0ffb0] shadow-[0_0_25px_rgba(0,255,136,0.1)]">
        {/* Subtle matrix grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:20px_20px]" />

        <h3 className="text-lg font-semibold mb-4 text-[#00ff88] tracking-wide">
          Signal Verification
        </h3>
        <p className="text-sm mb-4 text-[#a8f5a8]/80">
          Transaction proof recorded on-chain.
        </p>

        <div className="bg-[#0e0e0e]/90 border border-[#00ff88]/20 p-3 rounded-md mb-5">
          <p className="text-xs text-[#66ff99]/60 mb-1 uppercase">
            Transaction Hash
          </p>
          <code className="text-[#00ffaa] break-all">{tx || "N/A"}</code>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-3 py-2 text-sm border border-[#00ff88]/30 rounded-md hover:bg-[#00ff88]/10 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              console.log("Viewing transaction:", tx);
              onClose();
            }}
            className="px-3 py-2 text-sm font-semibold text-black bg-[#00ff88] hover:bg-[#00ffaa] rounded-md transition-colors"
          >
            View Proof
          </button>
        </div>
      </div>
    </div>
  );
};

const ClockIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const sample = [
  { time: "2025-10-09T14:02:00Z", script: "BTC/USDT", side: "LONG", entry: "64300", exit: "-", sl: "63500", status: "PENDING", pnl: "-" },
  { time: "2025-10-09T13:22:00Z", script: "ETH/USDT", side: "SHORT", entry: "3250", exit: "3100", sl: "3300", status: "PROFIT", pnl: "+4.2%" },
  { time: "2025-10-09T12:15:00Z", script: "SOL/USDT", side: "LONG", entry: "145", exit: "140", sl: "138", status: "STOPLOSS", pnl: "-3.4%" },
  { time: "2025-10-09T11:50:00Z", script: "ADA/USDT", side: "LONG", entry: "0.45", exit: "-", sl: "0.40", status: "PENDING", pnl: "-" },
];

const statusCls = {
  PENDING: "bg-[#0e0e0e]/70 text-[#00ffaa]",
  PROFIT: "bg-[#0e2215]/70 text-[#00ff88]",
  STOPLOSS: "bg-[#220e0e]/70 text-[#ff5555]",
};

// ✅ MAIN COMPONENT — Brutalist Code Aesthetic
export default function RecentSignalsTimeline() {
  const [open, setOpen] = useState(false);
  const [tx, setTx] = useState(null);

  return (
    <>
      <div className="relative bg-[#0a0a0a]/95 border border-[#00ff88]/15 rounded-md p-6 text-[#b0ffb0] font-['JetBrains_Mono'] shadow-[0_0_30px_rgba(0,255,136,0.05)] overflow-hidden">
        {/* Matrix grid texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:22px_22px]" />

        <h2 className="relative text-xl font-semibold mb-5 text-[#00ff88] uppercase tracking-widest">
          RECENT SIGNAL STREAM
        </h2>

        <div className="relative space-y-4 overflow-y-auto max-h-[450px] scrollbar-thin scrollbar-thumb-[#00ff88]/20">
          {sample.map((s, idx) => (
            <div
              key={idx}
              className="relative p-4 rounded-sm border border-[#00ff88]/10 bg-[#0e0e0e]/80 hover:bg-[#0f0f0f] hover:border-[#00ff88]/25 transition-all duration-200"
              style={{
                borderLeft: `3px solid ${
                  s.status === "PROFIT"
                     ? "#00ff4c" 
                     : s.status === "STOPLOSS"
                     ? "#ff2e2e"   
                     : "#009dff"   
}`,

              }}
            >
              <div className="flex justify-between items-center pb-2 mb-2 border-b border-[#1c1c1c]">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-[#e0ffe0]">
                    {s.script}
                  </span>
                  <span className="text-[11px] text-[#00ffaa]/70 flex items-center">
                    <ClockIcon className="w-3 h-3 mr-1" />
                    {new Date(s.time).toUTCString().split(" ")[4]} UTC
                  </span>
                </div>
                <div className="text-right">
                  <span
                    className={`text-xs font-semibold ${
                      s.side === "LONG" ? "text-[#00ffaa]" : "text-[#ff5555]"
                    }`}
                  >
                    {s.side}
                  </span>
                  {s.pnl !== "-" && (
                    <p
                      className={`text-sm font-bold ${
                        s.pnl.startsWith("+")
                          ? "text-[#00ffaa]"
                          : "text-[#ff5555]"
                      }`}
                    >
                      {s.pnl}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs text-[#a8f5a8]/80">
                <div>
                  <span className="block text-[#66ff99]/50 uppercase">Entry</span>
                  <span>{s.entry}</span>
                </div>
                <div>
                  <span className="block text-[#66ff99]/50 uppercase">Exit</span>
                  <span>{s.exit}</span>
                </div>
                <div>
                  <span className="block text-[#66ff99]/50 uppercase">SL</span>
                  <span>{s.sl}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 mt-3 border-t border-[#1c1c1c]">
                <span
                  className={`px-3 py-1 rounded-sm text-[11px] font-semibold ${statusCls[s.status]}`}
                >
                  {s.status}
                </span>

                <button
                  onClick={() => {
                    setTx("0x123...abc");
                    setOpen(true);
                  }}
                  className="px-3 py-1 text-[11px] border border-[#00ff88]/40 text-[#00ffaa] hover:bg-[#00ffaa]/10 transition-colors rounded-sm"
                >
                  Verify On-Chain
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VerifyModal open={open} tx={tx} onClose={() => setOpen(false)} />
    </>
  );
}
