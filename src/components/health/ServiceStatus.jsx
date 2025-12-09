import React from 'react';
import Card from '../common/Card';
import { Database, Server, Cpu, Activity } from 'lucide-react';

const services = [
    { name: 'n8n Orchestrator', status: 'operational', uptime: '99.9%', latency: '45ms', icon: Activity },
    { name: 'Postgres DB', status: 'operational', uptime: '99.99%', latency: '12ms', icon: Database },
    { name: 'Redis Cache', status: 'operational', uptime: '100%', latency: '2ms', icon: Server },
    { name: 'FastAPI Inference', status: 'degraded', uptime: '98.5%', latency: '150ms', icon: Cpu },
];

const ServiceStatus = () => {
    return (
        <Card title="System Services">
            <div className="grid-cols-2" style={{ gap: '1rem' }}>
                {services.map((service) => (
                    <div key={service.name} style={{
                        background: 'rgba(255,255,255,0.03)',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
                                <service.icon size={20} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '0.875rem', fontWeight: 500, color: 'white' }}>{service.name}</h4>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                                    <span style={{
                                        width: '8px', height: '8px', borderRadius: '50%',
                                        backgroundColor: service.status === 'operational' ? 'var(--accent-green)' : 'var(--accent-orange)',
                                        boxShadow: service.status === 'operational' ? '0 0 5px var(--accent-green)' : '0 0 5px var(--accent-orange)'
                                    }}></span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'capitalize' }}>{service.status}</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Latency</p>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: service.latency === '150ms' ? 'var(--accent-orange)' : 'var(--accent-cyan)' }}>{service.latency}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default ServiceStatus;
