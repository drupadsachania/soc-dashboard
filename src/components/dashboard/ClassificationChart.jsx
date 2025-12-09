import React from 'react';
import Card from '../common/Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Known / Historical', value: 75, color: '#7000ff' },
    { name: 'New / Unknown', value: 25, color: '#00f0ff' },
];

const ClassificationChart = () => {
    return (
        <Card title="Alert Classification">
            <div className="h-[250px] w-full">
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
                            contentStyle={{ backgroundColor: '#0f1014', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Legend verticalAlign="bottom" height={36} iconType="circle" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
                <p className="text-sm text-[#94a3b8]">
                    <span className="text-[#00f0ff] font-bold">25%</span> of alerts today are novel.
                </p>
            </div>
        </Card>
    );
};

export default ClassificationChart;
