import React from 'react';
import {
    BarChart2,
    ShieldAlert,
    Network,
    Play,
    Database,
    History,
    Settings,
    LayoutGrid
} from 'lucide-react';

import { VanguardView } from '../types/views';

interface NavItemProps {
    icon: React.ElementType;
    label: string;
    viewId: VanguardView;
    active?: boolean;
    onNavigate: (view: VanguardView) => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, viewId, active, onNavigate }) => (
    <button
        onClick={() => onNavigate(viewId)}
        className={`
    w-full h-16 flex flex-col items-center justify-center gap-1 transition-all relative group
    ${active ? 'text-vanguard-cyan bg-vanguard-cyan/5' : 'text-muted-foreground hover:text-vanguard-cyan hover:bg-vanguard-surface'}
  `}>
        <Icon size={20} />
        <span className="text-[8px] font-bold uppercase tracking-wider">{label}</span>
        {active && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-vanguard-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)]" />}
        <div className="absolute left-16 px-3 py-1 bg-vanguard-surface-light border border-vanguard-border text-vanguard-cyan text-[10px] uppercase font-mono hidden group-hover:block z-50 whitespace-nowrap ml-2">
            {label}
        </div>
    </button>
);

interface NavRailProps {
    activeView: VanguardView;
    onNavigate: (view: VanguardView) => void;
}

export const NavRail: React.FC<NavRailProps> = ({ activeView, onNavigate }) => {
    return (
        <div className="h-full flex flex-col">
            <NavItem icon={LayoutGrid} label="Dash" viewId="DASHBOARD" active={activeView === 'DASHBOARD'} onNavigate={onNavigate} />
            <NavItem icon={ShieldAlert} label="Alerts" viewId="ALERTS" active={activeView === 'ALERTS'} onNavigate={onNavigate} />
            <NavItem icon={ShieldAlert} label="Investigate" viewId="INVESTIGATION" active={activeView === 'INVESTIGATION'} onNavigate={onNavigate} />
            <NavItem icon={Network} label="Map" viewId="MAP" active={activeView === 'MAP'} onNavigate={onNavigate} />
            <NavItem icon={Play} label="Logic" viewId="LOGIC" active={activeView === 'LOGIC'} onNavigate={onNavigate} />
            <NavItem icon={Database} label="Data" viewId="DATA" active={activeView === 'DATA'} onNavigate={onNavigate} />

            <div className="mt-auto flex flex-col border-t border-vanguard-border">
                <NavItem icon={History} label="Audit" viewId="AUDIT" active={activeView === 'AUDIT'} onNavigate={onNavigate} />
                <NavItem icon={Settings} label="Config" viewId="CONFIG" active={activeView === 'CONFIG'} onNavigate={onNavigate} />
            </div>
        </div>
    );
};
