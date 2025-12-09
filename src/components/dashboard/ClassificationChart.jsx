import React from 'react';
import Card from '../common/Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Known / Historical', value: 75, color: '#7000ff' }, // accent-purple
    { name: 'New / Unknown', value: 25, color: '#00f0ff' }, // accent-cyan
];

const ClassificationChart = () => {
    return (
        <Card title="Alert Classification">
            <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ backgroundColor: '#0f1014', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ color: '#94a3b8', fontSize: '12px' }} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>25%</span> of alerts today are novel.
                </p>
            </div>
        </Card>
    );
};

export default ClassificationChart;
