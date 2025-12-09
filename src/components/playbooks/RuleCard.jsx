import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { ArrowRight, ShieldAlert, ShieldCheck } from 'lucide-react';

const RuleCard = ({ title, type, conditions, actions }) => {
    const isHighRisk = type === 'high';
    const accentColor = isHighRisk ? 'text-[#ff2a6d]' : 'text-[#05d5aa]';
    const borderColor = isHighRisk ? 'border-[#ff2a6d]' : 'border-[#05d5aa]';
    const Icon = isHighRisk ? ShieldAlert : ShieldCheck;

    return (
        <Card className={`border-l-4 ${borderColor} hover:translate-y-[-4px] transition-transform duration-300`}>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-[rgba(255,255,255,0.05)] ${accentColor}`}>
                        <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <Badge variant={isHighRisk ? 'danger' : 'success'}>
                    {isHighRisk ? 'High Risk' : 'Low Risk'}
                </Badge>
            </div>

            <div className="space-y-4">
                <div>
                    <p className="text-xs text-[#94a3b8] uppercase tracking-wider mb-2">Conditions</p>
                    <div className="space-y-2">
                        {conditions.map((cond, idx) => (
                            <div key={idx} className="bg-[rgba(0,0,0,0.3)] p-2 rounded border border-[rgba(255,255,255,0.05)] font-mono text-sm text-[#00f0ff]">
                                {cond}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <ArrowRight size={16} className="text-[#64748b] rotate-90" />
                </div>

                <div>
                    <p className="text-xs text-[#94a3b8] uppercase tracking-wider mb-2">Actions</p>
                    <div className="flex flex-wrap gap-2">
                        {actions.map((action, idx) => (
                            <span key={idx} className={`px-3 py-1 rounded-full text-sm font-medium border ${isHighRisk ? 'bg-[rgba(255,42,109,0.1)] border-[rgba(255,42,109,0.2)] text-[#ff2a6d]' : 'bg-[rgba(5,213,170,0.1)] border-[rgba(5,213,170,0.2)] text-[#05d5aa]'}`}>
                                {action}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default RuleCard;
