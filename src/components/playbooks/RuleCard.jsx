import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { ArrowRight, ShieldAlert, ShieldCheck } from 'lucide-react';

const RuleCard = ({ title, type, conditions, actions }) => {
    const isHighRisk = type === 'high';
    const accentColor = isHighRisk ? 'var(--accent-red)' : 'var(--accent-green)';
    const borderColor = isHighRisk ? 'var(--accent-red)' : 'var(--accent-green)';
    const Icon = isHighRisk ? ShieldAlert : ShieldCheck;

    return (
        <Card className="rule-card" style={{ borderLeft: `4px solid ${borderColor}`, transform: 'translateY(0)', transition: 'transform 0.3s' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: accentColor }}>
                        <Icon size={20} />
                    </div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white' }}>{title}</h3>
                </div>
                <Badge variant={isHighRisk ? 'danger' : 'success'}>
                    {isHighRisk ? 'High Risk' : 'Low Risk'}
                </Badge>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Conditions</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {conditions.map((cond, idx) => (
                            <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)', fontFamily: 'monospace', fontSize: '0.875rem', color: 'var(--accent-cyan)' }}>
                                {cond}
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ArrowRight size={16} style={{ color: 'var(--text-muted)', transform: 'rotate(90deg)' }} />
                </div>

                <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Actions</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {actions.map((action, idx) => (
                            <span key={idx}
                                style={{
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    border: '1px solid',
                                    backgroundColor: isHighRisk ? 'rgba(255,42,109,0.1)' : 'rgba(5,213,170,0.1)',
                                    borderColor: isHighRisk ? 'rgba(255,42,109,0.2)' : 'rgba(5,213,170,0.2)',
                                    color: isHighRisk ? 'var(--accent-red)' : 'var(--accent-green)'
                                }}
                            >
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
