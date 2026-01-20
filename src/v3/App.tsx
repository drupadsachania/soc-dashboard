import React, { useState } from 'react';
import './styles/v3-theme.css';
import { OSShell } from './layout/OSShell';
import { TacticalTopBar } from './components/TacticalTopBar';
import { NavRail } from './components/NavRail';
import { ActionGate } from './components/ActionGate';

import { VanguardView } from './types/views';
import { InvestigationView } from './views/InvestigationView';
import { DashboardView } from './views/DashboardView';
import { AlertsListView } from './views/AlertsListView';
import { ThreatMapView } from './views/ThreatMapView';

export const AppV3: React.FC = () => {
    const [activeView, setActiveView] = useState<VanguardView>('INVESTIGATION');

    const handleInvestigate = (id: string) => {
        setActiveView('INVESTIGATION');
        // In a real app, we'd set activeAlertId here
    };

    const renderView = () => {
        switch (activeView) {
            case 'DASHBOARD': return <DashboardView />;
            case 'ALERTS': return <AlertsListView onInvestigate={handleInvestigate} />;
            case 'INVESTIGATION': return <InvestigationView />;
            case 'MAP': return <ThreatMapView />;
            default: return (
                <div className="h-full flex items-center justify-center text-muted-foreground font-mono text-[10px]">
                    VIEW_NOT_IMPLEMENTED: {activeView}
                </div>
            );
        }
    };

    return (
        <OSShell
            topBar={<TacticalTopBar />}
            navRail={<NavRail activeView={activeView} onNavigate={setActiveView} />}
            actionGate={activeView === 'INVESTIGATION' ? <ActionGate /> : undefined}
        >
            {renderView()}
        </OSShell>
    );
};

export default AppV3;
