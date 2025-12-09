import React from 'react';
import Layout from '../components/layout/Layout';
import ServiceStatus from '../components/health/ServiceStatus';
import LLMStats from '../components/health/LLMStats';
import { Activity } from 'lucide-react';

const HealthStats = () => {
    return (
        <Layout title="System Health & Stats">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <Activity className="text-[#00f0ff]" />
                    Infrastructure Status
                </h2>
                <p className="text-[#94a3b8]">Real-time monitoring of local ML models and orchestration services.</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
                <ServiceStatus />
                <LLMStats />
            </div>
        </Layout>
    );
};

export default HealthStats;
