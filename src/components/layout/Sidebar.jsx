import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  GitBranch, 
  Activity, 
  FileText, 
  ShieldAlert
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/playbooks', icon: BookOpen, label: 'Playbooks' },
    { path: '/workflows', icon: GitBranch, label: 'Workflows' },
    { path: '/health', icon: Activity, label: 'System Health' },
    { path: '/audit', icon: FileText, label: 'Audit Logs' },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[#050507] border-r border-[rgba(255,255,255,0.08)] flex flex-col z-50">
      <div className="p-6 flex items-center gap-3 border-b border-[rgba(255,255,255,0.05)]">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#7000ff] flex items-center justify-center">
          <ShieldAlert size={20} className="text-white" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-white">
          SOC<span className="text-[#00f0ff]">Auto</span>
        </h1>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group
              ${isActive 
                ? 'bg-[rgba(0,240,255,0.1)] text-[#00f0ff] border border-[rgba(0,240,255,0.2)]' 
                : 'text-[#94a3b8] hover:bg-[rgba(255,255,255,0.03)] hover:text-white'
              }
            `}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
            {item.path === '/' && (
              <span className="ml-auto w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]"></span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-[rgba(255,255,255,0.05)]">
        <div className="glass-panel p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-600"></div>
          <div>
            <p className="text-sm font-medium text-white">Analyst</p>
            <p className="text-xs text-[#94a3b8]">Level 3</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
