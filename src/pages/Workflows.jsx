import React from 'react';
import Layout from '../components/layout/Layout';
import WorkflowCanvas from '../components/workflows/WorkflowCanvas';
import DocumentGenerator from '../components/workflows/DocumentGenerator';
import { GitBranch } from 'lucide-react';

const Workflows = () => {
    return (
        <Layout title="Workflows & Export">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <GitBranch className="text-[#00f0ff]" />
                    Orchestration & Reporting
                </h2>
                <p className="text-[#94a3b8]">Manage n8n workflows and generate audit-ready reports.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
                <div className="lg:col-span-2 h-full">
                    <WorkflowCanvas />
                </div>
                <div className="lg:col-span-1 h-full">
                    <DocumentGenerator />
                </div>
            </div>
        </Layout>
    );
};

export default Workflows;
