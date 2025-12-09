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
    <aside className="app-sidebar">
      {/* Brand */}
      <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{
          width: '2rem', height: '2rem', borderRadius: '0.5rem',
          background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <ShieldAlert size={20} color="white" />
        </div>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', letterSpacing: '-0.025em' }}>
          SOC<span style={{ color: 'var(--accent-cyan)' }}>Auto</span>
        </h1>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '1.5rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <item.icon size={20} />
            <span style={{ fontWeight: 500 }}>{item.label}</span>
            {item.path === '/' && (
              <NavLink to="/" className={({ isActive }) => isActive ? "block" : "hidden"}>
                <span style={{ marginLeft: 'auto', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', boxShadow: '0 0 8px var(--accent-cyan)' }}></span>
              </NavLink>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Profile */}
      <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)' }}>
        <div className="glass-panel" style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', background: 'linear-gradient(to right, #374151, #4b5563)' }}></div>
          <div>
            <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'white' }}>Analyst</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Level 3</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
