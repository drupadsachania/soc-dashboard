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
            <div className="flex items-center justify-between mb-6">
                <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b]" />
                    <input
                        type="text"
                        placeholder="Search logs..."
                        className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#00f0ff] w-64"
                    />
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-sm text-white transition-colors">
                        <Filter size={16} />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-sm text-white transition-colors">
                        <Download size={16} />
                        Export CSV
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-[rgba(255,255,255,0.05)]">
                            <th className="py-3 px-4 text-xs font-medium text-[#94a3b8] uppercase tracking-wider">Timestamp</th>
                            <th className="py-3 px-4 text-xs font-medium text-[#94a3b8] uppercase tracking-wider">User / Service</th>
                            <th className="py-3 px-4 text-xs font-medium text-[#94a3b8] uppercase tracking-wider">Action</th>
                            <th className="py-3 px-4 text-xs font-medium text-[#94a3b8] uppercase tracking-wider">Target</th>
                            <th className="py-3 px-4 text-xs font-medium text-[#94a3b8] uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[rgba(255,255,255,0.05)]">
                        {logs.map((log) => (
                            <tr key={log.id} className="hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                <td className="py-3 px-4 text-sm text-[#64748b] font-mono">{log.timestamp}</td>
                                <td className="py-3 px-4 text-sm text-white font-medium">{log.user}</td>
                                <td className="py-3 px-4 text-sm text-white">{log.action}</td>
                                <td className="py-3 px-4 text-sm text-[#94a3b8]">{log.target}</td>
                                <td className="py-3 px-4">
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
