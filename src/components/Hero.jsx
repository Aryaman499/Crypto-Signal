import React from 'react'
import KPIChip from './KPIChip'
import LivePerformance from './LivePerformance'

export default function Hero(){
  return (
    <section className="glass p-8 rounded-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Transparent Crypto <span className="text-neon-green">Signals</span></h1>
          <p className="text-gray-300 mt-3">Verifiable On-Chain. Real-Time. Secure.</p>
          <div className="flex gap-4 mt-6 flex-wrap">
            <KPIChip label='Signals Today' value='24' />
            <KPIChip label='Win Rate Last 30D' value='78%' />
            <KPIChip label='Avg ROI' value='+1.2%' />
          </div>
        </div>
        <div>
          <LivePerformance />
        </div>
      </div>
    </section>
  )
}
