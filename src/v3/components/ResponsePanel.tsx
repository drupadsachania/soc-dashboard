import React, { useState } from 'react';
import {
    ShieldCheck,
    Crosshair,
    Zap,
    CheckSquare,
    Square,
    ChevronRight,
    Info,
    AlertTriangle,
    User,
    Server,
    Globe,
    ExternalLink,
    Lock,
    Activity,
    ClipboardList,
    History
} from 'lucide-react';
import { PlaybookStep, PlaybookStepStatus, ConfidenceLevel, ThreatEntity } from '../types/contracts';

/**
 * MOCK_DATA: Representative of the backend contract.
 * In production, this would be fetched based on the active investigation.
 */
const MOCK_THREAT_ENTITY: ThreatEntity = {
    id: 'ENT-9921',
    type: 'IP',
    value: '185.156.177.34',
    reputation: {
        score: 92,
        label: 'Highly_Malicious',
        description: 'Associated with known Cobalt Strike C2 infrastructure.'
    },
    confidence: 'HIGH',
    tags: ['C2', 'FINANCIAL_THREAT', 'TOR_EXIT'],
    associations: ['UNC2452', 'SOLARMARKER']
};

export const ResponsePanel: React.FC = () => {
    const [steps, setSteps] = useState<PlaybookStep[]>([
        {
            id: '1',
            title: 'Validate Entity Reputation',
            status: 'COMPLETED',
            type: 'AUTO',
            instruction: 'Scanning external feeds (VT, OTX, CrowdStrike) for entity reputation.',
            logs: ['Request sent to VT API', 'Reputation score received: 92/100', 'Entity flagged as Malicious.']
        },
        {
            id: '2',
            title: 'Memory Forensics (Volatile)',
            status: 'IN_PROGRESS',
            type: 'AUTO',
            instruction: 'Dumping volatile RAM pages from SRV-WBS-01 for analysis.',
            logs: ['Connection established to SRV-WBS-01', 'Dumping memory segment 0x000100...']
        },
        {
            id: '3',
            title: 'Identify Lateral Movement',
            status: 'PENDING',
            type: 'MANUAL',
            instruction: 'Review NetFlow from SRV-WBS-01 for 10.x internally.'
        },
        {
            id: '4',
            title: 'Host Quarantine',
            status: 'PENDING',
            type: 'APPROVAL',
            instruction: 'Trigger network level isolation via V-Gateway.'
        }
    ]);

    const getStatusIcon = (status: PlaybookStepStatus) => {
        switch (status) {
            case 'COMPLETED': return <CheckSquare size={14} className="text-vanguard-cyan" />;
            case 'IN_PROGRESS': return <div className="w-3.5 h-3.5 border-2 border-vanguard-cyan border-t-transparent rounded-full animate-spin" />;
            case 'BLOCKED': return <AlertTriangle size={14} className="text-vanguard-critical" />;
            default: return <Square size={14} className="text-muted-foreground" />;
        }
    };

    return (
        <div className="h-full flex flex-col overflow-hidden">
            {/* 1. Threat Intel / Enrichment Surface */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <section className="p-6 border-b border-vanguard-border bg-vanguard-surface/30">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                            <Activity size={12} className="text-vanguard-cyan" />
                            Tactical_Intelligence
                        </h3>
                        <div className="px-2 py-0.5 border border-vanguard-border bg-vanguard-obsidian text-[8px] font-mono text-muted-foreground uppercase">
                            Ref: {MOCK_THREAT_ENTITY.id}
                        </div>
                    </div>

                    {/* 1.1 Entity Summary */}
                    <div className="p-4 border border-vanguard-border bg-vanguard-obsidian mb-4">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 border border-vanguard-cyan/30 bg-vanguard-cyan/5 flex items-center justify-center">
                                {MOCK_THREAT_ENTITY.type === 'IP' && <Globe size={18} className="text-vanguard-cyan" />}
                                {MOCK_THREAT_ENTITY.type === 'USER' && <User size={18} className="text-vanguard-cyan" />}
                                {MOCK_THREAT_ENTITY.type === 'HOST' && <Server size={18} className="text-vanguard-cyan" />}
                            </div>
                            <div>
                                <div className="text-[14px] font-bold font-mono text-foreground tracking-tight">{MOCK_THREAT_ENTITY.value}</div>
                                <div className="text-[9px] text-muted-foreground uppercase font-mono tracking-tighter">Source_Entity_Type: {MOCK_THREAT_ENTITY.type}</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {MOCK_THREAT_ENTITY.tags.map(tag => (
                                <span key={tag} className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-[8px] font-mono text-muted-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 1.2 Reputation & Confidence */}
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1 p-3 border border-vanguard-border bg-vanguard-obsidian flex flex-col">
                            <span className="text-[8px] text-muted-foreground uppercase mb-1">Reputation_Score</span>
                            <div className="flex items-baseline gap-1">
                                <span className={`text-2xl font-bold leading-none ${MOCK_THREAT_ENTITY.reputation.score > 80 ? 'text-vanguard-critical' : 'text-vanguard-amber'}`}>
                                    {MOCK_THREAT_ENTITY.reputation.score}
                                </span>
                                <span className="text-[10px] text-muted-foreground font-mono">/100</span>
                            </div>
                            <span className={`text-[8px] font-bold uppercase mt-1 ${MOCK_THREAT_ENTITY.reputation.score > 80 ? 'text-vanguard-critical' : 'text-vanguard-amber'}`}>
                                {MOCK_THREAT_ENTITY.reputation.label}
                            </span>
                        </div>
                        <div className="flex-1 p-3 border border-vanguard-border bg-vanguard-obsidian flex flex-col">
                            <span className="text-[8px] text-muted-foreground uppercase mb-1">Confidence_Level</span>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold leading-none text-vanguard-cyan">
                                    {MOCK_THREAT_ENTITY.confidence}
                                </span>
                            </div>
                            <div className="flex gap-0.5 mt-auto">
                                <div className={`h-1 flex-1 ${MOCK_THREAT_ENTITY.confidence === 'LOW' || MOCK_THREAT_ENTITY.confidence === 'MEDIUM' || MOCK_THREAT_ENTITY.confidence === 'HIGH' ? 'bg-vanguard-cyan' : 'bg-vanguard-border'}`} />
                                <div className={`h-1 flex-1 ${MOCK_THREAT_ENTITY.confidence === 'MEDIUM' || MOCK_THREAT_ENTITY.confidence === 'HIGH' ? 'bg-vanguard-cyan' : 'bg-vanguard-border'}`} />
                                <div className={`h-1 flex-1 ${MOCK_THREAT_ENTITY.confidence === 'HIGH' ? 'bg-vanguard-cyan' : 'bg-vanguard-border'}`} />
                            </div>
                        </div>
                    </div>

                    {/* 1.3 MITRE & Associations */}
                    <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between p-2 border border-vanguard-border bg-vanguard-surface/50">
                            <span className="text-[9px] text-muted-foreground uppercase font-mono">MITRE_Technique</span>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold font-mono text-vanguard-cyan">T1071.001</span>
                                <ExternalLink size={10} className="text-muted-foreground" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-2 border border-vanguard-border bg-vanguard-surface/50">
                            <span className="text-[9px] text-muted-foreground uppercase font-mono">Known_Associations</span>
                            <span className="text-[10px] font-bold font-mono text-vanguard-amber">UNC2452 (SolarWinds)</span>
                        </div>
                    </div>

                    {/* 1.4 Why This Matters (LLM Block) */}
                    <div className="p-4 border-l-2 border-vanguard-cyan bg-vanguard-cyan/5 mb-4">
                        <h4 className="text-[9px] font-bold text-vanguard-cyan uppercase mb-2 flex items-center gap-2">
                            <Zap size={10} /> Why_This_Matters_ (AI_ANALYST)
                        </h4>
                        <p className="text-[11px] leading-relaxed text-foreground/80 italic">
                            This IP has been identified as a persistent Command & Control (C2) node. The overlap with known threat actor patterns suggests a high probability of targeted data exfiltration attempts against our infrastructure.
                        </p>
                    </div>

                    {/* 1.5 Suggested Next Steps */}
                    <div className="space-y-2">
                        <h4 className="text-[8px] font-bold text-muted-foreground uppercase mb-1">Suggested_Next_Steps</h4>
                        {[
                            'Verify active egress to this subnet',
                            'Revoke auth tokens for users active on SRV-WBS-01',
                            'Initiate deep payload inspection on perimeter'
                        ].map((step, i) => (
                            <div key={i} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                                <ChevronRight size={10} className="text-vanguard-cyan" />
                                <span>{step}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. Remediation Playbook Surface */}
                <section className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                            <ClipboardList size={12} className="text-vanguard-cyan" />
                            Active_Response_Playbook
                        </h3>
                        <span className="text-[9px] font-mono text-vanguard-cyan bg-vanguard-cyan/5 px-2 py-0.5 border border-vanguard-cyan/20 uppercase">PB-99-R2</span>
                    </div>

                    <div className="space-y-4">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`p-4 border relative group transition-all ${step.status === 'IN_PROGRESS' ? 'border-vanguard-cyan bg-vanguard-cyan/5 shadow-[0_0_15px_-5px_rgba(0,255,255,0.2)]' :
                                        step.status === 'COMPLETED' ? 'border-vanguard-border bg-vanguard-surface opacity-60' :
                                            'border-vanguard-border bg-vanguard-surface/30'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        {getStatusIcon(step.status)}
                                        <span className={`text-[11px] font-bold uppercase tracking-tight ${step.status === 'IN_PROGRESS' ? 'text-vanguard-cyan' : 'text-foreground'}`}>
                                            {step.title}
                                        </span>
                                    </div>
                                    <div className={`px-1.5 py-0.5 text-[8px] font-mono border flex items-center gap-1 ${step.type === 'AUTO' ? 'border-vanguard-cyan text-vanguard-cyan' :
                                            step.type === 'APPROVAL' ? 'border-vanguard-critical text-vanguard-critical' :
                                                'border-vanguard-amber text-vanguard-amber'
                                        }`}>
                                        {step.type === 'APPROVAL' && <Lock size={8} />}
                                        {step.type}
                                    </div>
                                </div>
                                <p className="text-[11px] text-muted-foreground leading-snug pl-6 mb-3">
                                    {step.instruction}
                                </p>

                                {/* Execution Logs (Mocked) */}
                                {step.logs && step.logs.length > 0 && (
                                    <div className="ml-6 mt-3 pt-3 border-t border-vanguard-border/30 space-y-1">
                                        <div className="flex items-center gap-2 text-[8px] text-muted-foreground uppercase font-bold mb-1">
                                            <History size={10} /> Execution_Log
                                        </div>
                                        {step.logs.map((log, i) => (
                                            <div key={i} className="text-[9px] font-mono text-vanguard-cyan/70">
                                                <span className="opacity-50 mr-2">[{new Date().toLocaleTimeString()}]</span>
                                                {log}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Operational Guardrail */}
                    <div className="mt-8 p-4 border border-dashed border-vanguard-critical/30 bg-vanguard-critical/5 flex gap-4 items-start">
                        <AlertTriangle size={18} className="text-vanguard-critical shrink-0 mt-0.5" />
                        <div>
                            <p className="text-[10px] text-foreground font-bold uppercase mb-1">Critical_Action_Lockout</p>
                            <p className="text-[10px] text-muted-foreground leading-relaxed">
                                Automation is currently restricted to <span className="text-vanguard-cyan font-mono">READ-ONLY_FORENSICS</span>. Destructive actions or network isolation require manual cryptographic approval via the <span className="text-vanguard-cyan font-mono font-bold">Action_Gate</span>.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

