import React from 'react'

export default function VerifyModal({open, onClose, tx}){
  if(!open) return null
  const explorer = 'https://etherscan.io/tx/' + (tx || '')
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="glass p-6 z-10 w-full max-w-lg">
        <h3 className="text-lg font-semibold mb-2">Verify on-chain</h3>
        <p className="text-sm text-gray-300 mb-4">Transaction hash:</p>
        <div className="bg-black/30 p-3 rounded-md font-mono text-sm">{tx}</div>
        <div className="mt-4 flex justify-end gap-2">
          <a className="px-4 py-2 rounded-md border" href={explorer} target="_blank" rel="noreferrer">Open in Explorer</a>
          <button className="px-4 py-2 rounded-md btn-glow" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}
