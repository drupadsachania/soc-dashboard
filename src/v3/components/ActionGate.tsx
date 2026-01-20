import React from 'react';
import { ShieldAlert, CheckCircle2, User, Info, FileText } from 'lucide-react';
import { AuditEvent } from '../types/contracts';

interface ActionGateProps {
    analyst?: string;
    confidence?: number;
}

export const ActionGate: React.FC<ActionGateProps> = ({
    analyst = "A. CHEN (L.01)",
    confidence = 94.2
}) => {

    /**
     * EMIT_AUDIT_EVENT: Mock implementation for VANGUARD OS v3 Audit Contract.
     * In backend integration, this would call an API and update the global Audit Store.
     */
    const emitAuditEvent = (decision: AuditEvent['decision']) => {
        const auditEvent: AuditEvent = {
            id: `AUD-${Math.floor(Math.random() * 10000)}`,
            timestamp: new Date().toISOString(),
            analystId: analyst,
            action: decision === 'APPROVE' ? 'Structural_Isolation_Executed' : 'Alert_Dismissed_As_Innocuous',
            confidence: confidence,
            decision: decision,
            metadata: {
                target_server: 'SRV-WBS-01',
                source_ip: '185.156.177.34',
                trigger_rule: 'ANOMALOUS_EGRESS_V4'
            }
        };

        console.log(' [AUDIT_LAYER] Emitting Audit Event:', auditEvent);

        // VISUAL FEEDBACK: In a real app, this might trigger a notification or update history.
        alert(`AUDIT_EVENT_EMITTED: ${auditEvent.id}\nDecision: ${auditEvent.decision}\nAction: ${auditEvent.action}`);
    };

    return (
        <div className="h-full w-full flex items-center justify-between px-8 bg-vanguard-surface/40 border-t border-vanguard-border/50 relative overflow-hidden">
            {/* 1. Left: Analyst Context */}
            <div className="flex items-center gap-4 py-2">
                <div className="w-10 h-10 rounded-none border border-vanguard-cyan/30 bg-vanguard-cyan/5 flex items-center justify-center">
                    <User size={18} className="text-vanguard-cyan" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[8px] text-muted-foreground uppercase font-mono leading-none mb-1">Active_Session</span>
                    <span className="text-[10px] font-bold text-vanguard-cyan uppercase leading-none">{analyst}</span>
                </div>
            </div>

            {/* 2. Center: System Status & Confidence */}
            <div className="flex items-center gap-12">
                <div className="flex flex-col items-center">
                    <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-mono mb-1">Confidence</span>
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-bold font-mono text-vanguard-cyan">{confidence}%</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-vanguard-cyan animate-vanguard-pulse" />
                    </div>
                </div>

                <div className="h-8 w-px bg-vanguard-border/50" />

                <div className="flex flex-col items-center">
                    <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-mono mb-1">Human_Gate</span>
                    <div className="flex items-center gap-3">
                        <div className="text-[10px] font-mono text-vanguard-amber uppercase">Awaiting_Explanation</div>
                        <div className="flex items-center p-0.5 border border-vanguard-border bg-vanguard-obsidian w-10 h-5 relative cursor-pointer hover:border-vanguard-cyan transition-colors group">
                            <div className="absolute left-0.5 top-0.5 bottom-0.5 w-4 bg-vanguard-surface-light group-hover:bg-vanguard-cyan/50 transition-colors" />
                            <span className="ml-5 text-[7px] text-muted-foreground uppercase font-bold">OFF</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Right: Principal Actions */}
            <div className="flex items-center gap-6">
                <div className="flex flex-col items-end mr-2">
                    <span className="text-[8px] text-vanguard-critical uppercase font-bold tracking-tighter">Required_Action:</span>
                    <span className="text-[10px] text-muted-foreground uppercase font-mono">Structural_Isolation</span>
                </div>

                <button
                    onClick={() => emitAuditEvent('REJECT')}
                    className="px-6 py-2 border border-vanguard-border text-muted-foreground text-[10px] uppercase font-bold tracking-widest hover:bg-vanguard-surface hover:text-white transition-all"
                >
                    Dismiss Alert
                </button>

                <button
                    onClick={() => emitAuditEvent('APPROVE')}
                    className="px-8 py-2.5 bg-vanguard-critical text-white text-[10px] uppercase font-bold tracking-[0.15em] flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all glow-pink"
                >
                    <ShieldAlert size={16} />
                    Approve Block & Isolate
                </button>
            </div>

            {/* Scanline Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-vanguard-cyan/5 to-transparent opacity-30" />
        </div>
    );
};

