import React from 'react';
import Card from '../common/Card';
import { Webhook, Database, Mail, Shield, Globe, ArrowRight } from 'lucide-react';

const Node = ({ icon: Icon, label, color, x, y }) => (
    <div
        className="absolute flex flex-col items-center gap-2 p-3 rounded-lg bg-[#1e1e24] border border-[rgba(255,255,255,0.1)] shadow-lg hover:border-[#00f0ff] transition-colors cursor-pointer z-10"
        style={{ left: x, top: y }}
    >
        <div className={`p-2 rounded-md ${color}`}>
            <Icon size={20} />
        </div>
        <span className="text-xs font-medium text-white">{label}</span>

        {/* Connection Points */}
        <div className="absolute -right-1 top-1/2 w-2 h-2 bg-[#64748b] rounded-full -translate-y-1/2"></div>
        <div className="absolute -left-1 top-1/2 w-2 h-2 bg-[#64748b] rounded-full -translate-y-1/2"></div>
    </div>
);

const Connection = ({ x1, y1, x2, y2 }) => {
    // Simple straight line for demo, could be bezier
    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

    return (
        <div
            className="absolute h-0.5 bg-[#64748b] origin-left z-0"
            style={{
                left: x1,
                top: y1,
                width: length,
                transform: `rotate(${angle}deg)`
            }}
        ></div>
    );
};

const WorkflowCanvas = () => {
    return (
        <Card title="n8n Workflow Editor" action={<button className="px-3 py-1 text-xs bg-[#00f0ff] text-black font-bold rounded hover:bg-[#00d0df]">Save Workflow</button>}>
            <div className="relative w-full h-[400px] bg-[rgba(0,0,0,0.2)] rounded-lg border border-[rgba(255,255,255,0.05)] overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                </div>

                {/* Nodes */}
                <Node icon={Webhook} label="Webhook" color="bg-orange-500 text-white" x={50} y={150} />
                <Node icon={Globe} label="Enrichment" color="bg-blue-500 text-white" x={250} y={150} />
                <Node icon={Database} label="Postgres" color="bg-green-500 text-white" x={450} y={150} />
                <Node icon={Shield} label="Firewall" color="bg-red-500 text-white" x={650} y={100} />
                <Node icon={Mail} label="Email" color="bg-purple-500 text-white" x={650} y={200} />

                {/* Connections (approximate coordinates based on node positions) */}
                <Connection x1={120} y1={185} x2={250} y2={185} />
                <Connection x1={320} y1={185} x2={450} y2={185} />
                <Connection x1={520} y1={185} x2={650} y2={135} />
                <Connection x1={520} y1={185} x2={650} y2={235} />

            </div>
        </Card>
    );
};

export default WorkflowCanvas;
