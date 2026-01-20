import React from 'react';

export const ThreatMapView: React.FC = () => {
    return (
        <div className="h-full w-full flex flex-col p-8 bg-vanguard-obsidian scanline-depth">
            <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-vanguard-amber tracking-[0.2em] uppercase">TOPOLOGICAL_CORRELATION</span>
                    <h1 className="text-2xl font-bold uppercase mt-1">Threat Map</h1>
                </div>
            </div>
            <div className="flex-1 border border-vanguard-border bg-vanguard-surface/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)]" />
                <div className="text-[10px] font-mono text-vanguard-cyan uppercase animate-pulse">Initializing_Cartographic_Engine...</div>
            </div>
        </div>
    );
};
