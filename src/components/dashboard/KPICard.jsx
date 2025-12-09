import React from 'react';
import Card from '../common/Card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const KPICard = ({ title, value, trend, trendValue, icon: Icon, color = "cyan" }) => {
    const isPositive = trend === 'up';
    const trendDetail = isPositive
        ? { color: 'var(--accent-green)', icon: ArrowUpRight }
        : { color: 'var(--accent-red)', icon: ArrowDownRight };

    const colorMap = {
        cyan: { color: 'var(--accent-cyan)', bg: 'rgba(0,240,255,0.1)' },
        purple: { color: 'var(--accent-purple)', bg: 'rgba(112,0,255,0.1)' },
        red: { color: 'var(--accent-red)', bg: 'rgba(255,42,109,0.1)' },
        green: { color: 'var(--accent-green)', bg: 'rgba(5,213,170,0.1)' },
    };

    const theme = colorMap[color] || colorMap.cyan;

    return (
        <Card className="kpi-card">
            <div className="flex justify-between items-start">
                <div className="kpi-icon-wrapper" style={{ backgroundColor: theme.bg, color: theme.color }}>
                    <Icon size={24} />
                </div>
                {trendValue && (
                    <div className="flex items-center gap-1" style={{ fontSize: '0.875rem', fontWeight: 500, color: trendDetail.color }}>
                        <span>{trendValue}</span>
                        <trendDetail.icon size={16} />
                    </div>
                )}
            </div>

            <div>
                <h4 className="kpi-label">{title}</h4>
                <div className="kpi-value">{value}</div>
            </div>
        </Card>
    );
};

export default KPICard;
