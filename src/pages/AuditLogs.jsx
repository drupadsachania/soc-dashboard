import React from 'react';
import Layout from '../components/layout/Layout';
import AuditTable from '../components/audit/AuditTable';
import { FileText } from 'lucide-react';

const AuditLogs = () => {
    return (
        <Layout title="Audit Logs">
            <div className="page-intro">
                <h2 className="page-heading">
                    <FileText className="text-[#00f0ff]" style={{ color: 'var(--accent-cyan)' }} />
                    Compliance & Audit
                </h2>
                <p className="page-subheading">Immutable record of all system actions and analyst decisions.</p>
            </div>

            <div style={{ minHeight: '600px' }}>
                <AuditTable />
            </div>
        </Layout>
    );
};

export default AuditLogs;
