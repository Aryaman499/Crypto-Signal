import React, {useState} from 'react'
import SubscribeModal from './SubscribeModal'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <>
    <header className="sticky z-50 top-2 text-white border-b-5 border-gray-800 z-50 py-1 ">
      <div className="glass container-max mx-auto px-2 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-40 h-10 flex items-center justify-center text-[23px] text-white font-bold animate-bounce">Crypto Fuse</div>
          <nav className="hidden md:flex gap-6 items-center text-gray-300">
            <a href="#" className="rounded-md bg-white/3">Home</a>
            <a href="#" className="hover:text-white">Historical Signals</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
        <button onClick={()=>setOpen(true)} className="btn-glow hover:bg-#00ff99">Subscribe to updates</button>
      </div>
    </header>
    <SubscribeModal open={open} onClose={()=>setOpen(false)} />
    </>
  )
}
