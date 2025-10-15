import React from 'react'
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  {x:0, y: 30},{x:1,y:40},{x:2,y:35},{x:3,y:60},{x:4,y:50},{x:5,y:80},{x:6,y:70}
]

export default function LivePerformance(){
  return (
    <div className="glass p-4">
      <div className="text-gray-300 text-sm mb-2">Live Performance</div>
      <div className="text-neon-green font-semibold text-xl mb-4">CUMULATIVE RETURN: +125.7%</div>
      <div style={{height:180}}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Tooltip wrapperStyle={{color:'#000'}}/>
            <Line type="monotone" dataKey="y" stroke="#00ff99" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
