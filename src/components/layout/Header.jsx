import React from 'react';
import { Bell, Search, Settings } from 'lucide-react';

const Header = ({ title }) => {
    return (
        <header className="app-header">
            <div>
                <h2 className="text-xl font-bold text-white tracking-wide">{title}</h2>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative" style={{ position: 'relative' }}>
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b]" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                        type="text"
                        placeholder="Search alerts, IOCs..."
                        className="input-glass"
                        style={{
                            padding: '0.5rem 1rem 0.5rem 2.5rem',
                            borderRadius: '9999px',
                            width: '250px'
                        }}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button className="relative text-gray-400 hover:text-white transition-colors" style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer' }}>
                        <Bell size={20} />
                        <span style={{
                            position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px',
                            backgroundColor: 'var(--accent-red)', borderRadius: '50%'
                        }}></span>
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <Settings size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
