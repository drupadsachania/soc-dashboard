import React from 'react';
import { Copy, Download, Search, FileText } from 'lucide-react';

export const MetadataPanel: React.FC = () => {
    const rawPayload = {
        alert_id: "77a1-ff02-bc32",
        source_service: "VanguardIDS",
        signature_match: "EXFIL_PATTERN_DETECTED",
        confidence: 0.942,
        threat_actor_guess: "APT-29-VARIANT",
        raw_packet_summary: "0x45 0x00 0x01 ... exfil_data_stream",
        encoded_payload: "YmFzZTY0X2Rhcmt3ZWIudHJhZmZpY19kdW1w"
    };

    return (
        <div className="h-full flex flex-col p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-vanguard-critical tracking-[0.2em] uppercase">CRITICAL_INCIDENT</span>
                    <h1 className="text-lg font-bold leading-tight mt-1 uppercase">ID-8642-ALPHA-X</h1>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 border border-vanguard-border hover:bg-vanguard-surface-light transition-colors text-muted-foreground hover:text-white">
                        <Copy size={16} />
                    </button>
                    <button className="p-2 border border-vanguard-border hover:bg-vanguard-surface-light transition-colors text-muted-foreground hover:text-white">
                        <Download size={16} />
                    </button>
                </div>
            </div>

            <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {/* Entity Extraction */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4 border-l-2 border-vanguard-critical pl-3">Extracted_Forensic_Context</h3>
                    <div className="grid grid-cols-2 gap-px bg-vanguard-border border border-vanguard-border overflow-hidden">
                        <div className="bg-vanguard-obsidian p-3 hover:bg-vanguard-surface transition-colors cursor-help">
                            <span className="text-[8px] uppercase text-muted-foreground block mb-1">Source_IP</span>
                            <span className="text-xs font-mono text-vanguard-cyan">203.0.113.42</span>
                        </div>
                        <div className="bg-vanguard-obsidian p-3 hover:bg-vanguard-surface transition-colors cursor-help">
                            <span className="text-[8px] uppercase text-muted-foreground block mb-1">Target_Node</span>
                            <span className="text-xs font-mono text-vanguard-amber">SRV-WBS-01</span>
                        </div>
                        <div className="bg-vanguard-obsidian p-3 hover:bg-vanguard-surface transition-colors cursor-help">
                            <span className="text-[8px] uppercase text-muted-foreground block mb-1">User_Context</span>
                            <span className="text-xs font-mono text-vanguard-cyan">m.rodriguez</span>
                        </div>
                        <div className="bg-vanguard-obsidian p-3 hover:bg-vanguard-surface transition-colors cursor-help">
                            <span className="text-[8px] uppercase text-muted-foreground block mb-1">Auth_Level</span>
                            <span className="text-xs font-mono text-vanguard-critical">ROOT_SSH</span>
                        </div>
                    </div>
                </section>

                {/* System Signals */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Integrity_Signals</h3>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between px-3 py-2 bg-vanguard-surface/40 border border-vanguard-border/50">
                            <span className="text-[9px] font-mono text-foreground uppercase">OS_Kernel_Verification</span>
                            <span className="text-[9px] font-mono text-vanguard-cyan">VALID</span>
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 bg-vanguard-surface/40 border border-vanguard-border/50">
                            <span className="text-[9px] font-mono text-foreground uppercase">Network_Flow_Consistency</span>
                            <span className="text-[9px] font-mono text-vanguard-amber">DEVIANT</span>
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 bg-vanguard-surface/40 border border-vanguard-border/50">
                            <span className="text-[9px] font-mono text-foreground uppercase">Identity_Correlation</span>
                            <span className="text-[9px] font-mono text-vanguard-cyan">SECURE</span>
                        </div>
                    </div>
                </section>

                {/* Raw Payload */}
                <section className="flex flex-col h-1/2 min-h-[400px]">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Original_Evidence_Payload</h3>
                        <div className="flex items-center gap-2">
                            <span className="text-[8px] font-mono text-vanguard-cyan">JSON_FORMATTED</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-vanguard-cyan" />
                        </div>
                    </div>
                    <div className="flex-1 bg-vanguard-surface-light p-5 font-mono text-[11px] border border-vanguard-border overflow-auto scanline-depth relative">
                        <div className="absolute top-0 right-0 p-2 text-[8px] text-muted-foreground opacity-20 pointer-events-none">RAW_FORENSIC_BUFFER_V1</div>
                        <pre className="text-foreground leading-relaxed">
                            {Object.entries(rawPayload).map(([key, value]) => (
                                <div key={key} className="mb-1.5">
                                    <span className="text-vanguard-critical">"{key}"</span>: <span className={typeof value === 'number' ? 'text-vanguard-amber' : 'text-vanguard-cyan'}>
                                        {typeof value === 'string' ? `"${value}"` : value}
                                    </span>,
                                </div>
                            ))}
                        </pre>
                    </div>
                </section>
            </div>

            <div className="mt-6 pt-6 border-t border-vanguard-border">
                <div className="relative">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search payload strings..."
                        className="w-full h-10 bg-vanguard-obsidian border border-vanguard-border pl-10 pr-4 text-[10px] font-mono focus:outline-none focus:border-vanguard-cyan"
                    />
                </div>
            </div>
        </div>
    );
};
