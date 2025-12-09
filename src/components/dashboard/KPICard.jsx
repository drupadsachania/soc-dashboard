import React from 'react';
import Card from '../common/Card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const KPICard = ({ title, value, trend, trendValue, icon: Icon, color = "cyan" }) => {
    const isPositive = trend === 'up';
    const trendColor = isPositive ? 'text-[#05d5aa]' : 'text-[#ff2a6d]';
    const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight;

    const colorMap = {
        cyan: 'text-[#00f0ff] bg-[rgba(0,240,255,0.1)]',
        purple: 'text-[#7000ff] bg-[rgba(112,0,255,0.1)]',
        red: 'text-[#ff2a6d] bg-[rgba(255,42,109,0.1)]',
        green: 'text-[#05d5aa] bg-[rgba(5,213,170,0.1)]',
    };

    return (
        <Card className="relative overflow-hidden group hover:border-[rgba(255,255,255,0.2)] transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${colorMap[color]}`}>
                    <Icon size={24} />
                </div>
                {trendValue && (
                    <div className={`flex items-center gap-1 text-sm font-medium ${trendColor}`}>
                        <span>{trendValue}</span>
                        <TrendIcon size={16} />
                    </div>
                )}
            </div>

            <div>
                <h4 className="text-[#94a3b8] text-sm font-medium uppercase tracking-wider mb-1">{title}</h4>
                <div className="text-3xl font-bold text-white">{value}</div>
            </div>

            {/* Background Glow */}
            <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${color === 'cyan' ? 'bg-[#00f0ff]' : color === 'purple' ? 'bg-[#7000ff]' : 'bg-white'}`}></div>
        </Card>
    );
};

export default KPICard;
