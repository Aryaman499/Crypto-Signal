import React, {useState} from 'react'
import VerifyModal from './VerifyModal'

const sample = [
  {time:'2025-10-09T14:02:00Z', script:'BTC/USDT', side:'LONG', entry:'64300', exit:'-', sl:'63500', status:'PENDING', pnl:'-'},
  {time:'2025-10-09T13:22:00Z', script:'ETH/USDT', side:'SHORT', entry:'3250', exit:'3100', sl:'3300', status:'PROFIT', pnl:'+4.2%'},
  {time:'2025-10-09T12:15:00Z', script:'SOL/USDT', side:'LONG', entry:'145', exit:'140', sl:'138', status:'STOPLOSS', pnl:'-3.4%'},
]

const statusCls = {
  PENDING: 'bg-blue-600 text-white',
  PROFIT: 'bg-green-400 text-black',
  STOPLOSS: 'bg-red-500 text-white'
}

export default function RecentSignals(){
  const [open, setOpen] = useState(false)
  const [tx, setTx] = useState(null)

  return (
    <>
    <div className="glass p-6">
      <h2 className="text-2xl font-semibold mb-4">Recent Signals</h2>
      <div className="overflow-auto">
        <table className="w-full min-w-[700px]">
          <thead className="text-gray-400 text-sm">
            <tr>
              <th className="text-left py-2">Time (UTC)</th>
              <th className="text-left py-2">Script</th>
              <th className="text-left py-2">Side</th>
              <th className="text-left py-2">Entry</th>
              <th className="text-left py-2">Exit</th>
              <th className="text-left py-2">SL</th>
              <th className="text-left py-2">Status</th>
              <th className="text-left py-2">Close Time</th>
              <th className="text-left py-2">Verify</th>
            </tr>
          </thead>
          <tbody>
            {sample.map((s,idx)=>(
              <tr key={idx} className={idx%2===0?'bg-white/2':'bg-transparent'}>
                <td className="py-3 text-sm">{new Date(s.time).toUTCString().split(' ')[4]}</td>
                <td className="font-medium">{s.script}</td>
                <td className={s.side==='LONG'?'text-neon-green':'text-red-400'}>{s.side}</td>
                <td>{s.entry}</td>
                <td>{s.exit}</td>
                <td>{s.sl}</td>
                <td><span className={`px-3 py-1 rounded-full text-sm ${statusCls[s.status]||'bg-gray-700'}`}>{s.status}</span></td>
                <td>{s.exit==='-'?'-':new Date().toUTCString().split(' ')[4]}</td>
                <td>
                  <button onClick={()=>{ setTx('0x123...abc'); setOpen(true) }} className="px-3 py-1 rounded-md border border-white/10 text-sm">Verify</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <VerifyModal open={open} tx={tx} onClose={()=>setOpen(false)} />
    </>
  )
}
