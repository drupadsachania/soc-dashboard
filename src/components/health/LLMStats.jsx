import React from 'react';
import Card from '../common/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
    { time: '10:00', latency: 120, tokens: 450 },
    { time: '10:05', latency: 132, tokens: 520 },
    { time: '10:10', latency: 101, tokens: 380 },
    { time: '10:15', latency: 145, tokens: 600 },
    { time: '10:20', latency: 190, tokens: 850 },
    { time: '10:25', latency: 130, tokens: 490 },
    { time: '10:30', latency: 115, tokens: 410 },
];

const LLMStats = () => {
    return (
        <Card title="Local LLM Performance (MiniLM-L6-v2)">
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorLatency" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#00f0ff" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#7000ff" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#7000ff" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#0f1014', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="latency" stroke="#00f0ff" fillOpacity={1} fill="url(#colorLatency)" strokeWidth={2} name="Latency (ms)" />
                        <Area type="monotone" dataKey="tokens" stroke="#7000ff" fillOpacity={1} fill="url(#colorTokens)" strokeWidth={2} name="Tokens/sec" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-between mt-4 px-4">
                <div className="text-center">
                    <p className="text-xs text-[#94a3b8]">Avg Latency</p>
                    <p className="text-xl font-bold text-[#00f0ff]">133ms</p>
                </div>
                <div className="text-center">
                    <p className="text-xs text-[#94a3b8]">Throughput</p>
                    <p className="text-xl font-bold text-[#7000ff]">528 T/s</p>
                </div>
                <div className="text-center">
                    <p className="text-xs text-[#94a3b8]">Model Size</p>
                    <p className="text-xl font-bold text-white">80MB</p>
                </div>
            </div>
        </Card>
    );
};

export default LLMStats;
