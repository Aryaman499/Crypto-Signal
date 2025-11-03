import React, { useState } from "react";
import SubscribeModal from "./SubscribeModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0a0f1f] border-b border-[#00ff88]/20 shadow-[0_0_20px_rgba(0,255,136,0.15)] backdrop-blur-md transition-all duration-500">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2 select-none">
            <h1 className="animate-bounce text-3xl font-extrabold tracking-tight font-['JetBrains_Mono'] text-[#00ffcc] hover:text-[#00ff88] transition-all duration-300">
              <span className="text-white">Crypto</span>
              <span className="text-[#00ff88] ml-1">Fuse</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-10 items-center text-sm font-semibold tracking-wide font-['JetBrains_Mono'] uppercase">
  <a
    href="/"
    className="relative group transition-all duration-300"
  >
    <span className="text-[#b0ffb0] group-hover:text-[#00ff88] transition-colors duration-300">
      Home
    </span>
    <span className="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#00ff88] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_6px_#00ff88]"></span>
  </a>

  <a
    href="/history"
    className="relative group transition-all duration-300"
  >
    <span className="text-[#b0ffb0] group-hover:text-[#00ff88] transition-colors duration-300">
      Historical
    </span>
    <span className="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#00ff88] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_6px_#00ff88]"></span>
  </a>

  <a
    href="/about"
    className="relative group transition-all duration-300"
  >
    <span className="text-[#b0ffb0] group-hover:text-[#00ff88] transition-colors duration-300">
      About
    </span>
    <span className="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#00ff88] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_6px_#00ff88]"></span>
  </a>

  <a
    href="/contact"
    className="relative group transition-all duration-300"
  >
    <span className="text-[#b0ffb0] group-hover:text-[#00ff88] transition-colors duration-300">
      Contact
    </span>
    <span className="absolute left-0 bottom-[-3px] w-0 h-[1px] bg-[#00ff88] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_6px_#00ff88]"></span>
  </a>
</nav>


          {/* Subscribe Button */}
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 font-['JetBrains_Mono'] font-semibold text-[#0a0f1f] uppercase bg-[#00ff88] rounded-md border border-[#00ff88]/40 
                       hover:bg-[#00ffaa] hover:shadow-[0_0_25px_#00ff88] active:scale-95 transition-all duration-300"
          >
            Subscribe
          </button>
        </div>
      </header>

      {/* Subscribe Modal */}
      <SubscribeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
