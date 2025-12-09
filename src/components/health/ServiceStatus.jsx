import React from 'react';
import Card from '../common/Card';
import { Database, Server, Cpu, Activity, CheckCircle2 } from 'lucide-react';

const services = [
    { name: 'n8n Orchestrator', status: 'operational', uptime: '99.9%', latency: '45ms', icon: Activity },
    { name: 'Postgres DB', status: 'operational', uptime: '99.99%', latency: '12ms', icon: Database },
    { name: 'Redis Cache', status: 'operational', uptime: '100%', latency: '2ms', icon: Server },
    { name: 'FastAPI Inference', status: 'degraded', uptime: '98.5%', latency: '150ms', icon: Cpu },
];

const ServiceStatus = () => {
    return (
        <Card title="System Services">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                    <div key={service.name} className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg border border-[rgba(255,255,255,0.05)] flex items-center justify-between group hover:border-[rgba(255,255,255,0.1)] transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.05)] text-[#94a3b8] group-hover:text-white transition-colors">
                                <service.icon size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white">{service.name}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className={`w-2 h-2 rounded-full ${service.status === 'operational' ? 'bg-[#05d5aa] shadow-[0_0_5px_#05d5aa]' : 'bg-orange-400 shadow-[0_0_5px_orange]'}`}></span>
                                    <span className="text-xs text-[#94a3b8] capitalize">{service.status}</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-[#94a3b8]">Latency</p>
                            <p className={`font-mono text-sm ${service.latency === '150ms' ? 'text-orange-400' : 'text-[#00f0ff]'}`}>{service.latency}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default ServiceStatus;
