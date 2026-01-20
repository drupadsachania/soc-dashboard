import React from 'react';

export const DashboardView: React.FC = () => {
    return (
        <div className="h-full w-full flex flex-col p-8 bg-vanguard-obsidian scanline-depth">
            <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-vanguard-cyan tracking-[0.2em] uppercase">COMMAND_CENTER</span>
                    <h1 className="text-2xl font-bold uppercase mt-1">Situational Awareness</h1>
                </div>
                <div className="flex gap-4">
                    <div className="px-6 py-2 border border-vanguard-border bg-vanguard-surface/50 text-[10px] font-mono">
                        Uptime: 142d 06h 11m
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <div className="p-6 border border-vanguard-border bg-vanguard-surface/30">
                    <span className="text-[10px] text-muted-foreground uppercase mb-4 block">System_Health</span>
                    <div className="text-3xl font-bold text-vanguard-cyan">99.8%</div>
                </div>
                <div className="p-6 border border-vanguard-border bg-vanguard-surface/30">
                    <span className="text-[10px] text-muted-foreground uppercase mb-4 block">Active_Alerts</span>
                    <div className="text-3xl font-bold text-vanguard-critical">124</div>
                </div>
                <div className="p-6 border border-vanguard-border bg-vanguard-surface/30">
                    <span className="text-[10px] text-muted-foreground uppercase mb-4 block">Data_Ingest</span>
                    <div className="text-3xl font-bold text-vanguard-amber">1.4 TB/s</div>
                </div>
            </div>
        </div>
    );
};
