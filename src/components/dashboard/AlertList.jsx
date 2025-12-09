import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { AlertTriangle, Shield, Globe, Terminal } from 'lucide-react';

const alerts = [
    { id: 1, title: 'Suspicious PowerShell Execution', source: 'EDR', severity: 'danger', time: '2 mins ago', icon: Terminal },
    { id: 2, title: 'Unusual Login Location', source: 'Identity', severity: 'warning', time: '15 mins ago', icon: Globe },
    { id: 3, title: 'Malware Detected (Quarantined)', source: 'AV', severity: 'success', time: '1 hour ago', icon: Shield },
    { id: 4, title: 'Port Scan Detected', source: 'Network', severity: 'info', time: '2 hours ago', icon: AlertTriangle },
    { id: 5, title: 'New Admin User Created', source: 'Audit', severity: 'warning', time: '3 hours ago', icon: User },
];

import { User } from 'lucide-react';

const AlertList = () => {
    return (
        <Card title="Recent Alerts" action={<button className="text-xs text-[#00f0ff] hover:underline">View All</button>}>
            <div className="space-y-4">
                {alerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-[rgba(255,255,255,0.03)] transition-colors group cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className={`p-2 rounded-lg bg-[rgba(255,255,255,0.05)] group-hover:bg-[rgba(255,255,255,0.1)] transition-colors`}>
                                <alert.icon size={18} className="text-[#94a3b8] group-hover:text-white" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white group-hover:text-[#00f0ff] transition-colors">{alert.title}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-[#64748b]">{alert.source}</span>
                                    <span className="text-xs text-[#64748b]">•</span>
                                    <span className="text-xs text-[#64748b]">{alert.time}</span>
                                </div>
                            </div>
                        </div>
                        <Badge variant={alert.severity}>{alert.severity.toUpperCase()}</Badge>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default AlertList;
