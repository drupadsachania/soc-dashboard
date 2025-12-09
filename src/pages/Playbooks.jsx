import React from 'react';
import Layout from '../components/layout/Layout';
import RuleCard from '../components/playbooks/RuleCard';
import { Zap } from 'lucide-react';

const Playbooks = () => {
    return (
        <Layout title="Playbook Quick Rules">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <Zap className="text-[#00f0ff]" />
                    Automation Logic
                </h2>
                <p className="text-[#94a3b8]">Define how the system responds to alerts based on risk scores and enrichment data.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* High Risk Column */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#ff2a6d] border-b border-[rgba(255,42,109,0.2)] pb-2 mb-4">
                        High Risk (Requires Approval)
                    </h3>

                    <RuleCard
                        title="Critical Malware Detection"
                        type="high"
                        conditions={[
                            "similarityScore > 85",
                            "AND",
                            "vtDetections > 10"
                        ]}
                        actions={[
                            "Quarantine Host",
                            "Isolate Network",
                            "Notify Analyst"
                        ]}
                    />

                    <RuleCard
                        title="Malicious IP Activity"
                        type="high"
                        conditions={[
                            "abuseScore > 70",
                            "AND",
                            "direction == 'outbound'"
                        ]}
                        actions={[
                            "Recommend Firewall Block",
                            "Create High Priority Ticket"
                        ]}
                    />
                </div>

                {/* Low Risk Column */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#05d5aa] border-b border-[rgba(5,213,170,0.2)] pb-2 mb-4">
                        Low Risk (Automated)
                    </h3>

                    <RuleCard
                        title="Suspicious Login Attempt"
                        type="low"
                        conditions={[
                            "similarityScore < 50",
                            "OR",
                            "knownUser == true"
                        ]}
                        actions={[
                            "Tag Alert",
                            "Add to Watchlist",
                            "Schedule Host Scan"
                        ]}
                    />

                    <RuleCard
                        title="Routine Port Scan"
                        type="low"
                        conditions={[
                            "threatLevel == 'low'",
                            "source == 'internal'"
                        ]}
                        actions={[
                            "Log Event",
                            "Close Ticket"
                        ]}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Playbooks;
