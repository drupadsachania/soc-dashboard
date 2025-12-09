import React from 'react';
import Card from '../common/Card';
import {
    Radio,
    Search,
    Share2,
    BrainCircuit,
    UserCheck,
    ShieldCheck,
    CheckCircle2,
    Loader2
} from 'lucide-react';

const steps = [
    { id: 1, label: 'Ingest Alert', icon: Radio, status: 'completed' },
    { id: 2, label: 'Extract IOCs', icon: Search, status: 'completed' },
    { id: 3, label: 'Enrichment', icon: Share2, status: 'processing' },
    { id: 4, label: 'Score / Rec', icon: BrainCircuit, status: 'pending' },
    { id: 5, label: 'Approval', icon: UserCheck, status: 'pending' },
    { id: 6, label: 'Containment', icon: ShieldCheck, status: 'pending' },
];

const FlowVisualizer = () => {
    return (
        <Card title="Live Automation Flow" className="w-full">
            <div className="relative py-8">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[rgba(255,255,255,0.1)] -translate-y-1/2 z-0"></div>
                <div className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] -translate-y-1/2 z-0 shadow-[0_0_10px_#00f0ff]"></div>

                <div className="relative z-10 flex justify-between items-center px-4">
                    {steps.map((step, index) => {
                        const isActive = step.status === 'processing';
                        const isCompleted = step.status === 'completed';

                        return (
                            <div key={step.id} className="flex flex-col items-center gap-3 group">
                                <div
                                    className={`
                    w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300
                    ${isCompleted
                                            ? 'bg-[#050507] border-[#00f0ff] text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                                            : isActive
                                                ? 'bg-[#050507] border-[#7000ff] text-[#7000ff] shadow-[0_0_15px_rgba(112,0,255,0.5)] scale-110'
                                                : 'bg-[#050507] border-[rgba(255,255,255,0.1)] text-[#64748b]'
                                        }
                  `}
                                >
                                    {isActive ? (
                                        <Loader2 size={20} className="animate-spin" />
                                    ) : isCompleted ? (
                                        <CheckCircle2 size={20} />
                                    ) : (
                                        <step.icon size={20} />
                                    )}
                                </div>

                                <div className="text-center">
                                    <p className={`text-sm font-medium ${isActive || isCompleted ? 'text-white' : 'text-[#64748b]'}`}>
                                        {step.label}
                                    </p>
                                    {isActive && (
                                        <p className="text-xs text-[#7000ff] animate-pulse mt-1">Processing...</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-6 p-4 bg-[rgba(255,255,255,0.02)] rounded-lg border border-[rgba(255,255,255,0.05)] flex items-center justify-between">
                <div>
                    <p className="text-sm text-[#94a3b8]">Current Action</p>
                    <p className="text-white font-medium">Querying VirusTotal & AbuseIPDB for 3 IPs</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-[#94a3b8]">Time Elapsed</p>
                    <p className="text-[#00f0ff] font-mono">00:01.42</p>
                </div>
            </div>
        </Card>
    );
};

export default FlowVisualizer;
