import React from 'react';
import Card from '../common/Card';
import {
    Radio, Search, Share2, BrainCircuit, UserCheck, ShieldCheck, CheckCircle2, Loader2
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
            <div className="flow-viz-container">
                {/* Connecting Line */}
                <div className="flow-line-bg"></div>
                <div className="flow-line-fill"></div>

                <div className="flow-steps">
                    {steps.map((step) => {
                        const isActive = step.status === 'processing';
                        const isCompleted = step.status === 'completed';

                        return (
                            <div key={step.id} className="flow-step">
                                <div className={`flow-step-circle ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
                                    {isActive ? (
                                        <Loader2 size={20} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                                    ) : isCompleted ? (
                                        <CheckCircle2 size={20} />
                                    ) : (
                                        <step.icon size={20} />
                                    )}
                                </div>

                                <div className="text-center">
                                    <p className={`flow-step-label ${isActive || isCompleted ? 'active' : ''}`}>
                                        {step.label}
                                    </p>
                                    {isActive && (
                                        <p style={{ fontSize: '0.75rem', color: 'var(--accent-purple)', marginTop: '0.25rem' }}>Processing...</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-6 p-4 flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Current Action</p>
                    <p style={{ color: 'white', fontWeight: 500 }}>Querying VirusTotal & AbuseIPDB for 3 IPs</p>
                </div>
                <div className="text-right">
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Time Elapsed</p>
                    <p style={{ color: 'var(--accent-cyan)', fontFamily: 'monospace' }}>00:01.42</p>
                </div>
            </div>
            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </Card>
    );
};

export default FlowVisualizer;
