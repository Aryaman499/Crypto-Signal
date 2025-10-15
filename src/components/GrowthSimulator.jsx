import React, {useState} from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'

const demo = Array.from({length: 12}).map((_,i)=>({name: i, value: 10 + i*3 + Math.random()*5}))

export default function GrowthSimulator(){
  const [data] = useState(demo)
  return (
    <div className="glass p-6">
      <h2 className="text-2xl font-semibold mb-4">Growth Simulator</h2>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <input type="date" className="p-2 rounded-md bg-transparent border border-white/6" />
        <input type="date" className="p-2 rounded-md bg-transparent border border-white/6" />
        <input placeholder="Initial Capital" className="p-2 rounded-md bg-transparent border border-white/6" />
        <select className="p-2 rounded-md bg-transparent border border-white/6">
          <option>All-in</option>
          <option>Fixed % per signal</option>
        </select>
      </div>
      <div style={{height:200}}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" tick={{fill:'#9CA3AF'}}/>
            <YAxis tick={{fill:'#9CA3AF'}}/>
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#00ff99" strokeWidth={2} dot={false}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between mt-4 text-sm text-gray-300">
        <div>ROI: <span className="text-neon-green font-bold">+158%</span></div>
        <div>Total Trades: <span className="font-semibold">85</span></div>
        <div>Win Rate: <span className="text-neon-green font-bold">68%</span></div>
      </div>
      <button className="btn-glow mt-4">Download CSV</button>
    </div>
  )
}
