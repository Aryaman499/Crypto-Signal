import React, {useState} from 'react'

// --- 1. MINIMAL VERIFY MODAL COMPONENT ---
// This component handles the 'Verify' button click, showing a transaction detail pop-up.
const VerifyModal = ({ open, tx, onClose }) => {
    if (!open) return null;

    // Defines the Neon Green color for aesthetics
    const ACCENT_COLOR = '#00FF88'; 

    
    // Inline SVG for CheckCircle
    const CheckCircleIcon = (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M9 11l3 3L22 4" />
        </svg>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
            <div 
                className="bg-[#101620] p-6 rounded-xl w-full max-w-md border border-gray-700 shadow-2xl"
                style={{ boxShadow: `0 0 20px rgba(0, 255, 136, 0.2)` }}
            >
                <div className="flex items-center space-x-3 mb-4 border-b border-gray-800 pb-3">
                    {/* Replaced CheckCircle with inline SVG */}
                    <CheckCircleIcon className="w-6 h-6" style={{ color: ACCENT_COLOR }}/>
                    <h3 className="text-xl font-bold text-white">Signal Verification</h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                    This signal's execution proof is recorded on-chain.
                </p>
                
                <div className="bg-blue-900 p-3 rounded-lg text-sm mb-6">
                    <p className="text-gray-500 uppercase text-xs mb-1">Transaction Hash</p>
                    <code className="text-neon-green break-all" style={{ color: ACCENT_COLOR }}>
                        {tx || 'N/A'}
                    </code>
                </div>

                <div className="flex justify-end space-x-3">
                    <button 
                        onClick={onClose} 
                        className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition"
                    >
                        Close
                    </button>
                    <button 
                        onClick={() => { 
                            // In a real app, this would open Etherscan or similar
                            console.log('Viewing transaction on external block explorer:', tx); 
                            onClose();
                        }} 
                        className="px-4 py-2 rounded-md font-semibold text-black"
                        style={{ backgroundColor: ACCENT_COLOR }}
                    >
                        View Proof
                    </button>
                </div>
            </div>
        </div>
    );
};
// --- END VERIFY MODAL ---

// Inline SVG for Clock icon
const ClockIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);


// Constants from the original file
const sample = [
    {time:'2025-10-09T14:02:00Z', script:'BTC/USDT', side:'LONG', entry:'64300', exit:'-', sl:'63500', status:'PENDING', pnl:'-'},
    {time:'2025-10-09T13:22:00Z', script:'ETH/USDT', side:'SHORT', entry:'3250', exit:'3100', sl:'3300', status:'PROFIT', pnl:'+4.2%'},
    {time:'2025-10-09T12:15:00Z', script:'SOL/USDT', side:'LONG', entry:'145', exit:'140', sl:'138', status:'STOPLOSS', pnl:'-3.4%'},
    {time:'2025-10-09T11:50:00Z', script:'ADA/USDT', side:'LONG', entry:'0.45', exit:'-', sl:'0.40', status:'PENDING', pnl:'-'},
]

const statusCls = {
    // Adjusted to remove 'border-l-4' because the border is now on the card div itself
    PENDING: 'bg-blue-600/50 text-white', 
    PROFIT: 'bg-green-600/50 text-white',
    STOPLOSS: 'bg-red-600/50 text-white'
}

export default function RecentSignalsTimeline(){
    const [open, setOpen] = useState(false)
    const [tx, setTx] = useState(null)

    const ACCENT_COLOR = '#00FF88'; // Neon Green equivalent

    return (
        <>
        <div className="glass p-6 text-white h-full">
            <h2 className="text-2xl font-semibold mb-6">Real-Time Signal Stream</h2>
            
            {/* Set a max-height and overflow-y for scrolling on small screens/large data sets */}
            <div className="space-y-4 overflow-y-auto max-h-[400px]">
                {sample.map((s,idx)=>(
                    <div 
                        key={idx} 
                        className={`p-4 rounded-lg transition duration-300 hover:bg-white/10 border-l-4 ${s.status === 'PROFIT' ? 'border-neon-green' : 'border-gray-700'}`}
                        // Apply the accent color directly for the neon glow effect
                        style={{ borderColor: s.status === 'PROFIT' ? ACCENT_COLOR : undefined }}
                    >
                        <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-2">
                            {/* Script and Time */}
                            <div className='flex items-center space-x-3'>
                                <span className="text-lg font-bold">{s.script}</span>
                                <span className="text-xs text-gray-400 flex items-center">
                                    {/* Replaced Clock with inline SVG */}
                                    <ClockIcon className="w-3 h-3 mr-1"/>
                                    {new Date(s.time).toUTCString().split(' ')[4]} UTC
                                </span>
                            </div>

                            {/* P&L and Side */}
                            <div className='text-right'>
                                <span className={`text-sm font-semibold ${s.side === 'LONG' ? 'text-neon-green' : 'text-red-400'}`}
                                    style={{ color: s.side === 'LONG' ? ACCENT_COLOR : undefined }}
                                >
                                    {s.side}
                                </span>
                                {s.pnl !== '-' && (
                                    // P&L gets a bolder look
                                    <p className={`text-lg font-bold ${s.pnl.startsWith('+') ? 'text-neon-green' : 'text-red-400'}`}
                                        style={{ color: s.pnl.startsWith('+') ? ACCENT_COLOR : undefined }}
                                    >{s.pnl}</p>
                                )}
                            </div>
                        </div>

                        {/* Details (Responsive Grid) */}
                        <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 text-sm text-gray-300 mt-2">
                            <div className="col-span-1">
                                <span className="text-gray-500 block text-xs uppercase">Entry</span>
                                <span className="font-medium">{s.entry}</span>
                            </div>
                            <div className="col-span-1">
                                <span className="text-gray-500 block text-xs uppercase">Target/Exit</span>
                                <span className="font-medium">{s.exit}</span>
                            </div>
                            <div className="col-span-1">
                                <span className="text-gray-500 block text-xs uppercase">Stop Loss</span>
                                <span className="font-medium">{s.sl}</span>
                            </div>
                        </div>

                        {/* Footer: Status and Verify Button */}
                        <div className="flex justify-between items-center pt-3 mt-3 border-t border-gray-800">
                            {/* Status Tag */}
                            <div>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusCls[s.status]||'bg-gray-700/50'}`}>
                                    {s.status}
                                </span>
                            </div>
                            
                            {/* Verify Button */}
                            <button 
                                onClick={()=>{ setTx('0x123...abc'); setOpen(true) }} 
                                className="px-3 py-1 rounded-md border border-neon-green/30 text-neon-green text-xs hover:bg-neon-green/10 transition duration-150"
                                style={{ color: ACCENT_COLOR, borderColor: ACCENT_COLOR + '30' }}
                            >
                                Verify On-Chain
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {/* Modal is now defined and can be used */}
        <VerifyModal open={open} tx={tx} onClose={()=>setOpen(false)} />
        </>
    )
}

