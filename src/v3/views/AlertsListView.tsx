import React from 'react';
import { ShieldAlert, User, Clock, ChevronRight, Filter, SortAsc } from 'lucide-react';
import { VanguardView } from '../types/views';

interface AlertEntry {
    id: string;
    severity: 'critical' | 'high' | 'medium' | 'low';
    title: string;
    source: string;
    node: string;
    timestamp: string;
    analyst?: string;
}

const mockAlerts: AlertEntry[] = [
    { id: 'ALPHA-01', severity: 'critical', title: 'Data Exfiltration Pattern', source: '203.0.113.42', node: 'SRV-WBS-01', timestamp: '14:22:01', analyst: 'A. Chen' },
    { id: 'BETA-09', severity: 'high', title: 'Suspicious Credential Use', source: '10.0.4.11', node: 'AD-CNTRL-P', timestamp: '14:25:44', analyst: 'Unassigned' },
    { id: 'GAMMA-44', severity: 'medium', title: 'Unauthorized API Access', source: '172.16.8.99', node: 'API-GW-EXT', timestamp: '14:30:12', analyst: 'M. Rodriguez' },
    { id: 'DELTA-12', severity: 'low', title: 'Non-Standard Time Login', source: '192.168.1.15', node: 'LAP-FORENSIC-01', timestamp: '14:35:00', analyst: 'A. Chen' },
];

interface AlertsListViewProps {
    onInvestigate: (id: string) => void;
}

export const AlertsListView: React.FC<AlertsListViewProps> = ({ onInvestigate }) => {
    return (
        <div className="h-full w-full flex flex-col bg-vanguard-obsidian overflow-hidden">
            {/* 1. Header & Controls */}
            <div className="h-20 border-b border-vanguard-border flex items-center justify-between px-8 bg-vanguard-surface/30 shrink-0">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-vanguard-cyan tracking-[0.2em] uppercase">Queue_Orchestrator_v4.2</span>
                    <h1 className="text-xl font-bold uppercase mt-1">Incident Queue</h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 border border-vanguard-border bg-vanguard-obsidian hover:border-vanguard-cyan transition-colors cursor-pointer group">
                        <Filter size={14} className="text-muted-foreground group-hover:text-vanguard-cyan" />
                        <span className="text-[10px] uppercase font-mono text-muted-foreground group-hover:text-vanguard-cyan">Filter_Severity</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 border border-vanguard-border bg-vanguard-obsidian hover:border-vanguard-cyan transition-colors cursor-pointer group">
                        <SortAsc size={14} className="text-muted-foreground group-hover:text-vanguard-cyan" />
                        <span className="text-[10px] uppercase font-mono text-muted-foreground group-hover:text-vanguard-cyan">Sort_Temporal</span>
                    </div>
                </div>
            </div>

            {/* 2. Alerts Table */}
            <div className="flex-1 overflow-y-auto px-8 py-6 scanline-depth">
                <div className="w-full border border-vanguard-border bg-vanguard-surface/10">
                    {/* Table Headers */}
                    <div className="flex items-center px-6 py-3 border-b border-vanguard-border bg-vanguard-surface/50 font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
                        <div className="w-12 shrink-0">STAT</div>
                        <div className="w-32 shrink-0">INCIDENT_ID</div>
                        <div className="flex-1">DESCRIPTION</div>
                        <div className="w-48 shrink-0">SOURCE / NODE</div>
                        <div className="w-32 shrink-0">TIMESTAMP</div>
                        <div className="w-32 shrink-0">ANALYST</div>
                        <div className="w-12 shrink-0"></div>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-y divide-vanguard-border/30">
                        {mockAlerts.map((alert) => (
                            <div
                                key={alert.id}
                                className="flex items-center px-6 py-4 hover:bg-vanguard-cyan/5 transition-colors group cursor-pointer"
                                onClick={() => onInvestigate(alert.id)}
                            >
                                <div className="w-12 shrink-0">
                                    <div className={`w-2.5 h-2.5 rounded-none border shadow-sm ${alert.severity === 'critical' ? 'bg-vanguard-critical border-vanguard-critical animate-pulse glow-pink' :
                                            alert.severity === 'high' ? 'bg-vanguard-amber border-vanguard-amber' :
                                                alert.severity === 'medium' ? 'bg-vanguard-cyan border-vanguard-cyan' :
                                                    'bg-vanguard-surface-light border-vanguard-border'
                                        }`} />
                                </div>

                                <div className="w-32 shrink-0 font-mono text-[10px] font-bold text-foreground">
                                    {alert.id}
                                </div>

                                <div className="flex-1 flex flex-col min-w-0">
                                    <span className="text-[11px] font-bold uppercase truncate pr-4">{alert.title}</span>
                                    <span className="text-[9px] text-muted-foreground uppercase mt-0.5">Vector_Audit_Required</span>
                                </div>

                                <div className="w-48 shrink-0 flex flex-col font-mono text-[9px]">
                                    <span className="text-vanguard-cyan">{alert.source}</span>
                                    <span className="text-muted-foreground">{alert.node}</span>
                                </div>

                                <div className="w-32 shrink-0 font-mono text-[10px] text-muted-foreground">
                                    {alert.timestamp} <span className="text-[8px] opacity-50">UTC</span>
                                </div>

                                <div className="w-32 shrink-0">
                                    <span className={`text-[10px] font-mono px-2 py-0.5 border border-vanguard-border ${alert.analyst === 'Unassigned' ? 'text-vanguard-amber bg-vanguard-amber/5' : 'text-vanguard-cyan bg-vanguard-cyan/5'
                                        }`}>
                                        {alert.analyst}
                                    </span>
                                </div>

                                <div className="w-12 shrink-0 flex justify-end">
                                    <ChevronRight size={14} className="text-muted-foreground group-hover:text-vanguard-cyan translate-x-0 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Queue Metrics */}
                <div className="mt-8 grid grid-cols-4 gap-6">
                    <div className="p-4 border border-vanguard-border bg-vanguard-surface/20 flex flex-col gap-1">
                        <span className="text-[8px] text-muted-foreground uppercase font-mono">Triage_Velocity</span>
                        <span className="text-lg font-bold text-vanguard-cyan">14.2m AVG</span>
                    </div>
                    <div className="p-4 border border-vanguard-border bg-vanguard-surface/20 flex flex-col gap-1">
                        <span className="text-[8px] text-muted-foreground uppercase font-mono">Total_Unassigned</span>
                        <span className="text-lg font-bold text-vanguard-amber">12 UNITS</span>
                    </div>
                    <div className="p-4 border border-vanguard-border bg-vanguard-surface/20 flex flex-col gap-1">
                        <span className="text-[8px] text-muted-foreground uppercase font-mono">FPR_Confidence</span>
                        <span className="text-lg font-bold text-vanguard-cyan">98.1%</span>
                    </div>
                    <div className="p-4 border border-vanguard-border bg-vanguard-surface/20 flex flex-col gap-1">
                        <span className="text-[8px] text-muted-foreground uppercase font-mono">Burst_Status</span>
                        <span className="text-lg font-bold text-vanguard-cyan italic uppercase">Nominal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
