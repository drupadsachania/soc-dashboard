import React from 'react';
import Layout from '../components/layout/Layout';
import KPICard from '../components/dashboard/KPICard';
import FlowVisualizer from '../components/dashboard/FlowVisualizer';
import AlertList from '../components/dashboard/AlertList';
import ClassificationChart from '../components/dashboard/ClassificationChart';
import { Layers, Clock, ShieldAlert, Activity } from 'lucide-react';

const Dashboard = () => {
    return (
        <Layout title="Dashboard">
            <div className="space-y-6">
                {/* KPI Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <KPICard
                        title="Active Queue"
                        value="12"
                        trend="up"
                        trendValue="+2"
                        icon={Layers}
                        color="cyan"
                    />
                    <KPICard
                        title="Avg Search Time"
                        value="1.2s"
                        trend="down"
                        trendValue="-0.3s"
                        icon={Activity}
                        color="purple"
                    />
                    <KPICard
                        title="Mean Time to Detect"
                        value="45s"
                        trend="down"
                        trendValue="-12%"
                        icon={Clock}
                        color="green"
                    />
                    <KPICard
                        title="Critical Threats"
                        value="3"
                        trend="up"
                        trendValue="+1"
                        icon={ShieldAlert}
                        color="red"
                    />
                </div>

                {/* Flow Visualizer */}
                <FlowVisualizer />

                {/* Bottom Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <AlertList />
                    </div>
                    <div className="lg:col-span-1">
                        <ClassificationChart />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
