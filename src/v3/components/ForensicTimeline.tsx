import React from 'react';
import { Hash, Server, User, Globe, ShieldAlert, Cpu, Terminal } from 'lucide-react';

interface TimelineEvent {
    id: string;
    time: string;
    title: string;
    description: string;
    type: 'auth' | 'system' | 'network' | 'threat';
    severity: 'info' | 'warn' | 'crit';
    metadata?: Record<string, string>;
}

const mockEvents: TimelineEvent[] = [
    {
        id: '1',
        time: '14:22:01.004',
        title: 'Verification Success',
        description: 'User m.rodriguez authenticated via RSA-4096 signature.',
        type: 'auth',
        severity: 'info',
        metadata: { user: 'm.rodriguez', method: 'rsa_sig', confidence: '100%', signal: 'AuthGate_v2' }
    },
    {
        id: '2',
        time: '14:22:05.122',
        title: 'Anomalous SSH Profile',
        description: 'System login from non-standard jump host JH-04-NYC.',
        type: 'threat',
        severity: 'warn',
        metadata: { source: 'JH-04-NYC', ip: '192.168.44.11', risk_delta: '+42', signal: 'Behavioral_Engine' }
    },
    {
        id: '3',
        time: '14:23:44.991',
        title: 'Burst Exfiltration Detected',
        description: 'Outbound flow to unknown IP 203.0.113.88 exceeded 4GB/s threshold.',
        type: 'threat',
        severity: 'crit',
        metadata: { proto: 'tcp', bytes: '4.2GB', dest: '203.0.113.88', signal: 'Network_Sentry' }
    },
    {
        id: '4',
        time: '14:24:10.002',
        title: 'Credential Revocation Triggered',
        description: 'ER-System automatically locked user account per policy P-9801.',
        type: 'system',
        severity: 'info',
        metadata: { policy: 'P-9801', action: 'account_lock', signal: 'Policy_Enforcer' }
    }
];

const EventIcon = ({ type }: { type: TimelineEvent['type'] }) => {
    switch (type) {
        case 'auth': return <User size={14} />;
        case 'system': return <Cpu size={14} />;
        case 'network': return <Globe size={14} />;
        case 'threat': return <ShieldAlert size={14} />;
    }
};

export const ForensicTimeline: React.FC = () => {
    return (
        <div className="relative pl-10 border-l-2 border-vanguard-border/20 space-y-12 py-6">
            {mockEvents.map((event) => (
                <div key={event.id} className="relative group">
                    {/* Connector Dot */}
                    <div className={`
            absolute -left-[51px] top-1 w-5 h-5 rounded-none border-2 bg-vanguard-obsidian flex items-center justify-center z-10
            ${event.severity === 'crit' ? 'border-vanguard-critical shadow-[0_0_12px_rgba(255,0,122,0.6)]' :
                            event.severity === 'warn' ? 'border-vanguard-amber shadow-[0_0_8px_rgba(255,184,0,0.4)]' :
                                'border-vanguard-cyan shadow-[0_0_8px_rgba(0,240,255,0.4)]'}
          `}>
                        <div className={`w-1.5 h-1.5 ${event.severity === 'crit' ? 'bg-vanguard-critical animate-pulse' :
                                event.severity === 'warn' ? 'bg-vanguard-amber' :
                                    'bg-vanguard-cyan'
                            }`} />
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-mono text-vanguard-cyan bg-vanguard-cyan/10 px-2 py-0.5 border border-vanguard-cyan/30">
                                    {event.time}
                                </span>
                                <span className={`text-[11px] font-bold uppercase tracking-[0.1em] ${event.severity === 'crit' ? 'text-vanguard-critical' :
                                        event.severity === 'warn' ? 'text-vanguard-amber' :
                                            'text-foreground'
                                    }`}>
                                    {event.title}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 font-mono text-[9px] text-muted-foreground uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="border-b border-vanguard-border">Reference_ID</span>
                                <span className="text-vanguard-cyan">#TX-{event.id}</span>
                            </div>
                        </div>

                        <div className="p-4 bg-vanguard-surface/30 border border-vanguard-border hover:border-vanguard-border-strong transition-all group-hover:bg-vanguard-surface/50 group-hover:translate-x-1">
                            <p className="text-[12px] text-foreground/90 leading-relaxed font-sans">
                                {event.description}
                            </p>

                            {event.metadata && (
                                <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-vanguard-border/30">
                                    {Object.entries(event.metadata).map(([key, value]) => (
                                        <div key={key} className="flex items-center gap-1.5 px-2 py-1 bg-vanguard-obsidian border border-vanguard-border/50 font-mono text-[9px]">
                                            <span className="text-muted-foreground lowercase">{key}:</span>
                                            <span className={key === 'signal' ? 'text-vanguard-amber font-bold' : 'text-vanguard-cyan'}>{value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* Terminal Input Suggestion */}
            <div className="mt-12 flex items-center gap-3 p-3 border border-dashed border-vanguard-border bg-vanguard-surface/10 opacity-60">
                <Terminal size={14} className="text-muted-foreground" />
                <span className="text-[10px] font-mono text-muted-foreground uppercase">Awaiting_Next_Telemetry_Node...</span>
            </div>
        </div>
    );
};
