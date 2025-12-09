import React from 'react';
import Layout from '../components/layout/Layout';
import WorkflowCanvas from '../components/workflows/WorkflowCanvas';
import DocumentGenerator from '../components/workflows/DocumentGenerator';
import { GitBranch } from 'lucide-react';

const Workflows = () => {
    return (
        <Layout title="Workflows & Export">
            <div className="page-intro">
                <h2 className="page-heading">
                    <GitBranch className="text-[#00f0ff]" style={{ color: 'var(--accent-cyan)' }} />
                    Orchestration & Reporting
                </h2>
                <p className="page-subheading">Manage n8n workflows and generate audit-ready reports.</p>
            </div>

            <div className="lg-grid-cols-3" style={{ height: '600px' }}>
                <div className="col-span-2" style={{ height: '100%' }}>
                    <WorkflowCanvas />
                </div>
                <div style={{ height: '100%' }}>
                    <DocumentGenerator />
                </div>
            </div>
        </Layout>
    );
};

export default Workflows;
