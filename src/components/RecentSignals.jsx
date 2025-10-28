import React, { useState } from "react";

// ✅ Verify Modal (Holographic Pulse Theme)
const VerifyModal = ({ open, tx, onClose }) => {
  if (!open) return null;

  const ACCENT_NEON = "#00eaff";
  const ACCENT_PINK = "#ff85ec";
  const ACCENT_PURPLE = "#a855f7";

  const CheckCircleIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M9 11l3 3L22 4" />
    </svg>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div className="bg-[radial-gradient(circle_at_top_left,_#121226,_#1c0138_90%)] p-6 rounded-2xl w-full max-w-md shadow-[0_0_40px_rgba(0,255,255,0.3)] border border-[#7df9ff]/30">
        <div className="flex items-center space-x-3 mb-4 border-b border-[#7df9ff]/30 pb-3">
          <CheckCircleIcon className="w-6 h-6 text-[#00eaff]" />
          <h3 className="text-xl font-semibold text-[#e8e8ff] tracking-wide">
            Signal Verification
          </h3>
        </div>

        <p className="text-[#c7c7e8] mb-4">
          This signal’s proof of execution is securely recorded on-chain.
        </p>

        <div className="bg-[#151538]/60 border border-[#7df9ff]/30 p-3 rounded-lg text-sm mb-6 backdrop-blur-md">
          <p className="text-[#a1a1d0] uppercase text-xs mb-1">
            Transaction Hash
          </p>
          <code className="break-all font-mono text-[#00eaff]">
            {tx || "N/A"}
          </code>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-[#1f1b3a] text-[#cfcfff] hover:bg-[#2b2750] transition border border-[#6b6bff]/40"
          >
            Close
          </button>
          <button
            onClick={() => {
              console.log("Viewing transaction:", tx);
              onClose();
            }}
            className="px-4 py-2 rounded-md font-semibold text-[#0a0f1f] shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_35px_rgba(0,255,255,0.6)] transition-all"
            style={{
              background: `linear-gradient(90deg, ${ACCENT_NEON}, ${ACCENT_PINK}, ${ACCENT_PURPLE})`,
            }}
          >
            View Proof
          </button>
        </div>
      </div>
    </div>
  );
};

// ✅ Clock Icon
const ClockIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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
  PENDING: "bg-[#1f1b3a]/60 text-[#00eaff]",
  PROFIT: "bg-[#132a21]/70 text-[#00ffa0]",
  STOPLOSS: "bg-[#32111f]/70 text-[#ff4b4b]",
};

// ✅ MAIN COMPONENT (Holographic Pulse Theme)
export default function RecentSignalsTimeline() {
  const [open, setOpen] = useState(false);
  const [tx, setTx] = useState(null);

  return (
    <>
      <div className="bg-[radial-gradient(circle_at_top_left,_#0f0f23,_#1a0033_90%)] border border-[#7df9ff]/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,255,255,0.15)] text-[#e8e8ff] backdrop-blur-xl">
        <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] via-[#d46bff] to-[#ff85ec] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
          Real-Time Signal Stream
        </h2>

        <div className="space-y-4 overflow-y-auto max-h-[450px] scrollbar-thin scrollbar-thumb-[#7df9ff]/20">
          {sample.map((s, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-[#7df9ff]/10 bg-[#13132b]/70 hover:shadow-[0_0_15px_rgba(255,0,255,0.4)] hover:-translate-y-1 transition duration-300 backdrop-blur-md"
              style={{
                borderLeft: `3px solid ${
                  s.status === "PROFIT"
                    ? "#00ffa0"
                    : s.status === "STOPLOSS"
                    ? "#ff4b4b"
                    : "#00eaff"
                }`,
              }}
            >
              <div className="flex justify-between items-center border-b border-[#2b2b4a] pb-2 mb-2">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-bold">{s.script}</span>
                  <span className="text-xs text-[#a3a3d1] flex items-center">
                    <ClockIcon className="w-3 h-3 mr-1" />
                    {new Date(s.time).toUTCString().split(" ")[4]} UTC
                  </span>
                </div>
                <div className="text-right">
                  <span
                    className={`text-sm font-semibold ${
                      s.side === "LONG" ? "text-[#00ffa0]" : "text-[#ff4b4b]"
                    }`}
                  >
                    {s.side}
                  </span>
                  {s.pnl !== "-" && (
                    <p
                      className={`text-lg font-bold ${
                        s.pnl.startsWith("+")
                          ? "text-[#00ffa0]"
                          : "text-[#ff4b4b]"
                      }`}
                    >
                      {s.pnl}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 text-sm text-[#c4c4f5] mt-2">
                <div>
                  <span className="text-[#8888bb] block text-xs uppercase">
                    Entry
                  </span>
                  <span className="font-medium">{s.entry}</span>
                </div>
                <div>
                  <span className="text-[#8888bb] block text-xs uppercase">
                    Target/Exit
                  </span>
                  <span className="font-medium">{s.exit}</span>
                </div>
                <div>
                  <span className="text-[#8888bb] block text-xs uppercase">
                    Stop Loss
                  </span>
                  <span className="font-medium">{s.sl}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 mt-3 border-t border-[#2b2b4a]">
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusCls[s.status]}`}
                  >
                    {s.status}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setTx("0x123...abc");
                    setOpen(true);
                  }}
                  className="px-3 py-1 rounded-md text-xs font-medium border border-[#7df9ff]/40 text-[#00eaff] hover:bg-[#0a0a25]/50 transition"
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
