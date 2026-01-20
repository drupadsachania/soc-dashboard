/**
 * VANGUARD OS v3 - Technical Data Contracts
 * These interfaces define the formal bridge between the UI and future Backend.
 */

export type ConfidenceLevel = 'LOW' | 'MEDIUM' | 'HIGH';
export type EntityType = 'IP' | 'USER' | 'HOST' | 'DOMAIN';
export type PlaybookStepStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'BLOCKED';

export interface ThreatReputation {
    score: number; // 0-100
    label: string;
    description: string;
}

export interface ThreatEntity {
    id: string;
    type: EntityType;
    value: string;
    reputation: ThreatReputation;
    confidence: ConfidenceLevel;
    tags: string[];
    associations: string[]; // Threat actors, malware families
}

export interface MitreTechnique {
    id: string; // T1071.001
    name: string;
    tactic: string;
    description: string;
}

export interface ThreatNarrative {
    whyItMatters: string;
    suggestedNextSteps: string[];
}

export interface PlaybookStep {
    id: string;
    title: string;
    status: PlaybookStepStatus;
    type: 'MANUAL' | 'AUTO' | 'APPROVAL';
    instruction: string;
    logs?: string[];
}

export interface AuditEvent {
    id: string;
    timestamp: string;
    analystId: string;
    action: string;
    confidence: number;
    decision: 'APPROVE' | 'REJECT' | 'ESCALATE';
    metadata?: Record<string, any>;
}
