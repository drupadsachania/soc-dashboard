import React from 'react';
import { ForensicTimeline } from '../components/ForensicTimeline';
import { MetadataPanel } from '../components/MetadataPanel';
import { ResponsePanel } from '../components/ResponsePanel';
import { History, ShieldCheck, AlertCircle } from 'lucide-react';

/**
 * InvestigationView: The canonical SOC triage screen.
 * Strictly adheres to screen_alert_investigation.png hierarchy.
 * Finalized for Backend Integration Phase.
 */
export const InvestigationView: React.FC = () => {
    return (
        <div className="flex h-full w-full overflow-hidden bg-vanguard-obsidian">
            {/* 1. Left: Alert Metadata (Read-only forensic evidence) */}
            <div className="w-[380px] h-full border-r border-vanguard-border flex flex-col shrink-0">
                <MetadataPanel />
            </div>

            {/* 2. Center: Vertical Event Timeline (Chronological narrative) */}
            <div className="flex-1 h-full flex flex-col overflow-hidden relative border-x border-vanguard-border/30">
                {/* 2.1 Header: Session Identity */}
                <div className="absolute inset-x-0 top-0 h-10 border-b border-vanguard-border/30 flex items-center px-6 justify-between bg-vanguard-surface/30 backdrop-blur-sm z-10">
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold text-vanguard-cyan tracking-widest uppercase">Chronological_Event_Stream</span>
                        <div className="h-4 w-px bg-vanguard-border" />
                        <span className="text-[9px] font-mono text-muted-foreground uppercase">Sess_ID: TX-8821-V4</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-2 py-0.5 border border-vanguard-cyan/30 bg-vanguard-cyan/5">
                            <div className="w-1.5 h-1.5 rounded-full bg-vanguard-cyan animate-vanguard-pulse" />
                            <span className="text-[8px] font-mono text-vanguard-cyan uppercase">Live_Telemetry</span>
                        </div>
                        {/* BACKEND_INTEGRATION_POINT: Connect to real-time status stream */}
                        <div className="flex items-center gap-1.5 text-[8px] font-mono text-muted-foreground opacity-50">
                            <AlertCircle size={10} />
                            BACKEND_OFFLINE (MOCK_MODE)
                        </div>
                    </div>
                </div>

                {/* 2.2 Main Scroll Area: Timeline */}
                <div className="flex-1 overflow-y-auto pt-14 pb-4 px-6 custom-scrollbar">
                    <ForensicTimeline />
                </div>

                {/* 2.3 Footer: Session Audit & Explainability Layer */}
                <div className="h-32 border-t border-vanguard-border bg-vanguard-surface/20 p-4 flex flex-col overflow-hidden shrink-0">
                    <div className="flex items-center gap-2 mb-3">
                        <History size={12} className="text-vanguard-cyan" />
                        <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Session_Audit_Log (Read-Only)</span>
                    </div>
                    <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                        {[
                            { time: '22:15:02', user: 'SYSTEM', msg: 'Enrichment_Subsystem_Triggered: AlienVault_OTX' },
                            { time: '22:15:04', user: 'SYSTEM', msg: 'Rule_Match: ANOMALOUS_EGRESS_V4 (Weight: 0.88)' },
                            { time: '22:16:10', user: 'A. CHEN', msg: 'Analyst_Assigned_To_Investigation' },
                            { time: '22:18:45', user: 'SYSTEM', msg: 'Playbook_PB-99-R2_Step_01: COMPLETED' }
                        ].map((log, i) => (
                            <div key={i} className="flex gap-4 text-[9px] font-mono items-center">
                                <span className="text-muted-foreground w-14 shrink-0">[{log.time}]</span>
                                <span className="text-vanguard-cyan w-16 shrink-0">{log.user}:</span>
                                <span className="text-foreground/70 truncate">{log.msg}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Right: Threat Intel + Remediation Playbook */}
            <div className="w-[420px] h-full flex flex-col shrink-0">
                <ResponsePanel />
            </div>
        </div>
    );
};

