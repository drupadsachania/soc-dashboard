import React from 'react';
import Layout from '../components/layout/Layout';
import ServiceStatus from '../components/health/ServiceStatus';
import LLMStats from '../components/health/LLMStats';
import { Activity } from 'lucide-react';

const HealthStats = () => {
    return (
        <Layout title="System Health & Stats">
            <div className="page-intro">
                <h2 className="page-heading">
                    <Activity className="text-[#00f0ff]" style={{ color: 'var(--accent-cyan)' }} />
                    Infrastructure Status
                </h2>
                <p className="page-subheading">Real-time monitoring of local ML models and orchestration services.</p>
            </div>

            <div className="grid-cols-1">
                <ServiceStatus />
                <LLMStats />
            </div>
        </Layout>
    );
};

export default HealthStats;
