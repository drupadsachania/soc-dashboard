import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { Search, Filter, Download } from 'lucide-react';

const logs = [
    { id: 1, timestamp: '2025-12-09 11:42:12', user: 'System', action: 'Auto-Isolation', target: '192.168.1.45', status: 'success' },
    { id: 2, timestamp: '2025-12-09 11:40:05', user: 'j.doe', action: 'Approve Playbook', target: 'Alert #892', status: 'success' },
    { id: 3, timestamp: '2025-12-09 11:35:22', user: 'System', action: 'Enrichment Failed', target: 'VirusTotal API', status: 'failure' },
    { id: 4, timestamp: '2025-12-09 11:30:00', user: 'admin', action: 'Update Rule', target: 'Firewall Block', status: 'success' },
    { id: 5, timestamp: '2025-12-09 11:15:10', user: 'System', action: 'Ingest Alert', target: 'Vision One', status: 'success' },
    { id: 6, timestamp: '2025-12-09 10:55:45', user: 'k.smith', action: 'Login', target: 'Dashboard', status: 'success' },
];

const AuditTable = () => {
    return (
        <Card title="System Audit Logs" className="h-full">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ position: 'relative' }}>
                    <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                        type="text"
                        placeholder="Search logs..."
                        className="input-glass"
                        style={{ padding: '0.5rem 1rem 0.5rem 2.5rem', borderRadius: '8px', width: '250px' }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none', cursor: 'pointer' }}>
                        <Filter size={16} />
                        Filter
                    </button>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none', cursor: 'pointer' }}>
                        <Download size={16} />
                        Export CSV
                    </button>
                </div>
            </div>

            <div className="data-table-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Timestamp</th>
                            <th>User / Service</th>
                            <th>Action</th>
                            <th>Target</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log) => (
                            <tr key={log.id}>
                                <td className="font-mono">{log.timestamp}</td>
                                <td style={{ fontWeight: 500, color: 'white' }}>{log.user}</td>
                                <td style={{ color: 'white' }}>{log.action}</td>
                                <td>{log.target}</td>
                                <td>
                                    <Badge variant={log.status === 'success' ? 'success' : 'danger'}>
                                        {log.status.toUpperCase()}
                                    </Badge>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default AuditTable;
