import React from 'react'
export default function KPIChip({label,value}){
  return (
    <div className="glass px-4 py-3 min-w-[120px] text-center">
      <div className="text-gray-400 text-xs">{label}</div>
      <div className="text-neon-green text-xl font-bold">{value}</div>
    </div>
  )
}
