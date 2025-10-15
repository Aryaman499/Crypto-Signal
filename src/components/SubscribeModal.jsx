import React, {useEffect} from 'react'

export default function SubscribeModal({open, onClose}){
  useEffect(()=>{
    function onKey(e){ if(e.key==='Escape') onClose() }
    if(open) window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[open,onClose])

  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="glass p-6 z-10 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-2">Subscribe to updates</h3>
        <p className="text-sm text-gray-300 mb-4">Enter your email to get updates.</p>
        <div className="flex gap-2">
          <input type="email" placeholder="you@domain.com" className="flex-1 p-2 rounded-md bg-transparent border border-white/10" />
          <button className="btn-glow">Subscribe</button>
        </div>
      </div>
    </div>
  )
}
