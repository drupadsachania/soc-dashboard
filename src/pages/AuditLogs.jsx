import React from 'react';
import Layout from '../components/layout/Layout';
import AuditTable from '../components/audit/AuditTable';
import { FileText } from 'lucide-react';

const AuditLogs = () => {
    return (
        <Layout title="Audit Logs">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <FileText className="text-[#00f0ff]" />
                    Compliance & Audit
                </h2>
                <p className="text-[#94a3b8]">Immutable record of all system actions and analyst decisions.</p>
            </div>

            <div className="h-[600px]">
                <AuditTable />
            </div>
        </Layout>
    );
};

export default AuditLogs;
