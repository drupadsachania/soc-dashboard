import React from 'react';
import { Search, Shield, Bell, User, Cpu } from 'lucide-react';

export const TacticalTopBar: React.FC = () => {
    return (
        <div className="h-full flex items-center justify-between px-4 bg-vanguard-surface">
            {/* OS Identity */}
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-vanguard-critical/10 border border-vanguard-critical/30">
                    <Shield size={18} className="text-vanguard-critical" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-vanguard-cyan uppercase leading-none">VANGUARD OS</span>
                    <span className="text-[8px] font-mono text-muted-foreground uppercase leading-none mt-1">v3.0.0-PROXIMA</span>
                </div>
                <div className="h-6 w-px bg-vanguard-border mx-2" />
                <div className="flex items-center gap-2 px-2 py-0.5 border border-vanguard-cyan/20 bg-vanguard-cyan/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-vanguard-cyan animate-vanguard-pulse" />
                    <span className="text-[9px] font-mono text-vanguard-cyan uppercase">Node_Synced</span>
                </div>
            </div>

            {/* Global Search */}
            <div className="flex-1 max-w-xl px-12">
                <div className="relative group">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-vanguard-cyan transition-colors" />
                    <input
                        type="text"
                        placeholder="Search forensic entities, cases, or telemetry..."
                        className="w-full h-8 bg-vanguard-obsidian border border-vanguard-border pl-10 pr-4 text-xs font-mono focus:outline-none focus:border-vanguard-cyan transition-colors"
                    />
                </div>
            </div>

            {/* System Identity & Notifications */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-6 mr-4 font-mono text-[10px] text-muted-foreground uppercase">
                    <div className="flex items-center gap-2">
                        <Cpu size={12} />
                        <span>Load: 2.1%</span>
                    </div>
                </div>
                <button className="relative p-2 hover:bg-vanguard-surface-light text-muted-foreground hover:text-vanguard-cyan transition-colors">
                    <Bell size={18} />
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-vanguard-critical border border-vanguard-obsidian" />
                </button>
                <div className="flex items-center gap-2 pl-2 border-l border-vanguard-border">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-bold uppercase leading-none">A. Chen</span>
                        <span className="text-[8px] text-vanguard-cyan font-mono leading-none mt-1 uppercase">Lead_Analyst</span>
                    </div>
                    <div className="w-8 h-8 bg-vanguard-surface-light border border-vanguard-border flex items-center justify-center">
                        <User size={16} className="text-muted-foreground" />
                    </div>
                </div>
            </div>
        </div>
    );
};
