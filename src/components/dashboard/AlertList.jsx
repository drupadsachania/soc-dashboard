import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { AlertTriangle, Shield, Globe, Terminal, User } from 'lucide-react';

const alerts = [
    { id: 1, title: 'Suspicious PowerShell Execution', source: 'EDR', severity: 'danger', time: '2 mins ago', icon: Terminal },
    { id: 2, title: 'Unusual Login Location', source: 'Identity', severity: 'warning', time: '15 mins ago', icon: Globe },
    { id: 3, title: 'Malware Detected (Quarantined)', source: 'AV', severity: 'success', time: '1 hour ago', icon: Shield },
    { id: 4, title: 'Port Scan Detected', source: 'Network', severity: 'info', time: '2 hours ago', icon: AlertTriangle },
    { id: 5, title: 'New Admin User Created', source: 'Audit', severity: 'warning', time: '3 hours ago', icon: User },
];

const AlertList = () => {
    return (
        <Card title="Recent Alerts" action={<button className="link-action">View All</button>}>
            <div className="alert-list">
                {alerts.map((alert) => (
                    <div key={alert.id} className="alert-item group">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div className="alert-icon-box">
                                <alert.icon size={18} />
                            </div>
                            <div>
                                <h4 className="alert-title">{alert.title}</h4>
                                <div className="alert-meta">
                                    <span>{alert.source}</span>
                                    <span>•</span>
                                    <span>{alert.time}</span>
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
