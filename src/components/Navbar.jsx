import React, { useState } from "react";
import SubscribeModal from "./SubscribeModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[radial-gradient(circle_at_top_left,_#0a0f1f,_#1b0033_90%)] border-b border-[#7df9ff]/20 shadow-[0_0_25px_rgba(0,255,255,0.25)] backdrop-blur-xl transition-all duration-500">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2 select-none">
            <div className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] via-[#d46bff] to-[#ff85ec] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:drop-shadow-[0_0_20px_rgba(255,0,255,0.7)] transition-all duration-500">
              <span className="animate-pulse text-[white]">Crypto</span>
              <span className="ml-1">Fuse</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8 items-center text-[16px] font-medium text-[#c8e8ff]">
            {[
              { href: "/", label: "Home" },
              { href: "/history", label: "Historical Signals" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative group transition-all duration-300"
              >
                <span className="transition-colors duration-300 group-hover:text-[#00eaff]">
                  {item.label}
                </span>
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-[#00eaff] via-[#d46bff] to-[#ff85ec] rounded-full transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_8px_#00eaff]"></span>
              </a>
            ))}
          </nav>

          {/* Subscribe Button */}
          <button
            onClick={() => setOpen(true)}
            className="relative px-4 py-2 rounded-smlg font-semibold text-[#0a0f1f] bg-gradient-to-r from-[#00eaff] via-[#d46bff] to-[#ff85ec] shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_40px_rgba(255,0,255,0.7)] hover:scale-105 transition-all duration-300"
          >
            Subscribe
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00eaff]/20 to-[#ff85ec]/20 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300"></span>
          </button>
        </div>
      </header>

      {/* Subscribe Modal */}
      <SubscribeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
