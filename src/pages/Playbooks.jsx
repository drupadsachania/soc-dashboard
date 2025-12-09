import React from 'react';
import Layout from '../components/layout/Layout';
import RuleCard from '../components/playbooks/RuleCard';
import { Zap } from 'lucide-react';

const Playbooks = () => {
    return (
        <Layout title="Playbook Quick Rules">
            <div className="page-intro">
                <h2 className="page-heading">
                    <Zap className="text-[#00f0ff]" style={{ color: 'var(--accent-cyan)' }} />
                    Automation Logic
                </h2>
                <p className="page-subheading">Define how the system responds to alerts based on risk scores and enrichment data.</p>
            </div>

            <div className="grid-cols-2">
                {/* High Risk Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--accent-red)', borderBottom: '1px solid rgba(255,42,109,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--accent-green)', borderBottom: '1px solid rgba(5,213,170,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
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
